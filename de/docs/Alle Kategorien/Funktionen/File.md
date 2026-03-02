# File



### Close

**Syntax:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Beschreibung:** Schließt die vom ersten Argument angegebene Datentabelle, bei der es sich standardmäßig um die aktuelle Datentabelle im aktuellen Projekt handelt (oder in keinem Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



Das zweite Argument wird zum Speichern der Datentabelle verwendet. Verwenden Sie eine angemessene Dateierweiterung in dem Pfad, um die Datentabelle im Nicht-JMP-Format zu speichern. Durch Angabe von NoSave wird die Aufforderung zum Speichern oder Verwerfen von Änderungen umgangen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 3 );Close( exdt, NoSave );

```

### Close All

**Syntax:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**Beschreibung:** Schließt alle offenen Ressourcen eines bestimmten Typs: Datentabellen, Journale oder Berichte.



Nur Fenster im aktuellen Projekt (oder in keinem Projekt, wenn das Projekt nicht in einem Skript ausgeführt wird) werden geschlossen. Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );Wait( 3 );Close All( Data Tables, NoSave );

```

### Convert File Path

**Syntax:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**Beschreibung:** Gibt den konvertierten Pfad zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

For Each( {pv},	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},	Write(		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )		 || "\!N"	));

```

### Copy Directory

**Syntax:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**Beschreibung:** Kopiert Dateien aus einem Verzeichnis in ein anderes, kopiert optional Unterverzeichnisse. Der Verzeichnisname wird am Pfad to erstellt und darf nicht Teil des Pfads to sein. Gibt 1 zurück, wenn das Verzeichnis kopiert wurde. Gibt 0 zurück, wenn der Pfad nicht kopiert werden konnte. Gibt einen Fehler zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );rc4 = Delete Directory( "$TEMP/Loss Function Templates" );rc5 = Directory Exists( "$TEMP/Loss Function Templates" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Syntax:** rc = Copy File( from, to )

**Beschreibung:** Kopiert eine Datei aus der ursprünglichen Datei in eine neue Datei mit dem gleichen oder einem anderen Namen. Geben Sie einen vollständigen Pfad und Dateinamen für das Ziel ein. Gibt 1 zurück, wenn die Datei kopiert wurde. Gibt 0 zurück, wenn die Datei nicht kopiert werden konnte. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist. Eine Datei kann nicht kopiert werden, wenn der Pfad from oder to ungültig ist oder die Datei to bereits vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = File Exists( "$TEMP/x.jmp" );rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = Delete File( "$TEMP/x.jmp" );rc4 = File Exists( "$TEMP/x.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 );/* 0 1 1 1 0 */

```

### Create Directory

**Syntax:** rc = Create Directory( path )

**Beschreibung:** Erstellt ein Verzeichnis. Gibt 1 zurück, wenn das Verzeichnis erstellt wurde. Gibt 0 zurück, wenn das Verzeichnis bereits vorhanden ist oder JMP das Verzeichnis nicht erstellen konnte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Directory( "$TEMP/sub1" );rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );rc1 = Delete Directory( "$TEMP/sub1" );rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Syntax:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**Beschreibung:** Eine Excel-Arbeitsmappe aus geöffneten JMP-Datentabellen generieren

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Abrasion.jmp" );Create Excel Workbook(	"$TEMP/MyWorkbook.xlsx",	{"Big Class", "Abrasion"},	{"Big", "Abrasive"});

```

### Creation Date

**Syntax:** date = Creation Date( path )

**Beschreibung:** Gibt das Erstellungsdatum einer Datei oder eines Verzeichnisses zurück. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**Syntax:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**Beschreibung:** Löscht ein Verzeichnis und die darin enthaltenen Dateien und Unterverzeichnisse. Gibt 1 zurück, wenn das Verzeichnis gelöscht wurde. Gibt 0 zurück, wenn das Verzeichnis nicht gelöscht werden konnte oder der Pfad ungültig ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Directory( "$TEMP/sub1" );rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );rc1 = Delete Directory( "$TEMP/sub1" );rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Syntax:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**Beschreibung:** Löscht eine Datei. Gibt 1 zurück, wenn die Datei gelöscht wurde. Gibt 0 zurück, wenn die Datei nicht gelöscht werden konnte. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = File Exists( "$TEMP/x.jmp" );rc2 = Delete File( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/x.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**Syntax:** rc = Directory Exists( path )

**Beschreibung:** Bestimmt, ob das Verzeichnis vorhanden ist. Gibt 1 zurück, wenn der Pfad vorhanden ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),	"ok",	"missing!");

```

### File Exists

**Syntax:** rc = File Exists( path )

**Beschreibung:** Bestimmt, ob die Datei vorhanden ist. Gibt 1 zurück, wenn der Dateipfad vorhanden ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),	"ok",	"missing!");

```

### File Size

**Syntax:** size = File Size( path )

**Beschreibung:** Gibt die Größe der Datei am vorgegebenen Pfad zurück. Gibt fehlend zurück, wenn der Dateipfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Syntax:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**Beschreibung:** Gibt die Liste von Dateinamen in einem von path angegebenen Verzeichnis zurück. Wenn das Argument Recursive nicht angegeben ist, werden Verzeichnisnamen in die Liste aufgenommen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Files In Directory( "$HOME" );

```

**Beispiel 2**

```jsl

Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),	Contains( Lowercase( fn ), "stacked" ));

```

### Find All

**Syntax:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**Beschreibung:** Findet alle offenen Ressourcen eines bestimmten Typs: Datentabellen, Journale oder Berichte.



Nur Fenster im aktuellen Projekt (oder in keinem Projekt, wenn das Projekt nicht in einem Skript ausgeführt wird) werden eingeschlossen. Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );windows = Find All( Data Tables );For( i = 1, i <= N Items( windows ), i++,	Write( Char( windows[i] << Get Window Title ) || "\!N" ));

```

### Get Default Directory

**Syntax:** y = Get Default Directory()

**Beschreibung:** Gibt das JMP-Standardverzeichnis zurück, das als Basis für nachfolgende relative Pfade gilt. Dieser Pfad ist das Verzeichnis, das das aktuell ausgeführte Skript enthält, wenn das Skript gespeichert wurde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Get Default Directory() );Set Default Directory( "$SAMPLE_DATA" );Show( Get Default Directory() );

```

### Get Excel Worksheets

**Syntax:** list = Get Excel Worksheets("filepath")

**Beschreibung:** Gibt eine Liste von Arbeitsblättern in einer Excel-Arbeitsmappe zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );Show( sheetList );

```

### Get File Search Path

**Syntax:** y = Get File Search Path()

**Beschreibung:** Gibt die aktuelle Liste der Verzeichnisse zurück, um nach zu öffnenden Dateien zu suchen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get File Search Path();

```

### Get Path Variable

**Syntax:** value = Get Path Variable( name )

**Beschreibung:** Gibt den Wert einer Pfadvariablen zurück, z. B. einen Namen wie SAMPLE_DATA, der, wenn er in Pfadnamen gefunden wird, ersetzt wird.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTSSee full listing of Path Variables in the other exampleSee also Convert File Path() and Set Path Variable() */

```

#### Liste

```jsl

// Run for a Path Variable listingpath vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME","USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS","SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );New Window( "Path Variables",	<<Type( "Dialog" ),	Outline Box( "Path Variables",		H List Box(			Button Box( "Open Paths",				For Each( {row}, tbl << Get Selected Rows, {path},					path = tbl[String Col Box( 2 )] << Get( row );					Open( path );				)			),			Button Box( "Copy Paths",				If( N Items( tbl << Get Selected Rows ),					Set Clipboard(						Concat Items(							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),								tbl[String Col Box( 2 )] << Get( row )							),							"\!N"						)					)				)			)		),		window:tbl = Table Box(			String Col Box( "Variable", path vars ),			String Col Box( "Path",				Transform Each( {var}, path vars, Get Path Variable( var ) )			),			<<Set Selectable Rows		)	));

```

### Google Sheet Export

**Syntax:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Beschreibung:** Exportiert eine Datentabelle in eine neue Google-Tabelle oder eine neue Tabelle in eine vorhandene Google-Tabellenkalkulation.

**JMP Version hinzugefügt:** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your emaildt = Open( "$SAMPLE_DATA/Big Class.jmp" );Google Sheet Export(	dt,	Email( email ),	New Spreadsheet( "JSL Example" ),	Sheet Name( "Example 1" ));

```

### Google Sheet Import

**Syntax:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**Beschreibung:** Öffnet eine Google Tabellen-Datei.

**JMP Version hinzugefügt:** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your emailspreadsheet ="https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/";                                         Google Sheet Import(	Email( email ),	Spreadsheet( spreadsheet ),	Sheets( "Sheet1", "Sheet2" ),	Sheet Settings(		Has Column Headers( 0 ),		Data Starts on Row( 1 ),		Cell Range( "A1:C2" ),		Import Cell Colors( 0 ),		Suppress Empty Columns( 1 )	));

```

### Is Directory

**Syntax:** rc = Is Directory( path )

**Beschreibung:** Festlegen, ob der vorgegebene Pfad ein Verzeichnis ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Syntax:** rc = Is Directory Writable( path )

**Beschreibung:** Festlegen, ob der vorgegebene Verzeichnispfad schreibbar ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**Syntax:** rc = Is File( path )

**Beschreibung:** Festlegen, ob der vorgegebene Pfad eine Datei ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Syntax:** rc = Is File Writable( path )

**Beschreibung:** Festlegen, ob der vorgegebene Dateipfad schreibbar ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**Syntax:** l = JSON Literal( string )

**Beschreibung:** Gibt einen gültigen Booleschen JSON-Wert oder null konstanten Wert zurück, abhängig von der Spezifikation des Parameters.

**JMP Version hinzugefügt:** 14

```jsl

myJSON ="{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";parsed = Parse JSON( myJSON );x = parsed["myBool"];Show( x );If( x == JSON Literal( true ),	Show( "Worked" ),	Show( "Didn't work" ));

```

### JSON To Data Table

**Syntax:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**Beschreibung:** JSON-Text in eine JMP-Datentabelle umwandeln

**JMP Version hinzugefügt:** 14

```jsl

dt = JSON To Data Table(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");

```

### JSON To List

**Syntax:** l = JSON To List( jsonstring )

**Beschreibung:** JSON-Text in eine JSL-Liste umwandeln, die die von den JSON-Daten angegebene Struktur darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

l = JSON To List(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");Show( l );

```

### Last Modification Date

**Syntax:** date = Last Modification Date( path )

**Beschreibung:** Gibt das letzte Änderungsdatum einer Datei oder eines Verzeichnisses zurück. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**Syntax:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**Beschreibung:** Liest eine vollständige Textdatei in eine JSL-Variable ein. Load Text File() fragt einen Dateinamen ab. Load Text File( path ) gibt eine Zeichenkette zurück. Die Option XMLParse konvertiert XML in einen Ausdrucksbaum. SASODSXML wird als SAS ODS Standard-XML analysiert. Die Option [{JSON}] konvertiert JSON in einen Ausdrucksbaum. Das Argument BLOB gibt Binärdaten in einer JSL-Blobvariablen zurück. Optional benannte Parameter von BLOB ermöglichen das Lesen einer Teilzeichenkette aus der Datei.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = Load Text File(	Get Path Variable( "sample_import_data" ) || "/animals.txt"/*, Charset("ascii")*//*, LineSeparator("\!r\!n")*//*, BLOB*/);Word( 4, ex, " \!t\!n\!r" );

```

### Move Directory

**Syntax:** rc = Move Directory( from, to )

**Beschreibung:** Verschiebt ein Verzeichnis von einem Ort an einen anderen. Gibt 1 zurück, wenn das Verzeichnis verschoben wurde. Gibt 0 zurück, wenn das Verzeichnis nicht verschoben werden konnte. Gibt einen Fehler zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Directory( "$TEMP/subB" );Delete Directory( "$TEMP/Loss Function Templates" );rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );Create Directory( "$TEMP/subB" );rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );rc2 = Directory Exists( "$TEMP/Loss Function Templates" );rc3 = Directory Exists( "$TEMP/subB" );rc4 = Delete Directory( "$TEMP/subB" );rc5 = Directory Exists( "$TEMP/subB" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Syntax:** rc = Move File( from, to )

**Beschreibung:** Verschiebt eine Datei von einem Ort an einen anderen. Gibt 1 zurück, wenn die Datei verschoben wurde. Gibt 0 zurück, wenn die Datei nicht verschoben werden konnte. Gibt einen Fehler zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( File Exists( "$TEMP/y.jmp" ),	Delete File( "$TEMP/y.jmp" ));rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/y.jmp" );rc4 = Delete File( "$TEMP/y.jmp" );rc5 = File Exists( "$TEMP/y.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Open

**Syntax:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Beschreibung:** Gibt eine Referenz auf eine Datentabelle oder eine andere JMP-Datei oder auf ein über eine Datei erstelltes Objekt zurück. Wenn kein Pfad angegeben ist, wird das Dialogfeld „Öffnen“ angezeigt. Wenn ein Ordnerpfad angegeben ist, wird der Dateibrowser des Systems geöffnet und kein Objekt zurückgegeben. Eine vollständige Beschreibung der verfügbaren Optionen finden Sie in der Syntaxreferenz.

**JMP Version hinzugefügt:** Vor Version 14

#### Add-In

```jsl

/* Installing Add-In:Open( Add-In to open,    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

#### Bild

```jsl

/* Picture file imported as a picture object */pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

#### Datentabelle

```jsl

/* Data tables, other JMP files, external files:   Open( filePath,     <Invisible | Private>,     <Select Columns( "col", ... )>,     <Ignore Columns( "col", ... )>,     <Add to Recent Files(bool)>,     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>     <Force Refresh>,     <Enable Filter Views(bool)>,     <"file type">   )*///Basic data table opendt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );//Data table open with some optionsdt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

#### Excel

```jsl

/* Excel files imported into a data table:   Open( excelFilePath,     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,     <Use for all sheets(0|1)>,     <Concatenate Worksheets(0|1)>,     <Create Concatenation Column(0|1)>,     <Worksheet Settings( 0|1,       Has Column Headers(0|1),       Number of Rows in Headers(n),       Headers Start on Row(n),       Data Starts on Row(n),       Data Starts on Column(n),       Data Ends on Row(n),       Data Ends on Column(n),       Replicated Spanned Rows(0|1),       Suppress Hidden Rows(0|1),       Suppress Hidden Columns(0|1),       Treat as Hierarchy(0|1)     )>,     <Invisible | Private>   )*//* Using the Excel Wizard dialog:   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  */dt = Open(	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",	Worksheets( "Ungrouped Team Results" ),	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) ));

```

#### Folder

```jsl

/* Open of folder launches file browser */Open( "$SAMPLE_DATA" );

```

#### PDF

```jsl

/* PDF file imported as one or multiple data tablesopen(pdfFilePath,    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |    PDF Text(<Pages(n, ...)>, <sort>) |    PDF Wizard);*/dt = Open( "$SAMPLE_DATA\big class.jmp" );w = New Window( "test", Data Table Box( dt ) );w << save picture( "$DOCUMENTS\test.pdf", pdf );pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rowspdftable2 = Open(	"$DOCUMENTS\test.pdf",	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) ));

```

#### Sonstige

```jsl

/* Other options:   SAS File imported as a data table:   Open( sasFilePath,     <Invisible | Private>,     <Use Labels for Var Names(0|1)>,     <Password( "password" )>   )      SAS Transport File imported as a data table, members are separate tables within the larger file:   Open( sasTransportFilePath,     <Use Labels for Var Names(0|1)>,     <Members({"Table1", "Table2"})>   )      HTML file imported as a data table:   Open( htmlFilePath,     <Invisible | Private>,     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>   )      Get column names as a list for a JMP Data Table without opening the table:   Open( jmpDataTableFilePath,      "Column Names Only"   )      esriShapeFile opened for use as a map shape data table:   Open( esriShapeFilePath,     <Invisible | Private>,     Columns( Shape=numeric(n),     Part=numeric(n),     X=numeric(n),     Y=numeric(n) ),              Polygon Import Options(Simplification Factor(f), Geodesic(g))   )*///SAS Example:dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );// HTML Example:dt2 = Open(	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) ));// Column Names Only Example: colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );// SHP Shapefile Example with polygon simplification: Open(	"$SAMPLE_IMPORT_DATA/parishes.shp",	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) ));

```

#### Text

```jsl

/* Text files imported into a data table:   Open( textFilePath,     <Invisible | Private>,     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"     <Number of Columns(n)>,     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,     <EOF Other ("char")>,     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,     <EOL Other ("char")>,     <Strip Quotes|Strip Enclosing Quotes (0|1)>,     <Labels|Table Contains Column Headers (0|1)>,     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".     Treat Empty Columns as Numeric(0|1)     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.     <Column Names Start|Column Names are on line (n)>,     <Data Starts|Data starts on line (n)>,     <Lines to Read>, // a number     <Use Apostrophe as Quotation Mark>,     <CompressNumericColumns(0|1)>,     <CompressCharacterColumns(0|1)>,     <CompressAllowListCheck(0|1)>   )*/dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Parse JSON

**Syntax:** l = Parse JSON( jsonstring )

**Beschreibung:** JSON-Text in eine JSL-Liste oder ein assoziatives Array umwandeln, die bzw. das die von den JSON-Daten angegebene Struktur darstellt.

**JMP Version hinzugefügt:** 14

```jsl

l = Parse JSON(	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]");Show( l );

```

### Pick Directory

**Syntax:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**Beschreibung:** Erzeugt ein Fenster „Verzeichnis öffnen“ und gibt den Pfad des ausgewählten Verzeichnisses zurück. Die optionale Zeichenkette prompt wird im oberen Bereich des Fensters angezeigt. Bei Show Files kann es sich um eines der drei Argumente handeln, und akzeptiert wird ein Boolesches Argument. 1 zeigt Dateien im Verzeichnisauswahlfenster an, 0 zeigt keine Dateien an. Der Standardwert ist 0. Die Zeichenkette path gibt das Verzeichnis an, das zuerst im Verzeichnisauswahlfenster angezeigt wird. Wenn Sie die Zeichenkette path verwenden, muss sie auf die Zeichenkette prompt folgen, doch Show Files kann sich zwischen den beiden befinden.

**JMP Version hinzugefügt:** Vor Version 14

#### Einfach

```jsl

Pick Directory( "Select a directory" );

```

#### Show Files

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

### Pick File

**Syntax:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**Beschreibung:** Zeigt dem Benutzer das Fenster „Öffnen“ an und gibt den Pfad der ausgewählten Datei zurück. Das Argument filterList ist eine Liste von Zeichenketten im Format: „Bezeichnung|Suffix1;Suffix2;...“. Das Argument first filter gibt an, welcher Filter anfänglich gezeigt wird. Das fünfte Argument gibt an, ob das Fenster zum Speichern (saveFlag = 1) oder Öffnen (saveFlag = 0) dient. Das Argument default file gibt die anfänglich ausgewählte Datei an. Das Argument multiple ermöglicht, dass mehrere Dateien ausgewählt werden können, wenn saveFlag = 0.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Pick File(	"Select JMP File",	"$DOCUMENTS",	{"JMP Files|jmp;jsl;jrn", "All Files|*"},	1,	0,	"newJmpFile.jmp");

```

**Beispiel 2**

```jsl

Files = Pick File(	"Select JMP File",	"$SAMPLE_DATA",	{"JMP Files|jmp;jsl;jrn", "All Files|*"},	1,	0,	"",	"multiple");For( i = 1, i <= N Items( Files ), i++,	Try( Open( Files[i] ) ));

```

**Beispiel 3**

```jsl

filename = Pick File(	"Save As Text",	"$DOCUMENTS",	{"Text File|txt"},	1,	1, // Save Flag	"export.txt");If( Is Missing( filename ),	Print( "Canceled" ),	Save Text File( filename, "The quick brown fox" ));

```

### Rename Directory

**Syntax:** rc = Rename Directory( old, new )

**Beschreibung:** Benennt ein Verzeichnis um, ohne es zu verschieben oder zu kopieren; der neue Name enthält KEINEN Pfad. Gibt 1 zurück, wenn das Verzeichnis umbenannt wurde. Gibt 0 zurück, wenn das Verzeichnis nicht umbenannt werden konnte oder der Pfad ungültig ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Directory( "$TEMP/subD" );Delete Directory( "$TEMP/Loss Function Templates" );rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );rc2 = Directory Exists( "$TEMP/Loss Function Templates" );rc3 = Directory Exists( "$TEMP/subD" );rc4 = Delete Directory( "$TEMP/subD" );rc5 = Directory Exists( "$TEMP/subD" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Syntax:** rc = Rename File( old, new )

**Beschreibung:** Benennt eine Datei um, ohne sie zu verschieben oder zu kopieren; der neue Name enthält KEINEN Pfad. Gibt 1 zurück, wenn die Datei umbenannt wurde. Gibt 0 zurück, wenn die Datei nicht umbenannt werden konnte. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );rc2 = File Exists( "$TEMP/x.jmp" );rc3 = File Exists( "$TEMP/y.jmp" );rc4 = Delete File( "$TEMP/y.jmp" );rc5 = File Exists( "$TEMP/y.jmp" );Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Save Text File

**Syntax:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**Beschreibung:** Erzeugt eine Textdatei mit dem vom Argument path angegebenen Dateinamen und dem vom Zeichenkettenargument text angegebenen Inhalt. Wenn der Speichervorgang erfolgreich ist, gibt die Funktion Save Text File() den Pfadnamen der erstellten Datei zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**Syntax:** Set Default Directory( path )

**Beschreibung:** Legt das JMP-Standardverzeichnis fest, das als Basis für nachfolgende relative Pfade gilt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );Open( "Big Class.jmp" );

```

### Set File Search Path

**Syntax:** Set File Search Path(path | {list of paths})

**Beschreibung:** Legt die aktuelle Liste der Verzeichnisse fest, um nach zu öffnenden Dateien zu suchen. „.“ist das aktuelle Verzeichnis.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set File Search Path(	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )});Show( Get File Search Path() );Show( Convert File Path( "Air.jmp", search ) );Show( Convert File Path( "Full of Air.jmp", search ) );Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Path Variable

**Syntax:** Set Path Variable( name, &lt;value&gt; )

**Beschreibung:** Legt eine Pfadvariable fest, z. B. einen Namen wie SAMPLE_DATA, der, wenn er in Pfadnamen gefunden wird, ersetzt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**Syntax:** TripleSImport( &lt;path to xml file&gt; )

**Beschreibung:** Öffnet Triple-S-Dateien. Das Triple-S-Format besteht aus einer XML- oder SSS-Datei und entweder einer CSV-Datei oder einer DAT-/ASC-Datei. Beide Dateien müssen den gleichen Namen mit der entsprechenden Erweiterung haben und müssen sich im selben Verzeichnis befinden. Geben Sie den Pfad der XML- oder SSS-Datei an, um die Daten zu importieren.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

TripleS Import(); //To get a file dialog to select the XML fileTripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

