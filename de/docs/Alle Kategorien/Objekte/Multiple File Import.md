# Multiple File Import



## Elementmeldungen

### Create Window

**Syntax:** obj &lt;&lt; Create Window

**Beschreibung:** Zeigt ein Fenster mit den aktuellen Einstellungen an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << set folder( "$sample_import_data" );
mfi << create window();

```

### Get Add File Date Column

**Syntax:** obj &lt;&lt; Get Add File Date Column

**Beschreibung:** Gibt 1 zurück, wenn die importierte Tabelle eine Spalte für den Namen der Datei hat, aus der die Zeile importiert wurde.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );
mfi << Get Add File Date Column();

```

### Get Add File Name Column

**Syntax:** obj &lt;&lt; Get Add File Name Column

**Beschreibung:** Gibt 1 zurück, wenn die importierte Tabelle eine Spalte für den Namen der Datei hat, aus der die Zeile importiert wurde.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );
mfi << Get Add File Name Column();

```

### Get Add File Size Column

**Syntax:** obj &lt;&lt; Get Add File Size Column

**Beschreibung:** Gibt 1 zurück, wenn die importierte Tabelle eine Spalte für die Größe der Datei hat, aus der die Zeile importiert wurde.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );
mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**Syntax:** obj &lt;&lt; Get CSV Allow Numeric

**Beschreibung:** Gibt 1 zurück, wenn aus scheinbar numerischen Daten numerische Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**Syntax:** obj &lt;&lt; Get CSV EOF Comma

**Beschreibung:** „1“ festlegen, um ein Komma zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**Syntax:** obj &lt;&lt; Get CSV EOF Other

**Beschreibung:** Den Wert festlegen, der die Felder trennt, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**Syntax:** obj &lt;&lt; Get CSV EOF Space

**Beschreibung:** „1“ festlegen, um ein Leerzeichen zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**Syntax:** obj &lt;&lt; Get CSV EOF Spaces

**Beschreibung:** „1“ festlegen, um Leerzeichen zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**Syntax:** obj &lt;&lt; Get CSV EOF Tab

**Beschreibung:** „1“ festlegen, um einen Tabstopp zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**Syntax:** obj &lt;&lt; Get CSV EOL CR

**Beschreibung:** Gibt 1 zurück, wenn CR als der Wert verwendet wird, der die Zeilen trennt, mit denen unterschiedliche Tabellenzeilen erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**Syntax:** obj &lt;&lt; Get CSV EOL CRLF

**Beschreibung:** Gibt 1 zurück, wenn CRLF als der Wert verwendet wird, der die Zeilen trennt, mit denen unterschiedliche Tabellenzeilen erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**Syntax:** obj &lt;&lt; Get CSV EOL LF

**Beschreibung:** Gibt 1 zurück, wenn LF als der Wert verwendet wird, der die Zeilen trennt, mit denen unterschiedliche Tabellenzeilen erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**Syntax:** obj &lt;&lt; Get CSV EOL Other

**Beschreibung:** Ruft den benutzerdefinierten Wert zum Trennen der Zeilen in der Eingabedatei ab. Dieser Wert erstellt Zeilen in der Ausgabe.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**Syntax:** obj &lt;&lt; Get CSV EOL Semicolon

**Beschreibung:** Gibt 1 zurück, wenn ein Semikolon die Linien zwischen den Zeilen darstellt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**Syntax:** obj &lt;&lt; Get CSV Escape

**Beschreibung:** Ruft das Zeichen ab, das als Escape-Zeichen für Sonderzeichen verwendet wird, etwa Feldende, Zeilenende oder das Trennzeichen für Anführungszeichen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Escape();

```

### Get CSV First Data Line

**Syntax:** obj &lt;&lt; Get CSV First Data Line

**Beschreibung:** Die Zeilennummer in der Importdatei, die die erste Zeile mit Daten enthält.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**Syntax:** obj &lt;&lt; Get CSV First Header Line

**Beschreibung:** Ruft die erste Zeile in der Importdatei ab, die Überschriften hat und die zum Erstellen von Spaltennamen verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );
mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**Syntax:** obj &lt;&lt; Get CSV Has Headers

**Beschreibung:** Gibt 1 zurück, wenn die Überschriftseinstellungen beim Import verwendet werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**Syntax:** obj &lt;&lt; Get CSV Number Of Header Lines

**Beschreibung:** Ruft die Anzahl von Zeilen mit Überschriften ab, die für Spaltennamen verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );
mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**Syntax:** obj &lt;&lt; Get CSV Quote

**Beschreibung:** Ruft den Wert ab, der Zeichenketten in Anführungszeichen trennt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Quote();

```

### Get Charset

**Syntax:** obj &lt;&lt; Get Charset

**Beschreibung:** Gibt den Zeichensatz zurück, der zum Importieren von Daten verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Charset();

```

### Get Date Count

**Syntax:** obj &lt;&lt; Get Date Count

**Beschreibung:** Gibt die Anzahl der Dateien zurück, die sich im Bereich des Datumsfilters befinden, sofern dieser aktiviert ist, ansonsten wird die Gesamtzahl der Dateien zurückgegeben.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$downloads" );
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Count();

```

### Get Date Enable

**Syntax:** obj &lt;&lt; Get Date Enable

**Beschreibung:** Gibt 1 zurück, wenn der Datumsfilter aktiviert ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Date Enable();

```

### Get Date Filter

**Syntax:** obj &lt;&lt; Get Date Filter

**Beschreibung:** Gibt den aktuellen Datumsfilter zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**Syntax:** obj &lt;&lt; Get Excel Add Sheet Name Column

**Beschreibung:** Gibt 1 zurück, wenn der importierten Tabelle eine Spalte hinzugefügt wird, die den Namen der Tabellenkalkulation enthält, aus der die Daten kamen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**Syntax:** obj &lt;&lt; Get Excel Best Guess

**Beschreibung:** Gibt 1 zurück, wenn Daten und Spaltenüberschriften dynamisch gefunden werden. Gibt 0 zurück, wenn die anderen Excel-Einstellungen beim Importieren von Excel-Daten verwendet werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**Syntax:** obj &lt;&lt; Get Excel Column Headers As Hierarchies

**Beschreibung:** Gibt 1 zurück, wenn Zellen der Kalkulationstabelle, die sich in den Überschriftszeilen befinden, die sich horizontal über mehrere Zellen erstrecken, als Hierarchien behandelt werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**Syntax:** obj &lt;&lt; Get Excel Column Name Separator

**Beschreibung:** Zeichenkette abrufen, die beim Verketten mehrerer Zellen zu Spaltenüberschriften verwendet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**Syntax:** obj &lt;&lt; Get Excel First Data Column

**Beschreibung:** Gibt die erste nicht leere Spalte in der Kalkulationstabelle zurück, die als Daten importiert werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**Syntax:** obj &lt;&lt; Get Excel First Data Line

**Beschreibung:** Gibt die erste nicht leere Zeile in der Kalkulationstabelle zurück, die als Daten importiert werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**Syntax:** obj &lt;&lt; Get Excel First Header Line

**Beschreibung:** Gibt die erste nicht leere Zeile in der Kalkulationstabelle zurück, die als Spaltenüberschrift importiert werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**Syntax:** obj &lt;&lt; Get Excel Has Headers

**Beschreibung:** Gibt 1 zurück, wenn die Überschriften aus den Kalkulationstabellen importiert werden, andernfalls 0.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**Syntax:** obj &lt;&lt; Get Excel Import Color Cells

**Beschreibung:** Gibt 1 zurück, wenn die Hintergrundfarbe von Datenzellen in Kalkulationstabellen importiert wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**Syntax:** obj &lt;&lt; Get Excel Last Data Column

**Beschreibung:** Gibt die letzte Spalte im Datenbereich der zu importierenden Kalkulationstabelle zurück. Wird „fehlend“ zurückgegeben, wird die letzte Spalte dynamisch gefunden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**Syntax:** obj &lt;&lt; Get Excel Last Data Row

**Beschreibung:** Gibt die letzte Zeile im Datenbereich der zu importierenden Kalkulationstabelle zurück. Wird „fehlend“ zurückgegeben, wird die letzte Zeile dynamisch gefunden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**Syntax:** obj &lt;&lt; Get Excel Limit Column Type Detection

**Beschreibung:** Gibt 0 zurück, wenn alle Zellen der Kalkulationstabelle in jeder Spalte beim Erkennen des Datentyps der Spalte geprüft werden, und gibt 1 zurück, wenn nur eine Teilmenge geprüft wird. Die Begrenzung der Erkennung kann die Leistung bei großen Kalkulationstabellen verbessern.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**Syntax:** obj &lt;&lt; Get Excel Multiple Series Stack

**Beschreibung:** Gibt 1 zurück, wenn Spaltenbereiche gestapelt werden, wenn „Set Excel Column Headers As Hierarchies“ auf 1 gesetzt ist.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**Syntax:** obj &lt;&lt; Get Excel Number of Header Lines

**Beschreibung:** Gibt die Anzahl der Zeilen in der Kalkulationstabelle zurück, die als Spaltenüberschriften importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**Syntax:** obj &lt;&lt; Get Excel Replicate Data In Spanned Rows

**Beschreibung:** Für mehrere Überschriftszeilen, die vertikal verbunden sind, auf 1 setzen, um den Wert zu wiederholen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**Syntax:** obj &lt;&lt; Get Excel Replicate Headers In Spanned Rows

**Beschreibung:** Gibt 1 zurück, wenn die verbundenen Überschriftszellen der Kalkulationstabelle beim Erstellen des Spaltennamens der JMP-Tabelle duplizierte Zellenwerte haben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**Syntax:** obj &lt;&lt; Get Excel Suppress Empty Columns

**Beschreibung:** Auf 1 setzen, um zu verhindern, dass leere Spalten importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**Syntax:** obj &lt;&lt; Get Excel Suppress Hidden Columns

**Beschreibung:** Gibt 1 zurück, wenn ausgeblendete Spalten nicht importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**Syntax:** obj &lt;&lt; Get Excel Suppress Hidden Rows

**Beschreibung:** Gibt 1 zurück, wenn ausgeblendete Zeilen nicht importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**Syntax:** obj &lt;&lt; Get Excel Worksheet Filter

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Worksheet Filter;

```

### Get File List

**Syntax:** obj &lt;&lt; Get File List

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

```

### Get Folder

**Syntax:** obj &lt;&lt; Get Folder

**Beschreibung:** Ordnername zurückgeben.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder;

```

### Get Folder Count

**Syntax:** obj &lt;&lt; Get Folder Count

**Beschreibung:** Anzahl der Dateien im Ordner zurückgeben.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder Count;

```

### Get Import Callback

**Syntax:** obj &lt;&lt; Get Import Callback

**JMP Version hinzugefügt:** 15

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

**Syntax:** obj &lt;&lt; Get Import Mode

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );
mfi << Get Import Mode();

```

### Get JSON Guess

**Syntax:** obj &lt;&lt; Get JSON Guess

**Beschreibung:** Gibt die integrierte Methode zum Importieren von JSON-Daten für die Erstellung von Datentabellen zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Guess();

```

### Get JSON Method

**Syntax:** obj &lt;&lt; Get JSON Method

**Beschreibung:** Gibt die aktuelle Methode zum Importieren von JSON-Daten zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Method();

```

### Get JSON Settings

**Syntax:** obj &lt;&lt; Get JSON Settings

**Beschreibung:** Gibt die benutzerdefinierte JSL zurück, welche JSON-Daten importiert.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Settings();

```

### Get Name Count

**Syntax:** obj &lt;&lt; Get Name Count

**Beschreibung:** Gibt die Anzahl der Dateien zurück, die dem aktuellen Namensfilter entsprechen, wenn „Namensaktivierung festlegen“ festgelegt ist, andernfalls die Gesamtzahl der Dateien.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Name Count();

```

### Get Name Enable

**Syntax:** obj &lt;&lt; Get Name Enable

**Beschreibung:** Gibt 1 zurück, wenn der aktuelle Namensfilter angewendet wird, um die eingeschlossenen Dateien zu filtern.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );
mfi << Get Name Enable();

```

### Get Name Filter

**Syntax:** obj &lt;&lt; Get Name Filter

**Beschreibung:** Gibt den aktuellen Namensfilter zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );
mfi << Set Name Enable( 1 );
mfi << Get Name Filter();

```

### Get PDF Method

**Syntax:** obj &lt;&lt; Get PDF Method

**Beschreibung:** Gibt die aktuelle Methode zum Importieren von PDF-Daten zurück.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Method();

```

### Get PDF Settings

**Syntax:** obj &lt;&lt; Get PDF Settings

**Beschreibung:** Gibt die benutzerdefinierte JSL zurück, die PDF-Daten importiert.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Settings();

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Ein Skript aus den aktuellen Einstellungen erstellen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Script();

```

### Get Show Hidden

**Syntax:** obj &lt;&lt; Get Show Hidden

**Beschreibung:** Gibt zurück, ob ausgeblendete Dateien eingeschlossen werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );
mfi << Get Show Hidden();

```

### Get Size Count

**Syntax:** obj &lt;&lt; Get Size Count

**Beschreibung:** Gibt die Anzahl der Dateien zurück, die dem aktuellen Größenfilter entsprechen, wenn „Größenaktivierung festlegen“ festgelegt ist, andernfalls die Gesamtzahl der Dateien.

**JMP Version hinzugefügt:** 14

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

**Syntax:** 0|1 = obj &lt;&lt; Get Size Enable

**Beschreibung:** Gibt 1 zurück, wenn der Größenfilter aktiviert ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Enable();

```

### Get Size Filter

**Syntax:** obj &lt;&lt; Get Size Filter

**Beschreibung:** Gibt eine Liste zurück, deren erster Eintrag die kleinste Größe der eingeschlossenen Dateien ist und deren zweiter Eintrag die größte Größe der eingeschlossenen Dateien ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Filter();

```

### Get Stack Mode

**Syntax:** obj &lt;&lt; Get Stack Mode

**Beschreibung:** Gibt „Ähnliche stapeln“ zurück, wenn ähnliche Eingabedateien beim Import in einer Tabelle kombiniert werden, oder gibt „Tabelle pro Datei“ zurück, wenn Eingabedateien in zwei oder mehreren Tabellen kombiniert werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Stack Mode();

```

### Get Subfolders

**Syntax:** obj &lt;&lt; Get Subfolders

**Beschreibung:** Gibt 1 zurück, wenn Dateien in Unterordnern eingeschlossen sind.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );
mfi << Get Subfolders();

```

### Get Use File List

**Syntax:** obj &lt;&lt; Get Use File List

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

```

### Get XML Guess

**Syntax:** obj &lt;&lt; Get XML Guess

**Beschreibung:** Gibt die integrierte Methode zum Importieren von XML-Daten für die Erstellung von Datentabellen zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Guess();

```

### Get XML Method

**Syntax:** obj &lt;&lt; Get XML Method

**Beschreibung:** Gibt die aktuelle Methode zum Importieren von XML-Daten zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Method();

```

### Get XML Settings

**Syntax:** obj &lt;&lt; Get XML Settings

**Beschreibung:** Gibt die benutzerdefinierte JSL zum Importieren von XML-Daten zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Settings();

```

### Import Data

**Syntax:** list of data tables = obj &lt;&lt; Import Data

**Beschreibung:** Importiert Daten basierend auf den aktuellen Einstellungen und gibt eine Liste von Datentabellen zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Set Add File Date Column

**Syntax:** obj &lt;&lt; Set Add File Date Column

**Beschreibung:** Festlegen, um eine Spalte mit der Dateigröße der Datei zu erstellen, aus der die Zeile importiert wurde.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**Syntax:** obj &lt;&lt; Set Add File Name Column

**Beschreibung:** Festlegen, um eine Spalte mit dem Dateinamen zu erstellen, aus der die Zeile importiert wurde.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**Syntax:** obj &lt;&lt; Set Add File Size Column

**Beschreibung:** Festlegen, um eine Spalte mit der Dateigröße der Datei zu erstellen, aus der die Zeile importiert wurde.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**Syntax:** obj &lt;&lt; Set CSV Allow Numeric

**Beschreibung:** „1“ festlegen, damit aus scheinbar numerischen Daten numerische Spalten erstellt werden, oder „0“ festlegen, um reine Zeichenspalten zu erstellen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**Syntax:** obj &lt;&lt; Set CSV EOF Comma

**Beschreibung:** „1“ festlegen, um ein Komma zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**Syntax:** obj &lt;&lt; Set CSV EOF Other

**Beschreibung:** Den Wert festlegen, der die Felder trennt, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**Syntax:** obj &lt;&lt; Set CSV EOF Space

**Beschreibung:** „1“ festlegen, um ein Leerzeichen zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**Syntax:** obj &lt;&lt; Set CSV EOF Spaces

**Beschreibung:** „1“ festlegen, um ein Leerzeichen zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**Syntax:** obj &lt;&lt; Set CSV EOF Tab

**Beschreibung:** „1“ festlegen, um einen Tabstopp zum Trennen von Feldern zu verwenden, mit denen unterschiedliche Spalten erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**Syntax:** obj &lt;&lt; Set CSV EOL CR

**Beschreibung:** „1“ festlegen, um CR als den Wert zu verwenden, der die Zeilen trennt, mit denen unterschiedliche Tabellenzeilen erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**Syntax:** obj &lt;&lt; Set CSV EOL CRLF

**Beschreibung:** „1“ festlegen, um CRLF als den Wert zu verwenden, der die Zeilen trennt, mit denen unterschiedliche Tabellenzeilen erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**Syntax:** obj &lt;&lt; Set CSV EOL LF

**Beschreibung:** „1“ festlegen, um LF als den Wert zu verwenden, der die Zeilen trennt, mit denen unterschiedliche Tabellenzeilen erstellt werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**Syntax:** obj &lt;&lt; Set CSV EOL Other

**Beschreibung:** Legt den benutzerdefinierten Wert zum Trennen der Zeilen in der Eingabedatei fest. Dieser Wert erstellt Zeilen in der Ausgabe.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**Syntax:** obj &lt;&lt; Set CSV EOL Semicolon

**Beschreibung:** „1“ festlegen, um ein Semikolon zur Darstellung der Linien zwischen den Zeilen zu verwenden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**Syntax:** obj &lt;&lt; Set CSV Escape

**Beschreibung:** Legt ein Zeichen als Escape-Zeichen für Sonderzeichen fest, etwa Feldende, Zeilenende oder Trennzeichen für Anführungszeichen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**Syntax:** obj &lt;&lt; Set CSV First Data Line

**Beschreibung:** Die Zeilennummer in der Importdatei, die die erste Zeile mit Daten enthält.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**Syntax:** obj &lt;&lt; Set CSV First Header Line

**Beschreibung:** Legt fest, dass die erste Zeile in der Importdatei, die Überschriften hat, zum Erstellen von Spaltennamen verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**Syntax:** obj &lt;&lt; Set CSV Has Headers

**Beschreibung:** „1“ festlegen, um „Erste Überschriftszeile CSV“ und „Anzahl von Überschriftszeilen CSV“ zu verwenden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**Syntax:** obj &lt;&lt; Set CSV Number Of Header Lines

**Beschreibung:** Legt die Anzahl von Zeilen mit Überschriften fest, die für Spaltennamen verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**Syntax:** obj &lt;&lt; Set CSV Quote

**Beschreibung:** Legt den Wert fest, der Zeichenketten in Anführungszeichen trennt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Quote( "'" );

```

### Set Charset

**Syntax:** obj &lt;&lt; Set Charset

**Beschreibung:** Legt den Zeichensatz fest, der beim Importieren von Daten verwendet werden soll.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**Syntax:** obj &lt;&lt; Set Date Enable

**Beschreibung:** Aktiviert den Datum/Uhrzeit-Filter. Der Standardwert ist „aus“. Dann wird der Datumsfilter ignoriert, selbst wenn er festgelegt ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Date Filter

**Syntax:** obj &lt;&lt; Set Date Filter( {start of date time range, end of date time range} )

**Beschreibung:** Filtert die eingeschlossenen Dateien nach einem Datums- und Uhrzeitbereich.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**Syntax:** obj &lt;&lt; Set Excel Add Sheet Name Column

**Beschreibung:** Wenn 1 festgelegt ist, wird der importierten Tabelle eine Spalte hinzugefügt, die den Namen der Kalkulationstabellen enthält, aus der die Daten kamen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**Syntax:** obj &lt;&lt; Set Excel Best Guess

**Beschreibung:** Dynamisch die Daten in jeder Kalkulationstabelle suchen und eine Vermutung für die Spaltennamen abgeben. Wenn diese Option festgelegt ist, werden keine anderen Excel-Parameter verwendet, mit Ausnahme der Option „Set Excel Add Sheet Name Column“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**Syntax:** obj &lt;&lt; Set Excel Column Headers As Hierarchies

**Beschreibung:** Auf 1 setzen, um mehrere Spaltenüberschriftszeilen als Hierarchien zu behandeln. Dadurch werden Informationen in verbundenen Zellen in den Überschriften neu organisiert und die Daten in den Zeilen der generierten Tabelle angeordnet.

**JMP Version hinzugefügt:** 18

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

**Syntax:** obj &lt;&lt; Set Excel Column Name Separator

**Beschreibung:** Zeichenkette festlegen, die beim Verketten mehrerer Zellen zu Spaltenüberschriften als Trennzeichen verwendet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**Syntax:** obj &lt;&lt; Set Excel First Data Column

**Beschreibung:** Legt die Nummer der ersten nicht leeren Spalte in der Kalkulationstabelle fest, die als Daten importiert wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**Syntax:** obj &lt;&lt; Set Excel First Data Line

**Beschreibung:** Legt die Nummer der ersten nicht leeren Zeile in der Kalkulationstabelle fest, die als Daten importiert wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**Syntax:** obj &lt;&lt; Set Excel First Header Line

**Beschreibung:** Legt die Nummer der ersten nicht leeren Zeile in der Kalkulationstabelle fest, die zum Definieren von Spaltenüberschriften verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**Syntax:** obj &lt;&lt; Set Excel Has Headers

**Beschreibung:** Wenn festgelegt, werden „Set Excel First Header Line“ und „Set Excel Number of Header Lines“ verwendet, um beim Import die Spaltenüberschriften zu definieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**Syntax:** obj &lt;&lt; Set Excel Import Color Cells

**Beschreibung:** Ist 1 festgelegt, werden die Hintergrundfarben der Datenzellen importiert.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**Syntax:** obj &lt;&lt; Set Excel Last Data Column

**Beschreibung:** Legt die letzte Spalte im Datenbereich der zu importierenden Kalkulationstabelle fest. Der Datenbereich beginnt nach allen leeren Spalten.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**Syntax:** obj &lt;&lt; Set Excel Last Data Row

**Beschreibung:** Legt die letzte Zeile im Datenbereich der Kalkulationstabelle fest, die importiert werden soll. Der Datenbereich beginnt nach allen leeren Zeilen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**Syntax:** obj &lt;&lt; Set Excel Limit Column Type Detection

**Beschreibung:** Auf 1 setzen, um nur einige der Zeilen in einer Spalte zu prüfen, wenn der Datentyp einer Spalte automatisch erkannt wird. Der Wert 1 ist schneller, könnte jedoch den falschen Datentyp auswählen, wenn sich der Datentyp zwischen den Werten unten und oben in der Spalte unterscheidet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**Syntax:** obj &lt;&lt; Set Excel Multiple Series Stack

**Beschreibung:** Wenn 1 festgelegt ist und „Set Excel Column Headers As Hierarchies“ auf 1 gesetzt ist, werden Spaltenbereiche gestapelt.

**JMP Version hinzugefügt:** 18

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

**Syntax:** obj &lt;&lt; Set Excel Number of Header Lines

**Beschreibung:** Legt die Anzahl der Zeilen in der Kalkulationstabelle fest, die als Spaltenüberschriften importiert werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**Syntax:** obj &lt;&lt; Set Excel Replicate Data In Spanned Rows

**Beschreibung:** Beim Erstellen der Spaltenüberschrift, wird, wenn auf 1 gesetzt und es mehrere Überschriftszeilen in verbundenen Zellen gibt und horizontal keine Zellen verbunden sind, der Wert am Anfang des verbundenen Bereichs wiederholt.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**Syntax:** obj &lt;&lt; Set Excel Replicate Headers In Spanned Rows

**Beschreibung:** Wenn 1 festgelegt ist und es mehrere Überschriftszeilen in einer verbundenen Zelle gibt und horizontal keine weiteren verbundenen Zellen enthalten sind, wird der Wert für den Anfang des verbundenen Bereichs beim Erstellen der Spaltenüberschrift wiederholt.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**Syntax:** obj &lt;&lt; Set Excel Suppress Empty Columns

**Beschreibung:** Auf 1 setzen, um zu verhindern, dass leere Spalten importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**Syntax:** obj &lt;&lt; Set Excel Suppress Hidden Columns

**Beschreibung:** Auf 1 setzen, um zu verhindern, dass ausgeblendete Spalten importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**Syntax:** obj &lt;&lt; Set Excel Suppress Hidden Rows

**Beschreibung:** Auf 1 setzen, um zu verhindern, dass ausgeblendete Zeilen importiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**Syntax:** obj &lt;&lt; Set Excel Worksheet Filter

**Beschreibung:** Nur Arbeitsblätter, die dem Filter entsprechen, werden importiert.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**Syntax:** obj &lt;&lt; Set File List

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

```

### Set Folder

**Syntax:** obj &lt;&lt; Set Folder

**Beschreibung:** Anderen Ordner wählen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**Syntax:** obj &lt;&lt; Set Import Callback

**Beschreibung:** Gibt eine benutzerdefinierte Callback-Funktion an, die als letzter Schritt des Importvorgangs ausgeführt wird. Die Funktion Multiple File Import() übergibt der Callback-Funktion das Objekt für den Import mehrerer Dateien und eine Liste von Datentabellen, die geöffnet wurden.

**JMP Version hinzugefügt:** 15

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

**Syntax:** obj &lt;&lt; Set Import Mode

**Beschreibung:** „Zeile pro Datei“ festlegen, wenn für jede Datei eine Zeile erstellt werden soll, „Zeile pro Zeile“ festlegen, um für jede Zeile in jeder Datei eine Tabellenzeile zu erstellen, oder „CSV-Daten“ festlegen, um die Option „Einstellungen“ für den Import zu verwenden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**Syntax:** obj &lt;&lt; Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**Beschreibung:** Legt eine JSON-Schätzung fest, die den JSON-Daten, die importiert werden, am besten entspricht.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**Syntax:** obj &lt;&lt; Set JSON Method

**Beschreibung:** „Vermutung“ festlegen, um eine integrierte Vermutung zu verwenden, oder „JSON-Einstellungen“ festlegen, um eine benutzerdefinierte JSL vorzugeben.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**Syntax:** obj &lt;&lt; Set JSON Settings

**Beschreibung:** Enthält benutzerdefinierten JSL-Code, der JSON-Daten importiert.

**JMP Version hinzugefügt:** 15

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

**Syntax:** obj &lt;&lt; Set Name Enable

**Beschreibung:** Legt fest, ob der aktuelle Namensfilter angewendet werden soll. Der Standardwert ist 0, wobei der Namensfilter ignoriert wird, auch wenn er festgelegt ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );

```

### Set Name Filter

**Syntax:** obj &lt;&lt; Set Name Filter

**Beschreibung:** Ermöglicht, dass eingeschlossene Dateien sich in einer Liste von durch Semikolon getrennten Filtern befinden, die Platzhalterzeichen enthalten können. Dateinamen mit einem Semikolon oder | müssen mit einem Platzhalterzeichen wie ? oder * importiert werden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**Syntax:** obj &lt;&lt; Set PDF Method

**Beschreibung:** „Vermutung“ festlegen, um eine integrierte Vermutung zu verwenden, oder „PDF-Einstellungen“ festlegen, um eine benutzerdefinierte JSL vorzugeben.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**Syntax:** obj &lt;&lt; Set PDF Settings

**Beschreibung:** Gibt benutzerdefinierte JSL zum Importieren von PDF-Daten an.

**JMP Version hinzugefügt:** 17

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

**Syntax:** obj &lt;&lt; Set Show Hidden

**Beschreibung:** Legt fest, ob Dateien, die von Windows normalerweise ausgeblendet sind, eingeschlossen werden. Standard ist, ausgeblendete Dateien nicht einzuschließen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**Syntax:** obj &lt;&lt; Set Size Enable

**Beschreibung:** Legt fest, ob der aktuelle Größenfilter angewendet werden soll. Der Standardwert ist „aus“, wobei der Größenfilter ignoriert wird, auch wenn er festgelegt ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**Syntax:** obj &lt;&lt; Set Size Filter( {smallest size to include, largest size to include} )

**Beschreibung:** Filtert die eingeschlossenen Dateien nach Dateigröße.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**Syntax:** obj &lt;&lt; Set Stack Mode( "Stack Similar" | "Table Per File )

**Beschreibung:** Kombiniert ähnliche Dateien, die importiert werden, in einer Tabelle oder erstellt pro Datei eine Tabelle.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**Syntax:** obj &lt;&lt; Set Subfolders

**Beschreibung:** Legt fest, ob Dateien in Unterordnern eingeschlossen sind. Standardmäßig sind sie nicht eingeschlossen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );

```

### Set Use File List

**Syntax:** obj &lt;&lt; Set Use File List

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

```

### Set XML Guess

**Syntax:** obj &lt;&lt; Set XML Guess( "Tall"|"Wide"|"Huge" )

**Beschreibung:** Gibt eine XML-Schätzung an, die den XML-Daten, die importiert werden, am besten entspricht.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**Syntax:** obj &lt;&lt; Set XML Method

**Beschreibung:** „Vermutung“ angeben, wenn JMP entscheiden soll, ob die Daten hoch, breit oder groß sind. „XML-Einstellungen“ angeben, um benutzerdefinierte JSL vorzugeben.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**Syntax:** obj &lt;&lt; Set XML Settings

**Beschreibung:** Gibt benutzerdefinierte JSL an, welche XML-Daten importiert.

**JMP Version hinzugefügt:** 15

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

## Zugehörige Konstruktoren

### Multiple File Import

**Syntax:** mfiObj = Multiple File Import();

**Beschreibung:** Erstellt ein Objekt für den Import mehrerer Dateien. Das Objekt akzeptiert Meldungen, um einen Ordner festzulegen, Dateien zu filtern und zu importieren. Um ein Dialogfeld aufzurufen, verwenden Sie die Meldung „Fenster erstellen“. Für den sofortigen Import verwenden Sie die Meldung „Daten importieren“. Dabei wird eine Liste der erstellten Tabellen zurückgegeben.

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

