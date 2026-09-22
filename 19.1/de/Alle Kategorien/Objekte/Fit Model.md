# Fit Model



## Fit Causal Treatment

### Elementmeldungen

#### Fit

**Syntax:** Fit Model(...Run( Fit( options ) )...); obj &lt;&lt; Fit( options ); obj &lt;&lt; (Fit[number] &lt;&lt; option)

**Beschreibung:** Ermöglicht Ihnen, Meldungen an die Plattform zu senden. Diese Option kann in einem Skript zum Starten eines Modells verwendet werden oder um einen Handle für ein spezifisches Modell im Bericht zu erzeugen.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run( Fit ));

```

#### Go

**Syntax:** obj &lt;&lt; Go

**Beschreibung:** Ermöglicht es Ihnen, einige Parameterwerte zu ändern und die Analyse erneut auszuführen. Diese Option ist nur für IPWR- und AIPW-Modelle verfügbar.

**JMP Version hinzugefügt:** 19

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);fm << Model Dialog;

```

#### Show Tips and Interpretations

**Syntax:** obj &lt;&lt; Show Tips and Interpretations( state=0|1 )

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);fm << Show Tips and Interpretations;

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Causal Treatment

**Syntax:** Fit Model( Y( columns ), &lt;Effects( columns )&gt;, Treatment( column ), Personality( "Causal Treatment" ) )

**Beschreibung:** Passt Modelle für eine kausale Behandlung an, bei denen Adjustierungen für die Wahrscheinlichkeit einer Behandlung vorgenommen werden.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);

```

## Fit Generalized Linear Model

### Elementmeldungen

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Contour Profiler( 1 );

```

#### Contrast

**Syntax:** obj &lt;&lt; (effect name &lt;&lt; Contrast( [l1 l2 l3 ...] ))

**Beschreibung:** Führt einen benutzerdefinierten F-Test für die statistischen Kontraste der Behandlungsstufen für einen Effekt im Modell durch. Geben Sie jeden Kontrast als einen Zeilenvektor an. Hinweis: Geben Sie den Effektnamen als Zeichenkette an.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Overdispersion Tests and Intervals( 0 ),	"Firth Bias-Adjusted Estimates"n( 0 ),	Run);obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Beschreibung:** Zeigt die Matrix der Korrelationen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Beschreibung:** Zeigt die Matrix der Kovarianzen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Covariance of Estimates( 1 );

```

#### Custom Test

**Syntax:** obj &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; )

**Beschreibung:** Führt einen benutzerdefinierten F-Test durch, in dem die verschiedenen Effekte im Modell gegenübergestellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Overdispersion Tests and Intervals( 0 ),	"Firth Bias-Adjusted Estimates"n( 0 ),	Run);obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

#### Deviance Residuals

**Syntax:** obj &lt;&lt; Deviance Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Abweichungsresiduen.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Deviance Residuals;

```

#### Deviance Residuals by Predicted

**Syntax:** obj &lt;&lt; Deviance Residuals by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Abweichungsresiduen auf der vertikalen Achse und der vorhergesagten Zielgrößenwerte auf der horizontalen Achse ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Deviance Residuals by Predicted( 1 );

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Firth Bias-Adjusted Estimates

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass die Firth-Bias-korrigierte Methode zur Anpassung des Modells verwendet wird. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	"Firth Bias-Adjusted Estimates"n( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### GLM Distribution

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Wahrscheinlichkeitsverteilung für die Zielgrößenvariable an. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Beschreibung:** Erzeugt einen vorhergesagten X-Wert und ein Konfidenzintervall basierend auf den angegebenen Werten von Y und allen anderen Faktoren.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Overdispersion Tests and Intervals( 0 ),	"Firth Bias-Adjusted Estimates"n( 0 ),	Run);// Exactly one term value must be set to missing.obj << Inverse Prediction(	Response( 5, 6 ),	Term Value(		color( "Dark" ),		spine( "Both Good" ),		width( 26.2988439306358 ),		weight( . )	));

```

#### Linear Predictor Plot

**Syntax:** obj &lt;&lt; Linear Predictor Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der durch die inverse Kopplungsfunktion transformierten Zielgröße auf der vertikalen Achse und des stetigen Prädiktors auf der horizontalen Achse ein oder aus. Nur verfügbar, wenn es einen stetigen Prädiktor und nicht mehr als einen kategorialen Prädiktor gibt.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :weight, :color ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run());obj << Linear Predictor Plot( 1 );

```

#### Link Function

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Kopplungsfunktion für das Modell an. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die 95%-Konfidenzgrenzen für die Vorhersagegleichung des Modells.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Mean Confidence Interval;

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Model Dialog;

```

#### Overdispersion Tests and Intervals

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass ein Überdispersionsparameter in das Modell eingeschlossen werden soll. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Pearson Residuals

**Syntax:** obj &lt;&lt; Pearson Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Pearson-Residuen.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Pearson Residuals;

```

#### Pearson Residuals by Predicted

**Syntax:** obj &lt;&lt; Pearson Residuals by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Pearson-Residuen auf der vertikalen Achse und der vorhergesagten Zielgrößenwerte auf der horizontalen Achse ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Pearson Residuals by Predicted( 1 );

```

#### Power Link Parameter

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt den Parameter für die Potenz-Kopplungsfunktion an. Nur verfügbar, wenn Potenz als Kopplungsfunktion beim Charakter Verallgemeinertes lineares Modell angegeben ist. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Power" ),	Power Link Parameter( 0.5 ),	Run);

```

#### Predicted Values

**Syntax:** obj &lt;&lt; Predicted Values

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die vom Modell vorhergesagten Werte.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Predicted Values;

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für die Vorhersagewerte für den Mittelwert, wie sie von dem spezifizierten Modell berechnet werden.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die Spalten enthalten Formeln für die Vorhersagen und Konfidenzgrenzen. Die von dieser Option erstellten Grenzwertspalten enthalten Eigenschaften, die von der Vorhersageanalyse verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Prediction and Interval Formulas;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);obj << Profiler( 1 );

```

#### Regression Plot

**Syntax:** obj &lt;&lt; Regression Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Zielgröße auf der vertikalen Achse und des stetigen Prädiktors auf der horizontalen Achse ein oder aus. Nur verfügbar, wenn es einen stetigen Prädiktor und nicht mehr als einen kategorialen Prädiktor gibt. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :weight, :color ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run( Regression Plot( 0 ) ));Wait( 1 );obj << Regression Plot( 1 );

```

#### Save Indiv Confid Limits

**Syntax:** obj &lt;&lt; Save Indiv Confid Limits

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die 95%-Konfidenzgrenzen für einen vorgegebenen Einzelwert des Modells.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Indiv Confid Limits;

```

#### Studentized Deviance Residuals

**Syntax:** obj &lt;&lt; Studentized Deviance Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die studentisierten Abweichungsresiduen.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Studentized Deviance Residuals;

```

#### Studentized Deviance Residuals by Predicted

**Syntax:** obj &lt;&lt; Studentized Deviance Residuals by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der studentisierten Abweichungsresiduen auf der vertikalen Achse und der vorhergesagten Zielgrößenwerte auf der horizontalen Achse ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run( Studentized Deviance Residuals by Predicted( 0 ) ));Wait( 1 );obj << Studentized Deviance Residuals by Predicted( 1 );

```

#### Studentized Pearson Residuals

**Syntax:** obj &lt;&lt; Studentized Pearson Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die studentisierten Pearson-Residuen.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Studentized Pearson Residuals;

```

#### Studentized Pearson Residuals by Predicted

**Syntax:** obj &lt;&lt; Studentized Pearson Residuals by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der studentisierten Pearson-Residuen auf der vertikalen Achse und der vorhergesagten Zielgrößenwerte auf der horizontalen Achse ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Studentized Pearson Residuals by Predicted( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein interaktives Wirkungsflächendiagramm für die Zielgröße ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Surface Profiler( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Generalized Linear Model

**Syntax:** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**Beschreibung:** Passt ein verallgemeinertes lineares Modell mit verschiedenen Verteilungen und Kopplungsfunktionen an. Zu den Techniken gehören Logistisch, Poisson und exponentielle Regression.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

## Fit Least Squares > Effect Fit > Control Differences Chart

### Elementmeldungen

#### Point Options

**Syntax:** scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Point Options( "Show Only Points" ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Point Options( "Show Connected Points" );

```

#### Show Center Line

**Syntax:** scrobj &lt;&lt; Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (Gesamtmittelwert) im Diagramm der Differenzen zur Kontrollgruppe an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Show Center Line( 0 ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im Diagramm der Differenzen zur Kontrollgruppe an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im Diagramm der Differenzen zur Kontrollgruppe an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Show Decision Limits( 0 ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den Gruppenmittelwerten und den Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1 )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### Elementmeldungen

#### LSMeans Contrast

**Syntax:** scrobj &lt;&lt; LSMeans Contrast( [ l1, l2, l3, ... ] ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**Beschreibung:** Führt einen benutzerdefinierten F-Test für die statistischen Kontraste der verschiedenen Stufen eines Effekts aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

#### LSMeans Dunnett

**Syntax:** scrobj &lt;&lt; LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; )} )

**Beschreibung:** Zeigt oder verbirgt Tests und Konfidenzintervalle für paarweise Vergleiche gegen die angegebene Kontrollstufe.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

#### LSMeans Plot

**Syntax:** scrobj &lt;&lt; LSMeans Plot; obj &lt;&lt; ( effect &lt;&lt; {LSMeans Plot} )

**Beschreibung:** Blendet Diagramme der Kleinste-Quadrate-Mittelwerte für nominale und ordinale Effekte ein. Wenn es sich bei dem Effekt um eine Wechselwirkung handelt, zeigt diese Option das Fenster der Optionen für Diagramm Kleinste-Quadrate-Mittelwerte an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:Drug << {LSMeans Plot});

```

#### LSMeans Student's t

**Syntax:** scrobj &lt;&lt; Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; ); obj &lt;&lt; ( effect &lt;&lt; {Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**Beschreibung:** Zeigt oder verbirgt Tests und Konfidenzintervalle für paarweise Vergleiche von Kleinste-Quadrate-Mittelwerten unter Verwendung von Student-t-Tests.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Student's t( 1 )});

```

#### LSMeans Table

**Syntax:** scrobj &lt;&lt; LSMeans Table( state=0|1 ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Table( state=0|1 )} )

**Beschreibung:** Blendet eine Tabelle der Kenngrößen ein oder aus, die verglichen werden, wenn Effekte getestet werden. Diese Option ist bei stetigen Effekten nicht verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Table( 0 )} ));Wait( 1 );obj << (:Drug << {LSMeans Table( 1 )});

```

#### LSMeans Tukey HSD

**Syntax:** scrobj &lt;&lt; LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**Beschreibung:** Zeigt oder verbirgt Tests und Konfidenzintervalle für paarweise Vergleiche von Kleinste-Quadrate-Mittelwerten unter Verwendung des Tukey-Kramer-HSD-Tests (Honestly Significant Difference).

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

#### Power Analysis

**Syntax:** scrobj &lt;&lt; Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;); obj &lt;&lt; ( effect &lt;&lt; {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;)} )

**Beschreibung:** Zeigt den Bericht der Power-Analyse an, mit dem Sie die Power für den Effekttest analysieren können.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:Drug << {Power Analysis(	Alpha( 0.05 ),	Sigma( 4.00577754367453 ),	Delta( 1.51166255719209 ),	Number( 10, 100, 10 ),	Solve for Power,	Power Plot,	Done)});

```

#### Test Slices

**Syntax:** scrobj &lt;&lt; Test Slices( state=0|1 ); obj &lt;&lt; ( response &lt;&lt; { effect1 * effect2 &lt;&lt; {Test Slices( state=0|1 )} } )

**Beschreibung:** Führt einen benutzerdefinierten F-Test für jede Stufe beider Faktoren in einem Wechselwirkungsterm durch. Diese Option ist nur für Wechselwirkungen verfügbar, die nominale und ordinale Effekte beinhalten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Model(	Y( :height ),	Effects( :age, :sex, :age * :sex ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### Elementmeldungen

#### Connecting Letters Report

**Syntax:** scrobj &lt;&lt; Connecting Letters Report( state=0|1 )

**Beschreibung:** Blendet signifikante und nicht-signifikante Vergleiche mit Verbindungsbuchstaben ein oder aus. Stufen, die nicht durch denselben Buchstaben verbunden sind, sind signifikant unterschiedlich. Stufen, die durch denselben Buchstaben verbunden sind, sind nicht signifikant unterschiedlich. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);scrobj << Connecting Letters Report( 1 );

```

#### Control Differences Chart

**Syntax:** scrobj &lt;&lt; Control Differences Chart( state=0|1 )

**Beschreibung:** Shows or hides a chart that contains a point for each level of the effect other than the control. Each point shows the least squares mean for that level in relation to the least squares mean for the control level. Upper decision limits (UDL) and lower decision limits (LDL) are plotted.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 0 )		)}	));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);scrobj << Control Differences Chart( 1 );

```

#### Control Differences Report

**Syntax:** scrobj &lt;&lt; Control Differences Report( state=0|1 )

**Beschreibung:** Blendet eine Tabelle ein oder aus, die eine Zeile für jede Stufe des Effekts außer der Kontrolle enthält. Jede Zeile enthält die Stufe, die mit der Kontrollstufe verglichen wird, die geschätzte Differenz, den Standardfehler der Differenz, ein Konfidenzintervall und den p-Wert für den Vergleich. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Report( 0 )		)}	));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);scrobj << Control Differences Report( 1 );

```

#### Crosstab Report

**Syntax:** scrobj &lt;&lt; Crosstab Report( state=0|1 )

**Beschreibung:** Blendet einen Kreuztabellenbericht ein oder aus, der die Differenz in jeder Kombination der Kleinste-Quadrate-Mittelwerte, den Standardfehler der Differenz und Konfidenzgrenzen für die Differenz enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Crosstab Report( 1 );

```

#### Detailed Comparisons

**Syntax:** scrobj &lt;&lt; Detailed Comparisons( state=0|1 )

**Beschreibung:** Blendet einen detaillierten Bericht für jede Kombination der Kleinste-Quadrate-Mittelwerte ein oder aus. Der Bericht enthält auch einen Graphen, der die Signifikanz jedes Vergleichs zeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( .05 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Detailed Comparisons( 1 );

```

#### Equivalence Test

**Syntax:** scrobj &lt;&lt; Equivalence Test( difference )

**Beschreibung:** Testet, ob sich die Mittelwerte um nicht mehr als die angegebene Differenz unterscheiden, die als praktisch gleichwertig gilt. Hierbei handelt es sich um die Umkehrung des üblichen Signifikanztests.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( .05 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Equivalence Test( 1.5 );

```

#### Ordered Differences Report

**Syntax:** scrobj &lt;&lt; Ordered Differences Report( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Differenzen für jede Stufe der Kleinste-Quadrate-Mittelwerte von der größten bis zur kleinsten auflistet. Der Bericht enthält auch die Standardfehler der Differenzen, Konfidenzgrenzen und p-Werte.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Tukey HSD( .05 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);scrobj << Ordered Differences Report( 1 );

```

#### Save Connecting Letters Table

**Syntax:** scrobj &lt;&lt; Save Connecting Letters Table

**Beschreibung:** Erstellt eine Datentabelle mit Spalten, die die Stufen des Effekts, die Verbindungsbuchstaben, die Kleinste-Quadrate-Mittelwerte, ihre Standardfehler und Konfidenzintervalle enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( 1 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### Elementmeldungen

#### Forest Plot

**Syntax:** scrobj &lt;&lt; Forest Plot( state=0|1 )

**Beschreibung:** Zeigt das Forest-Diagramm der Äquivalenztests an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );Wait( 1 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Forest Plot( 1 );

```

#### Remove

**Syntax:** scrobj &lt;&lt; Remove

**Beschreibung:** Entfernt den Bericht der Äquivalenztests.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );Wait( 2 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Remove;

```

#### Scatterplot

**Syntax:** scrobj &lt;&lt; Scatterplot( state=0|1 )

**Beschreibung:** Zeigt das Streudiagramm der Äquivalenztests an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );Wait( 1 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Scatterplot( 1 );

```

#### Test Report

**Syntax:** scrobj &lt;&lt; Test Report( state=0|1 )

**Beschreibung:** Blendet den Bericht der Äquivalenztests ein oder aus, der die Ergebnisse der Methode der zwei einseitigen Tests (TOST) enthält, die verwendet wird, um auf eine Grenzdifferenz zwischen den Mittelwerten zu testen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );Wait( 1 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### Elementmeldungen

#### Show Reference Lines

**Syntax:** scrobj &lt;&lt; Show Reference Lines( state=0|1 )

**Beschreibung:** Blendet Referenzrasterlinien für die Punkte im Streudiagramm ein oder aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );Wait( 1 );scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### Elementmeldungen

#### All Pairwise Comparisons Scatterplot

**Syntax:** scrobj &lt;&lt; All Pairwise Comparisons Scatterplot( state=0|1 )

**Beschreibung:** Zeigt das Streudiagramm über die Vergleiche für alle Paare an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( Drug ),	Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

#### All Pairwise Differences

**Syntax:** scrobj &lt;&lt; All Pairwise Differences( state=0|1 )

**Beschreibung:** Zeigt den Bericht über die Differenzen für alle Paare an oder blendet ihn aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );Wait( 1 );scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);scrobj << All Pairwise Differences( 1 );

```

#### All Pairwise Differences Connecting Letters

**Syntax:** scrobj &lt;&lt; All Pairwise Differences Connecting Letters( state=0|1 )

**Beschreibung:** Zeigt den Bericht über alle paarweisen Differenzen mit verbindenden Buchstaben an oder blendet ihn aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );obj = dt << Fit Model(	Y( :pain ),	Effects( :gender, :drug, :gender * :drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( Drug ),	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) ));

```

#### Save All Pairwise Differences Connecting Letters Table

**Syntax:** scrobj &lt;&lt; Save All Pairwise Differences Connecting Letters Table

**Beschreibung:** Erstellt eine Datentabelle mit Spalten, die die Stufen des Effekts, die Verbindungsbuchstaben, die Kleinste-Quadrate-Mittelwerte, ihre Standardfehler und Konfidenzintervalle enthalten.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );obj = dt << Fit Model(	Y( :pain ),	Effects( :gender, :drug, :gender * :drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run(		Multiple Comparisons(			Effect( Drug ),			Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )		)	));Wait( 1 );scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### Elementmeldungen

#### Calculate Adjusted P-Values

**Syntax:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**Beschreibung:** Zeigt eine Spalte mit p-Werten im Bericht der Abweichungen von der Kontrolle an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control( 1, Control Level( "Drug:a" ) ));Wait( 1 );scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Control Decision Chart

**Syntax:** scrobj &lt;&lt; Comparisons with Control Decision Chart( state=0|1 )

**Beschreibung:** Zeigt das Entscheidungsdiagramm der Vergleiche mit Kontrolle an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control(		1,		Control Level( "Drug:a" ),		Comparisons with Control Decision Chart( 0 )	));Wait( 1 );scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);scrobj << Comparisons with Control Decision Chart( 1 );

```

#### Differences from Control

**Syntax:** scrobj &lt;&lt; Differences from Control( state=0|1 )

**Beschreibung:** Zeigt den Bericht über die Abweichungen von der Kontrolle an oder blendet ihn aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### Elementmeldungen

#### Calculate Adjusted P-Values

**Syntax:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**Beschreibung:** Zeigt eine Spalte mit p-Werten im Bericht der Differenzen zu den Gesamtmittelwerten an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );Wait( 1 );scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Overall Average Decision Chart

**Syntax:** scrobj &lt;&lt; Comparisons with Overall Average Decision Chart( state=0|1 )

**Beschreibung:** Zeigt das Entscheidungsdiagramm der Vergleiche mit dem Gesamtmittelwert an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Overall Average(		1,		Comparisons with Overall Average Decision Chart( 0 )	));Wait( 1 );scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

#### Differences from Overall Average

**Syntax:** scrobj &lt;&lt; Differences from Overall Average( state=0|1 )

**Beschreibung:** Zeigt den Bericht über die Differenzen vom Gesamtmittelwert an oder blendet ihn aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### Elementmeldungen

#### Remove

**Syntax:** scrobj &lt;&lt; Remove

**Beschreibung:** Entfernt das Diagramm der Kleinste-Quadrate-Mittelwerte aus dem Bericht.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Least Squares Means Plot( Show Connected Points( 0 ) ));Wait( 2 );scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);scrobj << Remove;

```

#### Show Confidence Limits

**Syntax:** scrobj &lt;&lt; Show Confidence Limits( state=0|1 )

**Beschreibung:** Blendet Konfidenzgrenzen für jeden Schätzwert im Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Least Squares Means Plot( Show Confidence Limits( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);scrobj << Show Confidence Limits( 1 );

```

#### Show Connected Points

**Syntax:** scrobj &lt;&lt; Show Connected Points( state=0|1 )

**Beschreibung:** Blendet eine oder mehrere Linien ein oder aus, die die Kleinste-Quadrate-Mittelwerte für jede Stufe im Diagramm verbinden. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Least Squares Means Plot( Show Connected Points( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### Elementmeldungen

#### Comparisons with Control

**Syntax:** scrobj &lt;&lt; Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ) )

**Beschreibung:** Zeigt oder verbirgt einen Test für das multiple Vergleichen, der die Kleinste-Quadrate-Mittelwerte der einzelnen Effekte mit dem Kleinste-Quadrate-Mittelwert einer Kontrollstufe vergleicht. Dieser Test wird auch als Dunnetts Test bezeichnet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control( 1, Control Level( "Drug:a" ) ));

```

#### Comparisons with Overall Average

**Syntax:** scrobj &lt;&lt; Comparisons with Overall Average( state=0|1, &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, &lt;options&gt; ) )

**Beschreibung:** Zeigt oder verbirgt einen Test für das multiple Vergleichen, der die Kleinste-Quadrate-Mittelwerte der einzelnen Effekte mit dem Gesamtdurchschnitt der Kleinste-Quadrate-Mittelwerte vergleicht. Dieser Test wird auch als Mittelwertanalyse bezeichnet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

#### Equivalence Tests

**Syntax:** scrobj &lt;&lt; Equivalence Tests( number ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**Beschreibung:** Zeigt oder verbirgt einen Test für das multiple Vergleichen aller paarweisen Kleinste-Quadrate-Mittelwertvergleiche gegen eine angegebene Differenz, die als praktisch äquivalent angesehen wird.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

#### Least Squares Means Plot

**Syntax:** scrobj &lt;&lt; Least Squares Means Plot; obj &lt;&lt; Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**Beschreibung:** Zeigt ein Diagramm der Kleinste-Quadrate-Mittelwerte mit Standardfehlerbalken.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

#### Remove

**Syntax:** scrobj &lt;&lt; Remove

**Beschreibung:** Entfernt den Bericht über multiple Vergleiche.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );Wait( 2 );scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);scrobj << Remove;

```

#### Slice F Test

**Syntax:** scrobj &lt;&lt; Slice F Test( state=0|1 ); obj &lt;&lt; Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**Beschreibung:** Blendet den F-Test für den unterteilten Effekt ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Model(	Y( :height ),	Effects( :age, :sex, :age * :sex ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),	Slice F Test( 1 ));Wait( 1 );scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] <<get scriptable object);scrobj << Slice F Test( 0 );Wait( 1 );scrobj << Slice F Test( 1 );

```

#### Student's t

**Syntax:** scrobj &lt;&lt; Student&apos;s t( state=0|1, &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, &lt;options&gt; ) )

**Beschreibung:** Zeigt oder verbirgt einen Test für das multiple Vergleichen aller paarweisen Kleinste-Quadrate-Mittelwertvergleiche unter Verwendung des Student-t-Tests.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Drug ),	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) ));

```

#### Tukey HSD

**Syntax:** scrobj &lt;&lt; Tukey HSD( state=0|1, &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, &lt;options&gt; ) )

**Beschreibung:** Zeigt oder verbirgt einen Test für das multiple Vergleichen aller paarweisen Kleinste-Quadrate-Mittelwertvergleiche unter Verwendung des Tukey-Kramer-Tests auf ehrlich signifikante Unterschiede (HSD).

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Drug ),	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) ));

```

## Fit Least Squares > REML

### Elementmeldungen

#### Convergence Limit

**Syntax:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Konvergenzgrenze für die Modellanpassung an. Wenn Ihr Modell nicht ohne weiteres konvergiert, sollten Sie die Konvergenzgrenze erhöhen. Standardmäßig beträgt die Konvergenzgrenze 0,00000001.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Convergence Limit( 0.0001 ),	Run);

```

#### Maximum Iterations

**Syntax:** obj = Fit Model(...Maximum Iterations( number=100 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die maximale Anzahl von Iterationen an, die bei der Modellanpassung verwendet werden. Standardmäßig beträgt die maximale Anzahl von Iterationen 100.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Maximum Iterations( 150 ),	Run);

```

#### Method

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Methode an, die für die Anpassung gemischter Modelle im Charakter Gewöhnliche kleinste Quadrate verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

#### NoBounds

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Entfernt die Grenzen für Varianzschätzungen. Wenn aus, wird die untere Grenze für Varianzschätzungen auf 0 gesetzt. Nur für den Charakter Gewöhnliche kleinste Quadrate verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 0 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

## Fit Least Squares > Response Fit

### Elementmeldungen

#### AICc

**Syntax:** obj &lt;&lt; AICc( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die korrigierten Werte des Akaikes (A-)Informationskriteriums (AICs) und des Bayesschen Informationskriteriums (BIC) im Bericht der Übersicht der Anpassung.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << AICc( 1 );

```

#### Analysis of Variance

**Syntax:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der statistische Kenngrößen für den Vergleich des angepasstes Modells mit einem einfachen Mittelwertmodell enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Analysis of Variance( 0 ) ));Wait( 1 );obj << Analysis of Variance( 1 );

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );obj2 = dt2 << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**Syntax:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das die A-posteriori-Wahrscheinlichkeiten für alle Modellterme unter Verwendung eines Bayesschen Ansatzes berechnet.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**Syntax:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**Beschreibung:** Blendet den Bericht der Box-Cox-Transformationen ein oder aus, der zeigt, wie sich die Anpassung ändern würde, wenn Sie das Modell mit einer Potenz-(Box-Cox-)Transformation der Zielgröße neu anpassen würden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**Syntax:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Beschreibung:** Erzeugt einen Bericht zur Mittelwertanalyse (ANOM), der die Wechselwirkungssteigungen mit der durchschnittlichen Steigung für ein Kovarianzanalyse-Modell (ANCOVA) vergleicht. Diese Option ist nur verfügbar, wenn es einen nominalen Effekt, einen stetigen Effekt und deren Wechselwirkungseffekt für die festen Effekte gibt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );obj = dt << Fit Model(	Y( :Eighth Grade Math ),	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Compare Slopes(	Effect( :Region * :High School Graduates ),	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ));

```

#### Conditional Indiv CI

**Syntax:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält das Konfidenzintervall für den Einzelwert von der bedingten Vorhersage. Die Konfidenzintervalle schließen Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten ein. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält das Konfidenzintervall für die erwarteten Werte von der bedingten Vorhersage. Die Konfidenzintervalle schließen Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten ein. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**Syntax:** obj &lt;&lt; Conditional Pred Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel, die Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten einschließt. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**Syntax:** obj &lt;&lt; Conditional Pred Values

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die bedingten Vorhersagewerte, die mit den besten linearen unverzerrten Prädiktoren (BLUPs) für die Koeffizienten der zufälligen Effekte berechnet werden. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Values;

```

#### Conditional Residuals

**Syntax:** obj &lt;&lt; Conditional Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Residuen von der bedingten Vorhersage. Die Residuenwerte schließen Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten ein. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Residuals;

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt. Nur verfügbar, wenn das Modell mehr als einen stetigen Faktor enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**Syntax:** obj &lt;&lt; Cook&apos;s D Influence

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält ein Maß dafür, welchen Einfluss jede Beobachtung bei der Schätzung des Modells hat. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Cook's D Influence;

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Beschreibung:** Zeigt die Matrix der Korrelationen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**Syntax:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Beschreibung:** Blendet Parameterschätzer für das Cox-Mischungsmodell basierend auf den angegebenen Referenzmischungswerten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell Mischeffekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**Syntax:** obj &lt;&lt; Cube Plots( state=0|1 )

**Beschreibung:** Blendet die Vorhersagewerte für die Extreme der in einem oder mehreren Würfeln angeordneten Faktorbereiche ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cube Plots( 1 );

```

#### Custom Test

**Syntax:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Beschreibung:** Führt einen benutzerdefinierten F-Test durch, in dem die verschiedenen Effekte im Modell gegenübergestellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**Syntax:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**Beschreibung:** Blendet den Durbin-Watson-Bericht ein oder aus, der eine statistische Kenngröße enthält, mit der getestet wird, ob die Residuen eine Autokorrelation erster Ordnung aufweisen. Der Bericht zeigt auch die Autokorrelation der Residuen und die zur Kenngröße zugehörige exakte Wahrscheinlichkeit. Diese Option ist nur für Zeitreihendaten geeignet und geht davon aus, dass Ihre Beobachtungen in zeitlicher Reihenfolge vorliegen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );obj = dt << Fit Model(	Y( :CO2 ),	Effects( :Year, :Month ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Durbin Watson Test( 1 );

```

#### Effect Details

**Syntax:** obj &lt;&lt; Effect Details( state=0|1 )

**Beschreibung:** Blendet ausführliche Berichte für jeden Effekt im Modell ein oder aus, einschließlich der Tabelle der KQ-Mittelwerte für jeden kategorialen Effekt. Zusätzliche Informationen können durch Senden von Meldungen an Modelleffekte angezeigt werden. Weitere Informationen finden Sie zum Objekt Effektanpassung unter Modell anpassen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( Effect Details( 0 ) ));Wait( 1 );obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**Syntax:** obj &lt;&lt; Effect Leverage Pairs

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die X- und Y-Werte, die in Effekteinflussdiagrammen gezeichnet werden. Der Y-Wert ist das partielle Residuum. Der X-Wert ist die Regressorschrumpfung in den Effekteinflussdiagrammen. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Effect Leverage Pairs;

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**Syntax:** obj &lt;&lt; Effect Tests( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der Tests für die festen Effekte im Modell enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Effect Tests( 0 ) ));Wait( 1 );obj << Effect Tests( 1 );

```

#### Error Specification

**Syntax:** obj &lt;&lt; Error Specification( "Standardschätzer"|"Reiner Fehler"|"Angegeben" )

**Beschreibung:** Gibt die Fehlervarianz und die Freiheitsgrade für den Fehler an, die für Standardfehler und Tests im Bericht „Kleinste Quadrate anpassen“ verwendet werden. Diese Option ist nur verfügbar, wenn das Modell keine zufälligen Effekte enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**Syntax:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**Beschreibung:** Blendet die Parameterschätzwerte für alle Stufen eines nominalen Modelleffekts ein oder aus. Bei einem nominalen Effekt mit k Stufen zeigt die Tabelle der Parameterschätzwerte Koeffizienten für k-1 Parameter an, und die Tabelle „Erweiterte Schätzer“ enthält die Effektkoeffizienten für alle k Stufen. Diese Option ist nur verfügbar, wenn mindestens einer der Effekte nicht stetig ist.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**Syntax:** obj &lt;&lt; Externally Studentized Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die extern studentisierten Residuen. Dies sind die Residuen dividiert durch Standardfehlerschätzer, bei denen die aktuelle Zeile ausgeschlossen ist. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Externally Studentized Residuals;

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**Syntax:** obj &lt;&lt; Get Conditional Formula

**Beschreibung:** Gibt eine Vorhersageformel zurück, die Schätzwerte für zufällige Effekt einschließt.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Conditional Formula;

```

#### Get Effect Names

**Syntax:** obj &lt;&lt; Get Effect Names

**Beschreibung:** Gibt die Effektnamen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect Names;Show( G );

```

#### Get Effect PValues

**Syntax:** obj &lt;&lt; Get Effect PValues

**Beschreibung:** Gibt die p-Werte der Effekte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect PValues;Show( G );

```

#### Get Estimates

**Syntax:** obj &lt;&lt; Get Estimates

**Beschreibung:** Gibt die Schätzwerte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Estimates;Show( G );

```

#### Get Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Indiv Confid Limit Formula

**Beschreibung:** Gibt eine Formel für die Konfidenzgrenzen der Einzelwerte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, den Sie im SAS Model Manager registrieren können.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Mean Confid Limit Formula

**Beschreibung:** Gibt eine Formel für die Konfidenzgrenzen der Mittelwerte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Get Measures;

```

#### Get Parameter Names

**Syntax:** obj &lt;&lt; Get Parameter Names

**Beschreibung:** Gibt die Parameternamen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Parameter Names;Show( G );

```

#### Get Parameterized Formula

**Syntax:** obj &lt;&lt; Get Parameterized Formula

**Beschreibung:** Gibt eine Vorhersageformel zurück, die Parameter statt Konstanten verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; Get Prediction Formula

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer Vorhersageformelspalte und gibt sie zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**Syntax:** obj &lt;&lt; Get Random Effect Names

**Beschreibung:** Gibt die Namen der zufälligen Effekte zurück. Verfügbar bei REML-Analysemethoden.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Random Effect Names;Show( G );

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, mit dem Sie Scores für einen neuen Datensatz erzeugen können.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**Syntax:** obj &lt;&lt; Get SQL prediction expression

**Beschreibung:** Erstellt einen SQL-Ausdruck, den Sie in eine SQL Select-Anweisung einfügen können, um eine Zielgröße vorherzusagen.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**Syntax:** obj &lt;&lt; Get Standard Error Formula

**Beschreibung:** Gibt eine Formel für den Standardfehler zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**Syntax:** obj &lt;&lt; Get Std Errors

**Beschreibung:** Gibt die Standardfehler zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Std Errors;Show( G );

```

#### Get Variance Components

**Syntax:** obj &lt;&lt; Get Variance Components

**Beschreibung:** Gibt die Varianzkomponenten zurück. Verfügbar bei REML-Analysemethoden.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Variance Components;Show( G );

```

#### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Beschreibung:** Gibt die Designmatrix zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get X Matrix;Show( G );

```

#### Get XPX Inverse

**Syntax:** obj &lt;&lt; Get XPX Inverse

**Beschreibung:** Gibt die inverse X&apos;X-Matrix zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get XPX Inverse;Show( G );

```

#### Get Y Matrix

**Syntax:** obj &lt;&lt; Get Y Matrix

**Beschreibung:** Gibt die Y-Matrix zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Y Matrix;Show( G );

```

#### Hats

**Syntax:** obj &lt;&lt; Hats

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Diagonalenwerte der Matrix xInv(x`x)x`. Diese Werte werden auch Hat oder Einflusswerte genannt. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Hats;

```

#### Indicator Parameterization Estimates

**Syntax:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Beschreibung:** Blendet den Bericht „Parametrisierung der Indikatorfunktion“ ein oder aus, der Parameterschätzungen mit den nominalen Effekten im Modell enthält, die mit den klassischen Indikatorfunktionen parametrisiert sind. Diese Option ist nur verfügbar, wenn es unter den Modelleffekten nominale Spalten und einen Achsenabschnitt gibt.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Spalte in der Datentabelle. Die neuen Spalten enthalten die Schranken für das Konfidenzintervall für eine einzelne Realisierung der Zielgröße. Dies umfasst die Variation in der Zielgröße und der Schätzung. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für eine einzelne Vorhersage, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);ref = obj << Indiv Confidence Limit Formula( .001 );Show( ref );

```

#### Interaction Plots

**Syntax:** obj &lt;&lt; Interaction Plots( state=0|1 )

**Beschreibung:** Blendet eine Matrix von Wechselwirkungsdiagrammen ein oder aus. Diese Option ist nur verfügbar, wenn das Modell Wechselwirkungseffekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Beschreibung:** Erzeugt einen vorhergesagten X-Wert und ein Konfidenzintervall basierend auf den angegebenen Werten von Y und allen anderen Faktoren.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :RunTime ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**Syntax:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**Beschreibung:** Blendet einen gemeinsamen Test für jeden Haupteffekt im Modell ein oder aus. Der gemeinsame Test bezieht sich auf alle Parameter, die diesen Haupteffekt beinhalten. Diese Option ist nur verfügbar, wenn das Modell Wechselwirkungen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**Syntax:** obj &lt;&lt; Lack of Fit( state=0|1 )

**Beschreibung:** Blendet einen Test ein oder aus, der bewertet, ob das Modell die geeigneten Effekte enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Lack Of Fit( 0 ) ));Wait( 1 );obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die Schranken für das Konfidenzintervall für den erwarteten Wert. Dies umfasst die Variation in der Schätzung, aber nicht in der Zielgröße. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für den Erwartungswert der Zielgröße, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);r = obj << Mean Confidence Limit Formula( .01 );Show( r );

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Beschreibung:** Blendet eine Mischungsanalyse ein oder aus, die die Konturen der Zielgröße in einem ternären Diagramm anzeigt. Diese Option ist nur verfügbar, wenn das Mischungseffektattribut auf drei oder mehr Faktoren im Modell angewendet wird oder wenn die Mischungseigenschaft auf drei oder mehr Faktorspalten angewendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Model Dialog;

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**Beschreibung:** Erzeugt Schätzwerte der Kleinste-Quadrate-Mittelwerte oder benutzerdefinierte Schätzwerte. Mit dem Bericht für multiple Vergleiche können Sie Vergleiche mit dem Gesamtmittelwert, Vergleiche mit Kontrolle oder paarweise Vergleiche durchführen.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);

```

#### Normal Plot

**Syntax:** obj &lt;&lt; Normal Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das Parameterschätzer identifiziert, die von der Normalverteilung abweichen. Damit können Sie feststellen, welche Effekte aktiv sind.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Normal Plot( 1 );

```

#### Parameter Estimates

**Syntax:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Parameterschätzer und t-Tests für die Hypothese enthält, dass jeder Parameter gleich null ist.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Parameter Estimates( 0 ) ));Wait( 1 );obj << Parameter Estimates( 1 );

```

#### Parameter Power

**Syntax:** obj &lt;&lt; Parameter Power( state=0|1 )

**Beschreibung:** Fügt dem Bericht „Parameterschätzer“ Spalten hinzu oder entfernt sie. Diese Spalten enthalten die Power und andere Details, die sich auf die entsprechenden Hypothesentests beziehen.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Parameter Power( 1 );

```

#### Parameterized Formula

**Syntax:** obj &lt;&lt; Parameterized Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Vorhersageformel, die Tabellenparameter statt Konstanten verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Parameterized Formula;

```

#### Pareto Plot

**Syntax:** obj &lt;&lt; Pareto Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Absolutwerte der orthogonalisierten und standardisierten Parameterschätzer ein oder aus. Dieses Diagramm zeigt ihre Überlagerung relativ zur Summe der Absolutwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Beschreibung:** Blendet das Diagramm „Beobachtete Werte über Vorhersage“ ein oder aus, in dem die beobachteten Werte der Zielgröße gegen die Vorhersagewerte der Zielgröße verglichen werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**Syntax:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**Beschreibung:** Blendet den Bericht des Einflussdiagramms für jeden Effekt im Modell ein oder aus. Das Diagramm zeigt, wie Beobachtungen den Test für diesen Effekt beeinflussen und gibt Aufschluss über Multikollinearität.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run( Plot Effect Leverage( 0 ) ));Wait( 1 );obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**Syntax:** obj &lt;&lt; Plot Regression( state=0|1 )

**Beschreibung:** Blendet den Bericht des Regressionsdiagramms ein oder aus, der ein Streudiagramm der Daten und Regressionslinien für jede Stufe des kategorialen Effekts enthält. Diese Option ist nur verfügbar, wenn es exakt einen stetigen Effekt und nicht mehr als einen kategorialen Effekt im Modell gibt. Wenn diese Bedingungen erfüllt sind, wird der Bericht des Regressionsdiagramms standardmäßig erstellt. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Plot Regression( 0 ) ));Wait( 1 );obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**Syntax:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**Beschreibung:** Blendet ein Diagramm mit den Residuen auf der vertikalen Achse und den Normal-Quantilen der Residuen auf der horizontalen Achse ein oder aus. Diese Option ist nicht verfügbar, wenn die Methode REML ist.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm mit den Residuen auf der vertikalen Achse und den Vorhersagewerten der Zielgröße auf der horizontalen Achse ein oder aus. Diese Option ist nur für stetige Zielgrößen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**Syntax:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm mit den Residuen auf der vertikalen Achse und der Zeilennummer auf der horizontalen Achse an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**Syntax:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**Beschreibung:** Blendet ein Diagramm mit den studentisierten Residuen auf der vertikalen Achse und der Zeilennummer auf der horizontalen Achse ein oder aus. Jeder Punkt im Diagramm wird anhand eines Schätzwerts seiner Standardabweichung berechnet, wobei die aktuelle Beobachtung gelöscht wird.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**Syntax:** obj &lt;&lt; Predicted Values

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für das angepasste Modell. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Predicted Values;

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel für das angepasste Modell. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die Spalten enthalten Formeln für die Vorhersagen, Konfidenzintervallgrenzen und Vorhersagegrenzen. Die von dieser Option erstellten Spalten mit Grenzen enthalten Eigenschaften, die von der Vorhersageanalyse verwendet werden. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction and Interval Formulas;dt << Profiler(	Y( :Pred Formula y ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));Wait( 2 );obj << Prediction and Interval Formulas( 0.01 );dt << Profiler(	Y( :Pred Formula y2 ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));

```

#### Press

**Syntax:** obj &lt;&lt; Press( state=0|1 )

**Beschreibung:** Blendet die statistische Kenngröße der Summe der Quadrate des Vorhersagefehlers (Press) und ihre Wurzel der mittleren quadratischen Abweichung (RMSE) ein oder aus. Die Kenngröße Press ist nützlich, wenn mehrere Modelle verglichen werden. Modelle mit niedrigeren Press-Kenngrößen werden bevorzugt.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Press( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Profiler( 1 );

```

#### Publish Conditional Formula

**Syntax:** obj &lt;&lt; Publish Conditional Formula

**Beschreibung:** Erstellt eine Vorhersageformel, die Schätzwerte für zufällige Effekte einschließt, und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**Beschreibung:** Erstellt Formeln für die Konfidenzgrenzen der Einzelwerte und veröffentlicht sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Mean Confid Limit Formula

**Beschreibung:** Erstellt Formeln für die Konfidenzgrenzen der Mittelwerte und veröffentlicht sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**Syntax:** obj &lt;&lt; Publish Parameterized Formula

**Beschreibung:** Erstellt eine Vorhersageformel, die Parameter statt Konstanten verwendet, und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Beschreibung:** Erstellt eine Vorhersageformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**Syntax:** obj &lt;&lt; Publish Standard Error Formula

**Beschreibung:** Erstellt eine Standardfehlerformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Standard Error Formula;

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Residuenwerte für das angepasste Modell. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Residuals;

```

#### Save Coding Table

**Syntax:** obj &lt;&lt; Save Coding Table

**Beschreibung:** Erstellt eine neue Datentabelle, die die JMP-Codierung für alle Modellparameter enthält. Die letzte Spalte zeigt die Werte der Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Save Coding Table;

```

#### Scaled Estimates

**Syntax:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**Beschreibung:** Blendet Parameterschätzer ein oder aus, die Faktoren entsprechen, die skaliert sind, um einen Mittelwert von null und eine Spannweite von zwei zu erhalten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; Sequential Tests( state=0|1 )

**Beschreibung:** Blendet den Bericht über sequentielle Tests (Typ 1) ein oder aus, der die Quadratsummen enthält, wenn die Effekte dem Modell sequentiell hinzugefügt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**Syntax:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**Beschreibung:** Blendet Konfidenzintervalle für Parameterschätzer und Schätzer für Kleinste-Quadrate-Mittelwerte ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show All Confidence Intervals( 1 );

```

#### Show CV

**Syntax:** obj &lt;&lt; Show CV( state=0|1 )

**Beschreibung:** Zeigt die Spalte „Variationskoeffizient“ im Bericht „REML-Varianzkomponentenschätzer“ an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show CV( 1 );

```

#### Show Prediction Expression

**Syntax:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Vorhersagefunktion an oder blendet ihn aus, der die Gleichung für das geschätzte Modell enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**Syntax:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Beschreibung:** Zeigt die Spalte „Wurzel der Varianzkomponente“ im Bericht „REML-Varianzkomponentenschätzer“ an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntax:** obj &lt;&lt; Show VIF( state=0|1 )

**Beschreibung:** Blendet die Werte des Varianzinflationsfaktors (VIF) im Bericht der Parameterschätzer ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show VIF( 1 );

```

#### Sorted Estimates

**Syntax:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**Beschreibung:** Blendet den Bericht „Sortierte Parameterschätzer“ ein oder aus, der in Screening-Situationen nützlich sein kann. Dieser Bericht enthält die Parameterschätzer sortiert nach dem Absolutwert des t-Werts für jede Schätzung.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**Syntax:** obj &lt;&lt; Std Error of Individual

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält den Standardfehler der Vorhersage eines Einzelwerts. Damit wird das Konfidenzintervall des Einzelwerts berechnet. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält den Standardfehler für Vorhersagewerte. Damit wird der Mittelwert des Konfidenzintervalls berechnet. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Predicted;

```

#### Std Error of Residual

**Syntax:** obj &lt;&lt; Std Error of Residual

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält den Standardfehler für Residuenwerte. Damit werden die studentisierten Residuen berechnet. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Residual;

```

#### StdErr Pred Formula

**Syntax:** obj &lt;&lt; StdErr Pred Formula

**Beschreibung:** Speichert eine neue Formel in der Datentabelle. Die neue Spalte enthält die Formel für den Standardfehler für Vorhersagewerte als eine Funktion der Regressoren. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << StdErr Pred Formula;

```

#### Studentized Residuals

**Syntax:** obj &lt;&lt; Studentized Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält das studentisierte Residuum, wobei es sich um das Residuum dividiert durch den Standardfehler handelt. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Studentized Residuals;

```

#### Summary of Fit

**Syntax:** obj &lt;&lt; Summary of Fit( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Zusammenfassung der statistischen Kenngrößen der Modellanpassung enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm der Wirkungsfläche ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Surface Profiler( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Summary of Fit(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Least Squares

### Elementmeldungen

#### AICc

**Syntax:** obj &lt;&lt; AICc( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die korrigierten Werte des Akaikes (A-)Informationskriteriums (AICs) und des Bayesschen Informationskriteriums (BIC) im Bericht der Übersicht der Anpassung.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << AICc( 1 );

```

#### Analysis of Variance

**Syntax:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der statistische Kenngrößen für den Vergleich des angepasstes Modells mit einem einfachen Mittelwertmodell enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Analysis of Variance( 0 ) ));Wait( 1 );obj << Analysis of Variance( 1 );

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );obj2 = dt2 << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**Syntax:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das die A-posteriori-Wahrscheinlichkeiten für alle Modellterme unter Verwendung eines Bayesschen Ansatzes berechnet.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**Syntax:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**Beschreibung:** Blendet den Bericht der Box-Cox-Transformationen ein oder aus, der zeigt, wie sich die Anpassung ändern würde, wenn Sie das Modell mit einer Potenz-(Box-Cox-)Transformation der Zielgröße neu anpassen würden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**Syntax:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Beschreibung:** Erzeugt einen Bericht zur Mittelwertanalyse (ANOM), der die Wechselwirkungssteigungen mit der durchschnittlichen Steigung für ein Kovarianzanalyse-Modell (ANCOVA) vergleicht. Diese Option ist nur verfügbar, wenn es einen nominalen Effekt, einen stetigen Effekt und deren Wechselwirkungseffekt für die festen Effekte gibt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );obj = dt << Fit Model(	Y( :Eighth Grade Math ),	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Compare Slopes(	Effect( :Region * :High School Graduates ),	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ));

```

#### Conditional Indiv CI

**Syntax:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält das Konfidenzintervall für den Einzelwert von der bedingten Vorhersage. Die Konfidenzintervalle schließen Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten ein. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält das Konfidenzintervall für die erwarteten Werte von der bedingten Vorhersage. Die Konfidenzintervalle schließen Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten ein. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**Syntax:** obj &lt;&lt; Conditional Pred Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel, die Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten einschließt. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**Syntax:** obj &lt;&lt; Conditional Pred Values

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die bedingten Vorhersagewerte, die mit den besten linearen unverzerrten Prädiktoren (BLUPs) für die Koeffizienten der zufälligen Effekte berechnet werden. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Values;

```

#### Conditional Residuals

**Syntax:** obj &lt;&lt; Conditional Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Residuen von der bedingten Vorhersage. Die Residuenwerte schließen Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten ein. Diese Option ist nur verfügbar bei REML-Analysemethoden. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Residuals;

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt. Nur verfügbar, wenn das Modell mehr als einen stetigen Faktor enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**Syntax:** obj &lt;&lt; Cook&apos;s D Influence

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält ein Maß dafür, welchen Einfluss jede Beobachtung bei der Schätzung des Modells hat. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Cook's D Influence;

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Beschreibung:** Zeigt die Matrix der Korrelationen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**Syntax:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Beschreibung:** Blendet Parameterschätzer für das Cox-Mischungsmodell basierend auf den angegebenen Referenzmischungswerten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell Mischeffekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**Syntax:** obj &lt;&lt; Cube Plots( state=0|1 )

**Beschreibung:** Blendet die Vorhersagewerte für die Extreme der in einem oder mehreren Würfeln angeordneten Faktorbereiche ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cube Plots( 1 );

```

#### Custom Test

**Syntax:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Beschreibung:** Führt einen benutzerdefinierten F-Test durch, in dem die verschiedenen Effekte im Modell gegenübergestellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**Syntax:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**Beschreibung:** Blendet den Durbin-Watson-Bericht ein oder aus, der eine statistische Kenngröße enthält, mit der getestet wird, ob die Residuen eine Autokorrelation erster Ordnung aufweisen. Der Bericht zeigt auch die Autokorrelation der Residuen und die zur Kenngröße zugehörige exakte Wahrscheinlichkeit. Diese Option ist nur für Zeitreihendaten geeignet und geht davon aus, dass Ihre Beobachtungen in zeitlicher Reihenfolge vorliegen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );obj = dt << Fit Model(	Y( :CO2 ),	Effects( :Year, :Month ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Durbin Watson Test( 1 );

```

#### Effect Details

**Syntax:** obj &lt;&lt; Effect Details( state=0|1 )

**Beschreibung:** Blendet ausführliche Berichte für jeden Effekt im Modell ein oder aus, einschließlich der Tabelle der KQ-Mittelwerte für jeden kategorialen Effekt. Zusätzliche Informationen können durch Senden von Meldungen an Modelleffekte angezeigt werden. Weitere Informationen finden Sie zum Objekt Effektanpassung unter Modell anpassen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( Effect Details( 0 ) ));Wait( 1 );obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**Syntax:** obj &lt;&lt; Effect Leverage Pairs

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die X- und Y-Werte, die in Effekteinflussdiagrammen gezeichnet werden. Der Y-Wert ist das partielle Residuum. Der X-Wert ist die Regressorschrumpfung in den Effekteinflussdiagrammen. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Effect Leverage Pairs;

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**Syntax:** obj &lt;&lt; Effect Tests( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der Tests für die festen Effekte im Modell enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Effect Tests( 0 ) ));Wait( 1 );obj << Effect Tests( 1 );

```

#### Error Specification

**Syntax:** obj &lt;&lt; Error Specification( "Standardschätzer"|"Reiner Fehler"|"Angegeben" )

**Beschreibung:** Gibt die Fehlervarianz und die Freiheitsgrade für den Fehler an, die für Standardfehler und Tests im Bericht „Kleinste Quadrate anpassen“ verwendet werden. Diese Option ist nur verfügbar, wenn das Modell keine zufälligen Effekte enthält.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**Syntax:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**Beschreibung:** Blendet die Parameterschätzwerte für alle Stufen eines nominalen Modelleffekts ein oder aus. Bei einem nominalen Effekt mit k Stufen zeigt die Tabelle der Parameterschätzwerte Koeffizienten für k-1 Parameter an, und die Tabelle „Erweiterte Schätzer“ enthält die Effektkoeffizienten für alle k Stufen. Diese Option ist nur verfügbar, wenn mindestens einer der Effekte nicht stetig ist.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**Syntax:** obj &lt;&lt; Externally Studentized Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die extern studentisierten Residuen. Dies sind die Residuen dividiert durch Standardfehlerschätzer, bei denen die aktuelle Zeile ausgeschlossen ist. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Externally Studentized Residuals;

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**Syntax:** obj &lt;&lt; Get Conditional Formula

**Beschreibung:** Gibt eine Vorhersageformel zurück, die Schätzwerte für zufällige Effekt einschließt.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Conditional Formula;

```

#### Get Effect Names

**Syntax:** obj &lt;&lt; Get Effect Names

**Beschreibung:** Gibt die Effektnamen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect Names;Show( G );

```

#### Get Effect PValues

**Syntax:** obj &lt;&lt; Get Effect PValues

**Beschreibung:** Gibt die p-Werte der Effekte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect PValues;Show( G );

```

#### Get Estimates

**Syntax:** obj &lt;&lt; Get Estimates

**Beschreibung:** Gibt die Schätzwerte zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Estimates;Show( G );

```

#### Get Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Indiv Confid Limit Formula

**Beschreibung:** Gibt eine Formel für die Konfidenzgrenzen der Einzelwerte zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, den Sie im SAS Model Manager registrieren können.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Mean Confid Limit Formula

**Beschreibung:** Gibt eine Formel für die Konfidenzgrenzen der Mittelwerte zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Get Measures;

```

#### Get Parameter Names

**Syntax:** obj &lt;&lt; Get Parameter Names

**Beschreibung:** Gibt die Parameternamen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Parameter Names;Show( G );

```

#### Get Parameterized Formula

**Syntax:** obj &lt;&lt; Get Parameterized Formula

**Beschreibung:** Gibt eine Vorhersageformel zurück, die Parameter statt Konstanten verwendet.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; Get Prediction Formula

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer Vorhersageformelspalte und gibt sie zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**Syntax:** obj &lt;&lt; Get Random Effect Names

**Beschreibung:** Gibt die Namen der zufälligen Effekte zurück. Verfügbar bei REML-Analysemethoden.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Random Effect Names;Show( G );

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, mit dem Sie Scores für einen neuen Datensatz erzeugen können.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**Syntax:** obj &lt;&lt; Get SQL prediction expression

**Beschreibung:** Erstellt einen SQL-Ausdruck, den Sie in eine SQL Select-Anweisung einfügen können, um eine Zielgröße vorherzusagen.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**Syntax:** obj &lt;&lt; Get Standard Error Formula

**Beschreibung:** Gibt eine Formel für den Standardfehler zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**Syntax:** obj &lt;&lt; Get Std Errors

**Beschreibung:** Gibt die Standardfehler zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Std Errors;Show( G );

```

#### Get Variance Components

**Syntax:** obj &lt;&lt; Get Variance Components

**Beschreibung:** Gibt die Varianzkomponenten zurück. Verfügbar bei REML-Analysemethoden.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Variance Components;Show( G );

```

#### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Beschreibung:** Gibt die Designmatrix zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get X Matrix;Show( G );

```

#### Get XPX Inverse

**Syntax:** obj &lt;&lt; Get XPX Inverse

**Beschreibung:** Gibt die inverse X&apos;X-Matrix zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get XPX Inverse;Show( G );

```

#### Get Y Matrix

**Syntax:** obj &lt;&lt; Get Y Matrix

**Beschreibung:** Gibt die Y-Matrix zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Y Matrix;Show( G );

```

#### Hats

**Syntax:** obj &lt;&lt; Hats

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Diagonalenwerte der Matrix xInv(x`x)x`. Diese Werte werden auch Hat oder Einflusswerte genannt. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Hats;

```

#### Indicator Parameterization Estimates

**Syntax:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Beschreibung:** Blendet den Bericht „Parametrisierung der Indikatorfunktion“ ein oder aus, der Parameterschätzungen mit den nominalen Effekten im Modell enthält, die mit den klassischen Indikatorfunktionen parametrisiert sind. Diese Option ist nur verfügbar, wenn es unter den Modelleffekten nominale Spalten und einen Achsenabschnitt gibt.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Spalte in der Datentabelle. Die neuen Spalten enthalten die Schranken für das Konfidenzintervall für eine einzelne Realisierung der Zielgröße. Dies umfasst die Variation in der Zielgröße und der Schätzung. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für eine einzelne Vorhersage, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);ref = obj << Indiv Confidence Limit Formula( .001 );Show( ref );

```

#### Interaction Plots

**Syntax:** obj &lt;&lt; Interaction Plots( state=0|1 )

**Beschreibung:** Blendet eine Matrix von Wechselwirkungsdiagrammen ein oder aus. Diese Option ist nur verfügbar, wenn das Modell Wechselwirkungseffekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Beschreibung:** Erzeugt einen vorhergesagten X-Wert und ein Konfidenzintervall basierend auf den angegebenen Werten von Y und allen anderen Faktoren.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :RunTime ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**Syntax:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**Beschreibung:** Blendet einen gemeinsamen Test für jeden Haupteffekt im Modell ein oder aus. Der gemeinsame Test bezieht sich auf alle Parameter, die diesen Haupteffekt beinhalten. Diese Option ist nur verfügbar, wenn das Modell Wechselwirkungen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**Syntax:** obj &lt;&lt; Lack of Fit( state=0|1 )

**Beschreibung:** Blendet einen Test ein oder aus, der bewertet, ob das Modell die geeigneten Effekte enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Lack Of Fit( 0 ) ));Wait( 1 );obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die Schranken für das Konfidenzintervall für den erwarteten Wert. Dies umfasst die Variation in der Schätzung, aber nicht in der Zielgröße. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für den Erwartungswert der Zielgröße, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);r = obj << Mean Confidence Limit Formula( .01 );Show( r );

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Beschreibung:** Blendet eine Mischungsanalyse ein oder aus, die die Konturen der Zielgröße in einem ternären Diagramm anzeigt. Diese Option ist nur verfügbar, wenn das Mischungseffektattribut auf drei oder mehr Faktoren im Modell angewendet wird oder wenn die Mischungseigenschaft auf drei oder mehr Faktorspalten angewendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Model Dialog;

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**Beschreibung:** Erzeugt Schätzwerte der Kleinste-Quadrate-Mittelwerte oder benutzerdefinierte Schätzwerte. Mit dem Bericht für multiple Vergleiche können Sie Vergleiche mit dem Gesamtmittelwert, Vergleiche mit Kontrolle oder paarweise Vergleiche durchführen.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);

```

#### Normal Plot

**Syntax:** obj &lt;&lt; Normal Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das Parameterschätzer identifiziert, die von der Normalverteilung abweichen. Damit können Sie feststellen, welche Effekte aktiv sind.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Normal Plot( 1 );

```

#### Parameter Estimates

**Syntax:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Parameterschätzer und t-Tests für die Hypothese enthält, dass jeder Parameter gleich null ist.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Parameter Estimates( 0 ) ));Wait( 1 );obj << Parameter Estimates( 1 );

```

#### Parameter Power

**Syntax:** obj &lt;&lt; Parameter Power( state=0|1 )

**Beschreibung:** Fügt dem Bericht „Parameterschätzer“ Spalten hinzu oder entfernt sie. Diese Spalten enthalten die Power und andere Details, die sich auf die entsprechenden Hypothesentests beziehen.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Parameter Power( 1 );

```

#### Parameterized Formula

**Syntax:** obj &lt;&lt; Parameterized Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Vorhersageformel, die Tabellenparameter statt Konstanten verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Parameterized Formula;

```

#### Pareto Plot

**Syntax:** obj &lt;&lt; Pareto Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Absolutwerte der orthogonalisierten und standardisierten Parameterschätzer ein oder aus. Dieses Diagramm zeigt ihre Überlagerung relativ zur Summe der Absolutwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Beschreibung:** Blendet das Diagramm „Beobachtete Werte über Vorhersage“ ein oder aus, in dem die beobachteten Werte der Zielgröße gegen die Vorhersagewerte der Zielgröße verglichen werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**Syntax:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**Beschreibung:** Blendet den Bericht des Einflussdiagramms für jeden Effekt im Modell ein oder aus. Das Diagramm zeigt, wie Beobachtungen den Test für diesen Effekt beeinflussen und gibt Aufschluss über Multikollinearität.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run( Plot Effect Leverage( 0 ) ));Wait( 1 );obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**Syntax:** obj &lt;&lt; Plot Regression( state=0|1 )

**Beschreibung:** Blendet den Bericht des Regressionsdiagramms ein oder aus, der ein Streudiagramm der Daten und Regressionslinien für jede Stufe des kategorialen Effekts enthält. Diese Option ist nur verfügbar, wenn es exakt einen stetigen Effekt und nicht mehr als einen kategorialen Effekt im Modell gibt. Wenn diese Bedingungen erfüllt sind, wird der Bericht des Regressionsdiagramms standardmäßig erstellt. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Plot Regression( 0 ) ));Wait( 1 );obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**Syntax:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**Beschreibung:** Blendet ein Diagramm mit den Residuen auf der vertikalen Achse und den Normal-Quantilen der Residuen auf der horizontalen Achse ein oder aus. Diese Option ist nicht verfügbar, wenn die Methode REML ist.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm mit den Residuen auf der vertikalen Achse und den Vorhersagewerten der Zielgröße auf der horizontalen Achse ein oder aus. Diese Option ist nur für stetige Zielgrößen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**Syntax:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm mit den Residuen auf der vertikalen Achse und der Zeilennummer auf der horizontalen Achse an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**Syntax:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**Beschreibung:** Blendet ein Diagramm mit den studentisierten Residuen auf der vertikalen Achse und der Zeilennummer auf der horizontalen Achse ein oder aus. Jeder Punkt im Diagramm wird anhand eines Schätzwerts seiner Standardabweichung berechnet, wobei die aktuelle Beobachtung gelöscht wird.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**Syntax:** obj &lt;&lt; Predicted Values

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für das angepasste Modell. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Predicted Values;

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel für das angepasste Modell. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die Spalten enthalten Formeln für die Vorhersagen, Konfidenzintervallgrenzen und Vorhersagegrenzen. Die von dieser Option erstellten Spalten mit Grenzen enthalten Eigenschaften, die von der Vorhersageanalyse verwendet werden. Halten Sie die Umschalttaste gedrückt, um das Alpha-Niveau oder ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction and Interval Formulas;dt << Profiler(	Y( :Pred Formula y ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));Wait( 2 );obj << Prediction and Interval Formulas( 0.01 );dt << Profiler(	Y( :Pred Formula y2 ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));

```

#### Press

**Syntax:** obj &lt;&lt; Press( state=0|1 )

**Beschreibung:** Blendet die statistische Kenngröße der Summe der Quadrate des Vorhersagefehlers (Press) und ihre Wurzel der mittleren quadratischen Abweichung (RMSE) ein oder aus. Die Kenngröße Press ist nützlich, wenn mehrere Modelle verglichen werden. Modelle mit niedrigeren Press-Kenngrößen werden bevorzugt.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Press( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Profiler( 1 );

```

#### Publish Conditional Formula

**Syntax:** obj &lt;&lt; Publish Conditional Formula

**Beschreibung:** Erstellt eine Vorhersageformel, die Schätzwerte für zufällige Effekte einschließt, und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**Beschreibung:** Erstellt Formeln für die Konfidenzgrenzen der Einzelwerte und veröffentlicht sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Mean Confid Limit Formula

**Beschreibung:** Erstellt Formeln für die Konfidenzgrenzen der Mittelwerte und veröffentlicht sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**Syntax:** obj &lt;&lt; Publish Parameterized Formula

**Beschreibung:** Erstellt eine Vorhersageformel, die Parameter statt Konstanten verwendet, und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Beschreibung:** Erstellt eine Vorhersageformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**Syntax:** obj &lt;&lt; Publish Standard Error Formula

**Beschreibung:** Erstellt eine Standardfehlerformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Standard Error Formula;

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Residuenwerte für das angepasste Modell. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Residuals;

```

#### Save Coding Table

**Syntax:** obj &lt;&lt; Save Coding Table

**Beschreibung:** Erstellt eine neue Datentabelle, die die JMP-Codierung für alle Modellparameter enthält. Die letzte Spalte zeigt die Werte der Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Save Coding Table;

```

#### Scaled Estimates

**Syntax:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**Beschreibung:** Blendet Parameterschätzer ein oder aus, die Faktoren entsprechen, die skaliert sind, um einen Mittelwert von null und eine Spannweite von zwei zu erhalten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; Sequential Tests( state=0|1 )

**Beschreibung:** Blendet den Bericht über sequentielle Tests (Typ 1) ein oder aus, der die Quadratsummen enthält, wenn die Effekte dem Modell sequentiell hinzugefügt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**Syntax:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**Beschreibung:** Blendet Konfidenzintervalle für Parameterschätzer und Schätzer für Kleinste-Quadrate-Mittelwerte ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show All Confidence Intervals( 1 );

```

#### Show CV

**Syntax:** obj &lt;&lt; Show CV( state=0|1 )

**Beschreibung:** Zeigt die Spalte „Variationskoeffizient“ im Bericht „REML-Varianzkomponentenschätzer“ an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show CV( 1 );

```

#### Show Prediction Expression

**Syntax:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Vorhersagefunktion an oder blendet ihn aus, der die Gleichung für das geschätzte Modell enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**Syntax:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Beschreibung:** Zeigt die Spalte „Wurzel der Varianzkomponente“ im Bericht „REML-Varianzkomponentenschätzer“ an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntax:** obj &lt;&lt; Show VIF( state=0|1 )

**Beschreibung:** Blendet die Werte des Varianzinflationsfaktors (VIF) im Bericht der Parameterschätzer ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show VIF( 1 );

```

#### Sorted Estimates

**Syntax:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**Beschreibung:** Blendet den Bericht „Sortierte Parameterschätzer“ ein oder aus, der in Screening-Situationen nützlich sein kann. Dieser Bericht enthält die Parameterschätzer sortiert nach dem Absolutwert des t-Werts für jede Schätzung.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**Syntax:** obj &lt;&lt; Std Error of Individual

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält den Standardfehler der Vorhersage eines Einzelwerts. Damit wird das Konfidenzintervall des Einzelwerts berechnet. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält den Standardfehler für Vorhersagewerte. Damit wird der Mittelwert des Konfidenzintervalls berechnet. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Predicted;

```

#### Std Error of Residual

**Syntax:** obj &lt;&lt; Std Error of Residual

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält den Standardfehler für Residuenwerte. Damit werden die studentisierten Residuen berechnet. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Residual;

```

#### StdErr Pred Formula

**Syntax:** obj &lt;&lt; StdErr Pred Formula

**Beschreibung:** Speichert eine neue Formel in der Datentabelle. Die neue Spalte enthält die Formel für den Standardfehler für Vorhersagewerte als eine Funktion der Regressoren. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << StdErr Pred Formula;

```

#### Studentized Residuals

**Syntax:** obj &lt;&lt; Studentized Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält das studentisierte Residuum, wobei es sich um das Residuum dividiert durch den Standardfehler handelt. Halten Sie die Umschalttaste gedrückt, um ein Suffix einzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Studentized Residuals;

```

#### Summary of Fit

**Syntax:** obj &lt;&lt; Summary of Fit( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der eine Zusammenfassung der statistischen Kenngrößen der Modellanpassung enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm der Wirkungsfläche ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Surface Profiler( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Least Squares

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**Beschreibung:** Passt ein lineares Regressionsmodell für eine stetige Zielgröße an. Zu den Techniken gehören Regression, Varianzanalyse, Kovarianzanalyse, gemischte Modelle sowie die Analyse statistisch geplanter Experimente. Mit der Betonungsoption können Sie das Berichtslayout angeben.

**Behandlungseffekt mit Blöcken anpassen**

```jsl

dt = Open( "$Sample_Data/Snapdragon.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Soil ),	Random Effects( :Block ),	Personality( "Standard Least Squares" ),	Run);

```

**Gemischtes Modell mit zufälligen Steigungen anpassen**

```jsl

dt = Open( "$Sample_Data/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Moisture[:Variety] ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Mehrere Zielgrößen anpassen**

```jsl

dt = Open( "$Sample_Data/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);

```

**Mehrere zufällige Effekte anpassen**

```jsl

dt = Open( "$Sample_Data/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Multiple Regression anpassen**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Standard Least Squares" ),	Run);

```

**Parallele Steigungen anpassen (ANCOVA)**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);

```

**Screening-Design mit Wechselwirkungen anpassen**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ),	Run);

```

**Separate Steigungen gekreuzt anpassen**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x, :Drug * :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Separate Steigungen geschachtelt anpassen**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x[:Drug] ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Split Plot anpassen**

```jsl

dt = Open( "$Sample_Data/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Wirkungsfläche quadratisch anpassen**

```jsl

dt = Open( "$Sample_Data/Tiretread.jmp" );obj = dt << Fit Model(	Y( :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);

```

**Zweifaktoriell gekreuzt anpassen**

```jsl

dt = Open( "$Sample_Data/Analgesics.jmp" );obj = dt << Fit Model(	Y( :pain ),	Effects( :gender, :drug, :gender * :drug ),	Personality( "Standard Least Squares" ),	Run);

```

## Fit LogVariance > Response Fit LogVariance

### Elementmeldungen

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Pressure, :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << (:Pressure << Plot Actual By Predicted( 0 ));Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );Wait( 1 );preset = obj << (1 << New Preset);obj << (2 << Apply Preset( preset ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten Konfidenzgrenzen für Einzelwerte von Zielgrößen.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Indiv Confidence Interval;

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die Schranken für ein Konfidenzintervall für den Vorhersagemittelwert.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Mean Confidence Interval;

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Model Dialog;

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Pressure, :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << (:Pressure << Plot Actual By Predicted( 0 ));Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );Wait( 1 );preset = obj << (1 << New Preset);

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagnosediagramm mit den tatsächlichen Werten auf der vertikalen Achse und den Vorhersagewerten auf der horizontalen Achse ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run( Plot Actual by Predicted( 0 ) ));Wait( 1 );obj << Plot Actual by Predicted( 1 );

```

#### Plot Studentized Residual by Predicted

**Syntax:** obj &lt;&lt; Plot Studentized Residual by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagnosediagramm mit den studentisierten Residuen auf der vertikalen Achse und den Vorhersagewerten auf der horizontalen Achse ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Plot Studentized Residual by Predicted( 1 );

```

#### Plot Studentized Residual by Row

**Syntax:** obj &lt;&lt; Plot Studentized Residual by Row( state=0|1 )

**Beschreibung:** Blendet ein Diagnosediagramm mit den studentisierten Residuen auf der vertikalen Achse und den Zeilennummern auf der horizontalen Achse ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Plot Studentized Residual by Row( 1 );

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für den Mittelwert, wie sie von dem spezifizierten Modell berechnet werden.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Residuen, bei denen es sich um die beobachteten Zielgrößenwerte minus ihrer Vorhersagewerte handelt.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Residuals;

```

#### Std Dev Formula

**Syntax:** obj &lt;&lt; Std Dev Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für die Standardabweichung, wie sie von dem spezifizierten Modell berechnet werden.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Std Dev Formula;

```

#### Std Error of Individual

**Syntax:** obj &lt;&lt; Std Error of Individual

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Standardfehler der Vorhersagewerte der Einzelwerte.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Standardfehler der Vorhersagewerte.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Std Error of Predicted;

```

#### Studentized Residuals

**Syntax:** obj &lt;&lt; Studentized Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die Werte in der neuen Spalte sind die Residuen dividiert durch ihren Standardfehler.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Studentized Residuals;

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet interaktive Wirkungsflächen für die Zielgröße und die Standardabweichung der Zielgröße ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Surface Profiler( 1 );

```

#### Variance Formula

**Syntax:** obj &lt;&lt; Variance Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für die Varianz, wie sie von dem spezifizierten Modell berechnet werden.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Variance Formula;

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit LogVariance

### Elementmeldungen

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Model Dialog;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet interaktive Wirkungsflächen für die Zielgröße und die Standardabweichung der Zielgröße ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Surface Profiler( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Report View( "Summary" );

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Zugehörige Konstruktoren

#### Fit LogVariance

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**Beschreibung:** Passt ein Modell sowohl für den Mittelwert als auch für die Varianz einer stetigen Zielgrößenvariablen an. Sie können verschiedene Sätze von Effekten für die beiden Modelle angeben.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);

```

## Fit Manova > Effect

### Elementmeldungen

#### Centroid Plot

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Centroid Plot( state=0|1 )))

**Beschreibung:** Blendet eine Tabelle der Centroid-Werte und ein Diagramm der Centroiden (multivariate Kleinste-Quadrate-Mittelwerte) auf den ersten beiden aus dem Testraum gebildeten kanonischen Variablen ein oder aus. Hinweis: Der Achsenabschnittsterm wird als Effect[0] angegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

#### Contrast

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Contrast( [ l1 l2 l3 ... ] )))

**Beschreibung:** Führt einen benutzerdefinierten F-Test für die statistischen Kontraste von Behandlungsstufen für einen Effekt im Modell durch. Geben Sie die Kontraste als Vektorargument an. Hinweis: Der Achsenabschnittsterm wird als Effect[0] angegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

#### Save Canonical Scores

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Save Cannonical Scores

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die kanonischen Scores für den angegebenen Effekt. Hinweis: Der Achsenabschnittsterm wird als Effect[0] angegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

#### Test Details

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Test Details( state=0|1 )))

**Beschreibung:** Blendet kanonische Details über den Test für den angegebenen Effekt ein oder aus. Hinweis: Der Achsenabschnittsterm wird als Effect[0] angegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### Elementmeldungen

#### Custom Test

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; ))

**Beschreibung:** Führt einen benutzerdefinierten F-Test durch, in dem die verschiedenen Effekte im Modell gegenübergestellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ), Response Function( "Contrast" ) ));Wait( 0 );obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

#### Effect

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; effect options))

**Beschreibung:** Ermöglicht Ihnen, Meldungen an einen bestimmten Effekt innerhalb einer bestimmten Zielgröße im Berichtsfenster zu senden. Weitere Informationen über Meldungen, die an einen Effekt gesendet werden können, finden Sie im Skriptindex unter Objekte > Modell anpassen > Manova anpassen > Effekt. Hinweis: Der Achsenabschnittsterm wird als Effect[0] angegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

### Elementmeldungen

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Model Dialog;

```

#### Response Function

**Syntax:** obj &lt;&lt; Response Function( matrix type, &lt;Univariate Tests Also&gt; )

**Beschreibung:** Gibt den Matrixtyp für die Zielgrößenfunktion an. Diese Matrix ist die M-Matrix, deren Spalten einen Satz von Transformationsvariablen für die multivariate Analyse definieren. Das optionale Argument „Auch univariate Tests“ gibt an, dass der Bericht adjustierte und nicht adjustierte univariate Tests mit wiederholten Messungen und multivariate Tests enthält.

**Grundlegendes Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Response Function( "Sum" );

```

**Univariate Tests einschließen**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);Wait( 0 );obj << Response Function( "Contrast", Univariate Tests Also );

```

#### Save Discrim

**Syntax:** obj &lt;&lt; Save Discrim

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neue Spalten enthalten die Mahalanobis-Distanzen, die Wahrscheinlichkeit der Zugehörigkeit zu jeder Stufe des Effekts und die vorhergesagte Stufe mit der größten Wahrscheinlichkeit. Diese Option ist nur verfügbar, wenn ein kategorialer Effekt im Modell vorhanden ist.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Fit Model(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Effects( :Species ),	Personality( "Manova" ),	Run);obj << Save Discrim;

```

#### Save Predicted

**Syntax:** obj &lt;&lt; Save Predicted

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die Vorhersagewerte für jede Zielgröße im Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Predicted;

```

#### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten Residuen für jede Zielgröße im Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Residuals;

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Manova

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**Beschreibung:** Passt ein Modell an, bei dem mehrere stetige Zielgrößenvariablen beteiligt sind. Zu den Techniken gehören multivariate Varianzanalyse, wiederholte Messungen, Diskriminanzanalyse und kanonische Korrelationen.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);

```

## Fit Mixed

### Elementmeldungen

#### Actual by Conditional Predicted Plot

**Syntax:** obj &lt;&lt; Actual by Conditional Predicted Plot( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt ein Diagramm der tatsächlichen Werte im Vergleich zu den Werten, die vom Modell vorhergesagt werden, wobei die zufälligen Effekte berücksichtigt werden. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Actual by Conditional Predicted Plot( 0 ) ));Wait( 1 );obj << Actual by Conditional Predicted Plot( 1 );

```

#### Actual by Predicted Plot

**Syntax:** obj &lt;&lt; Actual by Predicted Plot( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt ein Diagramm der tatsächlichen Werte im Vergleich zu den Werten, die vom Modell vorhergesagt werden, ohne die zufälligen Effekte zu berücksichtigen. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Actual by Predicted Plot( 0 ) ));Wait( 1 );obj << Actual by Predicted Plot( 1 );

```

#### Between-Within Degrees of Freedom

**Syntax:** obj &lt;&lt; Between-Within Degrees of Freedom( state=0|1)

**Beschreibung:** Ersetzt die Standardfehler im gesamten Bericht durch unbereinigte Schätzwerte und die Freiheitsgrade auf Zwischen-Innerhalb basierende. Um Zwischen-Innerhalb Freiheitsgrade in einem Bericht über Mehrfachvergleiche zu verwenden, müssen Sie diese Option auswählen, bevor Sie einen Bericht über Mehrfachvergleiche hinzufügen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Run);Wait( 1 );obj << "Between-Within Degrees of Freedom"n( 1 );

```

#### Compare Slopes

**Syntax:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Beschreibung:** Blendet einen Bericht ein oder aus, mit dem Sie die Steigungen der einzelnen Stufen des Wechselwirkungseffekts in einem ANCOVA-Modell (Kovarianzanalyse) vergleichen können. Diese Option ist nur verfügbar, wenn es einen nominalen Term, einen stetigen Term und deren Wechselwirkungseffekt für die festen Effekte gibt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = dt << Fit Model(	Y( :Calories ),	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),	Random Effects( :Manufacturer ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Compare Slopes(	Effect( :Sugars * :Fiber Gr ),	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ));

```

#### Conditional Contour Profiler

**Syntax:** obj &lt;&lt; Conditional Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse der bedingten Zielgröße grafisch für jeweils zwei Faktoren ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei stetige Effekte und mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Contour Profiler( 1 );

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; Conditional Mean CI

**Beschreibung:** Speichert zwei neue Spalten in der Datentabelle. Die neuen Spalten enthalten die untere und obere Konfidenzgrenze für den erwarteten Wert der bedingten Vorhersage. Die Konfidenzintervalle enthalten Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Variety * :Moisture ),	Personality( "Mixed Model" ),	Run);obj << Conditional Mean CI;

```

#### Conditional Mixture Profiler

**Syntax:** obj &lt;&lt; Conditional Mixture Profiler( state=0|1 )

**Beschreibung:** Blendet eine Mischungsanalyse ein oder aus, die die Konturen der bedingten Zielgröße in einem ternären Diagramm anzeigt. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält und wenn das Mischungseffektattribut auf drei oder mehr Faktoren im Modell angewendet wird oder wenn die Mischungseigenschaft auf drei oder mehr Faktorspalten angewendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Mixture Profiler( 1 );

```

#### Conditional Prediction Formula

**Syntax:** obj &lt;&lt; Conditional Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel für den bedingten Mittelwert. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Conditional Prediction Formula;

```

#### Conditional Predictions

**Syntax:** obj &lt;&lt; Conditional Predictions

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für den bedingten Mittelwert. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Conditional Predictions;

```

#### Conditional Profiler

**Syntax:** obj &lt;&lt; Conditional Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die bedingte Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Profiler( 1 );

```

#### Conditional Residual Plots

**Syntax:** obj &lt;&lt; Conditional Residual Plots( state=0|1 )

**Beschreibung:** Blendet Residuendiagramme ein oder aus, die die Modellanpassung bewerten, wobei die zufälligen Effekte berücksichtigt werden. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Residual Plots( 1 );

```

#### Conditional Residuals

**Syntax:** obj &lt;&lt; Conditional Residuals

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für die bedingten Residuen in der Form der beobachteten Zielgrößenwerte minus der Vorhersageformel.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Conditional Residuals;

```

#### Conditional Surface Profiler

**Syntax:** obj &lt;&lt; Conditional Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm der bedingten Zielgröße ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei Effekte und mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Surface Profiler( 1 );

```

#### Containment Degrees of Freedom

**Syntax:** obj &lt;&lt; Containment Degrees of Freedom( state=0|1 )

**Beschreibung:** Ersetzt die Standardfehler im gesamten Bericht durch unbereinigte Schätzwerte und auf Containment basierende Freiheitsgrade. Um Containment-Freiheitsgrade in einem Bericht über Mehrfachvergleiche zu verwenden, müssen Sie diese Option auswählen, bevor Sie einen Bericht über Mehrfachvergleiche hinzufügen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fixed Effects Tests( 0 ) ));Wait( 1 );obj << Containment Degrees of Freedom( 1 );

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse der marginalen Zielgröße grafisch für jeweils zwei Faktoren ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei stetige feste Effekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Contour Profiler( 1 );

```

#### Correlation of Fixed Effects

**Syntax:** obj &lt;&lt; Correlation of Fixed Effects( state=0|1 )

**Beschreibung:** Blendet die Korrelationsmatrix für die festen Effekte im Modell ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Correlation of Fixed Effects( 1 );

```

#### Covariance of All Parameters

**Syntax:** obj &lt;&lt; Covariance of All Parameters( state=0|1 )

**Beschreibung:** Blendet die Kovarianzmatrix für alle Effekte im Modell ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Covariance of All Parameters( 1 );

```

#### Covariance of Covariance Parameters

**Syntax:** obj &lt;&lt; Covariance of Covariance Parameters( state=0|1 )

**Beschreibung:** Blendet die Kovarianzmatrix für die zufälligen Effekte im Modell ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Covariance of Covariance Parameters( 1 );

```

#### Covariance of Fixed Effects

**Syntax:** obj &lt;&lt; Covariance of Fixed Effects( state=0|1 )

**Beschreibung:** Blendet die Kovarianzmatrix für die festen Effekte im Modell ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Covariance of Fixed Effects( 1 );

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass keine einzelnen Modellberichte angezeigt werden und dass sie nach der Anpassung aus dem Speicher entfernt werden. Wenn es viele Tausend Zielgrößen gibt, verringert diese Option die Rechenzeit und spart Speicherplatz. Verwenden Sie diese Option mit der Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den angepassten Modellen zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Mixed Model" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Empirical Standard Errors

**Syntax:** obj &lt;&lt; Empirical Standard Errors( state=0|1 )

**Beschreibung:** Ersetzt die Standardfehler im gesamten Bericht durch Sandwich-Schätzwerte. Um Sandwich-Schätzwerte in einem Bericht für multiple Vergleiche zu verwenden, müssen Sie diese Option auswählen, bevor Sie einen Bericht für multiple Vergleiche hinzufügen.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Empirical Standard Errors( 1 );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run( Empirical Standard Errors( 1 ) ));Wait( 1 );obj << Multiple Comparisons(	Effect( :species ),	Comparisons with Control( 1, Control Level( "species:COYOTE" ) ));

```

#### Fit Statistics

**Syntax:** obj &lt;&lt; Fit Statistics( state=0|1 )

**Beschreibung:** Blendet einen Bericht für die Modellanpassungsstatistiken ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fit Statistics( 0 ) ));Wait( 1 );obj << Fit Statistics( 1 );

```

#### Fixed Effects Parameter Estimates

**Syntax:** obj &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet eine Tabelle der Parameterschätzwerte bei Modellen mit festen Effekten ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fixed Effects Parameter Estimates( 0 ) ));Wait( 1 );obj << Fixed Effects Parameter Estimates( 1 );

```

#### Fixed Effects Tests

**Syntax:** obj &lt;&lt; Fixed Effects Tests( state=0|1 )

**Beschreibung:** Blendet die Tests der festen Effekte ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fixed Effects Tests( 0 ) ));Wait( 1 );obj << Fixed Effects Tests( 1 );

```

#### Homogeneity of Variance Test

**Syntax:** obj &lt;&lt; Homogeneity of Variance Test( state=0|1 )

**Beschreibung:** Berechnet einen Test auf Varianzhomogenität über die angegebene Gruppierungsvariable.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Repeated Effects( :Tenderizer ),	Repeated Structure( "Unequal Variances" ),	Run);Wait( 1 );obj << Homogeneity of Variance Test( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval

**Beschreibung:** Speichert zwei neue Spalten in der Datentabelle. Die neuen Spalten enthalten Konfidenzgrenzen für Einzelwerte der Zielgrößen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Variety * :Moisture ),	Personality( "Mixed Model" ),	Run);obj << Indiv Confidence Interval;

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Beschreibung:** Erzeugt einen vorhergesagten X-Wert und ein Konfidenzintervall basierend auf den angegebenen Werten von Y und allen anderen Faktoren.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

#### Linear Combination of Variance Components

**Syntax:** obj &lt;&lt; Linear Combination of Variance Components( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Beschreibung:** Zeigt einen Bericht an, in dem Sie die Konfidenzintervalle für lineare Kombinationen von Varianzkomponenten berechnen können. Diese Option ist nur verfügbar, wenn es G-Seiten-Effekte gibt.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects,	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),	NoBounds( 0 ),	Personality( "Mixed Model" ),	Run(		Repeated Effects Covariance Parameter Estimates( 0 ),		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )	));

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval

**Beschreibung:** Speichert zwei neue Spalten in der Datentabelle. Die neuen Spalten enthalten die untere und obere Konfidenzgrenze für die mittlere Zielgröße.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Variety * :Moisture ),	Personality( "Mixed Model" ),	Run);obj << Mean Confidence Interval;

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Beschreibung:** Blendet eine Mischungsanalyse ein oder aus, die die Konturen der marginalen Zielgröße in einem ternären Diagramm anzeigt. Diese Option ist nur verfügbar, wenn das Mischungseffektattribut auf drei oder mehr Faktoren im Modell angewendet wird oder wenn die Mischungseigenschaft auf drei oder mehr Faktorspalten angewendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);obj << Model Dialog;

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; )

**Beschreibung:** Erzeugt Schätzwerte der Kleinste-Quadrate-Mittelwerte oder benutzerdefinierte Schätzwerte. Mit diesen Schätzwerten können Sie Vergleiche mit dem Gesamtmittelwert, Vergleiche mit Kontrolle oder paarweise Vergleiche durchführen. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n	),	Random Effects( :Patient[:Treatment] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Treatment ),	Comparisons with Control( 1, Control Level( "Treatment:Control" ) ));

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel für den marginalen Mittelwert.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die Spalten enthalten Formeln für die Vorhersagen und Konfidenzgrenzen. Die von dieser Option erstellten Grenzwertspalten enthalten Eigenschaften, die von der Vorhersageanalyse verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Prediction and Interval Formulas;Wait( 1 );Profiler( Y( :Pred Formula Yield 2 ) );

```

#### Predictions

**Syntax:** obj &lt;&lt; Predictions

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Vorhersagewerte für die Randmittelwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Predictions;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die marginale Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Profiler( 1 );

```

#### Random Coefficients

**Syntax:** obj &lt;&lt; Random Coefficients( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Schätzwerte für die zufälligen Koeffizienten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Random Coefficients( 0 ) ));Wait( 1 );obj << Random Coefficients( 1 );

```

#### Random Effects Covariance Parameter Estimates

**Syntax:** obj &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet eine Tabelle der Parameterschätzwerte der Kovarianz bei Modellen mit zufälligen Effekten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Random Effects Covariance Parameter Estimates( 0 ) ));Wait( 1 );obj << Random Effects Covariance Parameter Estimates( 1 );

```

#### Random Effects Predictions

**Syntax:** obj &lt;&lt; Random Effects Predictions( state=0|1 )

**Beschreibung:** Blendet eine Tabelle der Vorhersagen der zufälligen Effekte ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Random Effects Predictions( 1 );

```

#### Repeated Effects Covariance Parameter Estimates

**Syntax:** obj &lt;&lt; Repeated Effects Covariance Parameter Estimates( state=0|1 )

**Beschreibung:** Blendet eine Tabelle der Parameterschätzwerte der Kovarianz bei Modellen mit Messwiederholungseffekten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen Messwiederholungseffekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n	),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Personality( "Mixed Model" ),	Run( Repeated Effects Covariance Parameter Estimates( 0 ) ));Wait( 1 );obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

#### Repeated Measures Covariance Diagnostics

**Syntax:** obj &lt;&lt; Repeated Measures Covariance Diagnostics( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der Diagnosewerkzeuge enthält, die bei der Bestimmung der in Frage kommenden Kovarianzstrukturen für die Messwiederholungsanalyse helfen. Diese Option ist nur verfügbar bei Modellen, die eine unstrukturierte Kovarianzstruktur mit Messwiederholungen angeben.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Run);Wait( 1 );obj << Repeated Measures Covariance Diagnostics( 1 );

```

#### Residual Plots

**Syntax:** obj &lt;&lt; Residual Plots( state=0|1 )

**Beschreibung:** Blendet Residuendiagramme ein oder aus, die die Modellanpassung bewerten, ohne die zufälligen Effekte zu berücksichtigen. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Residual Plots( 1 );

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Residuen, bei denen es sich um die beobachteten Zielgrößenwerte minus ihrer vorhergesagten Randmittelwerte handelt.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Residuals;

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Speichert die einzelnen Modellergebnisse über viele Zielgrößen in Datentabellen. Die Inhalte und Anzahl von Ausgabedatentabellen sind vom anzupassenden Modell abhängig.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Mixed Model" ),	Results in Data Tables( 1 ),	Run);

```

#### Save Simulation Formula

**Syntax:** obj &lt;&lt; Save Simulation Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte kann verwendet werden, um zufällige Zielgrößenwerte aus dem angepassten Modell zu erstellen. Sie können die Formelspalte mit der Funktion „Simulieren“ in JMP Pro verwenden. Diese Option ist nicht verfügbar, wenn eine Nach-Variable verwendet wird. Verwenden Sie Teildatentabellen, wenn Simulationsformeln für Nach-Gruppen notwendig sind.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Save Simulation Formula;

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; Sequential Tests( state=0|1 )

**Beschreibung:** Blendet den Bericht über sequentielle Tests (Typ 1) ein oder aus, der die Quadratsummen enthält, wenn die Effekte dem Modell sequentiell hinzugefügt werden. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Sequential Tests( 1 );

```

#### Show Sqrt Variance Component

**Syntax:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Beschreibung:** Zeigt die Spalte „Wurzel der Varianzkomponente“ im Bericht „REML-Varianzkomponentenschätzer“ an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntax:** obj &lt;&lt; Show VIF( state=0|1 )

**Beschreibung:** Blendet die Werte des Varianzinflationsfaktors (VIF) im Register der Effektcodierung im Bericht der Parameterschätzwerte bei Modellen mit festen Effekten ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Show VIF( 1 );

```

#### Stability Analysis

**Syntax:** obj &lt;&lt; Stability Analysis

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );obj = dt << Fit Model(	Y( :"Concentration (mg/Kg)"n ),	Effects( :Time ),	Random Effects( :Batch Number, :Batch Number * :Time ),	NoBounds( 0 ),	Personality( "Mixed Model" ),	Run( Repeated Effects Covariance Parameter Estimates( 0 ) ));obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

#### Standard Error of Conditional Predicted

**Syntax:** obj &lt;&lt; Standard Error of Conditional Predicted

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Standardfehler der bedingten vorhergesagten Mittelwerte. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Standard Error of Conditional Predicted;

```

#### Standard Error of Predicted

**Syntax:** obj &lt;&lt; Standard Error of Predicted

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Standardfehler der vorhergesagten Randmittelwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Standard Error of Predicted;

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass die einzelnen Modellberichte ausgeblendet werden. Wenn es Tausende von Zielgrößen gibt, verringert diese Option die Rechenzeit. Die Anpassungsobjekte und einige Menüelemente sind weiterhin verfügbar. Verwenden Sie die Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den Modellberichten zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Mixed Model" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm der marginalen Zielgröße ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei Effekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Surface Profiler( 1 );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( &lt;X( columns )&gt;, &lt;Model 1, Model 2, ...&gt; )

**Beschreibung:** Blendet ein Variogramm ein oder aus, das die Veränderung der Kovarianz mit zunehmender Distanz zwischen den Beobachtungen darstellt. Wenn die Residuenstruktur ausgewählt ist, können Sie die Spalten auswählen, die als zeitliche oder räumliche Koordinaten verwendet werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );obj = dt << Fit Model(	Y( :Ozone Concentration ),	Effects,	Center Polynomials( 0 ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Mixed

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Random Effects( columns ), Repeated Effects( columns ), Repeated Structure( type ), Personality( "Mixed Model" ) )

**Beschreibung:** Passt ein lineares gemischtes Modell mithilfe von REML für eine Vielzahl von komplexen Kovarianzstrukturen an. Diese Modelle können für zufällige Koeffizienten, Messwiederholungen, Split-Plots, räumliche Daten und Daten mit mehreren korrelierenden Zielgrößen verwendet werden.

**Modell mit Messwiederholungen**

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Run);

```

**Modell mit zufälligen Blöcken**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = dt << Fit Model(	Y( :Calories ),	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),	Random Effects( :Manufacturer ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Run);

```

**Modell mit zufälligen Koeffizienten**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());

```

**Räumliches Modell**

```jsl

dt = Open( "$SAMPLE_DATA/Uniformity Trial.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects,	Center Polynomials( 0 ),	Personality( "Mixed Model" ),	Repeated Effects( :Row, :Column ),	Repeated Structure( "Spatial" ),	Repeated Structure Type( "Spherical" ),	Run);

```

**Split-Plot-Modell**

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);

```

## Fit Nominal Logistic

### Elementmeldungen

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Beschreibung:** Blendet die Konfidenzintervalle der Profil-Likelihood (1 - Anteil)% für die Modellparameter ein oder aus. Das Anteilsargument übersteuert das Alpha-Niveau, das beim Start der Plattform festgelegt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Confidence Intervals( 0.01 );Wait( 1 );obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**Syntax:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Beschreibung:** Zeigt eine Kreuztabellenmatrix der beobachteten und vorhergesagten Zielgrößen an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt. Nur verfügbar, wenn das Modell mehr als einen stetigen Faktor enthält.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Fit Model(	Y( :Species ),	Effects(		:Sepal length, :Sepal width, :Petal length, :Petal width,		:Sepal length * :Petal width, :Petal width * :Petal width	),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Decision Threshold

**Syntax:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**Beschreibung:** Blendet die Verteilung der angepassten Wahrscheinlichkeiten und die Tabellen der beobachteten gegenüber den vorhergesagten Werten für jedes Modell ein oder aus. Sie können die Wahrscheinlichkeitsschwelle ändern, um zu untersuchen, wie sich unterschiedliche Schwellenwerte auf die Klassifikationsergebnisse auswirken.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass keine einzelnen Modellberichte angezeigt werden und dass sie nach der Anpassung aus dem Speicher entfernt werden. Wenn es viele Tausend Zielgrößen gibt, verringert diese Option die Rechenzeit und spart Speicherplatz. Verwenden Sie diese Option mit der Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den angepassten Modellen zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**Syntax:** obj &lt;&lt; Get Confusion Matrix Test

**Beschreibung:** Gibt die Konfusionsmatrix für den Testsatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :BAD ),	Effects(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**Syntax:** obj &lt;&lt; Get Confusion Matrix Training

**Beschreibung:** Gibt die Konfusionsmatrix für den Trainingssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**Syntax:** obj &lt;&lt; Get Confusion Matrix Validation

**Beschreibung:** Gibt die Konfusionsmatrix für den Validierungssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**Syntax:** obj &lt;&lt; Get Confusion Rates Test

**Beschreibung:** Gibt die Konfusionsraten für den Testsatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :BAD ),	Effects(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**Syntax:** obj &lt;&lt; Get Confusion Rates Training

**Beschreibung:** Gibt die Konfusionsraten für den Trainingssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**Syntax:** obj &lt;&lt; Get Confusion Rates Validation

**Beschreibung:** Gibt die Konfusionsraten für den Validierungssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, den Sie im SAS Model Manager registrieren können.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);code = obj << Get MM SAS Data Step;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Get Measures;

```

#### Get Probability Formulas

**Syntax:** obj &lt;&lt; Get Probability Formulas

**Beschreibung:** Gibt ein Skript zurück, mit dem Wahrscheinlichkeitsformeln erstellt werden können.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, mit dem Sie Scores für einen neuen Datensatz erzeugen können.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);code = obj << Get SAS Data Step;

```

#### Indicator Parameterization Estimates

**Syntax:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Beschreibung:** Blendet den Bericht der Parametrisierung der Indikatorfunktion ein oder aus. Dieser Bericht enthält Parameterschätzer für das Modell, bei dem nominale Spalten mit Indikatorparametrisierung (SAS GLM) kodiert und als stetig behandelt werden.

```jsl

dt = Open( "$Sample_Data/Detergent.jmp" );obj = dt << Fit Model(	Freq( :count ),	Y( :brand ),	Effects( :softness, :previous use, :temperature ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Indicator Parameterization Estimates( 1 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Beschreibung:** Erzeugt einen vorhergesagten X-Wert und ein Konfidenzintervall basierend auf den angegebenen Werten von Y und allen anderen Faktoren.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

#### Lift Curve

**Syntax:** obj &lt;&lt; Lift Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Beschreibung:** Blendet Likelihood-Verhältnistests für jeden Effekt ein oder aus. Jeder Test vergleicht die Log-Likelihood für das angepasste Modell mit der Log-Likelihood für das Modell, das einen Effekt entfernt.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Likelihood Ratio Test( 1 );

```

#### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Beschreibung:** Ermöglicht Ihnen, die Farbe der Kurven im Diagramm auszuwählen.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 1 );obj << Line Color( "Magenta" );

```

#### Logistic Plot

**Syntax:** obj &lt;&lt; Logistic Plot( state=0|1 )

**Beschreibung:** Blendet den Bericht „Logistisches Diagramm“ ein oder aus. Nur verfügbar, wenn das Modell aus einem einzigen stetigen Effekt besteht. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Logistic Plot( 0 );Wait( 1 );obj << Logistic Plot( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Model Dialog;

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; Odds Ratios( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Chancenverhältnisse ein oder aus, der die Chancenverhältnisse je Einheit und die Chancenverhältnisse je Bereich enthält. Nicht verfügbar für nominale Zielgrößen mit mehr als zwei Stufen.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Odds Ratios( 1 );

```

#### Positive Level

**Syntax:** obj &lt;&lt; Positive Level

**Beschreibung:** Legt den Schwellenwert für die Klassifikation als positiv fest, der dann in den ROC-Kurven verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Positive Level( "Cured" );obj << ROC Curve( 1 );

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus, das für jede Stufe der Zielgrößenvariable eine Kurve enthält. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Positive Level( "Cured" );Wait( 0 );obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die die angepassten Werte für eine bestimmte Zielgrößenwahrscheinlichkeit anzeigt, wenn die Werte der Faktoren im Modell geändert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Publish Probability Formulas

**Syntax:** obj &lt;&lt; Publish Probability Formulas

**Beschreibung:** Erstellt Wahrscheinlichkeitsformeln und veröffentlicht sie als Formelspaltenskript im Formeldepot.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Publish Probability Formulas;

```

#### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität). Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Positive Level( "Cured" );Wait( 0 );obj << ROC Curve( 1 );

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Speichert die einzelnen Modellergebnisse über viele Zielgrößen in Datentabellen. Die Inhalte und Anzahl von Ausgabedatentabellen sind vom anzupassenden Modell abhängig.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Run);

```

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten Formeln für lineare Kombinationen der Zielgrößenstufen, Vorhersageformeln für die Zielgrößenstufen und eine Vorhersageformel, die die wahrscheinlichste Zielgröße angibt.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Probability Formula;

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im logistischen Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 1 );obj << Show Points( 0 );

```

#### Show Rate Curve

**Syntax:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**Beschreibung:** Zeigt die Anteilskurve im logistischen Diagramm an oder blendet sie aus. Die Anteilskurve ist nur nützlich, wenn Sie für jeden Wert der X-Variablen mehrere Punkte haben.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 1 );obj << Show Rate Curve( 1 );

```

#### Specify Profit Matrix

**Syntax:** obj &lt;&lt; Specify Profit Matrix( matrix, level1, level2, ... )

**Beschreibung:** Ermöglicht Ihnen, Gewinne oder Kosten in Zusammenhang mit korrekten oder inkorrekten Klassifikationsentscheidungen anzugeben.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Binary ),	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass die einzelnen Modellberichte ausgeblendet werden. Wenn es Tausende von Zielgrößen gibt, verringert diese Option die Rechenzeit. Die Anpassungsobjekte und einige Menüelemente sind weiterhin verfügbar. Verwenden Sie die Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den Modellberichten zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Beschreibung:** Blendet Chi-Quadrat-Testkenngrößen und p-Werte für Wald-Tests dafür, ob jeder Parameter Null ist, ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Wald Tests( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Nominal Logistic

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**Beschreibung:** Passt ein logistisches Regressionsmodell von nominalen Zielgrößenkategorien sowohl für stetige als auch für kategoriale Prädiktoren an.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);

```

## Fit Ordinal Logistic

### Elementmeldungen

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Beschreibung:** Blendet die Konfidenzintervalle der Profil-Likelihood (1 - Anteil)% für die Modellparameter ein oder aus. Das Anteilsargument übersteuert das Alpha-Niveau, das beim Start der Plattform festgelegt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Confidence Intervals( 0.01 );Wait( 1 );obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**Syntax:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Beschreibung:** Zeigt eine Kreuztabellenmatrix der beobachteten und vorhergesagten Zielgrößen an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt. Nur verfügbar, wenn das Modell mehr als einen stetigen Faktor enthält.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Job Satisfaction ),	Effects(		:Years at Current Employer, :Salary, :Single Status, :Age in Years,		:Age in Years * :Years at Current Employer	),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass keine einzelnen Modellberichte angezeigt werden und dass sie nach der Anpassung aus dem Speicher entfernt werden. Wenn es viele Tausend Zielgrößen gibt, verringert diese Option die Rechenzeit und spart Speicherplatz. Verwenden Sie diese Option mit der Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den angepassten Modellen zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),	Personality( "Ordinal Logistic" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**Syntax:** obj &lt;&lt; Get Confusion Matrix Test

**Beschreibung:** Gibt die Konfusionsmatrix für den Testsatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Fit Model(	Validation( :Validation 2 ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**Syntax:** obj &lt;&lt; Get Confusion Matrix Training

**Beschreibung:** Gibt die Konfusionsmatrix für den Trainingssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**Syntax:** obj &lt;&lt; Get Confusion Matrix Validation

**Beschreibung:** Gibt die Konfusionsmatrix für den Validierungssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**Syntax:** obj &lt;&lt; Get Confusion Rates Test

**Beschreibung:** Gibt die Konfusionsraten für den Testsatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Fit Model(	Validation( :Validation 2 ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**Syntax:** obj &lt;&lt; Get Confusion Rates Training

**Beschreibung:** Gibt die Konfusionsraten für den Trainingssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**Syntax:** obj &lt;&lt; Get Confusion Rates Validation

**Beschreibung:** Gibt die Konfusionsraten für den Validierungssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, den Sie im SAS Model Manager registrieren können.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);code = obj << Get MM SAS Data Step;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Get Measures;

```

#### Get Probability Formulas

**Syntax:** obj &lt;&lt; Get Probability Formulas

**Beschreibung:** Gibt ein Skript zurück, mit dem Wahrscheinlichkeitsformeln erstellt werden können.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, mit dem Sie Scores für einen neuen Datensatz erzeugen können.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);code = obj << Get SAS Data Step;

```

#### Lift Curve

**Syntax:** obj &lt;&lt; Lift Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Cheese.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :Cheese ),	Personality( "Ordinal Logistic" ),	Run);obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Beschreibung:** Blendet Likelihood-Verhältnistests für jeden Effekt ein oder aus. Jeder Test vergleicht die Log-Likelihood für das angepasste Modell mit der Log-Likelihood für das Modell, das einen Effekt entfernt.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Likelihood Ratio Tests( 1 );

```

#### Logistic Plot

**Syntax:** obj &lt;&lt; Logistic Plot( state=0|1 )

**Beschreibung:** Blendet den Bericht „Logistisches Diagramm“ ein oder aus. Nur verfügbar, wenn das Modell aus einem einzigen stetigen Effekt besteht. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Logistic Plot( 0 );Wait( 1 );obj << Logistic Plot( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Model Dialog;

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; Odds Ratios( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Chancenverhältnisse ein oder aus, der die Chancenverhältnisse je Einheit und die Chancenverhältnisse je Bereich enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus, das für jede Stufe der Zielgrößenvariable eine Kurve enthält. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die die angepassten Werte für eine bestimmte Zielgrößenwahrscheinlichkeit anzeigt, wenn die Werte der Faktoren im Modell geändert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Publish Probability Formulas

**Syntax:** obj &lt;&lt; Publish Probability Formulas

**Beschreibung:** Erstellt Wahrscheinlichkeitsformeln und veröffentlicht sie als Formelspaltenskript im Formeldepot.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Publish Probability Formulas;

```

#### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität). Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << ROC Curve( 1 );

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Speichert die einzelnen Modellergebnisse über viele Zielgrößen in Datentabellen. Die Inhalte und Anzahl von Ausgabedatentabellen sind vom anzupassenden Modell abhängig.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),	Personality( "Ordinal Logistic" ),	Results in Data Tables( 1 ),	Run);

```

#### Save Expected Value

**Syntax:** obj &lt;&lt; Save Expected Value

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die lineare Kombination aus den Zielgrößenwerten mit den angepassten Zielgrößenwahrscheinlichkeiten für jede Zeile und gibt den erwarteten Wert an.

```jsl

dt = Open( "$SAMPLE_DATA/Cheese.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :Cheese ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Expected Value;

```

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten Formeln für lineare Kombinationen der Zielgrößenstufen, Vorhersageformeln für die Zielgrößenstufen und eine Vorhersageformel, die die wahrscheinlichste Zielgröße angibt.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Probability Formula;

```

#### Save Quantiles

**Syntax:** obj &lt;&lt; Save Quantiles

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten heißen OrdQ.05, OrdQ.50 und OrdQ.95 und sie enthalten Werte, die die Quantile für die entsprechenden Wahrscheinlichkeiten anpassen.

```jsl

dt = Open( "$SAMPLE_DATA/Cheese.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :Cheese ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Quantiles;

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass die einzelnen Modellberichte ausgeblendet werden. Wenn es Tausende von Zielgrößen gibt, verringert diese Option die Rechenzeit. Die Anpassungsobjekte und einige Menüelemente sind weiterhin verfügbar. Verwenden Sie die Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den Modellberichten zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),	Personality( "Ordinal Logistic" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Beschreibung:** Blendet Chi-Quadrat-Testkenngrößen und p-Werte für Wald-Tests dafür, ob jeder Parameter Null ist, ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Wald Tests( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);

```

### Zugehörige Konstruktoren

#### Fit Ordinal Logistic

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**Beschreibung:** Passt ein logistisches Regressionsmodell von ordinalen Zielgrößenkategorien sowohl für stetige als auch für kategoriale Prädiktoren an.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);

```

## Fit Parametric Survival

### Elementmeldungen

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Beschreibung:** Zeigt die Matrix der Korrelationen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Beschreibung:** Zeigt die Matrix der Kovarianzen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Covariance of Estimates( 1 );

```

#### Distribution

**Syntax:** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Verteilung an, die bei der Modellierung der Zeit-bis-Ereignis-Zielgröße verwendet werden soll. Die Option „Alle Verteilungen“ passt alle verfügbaren Verteilungen an.

**Alle Verteilungen**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "All Distributions" ),	Censor( :censor ),	Run Model);

```

**Einzelne Verteilung**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Lognormal" ),	Censor( :censor ),	Run Model);

```

#### Distribution Plot by Level Combinations

**Syntax:** obj &lt;&lt; Distribution Plot by Level Combinations( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der drei geschachtelte Modelle basierend auf den Stufen der X-Variablen vergleicht. Dieser Bericht enthält drei Wahrscheinlichkeitsdiagramme zur Bewertung der Modellanpassung. Die Diagramme zeigen unterschiedliche Linien für jede Kombination der X-Stufen.

```jsl

dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );dt << Fit Model(	Censor( :Censor ),	Censor Code( "1" ),	Freq( :Weight ),	Y( :Hours ),	Effects( :x ),	Personality( "Parametric Survival" ),	Distribution( "Lognormal" ),	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), ));

```

#### Distribution Profiler

**Syntax:** obj &lt;&lt; Distribution Profiler( state=0|1 )

**Beschreibung:** Blendet ein Analysediagramm der kumulierten Verteilungsfunktion der Prädiktoren und der Zielgröße ein oder aus. Die Zielgröße wird in der Zelle ganz rechts angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Distribution Profiler( 1 );

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Estimate Quantile

**Syntax:** obj &lt;&lt; Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**Beschreibung:** Schätzt die Quantile für angegebene Effektwerte und Wahrscheinlichkeiten. Verwenden Sie einen Vektor, um mehr als einen Wert für einen Effekt oder mehr als einen Wahrscheinlichkeitswert anzugeben.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Estimate Quantile(	:Age = [55, 60],	:Diag Time = [8.77],	[0.5, 0.10, 0.05],	Alpha( 0.05 ));

```

#### Estimate Survival Probability

**Syntax:** obj &lt;&lt; Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**Beschreibung:** Schätzt die Ausfall- und Überlebenswahrscheinlichkeiten für angegebene Effektwerte und Zeitwerte. Verwenden Sie einen Vektor, um mehr als einen Wert für einen Effekt oder mehr als einen Zeitwert anzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Estimate Survival Probability(	:Age = [55, 60],	:Diag Time = [8.77],	[50, 100, 150],	Alpha( 0.05 ));

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Effect Names

**Syntax:** obj &lt;&lt; Get Effect Names

**Beschreibung:** Gibt die im Modell verwendeten Effektnamen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);n = obj << Get Effect Names;Show( n );

```

#### Get Effect PValues

**Syntax:** obj &lt;&lt; Get Effect PValues

**Beschreibung:** Gibt die p-Werte für jeden Effekt im Modell zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);p = obj << Get Effect PValues;Show( p );

```

#### Get Estimates

**Syntax:** obj &lt;&lt; Get Estimates

**Beschreibung:** Gibt die Parameterschätzwerte des Modells zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);e = obj << Get Estimates;Show( e );

```

#### Get Parameter Names

**Syntax:** obj &lt;&lt; Get Parameter Names

**Beschreibung:** Gibt die im Modell verwendeten Parameternamen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);n = obj << Get Parameter Names;Show( n );

```

#### Get Std Errors

**Syntax:** obj &lt;&lt; Get Std Errors

**Beschreibung:** Gibt die Standardfehler für die Parameterschätzwerte im Modell zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);std = obj << Get Std Errors;Show( std );

```

#### Hazard Profiler

**Syntax:** obj &lt;&lt; Hazard Profiler( state=0|1 )

**Beschreibung:** Blendet ein Analysediagramm ein oder aus, das die Ausfallrate als Funktion der Prädiktoren und der Zielgröße anzeigt. Die Zielgröße wird in der Zelle ganz rechts angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Hazard Profiler( 1 );

```

#### Likelihood Confidence Intervals

**Syntax:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**Beschreibung:** Gibt die Art der Konfidenzintervalle an, die in der Tabelle der Parameterschätzer angezeigt werden. Wenn diese Option ausgewählt ist, wird ein Profil-Likelihood-Konfidenzintervall angezeigt. Andernfalls wird ein Wald-Intervall angezeigt. Diese Option ist standardmäßig aktiviert, wenn die Berechnungszeit für die Profil-Likelihood-Konfidenzintervalle nicht groß ist.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Beschreibung:** Blendet Likelihood-Verhältnistests für jeden Effekt ein oder aus. Jeder Test vergleicht die Log-Likelihood für das angepasste Modell mit der Log-Likelihood für das Modell, das einen Effekt entfernt. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Model Dialog;

```

#### Publish Probability Formula

**Syntax:** obj &lt;&lt; Publish Probability Formula

**Beschreibung:** Erstellt eine Wahrscheinlichkeitsformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Publish Probability Formula;

```

#### Publish Quantile Formula

**Syntax:** obj &lt;&lt; Publish Quantile Formula( probability )

**Beschreibung:** Erstellt eine Quantilformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Publish Quantile Formula( 0.1 );

```

#### Quantile Profiler

**Syntax:** obj &lt;&lt; Quantile Profiler( state=0|1 )

**Beschreibung:** Blendet ein Analysediagramm ein oder aus, das die vorhergesagte Zielgröße als Funktion der Prädiktoren und des Quantils der kumulierten Verteilungsfunktion anzeigt. Das Quantil wird Ausfallwahrscheinlichkeit genannt und wird in der Zelle ganz rechts angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Quantile Profiler( 1 );

```

#### Residual Probability Plot

**Syntax:** obj &lt;&lt; Residual Probability Plot( state=0|1 )

**Beschreibung:** Blendet ein Wahrscheinlichkeitsdiagramm der standardisierten Residuen mit Konfidenzintervallen ein oder aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Residual Probability Plot( 1 );

```

#### Response versus Fitted Median

**Syntax:** obj &lt;&lt; Response versus Fitted Median( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Zielgrößen auf der vertikalen Achse und des angepassten Medians auf der horizontalen Achse ein oder aus.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Response versus Fitted Median( 1 );

```

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für die geschätzte Ausfallwahrscheinlichkeit.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Probability Formula;

```

#### Save Quantile Formula

**Syntax:** obj &lt;&lt; Save Quantile Formula( probability )

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für das geschätzte Quantil für den angegebenen Wahrscheinlichkeitswert.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Quantile Formula( 0.8 );

```

#### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Beschreibung:** Speichert eine oder zwei neue Spalten in der Datentabelle. Die Anzahl der Residuenspalten stimmt mit der Anzahl der Zeit-bis-Ereignis-Spalten im Modell überein.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Residuals;

```

#### Standardized Residuals versus Fitted Median

**Syntax:** obj &lt;&lt; Standardized Residuals versus Fitted Median( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der standardisierten Residuen auf der vertikalen Achse und des angepassten Medians auf der horizontalen Achse ein oder aus.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Standardized Residuals versus Fitted Median( 1 );

```

#### Survival Profiler

**Syntax:** obj &lt;&lt; Survival Profiler( state=0|1 )

**Beschreibung:** Blendet ein Analysediagramm der Lebensdauerfunktion der Prädiktoren und der Zielgröße ein oder aus. Die Zielgröße wird in der Zelle ganz rechts angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Survival Profiler( 1 );

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Beschreibung:** Blendet Chi-Quadrat-Testkenngrößen und p-Werte für Wald-Tests dafür, ob jeder Parameter Null ist, ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Wald Tests( 0 );Wait( 2 );obj << Wald Tests( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Parametric Survival

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Beschreibung:** Passt ein allgemeines lineares Regressionsmodell an Lebensdauerzeiten an. Diese Modelle können für Lebensdauerzeiten verwendet werden, die als Funktion einer oder mehr erklärender Variablen ausgedrückt werden können. Berücksichtigt verschiedene Lebensdauerverteilungen und Zensierung.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);

```

## Fit Proportional Hazards

### Elementmeldungen

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Beschreibung:** Blendet den Bericht der Effektzusammenfassung ein oder aus, mit dem Sie die Effekte im Modell interaktiv aktualisieren können. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Beschreibung:** Gibt an, ob Logwertigkeitswerte und ihre entsprechenden p-Werte in der Tabelle „Effektzusammenfassung“ mithilfe der False Discovery Rate (FDR) adjustiert werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Hazard Ratios

**Syntax:** obj &lt;&lt; Hazard Ratios( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Ausfallratenverhältnisse“ für die Effekte an oder blendet ihn aus.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Hazard Ratios( 1 );

```

#### Likelihood Confidence Intervals

**Syntax:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**Beschreibung:** Gibt die Art der Konfidenzintervalle an, die in der Tabelle der Parameterschätzer angezeigt werden. Wenn diese Option ausgewählt ist, wird ein Profil-Likelihood-Konfidenzintervall angezeigt. Andernfalls wird ein Wald-Intervall angezeigt. Diese Option ist standardmäßig aktiviert, wenn die Berechnungszeit für die Profil-Likelihood-Konfidenzintervalle nicht groß ist.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Beschreibung:** Blendet Likelihood-Verhältnistests für jeden Effekt ein oder aus. Jeder Test vergleicht die Log-Likelihood für das angepasste Modell mit der Log-Likelihood für das Modell, das einen Effekt entfernt.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Model Dialog;

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Beschreibung:** Blendet Chi-Quadrat-Testkenngrößen und p-Werte für Wald-Tests dafür, ob jeder Parameter Null ist, ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Wald Tests( 0 );Wait( 2 );obj << Wald Tests( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);

```

### Zugehörige Konstruktoren

#### Fit Proportional Hazards

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Beschreibung:** Passt ein semiparametrisches Regressionsmodell (das Cox-Modell für Proportional Hazards) an, um den Effekt erklärender Variablen auf Lebensdauerzeiten zu bewerten, wobei Zensierung berücksichtigt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);

```

## Fit Response Screening

### Elementmeldungen

#### Effect Plots

**Syntax:** obj &lt;&lt; Effect Plots( state=0|1 )

**Beschreibung:** Blendet das FDR-PWert-Diagramm für Effekte und das FDR-Logwertigkeitsdiagramm nach Effektgröße ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Effect Plots( 0 ) ));Wait( 1 );obj << Effect Plots( 1 );

```

#### Effect Tests

**Syntax:** obj &lt;&lt; Effect Tests( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Effekttests an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Effect Tests( 0 ) ));Wait( 1 );obj << Effect Tests( 1 );

```

#### Force G Side

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**Beschreibung:** Erzwingt die Schätzung der zufälligen Effekte auf der G-Seite, auch wenn die Matrix der zufälligen Effekte mehr Spalten als Zeilen hat.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Response Screening" ),	Run( Force G Side ));

```

#### Force R Side

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**Beschreibung:** Erzwingt die Schätzung der zufälligen Effekte auf der R-Seite, auch wenn die Matrix der zufälligen Effekte mehr Zeilen als Spalten hat.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Y( :Trait1 ),	Run( Force R Side ));

```

#### Least Squares Means

**Syntax:** obj &lt;&lt; Least Squares Means( state=0|1 )

**Beschreibung:** Berechnet alle (marginalen) Kleinste-Quadrate-Mittelwerte.

```jsl

dt = Open( "$Sample_Data/Popcorn.jmp" );obj = dt << Fit Model(	Y( :yield ),	Effects(		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,		:popcorn * :oil amt * :batch	),	Personality( "Response Screening" ),	Run);Wait( 0 );obj << Least Squares Means( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Model Dialog;

```

#### Overall Plots

**Syntax:** obj &lt;&lt; Overall Plots( state=0|1 )

**Beschreibung:** Blendet das Gesamt-FDR-PWert-Diagramm und das Diagramm FDR-Logwertigkeit nach r² ein oder aus.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Overall Plots( 1 );

```

#### Overall Report

**Syntax:** obj &lt;&lt; Overall Report( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Gesamtanpassung an oder blendet sie aus.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);Wait( 0 );obj << Overall Report( 1 );

```

#### Save BLUPs

**Syntax:** obj &lt;&lt; Save BLUPs

**Beschreibung:** Erstellt eine neue Datentabelle, die die besten linearen unverzerrten Prädiktoren (BLUPs) für die zufälligen Effekte im Modell enthält.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Run);obj << Save BLUPs;

```

#### Save Conditional Predicted Values

**Syntax:** obj &lt;&lt; Save Conditional Predicted Values

**Beschreibung:** Speichert eine neue Spalte für jede Zielgröße in der Datentabelle. Die Spalte enthält die bedingten Vorhersagewerte, die mit den besten linearen unverzerrten Prädiktoren (BLUPs) für die Koeffizienten der zufälligen Effekte berechnet werden.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Run);obj << Save Conditional Predicted Values;

```

#### Save Conditional Prediction Formula

**Syntax:** obj &lt;&lt; Save Conditional Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte für jede Zielgröße in der Datentabelle. Die neue Spalte enthält eine Formel, die Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten einschließt. Nur verfügbar bei REML-Analysemethoden.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Run);obj << Save Conditional Prediction Formula;

```

#### Save Effect Tests

**Syntax:** obj &lt;&lt; Save Effect Tests

**Beschreibung:** Erstellt eine neue Datentabelle, die eine Zeile für jeden Effekttest enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Save Effect Tests;

```

#### Save Estimates

**Syntax:** obj &lt;&lt; Save Estimates

**Beschreibung:** Erstellt eine neue Datentabelle, die eine Zeile für jede Zielgrößenvariable und eine Spalte für jeden Modellterm enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Save Estimates;

```

#### Save LSMeans Differences

**Syntax:** obj &lt;&lt; Save LSMeans Differences

**Beschreibung:** Erstellt eine neue Datentabelle, die alle Differenzen der unterteilten Kleinste-Quadrate-Mittelwerte enthält.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );obj = dt << Fit Model(	Effects( :age, :sex, :age * :sex ),	Personality( "Response Screening" ),	Y( :height, :weight ),	Sliced LSMeans Differences( 1 ),	Run);obj << Save LSMeans Differences;

```

#### Save Least Squares Means

**Syntax:** obj &lt;&lt; Save Least Squares Means

**Beschreibung:** Erstellt eine neue Datentabelle, die alle Kleinste-Quadrate-Mittelwerte enthält.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );obj = dt << Fit Model(	Y( :height, :weight ),	Effects( :age, :sex ),	Personality( "Response Screening" ),	Run);obj << Save Least Squares Means;

```

#### Save Overall Fit

**Syntax:** obj &lt;&lt; Save Overall Fit

**Beschreibung:** Erstellt eine neue Datentabelle, die eine Zeile pro Zielgrößenvariable enthält. Für jede Y-Variable fassen die Spalten in der Tabelle die Informationen über die Modellanpassung zusammen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Save Overall Fit;

```

#### Save Predicted Values

**Syntax:** obj &lt;&lt; Save Predicted Values

**Beschreibung:** Speichert eine neue Spalte für jede Zielgröße in der Datentabelle. Jede Spalte enthält die Vorhersagewerte für die entsprechende Zielgröße.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Save Predicted Values ));

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte für jede Zielgröße in der Datentabelle. Jede Spalte enthält eine Vorhersagegleichung für die entsprechende Zielgröße.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Save Prediction Formula ));

```

#### Select Effects Where

**Syntax:** obj &lt;&lt; Select Effects Where( condition )

**Beschreibung:** Öffnet das Fenster „Auswahl nach Bedingung“, in dem Sie Zeilen in der Tabelle der Effekttests auswählen können, die der im Fenster „Auswahl nach Bedingung“ angegebenen jeweiligen Bedingung entsprechen.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Select Effects Where( FDR Logworth > 4 );

```

#### Select Responses for Selected Effects

**Syntax:** obj &lt;&lt; Select Responses for Selected Effects

**Beschreibung:** Wählt in der ursprünglichen Tabelle Zielgrößenspalten aus, die den ausgewählten Effekten entsprechen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run());obj << Select Effects Where( FDR Logworth > 4 );obj << Select Responses for Selected Effects;

```

#### Sliced LSMeans Differences

**Syntax:** obj &lt;&lt; Sliced LSMeans Differences( state=0|1 )

**Beschreibung:** Berechnet Tests, die alle Kleinste-Quadrate-Mittelwerte auf Haupteffekte und Schnitte von 2-Faktoren- und 3-Faktorenwechselwirkungen vergleichen.

```jsl

dt = Open( "$Sample_Data/Popcorn.jmp" );obj = dt << Fit Model(	Y( :yield ),	Effects(		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,		:popcorn * :oil amt * :batch	),	Personality( "Response Screening" ),	Run);Wait( 0 );obj << Sliced LSMeans Differences( 1 );

```

#### Unthreaded

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**Beschreibung:** Unterdrückt Multithreading über Zielgrößen (und beim Wechseln von Variablen).

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Y( :Trait1 ),	Run( Unthreaded ));

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Zugehörige Konstruktoren

#### Fit Response Screening

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**Beschreibung:** Automatisiert den Prozess der Durchführung von Tests für lineare Modelleffekte über eine große Anzahl von Zielgrößen. Testergebnisse und statistische Kenngrößen werden in Datentabellen und Diagrammen präsentiert. Die False Discovery Rate (FDR) schützt vor falschen Deklarationen von Signifikanz. Eine robuste Schätzmethode verringert die Empfindlichkeit von Tests gegenüber Ausreißern.

**Mit zufälligem Effekt anpassen**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	Effects( :Sex, :Disease Status ),	Random Effects( :Sample ),	Personality( "Response Screening" ),	Run( (Sliced LSMeans Differences( 1 )) ));

```

**Viele Spalten auf vier Prädiktoren anpassen**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);

```

**Viele Spalten mit Differenzen der aufgeteilten KQMittelwerte anpassen**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Father, :Mother, :Sex, :Disease Status ),	Personality( "Response Screening" ),	Run( (Sliced LSMeans Differences( 1 )) ));

```

**Viele Spalten mit Untergruppen anpassen**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Subgroup( :Father, :Mother, :Sex, :Disease Status ),	Run);

```

**Wenige Spalten mit vielen umgeschalteten Prädiktoren anpassen**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	Switch( Column Group( "Markers" ) ),	Effects( :Disease Status ),	Personality( "Response Screening" ),	Run);

```

## Fit Stepwise

### Elementmeldungen

#### All Possible Models

**Syntax:** obj &lt;&lt; All Possible Models( max_terms, max_models, &lt;Heredity Restriction( state=0|1 )&gt; )

**Beschreibung:** Passt alle möglichen Modelle bis zu den angegebenen Grenzen an und zeigt die besten Modelle für jede Anzahl von Termen. Geben Sie die maximale Anzahl Terme an, die in einem beliebigen Modell angepasst werden sollen. Geben Sie die maximale Anzahl von Modellergebnissen an, die für jede Anzahl von Modelltermen angezeigt werden sollen. Sie können die angezeigten Modelle auf diejenigen beschränken, die der Vererbung starker Effekte entsprechen. Die Option „All Possible Models“ ist nur bei stetigen Zielgrößen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << All Possible Models( 5, 10 );

```

#### Backward Step

**Syntax:** obj &lt;&lt; Backward Step

**Beschreibung:** Entfernt den Term mit dem größten p-Wert. Wenn die Stoppregel „Schwelle p-Wert“ ausgewählt ist, darf der Term auf dem von der Option „Wahrsch. zum Entfernen“ angegebenen Niveau nicht signifikant sein.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter All;Wait( 1 );obj << Backward Step;

```

#### Clear History

**Syntax:** obj &lt;&lt; Clear History

**Beschreibung:** Löscht den Schrittverlauf und setzt ihn zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Clear History;

```

#### Direction

**Syntax:** obj &lt;&lt; Direction( "Vorwärts"|"Rückwärts"|"Gemischt" )

**Beschreibung:** Gibt die Richtung an, die für die schrittweise Termauswahl verwendet wird. Die Richtung kann vorwärts, rückwärts oder eine Mischung aus beiden sein. Für die Option „Mixed direction“ muss die Stoppregel „Schwelle p-Wert“ ausgewählt sein.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Direction( "Mixed" );obj << Finish;

```

#### Enter

**Syntax:** obj &lt;&lt; Enter( term )

**Beschreibung:** Gibt einen Term ins Modell ein. Diese Option wirkt sich nicht auf gesperrte Terme aus.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter( :Runtime );

```

#### Enter All

**Syntax:** obj &lt;&lt; Enter All

**Beschreibung:** Fügt, wenn möglich, alle Terme ins Modell ein.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run( Direction( "Backward" ) ));obj << Enter All;

```

#### Export Model With Validation

**Syntax:** obj &lt;&lt; Export Model With Validation( state=0|1 )

**Beschreibung:** Fügt die Validierungsspalte zum Fenster „Modellspezifikation“ hinzu, wenn Sie die Option „Make Model“ auswählen. Diese Option führt das Modell auch mit der Validierungsspalte aus, wenn Sie die Option „Run Model“ auswählen. Diese Option ist nur verfügbar, wenn Sie eine Validierungsspalte angegeben haben. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Validation( :Validation ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Make Model;Wait( 1 );obj << Export Model With Validation( 0 );obj << Make Model;

```

#### Finish

**Syntax:** obj &lt;&lt; Finish

**Beschreibung:** Schließt den Termauswahlvorgang sofort ab. In Skripten wird die Option „Finish“ statt der Option „Go“ empfohlen.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;

```

#### Forward Step

**Syntax:** obj &lt;&lt; Forward Step

**Beschreibung:** Fügt den Term mit dem kleinsten p-Wert hinzu. Wenn die Stoppregel „Schwelle p-Wert“ ausgewählt ist, muss der Term auf dem von der Option „Prob to Enter“ angegebenen Niveau signifikant sein.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);Wait( 1 );obj << Forward Step;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Get Measures;

```

#### Get Prospectives

**Syntax:** obj &lt;&lt; Get Prospectives

**Beschreibung:** Gibt ein assoziatives Array zurück, das Schätzwerte und Konfidenzintervalle enthält. Für Terme, die im Modell enthalten sind, sind die Werte die aus dem aktuellen Modell abgerufenen Werte. Für Terme, die nicht im aktuellen Modell enthalten sind, sind die Werte die Schätzwerte und Konfidenzintervalle aus einem Modell, das den entsprechenden Term enthält.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Show(	obj << Enter( :Runtime );	obj << Get Prospectives;);

```

#### Go

**Syntax:** obj &lt;&lt; Go

**Beschreibung:** Startet eine Aufgabe im Hintergrund für den Termauswahlvorgang. In Skripten wird die Option „Finish“ statt der Option „Go“ empfohlen.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Go;

```

#### K-Fold Crossvalidation

**Syntax:** obj &lt;&lt; "K-Fold Crossvalidation"n( &lt;k&gt; )

**Beschreibung:** Führt eine k-fache Kreuzvalidierung im Variablenauswahlvorgang durch. Wenn diese Option ausgewählt ist, aktiviert sie die Stoppregel „Max. K-fach r²“ im Bedienfeld. Die k-fache Kreuzvalidierung in der Plattform „Schrittweise“ unterteilt die Stichprobe in k Teilmengen und verwendet die Teilmengen als Validierungssatz. Die Option „K-Fold Crossvalidation“ ist nur bei stetigen Zielgrößen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << "K-Fold Crossvalidation"n( 5 );obj << Finish;

```

#### Lock

**Syntax:** obj &lt;&lt; Lock( term )

**Beschreibung:** Sperrt einen Term in dem Modell ein oder aus dem Modell aus. Ein gesperrter Term, der sich nicht im Modell befindet, kann nicht ins Modell aufgenommen werden, und ein gesperrter Term, der sich im Modell befindet, kann nicht aus dem Modell entfernt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter( :Runtime );obj << Lock( :Runtime );

```

#### Make Model

**Syntax:** obj &lt;&lt; Make Model

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“ für das Modell, das in der Tabelle der aktuellen Schätzwerte angegeben ist. In Fällen, in denen es nominale oder ordinale Terme gibt, erzeugt die Option „Make Model“ temporäre Transformationsspalten, die Terme enthalten, die für das Modell benötigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Make Model;

```

#### Model Averaging

**Syntax:** obj &lt;&lt; Model Averaging( max_terms, AICc_cutoff )

**Beschreibung:** Ermöglicht Ihnen, die Anpassungen für eine Anzahl von Modellen zu mitteln, statt ein einzelnes bestes Modell auszuwählen.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Model Averaging( 5, .90 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Model Dialog;

```

#### Plot Criterion History

**Syntax:** obj &lt;&lt; Plot Criterion History( state=0|1 )

**Beschreibung:** Erstellt ein Diagramm von AICc und BIC im Vergleich zur Anzahl der Parameter.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Direction( "Mixed" );obj << Finish;obj << Plot Criterion History( 1 );

```

#### Plot RSquare History

**Syntax:** obj &lt;&lt; Plot RSquare History( state=0|1 )

**Beschreibung:** Erstellt ein Diagramm von r² Training und Validierung im Vergleich zur Anzahl der Parameter. Diese Option ist nur bei stetigen Zielgrößenmodellen mit Validierungsdaten verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << "K-Fold Crossvalidation"n( 5 );obj << Finish;obj << Plot RSquare History( 1 );

```

#### Prob to Enter

**Syntax:** obj &lt;&lt; Prob to Enter( number )

**Beschreibung:** Gibt den maximalen p-Wert an, den ein Effekt haben muss, um während eines Vorwärtsschritts ins Modell hinzugefügt zu werden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Prob to Enter( .20 );obj << Finish;

```

#### Prob to Leave

**Syntax:** obj &lt;&lt; Prob to Leave( number )

**Beschreibung:** Gibt den minimalen p-Wert an, den ein Effekt haben muss, um während eines Rückwärtsschritts aus dem Modell entfernt zu werden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Prob to Leave( .20 );obj << Enter All;obj << Direction( "Backward" );obj << Finish;

```

#### Remove

**Syntax:** obj &lt;&lt; Remove( term )

**Beschreibung:** Entfernt einen Term aus dem Modell. Diese Option wirkt sich nicht auf gesperrte Terme aus.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Remove( :RunPulse );

```

#### Remove All

**Syntax:** obj &lt;&lt; Remove All

**Beschreibung:** Entfernt alle Terme aus dem Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Remove All;

```

#### Rules

**Syntax:** obj &lt;&lt; Rules( "Kombinieren"|"Einschränken"|"Keine Regeln"|"Komplette Effekte"|"Komplette Effekte in Bezug auf die Vererbung" )

**Beschreibung:** Gibt die Regeln an, die angewendet werden, wenn das Modell eine Hierarchie von Termen enthält. Diese Option wird nur angezeigt, wenn Ihr Modell hierarchische Terme enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects(		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,		:RunPulse * :MaxPulse	),	Personality( "Stepwise" ),	Run);obj << Rules( "Whole Effects" );obj << Stopping Rule( "P-value Threshold" );obj << Direction( "Mixed" );obj << Finish;

```

#### Run Model

**Syntax:** obj &lt;&lt; Run Model

**Beschreibung:** Öffnet einen Bericht der gewöhnlichen kleinsten Quadrate für das Modell, das in der Tabelle der aktuellen Schätzwerte angegeben ist. In Fällen, in denen es nominale oder ordinale Terme gibt, erzeugt die Option „Run Model“ temporäre Transformationsspalten, die Terme enthalten, die für das Modell benötigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Run Model;

```

#### Step

**Syntax:** obj &lt;&lt; Step

**Beschreibung:** Führt den nächsten Schritt in der Termauswahl durch. Mit der Option „Step“ werden Terme einzeln vorwärts eingegeben oder Terme einzeln rückwärts entfernt.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);Wait( 1 );obj << Step;

```

#### Stop

**Syntax:** obj &lt;&lt; Stop

**Beschreibung:** Stoppt den automatischen Auswahlvorgang, der mit den Optionen „Go“ oder „Finish“ gestartet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Stop;

```

#### Stopping Rule

**Syntax:** obj &lt;&lt; Stopping Rule( "Schwelle p-Wert"|"Minimum AICc"|"Minimum BIC"|"Max. Validierung r²"|"Max. K-fach r²" )

**Beschreibung:** Gibt die Regel an, die verwendet wird, um den Termauswahlvorgang zu stoppen, wenn die Optionen „Go“ oder „Finish“ angegeben sind.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects(		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,		:RunPulse * :MaxPulse	),	Personality( "Stepwise" ),	Run Model( Stopping Rule( "Minimum AICc" ) ));obj << Finish;

```

#### Unlock

**Syntax:** obj &lt;&lt; Unlock( term )

**Beschreibung:** Entsperrt einen zuvor gesperrten Term im Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter( :Runtime );obj << Lock( :Runtime );Wait( 1 );obj << Unlock( :Runtime );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Stepwise(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;

```

### Zugehörige Konstruktoren

#### Fit Stepwise

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**Beschreibung:** Passt schrittweise Regressionsmodelle an, was die Variablenauswahl für gewöhnliche kleinste Quadrate und ordinal logistische Modelle sowie nominal logistische Modelle mit einer binären Zielgröße erleichtert.

**Alle möglichen Modelle**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Stepwise" ),	Run);obj << All Possible Models( 10, 5, Heredity Restriction( 1 ) );

```

**Kategoriale Prädiktoren**

```jsl

dt = Open( "$Sample_Data/Tablet Production.jmp" );obj = dt << Fit Model(	Y( :Dissolution ),	Effects(		:Mill Time, :Screen Size, :Mag. Stearate Supplier, :Lactose Supplier, :Sugar Supplier,		:Talc Supplier, :Blend Time, :Blend Speed, :Compressor, :Force, :Coating Supplier,		:Coating Viscosity, :Inlet Temp, :Exhaust Temp, :Spray Rate, :Atomizer Pressure	),	Personality( "Stepwise" ),	Run);obj << Finish;

```

**Modellmittelung**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Stepwise" ),	Run);obj << Model Averaging( 10, 0.95 );

```

**Vorwärtsauswahl**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;

```

**Wechselwirkungen, die die Effektvererbung respektieren**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Stepwise" ),	Run( Rules( "Whole Effects Respecting Heredity" ) ));obj << Finish;

```

## Fit Varcomp

### Elementmeldungen

#### Get Random Effect Names

**Syntax:** obj &lt;&lt; Get Random Effect Names

**Beschreibung:** Gibt die Namen der zufälligen Effekte zurück. Verfügbar bei REML-Analysemethoden.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);vn = obj << Get Random Effect Names;Show( vn );

```

#### Get Variance Components

**Syntax:** obj &lt;&lt; Get Variance Components

**Beschreibung:** Gibt die von „Modell anpassen“ für ein angegebenes Modell erzeugten Varianzkomponenten zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);vc = obj << Get Variance Components;Show( vc );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);

```

### Zugehörige Konstruktoren

#### Estimate Only Variance Components

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**Beschreibung:** Führt eine REML-Analyse anhand des angegebenen Modells durch und zeigt die Varianzkomponenten aus dem Modell an.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);

```

## Generalized Linear Mixed Model > Fit GLMM

### Elementmeldungen

#### Between-Within Degrees of Freedom

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Between-Within Degrees of Freedom( state=0|1 ))

**Beschreibung:** Ersetzt die Standardfehler im gesamten Bericht durch unbereinigte Schätzwerte und die Freiheitsgrade auf Zwischen-Innerhalb basierende. Um Zwischen-Innerhalb Freiheitsgrade in einem Bericht über Mehrfachvergleiche zu verwenden, müssen Sie diese Option auswählen, bevor Sie einen Bericht über Mehrfachvergleiche hinzufügen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );fm = Fit Model(	Y( :No Headache, :Number of Patients ),	Effects( :Treatment, :Week, :Treatment * :Week ),	Personality( "Generalized Linear Mixed Model" ),	Subject( :"Treatment(Clinic)"n ),	Repeated Effects( :Week Continuous ),	Repeated Structure( "AR(1)" ),	Generalized Distribution( "Binomial" ),	Link Function( "Logit" ),	Run());Wait( 1 );fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

#### Conditional Contour Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Contour Profiler( state=0|1 ))

**Beschreibung:** Blendet die Konturanalyse der bedingten Zielgröße grafisch für jeweils zwei Faktoren ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei stetige Effekte und mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

#### Conditional Diagnostic Bundle

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Diagnostic Bundle( state=0|1 ))

**Beschreibung:** Blendet eine Gruppe von Diagnosediagrammen ein oder aus, die nützlich sind beim Entscheiden, wie gut ein Regressionsmodell die beobachteten Daten anpasst. Diese Option ist nicht verfügbar, wenn als Verteilung „Binomial“ ausgewählt ist oder wenn das Modell keine zufälligen Effekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 1 );fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mean CI)

**Beschreibung:** Speichert zwei neue Spalten in der Datentabelle. Die neuen Spalten enthalten die untere und obere Konfidenzgrenze für den erwarteten Wert der bedingten Vorhersage. Die Konfidenzintervalle enthalten Schätzwerte für zufällige Effekte für Modelle mit zufälligen Effekten. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Mean CI);

```

#### Conditional Mixture Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mixture Profiler( state=0|1 ))

**Beschreibung:** Blendet eine Mischungsanalyse ein oder aus, die die Konturen der bedingten Zielgröße in einem ternären Diagramm anzeigt. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält und wenn das Mischungseffektattribut auf drei oder mehr Faktoren im Modell angewendet wird oder wenn die Mischungseigenschaft auf drei oder mehr Faktorspalten angewendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

#### Conditional Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Prediction Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel für den bedingten Mittelwert. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Prediction Formula);

```

#### Conditional Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Profiler( state=0|1 ))

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die bedingte Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Profiler( 1 ));

```

#### Conditional Surface Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Surface Profiler( state=0|1 ))

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm der bedingten Zielgröße ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei Effekte und mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

#### Containment Degrees of Freedom

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Containment Degrees of Freedom( state=0|1 ))

**Beschreibung:** Ersetzt die Standardfehler im gesamten Bericht durch unbereinigte Schätzwerte und auf Containment basierende Freiheitsgrade. Um Containment-Freiheitsgrade in einem Bericht über Mehrfachvergleiche zu verwenden, müssen Sie diese Option auswählen, bevor Sie einen Bericht über Mehrfachvergleiche hinzufügen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**Beschreibung:** Blendet die Konturanalyse der marginalen Zielgröße grafisch für jeweils zwei Faktoren ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei stetige feste Effekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Contour Profiler( 1 ));

```

#### Correlation of Fixed Effects

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Fixed Effects( state=0|1 ))

**Beschreibung:** Blendet die Korrelationsmatrix für die festen Effekte im Modell ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

#### Covariance of All Parameters

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of All Parameters( state=0|1 ))

**Beschreibung:** Blendet die Kovarianzmatrix für alle Effekte im Modell ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

#### Covariance of Covariance Parameters

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Covariance Parameters( state=0|1 ))

**Beschreibung:** Blendet die Kovarianzmatrix für die zufälligen Effekte im Modell ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

#### Covariance of Fixed Effects

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Fixed Effects( state=0|1 ))

**Beschreibung:** Blendet die Kovarianzmatrix für die festen Effekte im Modell ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

#### Diagnostic Bundle

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**Beschreibung:** Blendet eine Gruppe von Diagnosediagrammen ein oder aus, die nützlich sind beim Entscheiden, wie gut ein Regressionsmodell die beobachteten Daten anpasst. Diese Option ist nicht verfügbar, wenn als Verteilung „Binomial“ ausgewählt ist oder wenn das Modell zufällige Effekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 1 );fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Empirical Standard Errors

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Empirical Standard Errors( state=0|1 ))

**Beschreibung:** Ersetzt die Standardfehler im gesamten Bericht durch Sandwich-Schätzwerte. Um Sandwich-Schätzwerte in einem Bericht für multiple Vergleiche zu verwenden, müssen Sie diese Option auswählen, bevor Sie einen Bericht für multiple Vergleiche hinzufügen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

#### Fit Statistics

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Fit Statistics( state=0|1 ))

**Beschreibung:** Blendet die Berichte „Anpassungsstatistiken“ und „Modellzusammenfassung“ ein oder aus, die Informationen über die Spezifikation und die Anpassungsgüte des Modells enthalten. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fit Statistics( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Fixed Effects Parameter Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 ))

**Beschreibung:** Blendet eine Tabelle der Parameterschätzwerte bei Modellen mit festen Effekten ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

#### Fixed Effects Tests

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Tests( state=0|1 ))

**Beschreibung:** Blendet die Tests der festen Effekte ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fixed Effects Tests( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**Beschreibung:** Speichert zwei neue Spalten in der Datentabelle. Die neuen Spalten enthalten die untere und obere Konfidenzgrenze für die mittlere Zielgröße.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Mean Confidence Interval);

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Mixture Profiler( state=0|1 ))

**Beschreibung:** Blendet eine Mischungsanalyse ein oder aus, die die Konturen der marginalen Zielgröße in einem ternären Diagramm anzeigt. Diese Option ist nur verfügbar, wenn das Mischungseffektattribut auf drei oder mehr Faktoren im Modell angewendet wird oder wenn die Mischungseigenschaft auf drei oder mehr Faktorspalten angewendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Mixture Profiler( 1 ));

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**Beschreibung:** Erzeugt Schätzwerte der Kleinste-Quadrate-Mittelwerte oder benutzerdefinierte Schätzwerte. Mit diesen Schätzwerten können Sie Vergleiche mit dem Gesamtmittelwert, Vergleiche mit Kontrolle oder paarweise Vergleiche durchführen. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Target Level( "Pass" ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (fit[1] << Multiple Comparisons(	Effect( :Program ),	Least Squares Means Plot,	Student's t( 1 )));

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der Chancenverhältnisse für kategoriale Prädiktoren und Chancenverhältnisse je Einheit und Chancenverhältnisse für Bereiche für stetige Prädiktoren enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Linear Mixed Model" ),	Run);Wait( 0 );obj << (fit[1] << Odds Ratios( 1 ));

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel für den marginalen Mittelwert.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Prediction Formula);

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction and Interval Formulas)

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die Spalten enthalten Formeln für die Vorhersagen und Konfidenzgrenzen. Die von dieser Option erstellten Grenzwertspalten enthalten Eigenschaften, die von der Vorhersageanalyse verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Prediction and Interval Formulas);

```

#### Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die marginale Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Profiler( 1 ));

```

#### Random Coefficients

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Random Coefficients( state=0|1 ))

**Beschreibung:** Blendet einen Bericht der Schätzwerte für die zufälligen Koeffizienten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Random Coefficients( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Random Coefficients( 1 ));Report( fm )["Random Coefficients"] << Close( 0 );

```

#### Random Effects Covariance Parameter Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 ))

**Beschreibung:** Blendet eine Tabelle der Parameterschätzwerte der Kovarianz bei Modellen mit zufälligen Effekten ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

#### Random Effects Predictions

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Predictions( state=0|1 ))

**Beschreibung:** Blendet eine Tabelle der Vorhersagen der zufälligen Effekte ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Random Effects Predictions( 1 ));

```

#### Save Conditional Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Conditional Residual Formula )

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für die bedingten Residuen in der Form Y minus der Vorhersageformel. Diese Option ist nicht verfügbar, wenn als Verteilung „Binomial“ ausgewählt ist oder wenn es im Modell zufällige Effekte gibt.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);fm << (fit[1] << Save Conditional Residual Formula);

```

#### Save Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula )

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält eine Formel für die marginalen Residuen in der Form Y minus der Vorhersageformel. Diese Option ist nicht verfügbar, wenn als Verteilung „Binomial“ ausgewählt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte kann verwendet werden, um zufällige Zielgrößenwerte aus dem angepassten Modell zu erstellen. Sie können die Formelspalte mit der Funktion „Simulieren“ in JMP Pro verwenden. Diese Option ist nicht verfügbar, wenn eine Nach-Variable verwendet wird. Verwenden Sie Teildatentabellen, wenn Simulationsformeln für Nach-Gruppen notwendig sind.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Save Simulation Formula);

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Sequential Tests( state=0|1 ))

**Beschreibung:** Blendet den Bericht über sequentielle Tests (Typ 1) ein oder aus, der die Quadratsummen enthält, wenn die Effekte dem Modell sequentiell hinzugefügt werden. Diese Option ist nur verfügbar, wenn das Modell mindestens einen festen Effekt enthält.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Sequential Tests( 1 ));

```

#### Standard Error of Conditional Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Conditional Predicted)

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Standardfehler der bedingten vorhergesagten Mittelwerte. Diese Option ist nur verfügbar, wenn das Modell mindestens einen zufälligen Effekt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Standard Error of Conditional Predicted);

```

#### Standard Error of Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Predicted)

**Beschreibung:** Speichert eine neue Spalte in der Datentabelle. Die neue Spalte enthält die Standardfehler der vorhergesagten Randmittelwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Standard Error of Predicted);

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm der marginalen Zielgröße ein oder aus. Diese Option ist nur verfügbar, wenn das Modell mindestens zwei Effekte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

### Elementmeldungen

#### Fit

**Syntax:** Fit Model(...Run( Fit( options ) )...); obj &lt;&lt; Fit( options ); obj &lt;&lt; (Fit[number] &lt;&lt; option)

**Beschreibung:** Ermöglicht Ihnen, Meldungen an die Plattform zu senden. Diese Option kann in einem Skript zum Starten eines Modells verwendet werden oder um einen Handle für ein spezifisches Modell im Bericht zu erzeugen.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fit Statistics( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << Model Dialog;

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Zugehörige Konstruktoren

#### Fit GLMM Platform

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Random Effects( columns ), Repeated Effects( columns ), Repeated Structure( type ), Personality( "Generalized Linear Mixed Model" ) )

**Beschreibung:** Passt ein verallgemeinertes lineares gemischtes Modell an. Diese Modelle können für zufällige Koeffizienten, Split-Plots und Blockdesigns verwendet werden, wenn die Zielgröße nicht normalverteilt ist. Die Zielgrößenverteilungen können stetige, kategoriale, Häufigkeiten- und Zeit-bis-Ereignis-Daten sein.

**Modell geschachtelter zufälliger Effekte**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());

```

**Modell mit Messwiederholungen**

```jsl

dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );fm = Fit Model(	Y( :No Headache, :Number of Patients ),	Effects( :Treatment, :Week, :Treatment * :Week ),	Personality( "Generalized Linear Mixed Model" ),	Subject( :"Treatment(Clinic)"n ),	Repeated Effects( :Week Continuous ),	Repeated Structure( "AR(1)" ),	Generalized Distribution( "Binomial" ),	Link Function( "Logit" ),	Run());

```

**Modell mit zufälligen Koeffizienten**

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Negative Binomial" ),	Run());

```

**Räumliches Modell**

```jsl

dt = Open( "$SAMPLE_DATA/Hessian Fly.jmp" );fm = Fit Model(	Y( :Y, :N ),	Effects( :Entry ),	Personality( "Generalized Linear Mixed Model" ),	Repeated Effects( :Latitude, :Longitude ),	Repeated Structure( "Spatial" ),	Repeated Structure Type( "Exponential" ),	Generalized Distribution( "Binomial" ),	Link Function( "Logit" ),	Run());

```

**Split-Plot-Modell**

```jsl

dt = Open( "$SAMPLE_DATA/Time to Flower.jmp" );fm = dt << Fit Model(	Y( :Days ),	Effects( :A, :B, :A * :B ),	Random Effects( :Block, :Block * :A ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Gamma" ),	Run());

```

## Generalized Regression > Generalized Regression Fit

### Elementmeldungen

#### Active Parameter Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Active Parameter Estimates( state=0|1 ))

**Beschreibung:** Zeigt eine Tabelle der aktiven Parameterschätzwerte ungleich 0 für das derzeit ausgewählte Modell an oder blendet sie aus. Diese Option ist bei Maximum-Likelihood- oder Ridge-Regressionsmodellen nicht verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Active Parameter Estimates( 1 ));

```

#### Confusion Matrix

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Confusion Matrix( &lt;probability=0.5&gt; ))

**Beschreibung:** Erzeugt eine Kreuztabellenmatrix aus tatsächlichen und vorhergesagten Zielgrößen. Verwenden Sie das optionale Argument, um eine andere Schwellenwahrscheinlichkeit als 0,5 anzugeben. Diese Option ist nur verfügbar, wenn die angegebene Verteilung binomial, multinomial oder ordinal-logistisch ist. Standardmäßig „0.5“.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( "Logistic Regression" ),			Validation Method( "None" ),			Confusion Matrix( 0.5 )		)	));

```

#### Cook's D Influence

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Cook&apos;s D Influence)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Werte für die Kenngröße Cooks D-Einfluss. Diese Option ist nur verfügbar, wenn die angegebene Verteilung die Normalverteilung ist und die angegebene Schätzmethode „Gewöhnliche kleinste Quadrate“ ist.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Cook's D Influence);

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Estimates( state=0|1 ))

**Beschreibung:** Zeigt die Matrix der Korrelationen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Correlation of Estimates);

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance Of Estimates( state=0|1 ))

**Beschreibung:** Zeigt die Matrix der Kovarianzen zwischen den Parameterschätzwerten für die angegebene Anpassung an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Covariance of Estimates);

```

#### Custom Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; ))

**Beschreibung:** Zeigt einen Bericht zum benutzerdefinierten Test an oder blendet ihn aus, in dem Sie eine benutzerdefinierte Hypothese testen können. Wenn das Modell einen Lösungspfad hat, werden die Ergebnisse des benutzerdefinierten Tests aktualisiert, wenn Sie die Lösung aktualisieren.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

#### Decision Threshold

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**Beschreibung:** Zeigt Berichte über Entscheidungsschwellen für die Trainings-, Validierungs- und Testsätze an oder blendet sie aus, sofern angegeben. Jeder Bericht enthält einen Graphen der Verteilung der angepassten Wahrscheinlichkeiten für jedes Modell, Konfusionsmatrizen für jedes Modell und Klassifikationsgraphen für den Vergleich der Modellanpassungen. Diese Option ist nur bei binären kategorialen Zielgrößen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << Decision Threshold( 1 ));

```

#### Diagnostic Bundle

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**Beschreibung:** Zeigt eine Gruppe von Diagnosediagrammen an oder blendet sie aus, die nützlich sind, um zu entscheiden, wie gut ein Regressionsmodell die beobachteten Daten anpasst. Ein Satz Diagramme ist jeweils für den Trainingssatz und für die Validierungs- und Testsätze verfügbar, sofern Sie diese verwenden. Nicht verfügbar, wenn die angegebene Verteilung binomial, multinomial, ordinal-logistisch oder Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Distribution Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Distribution Profiler( state=0|1 ))

**Beschreibung:** Blendet ein Analysediagramm der kumulierten Verteilungsfunktion der Prädiktoren und der Zielgröße ein oder aus. Die Zielgröße wird in der Zelle ganz rechts angezeigt. Diese Option ist nicht verfügbar, wenn die angegebene Verteilung binomial ist oder eine Quantilregression vorliegt.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Distribution Profiler( 1 )		)	));

```

#### Effect Tests

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Effect Tests( state=0|1 ))

**Beschreibung:** Blendet Tests für jeden Effekt ein oder aus. Jeder Effekttest testet die Nullhypothese, dass alle Parameter dieses Effekts null sind. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Effect Tests( 0 ));

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer Vorhersageformelspalte und gibt sie zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Get Prediction Formula);

```

#### Hats

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hats)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Diagonalenelemente der Hat-Matrix, die gelegentlich Hat-Werte genannt werden. Diese Option ist nur verfügbar, wenn die angegebene Verteilung eine Normalverteilung ist und die angegebene Schätzmethode „Gewöhnliche kleinste Quadrate“ ist.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Hats);

```

#### Hazard Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Profiler( state=0|1 ))

**Beschreibung:** Blendet ein Analysediagramm ein oder aus, das die Ausfallrate als Funktion der Prädiktoren und der Zielgröße anzeigt. Die Zielgröße wird in der Zelle ganz rechts angezeigt. Diese Option ist nur verfügbar, wenn die angegebene Verteilung normalverteilt, exponentiell, Weibull, lognormal oder Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	No Intercept,	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Hazard Profiler( 1 )		)	));

```

#### Hazard Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Ratios( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der Ausfallratenverhältnisse für kategoriale Prädiktoren und Ausfallratenverhältnisse je Einheit und Ausfallratenverhältnisse je Bereich für stetige Prädiktoren enthält. Ein Ausfallratenverhältnis ist das Verhältnis der Ausfallraten für zwei Ereignisse. Diese Option ist nur verfügbar, wenn die angegebene Verteilung eine Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	No Intercept,	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Hazard Ratios( 1 )		)	));

```

#### Hide Inactive Paths

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hide Inactive Paths( state=0|1 ))

**Beschreibung:** Passt die Transparenz der inaktiven Pfade im Diagramm der Parameterschätzwerte des Lösungspfads so an, dass die derzeit nicht aktiven Pfade schwächer angezeigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Hide Inactive Paths);

```

#### Incidence Rate Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Incidence Rate Ratios( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der Inzidenzratenverhältnisse für kategoriale Prädiktoren und Inzidenzratenverhältnisse je Einheit und Inzidenzratenverhältnissen je Bereich für stetige Prädiktoren enthält. Diese Option ist nur verfügbar, wenn die angegebene Verteilung Poisson oder negativ binomial ist und das Modell einen Achsenabschnitt enthält.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Incidence Rate Ratios( 1 )		)	));

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**Beschreibung:** Erzeugt einen X-Vorhersagewert und ein Konfidenzintervall basierend auf den angegebenen Werten von Y und allen anderen Faktoren. Diese Option ist nicht bei Modellen verfügbar, die einen Prädiktor vom Modellierungstyp Vektor enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Inverse Prediction(	Response( 200, 250, 300 ),	Term Value(		Age( 48.5181 ),		Gender( "1" ),		BMI( . ),		BP( 94.6470135746607 ),		Total Cholesterol( 189.140271493213 ),		LDL( 115.439140271493 ),		HDL( 49.7884615384615 ),		TCH( 4.07024886877828 ),		LTG( 4.64141085972851 ),		Glucose( 91.2601809954751 )	)));

```

#### Lift Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**Beschreibung:** Zeigt die Lift-Kurve für das Modell an oder blendet sie aus. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz eine Lift-Kurve angezeigt. Diese Option ist nur verfügbar, wenn die angegebene Verteilung binomial, multinomial oder ordinal-logistisch ist.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << Lift Curve( 1 ));

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**Beschreibung:** Speichert zwei neue Formelspalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten die untere und obere 95%-Konfidenzintervallgrenze für die mittlere Zielgröße.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Mean Confidence Interval);

```

#### Model Summary

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Model Summary( state=0|1 ))

**Beschreibung:** Blendet den Modellzusammenfassungsbericht ein oder aus, der Informationen über die Spezifikation und Kenngrößen der Anpassungsgüte für das Modell enthält. Diese Option zeigt auch den Bericht „Schätzungsdetails“ für die anwendbaren Modelle an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Model Summary( 0 ));

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**Beschreibung:** Erzeugt Schätzwerte der Kleinste-Quadrate-Mittelwerte oder benutzerdefinierte Schätzwerte. Mit diesen Schätzwerten können Sie Vergleiche mit dem Gesamtmittelwert, Vergleiche mit Kontrollgruppe oder paarweise Vergleiche durchführen. Diese Option ist nicht bei Modellen verfügbar, die einen Prädiktor vom Modellierungstyp Vektor enthalten oder bei Modellen, die keine kategorialen Prädiktoren enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Multiple Comparisons(				Effect( :Genre ),				Comparisons with Overall Average(					1,					Comparisons with Overall Average Decision Chart(						ANOM( 1, Point Options( "Show Needles" ) )					)				)			)		)	),	SendToReport(		Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) )	));

```

#### Normal Quantile Plot

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Normal Quantile Plot( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm der Quantile der Normalverteilung auf der vertikalen Achse und standardisierten Residuen auf der horizontalen Achse an oder blendet es aus. Wenn Sie Validierung verwendet haben, wird für jeden der Trainings-, Validierungs- und Testsätze ein Diagramm angezeigt. Diese Option ist nur verfügbar, wenn die angegebene Verteilung die Normalverteilung ist und es keine Zensierung gibt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Normal Quantile Plot);

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der Chancenverhältnisse für kategoriale Prädiktoren und Chancenverhältnisse je Einheit und Chancenverhältnisse für Bereiche für stetige Prädiktoren enthält. Diese Option ist nur verfügbar, wenn die angegebene Verteilung eine Binomialverteilung ist und das Modell einen Achsenabschnitt enthält. Diese Option ist nicht bei Modellen verfügbar, die einen Prädiktor vom Modellierungstyp Vektor enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( "Logistic Regression" ),			Validation Method( "None" ),			Odds Ratios( 1 )		)	));

```

#### Parameter Estimates for Centered and Scaled Predictors

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**Beschreibung:** Zeigt eine Tabelle der zentrierten und skalierten Parameterschätzungwerte an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

#### Parameter Estimates for Original Predictors

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Original Predictors( state=0|1 ))

**Beschreibung:** Zeigt eine Tabelle der Parameterschätzwerte in der ursprünglichen Skala der Daten an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predicted( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm für den Trainingssatz mit tatsächlichen Werten auf der vertikalen Achse und Vorhersagewerten auf der horizontalen Achse an oder blendet es aus. Wenn Sie Validierung verwendet haben, wird für jeden der Trainings-, Validierungs- und Testsätze ein Diagramm angezeigt. Diese Option ist nicht verfügbar, wenn die angegebene Verteilung binomial, multinomial, ordinal-logistisch oder Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Baseline Survival and Hazard

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Baseline Survival and Hazard( state=0|1 ))

**Beschreibung:** Zeigt die Diagramme zur Baseline-Überlebenswahrscheinlichkeit und -Ausfallrate an oder blendet sie aus, die die Lebensdauer- und Ausfallratenfunktionen für die Baseline-Funktion der proportionalen Ausfallrate im Vergleich zur Zielgrößenvariable darstellen. Unter den Diagrammen befindet sich eine Tabelle, die die dargestellten Werte enthält. Diese Option ist nur verfügbar, wenn die angegebene Verteilung eine Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	No Intercept,	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Plot Baseline Survival and Hazard( 1 )		)	));

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual By Predicted( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm für den Trainingssatz mit Residuenwerten auf der vertikalen Achse und Vorhersagewerten auf der horizontalen Achse an oder blendet es aus. Wenn Sie Validierung verwendet haben, wird für jeden der Trainings-, Validierungs- und Testsätze ein Diagramm angezeigt. Diese Option ist nicht verfügbar, wenn die angegebene Verteilung binomial, multinomial, ordinal-logistisch oder Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Plot Residual by Predictor

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predictor( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm der Residuenwerte auf der vertikalen Achse und Vorhersagewerte auf der horizontalen Achse an oder blendet es aus. Wenn Sie Validierung verwendet haben, wird für jeden der Trainings-, Validierungs- und Testsätze ein Diagramm angezeigt. Diese Option ist nicht verfügbar, wenn die angegebene Verteilung binomial, multinomial, ordinal-logistisch oder Cox proportionale Ausfallrate ist. Diese Option ist nicht bei Modellen verfügbar, die einen Prädiktor vom Modellierungstyp Vektor enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Beschreibung:** Zeigt die Vorhersageanalyse an oder blendet sie aus. Prädiktoren mit Parameterschätzern von 0 und die an keinen Wechselwirkungstermen mit Koeffizienten ungleich 0 beteiligt sind, erscheinen nicht im Analysediagramm.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Profiler( 1 )		)	));

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**Beschreibung:** Erstellt eine Vorhersageformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Publish Prediction Formula);

```

#### Quantile Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Quantile Profiler( state=0|1 ))

**Beschreibung:** Blendet ein Analysediagramm ein oder aus, das die vorhergesagte Zielgröße als Funktion der Prädiktoren und des Quantils der kumulierten Verteilungsfunktion anzeigt. Das Quantil wird Wahrscheinlichkeit genannt und wird in der Zelle ganz rechts angezeigt. Diese Option ist nicht verfügbar, wenn die angegebene Verteilung binomial ist oder eine Quantilregression vorliegt.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Quantile Profiler( 1 )		)	));

```

#### ROC Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) an oder blendet sie aus. Wenn Sie Validierung verwendet haben, wird für jeden der Trainings-, Validierungs- und Testsätze eine ROC-Kurve angezeigt. Diese Option ist nur verfügbar, wenn die angegebene Verteilung binomial, multinomial oder ordinal-logistisch ist.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << ROC Curve( 1 ));

```

#### Relaunch Active Main Effects and Full Factorial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Full Factorial)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste der Modelleffekte einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird mit allen möglichen Wechselwirkungen der aktiven Effekten gefüllt.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

#### Relaunch Active Main Effects and Response Surface Model

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Response Surface Model)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste der Modelleffekte einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird mit einem Wirkungsflächenmodell gefüllt, das mit den aktiven Effekten erzeugt wird.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

#### Relaunch Active Main Effects and Second Degree Factorial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Factorial)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste „Modelleffekte konstruieren“ einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird mit den Wechselwirkungen zweiten Grades der aktiven Effekte gefüllt.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

#### Relaunch Active Main Effects and Second Degree Polynomial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Polynomial)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste der Modelleffekte einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird mit einem Polynom zweiten Grades gefüllt, das mit den aktiven Effekten erzeugt wird.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

#### Relaunch Active Main Effects and Third Degree Factorial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Factorial)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste der Modelleffekte konstruieren einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird mit den Wechselwirkungen dritten Grades der aktiven Effekte gefüllt.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

#### Relaunch Active Main Effects and Third Degree Polynomial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Polynomial)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste der Modelleffekte einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird mit einem Polynom dritten Grades gefüllt, das mit den aktiven Effekten erzeugt wird.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

#### Relaunch with Active Effects

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch with Active Effects)

**Beschreibung:** Öffnet ein Startfenster „Modell anpassen“, in dem die Liste „Modelleffekte konstruieren“ einen Satz von Termen enthält, deren Parameterschätzer ungleich 0 sind. Diese Terme sind die aktiven Effekte. Alle anderen Spezifikationen im Startfenster sind die in der ursprünglichen Analyse verwendeten. Die Liste „Modelleffekte konstruieren“ wird nur mit den aktiven Effekten gefüllt.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch with Active Effects);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**Beschreibung:** Entfernt die angegebene Anpassung aus dem Bericht.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects(		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,		:Runtime * :RstPulse, :Runtime * :MaxPulse, :RunPulse * :RstPulse,		:RunPulse * :MaxPulse, :RstPulse * :MaxPulse	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));Wait( 2 );fm << (fit[1] << Remove Fit);

```

#### Reset Solution

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Reset Solution)

**Beschreibung:** Setzt das Modell im Lösungspfad auf das ursprüngliche Modell zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Set Solution ID( 122 ));Wait( 1 );fm << (Fit[1] << Reset Solution);

```

#### Save Cox Snell Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Cox Snell Residual Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Cox-Snell-Residuen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Save Cox Snell Residual Formula);

```

#### Save Distribution Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Distribution Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die kumulierte Verteilungsfunktion.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) ));fm << (Fit[1] << Save Distribution Formula);

```

#### Save Functional Prediction Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Functional Prediction Formulas)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Eine neue Spalte wird für jede FDE-Hauptkomponentenzielgröße hinzugefügt. Jede neue Spalte enthält eine Vorhersageformel für jede funktionale Hauptkomponente. Es wird eine letzte Spalte hinzugefügt, die eine Modellvorhersageformel enthält, bei der es sich um eine lineare Kombination der Vorhersageformeln und der Eigenfunktionsspalten aus der Plattform „Funktionaler Datenexplorer“ handelt. Diese Option ist nur verfügbar, wenn die Zielgrößenspalten die Spalteneigenschaft FDE-FPC-Nummer enthalten.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );fobj = Functional Data Explorer(	Y( :Y ),	X( :T ),	ID( :ID ),	Z( :X1, :X2, :X3 ),	B Splines( 1 ));dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;fobj << close window;fm = dtsum << Fit Model(	Y( :Y FPC 1, :Y FPC 2 ),	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Best Subset" ),			Validation Method( "AICc" ),			Enforce Heredity( 1 )		)	));(Report( fm[1] )["Generalized Regression for Y FPC 1"]["Normal Best Subset with AICc Validation"] << get scriptable object) <<Save Functional Prediction Formulas;

```

#### Save Linear Predictor

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Linear Predictor)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für das Produkt aus der Designmatrix und dem Vektor der Parameterschätzer.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Save Linear Predictor);

```

#### Save Martingale Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Martingale Residual Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Martingal-Residuen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Save Martingale Residual Formula);

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Prediction Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Vorhersageformel, ausgedrückt als die beobachteten (nicht standardisierten) Datenwerte. Die Vorhersageformel enthält keine auf Null gesetzten Terme.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Prediction Formula);

```

#### Save Resample Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Resample Formulas)

**Beschreibung:** Speichert mehrere Formelspalten in der ursprünglichen Datentabelle. Eine Spaltengruppe namens SVEM-Stichproben enthält eine Formelspalte für jedes einzelne Modell. Diese Spalten werden als ausgeblendete Spalten gespeichert. Die nächste Spalte ist eine Vorhersageformel für das selbst-validierte Ensemblemodell. Die nächste Spalte enthält die Standardfehlerformel für das selbst-validierte Ensemblemodell. Die letzte Spalte enthält die Medianvorhersage aus dem selbst-validierten Ensemblemodell für jede Zeile.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) ));fm << (fit[1] << Save Resample Formulas);

```

#### Save Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Residuen in der Form Y minus der Vorhersageformel. Die Residuenformel enthält keine auf Null gesetzten Terme.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel, die mithilfe der geschätzten Parameter für das anzupassende Modell simulierte Werte generiert. Diese Spalte kann im Dienstprogramm „Simulieren“ als Spalte, in die hineingewechselt werden soll, verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) ));fm << (fit[1] << Save Simulation Formula);

```

#### Save Survival Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Survival Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Überlebenswahrscheinlichkeit zur beobachteten Zeit. Die Lebensdauerfunktion ist gleich 1 minus der kumulierten Verteilungsfunktion.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Save Survival Formula);

```

#### Save Validation Column

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation Column)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte beschreibt die Zuweisung von Zeilen zu Teilmengen. Bei k-fach führt die Spalte die Teilmenge auf, der die Zeile zugewiesen war. Bei Holdback wird jede Zeile als zum Trainings- oder Validierungssatz gehörend identifiziert. Bei Leave-One-Out zeigt der Wert der Zeile an, in welcher Reihenfolge er weggelassen wird.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) ));fm << (fit[1] << Save Validation Column);

```

#### Save Variance Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Variance Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Varianz der Vorhersage.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));fm << (fit[1] << Save Variance Formula);

```

#### Select Nonzero Terms

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Select Nonzero Terms)

**Beschreibung:** Hebt im Bericht Terme mit Koeffizienten ungleich 0 hervor. Wählt auch alle zugehörigen Spalten in der Datentabelle aus. Diese Option ist nicht verfügbar, wenn die angegebene Schätzmethode Ridge-Regression ist.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Select Nonzero Terms);

```

#### Select Zeroed Terms

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Select Zeroed Terms)

**Beschreibung:** Hebt im Bericht Terme mit Koeffizienten gleich 0 hervor. Wählt auch alle zugehörigen Spalten in der Datentabelle aus. Diese Option ist nicht verfügbar, wenn die angegebene Schätzmethode Ridge-Regression ist.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Select Zeroed Terms);

```

#### Set Solution ID

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Set Solution ID( number ))

**Beschreibung:** Ändert das angegebene Modell in ein anderes Modell im Lösungspfad.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Set Solution ID( 122 ));

```

#### Show Prediction Expression

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Show Prediction Expression( state=0|1 ))

**Beschreibung:** Zeigt den Bericht der Vorhersagefunktion an oder blendet ihn aus, der die Gleichung für das geschätzte Modell enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Show Prediction Expression);

```

#### Show Solution Path Summary

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Show Solution Path Summary( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der eine Tabelle der Anpassungsstatistiken für die Punkte in den Diagrammen des Lösungspfads und des Validierungspfads enthält, an denen sich der aktive Satz ändert. Die verfügbaren Kenngrößen sind von der Schätzmethode abhängig. Diese Option ist bei Maximum-Likelihood- oder Ridge-Regressionsmodellen nicht verfügbar.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Show Solution Path Summary( 1 ));

```

#### Solution Path

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Solution Path( state=0|1 ))

**Beschreibung:** Zeigt die Diagramme des Lösungspfads und des Validierungspfads an oder blendet sie aus. Diese Option ist bei Maximum-Likelihood-Modellen nicht verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Solution Path( 0 ));

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Standardfehler der vorhergesagten mittleren Zielgröße.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Std Error of Predicted);

```

#### Std Error of Predicted Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Standardfehler der vorhergesagten mittleren Zielgröße.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) )	));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Std Error of Predicted Formula);

```

#### Step Backward

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Step Backward)

**Beschreibung:** Geht zum nächsten kleineren Modell im Lösungspfad.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Step Backward);Wait( 1 );fm << (Fit[1] << Step Backward);

```

#### Step Forward

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Step Forward)

**Beschreibung:** Geht zum nächsten größeren Modell im Lösungspfad.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Step Forward);Wait( 1 );fm << (Fit[1] << Step Forward);

```

#### Survival Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Survival Profiler( state=0|1 ))

**Beschreibung:** Zeigt ein Analysediagramm an oder blendet es aus, das die Lebensdauerfunktion als Funktion der Prädiktoren und der Zielgröße anzeigt. Die Zielgröße wird in der Zelle ganz rechts angezeigt. Diese Option ist nur verfügbar, wenn die angegebene Verteilung normalverteilt, exponentiell, Weibull, lognormal oder Cox proportionale Ausfallrate ist.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

### Elementmeldungen

#### Estimation Method

**Syntax:** obj = Fit Model(...Run( Fit( Estimation Method( method ) ) )... )

**Beschreibung:** Gibt die Schätzmethode oder Variablenauswahl an, die zur Anpassung des Modells verwendet wird.

**Doppeltes Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Double Lasso" ), Validation Method( "AICc" ), Profiler ) ));

```

**Elastisches Netz**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run( Fit( Estimation Method( "Elastic Net" ), Validation Method( "AICc" ), Profiler ) ));

```

**Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "AICc" ), Profiler ) ));

```

**Vorwärtsauswahl**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Forward Selection" ),			Validation Method( "AICc" ),			Profiler		)	));

```

**Vorwärtsauswahl mit Zurückschneiden**

```jsl

dt = Open( "$SAMPLE_DATA/flrpaste.jmp" );fm = dt << Fit Model(	Y( :Strength ),	Effects( :Liquid, :Sugar, :Flour, :Sifted, :Type, :Temp, :Salt, :Clamp, :Coat ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit( Estimation Method( "Pruned Forward Selection" ), Validation Method( "AICc" ) )	));

```

#### Fit

**Syntax:** obj &lt;&lt; Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), &lt;Early Stopping&gt;, &lt;Enforce Heredity&gt;, &lt;Force( vector )&gt; )

**Beschreibung:** Gibt die Schätzmethode und Optionen, die Validierungsmethode und Optionen und andere Anpassungsoptionen für Ihr Modell an. Verfügbare Schätzoptionen hängen von der angegebenen Schätzmethode ab. Validierungsoptionen sind verfügbar für die K-fache Methode und die Zurückhaltemethode. Die anderen Anpassungsoptionen steuern frühes Stoppen, erzwingen die Vererbung von Termen und zwingen Terme ins Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	),	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) ));

```

#### Generalized Distribution

**Syntax:** obj = Fit Model(...Generalized Distribution( distribution )... )

**Beschreibung:** Gibt die Verteilung der Zielgrößenspalte unter Berücksichtigung der Prädiktorspalten an, die zur Anpassung des Modells verwendet wird.

**Cauchy**

```jsl

dt = Open( "$SAMPLE_DATA/fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Generalized Regression" ),	Generalized Distribution( Cauchy ),	Run( Fit( Estimation Method( Maximum Likelihood ), Validation Method( None ) ) ));

```

**Cox proportionale Ausfallrate**

```jsl

dt = Open( "$SAMPLE_DATA/rats.jmp" );fm = dt << Fit Model(	Censor( :Censor ),	Censor Code( "1" ),	Y( :days ),	Effects( :Group ),	No Intercept( 1 ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Plot Baseline Survival and Hazard( 1 )		)	));

```

**Exponentiell**

```jsl

dt = Open( "$SAMPLE_DATA/reliability/tobit2.jmp" );fm = dt << Fit Model(	Y( :YLow, :YHigh ),	Effects( :age, :liquidity ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Exponential" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Gamma**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );fm = dt << Fit Model(	Y( :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Lognormal**

```jsl

dt = Open( "$SAMPLE_DATA/reliability/tobit2.jmp" );fm = dt << Fit Model(	Y( :YLow, :YHigh ),	Effects( :age, :liquidity ),	Personality( "Generalized Regression" ),	Generalized Distribution( "LogNormal" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Multinomial**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fm = dt << Fit Model(	Y( :Species ),	Effects(		:Region, :Culmen Length, :Culmen Depth, :Flipper Length, :Body Mass, :Sex,		:Culmen Length * :Culmen Depth, :Culmen Length * :Flipper Length,		:Culmen Length * :Body Mass, :Culmen Length * :Sex, :Culmen Depth * :Flipper Length,		:Culmen Depth * :Body Mass, :Culmen Depth * :Sex, :Flipper Length * :Body Mass,		:Flipper Length * :Sex, :Body Mass * :Sex	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Multinomial" ),	Run(		Fit(			Estimation Method( "Elastic Net" ),			Validation Method( "AICc" ),			Confusion Matrix		)	));

```

**Negativ binomial**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Regression" ),	Generalized Distribution( Negative Binomial ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Normalverteilt**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );fm = dt << Fit Model(	Y( :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ), Validation Method( "None" ) ) ));

```

**Poisson**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Regression" ),	Generalized Distribution( Poisson ),	Run( Fit( Estimation Method( Forward Selection ), Validation Method( AICc ) ) ));

```

**Robuste Regression**

```jsl

dt = Open( "$SAMPLE_DATA/fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects( Factorial To Degree( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ) ),	Personality( "Generalized Regression" ),	Generalized Distribution( "t(5)" ),	Run(		Fit( Estimation Method( "Pruned Forward Selection" ), Validation Method( "AICc" ) )	));

```

**Zero-inflated negativ binomial**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Regression" ),	Generalized Distribution( ZI Negative Binomial ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

#### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Beschreibung:** Gibt die Designmatrix (auch X-Matrix genannt) zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));As Table( fm << Get X Matrix );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Zeigt das ausgefüllte Startfenster „Modell anpassen“ für die aktuelle Analyse an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Model Dialog;

```

#### Save Coding Table

**Syntax:** obj &lt;&lt; Save Coding Table

**Beschreibung:** Erstellt eine neue Datentabelle, die die JMP-Codierung für alle Modellparameter enthält. Die letzte Spalte zeigt die Werte der Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run);fm << Save Coding Table;

```

#### Set Random Seed

**Syntax:** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**Beschreibung:** Legt den Startwert für den Randomisierungsprozess fest, der für die k-fache und Holdback-Validierung verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Set Random Seed( 1111 ),		Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) )	));

```

#### Validation Method

**Syntax:** obj &lt;&lt; Validation Method( "K-fach"|"Zurückhalten"|"Leave-One-Out"|"BIC"|"AICc"|"ERIC"|"Keine"|"Validierungsspalte" )

**Beschreibung:** Gibt die Validierungsmethode an, die für die Modellierung verwendet wird.

**AICc**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso ), Validation Method( AICc ) ) ));

```

**BIC**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso ), Validation Method( BIC ) ) ));

```

**ERIC**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( ERIC ) ) ));

```

**Validierungsspalte**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Ordinal Logistic" ),	Run( Fit( Estimation Method( Elastic Net ), Validation Method( Validation Column ) ) ));

```

**Zurückhalten**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run( Fit( Estimation Method( Lasso ), Validation Method( Holdback( .3 ) ) ) ));

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Zugehörige Konstruktoren

#### Fit Generalized

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**Beschreibung:** Passt verallgemeinerte lineare Modelle mithilfe von Regressionstechniken mit Bestrafung an, wodurch die Variablenauswahl in einer Weise automatisiert wird, die Overfitting verhindert. Zu den Regressionstechniken mit Bestrafung gehören Lasso, adaptives Lasso, elastisches Netz, adaptives elastisches Netz und Ridge-Regression. Die Zielgrößenverteilungen können Daten vom Typ stetig, kategorial, Häufigkeit und Zeit bis Ereignis anpassen. Das ist der empfohlene Charakter für die meisten Regressionseinstellungen.

**Adaptives Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));

```

**Beste Teilmenge**

```jsl

dt = Open( "$SAMPLE_DATA/Fishing.jmp" );obj = dt << Fit Model(	Y( :Fish Caught ),	Effects( :Live Bait, :Fishing Poles, :Camper, :People, :Children ),	Personality( "Generalized Regression" ),	Generalized Distribution( "ZI Poisson" ),	Run( Fit( Estimation Method( "Best Subset" ), Validation Method( "AICc" ) ) ));

```

**Dantzig-Auswahl**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Dantzig Selector ), Validation Method( "AICc" ) ) ));

```

**Doppeltes Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Prostate Cancer.jmp" );obj = dt << Fit Model(	Y( :Status ),	Effects( ColumnGroup( "Proteins" ) ),	Target Level( "CCD" ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Estimation Method( "Double Lasso" ), Validation Method( "AICc" ) ) ));

```

**Elastisches Netz**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));

```

**Elastisches Netz mit vorzeitigem Stoppen**

```jsl

dt = Open( "$SAMPLE_DATA/Prostate Cancer.jmp" );obj = dt << Fit Model(	Y( :Status ),	Effects( :PSA, :PSA * :PSA, ColumnGroup( "Proteins" ) ),	Target Level( "CCD" ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( "Elastic Net" ),			Validation Method( "AICc" ),			Early Stopping( 1 )		)	));

```

**Gewöhnliche kleinste Quadrate**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ), Validation Method( "None" ) ) ));

```

**Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run( Fit( Estimation Method( Lasso ), Validation Method( "Validation Column" ) ) ));

```

**Logistische Regression**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Target Level( "High" ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Estimation Method( "Logistic Regression" ), Validation Method( "None" ) ) ));

```

**Maximum-Likelihood**

```jsl

dt = Open( "$SAMPLE_DATA/Fishing.jmp" );obj = dt << Fit Model(	Y( :Fish Caught ),	Effects( :Live Bait, :Fishing Poles, :Camper, :People, :Children ),	Personality( "Generalized Regression" ),	Generalized Distribution( "ZI Poisson" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Quantilregression**

```jsl

dt = Open( "$SAMPLE_DATA/fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Quantile Regression" ),	Quantile( 0.5 ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Ridge**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run( Fit( Estimation Method( Ridge ), Validation Method( "Validation Column" ) ) ));

```

**Rückwärtseliminierung**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Weibull" ),	Run( Fit( Estimation Method( "Backward Elimination" ), Validation Method( "AICc" ) ) ));

```

**SVEM-Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Reactor Half Fraction.jmp" );obj = dt << Fit Model(	Y( :Percent Reacted ),	Effects(		:Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration,		:Feed Rate * :Catalyst, :Feed Rate * :Stir Rate, :Feed Rate * :Temperature,		:Feed Rate * :Concentration, :Catalyst * :Stir Rate, :Catalyst * :Temperature,		:Catalyst * :Concentration, :Stir Rate * :Temperature, :Stir Rate * :Concentration,		:Temperature * :Concentration	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( SVEM Lasso( Samples( 200 ) ) ), Profiler( 1 ) ) ));

```

**SVEM-Vorwärtsauswahl**

```jsl

dt = Open( "$SAMPLE_DATA/Reactor Half Fraction.jmp" );obj = dt << Fit Model(	Y( :Percent Reacted ),	Effects(		:Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration,		:Feed Rate * :Catalyst, :Feed Rate * :Stir Rate, :Feed Rate * :Temperature,		:Feed Rate * :Concentration, :Catalyst * :Stir Rate, :Catalyst * :Temperature,		:Catalyst * :Concentration, :Stir Rate * :Temperature, :Stir Rate * :Concentration,		:Temperature * :Concentration	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit( Estimation Method( SVEM Forward Selection( Samples( 200 ) ) ), Profiler( 1 ) )	));

```

**Vorwärtsauswahl**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Forward Selection ), Validation Method( "AICc" ) ) ));

```

**Vorwärtsauswahl mit Zurückschneiden**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Pruned Forward Selection ), Validation Method( "AICc" ) ) ));

```

**Vorwärtsauswahl mit Zurückschneiden mit erzwungenen Termen**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Pruned Forward Selection" ),			Validation Method( "AICc" ),			Force( [1 0 0 0 0 1 0 0 0 0 0] )		)	));

```

**Vorwärtsauswahl mit Zurückschneiden mit Vererbung**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Pruned Forward Selection ),			Validation Method( "AICc" ),			Enforce Heredity( 1 )		)	));

```

**Zweistufige Vorwärtsauswahl**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Two Stage Forward Selection ),			Validation Method( "AICc" ),			Enforce Heredity( 1 )		)	));

```

## Model Dialog

### Elementmeldungen

#### Cauchy Fit

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Geht davon aus, dass die Fehler eine Cauchy-Verteilung haben. Eine Cauchy-Verteilung hat stärkere Enden als die Normalverteilung, was zu einer verringerten Betonung von Ausreißern führt. Nur verfügbar für den Charakter Zielgrößen-Screening. Diese Meldung entspricht der Option „Sehr robuste Anpassung“ im Startfenster „Modell anpassen“.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Fit Model(	Effects( :Process, :Site, :Process * :Site ),	Personality( "Response Screening" ),	Y( 8 :: 394 ),	Cauchy Fit( 1 ),	Run);

```

#### Censor Code

**Syntax:** obj = Fit Model(...Censor Code( string )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Identifiziert den Wert in der Zensorspalte, der rechts zensierte Beobachtungen angibt.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Censor Code( "1" ),	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) ));

```

#### Center Polynomials

**Syntax:** obj = Fit Model(...Center Polynomials( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Zentriert die Effekte in polynomialen Modellen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Centering

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Zentriert alle Zielgrößenvariablen und Modelleffekte durch Subtrahieren des Mittelwerts von jeder Spalte. Nur verfügbar beim Partielle-kleinste-Quadrate-Charakter. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );dt << Fit Model(	Y( :ls, :ha, :dt ),	Effects( 5 :: 31 ),	No Intercept( 1 ),	Personality( "Partial Least Squares" ),	Centering( 0 ),	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) ));

```

#### Choose High Target

**Syntax:** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass der größere Wert einer binären nominalen Zielgröße als Zielgröße verwendet werden soll. Nur verfügbar in der Spalte der binären Zielgrößen beim nominal-logistischen Charakter. Diese Meldung entspricht der Option „Zielniveau“ im Startfenster „Modell anpassen“.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Choose High Target( 1 ),	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) ));

```

#### Convergence Limit

**Syntax:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Konvergenzgrenze für die Modellanpassung an. Wenn Ihr Modell nicht ohne weiteres konvergiert, sollten Sie die Konvergenzgrenze erhöhen. Standardmäßig beträgt die Konvergenzgrenze 0,00000001.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Convergence Limit( 0.0001 ),	Run);

```

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Speichert SAS-Code für die aktuelle Modellspezifikation in einem SAS-Programmfenster.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Create SAS Job;

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Beschreibung:** Gibt an, dass keine einzelnen Modellberichte angezeigt werden und dass sie nach der Anpassung aus dem Speicher entfernt werden. Wenn es viele Tausend Zielgrößen gibt, verringert diese Option die Rechenzeit und spart Speicherplatz. Verwenden Sie diese Option mit der Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den angepassten Modellen zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Effects

**Syntax:** obj = Run(...Effects( col, col, ... )...); obj = Run(...Effects( macro( col, col, ... ) )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Weist der Rolle Effekte erklärende Begriffe zu. Sie können die Effekte einzeln oder mit Hilfe der Makros angeben, die im Startfenster „Modell anpassen“ verfügbar sind. Siehe verschiedene Beispiele unten.

**Effekte**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

**Faktoriell bis Grad**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model(	Y( :height ),	Set Degree( 2 ),	Effects( Factorial to Degree( :sex, :age, :weight ) ));

```

**Faktoriell sortiert**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**Gruppierte Regressoren**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**Mischungswirkungsfläche**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model(	Y( :height ),	Effects( Mixture Response Surface( :weight, :age ) ));

```

**Partiell kubisch**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**Polynom bis Grad**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model(	Y( :height ),	Set Degree( 5 ),	Effects( Polynomial to Degree( :height, :weight ) ));

```

**Scheffe kubisch**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

**Vollfaktoriell**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**Wirkungsfläche**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

#### Emphasis

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Arten von Diagrammen und Statistiken an, die im Standardbericht für den Charakter Gewöhnliche kleinste Quadrate erscheinen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ));obj << Run Model;

```

#### Error Specification

**Syntax:** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**Beschreibung:** Gibt die Fehlervarianz und die Freiheitsgrade für den Fehler an, die für Standardfehler und Tests im Bericht „Kleinste Quadrate anpassen“ verwendet werden. Diese Option ist nur für den Charakter Gewöhnliche kleinste Quadrate verfügbar, wenn es keine zufälligen Effekte gibt.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Error Specification( "Pure Error" ),	Run);

```

#### Estimate Only Variance Components

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Führt eine REML-Analyse unter Verwendung des angegebenen Modells durch und zeigt einen Bericht an, der nur die Varianzkomponenten des Modells enthält. Nur für den Charakter Gewöhnliche kleinste Quadrate verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);

```

#### Firth Bias-Adjusted Estimates

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass die Firth-Bias-korrigierte Methode zur Anpassung des Modells verwendet wird. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	"Firth Bias-Adjusted Estimates"n( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Fit Separately

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**Beschreibung:** Passt ein separates Modell für jede Y-Variable an, wobei alle nichtfehlenden Zeilen verwendet werden. Diese Option ist nur beim Charakter Gewöhnliche kleinste Quadrate mit Modellen verfügbar, die mehrere Y-Variablen haben und keine zufälligen Effekte enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Fit Separately( 1 ),	Run);

```

#### GLM Distribution

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Wahrscheinlichkeitsverteilung für die Zielgrößenvariable an. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);

```

#### Generalized Distribution

**Syntax:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Verteilung der Zielgrößenwahrscheinlichkeit an. Nur für den Charakter Verallgemeinerte Regression verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Fit Model(	Y( :height ),	Effects( :weight, :sex ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Profiler( 1 )		)	));

```

#### Imputation Method

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Methode für die Imputation an. Standardmäßig wird die Mittelwertmethode verwendet. Nur verfügbar beim Partielle-kleinste-Quadrate-Charakter.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Fit Model(	Y( :POP, :Max deg. F Jan ),	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	No Intercept( 1 ),	Center Polynomials( 0 ),	Personality( "Partial Least Squares" ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Run(		Initial Number of Factors( 6 ),		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),		Fit( Method( NIPALS ), Number of Factors( 2 ) )	));

```

#### Impute Missing Data

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Ersetzt fehlende Datenwerte in Y- oder X-Spalten mithilfe der angegebenen Imputationsmethode mit nicht-fehlenden Werten. Nur verfügbar beim Charakter Partielle-kleinste-Quadrate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Fit Model(	Y( :POP, :Max deg. F Jan ),	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	No Intercept( 1 ),	Center Polynomials( 0 ),	Personality( "Partial Least Squares" ),	Impute Missing Data( 1 ),	Run(		Initial Number of Factors( 6 ),		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),		Fit( Method( NIPALS ), Number of Factors( 2 ) )	));

```

#### Informative Missing

**Syntax:** obj = Fit Model(...Informative Missing( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Aktiviert die Imputation und Codierung fehlender Werte. Wenn diese Option nicht ausgewählt ist, werden Zeilen mit fehlenden Werten ignoriert.



Bei stetigen Variablen werden fehlende Werte durch den Mittelwert der Variable ersetzt. Außerdem wird eine Indikatorvariable für die fehlenden Werte erstellt und ins Modell aufgenommen.



Bei kategorialen Variablen werden die fehlenden Werte nicht ersetzt, sondern als weitere Stufe der Variable im Modell behandelt.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height[3] = dt:age[2] = .;dt << Fit Model(	Y( :weight ),	Effects( :height, :age ),	Informative Missing( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Keep dialog open

**Syntax:** obj &lt;&lt; Keep dialog open( state=0|1 )

**Beschreibung:** Gibt an, ob das Startfenster „Modell anpassen“ geöffnet bleibt oder geschlossen wird, nachdem das angegebene Modell ausgeführt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Keep dialog open( 1 ),	Run);

```

#### Link Function

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Kopplungsfunktion für das Modell an. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Max Iterations

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die maximale Anzahl der vom Algorithmus verwendeten Iterationen an. Der Algorithmus wird beendet, wenn die maximale Differenz zwischen den aktuellen und vorherigen Schätzern von fehlenden Werten kleiner als 10^-8 ist. Nur verfügbar beim Charakter Partielle-kleinste-Quadrate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Fit Model(	Y( :POP, :Max deg. F Jan ),	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	No Intercept( 1 ),	Center Polynomials( 0 ),	Personality( "Partial Least Squares" ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 5 ),	Run(		Initial Number of Factors( 6 ),		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),		Fit( Method( NIPALS ), Number of Factors( 2 ) )	));

```

#### Maximum Iterations

**Syntax:** obj = Fit Model(...Maximum Iterations( number=100 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die maximale Anzahl von Iterationen an, die bei der Modellanpassung verwendet werden. Standardmäßig beträgt die maximale Anzahl von Iterationen 100.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Maximum Iterations( 150 ),	Run);

```

#### Method

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Methode an, die für die Anpassung gemischter Modelle im Charakter Gewöhnliche kleinste Quadrate verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

#### No Intercept

**Syntax:** obj = Fit Model(...No Intercept( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Setzt den Achsenabschnitt des Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	No Intercept( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### NoBounds

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Entfernt die Grenzen für Varianzschätzungen. Wenn aus, wird die untere Grenze für Varianzschätzungen auf 0 gesetzt. Nur für den Charakter Gewöhnliche kleinste Quadrate verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 0 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

#### Nominal Coding

**Syntax:** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**Beschreibung:** Gibt an, ob die Codierung für nominale Effekte Abweichungen vom Durchschnitt der verschiedenen Stufen (Standardeinstellung) oder von der letzten Stufe schätzt.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );dt << Fit Model(	Y( :Disso ),	Effects(		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity,		:Spray Rate	),	Personality( "Standard Least Squares" ),	Nominal Coding( "Last Level" ),	Emphasis( "Effect Leverage" ),	Run);

```

#### Overdispersion Tests and Intervals

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass ein Überdispersionsparameter in das Modell eingeschlossen werden soll. Nur für den Charakter Verallgemeinertes lineares Modell verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Personality

**Syntax:** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt den Typ der Analyse an, der für die Anpassung des Modells verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Run Model;

```

#### Power Link Parameter

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt den Parameter für die Potenz-Kopplungsfunktion an. Nur verfügbar, wenn Potenz als Kopplungsfunktion beim Charakter Verallgemeinertes lineares Modell angegeben ist. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Power" ),	Power Link Parameter( 0.5 ),	Run);

```

#### Quantile

**Syntax:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**Beschreibung:** Gibt das Quantil der zu modellierenden Zielgröße an. Nur für den Charakter Verallgemeinerte Regression verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Fit Model(	Y( :height ),	Effects( :weight, :sex ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Quantile Regression" ),	Quantile( 0.75 ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Profiler( 1 )		)	));

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Beschreibung:** Speichert die einzelnen Modellergebnisse über viele Zielgrößen in Datentabellen. Die Inhalte und Anzahl von Ausgabedatentabellen sind vom anzupassenden Modell abhängig.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Run);

```

#### Robust Fit

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Verwendet die robuste (Huber)-Schätzung, um Ausreißer herabzugewichten. Wenn keine Ausreißer vorhanden sind, sind diese Schätzwerte nahe den Kleinste-Quadrate-Schätzwerten. Nur verfügbar für den Charakter Zielgrößen-Screening. Diese Meldung entspricht der Option „Robuste Anpassung“ im Startfenster „Modell anpassen“.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Fit Model(	Effects( :Process, :Site, :Process * :Site ),	Personality( "Response Screening" ),	Y( 8 :: 394 ),	Robust Fit( 1 ),	Run);

```

#### Run

**Syntax:** obj = Fit Model(...Run( &lt;options&gt; )...); obj &lt;&lt; Run( &lt;options&gt; )

**Beschreibung:** Führt das Modell aus, das im Startfenster „Modell anpassen“ angegeben ist, und schließt dann das Startfenster.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Run( Show Prediction Expression( 1 ) ));obj << Run;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Run;

```

#### Run Model

**Syntax:** obj &lt;&lt; Run Model

**Beschreibung:** Führt das Modell aus, das im Startfenster „Modell anpassen“ angegeben ist, und lässt das Startfenster geöffnet.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Run Model;

```

#### Save to Data Table

**Syntax:** obj &lt;&lt; Save to Data Table

**Beschreibung:** Speichert das Modell als JSL in der aktuellen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Save to DataTable;

```

#### Save to Script Window

**Syntax:** obj &lt;&lt; Save to Script Window

**Beschreibung:** Speichert das Modell als JSL im Skriptfenster.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Save to Script Window;

```

#### Scaling

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Skaliert alle Zielgrößenvariable und Modelleffekte durch Dividieren jeder Spalte durch ihre Standardabweichung. Nur verfügbar beim Partielle-kleinste-Quadrate-Charakter. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );dt << Fit Model(	Y( :ls, :ha, :dt ),	Effects( 5 :: 31 ),	No Intercept( 1 ),	Personality( "Partial Least Squares" ),	Scaling( 0 ),	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) ));

```

#### Set Alpha Level

**Syntax:** obj = Fit Model(...Set Alpha Level( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt das Alpha-Niveau für Konfidenzintervalle in den Modellberichten an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Set Alpha Level( 0.01 ),	Run);

```

#### Standardize X

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Zentriert und skaliert alle Spalten, die in der Konstruktion von Modelleffekten verwendet werden. Wenn diese Option nicht ausgewählt wird, werden mithilfe der ursprünglichen Spalten der Datentabelle Effekte höherer Ordnung erzeugt. Dann wird jeder Effekt höherer Ordnung basierend auf den Optionen für Zentrieren und Skalieren zentriert oder skaliert. Beachten Sie, dass mit „X standardisieren“ Y-Variablen nicht zentriert oder skaliert werden. Nur verfügbar beim Partielle-kleinste-Quadrate-Charakter. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );dt << Fit Model(	Y( :ls, :ha, :dt ),	Effects( 5 :: 31 ),	No Intercept( 1 ),	Personality( "Partial Least Squares" ),	Standardize X( 0 ),	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) ));

```

#### Subgroup Twoway

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**Beschreibung:** Passt alle zweifaktoriellen Untergruppenkombinationen an. Diese Option ist nur verfügbar, wenn mindestens eine Untergruppenvariable im Charakter Zielgrößen-Screening definiert ist.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Fit Model(	Y( :age ),	Effects( :sex, :type ),	Subgroup( :country, :marital status ),	Personality( "Response Screening" ),	Subgroup Twoway( 1 ),	Run);

```

#### Suppress Coding

**Syntax:** obj = Fit Model(...Suppress Coding( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Schaltet alle Spalteneigenschaften „Codierung“ ab, so dass sich die Schätzwerte auf die ursprüngliche Skala beziehen. Die Spalteneigenschaft „Codierung“ ermöglicht Ihnen, Schätzwerte leichter miteinander zu vergleichen und ist nützlich, um Tests mit Effekten niedrigerer Ordnung aussagekräftiger zu machen. Es wird empfohlen, die Option „Codierung unterdrücken“ nur zu verwenden, wenn Sie sie benötigen.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );obj = dt << Fit Model(	Y( :Stretch ),	Effects( :Silica, :Sulfur, :Silane ),	Suppress Coding( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Beschreibung:** Gibt an, dass die einzelnen Modellberichte ausgeblendet werden. Wenn es Tausende von Zielgrößen gibt, verringert diese Option die Rechenzeit. Die Anpassungsobjekte und einige Menüelemente sind weiterhin verfügbar. Verwenden Sie die Option „Ergebnisse in Datentabellen“, um die Ergebnisse aus den Modellberichten zu erfassen.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Suppress Warning for Missing Effects

**Syntax:** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Unterdrückt Warnungen, dass Effekte niedrigerer Ordnung, die durch Effekte höherer Ordnung impliziert werden, nicht im Modell vorhanden sind. Diese Option ist bei Versuchen mit vielen Teilmengenmodellen nützlich.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );obj = dt << Fit Model(	Y( :Stretch ),	Effects( :Silica, :Sulfur * :Silane ),	Suppress Warning for Missing Effects( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Target Level

**Syntax:** obj = Fit Model(...Target Level( level )...)

**Beschreibung:** Gibt die Stufe an, deren Wahrscheinlichkeit Sie modellieren möchten. Der Standardwert ist die höhere der beiden Stufen, basierend auf der Reihenfolge der Stufen. Nur verfügbar bei bestimmten Charakteren und wenn die Y-Variable binär ist und den Modellierungstyp Nominal hat.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Target Level( "Cured" ),	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) ));

```

### Spalten

#### ID

**Syntax:** obj = Run(...&lt;ID( column )&gt;...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Spalte, die die Matrix der genetischen Beziehungen identifiziert.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Run( Show Prediction Expression( 1 ) ));obj << Run;

```

#### Subgroup

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine oder mehrere Untergruppenvariablen an. Wenn eine Untergruppenvariable definiert ist, werden für jede Kategorie der Untergruppenvariable zusätzliche Anpassungen durchgeführt.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Fit Model(	Y( :age ),	Effects( :sex, :type ),	Subgroup( :country, :marital status ),	Personality( "Response Screening" ),	Subgroup Twoway( 1 ),	Run);

```

#### Switch

**Syntax:** obj = Fit Model(...Switch( column(s) )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt Spalten an, die jeweils einzeln in das Modell geschaltet werden können.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Run( Show Prediction Expression( 1 ) ));obj << Run;

```

