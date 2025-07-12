# R Connection



## Constructores asociados

### R Connect

**Sintaxis:** RConnection = R Connect()

**Descripción:** Devuelve un objeto con conexión a R que admite scripts.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## Mensajes del elemento

### Control

**Sintaxis:** obj << Control( Echo( Boolean ) )

**Descripción:** Cambia las opciones de control para R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**Sintaxis:** obj << Disconnect

**Descripción:** En desuso en JMP 19 y no tiene ningún efecto.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**Sintaxis:** list = obj << Execute( { list of Inputs }, { list of Outputs }, statements )

**Descripción:** Envía una lista de entradas, ejecuta unas instrucciones y devuelve una lista de salidas.

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
a = "abcdef";
d = 3.1415927;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = RConnection << Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### Get

**Sintaxis:** y = obj << Get( name )

**Descripción:** Devuelve datos de R, donde el argumento name representa cualquiera de los siguientes tipos de datos de R (numérico | cadena de caracteres | matriz | lista | data frame).

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x1 = [1, 2, 3];
RConnection << Set( x1 );
x2 = RConnection << Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
RConnection << Set( dt1 );
dt2 = RConnection << Get( dt1 );
Close( dt1, No Save );

```

### Get Graphics

**Sintaxis:** R graphics = obj << Get Graphics( format )

**Descripción:** EN DESUSO en JMP 19 y no tiene ningún efecto. En su lugar, defina un nombre de archivo como png ("r_plot.png") para el dispositivo y, a continuación, abra el archivo para recuperar la imagen. Esta opción se eliminará de JMP 20. El código siguiente muestra una solución alternativa.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
RConnection << Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Get Version

**Sintaxis:** version = obj << Get Version

**Descripción:** Devuelve el número de versión de R empleado en la conexión actual.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**Sintaxis:** x = obj << Is Connected

**Descripción:** Devuelve 1 si hay una conexión a R activa y 0 en caso contrario.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**Sintaxis:** Rname = JMP Name To R Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de R usando las reglas de denominación de variables de R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**Sintaxis:** y = obj << Send( name, <R Name( name )> )

**Descripción:** Envía datos a R. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos).

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Send( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Send File

**Sintaxis:** y = obj << Send File( filename, <R Name( name )> )

**Descripción:** Envía un archivo de datos a R. El argumento filename es una cadena de caracteres que especifica el nombre de la ruta del archivo que se debe enviar a R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**Sintaxis:** y = obj << Set( name, <R Name( name )> )

**Descripción:** Envía datos a R. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos).

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Set( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Submit

**Sintaxis:** obj << Submit( statements )

**Descripción:** Envía instrucciones a R. Las instrucciones pueden estar en forma de cadena de caracteres o de lista de cadenas de caracteres.

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
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
RConnection << Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Submit File

**Sintaxis:** obj << Submit File( path )

**Descripción:** Envía instrucciones a R empleando un archivo especificado en el argumento path.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

