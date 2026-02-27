# Partial Least Squares



## Elementmeldungen

### Centering

**Syntax:** obj = Partial Least Squares(...Centering( state=0|1)...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Zentriert alle Y-Variablen und modelliert Effekte durch Subtrahieren des Mittelwerts von jeder Spalte. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Centering( 0 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Fit

**Syntax:** obj &lt;&lt; Fit( SVD( Fast|Classical ), Method( NIPALS|SIMPLS ), Number of Factors( number ) )

**Beschreibung:** Passt ein Modell der partiellen kleinsten Quadrate mit einer vorgegebenen Methode und Anzahl von Faktoren an.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Method( NIPALS ), Number of Factors( 7 ) ),	Go);

```

### Go

**Syntax:** obj &lt;&lt; Go

**Beschreibung:** Startet die Anpassung des Modells der partiellen kleinsten Quadrate.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	));obj << Go;

```

### Imputation Method

**Syntax:** obj = Partial Least Squares(...Imputation Method( "Mittelwert"|"EM" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Imputationsmethode an. Die Methode „Mittelwert“ ersetzt fehlende Werte mit dem Mittelwert der nichtfehlenden Werte in derselben Spalte. Die EM-Methode nutzt das Verfahren „Erwartung-Maximierung (EM)“, um fehlende Werte einzusetzen.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));

```

### Impute Missing Data

**Syntax:** obj = Partial Least Squares(...Impute Missing Data( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Ersetzt fehlende Datenwerte in den Zielgrößen und Regressoren mit nichtfehlenden Werten. Ansonsten werden Zeilen mit fehlenden Werten aus der Analyse ausgeschlossen.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Go);

```

### Initial Number of Factors

**Syntax:** obj &lt;&lt; Partial Least Squares( Validation Method(...Initial Number of Factors( number )...) )

**Beschreibung:** Gibt die anfängliche Anzahl von Faktoren für die Kreuzvalidierung an.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ), Initial Number of Factors( 10 ) ), );obj << Go;

```

### Max Iterations

**Syntax:** obj = Partial Least Squares(...Max Iterations( number=1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die maximale Anzahl der Iterationen fest, die in der EM-Imputationsschleife ausgeführt werden sollen. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));

```

### Method

**Syntax:** obj = Partial Least Squares(...Fit( Method( NIPALS|SIMPLS)... )

**Beschreibung:** Gibt die Methode für die Anpassung der partiellen kleinsten Quadrate an.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Method( NIPALS ), Number of Factors( 11 ) ),	Go);

```

### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Beschreibung:** Öffnet das Startfenster „Modell anpassen“. Sie können ein Modell der partiellen kleinsten Quadrate über dieses Startfenster anpassen, indem Sie den Charakter „Partielle kleinste Quadrate“ auswählen.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Model Dialog;

```

### SVD

**Syntax:** obj &lt;&lt; SVD( Fast|Classical )

**Beschreibung:** Legt für die Implementierung des SWZ-Algorithmus zum Berechnen des Modells der partiellen kleinsten Quadrate „Schnell“ oder „Klassisch“ fest. Die Option „Schnell“ implementiert die Lanczos SWZ-Routine und die Option „Klassisch“ implementiert die Golub-Kahan-Routine.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ) ),	Go);obj << Fit( SVD( Classical ), Method( SIMPLS ) );

```

### Scaling

**Syntax:** obj = Partial Least Squares(...Scaling( state=0|1)...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Skaliert alle Y-Variablen und modelliert Effekte durch Dividieren jeder Spalte durch ihre Standardabweichung. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Scaling( 0 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed( number )

**Beschreibung:** Gibt den zufälligen Startwert für die Berechnung eines Modells der partiellen kleinsten Quadrate mit Kreuzvalidierung an.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Set Random Seed( 12345 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Validation Method

**Syntax:** obj &lt;&lt; Validation Method( KFold( number )|Holdback( fraction )|"Leave-One-Out"|None, Initial Number of Factors( number ) )

**Beschreibung:** Legt die Methode für die Validierung des Modells fest.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),	Go);

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Partial Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Freq( :_freqcol ),	Go);

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

## Zugehörige Konstruktoren

### Partial Least Squares

**Syntax:** Partial Least Squares( Y( columns ), X( columns ) )

**Beschreibung:** Passt ein Modell mit latenten Faktoren an eine oder mehr Zielgrößenvariablen an. Dadurch können Modelle angepasst werden, wenn erklärende Variablen hochgradig korreliert sind oder wenn es mehr erklärende Variablen als Beobachtungen gibt.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Go);

```

## Partial Least Squares Fit

### Elementmeldungen

#### Coefficient Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Coefficient Plots( state=0|1 ))

**Beschreibung:** Zeigt Diagramme der Modellkoeffizienten für jede Zielgröße über die X-Variablen an oder blendet sie aus. Es gibt ein Diagramm für die zentrierten und skalierten Daten und ein Diagramm für die ursprünglichen Daten.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Coefficient Plots( 1 ));

```

#### Correlation Loading Plot

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Correlation Loading Plot( state=0|1 ))

**Beschreibung:** Zeigt entweder ein einzelnes Streudiagramm oder eine Streudiagramm-Matrix der X- und Y-Ladungen überlagert im selben Diagramm an oder blendet es/sie aus. Die Streudiagramm-Matrix wird gezeigt, wenn die angegebene Anzahl von Faktoren größer als 2 ist.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Correlation Loading Plot( 2 ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Correlation Loading Plot( 4 ));

```

#### Diagnostics Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Diagnostics Plots( state=0|1 ))

**Beschreibung:** Zeigt Diagnosediagramme an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Diagnostics Plots( 1 ));

```

#### Distance Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Distance Plots( state=0|1 ))

**Beschreibung:** Zeigt die Distanzdiagramme an oder blendet sie aus. Es gibt ein Diagramm der Distanz von jeder Beobachtung zum X-Modell, ein Diagramm der Distanz von jeder Beobachtung zum Y-Modell und ein Streudiagramm der Distanzen zu beiden, dem X- und Y-Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Distance Plots( 1 ));

```

#### Fit Line

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Fit Line( state=0|1 ))

**Beschreibung:** Zeigt eine angepasste Gerade durch die Punkte in den X-Y-Scores-Diagrammen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));Wait( 2 );obj << (Fit[1] << Fit Line( 0 ));

```

#### Get Measures

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Get Measures)

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Get Measures);

```

#### Loading Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Loading Plots( state=0|1 ))

**Beschreibung:** Zeigt die Diagramme der X- und Y-Ladungen für jeden extrahierten Faktor an oder blendet sie aus. Es gibt separate Diagramme für die X- und Y-Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Loading Plots( 1 ));

```

#### Loading Scatterplot Matrices

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Loading Scatterplot Matrices( state=0|1 ))

**Beschreibung:** Zeigt Streudiagrammmatrizen der X- und Y-Ladungen an oder blendet sie aus. Es gibt separate Streudiagrammmatrizen für die X- und Y-Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Loading Scatterplot Matrices( 1 ));

```

#### Make Model Using VIP

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Make Model Using VIP)

**Beschreibung:** Öffnet und befüllt ein Startfenster mit den als Y-Variablen eingegebenen angemessenen Zielgrößen und den Variablen, deren VIPs die als X-Variablen eingegebene Schwelle überschritten.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Make Model Using VIP);

```

#### Model Driven Multivariate Control Chart for Saved X Scores

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Model Driven Multivariate Control Chart for Saved X Scores)

**Beschreibung:** Speichert die Formeln für jeden X-Score und ruft das Startfenster für die modellgesteuerte multivariate Qualitätsregelkarte (MDMCC) auf.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Model Driven Multivariate Control Chart for Saved X Scores);

```

#### Percent Variation Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Percent Variation Plots( state=0|1 ))

**Beschreibung:** Zeigt die Diagramme des Prozentwerts erklärte Variation für X-Effekte und für Y-Zielgrößen an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Percent variation plots( 1 ));

```

#### Profiler

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Profiler( state=0|1 ))

**Beschreibung:** Zeigt ein Analysediagramm für jede Zielgröße an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Profiler( 1 ));

```

#### Profiler for Predicteds

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Model Driven Multivariate Control Chart for Saved X Scores)

**Beschreibung:** Speichert die Formeln für jedes Y als Funktion des X-Score und ruft das Startfenster für das Analysediagramm auf.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Profiler for Predicteds);

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Publish Prediction Formula)

**Beschreibung:** Erstellt eine Vorhersageformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Publish Prediction Formula);

```

#### Publish Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Publish Score Formula)

**Beschreibung:** Erstellt X- und Y-Score-Formeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Publish Score Formula);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**Beschreibung:** Entfernt den Modellbericht aus dem Hauptbericht der Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));Wait( 3 );obj << (Fit[1] << Remove Fit);

```

#### Save Distance

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Distance)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten die Werte für Distanz-zu-X-Modell (DModX) und Distanz-zu-Y-Modell (DModY).

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Distance);

```

#### Save Distance as X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Distance as X Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten Formeln für Distanz-zu-X-Modell (DModX) und Distanz-zu-Y-Modell (DModY), bei denen es sich um Funktionen der X-Score-Formeln handelt.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Distance as X Score Formula);

```

#### Save Imputation

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Imputation)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jede X- und Y-Variable gibt es eine Spalte, die die ursprüngliche Datenspalte enthält, wobei fehlende Werte durch ihre eingesetzten Werte ersetzt wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));obj << (Fit[1] << Save Imputation);

```

#### Save Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Indiv Confidence Limit Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es Spalten für die unteren und oberen Konfidenzgrenzen für eine einzelne Vorhersage, die Funktionen der X-Score-Formeln sind. Die Standardstufe für Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Indiv Confidence Limit Formula);

```

#### Save Loadings

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Loadings)

**Beschreibung:** Speichert Spalten in zwei neuen Datentabellen. Es gibt eine Datentabelle, die die Ladungen für die X-Variablen, und Datentabelle, die die Ladungen für die Y-Variablen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Loadings);

```

#### Save Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Mean Confidence Limit Formula( &lt;alpha=0.05&gt; ))

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es Spalten für die unteren und oberen Konfidenzgrenzen für die mittlere Zielgröße, die Funktionen der X-Score-Formeln sind. Die Standardstufe für Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Mean Confidence Limit Formula);

```

#### Save Percent Variation Explained For X Effects

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Percent Variation Explained For X Effects)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jede X-Variable gibt es eine Spalte, die den Prozentwert erklärte Variation über alle extrahierten Faktoren enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Percent Variation Explained For X Effects);

```

#### Save Percent Variation Explained For Y Responses

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Percent Variation Explained For Y Responses)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die den Prozentwert erklärte Variation über alle extrahierten Faktoren enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Percent Variation Explained For Y Responses);

```

#### Save Prediction As X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Prediction as X Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die eine Vorhersageformel enthält, bei der es sich um eine Funktion der X-Score-Formeln handelt.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Prediction as X Score Formula);

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Prediction Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die eine Vorhersageformel enthält, bei der es sich um eine Funktion der X-Variablen handelt.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Prediction Formula);

```

#### Save Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jeden extrahierten Faktor gibt es eine Spalte, die eine X-Score-Formel enthält, und eine Spalte, die eine Y-Score-Formel enthält. Die X-Score-Formeln sind Funktionen der X-Variablen und die Y-Score-Formeln sind Funktionen der X-Score-Formeln.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Score Formula);

```

#### Save Scores

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Scores)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jeden extrahierten Faktor gibt es eine Spalte, die die X-Scores enthält, und eine Spalte, die die Y-Scores enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Scores);

```

#### Save Standard Errors of Prediction Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standard Errors of Prediction Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die die Formel für den Standardfehler des vorhergesagten Mittelwerts enthält, bei der es sich um eine Funktion der X-Variablen handelt.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standard Errors of Prediction Formula);

```

#### Save Standardized Loadings

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standardized Loadings)

**Beschreibung:** Speichert Spalten in zwei neuen Datentabellen. Es gibt eine Datentabelle, die die standardisierten Ladungen für die X-Variablen, und Datentabelle, die die standardisierten Ladungen für die Y-Variablen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standardized Loadings);

```

#### Save Standardized Scores

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standardized Scores)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten die standardisierten X- und Y-Scores für jeden extrahierten Faktor.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standardized Scores);

```

#### Save T Square

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save T Square)

**Beschreibung:** Speichert eine neue Formel in der ursprünglichen Datentabelle. Die neue Spalte enthält die T-Quadrat-Formel als eine Funktion der X-Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save T Square);

```

#### Save T Square as X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save T Square as X Score Formula)

**Beschreibung:** Speichert eine neue Formel in der ursprünglichen Datentabelle. Die neue Spalte enthält die T-Quadrat-Formel als eine Funktion der X-Score-Formeln.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save T Square as X Score Formula);

```

#### Save Validation

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Validation)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte enthält Zahlen, die anzeigen, wie jede Beobachtung in der Validierung verwendet wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Validation);

```

#### Save X Predicted Values

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Predicted Values)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede X-Variable gibt es eine Spalte, die die vorhergesagten X-Werte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Predicted Values);

```

#### Save X Prediction as X Score Formula

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Prediction as X Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede X-Variable gibt es eine Spalte, die eine Vorhersageformel enthält, bei der es sich um eine Funktion der X-Score-Formeln handelt.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Prediction as X Score Formula);

```

#### Save X Residuals

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Residuals)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede X-Variable gibt es eine Spalte, die die X-Residuenwerte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Residuals);

```

#### Save X Score Formula

**Syntax:** obj &lt;&lt; Save X Score Formula

#### Save X Weights

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Weights)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jeden extrahierten Faktor gibt es eine Spalte, die die Gewichtungen für die X-Variablen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Weights);

```

#### Save Y Predicted Values

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Y Predicted Values)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die die vorhergesagten Y-Werte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Y Predicted Values);

```

#### Save Y Residuals

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Y Residuals)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die die Y-Residuenwerte enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Y Residuals);

```

#### Score Scatterplot Matrices

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Scatterplot Matrices( state=0|1 ))

**Beschreibung:** Zeigt eine Streudiagramm-Matrix der X-Scores und eine Streudiagramm-Matrix der Y-Scores an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Score Scatterplot Matrices( 1 ));

```

#### Set VIP Threshold

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Set VIP Threshold( number=0.8 ))

**Beschreibung:** Legt die Schwellenwertstufe für das Variablengewichtungsdiagramm, die Varianzgewichtungstabelle und die VIP- vs. Koeffizientendiagramme fest. Standardmäßig „0.8“.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Variable Importance Plot( 1 ));Wait( 3 );obj << (Fit[1] << Set VIP Threshold( 0.5 ));

```

#### Show Confidence Band

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Show Confidence Band( state=0|1 ))

**Beschreibung:** Zeigt 95%-Konfidenzbänder für die angepassten Geraden in den X-Y-Score-Diagrammen an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Show Confidence Band( 1 ));

```

#### Spectral Profiler

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Spectral Profiler( state=0|1 ))

**Beschreibung:** Zeigt ein einzelnes Analysediagramm an oder blendet es aus, in dem alle Zielgrößenvariablen in der ersten Zelle des Diagramms erscheinen.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Spectral Profiler( 1 ));

```

#### T Square Plot

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; T Square Plot( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm der T-Quadrat-Kenngröße für jede Beobachtung zusammen mit einer Eingriffsgrenze an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << T Square Plot( 1 ));

```

#### VIP vs Coefficients Plots

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; VIP vs Coefficients Plots( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm der VIP-Kenngrößen gegen die Modellkoeffizienten an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << VIP vs Coefficients Plots( 1 ));

```

#### Variable Importance Plot

**Syntax:** obj &lt;&lt; (Fit[number] &lt;&lt; Variable Importance Plot( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm an oder blendet es aus, in dem der Beitrag jeder Variablen zum Modell zusammengefasst wird.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Variable Importance Plot( 1 ));

```

