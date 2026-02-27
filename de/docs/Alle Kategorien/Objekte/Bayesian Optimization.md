# Bayesian Optimization



## Elementmeldungen

### Automatically Generate a Batch

**Syntax:** obj &lt;&lt; Automatically Generate a Batch( state=0|1 )

**Beschreibung:** Gibt an, ob die automatische Generierung von Kandidatensätzen und die Batch-Auswahl ausgeführt werden sollen. Optional können Sie festlegen, welche Methode zur Auswahl von Batches verwendet werden soll. Diese Option entspricht der Angabe von beiden Optionen „Kandidatensatz generieren“ und „Batch automatisch auswählen“ gleichzeitig.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 1 ));

```

### Autoselect Batch

**Syntax:** obj &lt;&lt; Autoselect Batch( state=0|1 )

**Beschreibung:** Wählt einen Batch aus dem aktuell geladenen Kandidatensatz aus. Wenn kein Kandidatensatz geladen ist, wird ein raumfüllender Satz mit einer Größe von 1000 mal der Anzahl der Eingabevariablen generiert. Diese Option kann auch verwendet werden, um die automatische Batch-Auswahl beim Start zu deaktivieren.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( Batch Size( 1 ), Minimum RSquare( 0.5 ) ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( 0 ));

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 0 ));obj << Autoselect Batch( Batch Size( 5 ), Augmentation Method( Space Filling Exploration ) );

```

### Batch Size

**Syntax:** obj &lt;&lt; Batch Size( number )

**Beschreibung:** Legt die Batch-Größe fest, die beim Start automatisch ausgewählt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Batch Size( 5 ));

```

### Candidate Set Size

**Syntax:** obj &lt;&lt; Candidate Set Size( number )

**Beschreibung:** Gibt die gewünschte Größe des zu generierenden Kandidatensatzes an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Candidate Set Size( 10 ));

```

### Continuous Correlation Type

**Syntax:** obj &lt;&lt; Continuous Correlation Type( "Gauß"|"Matern 3/2"|"Matern 5/2"|"Exponentiell" )

**Beschreibung:** Gibt den gewünschten Kernel für kontinuierliche Eingabevariablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Continuous Correlation Type( "Matern 5/2" ));

```

### Generate Candidate Set

**Syntax:** obj &lt;&lt; Generate Candidate Set( Candidate Set Size( number ), &lt;Include Runs that Do Not Conform to Constraints( state = 0|1 )&gt; )

**Beschreibung:** Generiert einen Kandidatensatz. Sie können die Größe des Kandidatensatzes angeben und festlegen, ob Punkte zulässig sind, die gegen die linearen Nebenbedingungen in der Datentabelle verstoßen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	));

```

### Include Runs that Do Not Conform to Constraints

**Syntax:** obj &lt;&lt; Include Runs that Do Not Conform to Constraints( state=0|1 )

**Beschreibung:** Gibt an, ob Punkte, die die linearen Nebenbedingungen in der Datentabelle verletzen, beim Generieren oder Laden eines Kandidatensatzes berücksichtigt werden sollen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dtCand = New Table( "Tiretread Candidate Set",	Add Rows( 15 ),	New Column( "SILICA",		Continuous,		Set Values(			[1.2, 1.60825, 0.79175, 0.995875, 1.812375, 1.404125, 0.587625, 0.6896875,			1.5061875, 1.9144375, 1.0979375, 0.8938125, 1.7103125, 1.3020625, 0.4855625]		)	),	New Column( "SILANE",		Continuous,		Set Values(			[50, 41.835, 58.165, 45.9175, 62.2475, 37.7525, 54.0825, 43.87625, 60.20625,			35.71125, 52.04125, 39.79375, 56.12375, 47.95875, 64.28875]		)	),	New Column( "SULFUR",		Continuous,		Set Values(			[2.3, 1.89175, 2.70825, 2.504125, 1.687625, 2.912375, 2.095875, 3.0144375,			2.1979375, 2.6061875, 1.7896875, 1.9938125, 2.8103125, 1.5855625, 2.4020625]		)	));dt << New Script( "Constraint", {:SILICA + :SULFUR <= 3} );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ),	Load Candidate Set from Data Table( dtCand ));

```

### Minimum RSquare

**Syntax:** obj &lt;&lt; Minimum RSquare( number )

**Beschreibung:** Gibt die minimal erforderliche R-Quadrat-Metrik für den Algorithmus zur automatischen Batch-Auswahl an. Im Startfenster der Plattform „Bayessche Optimierung“ wird diese Option als Modellbasierte Erweiterung r² Schwellenwert bezeichnet..

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Minimum RSquare( 0.25 ));

```

### Nominal Correlation Type

**Syntax:** obj &lt;&lt; Nominal Correlation Type( "Gleiche Korrelationen"|"Ungleiche Korrelationen" )

**Beschreibung:** Gibt den gewünschten Kernel für nominale Eingabevariablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Nominal Correlation Type( "Equal Correlations" ));

```

### Ordinal Correlation Type

**Syntax:** obj &lt;&lt; Ordinal Correlation Type( "Gleiche Korrelationen"|"Ungleiche Korrelationen"|"Latente Variable" )

**Beschreibung:** Gibt den gewünschten Kernel für ordinale Eingabevariablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Ordinal Correlation Type( "Equal Correlations" ));

```

### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula( Elong );

```

### Set Tab

**Syntax:** obj &lt;&lt; Set Tab( number )

**Beschreibung:** Gibt die aktuelle Registerkarte an. Das Argument interpretiert 0 als Registerkarte „Modellzusammenfassung“, 1 als „Batch-Auswahl“ usw. in der Reihenfolge, in der die Registerkarten im Berichtsfenster angezeigt werden.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( 1 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( "ABRASION" );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Spalten

### Iteration

**Syntax:** obj &lt;&lt; Iteration( column )

**Beschreibung:** Gibt eine Spalte für die Batch-Beschriftung an. Batches werden voraussichtlich mit 0, 1, 2, ... gekennzeichnet, wobei Batch 0 die ursprünglichen Trainingsdaten angibt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_itercol",	Numeric,	Ordinal,	set values( V Concat( (Repeat( 0, N Rows( dt ) - 10 )), Repeat( 1, 10 ) ) ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Iteration( _itercol ));

```

### Run Order

**Syntax:** obj &lt;&lt; Run Order( column )

**Beschreibung:** Gibt eine Permutationsspalte mit Zeilennummern an, die auf die Reihenfolge der Beobachtungen hinweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_runorder", Numeric, Ordinal, set values( 1 :: (N Rows( dt )) ) );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Run Order( _runorder ));

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## Zugehörige Konstruktoren

### Bayesian Optimization

**Syntax:** Bayesian Optimization( Y( columns ), X( columns ) )

**Beschreibung:** Empfiehlt Faktoreinstellungen zum Optimieren der Zielgrößen durch Erweitern der Datentabelle.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## Bayesian Optimization Batch Customizer > Candidate Set View

### Elementmeldungen

#### Export Candidate Set to Data Table

**Syntax:** obj &lt;&lt; Export Candidate Set to Data Table

**Beschreibung:** Exportiert den aktuell geladenen Kandidatensatz in eine neue Datentabelle. Sie können die gewünschten Spaltengruppen als Argumente angeben. Diese Option exportiert standardmäßig die Faktoreinstellungen, wenn keine Spaltengruppen angegeben sind. Wenn keine Argumente angegeben sind, erscheint ein Fenster, in dem Sie Optionen festlegen können.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table( Go );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table();

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table(	Order Added, Factor Settings, Bayesian Desirability, Bayesian Desirability Std Dev,	Multimodel Prediction Std Dev, MaxPro Space Filling Criterion,	Bayesian Desirability Expected Improvement, Bayesian Desirability Upper Confidence Bound,	Training Response Predictions, Augmented Response Prediction Std Dev,	Augmented Response Prediction Confidence Intervals);

```

#### Select Runs

**Syntax:** obj &lt;&lt; Select Runs( Row Index( [ numbers ] ), &lt;Order Added( [ numbers ]&gt;, &lt;Reason Added( { text } )&gt;, &lt;Replace( 0|1 )&gt; )

**Beschreibung:** Wählt Zeilen aus der Kandidatensatztabelle aus, die zum aktuellen Batch hinzugefügt werden sollen.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Select Runs(		Row Index( [3 5] ),		Order Added( [1 2] ),		Reason Added( {"Custom Reason", "Custom Reason"} ),		Replace( 1 )	));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	autoselect batch( 0 ));obj << Select Runs(	Row Index( [3 5] ),	Order Added( [1 2] ),	Reason Added( {"Custom Reason", "Custom Reason"} ),	Replace( 0 ));

```

#### Show Table Columns

**Syntax:** obj &lt;&lt; Show Table Columns( &lt;"Column Group Name"&gt;,... )

**Beschreibung:** Gibt an, welche Spaltengruppen in der Kandidatensatztabelle sichtbar sind.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Show Table Columns( Order Added, Factor Settings, Bayesian Desirability ));

```

## Bayesian Optimization Batch Customizer

### Elementmeldungen

#### Add Current Profiler Settings to Batch

**Syntax:** obj &lt;&lt; Add Current Profiler Settings to Batch

**Beschreibung:** Fügt die aktuellen Analysediagrammeinstellungen zum Kandidatensatz hinzu und wählt sie für einen Einzelversuch im nächsten Erweiterungs-Batch aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Add Current Profiler Settings to Batch;

```

#### Augmented Acquisition Functions Profiler

**Syntax:** obj &lt;&lt; Augmented Acquisition Functions Profiler( state=0|1 )

**Beschreibung:** Zeigt ein Analysediagramm an oder blendet es aus, mit dem Sie untersuchen können, wie sich jede Akquisitionsfunktion in Bezug auf Änderungen der einzelnen Faktorwerte verändert. Funktionen basieren auf der Annahme, dass aus den Punkten im aktuellen Batch eine Stichprobe gezogen wird. Dieses Analysediagramm spiegelt Änderungen wider, die in der erweiterten Vorhersageanalyse an Faktorstufen und Wünschbarkeitsfunktionen vorgenommen wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Acquisition Functions Profiler( 0 );

```

#### Augmented Prediction Profiler

**Syntax:** obj &lt;&lt; Augmented Prediction Profiler( state=0|1 )

**Beschreibung:** Zeigt ein Analysediagramm an oder blendet es aus, mit dem Sie untersuchen können, wie sich jede Spalte in Bezug auf Änderungen der einzelnen Faktorwerte über die Modelle hinweg verändert. Vorhersagen basieren auf der Annahme, dass aus den Punkten im aktuellen Batch Stichproben gezogen werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Prediction Profiler( 0 );

```

#### Deselect All

**Syntax:** obj &lt;&lt; Deselect All

**Beschreibung:** Deselect all points in current batch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Deselect All;

```

#### Load Candidate Set from Data Table

**Syntax:** obj &lt;&lt; Load Candidate Set from Data Table

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Load Candidate Set from Data Table());

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Borehole Latin Hypercube.jmp" );:log y << Set Property( "Response Limits", {Goal( maximize ), Importance( 1 )} );obj = dt << Bayesian Optimization(	Y( :log y ),	X( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ));dt_candidate = Open( "$SAMPLE_DATA/Design Experiment/Borehole Uniform.jmp" );obj << Load Candidate Set from Data Table( dt_candidate );

```

#### Make Table

**Syntax:** obj &lt;&lt; Make Table

**Beschreibung:** Export currently selected batch points to data table based on current settings.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Make Table;

```

#### Make Table Options

**Syntax:** obj &lt;&lt; Make Table Options( &lt;Location( state = 0|1 )&gt;, &lt;Randomize Runs( state = 0|1 )&gt;, &lt; "Include Option Name"( state = 0|1 ) &gt; , ... )

**Beschreibung:** Ermöglicht Ihnen die Auswahl von Optionseinstellungen, die beim Exportieren des ausgewählten Batches in eine Datentabelle verwendet werden. Beachten Sie, dass sich die Syntax-Eingabe „Optionsnamen einschließen“ auf alle Optionen im Menü „Optionen einschließen“ bezieht.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Make Table Options(		Location( 1 ),		Randomize Runs( 0 ),		Save desirability function values to columns( 1 ),		Save startup script for next batch selection to data table( 1 ),		Include observed desirabilities( 1 ),		Include original candidate set row indices( 1 ),		Include reason added column( 1 ),		Include predicted response values( 1 ),		Include prediction standard deviations( 1 ),		Include Bayesian desirability expected improvement column( 1 )	));

```

#### Maximize Bayesian Desirability

**Syntax:** obj &lt;&lt; Maximize Bayesian Desirability

**Beschreibung:** Findet die Faktoreinstellungen, die den A-posteriori-Mittelwert der Wünschbarkeitsverteilung maximieren.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;

```

#### Maximize Bayesian Desirability Std Dev

**Syntax:** obj &lt;&lt; Maximize Bayesian Desirability Std Dev

**Beschreibung:** Findet die Faktoreinstellungen, die die A-posteriori-Abweichung der Wünschbarkeitsverteilung maximieren.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability Std Dev;

```

#### Maximize Expected Improvement

**Syntax:** obj &lt;&lt; Maximize Expected Improvement

**Beschreibung:** Findet die Faktoreinstellungen mit der größten erwarteten Verbesserung wie von der Bayesschen Wünschbarkeit gemessen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Expected Improvement;

```

#### Maximize MaxPro Criterion

**Syntax:** obj &lt;&lt; Maximize MaxPro Criterion

**Beschreibung:** Findet die am stärksten raumfüllenden Faktoreinstellungen anhand des MaxPro-Kriteriums.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize MaxPro Criterion;

```

#### Maximize Multimodel Std Dev

**Syntax:** obj &lt;&lt; Maximize Multimodel Std Dev

**Beschreibung:** Findet die Faktoreinstellungen, die die Standardabweichung der Vorhersage multipler Zielgrößen maximieren.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Multimodel Std Dev;

```

#### Maximize Upper Confidence Bound

**Syntax:** obj &lt;&lt; Maximize Upper Confidence Bound

**Beschreibung:** Findet die Faktoreinstellungen für die Bayessche Wünschbarkeitsvorhersage mit der höchsten oberen Konfidenzgrenze. Dies wird oft als OKG-Kriterium bezeichnet.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Upper Confidence Bound;

```

#### Restore Best Training Point

**Syntax:** obj &lt;&lt; Restore Best Training Point

**Beschreibung:** Gibt die Faktoreinstellungen für die Trainingszeile mit der höchsten beobachteten Wünschbarkeit zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;obj << Add Current Profiler Settings to Batch;obj << Restore Best Training Point;

```

## Bayesian Optimization Model Summary

### Elementmeldungen

#### All Responses Profiler

**Syntax:** obj &lt;&lt; All Responses Profiler( state=0|1 )

**Beschreibung:** Untersucht, wie sich jede Spalte in Bezug auf Änderungen in den einzelnen Faktorwerten über Modelle ändert.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	All Responses Profiler( 1 ));

```

## Gaussian Process Model

### Elementmeldungen

#### Intercept

**Syntax:** obj &lt;&lt; Intercept( number )

**Beschreibung:** Gibt den Wert an, der als Achsenabschnittsparameter für die Anpassung eines Gauß-Prozessmodells verwendet werden soll. Wenn alle Theta-, Nugget-, Residuen- und Achsenabschnittswerte angegeben werden, werden die Werte als fixiert behandelt. Wenn nur ein Teil der Werte angegeben wird, werden die angegebenen Werte als Startwerte behandelt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Nugget

**Syntax:** obj &lt;&lt; Nugget( number )

**Beschreibung:** Gibt den Wert an, der als Nugget für die Anpassung eines Gauß-Prozessmodells verwendet werden soll. Wenn alle Theta-, Nugget-, Residuen- und Achsenabschnittswerte angegeben werden, werden die Werte als fixiert behandelt. Wenn nur ein Teil der Werte angegeben wird, werden die angegebenen Werte als Startwerte behandelt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Untersucht, wie sich jede Spalte in Bezug auf Änderungen in den einzelnen Faktorwerten über Modelle ändert.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab( Y( :MODULUS ), Profiler( 0 ) ));

```

#### Residual

**Syntax:** obj &lt;&lt; Residual( number )

**Beschreibung:** Gibt den Wert an, der als Residuenparameter für die Anpassung eines Gauß-Prozessmodells verwendet werden soll. Wenn alle Theta-, Nugget-, Residuen- und Achsenabschnittswerte angegeben werden, werden die Werte als fixiert behandelt. Wenn nur ein Teil der Werte angegeben wird, werden die angegebenen Werte als Startwerte behandelt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Starting Values

**Syntax:** obj &lt;&lt; Starting Values( number )

**Beschreibung:** Gibt die Startwerte an, die für die Anpassung eines Gauß-Prozessmodells verwendet werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Starting Values(			Theta Values( {0.5, 0.5, 0.5} ),			Nugget( 0.05 ),			Residual( 500 ),			Intercept( 100 )		)	));

```

#### Theta Values

**Syntax:** obj &lt;&lt; Theta Values( number )

**Beschreibung:** Gibt die Werte an, die als Theta-Parameter für die Anpassung eines Gauß-Prozessmodells verwendet werden sollen. Wenn alle Theta-, Nugget-, Residuen- und Achsenabschnittswerte angegeben werden, werden die Werte als fixiert behandelt. Wenn nur ein Teil der Werte angegeben wird, werden die angegebenen Werte als Startwerte behandelt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

