# Character



### Blob To Char

**Sintaxis:** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Descripción:** Crea una cadena de caracteres a partir de un BLOB (Binary Large Object) usando la codificación especificada. Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp y ascii~hex.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(	Hex To Blob( "436166C3A9" ),	"ascii~hex");

```

### Blob To Matrix

**Sintaxis:** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Descripción:** Genera una matriz convirtiendo los bytes presentes en el blob en números. type puede ser "int", "uint" o "float". bytesEach puede ser 1, 2, 4 o 8. endian indica si el primer byte es el más significativo ("big") o el menos significativo ("little"); "native" indica el formato nativo de la máquina.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**Sintaxis:** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Descripción:** Devuelve una representación de x como cadena de caracteres, utilizando el ancho máximo w y decimales d si el argumento x es numérico. <<FullPrecision escribe valores numéricos utilizando toda la precisión disponible.

**JMP Versión agregada:** Antes de la versión 14

#### Precisión completa

```jsl

Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

#### Simple

```jsl

Char( Pi(), 10, 4 );

```

#### Usar configuración local

```jsl

Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Sintaxis:** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Descripción:** Crea un BLOB (Binary Large Object) a partir de una cadena de caracteres usando la codificación especificada. Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp y ascii~hex.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Sintaxis:** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Descripción:** Devuelve el texto hexadecimal correspondiente al valor y la codificación indicados. Puede tratarse de un número, una cadena de caracteres o un blob. Si el valor es un número, se utiliza la codificación IEEE 754 de 64 bits a menos que se indique el argumento opcional "integer". Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis y euc-jp.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**Sintaxis:** scw = Collapse Whitespace( s )

**Descripción:** Recorta el espacio en blanco del principio o del final y elimina los espacios en blanco interiores que estén duplicados

**JMP Versión agregada:** Antes de la versión 14

```jsl

Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**Sintaxis:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Descripción:** Concatena cadenas de caracteres para obtener una cadena más larga, o matrices para obtener una matriz más ancha.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[1 2] || [3 4] || [5 6];

```

### Concat Items

**Sintaxis:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Descripción:** Concatena una lista de cadenas de caracteres en una sola, separándolas con el separador indicado o con un espacio en blanco si no se especifica ninguno.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Sintaxis:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Descripción:** Operador de asignación que concatena en el mismo lugar. a ||= b equivale a a = a || b.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = "hello ";ex ||= "world";

```

### Contains

**Sintaxis:** pos = Contains( x, item, &lt;start=1&gt; )

**Descripción:** Devuelve la posición de item dentro de x, comenzando en la posición start, siempre que esté indicada. Si el valor de start es negativo, la búsqueda comienza hacia atrás desde length( x ) - start. El argumento x puede ser una cadena de caracteres o una lista.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Contains( "redreed", "re", -1 ) );Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Sintaxis:** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Descripción:** Devuelve un booleano que indica si la palabra [elemento], una de una lista de palabras [lista] o el patrón [patrón] coincide o no con una de las palabras del texto representado por [x]. Las palabras están delimitadas por los caracteres en la cadena del separador opcional [separador]. Un carácter de coma, "," , es el separador predeterminado. Los espacios se recortan por los extremos de cada palabra extraída de la cadena de texto de entrada [x].

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );dt << New Column( "Cheese",	numeric,	continuous,	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) ));dt << Distribution( Column( :Cheese ) );

```

**Ejemplo 3**

```jsl

//find repeated character c in cdcefContains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**Sintaxis:** b = Ends With( s, sub )

**Descripción:** Devuelve 1 si s termina con sub y 0 en caso contrario. Los argumentos s y sub pueden ser ambos cadenas de caracteres o ambos listas. Equivale a Right( s, Length( sub )) == sub.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**Sintaxis:** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Descripción:** Devuelve el texto hexadecimal (u otro sistema numérico base) correspondiente al valor y la codificación dados, que puede ser un número, una cadena o un blob. Si el valor es un número, se utiliza la codificación IEEE 754 de 64 bits a menos que se proporcione uno de los argumentos opcionales, integer o Base. Si se especifica Base, la función devuelve el texto correspondiente al número especificado en ese sistema numérico base, en lugar de en hexadecimal. La base debe ser un valor entero entre 2 y 36, ambos incluidos. Algunas de las codificaciones compatibles son utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis y euc-jp.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Sintaxis:** blob = Hex To Blob( hex string )

**Descripción:** Obtiene un BLOB (Binary Large OBject) a partir de la cadena de caracteres indicada con códigos hexadecimales, que también puede contener espacios, comas, retornos de carro y avances de línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex To Blob( "FF78CE" );

```

### Hex To Char

**Sintaxis:** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Descripción:** Devuelve el texto correspondiente al texto hexadecimal, usando la codificación especificada. Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis y euc-jp.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Sintaxis:** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Descripción:** Devuelve el número correspondiente al texto hexadecimal (u otro sistema numérico base). 16 dígitos hexadecimales se convierten como números de punto flotante IEEE 754 de 64 bits; de lo contrario, la entrada se considera un entero hexadecimal. Si se especifica Base, el texto se considera una cadena que representa al número en esa base. La base debe ser un entero entre 2 y 36, ambos incluidos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex To Number( "11110000", Base( 2 ) );

```

### Insert

**Sintaxis:** z = Insert( x, y, &lt;i&gt; )

**Descripción:** Devuelve una copia de la lista x con y insertado en la i-ésima posición o añadido al final si no se especifica el argumento opcional i.

**JMP Versión agregada:** Antes de la versión 14

```jsl

z = {11, 22, 33};z = Insert( z, 99, 2 );

```

### Insert Into

**Sintaxis:** Insert Into( x, y, &lt;i&gt; )

**Descripción:** Modifica la lista, el arreglo asociativo o el cuadro de visualización x con y insertada en la colección. Las listas y cuadros de visualización admiten una variable i opcional para especificar la posición, o se añadirán los elementos si no se especifica la posición. Tenga en cuenta de que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33};Insert Into( ex, 99 );ex;

```

**Ejemplo 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];Insert Into( ex, "c", 12 );ex;

```

**Ejemplo 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );Wait( 1 );Insert Into( hlist, Button Box( "c" ) );

```

### Item

**Sintaxis:** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descripción:** Devuelve el n-ésimo elemento del argumento s, donde los elementos son las subcadenas de caracteres (que pueden estar vacías) separadas por un solo carácter cualquiera de los especificados en el argumento delim. En ausencia de delim, se usa el carácter de espacio. Si delim es una cadena de caracteres vacía, cada carácter se considera un elemento aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Item( 5, "http://www.jmp.com", ":/." );

```

**Ejemplo 2**

```jsl

Item( [2 -1], "This is a sentence" );

```

**Ejemplo 3**

```jsl

Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Ejemplo 4**

```jsl

Item( 5, "a b c d", Unmatched( "None" ) );

```

**Ejemplo 5**

```jsl

Item( 2, "abcd", "" );

```

**Ejemplo 6**

```jsl

Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Sintaxis:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descripción:** Devuelve una lista de subcadenas de caracteres (posiblemente vacías) separadas por exactamente uno de cualquiera de los caracteres especificados en el argumento delim. En ausencia del argumento delim, se usa el carácter de espacio. Si el argumento delim es una cadena de caracteres vacía, cada carácter se trata como un elemento aparte.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Ejemplo 2**

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Ejemplo 3**

```jsl

Items(	",Apple,Banana Tree,Peach",	Get Punctuation Characters(),	Include Boundary Delimiters);

```

**Ejemplo 4**

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Left

**Sintaxis:** sub = Left( s, n, &lt;filler&gt; )

**Descripción:** Devuelve una versión truncada o rellenada de la cadena de caracteres o lista original s. El resultado contiene los n caracteres o elementos de la lista de la izquierda, rellenados con filler por la derecha si la longitud de s es menor que n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exurl = "http://www.jmp.com";Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Sintaxis:** l = Length( x )

**Descripción:** Devuelve la longitud de la cadena especificada (en caracteres), lista (en términos), arreglo asociativo (en número de claves), blob (en bytes), matriz (en elementos) o espacio de nombres/clase (en número de funciones y variables).

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Length( "Café" );

```

**Ejemplo 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**Ejemplo 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**Ejemplo 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### Lowercase

**Sintaxis:** sl = Lowercase( s )

**Descripción:** Convierte letras mayúsculas en minúsculas en la cadena especificada. Las reglas de conversión de mayúsculas y minúsculas dependen de la configuración local.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**Sintaxis:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Descripción:** Genera un blob a partir de una matriz convirtiendo los elementos de la matriz en enteros con signo o sin signo de 1, 2 o 4 bytes o números de coma flotante de 4 o 8 bytes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**Sintaxis:** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Descripción:** Busca una subcadena de caracteres o una posición en el argumento s en función de una combinación de argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**Sintaxis:** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Descripción:** Convierte s en un número utilizando cualquier formato integrado, incluidos los formatos de fecha y moneda. Devuelve faltante si falla la conversión. El ajuste <<Restrict opcional solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Ejemplo 2**

```jsl

Show(	Num( "3.1e6", <<Restrict ),	Num( "1989-10-04", <<Restrict ),	Num( "5%", <<Restrict ),	Num( "£23", <<Restrict ));

```

### Regex

**Sintaxis:** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Descripción:** Busca en el texto source una coincidencia con pattern. El format predeterminado es "\\0" (la coincidencia completa) pero podría ser "Fred" (para un reemplazo constante) o "\\1" (para utilizar el texto que coincida con el primer paréntesis de pattern). Devuelve valores faltantes numéricos para la ausencia de coincidencias. De forma predeterminada, deben coincidir las mayúsculas y minúsculas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Regex(	"   Are you there Alice?, asked Jerry.",	" (here|there) (\w+).+(said|asked) (\w+)\.",	"  I am \1, \4, replied \2.");

```

### Remove

**Sintaxis:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Descripción:** Devuelve una copia de la lista x, eliminando n elementos a partir del elemento i-ésimo o eliminando una lista de elementos especificada en el argumento list.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Sintaxis:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Descripción:** Modifica la lista, el arreglo asociativo o el cuadro de visualización x quitando elementos. Los arreglos asociativos especifican el elemento que se quitará mediante un valor clave i. Las listas y cuadros de visualización empiezan quitando elementos por el que está en posición i. Una lista quitará múltiples elementos de una vez si se especifica la opción n. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33, 44, 55};Remove From( ex, 3, 2 );ex;

```

**Ejemplo 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];Remove From( ex, "c" );ex;

```

**Ejemplo 3**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Remove From( hlist, 1 );

```

### Repeat

**Sintaxis:** s = Repeat( x, n, &lt;m=1&gt; )

**Descripción:** Devuelve el texto, la matriz o una lista especificados por el argumento x concadenados consigo mismo n veces. Si x es un número o una matriz, n indica la repetición vertical y el argumento opcional m designa la repetición horizontal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Reverse

**Sintaxis:** y = Reverse( x )

**Descripción:** Devuelve una copia de la lista x con los elementos en orden inverso.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Sintaxis:** Reverse Into( x )

**Descripción:** Modifica la lista o el cuadro de visualización x con el orden de los elementos invertido. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33, 44, 55};Reverse Into( ex );ex;

```

**Ejemplo 2**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Reverse Into( hlist );

```

### Right

**Sintaxis:** sub = Right( s, n, &lt;filler&gt; )

**Descripción:** Devuelve una versión truncada o rellenada de la cadena de caracteres o lista original s. El resultado contiene los n caracteres o elementos de la lista de la derecha, rellenados con filler por la izquierda si la longitud de s es menor que n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Right( "http://www.jmp.com", 3 );

```

### Set Difference

**Sintaxis:** list = Set Difference( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en list1, pero no en list2. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Sintaxis:** list = Set Intersect( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en ambas listas. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Sintaxis:** list = Set Union( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en cualquier lista. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Union( {1, 3}, {3, 2} ) );Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );all = {};Open( "$SAMPLE_DATA/Big Class Families.jmp" );For Each Row( all = Set Union( all, :sports ) );all = Set Unique( all );Show( all );

```

### Set Unique

**Sintaxis:** list = Set Unique( list )

**Descripción:** Devuelve la lista de elementos únicos que aparecen en la lista de entrada. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );Open( "$SAMPLE_DATA/Big Class Families.jmp" );Row() = 1;Show( Set Unique( :sports ) );

```

### Shift

**Sintaxis:** y = Shift( x, &lt;n=1&gt; )

**Descripción:** Devuelve una copia de la lista x con los primeros n elementos movidos al final de la lista o bien, si n es negativo, los últimos n elementos movidos al principio.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Sintaxis:** Shift Into( x, &lt;n=1&gt; )

**Descripción:** Modifica la lista o el cuadro de visualización x con los primeros n elementos desplazados hasta el final de la lista, o, si n es negativo, los últimos n elementos se desplazarán al inicio. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33, 44, 55};Shift Into( ex, -2 );ex;

```

**Ejemplo 2**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Shift Into( hlist, -2 );

```

### Starts With

**Sintaxis:** b = Starts With( s, sub )

**Descripción:** Devuelve 1 si s comienza por sub y 0 en caso contrario. Los argumentos s y sub pueden ser ambos cadenas de caracteres o ambos listas. Equivale a Left( s, Length( sub )) == sub.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Starts With( "http://www.jmp.com", "http:" );

```

### Substitute

**Sintaxis:** y = Substitute( x, patternExpr1, replacementExpr1, ... ) y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descripción:** Devuelve una copia de la cadena, lista o expresión x, donde cada una de las instancias de cada expresión de patrón está sustituida por la expresión de sustitución correspondiente. El argumento opcional <<IGNORECASE habilita la búsqueda de coincidencias sin distinguir entre mayúsculas y minúsculas si x es una cadena.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Ejemplo 2**

```jsl

Substitute( "All things considered", "All", "Some" );

```

**Ejemplo 3**

```jsl

lst = {"a", "b", "c"};Substitute( lst, "a", "A" );

```

**Ejemplo 4**

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Ejemplo 5**

```jsl

Substitute( "Apple,orange,banana-grape",	Items( Get Punctuation Characters() || "-'", "" ), " ");

```

**Ejemplo 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Sintaxis:** Substitute Into( x, patternExpr1, replacementExpr1, ... ) Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descripción:** Modifica la cadena, lista o expresión x, donde cada una de las instancias de cada expresión de patrón está sustituida por la expresión de sustitución correspondiente. Tenga en cuenta que el argumento x debe ser una variable. El argumento opcional <<IGNORECASE habilita la búsqueda de coincidencias sin distinguir entre mayúsculas y minúsculas si x es una cadena.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = Expr( a + Sqrt( a ) );Substitute Into( ex, Expr( a ), Expr( b ) );Name Expr( ex );

```

**Ejemplo 2**

```jsl

ex = "All things considered";Substitute Into( ex, "All", "Some" );Show( ex );

```

**Ejemplo 3**

```jsl

lst = {"a", "b", "c"};Substitute Into( lst, "a", "A" );Show( lst );

```

**Ejemplo 4**

```jsl

s = "Apple,APPLE,apple";Substitute Into( s, "apple", "orange", <<IGNORECASE );Show( s );

```

### Substr

**Sintaxis:** sub = Substr( s, start, &lt;count&gt; )

**Descripción:** Devuelve la parte de la cadena de caracteres s que se compone de count caracteres comenzando a partir de la posición start. Si count es negativo o está ausente, significa el resto de la cadena de caracteres. Un valor negativo de start significa empezar a start caracteres del final. La función Substr() también se puede aplicar a listas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**Sintaxis:** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Descripción:** Se utiliza para crear fórmulas de puntuación en el explorador de texto. El argumento texto a número es un arreglo asociativo que establece correspondencias entre palabras en minúscula y números. El argumento de ponderación es "Binary", "Ternary", "Count", "LogCount", "LCA" o un arreglo de pesos de frecuencia inversa del documento para TFLogIDF. La matriz de puntuación debe tener el mismo número de columnas que palabras en el arreglo asociativo, o una más si se trata de LCA. El resultado es un vector de puntuaciones. Si no se especifica ninguna matriz de puntuación, genera un vector de puntuaciones de conteo. Si no se especifica ninguna ponderación, utiliza Conteo. Esta función no es compatible con la opción Lema para combinación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

score = Text Score(	"over the lazy dogs back",	["lazy" => 1, "dogs" => 2],	"Count",	[1 0, 0 1]);Show( score );

```

### Titlecase

**Sintaxis:** st = Titlecase( s )

**Descripción:** Convierte el formato de mayúsculas y minúsculas a tipo título

**JMP Versión agregada:** Antes de la versión 14

```jsl

Titlecase( "The dog crossed the road" );

```

### Trim

**Sintaxis:** sub = Trim( s, &lt;left|right|both&gt; )

**Descripción:** Devuelve una copia de la cadena de caracteres s después de eliminar todos los espacios en blanco del principio o del final. El segundo argumento especifica si se desean eliminar los espacios en blanco del principio o bien los del final y, si no se especifica, se eliminan de ambos extremos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Trim( " title   ", both );

```

### Trim Whitespace

**Sintaxis:** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Descripción:** Devuelve una copia de la cadena de caracteres s después de eliminar todos los espacios en blanco del principio o del final. El segundo argumento especifica si se desean eliminar los espacios en blanco del principio o bien los del final y, si no se especifica, se eliminan de ambos extremos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**Sintaxis:** su = Uppercase( s )

**Descripción:** Convierte letras minúsculas en mayúsculas en la cadena especificada. Las reglas de conversión de mayúsculas y minúsculas dependen de la configuración local.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Uppercase( "Café #23" );

```

### Word

**Sintaxis:** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Descripción:** Devuelve la n-ésima palabra de la cadena de caracteres s, donde las palabras son las subcadenas de caracteres separadas por cualquier número de caracteres de los indicados en el argumento delim. En ausencia de delim, se usa el carácter de espacio. Si delim es una cadena de caracteres vacía, cada carácter se considera una palabra aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Word( 3, "http://www.jmp.com", ":/." );

```

**Ejemplo 2**

```jsl

Word( [2 -1], "This is a sentence" );

```

**Ejemplo 3**

```jsl

Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Ejemplo 4**

```jsl

Word( 5, "a b c d", Unmatched( "None" ) );

```

**Ejemplo 5**

```jsl

Word( 2, "abcd", "" );

```

### Words

**Sintaxis:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Descripción:** Devuelve una lista de subcadenas de caracteres separadas por cualquiera de los caracteres especificados en el argumento delim. En ausencia del argumento delim, se usa el carácter de espacio. Si el argumento delim es una cadena de caracteres vacía, cada carácter se trata como una palabra aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Ejemplo 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Ejemplo 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### XPath Query

**Sintaxis:** result = XPath Query(xml, xpath expression)

**Descripción:** Ejecuta una consulta de XPath sobre un documento XML.

**JMP Versión agregada:** Antes de la versión 14

```jsl

result = XPath Query(	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",	"//color/text()");

```

