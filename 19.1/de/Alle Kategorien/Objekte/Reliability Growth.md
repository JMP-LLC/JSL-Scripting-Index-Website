# Reliability Growth



## Elementmeldungen

### Crow AMSAA

**Syntax:** obj &lt;&lt; Crow AMSAA

**Beschreibung:** Passt ein Crow-AMSAA-Modell an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;

```

### Crow AMSAA with Modified MLE

**Syntax:** obj &lt;&lt; Crow AMSAA with Modified MLE

**Beschreibung:** Passt ein Crow-AMSAA-Modell mit Bias-Korrektur für Beta an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA with Modified MLE;

```

### Distinct Phase Weibull NHPP

**Syntax:** obj &lt;&lt; Distinct Phase Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit verschiedenen Phasen an, bei dem jedes System in einer mehrphasigen Studie in jeder Phase dem gleichen Crow-AMSAA-Modell folgt. Dieses Modell enthält einen Beta-Parameter und einen Lambda-Parameter für jede Phase. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Fixes ),	System ID( :System ID ),	Phase( :Phase ));obj << Distinct Phase Weibull NHPP;

```

### Distinct System Weibull NHPP

**Syntax:** obj &lt;&lt; Distinct System Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit verschiedenen Systeme an, bei dem jedes System in der Studie einem eigenen Crow-AMSAA-Modell mit unterschiedlichen Parametern folgt. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Repairs ),	System ID( :System ID ));obj << Distinct System Weibull NHPP;

```

### Distinct Weibull NHPP

**Syntax:** obj &lt;&lt; Distinct Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit verschiedenen Phasen an, bei dem jedes System in einer mehrphasigen Studie in jeder Phase einem eigenen Crow-AMSAA-Modell folgt. Dieses Modell enthält einen Beta- und einen Lambda-Parameter für jede Kombination aus System und Phase in der Studie. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Fixes ),	System ID( :System ID ),	Phase( :Phase ));obj << Distinct Weibull NHPP;

```

### Fixed Parameter Crow AMSAA

**Syntax:** obj &lt;&lt; Fixed Parameter Crow AMSAA( &lt;lambda ( number )&gt;, &lt;beta ( number )&gt; )

**Beschreibung:** Passt ein Crow-AMSAA-Modell mit fixiertem Parameter an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Fixed Parameter Crow AMSAA( lambda( .02 ) );

```

### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Beschreibung:** Gibt eine benannte Liste zurück, die die Ergebnisse der Modellschätzung enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;Show( obj << Get Results );

```

### Identical System Weibull NHPP

**Syntax:** obj &lt;&lt; Identical System Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit identischen Systemen an, bei dem jedes System in der Studie einem einzelnen Crow-AMSAA-Modell folgt. Es wird angenommen, dass die Unterschiede zwischen den Systemen auf die Zufälligkeit einzelner Realisierungen desselben Modells zurückzuführen sind. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Repairs ),	System ID( :System ID ));obj << Identical System Weibull NHPP;

```

### Piecewise Weibull NHPP

**Syntax:** obj &lt;&lt; Piecewise Weibull NHPP

**Beschreibung:** Passt ein abschnittsweises Weibull NHPP-Modell an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));obj << Piecewise Weibull NHPP;

```

### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj &lt;&lt; Piecewise Weibull NHPP Change Point Detection

**Beschreibung:** Schätzt einen Phasenwechsel in den Daten und passt ein abschnittsweises Weibull NHPP-Modell an. Diese Option ist nicht verfügbar, wenn eine Phasenvariable angegeben ist. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));obj << Piecewise Weibull NHPP Change Point Detection;

```

### Piecewise Weibull NHPP with Different Intercepts

**Syntax:** obj &lt;&lt; Piecewise Weibull NHPP with Different Intercepts

**Beschreibung:** Passt ein abschnittsweises Weibull NHPP-Modell mit unterschiedlichen Achsenabschnitten an, wobei jedes System in einer mehrphasigen Studie einem separaten abschnittsweisen Weibull NHPP-Modell folgt. Dieses Modell enthält einen Beta-Parameter für jede Phase und einen Lambda-Parameter für jedes System. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Fixes ),	System ID( :System ID ),	Phase( :Phase ));obj << Piecewise Weibull NHPP with Different Intercepts;

```

### Reinitialized Weibull NHPP

**Syntax:** obj &lt;&lt; Reinitialized Weibull NHPP

**Beschreibung:** Passt ein neu initialisiertes Weibull NHPP-Modell an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours of Operation ),	Event Count( :Fixes ),	Phase( :Design Stage ));obj << Reinitialized Weibull NHPP;

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

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Crow AMSAA;obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Crow AMSAA;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Zugehörige Konstruktoren

### Reliability Growth

**Syntax:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; ); obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; ); obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; ) obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**Beschreibung:** Modelliert die sich verändernde Zuverlässigkeit eines einzelnen reparierbaren Systems über die Zeit, während Verbesserungen in das Design integriert werden. Die Plattform akzeptiert verschiedene Eingabeformate. Sie finden zu jedem Format weitere Details für die Spezifikation.

#### Datumsangaben

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));

```

#### Gleichzeitige Systeme

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );obj = dt << Reliability Growth(	Input Format( Concurrent Systems ),	Time to Event( :Prototype 1, :Prototype 2 ),	System ID( :Failed System ),);obj << Crow AMSAA;

```

#### Parallele Systeme

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Fixes ),	System ID( :System ID ),	Phase( :Phase ));obj << Piecewise Weibull NHPP with Different Intercepts;

```

#### Zeit bis Ereignis

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;

```

## Crow AMSAA

### Elementmeldungen

#### Achieved MTBF

**Syntax:** scrobj &lt;&lt; Achieved MTBF( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Erreichte MTBF“ an oder blendet ihn aus. Mit dem optionalen Argument alpha können Sie Alpha angeben.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Achieved MTBF( .01 );

```

#### Goodness of Fit

**Syntax:** scrobj &lt;&lt; Goodness of Fit( state=0|1 )

**Beschreibung:** Blendet den Bericht der Anpassungsgüte ein oder aus, der einen Test der Nullhypothese enthält, dass die Daten einem Crow-AMSAA-Modell folgen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Goodness of Fit( 1 );

```

#### Show Cumulative Events Plot

**Syntax:** scrobj &lt;&lt; Show Cumulative Events Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der kumulierten Ereignisse an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**Syntax:** scrobj &lt;&lt; Show Intensity Plot( state=0|1 )

**Beschreibung:** Zeigt das Intensitätsdiagramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**Syntax:** scrobj &lt;&lt; Show MTBF Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der mittleren Ausfallzeit (MTBF) an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show MTBF Plot( 0 );

```

#### Show Profilers

**Syntax:** scrobj &lt;&lt; Show Profilers( state=0|1 )

**Beschreibung:** Zeigt die Analysediagramme für mittlere Ausfallzeit (MTBF), Ausfallintensität und kumulierte Ereignisse an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Profilers( 1 );

```

## Cumulative Events Plot

### Elementmeldungen

#### Crow AMSAA

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Crow AMSAA( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) ); scrobj &lt;&lt; Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA;Wait( 1 );obj << Cumulative Events Plot( Crow AMSAA( 0 ) );obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Crow AMSAA( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Crow AMSAA( 0 );

```

#### Crow AMSAA with Modified MLE

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) ); scrobj &lt;&lt; Crow AMSAA with Modified MLE( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit Bias-Korrektur für Beta im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA with Modified MLE;Wait( 1 );obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA with Modified MLE;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Crow AMSAA with Modified MLE( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Crow AMSAA with Modified MLE( 0 );

```

#### Fixed Parameter Crow AMSAA

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) ); scrobj &lt;&lt; Fixed Parameter Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit fixiertem Parameter im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Fixed Parameter Crow AMSAA;Wait( 1 );obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Fixed Parameter Crow AMSAA;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Fixed Parameter Crow AMSAA( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Fixed Parameter Crow AMSAA( 0 );

```

#### Piecewise Weibull NHPP

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) ); scrobj &lt;&lt; Piecewise Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das abschnittsweise Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP;Wait( 1 );obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Piecewise Weibull NHPP( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Piecewise Weibull NHPP( 0 );

```

#### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) ); scrobj &lt;&lt; Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP Change Point Detection;Wait( 1 );obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP Change Point Detection;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Piecewise Weibull NHPP Change Point Detection( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

#### Reinitialized Weibull NHPP

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) ); scrobj &lt;&lt; Reinitialized Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours of Operation ),	Event Count( :Fixes ),	Phase( :Design Stage ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Reinitialized Weibull NHPP;Wait( 1 );obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours of Operation ),	Event Count( :Fixes ),	Phase( :Design Stage ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Reinitialized Weibull NHPP;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Reinitialized Weibull NHPP( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Reinitialized Weibull NHPP( 0 );

```

### Zugehörige Konstruktoren

#### Cumulative Events Plot

**Syntax:** obj &lt;&lt; Cumulative Events Plot( ... ); scrobj = obj &lt;&lt; Cumulative Events Plot

**Beschreibung:** Ermöglicht Ihnen, Modelle im Diagramm der kumulierten Ereignisse anzuzeigen oder auszublenden. Wenn ohne Argument angegeben, gibt diese Option eine skriptfähige Referenz auf das Diagramm zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;plot = obj << Cumulative Events Plot;plot << Crow AMSAA( 0 );

```

## Fixed Parameter Crow AMSAA

### Elementmeldungen

#### Show Cumulative Events Plot

**Syntax:** scrobj &lt;&lt; Show Cumulative Events Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der kumulierten Ereignisse an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**Syntax:** scrobj &lt;&lt; Show Intensity Plot( state=0|1 )

**Beschreibung:** Zeigt das Intensitätsdiagramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**Syntax:** scrobj &lt;&lt; Show MTBF Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der mittleren Ausfallzeit (MTBF) an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show MTBF Plot( 0 );

```

#### Show Profilers

**Syntax:** scrobj &lt;&lt; Show Profilers( state=0|1 )

**Beschreibung:** Zeigt die Analysediagramme für mittlere Ausfallzeit (MTBF), Ausfallintensität und kumulierte Ereignisse an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Profilers( 1 );

```

#### beta

**Syntax:** obj &lt;&lt; Fixed Parameter Crow AMSAA( beta( number ) )

**Beschreibung:** Gibt den Wert des festen Beta-Parameters an. Wenn das Argument ein fehlender Wert ist, ist der Parameter nicht fixiert.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );obj << Fixed Parameter Crow AMSAA( Beta( 0.8 ) );Report( obj )["Crow-AMSAA"] << Close( 1 );

```

#### lambda

**Syntax:** obj &lt;&lt; Fixed Parameter Crow AMSAA( lambda( number ) )

**Beschreibung:** Gibt den Wert des festen Lambda-Parameters an. Wenn das Argument ein fehlender Wert ist, ist der Parameter nicht fixiert.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );obj << Fixed Parameter Crow AMSAA( lambda( 0.02 ) );Report( obj )["Crow-AMSAA"] << Close( 1 );

```

## Mean Time Between Failures Plot

### Elementmeldungen

#### Crow AMSAA

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Crow AMSAA( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) ); scrobj &lt;&lt; Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA;Wait( 1 );obj << Cumulative Events Plot( Crow AMSAA( 0 ) );obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Crow AMSAA( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Crow AMSAA( 0 );

```

#### Crow AMSAA with Modified MLE

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) ); scrobj &lt;&lt; Crow AMSAA with Modified MLE( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit Bias-Korrektur für Beta im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA with Modified MLE;Wait( 1 );obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Crow AMSAA with Modified MLE;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Crow AMSAA with Modified MLE( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Crow AMSAA with Modified MLE( 0 );

```

#### Customize Average MTBF

**Syntax:** obj &lt;&lt; Mean Time Between Failures( Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) ) ); scrobj &lt;&lt; Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) )

**Beschreibung:** Gibt einen Satz disjunkter Intervalle an, die zum Berechnen der mittleren Ausfallzeit (MTBF) verwendet werden.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Mean Time Between Failures Plot(	Options(		Sample MTBF Type( "Customized Average MTBF" ),		Customize Average MTBF( [2500, 5000, 7500, 11000] )	));(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );plot = obj << Mean Time Between Failures Plot;plot << Options(	Sample MTBF Type( "Customized Average MTBF" ),	Customize Average MTBF( [2500, 5000, 7500, 11000] ));(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

#### Fixed Parameter Crow AMSAA

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) ); scrobj &lt;&lt; Fixed Parameter Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit fixiertem Parameter im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Fixed Parameter Crow AMSAA;Wait( 1 );obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Fixed Parameter Crow AMSAA;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Fixed Parameter Crow AMSAA( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Fixed Parameter Crow AMSAA( 0 );

```

#### Interval Size

**Syntax:** obj &lt;&lt; Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) ) ); scrobj &lt;&lt; Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) )

**Beschreibung:** Gibt die Größe des Intervalls an, das für die Berechnung der mittleren Ausfallzeit (MTBF) verwendet wird.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Mean Time Between Failures Plot(	Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Mean Time Between Failures"] << Close( 0 );plot = obj << Mean Time Between Failures Plot;plot << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) );

```

#### Options

**Syntax:** obj &lt;&lt; Mean Time Between Failures( Options( ... ) ); scrobj &lt;&lt; Options( ... )

**Beschreibung:** Ermöglicht Ihnen, das Diagramm der mittleren Ausfallzeit zu konfigurieren.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Mean Time Between Failures Plot(	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

#### Piecewise Weibull NHPP

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) ); scrobj &lt;&lt; Piecewise Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das abschnittsweise Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP;Wait( 1 );obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Piecewise Weibull NHPP( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Piecewise Weibull NHPP( 0 );

```

#### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) ); scrobj &lt;&lt; Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP Change Point Detection;Wait( 1 );obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Piecewise Weibull NHPP Change Point Detection;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Piecewise Weibull NHPP Change Point Detection( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

#### Reinitialized Weibull NHPP

**Syntax:** obj &lt;&lt; Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) ); obj &lt;&lt; Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) ); scrobj &lt;&lt; Reinitialized Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours of Operation ),	Event Count( :Fixes ),	Phase( :Design Stage ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Reinitialized Weibull NHPP;Wait( 1 );obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Hours of Operation ),	Event Count( :Fixes ),	Phase( :Design Stage ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Reinitialized Weibull NHPP;Wait( 1 );cep = obj << Cumulative Events Plot;cep << Reinitialized Weibull NHPP( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Reinitialized Weibull NHPP( 0 );

```

#### Sample MTBF Type

**Syntax:** obj &lt;&lt; Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) ) ); scrobj &lt;&lt; Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) )

**Beschreibung:** Gibt die Berechnungsmethode für das Diagramm der mittleren Ausfallzeit an.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );obj << Mean Time Between Failures Plot(	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );obj = dt << Reliability Growth(	Input Format( Time to Event ),	Time to Event( :Day ),	Event Count( :Fixes ),	Phase( :Design Phase ));Report( obj )["Mean Time Between Failures"] << Close( 0 );mtbf = obj << Mean Time Between Failures Plot;mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

### Zugehörige Konstruktoren

#### Mean Time Between Failures Plot

**Syntax:** obj &lt;&lt; Mean Time Between Failures Plot( ... ); scrobj = obj &lt;&lt; Mean Time Between Failures Plot

**Beschreibung:** Ermöglicht Ihnen, Modelle im Diagramm der mittleren Ausfallzeit anzuzeigen oder auszublenden. Wenn ohne Argument angegeben, gibt diese Option eine skriptfähige Referenz auf das Diagramm zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;Report( obj )["Mean Time Between Failures"] << Close( 0 );plot = obj << Mean Time Between Failures Plot;plot << Crow AMSAA( 0 );

```

## Reliability Growth Report

### Elementmeldungen

#### Show Cumulative Events Plot

**Syntax:** scrobj &lt;&lt; Show Cumulative Events Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der kumulierten Ereignisse an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**Syntax:** scrobj &lt;&lt; Show Intensity Plot( state=0|1 )

**Beschreibung:** Zeigt das Intensitätsdiagramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**Syntax:** scrobj &lt;&lt; Show MTBF Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der mittleren Ausfallzeit (MTBF) an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show MTBF Plot( 0 );

```

#### Show Profilers

**Syntax:** scrobj &lt;&lt; Show Profilers( state=0|1 )

**Beschreibung:** Zeigt die Analysediagramme für mittlere Ausfallzeit (MTBF), Ausfallintensität und kumulierte Ereignisse an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );Report( obj )["Observed Data"] << Close( 1 );report = obj << Crow AMSAA;report << Show Profilers( 1 );

```

