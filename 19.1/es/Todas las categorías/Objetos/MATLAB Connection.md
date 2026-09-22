# MATLAB Connection



## Mensajes del elemento

### Control

**Sintaxis:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**Descripción:** Controla la ejecución de MATLAB.

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**Sintaxis:** obj &lt;&lt; Disconnect

**Descripción:** Cierra las interfaces de MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**Sintaxis:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía una lista de entradas, ejecuta sentencias y devuelve una lista de salidas. El parámetro opcional echo() es True de forma predeterminada. El parámetro echo controla el eco de la fuente MATLAB en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**Sintaxis:** y = obj &lt;&lt; Get( name )

**Descripción:** Devuelve datos de MATLAB, donde el argumento name representa cualquiera de los siguientes tipos de datos de MATLAB (numérico | cadena de caracteres | matriz | lista | data frame).

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**Sintaxis:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**Descripción:** Devuelve el último objeto gráfico trazado en la ventana de visualización gráfica de MATLAB en un formato de gráficos especificado en el argumento format.

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**Sintaxis:** version = obj &lt;&lt; Get Version

**Descripción:** Devuelve el número de versión de MATLAB empleado en la conexión actual.

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**Sintaxis:** x = obj &lt;&lt; Is Connected

**Descripción:** Devuelve 1 si hay una conexión a MATLAB activa y 0 en caso contrario.

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**Sintaxis:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de MATLAB usando las reglas de denominación de variables de MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**Sintaxis:** obj &lt;&lt; Load( path )

**Descripción:** Carga un archivo ".mat" en MATLAB y devuelve las variables a un arreglo asociativo de JSL.

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**Sintaxis:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**Descripción:** Envía datos a MATLAB. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**Sintaxis:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**Descripción:** Envía un archivo de datos a MATLAB, donde el argumento filename es una cadena que especifica la ruta de acceso al archivo que se va a enviar a MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**Sintaxis:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**Descripción:** Envía datos a MATLAB. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**Sintaxis:** obj &lt;&lt; Submit( statements )

**Descripción:** Envía instrucciones a MATLAB. Las instrucciones pueden estar en forma de cadena de caracteres o de lista de cadenas de caracteres.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**Sintaxis:** obj &lt;&lt; Submit File( path )

**Descripción:** Envía instrucciones a MATLAB empleando un archivo especificado en el argumento path.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

