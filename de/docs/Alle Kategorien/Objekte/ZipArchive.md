# ZipArchive



## Elementmeldungen

### Dir

**Syntax:** memlist = obj &lt;&lt; Dir

**Beschreibung:** Gibt die Liste der Memberdateien in einem Zip-Archiv zurück.

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Read

**Syntax:** memdata = obj &lt;&lt; Read( memname, &lt;Format(blob|string)&gt;, &lt;Encoding(charset)&gt; )

**Beschreibung:** Liest ein Member eines Zip-Archivs in eine Zeichenkette oder ein Blob aus.

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Write

**Syntax:** actual name = obj &lt;&lt; Write( memname, memdata, &lt; "replace" &gt; )

**Beschreibung:** Schreibt einen Text oder Blob in eine Memberdatei eines Zip-Archivs. Wenn der optionale Parameter „replace“ angegeben ist und es eine bestehende Datei mit diesem Namen gibt, wird die Memberdatei ersetzt. Ansonsten wird der Name dieses Members geändert, um ein Überschreiben des vorhandenen Members zu verhindern. Der tatsächlich verwendete Name wird zurückgegeben.

```jsl

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

## Zugehörige Konstruktoren

### Open

**Syntax:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Beschreibung:** Gibt eine Referenz auf eine Datentabelle oder eine andere JMP-Datei oder auf ein über eine Datei erstelltes Objekt zurück. Wenn kein Pfad angegeben ist, wird das Dialogfeld „Öffnen“ angezeigt. Wenn ein Ordnerpfad angegeben ist, wird der Dateibrowser des Systems geöffnet und kein Objekt zurückgegeben. Eine vollständige Beschreibung der verfügbaren Optionen finden Sie in der Syntaxreferenz.

```jsl

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

