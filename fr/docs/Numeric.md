# Numeric



### Abs

**Syntaxe :** y = Abs( x )

**Description :** Renvoie la valeur absolue de x. L’argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Abs( -5 );

```

### Ceiling

**Syntaxe :** y = Ceiling( x )

**Description :** Renvoie le plus petit entier supérieur ou égal à  x. L’argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Ceiling( 1.2 );

```

### Derivative

**Syntaxe :** y = Derivative( expr, name )

**Description :** Renvoie la dérivée symbolique pour l&apos;expression donnée par rapport au nom de variable spécifié.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Derivative( Sin( x ), x );

```

### Floor

**Syntaxe :** y = Floor( x )

**Description :** Renvoie le plus grand entier inférieur ou égal à x. L&apos;argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Floor( 1.2 );

```

### Integrate

**Syntaxe :** y = Integrate( expr, varname, lowLimit, upLimit, <<Tolerance(1e-10), <<StoreInfo(list), <<StartingValue(val) )

**Description :** Intègre une expression par rapport à une valeur scalaire en utilisant la méthode de quadrature adaptative de Gander et Gautschi (2000). Si la variable spécifiée avec varname a une valeur assignée, ou si l&apos;argument facultatif <<StartingValue() spécifie une valeur de départ, cette valeur sera utilisée en tant que valeur type pour améliorer la précision de l&apos;intégrale. Pour spécifier des étendues infinies d&apos;intégration, définir lowLimit, upLimit, ou les deux, comme manquantes. Si <<StoreInfo() est spécifié, l&apos;argument de <<StoreInfo() contiendra les diagnostics de la routine d&apos;intégration numérique. Si <<Tolerance() est spécifié, l&apos;argument <<Tolerance() sera utilisé comme niveau de tolérance dans la fonction d&apos;auto-intégration utilisée pour évaluer l&apos;intégrale. Des valeurs plus petites entraînent un temps d&apos;exécution plus long mais permettent d&apos;obtenir des résultats plus précis.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```js

Names Default To Here( 1 );
Integrate( Exp( -x ), x, 0, . );

```

**Exemple 2**

```js

Names Default To Here( 1 );
x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**Syntaxe :** y = Invert Expr( expr, xname, yname )

**Description :** Inverse l&apos;argument expression expr, en dépliant autour de l&apos;occurrence unique de xname.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**Syntaxe :** z = Modulo( x, y )

**Description :** Renvoie le reste de la division de x par y. Le reste aura le même signe que x.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Modulo

**Syntaxe :** z = Modulo( x, y )

**Description :** Renvoie le reste de la division de x par y. Le reste aura le même signe que x.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Normal Integrate

**Syntaxe :** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Description :** Renvoie le résultat de l&apos;intégration radiale-sphérique pour les fonctions de lissage de variables normales multivariées. L&apos;idée de base est la même qu&apos;une méthode dans Genz et Monahan(1996). Mais une quadrature de type Radau-Gauss-Laguerre est utilisée pour la direction radiale.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Num Deriv( f( x, ... ),  <parnum>)

**Description :** Renvoie la dérivée numérique de la fonction f( x,... ) par rapport à l&apos;un de ses arguments. Vous pouvez spécifier cet argument comme le second argument de la fonction Num Deriv. S&apos;il n&apos;y a pas de second argument spécifié, la dérivée est prise par rapport au premier argument de la fonction. La dérivée est évaluée à l&apos;aide des valeurs numériques spécifiées dans l&apos;expression de la fonction f( x,... ).

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Syntaxe :** y = Num Deriv2( f( x, ... ) )

**Description :** Renvoie la deuxième dérivée numérique de la fonction f( x,... ) par rapport à x. La dérivée est évaluée à l&apos;aide des valeurs numériques spécifiées dans l&apos;expression de la fonction f( x,... ).

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**Syntaxe :** y = Round( x, <n> )

**Description :** Arrondit x à n chiffres après la virgule (ou 0 chiffre si n n&apos;est pas spécifié). Notez que l&apos;argument n peut être négatif.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Round( 213, -1 );

```

### Simplify Expr

**Syntaxe :** resultExpr = Simplify Expr( expr( ... ) )

**Description :** Renvoie une expression équivalente qui simplifie l&apos;expression de l&apos;argument de plusieurs façons.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

