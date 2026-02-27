# Tutte le funzioni

### \\[...]\\

**Sintassi:** y = \\[string]\\

**Descrizione:** I passaggi che richiedono molti caratteri di escape possono usare il delimitatore \\[...]\\.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** s = Abbrev Date( datetime, &lt;format&gt; )

**Descrizione:** Restituisce una rappresentazione specifica locale abbreviata di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Abbrev Date( Today() );

```

### Abs

**Sintassi:** y = Abs( x )

**Descrizione:** Restituisce il valore assoluto di x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Abs( -5 );

```

### Add

**Sintassi:** y = x0 + x1; y = Add( x0, x1, ... )

**Descrizione:** Aggiunge tutti gli argomenti, che possono essere numeri, matrici o elenchi di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pi() + 10;

```

### Add Color Theme

**Descrizione:** Crea un nuovo tema colori personalizzato e lo registra nel selettore temi.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Esempio 2**

```jsl

Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Add Custom Functions

**Sintassi:** Add Custom Functions({f1, f2, ...} | f)

**Descrizione:** Definisce un elenco di funzioni personalizzate da usare negli script e nell’editor delle formule. Il comando aggiunge anche l’elenco all’ambiente.

**JMP Versione aggiunta:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### Add To

**Sintassi:** y += x; Add To( y, x )

**Descrizione:** Aggiunge un valore a una variabile o a un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = 1;
ex += 2;
ex;

```

### Add Vectors BLAS

**Sintassi:** z = Add Vectors BLAS( x, y, alpha )

**JMP Versione aggiunta:** 17

```jsl

x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### Alignment Cell Box

**Sintassi:** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**Descrizione:** Restituisce un riferimento in un riquadro di visualizzazione che contiene il contenuto della riga (o della colonna) contenuto all&apos;interno di un riquadro della griglia di allineamento.

**JMP Versione aggiunta:** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Sintassi:** y = Alignment Grid Box( alignment cell boxes )

**Descrizione:** Restituisce un riferimento in un riquadro di visualizzazione che può contenere riquadri di allineamento.

**JMP Versione aggiunta:** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Sintassi:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Descrizione:** Restituisce un riferimento in un riquadro di visualizzazione che contiene più elementi all&apos;interno di ogni cella contenuta in un riquadro della griglia di allineamento.

**JMP Versione aggiunta:** 19

```jsl


New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### All

**Sintassi:** y = All( x, ... )

**Descrizione:** Restituisce 1 se tutti gli elementi sono diversi da zero, in caso contrario zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

All( [1 2 3] );

```

### Alpha Shape

**Sintassi:** ashape = Alpha Shape(Triangulation)

**Descrizione:** Restituisce la forma alfa per la triangolazione specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

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

### Any

**Sintassi:** y = Any( x, ... )

**Descrizione:** Restituisce 1 se un elemento qualsiasi è diverso da zero, in caso contrario zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Any( [1 0 2] );

```

### Arc

**Sintassi:** Arc( left, top, right, bottom, startAngle, endAngle )

**Descrizione:** Disegna un arco di un ovale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arc Finder

**Sintassi:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Descrizione:** Trova gli archi nei punti di dati e crea una nuova colonna che identifica gli archi.

**JMP Versione aggiunta:** 14

```jsl


dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
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
dt << Color or Mark by Column( :Arc Number );
dt << Graph Builder(
	Size( 1539, 921 ),
	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),
	Elements( Points( X, Y, Legend( 6 ) ) )
);

```

### ArcCosH

**Sintassi:** y = ArcCosH( x )

**Descrizione:** Restituisce il coseno iperbolico inverso di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcCosH( 1 );

```

### ArcCosine

**Sintassi:** y = ArcCosine( x )

**Descrizione:** Restituisce il coseno trigonometrico inverso di x, dove x è nel range [-1, 1] e il risultato è nel range [0, Pi()].

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcCosine( 0.5 );

```

### ArCos

**Sintassi:** y = ArcCosine( x )

**Descrizione:** Restituisce il coseno trigonometrico inverso di x, dove x è nel range [-1, 1] e il risultato è nel range [0, Pi()].

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcCosine( 0.5 );

```

### ArcSine

**Sintassi:** y = ArcSine( x )

**Descrizione:** Restituisce il seno trigonometrico inverso di x, dove x è nel range [-1, 1] e il risultato è nel range [-Pi()/2, Pi()/2].

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcSine( 0.5 );

```

### ArcSinH

**Sintassi:** y = ArcSinH( x )

**Descrizione:** Restituisce il seno iperbolico inverso di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcSinH( 1 );

```

### ArcTan

**Sintassi:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Descrizione:** Restituisce la tangente trigonometrica inversa di x1/x2, dove il risultato è nel range [-Pi()/2, Pi()/2].

**JMP Versione aggiunta:** prima della versione 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTangent

**Sintassi:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Descrizione:** Restituisce la tangente trigonometrica inversa di x1/x2, dove il risultato è nel range [-Pi()/2, Pi()/2].

**JMP Versione aggiunta:** prima della versione 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTanH

**Sintassi:** y = ArcTanH( x )

**Descrizione:** Restituisce la tangente iperbolica inversa di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcTanH( 0.5 );

```

### Arg

**Sintassi:** y = Arg( x, i )

**Descrizione:** Restituisce l&apos;i-esimo argomento dell&apos;espressione valutata o Empty() se non esiste nessun i-esimo argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Sintassi:** y = Arg Expr( expr, i )

**Descrizione:** Restituisce l&apos;iesimo argomento dell&apos;espressione o Empty() se non esiste alcun iesimo argomento. Questa funzione è obsoleta. Al suo posto usare Arg().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Esempio 2**

```jsl

// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### ARIMA Forecast

**Sintassi:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Descrizione:** Restituisce un vettore di valori previsti per la colonna dtcol nel range determinato dagli argomenti from e to. L&apos;argomento length specifica una porzione della colonna per la funzione da utilizzare. L&apos;argomento model corrisponde a messaggi che sono inviati alla piattaforma Serie storica per stimare un modello. L&apos;argomento estimates corrisponde al figlio di un messaggio Carica modelli risultato di un modello singolo. Tipicamente, il valore from è tra 1 e il valore to, inclusi. Tuttavia, se from<=0 e from<=to, parte dei risultati sono previsioni filtrate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
ARIMA Forecast(
	:Steel Shipments,
	96,
	ARIMA( 1, 0, 1 ),
	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),
	Intercept( 6466.03264802329 )},
	1,
	2
);

```

### Arrhenius

**Sintassi:** y = Arrhenius( tempC )

**Descrizione:** Restituisce la componente non specifica della relazione di Arrhenius che è quindi moltiplicata per l&apos;energia di attivazione dell&apos;equazione di Arrhenius. Restituisce 11604.5181215503 / (tempC + 273.15).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**Sintassi:** tempC = Arrhenius Inv( y )

**Descrizione:** Restituisce l&apos;inverso della funzione di Arrhenius che è (11604.5181215503 / y) - 273.15.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Arrhenius Inv( 100 );

```

### Arrow

**Sintassi:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Descrizione:** Disegna una linea con una freccia o una sequenza di dette linee.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### ArSin

**Sintassi:** y = ArcSine( x )

**Descrizione:** Restituisce il seno trigonometrico inverso di x, dove x è nel range [-1, 1] e il risultato è nel range [-Pi()/2, Pi()/2].

**JMP Versione aggiunta:** prima della versione 14

```jsl

ArcSine( 0.5 );

```

### As Boolean

**Sintassi:** b = As Boolean( x )

**Descrizione:** Valuta un’espressione e restituisce un valore booleano.

**JMP Versione aggiunta:** 14

```jsl

x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As C Expr

**Sintassi:** y = As C Expr( x )

**Descrizione:** Restituisce un&apos;espressione equivalente nel linguaggio di programmazione C.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Column

**Sintassi:** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Descrizione:** Accede alla colonna specifica nella tabella di dati specificata o corrente. Viene generato un errore se non viene trovata la colonna o la tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Sintassi:** y = As Constant( x )

**Descrizione:** Valuta un&apos;espressione per creare un valore costante che non cambi dopo essere stato calcolato

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**Esempio 2**

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

**Esempio 3**

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

**Sintassi:** dt = As Date( datetime )

**Descrizione:** Restituisce un valore di data e ora contrassegnato internamente come data per scopi di output.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Today() );

```

### As Global

**Sintassi:** y = ::name; y = As Global( name )

**Descrizione:** Accede alla variabile globale specificata o genera un errore se non esiste la variabile globale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As JavaScript Expr

**Sintassi:** y = As JavaScript Expr( x )

**Descrizione:** Restituisce un&apos;espressione equivalente nel linguaggio di programmazione JavaScript.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Sintassi:** y = As JSON Expr( x )

**Descrizione:** Restituisce una rappresentazione JSON (JavaScript Object Notation) dell&apos;espressione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As List

**Sintassi:** y = As List( matrix )

**Descrizione:** Restituisce la rappresentazione dell&apos;elenco di una matrice. Le matrici a più colonne sono convertite in un elenco di elenchi, uno per riga, come previsto dall&apos;operatore Matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**Sintassi:** y = As Name( s )

**Descrizione:** Converte la stringa in un nome o un elenco di stringhe in un elenco di nomi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Sintassi:** asns = As Namespace( ns )

**Descrizione:** Accede allo spazio dei nomi specificato o genera un errore se quello spazio dei nomi non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Python Expr

**Sintassi:** y = As Python Expr( x )

**Descrizione:** Restituisce un&apos;espressione equivalente nel linguaggio di programmazione Python.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Root

**Sintassi:** y = :::name; y = As Root( name )

**Descrizione:** Accede alla variabile di scoping della radice specificata o genera un errore se tale variabile non esiste.

**JMP Versione aggiunta:** 15

```jsl

::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Row State

**Sintassi:** rs = As Row State( x )

**Descrizione:** Converte un numero in un valore di stato della riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16
		 + (:age - 11) * 256
	)
);

```

### As SAS Expr

**Sintassi:** y = As SAS Expr( x )

**Descrizione:** Restituisce una versione dell&apos;espressione più idonea per un passo di DATA SAS. Il codice deve essere impaginato con testo a capo in una chiamata PROC DS2.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Scoped

**Sintassi:** y = namespace:variable; y = As Scoped( namespace, variable )

**Descrizione:** Accede alla variabile di scoping specificata o genera un errore se tale variabile non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### As SQL Expr

**Sintassi:** y = As SQL Expr( x, &lt;style&gt; )

**Descrizione:** Restituisce una stringa che contiene l&apos;espressione convertita in sintassi SQL valida per l&apos;uso in un&apos;istruzione SQL Select.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### As Table

**Sintassi:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**Descrizione:** Converte una matrice in una tabella di dati. Si può usare l&apos;opzione invisible per evitare di visualizzare la tabella.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Assign

**Sintassi:** y = x; Assign( y, x )

**Descrizione:** Assegna un valore a una variabile o a un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

{ex1, ex2} = {Pi(), 1};
ex1 + ex1;

```

### Associative Array

**Sintassi:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Descrizione:** Crea un array associativo, noto anche come dizionario o mappa hash. Nel form a due argomenti, chiavi e valori devono essere un elenco, una matrice o una colonna di una tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### ATan

**Sintassi:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Descrizione:** Restituisce la tangente trigonometrica inversa di x1/x2, dove il risultato è nel range [-Pi()/2, Pi()/2].

**JMP Versione aggiunta:** prima della versione 14

```jsl

4 * ArcTangent( 1 );

```

### B Spline Coef

**Sintassi:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descrizione:** Restituisce la matrice dei coefficienti B-Spline. Internal Knot Grid è il numero di punti del nodo desiderati sulla base dei percentili di x o un vettore che specifica i punti del nodo interni. Il parametro facoltativo degree specifica il grado di B-Spline con una impostazione predefinita di 3. Il parametro facoltativo KnotEndPoints utilizza una matrice 2x1 contente posizioni [inferiori, superiori] per i nodi sul limite. I punti finali del nodo hanno come impostazione predefinita il minimo e il massimo di x. Il secondo esempio dimostra come i coefficienti di B-Spline possono essere usati come matrice del piano in un modello lineare.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**Esempio 2**

```jsl

xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### Back Color

**Sintassi:** Back Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore di sfondo per la modalità di cancellazione nella funzione Text().

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Beep

**Sintassi:** Beep()

**Descrizione:** Produce un segnale acustico di avviso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Beep();

```

### Best Partition

**Sintassi:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Descrizione:** Determina il raggruppamento ottimale (funzione sperimentale).

**JMP Versione aggiunta:** prima della versione 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Beta

**Sintassi:** z = Beta( x, y )

**Descrizione:** Restituisce la funzione beta di x e y, definita come Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Beta( 5, 4 );

```

### Beta Binomial Distribution

**Sintassi:** cumprob = Beta Binomial Distribution( k, p, n, delta )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione beta-binomiale sia minore o uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

p = 0.5;
n = 25;
delta = 0;
New Window( "Example: BetaBinomial Distribution",
	y = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line( k, k + 1, Beta Binomial Distribution( k, p, n, delta ) );
			V Line(
				k + 1,
				Beta Binomial Distribution( k, p, n, delta ),
				Beta Binomial Distribution( k + 1, p, n, delta )
			);
		);
		Text( {15, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );
		Text( {15, 0.04}, "Dispersion=", Round( delta, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, p, y << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( -0.01, 0.99, delta, y << reshow ), Text Box( " Dispersion" ) )
);

```

### Beta Binomial Probability

**Sintassi:** prob = Beta Binomial Probability( k, p, n, delta )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione beta-binomiale sia uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

n = 25;
p = 0.5;
delta = 0;
New Window( "Binomial and BetaBinomial Probabilities",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= n, x++,
			Pen Color( "red" );
			V Line( x, 0, Binomial Probability( p, n, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Beta Binomial Probability( x, p, n, delta ) );
		);
		Text( {1, 0.25}, "p=", Round( p, 8 ), " Dispersion=", Round( delta, 8 ) );
		Text( {0, 0.28}, "Red = Binomial, Blue = BetaBinomial" );
	),
	H List Box( Slider Box( 0.2, 0.8, p, clty << reshow ), Text Box( " p" ) ),
	H List Box(
		Slider Box( -0.05, 0.999, delta, clty << reshow ),
		Text Box( " Dispersion" )
	)
);

```

### Beta Binomial Quantile

**Sintassi:** q = Beta Binomial Quantile( p, n, delta, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione beta-binomiale ( p, n, delta ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
delta = 0;
New Window( "Example: BetaBinomial Quantile",
	qbinexy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta )
			);
			V Line(
				qbinexk + 1,
				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta ),
				Beta Binomial Distribution( qbinexk + 1, qbinexp, Round( qbinexn ), delta )
			);
		);
		Pen Color( "blue" );
		V Line( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ), 0, 1 );
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
			Round( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ) )
		);
	),
	H List Box( Slider Box( 0, 0.99, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),
	H List Box(
		Slider Box( -0.01, 0.99, delta, qbinexy << reshow ),
		Text Box( " Dispersion" )
	),
	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) )
);

```

### Beta Density

**Sintassi:** y = Beta Density( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la densità in q per una distribuzione beta, dove q è nell&apos;intervallo da theta a theta + sigma, alpha e beta sono parametri della forma, theta e sigma sono rispettivamente parametri della soglia e del range.

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Density",
	y = Graph Box(
		Y Scale( 0, 2.5 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Density( q, alpha, beta ), q );
		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Distribution

**Sintassi:** p = Beta Distribution( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione beta sia minore di q, dove alpha e beta sono parametri della forma etheta e sigma sono rispettivamente parametri della soglia e del range.

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Distribution( q, alpha, beta ), q );
		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Quantile

**Sintassi:** q = Beta Quantile( p, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione beta, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p, dove alpha e beta sono parametri della forma e theta e sigma sono rispettivamente parametri della soglia e del range.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Beta Quantile( 0.95, 2, 5 );

```

### Binomial Distribution

**Sintassi:** cumprob = Binomial Distribution( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale sia minore o uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

p = 0.5;
n = 30;
New Window( "Example: Binomial Distribution",
	y = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 31 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line( k, k + 1, Binomial Distribution( p, n, k ) );
			V Line(
				k + 1,
				Binomial Distribution( p, n, k ),
				Binomial Distribution( p, n, k + 1 )
			);
		);
		Text( {20, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );
	),
	H List Box( Slider Box( 0, 1, p, y << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 30, n, y << reshow ), Text Box( " n" ) )
);

```

### Binomial Probability

**Sintassi:** prob = Binomial Probability( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale sia uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cltp = 0.03;
cltn = 30;
New Window( "Example: Binomial Probability and Central Limit Theorem",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( cltk = 0, cltk <= cltn, cltk++,
			V Line( cltk, 0, Binomial Probability( cltp, cltn, cltk ) )
		);
		Text( {15, 0.09}, "n=", Round( cltn ), " p=", Round( cltp, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, cltp, clty << reshow ), Text Box( " p" ) ),
	H List Box(
		Slider Box( 0, 2000, cltn, clty << reshow ),
		Text Box( " n ( Drag me and see Central Limit Theorem )" )
	)
);

```

### Binomial Quantile

**Sintassi:** q = Binomial Quantile( p, n, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione binomiale( p, n ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
New Window( "Example: Binomial Quantile",
	qbinexy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk )
			);
			V Line(
				qbinexk + 1,
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk ),
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ), 0, 1.0 );
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" q=",
			Round( qbinexq, 2 ),
			" quantile=",
			Round( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ) )
		);
	),
	H List Box( Slider Box( 0, 1, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),
	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) )
);

```

### Blend Colors

**Sintassi:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Descrizione:** Unisce due colori con una percentuale e uno spazio colore configurabili.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Blend Colors( "black", "white", 0.25 );

```

**Esempio 2**

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

**Esempio 3**

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

**Esempio 4**

```jsl

Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Esempio 5**

```jsl

Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Esempio 6**

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
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

**Esempio 7**

```jsl

c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
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
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Blob MD5

**Sintassi:** blobResult = Blob MD5( blob )

**Descrizione:** Crea un BLOB (Binary Large OBject) risultante a 16 byte da un BLOB di origine. Il BLOB a 16 byte è la checksum MD5 (o l&apos;oggetto hash) del BLOB di origine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Sintassi:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Descrizione:** Crea un nuovo blob da un range secondario di byte del blob dato. L&apos;argomento offset è basato su zero e quindi il primo byte si trova a offset zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Blob To Char

**Sintassi:** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Descrizione:** Crea una stringa di caratteri da un BLOB (Binary Large OBject), utilizzando la codifica specificata. Le codifiche supportate comprendono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp e ascii~hex.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Sintassi:** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Descrizione:** Crea una matrice convertendo in numeri i byte nel blob. type può essere "int", "uint" o "float". bytesEach può essere 1, 2, 4 o 8. endian indica se il primo byte è il più significativo ("big") o il meno significativo ("little"); "native" indica il formato nativo del computer.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Border Box

**Sintassi:** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**Descrizione:** Restituisce un riquadro di visualizzazione per aggiungere spazio intorno al riquadro di visualizzazione dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Cox Inverse Transform

**Sintassi:** x = Box Cox Inverse Transform( y, lambda )

**Descrizione:** Restituisce la trasformazione inversa Box-Cox dell&apos;argomento.

**JMP Versione aggiunta:** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Sintassi:** y = Box Cox Transform( x, lambda )

**Descrizione:** Restituisce la trasformazione Box-Cox dell&apos;argomento.

**JMP Versione aggiunta:** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Box Plot Seg

**Sintassi:** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**Descrizione:** Restituisce un segmento di visualizzazione che rappresenta un box plot basato sui valori x e y passati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

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

### Build Information

**Sintassi:** y = Build Information()

**Descrizione:** Restituisce data e ora di build, versione o debug build e nome del prodotto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Build Information();

```

### Busy Light

**Sintassi:** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**Descrizione:** Crea un&apos;immagine in rotazione per indicare un processo in corso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Sintassi:** y = Button Box( title, script )

**Descrizione:** Restituisce una finestra di visualizzazione per mostrare un pulsante con titolo. L&apos;argomento script viene eseguito quando si fa clic sul pulsante.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Sintassi:** y = Calendar Box()

**Descrizione:** Restituisce un riquadro di visualizzazione contenente un controllo di tipo calendario. Il calendario supporta la singola selezione di una data con ora facoltativa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Calendar Box Example", Calendar Box() );

```

### Caption

**Sintassi:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Descrizione:** Mostra una finestra didascalia al percorso specificato da {h, v} e contenente il testo specificato dall&apos;argomento text. L&apos;argomento Delayed( seconds ) imposta il tempo di attesa in secondi prima di ogni didascalia.

**JMP Versione aggiunta:** prima della versione 14

**Didascalia formattata**

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

**Rimuove la didascalia**

```jsl

Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

### CAS Connect

**Sintassi:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Descrizione:** Si connette a un nuovo server CAS. CAS Connect utilizza gli argomenti URL, Nome utente, Password e facoltativamente Richiedi e Sessione. Richiedi può essere Se necessario, Sempre o Mai. URL, nome utente e password possono essere omessi se l&apos;argomento di Richiedi è Se necessario o Sempre. Il valore di default per Richiedi è Mai. L’argomento Sessione può essere utilizzato per riconnettersi a una sessione CAS esistente. La sessione deve essere valida per l&apos;URL, il nome utente e la password utilizzati nella connessione. L&apos;argomento facoltativo Certificati è utile per fornire certificati affidabili per connessioni https a CAS. L&apos;argomento facoltativo Verifica certificati o Nessuna verifica certificato è utile per accettare temporaneamente certificati autofirmati. L&apos;argomento facoltativo Proxy Server è utile per fornire un host proxy in un ambiente proxy. L&apos;argomento facoltativo Utente proxy è utile per fornire informazioni su utente e password per un ambiente proxy. L&apos;argomento facoltativo Ignora proxy è utilizzato per ignorare il proxy per alcuni host. L&apos;argomento facoltativo Timeout imposta un valore di timeout per le operazioni di connessione a CAS. L&apos;argomento facoltativo Metodo di autorizzazione specifica come JMP si connette a CAS. Dipende dal deployment CAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** CAS Delete Table(tablename, &lt;remove&gt;)

**Descrizione:** Questa azione elimina la tabella del filesystem. La tabella in memoria non è interessata. Specificando Nessuna info si eliminano gli errori per tabelle non esistenti. Specificando remACs si rimuovono i controlli di accesso per una tabella. Specificando Rimuovi si rimuove anche la tabella dalla memoria.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Sintassi:** CAS Disconnect()

**Descrizione:** Disconnette da un server CAS e facoltativamente termina la sessione. Per impostazione predefinita, la sessione termina quando ci si disconnette.

**JMP Versione aggiunta:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**Sintassi:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Descrizione:** Esporta una tabella in un server CAS. jmp_data_table è la tabella di dati di JMP da esportare mentre cas_libref e cas_dataset sono le posizioni di destinazione sul server CAS. L&apos;argomento denominato facoltativo è Save(1|0). Quando una tabella viene esportata in CAS non viene mantenuta nel file system CAS a meno che si utilizzi l&apos;opzione Salva. La maggior parte delle operazioni CAS avviene in memoria.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Sintassi:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Descrizione:** Ottiene un elenco di data set CAS disponibili. Questi data set sono presenti nel file system CAS. L&apos;argomento facoltativo limita l&apos;elenco dei data set alla libreria CAS. Se non viene utilizzato alcun argomento, l&apos;elenco dei data set contiene il nome del data set completo (libreria.dataset). Se si utilizza l&apos;argomento, l&apos;elenco dei data set è un elenco di nomi di data set.

**JMP Versione aggiunta:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );

```

### CAS Get Libraries

**Sintassi:** y = CAS Get Libraries()

**Descrizione:** Ottiene un elenco di librerie CAS disponibili.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Sintassi:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Descrizione:** Importa una tabella da un server CAS. Gli argomenti facoltativi sono Invisible(0|1), Private(0|1) e UseLabelsForVarNames(0|1).

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Sintassi:** CAS Is Connected

**Descrizione:** Restituisce 1 se esiste una connessione attiva al server CAS, in caso contrario 0.

**JMP Versione aggiunta:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Sintassi:** CAS Remove Table(tablename, &lt;delete&gt;)

**Descrizione:** Questa operazione ignora la tabella in memoria. Il file creato con l&apos;operazione di salvataggio non è coinvolto. Se si specifica l&apos;eliminazione, la tabella sarà eliminata anche dal file system.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Sintassi:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Descrizione:** Converte il testo JSON di una tabella CAS SAS in una tabella di dati JMP.

**JMP Versione aggiunta:** 15

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

**Sintassi:** CAS Terminate Sessions

**Descrizione:** Termina tutte le sessioni CAS di proprietà dell&apos;utente corrente.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Cauchy Density

**Sintassi:** y = Cauchy Density( q, &lt;center&gt;, &lt;scale&gt; )

**Descrizione:** Restituisce la densità a q di una distribuzione di Cauchy con centro mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** p = Cauchy Distribution( q, &lt;center&gt;, &lt;scale&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita di Cauchy sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** q = Cauchy Quantile( p, &lt;center&gt;, &lt;scale&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione di Cauchy, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** {QuantVec, CumProbVec} = CDF( Y )

**Descrizione:** Restituisce valori della funzione di distribuzione della probabilità cumulativa empirica per il vettore o l&apos;elenco Y. La probabilità cumulativa è la proporzione di valori dei dati minore o uguale alla voce corrispondente immessa nel vettore QuantVec.

**JMP Versione aggiunta:** prima della versione 14

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
			H Line( Quant[i - 1], Quant[i], CumProb[i] );
			V Line( Quant[i - 1], CumProb[i - 1], CumProb[i] );
		);
		i = N Row( Quant );
		V Line( Quant[i], CumProb[i], 1 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Ceiling

**Sintassi:** y = Ceiling( x )

**Descrizione:** Restituisce il più piccolo numero intero che sia maggiore di o uguale a x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ceiling( 1.2 );

```

### Char

**Sintassi:** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Descrizione:** Restituisce una rappresentazione di x come stringa di caratteri, utilizzando la larghezza massima w e le posizioni decimali d se l&apos;argomento x è numerico. <<FullPrecision scrive valori numerici utilizzando tutta la precisione disponibile.

**JMP Versione aggiunta:** prima della versione 14

**Precisione completa**

```jsl

Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**Semplici**

```jsl

Char( Pi(), 10, 4 );

```

**Usa locale**

```jsl

Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Sintassi:** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Descrizione:** Crea un BLOB (Binary Large OBject) da una stringa di caratteri , utilizzando la codifica specificata. Le codifiche supportate comprendono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, euc-jp e ascii~hex.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Sintassi:** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Descrizione:** Restituisce il testo esadecimale corrispondente al valore e codifica specificati, che possono essere un numero, una stringa o un blob. Se il valore è un numero, si utilizza la codifica IEEE 754 a 64 bit a meno che sia indicato l&apos;argomento opzionale, "integer". Le codifiche supportate sono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis e euc-jp.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Char To Path

**Sintassi:** m = Char To Path( pathText )

**Descrizione:** Converte la specifica di percorso dalla forma alfanumerica alla forma matriciale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Check Box

**Sintassi:** y = Check Box( {item, ...}, &lt;script&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una o più caselle di controllo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### ChiSquare Density

**Sintassi:** p = ChiSquare Density( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione del chi-quadrato con gradi di libertà df.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cdedf = 2;
New Window( "Example: ChiSquare Density",
	cdey = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Density( cdeq, cdedf ), cdeq );
		Text( {7, 0.35}, "df=", Round( cdedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdedf, cdey << reshow ) )
);

```

### ChiSquare Distribution

**Sintassi:** p = ChiSquare Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione del chi-quadrato sia minore di q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cdidf = 2;
New Window( "Example: ChiSquare Distribution",
	cdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Distribution( cdiq, cdidf ), cdiq );
		Text( {1, 0.9}, "df=", Round( cdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdidf, cdiy << reshow ) )
);

```

### ChiSquare Log CDistribution

**Sintassi:** y = ChiSquare Log CDistribution( x, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione del 1 - chi-quadrato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

clcdidf = 2;
New Window( "Example: ChiSquare Log CDistribution",
	clcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log CDistribution( clcdiq, clcdidf ), clcdiq );
		Text( {1, -0.9}, "df=", Round( clcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, clcdidf, clcdiy << reshow ) )
);

```

### ChiSquare Log Density

**Sintassi:** y = ChiSquare Log Density( x, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della densità di probabilità del chi-quadrato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cldedf = 1;
New Window( "Example: ChiSquare Log Density",
	cldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Density( cldeq, cldedf ), cldeq );
		Text( {7, -0.35}, "df=", Round( cldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cldedf, cldey << reshow ) )
);

```

### ChiSquare Log Distribution

**Sintassi:** y = ChiSquare Log Distribution( x, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione del chi-quadrato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cldidf = 2;
New Window( "Example: ChiSquare Log Distribution",
	cldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Distribution( cldiq, cldidf ), cldiq );
		Text( {1, -0.9}, "df=", Round( cldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, cldidf, cldiy << reshow ) )
);

```

### ChiSquare Noncentrality

**Sintassi:** nc = ChiSquare Noncentrality( x, df, prob )

**Descrizione:** Restituisce il parametro di non centralità nc tale che prob è uguale alla probabilità che una variabile casuale con distribuzione del chi-quadrato e gradi di libertà df sia minore di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: ChiSquare Noncentrality",
	chincgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ), q );
	)
);
ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**Sintassi:** q = ChiSquare Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione del chi-quadrato, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ChiSquare Quantile( 0.15, 5 );

```

### Chol Update

**Sintassi:** L2 = Chol Update( L, V, C )

**Descrizione:** Restituisce la radice di Cholesky aggiornata di A+V*C*V&apos; dove C è una matrice simmetrica m per m e V è una matrice n per m. L&apos;argomento L deve essere la radice di Cholesky di una matrice A (n per n).

**JMP Versione aggiunta:** prima della versione 14

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
exAcholnew_test = Chol Update( exAchol, exV, exC );

/* Results are the same */
Show( exAcholnew_test );
Show( exAcholnew );

```

### Cholesky

**Sintassi:** L = Cholesky( A )

**Descrizione:** Restituisce la scomposizione di Cholesky di una matrice positiva semidefinita. L è una matrice triangolare inferiore tale che L*L` = A.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cholesky( [1 2, 2 13] );

```

### Choose

**Sintassi:** y = Choose( i, expr1, expr2, ..., exprElse )

**Descrizione:** Valuta e restituisce l&apos;i-esimo argomento expr o l&apos;argomento exprElse se non esiste alcun i-esimo argomento expr.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Choose Closest

**Sintassi:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Descrizione:** Seleziona la stringa più vicina entro le regole specificate e la restituisce. 

Per impostazione predefinita, le maiuscole/minuscole vengono ignorate; utilizzare l&apos;opzione Ignora maiuscole/minuscole per specificare.

Per impostazione predefinita, i caratteri non stampabili vengono ignorati; utilizzare l&apos;opzione Ignora non stampabili per specificare.

Per impostazione predefinita, gli spazi vengono ignorati; utilizzare l&apos;opzione Ignora spazi per specificare.

Per impostazione predefinita, non sono consentite modifiche alfanumeriche per trovare una corrispondenza.

	Utilizzare l&apos;opzione Conteggio max modifiche per controllare il numero di modifiche che è possibile apportare.

	Utilizzare l&apos;opzione Rapporto max modifiche per controllare la percentuale di modifiche consentite (in termini di caratteri nella stringa originale).

	Entrambe le impostazioni vengono applicate solo se specificate.

Per impostazione predefinita, le stringhe più corte di 3 caratteri non verranno associate; utilizzare l&apos;opzione Lunghezza min stringa per specificare una lunghezza diversa.

Stringhe non associate

	Per impostazione predefinita, se nessuna stringa canonica corrisponde alle regole date, viene restituita la stringa di origine.

	Utilizzare l&apos;opzione Sostituisci non associate per specificare se la stringa di origine verrà restituita.

	Utilizzare l&apos;opzione Non associata per specificare il valore da restituire.

**JMP Versione aggiunta:** 15

**Consenti modifiche**

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**Mantieni punteggiatura**

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

**Non associata**

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

**Scegli tra le stringhe, nessuna modifica**

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

### Circle

**Sintassi:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Descrizione:** Disegna una circonferenza con centro in {x, y}. Il raggio può essere specificato come un numero intero basato sull&apos;asse verticale o come un numero di pixel. Un raggio in pixel crea una circonferenza che non cambia dimensione al variare dell&apos;asse verticale. Si possono ripetere gli argomenti in qualsiasi ordine per disegnare più circonferenze. Se si vuole usare il comando "FILL", deve essere l&apos;ultimo; questo comando riempie le circonferenze con il colore prescelto invece di disegnarle nel colore della penna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
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

**Sintassi:** nsexists = Class Exists( class name )

**Descrizione:** Restituisce 1 se esiste la classe specificata dall&apos;argomento name. Altrimenti, restituisce 0.

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
clexists = Class Exists( cl );
Show( clexists );
cl << Delete;
Delete Classes( "complex" );

```

### Clear Global Window Handler

**Sintassi:** Clear Global Window Handler()

**Descrizione:** Cancella un gestore di finestre precedentemente impostato da Imposta gestore finestre globali.

**JMP Versione aggiunta:** 17

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

**Sintassi:** Clear Globals( &lt; varname, ... &gt; )

**Descrizione:** Cancella i valori di tutti i simboli globali al momento definiti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Clear Globals();

```

### Clear Log

**Sintassi:** Clear Log()

**Descrizione:** Svuota il log.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Clear Log();

```

### Clear Symbols

**Sintassi:** Clear Symbols( &lt; varname, ... &gt; )

**Descrizione:** Cancella i valori di tutti i simboli al momento definiti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Clear Symbols();

```

### Clipboard Capture

**Sintassi:** clp = Clipboard Capture( box &lt;&lt; Copy )

**Descrizione:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP Versione aggiunta:** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Close

**Sintassi:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Descrizione:** Chiude la tabella di dati referenziata dal primo argomento, che per impostazione predefinita punta alla tabella di dati corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Il secondo argomento è utilizzato per salvare la tabella di dati. Utilizzare un&apos;estensione del file appropriata nel percorso per salvare le tabelle di dati in formato non JMP. Specificando NoSave non verrà richiesto di salvare o di ignorare le modifiche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Sintassi:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**Descrizione:** Chiude tutte le risorse aperte di un tipo specifico: tabelle di dati, journal o report.



Saranno chiuse solo le finestre nel progetto corrente (o in nessun progetto se non si sta eseguendo lo script in un progetto). Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Close Database Connection

**Sintassi:** Close Database Connection(databaseConnectionHandle)

**Descrizione:** Chiude la connessione al database restituita da Crea connessione al database

**JMP Versione aggiunta:** prima della versione 14

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Close Log

**Sintassi:** Close Log()

**Descrizione:** Chiude la finestra di log

**JMP Versione aggiunta:** prima della versione 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Col At

**Sintassi:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Descrizione:** Restituisce il valore di col nella posizione della riga index all&apos;interno del gruppo byVar. Le righe in cui l&apos;espressione skip missing ha un valore mancante non sono incluse nell&apos;indicizzazione.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Box

**Sintassi:** y = Col Box( title, boxes )

**Descrizione:** Restituisce una casella di colonna costituita dai riquadri di visualizzazione indicati.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la somma cumulativa per la riga corrente. Le variabili BY non devono essere preordinate.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Cumulative Sum for each Sex",
	Formula( Col Cumulative Sum( :height, :sex ) )
);
dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",
	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Interpolate

**Sintassi:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Descrizione:** Restituisce un valore interpolato all&apos;interno di yCol, corrispondente alla posizione di v con xCol]. Values outside the range of xCol mancanti a meno che extrapolate non sia attivo, nel qual caso verrà restituito il valore yCol più prossimo.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col List Box

**Sintassi:** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una casella di riepilogo per la selezione delle colonne di una tabella di dati. Usare il messaggio <<Modeling Type per consentire tipi di modellizzazione speciali o per limitare i tipi consentiti. Il valore predefinito "Any" consentirà qualsiasi colonna con un tipo di modellizzazione classico ("Continuous", "Nominal", "Ordinal").

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Max

**Sintassi:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore massimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che le valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Sintassi:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore massimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che le valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Sintassi:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la media campione tra le righe in una colonna. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**Esempio 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**Esempio 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Sintassi:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la mediana specificata tra le righe in una colonna. L&apos;ordinamento è memorizzato internamente nella cache per consentire l&apos;efficacia di valutazioni multiple.

**JMP Versione aggiunta:** 15

**Esempio 1**

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

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Sintassi:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore minimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Sintassi:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore minimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Sintassi:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la moda campionaria tra le righe in una colonna selezionando la più piccola nel caso di più mode. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una formula o in una funzione For Each Row() di colonna.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Sintassi:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce la media mobile su un dato intervallo in base alla riga corrente. Per il moltiplicatore del peso, 1 significa ponderazione uguale, 0 significa ponderazione lineare e altri valori agiscono da moltiplicatore di ponderazione esponenziale. Le variabili BY non devono essere preordinate.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Moving Average for each Sex",
	Formula( Col Moving Average( :height, :sex ) )
);
dt << New Column( "Col Moving Average for each Sex grouped by Excluded",
	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Missing

**Sintassi:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il numero di valori mancanti tra le righe in una colonna. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti opzionali byVar specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**Sintassi:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descrizione:** Restituisce il numero di valori univoci in una colonna. Se vengono richiesti valori mancanti, tutti i codici dei valori mancanti vengono contati come un unico valore.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Sintassi:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce il numero di valori non mancanti tra le righe in una colonna. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Quantile

**Sintassi:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce il quantile specificato tra le righe in una colonna. L&apos;ordinamento è memorizzato internamente nella cache per consentire l&apos;efficacia di valutazioni multiple.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Quantile for each Sex",
	Formula( Col Quantile( :height, 0.5, :sex ) )
);
dt << New Column( "Col Quantile for each Sex grouped by Excluded",
	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) )
);

```

### Col Rank

**Sintassi:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descrizione:** Restituisce il rango, che va da 1 come il più basso, con tie-break ("ridistribuzione" di valori uguali) dato dall&apos;ordine delle righe, a meno che non sia specificato dall&apos;argomento <<Tie. "media" produce la media per i ranghi pari e "minimo" produce il più basso dei ranghi pari. Con "riga" e "arbitrario" ogni riga ha un rango univoco.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Sintassi:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descrizione:** Restituisce uno score intero per ogni valore univoco, ordinato in base alle proprietà delle colonne rilevanti.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Sintassi:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Descrizione:** Restituisce la posizione di questa riga all&apos;interno del suo gruppo byVar, corretta da skip missing e dai parametri sequence.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Shuffle

**Sintassi:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**Descrizione:** Restituisce un numero intero casuale compreso tra 1 e il numero di righe della tabella di dati corrente. Se usato in una formula della colonna, Col Shuffle() crea un ordinamento casuale dei numeri di riga con ogni numero di riga che appare una sola volta. Tale ordinamento viene memorizzato nella cache interna, in modo che le valutazioni multiple siano efficienti.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Simple Exponential Smoothing

**Sintassi:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Descrizione:** Restituisce la previsione di smoothing esponenziale semplice per la riga corrente, usando il peso di smoothing alfa. Le variabili By non necessitano di essere preordinate. La formula è Valore previsto[t]=alfa * Valore osservato[t-1] + (1-alfa) * Valore previsto[t-1], con Valore previsto[1] = Valore osservato[1].

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Span Box

**Sintassi:** y = Col Span Box( title, children )

**Descrizione:** Restituisce una colonna con un&apos;intestazione che si estende alle colonne secondarie

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce i valori meno la media di colonna divisi per la deviazione standard delle righe di una colonna. Se sono specificate colonne per gruppo, i valori sono standardizzati rispetto alla media e alla deviazione standard dei gruppi.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standardize for each Sex",
	Formula( Col Standardize( :height, :sex ) )
);
dt << New Column( "Col Standardize for each Sex grouped by Excluded",
	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Std Dev

**Sintassi:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la deviazione standard campionaria tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati un una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Esempio 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**Esempio 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standard Deviation for each Sex",
	Formula( Col Std Dev( :height, :sex ) )
);
dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",
	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Stored Value

**Sintassi:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**Descrizione:** Restituisce un valore di colonna senza proprietà della colonna applicate. Se non è specificata l&apos;opzione della riga, si assume la riga corrente.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la somma tra le righe in una colonna. Il risultato viene memorizzato nella cache intera in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**Esempio 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**Esempio 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Collapse Whitespace

**Sintassi:** scw = Collapse Whitespace( s )

**Descrizione:** Taglia gli spazi iniziali e finali e rimuove gli spazi vuoti doppi interni

**JMP Versione aggiunta:** prima della versione 14

```jsl

Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Color Difference

**Sintassi:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Descrizione:** Restituisce la differenza tra due colori in una metrica di differenza di colore specificata.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Color Difference( "red", "blue" );

```

**Esempio 2**

```jsl

Color Difference( "red", "blue", "sRGB" );

```

**Esempio 3**

```jsl

Color Difference( "red", "blue", "redmean" );

```

**Esempio 4**

```jsl

Color Difference( "red", "blue", "CIE76" );

```

**Esempio 5**

```jsl

Color Difference( "red", "blue", "CIE94" );

```

**Esempio 6**

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

**Esempio 7**

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color Of

**Sintassi:** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descrizione:** Restituisce la componente colore del valore specificato dello stato della riga, un indice tavolozza colori JMP positivo o un valore negativo codificato RGB. Se si utilizza Colore di come valore L, esso modifica il colore della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Sintassi:** rs = Color State( color )

**Descrizione:** Restituisce un valore di stato della riga con la componente colore impostata al valore specificato. L&apos;argomento color può essere un qualsiasi colore JSL valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Color To HLS

**Sintassi:** {h, l, s} = Color To HLS( color )

**Descrizione:** Restituisce un elenco delle componenti tonalità, luminosità e saturazione. L&apos;argomento color può essere qualsiasi colore JSL valido, oppure una matrice di numeri di colore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Sintassi:** {r, g, b} = Color To RGB( color )

**Descrizione:** Restituisce un elenco delle componenti rosse, verdi e blu, tra 0 e 1. L&apos;argomento colore può essere qualsiasi colore JSL valido, oppure una matrice di numeri di colore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Column

**Sintassi:** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Descrizione:** Restituisce un riferimento alla colonna della tabella di dati specificata. La parola chiave "formattato" consente l&apos;accesso ai dati formattati, come l’etichetta del valore.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Dialog

**Sintassi:** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**Descrizione:** Propone all&apos;utente una finestra modale con campi per selezionare le colonne di una tabella di dati. La specifica può comprendere diversi tipi di riquadri di input oltre a riquadri contenitori per organizzare la finestra.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
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

**Sintassi:** name = Column Name( n )

**Descrizione:** Restituisce il nome della n-esima colonna della tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Combine States

**Sintassi:** rs = Combine States( rs1, ... )

**Descrizione:** Combina diversi valori di stato della riga in uno unico.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Combo Box

**Sintassi:** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una casella combinata con un menu di scelta rapida. Ogni elemento della casella combinata può avere una descrizione comando opzionale che è specificata come stringa all&apos;interno di parentesi di seguito alla stringa di testo dell&apos;elemento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Concat

**Sintassi:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Descrizione:** Concatena stringhe in una catena più lunga o matrici in una matrice più ampia.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[1 2] || [3 4] || [5 6];

```

### Concat Items

**Sintassi:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Descrizione:** Unisce un elenco di stringhe in una stringa lunga separando ognuna dalla successiva con un separatore, uno spazio vuoto se non altrimenti specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Sintassi:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Descrizione:** Concatena sul posto. a ||= b è equivalente a a = a || b. Si tratta di un operatore di assegnazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = "hello ";
ex ||= "world";

```

### Constrained Maximize

**Sintassi:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({lowerLimitVector,upperLimitVector})

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che massimizzano l&apos;espressione expr con vincoli lineari facoltativi. Le variabili, x1, x2, ecc., possono essere scalari o vettori. I limiti inferiore e superiore devono essere specificati per ogni variabile fra parentesi dopo il nome della variabile o con il parametro <<SetVariableLimits(). Gli argomenti facoltativi per la funzione Constrained Maximize consentono di specificare quanto segue: vincoli lineari, massimo numero di iterazioni, tolleranza desiderata, dettagli dell&apos;output, valori di avvio e limiti per le variabili di ottimizzazione. (Vedere esempio 2.) I vincoli lineari sono specificati usando la matrice di coefficienti mat_A e il vettore lato destro vec_b.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Esempio 2**

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**Sintassi:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({low,high})

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che minimizzano l&apos;espressione expr con vincoli lineari facoltativi. Le variabili, x1, x2, ecc., possono essere scalari o vettori. I limiti inferiore e superiore devono essere specificati per ogni variabile fra parentesi dopo il nome della variabile o con il parametro <<SetVariableLimits(). Gli argomenti facoltativi per la funzione Constrained Minimize consentono di specificare quanto segue: vincoli lineari, massimo numero di iterazioni, tolleranza desiderata, dettagli dell&apos;output, valori di avvio e limiti per le variabili di ottimizzazione. (Vedere esempio 2.) I vincoli lineari sono specificati usando la matrice di coefficienti mat_A e il vettore lato destro vec_b.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Esempio 2**

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Contains

**Sintassi:** pos = Contains( x, item, &lt;start=1&gt; )

**Descrizione:** Restituisce la posizione di item entro x, iniziando dalla posizione start, se indicata. Se tale posizione start è negativa, la ricerca avviene all&apos;indietro a partire da length( x ) - start. L&apos;argomento x può essere una stringa o un elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Sintassi:** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Descrizione:** Restituisce un valore booleano che indica se la parola [elemento], una di un elenco di parole [elenco], o il pattern [pattern] corrisponde a una delle parole nel testo rappresentato da [x]. Le parole sono delimitate dai caratteri nella stringa facoltativa del delimitatore [delimitatore]. Il carattere virgola, ",", è il delimitatore predefinito. Gli spazi sono troncati dalle estremità di ciascuna parola estratta dalla stringa di testo di input [x].

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**Esempio 3**

```jsl

//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Context Box

**Sintassi:** y = Context Box( displayBox, ... )

**Descrizione:** Restituisce una finestra di visualizzazione che stabilisce un contesto di valutazione di scoping. Consente l&apos;esecuzione di diverse parti di una finestra di visualizzazione in modo indipendente l&apos;una dall&apos;altra.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

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

### Contour

**Sintassi:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Descrizione:** Disegna i profili isometrici data una griglia di valori. Se sono specificati meno colori rispetto ai profili isometrici, le opzioni "Interpola colori" o "Ciclo colori" determinano il modo in cui i colori saranno applicati.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
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
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
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
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Sintassi:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Descrizione:** Valuta l&apos;espressione in una griglia di valori xName e yName e disegna le linee isometriche. color può essere specificato come numero, matrice, elenco di valori RGB, elenco di nomi di colori o tema colori.  La trasparenza t può essere specificata come numero o come matrice.  Se è specificata l&apos;opzione Ternary i profili isometrici sono ristretti a un sistema di coordinate ternario.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )
		)
	)
);

```

### Contour Seg

**Sintassi:** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**Descrizione:** Restituisce un segmento di visualizzazione che rappresenta i profili isometrici di una triangolazione. É possibile specificare colori facoltativi per ciascun livello come matrice o elenco. La trasparenza può essere specificata come numero o matrice.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**Descrizione:** Restituisce il percorso convertito.

**JMP Versione aggiunta:** prima della versione 14

```jsl

For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",
	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )
		 || "\!N"
	)
);

```

### Copy Directory

**Sintassi:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**Descrizione:** Copia file da una directory a un&apos;altra, copiando facoltativamente le sottodirectory. Il nome della directory sarà creato nel percorso to e non deve farne parte. Restituisce 1 se la directory è stata copiata o 0 se non è stato possibile copiare la directory. Genera un errore se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Sintassi:** rc = Copy File( from, to )

**Descrizione:** Copia un file dal file originale in un nuovo file con lo stesso nome o con un nome diverso. Specificare un percorso completo e il nome del file per la destinazione. Restituisce 1 se il file è stato copiato o 0 se non è stato possibile copiare il file. Genera un errore se il percorso non è valido o non esiste. Impossibile copiare un file quando il percorso from o to non è valido o se il file to esiste già.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 );/* 0 1 1 1 0 */

```

### Correlation

**Sintassi:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descrizione:** Restituisce la matrice di correlazione dell&apos;argomento della matrice x. L&apos;argomento "Pairwise" gestisce valori mancanti in modalità appaiata piuttosto che a livello di riga. L&apos;argomento "Shrink" riduce gli elementi non diagonali di un fattore che è determinato utilizzando il metodo descritto in Schafer e Strimmer, 2005. Gli argomenti Freq e Weight specificano rispettivamente vettori di frequenza o valori di peso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Cos

**Sintassi:** y = Cosine( x )

**Descrizione:** Restituisce il coseno trigonometrico di x, dove x è un angolo in radianti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cosine( Pi() / 2 );

```

### CosH

**Sintassi:** y = CosH( x )

**Descrizione:** Restituisce il coseno iperbolico di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

CosH( 1 );

```

### Cosine

**Sintassi:** y = Cosine( x )

**Descrizione:** Restituisce il coseno trigonometrico di x, dove x è un angolo in radianti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cosine( Pi() / 2 );

```

### Count

**Sintassi:** y = Count( start, end, s, &lt;n=1&gt; )

**Descrizione:** Restituisce l&apos;i-esimo valore nella sequenza dei numeri da start a end, incrementandolo di s e ripetendo ogni numero n volte, dove i è determinato dal valore della funzione Row(). Poiché dipende dalla funzione Row(), la funzione Count() è utilizzata in genere nelle formule di colonna.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descrizione:** Restituisce la matrice di covarianza dell&apos;argomento della matrice x. L&apos;argomento "Pairwise" gestisce valori mancanti in modalità appaiata piuttosto che a livello di riga. L&apos;argomento "Shrink" riduce gli elementi non diagonali di un fattore che è determinato utilizzando il metodo descritto in Schafer e Strimmer, 2005. Gli argomenti Freq e Weight specificano rispettivamente vettori di frequenza o valori di peso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Create Database Connection

**Sintassi:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Descrizione:** Crea una connessione al database e restituisce un handle alla connessione. Se DriverPrompt è vero, sarà richiesto all&apos;utente di usare il prompt del driver ODBC per fornire le credenziali se necessario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Create Directory

**Sintassi:** rc = Create Directory( path )

**Descrizione:** Crea una directory. Restituisce 1 se la directory è stata creata. Restituisce 0 se la directory esiste già o se JMP non ha potuto creare la directory.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Sintassi:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**Descrizione:** Genera una cartella di lavoro di Excel dalle tabelle di dati JMP aperte

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Esempio 2**

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

**Sintassi:** date = Creation Date( path )

**Descrizione:** Restituisce la data di creazione di un file o directory. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Cumulative Sum

**Sintassi:** y = Cumulative Sum( x )

**Descrizione:** Restituisce una matrice di somme parziali per la matrice di input.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Current CAS Connection

**Sintassi:** Current CAS Connection()

**Descrizione:** Ottiene la connessione al server CAS corrente.

**JMP Versione aggiunta:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### Current Data Table

**Sintassi:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**Descrizione:** Restituisce la tabella di dati corrente o, se presente, rende la tabella di dati specificata corrente.



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Current Journal

**Sintassi:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Descrizione:** Restituisce un riferimento al journal corrente nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Se non esiste alcun journal corrente nel progetto specificato, ne verrà creato uno automaticamente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Current Journal();

```

### Current Report

**Sintassi:** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**Descrizione:** Restituisce un riferimento a un riquadro di visualizzazione nel report corrente del progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Current Report();

```

### Current Window

**Sintassi:** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**Descrizione:** Restituisce un riferimento alla finestra corrente nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Cytometry Logicle

**Sintassi:** y = Cytometry Logicle( x, T, W, M, A )

**Descrizione:** Calcola la trasformazione logicle della citometria.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Sintassi:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Descrizione:** Calcola la trasformazione inversa per la rappresentazione logicle della citometria.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Data Connector Registry

**Sintassi:** Data Connector Registry()

**Descrizione:** La raccolta di connettori di dati per JMP.

**JMP Versione aggiunta:** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Data Filter Context Box

**Sintassi:** y = Data Filter Context Box( displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che definisce l&apos;estensione dei filtri sui dati locali contenuta in una struttura di visualizzazione ad albero. I filtri sui dati e le caselle di contesto del filtro sui dati possono essere ordinati in modo gerarchico e saranno condivisi tra piattaforme o caselle contenute all&apos;interno delle caselle di contesto del filtro sui dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
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

**Sintassi:** y = Data Filter Source Box( displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che definisce l&apos;origine di un filtro di selezione. Le righe selezionate nei report, contenute dal riquadro di origine del filtro sui dati, saranno incluse per l&apos;analisi in altri report contenuti in un comune riquadro di contesto del filtro sui dati.

**JMP Versione aggiunta:** prima della versione 14

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
						Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} )
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

**Sintassi:** y = Data Grid Box( )

**Descrizione:** Restituisce un riquadro di visualizzazione che può contenere una tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table

**Sintassi:** dt = Data Table( name|number )

**Descrizione:** Restituisce un riferimento alla tabella di dati specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Data Table Box

**Sintassi:** y = Data Table Box( datatable )

**Descrizione:** Restituisce un riquadro della tabella rappresentante la tabella di dati specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Sintassi:** y = Data Table Col Box( col )

**Descrizione:** Restituisce un riquadro della colonna corrispondente alla colonna della tabella di dati specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Sintassi:** y = Data Table Plot Col Box( col )

**Descrizione:** Restituisce un riquadro Col grafico corrispondente alla colonna della tabella di dati specificata e facoltativamente usa la seconda e la terza colonna della tabella di dati per creare limiti di controllo.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Datafeed

**Sintassi:** y = Open Datafeed( ... )

**Descrizione:** Crea un soggetto e una finestra per l&apos;invio di messaggi, per l&apos;alimentazione di dati in tempo reale.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Descrizione:** Restituisce la differenza in intervalli di due valori di data/ora. I valori supportati di intervalName sono "Anno", "Trimestre", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo" e "Numerico". Un alignment di "Start" include intervalli completi o parziali, mentre "Actual" include solo intervalli completi. Un alignment di "Fractional" restituisce differenze frazionarie, usando medie per la durata degli intervalli di "Anno", "Trimestre", e "Mese".

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Esempio 2**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Esempio 3**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date DMY

**Sintassi:** z = Date DMY( d, m, y )

**Descrizione:** Converte giorno, mese e anno in un valore di data e ora JMP, che corrisponde al numero di secondi dal 1 gennaio 1904.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Increment

**Sintassi:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Descrizione:** Restituisce un nuovo valore di data/ora aggiungendo incr numero di intervalli. I valori supportati di intervalName sono "Anno", "Trimestre", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo", e "Numerico". Un alignment di "Start" tronca all&apos;intervallo più vicino prima di aggiungere l&apos;incremento, mentre "Actual" mantiene l&apos;intero input di data/ora. Un alignment di "Fractional" consente valori incr frazionari, usando medie per la durata degli intervalli "Anno", "Trimestre" e "Mese".

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

**Esempio 2**

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

**Esempio 3**

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Sintassi:** z = Date MDY( m, d, y )

**Descrizione:** Converte mese, giorno e anno in un valore di data JMP, che corrisponde al numero di secondi dal 1 gennaio 1904.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Sintassi:** d = Day( datetime )

**Descrizione:** Restituisce il giorno del mese di un valore di data e ora, 1 - 31.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Day( Today() );

```

### Day Of Week

**Sintassi:** d = Day Of Week( datetime )

**Descrizione:** Restituisce il giorno della settimana di un valore di data e ora. Domenica = 1, ..., Sabato = 7.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Sintassi:** d = Day Of Year( datetime )

**Descrizione:** Restituisce il giorno dell&apos;anno di un valore di data e ora. Il 1 gennaio è 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Sintassi:** v = Days In Month(year, month)

**Descrizione:** Restituisce il numero di giorni di un mese specificato.

**JMP Versione aggiunta:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Debug Break

**Sintassi:** Debug Break()

**Descrizione:** Quando viene valutata questa espressione all&apos;interno del JSL Debugger, il Debugger arresta l&apos;esecuzione dello script.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Decode URI( value )

**Descrizione:** Codifica la stringa utilizzando la codifica URI.

**JMP Versione aggiunta:** 14

```jsl


Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Sintassi:** y = Decode64 Blob( base64String )

**Descrizione:** Decodifica una stringa stampabile di testo base 64 in un blob.

**JMP Versione aggiunta:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Sintassi:** y = Decode64 Double( base64String )

**Descrizione:** Restituisce il numero a virgola mobile a doppia precisione dalla stringa codificata Base64.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Define Class

**Sintassi:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Descrizione:** Definisce una nuova classe

**JMP Versione aggiunta:** 14

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
cl << Delete;
Delete Classes( complex );

```

### Delete Classes

**Sintassi:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Descrizione:** Elimina tutte le definizioni di classi o una o più definizioni di classi specifiche.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**Descrizione:** Elimina una directory e i suoi file e sottodirectory. Restituisce 1 se la directory è stata eliminata. Restituisce 0 se la directory non è stata eliminata o se il percorso non è valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Sintassi:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**Descrizione:** Elimina un file. Restituisce 1 se il file è stato eliminato. Restituisce 0 se il file non ha potuto essere eliminato. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Delete Globals

**Sintassi:** Delete Globals( &lt; varname, ... &gt; )

**Descrizione:** Elimina tutti i simboli globali al momento definiti e i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Delete Globals();

```

### Delete Namespaces

**Sintassi:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Descrizione:** Elimina tutti gli spazi dei nomi o uno o più spazi dei nomi specifici.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Delete Symbols( &lt; varname, ... &gt; )

**Descrizione:** Elimina tutti i simboli al momento definiti ed i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Delete Symbols();

```

### Derivative

**Sintassi:** y = Derivative( expr, name )

**Descrizione:** Restituisce la derivata simbolica dell&apos;espressione data rispetto al nome della variabile specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Derivative( Sin( x ), x );

```

### Design

**Sintassi:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per ogni valore univoco dell&apos;argomento. Usare l&apos;argomento levelsList per specificare un elenco dei livelli per la matrice del piano. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nella matrice del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. L&apos;ultimo livello è codificato come una riga di 0. Se è specificato l&apos;argomento levelsList, l&apos;ultimo livello è l&apos;ultimo livello in levelsList. Altrimenti, l&apos;ultimo livello si definisce come il valore più grande in v. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nella matrice del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

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
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**Sintassi:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. L&apos;ultimo livello è codificato come una riga di -1. Se è specificato l&apos;argomento levelsList, l&apos;ultimo livello è l&apos;ultimo livello in levelsList. Altrimenti, l&apos;ultimo livello si definisce come il valore più grande in v. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nel disegno del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

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
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**Sintassi:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. Il primo livello è codificato come una riga di 0. Ogni successivo livello (n-esimo) nell&apos;argomento levelsList è codificato come una riga di (n-1) 1 e il resto di 0. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nella matrice del piano al posto dei valori dell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

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
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**Sintassi:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. L&apos;ultimo livello è codificato come una riga di -1. Se è specificato l&apos;argomento levelsList, l&apos;ultimo livello è l&apos;ultimo livello in levelsList. Altrimenti, l&apos;ultimo livello si definisce come il valore più grande in v. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nel disegno del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** des = Desirability( yVector, dVector, y )

**Descrizione:** Disegna una curva di desiderabilità, dove yVector è un vettore di 3 valori di input, dVector sono i 3 corrispondenti valori di desiderabilità e y è l&apos;argomento del quale si deve calcolare la desiderabilità.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Det( x )

**Descrizione:** Restituisce il determinante di una matrice quadrata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Det( [11 22, 33 44] );

```

### Diag

**Sintassi:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Descrizione:** Costruisce una matrice diagonale da una matrice o da un vettore. Se sono specificati due argomenti, la funzione restituisce la concatenazione delle matrici diagonalmente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Diag( [11 22] );

```

### Dialog

**Sintassi:** y = Dialog( specification )

**Descrizione:** Mostra all&apos;utente una finestra modale. Questa funzione è obsoleta. Al suo posto usare la funzione Nuova finestra con l&apos;argomento <<Modale.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Esempio 2**

```jsl

// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
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

**Sintassi:** y = Dif( x, &lt;n=1&gt; )

**Descrizione:** Restituisce x - Lag( x, n ), detto anche "prima differenza". Poiché dipende da Row(), Dif() è utile soprattutto nelle formule di colonna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Digamma

**Sintassi:** y = Digamma( x )

**Descrizione:** Restituisce la funzione digamma valutata a x, dove la funzione digamma è la derivata del logaritmo della funzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Digamma( 5 );

```

### Dim

**Sintassi:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Descrizione:** Restituisce un vettore di riga con le dimensioni della tabella di dati corrente, una tabella di dati specificata, o una matrice. Le dimensioni sono il numero di righe e il numero di colonne e sono elencate in tale ordine.

**JMP Versione aggiunta:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Direct Product

**Sintassi:** y = Direct Product( A, B )

**Descrizione:** Restituisce il prodotto diretto o di Kronecker. Il risultato ha A[i,j]*B, che si estende a tutti i prodotti possibili.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** rc = Directory Exists( path )

**Descrizione:** Determina se la directory esiste. Restituisce 1 se il percorso esiste. Restituisce 0 se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### Disable JMP Live URL

**Sintassi:** Disable JMP Live URL(url)

**Descrizione:** Disabilita un URL di JMP Live. Questo metodo è disponibile solo durante jmpStartAdmin.jsl. È possibile usare un asterisco * come carattere jolly per specificare gli URL come * (qualsiasi URL), *.jmp.com (un URL che termina con .jmp.com), http://public.* (un URL che inizia con http://public.) o *public* (un URL che contiene public).

**JMP Versione aggiunta:** 15

```jsl


Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Sintassi:** Disable Proxy Settings( 1|0 )

**Descrizione:** Disabilita o abilita impostazioni proxy durante l&apos;esecuzione di jmpStartAdmin.jsl. Le impostazioni proxy sono abilitate per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl


Disable Proxy Settings( 1 );

```

### Distance

**Sintassi:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Descrizione:** Crea una matrice di distanze tra le righe di x1 e le righe di x2. Per personalizzare lo scaling e le potenze per ciascuna colonna, specificare gli argomenti supplementari scale e powers. Per il Kriging è utilizzato Exp(-distance(x1,x2)).

**JMP Versione aggiunta:** prima della versione 14

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
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
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
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
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
		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2) )
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
			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^ [1.5 2.0])
		)
	)
);
Show( exDm == exD );

```

### Divide

**Sintassi:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Descrizione:** Divide tutti gli argomenti successivi dal primo argomento. Gli argomenti possono essere numeri, matrici o elenchi di numeri. Se chiamato con un solo argomento, il risultato sarà il reciproco.

**JMP Versione aggiunta:** prima della versione 14

**Reciproco**

```jsl

x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

**Semplici**

```jsl

6 / 3 / 2;

```

### Divide To

**Sintassi:** y /= x; Divide To( y, x )

**Descrizione:** Divide per un valore una variabile o un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = 1;
ex /= 2;
ex;

```

### Double Declining Balance

**Sintassi:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Descrizione:** Restituisce l&apos;ammortamento di un asset per un periodo specificato tramite il metodo di doppio ammortamento a quote decrescenti o qualche altro fattore di ammortamento. Equivalente alla funzione DDB in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Drag Line

**Sintassi:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna una polilinea nei punti indicati. A differenza di Linea tuttavia, i punti possono essere trascinati sullo schermo, aggiornando i valori negli argomenti della matrice (Valore L).

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna indicatori mobili nei punti indicati. I valori della matrice sono aggiornati allo spostamento degli indicatori.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna un poligono pieno nei punti indicati. I punti possono essere trascinati sullo schermo, aggiornando i valori negli argomenti della matrice (Valore L).

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna un rettangolo nei punti indicati. A differenza di Rett tuttavia, questi angoli possono essere trascinati sullo schermo, aggiornando i valori negli argomenti della matrice (Valore L).

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna il testo nei punti indicati. A differenza della funzione Text() tuttavia, i punti possono essere trascinati lungo lo schermo aggiornando i valori negli argomenti della matrice xMatrixName e yMatrixName. L&apos;argomento text può essere l&apos;argomento di una stringa o un elenco di stringhe.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** p = Dunnett P value( q, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Descrizione:** Restituisce il p-value del test dei confronti multipli di Dunnett, dove q è la statistica di test, nTrt è il numero di trattamenti confrontati con il gruppo di controllo, dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio) e lambdaVec facoltativo è un vettore di parametri, per impostazione predefinita impostati su 1/sqrt(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Sintassi:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Descrizione:** Restituisce il quantile richiesto per il test dei confronti multipli di Dunnett, dove 1-alpha è il livello di confidenza, nTrt è il numero di trattamenti confrontati con il gruppo di controllo, dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio) e lambdaVec facoltativo è un vettore di parametri, per impostazione predefinita impostati su 1/sqrt(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Dunnett Quantile( 0.95, 3, 11 );

```

### e

**Sintassi:** y = e()

**Descrizione:** Restituisce la costante matematica e, con un&apos;accuratezza di circa 15 cifre decimali: 2,7182818....

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( e(), 10 );

```

### E Div

**Sintassi:** y = A :/ B; y = E Div( A, B )

**Descrizione:** Restituisce una divisione per elementi delle matrici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**Sintassi:** y = E Max( A, B )

**Descrizione:** Restituisce una matrice che è il massimo degli elementi corrispondenti dei suoi argomenti.

**JMP Versione aggiunta:** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**Sintassi:** y = E Min( A, B )

**Descrizione:** Restituisce una matrice che è il minimo degli elementi corrispondenti dei suoi argomenti.

**JMP Versione aggiunta:** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Sintassi:** y = A :* B; y = E Mult( A, B )

**Descrizione:** Restituisce una moltiplicazione per elementi delle matrici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**Sintassi:** {M, E} = Eigen( X )

**Descrizione:** Esegue la scomposizione degli autovalori della matrice simmetrica X. Restituisce un elenco {M, E} tale che E*Diag(M)*E` = X.

**JMP Versione aggiunta:** prima della versione 14

```jsl

X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Sintassi:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Versione aggiunta:** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Empty

**Sintassi:** y = Empty()

**Descrizione:** Restituisce un valore vuoto. Utilizzato nell&apos;editor delle formule per argomenti non specificati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Empty();

```

### Enable JMP Live URL

**Sintassi:** Enable JMP Live URL(url)

**Descrizione:** Abilita un URL di JMP Live. Questo metodo è disponibile solo durante jmpStartAdmin.jsl. È possibile usare un asterisco * come carattere jolly per specificare gli URL come * (qualsiasi URL), *.jmp.com (un URL che termina con .jmp.com), http://public.* (un URL che inizia con http://public.) o *public* (un URL che contiene public).

**JMP Versione aggiunta:** 15

```jsl


Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Sintassi:** Enable Proxy Settings( 1|0 )

**Descrizione:** Abilita o disabilita impostazioni proxy durante l&apos;esecuzione di jmpStartAdmin.jsl. Le impostazioni proxy sono abilitate per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl


Enable Proxy Settings( 0 );

```

### Encode URI

**Sintassi:** Encode URI( value )

**Descrizione:** Codifica la stringa utilizzando la codifica URI.

**JMP Versione aggiunta:** 14

```jsl


Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Sintassi:** s = Encode64 Blob( x )

**Descrizione:** Codifica un blob in una stringa stampabile di testo base 64.

**JMP Versione aggiunta:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Sintassi:** s = Encode64 Double( x )

**Descrizione:** Restituisce una codifica stringa Base64 del numero a virgola mobile.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Encode64 Double( -1.5831 );

```

### Ends With

**Sintassi:** b = Ends With( s, sub )

**Descrizione:** Restituisce 1 se s termina con sub, altrimenti restituisce 0. Gli argomenti s e sub possono essere entrambi stringhe o entrambi elenchi. Equivalente a Right( s, Length( sub )) == sub.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ends With( "http://www.jmp.com", ".com" );

```

### Equal

**Sintassi:** z = x == y == ...; z = Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 == 1;

```

### Estimate Bartlett Factor Score

**Sintassi:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Descrizione:** Stima gli score dei fattori, utilizzando il metodo di Bartlett, da un modello di equazione strutturale (SEM). Gli argomenti di input sono un vettore di riga di dati, le medie implicate del modello per le variabili manifeste, le medie implicate del modello per le variabili latenti, la matrice RAM S da un SEM e la matrice RAM A da un SEM. Restituisce un vettore di riga con score dei fattori stimati basati su SEM.

**JMP Versione aggiunta:** 16

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

**Sintassi:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Descrizione:** Stima gli score dei fattori, utilizzando il metodo di regressione, da un modello di equazione strutturale (SEM). Gli argomenti di input sono un vettore riga di dati, una matrice di varianza-covarianza implicita nel modello, un vettore delle medie delle variabili manifeste implicite nel modello e un vettore delle medie delle variabili latenti implicite nel modello. Restituisce un vettore di riga con score dei fattori basati su SEM.

**JMP Versione aggiunta:** 15

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

**Sintassi:** y = Eval( x )

**Descrizione:** Valuta l&apos;argomento e restituisce il risultato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Expr

**Sintassi:** y = Eval Expr( x )

**Descrizione:** Restituisce una copia dell&apos;espressione x con ogni clausola Expr() entro x sostituita con il valore valutato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Eval Insert

**Sintassi:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descrizione:** Ricerca le sottostringhe delimitate dalla coppia startChar/endChar e le sostituisce con l&apos;espressione valutata all&apos;interno.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Sintassi:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descrizione:** Ricerca le sottostringhe delimitate dalla coppia startChar/endChar e le sostituisce con l&apos;espressione valutata all&apos;interno sostituendo l_string.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Sintassi:** y = Eval List( list )

**Descrizione:** Restituisce un elenco dove ogni elemento dell&apos;elenco è stato valutato.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**Esempio 2**

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Excerpt Box

**Sintassi:** y = Excerpt Box( rptnum, lstSubscripts )

**Descrizione:** Restituisce un riquadro di visualizzazione contenente la stringa designata dal report al numero rptnum e l&apos;elenco degli indici di visualizzazione lstSubscripts. Gli indici riflettono lo stato corrente del report dopo che sono state rimosse stringhe precedenti.

**JMP Versione aggiunta:** prima della versione 14

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
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Excluded

**Sintassi:** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descrizione:** Restituisce la componente esclusa del valore specificato dello stato della riga, 0 o 1. Se si utilizza la funzione Excluded() come valore L, esso modifica lo stato escluso della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Sintassi:** rs = Excluded State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente esclusa impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Execute SQL

**Sintassi:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Descrizione:** Esegue l&apos;SQL su una connessione al database restituita da Crea connessione al database o da un connettore dati. L&apos;abilitazione dell&apos;invio in batch consente di ricevere più risultati da più istruzioni SQL, restituendo un elenco con i risultati (solo driver di supporto).

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Esempio 2**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Esempio 3**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### ExGaussian Density

**Sintassi:** y = ExGaussian Density( x, location, scale, shape )

**Descrizione:** Restituisce la densità a x di una distribuzione ex gaussiana.

**JMP Versione aggiunta:** 18

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

**Sintassi:** y = ExGaussian Distribution( x, location, scale, shape )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita ex gaussiana sia minore di x.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Example: ExGaussian Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Distribution( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Quantile

**Sintassi:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione ex gaussiana, il valore per cui si ha probabilità pari a p di ottenere un valore casuale inferiore.

**JMP Versione aggiunta:** 18

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

**Sintassi:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descrizione:** Esce da JMP.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### Exp

**Sintassi:** y = Exp( &lt;x=1&gt; )

**Descrizione:** Restituisce e elevato alla potenza di x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Exp( 1 ), 5 );

```

### Exp Density

**Sintassi:** y = Exp Density( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la densità a x di una distribuzione esponenziale con parametro theta.

**JMP Versione aggiunta:** 14

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

**Sintassi:** p = Exp Distribution( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita esponenzialmente sia inferiore a x.

**JMP Versione aggiunta:** 14

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

**Sintassi:** q = Exp Quantile( p, &lt;theta=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione esponenziale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** 14

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

**Sintassi:** y = ExpM1( x )

**Descrizione:** Restituisce un calcolo più preciso di Exp(x)-1 quando x è molto piccolo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### Exponential Density

**Sintassi:** y = Exponential Density( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la densità a x di una distribuzione esponenziale con parametro theta.

**JMP Versione aggiunta:** 17

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

**Sintassi:** p = Exponential Distribution( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita esponenzialmente sia inferiore a x.

**JMP Versione aggiunta:** 17

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

**Sintassi:** q = Exponential Quantile( p, &lt;theta=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione esponenziale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** 17

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

**Sintassi:** y = Expr( x )

**Descrizione:** Restituisce l&apos;argomento non valutato. Usato per citare espressioni.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Expr( x + y );

```

### Expr As Picture

**Sintassi:** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**Descrizione:** Restituisce un&apos;immagine contenente l&apos;espressione specificata come immagine della formula. La larghezza predefinita è 600 pixel e la dimensione massima predefinita della matrice è 100.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Extract Expr

**Sintassi:** y = Extract Expr( expr, pattern )

**Descrizione:** Restituisce una sottoespressione corrispondente al pattern specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### F Density

**Sintassi:** y = F Density( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione F con gradi di libertà dfne dfd.

**JMP Versione aggiunta:** prima della versione 14

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
		Text( {2.5, 0.7}, "dfn=", Round( fdedfn, 2 ), " dfd=", Round( fdedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fdedfn, fdey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fdedfd, fdey << reshow ) )
);

```

### F Distribution

**Sintassi:** y = F Distribution( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita F sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

fdidfn = 5;
fdidfd = 5;
New Window( "Example: F Distribution",
	fdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Distribution( fdiq, fdidfn, fdidfd ), fdiq );
		Text( {0.5, 0.9}, "dfn=", Round( fdidfn, 2 ), " dfd=", Round( fdidfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 0.5, 10, fdidfn, fdiy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 0.5, 10, fdidfd, fdiy << reshow ) )
);

```

### F Log CDistribution

**Sintassi:** y = F Log CDistribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione 1 - F.

**JMP Versione aggiunta:** prima della versione 14

```jsl

flcddfn = 5;
flcddfd = 5;
New Window( "Example: F Log CDistribution",
	flcdy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log CDistribution( flcdq, flcddfn, flcddfd ), flcdq );
		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) )
);

```

### F Log Density

**Sintassi:** y = F Log Density( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della densità di probabilità F.

**JMP Versione aggiunta:** prima della versione 14

```jsl

fldedfn = 1;
fldedfd = 1;
New Window( "Example: F Log Density",
	fldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Density( fldeq, fldedfn, fldedfd ), fldeq );
		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) )
);

```

### F Log Distribution

**Sintassi:** y = F Log Distribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione F.

**JMP Versione aggiunta:** prima della versione 14

```jsl

flddfn = 5;
flddfd = 5;
New Window( "Example: F Log Distribution",
	fldy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Distribution( fldq, flddfn, flddfd ), fldq );
		Text( {0.5, -0.9}, "dfn=", Round( flddfn, 2 ), " dfd=", Round( flddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flddfn, fldy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flddfd, fldy << reshow ) )
);

```

### F Noncentrality

**Sintassi:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Descrizione:** Risolve il parametro di non centralità nc quale prob = F Distribution( x, ndf, ddf, nc ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: F Noncentrality",
	fncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, q ) ), q );
	)
);
F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**Sintassi:** p = F Power( alpha, dfh, dfm, d, n )

**Descrizione:** Calcola la potenza di un test F, dove alpha è il livello di significatività, dfh è il grado di libertà ipotizzato, dfm è il grado di libertà dell&apos;intero modello, d è la dimensione dell&apos;effetto al quadrato, SSH/(n*sigma^2) dove SSH è la somma dei quadrati per l&apos;ipotesi e n è il numero totale di osservazioni. Nota: per il modello ANOVA, d = Sum(a[i]^2)/(k * sigma^2) dove a[i] sono effetti e k è il numero di medie.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "obs" ), Slider Box( 10, 100, obs, fpdigr << reshow ) )
);

```

### F Quantile

**Sintassi:** q = F Quantile( p, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione F, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Sintassi:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Descrizione:** Calcola la dimensione campionaria, dove alpha è il livello di significatività, dfh è il grado di libertà ipotizzato, dfm è il grado di libertà dell&apos;intero modello, d è la dimensione dell&apos;effetto al quadrato, SSH/(n*sigma^2) dove SSH è la somma dei quadrati per l&apos;ipotesi e power è la potenza desiderata. Nota: per il modello ANOVA, d = Sum(a[i]^2)/(k * sigma^2) dove a[i] sono effetti e k è il numero di medie.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( F Sample Size( alpha, dfh, dfm, d, pow ), d );
		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );
	),
	H List Box( Text Box( "power" ), Slider Box( 0.2, 0.95, pow, fpdigr << reshow ) )
);

```

### Factorial

**Sintassi:** y = Factorial( x )

**Descrizione:** Restituisce il fattoriale di x, che è uguale a Gamma( x + 1 ). Se x è un numero intero, il risultato è il prodotto 1 * 2 * ... * x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Factorial( 5 );

```

### Faure Quasi Random Sequence

**Sintassi:** points = Faure Quasi Random Sequence(nDim, nRow)

**Descrizione:** Genera una sequenza di numeri quasi casuali riempitivi usando la sequenza di Faure.

**JMP Versione aggiunta:** prima della versione 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### FDR Adjust

**Sintassi:** y = FDR Adjust( matrix )

**Descrizione:** Restituisce la correzione del tasso di falsa scoperta  per i valori di p-value specificati utilizzando il metodo di Benjamini-Hochberg.

**JMP Versione aggiunta:** 19

```jsl

FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### FFT

**Sintassi:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Descrizione:** Conduce una FFT (Fast Fourier Transformation) sull&apos;argomento L, un elenco necessario formato da parti reali e immaginarie dei dati sotto forma di matrici. Se L è costituito da una sola matrice, la matrice viene considerata essere la parte reale. Se L è costituito da due matrici, la prima è la parte reale e la seconda è la parte immaginaria. Le due matrici devono avere le stesse dimensioni e devono avere più di una riga. Vi sono tre argomenti opzionali. L&apos;argomento determina se condurre una FFT inversa inverse. L&apos;argomento determina se condurre una FFT multivariate spaziale o multivariata. L&apos;argomento scale determina la costante per la quale moltiplicare i valori di ritorno. Il valore di ritorno è un elenco delle due matrici con le stesse dimensioni come il primo argomento di input.

**JMP Versione aggiunta:** prima della versione 14

```jsl

FFT( {[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]} );
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
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]}
);
FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4, 2 6, 3 5,
3 6, 3 1];
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

**Sintassi:** rc = File Exists( path )

**Descrizione:** Determina se il file esiste. Restituisce 1 se il percorso del file esiste. Restituisce 0 se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Sintassi:** size = File Size( path )

**Descrizione:** Restituisce la dimensione del file al percorso specificato. Restituisce mancante quando il percorso del file non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Sintassi:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**Descrizione:** Restituisce l&apos;elenco di nomi di file in una directory che è specificata da path. Se l&apos;argomento Recursive non è specificato, nell&apos;elenco sono inclusi i nomi delle directory.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Files In Directory( "$HOME" );

```

**Esempio 2**

```jsl

Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Fill Color

**Sintassi:** Fill Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore per il disegno delle aree riempite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Sintassi:** Fill Pattern( name|mask|image )

**Descrizione:** Imposta il pattern per disegnare aree riempite. Una maschera è una matrice di valori tra  0 e 1 da applicarsi al colore di riempimento corrente.

**JMP Versione aggiunta:** prima della versione 14

**Immagine**

```jsl


image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Maschera**

```jsl

New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Filter Col Selector

**Sintassi:** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**Descrizione:** Restituisce un riquadro di visualizzazione che contiene un elenco di elementi. Il controllo consente il filtro sulle colonne.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Filter Each

**Sintassi:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Descrizione:** Fa tutto quello che fa la funzione Per ognuno, ma restituisce anche un elenco di valori filtrati dal contenitore originale sulla base del risultato di un valore booleano. Il tipo di risultato corrisponderà al tipo di contenitore di input. Per l&apos;input Matrice, sarà restituita una matrice del vettore di riga, poiché la dimensione della matrice non può essere conosciuta.

**JMP Versione aggiunta:** 16

**Associative Array**

```jsl

values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

**Expression**

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
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

**Sintassi:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**Descrizione:** Trova tutte le risorse aperte di un tipo specifico: tabelle di dati, journal o report.



Saranno comprese solo le finestre nel progetto corrente (o in nessun progetto se non si sta eseguendo lo script in un progetto). Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** 14

```jsl


exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### First

**Sintassi:** y = First( x1, x2, ... )

**Descrizione:** Valuta ogni argomento e restituisce il valore del primo argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

First( 11, 22 );

```

### Fit Censored

**Sintassi:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Descrizione:** Stima una distribuzione utilizzando dati con censura. Gli argomenti richiesti sono Distribution e o YLow o Y. La funzione restituisce un elenco che contiene stime dei parametri, matrice di covarianza, log-verosimiglianza, AICc, BIC e un messaggio di convergenza. Gli argomenti X e Z specificano matrici di regressione del piano rispettivamente per la posizione e la scala. Quando il vettore dei dati è grande, è possibile utilizzare due argomenti facoltativi per specificare un campione per calcolare i valori iniziali. Puoi specificare un percent delle osservazioni o le prime nobs osservazioni, ma la dimensione campionaria totale deve essere maggiore di 100.

**JMP Versione aggiunta:** prima della versione 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Sintassi:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Descrizione:** Stima la circonferenza che meglio attraversa tre o più punti che sono definiti da due vettori di coordinate. Il risultato è un elenco che contiene le coordinate X e Y del punto centrale della circonferenza, la lunghezza del raggio e la somma degli errori quadratici.

**JMP Versione aggiunta:** 14

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

**Sintassi:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Descrizione:** Stima una trasformazione alla normalità per un vettore di dati. Comprende le distribuzioni Johnson Sl, Johnson Sb, Johnson Su e GLog. La funzione restituisce un elenco contenente stime di parametro, matrice di covarianza, log verosimiglianza, AICc e un messaggio di convergenza.

**JMP Versione aggiunta:** prima della versione 14

```jsl

datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024, -19.470857,
-6.1855986, 2.16525629, -30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution(
	Freq( :freq vec ),
	Continuous Distribution( Column( :x ), Fit Distribution( GLog ) )
);
results = Fit Transform To Normal( Distribution( "glog" ), Y( datavec ), freq( freqvec ) );
Show( results );

```

### Floor

**Sintassi:** y = Floor( x )

**Descrizione:** Restituisce il più grande numero intero che sia minore di o uguale a x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Floor( 1.2 );

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

**Associative Array**

```jsl

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10], Show( key, value, index ) );

```

**Expression**

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

**List**

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

**Matrice - Indice lineare**

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

**Matrix**

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

### Force Action Notes

**JMP Versione aggiunta:** 16

### Format

**Sintassi:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descrizione:** Restituisce il numero nel formato specificato. I formati comprendono elementi nella finestra di dialogo Informazioni sulla colonna, come "Migliore" e "h:m:s". Vedere la Guida su un argomento per ulteriori opzioni, tra cui p-value, valuta, data e ora e formati geografici.

**JMP Versione aggiunta:** prima della versione 14

**Data e ora**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Pattern del formato**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Percentuale, Valuta**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**Precisione completa**

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Sintassi:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descrizione:** Restituisce il numero nel formato specificato. I formati comprendono elementi nella finestra di dialogo Informazioni sulla colonna, come "Migliore" e "h:m:s". Vedere la Guida su un argomento per ulteriori opzioni, tra cui p-value, valuta, data e ora e formati geografici.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Esempio 2**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Esempio 3**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Pattern

**Sintassi:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Descrizione:** I pattern di formato sono stringhe che definiscono un formato di data e ora come, ad esempio, “<AAAA></><MM></><GG> <hh><:><mm><:><ss><ampm>". Le parti del pattern tra parentesi angolari sono dette descrittori di campo. I descrittori di campo rappresentano un valore (come "<AAAA>", che è un anno a quattro cifre) o un altro testo di data e ora (come "</>", che è un separatore di data specifico locale). Un pattern di formato permette di costruire formati che non sono forniti da JMP. Questi formati possono essere utilizzati sia per la formattazione sia per l&apos;input dei dati.

**JMP Versione aggiunta:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
Descrittori di campo

Date
(non può essere utilizzato con i descrittori di campo Durata
================================================================================
<YYYY>        Anno a quattro cifre. (Accetta 1-4 cifre in input).
<YY>          Anno a due cifre
<yyyy>        Anno ISO a quattro cifre; corrisponde alle settimane ISO. (Accetta
              1-4 cifre in input).
<yy>          Anno ISO a due cifre; corrisponde alle settimane ISO.
<YYYY.>       Anno con anno frazionato. Descrive completamente la data e l'ora.
<M>           Numero del mese (1..12)
<MM>          Numero del mese, con zero iniziale (01..12)
<Month>       Nome lungo del mese
<Mmm>         Nome abbreviato del mese
<MMM>         Nome del mese "in linea". Sempre tre lettere.
<WW1>         Numero della settimana a due cifre, con zero iniziale. La seconda
              settimana inizia la prima domenica dell'anno. La settimana 1 è la
              settimana parziale che precede la prima domenica. (01..54)
<WW2>         Numero della settimana a due cifre, con zero iniziale. La
              settimana 1 inizia la prima domenica dell'anno. La settimana 0 è
              la settimana parziale che precede la prima domenica. (00..53)
<ww>          Numero della settimana ISO a due cifre, con zero iniziale. Le
              settimane iniziano il lunedì. La prima settimana è la prima
              settimana dell'anno con 4 o più giorni. Non esistono settimane
              parziali, invece la prima o l'ultima settimana possono estendersi
              rispettivamente all'anno precedente o a quello successivo.
              (01..53)
<D>           Giorno del mese (1..31)
<DD>          Giorno del mese, con zero iniziale (01..31)
<Q>           Trimestre dell'anno (1..4)
<Q#>          "T" seguita da un trimestre dell’anno (1..4)
<DayOfWeek>   Nome del giorno della settimana
<DW>          Giorno della settimana come numero. 1 = domenica, 7 = sabato
<dw>          Giorno della settimana come numero. 1 = lunedì, 7 = domenica
</>           Il separatore di data locale. (Accetta in input i separatori più
              comuni).
<->           Il separatore di data ISO '-'. (Accetta in input i separatori più
              comuni).
</?>          Separatore di data facoltativo nell'input di date. Il separatore
              non viene mai scritto nell'output.
<'T'>         La "T" nelle date ISO

Ore
(alcuni possono essere utilizzati con i descrittori di campo Durata)
================================================================================
<hh>          Ora formattata in base all'impostazione locale corrente. Se è
              presente un descrittore <ampm>, verrà utilizzato un orologio di 12
              o 24 ore in base all’impostazione locale. Se è presente un
              descrittore <AMPM>, verrà utilizzato un orologio di 12 ore.
              Altrimenti verrà utilizzato un orologio di 24 ore. (Non può essere
              usato con descrittori di campo di durata.)
<zhh>         Ora formattata in base all'impostazione locale corrente e con zero
              iniziale. Se è presente un descrittore <ampm>, verrà utilizzato un
              orologio di 12 o 24 ore in base all’impostazione locale. Se è
              presente un descrittore <AMPM>, verrà utilizzato un orologio di 12
              ore. Altrimenti verrà utilizzato un orologio di 24 ore. (Non può
              essere usato con descrittori di campo di durata.)
<hh24>        Ora in formato 24 ore e con zero iniziale (00..23)
<mm>          Minuti, con zero iniziale (00..59)
<ss>          Secondi, con zero iniziale (00..59)
<ampm>        Simbolo AM/PM per l'ora locale corrente. (Non può essere usato con
              i descrittori di campo Durata).
<AMPM>        Simbolo AM/PM indipendente dall'impostazione locale "AM" o "PM"
              (non può essere usato con i descrittori di campo di durata).
<:>           Il separatore di ora locale.
<::>          Il separatore di ora ISO ':'. (Accetta anche il separatore di ora
              locale in input).
<:?>          Separatore di ora facoltativo nell'input di date. Il separatore
              non viene mai scritto nell'output.

Durate
(non può essere utilizzato con i descrittori di campo Data)
================================================================================
<Day>         Conteggio dei giorni. Utilizzato come campo più significativo
              nelle durate. Non può essere usato con altri "conteggi".
<Hour>        Conteggio delle ore. Utilizzato come campo più significativo nelle
              durate. Non può essere usato con altri "conteggi".
<Minute>      Conteggio dei minuti. Utilizzato come campo più significativo
              nelle durate. Non può essere usato con altri "conteggi".

Altro
================================================================================
<<>           Sostituito con un "<"
*/

```

### Fourier Basis Coef

**Sintassi:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Descrizione:** Restituisce la matrice dei coefficienti di base Fourier. Number Pairs è il numero di coppie di sin() e cos() per la base. Il parametro facoltativo Period specifica il periodo delle funzioni trigonometriche e ha come impostazione predefinita max(x) - min(x) + 1.

**JMP Versione aggiunta:** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### Frechet Density

**Sintassi:** y = Frechet Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione di Fréchet con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Frechet Distribution

**Sintassi:** p = Frechet Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione di Fréchet con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Frechet Quantile

**Sintassi:** q = Frechet Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione di Fréchet con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Function

**Sintassi:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Descrizione:** Definisce una funzione con i valori predefiniti e gli argomenti specificati e con variabili locali facoltative. Gli argomenti con valori predefiniti sono facoltativi quando si chiama la funzione. Se si utilizza Return() entro lo script della funzione, viene restituita l&apos;espressione entro.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Esempio 2**

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Esempio 3**

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

**Sintassi:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il valore futuro di un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione FV in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### G Inverse

**Sintassi:** g = G Inverse( A )

**Descrizione:** Restituisce la matrice inversa generalizzata (Moore-Penrose).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### Gamma

**Sintassi:** y = Gamma( x, &lt;limit&gt; )

**Descrizione:** Restituisce la funzione gamma di x, definita come l&apos;integrale di z^(x-1)*exp(-z) dz da 0 a ∞. Se è presente limit, sarà calcolato un gamma incompleto con quel limite di integrazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Gamma( 5 );

```

### Gamma Density

**Sintassi:** y = Gamma Density( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione di probabilità gamma, dove l&apos;argomento del parametro della forma alpha deve essere positivo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gdealpha = Log( 1.5 );
New Window( "Example: Gamma Density",
	gdey = Graph Box(
		Y Scale( 0, 0.5 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Density( gdeq, Exp( gdealpha ) ), gdeq );
		Text( {9, 0.45}, "\!U03B1=", Round( Exp( gdealpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Distribution

**Sintassi:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione gamma sia inferiore a q, dove l&apos;argomento del parametro della forma alpha deve essere positivo. IGamma() è un nome di alias della Gamma Distribution(). La funzione Gamma Distribution() è equivalente a Gamma(alpha,q)/Gamma(alpha).

**JMP Versione aggiunta:** prima della versione 14

```jsl

gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log CDistribution

**Sintassi:** p = Gamma Log CDistribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il logaritmo di 1 – Distribuzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

glcdialpha = Log( 1.5 );
New Window( "Example: Gamma Log CDistribution",
	glcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ), glcdiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( glcdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Density

**Sintassi:** y = Gamma Log Density( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il logaritmo della funzione di densità della probabilità gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gldealpha = Log( 1.5 );
New Window( "Example: Gamma Log Density",
	gldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Density( gldeq, Exp( gldealpha ) ), gldeq );
		Text( {9, -0.45}, "\!U03B1=", Round( Exp( gldealpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Distribution

**Sintassi:** p = Gamma Log Distribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gldialpha = Log( 1.5 );
New Window( "Example: Gamma Log Distribution",
	gldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Distribution( gldiq, Exp( gldialpha ) ), gldiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( gldialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Poisson Distribution

**Sintassi:** cumprob = Gamma Poisson Distribution( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia minore o uguale a k, dove lambda è il parametro della media, sigma è il parametro di sovradispersione e kè il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

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
			H Line( k, k + 1, Gamma Poisson Distribution( k, lambda, sigma ) );
			V Line(
				k + 1,
				Gamma Poisson Distribution( k, lambda, sigma ),
				Gamma Poisson Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) )
);

```

### Gamma Poisson Probability

**Sintassi:** prob = Gamma Poisson Probability( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia uguale a k, dove lambda è il parametro della media, sigma è il parametro di sovradispersione e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

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
			V Line( x + 0.35, 0, Gamma Poisson Probability( x, lambda, sigma ) );
		);
		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );
		Text( {0, 0.28}, "Red = Poisson, Blue = Gamma Poisson" );
	),
	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) )
);

```

### Gamma Poisson Quantile

**Sintassi:** q = Gamma Poisson Quantile( lambda, sigma, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione gamma di Poisson ( lambda, sigma ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

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
			H Line( qexpk, qexpk + 1, Gamma Poisson Distribution( qexpk, qexpl, qexps ) );
			V Line(
				qexpk + 1,
				Gamma Poisson Distribution( qexpk, qexpl, qexps ),
				Gamma Poisson Distribution( qexpk + 1, qexpl, qexps )
			);
		);
		Pen Color( "blue" );
		V Line( Gamma Poisson Quantile( qexpl, qexps, qexpq ), 0, 1 );
		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Gamma Poisson Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Gamma Quantile

**Sintassi:** q = Gamma Quantile( p, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione gamma, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Sintassi:** y = GenGamma Density( x, mu, sigma, lambda )

**Descrizione:** Restituisce la densità a x di una distribuzione di probabilità gamma con parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( GenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-4, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Distribution

**Sintassi:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Descrizione:** Restituisce la probabilità che una variabile casuale gamma generalizzata estesa (con parametri mu, sigma e lambda) sia minore di x.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( GenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Quantile

**Sintassi:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione gamma generalizzata estesa (con parametri mu, sigma e lambda), il valore per cui la probabilità che un valore casuale sia inferiore è p.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( GenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
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
			Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Get Addin

**Sintassi:** Get Addin( ID )

**Descrizione:** Recupera un add-in registrato specificato dall&apos;ID.

**JMP Versione aggiunta:** prima della versione 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Sintassi:** Get Addins( )

**Descrizione:** Restituisce un elenco di tutti gli add-in registrati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Sintassi:** Get Addr Info( string )

**Descrizione:** Ricerca l&apos;indirizzo numerico di un nome. Nella maggior parte dei casi il nome dovrebbe essere utilizzato per la futura compatibilità IPV6.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Class Names

**Sintassi:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di nomi di tutte le classi al momento definite.

**JMP Versione aggiunta:** 14

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

**Sintassi:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di riferimenti a tutte le classi al momento definite

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Get Clipboard()

**Descrizione:** Ottiene il contenuto corrente degli Appunti

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Clipboard();

```

### Get Color Theme Detail

**Sintassi:** script = Get Color Theme Detail(name)

**Descrizione:** Restituisce lo script per un nome tema colore dato

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Sintassi:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Descrizione:** Restituisce un elenco di stringhe di temi di colore che corrispondono al parametro opzionale kind. kind è uno dei seguenti: "continuo", "categorico", "sequenziale", "divergente", "qualitativo" o "cromatico".

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Get Color Theme Names();

```

**Esempio 2**

```jsl

Get Color Theme Names( "sequential" );

```

### Get Custom Functions

**Sintassi:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Descrizione:** Ottiene un elenco di funzioni personalizzate

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Get Custom Functions();

```

**Esempio 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Data Table

**Sintassi:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**Descrizione:** Restituisce un riferimento alla tabella di dati specificata.



La ricerca è limitata alle tabelle nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Sintassi:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**Descrizione:** Restituisce un elenco di tutte le tabelle di dati aperte.



L&apos;elenco è limitato alle tabelle nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Esempio 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Get Default Directory

**Sintassi:** y = Get Default Directory()

**Descrizione:** Restituisce la directory predefinita JMP utilizzata come base per percorsi relativi successivi. Questo percorso è la directory che contiene lo script al momento in esecuzione, se lo script è salvato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Environment Variable

**Sintassi:** value = Get Environment Variable( string )

**Descrizione:** Restituisce dal sistema operativo il valore della variabile di ambiente specificata.



Nota: sul sistema operativo Macintosh il nome della variabile fa distinzione tra maiuscole e minuscole.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Excel Worksheets

**Sintassi:** list = Get Excel Worksheets("filepath")

**Descrizione:** Restituisce un elenco di fogli di lavoro all&apos;interno di una cartella di lavoro di Excel

**JMP Versione aggiunta:** prima della versione 14

```jsl

sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get Expr Location

**Sintassi:** Get Expr Location(&lt;expression&gt;, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Descrizione:** Recupera le posizioni del primo token in un&apos;espressione analizzata. L&apos;invocazione di default restituisce {il file di origine, InizioLineaToken, InizioColToken, LunghezzaToken}.

**JMP Versione aggiunta:** 17

**Output di default**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

**Seleziona l'output**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

**Sostituisce una sottostringa**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

### Get File Search Path

**Sintassi:** y = Get File Search Path()

**Descrizione:** Restituisce l&apos;elenco corrente di directory da ricercare per l&apos;apertura dei file.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get File Search Path();

```

### Get Locale Setting

**Sintassi:** value = Get Locale Setting( settingName )

**Descrizione:** Recupera un&apos;impostazione locale come per esempio il separatore decimale

**JMP Versione aggiunta:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Sintassi:** list = Get Log( &lt;N&gt; )

**Descrizione:** Restituisce un elenco di righe dal log. Se non è specificato alcun argomento, sono restituite tutte le righe dal log. Se l&apos;argomento numerico N è positivo, sono restituite le prime N righe dal log. Se N è un valore negativo, sono restituite le ultime N righe dal log. Se N è pari a zero, non viene restituita alcuna riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Name Info

**Sintassi:** Get Name Info( string )

**Descrizione:** Ricerca il nome di un indirizzo numerico. Nella maggior parte dei casi il nome dovrebbe essere utilizzato per la futura compatibilità IPV6.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Namespace Names

**Sintassi:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di nomi di tutti gli spazi dei nomi correntemente definiti.

**JMP Versione aggiunta:** 14

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

**Sintassi:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di riferimenti a tutti gli spazi dei nomi al momento definiti

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** notebookList = Get Notebook List()

**Descrizione:** Restituisce un elenco di tutti i blocchi appunti aperti.

**JMP Versione aggiunta:** 19

### Get OAuth2 Grant Types

**Sintassi:** Get OAuth2 Grant Types

**Descrizione:** Ottiene i tipi di concessione JMP OAuth2 supportati.

**JMP Versione aggiunta:** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Versione aggiunta:** 15

```jsl


url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Versione aggiunta:** 15

### Get Path Variable

**Sintassi:** value = Get Path Variable( name )

**Descrizione:** Restituisce il valore di una variabile di percorso con un nome del tipo SAMPLE_DATA che viene sostituita se trovata nei nomi di percorso.

**JMP Versione aggiunta:** prima della versione 14

**Elenco**

```jsl

// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME",
"USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS",
"SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );
path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows, {path},
					path = tbl[String Col Box( 2 )] << Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),
								tbl[String Col Box( 2 )] << Get( row )
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
				Transform Each( {var}, path vars, Get Path Variable( var ) )
			),
			<<Set Selectable Rows
		)
	)
);

```

**Esempio 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

### Get Platform Preference

**Sintassi:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Descrizione:** Ottiene preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Sintassi:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Descrizione:** Ottiene preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Sintassi:** Get Policies( &lt;Machine|User|Both&gt; )

**Descrizione:** Restituisce un array associativo contenente i nomi e i valori dei criteri correnti.

**JMP Versione aggiunta:** 18

```jsl

Get Policies();

```

### Get Policy

**Sintassi:** Get Policy( "PolicyName" )

**JMP Versione aggiunta:** 18

### Get Preference

**Sintassi:** Get Preferences( pref1, ... )

**Descrizione:** Ottiene preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Sintassi:** Get Preferences( pref1, ... )

**Descrizione:** Ottiene preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Preferences( Graph marker size );

```

### Get Project

**Sintassi:** project = Get Project( title|index|box|window )

**Descrizione:** Restituisce un riferimento a un progetto specifico aperto per titolo, indice, o riquadro.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Esempio 2**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Sintassi:** projectList = Get Project List()

**Descrizione:** Restituisce un elenco di tutti i progetti aperti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Punctuation Characters

**Sintassi:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Descrizione:** Restituisce una stringa contenente i caratteri di punteggiatura che sono tipicamente utilizzati per delimitare le parole, tra cui ,:;.?!\\/#@&~()[]<>"*`%$+=^|{} e qualche segno di punteggiatura Unicode comune.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Get Punctuation Characters();

```

**Esempio 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**Esempio 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Esempio 4**

```jsl

Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**Sintassi:** Get Session Script( win1, ... )

**Descrizione:** Restituisce lo script di sessione per le finestre specificate. Lo script di sessione è un&apos;espressione JSL che ricreerà le finestre specificate, incluse tabelle di dati, finestre di script, journal e report. I report creati tramite script JSL hanno un supporto limitato e tenteranno di ricreare solo il layout di visualizzazione.

**JMP Versione aggiunta:** 17

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Sintassi:** Get Whitespace Characters()

**Descrizione:** Restituisce una stringa contenente tutti i caratteri spazio vuoto tipicamente utilizzati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Whitespace Characters();

```

### Get Window

**Sintassi:** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**Descrizione:** Restituisce un riferimento una specifica finestra aperta per titolo, indice o riquadro.



La ricerca è limitata alle finestre nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Usare l&apos;argomento facoltativo Tipo() con un&apos;opzione tra "Tabelle di dati", "Journal", "Report" o "Finestre di dialogo" per limitare la ricerca a finestre di un particolare tipo.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Esempio 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Sintassi:** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**Descrizione:** Restituisce un elenco di tutte le finestre aperte.



L&apos;elenco è limitato alle finestre nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Usare l&apos;argomento facoltativo Tipo() con un&apos;opzione tra "Tabelle di dati", "Journal", "Report" o "Finestre di dialogo" per limitare l&apos;elenco a finestre di un particolare tipo.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Print( Get Window List() << Get Window Title() );

```

**Esempio 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Esempio 3**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**Sintassi:** box = Global Box( name )

**Descrizione:** Crea un riquadro di visualizzazione che mostra il valore di una variabile globale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = .6;
New Window( "Example", Global Box( ex ) );

```

### GLog Density

**Sintassi:** y = GLog Density( q, mu, sigma, lambda )

**Descrizione:** Restituisce la densità a q di una distribuzione logaritmica generalizzata con posizione mu, scala sigma e forma lambda.

**JMP Versione aggiunta:** prima della versione 14

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
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Distribution

**Sintassi:** p = GLog Distribution( q, mu, sigma, lambda )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita con logaritmo generalizzato sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( GLog Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Quantile

**Sintassi:** q = GLog Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione logaritmica generalizzata, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( GLog Distribution( x, mu, sigma, lambda ), x );
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
		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Glue

**Sintassi:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Descrizione:** Valuta ogni argomento e restituisce l&apos;ultimo risultato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex1 = 1;
ex2 = 2;

```

### Google Sheet Export

**Sintassi:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Descrizione:** Esporta una tabella di dati in un nuovo foglio di lavoro Google o in un nuovo foglio all&apos;interno di un foglio di lavoro Google esistente.

**JMP Versione aggiunta:** 15

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

**Sintassi:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**Descrizione:** Apre un file Google Sheet.

**JMP Versione aggiunta:** 15

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

**Sintassi:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Descrizione:** Riempie il grafico con un gradiente tra due colori. L&apos;argomento zExpr è una funzione nei termini delle variabili specificate da xName e yName. Il vettore zLimits specifica il range di valori per zExpr. L&apos;argomento zColor è un vettore o un elenco che definisce i due colori da fondere insieme per creare il gradiente. La Transparency è un singolo valore applicato all&apos;intera griglia.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Graph Box( props, script )

**Descrizione:** Restituisce una finestra di visualizzazione contenente un grafico con gli assi. Gli argomenti delle proprietà con nome possono essere title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Graph 3D Box()

**Descrizione:** (Sperimentale) Restituisce un riquadro di visualizzazione con contenuto 3D che può essere utilizzato con altri riquadri di visualizzazione per creare report personalizzati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
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

**Sintassi:** y = Graph Box( props, script )

**Descrizione:** Restituisce una finestra di visualizzazione contenente un grafico con gli assi. Gli argomenti delle proprietà con nome possono essere title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è maggiore del successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Sintassi:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è maggiore o uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

3 >= 2 >= 2;

```

### Gzip Compress

**Sintassi:** blob = Gzip Compress( blob )

**Descrizione:** Comprime un blob di dati in un blob gzip.

**JMP Versione aggiunta:** 14

```jsl

Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Sintassi:** blob = Gzip Uncompress( blob )

**Descrizione:** Decomprime un blob di dati gzip in un blob.

**JMP Versione aggiunta:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### H Center Box

**Sintassi:** y = H Center Box( &lt;childbox&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione con l&apos;argomento del riquadro di visualizzazione childbox centrato nello spazio orizzontale definito dalle dimensioni massime dell&apos;oggetto figlio e di tutti gli altri oggetti di pari livello del riquadro centrale.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = H Direct Product( A, B )

**Descrizione:** Restituisce il prodotto diretto orizzontale che è il prodotto diretto di ogni riga di matrici A e B.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2];
exProd = H Direct Product( exA, exB );
Show( exProd );

/* verify result */
Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );
Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### H Line

**Sintassi:** H Line( y ); H Line( x1, x2, y )

**Descrizione:** Disegna una linea orizzontale su y da x1 a x2 o nell&apos;intero frame.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H List Box

**Sintassi:** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout orizzontale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento bottom o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### H Scroll Box

**Sintassi:** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che posiziona un riquadro figlio più grande mediante una barra di scorrimento orizzontale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Sintassi:** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout orizzontale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento right o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

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
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Size

**Sintassi:** h = H Size()

**Descrizione:** Restituisce la dimensione orizzontale del frame del grafico in pixel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### H Splitter Box

**Sintassi:** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che può organizzare altri riquadri in direzione orizzontale o verticale con controllo interattivo delle dimensioni. Le dimensioni dell&apos;elemento figlio sono specificate come proporzione della larghezza o dell&apos;altezza del Splitter Box. L&apos;argomento facoltativo Size è utilizzato solo per il riquadro di suddivisione più in alto; i riquadri di livello inferiore sono dimensionati come qualsiasi altro riquadro figlio.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
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

**Sintassi:** y = Hadamard( n, &lt;normalize = 0&gt; )

**Descrizione:** Crea una matrice di Hadamard di ordine n.

**JMP Versione aggiunta:** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Handle

**Sintassi:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Descrizione:** Disegna un indicatore quadrato alle coordinate specificate da xPos e yPos e valuta ripetutamente dragScript quando si preme il mouse sull&apos;indicatore. Prima di eseguire lo script, le x e y globali sono impostate al valore del mouse e ripristinate poi ai valori originali. L&apos;espressione mouseUpScript viene eseguita dopo il rilascio del pulsante del mouse.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Head( x )

**Descrizione:** Restituisce la testa dell&apos;espressione valutata, senza argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Sintassi:** y = Head Expr( expr )

**Descrizione:** Restituisce la testa dell&apos;espressione, senza argomenti. Questa funzione è obsoleta. Al suo posto usare Head().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Esempio 2**

```jsl

// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Sintassi:** y = Head Name( x )

**Descrizione:** Restituisce la testa dell&apos;espressione valutata come stringa, senza argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Sintassi:** y = Head Name Expr( expr )

**Descrizione:** Restituisce la testa dell&apos;espressione come stringa, senza argomenti. Questa funzione è obsoleta. Al suo posto usare Head Name().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Esempio 2**

```jsl

// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### Heat Color

**Sintassi:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Descrizione:** Restituisce un colore corrispondente a un valore tra 0 e 1. Il tema predefinito è "Da blu a grigio a rosso". Tutti i temi supportati dal diagramma a celle sono supportati qui. Gli argomenti delle matrici sono supportati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Hex

**Sintassi:** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Descrizione:** Restituisce il testo esadecimale (o altro sistema di numerazione base) corrispondente al valore e codifica specificati, che possono essere un numero, una stringa o un blob. Se il valore è un numero, si utilizza la codifica IEEE 754 a 64 bit, a meno che sia indicato uno degli argomenti facoltativi, integer o Base. Se è specificata Base, la funzione restituisce il testo corrispondente al numero specificato in tale sistema numerico base specificato invece di esadecimale. La base deve essere un numero intero tra 2 e 36 compresi. Le codifiche supportate comprendono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis e euc-jp.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Sintassi:** blob = Hex To Blob( hex string )

**Descrizione:** Crea un BLOB (Binary Large Object) dalla stringa specificata di codici esadecimali che possono anche comprendere spazi, virgole, ritorni a capo e avanzamenti righe.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hex To Blob( "FF78CE" );

```

### Hex To Char

**Sintassi:** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Descrizione:** Restituisce il testo corrispondente al testo esadecimale utilizzando la codifica specificata. Le codifiche supportate sono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis e euc-jp.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Sintassi:** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Descrizione:** Restituisce il numero corrispondente al testo esadecimale (o altro sistema di numerazione base). 16 cifre esadecimali sono convertite come numeri in virgola mobile IEEE 754 a 64 bit; altrimenti l&apos;input è trattato come numero intero esadecimale. Se è specificata Base, il testo è trattato come una stringa rappresentante il numero in tale base. La base deve essere un numero intero compreso tra 2 e 36 inclusi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hex To Number( "11110000", Base( 2 ) );

```

### Hidden

**Sintassi:** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descrizione:** Restituisce la componente nascosta del valore specificato dello stato della riga, 0 o 1. Se si utilizza Nascosto come valore L, esso modifica lo stato nascosto della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Sintassi:** rs = Hidden State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente nascosta impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hier Box

**Sintassi:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Descrizione:** Restituisce una finestra di visualizzazione per alberi gerarchici. L&apos;argomento text è il nome del nodo e può essere una Text Edit Box.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hier Clust

**Sintassi:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Descrizione:** Restituisce la cronologia di clusterizzazione per una clusterizzazione gerarchica con metodo di Ward (senza standardizzazione dei dati), dove x è una matrice di dati.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**Descrizione:** Restituisce un segmento cronologico

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### HLS Color

**Sintassi:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Descrizione:** Restituisce un numero di colore a partire dalle componenti tonalità, luminosità e saturazione, tutte tra 0 e 1.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Descrizione:** Restituisce 1 se l&apos;applicazione JMP ha una corrispondenza con l&apos;argomento; 0 in caso contrario. Gli argomenti Windows o Mac corrispondono al test per il sistema operativo specificato e gli argomenti Bits32 o Bits64 corrispondono al test per l&apos;applicazione JMP a 32 o 64 bit specificata. Si può sottoporre a test un solo argomento alla volta.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Descrizione:** Restituisce la trasformazione di Hough per rilevare le linee in dati di immagine

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

xx = .4;
yy = .4;
angleDegrees = (1 :: 180)`;
angle = Pi() * angleDegrees / (180);
New Window( "Hough Transform Demo 1",
	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),
		V List Box(
			Text Box( "Click and drag the circle in a straight line." ),
			Graph Box(
				X Scale( -1, 1 ),
				Y Scale( -1, 1 ),
				Circle( {xx, yy}, .05 );
				Text( {xx + .1, yy + .1}, Char( xx, 4 ) || " " || Char( yy, 4 ) );
				Mousetrap(
					xx = x;
					yy = y;
					gb << reshow;
				);
			),
			Text Box( "For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)" ),
			Text Box( "What position stays constant as you move?" ),
			gb = Graph Box(
				X Scale( 0, 180 ),
				XName( "Angle" ),
				Y Scale( -1.5, 1.5 ),
				YName( "Distance to Line" ),
				Line( angleDegrees, xx * Cos( angle ) + yy * Sin( angle ) )
			)
		)
	)
);

```

**Esempio 2**

```jsl

nRow = 35;
nCol = 35;

// Make a wafer template missing outside a radius
waferTemplate = J( nRow, nCol, 0 );
If( 0,
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			If( (i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow + nCol) / 4) ^ 2,
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
			Rect( i - nrow / 2, j - nCol / 2, i - nrow / 2 - 1, j - nCol / 2 + 1, 1 );
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
	radiusScale = 3 * Max( radiusDensity ) / Mean( radiusDensity );
	radiusColor = Heat Color( radiusDensity / radiusScale );
	If( 1,
		angleDensity = V Max( accum );
		angleScale = 3 * Max( angleDensity ) / Mean( angleDensity );
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
			Text Box( "Click to add points in the top frame along a slanted line." ),
			Text Box( "The Hough transform is shown below with marginal densities." ),
			Text Box( "" ),
			H List Box(
				Button Box( "Clear",
					wafer = waferTemplate;
					bothBox << Reshow;
				),
				Button Box( "Add Random",
					wafer = wafer | J( nRow, nCol, Random Uniform() < .05 );
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

**Sintassi:** hr = Hour( datetime, &lt;12&gt; )

**Descrizione:** Restituisce l&apos;ora di un valore di data e ora, in modalità 12 ore (12, 1 - 11) o 24 ore (0 - 23).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hour( Today() );

```

### HP Time

**Sintassi:** t = HP Time()

**Descrizione:** Restituisce un valore di tempo ad alta precisione in microsecondi. Utile solamente rispetto a un altro valore HP Time(). Il valore di tempo rappresenta il numero di microsecondi dall&apos;inizio della sessione di JMP.

**JMP Versione aggiunta:** prima della versione 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hue State

**Sintassi:** rs = Hue State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente tonalità colore impostata al valore specificato. Necessita della combinazione con un valore Shade State() per produrre un colore valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Hypergeometric Distribution

**Sintassi:** cumprob = Hypergeometric Distribution( N, K, n, x, &lt;r&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione ipergeometrica sia minore o uguale a x. N è la dimensione della popolazione, K è il numero di elementi nella categoria osservata, n è la dimensione campionaria, x è il conteggio della frequenza nella categoria osservata, r è l&apos;odds ratio facoltativo.

**JMP Versione aggiunta:** prima della versione 14

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
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx )
			);
			V Line(
				exhdx + 1,
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx ),
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx + 1 )
			);
		);
		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );
	),
	H List Box( Slider Box( 0, 20, exhdK, exy << reshow ), Text Box( " K" ) ),
	H List Box( Slider Box( 0, 20, exhdn, exy << reshow ), Text Box( " n" ) )
);

```

### Hypergeometric Probability

**Sintassi:** prob = Hypergeometric Probability( N, K, n, x, &lt;r&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione ipergeometrica sia uguale a x. N è la dimensione della popolazione, K è il numero di elementi nella categoria osservata, n è la dimensione campionaria, x è il conteggio della frequenza nella categoria osservata, r è l&apos;odds ratio facoltativo.

**JMP Versione aggiunta:** prima della versione 14

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
				Hypergeometric Probability( 20, Round( exhdK ), Round( exhdn ), exhdx )
			)
		);
		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );
	),
	H List Box( Slider Box( 0, 20, exhdK, exhdy << reshow ), Text Box( " K" ) ),
	H List Box( Slider Box( 0, 20, exhdn, exhdy << reshow ), Text Box( " n" ) )
);

```

### Icon Box

**Sintassi:** Box = Icon Box( "Name" )

**Descrizione:** Costruisce un riquadro di visualizzazione contenente un&apos;icona, in cui l&apos;argomento name può essere il nome di un&apos;icona di JMP o il percorso di un&apos;immagine.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

```jsl

New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### Identity

**Sintassi:** y = Identity( n )

**Descrizione:** Crea una matrice di identità n-per-n con 1 in diagonale e zero altrove.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Identity( 2 );

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

### If Box

**Sintassi:** box = If Box( 0|1, displayBoxArgs )

**Descrizione:** Restituisce un riquadro di visualizzazione che visualizza in modo condizionale gli argomenti del riquadro di visualizzazione specificato.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** seg = If Seg(&lt;state=0|1&gt;)

**Descrizione:** Restituisce un segmento di visualizzazione che mostra o nasconde gli elementi figlio del segmento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

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

### IGamma

**Sintassi:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione gamma sia inferiore a q, dove l&apos;argomento del parametro della forma alpha deve essere positivo. IGamma() è un nome di alias della Gamma Distribution(). La funzione Gamma Distribution() è equivalente a Gamma(alpha,q)/Gamma(alpha).

**JMP Versione aggiunta:** prima della versione 14

```jsl

gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### In Days

**Sintassi:** y = In Days( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di giorni nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Days( 1.5 );

```

### In Hours

**Sintassi:** y = In Hours( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di ore nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Sintassi:** y = In Minutes( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di minuti nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Minutes( 1 );

```

### In Path

**Sintassi:** b = In Path( x, y, pathMatrix|pathText )

**Descrizione:** Restituisce 1 se il punto (x,y) è nel percorso dato e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Sintassi:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Descrizione:** Restituisce 1 se il punto (x,y) è nel poligono definito dagli argomenti dei vettori, in caso contrario restituisce 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### In Weeks

**Sintassi:** y = In Weeks( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di settimane nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Weeks( 1 );

```

### In Years

**Sintassi:** y = In Years( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di anni nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Years( 1 );

```

### Include

**Sintassi:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Descrizione:** Esegue il JSL nel  file specificato. Se è specificato Parse Only, lo script viene analizzato e non eseguito. Se è specificato New Context, il JSL incluso viene eseguito nel proprio spazio dei nomi univoco. Se sia gli script dell&apos;elemento principale che quelli inclusi usano lo spazio dei nomi globale, specificare sia New Context sia Names Default to Here, per evitare conflitti nei nomi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Sintassi:** y = Include File List()

**Descrizione:** Restituisce un elenco di file inclusi al punto dell&apos;esecuzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

y = Include File List();

```

### Index

**Sintassi:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Descrizione:** Restituisce una matrice di riga che contiene la sequenza di valori da n1 a n2 per incrementi di n3.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 :: 10;

```

### Informat

**Sintassi:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descrizione:** Analizza una stringa di un dato formato. Se si tratta di un formato di data e ora, il valore è espresso come se fosse racchiuso in Come data(), restituendo la data nel formato ggmmmaaaa. L&apos;opzione facoltativa <<Restrict utilizzata con il formatString "migliore" consente solo la conversione usando formati interi, decimali e scientifici.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Esempio 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Esempio 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Esempio 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Esempio 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Inner Product BLAS

**Sintassi:** y = Inner Product BLAS( A, B, ... )

**JMP Versione aggiunta:** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Insert

**Sintassi:** z = Insert( x, y, &lt;i&gt; )

**Descrizione:** Restituisce una copia dell&apos;elenco x con y inserito alla i-esima posizione o aggiunto alla fine se l&apos;argomento facoltativo i non è specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Sintassi:** Insert Into( x, y, &lt;i&gt; )

**Descrizione:** Modifica l&apos;elenco, l&apos;array associativo o il riquadro di visualizzazione x con y inserito nella raccolta. Gli elenchi e i riquadro di visualizzazione supportano un i facoltativo per specificare la posizione oppure gli elementi vengono accodati se non si specifica la posizione. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Esempio 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Esempio 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Integrate

**Sintassi:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**Descrizione:** Integra un&apos;espressione rispetto a un valore scalare usando il metodo della quadratura adattiva di Gander e Gautschi (2000). Se la variabile specificata con varname ha un valore assegnato o l&apos;argomento opzionale <<StartingValue() specifica un valore di partenza, quel valore è usato come valore tipico per migliorare la precisione dell&apos;integrale. Per specificare range infiniti di integrazione, impostare lowLimit e/o upLimit a mancante. Se è specificato <<StoreInfo(), l&apos;argomento di <<StoreInfo() conterrà le diagnostiche della routine di integrazione numerica. Se è specificato <<Tolleranza(), l&apos;argomento di <<Tolleranza() è usato come livello di tolleranza nella funzione di autointegrazione usata per valutare l&apos;integrale. Valori inferiori producono un runtime più lungo, ma risultati più precisi.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Integrate( Exp( -x ), x, 0, . );

```

**Esempio 2**

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Interest Payment

**Sintassi:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il pagamento dell&apos;interesse per un dato periodo per un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione IPMT in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Sintassi:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Descrizione:** Restituisce il tasso di interesse per periodo di una rendita. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione RATE in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Sintassi:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; );x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Descrizione:** Restituisce il tasso di ritorno interno per una serie di flussi di cassa rappresentati dai numeri nell&apos;argomento values. Equivalente alla funzione IRR in Microsoft Excel. Il secondo prototipo della funzione accetta tutti gli argomenti scalari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Interpolate

**Sintassi:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Descrizione:** Trova gli argomenti xi tra i quali si trova x e interpola linearmente i corrispondenti argomenti yi. Nota: gli argomenti xi devono essere specificati in ordine.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Esempio 3**

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Esempio 4**

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

**Sintassi:** y = Inverse( x ); y = Inv( x )

**Descrizione:** Restituisce l&apos;inverso dell&apos;argomento x che deve essere una matrice quadrata e non singolare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Sintassi:** y = Inv Update( S, X, &lt;w=1&gt; )

**Descrizione:** Restituisce una matrice inversa aggiornata, dove il primo argomento S è una matrice simmetrica definita positiva, con lo stesso numero di colonne di X, il secondo argomento X è una matrice che contiene le righe da aggiungere o eliminare e il terzo argomento w determina se le righe debbano essere aggiunte o eliminate (utilizzare 1 per aggiungere righe e -1 per eliminarle). Questa funzione viene valutata come S-w*S*X`*Inv(I+w*X*S*X`)*X*S, dove I è una matrice di identità e Inv(A)indica una matrice inversa di A.

**JMP Versione aggiunta:** prima della versione 14

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
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
Show( Inverse( (exX |/ X)` * (exX |/ X) ) );
Show( "----------Deleting Rows (w=-1) --------" );
X = [0 1 5 2, 0 1 2 1, 0 1 4 5];
w = -1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
p = N Row( exX ) - 3;
Show( Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] ) );

```

### Inverse

**Sintassi:** y = Inverse( x ); y = Inv( x )

**Descrizione:** Restituisce l&apos;inverso dell&apos;argomento x che deve essere una matrice quadrata e non singolare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Invert Expr

**Sintassi:** y = Invert Expr( expr, xname, yname )

**Descrizione:** Inverte l&apos;argomento espressione expr, rivelando la singola occorrenza di xname.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### IRT Ability

**Sintassi:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Descrizione:** Produce score per la variabile latente in un modello di teoria della risposta dell&apos;elemento con elementi binari n e una matrice dei parametri noti, specificata da parmMatrix. La matrice dei parametri deve contenere tante righe quanti parametri nel modello e tante colonne quanti elementi nell&apos;analisi.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
mth = (dt << get as matrix)[0, Index( 2, 6 )];
mthlst = {};
i = Floor( Random Uniform( 1, N Rows( mth ) ) );
mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];
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

**Sintassi:** y = Is Alt Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Alt e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica. Sul Mac, Alt corrisponde al tasto Option.

**JMP Versione aggiunta:** prima della versione 14

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

### Is Command Key

**Sintassi:** y = Is Command Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Comando e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Is Context Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Contesto e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Is Control Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Ctrl e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica. Sul Mac, Ctrl corrisponde al tasto Command.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** rc = Is Directory( path )

**Descrizione:** Determina se il percorso specificato è una directory. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Sintassi:** rc = Is Directory Writable( path )

**Descrizione:** Determina se il percorso della directory specificata è scrivibile. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is Empty

**Sintassi:** y = Is Empty( name )

**Descrizione:** Restituisce 1 se la variabile non è definita o contiene il valore Empty().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Is Empty( x );

```

**Esempio 2**

```jsl

x = Empty();
Is Empty( x );

```

**Esempio 3**

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

### Is File

**Sintassi:** rc = Is File( path )

**Descrizione:** Determina se il percorso specificato è un file. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Sintassi:** rc = Is File Writable( path )

**Descrizione:** Determina se il percorso del file specificato è scrivibile. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### Is JMP Live URL Enabled

**Sintassi:** Is JMP Live URL Enabled(url)

**Descrizione:** Determina se l&apos;URL specificato può essere usato in questa sessione di JMP. Gli URL possono essere abilitati e/o disabilitati mediante lo script jmpStartAdmin.jsl. Ciò non determina se l&apos;URL è valido o meno, né se l&apos;utente è in grado di accedere. Determina solo se l&apos;URL è bloccato da JMP.

**JMP Versione aggiunta:** 15

```jsl


url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Leap Year

**Sintassi:** v = Is Leap Year(year)

**Descrizione:** Restituisce se un anno specificato è un anno bisestile.

**JMP Versione aggiunta:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Is List

**Sintassi:** y = Is List( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un elenco e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is List( {1, 2, 3} );

```

### Is Log Open

**Sintassi:** Is Log Open()

**Descrizione:** Restituisce un risultato per indicare se la finestra Log è aperta

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

If( Is Log Open(),
	Close Log()
);

```

**Esempio 2**

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Is Matrix

**Sintassi:** y = Is Matrix( x )

**Descrizione:** Restituisce 1 se l&apos;argomento è una matrice, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Matrix( [11 22 33] );

```

### Is Missing

**Sintassi:** y = Is Missing( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un valore mancante e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Missing( . );

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

### Is Option Key

**Sintassi:** y = Is Option Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Opzione e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** x = Is Same Color( color1, color2, ... )

**Descrizione:** Confronta i colori per verificarne l&apos;uguaglianza.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Is Same Color( "black", 0 );

```

**Esempio 2**

```jsl

Is Same Color( "red", "green", "blue" );

```

**Esempio 3**

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Esempio 4**

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Is Scriptable

**Sintassi:** tf = Is Scriptable( x )

**Descrizione:** Restituisce 1 se x è un oggetto che supporta script e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is Shift Key

**Sintassi:** y = Is Shift Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Maiusc e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Is String( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è una stringa e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is String( "abc" );

```

### ISO Year

**Sintassi:** yr = ISO Year( datetime )

**Descrizione:** Restituisce l&apos;anno ISO di un valore di data e ora. Gli anni ISO corrispondono alle settimane ISO; iniziano il lunedì della prima settimana che contiene almeno quattro giorni.

**JMP Versione aggiunta:** 16

```jsl

ISO Year( Today() );

```

### Item

**Sintassi:** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descrizione:** Restituisce l&apos;n-esimo elemento dell&apos;argomento s, dove gli elementi sono le sottostringhe (possibilmente vuote) separate esattamente da uno qualsiasi dei caratteri specificati nell&apos;argomento delim. Se delim è assente viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come un elemento separato.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Item( 5, "http://www.jmp.com", ":/." );

```

**Esempio 2**

```jsl

Item( [2 -1], "This is a sentence" );

```

**Esempio 3**

```jsl

Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Esempio 4**

```jsl

Item( 5, "a b c d", Unmatched( "None" ) );

```

**Esempio 5**

```jsl

Item( 2, "abcd", "" );

```

**Esempio 6**

```jsl

Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Sintassi:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descrizione:** Restituisce un elenco di sottostringhe (eventualmente vuote) separate esattamente da uno qualsiasi dei caratteri specificati nell&apos;argomento delim. Se delim è assente, viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come un elemento separato.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Esempio 2**

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Esempio 3**

```jsl

Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Esempio 4**

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### J

**Sintassi:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Descrizione:** Crea una matrice (nr per nc) di valori determinati dal terzo argomento. Il valore predefinito del secondo argomento è uguale al primo argomento. Il valore di default del terzo argomento è 1. Ma il terzo argomento può essere un numero, il nome di una variabile di un numero o un codice JSL. Se il terzo argomento è codice, il codice viene valutato e il valore di ritorno è assegnato a ogni elemento della matrice, elemento per elemento, riga per riga.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = JMP Product Name()

**Descrizione:** Restituisce "Standard" o "Pro" in base alla versione del prodotto che è stata licenziata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

JMP Product Name();

```

### JMP Version

**Sintassi:** y = JMP Version()

**Descrizione:** Restituisce la versione di JMP (release.revision{.fix}); non disponibile prima della 6.0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

JMP Version();

```

### Johnson Sb Density

**Sintassi:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la densità a q di una distribuzione Johnson Sb, dove q è compreso nell&apos;intervallo theta a theta + sigma, delta>0 e gamma tra -∞ e +∞ sono parametri di forma, sigma>0 è un parametro di scala, e theta tra -∞ e +∞ è un parametro di soglia. Nota: thetaè il punto finale inferiore della distribuzione e sigma è l&apos;intervallo del supporto della distribuzione.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( Johnson Sb Density( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( 0, 1, gamma, jsbp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsbp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -2, 2, theta, jsbp << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 10, sigma, jsbp << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Distribution

**Sintassi:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita Sb di Johnson sia inferiore a q. (Nota: vedere la funzione Johnson Sb Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( Johnson Sb Distribution( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( 0, 1, gamma, jsbc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 1, delta, jsbc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 1, theta, jsbc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 4, sigma, jsbc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Quantile

**Sintassi:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Descrizione:** Restituisce il quantile da una distribuzione Sb di Johnson, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p. (Nota: p è il primo parametro. Vedere la funzione Johnson Sb Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Sintassi:** y = Johnson Sl Density( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la densità a q di una distribuzione Johnson Sl, dove q è nell&apos;intervallo a theta +∞, delta>0 e gamma tra -∞ e +∞ sono parametri di forma, sigmauguale a +1 o -1 è un parametro di scala, e theta tra -∞ e +∞ è un parametro di soglia. Nota: quando sigma = 1, thetaè il limite inferiore sulla distribuzione, e quando sigma=-1, thetaè il limite superiore. Inoltre, positivo implica sigma spostamento positivo, e negativo implica spostamento negativo sigma.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( Johnson Sl Density( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Distribution

**Sintassi:** p = Johnson Sl Distribution( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita Sl di Johnson sia inferiore a q. (Nota: vedere la funzione Johnson Sl Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( Johnson Sl Distribution( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Quantile

**Sintassi:** q = Johnson Sl Quantile( p, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione Sl di Johnson, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p. (Nota: p è il primo parametro. Vedere la funzione Johnson Sl Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Sintassi:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la densità di una distribuzione qJohnson Su, dove q è compreso tra -∞ e +∞, delta>0 e gamma compresso -∞ e +∞ sono parametri di forma, sigma>0 è un parametro di scala, e theta tra -∞ e +∞ è un parametro di soglia.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( Johnson Su Density( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( 0, 1, gamma, y << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, y << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, y << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, y << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Distribution

**Sintassi:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita Su di Johnson sia inferiore a q. (Nota: vedere la funzione Johnson Su Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( Johnson Su Distribution( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Quantile

**Sintassi:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Descrizione:** Restituisce il quantile da una distribuzione Su di Johnson, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p. (Nota: p è il primo parametro. Vedere la funzione Johnson Su Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Journal Box

**Sintassi:** y = Journal Box( journalText )

**Descrizione:** Costruisce un riquadro di visualizzazione da istruzioni che sarebbero memorizzate in un journal.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### JSL Encrypted

**Sintassi:** y = JSL Encrypted(script)

**Descrizione:** Inserisce uno script crittografato all&apos;interno di un altro script. Creare uno script crittografato selezionando Modifica > Crittografa script dal menu principale di un editor di script. Inserendo le password il testo crittografato viene visualizzato in una nuova finestra. Copiare questo testo in un comando JSL crittografato("") per inserire lo script crittografato in un altro script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Sintassi:** y = JSL Quote(script)

**Descrizione:** Memorizza uno script JSL in una variabile, inclusi tutti i commenti e la formattazione.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** l = JSON Literal( string )

**Descrizione:** Restituisce un valore JSON booleano valido o un valore costante nullo in base alla specifica del parametro.

**JMP Versione aggiunta:** 14

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

**Sintassi:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**Descrizione:** Converte testo JSON in una tabella di dati JMP

**JMP Versione aggiunta:** 14

```jsl

dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Sintassi:** l = JSON To List( jsonstring )

**Descrizione:** Converte il testo JSON in un elenco JSL rappresentando la struttura specificata dai dati JSON.

**JMP Versione aggiunta:** prima della versione 14

```jsl

l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### JSS Context Box

**Sintassi:** y = JSS Context Box( displayBox )

**JMP Versione aggiunta:** 19

```jsl

New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) << Background Color( "Blue" );
			)
		)
	)
);

```

### KDE

**Sintassi:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Descrizione:** Restituisce uno stimatore kernel della densità con selezione automatica della bandwidth. L&apos;argomento facoltativo weights deve essere un vettore della stessa lunghezza dell&apos;argomento Vector. L&apos;argomento facoltativo bandwidth deve essere un numero reale non negativo o zero, obbligando a utilizzare il valore dell&apos;argomento bandwidth selection. L&apos;argomento facoltativo bandwidth scale deve essere un numero reale positivo. L&apos;argomento facoltativo bandwidth selection deve essere 0, 1, 2, o 3, in corrispondenza rispettivamente di Sheather e Jones, Riferimento normale, regola del pollice di Sliverman o Oversmoother. L&apos;argomento facoltativo kernel accetta i valori 0, 1, 2, 3, o 4, corrispondenti rispettivamente a Gaussiano, Epanechnikov, Bipeso, Triangolare o Rettangolare.

**JMP Versione aggiunta:** prima della versione 14

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

kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};
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
		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),
		Line( X, Y( 1 ), Legend( 3 ) )
	)
);

```

### KDTable

**Sintassi:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Descrizione:** Restituisce una tabella per la ricerca efficace dei vicini prossimi. Gli argomenti della matrice sono punti k-dimensionali. Non esiste alcun limite al numero di dimensioni o punti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Labeled

**Sintassi:** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descrizione:** Restituisce la componente etichettata del valore specificato dello stato della riga, 0 o 1. Se si utilizza Etichettato come valore L, esso modifica lo stato etichettato della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Sintassi:** rs = Labeled State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente etichettata impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Lag

**Sintassi:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**Descrizione:** Restituisce il valore di x con la riga attuale definita come Row() - n. Poiché dipende da Row(), Lag() è utile soprattutto nelle formule di colonna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### Last Modification Date

**Sintassi:** date = Last Modification Date( path )

**Descrizione:** Restituisce l&apos;ultima data di modifica di un file o di una directory. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Least Squares Solve

**Sintassi:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Descrizione:** Restituisce un elenco che contiene un vettore di stime, Beta = Inverse(X&apos;X)X&apos;y, e la matrice di varianza stimata di Beta. L&apos;argomento facoltativo <<noIntercept specifica un modello senza intercetta. L&apos;argomento facoltativo <<weights specifica un vettore di pesi per effettuare minimi quadrati pesati. L&apos;argomento facoltativo <<method consente di scegliere tra il metodo predefinito Sweep e un metodo inverso generalizzato ("GInv") per la risoluzione delle equazioni normali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Left

**Sintassi:** sub = Left( s, n, &lt;filler&gt; )

**Descrizione:** Restituisce una versione troncata o riempita della stringa o elemento originale s. Il risultato contiene i caratteri n di sinistra o gli elementi dell&apos;elenco, riempiti con qualsiasi filler sulla destra se la lunghezza di s è inferiore a n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Sintassi:** l = Length( x )

**Descrizione:** Restituisce la lunghezza della stringa data (in caratteri), elenco (in elementi), array associativo (in numero di chiavi), blob (in byte), matrice (in elementi) o spazio dei nomi/classe (in numero di funzioni e variabili).

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Length( "Café" );

```

**Esempio 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**Esempio 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**Esempio 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### LenthPSE

**Sintassi:** y = LenthPSE( x )

**Descrizione:** Restituisce l&apos;errore pseudo-standard di Lenth dei valori entro un unico vettore x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Less

**Sintassi:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è minore del successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Sintassi:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Descrizione:** Restituisce 1 se il primo argomento è minore del secondo e se ciascun argomento eccetto il primo è minore o uguale al successivo; restituisce 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Sintassi:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è minore o uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Sintassi:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Descrizione:** Restituisce 1 se il primo argomento è minore o uguale al secondo e se ciascun argomento eccetto il primo è minore del successivo; restituisce 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

2 <= 2 < 3;

```

### LEV Density

**Sintassi:** y = LEV Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione del valore estremo più grande con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### LEV Distribution

**Sintassi:** p = LEV Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione del valore estremo più grande con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### LEV Quantile

**Sintassi:** q = LEV Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione del valore estremo più grande con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Level Color

**Sintassi:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Descrizione:** Restituisce un colore di categoria, dove i è il livello di categoria; n è il numero di categorie (opzionale);e theme sono i temi di colore nella casella campo Colore Valore della finestra di dialogo Info colonna. ("Predefinito JMP" è il tema predefinito.) L&apos;indice di categoria deve essere >= 1 e <= il numero di categorie specificato nella chiamata o definito dal tema. Se il secondo argomento è un carattere, si tratta del tema colore e non è specificaton.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### LGamma

**Sintassi:** y = LGamma( x )

**Descrizione:** Restituisce il logaritmo naturale della funzione gamma di x. Utile quando gamma(x) è troppo grande per utilizzarlo direttamente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

LGamma( 5 );

```

### Line

**Sintassi:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Descrizione:** Disegna una linea o linee collegate. Nel caso di default, la linea è disegnata in modo lineare tra i punti finali. Se è impostata l&apos;opzione Value Space, la linea seguirà la proiezione specificata dalle scale degli assi sottostanti. Se è impostata l&apos;opzione Smooth, le connessioni sono sottoposte a smoothing, vincolate per tension, domain dimension, min response e max response.

**JMP Versione aggiunta:** prima della versione 14

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
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );
	)
);

```

**Polyline**

```jsl

New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

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

**Sintassi:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Descrizione:** Restituisce un segmento di visualizzazione con linee che collegano tutti i valori x e y.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Line Style

**Sintassi:** Line Style( x )

**Descrizione:** Imposta lo stile di linea corrente, scegliendo uno dei seguenti: 0 (continua), 1 (punteggiata), 2 (tratteggiata), 3 (trattino-punto), 4 (trattino-punto-punto).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Linear Regression

**Sintassi:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Descrizione:** Stima una regressione lineare per il modello ipotizzato y = X * beta + error. L&apos;argomento facoltativo <<noIntercept specifica un modello senza intercetta. L&apos;argomento facoltativo <<printToLog specifica che un riepilogo della stima viene visualizzato nella finestra log. L&apos;argomento facoltativo weight specifica un vettore di pesi per effettuare minimi quadrati pesati e l&apos;argomento opzionale freq specifica un vettore di frequenze. Restituisce un elenco contenente un vettore delle stime, un vettore degli errori standard e un elenco di diagnostiche. L&apos;elenco di diagnostiche contiene vettori delle statistiche t e p-value per le stime, nonché i valori R-quadro e R-quadro corretto per la stima di regressione.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

/*Simple Linear Regression: y = intercept + beta * x + error*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<printToLog ); 
/*
t_ratio = Diagnostics["t_ratio"]; 
p_value = Diagnostics["p_value"]; 
RSquare = Diagnostics["RSquare"]; 
RSquare Adj = Diagnostics["RSquare Adj"];
*/

```

**Esempio 2**

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**Esempio 3**

```jsl

/*Categorical Variable Example*/
/*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/
y = [3, 5, 7, 5];
x = [1, 2, 3, 4];
gender = {"boy", "girl", "girl", "boy"};
designMat = Design( gender ) || x;
{Estimates, Std_Error, Diagnostics} = Linear Regression(
	y,
	designMat,
	<<noIntercept,
	<<printToLog
);

```

### Lines Seg

**Sintassi:** ls = Lines Seg([x1 y1 x2 y2,...])

**Descrizione:** Restituisce un segmento di visualizzazione con una sequenza di segmenti di linee per tutti i valori x e y passati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Sintassi:** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare un allineamento di caselle nelle colonne nc. L&apos;argomento facoltativo Spacing specifica lo spazio orizzontale e verticale intorno ai riquadri di visualizzazione. Se si utilizza l&apos;argomento vspace, vspace è lo spazio verticale e pixels è lo spazio orizzontale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Sintassi:** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che imposta le larghezze delle colonne dei riquadri di allineamento che contiene.

**JMP Versione aggiunta:** 16

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

**Sintassi:** y = {a, b, ...}; y = List( a, b, ... )

**Descrizione:** Crea un elenco di elementi senza valutarli.

**JMP Versione aggiunta:** prima della versione 14

```jsl

{1, 2 + 3, [11 22]};

```

### List Box

**Sintassi:** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una casella di riepilogo con elementi da selezionare. Se item è un elenco a due elementi contenente il nome dell&apos;elemento e una stringa che specifica un tipo di modellizzazione o criterio di ordinamento, quale "Ordinal" o "Ascending", nella casella di riepilogo verrà visualizzata accanto a quell&apos;elemento l&apos;icona corrispondente.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Esempio 2**

```jsl

New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Ln

**Sintassi:** y = Ln( x )

**Descrizione:** Restituisce il logaritmo naturale di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ln( Exp( 2 ) );

```

### Load DLL

**Sintassi:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Descrizione:** Carica una DLL verso la quale conduce il percorso specificato.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**Descrizione:** Legge un intero file di testo in una variabile JSL. Load Text File() chiede di specificare un nome del file. Load Text File( path ) restituisce una stringa. L&apos;opzione XMLParse converte XML in una struttura ad albero di espressioni. SASODSXML viene analizzato come XML di default di ODS SAS. L&apos;opzione [{JSON}] converte JSON in una struttura ad albero di espressioni. L&apos;argomento BLOB restituisce dati binari in una variabile Blob JSL; i parametri con nomi facoltativi nel BLOB consentono di leggere una sottostringa dal file.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Loc( m ); y = Loc( v, x )

**Descrizione:** Restituisce una matrice delle posizioni diverse da zero nella matrice m. Se sono specificati due argomenti, Loc(v, x) restituisce una matrice delle posizioni dell&apos;elenco o della matrice v che sono uguali al valore x. Preferire invece Where, ove possibile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Esempio 2**

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**Esempio 3**

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

**Esempio 4**

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**Esempio 5**

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Sintassi:** y = Loc Max( x )

**Descrizione:** Restituisce la prima posizione in x del valore massimo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Sintassi:** y = Loc Min( x )

**Descrizione:** Restituisce la prima posizione in x del valore minimo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Sintassi:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Descrizione:** Restituisce un vettore di numeri di righe nelle righe della matrice dell&apos;argomento che non abbiano valori mancanti, o per gli elenchi, quelli che non abbiano numeri mancanti o caratteri non vuoti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Sintassi:** idx = Loc Sorted( x, y )

**Descrizione:** Crea un vettore di colonna di posizioni dell’indice in cui i valori di x presentano valori minori o uguali ai valori in y sulla base di una ricerca binaria. x deve essere una matrice ordinata in ordine crescente senza valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Local

**Sintassi:** y = Local( {name=value, ...}, expression )

**Descrizione:** Risolve i nomi in variabili locali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Sintassi:** y = Local Here( expression )

**Descrizione:** Esegue l&apos;espressione con la funzione locale Nomi predefiniti su Qui(1)

**JMP Versione aggiunta:** prima della versione 14

```jsl

y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Sintassi:** Lock Globals( name, ... )

**Descrizione:** Blocca nomi globali specificati e impedisce che possano essere modificati o cancellati dalla funzione Clear Globals.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Lock Symbols( name, ... )

**Descrizione:** Blocca nomi globali specificati e impedisce che possano essere modificati o cancellati dalla funzione Clear Symbols.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Log( x, &lt;b&gt; )

**Descrizione:** Restituisce il logaritmo in base b di x o il logaritmo naturale di x se b non è specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Log( 256, 2 );

```

### Log Capture

**Sintassi:** string = Log Capture( expr )

**Descrizione:** Valuta l&apos;argomento expr e acquisisce l&apos;output che sarebbe comparso nella finestra di log di JMP restituendolo invece in una stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Log Table Messages

**Sintassi:** Log Table Messages( &lt;On|Off&gt;, &lt;Enable(subject, ...)&gt;, &lt;Disable(subject, ...)&gt;, &lt;Include(msgname, ...)&gt;, &lt;Exclude(msgname, )&gt;

**Descrizione:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP Versione aggiunta:** 17

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

**Sintassi:** y = Log10( x )

**Descrizione:** Restituisce il logaritmo in base 10 di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Log10( 100 );

```

### Log1P

**Sintassi:** y = Log1P( x )

**Descrizione:** Restituisce un calcolo più preciso di Log(1 + x) quando x è molto piccolo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Log1P( 1e-6 );

```

### LogGenGamma Density

**Sintassi:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Descrizione:** Restituisce la densità a x di una distribuzione di probabilità log gamma generalizzata estesa con parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

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
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Distribution

**Sintassi:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita log gamma generalizzata (con parametri mu, sigma e lambda) sia inferiore a x.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( LogGenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Quantile

**Sintassi:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione log gamma generalizzata estesa (con parametri mu, sigma e lambda), il valore per cui la probabilità che un valore casuale sia inferiore è p.

**JMP Versione aggiunta:** prima della versione 14

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
		Y Function( LogGenGamma Distribution( x, mu, sigma, lambda ), x );
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
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Logist

**Sintassi:** y = Logist( x )

**Descrizione:** Restituisce 1 / (1 + Exp( -x )), che converte un numero nel dominio -∞...+∞ nell&apos;intervallo 0...1. La funzione è utile nella regressione logisticaLogist().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logist( 2 );

```

### Logist Percent

**Sintassi:** y = Logist Percent( x )

**Descrizione:** Logist funzione con risultato in scala da 0 a 100.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logist Percent( 10 );

```

### Logistic Density

**Sintassi:** y = Logistic Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Logistic Distribution

**Sintassi:** p = Logistic Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Logistic Quantile

**Sintassi:** q = Logistic Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Logit

**Sintassi:** y = Logit( p )

**Descrizione:** Restituisce il logit di p, definito come log(p / (1 - p)).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logit( 0.95 );

```

### Logit Percent

**Sintassi:** y = Logit Percent( p )

**Descrizione:** Funzione Logit con argomento da 0 a 100, invece che da 0 a 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logit Percent( 95.0 );

```

### Loglogistic Density

**Sintassi:** y = Loglogistic Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione log-logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Loglogistic Distribution

**Sintassi:** p = Loglogistic Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione log-logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Loglogistic Quantile

**Sintassi:** q = Loglogistic Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione log-logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Lognormal Density

**Sintassi:** y = Lognormal Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione lognormale con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Lognormal Distribution

**Sintassi:** p = Lognormal Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione lognormale con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Lognormal Quantile

**Sintassi:** q = Lognormal Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione lognormale con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Long Date

**Sintassi:** s = Long Date( datetime, &lt;format&gt; )

**Descrizione:** Restituisce una rappresentazione specifica locale lunga di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Long Date( Today() );

```

### Low Rank Symmetric Update BLAS

**Sintassi:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Versione aggiunta:** 17

```jsl

A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Lowercase

**Sintassi:** sl = Lowercase( s )

**Descrizione:** Converte le lettere maiuscole in lettere minuscole nella stringa specificata. Le regole relative al maiuscolo/minuscolo variano a livello locale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Lowercase( "CAFÉ #23" );

```

### LPSolve

**Sintassi:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, &lt;slackVars=0&gt; )

**Descrizione:** Riduce al minimo la funzione obiettivo soggetta ai vincoli dati e restituisce un elenco di due elementi. Il primo elemento dell&apos;elenco, x, contiene le variabili di decisione (e variabili inattive se slackVars=1). Il secondo elemento dell&apos;elenco, z, contiene il valore della funzione obiettiva ottimale (se esiste). I primi cinque argomenti sono matrici. L&apos;argomento A è la matrice di coefficienti del vincolo. L&apos;argomento b è la colonna di valori sul lato destro dei vincoli. L&apos;argomento c è il vettore dei coefficienti di costo o della funzione obiettivo. Gli argomenti L e U sono rispettivamente i limiti inferiore e superiore per le variabili. Gli argomenti neq, nle e nge sono rispettivamente il numero dei vincoli di uguaglianza, i vincoli minori o uguali e i vincoli maggiori o uguali. Si noti che i vincoli devono essere elencati inizialmente come uguaglianze, poi come disuguaglianze minori o uguali e infine come disuguaglianze maggiori o uguali.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Descrizione:** Crea un messaggio e-mail in uscita come specificato se il sistema operativo lo consente. Non tutte le opzioni funzionano su tutte le versioni di sistemi operativi. Consultare la Guida per ulteriori dettagli.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Sintassi:** menu = Main Menu( command, &lt;window name&gt; )

**Descrizione:** Esegue il comando del menu principale specificato.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Main Menu( "Sample Index" );

```

**Esempio 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Make KFold Formula

**Sintassi:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**Descrizione:** Genera una colonna di validazione con folds livelli se utilizzato in una formula della colonna. Questa funzione JSL è utilizzata principalmente dalla piattaforma Crea colonna di validazione per generare colonne con formule.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula(
		Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) )
	)
);

```

### Make Validation Formula

**Sintassi:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Descrizione:** Genera una colonna di validazione a due o tre livelli se utilizzato in una formula della colonna. L&apos;argomento rates è una matrice 3 per 1 che contiene rispettivamente i tassi di training, validazione e test. Questa funzione JSL è utilizzata principalmente dalla piattaforma Crea colonna di validazione per generare colonne con formule.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**Esempio 3**

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
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

### Mandelbrot

**Sintassi:** v = Mandelbrot( n, radius, x, y )

**Descrizione:** calcola il valore della funzione di Mandelbrot in x,y, arrestandosi dopo n iterazioni o quando viene superato il raggio

**JMP Versione aggiunta:** prima della versione 14

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
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Map Value

**Sintassi:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Descrizione:** Valuta il valore iniziale e restituisce il risultato mappato o un&apos;impostazione predefinita.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**Esempio 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Esempio 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**Esempio 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Marker

**Sintassi:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Descrizione:** Disegna indicatori alle coordinate indicate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Of

**Sintassi:** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descrizione:** Restituisce l&apos;indicatore del valore specificato dello stato della riga. Se si utilizza Indicatore di come valore L, esso modifica l&apos;indicatore della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker Seg

**Sintassi:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Descrizione:** Restituisce un segmento di visualizzazione con indicatori per tutti i valori x e y.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

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

**Esempio 3**

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

**Esempio 4**

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
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Esempio 5**

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
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Marker Size

**Sintassi:** Marker Size( n )

**Descrizione:** Imposta gli indicatori di dimensione disegnati nel frame del grafico. 0 = punto, 1 = piccolo, ....

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Marker State

**Sintassi:** rs = Marker State( marker )

**Descrizione:** Restituisce un valore di stato della riga con la componente indicatore impostata al valore specificato. L&apos;argomento marker specifica un indicatore e può essere un intero positivo, un carattere, un intero positivo per carattere Unicode o un carattere esadecimale per carattere Unicode.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

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

### Matrix

**Sintassi:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**Descrizione:** Costruisce una matrice n-per-m. Se si specifica un elenco di n elenchi ognuno contenente m valori di riga, la matrice è formata concatenando verticalmente gli elenchi valutati. Se si specifica un singolo elenco di n elementi, il valore di ritorno è un vettore di colonna n-per-1. Se si specificano due argomenti interi, il valore di ritorno è una matrice di zeri contenente n righe e m colonne.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Esempio 2**

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Esempio 3**

```jsl

Matrix( {2, 3 + 7} );

```

**Esempio 4**

```jsl

Matrix( 2, 3 );

```

### Matrix Box

**Sintassi:** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una matrice di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### Matrix Mult

**Sintassi:** y = Matrix Mult( A, B, ... ); y = A * B

**Descrizione:** Esegue una moltiplicazione di matrici. L&apos;argomento della matrice deve essere appropriato NCol(a)==NRow(b). Anche A * B funziona.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Matrix Mult BLAS( A, B, ... )

**Descrizione:** Esegue una moltiplicazione matriciale. Gli argomenti delle matrici devono essere appropriati: NCol(A)==NRow(B).

**JMP Versione aggiunta:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Sintassi:** r = Matrix Rank( X )

**Descrizione:** Restituisce il rango della matrice X.

**JMP Versione aggiunta:** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Matrix To Blob

**Sintassi:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Descrizione:** Crea un blob da una matrice convertendo gli elementi della matrice in numeri interi con o senza segno da 1, 2 o 4 byte o numeri in virgola mobile da 4 o 8 byte.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Max

**Sintassi:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descrizione:** Restituisce il valore massimo degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximize

**Sintassi:** Maximize( expr, {x1, x2, ...} );Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;hessian(), method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che massimizzano l&apos;espressione expr. È possibile specificare i limiti inferiori e superiori per ciascun argomento tra parentesi dopo il nome dell&apos;argomento. Se expr non è una funzione concava, Maximize potrebbe trovare un massimo locale invece del massimo globale. Se è un problema, provare più valori di partenza. Inoltre, Maximize funziona meglio per le funzioni con una derivata seconda continua. Ulteriori argomenti per la funzione Maximize consentono di impostare il numero massimo di interazioni, la tolleranza per la convergenza e di visualizzare ulteriori dettagli sull&apos;ottimizzazione. Per ulteriori informazioni sugli argomenti opzionali. fare clic sul pulsante della guida dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Esempio 2**

```jsl

/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 *
	sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize(
	logDens,
	{mu, sigSq( 0, . )},
	<<details( both )
);

```

**Esempio 3**

```jsl

/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Maximum

**Sintassi:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descrizione:** Restituisce il valore massimo degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### MDYHMS

**Sintassi:** s = MDYHMS( datetime, &lt;format&gt; )

**Descrizione:** Restituisce la rappresentazione di un valore di data e ora ordinata come segue: mese, giorno, anno, ora, minuto, secondo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MDYHMS( Today() );

```

### Mean

**Sintassi:** y = Mean( x1, ... )

**Descrizione:** Restituisce la media aritmetica degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Sintassi:** y = Median( x1, ... )

**Descrizione:** Restituisce la mediana degli argomenti combinati, che possono essere argomenti scalari, matrici o elenchi.

**JMP Versione aggiunta:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Method

**Sintassi:** m = Method( { arg1 = val1, ... }, expression* )

**Descrizione:** Crea un metodo all&apos;interno di una classe

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
cl << Delete;
Delete Classes( "complex" );

```

### Mimic

**Sintassi:** mimic obj = Mimic(Box|PlatformRef)

**Descrizione:** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

### Min

**Sintassi:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descrizione:** Restituisce il valore minimo degli argomenti o dei valori all&apos;interno di una matrice singola o di un argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimize

**Sintassi:** Minimize( expr, {x1, x2, ...} );Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;Hessian(), &lt;&lt;method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che riducono al minimo l&apos;espressione expr. È possibile specificare i limiti inferiori e superiori per ciascun argomento tra parentesi dopo il nome dell&apos;argomento. Se expr non è una funzione convessa, Minimize potrebbe trovare un minimo locale invece del minimo globale. Se è un problema, provare più valori di partenza. Inoltre, Minimize funziona meglio per le funzioni con una derivata seconda continua. Ulteriori argomenti per la funzione Minimize consentono di impostare il numero massimo di interazioni, la tolleranza per la convergenza e di visualizzare ulteriori dettagli sull&apos;ottimizzazione. Per ulteriori informazioni sugli argomenti facoltativi, fare clic sul pulsante della guida dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Esempio 2**

```jsl

/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} = Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

**Esempio 3**

```jsl

/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

**Esempio 4**

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
		{Summation( i = 1, 6, -2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2) ),
		Summation(
			i = 1,
			6,
			2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy[i])
		)}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ),
		Summation( i = 1, 6, 2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]) )},
		{Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

**Esempio 5**

```jsl

/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} = Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

### Minimum

**Sintassi:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descrizione:** Restituisce il valore minimo degli argomenti o dei valori all&apos;interno di una matrice singola o di un argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minus

**Sintassi:** y = -x; y = Minus( x )

**Descrizione:** Nega x, che può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

-Pi();

```

### Minute

**Sintassi:** min = Minute( datetime )

**Descrizione:** Restituisce i minuti di un valore di data e ora, 0 - 59.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Minute( Today() );

```

### Mod

**Sintassi:** z = Modulo( x, y )

**Descrizione:** Restituisce il resto della divisione di x per y. Il resto avrà il medesimo segno di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Modulo( 10, 3 );

```

### Mode

**Sintassi:** y = Mode( list or matrix )

**Descrizione:** Seleziona l&apos;elemento &apos;più frequente&apos; da una matrice o elenco, il valore inferiore per valori equivalenti

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Modified Internal Rate of Return

**Sintassi:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Descrizione:** Restituisce il tasso di ritorno interno modificato per una serie di flussi di cassa periodici prendendo in considerazione sia il costo dell&apos;investimento sia l&apos;interesse ricevuto sul reinvestimento di cassa. Equivalente alla funzione MIRR in Microsoft Excel. Il secondo prototipo della funzione accetta tutti gli argomenti scalari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Modulo

**Sintassi:** z = Modulo( x, y )

**Descrizione:** Restituisce il resto della divisione di x per y. Il resto avrà il medesimo segno di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Modulo( 10, 3 );

```

### Month

**Sintassi:** mon = Month( datetime )

**Descrizione:** Restituisce il mese di un valore di data e ora, 1 - 12.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Month( Today() );

```

### MouseBox

**Sintassi:** box = MouseBox( displayBoxArgs )

**Descrizione:** Restituisce un riquadro che può effettuare richiami JSL ad azioni del mouse

**JMP Versione aggiunta:** prima della versione 14

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
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
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
				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Mousetrap

**Sintassi:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Descrizione:** Valuta iterativamente l&apos;espressione dragScript mentre si fa clic con il mouse all&apos;interno del grafico, senza che siano interessati altri oggetti nel grafico. Prima di eseguire lo script, le x e y globali sono impostate al valore del mouse e ripristinate poi ai valori originali. L&apos;espressione mouseUpScript viene eseguita dopo il rilascio del pulsante del mouse.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** rc = Move Directory( from, to )

**Descrizione:** Sposta una directory da un punto a un altro. Restituisce 1 se la directory è stata spostata. Restituisce 0 se non è stato possibile spostare la directory. Genera un errore se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

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
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Sintassi:** rc = Move File( from, to )

**Descrizione:** Sposta un file da un punto a un altro. Restituisce 1 se il file è stato spostato. Restituisce 0 se non è stato possibile spostare il file. Genera un errore se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move to Project

**Sintassi:** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**Descrizione:** Sposta una o più finestre in un progetto, fuori da un progetto o tra progetti. È necessario specificare solo origine o destinazione; l&apos;altra punterà per impostazione predefinita al progetto corrente. (Usare solo Origine per spostare finestre nel progetto corrente e solo Destinazione per spostare finestre al di fuori di esso.) Una finestra della tabella di dati sarà spostata con tutti i relativi report dipendenti, sebbene solo una debba essere specificata nell&apos;argomento Finestra. Se omesso, l&apos;argomento Finestra punta per impostazione predefinita a tutte le finestre aperte nel progetto di origine.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Esempio 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### Moving Average

**Sintassi:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Descrizione:** Restituisce una matrice di medie mobili per la matrice di input. before e after determinano il range ("finestra") di elementi alla media, dove before può essere -1 per indicare tutti gli elementi a priori. Se weighting è 1, tutti gli elementi hanno uguale peso. Se weighting è 0, gli elementi hanno pesi linearmente incrementali. Altrimenti weighting è il parametro per la ponderazione esponenziale (EWMA). partial window is missing indica se le medie vengono riportate quando non tutti i vicini sono presenti, fatto che può verificarsi alle estremità o vicino a valori mancanti. Se partial window is missing non è zero, vengono riportati i valori mancanti per tali finestre parziali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### Multiple File Import

**Sintassi:** mfiObj = Multiple File Import();

**Descrizione:** Crea un oggetto di importazione di più file; l&apos;oggetto accetta messaggi per definire una cartella, filtrare file e importare. Per aprire una finestra di dialogo usare il messaggio "Crea finestra". Per importare immediatamente utilizzare il messaggio "Importa dati" che restituirà un elenco delle tabelle che sono state create.

**JMP Versione aggiunta:** 14

**Esempio di scripting**

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

**Esempio interattivo**

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

**Sintassi:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Descrizione:** Moltiplica tutti gli argomenti, che possono essere numeri, matrici o elenchi di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

2 * Pi();

```

### Multiply To

**Sintassi:** y *= x; Multiply To( y, x )

**Descrizione:** Moltiplica per un valore una variabile o un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = 3;
ex *= 2;
ex;

```

### Multivariate Normal Impute

**Sintassi:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Descrizione:** Restituisce un vettore di risposta con valori imputati per i valori mancanti nel vettore yVec delle risposte. Le imputazioni sono basate su una distribuzione normale multivariata con vettore medio meanYvec e matrice di covarianza simmetrica symCovMat. Gli argomenti facoltativi colMin e colMax sono i rispettivi vettori dei minimi e massimi delle colonne. Questi argomenti forniscono limiti per le imputazioni.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,
. -0.687720061441453 0.29665732536624 -1.94898001941576,
-0.0425472526673373 0.463229145080277 0.635619352779951 .];
cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );
colMean = V Mean( mat );
colMin = V Min( mat );
colMax = V Max( mat );
For( it = 1, it <= N Row( mat ), it++,
	mat[it, 0] = Multivariate Normal Impute( mat[it, 0], colMean, cov, colMin, colMax )`
);
Print( mat );

```

### Munger

**Sintassi:** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Descrizione:** Ricerca l&apos;argomento s per una sottostringa o posizione in base alla combinazione di argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### N Arg

**Sintassi:** n = N Arg( expr )

**Descrizione:** Restituisce il numero di argomenti della testa dell&apos;espressione valutata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Sintassi:** n = N Arg Expr( expr )

**Descrizione:** Restituisce il numero di argomenti della testa dell&apos;espressione. Questa funzione è obsoleta. Al suo posto usare N Arg().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Esempio 2**

```jsl

// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### N Choose K

**Sintassi:** m = N Choose K( n, k )

**Descrizione:** Restituisce n! / (k! * (n - k)!), che è il numero di modi in cui si possono scegliere k elementi fra n elementi, senza tenere conto dell&apos;ordine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Choose K( 5, 3 );

```

### N Col

**Sintassi:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Descrizione:** Restituisce il numero di colonne della tabella di dati corrente, di una tabella di dati specifica o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**Sintassi:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Descrizione:** Restituisce il numero di colonne della tabella di dati corrente, di una tabella di dati specifica o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Col( [11 22, 33 44] );

```

### N Items

**Sintassi:** y = N Items( x )

**Descrizione:** Restituisce il numero di elementi in un elenco, il numero di elementi in una matrice, il numero di chiavi in un array associativo, il numero di funzioni e variabili in uno spazio dei nomi, il numero di metodi e variabili in un oggetto classe o il numero di elementi figlio di un riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**Esempio 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**Esempio 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### N Missing

**Sintassi:** y = N Missing( x1, x2, ... )

**Descrizione:** Restituisce il numero di valori mancanti tra gli argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### N Row

**Sintassi:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Descrizione:** Restituisce il numero di righe della tabella di dati corrente, di una tabella di dati specificata o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**Sintassi:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Descrizione:** Restituisce il numero di righe della tabella di dati corrente, di una tabella di dati specificata o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**Sintassi:** n = N Table()

**Descrizione:** Restituisce il numero di tabelle di dati al momento aperte.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Esempio 2**

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

**Sintassi:** Name(string)

**Descrizione:** Un nome serve per chiamare un elemento. I nomi sono utilizzati sia per le variabili sia per le funzioni e possono essere utilizzati direttamente negli script se ci si attiene ad alcune regole. Se inizia con un carattere alfabetico o di sottolineatura e continua con caratteri alfanumerici, spazi, simboli matematici Unicode e alcuni segni di punteggiatura (apostrofi (’), segni di percentuale (%), punti (.), barre inverse (\\) e caratteri di sottolineatura (_)), il nome può essere utilizzato direttamente negli script. I nomi che non seguono queste regole possono essere utilizzati mediante la parola chiave Name().

**JMP Versione aggiunta:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### Name Expr

**Sintassi:** y = Name Expr( x )

**Descrizione:** Restituisce il valore di un simbolo, senza valutarlo se è una espressione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

### Names Default To Here

**Sintassi:** Names Default To Here( boolean )

**Descrizione:** Determina dove memorizzare i nomi non risolti, sia come ( 0 ) globale/locale o nello spazio dei nomi Qui: ( 1 ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Sintassi:** ns = Namespace( namespace reference )

**Descrizione:** Restituisce un riferimento allo spazio dei nomi specificato dall&apos;argomento name.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** nsexists = Namespace Exists( namespace reference )

**Descrizione:** Restituisce 1 se esiste uno spazio dei nomi specificato dall&apos;argomento name, in caso contrario 0.

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
nsexists = Namespace Exists( ns );
Show( nsexists );
ns << Delete;

```

### NChooseK Matrix

**Sintassi:** m = NChooseK Matrix( n, k )

**Descrizione:** Crea una matrice di nChooseK(n,k) righe e colonne k formando tutte le combinazioni dei numeri interi k da 1 a n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Neg Binomial Distribution

**Sintassi:** cumprob = Neg Binomial Distribution( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia minore o uguale a k, dove la probabilità di successo è p e il numero di successi è n.

**JMP Versione aggiunta:** prima della versione 14

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
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk )
			);
			V Line(
				exnbdk + 1,
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk ),
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk + 1 )
			);
		);
		Text( {30, 0.07}, "n=", Round( exnbdn ), " p=", Round( exnbdp, 2 ) );
	),
	H List Box( Slider Box( 0, 1, exnbdp, exnbdy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 1, 20, exnbdn, exnbdy << reshow ), Text Box( " n" ) )
);

```

### Neg Binomial Probability

**Sintassi:** prob = Neg Binomial Probability( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia uguale a k, dove la probabilità di successo è p e il numero di successi è n.

**JMP Versione aggiunta:** prima della versione 14

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
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Text( {30, 0.27}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
	),
	H List Box( Slider Box( 0, 1, exnbpp, exnbpy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, exnbpn, exnbpy << reshow ), Text Box( " n" ) )
);

```

### Negative Binomial Distribution

**Sintassi:** cumprob = Negative Binomial Distribution( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia minore o uguale a k, dove lambda è il parametro di posizione, sigma è il parametro di scala e k è il conteggio di interesse.

**JMP Versione aggiunta:** 19

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
			H Line( k, k + 1, Negative Binomial Distribution( k, lambda, sigma ) );
			V Line(
				k + 1,
				Negative Binomial Distribution( k, lambda, sigma ),
				Negative Binomial Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) )
);

```

### Negative Binomial Probability

**Sintassi:** prob = Negative Binomial Probability( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia uguale a k, dove lambda è il parametro di posizione, sigma è il parametro di scala e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

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
			V Line( x + 0.35, 0, Negative Binomial Probability( x, lambda, sigma ) );
		);
		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );
		Text( {0, 0.28}, "Red = Poisson, Blue = Negative Binomial" );
	),
	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) )
);

```

### Negative Binomial Quantile

**Sintassi:** q = Gamma Negative Binomial Quantile( lambda, sigma, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione binomiale negativa( lambda, sigma ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** 19

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
			H Line( qexpk, qexpk + 1, Negative Binomial Distribution( qexpk, qexpl, qexps ) );
			V Line(
				qexpk + 1,
				Negative Binomial Distribution( qexpk, qexpl, qexps ),
				Negative Binomial Distribution( qexpk + 1, qexpl, qexps )
			);
		);
		Pen Color( "blue" );
		V Line( Negative Binomial Quantile( qexpl, qexps, qexpq ), 0, 1 );
		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Negative Binomial Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Net Present Value

**Sintassi:** x = Net Present Value( rate, values );x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Descrizione:** Restituisce il valore attuale netto di un investimento mediante un tasso di sconto e una serie di pagamenti (valori negativi) e reddito (valori positivi) futuri. L&apos;argomento values è una matrice monodimensionale. Equivalente alla funzione NPV in Microsoft Excel. Il secondo prototipo della funzione accetta tutti gli argomenti scalari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### New CAS Action

**Sintassi:** action = New CAS Action(...)

**Descrizione:** Crea un&apos;azione CAS.

**JMP Versione aggiunta:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Sintassi:** action = New CAS DATA Step Action(...)

**Descrizione:** Crea un&apos;azione passo DATA CAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas = New CAS Server(&lt;...&gt;)

**Descrizione:** Crea un nuovo server CAS.

**JMP Versione aggiunta:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

### New Clipboard

**Sintassi:** clp = New Clipboard( &lt;&lt;&lt;Get From OS&gt; )

**Descrizione:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Versione aggiunta:** 19

```jsl


clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New Column

**Sintassi:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**Descrizione:** Crea una nuova colonna nella tabella di dati corrente. Gli argomenti facoltativi actions sono tutti i messaggi supportati dalle colonne di dati.

**JMP Versione aggiunta:** prima della versione 14

**Semplici**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

**Simile**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

### New Column by Text Matching

**Sintassi:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**Descrizione:** Crea una nuova colonna eseguendo un pattern di espressione regolare su una colonna esistente.

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Custom Function

**Sintassi:** f=New Custom Function(namespace, name, function definition)

**Descrizione:** Crea un nuovo oggetto funzione personalizzato. Una funzione personalizzata verrà colorata nell&apos;editor degli script e visualizzata nell&apos;indice di scripting. Le informazioni obbligatorie per una funzione utente personalizzata sono uno spazio dei nomi (per evitare conflitti con funzioni globali), un nome e una definizione della funzione. Altre informazioni di aiuto possono essere aggiunte usando messaggi. Usare il comando Aggiungi funzioni personalizzate per pubblicare la nuova funzione in ambiente JMP.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**Esempio 2**

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

**Esempio 3**

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

**Sintassi:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Descrizione:** Crea un oggetto di configurazione del connettore dati.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl


// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Esempio 2**

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

**Sintassi:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Descrizione:** Crea un&apos;immagine heatmap basata su una matrice e un tema o un gradiente di colore.

**JMP Versione aggiunta:** 16

```jsl


nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
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

**Sintassi:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Descrizione:** Crea una richiesta di invio al servizio web.

**JMP Versione aggiunta:** 14

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

**Sintassi:** img = New Image()img = New Image( width, height )img = New Image( pathname )img = New Image( picture )img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**Descrizione:** Restituisce una nuova immagine che potrà quindi essere modificata mediante comandi JSL. Se viene specificato un percorso a un file di immagine esistente, il file deve essere in formato .JPG, .PNG, .GIF, .BMP o .TIF.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Esempio 2**

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Esempio 3**

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

**Sintassi:** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Descrizione:** Crea una nuova istanza del client IP21 che può essere utilizzata per importare dati da un server IP.21 AspenTech.

**JMP Versione aggiunta:** 19

### New JMP Live

**Sintassi:** New JMP Live(Connection("Connection Name"), &lt;Prompt("No" | "If Needed")&gt;)

**Descrizione:** Avvia una connessione a JMP Live utilizzando le informazioni di connessione memorizzate. La connessione è facoltativa e l&apos;impostazione di default è quella specificata come di default in Gestione connessioni. Se fornita, cerca la connessione in base al nome. Prompt è facoltativo e il valore di default è "No". I valori validi per il prompt sono "Sì", "No" e "Se necessario". Un valore "Sì" richiede sempre le credenziali di accesso. Un valore "No" non richiede mai le credenziali di accesso, ma potrebbe causare un insuccesso dell&apos;autenticazione. Un valore "Se necessario" richiede le credenziali solo se le credenziali al momento memorizzate non sono valide. Restituisce un oggetto Connessione a JMP Live.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

jmplive = New JMP Live();

```

**Esempio 2**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Esempio 3**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Sintassi:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**Descrizione:** Crea contenuti interattivi da pubblicare su JMP Live. 

	Il primo parametro è obbligatorio e specifica i dati da utilizzare per il contenuto. Tali dati possono essere un report, una tabella di dati, una mappa o un&apos;immagine. 

	Titolo e Descrizione sono utilizzati per personalizzare qualsiasi tipo di contenuto pubblicato. I parametri rimanenti sono facoltativi e vengono utilizzati solo per personalizzare il contenuto del report. 

	Pubblica dati indica se i dati utilizzati nel report sono pubblicati su JMP Live. I dati del report sono pubblicati di default.

	Abilita avvertimenti indica se gli avvertimenti del diagramma di controllo devono essere abilitati per il report. Le avvertenze della carta di controllo sono disabilitate di default. 

	L&apos;ottimizzazione viene utilizzata per personalizzare il modo in cui il report viene pubblicato su JMP Live. Il report viene pubblicato di default per consentire una maggiore interattività.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Esempio 2**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
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

**Esempio 3**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Esempio 4**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

### New Multi HTTP Request

**Sintassi:** multi_request = New Multi HTTP Request()

**Descrizione:** Invia o scarica più richieste HTTP in parallelo.

**JMP Versione aggiunta:** 17

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

**Sintassi:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Descrizione:** Crea un nuovo spazio dei nomi con un nome specificato dall&apos;argomento name o con un nome anonimo se name non è specificato.

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
Show( ns );
ns << Delete;

```

### New OAuth2

**Sintassi:** oauth2 = New OAuth2()

**Descrizione:** Crea una nuova autorizzazione OAuth2.

**JMP Versione aggiunta:** 15

```jsl


/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
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

**Sintassi:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Descrizione:** Crea un token OAuth2 per accedere in sicurezza a dati in molte diverse API Web.

**JMP Versione aggiunta:** 15

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

**Sintassi:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Descrizione:** Crea un oggetto istanza di una classe.

**JMP Versione aggiunta:** 14

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
cl << Delete;
Delete Classes( "complex" );

```

### New PI Client

**Sintassi:** New Pi Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Descrizione:** Crea una nuova istanza di client PI che può essere usata per importare dati da un PI Server.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ), /* Asset Framework path */
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

**Esempio 2**

```jsl

/* Import plot data using Kerberos for authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

**Esempio 3**

```jsl

/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ),
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

**Sintassi:** project = new Project( &lt;project messages&gt; )

**Descrizione:** Crea una nuova finestra di progetto vuota. Per creare un progetto in un passaggio è possibile includere uno o più messaggi di progetto come argomenti.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

project = New Project();

```

**Esempio 2**

```jsl

project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Esempio 3**

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

**Esempio 4**

```jsl

project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Esempio 5**

```jsl

project = New Project(
	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New SQL Query

**Sintassi:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Descrizione:** Crea un oggetto della query SQL per la connessione, colonne e tabella specificate, oppure per la query SQL personalizzata specificata. Usare il Costruttore di query per generare script che creino query.

**JMP Versione aggiunta:** prima della versione 14

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### New Table

**Sintassi:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Descrizione:** Crea una nuova tabella di dati. "Invisible" nasconde la tabella di dati dalla visualizzazione, ma la elenca nella finestra Home di JMP. "Private" nasconde completamente la tabella. "Visible" è l&apos;impostazione predefinita e crea una normale tabella visibile ed elencata nella finestra Home di JMP. Gli argomenti actions facoltativi sono qualsiasi messaggio supportato dalle tabelle di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### New Web Report

**Sintassi:** obj = New Web Report(...)

**Descrizione:** Crea un report HTML interattivo.

**JMP Versione aggiunta:** 14

```jsl


Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution(
			Continuous Distribution( Column( :weight ) ),
			Nominal Distribution( Column( :age ) )
		),
		Title( "Distribution Web Report" ),
		Description( "This report was created with the sample found in the Scripting Index" )
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

**Sintassi:** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**Descrizione:** Crea una finestra contenente il riquadro di visualizzazione o lo script specificato. Di default, viene creata una finestra di report, a meno che non sia specificata l&apos;opzione Type. Una finestra di Type("Modal Dialog") interrompe l&apos;esecuzione fino a quando la finestra di dialogo non riceve una risposta. On Open, On Validate e Return Result sono disponibili solo per le finestre modali. On Open() valuta la propria espressione, funzione o metodo di classe quando viene creata la finestra. Se On Close() restituisce false, la finestra non si chiude. On Validate() esegue la propria espressione, funzione o metodo di classe quando si fa clic sul pulsante OK. Se l&apos;espressione restituisce true, la finestra viene chiusa. In caso contrario, la finestra rimane aperta. Return Result cambia il valore di ritorno della finestra alla chiusura, in modo che corrisponda a quello della funzione Dialog() deprecata. Per tipi di finestre che supportano le barre degli strumenti, usare Show Toolbars per specificare le modifiche rispetto al comportamento di default. Le opzioni Show Menu e Suppress AutoHide sono solo per Windows. L&apos;opzione Window View("Invisible") può essere utilizzata per qualsiasi finestra diversa da Modal Dialog. Una finestra di Type("Script") crea un documento JSL a meno che non sia specificata l&apos;opzione <<Language.

**JMP Versione aggiunta:** prima della versione 14

**[Win] Barre degli strumenti e menu**

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
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Finestra di dialogo**

```jsl


ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Finestra di dialogo modale**

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
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Report**

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
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

### Normal Biv Distribution

**Sintassi:** y = Normal Biv Distribution( x, y, r, &lt;mu1=0&gt;, &lt;s1=1&gt;, &lt;mu2=0&gt;, &lt;s2=1&gt; )

**Descrizione:** Calcola la probabilità che un&apos;osservazione (X, Y) sia inferiore o uguale a (x, y) con coefficiente di correlazione r dove X è distribuita normalmente ai margini con media mu1 e deviazione standard s1 e Y è distribuita normalmente ai margini con media mu2 e deviazione standard s2. Se mu1, s1, mu2 e s2 non sono dati, la funzione ipotizza la distribuzione bivariata normale standard con mu1=0, s1=1, mu2=0 e s2=1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Contour

**Sintassi:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Descrizione:** Disegna una o più curve di livello della probabilità normale per k popolazioni e due variabili. L&apos;argomento prob può essere una probabilità scalare o una matrice di probabilità. Gli argomenti meanMatrix e stdsMatrix sono matrici k per 2 e l&apos;argomento corrMatrix è un vettore k per 1. L&apos;argomento colorsMatrix specifica uno o più colori per le curve di livello k; i colori devono essere specificati come colori JSL (valori interi di colore JSL o valori ottenuti da funzioni di colore JSL, come RGB Color() o HLS Color()). L&apos;argomento fill specifica il livello di trasparenza del colore di riempimento.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Normal Density( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione normale con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** p = Normal Distribution( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita normalmente sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Descrizione:** Restituisce il risultato dell&apos;integrazione radiale-sferica per funzioni di smoothing di variabili normali multivariate. L&apos;idea di base è la medesima di un metodo riportato in Genz e Monahan(1996). Ma per la direzione radiale viene utilizzata la quadratura di tipo Radau-Gauss-Laguerre.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Normal Log CDistribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione 1 - normale a x con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Normal Log Density( x, &lt;mu=0&gt;, &lt;sigma=1&gt;)

**Descrizione:** Restituisce il logaritmo della densità di probabilità normale a x con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Normal Log Distribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione normale a x con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Descrizione:** Restituisce la densità in q di una distribuzione normale della miscela con medie di gruppo meanvec, deviazioni standard di gruppo sdvec e probabilità di gruppo probvec. Qui meanvec, sdvec e probvec sono tutti vettori della stessa dimensione.

**JMP Versione aggiunta:** prima della versione 14

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
			Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .31}, "P1=", Round( p1, 2 ) );
		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Distribution

**Sintassi:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Descrizione:** Restituisce la probabilità che una variabile distribuita della miscela normale con medie di gruppo meanvec, deviazioni standard di gruppo sdvec, probabilità di gruppo probvec sia inferiore a q. Qui meanvec, sdvec e probvec sono tutti vettori della stessa dimensione.

**JMP Versione aggiunta:** prima della versione 14

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
			Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .75}, "P1=", Round( p1, 2 ) );
		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Quantile

**Sintassi:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Descrizione:** Restituisce il quantile da una distribuzione normale della miscela, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

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
			Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			q
		);
		Pen Color( "blue" );
		V Line(
			Normal Mixture Quantile( extqqq, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			0,
			1
		);
		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ),
	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, extqgr << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, extqgr << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Quantile

**Sintassi:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Descrizione:** Restituisce il quantile da una distribuzione normale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Normal Quantile( 0.9 );

```

### Normal Tolerance Factor

**Sintassi:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Descrizione:** Calcola il fattore di tolleranza per costruire un intervallo di confidenza 1-alfa per contenere la proporzione p delle medie con dimensione campionaria n dalla distribuzione normale. È possibile richiedere il fattore per un intervallo di tolleranza unilaterale.

**JMP Versione aggiunta:** 19

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
	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) )
);

```

### Not

**Sintassi:** y = !x; y = Not( x )

**Descrizione:** Restituisce il NOT logico di x: 1 se x è zero, mancante se x è mancante e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

!(1 < 2);

```

### Not Equal

**Sintassi:** z = x != y != ...; z = Not Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento non è uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 != 2 != 1;

```

### Notebook

**Sintassi:** nb = Notebook( name|number )

**Descrizione:** Restituisce un riferimento al blocco appunti specificato.

**JMP Versione aggiunta:** 19

### Nth Day Of Week in the Month

**Sintassi:** n = Nth Day Of Week in the Month( datetime )

**Descrizione:** Restituisce un numero intero che rappresenta il numero di istanze del giorno della settimana dell&apos;argomento data e ora che si sono verificate nel mese. Ad esempio, il 28 novembre 2019 è il 4° giovedì del mese, quindi la funzione restituisce 4.

**JMP Versione aggiunta:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Num

**Sintassi:** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Descrizione:** Converte s in un numero usando qualsiasi formato incorporato, inclusi i formati data e valuta. Restituisce mancante se la conversione non riesce. L&apos;opzione facoltativa <<Restrict consente solo la conversione usando formati interi, decimali e scientifici.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Esempio 2**

```jsl

Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Num Deriv

**Sintassi:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**Descrizione:** Restituisce la derivata numerica della funzione f( x,... ) rispetto a uno dei suoi argomenti. È possibile specificare quell&apos;argomento come secondo argomento nella funzione Num Deriv. Se non viene specificato alcun secondo argomento, la derivata è eseguita rispetto al primo argomento della funzione. La derivata è valutata utilizzando i valori numerici specificati nell&apos;espressione della funzione  f( x,... ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Sintassi:** y = Num Deriv2( f( x, ... ) )

**Descrizione:** Restituisce la derivata seconda numerica della funzione f( x,... ) rispetto a x. La derivata è valutata utilizzando i valori numerici specificati nell&apos;espressione della funzione f( x,... ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Number

**Sintassi:** y = Number( x1, ... )

**Descrizione:** Restituisce il numero di argomenti non mancanti o dei valori all&apos;interno di una matrice singola o argomento di elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Number Col Box

**Sintassi:** y = Number Col Box( title, numbers )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento numbers, che può essere un elenco o una matrice.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Number Col Edit Box( title, numbers )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento numbers, che può essere un elenco o una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Sintassi:** y = Number Edit Box( initValue, &lt;width&gt; )

**Descrizione:** Restituisce una finestra di modifica che accetta solo input numerici. Specificare l&apos;argomento facoltativo width per impostare la larghezza della finestra in caratteri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Number of Periods

**Sintassi:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il numero di periodi per un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione NPER in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Open

**Sintassi:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Descrizione:** Restituisce un riferimento a una tabella di dati o altro file di JMP o oggetto creato da un file. Se non si specifica alcun percorso, viene visualizzata la finestra di dialogo Apri. Se viene specificato il percorso di una cartella, viene aperto il browser dei file di sistema e non viene restituito alcun oggetto. Consultare Syntax Reference per una descrizione completa delle opzioni disponibili.

**JMP Versione aggiunta:** prima della versione 14

**Add-In**

```jsl

/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Altro**

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
dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) )
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
	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) )
);

```

**Folder**

```jsl

/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Immagine**

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
pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) )
);

```

**Tabella di dati**

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
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

**Testo**

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
dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Open Database

**Sintassi:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Descrizione:** Apre un database che utilizza ODBC, esegue l&apos;SQL dato e inserisce i dati in una tabella di dati con il nome della tabella di output dato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Open Datafeed

**Sintassi:** y = Open Datafeed( ... )

**Descrizione:** Crea un soggetto e una finestra per l&apos;invio di messaggi, per l&apos;alimentazione di dati in tempo reale.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** w = Open Help( "Help" | "Scripting Index", ... )

**Descrizione:** Apre la Guida in linea di JMP o l&apos;indice degli scripting.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open Help( "Help" );

```

**Esempio 2**

```jsl

Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

**Esempio 3**

```jsl

Open Help(
	"Scripting Index",
	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext(
		Category( "All Categories" ),
		Object( "Search results" ),
		Method( "Get Alpha" )
	)
);

```

### Open Log

**Sintassi:** Open Log( &lt;bring window to top&gt; )

**Descrizione:** Apre la finestra di log

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Open Log();
Show( Is Log Open() );

```

**Esempio 2**

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

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

### Ortho

**Sintassi:** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**Descrizione:** Ortogonalizza le colonne di una matrice. L&apos;opzione Centro conduce a una somma zero. L&apos;opzione Scala conduce alla lunghezza dell&apos;unità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Sintassi:** L = Ortho Poly( V, order )

**Descrizione:** Restituisce polinomi ortogonali del vettore V fino all&apos;ordine specificato dall&apos;argomento order. L&apos;argomento V può essere un vettore di riga o di colonna. L&apos;opzione Scala li porta alla lunghezza dell&apos;unità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### Outline Box

**Sintassi:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Descrizione:** Crea un riquadro nel report e restituisce il riferimento al riquadro di visualizzazione. Per comprendere un menu nel riquadro, specificare command script pairs list, un elenco che specifica i comandi di menu e gli script associati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Oval

**Sintassi:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Descrizione:** Disegna un ovale entro il rettangolo specificato, riempito se il riempimento è diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descrizione:** Restituisce la matrice dei coefficienti di P-Spline. Internal Knot Grid è il numero di punti del nodo desiderati sulla base dei percentili di x o un vettore che specifica i punti del nodo interni. Il parametro facoltativo degree specifica il grado di P-Spline con una impostazione predefinita di 3.

**JMP Versione aggiunta:** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Page Break Box

**Sintassi:** Page Break Box()

**Descrizione:** Crea un riquadro di visualizzazione che forza un&apos;interruzione di pagina.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Panel Box( title, displayBoxArgs )

**Descrizione:** Restituisce un riquadro di visualizzazione per etichettare e contenere il riquadro di visualizzazione dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Descrizione:** Utilizzare più thread per assegnare i valori alla matrice. Se un thread qualsiasi genera un&apos;eccezione, verrà stampato un messaggio nel log e il valore di ritorno sarà 0. Se tutti i thread sono completati senza errori, il valore di ritorno sarà 1. Le funzioni che avviano piattaforme, creano o usano tabelle di dati o accedono al sottosistema grafico sono supportate solo sul thread principale e genereranno un&apos;eccezione se chiamate da un thread worker.

**JMP Versione aggiunta:** prima della versione 14

```jsl

m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Parameter

**Sintassi:** y = Parameter( {name=value, ...}, model expression )

**Descrizione:** Definisce i parametri della formula per i modelli della piattaforma non lineare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**Sintassi:** y = Parse( s )

**Descrizione:** Analizza la stringa e restituisce l&apos;espressione JSL risultante.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Parse( "x+y" );

```

### Parse Date

**Sintassi:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descrizione:** Analizza una stringa di un dato formato. Se si tratta di un formato di data e ora, il valore è espresso come se fosse racchiuso in Come data(), restituendo la data nel formato ggmmmaaaa. L&apos;opzione facoltativa <<Restrict utilizzata con il formatString "migliore" consente solo la conversione usando formati interi, decimali e scientifici.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Esempio 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Esempio 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Esempio 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Esempio 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Parse JSON

**Sintassi:** l = Parse JSON( jsonstring )

**Descrizione:** Converte il testo JSON in un elenco JSL o array associativo rappresentando la struttura specificata dai dati JSON.

**JMP Versione aggiunta:** 14

```jsl

l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Parse XML

**Sintassi:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Descrizione:** Analizza un&apos;espressione XML utilizzando le espressioni OnElement per tag xml specificati.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

/*See example two for more details*/
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

**Esempio 2**

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

**Sintassi:** Pat Abort()

**Descrizione:** Genera un valore pattern che causa l&apos;immediato insuccesso dell&apos;intera corrispondenza senza backup né ulteriore esecuzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
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

**Sintassi:** Pat Altern( pat1, pat2, ... )

**Descrizione:** Genera un valore pattern che corrisponde a uno qualsiasi dei pattern forniti. Generalmente scritto come pat1 | pat2 | ....

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result
);
result;

```

### Pat Any

**Sintassi:** Pat Any( string )

**Descrizione:** Genera un valore pattern che corrisponderà a un qualsiasi carattere della stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Sintassi:** Pat Arb( pattern )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Sintassi:** Pat Arb No( pattern )

**Descrizione:** Genera un valore pattern che corrisponde al proprio argomento zero o più volte. Identico a patRepeat(pattern,0,infinity,RELUCTANT); (*? in regex).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Sintassi:** Pat At( variable )

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri e assegna la posizione del cursore corrente a variabile. Generalmente scritto come patpos()>>variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Sintassi:** Pat Break( string )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri non nella stringa, interrompendosi prima di un carattere (richiesto) nella stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**Sintassi:** Pat Concat( pat1, pat2, ... )

**Descrizione:** Genera un valore pattern che corrisponde a turno a ognuno dei pattern forniti. Generalmente scritto come pat1 + pat2 + ....

**JMP Versione aggiunta:** prima della versione 14

```jsl

num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Sintassi:** Pat Conditional( pattern, variable )

**Descrizione:** Genera un valore pattern che corrisponde al pattern fornito e memorizza il testo corrispondente in variabile se riesce. Generalmente scritto come pattern >? variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Sintassi:** Pat Fail()

**Descrizione:** Genera un valore pattern che fallisce sempre la corrispondenza in avanti, obbligando il sistema a provare delle alternative.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
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

**Sintassi:** Pat Fence()

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri in avanti e non riesce a effettuare il backup causando la mancata corrispondenza. Utilizzato anche per ridurre la pila di backup dei pattern.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Sintassi:** Pat Immediate( pattern, variable )

**Descrizione:** Genera un valore pattern che corrisponde al pattern fornito e memorizza immediatamente il testo corrispondente in variabile. Generalmente scritto come pattern >> variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Sintassi:** Pat Len( n )

**Descrizione:** Genera un valore pattern che corrisponde a n caratteri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Sintassi:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**Descrizione:**  Una corrispondenza pattern larghezza zero dopo la posizione corrente. Il secondo argomento opzionale predefinito pari a 0. 1 indica una corrispondenza negativa o una mancata corrispondenza.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'" ),
		"z"
	), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Esempio 2**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'", 1 ),
		"z"
	), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Esempio 3**

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Look Behind

**Sintassi:** Pat Look Behind( pattern, &lt;0|1&gt; )

**Descrizione:** Una corrispondenza pattern larghezza zero prima della posizione corrente. Il secondo argomento facoltativo predefinito pari a 0. 1 indica una corrispondenza negativa o una mancata corrispondenza.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test )
);

```

**Esempio 2**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'", 1 ) + "s",
		"z"
	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Esempio 3**

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Match

**Sintassi:** Pat Match( source, pattern, &lt;replacement&gt; )

**Descrizione:** Esegue la corrispondenza pattern nella variabile pattern rispetto alla stringa nella variabile source; il testo opzionale replacement sostituisce il testo corrispondente.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Pat Not Any( string )

**Descrizione:** Genera un valore pattern che corrisponderà a un qualsiasi carattere non nella stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**Sintassi:** Pat Pos( n )

**Descrizione:** Genera un valore pattern che corrisponde ai caratteri zero se il cursore è nella posizionen. Senza argomento, la funzione restituisce la posizionePat Pos() del cursore per assegnazione >> o >?: patpos()>>variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >> result
);
result;

```

### Pat R Pos

**Sintassi:** Pat R Pos( n )

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri se il cursore è n caratteri dalla fine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Sintassi:** Pat R Tab( n )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri per spostare il cursore in avanti a n caratteri dalla fine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Sintassi:** Pat Regex( string )

**Descrizione:** Genera un valore pattern che corrisponde all&apos;espressione regolare nella stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Sintassi:** Pat Rem()

**Descrizione:** Genera un valore pattern che corrisponde al resto del testo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Sintassi:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**Descrizione:** Genera un valore pattern che corrisponde al pattern fornito tra tempi min e max.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Sintassi:** Pat Span( string )

**Descrizione:** Genera un valore pattern che corrisponde a uno o più caratteri della stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Sintassi:** Pat String( string )

**Descrizione:** Genera un valore pattern che corrisponde alla stringa. In generale la stringa può essere utilizzata senza la funzione Pat String().

**JMP Versione aggiunta:** prima della versione 14

```jsl

x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Sintassi:** Pat Succeed()

**Descrizione:** Genera un valore pattern che corrisponde sempre a zero caratteri, anche durante il backup.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
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

**Sintassi:** Pat Tab( n )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri per spostare il cursore in avanti in posizione n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Sintassi:** Pat Test( expression )

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri se l&apos;espressione è diversa da zero. L&apos;espressione è rivalutata durante ogni test come se fosse stato utilizzato Expr().

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Descrizione:** Disegna un tratto lungo il percorso dato se il riempimento è 0, oppure dipinge l&apos;interno del percorso dato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** s = Path To Char( pathMatrix )

**Descrizione:** Converte la specifica di percorso dalla forma matriciale alla forma alfanumerica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Payment

**Sintassi:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il pagamento per un prestito basato su pagamenti costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione PMT in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Pdf Page Count

**Sintassi:** Pdf Page Count( file name)

**Descrizione:** Restituisce il numero di pagine in un file PDF.

**JMP Versione aggiunta:** prima della versione 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Pen Color

**Sintassi:** Pen Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore per il disegno delle linee.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Sintassi:** Pen Size( &lt;x&gt; )

**Descrizione:** Imposta le dimensioni della penna in pixel per disegnare le linee.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pi

**Sintassi:** y = Pi()

**Descrizione:** Restituisce la costante matematica π, con un&apos;accuratezza di circa 15 cifre decimali: 3,1415926535....

**JMP Versione aggiunta:** prima della versione 14

```jsl

Char( Pi(), 5 );

```

### Pick Color

**Sintassi:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Descrizione:** Restituisce un colore che è stato selezionato con il selettore colore standard.

**JMP Versione aggiunta:** 14

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

**Sintassi:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Descrizione:** Restituisce un tema di colore che è stato selezionato con il selezionatore standard di temi di colore. Il tema iniziale può essere specificato esplicitamente o specificando un Type per utilizzare i temi dalle preferenze.

**JMP Versione aggiunta:** 17

**Costruttore di grafici**

```jsl


theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
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

**Legenda righe**

```jsl


pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pick Directory

**Sintassi:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**Descrizione:** Viene visualizzata una finestra Apri directory riportante il nome del percorso della directory scelta. La stringa facoltativa prompt è visualizzata in alto nella finestra. Show Files può essere uno qualsiasi dei tre argomenti e utilizza un argomento booleano. 1 mostra i file nella finestra Seleziona directory, 0 li nasconde. L&apos;impostazione predefinita è 0. La stringa path specifica la directory visualizzata inizialmente dalla finestra Seleziona directory. Se si utilizza la stringa path, deve seguire la stringa prompt, mentre Show Files può trovarsi in mezzo.

**JMP Versione aggiunta:** prima della versione 14

**Semplici**

```jsl

Pick Directory( "Select a directory" );

```

**Show Files**

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

### Pick File

**Sintassi:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**Descrizione:** Viene visualizzata una finestra Apri riportante il nome del percorso del file scelto. L&apos;argomento filterList è un elenco di stringhe del tipo: "Etichetta|suffisso1;suffisso2;...". L&apos;argomento first filter specifica il filtro mostrato inizialmente. Il quinto argomento indica se la finestra deve funzionare come finestra di salvataggio (saveFlag = 1) o di apertura (saveFlag = 0). L&apos;argomento default file specifica il file selezionato inizialmente. L&apos;argomento multiple consente la selezione di più file se saveFlag è 0.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

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

**Esempio 3**

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

**Sintassi:** pict = Picture Box( Picture Object )

**Descrizione:** Crea un riquadro di visualizzazione contenente un oggetto di immagine grafica. Si può aprire un&apos;immagine e referenziarla, oppure utilizzare il comando Apri con il percorso dell&apos;immagine al posto dell&apos;argomento Picture Object.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Esempio 2**

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie

**Sintassi:** Pie( left, top, right, bottom, startAngle, endAngle )

**Descrizione:** Disegna una sezione (fetta) di un grafico a torta.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pie Seg

**Sintassi:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Descrizione:** Crea un segmento della torta nella origin specificata, con il radius specificato, basato su valori specificati in formato matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Pixel Line To

**Sintassi:** Pixel Line To( h, v )

**Descrizione:** Disegna una linea dalla coordinata della penna corrente su base pixel alle coordinate orizzontali e verticali date.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Pixel Move To( h, v )

**Descrizione:** Sposta la penna a indirizzo pixel alla coordinata orizzontale e verticale relativa all&apos;origine.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Pixel Origin( x, y )

**Descrizione:** Imposta l&apos;origine sulla quale sono basati i comandi di disegno di pixel.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Descrizione:** Disegna un tratto lungo il percorso in pixel dato se il riempimento è 0, oppure dipinge l&apos;interno del percorso dato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.  Il percorso sarà ridimensionato e traslato attorno alla propria origine in base ai parametri facoltativi, con l&apos;orientamento specificato nello spazio dell&apos;asse.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Descrizione:** Si sposta nella posizione pixel {h, v} e disegna il testo specificato dall&apos;argomento text. Argomenti delle proprietà con nome: Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Argomenti di posizione, argomenti con nome e stringhe possono essere mescolati in qualsiasi ordine.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
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

**Sintassi:** y = Platform( dataTable, script )

**Descrizione:** Valuta lo script dato nel contesto della tabella di dati specificata. Restituisce il riquadro di visualizzazione risultante per l&apos;inserimento in una struttura di visualizzazione ad albero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )
		),
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) )
		)
	)
);

```

### Platform Preference

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Plot Col Box

**Sintassi:** y = Plot Col Box( title, numbers )

**Descrizione:** Restituisce una finestra di visualizzazione per tracciare i numeri. L&apos;argomento numbers può essere un elenco o una matrice.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** cumprob = Poisson Distribution( lambda, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia minore o uguale a k, dove lambda è il parametro della media e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) )
);

```

### Poisson Probability

**Sintassi:** prob = Poisson Probability( lambda, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia uguale a k, dove lambda è il parametro della media e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 40, lambda, pdy << reshow ), Text Box( " \!U03BB" ) )
);

```

### Poisson Quantile

**Sintassi:** q = Poisson Quantile( lambda, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione di Poisson( lambda ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

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
			H Line( qexpk, qexpk + 1, Poisson Distribution( qexpl, qexpk ) );
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
	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Poly Seg

**Sintassi:** ps = Poly Seg(x values, y values)

**Descrizione:** Restituisce un segmento di visualizzazione che rappresenta un poligono con i vertici basati sui valori x e y passati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Polygon

**Sintassi:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Descrizione:** Disegna il poligono specificato dai punti.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**Descrizione:** Calcola l&apos;area del poligono specificato.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Esempio 2**

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Sintassi:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**Descrizione:** Calcola il centroide del poligono specificato.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Esempio 2**

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Sintassi:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Descrizione:** Rimuove da un poligono i punti con un basso livello di dettaglio e restituisce gli indici dei punti rimanenti. detail factor è inversamente proporzionale alla tolleranza dell&apos;errore del dettaglio. multiple(ids) indica che molti poligoni devono essere semplificati insieme in modo che i lati comuni siano trattati in modo coerente. ids è una matrice con una riga per punto. geodesic(1) indica che le coordinate sono latitudine e longitudine per la misurazione della distanza.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**Poligoni multipli**

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

**Sintassi:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt; )

**Descrizione:** Genera punti uniformi casuali su un politopo convesso. L&apos;argomento numSamples specifica il numero di punti casuali da generare. L&apos;argomento A è la matrice di coefficienti del vincolo. L&apos;argomento B sono i valori sul lato destro dei vincoli. Gli argomenti L e U sono rispettivamente i limiti inferiore e superiore per le variabili. Gli argomenti neq, mle e nge sono rispettivamente il numero dei vincoli di uguaglianza, il numero delle disuguaglianze minori o uguali e il numero delle disuguaglianze maggiori o uguali. L&apos;argomento nwarm è il numero di ripetizioni di warm-up prima di scrivere i punti nella matrice di output. L&apos;argomento nstride è il numero di ripetizioni tra ogni punto che è scritto nella matrice di output. Si noti che i vincoli devono essere elencati inizialmente come uguaglianze, poi come disuguaglianze minori o uguali e infine come disuguaglianze maggiori o uguali.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Popup Box( {label1, script1, ...} )

**Descrizione:** Restituisce un riquadro di visualizzazione con un menu di scelta rapida definito da coppie etichetta/script.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** x--; PostDecrement( x )

**Descrizione:** Sottrae 1 da una variabile o da un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = 1;
ex--;
ex;

```

### PostIncrement

**Sintassi:** x++; PostIncrement( x )

**Descrizione:** Aggiunge 1 a una variabile o a un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = 1;
ex++;
ex;

```

### Power

**Sintassi:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Descrizione:** Restituisce x elevato alla potenza di y. Se x è negativo, y deve essere un numero intero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Power( 2, 5 );

```

### Pref

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Present Value

**Sintassi:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il valore presente di un investimento. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione PV in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Sintassi:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il pagamento sul capitale per un dato periodo per un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione PPMT in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Print

**Sintassi:** Print( x, ... )

**Descrizione:** Visualizza i valori degli argomenti nel log, uno per riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Print( 355 / 113, Pi() );

```

### Print Matrix

**Sintassi:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Descrizione:** Stampa la matrice M. L&apos;argomento facoltativo ignore locale determina se la stampa dei separatori decimali deve rispettare le informazioni locali, dove zero significa che devono essere rispettate. L&apos;argomento facoltativo style determina se utilizzare uno stile e in tal caso quale utilizzare. Gli stili disponibili sono parseable e sono un&apos;espressione di matrice JSL riformattata, latex e other. Quando l&apos;argomento style è other, gli ultimi tre argomenti facoltativi definiscono i caratteri iniziali e finali delle righe stampate e i caratteri di separazione delle voci concatenate.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Descrizione:** Restituisce il quantile da una distribuzione normale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Normal Quantile( 0.9 );

```

### Product

**Sintassi:** y = Product( assignExpr, limit, bodyExpr )

**Descrizione:** Restituisce il prodotto delle valutazioni degli argomenti bodyExpr, incrementando ogni volta la variabile dall&apos;argomento assignExpr fino a quando è superiore o uguale all&apos;argomento limit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Python Connect

**Sintassi:** PythonConnection = Python Connect ()

**Descrizione:** Restituisce un oggetto che supporta script della connessione Python.

**JMP Versione aggiunta:** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Sintassi:** Python Create JPIP CMD()

**Descrizione:** Attiva la creazione di uno script wrapper di esecuzione della riga di comando jpipper il comando pip di Python. Una finestra di dialogo richiederà il percorso della directory in cui salvare lo script generato. Questo script fornisce tutte le capability pip e stabilisce correttamente le variabili di ambiente necessarie per l&apos;ambiente Python isolato di JMP.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Python Create JPIP CMD();

```

**Esempio 2**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Sintassi:** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Descrizione:** Invia un elenco di input, esegue le istruzioni e restituisce un elenco di output. Il parametro opzionale echo() è di default Vero. Il parametro echo controlla l&apos;eco del sorgente Python nel log. Il valore Vero logico (1) abilita l&apos;eco del sorgente, mentre 0 sopprime l&apos;eco nel log.

**JMP Versione aggiunta:** 14

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** y = Python Get( name )

**Descrizione:** Restituisce dati da Python, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati Python (numerico | stringa | matrice | elenco |diz | tabella di dati | colonna della tabella di dati | frame di dati | data e ora | numpy.datetime64 ).

**JMP Versione aggiunta:** 14

**Datetime**

```jsl


date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Esempio 1**

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

**Sintassi:** version = Python Get Version()

**Descrizione:** Restituisce il numero di versione di Python utilizzato con le interfacce JMP Python.

**JMP Versione aggiunta:** 14

```jsl

version = Python Get Version();
Show( version );

```

### Python Init

**Sintassi:** PythonConnection = Python Init( )

**Descrizione:** Nota: questa funzione è obsoleta a partire da JMP 18 ed è equivalente a Python Connect().

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl


Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Esempio 2**

```jsl


PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Sintassi:** Python Install Packages( packages )

**Descrizione:** Questo esegue il wrapping dell&apos;installazione dei pacchetti Python nella directory dei pacchetti del sito di JMP. Per operazioni che vanno oltre la semplice installazione dei pacchetti, vedere Python Create JPIP CMD() per creare uno script wrapper del comando pip da una riga di comando in una directory scelta con Directory Pick(). In alternativa, per eseguire l&apos;installazione da una finestra di script Python di JMP, consultare jmputils.jpip nella categoria Python dell&apos;indice di scripting.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Esempio 2**

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Esempio 3**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Sintassi:** connected = Python Is Connected()

**Descrizione:** Nota: questa funzione è obsoleta a partire da JMP 18 e restituisce sempre 1.

**JMP Versione aggiunta:** 14

```jsl

x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Sintassi:** Python name = Python JMP Name To Python Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile Python utilizzando le regole di assegnazione dei nomi alle variabili di Python.

**JMP Versione aggiunta:** 14

```jsl

Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Sintassi:** Python Reset()

**Descrizione:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Versione aggiunta:** 19

```jsl

pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Sintassi:** Python Send( name, &lt;Python Name( name ) | "as_name" &gt; )

**Descrizione:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Versione aggiunta:** 14

**Colonna**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**Data**

```jsl


date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Tabella di dati**

```jsl


x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

### Python Send File

**Sintassi:** Python Send File( filename, &lt;Python Name( name )&gt; )

**Descrizione:** Invia a Python un file di dati, in cui l&apos;argomento filename è una stringa che specifica il percorso del file da inviare a Python.

**JMP Versione aggiunta:** 14

```jsl


Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Sintassi:** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Descrizione:** Invia istruzioni a Python. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa. Il parametro opzionale echo() è pari a 1 di default. Il parametro echo controlla l&apos;eco del sorgente Python nel log. Il valore Vero logico (1) abilita l&apos;eco del sorgente, mentre 0 sopprime l&apos;eco nel log.

**JMP Versione aggiunta:** 14

```jsl

Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Sintassi:** Python Submit File( path )

**Descrizione:** Invia istruzioni a Python mediante un file specificato dall&apos;argomento path.

**JMP Versione aggiunta:** 14

```jsl

Python Submit File( "some_Python_source.py" );

```

### Python Term

**Sintassi:** Python Term()

**Descrizione:** Nota: questa funzione è deprecata a partire da JMP 18 e non ha alcun effetto.

**JMP Versione aggiunta:** 14

### QR

**Sintassi:** {Q, R} = QR( X )

**Descrizione:** Crea una matrice ortogonale Q (m per m) e una matrice triangolare superiore R (m per n), tale che X = Q * R. L&apos;argomento X è una matrice (m per n).

**JMP Versione aggiunta:** prima della versione 14

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**Sintassi:** {Q, R} = QR LAPACK( X )

**Descrizione:** Crea una matrice ortogonale Q (m per k) e una matrice triangolare superiore R (k per n), tale che X = Q * R. L&apos;argomento X è una matrice (m per n) dove k è min(m, n).

**JMP Versione aggiunta:** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Sintassi:** y = Quadratic Form BLAS( A, x )

**JMP Versione aggiunta:** 17

```jsl

A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Quantile

**Sintassi:** y = Quantile( p, x1, ... )

**Descrizione:** Restituisce il quantile specificato p degli argomenti x. L&apos;argomento del quantile può essere scalare o una matrice. I valori x possono anche essere specificati come valori entro una singola matrice o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Quarter

**Sintassi:** q = Quarter( datetime )

**Descrizione:** Restituisce il trimestre di un valore di data e ora, 1 - 4.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Quarter( Today() );

```

### Query

**Sintassi:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Descrizione:** Esegue una query SQL su tabelle di dati JMP. sqlStatement (la query SQL, più probabile un&apos;istruzione SELECT) è necessario e deve essere l&apos;ultimo argomento. Le tabelle di dati JMP referenziate dall&apos;istruzione SQL devono essere passate come argomenti a Query(), utilizzando Table(dt, "alias") per creare un alias per la tabella utilizzabile, se necessario, da SQL. Invisible or Private possono essere passati per controllare la visibilità della tabella di dati risultante. Se l&apos;istruzione SQL restituisce un singolo valore, passare Scalar, che determinerà la restituzione di un singolo valore invece di una tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Query( dt, "SELECT name, age, height FROM 'Big Class'
         WHERE age > 14; " );

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

**Sintassi:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descrizione:** Esce da JMP.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** RConnection = R Connect()

**Descrizione:** Restituisce un oggetto che supporta script della connessione R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

RConnection = R Connect();

```

### R Control

**Sintassi:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Descrizione:** Cambia le opzioni di controllo per R

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Sintassi:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Descrizione:** Invia elenco di input, esegue istruzioni e restituisce un elenco di output.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### R Get

**Sintassi:** y = R Get( name )

**Descrizione:** Restituisce dati da R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati R ( numerico | stringa | matrice | elenco | tabella di dati).

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** R graphics = R Get Graphics( format )

**Descrizione:** DEPRECATO in JMP 19 e non ha alcun effetto. In sostituzione, impostare il dispositivo su un nome di file come png("r_plot.png"), quindi aprire il file per recuperare l&apos;immagine. Questa opzione verrà rimossa da JMP 20. Il codice seguente mostra una soluzione.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** version = R Get Version()

**Descrizione:** Restituisce il numero di versione di R utilizzato con le interfacce JMP R.

**JMP Versione aggiunta:** 14

```jsl

R Init();
version = R Get Version();
Show( version );

```

### R Init

**Sintassi:** R Init()

**Descrizione:** Inizializza le interfacce R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();

```

### R Is Connected

**Sintassi:** connected = R Is Connected()

**Descrizione:** Restituisce 1 se esiste una connessione attiva R, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Sintassi:** R name = R JMP Name To R Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile R utilizzando le regole di assegnazione dei nomi alle variabili R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**Sintassi:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Descrizione:** Invia dati a R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP (numerico | stringa | matrice | elenco | tabella di dati | colonna della tabella di dati).

**JMP Versione aggiunta:** prima della versione 14

**Colonna**

```jsl

R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

**Tabella di dati**

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

**Sintassi:** R Send File( filename, &lt;R Name( name )&gt; )

**Descrizione:** Invia a R un file di dati, in cui l&apos;argomento filenameè una stringa che specifica il percorso del file da inviare a R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Sintassi:** R Submit( statements )

**Descrizione:** Invia istruzioni a R. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** R Submit File( path )

**Descrizione:** Invia istruzioni a R mediante un file specificato dall&apos;argomento path.

**JMP Versione aggiunta:** prima della versione 14

```jsl


R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Sintassi:** R Term()

**Descrizione:** Deprecato in JMP 19 e non ha alcun effetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();
R Term();

```

### Radio Box

**Sintassi:** y = Radio Box( {item, ...}, &lt;script&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una serie di pulsanti di opzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Random Beta

**Sintassi:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione beta.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**Sintassi:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione beta-binomiale per n prove con probabilità p e correlazione delta.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**Sintassi:** y = Random Binomial( n, p )

**Descrizione:** Restituisce un numero casuale da una distribuzione binomiale con n prove e probabilità di eventi p.

**JMP Versione aggiunta:** prima della versione 14

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
			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) / Round( exrbinsz )
		);
		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,
			H Line(
				exrbink,
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink )
			);
			V Line(
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ),
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,
			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );
			V Line( exrbink, exrbinfreq[exrbink], exrbinfreq[exrbink + 1] );
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
		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Category

**Sintassi:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Descrizione:** Restituisce una categoria casuale specificate coppie di probabilità ed espressioni del risultato. Viene generato un numero uniforme casuale e confrontato con gli argomenti di probabilità per determinare quale argomento del risultato viene restituito.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Sintassi:** y = Random Cauchy()

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione di Cauchy con una mediana di zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**Sintassi:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione Chi-Square.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**Sintassi:** y = Random ExGaussian( location, scale, shape)

**Descrizione:** Restituisce un numero casuale da una distribuzione ex gaussiana.

**JMP Versione aggiunta:** 18

```jsl


//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**Sintassi:** y = Random Exp()

**Descrizione:** Restituisce un numero casuale da una distribuzione esponenziale.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**Sintassi:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione F.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**Sintassi:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione di Fréchet.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random Gamma

**Sintassi:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**Sintassi:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione gamma di Poisson con parametri lambda e sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**Sintassi:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione gamma generalizzata estesa con i parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**Sintassi:** y = Random Geometric( p )

**Descrizione:** Restituisce un numero casuale di non eventi fino a quando si verifica un evento, per eventi con probabilità p.

**JMP Versione aggiunta:** prima della versione 14

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
			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) / Round( exrgeosz )
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
			V Line( exrgeok + 1, exrgeofreq[exrgeok + 1], exrgeofreq[exrgeok + 2] );
		);
		Text( {10, 0.2}, " p=", Round( exrgeop, 2 ), " sample size=", Round( exrgeosz ) );
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random GLog

**Sintassi:** y = Random GLog( mu, sigma, lambda )

**Descrizione:** Restituisce un numero casuale a partire da un distribuzione logaritmica generalizzata.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Index

**Sintassi:** x = Random Index( n, k )

**Descrizione:** Restituisce una matrice k per 1 di numeri interi casuali tra 1 e n senza valori duplicati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Random Index( 100, 5 );

```

### Random Integer

**Sintassi:** y = Random Integer( n ); Random Integer( k, n )

**Descrizione:** Restituisce un numero intero casuale tra 1 e n (o tra k e n) compresi.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**Sintassi:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione Sb di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**Sintassi:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione Sl di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**Sintassi:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione Su di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**Sintassi:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione LEV.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random LogGenGamma

**Sintassi:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione log gamma generalizzata con i parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**Sintassi:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione logistica.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**Sintassi:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione log-logistica.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**Sintassi:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione lognormale, con parametro di posizione mu e parametro di scala sigma.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl


//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Esempio 2**

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
			H Line( exranlnorm[k - 1], exranlnorm[k], (k - 1) / Round( exrlnn ) )
		);
		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );
		Text( {-4, 0.8}, " n=", Round( exrlnn ) );
	),
	H List Box( Slider Box( 10, 2000, exrlnn, exrlny << reshow ), Text Box( " n" ) )
);

```

### Random Multivariate Normal

**Sintassi:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**Descrizione:** Restituisce una matrice casuale nrows per p da una distribuzione normale multivariata con vettore medio mean e matrice di covarianza (positiva semi-definita) covar, dove p è definito come il numero di righe di covar.

**JMP Versione aggiunta:** 15

```jsl

meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Sintassi:** y = Random Negative Binomial( r, p )

**Descrizione:** Restituisce un numero casuale di non eventi fino a quando si verificano r eventi, per eventi con probabilità p.

**JMP Versione aggiunta:** prima della versione 14

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
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( exnbrn, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbrn ) );
		Text( {1, 0.035}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
		Text(
			{1, 0.030},
			"x=",
			Round( exnbrn, 2 ),
			" Prob=",
			Round( Neg Binomial Probability( exnbpp, exnbpn, exnbrn ), 2 )
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

**Sintassi:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione normale con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl


//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Esempio 2**

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
			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx * exsx);
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

**Sintassi:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Descrizione:** Restituisce un numero casuale da una distribuzione normale della miscela con medie di gruppo meanvec, deviazioni standard di gruppo sdvec e probabilità di gruppo probvec.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = New Table( "Example",
	New Column( "Rand NM",
		set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) )
	)
);
dt << add rows( 1000 );
Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**Sintassi:** y = Random Poisson( lambda )

**Descrizione:** Restituisce un numero casuale da una distribuzione di Poisson.

**JMP Versione aggiunta:** prima della versione 14

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
			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) / Round( exrpoisz )
		);
		exrpoitmp1 = 0;
		exrpoitmp2 = 0;
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, Poisson Distribution( exrpoilambda, exrpoik ) );
			V Line(
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik ),
				Poisson Distribution( exrpoilambda, exrpoik + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );
			V Line( exrpoik + 1, exrpoifreq[exrpoik + 1], exrpoifreq[exrpoik + 2] );
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
		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Reset

**Sintassi:** Random Reset( seed number )

**Descrizione:** Riavvia le sequenze casuali con un nuovo seme.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Random Reset( 1 );
Random Normal();

```

### Random Seed State

**Sintassi:** Random Seed State( &lt;seed state&gt; )

**Descrizione:** Recupera o ripristina lo stato di seme casuale, da o in un oggetto blob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

r = Random Seed State();
Random Seed State( r );

```

### Random SEV

**Sintassi:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione SEV.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**Sintassi:** y = Random SHASH( gamma, delta, theta, sigma )

**Descrizione:** Restituisce un numero casuale dalla distribuzione sinh-arcsinh (SHASH).

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl


//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**Trasformazione SHASH**

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

**Sintassi:** y = Random Shuffle( matrix )

**Descrizione:** Restituisce la matrice con gli elementi mescolati in ordine casuale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random SVD

**Sintassi:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Descrizione:** Calcola la decomposizione ai valori singolari della matrice X usando la decomposizione ai valori singolari randomizzata e restituisce un elenco {U, M, V} tale che U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Random t

**Sintassi:** y = Random t( df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione T.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Random Triangular

**Sintassi:** y = Random Triangular( a, b, c );y = Random Triangular( b, c );y = Random Triangular( b )

**Descrizione:** Restituisce un numero casuale da una distribuzione triangolare con limite inferiore a, moda b e limite superiore c. Random Triangular(b,c) è equivalente a Random Triangular(0,b,c). Random Triangular(b) è equivalente a Random Triangular(0,b,1).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Sintassi:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**Descrizione:** Restituisce un numero casuale da una distribuzione uniforme tra min e max, esclusivamente.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl


//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Esempio 2**

```jsl

Random Uniform( 1, 10 );

```

### Random Weibull

**Sintassi:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione di Weibull.

**JMP Versione aggiunta:** prima della versione 14

```jsl


//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**Sintassi:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Descrizione:** Restituisce un numero casuale da una distribuzione binomiale negativa con inflazione di zeri con il parametro di posizione lambda, il parametro di scala sigma e il parametro di inflazione di zeri pi.

**JMP Versione aggiunta:** 19

**Esempio 1**

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
			V Line( i, 0, ZI Negative Binomial Probability( i, 25, .5, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rnb, 0, ZI Negative Binomial Probability( rnb, 25, .5, .05 ) );
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
			Round( ZI Negative Binomial Probability( rnb, 25, .5, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Negative Binomial Number",
			rnb = Random ZI Negative Binomial( 25, .5, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Esempio 2**

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

**Sintassi:** y = Random ZI Poisson Binomial( lambda, pi )

**Descrizione:** Restituisce un numero casuale da una distribuzione di Poisson con inflazione di zeri con il parametro di posizione lambda e il parametro di inflazione di zeri pi.

**JMP Versione aggiunta:** 19

**Esempio 1**

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
		Text( {30, 0.06}, "lambda=", Round( 20 ), ", pi=", Round( .05, 2 ) );
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

**Esempio 2**

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

**Sintassi:** y = Range( x1, ... )

**Descrizione:** Restituisce i valori minimo e massimo tra gli argomenti combinati, che possono essere argomenti scalari, matrici o elenchi.

**JMP Versione aggiunta:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### Range Slider Box

**Sintassi:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Descrizione:** Restituisce un riquadro di visualizzazione che mostra un cursore intervallo che va da minValue a maxValue. Dal momento che le posizioni dei cursori cambiano, i loro valori sono inseriti in  lowVariable e highVariable, e viene eseguito lo script.

**JMP Versione aggiunta:** prima della versione 14

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
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Rank

**Sintassi:** y = Rank Index( x )

**Descrizione:** Restituisce un vettore di indici che, usati come indice del vettore originale v, ordina il vettore per rango. Esclude i valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Sintassi:** y = Rank Index( x )

**Descrizione:** Restituisce un vettore di indici che, usati come indice del vettore originale v, ordina il vettore per rango. Esclude i valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Sintassi:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descrizione:** Restituisce un vettore di ranghi dei valori di x, da basso ad alto come da 1 a n, con valori equivalenti arbitrari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Sintassi:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descrizione:** Restituisce un vettore di ranghi dei valori di x, ma definisce i ranghi in base a valori equivalenti mediati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Recode

**Sintassi:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Descrizione:** Applica le trasformazioni elencate ai valori di input e restituisce il risultato. Le opzioni Risposta multipla e Per parola dividono i dati dei caratteri forniti in valori di input più piccoli. Una volta determinati i valori di input, le trasformazioni vengono applicate a tali valori separatamente.

Speciali variabili JSL vengono popolate durante l&apos;esecuzione del comando:

	_rcNow è il valore corrente dell&apos;input dopo le trasformazioni precedenti.

	_rcOrig è il valore originale dell&apos;input.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

**Esempio 2**

```jsl

Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Rect

**Sintassi:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Descrizione:** Disegna un rettangolo, riempito se il riempimento è diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Recurse( x1, ... )

**Descrizione:** Chiama la funzione di contenimento.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Descrizione:** Cerca nel testo di source una corrispondenza con pattern. L&apos;impostazione predefinita di format è "\\0" (l&apos;intera corrispondenza) ma potrebbe essere "Fred" (per una sostituzione costante) o "\\1" (per usare il testo corrispondente alla prima parentesi in pattern). Restituisce un numero mancante per nessuna corrispondenza. La distinzione tra maiuscole/minuscole è l&apos;impostazione predefinita.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Regex Match

**Sintassi:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**Descrizione:** Esegue una corrispondenza dell&apos;espressione regolare e restituisce un elenco dell&apos;intero testo corrispondente e le corrispondenze per ogni riferimento all&apos;indietro creato da una parentesi aperta. Facoltativamente, il terzo argomento specifica una stringa di sostituzione per l&apos;intera corrispondenza; la stringa di sostituzione può utilizzare riferimenti all&apos;indietro.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;LoadsAtStartup(autoLoad)&gt;, &lt;LoadNow(load)&gt; )

**Descrizione:** Registra un add-in

**JMP Versione aggiunta:** prima della versione 14

```jsl

Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Sintassi:** Reload Policies()

**JMP Versione aggiunta:** 18

### Remove

**Sintassi:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Descrizione:** Restituisce una copia dell&apos;elenco x eliminando n elementi a partire dall&apos;i-esimo elemento o eliminando un elenco di elementi specificati dall&apos;argomento list.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove Color Theme

**Sintassi:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Descrizione:** Rimuove un tema colori personalizzato dall&apos;elenco globale, o per nome o in base all&apos;oggetto tema colori completo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Remove Custom Functions

**Sintassi:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Descrizione:** Rimuove un elenco di funzioni personalizzate dall’ambiente.

**JMP Versione aggiunta:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Remove From

**Sintassi:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Descrizione:** Modifica l&apos;elenco, l&apos;array associativo o il riquadro di visualizzazione x rimuovendo elementi. Gli array associativi specificano l&apos;elemento da rimuovere con un valore di chiave i. Gli elenchi e i riquadri di visualizzazione rimuovo iniziando dall&apos;elemento in posizione i. Un elenco rimuove più elementi contemporaneamente se è specificata l&apos;opzione n. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Esempio 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Esempio 3**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Rename Directory

**Sintassi:** rc = Rename Directory( old, new )

**Descrizione:** Rinomina una directory senza spostarla o copiarla; il nuovo nome NON include un percorso. Restituisce 1 se la directory è stata rinominata. Restituisce 0 se la directory non ha potuto essere rinominata o se il percorso non è valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Sintassi:** rc = Rename File( old, new )

**Descrizione:** Rinomina un file senza spostarlo o copiarlo; il nuovo nome NON include un percorso. Restituisce 1 se il file è stato rinominato. Restituisce 0 se il file non ha potuto essere rinominato. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Repeat

**Sintassi:** s = Repeat( x, n, &lt;m=1&gt; )

**Descrizione:** Restituisce il testo, matrice o elenco specificati dall&apos;argomento x concatenato con se stesso n volte. Se x è un numero o una matrice, n indica la ripetizione verticale e l&apos;argomento facoltativo m indica la ripetizione orizzontale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Report

**Sintassi:** y = Report( platform object )

**Descrizione:** Restituisce un riferimento all&apos;albero di visualizzazione per il report da una piattaforma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Resample Freq

**Sintassi:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**Descrizione:** Genera un conteggio di frequenza per il campionamento con sostituzione, utile per campioni bootstrap. Senza argomenti, la funzione genera un ricampionamento del 100%. L&apos;argomento rate specifica il tasso di ricampionamento. Se è specificato l&apos;argomento column, la dimensione campionaria scelta è rate moltiplicato per la somma della colonna specificata. Un valore negativo rate segnala che le frequenze frazionarie non sono consentite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append(
		V List Box( Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) ) )
	);
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;
newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );
theBox << CloseWindow;

```

### Return

**Sintassi:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Descrizione:** Restituisce un valore espressione da una funzione definita dall&apos;utente.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Reverse

**Sintassi:** y = Reverse( x )

**Descrizione:** Restituisce una copia dell&apos;elenco x con l&apos;ordine degli elementi invertito.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Sintassi:** Reverse Into( x )

**Descrizione:** Modifica l&apos;elenco o il riquadro di visualizzazione x con l&apos;ordine degli elementi invertito. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Esempio 2**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Revert Menu

**Sintassi:** Revert Menu()

**Descrizione:** Ripristina i menu predefiniti dalla fabbrica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

/* Reverts menus back to factory default settings. */

```

### RGB Color

**Sintassi:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Descrizione:** Restituisce un numero di colore a partire dai componenti rossi, verdi e blu, tutti tra 0 e 1. RGB Color(1, 1, 1) è bianco.

**JMP Versione aggiunta:** prima della versione 14

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
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
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

**Sintassi:** sub = Right( s, n, &lt;filler&gt; )

**Descrizione:** Restituisce una versione troncata o riempita della stringa o elemento originale s. Il risultato contiene i caratteri n di destra o gli elementi dell&apos;elenco, riempiti con qualsiasi filler sulla sinistra se la lunghezza di s è inferiore a n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Right( "http://www.jmp.com", 3 );

```

### Robust PCA

**Sintassi:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Descrizione:** Scompone in maniera robusta i dati in una matrice di rango basso e in una matrice sparsa di residui. Nei residui vengono rilevati gli outlier. Può anche imputare i valori mancanti.

**JMP Versione aggiunta:** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### Root

**Sintassi:** y = Root( x, &lt;n=2&gt; )

**Descrizione:** Restituisce la radice n-esima di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### Round

**Sintassi:** y = Round( x, &lt;n&gt; )

**Descrizione:** Arrotonda x a n cifre dopo la virgola decimale (o 0 cifre se n non è specificato). Nota: l&apos;argomento n può essere negativo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( 213, -1 );

```

### Row

**Sintassi:** y = Row(); Row() = y

**Descrizione:** Restituisce la riga corrente in una tabella di dati. Può essere impostato come un valore L. Ripristina la riga corrente assegnando il valore 0.

**JMP Versione aggiunta:** prima della versione 14

**Imposta riga**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Reimposta riga**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Row State

**Sintassi:** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**Descrizione:** Restituisce lo stato della riga corrente (o r-esima) nella tabella di dati corrente. Se si utilizza la funzione Row State() come valore L, esso modifica lo stato della riga corrente (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Rummage

**Sintassi:** treasures = Rummage( box, query )

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**Esempio 3**

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
Show( Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1 :: 3] << Title );

```

### Run Program

**Sintassi:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**Descrizione:** Controlla un programma esterno mediante stdin e stdout.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Esempio 2**

```jsl

RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Esempio 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};
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
				Show( this << CanRead, this << CanWrite, this << isReadEOF );
			);
		)
	)
);

```

### SAS Name

**Sintassi:** sasName = SAS Name( string|namelist )

**Descrizione:** Converte nomi di variabili JMP in una stringa contenente nomi di variabili SAS validi, sostituendo caratteri speciali e spazi con trattini bassi. L&apos;argomento può essere specificato come una stringa o un elenco di stringhe.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Sintassi:** nameList = SAS Open For Var Names( path )

**Descrizione:** Restituisce un elenco di nomi di variabili da un data set SAS.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

### Save Log

**Sintassi:** f = Save Log( &lt;path&gt; )

**Descrizione:** Scrive il contenuto del log nel percorso del file specificato. Se l&apos;operazione è effettuata correttamente, questa funzione restituisce il nome del file creato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Save Text File

**Sintassi:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**Descrizione:** Crea un file di testo con il nome del file che è specificato dall&apos;argomento path e contenente il testo specificato dall&apos;argomento della stringa text. Se il salvataggio avviene correttamente, la funzione Save Text File() restituisce il nome del percorso del file creato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### SbInv

**Sintassi:** x = SbInv( z, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile normale standard in una variabile di Johnson a doppio limite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Sintassi:** z = SbTrans( x, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile di Johnson a doppio limite in una variabile normale standard.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scene Box

**Sintassi:** box = Scene Box( xsize, ysize )

**Descrizione:** Restituisce un riquadro di visualizzazione per grafici 3D.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** list = Scene Display List()

**Descrizione:** Restituisce un elenco di visualizzazione per grafici 3D.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Schedule( sec, scpt )

**Descrizione:** Programma un evento che esegue l&apos;argomento dello script scpt allo scadere di sec secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Scheffe Cubic

**Sintassi:** y = Scheffe Cubic( x1, x2 )

**Descrizione:** Viene valutato come x1*x2*(x1-x2); utilizzato per supportare la notazione di modellizzazione con modelli cubici di miscele.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### Scoring Impute

**Sintassi:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Descrizione:** Offre funzionalità di streaming per l&apos;algoritmo di imputazione automatica dei dati (ADI). Gli argomenti di input sono un vettore riga che contiene valori mancanti, una matrice di caricamento (detta anche matrice V) che è prodotta dall&apos;algoritmo ADI, un vettore della colonna significa ignorare le celle mancanti e un vettore delle deviazioni standard della colonna ignorare le celle mancanti. Restituisce il vettore riga con i valori mancanti imputati utilizzando la stima dei minimi quadrati.

**JMP Versione aggiunta:** 14

```jsl

Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Script Box

**Sintassi:** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione per modificare uno script. Di default, l&apos;editor ha evidenziazione della sintassi e comportamento JSL.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che posiziona un riquadro figlio più grande mediante le barre di scorrimento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Second

**Sintassi:** sec = Second( datetime )

**Descrizione:** Restituisce i secondi di un valore di data e ora, comprese parti frazionarie, 0 – 60 escluso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Second( Today() );

```

### Selected

**Sintassi:** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descrizione:** Restituisce la componente selezionata del valore specificato dello stato della riga, 0 o 1. Se si utilizza Selezionato come valore L, esso modifica lo stato modificato della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Sintassi:** rs = Selected State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente selezionata impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Send

**Sintassi:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Descrizione:** Invia un messaggio (sottoforma di espressione) a un oggetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Sequence

**Sintassi:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**Descrizione:** Restituisce il Row()esimo elemento nella sequenza di numeri da start a end incrementato di incr. Ogni numero della sequenza è ripetuto n volte. A causa della dipendenza da Row(), la funzione Sequence() è utile principalmente in formule di colonna. Per creare sequenze come matrici JSL, vedere Index().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Set Clipboard

**Sintassi:** Set Clipboard( text )

**Descrizione:** Inserisce il testo specificato negli Appunti del sistema utilizzati dal menu Modifica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Set Clipboard( "example" );

```

### Set Default Directory

**Sintassi:** Set Default Directory( path )

**Descrizione:** Imposta la directory predefinita JMP utilizzata come base per percorsi relativi successivi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set Difference

**Sintassi:** list = Set Difference( list1, list2 )

**Descrizione:** Restituisce l&apos;elenco degli elementi presenti in list1 ma non in list2. Gli elementi possono essere ripetuti. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Environment Variable

**Sintassi:** value = Set Environment Variable( string, &lt; string&gt; )

**Descrizione:** Imposta il valore della variabile di ambiente specificata nel sistema operativo. Se il secondo argomento è mancante o è una stringa vuota la variabile di ambiente viene eliminata.



NOTA: sul sistema operativo Macintosh, il nome della variabile fa distinzione tra maiuscole e minuscole.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Set File Search Path

**Sintassi:** Set File Search Path(path | {list of paths})

**Descrizione:** Imposta l&apos;elenco corrente di directory da ricercare per l&apos;apertura dei file. "." significa la directory corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Global Window Handler

**Sintassi:** Set Global Window Handler( Handler Function )

**Descrizione:** Imposta una funzione da chiamare ogni volta che viene creata una nuova finestra.

**JMP Versione aggiunta:** 17

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

**Sintassi:** list = Set Intersect( list1, list2 )

**Descrizione:** Restituisce l&apos;elenco degli elementi presenti in entrambi gli elenchi. Gli elementi possono essere ripetuti. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Path Variable

**Sintassi:** Set Path Variable( name, &lt;value&gt; )

**Descrizione:** Imposta una variabile di percorso con un nome del tipo SAMPLE_DATA che viene sostituita se trovata nei nomi di percorso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### Set Platform Preference

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Sintassi:** Set Policy("PolicyName", &lt;Empty()|#|"value"&gt; )

**JMP Versione aggiunta:** 18

### Set Preference

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Sintassi:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Descrizione:** Imposta la visibilità di una barra degli strumenti specificata per una data classe di finestre. Il nome della barra degli strumenti è il nome interno della barra degli strumenti. Se viene passato Predefinito come nome della barra degli strumenti, la classe di finestre specificata viene ripristinata alla barra degli strumenti predefinita impostata per quella classe di finestre. Esempi di nome-classe-finestre sono Tabella di dati, Script, Report e Journal. Se il nome della classe di finestre è Tutto, la visibilità per la barra strumenti specificata viene impostata per tutte le classi di finestre.

Viene restituito 1 se l&apos;operazione è riuscita e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** list = Set Union( list1, list2 )

**Descrizione:** Restituisce l&apos;elenco degli elementi presenti in uno dei due elenchi. Gli elementi possono essere ripetuti. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

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

**Sintassi:** list = Set Unique( list )

**Descrizione:** Restituisce l&apos;elenco degli elementi univoci presenti nell&apos;elenco di input. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### SEV Density

**Sintassi:** y = SEV Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione del valore estremo più piccolo con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### SEV Distribution

**Sintassi:** p = SEV Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione del valore estremo più piccolo con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### SEV Quantile

**Sintassi:** q = SEV Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione del valore estremo più piccolo con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Shade State

**Sintassi:** rs = Shade State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente gradazione colore impostata al valore specificato. Necessita della combinazione con un valore Hue State() per produrre un colore valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Shape

**Sintassi:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Descrizione:** Rimodella la matrice o scalare M tra le righe per creare nr righe per nc colonne. Un valore mancante è ammesso per nr. I dati da M sono replicati secondo necessità per riempire la matrice nr per nc. L&apos;argomento facoltativo <<bycol riempie i dati per colonna. Per impostazione predefinita, i dati sono riempiti per riga. Utilizzi comuni sono rimodellare un vettore in una matrice o vettorializzare una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Shape Seg

**Sintassi:** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Descrizione:** Restituisce un segmento di visualizzazione con una raccolta di forme. Ciascuna forma disegna un tratto lungo il percorso specificato se il riempimento è 0, oppure dipinge l&apos;interno del percorso specificato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la densità in x di una distribuzione sinh-arcsinh (SHASH). La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

SHASH Density( 0, -1, 2, -2, 3 );

```

**Trasformazione SHASH**

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

**Sintassi:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione sinh-arcsinh (SHASH) sia inferiore a q. La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

**Esempio 1**

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
		Y Function( SHASH Distribution( q, gamma, delta, theta, sigma ), q );
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
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

**Trasformazione SHASH**

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

**Sintassi:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Descrizione:** Restituisce il quantile da una distribuzione sinh-arcsinh (SHASH), cioè il valore per cui si ha una probabilità pari a p di avere un valore casuale inferiore a esso. La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

SHASH Quantile( .5, 1, 2, 3, 1 );

```

**Trasformazione SHASH**

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

**Sintassi:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile normale standard in una variabile distribuita sinh-arcsinh (SHASH).

**JMP Versione aggiunta:** 14

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

**Sintassi:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile con distribuzione sinh-arcsinh (SHASH) in una variabile con distribuzione normale standard. La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

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

**Sintassi:** y = Sheet Part( title, childbox )

**Descrizione:** Restituisce un riquadro di visualizzazione contenente l&apos;argomento del riquadro di visualizzazione childbox con il titolo specificato.

**JMP Versione aggiunta:** prima della versione 14

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
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Shift

**Sintassi:** y = Shift( x, &lt;n=1&gt; )

**Descrizione:** Restituisce una copia dell&apos;elenco x con i primi n elementi spostati alla fine dell&apos;elenco o, se n è negativo, gli ultimi n elementi spostati all&apos;inizio.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Sintassi:** Shift Into( x, &lt;n=1&gt; )

**Descrizione:** Modifica l&apos;elenco o il riquadro di visualizzazione x con i primi elementi n spostati alla fine dell&apos;elenco o, se n è negativo, gli ultimi elementi n spostati all&apos;inizio. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Esempio 2**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Short Date

**Sintassi:** s = Short Date( datetime, &lt;format&gt; )

**Descrizione:** Restituisce una rappresentazione specifica locale numerica (GG/MM/AAAA) di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Short Date( Today() );

```

### Shortest Edit Script

**Sintassi:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Descrizione:** Restituisce uno degli script di modifica più brevi per convertire la stringa A in stringa B. La forma semplice restituisce solo un elenco. strings() e lines() dispongono di un&apos;opzione per restituire una matrice o un elenco. sequences() restituisce solo una matrice. L&apos;opzione facoltativa limit() interromperà prima la funzione se l&apos;elenco di modifiche contiene più inserimenti ed eliminazioni del limite. lines() confronta righe piuttosto che caratteri; le opzioni facoltative ignore("caratteri") o ignoreWhiteSpace() hanno come impostazione predefinita di non ignorare alcun carattere. ESC interromperà la funzione se necessario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );
common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),
	i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2
		] /* the snippet */
	)
);
common;

```

### Show

**Sintassi:** Show( x, ... )

**Descrizione:** Visualizza il nome e il valore degli argomenti nel log, uno per riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Addin Builder Dialog

**Sintassi:** Show Addin Builder Dialog()

**Descrizione:** Visualizza una finestra di dialogo che può essere utilizzata per creare add-in personalizzati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Sintassi:** Show Addins Dialog()

**Descrizione:** Visualizza una finestra di dialogo che mostra lo stato di tutti gli add-in registrati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Addins Dialog();

```

### Show Classes

**Sintassi:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Descrizione:** Mostra il contenuto di tutte le classi definite dall&apos;utente.

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
Show Classes();

```

### Show Commands

**Sintassi:** Show Commands( &lt;keyword=Builtins&gt; )

**Descrizione:** Crea una o più tabelle di dati che contengono informazioni su vari componenti JSL. L&apos;argomento keyword determina il contenuto della tabella di output. Specificare elementi incorporati (di default) per operatori e funzioni incorporati. Specificare oggetti che supportano script per tutti i comandi che supportano script per gli oggetti. Specificare traduzioni per le versioni inglesi e localizzate dei comandi che supportano script. Specificare riquadri di visualizzazione per i comandi che supportano script relativi a riquadri e segmenti di visualizzazione. Specificare nomi che supportano script per i nomi degli oggetti che supportano script. Specificare i nomi delle piattaforme per i nomi delle piattaforme.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Commands();

```

### Show Globals

**Sintassi:** Show Globals()

**Descrizione:** Elenca tutti i simboli globali al momento definiti e i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Globals();

```

### Show Namespaces

**Sintassi:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descrizione:** Mostra il contenuto di tutti gli spazi dei nomi definiti dall&apos;utente, sia con nome sia anonimi.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Show Preferences()

**Descrizione:** Mostra le impostazioni delle preferenze correnti nel log.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Preferences();

```

### Show Properties

**Sintassi:** Show Properties( object )

**Descrizione:** Mostra nel log i messaggi a cui risponde un oggetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Properties( Current Data Table() );

```

### Show Symbols

**Sintassi:** Show Symbols()

**Descrizione:** Elenca tutti i simboli al momento definiti ed i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show Symbols();

```

### Simplify Expr

**Sintassi:** resultExpr = Simplify Expr( expr( ... ) )

**Descrizione:** Restituisce un&apos;espressione equivalente che semplifica l&apos;espressione dell&apos;argomento in diversi modi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

### Sin

**Sintassi:** y = Sine( x )

**Descrizione:** Restituisce il seno trigonometrico di x, dove x è un angolo in radianti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sine( Pi() / 6 );

```

### Sine

**Sintassi:** y = Sine( x )

**Descrizione:** Restituisce il seno trigonometrico di x, dove x è un angolo in radianti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sine( Pi() / 6 );

```

### SinH

**Sintassi:** y = SinH( x )

**Descrizione:** Restituisce il seno iperbolico di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SinH( 1 );

```

### Slider Box

**Sintassi:** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**Descrizione:** Restituisce un riquadro di visualizzazione che mostra un controllo a scorrimento che varia da minValue a maxValue. Dal momento che la posizione del cursore cambia, il suo valore viene inserito in variable e viene eseguito lo script.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Trasforma una variabile normale standard in una variabile SL di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Sintassi:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Trasforma una variabile SL di Johnson in una variabile normale standard.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sobol Quasi Random Sequence

**Sintassi:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Descrizione:** Genera una sequenza di numeri quasi casuali riempitivi utilizzando la sequenza di Sobol in un massimo di 4000 dimensioni.

**JMP Versione aggiunta:** prima della versione 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Sintassi:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Descrizione:** Crea una variabile di socket che può comunicare con i socket su questo o un altro computer connesso in rete. L&apos;argomento predefinito è STREAM. Provare con il sito Web della società/organizzazione dell&apos;utente.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Solve( A, B )

**Descrizione:** Risolve il sistema lineare A*x=B per x. La funzione Solve() è equivalente a Inverse(A)*B se A è non-singolare. Nota: l&apos;argomento A deve essere una matrice quadrata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Sintassi:** y = Sort Ascending( x )

**Descrizione:** Restituisce una copia dell&apos;elenco o matrice x con gli elementi in ordine crescente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Sintassi:** y = Sort Descending( x )

**Descrizione:** Restituisce una copia dell&apos;elenco o matrice x con gli elementi in ordine decrescente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sort List

**Sintassi:** y = Sort List( x )

**Descrizione:** Restituisce una copia dell&apos;elenco x con gli elementi in ordine crescente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Sintassi:** Sort List Into( x )

**Descrizione:** Modifica l&apos;elenco x con gli elementi in ordine crescente. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Spacer Box

**Sintassi:** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**Descrizione:** Restituisce un riquadro di visualizzazione che può essere utilizzato per mantenere lo spazio tra altri riquadri o riempire una cella in un Lineup Box. Gli argomenti Size sono specificati in pixel e l&apos;argomento Color è un qualsiasi colore JSL valido.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Descrizione:** Calcola la scomposizione di valori singolare della matrice X utilizzando il metodo di Lanczos implicitamente riavviato, parzialmente riortogonalizzato per matrici sparse restituendo un elenco {U, M, V} per cui U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Speak

**Sintassi:** Speak( text, &lt;Wait( sync )&gt; )

**Descrizione:** Enuncia il testo se supportato dal sistema operativo. Specificando l&apos;argomento facoltativo Wait(true) si ritarda l&apos;esecuzione dello script fino al termine del discorso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Speak( "Hello" );

```

### Spin Box

**Sintassi:** y = Spin Box( &lt;script&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione che presenta controlli su/giù. L&apos;argomento script viene chiamato con un argomento che indica la direzione della freccia su cui si fa clic (negativo è giù, positivo è su). Una grandezza pari a 1 indica un unico clic, mentre valori più grandi possono essere utilizzati per indicare un&apos;azione ripetuta.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Descrizione:** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Sintassi:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Descrizione:** Valuta le previsioni spline usando la matrice coef nella stessa forma restituita dalla funzione Spline Coef(). extrapolation indica quanto estendere la valutazione oltre il range di spline, come frazione del range, prima di restituire valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Spline Fit",
	window:x = 20 :: 80;
	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40 + J(
		1,
		N Col( window:x ),
		Random Normal( 0, 10 )
	);
	window:loglambda = 2;
	window:g = Graph Box(
		Pen Color( "blue" );
		window:m = Spline Coef( window:x, window:y, Power( 10, window:loglambda ) );
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

**Sintassi:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Descrizione:** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sqrt

**Sintassi:** y = Sqrt( x )

**Descrizione:** Restituisce la radice quadrata positiva dell&apos;argomento x, che può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**Sintassi:** y = Squash( x )

**Descrizione:** Restituisce 1 / (1 + Exp( x )), che converte un numero nel dominio -∞...+∞ nel range 1...0. La funzione Squash() è utile nella regressione logistica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Squash( 10 );

```

### Squish

**Sintassi:** y = Logist( x )

**Descrizione:** Restituisce 1 / (1 + Exp( -x )), che converte un numero nel dominio -∞...+∞ nell&apos;intervallo 0...1. La funzione è utile nella regressione logisticaLogist().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logist( 2 );

```

### SSQ

**Sintassi:** y = SSQ( x1, ... )

**Descrizione:** Restituisce la somma dei quadrati di tutti gli elementi

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Starts With

**Sintassi:** b = Starts With( s, sub )

**Descrizione:** Restituisce 1 se s inizia con sub, altrimenti restituisce 0. Gli argomenti s e sub possono essere entrambi stringhe o entrambi elenchi. Equivalente a Left( s, Length( sub )) == sub.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Starts With( "http://www.jmp.com", "http:" );

```

### Status Msg

**Sintassi:** Status Msg( message )

**Descrizione:** Visualizza il messaggio specificato nella barra di stato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Status Msg( "calculating..." );

```

### Std Dev

**Sintassi:** y = Std Dev( x1, ... )

**Descrizione:** Restituisce la deviazione standard degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

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

### Straight Line Depreciation

**Sintassi:** x = Straight Line Depreciation( cost, salvage, life )

**Descrizione:** Restituisce l&apos;ammortamento a quote costanti di un asset per un periodo. Equivalente alla funzione SLN in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### String Col Box

**Sintassi:** y = String Col Box( title, {strings} )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento strings che è un elenco di stringhe alfanumeriche.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = String Col Edit Box( title, {strings} )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento strings che è un elenco di stringhe alfanumeriche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Students t Density

**Sintassi:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la funzione di densità t di Student.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione t di Student sia minore di q.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### Students t Quantile

**Sintassi:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione t di Student, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

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
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

### Subscribe to Data Table List

**Sintassi:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**Descrizione:** Sottoscrive all&apos;elenco delle tabelle di dati per ricevere comunicazione quando una nuova tabella di dati viene aggiunta o chiusa.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Descrizione:** Restituisce l&apos;i-esimo valore di un oggetto indicizzabile che può essere una colonna di una tabella di dati, una matrice, un elenco o un elemento di visualizzazione report.

**JMP Versione aggiunta:** prima della versione 14

```jsl

{11, 12, 13}[2];

```

### Substitute

**Sintassi:** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descrizione:** Restituisce una copia di stringa, elenco o espressione x, sostituendo istanze di ciascuna espressione di pattern con la rispettiva espressione di sostituzione. L&apos;argomento facoltativo <<IGNORECASE abilita la ricerca senza distinzione fra maiuscole e minuscole se x è una stringa.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Esempio 2**

```jsl

Substitute( "All things considered", "All", "Some" );

```

**Esempio 3**

```jsl

lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Esempio 4**

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Esempio 5**

```jsl

Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Esempio 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Sintassi:** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descrizione:** Modifica la stringa, elenco o espressione x, sostituendo istanze di ciascuna espressione di pattern con la rispettiva espressione di sostituzione. Nota: l&apos;argomento x deve essere una variabile. L&apos;argomento facoltativo <<IGNORECASE abilita la ricerca senza distinzione fra maiuscole e minuscole se x è una stringa.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Esempio 2**

```jsl

ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Esempio 3**

```jsl

lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Esempio 4**

```jsl

s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Sintassi:** sub = Substr( s, start, &lt;count&gt; )

**Descrizione:** Restituisce la parte di stringa s composta da count caratteri che partono dalla posizione start. Un count negativo o assente significa il resto della stringa. Un start negativo significa fare partire i caratteri di start dalla fine. La funzione Substr() può anche essere applicata a elenchi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Subtract

**Sintassi:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Descrizione:** Sottrae tutti gli argomenti successivi dal primo argomento. Gli argomenti possono essere numeri, matrici o elenchi di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

6 - 2 - 1;

```

### Subtract To

**Sintassi:** y -= x; Subtract To( y, x )

**Descrizione:** Sottrae un valore da una variabile o da un elenco di variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = 1;
ex -= 2;
ex;

```

### SuInv

**Sintassi:** x = SuInv( z, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile normale standard in una variabile di Johnson senza limite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### Sum

**Sintassi:** y = Sum( x1, ... )

**Descrizione:** Restituisce la somma degli argomenti o dei valori all&apos;interno di un matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Sum Of Years Digits Depreciation

**Sintassi:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Descrizione:** Restituisce l&apos;ammortamento proporzionale all&apos;ordine numerico inverso degli anni di un asset per un periodo specifico. Equivalente alla funzione SYD in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

### Summarize

**Sintassi:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Descrizione:** Calcola diverse statistiche di riepilogo per una colonna &apos;By&apos;. I nomi delle statistiche sono Count, Sum, Mean, Max o Maximum, Min o Minimum, StdDev, Corr, Quantile, First. Le statistiche possono essere calcolate solo per colonne numeriche. I risultati sono memorizzati come matrici in variabili con i nomi specificati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Sintassi:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Descrizione:** Calcola tutte le combinazioni Adatta Y su X

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Sintassi:** y = Summation( assignExpr, limit, bodyExpr )

**Descrizione:** Restituisce la somma di valutazioni degli argomenti bodyExpr, incrementando ogni volta la variabile dall&apos;argomento assignExpr fino a quando è superiore o uguale all&apos;argomento limit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

### Suppress Formula Eval

**Sintassi:** Suppress Formula Eval( &lt;suppress=1&gt; )

**Descrizione:** Elimina la valutazione delle formule in tutte le tabelle di dati se l&apos;argomento è diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Suppress Formula Eval( 1 );

```

### SuTrans

**Sintassi:** z = SuTrans( x, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile di Johnson senza limite in una variabile normale standard.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### SVD

**Sintassi:** {U, M, V} = SVD( X )

**Descrizione:** Calcola la scomposizione a valore singolare della matrice X e restituisce un elenco {U, M, V} tale che U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Sintassi:** {U, M, V} = SVD LAPACK( X )

**Descrizione:** Calcola la scomposizione a valore singolare della matrice X e restituisce un elenco {U, M, V} tale che U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Sweep

**Sintassi:** y = Sweep( A, &lt;indices&gt; )

**Descrizione:** Restituisce lo sweep della matrice A su pivot diagonali indicati da indices. È un metodo per invertire una matrice un pivot alla volta.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Sintassi:** y = Sym Matrix Mult BLAS( A, B, ... )

**Descrizione:** Esegue una moltiplicazione matriciale, dove A è una matrice simmetrica. Gli argomenti delle matrici devono essere appropriati: NCol(A)==NRow(B).

**JMP Versione aggiunta:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### t Density

**Sintassi:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la funzione di densità t di Student.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione t di Student sia minore di q.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### t Log CDistribution

**Sintassi:** y = t Log CDistribution( x, df, &lt;nc&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione 1 - t.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tlcdidf, tlcdigr << reshow ) )
);

```

### t Log Density

**Sintassi:** y = t Log Density( x, df, &lt;nc&gt; )

**Descrizione:** Restituisce il logaritmo della densità di probabilità t.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, tldedf, tldegr << reshow ) )
);

```

### t Log Distribution

**Sintassi:** y = t Log Distribution( x, df, &lt;nc&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione t.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tldidf, tldigr << reshow ) )
);

```

### t Noncentrality

**Sintassi:** nc = t Noncentrality( x, df, prob )

**Descrizione:** Risolve il parametro di non centralità di una distribuzione t di Student quale prob = t Distribution( x, df, nc ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: t Noncentrality",
	tncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ), q );
	)
);
t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**Sintassi:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione t di Student, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

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
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

### Tab Box

**Sintassi:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Descrizione:** Crea un riquadro con schede in una finestra di riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**Descrizione:** Restituisce un riquadro di visualizzazione che può essere usato in un Tab Box o come contenitore standalone con titolo. Le opzioni riconosciute includono Title(stringa) per specificare un titolo, Tip per specificare una descrizione comandi, Closeable(0|1) per specificare se la pagina può essere chiusa, Icon(stringa) per specificare l&apos;icona e Moveable(0|1) per specificare se la pagina può essere spostata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Sintassi:** y = Table Box( displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che compone una tabella dei riquadri di visualizzazione della colonna Riquadro col stringa, Riquadro col numeri e Riquadro col grafico forniti dagli argomenti.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Tangent( x )

**Descrizione:** Restituisce la tangente trigonometrica di x, dove x è un angolo in radianti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Tangent( Pi() / 4 );

```

### Tangent

**Sintassi:** y = Tangent( x )

**Descrizione:** Restituisce la tangente trigonometrica di x, dove x è un angolo in radianti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Tangent( Pi() / 4 );

```

### TanH

**Sintassi:** y = TanH( x )

**Descrizione:** Restituisce la tangente iperbolica di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

TanH( 1 );

```

### Test Promise Error After

**JMP Versione aggiunta:** 17

### Test Promise Result After

**JMP Versione aggiunta:** 17

### Text

**Sintassi:** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**Descrizione:** Si sposta in posizione {x, y} e disegna il testo specificato dall&apos;argomento  text. Gli argomenti delle proprietà con nome possono essere Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Argomenti di posizione, argomenti con nome e stringhe possono essere mescolati in qualsiasi ordine. È anche possibile usare quattro coordinate x, y per descrivere un riquadro entro cui disegnare il testo. In tal caso le proprietà non vengono usate.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Esempio 2**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Box

**Sintassi:** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**Descrizione:** Crea un riquadro di visualizzazione che contiene il testo nell&apos;argomento della stringa text. Gli argomenti facoltativi sono disponibili per controllare la giustificazione del testo o per impostare la larghezza del testo con a capo automatico. L&apos;argomento di Justify Text deve essere una stringa contenente left, right o center.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),
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

**Sintassi:** Text Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore per il disegno del testo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Edit Box

**Sintassi:** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**Descrizione:** Crea un campo modificabile che contiene il text della stringa tra apici e restituisce il riferimento al riquadro di visualizzazione. Gli argomenti facoltativi sono disponibili per controllare la visualizzazione del testo, per aggiungere uno script alla casella di testo e per impostare la larghezza in pixel della casella di testo. Specificando Set Width(-1) si forza un ridimensionamento rispetto al contenuto. Si noti che è possibile aggiungere uno script alla casella di testo, aggiungendolo come argomento facoltativo o inviando il messaggio Set Script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Font

**Sintassi:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Descrizione:** Imposta il carattere per il successivo disegno di Text(). Usarlo senza alcun argomento per ottenere le impostazioni correnti del carattere. L&apos;angolo è in gradi in senso orario.

**JMP Versione aggiunta:** 15

```jsl

New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Score

**Sintassi:** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Descrizione:** Utilizzato per creare formule di scoring in Explorer del testo. L&apos;argomento da-testo-a-numero è un array associativo che associa parole minuscole a numeri. L&apos;argomento di ponderazione è "Binary", "Ternary", "Count", "LogCount", "LCA" o un array di pesi con frequenza inversa del documento per TFLogIDF. La matrice di scoring deve avere un numero di colonne uguale alle parole dell&apos;array associativo o una in più se LCA. L&apos;output è un vettore di score. Se non è specificata alcuna matrice di scoring, viene restituito un vettore di score di conteggio. Se non è specificata alcuna ponderazione, viene usato Conteggio. Questa funzione non supporta l&apos;opzione Lemmatizza per combinare.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** seg = Text Seg("text")

**JMP Versione aggiunta:** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### Text Size

**Sintassi:** Text Size( n )

**Descrizione:** Imposta la dimensione del carattere per il disegno del testo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### This Project

**Sintassi:** project = this project()

**Descrizione:** Dall&apos;interno di un progetto, restituisce l&apos;oggetto progetto corrispondente. All&apos;esterno di un progetto non restituisce nulla.

**JMP Versione aggiunta:** 14

```jsl

If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Throw

**Sintassi:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Descrizione:** Devia l&apos;esecuzione verso il Try(). In caso contrario, l&apos;esecuzione dello script è interrotta. Se message inizia con un punto esclamativo, l&apos;errore sarà irreversibile e non potrà essere catturato da Try(). Il secondo parametro è un booleano opzionale per includere un traceback (un tracciato dell’esecuzione).

**JMP Versione aggiunta:** prima della versione 14

**Analisi**

```jsl

Throw( "A line number is included in this error", 1 );

```

**Throw irreversibile**

```jsl


Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

**Try-Catch**

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Tick Seconds

**Sintassi:** t = Tick Seconds()

**Descrizione:** Restituisce un valore di tempo in secondi, di norma accurato ad almeno 1/60 di secondo (una "tacca"), in base al computer. Utile solamente rispetto a un altro valore Tick Seconds().

**JMP Versione aggiunta:** prima della versione 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Sintassi:** sec = Time Of Day( datetime )

**Descrizione:** Restituisce l&apos;ora di un valore di data e ora, compresa la parte frazionaria dei secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Titlecase

**Sintassi:** st = Titlecase( s )

**Descrizione:** Converte in Tutte iniziali maiuscole

**JMP Versione aggiunta:** prima della versione 14

```jsl

Titlecase( "The dog crossed the road" );

```

### To Color Space

**Sintassi:** color = To Color Space( color, colorSpace )

**Descrizione:** Traduce un colore in un altro spazio colore. I colori fuori gamma sono mappati per stimare quando vengono convertiti in spazi colore più piccoli.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

To Color Space( "red", "LMS" );

```

**Esempio 2**

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Esempio 3**

```jsl

To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Today

**Sintassi:** dt = Today()

**Descrizione:** Restituisce il valore di data e ora attuale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Today() );

```

### Trace

**Sintassi:** y = Trace( x )

**Descrizione:** Restituisce la somma degli elementi diagonali di una matrice quadrata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Trace( [11 22, 33 44] );

```

### Transform Each

**Sintassi:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Descrizione:** Fa tutto ciò che fa la funzione Per ognuno, ma restituisce anche un contenitore con i risultati di ogni iterazione. Per impostazione predefinita, restituisce un contenitore che corrisponde al tipo di contenitore di input, ma può essere modificato usando l&apos;argomento Output. Per l&apos;output Elenco o Espressione, sarà usato Vuoto() quando non esistono risultati. Per l&apos;output Matrice, quando non esistono risultati o quando il risultato non è numerico, viene usato un valore mancante numerico. Per l&apos;output di Array associativo, la chiave non esisterà in assenza di risultato. Se si usa Continua(), è equivalente a non restituire alcun valore per quell&apos;iterazione.

**JMP Versione aggiunta:** 16

**Associative Array**

```jsl

values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
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

### Transparency

**Sintassi:** Transparency( &lt;alpha&gt; )

**Descrizione:** Imposta la trasparenza utilizzata nei comandi di disegno. Alfa è situato in un range tra 0 (trasparente) e 1 (opaco, impostazione predefinita). Alcuni sistemi operativi non supportano questa funzione.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Transpose( matrix ); y = matrix`

**Descrizione:** Traspone l&apos;argomento della matrice scambiando tra loro le righe e le colonne.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### Tree Box

**Sintassi:** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**Descrizione:** Costruisce una finestra di visualizzazione per mostrare informazioni gerarchiche.

**JMP Versione aggiunta:** prima della versione 14

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
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Sintassi:** node = Tree Node( &lt;label&gt; )

**Descrizione:** Costruisce un nodo dell&apos;albero destinato a essere visualizzato in un riquadro dell&apos;albero.

**JMP Versione aggiunta:** prima della versione 14

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
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Sintassi:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Descrizione:** Restituisce un oggetto contenente la triangolazione di Delaunay del set di punti specificato. La Y facoltativa Y sarà mediata per i punti duplicati e tutti i punti dell&apos;output saranno univoci.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Esempio 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Trigamma

**Sintassi:** y = Trigamma( x )

**Descrizione:** Restituisce la funzione trigamma valutata a x, dove la funzione trigamma è la derivata della funzione digamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Trigamma( 5 );

```

### Trim

**Sintassi:** sub = Trim( s, &lt;left|right|both&gt; )

**Descrizione:** Restituisce una copia della stringa s dove gli spazi vuoti iniziali o finali sono rimossi. Il secondo argomento specifica gli spazi vuoti iniziali o finali. Se non si specifica il secondo argomento, gli spazi vuoti vengono rimossi a entrambe le estremità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Trim( " title   ", both );

```

### Trim Whitespace

**Sintassi:** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Descrizione:** Restituisce una copia della stringa s dove gli spazi vuoti iniziali o finali sono rimossi. Il secondo argomento specifica gli spazi vuoti iniziali o finali. Se non si specifica il secondo argomento, gli spazi vuoti vengono rimossi a entrambe le estremità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### TripleS Import

**Sintassi:** TripleSImport( &lt;path to xml file&gt; )

**Descrizione:** Apre file tripla S. Il formato tripla S comprende un file xml o sss e un file csv oppure dat/asc. Entrambi i file devono avere lo stesso nome con le estensioni appropriate e devono trovarsi nella stessa directory. Specificare il percorso del file xml o sss per importare i dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

### Try

**Sintassi:** y = Try( expr, &lt;catchExpr&gt; )

**Descrizione:** exprValuta e restituisce l&apos;argomento, a meno che la valutazione non causi un&apos;eccezione Throw() o interna. In tal caso, viene restituita la valutazione di catchExpr. Se si utilizza exception_msg come catchExpr, viene restituito un elenco che contiene altre informazioni sull&apos;errore.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**Esempio 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Tukey HSD P value

**Sintassi:** p = Tukey HSD P value( q, nGroups, dfe )

**Descrizione:** Restituisce il p-value ricavato dal test dei confronti multipli HSD di Tukey, dove q è la statistica di test, nGroups è il numero di gruppi nello studio e dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio.



Si osservi che q è il valore critico corretto di Tukey, che è il quantile della distribuzione dei range studentizzata di Tukey divisa per la radice quadrata(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Sintassi:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Descrizione:** Restituisce il quantile richiesto per il test dei confronti multipli HSD di Tukey. L&apos;argomento 1-alpha è il livello di confidenza, nGroups è il numero di gruppi nello studio e dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio).



Si osservi che q è il valore critico corretto di Tukey, che è il quantile della distribuzione dei range studentizzata di Tukey divisa per la radice quadrata(2).

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Text Box( "dfe" ), Slider Box( 3, 10, dfe, tdigr << reshow ) )
);

```

### Type

**Sintassi:** y = Type( x )

**Descrizione:** Restituisce una stringa assegnando un nome al tipo di valore dell&apos;argomento x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Type( [1 2 3] );

```

### Unit Test

**JMP Versione aggiunta:** prima della versione 14

### Unlineup Box

**Sintassi:** y = UnLineup Box(displayBoxArgs, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che sospende temporaneamente la disposizione delle colonne di un riquadro di allineamento. Il figlio del riquadro non allineato sarà esteso a tutte le colonne del riquadro di allineamento.

**JMP Versione aggiunta:** 16

```jsl

New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### Unlock Globals

**Sintassi:** Unlock Globals( name, ... )

**Descrizione:** Sblocca nomi globali specificati e consente che possano essere modificati o cancellati dalla funzione Clear Globals.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Unlock Symbols( name, ... )

**Descrizione:** Sblocca nomi globali specificati e consente che possano essere modificati o cancellati dalla funzione Clear Symbols.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Unregister Addin( uniqueId)

**Descrizione:** Annulla registrazione add-in

**JMP Versione aggiunta:** prima della versione 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Unsubscribe to Data Table List

**Sintassi:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**Descrizione:** Rimuove la sottoscrizione all&apos;elenco delle tabelle di dati aggiunto tramite il comando "sottoscrivi all&apos;elenco delle tabelle di dati".

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** su = Uppercase( s )

**Descrizione:** Converte le lettere minuscole in lettere maiuscole nella stringa specificata. Le regole relative al maiuscolo/minuscolo variano a livello locale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Uppercase( "Café #23" );

```

### V Center Box

**Sintassi:** y = V Center Box( &lt;childbox&gt; )

**Descrizione:** Restituisce un riquadro di visualizzazione con l&apos;argomento del riquadro di visualizzazione childbox centrato nello spazio verticale definito dalle dimensioni massime dell&apos;oggetto figlio e di tutti gli altri oggetti di pari livello del riquadro centrale.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = a |/ b; y = V Concat( a, b, ... )

**Descrizione:** Concatena le matrici verticalmente. Gli argomenti devono avere il medesimo numero di colonne.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**Sintassi:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Descrizione:** Concatena sul posto verticalmente. a |/= b è equivalente a = a |/ b. Si tratta di un operatore di assegnazione.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** V Line( x ); V Line( x, y1, y2 )

**Descrizione:** Disegna una linea verticale su x da y1 a y2 o nell&apos;intero frame.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V List Box

**Sintassi:** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout verticale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento right o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### V Max

**Sintassi:** b = V Max( matrix )

**Descrizione:** Restituisce un vettore di riga contenente il massimo di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Sintassi:** m = V Mean( matrix )

**Descrizione:** Restituisce un vettore di riga contenente la media di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Sintassi:** m = V Median( matrix )

**Descrizione:** Restituisce il vettore di una riga contenente la mediana di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Sintassi:** a = V Min( matrix )

**Descrizione:** Restituisce un vettore di riga contenente il minimo di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Sintassi:** m = V Quantile( matrix, p )

**Descrizione:** Restituisce il vettore di una riga contenente il quantile specificato p di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Sintassi:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Descrizione:** Restituisce una matrice centrata dalla mediana e scalata da una stima robusta della deviazione standard della matrice X. Gli argomenti booleani facoltativi specificano se centratura e scaling devono essere eseguiti.

**JMP Versione aggiunta:** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Scroll Box

**Sintassi:** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che posiziona un riquadro figlio più grande mediante una barra di scorrimento verticale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Sintassi:** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout verticale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento right o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

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
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Size

**Sintassi:** v = V Size()

**Descrizione:** Restituisce la dimensione verticale del frame del grafico in pixel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### V Splitter Box

**Sintassi:** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che può organizzare altri riquadri in direzione verticale con controllo interattivo delle dimensioni. Le dimensioni dell&apos;elemento figlio sono specificate come proporzione della larghezza o dell&apos;altezza del Splitter Box. L&apos;argomento facoltativo Size è utilizzato solo per il riquadro di suddivisione più in alto; i riquadri di livello inferiore sono dimensionati come qualsiasi altro riquadro figlio.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
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

**Sintassi:** b = V Standardize( X )

**Descrizione:** Restituisce una matrice che è la versione centrata e scalata della matrice X. Ogni colonna di b ha media 0 e deviazione standard 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Sintassi:** b = V Std( matrix )

**Descrizione:** Restituisce un vettore di riga contenente le deviazioni standard di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Sintassi:** s = V Sum( matrix )

**Descrizione:** Restituisce il vettore di una riga contenente la somma di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### Varimax

**Sintassi:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Descrizione:** Effettua una rotazione varimax della matrice specificata F. Restituisce un elenco che contiene la matrice ruotata e la matrice a rotazione ortogonale. Per impostazione predefinita è effettuata una rotazione varimax normalizzata. Specificare norm = 0 per effettuare una rotazione varimax non normalizzata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Sintassi:** y = Vec Diag( x )

**Descrizione:** Restituisce gli elementi diagonali della matrice quadrata come un vettore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Sintassi:** Vec Quadratic( S, X )

**Descrizione:** Viene valutato come Vec Diag( X * S * X` ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### VPTree

**Sintassi:** tab = VPTree( [ matrix ] )

**Descrizione:** Restituisce una tabella per la ricerca efficace dei vicini prossimi. Gli argomenti della matrice sono punti k-dimensionali. Non esiste alcun limite al numero di dimensioni o punti.

**JMP Versione aggiunta:** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Wait

**Sintassi:** Wait( &lt;x&gt; )

**Descrizione:** Attende x secondi prima di procedere con l&apos;esecuzione. Il valore predefinito per x è 3 secondi. Se x è 0 o maggiore, JMP completerà qualsiasi evento del sistema operativo (ad esempio l&apos;aggiornamento dello schermo) così come qualsiasi richiamo in sospeso (ad esempio la valutazione di formule) in aggiunta all&apos;attesa. Se x è minore di 0, attenderà che solo l&apos;aggiornamento dello schermo e gli eventi del sistema operativo siano confermati come completati prima di procedere.

**JMP Versione aggiunta:** prima della versione 14

**Eventi SO**

```jsl

Wait( -1 ); // Wait for OS events

```

**Richiami**

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

**Semplici**

```jsl

Wait( 1.5 );

```

### Watch

**Sintassi:** w = Watch( all|name1, ... )

**Descrizione:** Crea una finestra che mostra le variabili da Global, Here, spazi dei nomi Local e i rispettivi valori.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Descrizione:** Restituisce la previsione ai punti x per il modello wavelet specificato. Il parametro grid è un vettore che specifica la griglia dei dati per il modello wavelet. Il parametro coef è un vettore di coefficienti wavelet. Il parametro wavelet è il nome del modello wavelet. Il parametro opzionale param è il parametro del modello wavelet (se necessario, il valore predefinito è 0).

**JMP Versione aggiunta:** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

### Web

**Sintassi:** Web( string, &lt;JMP Window&gt; )

**Descrizione:** Apre l&apos;URL o il file memorizzato in string nel browser Web predefinito. Il secondo argomento facoltativo specifica che l’HTML si apre in una finestra del browser di JMP.

**JMP Versione aggiunta:** prima della versione 14

**Gestore eventi**

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
				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )
			)
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )
	)
);

```

**Semplici**

```jsl

Web( "http://www.jmp.com/" );

```

### Web Browser Box

**Sintassi:** wb = Web Browser Box( url )

**Descrizione:** Restituisce un riquadro per visualizzare una pagina Web, specificata dall&apos;argomento della stringa url.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Week Of Year

**Sintassi:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Descrizione:** Restituisce la settimana dell&apos;anno che contiene un valore data-ora usando una delle tre regole. Impostazione predefinita (regola 1), la settimana inizia la domenica con la prima domenica dell&apos;anno nella settimana 2. La settimana 1 sarà una settimana parziale o vuota (come nel 2006). Per la regola 2, la prima domenica è nella settimana 1, con i giorni precedenti nella settimana 0. Per la regola 3, viene restituito il numero della settimana ISO, dove le settimane iniziano di lunedì e la settimana 1 è la prima settimana dell&apos;anno con quattro giorni in quell&apos;anno. Con le settimane ISO, è possibile che i primi o gli ultimi tre giorni dell&apos;anno appartengano al numero di settimana dell&apos;anno vicino.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Week Of Year( Today() );

```

**Esempio 2**

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Weibull Density

**Sintassi:** y = Weibull Density( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la densità a x di una distribuzione della probabilità di Weibull con parametro shape e parametro facoltativo scale.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Distribution

**Sintassi:** p = Weibull Distribution( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Weibull (con parametro shape e parametro facoltativo scale) sia minore di x.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Quantile

**Sintassi:** q = Weibull Quantile( p, beta, &lt;alpha=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione di Weibull, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p, dove beta e alpha sono rispettivamente parametri della forma e della scala.

**JMP Versione aggiunta:** prima della versione 14

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
	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),
	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) )
);

```

### Where

**Sintassi:** Where( &lt;dt&gt;, clause )

**Descrizione:** Restituisce indici (di solito numeri di riga) corrispondenti alla clausola Where specificata. dt facoltativo cambia Current Data Table durante la valutazione. Queste clausole sono spesso scritte da JMP utilizzando il filtro sui dati. Questo spesso avviene più velocemente rispetto a Loc, <<Get Rows Where o <<Select Where. Il comportamento è indefinito se la clausola modifica le sequenze o qualsiasi simbolo durante la valutazione.

**JMP Versione aggiunta:** 18

**Altro**

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

**Colonne**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**Funzioni di colonna**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

**Matrice/Elenco**

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

**Stati delle righe**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

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

### Wild

**Sintassi:** Wild()

**Descrizione:** Restituisce la posizione di un carattere jolly che può corrispondere a qualsiasi espressione (utilizzato solo nei pattern di espressioni).

**JMP Versione aggiunta:** prima della versione 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Sintassi:** Wild List()

**Descrizione:** Restituisce una serie di argomenti jolly che possono corrispondere a qualsiasi cosa (utilizzati solo nei pattern di espressioni).

**JMP Versione aggiunta:** prima della versione 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Window

**Sintassi:** y = Window( &lt;string|int&gt; )

**Descrizione:** Questa funzione è obsoleta ed è conservata solo per la compatibilità all&apos;indietro con script esistenti. Per nuovi script, usare Ottieni finestra() o Ottieni elenco finestre().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Window( "Big Class" );

```

### With Clipboard

**Sintassi:** two = With Clipboard( clp, box &lt;&lt; Paste; 1 + 1 )

**Descrizione:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP Versione aggiunta:** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### With Window Handler

**Sintassi:** With Window Handler( JSL Code, Handler Function )

**Descrizione:** Esegue un blocco di codice con una funzione da chiamare ogni volta che viene creata una nuova finestra.

**JMP Versione aggiunta:** 17

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

**Sintassi:** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Descrizione:** Restituisce l&apos;n-esima parola della stringa s, dove le parole sono sottostringhe separate da un numero qualsiasi di uno qualunque dei caratteri nell&apos;argomento delim. Se delim è assente viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come una parola separata.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Word( 3, "http://www.jmp.com", ":/." );

```

**Esempio 2**

```jsl

Word( [2 -1], "This is a sentence" );

```

**Esempio 3**

```jsl

Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Esempio 4**

```jsl

Word( 5, "a b c d", Unmatched( "None" ) );

```

**Esempio 5**

```jsl

Word( 2, "abcd", "" );

```

### Words

**Sintassi:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Descrizione:** Restituisce un elenco di sottostringhe separate da uno qualsiasi dei caratteri nell&apos;argomento delim. Se delim è assente viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come una parola separata.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Esempio 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Esempio 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Wrap List Box

**Sintassi:** y = Wrap List Box( displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione creati dagli argomenti in un layout orizzontale, ma l&apos;elenco verrà mandato a capo durante la stampa.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Write( x, ... )

**Descrizione:** Visualizza i valori specificati nel log senza aggiungere virgolette, spazi o interruzioni di linea (come in Print()).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

### X Function

**Sintassi:** X Function( xExpr, yName, &lt;properties&gt; )

**Descrizione:** Disegna la funzione xExpr nella dimensione X al variare della variabile yName nel range dell&apos;asse Y del grafico. Ulteriori argomenti delle proprietà con nome: Min(X minimo), Max(Y massimo), Fill(pattern di riempimento, valore da riempire), Inc(limite di incremento superiore).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Sintassi:** x = X Origin()

**Descrizione:** Restituisce il valore x per il bordo sinistro del frame del grafico.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** x = X Range()

**Descrizione:** Restituisce la distanza x da sinistra a destra. X Origin() + X Range() è il bordo destro.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Descrizione:** Imposta una nuova scala per il frame dei grafici.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** value = XML Attr( attr name ); aa = XML Attr()

**Descrizione:** Estrae il valore della stringa di un attributo XML nel contesto di una valutazione di un comando Parse XML(). Se non viene dato alcun nome, viene restituito un array associativo di tutte le coppie di attributi nome/valore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XML Decode

**Sintassi:** text = XML Decode( textxml )

**Descrizione:** Decodifica i simboli in XML come testo ordinario, cambia " in ", < in <, &gt to >; & in &.

**JMP Versione aggiunta:** prima della versione 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Sintassi:** textxml = XML Encode( text )

**Descrizione:** Prepara il testo per l&apos;inserimento in XML, cambia " in ", < in <, > in > & in &.

**JMP Versione aggiunta:** prima della versione 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Sintassi:** value = XML Text()

**Descrizione:** Estrae il testo della stringa del corpo di un tag XML nel contesto di una valutazione di un comando ParseXML().

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XPath Query

**Sintassi:** result = XPath Query(xml, xpath expression)

**Descrizione:** Esegue una query XPath rispetto a un documento XML.

**JMP Versione aggiunta:** prima della versione 14

```jsl

result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

### XY Function

**Sintassi:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Descrizione:** Questa funzione di script grafico combina un&apos;espressione x(t) e un&apos;espressione y(t) per disegnare una curva x-y per il range del parametro t specificato. Inc() è il massimo incremento su t, oppure steps() è il minimo numero di passi su t. Usare steps() o inc() se il valore predefinito manca di dettagli.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Y Function( yExpr, xName, &lt;properties&gt; )

**Descrizione:** Disegna la funzione yExpr nella dimensione Y al variare della variabile xName nel range dell&apos;asse X del grafico. Ulteriori argomenti delle proprietà con nome: Min(X minimo), Max(X massimo), Fill(pattern di riempimento, valore da riempire), Inc(limite di incremento superiore).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Sintassi:** y = Y Origin()

**Descrizione:** Restituisce il valore y per il bordo inferiore del frame del grafico.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Y Range()

**Descrizione:** Restituisce la distanza y dal basso in alto. Y Origin() + Y Range() è il bordo superiore.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Descrizione:** Imposta una nuova scala per il frame dei grafici.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** yr = Year( datetime )

**Descrizione:** Restituisce la parte anno di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Year( Today() );

```

### Zero Or Missing

**Sintassi:** y = Zero Or Missing( x )

**Descrizione:** Restituisce il NOT logico di x senza i valori mancanti trattati come zeri: 1 se x è mancante o zero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Zero Or Missing( 1 < 2 );

```

### ZI Negative Binomial Distribution

**Sintassi:** cumprob = ZI Negative Binomial Distribution( k, lambda, sigma, pi )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa con inflazione di zeri sia inferiore o pari a k, dove lambda è il parametro di posizione, sigma è il parametro di scale, pi è il parametro di inflazione di zeri e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

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
			H Line( k, k + 1, ZI Negative Binomial Distribution( k, lambda, sigma, p ) );
			V Line(
				k + 1,
				ZI Negative Binomial Distribution( k, lambda, sigma, p ),
				ZI Negative Binomial Distribution( k + 1, lambda, sigma, p )
			);
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .2}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( 0.01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Negative Binomial Probability

**Sintassi:** prob = ZI Negative Binomial Probability( k, lambda, sigma, pi)

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa con inflazione di zeri sia uguale a k, dove lambda è il parametro di posizione, sigma è il parametro di scale, pi è il parametro di inflazione di zeri e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

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
			V Line( k, 0, ZI Negative Binomial Probability( k, lambda, sigma, p ) )
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .25}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .2}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( .01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),
		H List Box( Slider Box( 0, .25, p, ppy << reshow ), Text Box( " \!U03C0" ) )
	)
);

```

### ZI Negative Binomial Quantile

**Sintassi:** q = ZI Negative Binomial Quantile( lambda, sigma, pi, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione binomiale negativa con inflazione di zeri (lambda, sigma, pi) è maggiore o pari a cumprob.

**JMP Versione aggiunta:** 19

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
				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp )
			);
			V Line(
				qexpk + 1,
				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp ),
				ZI Negative Binomial Distribution( qexpk + 1, qexpl, qexpsig, qexpp )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ), 0, 1.0 );
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
			Round( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ) )
		);
	),
	H List Box( Slider Box( 0.001, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.001, 2, qexpsig, qexpy << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),
	H List Box( Slider Box( 0.001, .999, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### ZI Poisson Distribution

**Sintassi:** cumprob = ZI Poisson Distribution( k, lambda, pi )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson con inflazione di zeri sia inferiore o pari a k, dove lambda è il parametro di posizione, pi è il parametro di inflazione di zeri e k è il conteggio di interesse.

**JMP Versione aggiunta:** 19

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
		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Poisson Probability

**Sintassi:** prob = ZI Poisson Probability( k, lambda, pi)

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson con inflazione di zeri sia pari a k, dove lambda è il parametro di posizione, pi è il parametro di inflazione di zeri e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

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
		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Poisson Quantile

**Sintassi:** q = ZI Poisson Quantile( lambda, pi, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione di Poisson con inflazione di zeri( lambda, pi ) è maggiore o pari a cumprob.

**JMP Versione aggiunta:** 19

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
			H Line( qexpk, qexpk + 1, ZI Poisson Distribution( qexpk, qexpl, qexpp ) );
			V Line(
				qexpk + 1,
				ZI Poisson Distribution( qexpl, qexpp, qexpk ),
				ZI Poisson Distribution( qexpl, qexpp, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Poisson Quantile( qexpl, qexpp, qexpq ), 0, 1.0 );
		Text( {2, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C0=", Round( qexpp, 2 ) );
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( ZI Poisson Quantile( qexpl, qexpp, qexpq ) )
		);
	),
	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

