# List



### As List

**Sintaxis:** y = As List( matrix )

**Descripción:** Devuelve una representación de una matriz en forma de lista. Las matrices con varias columnas se convierten en una lista de listas, una por cada fila, tal como espera el operador Matrix.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### Concat Items

**Sintaxis:** string = Concat Items( {list of strings}, <separatorString> )

**Descripción:** Concatena una lista de cadenas de caracteres en una sola, separándolas con el separador indicado o con un espacio en blanco si no se especifica ninguno.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**Sintaxis:** y = Eval List( list )

**Descripción:** Devuelve una lista donde cada uno de sus elementos ha sido evaluado.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### Insert

**Sintaxis:** z = Insert( x, y, <i> )

**Descripción:** Devuelve una copia de la lista x con y insertado en la i-ésima posición o añadido al final si no se especifica el argumento opcional i.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Sintaxis:** Insert Into( x, y, <i> )

**Descripción:** Modifica la lista, el arreglo asociativo o el cuadro de visualización x con y insertada en la colección. Las listas y cuadros de visualización admiten una variable i opcional para especificar la posición, o se añadirán los elementos si no se especifica la posición. Tenga en cuenta de que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Is List

**Sintaxis:** y = Is List( x )

**Descripción:** Devuelve 1 si el argumento x es una lista y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Items

**Sintaxis:** wl = Items(<[first last]>, s, <delim>, <Include Boundary Delimiters(0|1)>)

**Descripción:** Devuelve una lista de subcadenas de caracteres (posiblemente vacías) separadas por exactamente uno de cualquiera de los caracteres especificados en el argumento delim. En ausencia del argumento delim, se usa el carácter de espacio. Si el argumento delim es una cadena de caracteres vacía, cada carácter se trata como un elemento aparte.

**JMP Versión agregada:** 15

**Ejemplo 1**

```js

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Length

**Sintaxis:** l = Length( x )

**Descripción:** Devuelve la longitud de la cadena especificada (en caracteres), lista (en términos), arreglo asociativo (en número de claves), blob (en bytes), matriz (en elementos) o espacio de nombres/clase (en número de funciones y variables).

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Length( "Café" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### List

**Sintaxis:** y = {a, b, ...}; y = List( a, b, ... )

**Descripción:** Crea una lista de elementos sin evaluarlos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### N Items

**Sintaxis:** y = N Items( x )

**Descripción:** Devuelve el número de elementos en una lista, el número de elementos en una matriz, el número de claves en un arreglo asociativo, el número de funciones y variables en un espacio de nombres, el número de métodos y variables en un objeto de clase, o el número de hijos de un cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Remove

**Sintaxis:** y = Remove( x, <i>, <n=1> ); y = Remove( x, {list} )

**Descripción:** Devuelve una copia de la lista x, eliminando n elementos a partir del elemento i-ésimo o eliminando una lista de elementos especificada en el argumento list.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Sintaxis:** Remove From( x, <i>, <n=1> )

**Descripción:** Modifica la lista, el arreglo asociativo o el cuadro de visualización x quitando elementos. Los arreglos asociativos especifican el elemento que se quitará mediante un valor clave i. Las listas y cuadros de visualización empiezan quitando elementos por el que está en posición i. Una lista quitará múltiples elementos de una vez si se especifica la opción n. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Reverse

**Sintaxis:** y = Reverse( x )

**Descripción:** Devuelve una copia de la lista x con los elementos en orden inverso.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Sintaxis:** Reverse Into( x )

**Descripción:** Modifica la lista o el cuadro de visualización x con el orden de los elementos invertido. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Set Difference

**Sintaxis:** list = Set Difference( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en list1, pero no en list2. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Sintaxis:** list = Set Intersect( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en ambas listas. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Sintaxis:** list = Set Union( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en cualquier lista. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**Sintaxis:** list = Set Unique( list )

**Descripción:** Devuelve la lista de elementos únicos que aparecen en la lista de entrada. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**Sintaxis:** y = Shift( x, <n=1> )

**Descripción:** Devuelve una copia de la lista x con los primeros n elementos movidos al final de la lista o bien, si n es negativo, los últimos n elementos movidos al principio.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Sintaxis:** Shift Into( x, <n=1> )

**Descripción:** Modifica la lista o el cuadro de visualización x con los primeros n elementos desplazados hasta el final de la lista, o, si n es negativo, los últimos n elementos se desplazarán al inicio. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Sort List

**Sintaxis:** y = Sort List( x )

**Descripción:** Devuelve una copia de la lista x con los elementos ordenados en orden ascendente.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Sintaxis:** Sort List Into( x )

**Descripción:** Modifica la lista x ordenando los elementos en orden ascendente. Nótese que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Substitute

**Sintaxis:** y = Substitute( x, patternExpr1, replacementExpr1, ... )

y = Substitute( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**Descripción:** Devuelve una copia de la cadena, lista o expresión x, donde cada una de las instancias de cada expresión de patrón está sustituida por la expresión de sustitución correspondiente. El argumento opcional <<IGNORECASE habilita la búsqueda de coincidencias sin distinguir entre mayúsculas y minúsculas si x es una cadena.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Ejemplo 5**

```js

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Ejemplo 6**

```js

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Sintaxis:** Substitute Into( x, patternExpr1, replacementExpr1, ... )

Substitute Into( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**Descripción:** Modifica la cadena, lista o expresión x, donde cada una de las instancias de cada expresión de patrón está sustituida por la expresión de sustitución correspondiente. Tenga en cuenta que el argumento x debe ser una variable. El argumento opcional <<IGNORECASE habilita la búsqueda de coincidencias sin distinguir entre mayúsculas y minúsculas si x es una cadena.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Words

**Sintaxis:** wl = Words( <[first last]>, s, <delim>)

**Descripción:** Devuelve una lista de subcadenas de caracteres separadas por cualquiera de los caracteres especificados en el argumento delim. En ausencia del argumento delim, se usa el carácter de espacio. Si el argumento delim es una cadena de caracteres vacía, cada carácter se trata como una palabra aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

