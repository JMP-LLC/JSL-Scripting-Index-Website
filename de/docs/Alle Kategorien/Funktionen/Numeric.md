# Numeric



## Funktionen

### Abs

**Syntax:** y = Abs( x )

**Beschreibung:** Gibt den Absolutwert von x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Abs( -5 );

```

### Ceiling

**Syntax:** y = Ceiling( x )

**Beschreibung:** Gibt die kleinste ganze Zahl größer oder gleich x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Ceiling( 1.2 );

```

### Derivative

**Syntax:** y = Derivative( expr, name )

**Beschreibung:** Gibt die symbolische Ableitung für den vorgegebenen Ausdruck bezüglich des angegebenen Variablennamens zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Derivative( Sin( x ), x );

```

### Floor

**Syntax:** y = Floor( x )

**Beschreibung:** Gibt die größte ganze Zahl kleiner oder gleich x zurück. Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Floor( 1.2 );

```

### Integrate

**Syntax:** y = Integrate( expr, varname, lowLimit, upLimit, <<Tolerance(1e-10), <<StoreInfo(list), <<StartingValue(val) )

**Beschreibung:** Integriert einen Ausdruck in Bezug auf einen skalaren Wert und verwendet die adaptive Quadraturmethode von Gander und Gautschi (2000). Wenn der mit varname angegebenen Variablen ein Wert zugewiesen ist oder das optionale Argument <<StartingValue() einen Startwert angibt, wird dieser Wert als typischer Wert zur Verbesserung der Genauigkeit des Integrals verwendet. Um unendliche Integrationsbereiche anzugeben, setzen Sie lowLimit, upLimit oder beide auf fehlend. Wenn <<StoreInfo() angegeben ist, enthält das Argument von <<StoreInfo() diagnostische Kennwerte der numerischen Integrationsroutine. Wenn <<Toleranz() angegeben ist, wird das Argument von <<Toleranz() als Toleranzniveau in der Auto-Integrationsfunktion verwendet, mit der das Integral ausgewertet wird. Kleinere Werte führen zu längeren Laufzeiten, jedoch präziseren Ergebnissen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Integrate( Exp( -x ), x, 0, . );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**Syntax:** y = Invert Expr( expr, xname, yname )

**Beschreibung:** Invertiert das Ausdrucksargument expr, faltet dabei nach dem einzigen Vorkommen von xname auf.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**Syntax:** z = Modulo( x, y )

**Beschreibung:** Gibt den Divisionsrest der Division von x durch y zurück. Der Divisionsrest hat das gleiche Vorzeichen wie x.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Modulo

**Syntax:** z = Modulo( x, y )

**Beschreibung:** Gibt den Divisionsrest der Division von x durch y zurück. Der Divisionsrest hat das gleiche Vorzeichen wie x.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Normal Integrate

**Syntax:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Beschreibung:** Gibt das Ergebnis der radial-sphärischen Integration glatter Funktionen von multivariaten normalverteilten Variablen zurück. Die grundlegende Idee ist die gleiche wie eine Methode in Genz und Monahan (1996). Für die radiale Richtung wird aber die Quadratur vom Typ Radau-Gauss-Laguerre verwendet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Syntax:** y = Num Deriv( f( x, ... ),  <parnum>)

**Beschreibung:** Gibt die numerische Ableitung der Funktion f( x,... ) in Bezug auf eines ihrer Argumente zurück. Sie können dieses Argument als zweites Argument in der Funktion Num Derivangeben. Wenn kein zweites Argument angegeben ist, wird die Ableitung nach dem ersten Argument der Funktion genommen. Die Ableitung wird mithilfe von numerischen Werten, die im Funktionsausdruck f( x,... ) angegeben sind, ausgewertet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Syntax:** y = Num Deriv2( f( x, ... ) )

**Beschreibung:** Gibt die numerische zweite Ableitung der Funktion f( x,... ) in Bezug auf x zurück. Die Ableitung wird mithilfe von numerischen Werten, die im Funktionsausdruck f( x,... ) angegeben sind, ausgewertet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**Syntax:** y = Round( x, <n> )

**Beschreibung:** Rundet x auf n Ziffern nach dem Dezimalkomma (oder 0 Ziffern, wenn n nicht angegeben ist). Beachten Sie, dass das Argument n negativ sein kann.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( 213, -1 );

```

### Simplify Expr

**Syntax:** resultExpr = Simplify Expr( expr( ... ) )

**Beschreibung:** Gibt einen äquivalenten Ausdruck zurück, der den Argumentausdruck auf verschiedene Weise vereinfacht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

