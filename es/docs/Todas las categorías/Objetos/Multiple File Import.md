# Multiple File Import



## Constructores asociados

### Multiple File Import

**Sintaxis:** mfiObj = Multiple File Import();

**Descripción:** Crea un objeto de importación de varios archivos; el objeto acepta mensajes para establecer una carpeta, filtrar archivos e importar. Para abrir un cuadro de diálogo, utilice el mensaje "Crear ventana". Para importar inmediatamente, utilice el mensaje "Importar datos", que devolverá una lista de las tablas que se crearon.

```jsl

// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

## Mensajes del elemento

### Create Window

**Sintaxis:** obj &lt;&lt; Create Window

**Descripción:** Muestra una ventana con la configuración actual.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << set folder( "$sample_import_data" );
mfi << create window();

```

### Get Add File Date Column

**Sintaxis:** obj &lt;&lt; Get Add File Date Column

**Descripción:** Devuelve 1 si la tabla importada tiene una columna para el nombre del archivo desde el que se importó la fila.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );
mfi << Get Add File Date Column();

```

### Get Add File Name Column

**Sintaxis:** obj &lt;&lt; Get Add File Name Column

**Descripción:** Devuelve 1 si la tabla importada tiene una columna para el nombre del archivo desde el que se importó la fila.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );
mfi << Get Add File Name Column();

```

### Get Add File Size Column

**Sintaxis:** obj &lt;&lt; Get Add File Size Column

**Descripción:** Devuelve 1 si la tabla importada tendrá una columna para el tamaño del archivo desde el que se importó la fila.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );
mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**Sintaxis:** obj &lt;&lt; Get CSV Allow Numeric

**Descripción:** Devuelve 1 si las columnas numéricas se crearán a partir de datos numéricos aparentes.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**Sintaxis:** obj &lt;&lt; Get CSV EOF Comma

**Descripción:** Establézcalo en 1 para utilizar una coma para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**Sintaxis:** obj &lt;&lt; Get CSV EOF Other

**Descripción:** Establézcalo en el valor que separa los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**Sintaxis:** obj &lt;&lt; Get CSV EOF Space

**Descripción:** Establézcalo en 1 para utilizar un espacio para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**Sintaxis:** obj &lt;&lt; Get CSV EOF Spaces

**Descripción:** Establézcalo en 1 para utilizar espacios para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**Sintaxis:** obj &lt;&lt; Get CSV EOF Tab

**Descripción:** Establézcalo en 1 para utilizar una tabulación para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**Sintaxis:** obj &lt;&lt; Get CSV EOL CR

**Descripción:** Devuelve 1 si se utiliza CR como el valor que separa las líneas que se utilizarán para crear las distintas filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**Sintaxis:** obj &lt;&lt; Get CSV EOL CRLF

**Descripción:** Devuelve 1 si se utiliza CRLF como el valor que separa las líneas que se utilizarán para crear las distintas filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**Sintaxis:** obj &lt;&lt; Get CSV EOL LF

**Descripción:** Devuelve 1 si se utiliza LF como el valor que separa las líneas que se utilizarán para crear las distintas filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**Sintaxis:** obj &lt;&lt; Get CSV EOL Other

**Descripción:** Obtiene el valor personalizado que separa las líneas en el archivo de entrada. Este valor crea filas en la salida.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**Sintaxis:** obj &lt;&lt; Get CSV EOL Semicolon

**Descripción:** Devuelve 1 si un punto y coma representa las líneas entre filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**Sintaxis:** obj &lt;&lt; Get CSV Escape

**Descripción:** Obtiene un carácter que escapa caracteres especiales como fin de campo, fin de línea o delimitador de comillas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV Escape();

```

### Get CSV First Data Line

**Sintaxis:** obj &lt;&lt; Get CSV First Data Line

**Descripción:** El número de líneas del archivo de importación que contiene la primera fila de datos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**Sintaxis:** obj &lt;&lt; Get CSV First Header Line

**Descripción:** Obtiene la primera línea en el archivo de importación que tiene encabezados que se utilizarán para crear nombres de columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );
mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**Sintaxis:** obj &lt;&lt; Get CSV Has Headers

**Descripción:** Devuelve 1 si se utilizará la configuración de encabezados mientras se importa.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**Sintaxis:** obj &lt;&lt; Get CSV Number Of Header Lines

**Descripción:** Obtiene el número de líneas de encabezados que se utilizarán para los nombres de columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );
mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**Sintaxis:** obj &lt;&lt; Get CSV Quote

**Descripción:** Obtiene el valor que separa cadenas de caracteres entre comillas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get CSV Quote();

```

### Get Charset

**Sintaxis:** obj &lt;&lt; Get Charset

**Descripción:** Devuelve el conjunto de caracteres que se utilizará para importar datos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get Charset();

```

### Get Date Count

**Sintaxis:** obj &lt;&lt; Get Date Count

**Descripción:** Devuelve el número de archivos que se encuentran en el rango del filtro de fecha si está habilitado; de lo contrario, devuelve el número total de archivos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$downloads" );
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Count();

```

### Get Date Enable

**Sintaxis:** obj &lt;&lt; Get Date Enable

**Descripción:** Devuelve 1 si está habilitado el filtro de fecha.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get Date Enable();

```

### Get Date Filter

**Sintaxis:** obj &lt;&lt; Get Date Filter

**Descripción:** Devuelve el filtro de fecha actual.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**Sintaxis:** obj &lt;&lt; Get Excel Add Sheet Name Column

**Descripción:** Devuelve 1 si se agregará una columna a la tabla importada que tenga el nombre de la hoja de cálculo de la que proceden los datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**Sintaxis:** obj &lt;&lt; Get Excel Best Guess

**Descripción:** Devuelve 1 si los datos y encabezados de columna se buscarán de forma dinámica. Devuelve 0 si se utilizarán los demás ajustes de Excel al importar datos de Excel.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**Sintaxis:** obj &lt;&lt; Get Excel Column Headers As Hierarchies

**Descripción:** Devuelve 1 si las celdas de la hoja de cálculo que están en las filas de encabezado que ocupan más de una celda en horizontal se deben tratar como jerarquías.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**Sintaxis:** obj &lt;&lt; Get Excel Column Name Separator

**Descripción:** Obtiene la cadena que se utilizará al concatenar varias celdas en nombres de encabezados de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**Sintaxis:** obj &lt;&lt; Get Excel First Data Column

**Descripción:** Devuelve la primera columna no vacía de la hoja de cálculo que se debe importar como datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**Sintaxis:** obj &lt;&lt; Get Excel First Data Line

**Descripción:** Devuelve la primera fila no vacía de la hoja de cálculo que se importará como datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**Sintaxis:** obj &lt;&lt; Get Excel First Header Line

**Descripción:** Devuelve la primera fila no vacía de la hoja de cálculo que se importará como encabezado de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**Sintaxis:** obj &lt;&lt; Get Excel Has Headers

**Descripción:** Devuelve 1 si los encabezados se importarán desde las hojas de cálculo y 0 en caso contrario.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**Sintaxis:** obj &lt;&lt; Get Excel Import Color Cells

**Descripción:** Devuelve 1 si se importará el color de fondo de las celdas de datos de la hoja de cálculo.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**Sintaxis:** obj &lt;&lt; Get Excel Last Data Column

**Descripción:** Devuelve la última columna del área de datos de la hoja de cálculo que se importará. Si devuelve faltante, se buscará la última columna de forma dinámica.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**Sintaxis:** obj &lt;&lt; Get Excel Last Data Row

**Descripción:** Devuelve la última fila del área de datos de la hoja de cálculo que se importará. Si devuelve faltante, se buscará la última fila de forma dinámica.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**Sintaxis:** obj &lt;&lt; Get Excel Limit Column Type Detection

**Descripción:** Devuelve 0 si se comprobarán todas las celdas de la hoja de cálculo de cada columna al detectar el tipo de datos de la columna y 1 si solo se comprobará un subconjunto. Limitar la detección puede mejorar el rendimiento en el caso de que las hojas de cálculo sean grandes.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**Sintaxis:** obj &lt;&lt; Get Excel Multiple Series Stack

**Descripción:** Devuelve 1 si las columnas ocupadas se apilarán en caso de que "Establecer encabezados de columna de Excel como jerarquías" está establecido en 1.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**Sintaxis:** obj &lt;&lt; Get Excel Number of Header Lines

**Descripción:** Devuelve el número de líneas de la hoja de cálculo que se importarán como encabezados de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**Sintaxis:** obj &lt;&lt; Get Excel Replicate Data In Spanned Rows

**Descripción:** En el caso de que haya varias filas de encabezado combinadas en vertical, establezca esta opción en 1 para repetir el valor.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**Sintaxis:** obj &lt;&lt; Get Excel Replicate Headers In Spanned Rows

**Descripción:** Devuelve 1 si las celdas de encabezado de la hoja de cálculo combinadas tendrán valores de celda duplicados al crear el nombre de columna de la tabla de JMP.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**Sintaxis:** obj &lt;&lt; Get Excel Suppress Empty Columns

**Descripción:** Establezca esta opción en 1 para evitar que se importen columnas vacías.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**Sintaxis:** obj &lt;&lt; Get Excel Suppress Hidden Columns

**Descripción:** Devuelve 1 si no se importarán las columnas ocultas.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**Sintaxis:** obj &lt;&lt; Get Excel Suppress Hidden Rows

**Descripción:** Devuelve 1 si no se importarán las filas ocultas.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**Sintaxis:** obj &lt;&lt; Get Excel Worksheet Filter

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Get Excel Worksheet Filter;

```

### Get File List

**Sintaxis:** obj &lt;&lt; Get File List

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

```

### Get Folder

**Sintaxis:** obj &lt;&lt; Get Folder

**Descripción:** Devuelve el nombre de la carpeta.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder;

```

### Get Folder Count

**Sintaxis:** obj &lt;&lt; Get Folder Count

**Descripción:** Devuelve el número de archivos de la carpeta.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder Count;

```

### Get Import Callback

**Sintaxis:** obj &lt;&lt; Get Import Callback

**JMP Versión agregada:** 15

```jsl


Create Directory( "$temp/deleteme" );
Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );
Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );
mfi = Multiple File Import(
	<<Set Folder( "$temp/deleteme/" ),
	<<Set Name Filter( "test?.txt;" ),
	<<Set Name Enable( 1 ),
	<<Set Add File Name Column( 1 ),
	<<Set Import Callback(
		Function( {a, b},
			Write( "\!na=", a );
			Write( "\!nb=", b );
		)
	)
);
mfi << Get Import Callback();

```

### Get Import Mode

**Sintaxis:** obj &lt;&lt; Get Import Mode

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );
mfi << Get Import Mode();

```

### Get JSON Guess

**Sintaxis:** obj &lt;&lt; Get JSON Guess

**Descripción:** Devuelve el método integrado para importar datos JSON para crear tablas de datos.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Get JSON Guess();

```

### Get JSON Method

**Sintaxis:** obj &lt;&lt; Get JSON Method

**Descripción:** Devuelve el método actual utilizado para importar datos JSON.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Get JSON Method();

```

### Get JSON Settings

**Sintaxis:** obj &lt;&lt; Get JSON Settings

**Descripción:** Devuelve el JSL personalizado que importa datos JSON.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Get JSON Settings();

```

### Get Name Count

**Sintaxis:** obj &lt;&lt; Get Name Count

**Descripción:** Devuelve el número de archivos que coinciden con el filtro de nombre actual si se configura Establecer nombre Habilitar; de lo contrario, devuelve el número total de archivos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get Name Count();

```

### Get Name Enable

**Sintaxis:** obj &lt;&lt; Get Name Enable

**Descripción:** Devuelve 1 si el filtro de nombre actual se aplica para filtrar los archivos que se incluyen.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Name Enable( 1 );
mfi << Get Name Enable();

```

### Get Name Filter

**Sintaxis:** obj &lt;&lt; Get Name Filter

**Descripción:** Devuelve el filtro de nombre actual.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );
mfi << Set Name Enable( 1 );
mfi << Get Name Filter();

```

### Get PDF Method

**Sintaxis:** obj &lt;&lt; Get PDF Method

**Descripción:** Devuelve el método actual utilizado para importar datos de PDF.

**JMP Versión agregada:** 17

```jsl


mfi = Multiple File Import();
mfi << Get PDF Method();

```

### Get PDF Settings

**Sintaxis:** obj &lt;&lt; Get PDF Settings

**Descripción:** Devuelve el JSL personalizado que importa datos de PDF.

**JMP Versión agregada:** 17

```jsl


mfi = Multiple File Import();
mfi << Get PDF Settings();

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script a partir de la configuración actual.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get Script();

```

### Get Show Hidden

**Sintaxis:** obj &lt;&lt; Get Show Hidden

**Descripción:** Devuelve si se incluyen los archivos ocultos

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );
mfi << Get Show Hidden();

```

### Get Size Count

**Sintaxis:** obj &lt;&lt; Get Size Count

**Descripción:** Devuelve el número de archivos que coinciden con el filtro de tamaño actual si se configura Establecer tamaño Habilitar; de lo contrario, devuelve el número total de archivos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$Documents" );
mfi << Set Size Filter( {0, 1000} );
mfi << Set Size Enable( 1 );
Print( mfi << Get Size Count() );
mfi << Set Size Enable( 0 );
Print( mfi << Get Size Count() );

```

### Get Size Enable

**Sintaxis:** 0|1 = obj &lt;&lt; Get Size Enable

**Descripción:** Devuelve 1 si está habilitado el filtro de tamaño.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Enable();

```

### Get Size Filter

**Sintaxis:** obj &lt;&lt; Get Size Filter

**Descripción:** Devuelve una lista cuyo primer miembro es el menor tamaño de archivo incluido y cuyo segundo miembro es el mayor tamaño de archivo incluido.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Filter();

```

### Get Stack Mode

**Sintaxis:** obj &lt;&lt; Get Stack Mode

**Descripción:** Devuelve "Apilar similares" si los archivos de entrada similares se combinarán en una tabla al importar, o devuelve "Tabla por archivo" cuando los archivos de entrada se combinarán en dos o más tablas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Get Stack Mode();

```

### Get Subfolders

**Sintaxis:** obj &lt;&lt; Get Subfolders

**Descripción:** Devuelve 1 si se incluyen los archivos que están en subcarpetas.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set Subfolders( 1 );
mfi << Get Subfolders();

```

### Get Use File List

**Sintaxis:** obj &lt;&lt; Get Use File List

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

```

### Get XML Guess

**Sintaxis:** obj &lt;&lt; Get XML Guess

**Descripción:** Devuelve el método integrado para importar datos XML para crear tablas de datos.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Get XML Guess();

```

### Get XML Method

**Sintaxis:** obj &lt;&lt; Get XML Method

**Descripción:** Devuelve el método actual utilizado para importar datos XML.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Get XML Method();

```

### Get XML Settings

**Sintaxis:** obj &lt;&lt; Get XML Settings

**Descripción:** Devuelve el JSL personalizado para importar datos XML.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Get XML Settings();

```

### Import Data

**Sintaxis:** list of data tables = obj &lt;&lt; Import Data

**Descripción:** Importa datos en función de la configuración actual y devuelve una lista de tablas de datos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Set Add File Date Column

**Sintaxis:** obj &lt;&lt; Set Add File Date Column

**Descripción:** Establézcalo para crear una columna con el tamaño del archivo desde el que se importó la fila.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**Sintaxis:** obj &lt;&lt; Set Add File Name Column

**Descripción:** Establézcalo para crear una columna con el nombre del archivo desde el que se importó la fila.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**Sintaxis:** obj &lt;&lt; Set Add File Size Column

**Descripción:** Establézcalo para crear una columna con el tamaño del archivo desde el que se importó la fila.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**Sintaxis:** obj &lt;&lt; Set CSV Allow Numeric

**Descripción:** Establezca 1 para permitir que las columnas numéricas se creen a partir de datos numéricos aparentes o establezca 0 para crear todas las columnas de caracteres.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**Sintaxis:** obj &lt;&lt; Set CSV EOF Comma

**Descripción:** Establézcalo en 1 para utilizar una coma para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**Sintaxis:** obj &lt;&lt; Set CSV EOF Other

**Descripción:** Establézcalo en el valor que separa los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**Sintaxis:** obj &lt;&lt; Set CSV EOF Space

**Descripción:** Establézcalo en 1 para utilizar un espacio para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**Sintaxis:** obj &lt;&lt; Set CSV EOF Spaces

**Descripción:** Establézcalo en 1 para utilizar un espacio para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**Sintaxis:** obj &lt;&lt; Set CSV EOF Tab

**Descripción:** Establézcalo en 1 para utilizar una tabulación para separar los campos que se utilizarán para crear las distintas columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**Sintaxis:** obj &lt;&lt; Set CSV EOL CR

**Descripción:** Establézcalo en 1 para utilizar CR como el valor que separa las líneas que se utilizarán para crear las distintas filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**Sintaxis:** obj &lt;&lt; Set CSV EOL CRLF

**Descripción:** Establézcalo en 1 para utilizar CRLF como el valor que separa las líneas que se utilizarán para crear las distintas filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**Sintaxis:** obj &lt;&lt; Set CSV EOL LF

**Descripción:** Establézcalo en 1 para utilizar LF como el valor que separa las líneas que se utilizarán para crear las distintas filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**Sintaxis:** obj &lt;&lt; Set CSV EOL Other

**Descripción:** Establece el valor personalizado que separa las líneas en el archivo de entrada. Este valor crea filas en la salida.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**Sintaxis:** obj &lt;&lt; Set CSV EOL Semicolon

**Descripción:** Establézcalo en 1 para utilizar un punto y coma para representar las líneas entre filas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**Sintaxis:** obj &lt;&lt; Set CSV Escape

**Descripción:** Establece un carácter que escapa caracteres especiales como fin de campo, fin de línea o delimitador de comillas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**Sintaxis:** obj &lt;&lt; Set CSV First Data Line

**Descripción:** El número de líneas del archivo de importación que contiene la primera fila de datos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**Sintaxis:** obj &lt;&lt; Set CSV First Header Line

**Descripción:** Establece la primera línea en el archivo de importación que tiene encabezados que se utilizarán para crear nombres de columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**Sintaxis:** obj &lt;&lt; Set CSV Has Headers

**Descripción:** Establezca 1 para utilizar "Primera línea de encabezado CSV" y "Número de líneas de encabezado CSV".

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**Sintaxis:** obj &lt;&lt; Set CSV Number Of Header Lines

**Descripción:** Establece el número de líneas de encabezados que se utilizarán para los nombres de columnas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**Sintaxis:** obj &lt;&lt; Set CSV Quote

**Descripción:** Establece el valor que separa cadenas de caracteres entre comillas.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set CSV Quote( "'" );

```

### Set Charset

**Sintaxis:** obj &lt;&lt; Set Charset

**Descripción:** Establece el conjunto de caracteres que debería utilizarse al importar datos.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**Sintaxis:** obj &lt;&lt; Set Date Enable

**Descripción:** Habilita el filtro de hora y fecha. El valor predeterminado es desactivado y se ignorará el filtro de fecha aunque esté configurado.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Date Filter

**Sintaxis:** obj &lt;&lt; Set Date Filter( {start of date time range, end of date time range} )

**Descripción:** Filtra los archivos incluidos en función de un rango de fecha y hora.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**Sintaxis:** obj &lt;&lt; Set Excel Add Sheet Name Column

**Descripción:** Si se establece en 1, se agregará una columna a la tabla importada que tiene el nombre de la hoja de cálculo de la que proceden los datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**Sintaxis:** obj &lt;&lt; Set Excel Best Guess

**Descripción:** Busca los datos de forma dinámica en cada hoja de cálculo y utiliza la mejor aproximación para los nombres de columna. Si se establece esta opción, no se utilizan otros parámetros de Excel, excepto "Set Excel Add Sheet Name Column".

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**Sintaxis:** obj &lt;&lt; Set Excel Column Headers As Hierarchies

**Descripción:** Establezca esta opción en 1 para tratar varias líneas de encabezados de columna como jerarquías. Esta acción reorganiza la información de las celdas ocupadas de los encabezados y coloca esos datos en las filas de la tabla generada.

**JMP Versión agregada:** 18

```jsl


Multiple File Import(
	fJust << Set Folder( "$sample_import_data" ),
	<<Set Name Filter( "texas precipitation.xlsx" ),
	<<Set Name Enable( 1 ),
	<<Set Excel Best Guess( 0 ),
	<<Set Excel Has Headers( 1 ),
	<<Set Excel Number of Header Lines( 2 ),
	<<Set Excel First Data Line( 3 ),
	<<Set Excel Last Data Row( 6 ),
	<<Set Excel Column Headers As Hierarchies( 1 )
) << import data;

```

### Set Excel Column Name Separator

**Sintaxis:** obj &lt;&lt; Set Excel Column Name Separator

**Descripción:** Establece una cadena que se utilizará como separador al concatenar varias celdas en nombres de encabezados de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**Sintaxis:** obj &lt;&lt; Set Excel First Data Column

**Descripción:** Establece el número de la primera columna no vacía de la hoja de cálculo que se importará como datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**Sintaxis:** obj &lt;&lt; Set Excel First Data Line

**Descripción:** Establece el número de la primera fila no vacía de la hoja de cálculo que se importará como datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**Sintaxis:** obj &lt;&lt; Set Excel First Header Line

**Descripción:** Establece el número de la primera fila no vacía de la hoja de cálculo que se utilizará para definir los encabezados de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**Sintaxis:** obj &lt;&lt; Set Excel Has Headers

**Descripción:** Si se selecciona esta opción, "Set Excel First Header Line" y "Set Excel Number of Header Lines" se utilizarán para definir los encabezados de columna durante la importación.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**Sintaxis:** obj &lt;&lt; Set Excel Import Color Cells

**Descripción:** Si se establece en 1, se importarán los colores de fondo de las celdas de datos.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**Sintaxis:** obj &lt;&lt; Set Excel Last Data Column

**Descripción:** Establece la última columna del área de datos de la hoja de cálculo que se importará. El área de datos comienza después de todas las columnas vacías.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**Sintaxis:** obj &lt;&lt; Set Excel Last Data Row

**Descripción:** Establece la última fila del área de datos de la hoja de cálculo que se importará. El área de datos comienza después de todas las filas vacías.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**Sintaxis:** obj &lt;&lt; Set Excel Limit Column Type Detection

**Descripción:** Establezca esta opción en 1 para comprobar solo algunas de las filas de una columna al detectar automáticamente el tipo de datos de una columna. Un valor de 1 es más rápido, pero podría seleccionar un tipo de datos incorrecto en los casos en que el tipo de datos tenga valores distintos en la parte inferior y en la parte superior de la columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**Sintaxis:** obj &lt;&lt; Set Excel Multiple Series Stack

**Descripción:** Si se establece en 1 y "Establecer encabezados de columna de Excel como jerarquías" está establecido en 1, se apilarán las columnas ocupadas.

**JMP Versión agregada:** 18

```jsl


Multiple File Import(
	<<Set Folder( "$sample_import_data" ),
	<<Set Name Filter( "texas precipitation.xlsx" ),
	<<Set Name Enable( 1 ),
	<<Set Excel Best Guess( 0 ),
	<<Set Excel Has Headers( 1 ),
	<<Set Excel Number of Header Lines( 2 ),
	<<Set Excel First Data Line( 3 ),
	<<Set Excel Last Data Row( 6 ),
	<<Set Excel Column Headers As Hierarchies( 1 ), // must be set for Multiple Series Stack
	<<Set Excel Multiple Series Stack( 1 ),

) << import data;

```

### Set Excel Number of Header Lines

**Sintaxis:** obj &lt;&lt; Set Excel Number of Header Lines

**Descripción:** Establece el número de filas de la hoja de cálculo que se importarán como encabezados de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**Sintaxis:** obj &lt;&lt; Set Excel Replicate Data In Spanned Rows

**Descripción:** Al crear el encabezado de columna, si está establecido en 1, se repite el valor del principio del área combinada donde haya varias filas de encabezado y una celda ocupe esas filas pero no ocupe ninguna celda en horizontal.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**Sintaxis:** obj &lt;&lt; Set Excel Replicate Headers In Spanned Rows

**Descripción:** Si se establece en 1 y hay varias filas de encabezado y una celda ocupa esas filas y no ocupa ninguna celda en horizontal, el valor del inicio del área combinada se repetirá al crear el encabezado de columna.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**Sintaxis:** obj &lt;&lt; Set Excel Suppress Empty Columns

**Descripción:** Establezca esta opción en 1 para evitar que se importen columnas vacías.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**Sintaxis:** obj &lt;&lt; Set Excel Suppress Hidden Columns

**Descripción:** Establezca esta opción en 1 para evitar que se importen las columnas ocultas.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**Sintaxis:** obj &lt;&lt; Set Excel Suppress Hidden Rows

**Descripción:** Establezca esta opción en 1 para evitar que se importen las filas ocultas.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**Sintaxis:** obj &lt;&lt; Set Excel Worksheet Filter

**Descripción:** Solo se importan las hojas de cálculo que coincidan con el filtro.

**JMP Versión agregada:** 18

```jsl


mfi = Multiple File Import();
mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**Sintaxis:** obj &lt;&lt; Set File List

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

```

### Set Folder

**Sintaxis:** obj &lt;&lt; Set Folder

**Descripción:** Elegir una carpeta distinta.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**Sintaxis:** obj &lt;&lt; Set Import Callback

**Descripción:** Especifica una función de devolución de llamada personalizada que se ejecuta como paso final del proceso de importación. La función Multiple File Import() pasan a la función de devolución de llamada el objeto Multiple File Import y una lista de las tablas de datos que se abrieron.

**JMP Versión agregada:** 15

```jsl


Create Directory( "$temp/deleteme" );
Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );
Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );
mfi = Multiple File Import(
	<<Set Folder( "$temp/deleteme/" ),
	<<Set Name Filter( "test?.txt;" ),
	<<Set Name Enable( 1 ),
	<<Set Add File Name Column( 1 ),
	<<Set Import Callback(
		Function( {a, b}, 
// a is the same is mfi
			// b is a list of datatables that were created
			Write( "\!na=", a );
			Write( "\!nb=", b );
		)
	)
);
mfi << Import Data;

```

### Set Import Mode

**Sintaxis:** obj &lt;&lt; Set Import Mode

**Descripción:** Establezca "Fila por archivo" para que cada archivo cree una fila, "Fila por línea" para crear una fila para cada línea en cada archivo o "CSVData" para utilizar la opción Configuración para importar.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**Sintaxis:** obj &lt;&lt; Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**Descripción:** Establece una aproximación JSON que mejor se ajuste a los datos JSON que se estén importando.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**Sintaxis:** obj &lt;&lt; Set JSON Method

**Descripción:** Establézcalo en "Aproximación" para utilizar una aproximación integrada o "Configuración JSON" para proporcionar un JSL personalizado.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**Sintaxis:** obj &lt;&lt; Set JSON Settings

**Descripción:** Especifica el JSL personalizado que importa datos JSON.

**JMP Versión agregada:** 15

```jsl


dt = Open( "$sample_data\big class.jmp" );
dt << Save( "$Documents\Big Class.json" );
Close( dt );
Multiple File Import(
	<<Set Folder( "$DOCUMENTS" ),
	<<Set Name Filter( "big*.JSON" ),
	<<Set Name Enable( 1 ),
	<<Set JSON Method( "JSON Settings" ),
	<<Set JSON Settings(
		JSON Settings(
			Stack( 0 ),
			Row( "/root" ),
			Col(
				"/root/name",
				Column Name( "name" ),
				Fill( "Use Once" ),
				Type( "Character" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/age",
				Column Name( "age" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/sex",
				Column Name( "sex" ),
				Fill( "Use Once" ),
				Type( "Character" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/height",
				Column Name( "height" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/weight",
				Column Name( "weight" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			)
		)
	)
) << Import Data;

```

### Set Name Enable

**Sintaxis:** obj &lt;&lt; Set Name Enable

**Descripción:** Establece si se aplica el filtro de nombre actual. El valor predeterminado es 0 y se ignorará el filtro de nombre aunque esté configurado.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Name Enable( 1 );

```

### Set Name Filter

**Sintaxis:** obj &lt;&lt; Set Name Filter

**Descripción:** Permite que los archivos incluidos estén en una lista de filtros delimitada por punto y coma que puede incluir caracteres comodín. Los nombres de archivo que incluyan puntos y coma o | deben importarse con un carácter comodín como ? o *.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**Sintaxis:** obj &lt;&lt; Set PDF Method

**Descripción:** Establézcalo en "Aproximación" para utilizar una aproximación integrada o "Configuración PDF" para proporcionar un JSL personalizado.

**JMP Versión agregada:** 17

```jsl


mfi = Multiple File Import();
mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**Sintaxis:** obj &lt;&lt; Set PDF Settings

**Descripción:** Especifica el JSL personalizado que importa datos PDF.

**JMP Versión agregada:** 17

```jsl


dt = Open( "$sample_data\big class.jmp" );
win = New Window( "temp", Data Table Box( dt ) );
win << Save pdf( "$Documents\big class.PDF" );
win << Close window;
Close( dt );
Multiple File Import(
	<<Set Folder( "$DOCUMENTS" ),
	<<Set Name Filter( "big*.pdf" ),
	<<Set Name Enable( 1 ),
	<<Set PDF Method( "PDF Settings" ),
	<<Set PDF Settings( PDF All Tables( combine( all ) ) )
) << Import Data;

```

### Set Show Hidden

**Sintaxis:** obj &lt;&lt; Set Show Hidden

**Descripción:** Establece si se incluyen los archivos que Windows normalmente oculta. La opción predeterminada es no incluir los archivos ocultos.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**Sintaxis:** obj &lt;&lt; Set Size Enable

**Descripción:** Establece si se aplica el filtro de tamaño actual. El valor predeterminado es desactivado e ignorará el filtro de tamaño aunque esté configurado.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**Sintaxis:** obj &lt;&lt; Set Size Filter( {smallest size to include, largest size to include} )

**Descripción:** Filtra los archivos incluidos en función del tamaño de archivo.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**Sintaxis:** obj &lt;&lt; Set Stack Mode( "Stack Similar" | "Table Per File )

**Descripción:** Combina archivos similares que se están importando en una tabla de datos o crea una tabla para cada archivo.

**JMP Versión agregada:** 14

```jsl


mfi = Multiple File Import();
mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**Sintaxis:** obj &lt;&lt; Set Subfolders

**Descripción:** Establece si se incluyen los archivos que están en subcarpetas. La opción predeterminada es que no se incluyan.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set Subfolders( 1 );

```

### Set Use File List

**Sintaxis:** obj &lt;&lt; Set Use File List

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

```

### Set XML Guess

**Sintaxis:** obj &lt;&lt; Set XML Guess( "Tall"|"Wide"|"Huge" )

**Descripción:** Especifica una aproximación XML que mejor se ajuste a los datos XML que se están importando.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**Sintaxis:** obj &lt;&lt; Set XML Method

**Descripción:** Especifique "Aproximación" para que JMP decida si los datos son altos, amplios o enormes. Especifique "Configuración XML" para proporcionar un JSL personalizado.

**JMP Versión agregada:** 15

```jsl


mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**Sintaxis:** obj &lt;&lt; Set XML Settings

**Descripción:** Especifica un JSL personalizado que importa datos XML.

**JMP Versión agregada:** 15

```jsl


Multiple File Import(
	<<Set Folder( "$SAMPLE_IMPORT_DATA" ),
	<<Set Name Filter( "*.xml" ),
	<<Set Name Enable( 1 ),
	<<Set XML Method( "XML Settings" ),
	<<Set XML Settings(
		XML Settings(
			Row( "/book/story/chapter/para" ),
			Col(
				"/book/story/chapter/para",
				Column Name( "story.chapter.para" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/book/story/chapter/para/price",
				Column Name( "story.chapter.para.price" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/book/story/chapter/para/quantity",
				Column Name( "story.chapter.para.quantity" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			)
		)
	)
) << Import Data;

```

