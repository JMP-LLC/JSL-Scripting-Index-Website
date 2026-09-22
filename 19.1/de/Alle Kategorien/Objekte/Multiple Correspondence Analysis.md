# Multiple Correspondence Analysis



## Elementmeldungen

### 3D Correspondence Analysis

**Syntax:** obj&lt;&lt;"3D Correspondence Analysis"n(1)

**Beschreibung:** Zeigt ein 3D-Korrespondenzdiagramm an oder blendet es aus. Für die 3D-Korrespondenzanalyse sind mindestens vier Stufen für jede der X- und Y-Variablen erforderlich.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << "3D Correspondence Analysis"n( 1 );

```

### Cochran's Q Test

**Syntax:** obj&lt;&lt;Cochran&apos;s Q Test(1)

**Beschreibung:** Zeigt Cochrans Q-Test an oder blendet ihn aus.

```jsl

dt = New Table( "Drug_Qtest",	Add Rows( 8 ),	New Column( "Subject", Numeric, "Continuous", Set Values( [1, 2, 3, 4, 5, 6, 7, 8] ) ),	New Column( "drug_A",		Character,		"Nominal",		Set Values( {"F", "F", "F", "F", "U", "U", "U", "U"} )	),	New Column( "drug_B",		Character,		"Nominal",		Set Values( {"F", "F", "U", "U", "F", "F", "U", "U"} )	),	New Column( "drug_C",		Character,		"Nominal",		Set Values( {"F", "U", "F", "U", "F", "U", "F", "U"} )	),	New Column( "Count", Numeric, "Continuous", Set Values( [6, 16, 2, 4, 2, 4, 6, 6] ) ));obj = dt << Multiple Correspondence Analysis(	Y( :drug_A, :drug_B, :drug_C ),	X( :Subject ),	Freq( :Count ));obj << Cochran's Q Test( 1 );

```

### Cross Table

**Syntax:** obj &lt;&lt; Cross Table( state=0|1 )

**Beschreibung:** Zeigt eine Kontingenz- oder Burt-Tabelle an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Cross Table( 0 );

```

### Cross Table of Supplementary Columns

**Syntax:** obj &lt;&lt; Cross Table of Supplementary Columns( state=0|1 )

**Beschreibung:** Zeigt eine Kreuztabelle zusätzlicher Spalten an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );obj = dt << Multiple Correspondence Analysis(	Y( :Region ),	X( :Year ),	Freq( :Population ),	Supplementary ID( :ID ));obj << Cross Table of Supplementary Columns( 0 );

```

### Cross Table of Supplementary Rows

**Syntax:** obj &lt;&lt; Cross Table of Supplementary Rows( state=0|1 )

**Beschreibung:** Zeigt eine Kreuztabelle zusätzlicher Zeilen an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );obj = dt << Multiple Correspondence Analysis(	Y( :Year ),	X( :Region ),	Freq( :Population ),	Supplementary ID( :ID ));obj << Cross Table of Supplementary Rows( 0 );

```

### Mosaic Plot

**Syntax:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Beschreibung:** Zeigt ein Mosaikdiagramm der Daten an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ) );obj << Mosaic Plot( 1 );

```

### Proportional marker size

**Syntax:** obj&lt;&lt;Proportional Marker Size(1)

**Beschreibung:** Legt die Größe jedes einzelnen Symbols im Korrespondenzdiagramm als proportional zur Häufigkeit der entsprechenden Gruppe fest.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Proportional Marker Size( 1 );

```

### Save Coordinate Formula

**Syntax:** obj&lt;&lt;Save Coordinates

**Beschreibung:** Speichert die Koordinatenformel in einer neuen Spalte in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Save Coordinate Formula( 2 );

```

### Save Coordinates

**Syntax:** obj&lt;&lt;Save Coordinates

**Beschreibung:** Speichert Spalten- oder Zeilenkoordinaten.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Save Coordinates;

```

### Select dimension

**Syntax:** obj &lt;&lt; Select dimension( &lt;specify dimension to plot&gt; )

**Beschreibung:** Wählt die Dimensionen aus, die als Achsen im Korrespondenzdiagramm verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Select Dimension( 1, 3 );

```

### Show Adjusted Inertia

**Syntax:** obj&lt;&lt;Show Adjusted Inertia(1)

**Beschreibung:** Zeigt korrigierte Trägheit an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Adjusted Inertia( 1 );

```

### Show Coordinates

**Syntax:** obj&lt;&lt;Show Coordinates(1)

**Beschreibung:** Zeigt Zeilen- und Spaltenkoordinaten an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Coordinates( 1 );

```

### Show Detail

**Syntax:** obj&lt;&lt;Show Detail(0)

**Beschreibung:** Zeigt Details der Trägheit und Chi-Quadrat-Zerlegung an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Detail( 0 );

```

### Show Partial Contributions to Inertia

**Syntax:** obj&lt;&lt;Show Partial Contributions to Inertia(1)

**Beschreibung:** Zeigt partielle Beiträge zur Trägheit an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Partial Contributions to Inertia( 1 );

```

### Show Plot

**Syntax:** obj&lt;&lt;Show Plot(0)

**Beschreibung:** Zeigt ein Korrespondenzdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Plot( 0 );

```

### Show Squared Cosines

**Syntax:** obj&lt;&lt;Show Squared Cosines(1)

**Beschreibung:** Blendet eine Tabelle ein oder aus, die die quadrierten Kosinus von Variablen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Squared Cosines( 1 );

```

### Show Summary Statistics

**Syntax:** obj&lt;&lt;Show Summary Statistics(1)

**Beschreibung:** Zeigt statistische Kennzahlen zu Qualität, Masse und Trägheit an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Summary Statistics( 1 );

```

### Tests for Independence

**Syntax:** obj &lt;&lt; Tests for Independence( state=0|1 )

**Beschreibung:** Zeigt Tests auf Unabhängigkeit an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ) );obj << Tests for Independence( 1 );

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Multiple Correspondence Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### By

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;By( column(s) )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;Factor( column(s) )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine oder mehrere kategoriale Spalten an, die als Faktor- oder Erklärungsvariablen verwendet werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Freq

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;Freq( column )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	Freq( :_freqcol ));

```

### Response

**Syntax:** obj = Multiple Correspondence Analysis(...Response( column(s) )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die kategorialen Spalten für die Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Supplementary ID

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;Supplementary ID( column )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt Spalten an, die Zeilen identifizieren, die als supplementär verwendet werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );obj = dt << Multiple Correspondence Analysis(	Y( :Year ),	X( :Region ),	Freq( :Population ),	Supplementary ID( :ID ));obj << Cross Table of Supplementary Rows( 0 );

```

### Supplementary Variable

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;Supplementary Variable( column(s) )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ), Z( :sex ) );

```

### X

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;X( column(s) )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine oder mehrere kategoriale Spalten an, die als Faktor- oder Erklärungsvariablen verwendet werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Y

**Syntax:** obj = Multiple Correspondence Analysis(...Y( column(s) )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die kategorialen Spalten für die Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Z

**Syntax:** obj = Multiple Correspondence Analysis(...&lt;Z( column(s) )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ), Z( :sex ) );

```

## Zugehörige Konstruktoren

### Multiple Correspondence Analysis

**Syntax:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Beschreibung:** Identifiziert Zuordnungen zwischen den Stufen von kategorialen Variablen. Die multiple Korrespondenzanalyse ist analog zur Hauptkomponentenanalyse für kategoriale Daten.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

