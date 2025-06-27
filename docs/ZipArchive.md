# ZipArchive



### Dir

**Syntax:** memlist = obj << Dir

**Description:** Returns the list of member files in a zip archive.

```

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Open

**Syntax:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Description:** Returns a reference to a data table or other JMP file or object created from a file. If no path is specified, the Open dialog appears. If a folder path is specified, the system file browser is opened and no object is returned. Refer to the Syntax Reference for a complete description of available options.

```

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

**Syntax:** memdata = obj << Read( memname, <Format(blob|string)>, <Encoding(charset)> )

**Description:** Reads a zip archive member file into a string or blob.

```

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Write

**Syntax:** actual name = obj << Write( memname, memdata, < "replace" > )

**Description:** Writes a text or blob to a zip archive member file. If the optional "replace" parameter is specified and there is an existing file with this name, the member file is replaced. Otherwise, this member name is changed to prevent overwriting an existing member; the name actually used is returned.

```

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

