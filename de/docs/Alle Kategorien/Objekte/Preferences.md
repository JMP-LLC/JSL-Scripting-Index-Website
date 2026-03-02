# Preferences



## Elementmeldungen

### Add Color Theme

**Syntax:** obj &lt;&lt; Add Color Theme( Add Color Theme({"Name", &lt;type|style&gt;, {color, ..., &lt;Missing(color)&gt;}, &lt;{position, ...}&gt;}, &lt;color blindness discernability&gt;) )

**Beschreibung:** Erstellt ein neues benutzerdefiniertes Farbschema und registriert es in der Schemaauswahl.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Set Preference(	Add Color Theme(		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5,		0.642857142857143, 1}}	));Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**Syntax:** obj &lt;&lt; Add Rows default number of rows( number )

**Beschreibung:** Anfängliche Anzahl von Zeilen im Fenster „Zeilen hinzufügen“

**JMP Version hinzugefügt:** 18

### Add Rows recall last value

**Syntax:** obj &lt;&lt; Add Rows recall last value( state=0|1 )

**Beschreibung:** Der zuletzt eingegebene Wert wird als Anzahl von hinzuzufügenden Zeilen verwendet

**JMP Version hinzugefügt:** 18

### Add files opened by scripts to the Recent Files list

**Syntax:** obj &lt;&lt; Add files opened by scripts to the Recent Files list( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung dafür, ob mit der Funktion JSL Open() geöffnete Dateien in die Liste der letzten Dateien aufgenommen werden.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**Syntax:** obj &lt;&lt; Allow 16 Bit List Check Compression( state=0|1 )

**Beschreibung:** Gibt an, ob die Listenprüfung zur Verschlüsselung von Werten verwendet wird, wenn es mehr als 255 verschiedene Werte in der Spalte gibt. Wird die Verschlüsselung verwendet, können diese Spalten von JMP 14 und früher nicht gelesen werden.

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**Syntax:** obj &lt;&lt; Allow Compress Selected Columns to create compact columns( state=0|1 )

**Beschreibung:** „Ausgewählte Spalten komprimieren“ komprimiert Spalten, wenn dadurch weniger Speicherplatz benötigt wird.

**JMP Version hinzugefügt:** 18

### Allow Unquoted Strings in JSL

**Syntax:** obj &lt;&lt; Allow Unquoted Strings in JSL( "Nein"|"Ja (mit einer Warnung)"|"Ja (ohne Warnung)" )

### Allow mixed ISO format patterns

**Syntax:** obj &lt;&lt; Allow mixed ISO format patterns( state=0|1 )

**Beschreibung:** Formatmuster-Datumsangaben mit ISO-Wochen (<ww>) und Nicht-ISO-Jahren (<JJJJ> oder <JJ>) und mit Nicht-ISO-Wochen (<WW1> oder <WW2>) und ISO-Jahren (<jjjj> oder <jj>) zulassen. ISO-Wochen und -Jahre sind nicht mit Nicht-ISO-Wochen und -Jahren kompatibel. Sie dürfen nicht zusammen verwendet werden. Standardmäßig lässt JMP die Erstellung eines solchen Datumsformats nicht zu.

**JMP Version hinzugefügt:** 18

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**Syntax:** obj &lt;&lt; Allow short numeric data format( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Zulassen des kurzen numerischen Datenformats.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Always allow publishing to JMP Public

**Syntax:** obj &lt;&lt; Always allow publishing to JMP Public( state=0|1 )

**Beschreibung:** Aktivieren Sie das Menüelement für die Veröffentlichung in JMP Public immer, auch wenn andere JMP Live-Verbindungen konfiguriert sind.

**JMP Version hinzugefügt:** 19

### Auto Hide Menus

**Syntax:** obj &lt;&lt; Auto Hide Menus( "Immer"|"Niemals"|"Je nach Fenstergröße" )

**Beschreibung:** Legt fest, ob und wann JMP das Menü und die Symbolleisten automatisch ausblendet. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**Syntax:** obj &lt;&lt; Auto Run Recent JSL( state=0|1 )

**Beschreibung:** Ändert das voreingestellte Verhalten für die automatische Ausführung der letzten abgeschickten JSL-Skripte. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**Syntax:** obj &lt;&lt; Auto match brackets in script editor( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für automatisch übereinstimmende Klammern im Skriptfenster. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**Syntax:** obj &lt;&lt; Autosave maximum data table columns( number )

**Beschreibung:** Die maximale Anzahl von Spalten in der Datentabelle, die automatisch gespeichert wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**Syntax:** obj &lt;&lt; Autosave maximum data table rows( number )

**Beschreibung:** Die maximale Anzahl von Zeilen in der Datentabelle, die automatisch gespeichert wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**Syntax:** obj &lt;&lt; Autosave timeout( number )

**Beschreibung:** Die Dauer für das automatische Speichern wird in Minuten angegeben. Nach Ablauf der Zeit werden alle geöffneten und geänderten Dateien gespeichert. Der Standardwert ist 0, womit angezeigt wird, dass kein automatisches Speichern durchgeführt wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**Syntax:** obj &lt;&lt; Axis Title Above( state=0|1 )

**Beschreibung:** Ändert die Position der Beschriftung der Y-Achse in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**Syntax:** obj &lt;&lt; Background Color( color )

**Beschreibung:** Ändert die Voreinstellung für die Hintergrundfarbe in allen Fenstern. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**Syntax:** obj &lt;&lt; Bad to Good Color Theme( "name" )

**Beschreibung:** Ändert die Voreinstellung für das Farbschema „stetig“ in allen Graphen.

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Bad to Good Color Theme( "Green to Purple" ) );Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**Syntax:** obj &lt;&lt; Box Plot Line Width( number )

**Beschreibung:** Ändert die Voreinstellung für die Linienbreite für Box-Plots.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**Syntax:** obj &lt;&lt; Bypass Proxy( text )

**Beschreibung:** Die Verwendung des Proxy für bestimmte Hosts deaktivieren

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**Syntax:** obj &lt;&lt; Categorical Color Theme( "name" )

**Beschreibung:** Ändert die Voreinstellung für das Farbschema „kategorial“ in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Categorical Color Theme ) );Set Preference( Categorical Color Theme( "Jet" ) );Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**Syntax:** obj &lt;&lt; Categorical graph type( "Automatisch"|"Histogramm"|"Balken"|"Heatmap"|"Mosaik"|"Verlaufsdiagramm"|"Verlaufsdiagramm" )

**Beschreibung:** Standardgraph für die Anzeige im Spaltenkopf bei nominalen und ordinalen Spalten.

**JMP Version hinzugefügt:** 18

### Classic Data Table Selection

**Syntax:** obj &lt;&lt; Classic Data Table Selection( state=0|1 )

**Beschreibung:** Aktiviert das klassische Klickauswahlverhalten in der Datentabelle. In diesem Modus hat die Auswahl einer Spalte keine Auswirkung auf die Zeilenauswahl, und die Auswahl einer Zeile hat keine Auswirkung auf die Spaltenauswahl.

**JMP Version hinzugefügt:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**Syntax:** obj &lt;&lt; Color Mode( "Systemeinstellung verwenden"|"Hell"|"Dunkel"|"Hoher Kontrast" )

**Beschreibung:** Ändert, ob JMP ein bestimmtes Farbschema für das Fenster verwendet oder die Einstellung des Betriebssystems übernimmt.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**Syntax:** obj &lt;&lt; Columns Manager

**JMP Version hinzugefügt:** 18

### Conditional formatting rules

**Syntax:** obj &lt;&lt; Conditional formatting rules

**Beschreibung:** Erstellt eine benutzerdefinierte bedingte Regel, die entsprechend der Einstellung für „Bedingte Formatierungseinstellung anzeigen“ angezeigt wird oder nicht.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences(	Conditional Formatting Rules(		RuleSet(			RuleName( "My Special Rule" ),			GreaterThan(				Value( 0 ),				Inclusive( 0 ),				Format(					Text Color( "Medium Dark Red" ),					Back Color( "Light Yellow" ),					Annotation( 1 ),					FontStyle( Bold )				)			)		)	));

```

### Continuous Color Theme

**Syntax:** obj &lt;&lt; Continuous Color Theme( "name" )

**Beschreibung:** Ändert die Voreinstellung für das Farbschema „stetig“ in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Continuous Color Theme( "Green to Purple" ) );Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**Syntax:** obj &lt;&lt; Continuous graph type( "Automatisch"|"Histogramm"|"Balken"|"Heatmap"|"Mosaik"|"Verlaufsdiagramm"|"Verlaufsdiagramm" )

**Beschreibung:** Standardgraph für die Anzeige im Spaltenkopf bei stetigen Spalten.

**JMP Version hinzugefügt:** 18

### Custom Locale Settings

**Syntax:** obj &lt;&lt; Custom Locale Settings

**Beschreibung:** Hebt Gebietsschemaeinstellungen wie Dezimaltrennzeichen und Tausendertrennzeichen auf.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );Print( Format( 1.25, "Best" ) );Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );Print( Format( 1.25, "Best" ) );Preferences( Custom Locale Settings( Decimal Separator() ) );

```

**Beispiel 2**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. // Clear all locale overrides...Preferences( Custom Locale Settings( Reset to Defaults ) );

```

**Beispiel 3**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**Syntax:** obj &lt;&lt; Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**Syntax:** obj &lt;&lt; Data Filter Check Box Display( state=0|1 )

**Beschreibung:** Die Standardanzeige für die Spalte der kategorialen Filter ist die Anzeige als Kontrollkästchen.

### Data Filter Conditional

**Syntax:** obj &lt;&lt; Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**Syntax:** obj &lt;&lt; Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**Syntax:** obj &lt;&lt; Data Filter Histograms and Bars( state=0|1 )

**Beschreibung:** Wenn verfügbar, Histogramme und Balken für Filterspalten anzeigen

**JMP Version hinzugefügt:** 15

### Data Filter Include Check

**Syntax:** obj &lt;&lt; Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**Syntax:** obj &lt;&lt; Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**Syntax:** obj &lt;&lt; Data Filter Show Check( state=0|1 )

### Data Table Actions

**Syntax:** obj &lt;&lt; Data Table Actions( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**Syntax:** obj &lt;&lt; Data Table Title on Output( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Datentabellennamens im oberen Bereich der Berichtsausgabe.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**Syntax:** obj &lt;&lt; Date Title on Output( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Datums im Titel der Ausgabe.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**Syntax:** obj &lt;&lt; Default Field Width( number )

**Beschreibung:** Standardfeldbreite für neue numerische Spalten ändern.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**Syntax:** obj &lt;&lt; Default Project Show Bookmarks( state=0|1 )

**Beschreibung:** Den Projektbereich in neuen Projekten anzeigen

**JMP Version hinzugefügt:** 16

### Default Project Show Contents

**Syntax:** obj &lt;&lt; Default Project Show Contents( state=0|1 )

**Beschreibung:** Inhaltsbereich in neuen Projekten anzeigen

**JMP Version hinzugefügt:** 16

### Default Project Show Log

**Syntax:** obj &lt;&lt; Default Project Show Log( state=0|1 )

**Beschreibung:** Log-Bereich in neuen Projekten anzeigen

**JMP Version hinzugefügt:** 16

### Default Project Show Recent Files

**Syntax:** obj &lt;&lt; Default Project Show Recent Files( state=0|1 )

**Beschreibung:** Bereich der zuletzt geöffneten Dateien in neuen Projekten anzeigen

**JMP Version hinzugefügt:** 16

### Default Project Show Workspace

**Syntax:** obj &lt;&lt; Default Project Show Workspace( state=0|1 )

**Beschreibung:** Den Arbeitsbereich in neuen Projekten anzeigen

**JMP Version hinzugefügt:** 16

### Display JSL SAS results as HTML

**Syntax:** obj &lt;&lt; Display JSL SAS results as HTML( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**Syntax:** obj &lt;&lt; Display indexes in English( state=0|1 )

**Beschreibung:** Zeigt den Index der Objektskripte, den Index der JSL-Funktionen und den Index der Anzeigefelder in Englisch an.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**Syntax:** obj &lt;&lt; Double Click Opens Column Info( state=0|1 )

**Beschreibung:** Ein Doppelklick auf eine Spaltenüberschrift öffnet das Dialogfeld „Spalteninfo“, anstatt den Spaltennamen zu bearbeiten.

**JMP Version hinzugefügt:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**Syntax:** obj &lt;&lt; Empty Project at Startup( "Immer"|"Wenn kein anderes Projekt geöffnet ist"|"Niemals" )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**Syntax:** obj &lt;&lt; Emulate Zoom Mode( state=0|1 )

**Beschreibung:** Legt fest, ob JMP die Fensterliste bei maximierten Fenstern anzeigt.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**Syntax:** obj &lt;&lt; Enable Advanced Linear Algebra Routines( state=0|1 )

**Beschreibung:** Ändert die linearen Algebra-Rechenroutinen, die in mehreren Plattformen und JSL-Funktionen verwendet werden. Wenn ausgewählt, aktiviert diese Voreinstellung erweiterte lineare Algebra-Routinen, die auf den BLAS- und LAPACK-Bibliotheken basieren. Die JMP-Dokumentation enthält weitere Informationen über die Plattformen und JSL-Funktionen, die von dieser Voreinstellung betroffen sind.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**Syntax:** obj &lt;&lt; Enable Telemetry( state=0|1 )

### Enable direct input from IME

**Syntax:** obj &lt;&lt; Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**Syntax:** obj &lt;&lt; End Menu Item Marking After Deadline( state=0|1 )

**Beschreibung:** Menüelemente werden nach Erreichen der zeitlichen Grenze nicht mehr markiert

**JMP Version hinzugefügt:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**Syntax:** obj &lt;&lt; Enhanced Log Alternate Table Rows( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**Syntax:** obj &lt;&lt; Enhanced Log Color By Window( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**Syntax:** obj &lt;&lt; Enhanced Log Color By Window Color Theme( "name" )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Enhanced Log Color By Window Color Theme ) );Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**Syntax:** obj &lt;&lt; Enhanced Log Filter Action( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**Syntax:** obj &lt;&lt; Enhanced Log Filter Error( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**Syntax:** obj &lt;&lt; Enhanced Log Filter Log( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**Syntax:** obj &lt;&lt; Enhanced Log Filter Result( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**Syntax:** obj &lt;&lt; Enhanced Log Filter Script( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**Syntax:** obj &lt;&lt; Enhanced Log Filter Warn( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**Syntax:** obj &lt;&lt; Enhanced Log Origin Column( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**Syntax:** obj &lt;&lt; Enhanced Log Result Column( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**Syntax:** obj &lt;&lt; Enhanced Log Shade Table Cells( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**Syntax:** obj &lt;&lt; Enhanced Log Shade Table Headings( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**Syntax:** obj &lt;&lt; Enhanced Log Table Column Borders( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**Syntax:** obj &lt;&lt; Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**Syntax:** obj &lt;&lt; Enhanced Log Table Row Borders( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**Syntax:** obj &lt;&lt; Enhanced Log Timestamp Column( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**Syntax:** obj &lt;&lt; Enhanced Log Underline Table Headings( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**Syntax:** obj &lt;&lt; Enter Key moves down( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Betätigung der Eingabetaste.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**Syntax:** obj &lt;&lt; Evaluate OnOpen Scripts( "Abfrage"|"Niemals"|"Immer" )

**Beschreibung:** „Niemals“ festgelegt, damit OnOpen-Skripte niemals ausgeführt werden dürfen. Skripte von unbekannten Quellen sollten nicht ausgeführt werden.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**Syntax:** obj &lt;&lt; Excel Open Method( "Alle Blätter öffnen"|"Einzelne Arbeitsblätter auswählen"|"Excel-Assistent verwenden" )

### Fast Marker Threshold

**Syntax:** obj &lt;&lt; Fast Marker Threshold( number )

**Beschreibung:** Ändert die Voreinstellung zum Aktualisieren von Symbolen in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**Syntax:** obj &lt;&lt; Fill Hollow Markers( state=0|1 )

**Beschreibung:** Hohle Symbole werden in der Hintergrundfarbe des Graphen ausgefüllt

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**Syntax:** obj &lt;&lt; Fill Selection Color( color )

**Beschreibung:** Farbe der ausgefüllten Auswahl, wenn für den Auswahlmodus zum Füllen „Ausgewählte gleiche Farbe“ festgelegt ist.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**Syntax:** obj &lt;&lt; Fill Selection Fade( number )

**Beschreibung:** Ändert die Standardeinstellung für die schwächere Anzeige nicht ausgewählter Füllungen.

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**Syntax:** obj &lt;&lt; Fill Selection Mode( "Gemustert ausgewählt"|"Dunkler ausgewählt"|"Ausgewählte umrandet"|"Ausgewählte gleiche Farbe"|"Nicht ausgewählte schwächer" )

**Beschreibung:** Ändert die Art und Weise, wie die Auswahl bei ausgefüllten Bereichen angezeigt wird. Standard ist „Gemustert“.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**Syntax:** obj &lt;&lt; Formula Evaluation( "Wenn inaktiv"|"Sofort" )

**Beschreibung:** Legt fest, ob die Formelauswertung während der Leerlaufzeit geschieht oder ob sie direkt im Vordergrund ausgeführt wird

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**Syntax:** obj &lt;&lt; Frame Border( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Rahmenrands auf den Seiten ohne Achse bei allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**Syntax:** obj &lt;&lt; Frame Color( color )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Rahmenrands bei allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**Syntax:** obj &lt;&lt; Get

**Beschreibung:** Gibt das Skript zum Einstellen einer bestimmten Voreinstellung zurück.

```jsl

a = Preferences[1] << Get( Show the Tip of the Day at startup );Show( a );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Gibt das Skript zum Einstellen der Voreinstellungen zurück.

```jsl

a = Preferences[1] << Get Script;Show( a );

```

### Graph Background Color

**Syntax:** obj &lt;&lt; Graph Background Color( color )

**Beschreibung:** Ändert die Voreinstellung für die Hintergrundfarbe in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**Syntax:** obj &lt;&lt; Graph Border( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Graphenrands bei allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**Syntax:** obj &lt;&lt; Graph Height( number )

**Beschreibung:** Ändert die Voreinstellung für die Graphenhöhe in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**Syntax:** obj &lt;&lt; Graph Marker( marker )

**Beschreibung:** Ändert die Voreinstellung für die Symbolform in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**Syntax:** obj &lt;&lt; Graph Marker Theme( "Standard"|"Hohl"|"Gefüllt"|"Paarweise"|"Klassisch"|"Alphanumerisch" )

**Beschreibung:** Ändert die Voreinstellung für das Symbolschema in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**Syntax:** obj &lt;&lt; Graph Marker Unselected Fade( number )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Rahmenrands bei allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**Syntax:** obj &lt;&lt; Graph Marker size( "Punkt"|"Klein"|"Mittel"|"Groß"|"XL"|"XXL"|"XXXL" )

**Beschreibung:** Ändert die Voreinstellung für die Symbolgröße in allen Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**Syntax:** obj &lt;&lt; HDF5PathDelimiter( text )

**JMP Version hinzugefügt:** 17

### Header summary heat map color theme

**Syntax:** obj &lt;&lt; Header summary heat map color theme( "name" )

**Beschreibung:** Ändert die Voreinstellung für das Farbschema „stetig“ in allen Graphen.

**JMP Version hinzugefügt:** 18

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Show( Get Preference( Header summary heat map color theme ) );Set Preference( Header summary heat map color theme( "Green to Purple" ) );Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**Syntax:** obj &lt;&lt; Hide &apos;Find and Replace&apos; window( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung, um das Fenster „Suchen und Ersetzen“ nach dem Such- und Ersetzungsvorgang geöffnet zu lassen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**Syntax:** obj &lt;&lt; Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**Syntax:** obj &lt;&lt; Hide Overlapping Labels( state=0|1 )

**Beschreibung:** Blendet die überlappenden Beschriftungen in einem Graphen aus.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**Syntax:** obj &lt;&lt; Histogram Color( color )

**Beschreibung:** Ändert die Standardfarbe für Histogramme.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**Syntax:** obj &lt;&lt; Histogram Line Color( color )

**Beschreibung:** Ändert die Standardlinienfarbe für Histogramme.

**JMP Version hinzugefügt:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.  Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**Syntax:** obj &lt;&lt; Hover Help( state=0|1 )

**Beschreibung:** Hilfe, die bei kreisförmigen Mausbewegungen wie ein Tooltip aufgerufen wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**Syntax:** obj &lt;&lt; Image Format for PowerPoint( "Standard-Betriebssystemformat"|"PNG"|"JPEG" )

### Include Responses Not in Data

**Syntax:** obj &lt;&lt; Include Responses Not in Data( state=0|1 )

**Beschreibung:** Die Beschriftungen der Zielgrößen anzeigen, die nicht in der Datentabelle vorkommen.

### Initial JMP Window

**Syntax:** obj &lt;&lt; Initial JMP Window( "Hauptfenster"|"JMP-Starter"|"Fensterliste" )

**Beschreibung:** Legt fest, welches JMP-Fenster beim Start von JMP erstellt wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**Syntax:** obj &lt;&lt; Initial Log Window( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Log-Fensters beim Start.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**Syntax:** obj &lt;&lt; Initial Splash Window( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige des Infofensters beim Start.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**Syntax:** obj &lt;&lt; Inside Ticks( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige von Achsenteilstrichen innerhalb von Graphenrahmen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**Syntax:** obj &lt;&lt; Interactive HTML Color( "Heller Hintergrund"|"Dunkler Hintergrund"|"Grauer Hintergrund" )

**Beschreibung:** Ändert die Standardeinstellung für das interaktive HTML-Farbschema.

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**Syntax:** obj &lt;&lt; Internet Open Timeout( number )

**Beschreibung:** Beim Öffnen des Internets wird vor dem Abbruch diese Anzahl von Sekunden gewartet.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**Syntax:** obj &lt;&lt; JMP Live Timeout( number )

**Beschreibung:** Legt den Timeout-Wert für die Veröffentlichung in JMP Live fest. Der Standardwert ist 180 Sekunden.

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**Syntax:** obj &lt;&lt; JMP Theme( "Traditionell"|"Komfortabel"|"JMP Live"|"JMP Clinical" )

**Beschreibung:** Ändert das Schema für JMP insgesamt.

**JMP Version hinzugefügt:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );restore theme = Get Preference( JMP Theme );Set Preference( JMP Theme( "Traditional" ) );Wait( 2 );Set Preference( JMP Theme( "Comfortable" ) );Wait( 2 );Set Preference( JMP Theme( "JMP Live" ) );Wait( 2 );restore theme;

```

### JSL save column groups with group name

**Syntax:** obj &lt;&lt; JSL save column groups with group name( state=0|1 )

**Beschreibung:** Beim Speichern eines Skripts mit einer Liste von Spalten die Syntax ‚column group‘ verwenden, wenn die Liste der Spalten eine Spaltengruppe ist

**JMP Version hinzugefügt:** 16

### JSS Dir

**Syntax:** obj &lt;&lt; JSS Dir( text )

**Beschreibung:** Changes the JSS directory for development use.

**JMP Version hinzugefügt:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**Syntax:** obj &lt;&lt; Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**Syntax:** obj &lt;&lt; Language Switch Warning( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für Warnungen beim Erkennen von Sprachänderungen. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**Syntax:** obj &lt;&lt; Laser pointer( "Aus"|"Violett"|"Blau"|"Grün"|"Gelb"|"Orange"|"Rot" )

**Beschreibung:** Ändert die Voreinstellung zum Anzeigen eines Laser-Pointers zum Hervorheben von Teilen eines Berichts.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**Syntax:** obj &lt;&lt; Line Width( number )

**Beschreibung:** Ändert die Voreinstellung für die Linienbreite für Inhalte in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**Syntax:** obj &lt;&lt; Log Mode( "Verbessert"|"Text" )

**Beschreibung:** Ändert die Standardeinstellung dafür, wie die Log-Fenster angezeigt werden. Gilt auch für Haupt- und Projekt-Log.

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**Syntax:** obj &lt;&lt; Log Window Height( number )

**Beschreibung:** Ändert die Voreinstellung für die Größe des Logfensters. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**Syntax:** obj &lt;&lt; Major Grid Line Color( color )

**Beschreibung:** Ändert die Voreinstellung für die Farbe von Hauptgitterlinien in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**Syntax:** obj &lt;&lt; Major Grid Lines( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige von Hauptgitterlinien in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**Syntax:** obj &lt;&lt; Mark Menu Items Added Since( "Keine"|"Aktuelle Version"|"18"|"17"|"16"|"15"|"14" )

**Beschreibung:** Menüelemente markieren, die neuer sind als eine bestimmte JMP-Version.

**JMP Version hinzugefügt:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**Syntax:** obj &lt;&lt; Marker Label Color( color )

**Beschreibung:** Farbe der Symbolbeschriftungen, wenn für den Farbstil der Symbolbeschriftungen „Fest“ festgelegt ist

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**Syntax:** obj &lt;&lt; Marker Label Color Style( "Symbolfarbe"|"Symbolfarbe verblasst"|"Fixierte Farbe" )

**Beschreibung:** Ändert den Standardfarbstil für Symbolbeschriftungen

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**Syntax:** obj &lt;&lt; Marker Selection Mode( "Nicht ausgewählte schwächer"|"Ausgewählte größer"|"Ausgewählte lichtumrandet"|"Ausgewählte umrandet"|"Ausgewählte gleiche Farbe" )

**Beschreibung:** Ändert die Voreinstellung für den Symbolauswahlmodus. Die Voreinstellung ist „Nicht ausgewählte schwächer“.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**Syntax:** obj &lt;&lt; Maximum Auto Size Column List Width( number )

**JMP Version hinzugefügt:** 18

### Maximum JMP Call Depth

**Syntax:** obj &lt;&lt; Maximum JMP Call Depth( number )

**Beschreibung:** Ändert die Voreinstellung für die maximale JMP-Aufruftiefe.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**Syntax:** obj &lt;&lt; Maximum Parse Depth( number )

**Beschreibung:** Ändert die Standardeinstellung für die maximale Analysetiefe. Der Standardwert beträgt 512.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**Syntax:** obj &lt;&lt; Maximum Symbol Evaluation Recursion Depth( number )

**Beschreibung:** Ändert die Standardeinstellung für die maximale Rekursionstiefe der Symbolauswertung. Der Standardwert beträgt 25.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**Syntax:** obj &lt;&lt; Minor Grid Line Color( color )

**Beschreibung:** Ändert die Voreinstellung für die Farbe von Hilfsgitterlinien in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**Syntax:** obj &lt;&lt; Minor Grid Lines( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige von Hilfsgitterlinien in Graphen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**Syntax:** obj &lt;&lt; New Project Template( text )

**Beschreibung:** Datei für neue, leere Projekte.

**JMP Version hinzugefügt:** 16

### New character columns default to compact

**Syntax:** obj &lt;&lt; New character columns default to compact( state=0|1 )

**Beschreibung:** Neue Zeichenspalten oder Spalten, deren Datentyp Zeichen ist, werden automatisch kompakte Spalten.

**JMP Version hinzugefügt:** 18

### OAuth2 Authentication Browser

**Syntax:** obj &lt;&lt; OAuth2 Authentication Browser( text=Default )

**Beschreibung:** Mit dem angegebenen Browsertyp bei OAuth2-Servern anmelden. Gültige Werte sind „Standard“, „Eingebettet“ und „Extern“. Standardmäßig „Default“.

**JMP Version hinzugefügt:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set(	Sign in to OAuth2 servers with the specified browser type( "Embedded" ));

```

### ODBC Allow Table Replace

**Syntax:** Preferences[1] &lt;&lt; Name("ODBC Allow Table Replace") ( state = 0|1 )

**Beschreibung:** Wählen Sie diese Option, um das Ersetzen von ODBC-Tabellen zuzulassen. Die Option ist standardmäßig aktiviert. Beim Ersetzen einer ODBC-Tabelle wird die vorhandene Tabelle in der Datenbank gelöscht und durch eine neue Tabelle ersetzt.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.     Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**Syntax:** obj &lt;&lt; ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**Syntax:** obj &lt;&lt; Open Text File Charset( "Vermutete Codierung"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**Beschreibung:** Gibt die zu verwendende Codierung an, wenn keine Markierung für die Unicode-Byte-Reihenfolge gefunden wird; standardmäßig wird die Codierung anhand des Dateiinhalts vermutet.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**Syntax:** obj &lt;&lt; Open character columns as compact columns( state=0|1 )

**Beschreibung:** Zeichenspalten automatisch als kompakte Spalten öffnen, wenn JMP dies als nützlich einschätzt

**JMP Version hinzugefügt:** 18

### Open files from outside projects in

**Syntax:** obj &lt;&lt; Open files from outside projects in( "Kein Projekt"|"Offenes Projekt oder Kein Projekt"|"Offenes Projekt oder Neues Projekt"|"Neues Projekt" )

**JMP Version hinzugefügt:** 16

### Outline Close Orientation

**Syntax:** obj &lt;&lt; Outline Close Orientation( "Automatisch"|"Horizontal"|"Vertikal" )

**Beschreibung:** Option zum Reduzieren von Gliederungsfeldern in vertikaler Richtung, um in horizontaler Richtung Platz zu sparen.

### Parallel Data Table Column Decompression

**Syntax:** obj &lt;&lt; Parallel Data Table Column Decompression( state=0|1 )

**Beschreibung:** Ändert die Standardeinstellung zum parallelen Dekomprimieren von Spalten. Der Standardwert ist „aktiviert“. Durch Ausschalten dieser Option können möglicherweise einige sehr große Tabellen geladen werden.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**Syntax:** obj &lt;&lt; Partial Selection Indicator( "Keine"|"Balken"|"Torte"|"Waffel" )

**Beschreibung:** Wie eine partielle Auswahl einer Gruppe angezeigt wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**Syntax:** obj &lt;&lt; Platform Launch Actions( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**Syntax:** Preferences[1] &lt;&lt; Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.      Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**Syntax:** obj &lt;&lt; Preserve SAS formats when exporting to SAS( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Beibehalten von SAS-Formaten beim Export in SAS.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**Syntax:** obj &lt;&lt; Preserve SAS variable names when exporting to SAS( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Beibehalten von SAS-Variablennamen beim Export in SAS.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**Syntax:** obj &lt;&lt; Print Data Grid as is( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Drucken von Datenrasterlinien wie auf dem Bildschirm angezeigt.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**Syntax:** obj &lt;&lt; Prompt to save when closing summary tables( state=0|1 )

**Beschreibung:** Aufforderung zum Speichern beim Schließen der Zusammenfassungstabelle ja oder nein?

**JMP Version hinzugefügt:** 14

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**Syntax:** obj &lt;&lt; Proxy Port( number )

**Beschreibung:** Den angegebenen Proxy-Port verwenden.

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**Syntax:** obj &lt;&lt; Proxy Server( text )

**Beschreibung:** Den angegebenen Proxy verwenden.

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.url = "http:://myproxy.com:80";Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**Syntax:** obj &lt;&lt; Proxy User( text )

**Beschreibung:** Der Benutzername und das Kennwort für die Proxy-Authentifizierung. [Benutzername]:[Kennwort]

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**Syntax:** obj &lt;&lt; Reopen the initial JMP window on last window close( state=0|1 )

**Beschreibung:** Legt fest, ob das erste JMP-Fenster beim Schließen des letzten JMP-Fensters automatisch neu geöffnet wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**Syntax:** obj &lt;&lt; Report Invalid Display Box Messages( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Ausgabe von Fehlern zu ungültigen Meldungen für Anzeigefelder.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**Syntax:** obj &lt;&lt; Report JSL warnings and errors interactively( state=0|1 )

**Beschreibung:** Warnungen und Fehler beim Absenden von JSL werden protokolliert und interaktiv angezeigt. Wenn deaktiviert, werden Warnungen und Fehler nur protokolliert.

**JMP Version hinzugefügt:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**Syntax:** obj &lt;&lt; Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**Syntax:** obj &lt;&lt; Report Snapshot On Close( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**Syntax:** obj &lt;&lt; Row Editor Always Show All Columns( state=0|1 )

**Beschreibung:** Wenn aktiviert, zeigt der Zeileneditor alle Spalten in der Datentabelle an, unabhängig davon, ob Spalten ausgewählt sind oder nicht.

**JMP Version hinzugefügt:** 16

### Ruler Tool Units

**Syntax:** obj &lt;&lt; Ruler Tool Units( "Kilometer"|"Meilen" )

**Beschreibung:** Ändert die Einheiten im Lineal der Graphenwerkzeuge bei Verwendung in einer Karte in der Plattform „Graphik erstellen“.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**Syntax:** obj &lt;&lt; SAS Automatically Generate ODS results( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**Syntax:** obj &lt;&lt; SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.           Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**Syntax:** obj &lt;&lt; SAS Data Import Close Warning( state=0|1 )

**JMP Version hinzugefügt:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**Syntax:** obj &lt;&lt; SAS Data Import Uses Labels( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**Syntax:** obj &lt;&lt; SAS Import generated datasets into JMP( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**Syntax:** obj &lt;&lt; SAS ODS Results Format( "HTML"|"TEXT" )

### SAS ODS Style

**Syntax:** obj &lt;&lt; SAS ODS Style( text=Statistical )

**Beschreibung:** Standardmäßig „Statistical“.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**Syntax:** obj &lt;&lt; SAS Organize results in JMP project( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**Syntax:** obj &lt;&lt; SAS Transport Use UTF8( state=0|1 )

**Beschreibung:** Ändern Sie die Standard-Zeichenverschlüsselung für Transportdateien in UTF-8.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**Syntax:** obj &lt;&lt; SPSSMultiResponseDelimiter( text=| )

**Beschreibung:** Standardmäßig „|“.

**JMP Version hinzugefügt:** 16

### Save Data Table Columns GZ Compressed

**Syntax:** obj &lt;&lt; Save Data Table Columns GZ Compressed( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Speichern von Datentabellen in einem mit GZip komprimierten Format.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**Syntax:** obj &lt;&lt; Save Image DPI( number )

**Beschreibung:** Gibt eine DPI-Einstellung an, die beim Speichern von Bildern verwendet werden soll, andernfalls wird ein Standardwert verwendet.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.             Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**Syntax:** obj &lt;&lt; Save Journals GZ Compressed( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Speichern von Journalen in einem mit GZip komprimierten Format.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**Syntax:** obj &lt;&lt; Save Scripts in English( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Speichern von Skripten in Englisch, statt in der angezeigten Sprache.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**Syntax:** obj &lt;&lt; Save Text Files as Unicode( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Speichern von Textdateien im Unicode-Format.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**Syntax:** obj &lt;&lt; Save table with report( "Einbetten"|"Separat"|"Abfrage" )

**Beschreibung:** Ändert, wie Daten in gespeicherten Berichten gespeichert werden.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**Syntax:** obj &lt;&lt; Save the session when exiting( "Immer"|"Niemals"|"Abfrage" )

**Beschreibung:** Ändert die Voreinstellung für das Speichern der Sitzung beim Beenden von JMP.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**Syntax:** obj &lt;&lt; Selected Marker Color( color )

**Beschreibung:** Ändert die Farbe von ausgewählten Symbolen, wenn die Funktion „Ausgewählte gleiche Farbe“ im Symbolauswahlmodus verwendet wird.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**Syntax:** obj &lt;&lt; Semantic formatting

**Beschreibung:** Erstellt ein semantisches Format, das verwendet wird, wenn seine Kriterien dem aktuellen Berichtskontext entsprechen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Preferences(	Semantic formatting(		Add Semantic Format(			Format Name( "My Format 1" ),			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),			Criteria(				Object Name( "*mean*" ),				Outline Path( "** :: Means for Oneway Anova" )			)		),		Add Semantic Format(			Format Name( "My Format 2" ),			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),			Criteria(				Object Name( "*mean*" ),				Outline Path( "** :: Means for Oneway Anova" ),				Row Name( "M" )			)		)	));

```

**Beispiel 2**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**Syntax:** obj &lt;&lt; Sequential Color Theme( "name" )

**Beschreibung:** Ändert die Voreinstellung für das Farbschema „stetig“ in allen Graphen.

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Sequential Color Theme( "Green to Purple" ) );Show( Get Preference( Sequential Color Theme ) );

```

### Set

**Syntax:** obj &lt;&lt; Set

**Beschreibung:** Legt eine bestimmte Voreinstellung fest.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Set ODBC Primary Key as Link ID

**Syntax:** Preferences[1] &lt;&lt; Name("Set ODBC Primary Key as Link ID") ( state = 0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.      Preferences[1] << Name( "Set ODBC Primary Key as Link ID" )(1);

```

### Shade Alternate Table Rows

**Syntax:** obj &lt;&lt; Shade Alternate Table Rows( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**Syntax:** obj &lt;&lt; Shade Table Cells( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**Syntax:** obj &lt;&lt; Shade Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**Syntax:** obj &lt;&lt; Shape Boundary Color( color )

**Beschreibung:** Ändert die Standardeinstellung für die Farbe von Formenbegrenzungen an allen Graphen, z. B. Hintergrundkarten.

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**Syntax:** obj &lt;&lt; Show Alternate Column Name( state=0|1 )

**Beschreibung:** Standardeinstellung ändern, um alternativen Namen im Bereich „Spalten“ im Dialogfeld und in der Datentabelle anzuzeigen.

### Show Personalization at startup

**Syntax:** obj &lt;&lt; Show Personalization at startup( state=0|1 )

**Beschreibung:** Das Dialogfeld für die Personalisierung wird beim nächsten Start von JMP angezeigt.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**Syntax:** obj &lt;&lt; Show SAS Log( "Niemals"|"Immer"|"Bei Fehler" )

### Show Search box on Columns Panel

**Syntax:** obj &lt;&lt; Show Search box on Columns Panel( state=0|1 )

**Beschreibung:** Suchbearbeitungsfeld im Spaltenbereich standardmäßig anzeigen

**JMP Version hinzugefügt:** 16

### Show Status Bar

**Syntax:** obj &lt;&lt; Show Status Bar( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige der Statuszeile.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**Syntax:** obj &lt;&lt; Show conditional formatting( "Immer"|"Nur Bildschirm"|"Niemals" )

**Beschreibung:** Ändert die Voreinstellung zum Anzeigen der bedingten Formatierung in Berichten.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**Syntax:** obj &lt;&lt; Show menu tips( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für die Anzeige der Menütipps, die angezeigt werden, wenn Sie mit der Maus über einem Menüpunkt in einem durch ein rotes Dreieck gekennzeichneten Menü kreisen.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**Syntax:** obj &lt;&lt; Show missing data bars or bins in summary graphs( state=0|1 )

**Beschreibung:** Gibt an, ob Balken oder Klassen für fehlende Daten anfänglich in Übersichtsgraphen angezeigt werden. Unabhängig von dem Wert hier können sie in einzelnen Übersichtsgraphen durch Rechtsklick auf den Übersichtsgraphen und Auswahl von „Balken für fehlende Werte“ oder „Klasse für fehlende Werte“ ein- bzw. ausgeschaltet werden.

**JMP Version hinzugefügt:** 16

### Show semantic formatting

**Syntax:** obj &lt;&lt; Show semantic formatting( "Immer"|"No Row Matching"|"Niemals" )

**Beschreibung:** Ändert die Standardeinstellung für die Verwendung von semantischer Formatierung in Berichten. Mögliche Werte sind: „Immer“, „Keine Zeilenübereinstimmung“ und „Niemals“. Verwenden Sie „Keine Zeilenübereinstimmung“, um zeilenspezifische semantische Formate zu deaktivieren.

**JMP Version hinzugefügt:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**Syntax:** obj &lt;&lt; Show summary graphs below column names( state=0|1 )

**Beschreibung:** Gibt an, ob die Übersichtsgraphen zu Beginn in der Datentabelle zwischen den Spaltennamen und den Datenzellen angezeigt werden, falls die Anzahl von Zeilen unter einer bestimmten Leistungsschwelle (3 Millionen Zeilen) liegt. Unabhängig vom Erstzustand kann die Anzeige in den einzelnen Datentabellen mit dem Symbol neben den Spaltennamen umgeschaltet werden.

**JMP Version hinzugefügt:** 15

### Show the Quick Start at startup

**Syntax:** obj &lt;&lt; Show the Quick Start at startup( state=0|1 )

**Beschreibung:** Ändert die Standardeinstellung für die Anzeige des Schnellstartfensters.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**Syntax:** obj &lt;&lt; Summary Graph Continuous Color( color )

**Beschreibung:** Farbe für stetige Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**Syntax:** obj &lt;&lt; Summary Graph Continuous Highlight Color( color )

**Beschreibung:** Hervorhebungsfarbe für stetige Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**Syntax:** obj &lt;&lt; Summary Graph Continuous Missing Color( color )

**Beschreibung:** Farbe für fehlende stetige Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**Syntax:** obj &lt;&lt; Summary Graph Continuous Missing Highlight Color( color )

**Beschreibung:** Hervorhebungsfarbe für fehlende stetige Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Color

**Syntax:** obj &lt;&lt; Summary Graph Name Ordered Color( color )

**Beschreibung:** Farbe für nach Name geordnete Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**Syntax:** obj &lt;&lt; Summary Graph Name Ordered Highlight Color( color )

**Beschreibung:** Hervorhebungsfarbe für nach Name geordnete Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**Syntax:** obj &lt;&lt; Summary Graph Other Color( color )

**Beschreibung:** Farbe für den anderen Balken in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**Syntax:** obj &lt;&lt; Summary Graph Other Highlight Color( color )

**Beschreibung:** Hervorhebungsfarbe für den anderen Balken in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**Syntax:** obj &lt;&lt; Summary Graph Run Chart Color( color )

**Beschreibung:** Farbe für den anderen Balken in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 18

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**Syntax:** obj &lt;&lt; Summary Graph Size Ordered Color( color )

**Beschreibung:** Farbe für nach Größen geordnete Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**Syntax:** obj &lt;&lt; Summary Graph Size Ordered Highlight Color( color )

**Beschreibung:** Hervorhebungsfarbe für nach Größen geordnete Daten in Übersichtsgraphen und Datenfiltern festlegen

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**Syntax:** obj &lt;&lt; Suppress Formula Eval on Open( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung für das Unterdrücken von Formelausführungen beim Öffnen einer Datentabelle.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**Syntax:** obj &lt;&lt; Table Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**Syntax:** obj &lt;&lt; Table Column Group Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**Syntax:** obj &lt;&lt; Table Heading Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**Syntax:** obj &lt;&lt; Table Row Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**Syntax:** obj &lt;&lt; Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**Beschreibung:** Legt fest, welche JMP-Fenster in der Windows-Taskleiste angezeigt werden.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**Syntax:** obj &lt;&lt; Transparent background for report PNG images( state=0|1 )

**Beschreibung:** Wenn Berichte oder Teile von Berichten als PNG-Bilder gespeichert werden, ist der Hintergrund transparent.

**JMP Version hinzugefügt:** 14

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**Syntax:** obj &lt;&lt; Underline Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**Syntax:** obj &lt;&lt; Use Excel Labels as Headings( "Vermutetes Dateiformat verwenden"|"Immer"|"Niemals" )

**Beschreibung:** Ändert die Voreinstellung zum Importieren von Excel-Beschriftungen als JMP-Spaltennamen beim Öffnen von Excel-Dateien.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**Syntax:** obj &lt;&lt; Use Greek letters( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Aktivieren von griechischen Buchstaben in JMP-Berichten.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**Syntax:** obj &lt;&lt; Use JMP Locale Settings( state=0|1 )

**Beschreibung:** Ändert das voreingestellte Verhalten für die Anzeige von Zahlen-, Datums- und Währungsformaten. Hinweis: Nur unter Windows verfügbar.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**Syntax:** obj &lt;&lt; Use Numerical Ordering( state=0|1 )

**Beschreibung:** Spaltensortierung für neue Spalten so konfigurieren, dass Text mit Zahlen in numerischer Reihenfolge sortiert wird. Spalten, die in Zeichen konvertiert wurden, sind ebenfalls betroffen, sofern sie nicht bereits die Eigenschaft „Reihenfolge der Werte“ enthalten.

**JMP Version hinzugefügt:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**Syntax:** obj &lt;&lt; Use Project Log( "Immer"|"Wenn offen"|"Niemals" )

**Beschreibung:** Gibt an, ob von Skripten und Fenstern in einem Projekt generierte Log-Meldungen ans Projekt-Log-Fenster gesendet werden sollen (statt zum Haupt-Log-Fenster)

**JMP Version hinzugefügt:** 16

### Use SPSS labels for column names during import

**Syntax:** obj &lt;&lt; Use SPSS labels for column names during import( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Importieren von SPSS-Beschriftungen als JMP-Spaltennamen beim Öffnen von SPSS-Dateien.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**Syntax:** obj &lt;&lt; Use Thousands Separator( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Verwenden des Tausendertrennzeichens in numerischen Ausgaben.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**Syntax:** obj &lt;&lt; Use Triple-S Labels as Headings( state=0|1 )

**Beschreibung:** Ändert die Standardeinstellung für die Verwendung von Beschriftungen als Spaltennamen für Triple-S-Variablen

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**Syntax:** obj &lt;&lt; Use a Floating Window for Data Filters( state=0|1 )

**Beschreibung:** Wenn aktiviert, werden Datenfilter in einem frei beweglichen Fenster über den Datentabellen und den zugehörigen Fenstern angezeigt. Andernfalls werden Datenfilter in einem Fenster angezeigt, das wie üblich mit anderen Fenstern angeordnet werden kann.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**Syntax:** obj &lt;&lt; Use an Asterisk with the PValue Format( state=0|1 )

**Beschreibung:** In numerischen Spalten wird an das Format des p-Werts ein Sternchen angehängt.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**Syntax:** obj &lt;&lt; Use column references in Dispatch( state=0|1 )

**Beschreibung:** Verwenden Sie beim Speichern von Berichtsanpassungen Spaltenreferenzen anstelle von Zeichenketten, wenn Sie sich auf angepasste Elemente beziehen. Dadurch werden Skripte erzeugt, die robuster gegenüber Änderungen von Spaltennamen sind. Beachten Sie, dass modifizierte Skripte, die mit dieser Voreinstellung gespeichert werden, möglicherweise nur in JMP 18.0 und neuer funktionieren.

**JMP Version hinzugefügt:** 18

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**Syntax:** obj &lt;&lt; Use math symbols( state=0|1 )

**Beschreibung:** Ändert die Voreinstellung zum Aktivieren von mathematischen Symbolen in JMP-Berichten.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**Syntax:** obj &lt;&lt; Virtual Join Auto Open Linked Table( state=0|1 )

**Beschreibung:** Datentabelle, auf die diese Spalte verweist, automatisch öffnen.

**JMP Version hinzugefügt:** 16

### Virtual Join Use Linked Column Name

**Syntax:** obj &lt;&lt; Virtual Join Use Linked Column Name( state=0|1 )

**Beschreibung:** Virtuelle Spalte mit dem Namen der verknüpften Spalte benennen.

**JMP Version hinzugefügt:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**Syntax:** obj &lt;&lt; Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**Beschreibung:** Das Kompaktdateiformat kann in JMP 17 und früher nicht geöffnet werden.

**JMP Version hinzugefügt:** 18

### Warn when referenced table name has changed

**Syntax:** obj &lt;&lt; Warn when referenced table name has changed( state=0|1 )

**Beschreibung:** Warnung anzeigen, wenn sich der Name einer virtuell verknüpften (referenzierten) Tabelle geändert hat.

**JMP Version hinzugefügt:** 15

## Platform Preferences

### Elementmeldungen

#### Get

**Syntax:** obj &lt;&lt; Get

**Beschreibung:** Gibt das Skript zum Einstellen einer bestimmten Voreinstellung zurück.

```jsl

a = Platform Preferences[1] << Get( Distribution );Show( a );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Gibt das Skript zum Einstellen der Voreinstellungen zurück.

```jsl

a = Platform Preferences[1] << Get Script;Show( a );

```

#### Set

**Syntax:** obj &lt;&lt; Set

**Beschreibung:** Legt eine bestimmte Voreinstellung fest.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

