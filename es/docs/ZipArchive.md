# ZipArchive



### Dir

**Sintaxis:** memlist = obj << Dir

**Descripción:** Devuelve la lista de archivos presentes dentro de un archivo zip.

```js

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Open

**Sintaxis:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Descripción:** Devuelve una referencia a una tabla de datos u otro archivo JMP o un objeto creado a partir de un archivo. Si no se especifica ninguna ruta, aparece el cuadro de diálogo Abrir. Si se especifica una ruta de carpetas, se abre el explorador de archivos del sistema y no se devuelve ningún objeto. Consulte la referencia de sintaxis para obtener una descripción completa de las opciones disponibles.

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

### Read

**Sintaxis:** memdata = obj << Read( memname, <Format(blob|string)>, <Encoding(charset)> )

**Descripción:** Lee un archivo de dentro de un archivo zip y lo inserta en una cadena de caracteres o un blob.

```js

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Write

**Sintaxis:** actual name = obj << Write( memname, memdata, < "replace" > )

**Descripción:** Escribe un texto o blob en un archivo presente dentro de un archivo zip. Si se especifica el parámetro opcional "reemplazar" y hay un archivo existente que tiene este nombre, se reemplaza ese primer archivo. De lo contrario, se cambia este nombre para evitar la sobreescritura de un archivo ya existente y se devuelve el nombre que se utiliza realmente.

```js

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

