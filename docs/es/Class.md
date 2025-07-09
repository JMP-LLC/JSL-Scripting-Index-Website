# Class



### Clone

**Sintaxis:** obj << Clone

**Descripción:** Clona el contenido de una referencia de clase para crear un nuevo objeto

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = clref << Clone;
Show( clref << Equal( nclref ) );
Show( clref == nclref );

```

### Contains

**Sintaxis:** obj << Contains( string )

**Descripción:** Devuelve 1 si la clase contiene la expresión de cadena de caracteres especificada y 0 en caso contrario.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Contains( "nObs" );

```

### Define Class

**Sintaxis:** Define Class("class name", <Base Class{ "base class name", ... }>, <Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )>, { method* | member* | function* } )

**Descripción:** Crea una clase donde todos los métodos de clase y variables de clase creados se definen únicamente dentro del nombre de clase especificado.

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );

```

### Delete Class

**Sintaxis:** clref << Delete Class( < Force( boolean ) > )

**Descripción:** Elimina esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Delete Class;
Show( clref );

```

### Equal

**Sintaxis:** obj << Equal( classref )

**Descripción:** Compara el argumento de referencia de clase con la referencia de clase objetivo en cuanto a la igualdad

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = New Object( Test() );
Show( clref << Equal( nclref ) );
nclref:nObs = 50;
Show( clref << Equal( nclref ) );

```

### First

**Sintaxis:** obj << First

**Descripción:** Devuelve la expresión de cadena correspondiente al primer elemento de esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << First;

```

### Get Contents

**Sintaxis:** obj << Get Contents

**Descripción:** Devuelve una lista de elementos dentro de esta clase. Cada elemento es una lista de dos elementos que contiene una clave y su valor asociado.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Contents;

```

### Get Keys

**Sintaxis:** obj << Get Keys

**Descripción:** Devuelve una lista de las claves dentro de esta clase. Cada clave es una representación en forma de cadena de un elemento individual que pertenece a la clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Keys;

```

### Get Name

**Sintaxis:** obj << Get Name

**Descripción:** Devuelve el nombre de esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
class name = clref << Get Name;

```

### Get Value

**Sintaxis:** obj << Get Value( string )

**Descripción:** Devuelve el valor del elemento especificado dentro de esta clase. La "cadena" es la clave para el elemento.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Value( "nObs" );

```

### Get Values

**Sintaxis:** obj << Get Values

**Descripción:** Devuelve una lista de los valores que corresponden a cada uno de los elementos dentro de esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Values;

```

### Insert

**Sintaxis:** obj << Insert( string, value )

**Descripción:** Inserta una expresión de cadena con el valor especificado en esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Insert( "X", 25 );
Show( clref );

```

### Lock Class

**Sintaxis:** obj << Lock Class( <string, | {string, ...}>* )

**Descripción:** Bloquea todos los miembros del método o los miembros con los nombres especificados en esta clase e impide que se añadan, modifiquen o quiten.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class;
Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**Sintaxis:** obj << N Items

**Descripción:** Devuelve el número de elementos que contiene esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
n = clref << N Items;

```

### Next

**Sintaxis:** obj << Next( string )

**Descripción:** Devuelve la expresión de cadena correspondiente al elemento siguiente a la clave especificada en esta clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Next( "addition" );

```

### Remove

**Sintaxis:** obj << Remove( <string | {string, ...}>* )

**Descripción:** Quita la expresión de cadena especificada de la clase.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Remove( "nObs" );
Show( clref );

```

### Show Contents

**Sintaxis:** obj << Show Contents

**Descripción:** Muestra el contenido de una clase en el registro de JMP.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Show Contents;

```

### Unlock Class

**Sintaxis:** obj << Unlock Class( <string | {string, ...}>* )

**Descripción:** Desbloquea una clase bloqueada que contiene miembros del método a los que se le impidió ser añadidos, modificados o quitados.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class( "nObs" );
Try( clref:nObs = 30, Show( "clref is locked." ) ); 
//Try again after unlocking. 
clref << Unlock Class( "nObs" );
Try( clref:nObs = 40, Show( "clref is locked." ) );

```

