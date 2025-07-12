# Multiple File Import



## Costruttori associati

### Multiple File Import

**Sintassi:** mfiObj = Multiple File Import();

**Descrizione:** Crea un oggetto di importazione di più file; l&apos;oggetto accetta messaggi per definire una cartella, filtrare file e importare. Per aprire una finestra di dialogo usare il messaggio "Crea finestra". Per importare immediatamente utilizzare il messaggio "Importa dati" che restituirà un elenco delle tabelle che sono state create.

```jsl

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

## Messaggi degli elementi

### Create Window

**Sintassi:** obj << Create Window

**Descrizione:** Visualizza una finestra con le impostazioni correnti.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << set folder( "$sample_import_data" );
mfi << create window();

```

### Get Add File Date Column

**Sintassi:** obj << Get Add File Date Column

**Descrizione:** Restituisce 1 se la tabella importata ha una colonna per il nome del file da cui è stata importata la riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );
mfi << Get Add File Date Column();

```

### Get Add File Name Column

**Sintassi:** obj << Get Add File Name Column

**Descrizione:** Restituisce 1 se la tabella importata ha una colonna per il nome del file da cui è stata importata la riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );
mfi << Get Add File Name Column();

```

### Get Add File Size Column

**Sintassi:** obj << Get Add File Size Column

**Descrizione:** Restituisce 1 se la tabella importata avrà una colonna per la dimensione del file da cui è stata importata la riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );
mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**Sintassi:** obj << Get CSV Allow Numeric

**Descrizione:** Restituisce 1 se le colonne numeriche saranno create da dati numerici apparenti.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**Sintassi:** obj << Get CSV EOF Comma

**Descrizione:** Impostare a 1 per usare una virgola per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**Sintassi:** obj << Get CSV EOF Other

**Descrizione:** Impostare al valore di separazione dei campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**Sintassi:** obj << Get CSV EOF Space

**Descrizione:** Impostare a 1 per usare uno spazio per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**Sintassi:** obj << Get CSV EOF Spaces

**Descrizione:** Impostare a 1 per usare uno spazio per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**Sintassi:** obj << Get CSV EOF Tab

**Descrizione:** Impostare a 1 per usare una tabulazione per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**Sintassi:** obj << Get CSV EOL CR

**Descrizione:** Restituisce 1 se si usa CR come valore di separazione delle linee che verranno utilizzate per creare righe diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**Sintassi:** obj << Get CSV EOL CRLF

**Descrizione:** Restituisce 1 se si usa CRLF come valore di separazione delle linee che verranno utilizzate per creare righe diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**Sintassi:** obj << Get CSV EOL LF

**Descrizione:** Restituisce 1 se si usa LF come valore di separazione delle linee che verranno utilizzate per creare righe diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**Sintassi:** obj << Get CSV EOL Other

**Descrizione:** Ottiene il valore personalizzato che separa le linee nel file di input. Questo valore consente di creare righe nell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**Sintassi:** obj << Get CSV EOL Semicolon

**Descrizione:** Restituisce 1 se il punto e virgola rappresenta le linee tra le righe.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**Sintassi:** obj << Get CSV Escape

**Descrizione:** Ottiene un carattere che consente di evitare caratteri speciali come fine campo, fine riga o delimitatore di virgolette.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Escape();

```

### Get CSV First Data Line

**Sintassi:** obj << Get CSV First Data Line

**Descrizione:** Il numero di riga nel file di importazione che contiene la prima riga di dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**Sintassi:** obj << Get CSV First Header Line

**Descrizione:** Ottiene la prima riga nel file di importazione le cui intestazioni verranno utilizzate per creare i nomi delle colonne.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );
mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**Sintassi:** obj << Get CSV Has Headers

**Descrizione:** Restituisce 1 se durante l&apos;importazione si utilizzeranno le impostazioni di intestazione.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**Sintassi:** obj << Get CSV Number Of Header Lines

**Descrizione:** Ottiene il numero di righe delle intestazioni che verranno utilizzate per i nomi delle colonne.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );
mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**Sintassi:** obj << Get CSV Quote

**Descrizione:** Ottiene il valore che separa le stringhe tra virgolette.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Quote();

```

### Get Charset

**Sintassi:** obj << Get Charset

**Descrizione:** Restituisce il set di caratteri che verrà utilizzato per l&apos;importazione dei dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Charset();

```

### Get Date Count

**Sintassi:** obj << Get Date Count

**Descrizione:** Restituisce il numero di file che rientrano nel range del filtro delle date se questo è abilitato, in caso contrario restituisce il numero totale di file.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$downloads" );
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Count();

```

### Get Date Enable

**Sintassi:** obj << Get Date Enable

**Descrizione:** Restituisce 1 se il filtro delle date è abilitato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Date Enable();

```

### Get Date Filter

**Sintassi:** obj << Get Date Filter

**Descrizione:** Restituisce il filtro delle date corrente.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**Sintassi:** obj << Get Excel Add Sheet Name Column

**Descrizione:** Restituisce 1 se alla tabella importata verrà aggiunta una colonna che ha il nome del foglio di calcolo da cui provengono i dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**Sintassi:** obj << Get Excel Best Guess

**Descrizione:** Restituisce 1 se i dati e le intestazioni di colonna saranno individuati dinamicamente. Restituisce 0 se le altre impostazioni di Excel saranno utilizzate durante l&apos;importazione di dati Excel.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**Sintassi:** obj << Get Excel Column Headers As Hierarchies

**Descrizione:** Restituisce 1 se le celle del foglio di calcolo che si trovano nelle righe di intestazione che si estendono su più celle orizzontalmente saranno trattate come gerarchie.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**Sintassi:** obj << Get Excel Column Name Separator

**Descrizione:** Ottiene la stringa da utilizzare quando si concatenano più celle in nomi di intestazioni di colonna.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**Sintassi:** obj << Get Excel First Data Column

**Descrizione:** Restituisce la prima colonna non vuota del foglio di calcolo da importare come dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**Sintassi:** obj << Get Excel First Data Line

**Descrizione:** Restituisce la prima riga non vuota del foglio di calcolo da importare come dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**Sintassi:** obj << Get Excel First Header Line

**Descrizione:** Restituisce la prima riga non vuota del foglio di calcolo da importare come intestazione di colonna.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**Sintassi:** obj << Get Excel Has Headers

**Descrizione:** Restituisce 1 se le intestazioni saranno importate dai fogli di lavoro e 0 in caso contrario.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**Sintassi:** obj << Get Excel Import Color Cells

**Descrizione:** Restituisce 1 se verrà importato il colore di sfondo delle celle di dati del foglio di calcolo.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**Sintassi:** obj << Get Excel Last Data Column

**Descrizione:** Restituisce l&apos;ultima colonna nell&apos;area dei dati del foglio di calcolo da importare. Se viene restituito un valore mancante, l&apos;ultima colonna sarà individuata dinamicamente.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**Sintassi:** obj << Get Excel Last Data Row

**Descrizione:** Restituisce l&apos;ultima riga nell&apos;area dei dati del foglio di calcolo da importare. Se viene restituito un valore mancante, l&apos;ultima riga sarà individuata dinamicamente.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**Sintassi:** obj << Get Excel Limit Column Type Detection

**Descrizione:** Restituisce 0 se tutte le celle del foglio di calcolo in ciascuna colonna saranno selezionate quando viene rilevato il tipo di dati della colonna e 1 se sarà selezionato solo un sottoinsieme. La limitazione del rilevamento può migliorare le performance con fogli di calcolo di grandi dimensioni.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**Sintassi:** obj << Get Excel Multiple Series Stack

**Descrizione:** Restituisce 1 se le colonne estese saranno impilate se "Imposta intestazioni di colonna Excel come gerarchie" è impostato a 1.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**Sintassi:** obj << Get Excel Number of Header Lines

**Descrizione:** Restituisce il numero di righe nel foglio di calcolo che saranno importate come intestazioni delle colonne.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**Sintassi:** obj << Get Excel Replicate Data In Spanned Rows

**Descrizione:** Per righe di intestazione multiple unite verticalmente, imposta a 1 per ripetere il valore.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**Sintassi:** obj << Get Excel Replicate Headers In Spanned Rows

**Descrizione:** Restituisce 1 se le celle di intestazione del foglio di calcolo unite avranno valori di cella duplicati quando si crea il nome della colonna della tabella JMP.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**Sintassi:** obj << Get Excel Suppress Empty Columns

**Descrizione:** Imposta a 1 per impedire l&apos;importazione di colonne vuote.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**Sintassi:** obj << Get Excel Suppress Hidden Columns

**Descrizione:** Restituisce 1 se le colonne nascoste non saranno importate.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**Sintassi:** obj << Get Excel Suppress Hidden Rows

**Descrizione:** Restituisce 1 se le righe nascoste non verranno importate.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**Sintassi:** obj << Get Excel Worksheet Filter

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Worksheet Filter;

```

### Get File List

**Sintassi:** obj << Get File List

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

```

### Get Folder

**Sintassi:** obj << Get Folder

**Descrizione:** Restituisce il nome della cartella.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder;

```

### Get Folder Count

**Sintassi:** obj << Get Folder Count

**Descrizione:** Restituisce il numero di file nella cartella.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder Count;

```

### Get Import Callback

**Sintassi:** obj << Get Import Callback

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Get Import Mode

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );
mfi << Get Import Mode();

```

### Get JSON Guess

**Sintassi:** obj << Get JSON Guess

**Descrizione:** Restituisce il metodo integrato di importazione dei dati JSON per creare tabelle di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Guess();

```

### Get JSON Method

**Sintassi:** obj << Get JSON Method

**Descrizione:** Restituire il metodo al momento utilizzato per l&apos;importazione dei dati JSON.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Method();

```

### Get JSON Settings

**Sintassi:** obj << Get JSON Settings

**Descrizione:** Restituisce il JSL personalizzato che importa dati JSON.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Settings();

```

### Get Name Count

**Sintassi:** obj << Get Name Count

**Descrizione:** Restituisce il numero di file che corrisponde al filtro dei nomi corrente se è impostata l&apos;opzione Attiva imposta nomi o il numero totale di file in caso contrario.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Name Count();

```

### Get Name Enable

**Sintassi:** obj << Get Name Enable

**Descrizione:** Restituisce 1 se il filtro dei nomi corrente verrà applicato per filtrare i file da includere.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );
mfi << Get Name Enable();

```

### Get Name Filter

**Sintassi:** obj << Get Name Filter

**Descrizione:** Restituisce il filtro dei nomi corrente.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );
mfi << Set Name Enable( 1 );
mfi << Get Name Filter();

```

### Get PDF Method

**Sintassi:** obj << Get PDF Method

**Descrizione:** Restituisce il metodo utilizzato correntemente per l&apos;importazione dei dati PDF.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Method();

```

### Get PDF Settings

**Sintassi:** obj << Get PDF Settings

**Descrizione:** Restituisce il JSL personalizzato che importa i dati PDF.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Settings();

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Creare uno script dalle impostazioni correnti.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Script();

```

### Get Show Hidden

**Sintassi:** obj << Get Show Hidden

**Descrizione:** Indica se i file nascosti sono inclusi

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );
mfi << Get Show Hidden();

```

### Get Size Count

**Sintassi:** obj << Get Size Count

**Descrizione:** Restituisce il numero di file che corrisponde al filtro delle dimensioni corrente se è impostata l&apos;opzione Attiva imposta dimensioni o il numero totale di file in caso contrario.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Documents" );
mfi << Set Size Filter( {0, 1000} );
mfi << Set Size Enable( 1 );
Print( mfi << Get Size Count() );
mfi << Set Size Enable( 0 );
Print( mfi << Get Size Count() );

```

### Get Size Enable

**Sintassi:** 0|1 = obj << Get Size Enable

**Descrizione:** Restituisce 1 se il filtro delle dimensioni è abilitato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Enable();

```

### Get Size Filter

**Sintassi:** obj << Get Size Filter

**Descrizione:** Restituisce un elenco il cui primo elemento è la più piccola dimensione di file inclusa e il cui secondo numero è la più grande dimensione di file inclusa.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Filter();

```

### Get Stack Mode

**Sintassi:** obj << Get Stack Mode

**Descrizione:** Restituisce "Impila simili" se durante l&apos;importazione i file di input simili saranno combinati in un&apos;unica tabella o "Tabella per file" se i file di input saranno combinati in due o più tabelle.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Stack Mode();

```

### Get Subfolders

**Sintassi:** obj << Get Subfolders

**Descrizione:** Restituisce 1 se i file nelle sottocartelle sono inclusi.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );
mfi << Get Subfolders();

```

### Get Use File List

**Sintassi:** obj << Get Use File List

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

```

### Get XML Guess

**Sintassi:** obj << Get XML Guess

**Descrizione:** Restituisce il metodo integrato di importazione dei dati XML per creare tabelle di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Guess();

```

### Get XML Method

**Sintassi:** obj << Get XML Method

**Descrizione:** Restituire il metodo al momento utilizzato per l&apos;importazione dei dati XML.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Method();

```

### Get XML Settings

**Sintassi:** obj << Get XML Settings

**Descrizione:** Restituisce un jsl personalizzato per l&apos;importazione dei dati xml.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Settings();

```

### Import Data

**Sintassi:** list of data tables = obj << Import Data

**Descrizione:** Importa i dati in base alle impostazioni correnti e restituisce un elenco di tabelle di dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Set Add File Date Column

**Sintassi:** obj << Set Add File Date Column

**Descrizione:** Impostare la creazione di una colonna con la dimensione del file da cui è stata importata la riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**Sintassi:** obj << Set Add File Name Column

**Descrizione:** Impostare la creazione di una colonna con il nome del file da cui è stata importata la riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**Sintassi:** obj << Set Add File Size Column

**Descrizione:** Impostare la creazione di una colonna con la dimensione del file da cui è stata importata la riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**Sintassi:** obj << Set CSV Allow Numeric

**Descrizione:** Impostare a 1 per consentire la creazione di colonne numeriche da dati numerici apparenti o a 0 per creare colonne tutte alfanumeriche.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**Sintassi:** obj << Set CSV EOF Comma

**Descrizione:** Impostare a 1 per usare una virgola per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**Sintassi:** obj << Set CSV EOF Other

**Descrizione:** Impostare al valore di separazione dei campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**Sintassi:** obj << Set CSV EOF Space

**Descrizione:** Impostare a 1 per usare uno spazio per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**Sintassi:** obj << Set CSV EOF Spaces

**Descrizione:** Impostare a 1 per usare uno spazio per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**Sintassi:** obj << Set CSV EOF Tab

**Descrizione:** Impostare a 1 per usare una tabulazione per separare i campi che verranno utilizzati per creare colonne diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**Sintassi:** obj << Set CSV EOL CR

**Descrizione:** Impostare a 1 per usare CR come valore di separazione delle linee che verranno utilizzate per creare righe diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**Sintassi:** obj << Set CSV EOL CRLF

**Descrizione:** Impostare a 1 per usare CRLF come valore di separazione delle linee che verranno utilizzate per creare righe diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**Sintassi:** obj << Set CSV EOL LF

**Descrizione:** Impostare a 1 per usare LF come valore di separazione delle linee che verranno utilizzate per creare righe diverse.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**Sintassi:** obj << Set CSV EOL Other

**Descrizione:** Imposta il valore personalizzato che separa le linee nel file di input. Questo valore consente di creare righe nell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**Sintassi:** obj << Set CSV EOL Semicolon

**Descrizione:** Impostare a 1 per usare il punto e virgola per rappresentare le linee tra le righe.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**Sintassi:** obj << Set CSV Escape

**Descrizione:** Imposta un carattere che consente di evitare i caratteri speciali come fine campo, fine riga o delimitatore di virgolette.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**Sintassi:** obj << Set CSV First Data Line

**Descrizione:** Il numero di riga nel file di importazione che contiene la prima riga di dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**Sintassi:** obj << Set CSV First Header Line

**Descrizione:** Imposta la prima riga nel file di importazione le cui intestazioni verranno utilizzate per creare i nomi delle colonne.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**Sintassi:** obj << Set CSV Has Headers

**Descrizione:** Impostare a 1 per usare "CSV Prima riga intestazione" e "CSV Numero di righe di intestazione".

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**Sintassi:** obj << Set CSV Number Of Header Lines

**Descrizione:** Imposta il numero di righe delle intestazioni che verranno utilizzate per i nomi delle colonne.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**Sintassi:** obj << Set CSV Quote

**Descrizione:** Imposta il valore che separa le stringhe tra virgolette.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Quote( "'" );

```

### Set Charset

**Sintassi:** obj << Set Charset

**Descrizione:** Imposta il set di caratteri che deve essere utilizzato durante l&apos;importazione dei dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**Sintassi:** obj << Set Date Enable

**Descrizione:** Abilita il filtro di data e ora. Il valore predefinito è Disattivato, che indica che il filtro delle date verrà ignorato anche se è stato impostato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Date Filter

**Sintassi:** obj << Set Date Filter( {start of date time range, end of date time range} )

**Descrizione:** Filtra i file inclusi in base al range di data e ora.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**Sintassi:** obj << Set Excel Add Sheet Name Column

**Descrizione:** Se l&apos;opzione è impostata a 1 verrà aggiunta una colonna alla tabella importata che avrà il nome del foglio di calcolo da cui provengono i dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**Sintassi:** obj << Set Excel Best Guess

**Descrizione:** Trova dinamicamente i dati in ciascun foglio di calcolo ed effettua un&apos;ipotesi migliore per i nomi delle colonne. Se questa opzione è impostata, non vengono utilizzati altri parametri di Excel a eccezione di "Imposta colonna Excel Aggiungi nome foglio".

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**Sintassi:** obj << Set Excel Column Headers As Hierarchies

**Descrizione:** Imposta a 1 per trattare più righe di intestazione di colonna come gerarchie. In questo modo le informazioni vengono riorganizzate in celle estese nelle intestazioni e i dati vengono inseriti nelle righe della tabella generata.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Excel Column Name Separator

**Descrizione:** Imposta una stringa da usare come separatore quando si concatenano più celle in nomi di intestazioni di colonna.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**Sintassi:** obj << Set Excel First Data Column

**Descrizione:** Imposta il numero della prima colonna non vuota del foglio di calcolo che verrà importata come dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**Sintassi:** obj << Set Excel First Data Line

**Descrizione:** Imposta il numero della prima riga non vuota del foglio di calcolo che verrà importata come dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**Sintassi:** obj << Set Excel First Header Line

**Descrizione:** Imposta il numero della prima riga non vuota nel foglio di calcolo che verrà utilizzato per definire le intestazioni delle colonne.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**Sintassi:** obj << Set Excel Has Headers

**Descrizione:** Se questa opzione è impostata, per definire le intestazioni delle colonne durante l&apos;importazione saranno utilizzati "Imposta prima riga di intestazione in Excel" e "Imposta numero di righe di intestazione in Excel".

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**Sintassi:** obj << Set Excel Import Color Cells

**Descrizione:** Se l&apos;opzione è impostata a 1, saranno importati i colori di sfondo delle celle di dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**Sintassi:** obj << Set Excel Last Data Column

**Descrizione:** Imposta l&apos;ultima colonna nell&apos;area dei dati del foglio di calcolo da importare. L&apos;area dei dati inizia dopo tutte le colonne vuote.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**Sintassi:** obj << Set Excel Last Data Row

**Descrizione:** Imposta l&apos;ultima riga nell&apos;area dei dati del foglio di calcolo da importare. L&apos;area dei dati inizia dopo tutte le righe vuote.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**Sintassi:** obj << Set Excel Limit Column Type Detection

**Descrizione:** Imposta a 1 per selezionare solo alcune righe in una colonna quando si rileva automaticamente il tipo di dati di una colonna. Un valore pari a 1 è più veloce, ma potrebbe selezionare il tipo di dati errato nei casi in cui il tipo di dati differisce tra i valori nella parte inferiore e superiore della colonna.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**Sintassi:** obj << Set Excel Multiple Series Stack

**Descrizione:** Se l&apos;opzione è impostata a 1 e "Imposta intestazioni di colonna Excel come gerarchie" è impostata a 1, le colonne estese saranno impilate.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Excel Number of Header Lines

**Descrizione:** Imposta il numero di righe del foglio di calcolo da importare come intestazioni delle colonne.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**Sintassi:** obj << Set Excel Replicate Data In Spanned Rows

**Descrizione:** Quando si crea l&apos;intestazione di colonna, se impostata a 1, dove sono presenti più righe di intestazione e una cella si estende su tali righe senza estendere le celle orizzontalmente, il valore all&apos;inizio dell&apos;area unita viene ripetuto.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**Sintassi:** obj << Set Excel Replicate Headers In Spanned Rows

**Descrizione:** Se questa opzione è impostata a 1 e sono presenti più righe di intestazione e una cella si estende su quelle righe senza estendere le celle orizzontalmente, il valore all&apos;inizio dell&apos;area unita sarà ripetuto quando si crea l&apos;intestazione di colonna.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**Sintassi:** obj << Set Excel Suppress Empty Columns

**Descrizione:** Imposta a 1 per impedire l&apos;importazione di colonne vuote.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**Sintassi:** obj << Set Excel Suppress Hidden Columns

**Descrizione:** Imposta a 1 per impedire l&apos;importazione di colonne nascoste.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**Sintassi:** obj << Set Excel Suppress Hidden Rows

**Descrizione:** Imposta a 1 per impedire l&apos;importazione di righe nascoste.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**Sintassi:** obj << Set Excel Worksheet Filter

**Descrizione:** Vengono importati solo i fogli di lavoro che corrispondono al filtro.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**Sintassi:** obj << Set File List

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

```

### Set Folder

**Sintassi:** obj << Set Folder

**Descrizione:** Scegliere una cartella diversa.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**Sintassi:** obj << Set Import Callback

**Descrizione:** Specifica una funzione di callback personalizzata che viene eseguita come fase finale del processo di importazione. La funzione Importazione di più file () passa alla funzione di callback l&apos;oggetto Importazione di più file e un elenco di tabelle di dati aperte.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Import Mode

**Descrizione:** Impostare a "Riga per file" per creare una riga per ciascun file, "Riga per linea" per creare una riga per ogni linea in ciascun file o "CSVData" per usare l&apos;opzione Impostazioni per l&apos;importazione.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**Sintassi:** obj << Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**Descrizione:** Imposta un&apos;ipotesi JSON che ha la migliore corrispondenza con i dati JSON importati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**Sintassi:** obj << Set JSON Method

**Descrizione:** Impostare a "Ipotesi" per usare un&apos;ipotesi integrata o a "Impostazioni JSON" per fornire un jsl personalizzato.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**Sintassi:** obj << Set JSON Settings

**Descrizione:** Specifica il JSL personalizzato che importa dati JSON.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Name Enable

**Descrizione:** Stabilisce se applicare il filtro dei nomi corrente. Il valore predefinito è 0, che indica che il filtro dei nomi verrà ignorato anche se è stato impostato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );

```

### Set Name Filter

**Sintassi:** obj << Set Name Filter

**Descrizione:** Abilita i file inclusi in modo che siano disposti in un elenco di filtri separato da punti e virgola che può includere caratteri jolly. I nomi dei file che contengono punti e virgola o | devono essere importati con un carattere jolly come ? o *.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**Sintassi:** obj << Set PDF Method

**Descrizione:** Imposta a "Ipotesi" per usare un&apos;ipotesi integrata o a "Impostazioni PDF" per fornire un jsl personalizzato.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**Sintassi:** obj << Set PDF Settings

**Descrizione:** Specifica il JSL personalizzato che importa i dati PDF.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );

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

**Sintassi:** obj << Set Show Hidden

**Descrizione:** Stabilisce se includere i file normalmente nascosti da Windows. L&apos;impostazione predefinita prevede di non includere i file nascosti.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**Sintassi:** obj << Set Size Enable

**Descrizione:** Stabilisce se applicare il filtro delle dimensioni corrente. Il valore predefinito è Disattivato, che indica che il filtro delle dimensioni verrà ignorato anche se è stato impostato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**Sintassi:** obj << Set Size Filter( {smallest size to include, largest size to include} )

**Descrizione:** Filtra i file inclusi in base alle dimensioni dei file.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**Sintassi:** obj << Set Stack Mode( "Stack Similar" | "Table Per File )

**Descrizione:** Combina i file simili che vengono importati in un&apos;unica tabella o crea una tabella per ciascun file.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**Sintassi:** obj << Set Subfolders

**Descrizione:** Stabilisce se includere i file nelle sottocartelle. L&apos;impostazione predefinita prevede di non includerli.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );

```

### Set Use File List

**Sintassi:** obj << Set Use File List

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

```

### Set XML Guess

**Sintassi:** obj << Set XML Guess( "Tall"|"Wide"|"Huge" )

**Descrizione:** Specifica un&apos;ipotesi XML che ha la migliore corrispondenza con i dati XML importati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**Sintassi:** obj << Set XML Method

**Descrizione:** Specificare "Ipotesi" affinché JMP possa decidere se i dati sono verticali, ampi o molto grandi. Specificare "Impostazioni XML" per fornire un JSL personalizzato.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**Sintassi:** obj << Set XML Settings

**Descrizione:** Specifica un JSL personalizzato che importa dati XML.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

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

