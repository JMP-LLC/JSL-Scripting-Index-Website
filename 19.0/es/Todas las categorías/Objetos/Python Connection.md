# Python Connection



## Mensajes del elemento

### Create JPIP CMD

**Sintaxis:** obj &lt;&lt; Create JPIP CMD()

**Descripción:** Activa la creación de un script que envuelve la línea de comandos jpip para el comando pip de Python. Un cuadro de diálogo de selección de directorios le preguntará dónde quiere que se guarde el script generado. Este script ofrece entonces todas las capacidades de pip, a la vez que determina correctamente las variables de entorno necesarias para el entorno Python aislado de JMP.

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

#### Ejemplo 2

```jsl

Python Create JPIP CMD();

```

### Disconnect

**Sintaxis:** obj &lt;&lt; Disconnect

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y no tiene ningún efecto.

**JMP Versión agregada:** 14

### Execute

**Sintaxis:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Descripción:** Envía una lista de entradas, ejecuta sentencias y devuelve una lista de salidas. El parámetro opcional echo() es True de forma predeterminada. El parámetro echo controla el eco de la fuente Python en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

PythonConnection = Python Connect();
// NOTE: a,d,x,z must be declared before Execute()
// as this is the location the results will be written.
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = PythonConnection << Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
	]\"
);
Show( v, m, ml, x, z, a, d );

```

#### Ejemplo 2

```jsl

PythonConnection = Python Connect();
x1 = 0;
x2 = 0;
y1 = 0;
y2 = 0;
z1 = 0;
z2 = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
		]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Get

**Sintaxis:** y = obj &lt;&lt; Get( name )

**Descripción:** Devuelve datos de Python, donde el argumento name puede representar cualquiera de los tipos de datos de Python siguientes (numérico | cadena | matriz | lista | diccionario | tabla de datos | data frame | fecha y hora | numpy.datetime64).

**JMP Versión agregada:** 14

#### Datetime

```jsl


PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

#### Ejemplo 1

```jsl


PythonConnection = Python Connect();
x1 = [1, 2, 3];
PythonConnection << Set( x1 );
x2 = PythonConnection << Get( x1 );
Show( x1, x2 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt1 );
dt2 = PythonConnection << Get( dt1 );
dt2 << New Data View;
Close( dt1 );

```

#### numpy.datetime64

```jsl


PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

### Get Version

**Sintaxis:** version = obj &lt;&lt; Get Version

**Descripción:** Devuelve el número de versión de Python empleado en la conexión actual.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**Sintaxis:** obj &lt;&lt; Install Packages( packages )

**Descripción:** Esto envuelve la instalación de paquetes Python en el directorio de paquetes del sitio JMP. Para operaciones que van más allá de la mera instalación de paquetes, consulte Python Create JPIP CMD() para crear un script que envuelva el pip de la línea de comandos en un directorio seleccionado con Directory Pick(). Alternativamente, para ejecutar la instalación desde una ventana de script de Python de JMP, consulta jmputils.jpip en la categoría Python aquí en el índice de scripts.

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

#### Ejemplo 2

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

#### Ejemplo 3

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**Sintaxis:** x = obj &lt;&lt; Is Connected

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y siempre devuelve 1.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**Sintaxis:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de Python usando las reglas de denominación de variables de Python.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**Sintaxis:** PythonConnection &lt;&lt; Reset

**Descripción:** Reset the shared Python environment.

**JMP Versión agregada:** 19

```jsl

PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**Sintaxis:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**Descripción:** Envía datos a Python. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos | fecha).

**JMP Versión agregada:** 14

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

#### Ejemplo 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**Sintaxis:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**Descripción:** Envía un archivo de datos a Python. El argumento filename es una cadena de caracteres que especifica el nombre de la ruta del archivo que se debe enviar a Python.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**Sintaxis:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**Descripción:** Envía datos a Python. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos | fecha).

**JMP Versión agregada:** 14

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

#### Ejemplo 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**Sintaxis:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Descripción:** Envía instrucciones a Python. Las instrucciones pueden adoptar la forma de un valor de cadena de caracteres o de una lista de valores de cadena de caracteres. El parámetro opcional echo() es True de forma predeterminada. El parámetro echo controla el eco de la fuente de Python en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
a = 200;
]\"
);
getStr = PythonConnection << Get( str );
getNum = PythonConnection << Get( a );
Show( getStr, getNum );

```

### Submit File

**Sintaxis:** obj &lt;&lt; Submit File( path )

**Descripción:** Envía instrucciones a Python empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

