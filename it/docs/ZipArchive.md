# ZipArchive



### Dir

**Sintassi:** memlist = obj << Dir

**Descrizione:** Restituisce l&apos;elenco di file di elementi in un archivio zip.

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

**Sintassi:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Descrizione:** Restituisce un riferimento a una tabella di dati o altro file di JMP o oggetto creato da un file. Se non si specifica alcun percorso, viene visualizzata la finestra di dialogo Apri. Se viene specificato il percorso di una cartella, viene aperto il browser dei file di sistema e non viene restituito alcun oggetto. Consultare Syntax Reference per una descrizione completa delle opzioni disponibili.

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

**Sintassi:** memdata = obj << Read( memname, <Format(blob|string)>, <Encoding(charset)> )

**Descrizione:** Legge un file zip dell&apos;elemento dell&apos;archivio in una stringa o blob.

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

**Sintassi:** actual name = obj << Write( memname, memdata, < "replace" > )

**Descrizione:** Scrive un testo o un blob in un file dell&apos;elemento dell&apos;archivio zip. Se è specificato il parametro "sostituisci" ed esiste un file con questo nome, il file dell&apos;elemento viene sostituito. In caso contrario, il nome di questo elemento viene cambiato per impedire la sovrascrittura di un elemento esistente; il nome effettivamente utilizzato viene restituito.

```js

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

