# ZipArchive



### Dir

**Syntaxe :** memlist = obj << Dir

**Description :** Renvoie la liste des fichiers membres dans une archive zip.

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

**Syntaxe :** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Description :** Renvoie une référence vers une table de données, ou vers un autre fichier JMP ou objet créé à partir d&apos;un fichier. Si aucun chemin n&apos;est spécifié, la boîte de dialogue Ouvrir s&apos;affiche. Si un chemin vers un répertoire est spécifié, l&apos;explorateur de fichiers du système est ouvert et aucun objet n&apos;est renvoyé. Consultez la syntaxe de référence pour obtenir une description complète des options disponibles.

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
dt2 = Open(
	"$SAMPLE_DATA/Fitness.jmp",
	Select Columns( "Name", "Sex", "Age", "Weight" )
);

```

### Read

**Syntaxe :** memdata = obj << Read( memname, <Format(blob|string)>, <Encoding(charset)> )

**Description :** Lit le fichier membre d’une archive zip dans une chaîne ou un blob.

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

**Syntaxe :** actual name = obj << Write( memname, memdata, < "replace" > )

**Description :** Ajoute un texte ou un blob à un fichier membre d&apos;une archive zip. Si le paramètre facultatif « replace » est spécifié et si un fichier existe avec ce nom, le fichier membre est remplacé. Dans le cas contraire, le nom du membre est modifié pour empêcher d&apos;écraser le membre existant ; le nom utilisé est renvoyé.

```js

Names Default To Here( 1 );
za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

