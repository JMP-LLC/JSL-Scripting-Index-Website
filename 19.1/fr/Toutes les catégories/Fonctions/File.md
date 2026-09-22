# File



### Close

**Syntaxe :** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Description :** Ferme la table de données référencée par le premier argument, qui est par défaut la table de données active du projet actif (sauf si le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Le deuxième argument est utilisé pour enregistrer la table de données. Utilisez une extension de fichier appropriée pour enregistrer la table de données sous un format non JMP. Si vous spécifiez NoSave, l&apos;invite à enregistrer ou ignorer les modifications ne sera pas affichée.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 3 );Close( exdt, NoSave );

```

### Close All

**Syntaxe :** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**Description :** Ferme toutes les ressources d&apos;un type spécifique ouvertes : tables de données, journaux ou rapports.



Seules les fenêtres du projet actif (sauf si le script n&apos;est pas exécuté dans un projet) seront fermées. Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );Wait( 3 );Close All( Data Tables, NoSave );

```

### Convert File Path

**Syntaxe :** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**Description :** Renvoie le chemin d&apos;accès converti.

**JMP Version ajoutée :** Avant la version 14

```jsl

For Each( {pv},	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},	Write(		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )		 || "\!N"	));

```

### Copy Directory

**Syntaxe :** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**Description :** Copie les fichiers d’un répertoire sur un autre, éventuellement avec les sous-répertoires. Le nom du répertoire sera créé sur le chemin to et ne fera pas partie du chemin to. Renvoie 1 si le répertoire a été copié ou 0 si le répertoire n&apos;a pas pu être copié. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );rc4 = Delete Directory( "$TEMP/Loss Function Templates" );rc5 = Directory Exists( "$TEMP/Loss Function Templates" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Syntaxe :** rc = Copy File( from, to )

**Description :** Copie un fichier à partir du fichier d&apos;origine. Son nom sera identique ou différent. Spécifiez un chemin complet et un nom de fichier pour la destination. Renvoie 1 si le fichier a été copié ou 0 si le fichier n&apos;a pas pu être copié. Génère une erreur si le chemin est incorrect ou n&apos;existe pas. Un fichier ne peut pas être copié lorsque le chemin from ou to est incorrect, ou si le fichier to existe déjà.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = File Exists( "$TEMP/x.jmp" );rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = Delete File( "$TEMP/x.jmp" );rc4 = File Exists( "$TEMP/x.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**Syntaxe :** rc = Create Directory( path )

**Description :** Crée un répertoire. Renvoie 1 si le répertoire a été créé. Renvoie 0 si le répertoire existe déjà ou si JMP n&apos;a pas pu créer le répertoire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/sub1" );rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );rc1 = Delete Directory( "$TEMP/sub1" );rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Syntaxe :** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**Description :** Générer un classeur Excel à partir des tables de données JMP ouvertes

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Abrasion.jmp" );Create Excel Workbook(	"$TEMP/MyWorkbook.xlsx",	{"Big Class", "Abrasion"},	{"Big", "Abrasive"});

```

### Creation Date

**Syntaxe :** date = Creation Date( path )

**Description :** Renvoie la date de création d’un fichier ou d’un répertoire. Génère une erreur si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**Syntaxe :** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**Description :** Supprime un répertoire, ainsi que ses fichiers et sous-répertoires. Renvoie 1 si le répertoire a été supprimé. Renvoie 0 si le répertoire n&apos;a pas pu être supprimé ou si le chemin est incorrect.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/sub1" );rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );rc1 = Delete Directory( "$TEMP/sub1" );rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Syntaxe :** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**Description :** Supprime un fichier. Renvoie 1 si le fichier a été supprimé. Renvoie 0 si le fichier n&apos;a pas pu être supprimé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = File Exists( "$TEMP/x.jmp" );rc2 = Delete File( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/x.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**Syntaxe :** rc = Directory Exists( path )

**Description :** Déterminez si le répertoire existe. Renvoie 1 si le chemin existe. Renvoie 0 si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),	"ok",	"missing!");

```

### File Exists

**Syntaxe :** rc = File Exists( path )

**Description :** Déterminez si le fichier existe. Renvoie 1 si le chemin d&apos;accès au fichier existe. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),	"ok",	"missing!");

```

### File Size

**Syntaxe :** size = File Size( path )

**Description :** Renvoie la taille du fichier au chemin d&apos;accès spécifié. Renvoie manquant si le chemin d&apos;accès au fichier est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Syntaxe :** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**Description :** Renvoie la liste des noms de fichiers contenus dans un répertoire spécifié par path. Si l&apos;argument Recursive n&apos;est pas spécifié, les noms de répertoire sont inclus dans la liste.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Files In Directory( "$HOME" );

```

**Exemple 2**

```jsl

Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),	Contains( Lowercase( fn ), "stacked" ));

```

### Find All

**Syntaxe :** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**Description :** Trouve toutes les ressources d&apos;un type spécifique ouvertes : tables de données, journaux ou rapports.



Seules les fenêtres du projet en cours (sauf si le script n&apos;est pas exécuté dans un projet) seront incluses. Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );windows = Find All( Data Tables );For( i = 1, i <= N Items( windows ), i++,	Write( Char( windows[i] << Get Window Title ) || "\!N" ));

```

### Get Default Directory

**Syntaxe :** y = Get Default Directory()

**Description :** Renvoie le répertoire JMP par défaut, qui est utilisé comme base pour les chemins d&apos;accès relatifs consécutifs. Ce chemin d&apos;accès est le répertoire qui contient le script en cours d&apos;exécution si le script est enregistré.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Get Default Directory() );Set Default Directory( "$SAMPLE_DATA" );Show( Get Default Directory() );

```

### Get Excel Worksheets

**Syntaxe :** list = Get Excel Worksheets("filepath")

**Description :** Renvoie une liste des feuilles de calcul d&apos;un classeur Excel

**JMP Version ajoutée :** Avant la version 14

```jsl

sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );Show( sheetList );

```

### Get File Search Path

**Syntaxe :** y = Get File Search Path()

**Description :** Renvoie la liste courante des répertoires à rechercher pour l&apos;ouverture des fichiers.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get File Search Path();

```

### Get Path Variable

**Syntaxe :** value = Get Path Variable( name )

**Description :** Renvoie la valeur d&apos;une variable de chemin d&apos;accès, qui est un nom tel que SAMPLE_DATA, qui est remplacé lorsqu&apos;il se trouve dans les noms de chemin d&apos;accès.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTSSee full listing of Path Variables in the other exampleSee also Convert File Path() and Set Path Variable() */

```

#### Liste

```jsl

// Run for a Path Variable listingpath vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME","USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS","SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );New Window( "Path Variables",	<<Type( "Dialog" ),	Outline Box( "Path Variables",		H List Box(			Button Box( "Open Paths",				For Each( {row}, tbl << Get Selected Rows, {path},					path = tbl[String Col Box( 2 )] << Get( row );					Open( path );				)			),			Button Box( "Copy Paths",				If( N Items( tbl << Get Selected Rows ),					Set Clipboard(						Concat Items(							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),								tbl[String Col Box( 2 )] << Get( row )							),							"\!N"						)					)				)			)		),		window:tbl = Table Box(			String Col Box( "Variable", path vars ),			String Col Box( "Path",				Transform Each( {var}, path vars, Get Path Variable( var ) )			),			<<Set Selectable Rows		)	));

```

### Google Sheet Export

**Syntaxe :** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Description :** Exporte une table de données dans une nouvelle feuille de calcul Google ou dans un nouvel onglet d&apos;une feuille de calcul Google existante.

**JMP Version ajoutée :** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your emaildt = Open( "$SAMPLE_DATA/Big Class.jmp" );Google Sheet Export(	dt,	Email( email ),	New Spreadsheet( "JSL Example" ),	Sheet Name( "Example 1" ));

```

### Google Sheet Import

**Syntaxe :** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**Description :** Ouvre un fichier Google Sheet.

**JMP Version ajoutée :** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your emailspreadsheet ="https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/";                                         Google Sheet Import(	Email( email ),	Spreadsheet( spreadsheet ),	Sheets( "Sheet1", "Sheet2" ),	Sheet Settings(		Has Column Headers( 0 ),		Data Starts on Row( 1 ),		Cell Range( "A1:C2" ),		Import Cell Colors( 0 ),		Suppress Empty Columns( 1 )	));

```

### Is Directory

**Syntaxe :** rc = Is Directory( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié correspond à un répertoire. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Syntaxe :** rc = Is Directory Writable( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié au répertoire est ouvert en écriture. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**Syntaxe :** rc = Is File( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié correspond à un fichier. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Syntaxe :** rc = Is File Writable( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié au fichier est ouvert en écriture. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**Syntaxe :** l = JSON Literal( string )

**Description :** Renvoie une valeur booléenne JSON valide ou une valeur constante nulle selon la spécification du paramètre.

**JMP Version ajoutée :** 14

```jsl

myJSON ="{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";parsed = Parse JSON( myJSON );x = parsed["myBool"];Show( x );If( x == JSON Literal( true ),	Show( "Worked" ),	Show( "Didn't work" ));

```

### JSON To Data Table

**Syntaxe :** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**Description :** Convertir le texte JSON en une table de données JMP

**JMP Version ajoutée :** 14

```jsl

dt = JSON To Data Table(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");

```

### JSON To List

**Syntaxe :** l = JSON To List( jsonstring )

**Description :** Convertir le texte JSON en une liste JSL représentant la structure spécifiée par les données JSON.

**JMP Version ajoutée :** Avant la version 14

```jsl

l = JSON To List(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");Show( l );

```

### Last Modification Date

**Syntaxe :** date = Last Modification Date( path )

**Description :** Renvoie la dernière date de modification d’un fichier ou d’un répertoire. Génère une erreur si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**Syntaxe :** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**Description :** Lit un fichier texte entier dans une variable JSL. Load Text File() vous invite à saisir un nom de fichier. Load Text File( path ) renvoie une chaîne. L&apos;option XMLParse convertit du code XML en une arborescence d&apos;expression. La fonction SASODSXML effectue l&apos;analyse en tant que fichier XML par défaut d&apos;un fichier ODS de SAS. L&apos;option [{JSON}] convertit du code JSON en une arborescence d&apos;expression. L&apos;argument BLOB renvoie des données binaires dans une variable Blob JSL ; les paramètres facultatifs nommés du BLOB permettent de lire une sous-chaîne du fichier.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = Load Text File(	Get Path Variable( "sample_import_data" ) || "/animals.txt"/*, Charset("ascii")*//*, LineSeparator("\!r\!n")*//*, BLOB*/);Word( 4, ex, " \!t\!n\!r" );

```

### Move Directory

**Syntaxe :** rc = Move Directory( from, to )

**Description :** Déplace un répertoire d’un endroit à un autre. Renvoie 1 si le répertoire a été déplacé. Renvoie 0 si le répertoire n&apos;a pas pu être déplacé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/subB" );Delete Directory( "$TEMP/Loss Function Templates" );rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );Create Directory( "$TEMP/subB" );rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );rc2 = Directory Exists( "$TEMP/Loss Function Templates" );rc3 = Directory Exists( "$TEMP/subB" );rc4 = Delete Directory( "$TEMP/subB" );rc5 = Directory Exists( "$TEMP/subB" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Syntaxe :** rc = Move File( from, to )

**Description :** Déplace un fichier d’un endroit à un autre. Renvoie 1 si le fichier a été déplacé. Renvoie 0 si le fichier n&apos;a pas pu être déplacé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( File Exists( "$TEMP/y.jmp" ),	Delete File( "$TEMP/y.jmp" ));rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/y.jmp" );rc4 = Delete File( "$TEMP/y.jmp" );rc5 = File Exists( "$TEMP/y.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**Syntaxe :** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Description :** Renvoie une référence vers une table de données, ou vers un autre fichier JMP ou objet créé à partir d&apos;un fichier. Si aucun chemin n&apos;est spécifié, la boîte de dialogue Ouvrir s&apos;affiche. Si un chemin vers un répertoire est spécifié, l&apos;explorateur de fichiers du système est ouvert et aucun objet n&apos;est renvoyé. Consultez la syntaxe de référence pour obtenir une description complète des options disponibles.

**JMP Version ajoutée :** Avant la version 14

#### Add-In

```jsl

/* Installing Add-In:Open( Add-In to open,    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

#### Autre

```jsl

/* Other options:   SAS File imported as a data table:   Open( sasFilePath,     <Invisible | Private>,     <Use Labels for Var Names(0|1)>,     <Password( "password" )>   )      SAS Transport File imported as a data table, members are separate tables within the larger file:   Open( sasTransportFilePath,     <Use Labels for Var Names(0|1)>,     <Members({"Table1", "Table2"})>   )      HTML file imported as a data table:   Open( htmlFilePath,     <Invisible | Private>,     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>   )      Get column names as a list for a JMP Data Table without opening the table:   Open( jmpDataTableFilePath,      "Column Names Only"   )      esriShapeFile opened for use as a map shape data table:   Open( esriShapeFilePath,     <Invisible | Private>,     Columns( Shape=numeric(n),     Part=numeric(n),     X=numeric(n),     Y=numeric(n) ),              Polygon Import Options(Simplification Factor(f), Geodesic(g))   )*///SAS Example:dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );// HTML Example:dt2 = Open(	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) ));// Column Names Only Example: colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );// SHP Shapefile Example with polygon simplification: Open(	"$SAMPLE_IMPORT_DATA/parishes.shp",	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) ));

```

#### Excel

```jsl

/* Excel files imported into a data table:   Open( excelFilePath,     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,     <Use for all sheets(0|1)>,     <Concatenate Worksheets(0|1)>,     <Create Concatenation Column(0|1)>,     <Worksheet Settings( 0|1,       Has Column Headers(0|1),       Number of Rows in Headers(n),       Headers Start on Row(n),       Data Starts on Row(n),       Data Starts on Column(n),       Data Ends on Row(n),       Data Ends on Column(n),       Replicated Spanned Rows(0|1),       Suppress Hidden Rows(0|1),       Suppress Hidden Columns(0|1),       Treat as Hierarchy(0|1)     )>,     <Invisible | Private>   )*//* Using the Excel Wizard dialog:   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  */dt = Open(	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",	Worksheets( "Ungrouped Team Results" ),	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) ));

```

#### Folder

```jsl

/* Open of folder launches file browser */Open( "$SAMPLE_DATA" );

```

#### Image

```jsl

/* Picture file imported as a picture object */pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

#### PDF

```jsl

/* PDF file imported as one or multiple data tablesopen(pdfFilePath,    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |    PDF Text(<Pages(n, ...)>, <sort>) |    PDF Wizard);*/dt = Open( "$SAMPLE_DATA\big class.jmp" );w = New Window( "test", Data Table Box( dt ) );w << save picture( "$DOCUMENTS\test.pdf", pdf );pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rowspdftable2 = Open(	"$DOCUMENTS\test.pdf",	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) ));

```

#### Table de données

```jsl

/* Data tables, other JMP files, external files:   Open( filePath,     <Invisible | Private>,     <Select Columns( "col", ... )>,     <Ignore Columns( "col", ... )>,     <Add to Recent Files(bool)>,     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>     <Force Refresh>,     <Enable Filter Views(bool)>,     <"file type">   )*///Basic data table opendt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );//Data table open with some optionsdt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

#### Texte

```jsl

/* Text files imported into a data table:   Open( textFilePath,     <Invisible | Private>,     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"     <Number of Columns(n)>,     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,     <EOF Other ("char")>,     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,     <EOL Other ("char")>,     <Strip Quotes|Strip Enclosing Quotes (0|1)>,     <Labels|Table Contains Column Headers (0|1)>,     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".     Treat Empty Columns as Numeric(0|1)     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.     <Column Names Start|Column Names are on line (n)>,     <Data Starts|Data starts on line (n)>,     <Lines to Read>, // a number     <Use Apostrophe as Quotation Mark>,     <CompressNumericColumns(0|1)>,     <CompressCharacterColumns(0|1)>,     <CompressAllowListCheck(0|1)>   )*/dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Parse JSON

**Syntaxe :** l = Parse JSON( jsonstring )

**Description :** Convertir le texte JSON en une liste JSL ou en un tableau associatif représentant la structure spécifiée par les données JSON.

**JMP Version ajoutée :** 14

```jsl

l = Parse JSON(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");Show( l );

```

### Pick Directory

**Syntaxe :** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**Description :** Une fenêtre Ouvrir le répertoire s&apos;affiche, en renvoyant le nom de chemin d&apos;accès du répertoire choisi. La chaîne prompt facultative s’affiche en haut de la fenêtre. L’argument Show Files peut être l’un des trois arguments et est du type booléen. La valeur 1 affiche les fichiers dans la fenêtre Choisir un répertoire, la valeur 0 non. La valeur 0 est la valeur par défaut. La chaîne path indique le répertoire affiché initialement dans la fenêtre Choisir un répertoire. Si vous utilisez la chaîne path, elle doit suivre la chaîne prompt, mais l’argument Show Files peut se situer entre les deux.

**JMP Version ajoutée :** Avant la version 14

#### Show Files

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

#### Simple

```jsl

Pick Directory( "Select a directory" );

```

### Pick File

**Syntaxe :** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**Description :** Une fenêtre Ouvrir s&apos;affiche, en renvoyant le nom du chemin d&apos;accès du fichier choisi. L’argument filterList est une liste de chaînes de la forme : "Étiquette|suffixe1;suffixe2;...". L’argument first filter spécifie quel est le filtre affiché en premier. Le cinquième argument indique si la fenêtre doit fonctionner comme une fenêtre d’enregistrement (saveFlag = 1) ou d’ouverture (saveFlag = 0). L’argument de default file spécifie le fichier sélectionné initialement. L’argument multiple permet de sélectionner plusieurs fichiers si saveFlag est égal à 0.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Pick File(	"Select JMP File",	"$DOCUMENTS",	{"JMP Files|jmp;jsl;jrn", "All Files|*"},	1,	0,	"newJmpFile.jmp");

```

**Exemple 2**

```jsl

Files = Pick File(	"Select JMP File",	"$SAMPLE_DATA",	{"JMP Files|jmp;jsl;jrn", "All Files|*"},	1,	0,	"",	"multiple");For( i = 1, i <= N Items( Files ), i++,	Try( Open( Files[i] ) ));

```

**Exemple 3**

```jsl

filename = Pick File(	"Save As Text",	"$DOCUMENTS",	{"Text File|txt"},	1,	1, // Save Flag	"export.txt");If( Is Missing( filename ),	Print( "Canceled" ),	Save Text File( filename, "The quick brown fox" ));

```

### Rename Directory

**Syntaxe :** rc = Rename Directory( old, new )

**Description :** Renomme un répertoire sans le déplacer ni le copier ; le nouveau nom n’inclut PAS de chemin. Renvoie 1 si le répertoire a été renommé. Renvoie 0 si le répertoire n&apos;a pas pu être renommé ou si le chemin est incorrect.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/subD" );Delete Directory( "$TEMP/Loss Function Templates" );rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );rc2 = Directory Exists( "$TEMP/Loss Function Templates" );rc3 = Directory Exists( "$TEMP/subD" );rc4 = Delete Directory( "$TEMP/subD" );rc5 = Directory Exists( "$TEMP/subD" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Syntaxe :** rc = Rename File( old, new )

**Description :** Renomme un fichier sans le déplacer ni le copier ; le nouveau nom n’inclut PAS de chemin. Renvoie 1 si le fichier a été renommé. Renvoie 0 si le fichier n&apos;a pas pu être renommé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/y.jmp" );rc4 = Delete File( "$TEMP/y.jmp" );rc5 = File Exists( "$TEMP/y.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**Syntaxe :** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**Description :** Crée un fichier texte portant le nom de fichier spécifié par le chemin d&apos;accès path et dont le contenu est spécifié par la chaîne text. Si l&apos;enregistrement réussit, la fonction Save Text File() renvoie le nom de chemin d&apos;accès du fichier créé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**Syntaxe :** Set Default Directory( path )

**Description :** Définit le répertoire JMP par défaut, qui est utilisé comme base pour les chemins d&apos;accès relatifs consécutifs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );Open( "Big Class.jmp" );

```

### Set File Search Path

**Syntaxe :** Set File Search Path(path | {list of paths})

**Description :** Définit la liste courante des répertoires à rechercher pour l&apos;ouverture des fichiers. "." représente le répertoire courant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set File Search Path(	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )});Show( Get File Search Path() );Show( Convert File Path( "Air.jmp", search ) );Show( Convert File Path( "Full of Air.jmp", search ) );Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Path Variable

**Syntaxe :** Set Path Variable( name, &lt;value&gt; )

**Description :** Définit une variable de chemin d&apos;accès, qui est un nom tel que SAMPLE_DATA qui est remplacé lorsqu&apos;il se trouve dans les noms de chemin d&apos;accès.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**Syntaxe :** TripleSImport( &lt;path to xml file&gt; )

**Description :** Ouvre les fichiers Triple-S. Le format Triple-S contient un fichier xml ou sss et un fichier csv ou un fichier dat/asc. Les deux fichiers doivent porter le même nom, l&apos;extension appropriée, et doivent se trouver dans le même répertoire. Spécifier le chemin d&apos;accès xml ou sss pour importer les données.

**JMP Version ajoutée :** Avant la version 14

```jsl

TripleS Import(); //To get a file dialog to select the XML fileTripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

