# R



### R Connect

**Sintaxis:** RConnection = R Connect()

**Descripción:** Devuelve un objeto conexión a R que admite scripts.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
RConnection = R Connect();

```

### R Control

**Sintaxis:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Descripción:** Cambia las opciones de control para R

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Sintaxis:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Descripción:** Envía una lista de entradas, ejecuta unas instrucciones y devuelve una lista de salidas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### R Get

**Sintaxis:** y = R Get( name )

**Descripción:** Devuelve datos de R, donde el argumento name representa cualquiera de los siguientes tipos de datos de R (numérico | cadena de caracteres | matriz | lista | data frame).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();
x1 = [1, 2, 3];
R Send( x1 );
x2 = R Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
R Send( dt1 );
dt2 = R Get( dt1 );
Close( dt1, No Save );

```

### R Get Graphics

**Sintaxis:** R graphics = R Get Graphics( format )

**Descripción:** EN DESUSO en JMP 19 y no tiene ningún efecto. En su lugar, defina un nombre de archivo como png("r_plot.png") para el dispositivo y, a continuación, abra el archivo para recuperar la imagen. Esta opción se eliminará en JMP 20. El código siguiente muestra una solución alternativa.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
R Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Get Version

**Sintaxis:** version = R Get Version()

**Descripción:** Devuelve el número de versión de R que se utiliza con las interfaces R de JMP.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
R Init();
version = R Get Version();
Show( version );

```

### R Init

**Sintaxis:** R Init()

**Descripción:** Inicializa las interfaces de R.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();

```

### R Is Connected

**Sintaxis:** connected = R Is Connected()

**Descripción:** Devuelve 1 si hay una conexión a R activa y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Sintaxis:** R name = R JMP Name To R Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de R usando las reglas de denominación de variables de R.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R name = R JMP Name to R Name( a b c );

```

### R Send

**Sintaxis:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Descripción:** Envía datos a R, donde el argumento name puede representar cualquiera de los tipos de datos de JMP (numérico | cadena | matriz | lista | tabla de datos | columna de tabla de datos) siguientes.

**JMP Versión agregada:** Antes de la versión 14

**Columna**

```jsl

Names Default To Here( 1 );
R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

**Tabla de datos**

```jsl

Names Default To Here( 1 );
R Init();
x = [1, 2, 3];
R Send( x, "x1" );
rx = R Get( "x1" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt );
Close( dt );
R Submit( "dt" );

```

### R Send File

**Sintaxis:** R Send File( filename, &lt;R Name( name )&gt; )

**Descripción:** Envía un archivo de datos a R. El argumento filename es una cadena de caracteres que especifica el nombre de la ruta del archivo que se debe enviar a R.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Sintaxis:** R Submit( statements )

**Descripción:** Envía instrucciones a R. Las instrucciones pueden estar en forma de cadena de caracteres o de lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );

R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
R Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Submit File

**Sintaxis:** R Submit File( path )

**Descripción:** Envía instrucciones a R empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );

R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Sintaxis:** R Term()

**Descripción:** En desuso en JMP 19 y no tiene ningún efecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
R Init();
R Term();

```

