# File



## Funzioni

### Close

**Sintassi:** Close( <dataTableRef|name>, <NoSave|Save( "path" )> )

**Descrizione:** Chiude la tabella di dati referenziata dal primo argomento, che per impostazione predefinita punta alla tabella di dati corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Il secondo argomento è utilizzato per salvare la tabella di dati. Utilizzare un&apos;estensione del file appropriata nel percorso per salvare le tabelle di dati in formato non JMP. Specificando NoSave non verrà richiesto di salvare o di ignorare le modifiche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Sintassi:** Close All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private>, <NoSave|Save> )

**Descrizione:** Chiude tutte le risorse aperte di un tipo specifico: tabelle di dati, journal o report.



Saranno chiuse solo le finestre nel progetto corrente (o in nessun progetto se non si sta eseguendo lo script in un progetto). Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Convert File Path

**Sintassi:** path = Convert File Path( path, <absolute|relative>, <posix|windows>, <base( path )>, <search> )

**Descrizione:** Restituisce il percorso convertito.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Copy Directory( from, to, <recursive(0|1)> )

**Descrizione:** Copia file da una directory a un&apos;altra, copiando facoltativamente le sottodirectory. Il nome della directory sarà creato nel percorso to e non deve farne parte. Restituisce 1 se la directory è stata copiata o 0 se non è stato possibile copiare la directory. Genera un errore se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Copy File( from, to )

**Descrizione:** Copia un file dal file originale in un nuovo file con lo stesso nome o con un nome diverso. Specificare un percorso completo e il nome del file per la destinazione. Restituisce 1 se il file è stato copiato o 0 se non è stato possibile copiare il file. Genera un errore se il percorso non è valido o non esiste. Impossibile copiare un file quando il percorso from o to non è valido o se il file to esiste già.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Create Directory( path )

**Descrizione:** Crea una directory. Restituisce 1 se la directory è stata creata. Restituisce 0 se la directory esiste già o se JMP non ha potuto creare la directory.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** Create Excel Workbook(<Workbook Name>, <{List of open tables}>, <Optional list of worksheet names> )

**Descrizione:** Genera una cartella di lavoro di Excel dalle tabelle di dati JMP aperte

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Esempio 2**

```jsl

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

**Sintassi:** date = Creation Date( path )

**Descrizione:** Restituisce la data di creazione di un file o directory. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Delete Directory

**Sintassi:** rc = Delete Directory( path, <Allow Undo( boolean )> )

**Descrizione:** Elimina una directory e i suoi file e sottodirectory. Restituisce 1 se la directory è stata eliminata. Restituisce 0 se la directory non è stata eliminata o se il percorso non è valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Delete File( path, <Allow Undo( boolean )> )

**Descrizione:** Elimina un file. Restituisce 1 se il file è stato eliminato. Restituisce 0 se il file non ha potuto essere eliminato. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Directory Exists

**Sintassi:** rc = Directory Exists( path )

**Descrizione:** Determina se la directory esiste. Restituisce 1 se il percorso esiste. Restituisce 0 se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### File Exists

**Sintassi:** rc = File Exists( path )

**Descrizione:** Determina se il file esiste. Restituisce 1 se il percorso del file esiste. Restituisce 0 se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Sintassi:** size = File Size( path )

**Descrizione:** Restituisce la dimensione del file al percorso specificato. Restituisce mancante quando il percorso del file non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Sintassi:** y = Files In Directory( "path", <recursive(0|1)>, <include hidden(0|1)> )

**Descrizione:** Restituisce l&apos;elenco di nomi di file in una directory che è specificata da path. Se l&apos;argomento Recursive non è specificato, nell&apos;elenco sono inclusi i nomi delle directory.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Files In Directory( "$HOME" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Find All

**Sintassi:** Find All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private> )

**Descrizione:** Trova tutte le risorse aperte di un tipo specifico: tabelle di dati, journal o report.



Saranno comprese solo le finestre nel progetto corrente (o in nessun progetto se non si sta eseguendo lo script in un progetto). Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### Get Default Directory

**Sintassi:** y = Get Default Directory()

**Descrizione:** Restituisce la directory predefinita JMP utilizzata come base per percorsi relativi successivi. Questo percorso è la directory che contiene lo script al momento in esecuzione, se lo script è salvato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Excel Worksheets

**Sintassi:** list = Get Excel Worksheets("filepath")

**Descrizione:** Restituisce un elenco di fogli di lavoro all&apos;interno di una cartella di lavoro di Excel

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get File Search Path

**Sintassi:** y = Get File Search Path()

**Descrizione:** Restituisce l&apos;elenco corrente di directory da ricercare per l&apos;apertura dei file.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get File Search Path();

```

### Get Path Variable

**Sintassi:** value = Get Path Variable( name )

**Descrizione:** Restituisce il valore di una variabile di percorso con un nome del tipo SAMPLE_DATA che viene sostituita se trovata nei nomi di percorso.

**JMP Versione aggiunta:** prima della versione 14

**Elenco**

```jsl

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

**Esempio 1**

```jsl

Names Default To Here( 1 );
Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

### Google Sheet Export

**Sintassi:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Descrizione:** Esporta una tabella di dati in un nuovo foglio di lavoro Google o in un nuovo foglio all&apos;interno di un foglio di lavoro Google esistente.

**JMP Versione aggiunta:** 15

```jsl

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

**Sintassi:** Google Sheet Import(Email(address), Spreadsheet(url|id), <Sheets("sheetName1", ... "sheetNameN")>, <Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))>)

**Descrizione:** Apre un file Google Sheet.

**JMP Versione aggiunta:** 15

```jsl

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

**Sintassi:** rc = Is Directory( path )

**Descrizione:** Determina se il percorso specificato è una directory. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Sintassi:** rc = Is Directory Writable( path )

**Descrizione:** Determina se il percorso della directory specificata è scrivibile. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Is Directory Writable( "$SAMPLE_DATA" );

```

### Is File

**Sintassi:** rc = Is File( path )

**Descrizione:** Determina se il percorso specificato è un file. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Sintassi:** rc = Is File Writable( path )

**Descrizione:** Determina se il percorso del file specificato è scrivibile. Restituisce 0 quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### JSON Literal

**Sintassi:** l = JSON Literal( string )

**Descrizione:** Restituisce un valore JSON booleano valido o un valore costante nullo in base alla specifica del parametro.

**JMP Versione aggiunta:** 14

```jsl

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

**Sintassi:** dt = JSON To Data Table( jsonstring, <Invisible( boolean ) | Private( boolean )>, <Guess(Stack(Boolean)|"Tall"|"Wide")>, <JSON Settings(...)> )

**Descrizione:** Converte testo JSON in una tabella di dati JMP

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Sintassi:** l = JSON To List( jsonstring )

**Descrizione:** Converte il testo JSON in un elenco JSL rappresentando la struttura specificata dai dati JSON.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Last Modification Date

**Sintassi:** date = Last Modification Date( path )

**Descrizione:** Restituisce l&apos;ultima data di modifica di un file o di una directory. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Load Text File

**Sintassi:** text = Load Text File( path, <Charset("best guess", <force("throw" | "alert" | "silent")>)>, <LineSeparator("\!N")>, <XMLParse>|<SASODSXML>|<JSON>|<BLOB( <readOffsetFromBegin(0)>|<readOffsetFromEnd(42)>, <readLength(2147483647)>, <base64Compressed( 1 /* 0: ascii~hex */)> )> )

**Descrizione:** Legge un intero file di testo in una variabile JSL. Load Text File() chiede di specificare un nome del file. Load Text File( path ) restituisce una stringa. L&apos;opzione XMLParse converte XML in una struttura ad albero di espressioni. SASODSXML viene analizzato come XML di default di ODS SAS. L&apos;opzione [{JSON}] converte JSON in una struttura ad albero di espressioni. L&apos;argomento BLOB restituisce dati binari in una variabile Blob JSL; i parametri con nomi facoltativi nel BLOB consentono di leggere una sottostringa dal file.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Move Directory( from, to )

**Descrizione:** Sposta una directory da un punto a un altro. Restituisce 1 se la directory è stata spostata. Restituisce 0 se non è stato possibile spostare la directory. Genera un errore se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Move File( from, to )

**Descrizione:** Sposta un file da un punto a un altro. Restituisce 1 se il file è stato spostato. Restituisce 0 se non è stato possibile spostare il file. Genera un errore se il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Descrizione:** Restituisce un riferimento a una tabella di dati o altro file di JMP o oggetto creato da un file. Se non si specifica alcun percorso, viene visualizzata la finestra di dialogo Apri. Se viene specificato il percorso di una cartella, viene aperto il browser dei file di sistema e non viene restituito alcun oggetto. Consultare Syntax Reference per una descrizione completa delle opzioni disponibili.

**JMP Versione aggiunta:** prima della versione 14

**Add-In**

```jsl

Names Default To Here( 1 );
/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Altro**

```jsl

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

**Excel**

```jsl

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

```jsl

Names Default To Here( 1 );
/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Immagine**

```jsl

Names Default To Here( 1 );
/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**PDF**

```jsl

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

**Tabella di dati**

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

**Testo**

```jsl

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

**Sintassi:** l = Parse JSON( jsonstring )

**Descrizione:** Converte il testo JSON in un elenco JSL o array associativo rappresentando la struttura specificata dai dati JSON.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Pick Directory

**Sintassi:** path = Pick Directory( <prompt>, <path>, <Show Files( boolean )> )

**Descrizione:** Viene visualizzata una finestra Apri directory riportante il nome del percorso della directory scelta. La stringa facoltativa prompt è visualizzata in alto nella finestra. Show Files può essere uno qualsiasi dei tre argomenti e utilizza un argomento booleano. 1 mostra i file nella finestra Seleziona directory, 0 li nasconde. L&apos;impostazione predefinita è 0. La stringa path specifica la directory visualizzata inizialmente dalla finestra Seleziona directory. Se si utilizza la stringa path, deve seguire la stringa prompt, mentre Show Files può trovarsi in mezzo.

**JMP Versione aggiunta:** prima della versione 14

**Semplici**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory" );

```

**Show Files**

```jsl

Names Default To Here( 1 );
Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

### Pick File

**Sintassi:** path = Pick File( <prompt>, <initial directory>, <filterList>, <first filter>, <saveFlag=0|1>, <default file>, <multiple> )

**Descrizione:** Viene visualizzata una finestra Apri riportante il nome del percorso del file scelto. L&apos;argomento filterList è un elenco di stringhe del tipo: "Etichetta|suffisso1;suffisso2;...". L&apos;argomento first filter specifica il filtro mostrato inizialmente. Il quinto argomento indica se la finestra deve funzionare come finestra di salvataggio (saveFlag = 1) o di apertura (saveFlag = 0). L&apos;argomento default file specifica il file selezionato inizialmente. L&apos;argomento multiple consente la selezione di più file se saveFlag è 0.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

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

**Esempio 2**

```jsl

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

**Esempio 3**

```jsl

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

**Sintassi:** rc = Rename Directory( old, new )

**Descrizione:** Rinomina una directory senza spostarla o copiarla; il nuovo nome NON include un percorso. Restituisce 1 se la directory è stata rinominata. Restituisce 0 se la directory non ha potuto essere rinominata o se il percorso non è valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** rc = Rename File( old, new )

**Descrizione:** Rinomina un file senza spostarlo o copiarlo; il nuovo nome NON include un percorso. Restituisce 1 se il file è stato rinominato. Restituisce 0 se il file non ha potuto essere rinominato. Genera un errore quando il percorso non è valido o non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** f = Save Text File( path, text|blob, <mode("replace"|"append")> )

**Descrizione:** Crea un file di testo con il nome del file che è specificato dall&apos;argomento path e contenente il testo specificato dall&apos;argomento della stringa text. Se il salvataggio avviene correttamente, la funzione Save Text File() restituisce il nome del percorso del file creato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### Set Default Directory

**Sintassi:** Set Default Directory( path )

**Descrizione:** Imposta la directory predefinita JMP utilizzata come base per percorsi relativi successivi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set File Search Path

**Sintassi:** Set File Search Path(path | {list of paths})

**Descrizione:** Imposta l&apos;elenco corrente di directory da ricercare per l&apos;apertura dei file. "." significa la directory corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** Set Path Variable( name, <value> )

**Descrizione:** Imposta una variabile di percorso con un nome del tipo SAMPLE_DATA che viene sostituita se trovata nei nomi di percorso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### TripleS Import

**Sintassi:** TripleSImport( <path to xml file> )

**Descrizione:** Apre file tripla S. Il formato tripla S comprende un file xml o sss e un file csv oppure dat/asc. Entrambi i file devono avere lo stesso nome con le estensioni appropriate e devono trovarsi nella stessa directory. Specificare il percorso del file xml o sss per importare i dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

