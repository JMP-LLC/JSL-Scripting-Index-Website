# Custom Function



## Mensajes del elemento

### Custom Format Category

**Sintaxis:** f << Custom Format Category(1|0)

**Descripción:** Trata la función personalizada como un formato personalizado. Especifique 0 para excluir la función del menú de formatos de columnas.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );

```

### Description

**Sintaxis:** obj << Description( text )

**Descripción:** Establece la descripción de la función personalizada. Esta descripción se mostrará en el Índice de scripts y en las informaciones sobre herramienta.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**Sintaxis:** f << Example(example text | Expr(example JSL code), <example name>)

**Descripción:** Añade un ejemplo que muestra cómo utilizar la función de forma efectiva. El ejemplo debe introducirse como una cadena de texto o código JSL envuelto con el comando Expr. Puede enviar el mensaje varias veces para añadir más de un ejemplo.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)" );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**Sintaxis:** f << Formula Category(name|""|1|0)

**Descripción:** Incluye la función en la categoría del Editor de fórmulas especificada. Si se especifica, esta función se añadirá al final de la categoría coincidente. Si la categoría no existe, se creará una nueva categoría. Especifique 0 o una cadena vacía para que no se muestre la función en el árbol del editor de fórmulas.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**Sintaxis:** f << Get Custom Format Category

**Descripción:** Obtiene la categoría de formato personalizado para la función personalizada.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );
myAdd << Get Custom Format Category;

```

### Get Description

**Sintaxis:** f << Get Description

**Descripción:** Obtiene la descripción de la función personalizada.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );
myAdd << Get Description;

```

### Get Examples

**Sintaxis:** f << Get Examples

**Descripción:** Recupera la lista de ejemplos, como cadenas

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );
myAdd << Get Examples;

```

### Get Formula Category

**Sintaxis:** f << Get Formula Category

**Descripción:** Devuelve de qué categoría del Editor de fórmulas debería formar parte esta función, si corresponde.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );
myAdd << Get Formula Category;

```

### Get Function

**Sintaxis:** f << Get Function

**Descripción:** Recupera la definición de la función.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Function;

```

### Get Name

**Sintaxis:** f << Get Name

**Descripción:** Recupera el nombre de la función.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Name;

```

### Get Namespace

**Sintaxis:** f << Get Namespace

**Descripción:** Recupera el espacio de nombres de la función.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Namespace;

```

### Get Parameters

**Sintaxis:** f << Get Parameters

**Descripción:** Recupera la lista de parámetros.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );
myAdd << Get Parameters;

```

### Get Prototype

**Sintaxis:** f << Get Prototype

**Descripción:** Obtiene el prototipo que se muestra para esta función en el Índice de scripts

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );
myAdd << Get Prototype;

```

### Get Result Type

**Sintaxis:** f << Get Result Type

**Descripción:** Obtiene el tipo de resultado de la función.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );
myAdd << Get Result Type;

```

### Get Scripting Index Category

**Sintaxis:** f << Get Scripting Index Category

**Descripción:** Obtiene la categoría de la función personalizada en el Índice de scripts.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );
myAdd << Get Scripting Index Category;

```

### Get Transform Category

**Sintaxis:** f << Get Transform Category

**Descripción:** Obtiene la categoría de transformación para la función personalizada.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );
myAdd << Get Transform Category;

```

### Parameter

**Sintaxis:** f << Parameter(typename | {typename1, typename2, ...}, hint text)

**Descripción:** Agrega información sobre un parámetro de la función. Envíe este mensaje una vez por cada parámetro que utilice la función. Se puede utilizar para la validación del código. Las opciones válidas para los tipos de parámetros son Cualquiera, Nombre, Número, Cadena, Lista, Matriz y Estado de fila. Si se admiten varios tipos de resultados, proporcione los nombres de los tipos en una lista. La sugerencia se utiliza para indicar qué datos deben utilizarse en el argumento correspondiente del editor de fórmulas. Especifique una cadena vacía si no quiere sugerencias.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**Sintaxis:** obj << Prototype( text )

**Descripción:** Establece el prototipo que se muestra para esta función en el Índice de scripts

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**Sintaxis:** f << Result Type(typename | {typename1, typename2 ...})

**Descripción:** Establece el tipo de resultado de la función. Se puede utilizar para la validación del código. Las opciones válidas son Cualquiera, Nombre, Número, Cadena, Lista, Matriz y Estado de fila. Si se admiten varios tipos de resultados, proporcione los nombres de los tipos en una lista.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**Sintaxis:** f << Scripting Index Category(name|""|1|0)

**Descripción:** Establece la categoría para la función personalizada en el Índice de scripts. Todas las funciones personalizadas se incluirán en la categoría Todas las funciones, además de en la categoría que especifique. Especifique 0 o "" para incluir la función solo en la categoría Todas las funciones.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**Sintaxis:** f << Transform Category(1|0)

**Descripción:** Trata la función personalizada como una transformación de columna. Especifique 0 para excluir la función del menú de transformación de columnas.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );

```

