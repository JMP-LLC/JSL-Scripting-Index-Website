# Namespace



### Contains

**Sintaxis:** obj << Contains( string )

**Descripción:** Devuelve 1 si el espacio de nombres contiene la expresión de cadena de caracteres especificada y 0 en caso contrario.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Contains( "nObs" );

```

### Delete Namespace

**Sintaxis:** nsref << Delete Namespace( < Force( boolean ) > )

**Descripción:** Elimina este espacio de nombres.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Delete Namespace;
Show( nsref );

```

### First

**Sintaxis:** obj << First

**Descripción:** Devuelve la expresión de cadena de caracteres correspondiente al primer elemento de este espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << First;

```

### Get Contents

**Sintaxis:** obj << Get Contents

**Descripción:** Devuelve una lista de los elementos que pertenecen a este espacio de nombres, en la cual cada elemento es una lista de dos elementos que contiene una clave y el valor asociado a la clave.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Contents;

```

### Get Keys

**Sintaxis:** obj << Get Keys

**Descripción:** Devuelve una lista de las claves que pertenecen a este espacio de nombres, donde una clave es una representación en forma de cadena de un elemento individual que pertenece al espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Keys;

```

### Get Name

**Sintaxis:** obj << Get Name

**Descripción:** Devuelve el nombre de este espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
space name = nsref << Get Name;

```

### Get Value

**Sintaxis:** obj << Get Value( string )

**Descripción:** Devuelve el valor del elemento especificado dentro de este espacio de nombres. La "cadena" es la clave para el elemento.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Value( "nObs" );

```

### Get Values

**Sintaxis:** obj << Get Values

**Descripción:** Devuelve una lista de los valores que corresponden a cada uno de los elementos de este espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Values;

```

### Insert

**Sintaxis:** obj << Insert( string, value )

**Descripción:** Inserta una expresión de cadena de caracteres con el valor especificado en este espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Insert( "X", 25 );
Show( nsref );

```

### Lock Namespace

**Sintaxis:** obj << Lock Namespace( <string, | {string, ...}>* )

**Descripción:** Protege todas las variables o las variables con los nombres especificados en este espacio de nombres e impide añadir, cambiar o quitar variables.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace;
Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**Sintaxis:** obj << N Items

**Descripción:** Devuelve el número de elementos que contiene este espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
n = nsref << N Items;

```

### New Namespace

**Sintaxis:** ns = New Namespace( <name>, <list of expressions> )

**Descripción:** Crea un espacio de nombres donde todas las funciones y variables creadas se definen únicamente dentro del nombre especificado.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);

```

### Next

**Sintaxis:** obj << Next( string )

**Descripción:** Devuelve la expresión de cadena de caracteres correspondiente al elemento siguiente a la clave especificada dentro de este espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Next( "addition" );

```

### Remove

**Sintaxis:** obj << Remove( <string | {string, ...}>* )

**Descripción:** Quita la expresión de cadena de caracteres especificada del espacio de nombres.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Remove( "nObs" );
Show( nsref );

```

### Show Contents

**Sintaxis:** obj << Show Contents

**Descripción:** Muestra los contenidos de un espacio de nombres en el registro de JMP.

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Show Contents;

```

### Unlock Namespace

**Sintaxis:** obj << Unlock Namespace( <string | {string, ...}>* )

**Descripción:** Desprotege un espacio de nombres previamente protegido con todas las variables protegidas en este espacio de nombres e impidiendo que se añadan, cambian o quiten variables.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace( "nObs" );
Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); 
//Try again after unlocking. 
nsref << Unlock Namespace( "nObs" );
Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

