# Fit Group



## Elementmeldungen

### Arrange in Rows

**Syntax:** obj &lt;&lt; Arrange in Rows( number )

**Beschreibung:** Ordnet die Berichte für die Plattformanalysen in einer angegebenen Anzahl von Zeilen neu an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
Wait( 1 );
obj << Arrange in Rows( 2 );

```

### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Beschreibung:** Blendet eine Konturanalyse für alle Zielgrößen ein oder aus. Sie können die Effekte der Modellterme auf alle Zielgrößen gleichzeitg untersuchen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Contour Profiler( 1 );

```

### Order by Goodness of Fit

**Syntax:** obj &lt;&lt; Order by Goodness of Fit

**Beschreibung:** Sortiert die Berichte nach Signifikanz der Anpassung, wobei die Signifikanz durch die statistische Kenngröße R-Quadrat für jedes Modell gemessen wird. Diese Option ist nur für Plattformen anwendbar, die die R-Quadrat-Kenngröße auf Plattformebene ausgeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Bivariate( Y( :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Fit Line( 1 ) ),
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	)
);
Wait( 1 );
obj << Order by Goodness of Fit;

```

### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet eine Vorhersageanalyse für alle Zielgrößen ein oder aus. Sie können die Effekte der Modellterme auf alle Zielgrößen sehen. Sie können auch mehrere Optimierungen über die Zielgrößen durchführen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Profiler( 1 );

```

### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Beschreibung:** Blendet separate Wirkungsflächenanalysen für jede Zielgröße ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Surface Profiler( 1 );

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

Names Default To Here( 1 );
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

**Anonyme Voreinstellung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );

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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Zugehörige Konstruktoren

### Fit Group

**Syntax:** Fit Group( model1, model2, ... );Fit Group( model1; model2; ... )

**Beschreibung:** Gruppiert Anpassungen von kleinsten Quadraten, nichtlinearen, neuronalen, Gauß-Prozess- und gemischten Modellen in dem gleichen Ausgabefenster mit einem gemeinsamen Analysediagramm.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE,
			:SILANE * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);

```

