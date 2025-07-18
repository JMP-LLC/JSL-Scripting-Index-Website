# SAS Integration



## Constructores asociados

### Check SAS Dependencies

**Sintaxis:** Check SAS Dependencies()

**Descripción:** Comprueba el estado de las dependencias de integración de SAS. Devuelve 1 si se realiza correctamente.

**JMP Versión agregada:** 19

```jsl


If( !Check SAS Dependencies(),
	Install SAS Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### Current SAS Connection

**Sintaxis:** sas = Current SAS Connection()

**Descripción:** Devuelve la conexión activa del servidor SAS, si existe, como un objeto que admite scripts.

```jsl

SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**Sintaxis:** array = Current SAS Connections()

**JMP Versión agregada:** 19

```jsl

array = Current SAS Connections();
array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**Sintaxis:** Install SAS Dependencies()

**Descripción:** Instala las dependencias necesarias para la integración de SAS. Devuelve 1 si la instalación se realiza correctamente.

**JMP Versión agregada:** 19

```jsl


If( !Check SAS Dependencies(),
	Install SAS Dependencies(),
	Print( "Dependencies are installed" )
);

```

### SAS Connect

**Sintaxis:** SAS Connect(&lt;( data_connector_or_id )&gt;, &lt;Prompt( Always|Never|IfNeeded )&gt;)

**Descripción:** Abre una conexión SAS.

**JMP Versión agregada:** 19

#### Ejemplo 1

```jsl

SAS Connect( "my sas connection" );

```

#### Ejemplo 2

```jsl


iom_win = New Data Connector( Type( "SAS Local" ) );
SAS Connect( iom_win );
sas = Current SAS Connection();
librefs = sas << Get Librefs();
For( i = 1, i <= N Items( librefs ), i++,
	tables = sas << Get Data Sets( librefs[i] );
	Write( "\!n\!nLibref:" || librefs[i] );
	Write( "\!nTables:" || Char( tables ) );
);
sas << Disconnect();

```

#### Ejemplo 3

```jsl

SAS Connect(
	New Data Connector(
		ID( "com.jmp.sas_remote" ),
		Port( 8591 ),
		User( "jmpuser" ),
		Host Name( "sashost.com" )
	),
	Prompt( If Needed )
);

```

#### Ejemplo 4

```jsl

SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**Sintaxis:** Update SAS Dependencies()

**Descripción:** Actualiza las dependencias necesarias para la integración de SAS. Devuelve 1 si la actualización se realiza correctamente.

**JMP Versión agregada:** 19

```jsl


If( Check SAS Dependencies(),
	Update SAS Dependencies(),
	Print( "Dependencies are not installed" )
);

```

## SAS Results

### Mensajes del elemento

#### Get Log

**Sintaxis:** obj &lt;&lt; Get Log

**Descripción:** Devuelve una cadena de caracteres que incluye el contenido de la ventana de registro de la conexión activa del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Results;
log = result << Get Log();
Show( log );

```

#### Get Output

**Sintaxis:** obj &lt;&lt; Get Output

**Descripción:** Devuelve una cadena de caracteres que incluye el contenido de la ventana de registro de la conexión activa del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Results;
out = result << Get Output();
Show( out );

```

#### Get Output Datasets

**Sintaxis:** obj &lt;&lt; Get Output Datasets

**Descripción:** Devuelve una cadena de caracteres que incluye el contenido de la ventana de registro de la conexión activa del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit(
	"proc corr data=sashelp.class
    outp=pearson outs=spearman;
    var height weight;
    run;",
	NoOutputWindow( True )
);
result = sas << Get Results;
data = result << Get Output Datasets;
Show( data );

```

## SAS Server

### Mensajes del elemento

#### Connect

**Sintaxis:** sas &lt;&lt; Connect( &lt;( data_connector_or_id )&gt;, &lt;Prompt( Always|Never|IfNeeded )&gt;)

**Descripción:** Intento de volver a conectar un objeto de conexión de servidor SAS que se ha desconectado.

**JMP Versión agregada:** 19

```jsl

SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();
sas << Connect();

```

#### Current CAS Connection

**Sintaxis:** result = sas &lt;&lt; Current CAS Connection()

**Descripción:** Obtiene la conexión al servidor CAS actual.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

sas = Current SAS Connection();
cas = sas << Current CAS Connection;
Show( cas );

```

**Ejemplo 2**

```jsl

sas = Current SAS Connection();
cas = sas << Current CAS Connection;
connected = cas << Is Connected();
Show( connected );

```

#### Data Set Exists

**Sintaxis:** result = sas &lt;&lt; Data Set Exists( libref, dsname )

**Descripción:** Devuelve 1 si existe un conjunto de datos de SAS.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP", "AIRLINE" );
Show( result );

```

**Ejemplo 2**

```jsl

sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP.AIRLINE" );
Show( result );

```

#### Disconnect

**Sintaxis:** obj &lt;&lt; Disconnect

**Descripción:** Desconecta esta conexión de servidor SAS.

**JMP Versión agregada:** 19

```jsl

SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();

```

#### Export Data

**Sintaxis:** y = sas &lt;&lt; Export Data( dt, libref, dataset, &lt;named_arguments&gt; );y = sas &lt;&lt; SAS Export Data( dt, libref.dataset, &lt;named_arguments&gt; )

**Descripción:** Exporta una tabla de datos de JMP como un conjunto de datos de SAS por la conexión activa a un servidor SAS. Algunos de los argumentos opcionales con nombre son Columns(list|col1,col2,...,coln), argumentos con valores de cadenas de caracteres Password, AlterPassword, ReadPassword y WritePassword y los argumentos con valores booleanos HonorExcludedRows, PreserveSASColumnNames, PreserveSASFormats, ReplaceExisting, ExistingAlterPassword y SaveJMPMetadata. Devuelve 1 si la exportación se ha realizado correctamente, 0 en caso contrario.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

#### Get Data Sets

**Sintaxis:** result = sas &lt;&lt; Get Data Sets( libref )

**Descripción:** Devuelve una lista de los conjuntos de datos definidos en una biblioteca SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Data Sets( "SASHELP" );
Show( result );

```

#### Get Host Name

**Sintaxis:** var = sas &lt;&lt; Get Host Name( )

**Descripción:** Obtiene el nombre de host del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Host Name();
Show( result );

```

#### Get Lib Refs

**Sintaxis:** result = sas &lt;&lt; Get Lib Refs()

**Descripción:** Devuelve una lista de los librefs SAS actualmente definidos desde la conexión del servidor SAS activo.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Lib Refs();
Show( result );

```

#### Get Log

**Sintaxis:** result = sas &lt;&lt; Get Log()

**Descripción:** Devuelve una cadena de caracteres que incluye el contenido de la ventana de registro de la conexión activa del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Log();
Show( result );

```

#### Get Macro Var

**Sintaxis:** var = sas &lt;&lt; GetMacroVar( "name" )

**Descripción:** Obtiene el valor de una variable macro SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Macro Var( "SYSVLONG" );
Show( result );

```

#### Get Macro Var Names

**Sintaxis:** var = sas &lt;&lt; GetMacroVarNames( )

**Descripción:** Obtiene una lista de variables macro SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Macro Var Names();
Show( result );

```

#### Get Option Names

**Sintaxis:** var = sas &lt;&lt; GetOptionNames( )

**Descripción:** Obtiene una lista de opciones SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Option Names();
Show( result );

```

#### Get Option Value

**Sintaxis:** var = sas &lt;&lt; Get Option Value( "name" )

**Descripción:** Obtiene el valor de una opción SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Option Value( "MEMLIB" );
Show( result );

```

#### Get Output

**Sintaxis:** result = sas &lt;&lt; Get Output()

**Descripción:** Devuelve una cadena de caracteres que contiene la salida del listado del último envío de código SAS a la conexión activa del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Output();
Show( result );

```

#### Get Results

**Sintaxis:** result = sas &lt;&lt; Get Results()

**Descripción:** Obtiene los resultados del último envío para este servidor.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Results();
Show( result );

```

#### Get Submit Status

**Sintaxis:** result = sas &lt;&lt; Get Submit Status()

**Descripción:** Obtiene el estado del último envío para este servidor.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Submit Status;
Show( result );

```

#### Get Var Info

**Sintaxis:** result = sas &lt;&lt; Get Var Info( libref, dataset );result = sas &lt;&lt; Get Var Info( libref.dataset )

**Descripción:** Obtiene información sobre las variables de un conjunto de datos de SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Var Info( "SASHELP", "CLASS" );
Show( result );

```

#### Get Var Names

**Sintaxis:** result = sas &lt;&lt; Get Var Names( libref, dataset );result = sas &lt;&lt; SAS Get Var Names( libref.dataset )

**Descripción:** Recupera los nombres de las variables incluidas en el conjunto de datos especificado desde la conexión activa del servidor SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Var Names( "SASHELP", "CLASS" );
Show( result );

```

#### Get Version

**Sintaxis:** ver = sas &lt;&lt; GetVersion( &lt; Long &gt; )

**Descripción:** Obtiene la versión de SAS.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Version;
Show( result );

```

#### Get Work Folder

**Sintaxis:** obj &lt;&lt; Get Work Folder

**Descripción:** Obtiene la carpeta de la librería WORK del servidor.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
result = sas << Get Work Folder;
Show( result );

```

#### Import Data

**Sintaxis:** dt = sas &lt;&lt; Import Data( libref, dataset, &lt;named_arguments&gt; );dt = sas &lt;&lt; Import Data( libref.dataset|path, &lt;named_arguments&gt; )

**Descripción:** Importa un conjunto de datos de SAS desde la conexión activa a un servidor SAS a una tabla de datos de JMP. Algunos de los argumentos opcionales con nombre son Sample(<named_arguments>), Columns(list|col1,col2,...,coln), argumentos con valores de cadena de caracteres Where y los argumentos con valores booleanos ConvertCustomFormats, Invisible, UseLabelsForVarNames y SQLTableVariable. Devuelve un objeto de tabla de datos de JMP.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
dt = sas << Import Data( "SASHELP.CLASS" );

```

#### List Output Data Sets

**Sintaxis:** sas &lt;&lt; List Output Data Sets(sas code)

**Descripción:** Enumera los conjuntos de datos de salida para el código de SAS especificado.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
datasets = sas << List Output Datasets(
	"\[
proc means data=sashelp.class;
    var age height weight;
run;
]\"
);
Show( datasets );

```

#### Name

**Sintaxis:** serverName = sas &lt;&lt; Name

**Descripción:** Devuelve el nombre del servidor.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
serverName = sas << Name;
Show( serverName );

```

#### Submit

**Sintaxis:** result = sas &lt;&lt; Submit( &lt;GetSASLog(&lt;True|False|OnError&gt;, &lt;OnSubmitComplete(script)&gt;, &lt;OpenOutputDatasets(&lt;All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN&gt;)&gt;, &lt;ODSFormat&gt;, &lt;ODS Style&gt;, &lt;Title&gt;, &lt;OpenODSResults&gt;, &lt;NoOutputWindow&gt;

**Descripción:** Envía el código SAS a la conexión de servidor SAS activa. Devuelve 1 si se realiza correctamente, 0 en caso contrario.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit(
	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",
	ODSStyle( "default" ),
	OpenODSResults( true ),
	OpenOutputDatasets( All )
);

```

#### Submit File

**Sintaxis:** result = sas &lt;&lt; Submit File( "filename.sas" )

**Descripción:** Envía un archivo que contiene código de SAS a la conexión activa del servidor SAS. Los argumentos opcionales con nombre son los mismos que los de Envío de SAS. Devuelve 1 si se realiza correctamente, 0 en caso contrario.

**JMP Versión agregada:** 19

```jsl

sas = Current SAS Connection();
sas << Submit File( "MySASProgram.sas" );

```

