# Python



### Python Connect

**Sintaxis:** PythonConnection = Python Connect ()

**Descripción:** Devuelve un objeto de conexión a Python que admite scripts.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Sintaxis:** Python Create JPIP CMD()

**Descripción:** Activa la creación de un script que envuelve la línea de comandos jpip para el comando pip de Python. Un cuadro de diálogo de selección de directorios le preguntará la ubicación del directorio para guardar el script generado. Este script ofrece entonces todas las capacidades de pip, a la vez que determina correctamente las variables de entorno necesarias para el entorno Python aislado de JMP.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Sintaxis:** Python Execute( { list of Inputs }, { list of Outputs }, statements < , echo( 1 | 0 ) > )

**Descripción:** Envía una lista de entradas, ejecuta sentencias y devuelve una lista de salidas. El parámetro opcional echo() es True de forma predeterminada. El parámetro echo controla el eco de la fuente Python en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );

a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
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

**Ejemplo 2**

```js

Names Default To Here( 1 );

x1 = 1;
x2 = 2;
y1 = 1;
y2 = 2;
z1 = 1;
z2 = 2;
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

### Python Get

**Sintaxis:** y = Python Get( name )

**Descripción:** Devuelve datos de Python, donde el argumento name puede representar cualquiera de los tipos de datos de Python (numérico | cadena | matriz | lista | diccionario | tabla de datos | data frame | fecha y hora | numpy.datetime64) siguientes.

**JMP Versión agregada:** 14

**Datetime**

```js

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Ejemplo 1**

```js

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**numpy.datetime64**

```js

Names Default To Here( 1 );

Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

### Python Get Version

**Sintaxis:** version = Python Get Version()

**Descripción:** Devuelve el número de versión de Python que se utiliza con las interfaces Python de JMP.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**Sintaxis:** PythonConnection = Python Init( )

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y equivale a Python Connect().

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );

PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Sintaxis:** Python Install Packages( packages )

**Descripción:** Esto envuelve la instalación de paquetes Python en el directorio de paquetes del sitio JMP. Para operaciones que van más allá de la mera instalación de paquetes, consulte Python Create JPIP CMD() para crear un script que envuelva el pip de la línea de comandos en un directorio seleccionado con Directory Pick(). Alternativamente, para ejecutar la instalación desde una ventana de script de JMP Python consulta jmputils.jpip en la categoría Python aquí en el índice de scripts.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Sintaxis:** connected = Python Is Connected()

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y siempre devuelve 1.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Sintaxis:** Python name = Python JMP Name To Python Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de Python usando las reglas de denominación de variables de Python.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Sintaxis:** Python Reset()

**Descripción:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Sintaxis:** Python Send( name, <Python Name( name ) | "as_name" > )

**Descripción:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Versión agregada:** 14

**Columna**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**Fecha**

```js

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Tabla de datos**

```js

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

### Python Send File

**Sintaxis:** Python Send File( filename, <Python Name( name )> )

**Descripción:** Envía un archivo de datos a Python. El argumento filename es una cadena de caracteres que especifica el nombre de la ruta del archivo que se debe enviar a Python.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Sintaxis:** Python Submit( statements < , echo( 1 | 0 ) > )

**Descripción:** Envía instrucciones a Python. Las instrucciones pueden adoptar la forma de un valor de cadena de caracteres o de una lista de valores de cadena de caracteres. El parámetro opcional echo() es 1 de forma predeterminada. El parámetro echo controla el eco de la fuente Python en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Sintaxis:** Python Submit File( path )

**Descripción:** Envía instrucciones a Python empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**Sintaxis:** Python Term()

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y no tiene ningún efecto.

**JMP Versión agregada:** 14

