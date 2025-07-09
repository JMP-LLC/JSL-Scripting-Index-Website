# File



### Close

**Sintaxis:** Close( <dataTableRef|name>, <NoSave|Save( "path" )> )

**Descripción:** Cierra la tabla de datos a la que hace referencia el primer argumento, que es la tabla de datos actual del proyecto actual de forma predeterminada (o de ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto al ejecutar el script en un proyecto.



El segundo argumento se utiliza para guardar la tabla de datos. Utilice una extensión de archivo adecuada en la ruta para guardar la tabla de datos con un formato distinto a JMP. Si se especifica NoSave, se omite el mensaje que pide que se guarden o se descarten los cambios.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Sintaxis:** Close All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private>, <NoSave|Save> )

**Descripción:** Busca todos los recursos abiertos de un tipo específico: tablas de datos, diarios o informes.



Solo se incluirán las ventanas del proyecto actual (o de ningún proyecto si no se ejecuta el script en un proyecto). Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Convert File Path

**Sintaxis:** path = Convert File Path( path, <absolute|relative>, <posix|windows>, <base( path )>, <search> )

**Descripción:** Devuelve la ruta convertida.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",
	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )
		 || "\!N"
	)
);

```

### Copy Directory

**Sintaxis:** rc = Copy Directory( from, to, <recursive(0|1)> )

**Descripción:** Copia archivos de un directorio a otro y, opcionalmente, copia los subdirectorios. El nombre del directorio se creará en la ruta de acceso de to y no puede formar parte de ella. Devuelve 1 si se ha copiado el directorio o 0 si no se ha podido copiar el directorio. Lanza un error si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Sintaxis:** rc = Copy File( from, to )

**Descripción:** Copia un archivo desde el archivo original en otro nuevo con el mismo nombre o un nombre distinto. Se debe especificar el nombre de archivo y la ruta de acceso completa del archivo de destino. Devuelve 1 si se ha copiado el archivo o 0 si no se ha podido copiar. Lanza un error si la ruta de acceso no es válida o no existe. No se puede copiar un archivo cuando las rutas from o to no son válidas o si el archivo to ya existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**Sintaxis:** rc = Create Directory( path )

**Descripción:** Crea un directorio. Devuelve 1 si se ha creado el directorio. Devuelve 0 si el directorio ya existe o si JMP no ha podido crear el directorio.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Sintaxis:** Create Excel Workbook(<Workbook Name>, <{List of open tables}>, <Optional list of worksheet names> )

**Descripción:** Genera una hoja de Excel a partir de las tablas de datos JMP abiertas

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{"Big Class", "Abrasion"},
	{"Big", "Abrasive"}
);

```

### Creation Date

**Sintaxis:** date = Creation Date( path )

**Descripción:** Devuelve la fecha de creación de un archivo o directorio. Lanza un error cuando la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**Sintaxis:** rc = Delete Directory( path, <Allow Undo( boolean )> )

**Descripción:** Elimina un directorio y todos sus archivos y subdirectorios. Devuelve 1 si se ha eliminado el directorio. Devuelve 0 si no se ha podido eliminar el directorio o si la ruta de acceso no es válida.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Sintaxis:** rc = Delete File( path, <Allow Undo( boolean )> )

**Descripción:** Elimina un archivo. Devuelve 1 si se ha eliminado el archivo. Devuelve 0 si no se ha podido eliminar el archivo. Lanza un error cuando la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**Sintaxis:** rc = Directory Exists( path )

**Descripción:** Determina si existe el directorio. Devuelve 1 si existe la ruta de acceso. Devuelve 0 si la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### File Exists

**Sintaxis:** rc = File Exists( path )

**Descripción:** Determina si existe el archivo. Devuelve 1 si existe la ruta de acceso al archivo. Devuelve 0 si la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Sintaxis:** size = File Size( path )

**Descripción:** Devuelve el tamaño del archivo en la ruta especificada. Devuelve un valor faltante cuando la ruta al archivo no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Sintaxis:** y = Files In Directory( "path", <recursive(0|1)>, <include hidden(0|1)> )

**Descripción:** Devuelve la lista de nombres de archivo de un directorio especificado por path. Si no se especifica el argumento Recursive, se incluyen los nombres de directorio en la lista.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Files In Directory( "$HOME" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Find All

**Sintaxis:** Find All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private> )

**Descripción:** Busca todos los recursos abiertos de un tipo específico: tablas de datos, diarios o informes.



Solo se incluirán las ventanas del proyecto actual (o de ningún proyecto si no se ejecuta el script en un proyecto). Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### Get Default Directory

**Sintaxis:** y = Get Default Directory()

**Descripción:** Devuelve el directorio predeterminado de JMP, que se utiliza como base para determinar rutas relativas subsiguientes. Esta ruta es el directorio que contiene el script que se está ejecutando en ese momento si se guarda el script.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Excel Worksheets

**Sintaxis:** list = Get Excel Worksheets("filepath")

**Descripción:** Devuelve una lista de hojas dentro de un libro de Excel

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get File Search Path

**Sintaxis:** y = Get File Search Path()

**Descripción:** Devuelve la lista actual de directorios donde buscar para abrir archivos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Get File Search Path();

```

### Get Path Variable

**Sintaxis:** value = Get Path Variable( name )

**Descripción:** Devuelve el valor de una variable de ruta, que es un nombre como SAMPLE_DATA, que se sustituye cuando se encuentra en nombres de rutas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

**Listado**

```js

Names Default To Here( 1 );
// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME",
"USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS",
"SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );
path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows, {path},
					path = tbl[String Col Box( 2 )] << Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),
								tbl[String Col Box( 2 )] << Get( row )
							),
							"\!N"
						)
					)
				)
			)
		),
		window:tbl = Table Box(
			String Col Box( "Variable", path vars ),
			String Col Box( "Path",
				Transform Each( {var}, path vars, Get Path Variable( var ) )
			),
			<<Set Selectable Rows
		)
	)
);

```

### Google Sheet Export

**Sintaxis:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Descripción:** Exporta una tabla de datos a una nueva hoja de cálculo de Google o una nueva hoja dentro de una hoja de cálculo de Google existente.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export(
	dt,
	Email( email ),
	New Spreadsheet( "JSL Example" ),
	Sheet Name( "Example 1" )
);

```

### Google Sheet Import

**Sintaxis:** Google Sheet Import(Email(address), Spreadsheet(url|id), <Sheets("sheetName1", ... "sheetNameN")>, <Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))>)

**Descripción:** Abre un archivo Google Sheet.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
spreadsheet =
"https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
Google Sheet Import(
	Email( email ),
	Spreadsheet( spreadsheet ),
	Sheets( "Sheet1", "Sheet2" ),
	Sheet Settings(
		Has Column Headers( 0 ),
		Data Starts on Row( 1 ),
		Cell Range( "A1:C2" ),
		Import Cell Colors( 0 ),
		Suppress Empty Columns( 1 )
	)
);

```

### Is Directory

**Sintaxis:** rc = Is Directory( path )

**Descripción:** Determina si la ruta especificada es un directorio. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Sintaxis:** rc = Is Directory Writable( path )

**Descripción:** Determina si la ruta de directorio especificada permite la escritura. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**Sintaxis:** rc = Is File( path )

**Descripción:** Determina si la ruta especificada es un archivo. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Sintaxis:** rc = Is File Writable( path )

**Descripción:** Determina si la ruta de archivo especificada permite la escritura. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**Sintaxis:** l = JSON Literal( string )

**Descripción:** Devuelve un booleano JSON válido o un valor constante nulo dependiendo de la especificación del parámetro.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );

myJSON =
"{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";
parsed = Parse JSON( myJSON );
x = parsed["myBool"];
Show( x );
If( x == JSON Literal( true ),
	Show( "Worked" ),
	Show( "Didn't work" )
);

```

### JSON To Data Table

**Sintaxis:** dt = JSON To Data Table( jsonstring, <Invisible( boolean ) | Private( boolean )>, <Guess(Stack(Boolean)|"Tall"|"Wide")>, <JSON Settings(...)> )

**Descripción:** Convertir texto JSON en una tabla de datos de JMP

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Sintaxis:** l = JSON To List( jsonstring )

**Descripción:** Convierte el texto JSON en una lista JSL representando la estructura especificada por los datos JSON.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Last Modification Date

**Sintaxis:** date = Last Modification Date( path )

**Descripción:** Devuelve la fecha de última modificación de un archivo o directorio. Lanza un error cuando la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**Sintaxis:** text = Load Text File( path, <Charset("best guess", <force("throw" | "alert" | "silent")>)>, <LineSeparator("\!N")>, <XMLParse>|<SASODSXML>|<JSON>|<BLOB( <readOffsetFromBegin(0)>|<readOffsetFromEnd(42)>, <readLength(2147483647)>, <base64Compressed( 1 /* 0: ascii~hex */)> )> )

**Descripción:** Lee un archivo de texto completo y lo coloca en una variable de JSL. Load Text File() solicita un nombre de archivo. Load Text File( path ) devuelve una cadena de caracteres. La opción XMLParse convierte XML en un árbol de expresiones. SASODSXML analiza el archivo como XML predeterminado de ODS SAS. La opción [{JSON}] convierte JSON en un árbol de expresiones. El argumento BLOB devuelve datos binarios en una variable BLOB de JSL. Los parámetros opcionales con nombre para BLOB permiten leer una subcadena de caracteres del archivo.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
ex = Load Text File(
	Get Path Variable( "sample_import_data" ) || "/animals.txt"
/*, Charset("ascii")*/
/*, LineSeparator("\!r\!n")*/
/*, BLOB*/
);
Word( 4, ex, " \!t\!n\!r" );

```

### Move Directory

**Sintaxis:** rc = Move Directory( from, to )

**Descripción:** Mueve un directorio de un lugar a otro. Devuelve 1 si se ha movido el directorio. Devuelve 0 si no se ha podido mover el directorio. Lanza un error si la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/subB" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
Create Directory( "$TEMP/subB" );
rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subB" );
rc4 = Delete Directory( "$TEMP/subB" );
rc5 = Directory Exists( "$TEMP/subB" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Sintaxis:** rc = Move File( from, to )

**Descripción:** Mueve un archivo de un lugar a otro. Devuelve 1 si se ha movido el archivo. Devuelve 0 si no se ha podido mover el archivo. Lanza un error cuando la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**Sintaxis:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Descripción:** Devuelve una referencia a una tabla de datos u otro archivo JMP o un objeto creado a partir de un archivo. Si no se especifica ninguna ruta, aparece el cuadro de diálogo Abrir. Si se especifica una ruta de carpetas, se abre el explorador de archivos del sistema y no se devuelve ningún objeto. Consulte la referencia de sintaxis para obtener una descripción completa de las opciones disponibles.

**JMP Versión agregada:** Antes de la versión 14

**Add-In**

```js

Names Default To Here( 1 );
/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Excel**

```js

Names Default To Here( 1 );
/* Excel files imported into a data table:
   Open( excelFilePath,
     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,
     <Use for all sheets(0|1)>,
     <Concatenate Worksheets(0|1)>,
     <Create Concatenation Column(0|1)>,
     <Worksheet Settings( 0|1,
       Has Column Headers(0|1),
       Number of Rows in Headers(n),
       Headers Start on Row(n),
       Data Starts on Row(n),
       Data Starts on Column(n),
       Data Ends on Row(n),
       Data Ends on Column(n),
       Replicated Spanned Rows(0|1),
       Suppress Hidden Rows(0|1),
       Suppress Hidden Columns(0|1),
       Treat as Hierarchy(0|1)
     )>,
     <Invisible | Private>
   )
*/

/* Using the Excel Wizard dialog:
   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  
*/

dt = Open(
	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",
	Worksheets( "Ungrouped Team Results" ),
	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) )
);

```

**Folder**

```js

Names Default To Here( 1 );
/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Imagen**

```js

Names Default To Here( 1 );
/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**Otro**

```js

Names Default To Here( 1 );
/* Other options:
   SAS File imported as a data table:
   Open( sasFilePath,
     <Invisible | Private>,
     <Use Labels for Var Names(0|1)>,
     <Password( "password" )>
   )
   
   SAS Transport File imported as a data table, members are separate tables within the larger file:
   Open( sasTransportFilePath,
     <Use Labels for Var Names(0|1)>,
     <Members({"Table1", "Table2"})>
   )
   
   HTML file imported as a data table:
   Open( htmlFilePath,
     <Invisible | Private>,
     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>
   )
   
   Get column names as a list for a JMP Data Table without opening the table:
   Open( jmpDataTableFilePath, 
     "Column Names Only"
   )
   
   esriShapeFile opened for use as a map shape data table:
   Open( esriShapeFilePath,
     <Invisible | Private>,
     Columns( Shape=numeric(n),
     Part=numeric(n),
     X=numeric(n),
     Y=numeric(n) ),
              Polygon Import Options(Simplification Factor(f), Geodesic(g))
   )
*/
//SAS Example:
dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) )
);

```

**PDF**

```js

Names Default To Here( 1 );
/* PDF file imported as one or multiple data tables
open(pdfFilePath,
    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |
    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |
    PDF Text(<Pages(n, ...)>, <sort>) |
    PDF Wizard
);*/
dt = Open( "$SAMPLE_DATA\big class.jmp" );
w = New Window( "test", Data Table Box( dt ) );
w << save picture( "$DOCUMENTS\test.pdf", pdf );
pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) )
);

```

**Tabla de datos**

```js

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

**Texto**

```js

Names Default To Here( 1 );
/* Text files imported into a data table:
   Open( textFilePath,
     <Invisible | Private>,
     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"
     <Number of Columns(n)>,
     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column
     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,
     <EOF Other ("char")>,
     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,
     <EOL Other ("char")>,
     <Strip Quotes|Strip Enclosing Quotes (0|1)>,
     <Labels|Table Contains Column Headers (0|1)>,
     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".
     Treat Empty Columns as Numeric(0|1)
     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.
     <Column Names Start|Column Names are on line (n)>,
     <Data Starts|Data starts on line (n)>,
     <Lines to Read>, // a number
     <Use Apostrophe as Quotation Mark>,
     <CompressNumericColumns(0|1)>,
     <CompressCharacterColumns(0|1)>,
     <CompressAllowListCheck(0|1)>
   )
*/
dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Parse JSON

**Sintaxis:** l = Parse JSON( jsonstring )

**Descripción:** Convierte el texto JSON en una lista JSL o un arreglo asociativo que representan la estructura especificada por los datos JSON.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Pick Directory

**Sintaxis:** path = Pick Directory( <prompt>, <path>, <Show Files( boolean )> )

**Descripción:** Muestra al usuario una ventana Abrir directorio y devuelve el nombre de la ruta del directorio seleccionado. La cadena de caracteres opcional prompt se muestra en la parte superior de la ventana. Show Files puede ser cualquiera de los tres argumentos, y utiliza un argumento booleano. 1 muestra los archivos en la ventana Seleccionar directorio y 0 no los muestra. El valor predeterminado es 0. La cadena de caracteres path especifica el directorio que muestra inicialmente la ventana Seleccionar directorio. Si se utiliza la cadena de caracteres path, debe ir a continuación de la cadena de caracteres prompt, pero Show Files puede aparecer entre ellas.

**JMP Versión agregada:** Antes de la versión 14

**Show Files**

```js

Names Default To Here( 1 );
Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**Simple**

```js

Names Default To Here( 1 );
Pick Directory( "Select a directory" );

```

### Pick File

**Sintaxis:** path = Pick File( <prompt>, <initial directory>, <filterList>, <first filter>, <saveFlag=0|1>, <default file>, <multiple> )

**Descripción:** Aparece una ventana Abrir que devuelve el nombre de la ruta del archivo seleccionado. El argumento filterList es una lista de cadenas de caracteres con la estructura: "Etiqueta|sufijo1;sufijo2;...". El argumento first filter especifica qué filtro de archivos se debe mostrar inicialmente. El quinto argumento indica si la ventana debe funcionar como ventana para guardar (saveFlag = 1) o para abrir (saveFlag = 0). El argumento default file especifica el archivo seleccionado inicialmente. El argumento multiple permite seleccionar varios archivos siempre que saveFlag sea 0.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Pick File(
	"Select JMP File",
	"$DOCUMENTS",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"newJmpFile.jmp"
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Files = Pick File(
	"Select JMP File",
	"$SAMPLE_DATA",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"",
	"multiple"
);
For( i = 1, i <= N Items( Files ), i++,
	Try( Open( Files[i] ) )
);

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
filename = Pick File(
	"Save As Text",
	"$DOCUMENTS",
	{"Text File|txt"},
	1,
	1, // Save Flag
	"export.txt"
);
If( Is Missing( filename ),
	Print( "Canceled" ),
	Save Text File( filename, "The quick brown fox" )
);

```

### Rename Directory

**Sintaxis:** rc = Rename Directory( old, new )

**Descripción:** Cambia el nombre de un directorio sin moverlo ni copiarlo. El nuevo nombre NO incluye ninguna ruta de acceso. Devuelve 1 si se ha cambiado el nombre del directorio. Devuelve 0 si no se ha podido cambiar el nombre del directorio o si la ruta de acceso no es válida.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Sintaxis:** rc = Rename File( old, new )

**Descripción:** Cambia el nombre de un archivo sin moverlo ni copiarlo. El nuevo nombre NO incluye ninguna ruta de acceso. Devuelve 1 si se ha cambiado el nombre del archivo. Devuelve 0 si no se ha podido cambiar el nombre del archivo. Lanza un error cuando la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**Sintaxis:** f = Save Text File( path, text|blob, <mode("replace"|"append")> )

**Descripción:** Crea un archivo de texto con el nombre del archivo especificado en el argumento path y los contenidos indicados en el argumento de cadena de caracteres text. Si se guarda correctamente, la función Save Text File() devuelve el nombre de la ruta del archivo creado.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**Sintaxis:** Set Default Directory( path )

**Descripción:** Establece el directorio predeterminado de JMP, que se utiliza como base para determinar rutas relativas subsiguientes.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set File Search Path

**Sintaxis:** Set File Search Path(path | {list of paths})

**Descripción:** Establece la lista de directorios actual para buscar archivos para abrirlos. "." significa el directorio actual.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Path Variable

**Sintaxis:** Set Path Variable( name, <value> )

**Descripción:** Establece una variable de ruta, que es un nombre como SAMPLE_DATA, que se sustituye cuando se encuentra en nombres de rutas.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**Sintaxis:** TripleSImport( <path to xml file> )

**Descripción:** Abre archivos Triple-S. El formato Triple-S comprende un archivo xml o sss y un archivo csv o un archivo dat/asc. Ambos archivos deben tener el mismo nombre con la extensión adecuada y deben estar en el mismo directorio. Especifique la ruta de acceso de xml o sss para importar los datos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

