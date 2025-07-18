# Programming



### Add Custom Functions

**Sintaxis:** Add Custom Functions({f1, f2, ...} | f)

**Descripción:** Define una lista de funciones personalizadas para usarla en los scripts y el Editor de fórmulas. El comando también añade la lista al entorno.

**JMP Versión agregada:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**Sintaxis:** b = As Boolean( x )

**Descripción:** Evalúa una expresión y devuelve un valor booleano.

**JMP Versión agregada:** 14

```jsl

x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As Column

**Sintaxis:** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Descripción:** Accede a la columna especificada de la tabla de datos especificada o de la tabla de datos actual. Si la columna de la tabla no existe, se lanza un error.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Sintaxis:** y = As Constant( x )

**Descripción:** Evalúa una expresión para crear un valor constante que no cambie una vez calculado

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

#### Ejemplo 2

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

#### Ejemplo 3

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

### As Global

**Sintaxis:** y = ::name; y = As Global( name )

**Descripción:** Accede a la variable global especificada o lanza un error si la variable no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**Sintaxis:** y = As List( matrix )

**Descripción:** Devuelve una representación de una matriz en forma de lista. Las matrices con varias columnas se convierten en una lista de listas, una por cada fila, tal como espera el operador Matrix.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**Sintaxis:** y = As Name( s )

**Descripción:** Convierte una cadena en un nombre o una lista de cadenas en una lista de nombres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Sintaxis:** asns = As Namespace( ns )

**Descripción:** Accede al espacio de nombres especificado o lanza un error si el espacio de nombres no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Root

**Sintaxis:** y = :::name; y = As Root( name )

**Descripción:** Accede a la variable con ámbito de raíz especificada o lanza un error si la variable no existe.

**JMP Versión agregada:** 15

```jsl

::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**Sintaxis:** y = namespace:variable; y = As Scoped( namespace, variable )

**Descripción:** Accede a la variable de contexto especificada o lanza un error si la variable no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### Associative Array

**Sintaxis:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Descripción:** Crea un arreglo asociativo, que también se conoce como diccionario o mapa hash. En la forma con dos argumentos, las claves y los valores pueden ser una lista, una matriz o una columna de una tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Choose Closest

**Sintaxis:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Descripción:** Escoge la cadena de caracteres más cercana dentro de las reglas dadas y la devuelve. 

De forma predeterminada, se ignora si los caracteres están en mayúsculas o minúsculas; utilice Ignorar mayúsculas/minúsculas para especificarlo.

De forma predeterminada, se ignoran los caracteres no imprimibles; utilice Ignorar no imprimibles para especificarlo.

De forma predeterminada, se ignoran los espacios en blanco; utilice Ignorar espacios en blanco para especificarlo.

De forma predeterminada, no se permiten los cambios de caracteres para buscar una coincidencia.

	Utilice Conteo de ediciones máximas para controlar cuántas ediciones pueden realizarse.

	Utilice Razón de ediciones máximas para controlar el porcentaje de cambio permitido (en términos de caracteres de la cadena original).

	Ambos ajustes se aplican si se especifican.

De forma predeterminada, no se harán coincidir las cadenas inferiores a tres caracteres; utilice Longitud de cadena mínima para especificar una longitud distinta.

Cadenas sin coincidencia

	De forma predeterminada, si no se encuentra coincidencia para la cadena canónica dentro de las reglas dadas, se devuelve la cadena de origen.

	Utilice Reemplazar sin coincidencia para especificar si se devolverá la cadena de origen.

	Utilice Sin coincidencia para especificar el valor que se devolverá.

**JMP Versión agregada:** 15

#### Escoge entre las cadenas de caracteres, sin ediciones

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

#### Mantiene la puntuación

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

#### Permite ediciones

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

#### Sin coincidencia

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

### Class Exists

**Sintaxis:** nsexists = Class Exists( class name )

**Descripción:** Devuelve 1 si la clase especifica por el argumento name ya existe. De lo contrario, devuelve 0.

**JMP Versión agregada:** Antes de la versión 14

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

### Clear Globals

**Sintaxis:** Clear Globals( &lt; varname, ... &gt; )

**Descripción:** Borra los valores de todos los símbolos globales definidos actualmente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Clear Globals();

```

### Clear Log

**Sintaxis:** Clear Log()

**Descripción:** Vacía el registro.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Clear Log();

```

### Clear Symbols

**Sintaxis:** Clear Symbols( &lt; varname, ... &gt; )

**Descripción:** Borra los valores de todos los símbolos definidos actualmente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Clear Symbols();

```

### Close Log

**Sintaxis:** Close Log()

**Descripción:** Cierra la ventana Registro

**JMP Versión agregada:** Antes de la versión 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Define Class

**Sintaxis:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Descripción:** Define una nueva clase

**JMP Versión agregada:** 14

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

**Sintaxis:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Descripción:** Elimina todas las definiciones de clase o una o más definiciones de clase específicas.

**JMP Versión agregada:** Antes de la versión 14

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

### Delete Globals

**Sintaxis:** Delete Globals( &lt; varname, ... &gt; )

**Descripción:** Elimina todos los símbolos globales definidos y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Globals();

```

### Delete Namespaces

**Sintaxis:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Descripción:** Elimina todos los espacios de nombres o uno o más espacios de nombres específicos.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Delete Symbols( &lt; varname, ... &gt; )

**Descripción:** Elimina todos los símbolos definidos y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Symbols();

```

### Eval

**Sintaxis:** y = Eval( x )

**Descripción:** Evalúa el argumento y devuelve el resultado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**Sintaxis:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descripción:** Busca subcadenas de caracteres delimitadas por el par startChar/endChar y las sustituye por la expresión evaluada en el interior.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Sintaxis:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descripción:** Busca subcadenas de caracteres delimitadas por el par startChar/endChar y las sustituye por la expresión evaluada en el interior, sustituyendo l_string.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Sintaxis:** y = Eval List( list )

**Descripción:** Devuelve una lista donde cada uno de sus elementos ha sido evaluado.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Eval List( {1 + 2, 3 + 4} );

```

#### Ejemplo 2

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Exit

**Sintaxis:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descripción:** Sale de JMP.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### First

**Sintaxis:** y = First( x1, x2, ... )

**Descripción:** Evalúa todos los argumentos y devuelve el valor del primero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

First( 11, 22 );

```

### Function

**Sintaxis:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Descripción:** Define una función con los argumentos especificados, valores predeterminados y variables locales opcionales. Los argumentos con valores predeterminados son opcionales en la invocación de la función. Si se utiliza Return() dentro del script de la función, se devuelve la expresión intra.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

#### Ejemplo 2

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

#### Ejemplo 3

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

### Get Class Names

**Sintaxis:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de nombres de todas las clases definidas actualmente.

**JMP Versión agregada:** 14

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

**Sintaxis:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de referencias a todas las clases definidas actualmente

**JMP Versión agregada:** Antes de la versión 14

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

### Get Custom Functions

**Sintaxis:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Descripción:** Obtiene una lista de funciones personalizadas

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

Get Custom Functions();

```

#### Ejemplo 2

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**Sintaxis:** value = Get Environment Variable( string )

**Descripción:** Devuelve el valor de la variable de entorno del sistema operativo especificada.



NOTA: en el sistema operativo Macintosh, en el nombre de la variable se distinguen los caracteres en mayúsculas y minúsculas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Locale Setting

**Sintaxis:** value = Get Locale Setting( settingName )

**Descripción:** Recupera un ajuste de la configuración regional, como el separador decimal

**JMP Versión agregada:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Sintaxis:** list = Get Log( &lt;N&gt; )

**Descripción:** Devuelve una lista de líneas del registro. Si no se especifica ningún argumento, devuelve todas las líneas del registro. Si el argumento numérico N es positivo, devuelve las primeras N líneas del registro. Si N es negativo, devuelve las últimas N líneas del registro. Si N es cero, no devuelve ninguna línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Namespace Names

**Sintaxis:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de nombres de todos los espacios de nombre definidos actualmente.

**JMP Versión agregada:** 14

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

**Sintaxis:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de referencias a todos los espacios de nombres definidos actualmente.

**JMP Versión agregada:** Antes de la versión 14

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

### Get Punctuation Characters

**Sintaxis:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Descripción:** Devuelve una cadena que contiene los caracteres de puntuación que suelen utilizarse para delimitar palabras. Algunos son ,:;.?!\\/#@&~()[]<>"*`%$+=^|{} y algunos símbolos de puntuación Unicode comunes.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

Get Punctuation Characters();

```

#### Ejemplo 2

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

#### Ejemplo 3

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

#### Ejemplo 4

```jsl

Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**Sintaxis:** Get Session Script( win1, ... )

**Descripción:** Devuelve el script de sesión para las ventanas especificadas. El script de sesión es una expresión JSL que recreará las ventanas dadas, incluidas las tablas de datos, ventanas de script, diarios e informes. Los informes creados mediante scripts JSL tienen un soporte limitado, y solo intentarán recrear el diseño de la pantalla.

**JMP Versión agregada:** 17

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Sintaxis:** Get Whitespace Characters()

**Descripción:** Devuelve una cadena que contiene todos los caracteres de espacio en blanco que suelen utilizarse.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Whitespace Characters();

```

### Include

**Sintaxis:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Descripción:** Ejecuta el JSL del archivo especificado. Si se especifica Parse Only, se analiza el script en lugar de ejecutarlo. Si se especifica New Context, se ejecuta el JSL incluido en su propio espacio de nombres unívoco. Si tanto el script incluido como el script progenitor utilizan el espacio de nombres global, especifique New Context y Names Default to Here para evitar colisiones de nombres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Sintaxis:** y = Include File List()

**Descripción:** Devuelve una lista de los archivos incluidos en el punto de ejecución.

**JMP Versión agregada:** Antes de la versión 14

```jsl

y = Include File List();

```

### Is Log Open

**Sintaxis:** Is Log Open()

**Descripción:** Devuelve el resultado para indicar si está abierta la ventana Registro

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

If( Is Log Open(),
	Close Log()
);

```

#### Ejemplo 2

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Length

**Sintaxis:** l = Length( x )

**Descripción:** Devuelve la longitud de la cadena especificada (en caracteres), lista (en términos), arreglo asociativo (en número de claves), blob (en bytes), matriz (en elementos) o espacio de nombres/clase (en número de funciones y variables).

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Length( "Café" );

```

#### Ejemplo 2

```jsl

Length( {1, 2 + 3, [11 22]} );

```

#### Ejemplo 3

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

#### Ejemplo 4

```jsl

Length( Char To Blob( "Café" ) );

```

### List

**Sintaxis:** y = {a, b, ...}; y = List( a, b, ... )

**Descripción:** Crea una lista de elementos sin evaluarlos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

{1, 2 + 3, [11 22]};

```

### Local

**Sintaxis:** y = Local( {name=value, ...}, expression )

**Descripción:** Resuelve los nombres en variables locales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Sintaxis:** y = Local Here( expression )

**Descripción:** Ejecuta la expresión con el valor predeterminado de nombres locales Aquí (1).

**JMP Versión agregada:** Antes de la versión 14

```jsl

y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Sintaxis:** Lock Globals( name, ... )

**Descripción:** Protege los nombres globales especificados para impedir que se puedan modificar o borrar mediante la función Clear Globals.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Lock Symbols( name, ... )

**Descripción:** Protege los nombres globales especificados para impedir que se puedan modificar o borrar mediante la función Clear Symbols.

**JMP Versión agregada:** Antes de la versión 14

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

### Log Capture

**Sintaxis:** string = Log Capture( expr )

**Descripción:** Evalúa el argumento expr, captura el resultado que hubiese aparecido en la ventana del registro de JMP, y lo devuelve en forma de texto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Map Value

**Sintaxis:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Descripción:** Evalúa el valor inicial y devuelve el resultado asignado o un valor predeterminado.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

Map Value( "celry", {"celry", "celery"} );

```

#### Ejemplo 2

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

#### Ejemplo 3

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

#### Ejemplo 4

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**Sintaxis:** m = Method( { arg1 = val1, ... }, expression* )

**Descripción:** Crea un método dentro de una clase

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** mimic obj = Mimic(Box|PlatformRef)

**Descripción:** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

### N Items

**Sintaxis:** y = N Items( x )

**Descripción:** Devuelve el número de elementos en una lista, el número de elementos en una matriz, el número de claves en un arreglo asociativo, el número de funciones y variables en un espacio de nombres, el número de métodos y variables en un objeto de clase, o el número de hijos de un cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

#### Ejemplo 2

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

#### Ejemplo 3

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Names Default To Here

**Sintaxis:** Names Default To Here( boolean )

**Descripción:** Determina dónde se deben almacenar los nombres sin resolver, ya sea como globales/locales (0) o en el espacio de nombres Aquí: (1).

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Sintaxis:** ns = Namespace( namespace reference )

**Descripción:** Devuelve una referencia al espacio de nombres especificado en el argumento name.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** nsexists = Namespace Exists( namespace reference )

**Descripción:** Devuelve 1 si el espacio de nombres especificado en el argumento name existe y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

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

### New Custom Function

**Sintaxis:** f=New Custom Function(namespace, name, function definition)

**Descripción:** Crea un nuevo objeto de función personalizada. Se coloreará una función personalizada en el editor de scripts y se mostrará en el Índice de scripts. La información necesaria para una función de usuario personalizada son un espacio de nombres (para evitar colisiones con funciones globales), un nombre y una definición de función. Se puede añadir información de ayuda adicional mediante mensajes. Utilice el comando Añadir funciones personalizadas para publicar la nueva función en el entorno JMP.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

#### Ejemplo 2

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

#### Ejemplo 3

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

### New Namespace

**Sintaxis:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Descripción:** Crea un nuevo espacio de nombres con el nombre especificado en el argumento name, o anónimo si no se especifica nada para name.

**JMP Versión agregada:** Antes de la versión 14

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

### New Object

**Sintaxis:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Descripción:** Crea un objeto de instancia de una clase.

**JMP Versión agregada:** 14

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

### Open Log

**Sintaxis:** Open Log( &lt;bring window to top&gt; )

**Descripción:** Abre la ventana Registro

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Open Log();
Show( Is Log Open() );

```

#### Ejemplo 2

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Parameter

**Sintaxis:** y = Parameter( {name=value, ...}, model expression )

**Descripción:** Define los parámetros de las fórmulas de modelos para la plataforma No lineal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**Sintaxis:** y = Parse( s )

**Descripción:** Analiza la cadena de caracteres y devuelve la expresión de JSL resultante.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Parse( "x+y" );

```

### Print

**Sintaxis:** Print( x, ... )

**Descripción:** Muestra los valores de los argumentos en el registro, uno por línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Print( 355 / 113, Pi() );

```

### Quit

**Sintaxis:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descripción:** Sale de JMP.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### Recode

**Sintaxis:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Descripción:** Aplica las transformaciones especificadas a los valores de entrada y devuelve el resultado. Las opciones Respuesta múltiple y Por palabra dividen los datos de caracteres proporcionados en valores de entrada más pequeños. Una vez determinados los valores de entrada, las transformaciones se aplican a esos valores por separado.

Las variables de JSL especiales se rellenan durante la ejecución del comando:

	_rcNow es el valor actual de la entrada después de las transformaciones anteriores.

	_rcOrig es el valor original de la entrada.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

#### Ejemplo 2

```jsl

Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Recurse

**Sintaxis:** y = Recurse( x1, ... )

**Descripción:** Llama a la función de contención.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Remove Custom Functions

**Sintaxis:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Descripción:** Elimina una lista de funciones personalizadas del entorno.

**JMP Versión agregada:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**Sintaxis:** f = Save Log( &lt;path&gt; )

**Descripción:** Escribe los contenidos del registro en la ubicación de archivo especificada. Si la escritura se realiza correctamente, la función devuelve el nombre del archivo creado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Send

**Sintaxis:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Descripción:** Envía un mensaje (en forma de expresión) a un objeto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**Sintaxis:** value = Set Environment Variable( string, &lt; string&gt; )

**Descripción:** Establece el valor de la variable de entorno especificada en el sistema operativo. Si falta el segundo argumento o es una cadena de caracteres vacía, se elimina la variable de entorno.



NOTA: en el sistema operativo Macintosh, en el nombre de la variable se distinguen los caracteres en mayúsculas y minúsculas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**Sintaxis:** Show( x, ... )

**Descripción:** Muestra el nombre y el valor de los argumentos en el registro, uno por línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Classes

**Sintaxis:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Descripción:** Muestra el contenido de todas las clases definidas por el usuario.

**JMP Versión agregada:** Antes de la versión 14

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

### Show Globals

**Sintaxis:** Show Globals()

**Descripción:** Lista todos los símbolos globales definidos actualmente y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Globals();

```

### Show Namespaces

**Sintaxis:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descripción:** Muestra el contenido de todos los espacios de nombres definidos por el usuario, tanto los que tienen nombre asignado como los anónimos.

**JMP Versión agregada:** Antes de la versión 14

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

### Show Symbols

**Sintaxis:** Show Symbols()

**Descripción:** Lista todos los símbolos definidos actualmente y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Symbols();

```

### Sort List

**Sintaxis:** y = Sort List( x )

**Descripción:** Devuelve una copia de la lista x con los elementos ordenados en orden ascendente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Sintaxis:** Sort List Into( x )

**Descripción:** Modifica la lista x ordenando los elementos en orden ascendente. Nótese que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Throw

**Sintaxis:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Descripción:** Desvía la ejecución hacia el método Try() envolvente. De lo contrario, se detiene la ejecución del script. Si message comienza por un signo de exclamación, el error será fatal y no podrá ser capturado por Try(). El segundo argumento es un booleano opcional para incluir un rastreo.

**JMP Versión agregada:** Antes de la versión 14

#### Lanzamiento fatal

```jsl


Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

#### Rastreo

```jsl

Throw( "A line number is included in this error", 1 );

```

#### Try-Catch

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Try

**Sintaxis:** y = Try( expr, &lt;catchExpr&gt; )

**Descripción:** Evalúa y devuelve el argumento de expr, a menos que la evaluación provoque una excepción Throw() o una excepción interna. En tal caso, se devuelve la evaluación de catchExpr. Si se utiliza exception_msg como catchExpr, se devuelve una lista con más información sobre el error.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Try( Sqrt( "s" ), "invalid" );

```

#### Ejemplo 2

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Type

**Sintaxis:** y = Type( x )

**Descripción:** Devuelve una cadena de caracteres con el nombre del tipo de valor del argumento x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Type( [1 2 3] );

```

### Unlock Globals

**Sintaxis:** Unlock Globals( name, ... )

**Descripción:** Desprotege los nombres globales especificados, lo cual permite modificarlos y borrarlos mediante la función Clear Globals.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Unlock Symbols( name, ... )

**Descripción:** Desprotege los nombres globales especificados, lo cual permite modificarlos y borrarlos mediante la función Clear Symbols.

**JMP Versión agregada:** Antes de la versión 14

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

### Wait

**Sintaxis:** Wait( &lt;x&gt; )

**Descripción:** Espera x segundos para proceder con la ejecución. El valor predeterminado para x es de 3 segundos. Si x es 0 o más, JMP completará cualquier evento del sistema operativo (p. ej. representación en pantalla), así como cualquier rellamada pendiente (p. ej. evaluación de fórmulas) además de la espera. Si x es menor que 0, solo se confirma que se completarán la representación en pantalla y los eventos pendientes del sistema operativo antes de proceder.

**JMP Versión agregada:** Antes de la versión 14

#### Eventos del sistema operativo

```jsl

Wait( -1 ); // Wait for OS events

```

#### Rellamadas

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

#### Simple

```jsl

Wait( 1.5 );

```

### Watch

**Sintaxis:** w = Watch( all|name1, ... )

**Descripción:** Crea una ventana que muestra variables de espacios de nombre Global, Here y Local y sus valores.

**JMP Versión agregada:** Antes de la versión 14

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

### Where

**Sintaxis:** Where( &lt;dt&gt;, clause )

**Descripción:** Devuelve índices (normalmente números de fila) que coinciden con la cláusula Where indicada. El dt opcional cambia el Current Data Table durante la evaluación. Estas cláusulas suelen escribirse en JMP mediante el filtro de datos. A menudo, será más rápido que usar Loc, <<Get Rows Where o <<Select Where. El comportamiento no está definido si la cláusula modifica las secuencias o cualquier símbolo durante la evaluación.

**JMP Versión agregada:** 18

#### Columnas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

#### Estados de fila

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

#### Funciones de columna

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

#### Matriz/Lista

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

#### Otro

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

### Wild

**Sintaxis:** Wild()

**Descripción:** Denota la posición de un comodín que coincide con cualquier expresión (se utiliza únicamente en patrones de expresión).

**JMP Versión agregada:** Antes de la versión 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Sintaxis:** Wild List()

**Descripción:** Denota una serie de argumentos comodín que coinciden con cualquier elemento (se utiliza únicamente en patrones de expresión).

**JMP Versión agregada:** Antes de la versión 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**Sintaxis:** Write( x, ... )

**Descripción:** Muestra los valores especificados en el registro sin añadir puntos de interrogación, comillas, espacios ni saltos de línea (como sí sucede con Print()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

