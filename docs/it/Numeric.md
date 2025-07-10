# Numeric



### Abs

**Sintassi:** y = Abs( x )

**Descrizione:** Restituisce il valore assoluto di x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Abs( -5 );

```

### Ceiling

**Sintassi:** y = Ceiling( x )

**Descrizione:** Restituisce il più piccolo numero intero che sia maggiore di o uguale a x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Ceiling( 1.2 );

```

### Derivative

**Sintassi:** y = Derivative( expr, name )

**Descrizione:** Restituisce la derivata simbolica dell&apos;espressione data rispetto al nome della variabile specificato.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Derivative( Sin( x ), x );

```

### Floor

**Sintassi:** y = Floor( x )

**Descrizione:** Restituisce il più grande numero intero che sia minore di o uguale a x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Floor( 1.2 );

```

### Integrate

**Sintassi:** y = Integrate( expr, varname, lowLimit, upLimit, <<Tolerance(1e-10), <<StoreInfo(list), <<StartingValue(val) )

**Descrizione:** Integra un&apos;espressione rispetto a un valore scalare usando il metodo della quadratura adattiva di Gander e Gautschi (2000). Se la variabile specificata con varname ha un valore assegnato o l&apos;argomento opzionale <<StartingValue() specifica un valore di partenza, quel valore è usato come valore tipico per migliorare la precisione dell&apos;integrale. Per specificare range infiniti di integrazione, impostare lowLimit e/o upLimit a mancante. Se è specificato <<StoreInfo(), l&apos;argomento di <<StoreInfo() conterrà le diagnostiche della routine di integrazione numerica. Se è specificato <<Tolleranza(), l&apos;argomento di <<Tolleranza() è usato come livello di tolleranza nella funzione di autointegrazione usata per valutare l&apos;integrale. Valori inferiori producono un runtime più lungo, ma risultati più precisi.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```js

Names Default To Here( 1 );
Integrate( Exp( -x ), x, 0, . );

```

**Esempio 2**

```js

Names Default To Here( 1 );
x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**Sintassi:** y = Invert Expr( expr, xname, yname )

**Descrizione:** Inverte l&apos;argomento espressione expr, rivelando la singola occorrenza di xname.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**Sintassi:** z = Modulo( x, y )

**Descrizione:** Restituisce il resto della divisione di x per y. Il resto avrà il medesimo segno di x.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Modulo

**Sintassi:** z = Modulo( x, y )

**Descrizione:** Restituisce il resto della divisione di x per y. Il resto avrà il medesimo segno di x.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Normal Integrate

**Sintassi:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Descrizione:** Restituisce il risultato dell&apos;integrazione radiale-sferica per funzioni di smoothing di variabili normali multivariate. L&apos;idea di base è la medesima di un metodo riportato in Genz e Monahan(1996). Ma per la direzione radiale viene utilizzata la quadratura di tipo Radau-Gauss-Laguerre.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Normal Integrate(
	J( 3, 1, 0 ),
	Identity( 3 ),
	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,
	ex,
	2,
	5000
);

```

### Num Deriv

**Sintassi:** y = Num Deriv( f( x, ... ),  <parnum>)

**Descrizione:** Restituisce la derivata numerica della funzione f( x,... ) rispetto a uno dei suoi argomenti. È possibile specificare quell&apos;argomento come secondo argomento nella funzione Num Deriv. Se non viene specificato alcun secondo argomento, la derivata è eseguita rispetto al primo argomento della funzione. La derivata è valutata utilizzando i valori numerici specificati nell&apos;espressione della funzione  f( x,... ).

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Sintassi:** y = Num Deriv2( f( x, ... ) )

**Descrizione:** Restituisce la derivata seconda numerica della funzione f( x,... ) rispetto a x. La derivata è valutata utilizzando i valori numerici specificati nell&apos;espressione della funzione f( x,... ).

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**Sintassi:** y = Round( x, <n> )

**Descrizione:** Arrotonda x a n cifre dopo la virgola decimale (o 0 cifre se n non è specificato). Nota: l&apos;argomento n può essere negativo.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Round( 213, -1 );

```

### Simplify Expr

**Sintassi:** resultExpr = Simplify Expr( expr( ... ) )

**Descrizione:** Restituisce un&apos;espressione equivalente che semplifica l&apos;espressione dell&apos;argomento in diversi modi.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

