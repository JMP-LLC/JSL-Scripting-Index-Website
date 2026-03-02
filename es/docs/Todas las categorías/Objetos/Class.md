# Class



## Constructores asociados

### Define Class

**Sintaxis:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Descripción:** Crea una clase donde todos los métodos de clase y variables de clase creados se definen únicamente dentro del nombre de clase especificado.

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );

```

## Mensajes del elemento

### Clone

**Sintaxis:** obj &lt;&lt; Clone

**Descripción:** Clona el contenido de una referencia de clase para crear un nuevo objeto

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );nclref = clref << Clone;Show( clref << Equal( nclref ) );Show( clref == nclref );

```

### Contains

**Sintaxis:** obj &lt;&lt; Contains( string )

**Descripción:** Devuelve 1 si la clase contiene la expresión de cadena de caracteres especificada y 0 en caso contrario.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Contains( "nObs" );

```

### Delete Class

**Sintaxis:** clref &lt;&lt; Delete Class( &lt; Force( boolean ) &gt; )

**Descripción:** Elimina esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Delete Class;Show( clref );

```

### Equal

**Sintaxis:** obj &lt;&lt; Equal( classref )

**Descripción:** Compara el argumento de referencia de clase con la referencia de clase objetivo en cuanto a la igualdad

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );nclref = New Object( Test() );Show( clref << Equal( nclref ) );nclref:nObs = 50;Show( clref << Equal( nclref ) );

```

### First

**Sintaxis:** obj &lt;&lt; First

**Descripción:** Devuelve la expresión de cadena correspondiente al primer elemento de esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << First;

```

### Get Contents

**Sintaxis:** obj &lt;&lt; Get Contents

**Descripción:** Devuelve una lista de elementos dentro de esta clase. Cada elemento es una lista de dos elementos que contiene una clave y su valor asociado.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Contents;

```

### Get Keys

**Sintaxis:** obj &lt;&lt; Get Keys

**Descripción:** Devuelve una lista de las claves dentro de esta clase. Cada clave es una representación en forma de cadena de un elemento individual que pertenece a la clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Keys;

```

### Get Name

**Sintaxis:** obj &lt;&lt; Get Name

**Descripción:** Devuelve el nombre de esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );class name = clref << Get Name;

```

### Get Value

**Sintaxis:** obj &lt;&lt; Get Value( string )

**Descripción:** Devuelve el valor del elemento especificado dentro de esta clase. La "cadena" es la clave para el elemento.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Value( "nObs" );

```

### Get Values

**Sintaxis:** obj &lt;&lt; Get Values

**Descripción:** Devuelve una lista de los valores que corresponden a cada uno de los elementos dentro de esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Values;

```

### Insert

**Sintaxis:** obj &lt;&lt; Insert( string, value )

**Descripción:** Inserta una expresión de cadena con el valor especificado en esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Insert( "X", 25 );Show( clref );

```

### Lock Class

**Sintaxis:** obj &lt;&lt; Lock Class( &lt;string, | {string, ...}&gt;* )

**Descripción:** Bloquea todos los miembros del método o los miembros con los nombres especificados en esta clase e impide que se añadan, modifiquen o quiten.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Lock Class;Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**Sintaxis:** obj &lt;&lt; N Items

**Descripción:** Devuelve el número de elementos que contiene esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );n = clref << N Items;

```

### Next

**Sintaxis:** obj &lt;&lt; Next( string )

**Descripción:** Devuelve la expresión de cadena correspondiente al elemento siguiente a la clave especificada en esta clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Next( "addition" );

```

### Remove

**Sintaxis:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**Descripción:** Quita la expresión de cadena especificada de la clase.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Remove( "nObs" );Show( clref );

```

### Show Contents

**Sintaxis:** obj &lt;&lt; Show Contents

**Descripción:** Muestra el contenido de una clase en el registro de JMP.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Show Contents;

```

### Unlock Class

**Sintaxis:** obj &lt;&lt; Unlock Class( &lt;string | {string, ...}&gt;* )

**Descripción:** Desbloquea una clase bloqueada que contiene miembros del método a los que se le impidió ser añadidos, modificados o quitados.

**JMP Versión agregada:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Lock Class( "nObs" );Try( clref:nObs = 30, Show( "clref is locked." ) ); //Try again after unlocking. clref << Unlock Class( "nObs" );Try( clref:nObs = 40, Show( "clref is locked." ) );

```

