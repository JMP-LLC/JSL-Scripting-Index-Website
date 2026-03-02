# ZipArchive



## Constructeurs associés

### Open

**Syntaxe :** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Description :** Renvoie une référence vers une table de données, ou vers un autre fichier JMP ou objet créé à partir d&apos;un fichier. Si aucun chemin n&apos;est spécifié, la boîte de dialogue Ouvrir s&apos;affiche. Si un chemin vers un répertoire est spécifié, l&apos;explorateur de fichiers du système est ouvert et aucun objet n&apos;est renvoyé. Consultez la syntaxe de référence pour obtenir une description complète des options disponibles.

```jsl

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

## Messages d'éléments

### Dir

**Syntaxe :** memlist = obj &lt;&lt; Dir

**Description :** Renvoie la liste des fichiers membres dans une archive zip.

```jsl

za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Read

**Syntaxe :** memdata = obj &lt;&lt; Read( memname, &lt;Format(blob|string)&gt;, &lt;Encoding(charset)&gt; )

**Description :** Lit le fichier membre d’une archive zip dans une chaîne ou un blob.

```jsl

za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

### Write

**Syntaxe :** actual name = obj &lt;&lt; Write( memname, memdata, &lt; "replace" &gt; )

**Description :** Ajoute un texte ou un blob à un fichier membre d&apos;une archive zip. Si le paramètre facultatif « replace » est spécifié et si un fichier existe avec ce nom, le fichier membre est remplacé. Dans le cas contraire, le nom du membre est modifié pour empêcher d&apos;écraser le membre existant ; le nom utilisé est renvoyé.

```jsl

za = Open( "$TEMP\deleteMe.zip", zip );
za << Write( "ralph", "this is ralph's data" );
za << Write( "fred", "this is fred's data" );
dirlist = za << dir;
text = za << read( dirlist[1] );
dirlist[1] || ": " || text;

```

