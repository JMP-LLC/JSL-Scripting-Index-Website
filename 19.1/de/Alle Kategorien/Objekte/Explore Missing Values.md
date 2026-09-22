# Explore Missing Values



## Elementmeldungen

### ADI Loading Matrix

**Syntax:** obj &lt;&lt; ADI Loading Matrix( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Spalten anzeigt, die der Faktorladung jeder Komponente entsprechen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Set Random Seed( 123 ),	Automated Data Imputation);obj << ADI Loading Matrix( 1 );

```

### Automated Data Imputation

**Syntax:** obj &lt;&lt; Automated Data Imputation

**Beschreibung:** Setzt fehlende Werte unter Verwendung einer Matrixapproximationsmethode niederen Ranges ein. Bei dieser Methode wird automatisch die beste Dimension für die Approximation niederen Ranges basierend auf den Daten ausgewählt.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Automated Data Imputation;

```

### Close

**Syntax:** obj &lt;&lt; Close

**Beschreibung:** Schließt den Bericht „Fehlende Spalten“.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ),	Missing Value Report);Wait( 2 );obj << Close;

```

### Color Cells

**Syntax:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**Beschreibung:** Stellt die Zellen in der Datentabelle farbig dar, die fehlende Werte für die Spalte(n) enthalten, die Sie im Bericht „Fehlende Spalten“ auswählen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Color cells( :OZONE );

```

### Color Rows

**Syntax:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**Beschreibung:** Stellt die Zeilen in der Datentabelle farbig dar, die fehlende Werte für die Spalte(n) enthalten, die Sie im Bericht „Fehlende Spalten“ auswählen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Color rows( :OZONE );

```

### Exclude Rows

**Syntax:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**Beschreibung:** Wendet die Zeileneigenschaft „Ausgeschlossen“ auf Zeilen in der Datentabelle an, die fehlende Werte für die Spalte(n) enthalten, die Sie im Bericht „Fehlende Spalten“ auswählen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Exclude rows( :OZONE );

```

### Get U V Sigma ADI Matrices

**Syntax:** obj &lt;&lt; Get U V Sigma ADI Matrices

**Beschreibung:** Gibt die U-, V- und Sigma-Matrizen aus der Approximation niederen Ranges in der ADI-Methode zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Set Random Seed( 123 ),	Automated Data Imputation);obj << Get U V Sigma ADI Matrices;

```

### Maximum Dimension

**Syntax:** obj &lt;&lt; Maximum Dimension( number )

**Beschreibung:** Legt die maximale Dimension für die automatische Datenimputation fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Maximum Dimension( 3 ),	Automated Data Imputation);

```

### Maximum Iteration

**Syntax:** obj &lt;&lt; Maximum Iteration( number=10 )

**Beschreibung:** Legt die maximale Anzahl der Iterationen für die automatische Datenimputation fest. Standardmäßig „10“.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Maximum Iteration( 8 ),	Automated Data Imputation);

```

### Missing Value Clustering

**Syntax:** obj &lt;&lt; Missing Value Clustering

**Beschreibung:** Bietet eine hierarchische Clusteranalyse der fehlenden Daten.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Missing Value Clustering;

```

### Missing Value Report

**Syntax:** obj &lt;&lt; Missing Value Report

**Beschreibung:** Öffnet den Bericht „Fehlende Spalten“, der die Namen jeder Spalte und die Anzahl fehlender Werte in der jeweiligen Spalte auflistet.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Missing Value Report;

```

### Missing Value Snapshot

**Syntax:** obj &lt;&lt; Missing Value Snapshot

**Beschreibung:** Zeigt ein Zellendiagramm für die fehlenden Werte an. Eine schwarze Zelle deutet auf einen fehlenden Wert hin.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Missing Value Snapshot;

```

### Multivariate Normal Imputation

**Syntax:** obj &lt;&lt; Multivariate Normal Imputation( Shrink Covariances( state=0|1 ) )

**Beschreibung:** Setzt fehlende Werte basierend auf der multivariaten Normalverteilung ein. Um die Schätzung der Kovarianzmatrix zu verbessern, verwenden Sie die Option Schrumpfungsschätzer.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Multivariate Normal Imputation( Shrink Covariances( 1 ) );

```

### Multivariate RPCA Imputation

**Syntax:** obj &lt;&lt; Multivariate RPCA Imputation( Lambda( number ), Tolerance( number = 1e-7 ), MaxIt( number ) )

**Beschreibung:** Setzt fehlende Werte mithilfe robuster Hauptkomponenten ein, wobei fehlende Werte unter Verwendung der Matrixfaktorisierung niederen Ranges (SWZ), die gegenüber Ausreißern robust ist, ersetzt werden. Diese Methode ist bei sehr vielen Variablen nützlich. Der Standardwert für Lambda ist 2/Quadratwurzel(max(n, p)), wobei n die Anzahl Zeilen und p die Anzahl der Spalten ist. Wenn min(n, p) < 100, ist der Standardwert für die maximale Anzahl von Iterationen (MaxIt) 75. Wenn 100 <= min(n, p) < 1000, ist der Standardwert für MaxIt 100. Wenn min(n,p) >= 1000, ist der Standardwert für MaxIt 200. Wenn der Algorithmus nach der angegebenen Anzahl von Iterationen nicht konvergiert, wird die Lösung bei MaxIt akzeptiert und im Bericht angezeigt.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Multivariate RPCA Imputation;

```

### Multivariate SVD Imputation

**Syntax:** obj &lt;&lt; Multivariate SVD Imputation( Number of Singular Vectors( number ), Maximum Iterations( number ), Show Iteration Log( state=0|1 ) )

**Beschreibung:** Setzt fehlende Werte schnell bei vielen Daten ein. Dabei wird zur Vervollständigung der Matrix iterativ eine Niedrigrangapproximation durch SWZ durchgeführt.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Multivariate SVD Imputation(	Number of Singular Vectors( 3 ),	Maximum Iterations( 10 ),	Show Iteration Log( 1 ),);

```

### Options for Saving Imputed Values

**Syntax:** obj &lt;&lt; Options for Saving Imputed Values(1|2|3)

**Beschreibung:** Gibt die Methode an, mit der die eingesetzten Werte für die ADI-Methode gespeichert werden sollen. Mit 1 geben Sie die Option „Neue Datentabelle erstellen“ an, mit 2 geben Sie die Option „Scoring-Formel in aktueller Datentabelle speichern“ an, und mit 3 geben Sie die Option „Werte anstelle einsetzen“ an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Options for Saving Imputed Values( 1 ),	Set Random Seed( 123 ),	Automated Data Imputation);

```

### Select Rows

**Syntax:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**Beschreibung:** Wählt die Zeilen in der Datentabelle aus, die fehlende Werte für die Spalte(n) enthalten, die Sie im Bericht „Fehlende Spalten“ auswählen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Select rows( :OZONE );

```

### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed( number=0 )

**Beschreibung:** Legt den zufälligen Startwert für die automatische Datenimputation fest. Standardmäßig „0“.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Set Random Seed( 1234 ),	Automated Data Imputation);

```

### Show only columns with missing

**Syntax:** obj &lt;&lt; Show only columns with missing( state=0|1 )

**Beschreibung:** Entfernt Spalten aus der Liste, die keine fehlenden Werte haben.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Show Only Columns With Missing( 1 );

```

### Undo Imputation

**Syntax:** obj &lt;&lt; Undo Imputation

**Beschreibung:** Ersetzt die zuletzt eingesetzten Daten mit fehlenden Werte.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Multivariate Normal Imputation);Wait( 2 );obj << Undo Imputation;

```

### Validation Proportion

**Syntax:** obj &lt;&lt; Validation Proportion( number=0.3 )

**Beschreibung:** Legt den Anteil von Zeilen fest, die als Validierungszeilen für die automatische Datenimputation verwendet werden sollen. Standardmäßig „0.3“.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Validation Proportion( 0.25 ),	Automated Data Imputation);

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Data Table Window;

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

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Script Window;

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Explore Missing Values(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**Syntax:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## Zugehörige Konstruktoren

### Explore Missing Values

**Syntax:** Explore Missing Values( Y( columns ) )

**Beschreibung:** Muster von fehlenden Werten suchen und Imputation durchführen.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

