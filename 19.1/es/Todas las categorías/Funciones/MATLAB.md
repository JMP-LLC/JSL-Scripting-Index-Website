# MATLAB



### Check MATLAB Dependencies

**Sintaxis:** Check MATLAB Dependencies()

**Descripción:** Comprueba si las dependencias de MATLAB están instaladas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**Sintaxis:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Descripción:** Instala las dependencias de MATLAB necesarias.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**Sintaxis:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**Descripción:** Devuelve un objeto con conexión a MATLAB que admite scripts.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**Sintaxis:** MATLAB Control( Echo(bool) )

**Descripción:** Cambia las opciones de control para MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**Sintaxis:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía una lista de entradas, ejecuta unas instrucciones y devuelve una lista de salidas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**Sintaxis:** y = MATLAB Get( name )

**Descripción:** Devuelve datos de MATLAB, donde el argumento name representa cualquiera de los siguientes tipos de datos de MATLAB (numérico | cadena de caracteres | matriz | lista | data frame).

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**Sintaxis:** MATLAB graphics = MATLAB Get Graphics( format )

**Descripción:** Devuelve el último objeto gráfico trazado en la ventana de visualización gráfica de MATLAB en un formato de gráficos especificado en el argumento format.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**Sintaxis:** version = MATLAB Get Version()

**Descripción:** Devuelve el número de versión de MATLAB que se está utilizando con las interfaces de MATLAB de JMP.

**JMP Versión agregada:** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**Sintaxis:** MATLAB Init(&lt;Echo(0|1)&gt;)

**Descripción:** Inicializa las interfaces de MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**Sintaxis:** connected = MATLAB Is Connected()

**Descripción:** Devuelve 1 si hay una conexión a MATLAB activa y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**Sintaxis:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de MATLAB usando las reglas de denominación de variables de MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**Sintaxis:** MATLAB Load( path )

**Descripción:** Carga variables en MATLAB desde un archivo .mat y devuelve las variables a un arreglo asociativo JSL.

**JMP Versión agregada:** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**Sintaxis:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**Descripción:** Envía datos a MATLAB. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos).

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**Sintaxis:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**Descripción:** Envía un archivo de datos a MATLAB, donde el argumento filename es una cadena que especifica la ruta de acceso al archivo que se va a enviar a MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**Sintaxis:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía instrucciones a MATLAB. Las instrucciones pueden tener la forma de un valor de cadena o una lista de valores de cadena.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**Sintaxis:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía instrucciones a MATLAB empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**Sintaxis:** MATLAB Term()

**Descripción:** Cierra las interfaces de MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**Sintaxis:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Descripción:** Actualiza las dependencias de MATLAB necesarias.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

