# Variability Chart



## Elementmeldungen

### Analysis Type

**Syntax:** obj = Variability Chart(...Analysis Type( "Beste Analyse auswählen (EMS REML Bayes)"|"Beste Analyse auswählen (EMS REML)"|"REML-Analyse verwenden"|"Bayessche Analyse verwenden" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Identifiziert die Methode für die Berechnung der Varianzkomponenten.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Conv Limit

**Syntax:** obj = Variability Chart(...Conv Limit( number )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Konvergenzgrenze fest, die zum Berechnen der Varianzkomponenten verwendet wird. Diese Option wirkt sich nur auf REML-Analysen aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Conv Limit( 0.0000001 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Edit MSA Metadata

**Syntax:** obj &lt;&lt; Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), &lt;Historical Mean( number ), Historical Process Sigma( number )&gt; ) )

**Beschreibung:** Öffnet ein Fenster, in dem Sie Toleranzbereich, Toleranzgrenzen, historischen Mittelwert und historisches Prozesssigma für alle Analysen hinzufügen oder bearbeiten können. Die Berichte werden automatisch aktualisiert.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Measurement( Lower Tolerance( .1 ), Upper Tolerance( 1.4 ) ) );

```

### Max Iter

**Syntax:** obj = Variability Chart(...Max Iter( number )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die maximale Anzahl der Iterationen fest, die zum Berechnen der Varianzkomponenten verwendet wird. Diese Option wirkt sich nur auf REML-Analysen aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Max Iter( 50 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Function Evals

**Syntax:** obj = Variability Chart(...Number Function Evals( number )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die maximale Anzahl von Funktionsauswertungen fest, die zum Berechnen der Varianzkomponenten verwendet wird. Diese Option wirkt sich nur auf Bayessche Analysen aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Function Evals( 10000 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Integration Abscissas

**Syntax:** obj = Variability Chart(...Number Integration Abscissas( number )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Anzahl von Integrationsabszissen fest, die zum Berechnen der Varianzkomponenten verwendet werden. Diese Option wirkt sich nur auf Bayessche Analysen aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Integration Abscissas( 90 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**Syntax:** obj &lt;&lt; Save All Metadata to Table( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**Beschreibung:** Erstellt eine neue Datentabelle, die die MSA-Metadaten und das Messsigma für jede Spalte mit Messdaten enthält. Die Tabelle hat ein langes Format und enthält eine Zeile für jede Messvariable. Es gibt die Option, die unteren und oberen Toleranzwerte als zusätzliche Spalten in der Datentabelle zu speichern.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**Syntax:** obj &lt;&lt; Save Metadata as Column Properties( &lt; MSA( 0|1 ) &gt;, &lt; Measurement Sigma( 0|1 ) &gt;, &lt; Tolerance as Specs( 0|1 ) &gt; )

**Beschreibung:** Für jede Spalte mit Messdaten werden die MSA-Metadaten und das Messsigma als Spalteneigenschaften innerhalb der Spalte der ursprünglichen Datentabelle gespeichert. Es gibt die Option, die unteren und oberen Toleranzwerte als Spalteneigenschaften „Spezifikationsgrenzen“ zu speichern.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**Syntax:** obj = Variability Chart(...Set Alpha Level( number )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Ändert das Alpha-Niveau, das für Konfidenzintervalle und Mittelwertdiamanten verwendet wird. Diese Option entspricht der Option „Alpha-Niveau festlegen“ im Startfenster „Variabilitätsdiagramm“.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Set Alpha Level( .1 )
);
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

### Set Random Seed

**Syntax:** obj = Variability Chart(...Set Random Seed( number )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt für den zufälligen Startwert einen spezifischen Wert fest, um sicherzustellen, dass alle nachfolgenden Berechnungen den gleichen Startwert verwenden und reproduzierbar sind.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Set Random Seed( 1234 )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

### Sigma Multiplier

**Syntax:** obj = Variability Chart(...Sigma Multiplier( number=6 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt einen konstanten Wert an, der mit Sigma multipliziert wird. Standardmäßig „6“.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Sigma Multiplier( 5.15 ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);

```

### Variability Analysis

**Syntax:** obj &lt;&lt; Variability Analysis

**Beschreibung:** Gibt die Optionen für den Bericht der Messsystemanalyse für jede Zielgröße der Messung an.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Variance Components( 1 ), "Gauge R&R Report"n( 1 ) )
);

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Variability Chart(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Spalten

### By

**Syntax:** obj = Variability Chart(...&lt;By( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Mehrere Berichte erzeugen, einen für jede Stufe der Variable(n).

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :new Y ),
	X( :Operator, :part ),
	Model( "Crossed" ),
	By( :Instrument )
);

```

### Freq

**Syntax:** obj = Variability Chart(...&lt;Freq( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Eine Spalte, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Freq( _freqcol ) );

```

### Grouping

**Syntax:** obj = Variability Chart(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt kategoriale Spalte(n) als Gruppierungsvariablen an. Die letzte Spalte in der Liste muss das gemessene Teil oder die gemessene Einheit sein.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Response

**Syntax:** obj = Variability Chart(...Response( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die stetige(n) Spalte(n) von Messwerten an.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

### Standard

**Syntax:** obj = Variability Chart(...&lt;Standard( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Standard- oder Referenzspalte an, die die bekannten Werte für das gemessene Teil enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Variability Analysis( :Response, Std Dev Chart( 0 ), Linearity Study( 1 ) )
);

```

### X

**Syntax:** obj = Variability Chart(...&lt;X( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt kategoriale Spalte(n) als Gruppierungsvariablen an. Die letzte Spalte in der Liste muss das gemessene Teil oder die gemessene Einheit sein.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Y

**Syntax:** obj = Variability Chart(...Y( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die stetige(n) Spalte(n) von Messwerten an.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

## Zugehörige Konstruktoren

### Variability Chart

**Syntax:** Variability Chart( Y( column ), X( columns ) )

**Beschreibung:** Analysiert stetige Messungen, um die Leistung Ihres Messsystems zu ermitteln. Sie können auch eine Messsystemstudie durchführen, um Kennzahlen der Variation in Ihren Daten anzuzeigen.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

## Variability Analysis > Bias Report

### Elementmeldungen

#### Confidence Intervals

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Confidence Intervals( state=0|1 )))

**Beschreibung:** Zeigt die Konfidenzintervalle im Graphen im Abschnitt „Abweichungsbericht nach Standard“ an oder blendet sie aus. Diese Option ist nur verfügbar, wenn im Startfenster eine Standardvariable angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Confidence Intervals( 1 ) ));

```

#### Measurement Error Graphs

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Measurement Error Graphs( state=0|1 )))

**Beschreibung:** Zeigt Messfehlerdiagramme der systematischen Abweichung nach Teil an oder blendet sie aus. Diese Option ist nur verfügbar, wenn im Startfenster eine Standardvariable angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Measurement Error Graphs( 1 ) ));

```

## Variability Analysis > Heterogeneity of Variance Test

### Elementmeldungen

#### Point Options

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Point Options("Show Needles" | "Show Connected Points" | "Show Only Points")))

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Point Options( Show Only Points ) ));

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Set Alpha Level( number )))

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Set Alpha Level( 0.1 ) ));

```

#### Show Center Line

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Center Line(state=0|1)))

**Beschreibung:** Zeigt die Mittellinie (Gesamtmittelwert der ADM) an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Center Line( 0 ) ));

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limit Shading(state=0|1)))

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im ANOMV-Levene (ADM)-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limit Shading( 0 ) ));

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limits(state=0|1)))

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im ANOMV-Levene (ADM)-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limits( 0 ) ));

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Summary Report(state=0|1)))

**Beschreibung:** Zeigt einen Bericht mit den Standardabweichungen der Gruppen und den entsprechenden Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Summary Report( 1 ) ));

```

## Variability Analysis > Linearity Study

### Elementmeldungen

#### Linearity by Groups

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Linearity By Groups( state=0|1 )))

**Beschreibung:** Zeigt für jeden Faktor im Modell einzelne Linearitätsdiagramme an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Linearity By Groups( 1 ) ));

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Set Alpha Level( number )))

**Beschreibung:** Gibt das Alpha-Niveau an, das zum Berechnen der Konfidenzgrenzen der systematischen Abweichung verwendet wird. Standardmäßig „0.05“.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Set Alpha Level( .01 ) ));

```

#### Show Avg Bias Points

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Avg Bias Points( state=0|1 )))

**Beschreibung:** Zeigt die durchschnittlichen Abweichungspunkte im Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Bias Points( state=0|1 )))

**Beschreibung:** Zeigt die Abweichungspunkte im Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Fit Confidence Curves( state=0|1 )))

**Beschreibung:** Zeigt die Konfidenzkurven der Anpassung im Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));

```

#### Show Line of Fit

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Line of Fit( state=0|1 )))

**Beschreibung:** Zeigt die Anpassungsgerade im Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Overall Avg Bias Line( state=0|1 )))

**Beschreibung:** Zeigt die Linie der gesamten durchschnittlichen systematischen Abweichung im Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));

```

## Variability Analysis

### Elementmeldungen

#### AIAG Labels

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; AIAG Labels( state=0|1 ))

**Beschreibung:** Blendet die Beschriftungen in der Ausgabe der Messsystemanalyse R&R ein oder aus. Die Beschriftungen werden von der Automotive Industry Action Group (AIAG) definiert. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) ),

);
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 1 ));

```

#### Bericht Messsystemanalyse R&R

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; "Gauge R & R Report"n( state=0|1 ))

**Beschreibung:** Berechnet einen Übersichtsbericht der Messsystemanalyse R&R (Wiederholbarkeit und Reproduzierbarkeit) und zeigt ihn an.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),

);
obj << (Variability Analysis[1] << "Gauge R&R Report"n( 1 ));

```

#### Bias Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report( state=0|1 ))

**Beschreibung:** Blendet einen Bericht ein oder aus, der die durchschnittliche Differenz zwischen den beobachteten Werten und dem Standard enthält. Diese Option ist nur verfügbar, wenn eine Standardvariable angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( 1 ));

```

#### Connect Cell Means

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Connect Cell Means( state=0|1 ))

**Beschreibung:** Zeigt eine Linie an oder blendet sie aus, die die Zellenmittelwerte innerhalb einer Gruppe von Zellen im Variabilitätsdiagramm verbindet.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Connect Cell Means( 1 ));

```

#### Discrimination Ratio

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Discrimination Ratio( state=0|1 ))

**Beschreibung:** Blendet das Diskriminationsverhältnis für das vorgegebene Modell ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Discrimination Ratio( 1 ));

```

#### Edit MSA Metadata

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Edit MSA Metadata(Lower Tolerance(number), Upper Tolerance(number), Tolerance Range(number), Historical Mean(number), Historical Process Sigma(number)))

**Beschreibung:** Öffnet ein Fenster, in dem Sie Toleranzbereich, Toleranzgrenzen, historischen Mittelwert und historisches Prozesssigma für alle Analysen hinzufügen oder bearbeiten können. Die Berichte werden automatisch aktualisiert.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (Variability Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( .1 ),
	Upper Tolerance( 1.2 )
));

```

#### Group Means of Std Dev

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Group Means of Std Dev( state=0|1 ))

**Beschreibung:** Zeigt die Mittelwertlinien für Gruppen von Standardabweichungen der Zellen im Standardabweichungsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Group Means of Std Dev( 1 ));

```

#### Heterogeneity of Variance Tests

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der Varianzen über Gruppen vergleicht. Der Bericht enthält Graphen, die den Test auf Varianzheterogenität für jeden Faktor im Modell zeigen.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

#### Linearity Study

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study( state=0|1 ))

**Beschreibung:** Führt eine Regression durch, die die Standardwerte als X-Variable und die systematische Abweichung als Y-Variable verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( 1.1 ) ) ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Linearity Study( 1 ));

```

#### Mean Diamonds

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Diamonds( state=0|1 ))

**Beschreibung:** Blendet Mittelwertdiamanten im Variabilitätsdiagramm ein oder aus. Die Konfidenzintervalle verwenden die Standardabweichung innerhalb der Gruppe für jede Zelle.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

#### Mean Plots

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Plots( state=0|1 ))

**Beschreibung:** Blendet ein Diagramm der Faktorstufenmittelwerte für jeden Faktor im Modell ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Mean Plots( 1 ));

```

#### Mean of Std Dev

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean of Std Dev( state=0|1 ))

**Beschreibung:** Zeigt eine graue gestrichelte Linie an der mittleren Standardabweichung im Standardabweichungsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean of Std Dev( 1 ));

```

#### Misclassification Probabilities

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Misclassification Probabilities( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht mit den Wahrscheinlichkeiten der Fehlklassifikation für das angegebene Modell an oder blendet ihn aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Misclassification Probabilities( 1 ));

```

#### Points Jittered

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Points Jittered( state=0|1 ))

**Beschreibung:** Fügt zufälliges horizontales Zittern an den Punkten im Variabilitätsdiagramm hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Points Jittered( 1 ));

```

#### S Control Limits

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; S Control Limits( state=0|1 ))

**Beschreibung:** Zeigt rote Linien an der unteren Eingriffsgrenze (UEG) und der oberen Eingriffsgrenze (OEG) im Standardabweichungsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << S Control Limits( 1 ));

```

#### Show Box Plots

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Box Plots( state=0|1 ))

**Beschreibung:** Zeigt Box-Plots für jede Zelle im Variabilitätsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Box Plots( 1 ));

```

#### Show Cell Means

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Cell Means( state=0|1 ))

**Beschreibung:** Zeigt das Mittelwertsymbol für jede Zelle im Variabilitätsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 1 ));

```

#### Show Grand Mean

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Mean( state=0|1 ))

**Beschreibung:** Zeigt den Gesamtmittelwert an oder blendet ihn aus, der als graue gepunktete Linie über den gesamten Graphen dargestellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Mean( 1 ));

```

#### Show Grand Median

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Median( state=0|1 ))

**Beschreibung:** Zeigt den Gesamtmedian an oder blendet ihn aus, der durch eine blaue gepunktete Linie über den gesamten Graphen dargestellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Median( 1 ));

```

#### Show Group Means

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Group Means( state=0|1 ))

**Beschreibung:** Zeigt den Mittelwert für Gruppen von Zellen an oder blendet ihn aus, der durch eine durchgezogene horizontale Linie dargestellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Group Means( 1 ));

```

#### Show Points

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Points( state=0|1 ))

**Beschreibung:** Zeigt die Punkte im Variabilitätsdiagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 1 ));

```

#### Show Range Bars

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Range Bars( state=0|1 ))

**Beschreibung:** Blendet die Balken ein oder aus, die den minimalen und maximalen Wert jeder Zelle anzeigen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 1 ));

```

#### Show Separators

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Separators( state=0|1 ))

**Beschreibung:** Zeigt die Trennlinien zwischen den Stufen der Gruppierungsvariablen im Variabilitätsdiagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 1 ));

```

#### Show Standard Mean

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Standard Mean( state=0|1 ))

**Beschreibung:** Zeigt eine Linie am Mittelwert der Standardwerte an oder blendet sie aus. Diese Option ist nur verfügbar, wenn im Startfenster eine Standardvariable angegeben ist.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Standard Mean( 1 ));

```

#### Std Dev Chart

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Chart( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm an oder blendet es aus, in dem die Standardabweichung jeder Zelle dargestellt wird. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 1 ));

```

#### Std Dev Plots

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Plots( state=0|1 ))

**Beschreibung:** Zeigt Diagramme der Standardabweichungen gruppiert nach jeder Faktorstufe an oder blendet sie aus. Für jeden Faktor im Modell wird ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Std Dev Plots( 1 ));

```

#### Variability Chart

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Chart( state=0|1 ))

**Beschreibung:** Zeigt das Variabilitätsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 1 ));

```

#### Variability Summary Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Summary Report( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der Mittelwert, Standardabweichung, Variationskoeffizient (CV), Standardfehler des Mittelwerts, das untere und obere Konfidenzintervall anzeigt. Minimum, Maximum, Spannweite, Median und Anzahl der Beobachtungen werden ebenfalls angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Variability Summary Report( 1 ));

```

#### Variance Components

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variance Components( state=0|1 ))

**Beschreibung:** Zeigt die Varianzkomponenten für ein spezifisches Modell an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

#### Vertical Charts

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Vertical Charts( state=0|1 ))

**Beschreibung:** Dreht das Variabilitätsdiagramm.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Vertical Charts( 1 ));

```

#### XBar Control Limits

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; XBar Control Limits( state=0|1 ))

**Beschreibung:** Zeigt Linien an der unteren Eingriffsgrenze (UEG) und der oberen Eingriffsgrenze (OEG) im Variabilitätsdiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << XBar Control Limits( 1 ));

```

