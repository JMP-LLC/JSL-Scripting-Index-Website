# Pareto Plot



## Elementmeldungen

### Alias

**Syntax:** obj << Alias( cause, alias )

**Beschreibung:** Legt einen unterschiedlichen Namen für eine Ursache fest.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Alias( "doping", "substitution" ) );

```

### Bar Label Format

**Syntax:** obj << Bar Label Format

**Beschreibung:** Legt das Format für die Pareto-Balkenbeschriftungen fest.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label( 1 ),
	Bar Label Format( "Currency", "USD", Use thousands separator( 0 ), 12, 0 )
);

```

### Bar Style

**Syntax:** obj << Bar Style( "Balken"|"Gleitend" )

**Beschreibung:** Steuert die Anzeige der Pareto-Balken.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Bar Style( Float );

```

### Cause Colors

**Syntax:** obj << Cause Colors( { { causeName, color },  ...} )

**Beschreibung:** Ändert die Farbe der angegebenen Balken.

**JMP Version hinzugefügt:** 17

**Alle Farben**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( "Orange" );

```

**Einfarbige Liste**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {"corrosion", "Light Gray"} );

```

**Einzelne RGB-Farbe**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {117, 150, 200} );

```

**Mehrfarbige Liste**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {{"miscellaneous", "Purple"}, {"silicon defect", "Red"}} );

```

### Cause Labels

**Syntax:** obj << Cause Labels( { { causeName, 0|1 },  ...} )

**Beschreibung:** Zeigt die Anzahl als Beschriftung für die angegebenen Balken an.

**JMP Version hinzugefügt:** 17

**Alle Ursachen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( 1 ) );

```

**Einzelne Ursache**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {"contamination", 1} )
);

```

**Liste der Ursachen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} )
);

```

### Cause Markers

**Syntax:** obj << Cause Markers( { { causeName, marker },  ...} )

**Beschreibung:** Ändert das Symbol für den kumulierten Prozentsatz im Diagramm für die angegebenen Balken.

**JMP Version hinzugefügt:** 17

**Alle Ursachen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( 1 );

```

**Einzelne Ursache**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( {"silicon defect", "Diamond"} );

```

**Liste der Ursachen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( {{"miscellaneous", "Square"}, {"silicon defect", "Diamond"}} );

```

### Combine Causes

**Syntax:** obj << Combine Causes( {cause1, cause2, ... } | << First(N) | << Last(N), <label> )

**Beschreibung:** Kombiniert die angegebenen Ursachen zu einer einzelnen Ursache. Die Ursachen können als Liste von Ursachennamen angegeben werden oder es kann die erste oder letzte Meldung mit einer Anzahl von zu kombinierenden Ursachen gesendet werden. Optional kann eine Beschriftung für die kombinierten Ursachen angegeben werden.

**Beschriftet**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Others" )
);

```

**Keine Beschriftung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 2 );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );

```

**Letzte senden**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( <<Last( 2 ), "Last 2" )
);

```

### Cum Line Connect Style

**Syntax:** obj << Cum Line Connect Style( "Linie"|"Kurve"|"Schritt " )

**Beschreibung:** Steuert den Verbindungsstil der Linie für kumulierte Prozent.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Line Connect Style( "Step" );

```

### Cum Percent Curve Color

**Syntax:** obj << Cum Percent Curve Color( color )

**Beschreibung:** Ändert die Farbe der Kurve des kumulierten Prozentsatzes im Graphen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Percent Curve Color( "Red" );

```

### Cum Percent Label Format

**Syntax:** obj << Cum Percent Label Format

**Beschreibung:** Legt das Format für die Symbolbeschriftungen für kumulierte Prozent fest.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label Cum Percent Points( 1 ),
	Cum Percent Label Format( "Percent", 12, 1 )
);

```

### Get Causes

**Syntax:** obj << Get Causes( <"First" | "Last" | "First %" | "Last %", number> )

**Beschreibung:** Gibt eine Liste von Ursachennamen aus dem Pareto-Diagramm basierend auf der aktuellen Reihenfolge der Darstellung zurück. Wenn keine Optionen angegeben werden, werden alle Ursachen zurückgegeben. Andernfalls wird das Schlüsselwort verwendet und die Anzahl der zurückzugebenden ersten N, letzten N, ersten N Prozent oder letzten N Prozent.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "First", 3 );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "Last %", 10 );

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Freq( :Count ),
	Combine Causes( {"Corrosion", "Metallization", "Doping"}, "3 Others" ),
	Move to Last( {"3 Others"} )
);
obj << Get Causes( "Last", 3 );

```

### Group Settings

**Syntax:** obj << Group Settings( Column, <Levels In View( number )>, <Start Level( number ), <Show Title (0|1)>, <Title Color( color )>, <Levels Color( color )> )

**Beschreibung:** Steuert das Erscheinungsbild des gruppierten Pareto

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Group Settings(
		:clean,
		Levels In View( 1 ),
		Start Level( 1 ),
		Title Color( "Blue" ),
		Levels Color( "Light Blue" )
	)
);

```

### Label Cum Percent Points

**Syntax:** obj << Label Cum Percent Points( state=0|1 )

**Beschreibung:** Zeigt die Beschriftungen mit den kumulierten Prozentsätzen für jeden Balken im Graphen an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Label Cum Percent Points( 1 );

```

### Legend Position

**Syntax:** obj << Legend Position( ("Right" | "Bottom" | "Left" | "Top") )

**Beschreibung:** Legt die Position der Legende fest.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Legend Position( "Bottom" );

```

### Legend Settings

**Syntax:** obj << Legend Settings

**Beschreibung:** Öffnet ein Dialogfeld zum Ändern der Eigenschaften der Legende.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 1 );
obj << Legend Settings();

```

### Move to First

**Syntax:** obj << Move to First( {level1, level2, ...} | << First(N) | << Last(N) )

**Beschreibung:** Verschiebt den/die Balken für die angegebene(n) Stufe(n), sodass diese zuerst angezeigt wird/werden. Die Stufen können als Liste von Ursachennamen angegeben werden oder es kann die erste oder letzte Meldung mit einer Anzahl von zu kombinierenden Ursachen gesendet werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to First( {"corrosion", "doping"} );

```

### Move to Last

**Syntax:** obj << Move to Last( {level1, level2, ...} | << First(N) | << Last(N) )

**Beschreibung:** Verschiebt den/die Balken für die angegebene(n) Stufe(n), sodass diese zuletzt angezeigt wird/werden. Die Stufen können als Liste von Ursachennamen angegeben werden oder es kann die erste oder letzte Meldung mit einer Anzahl von zu kombinierenden Ursachen gesendet werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to Last( {"miscellaneous"} );

```

### N Legend

**Syntax:** obj << N Legend( state=0|1 )

**Beschreibung:** Zeigt die Gesamtstichprobengröße im Diagrammbereich an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << N Legend( 1 );

```

### No Plot

**Syntax:** obj << No Plot( state=0|1 )

**Beschreibung:** Schließt den Gliederungsknoten für das Pareto-Diagramm.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );
obj << No Plot( 1 );

```

### Orientation

**Syntax:** obj << Orientation( "Vertikal"|"Horizontal" )

**Beschreibung:** Steuert die Orientierung des Pareto-Diagramms.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Orientation( "Horizontal" );

```

### Pareto Line Connect Style

**Syntax:** obj << Pareto Line Connect Style( "Linie"|"Kurve"|"Schritt " )

**Beschreibung:** Steuert den Verbindungsstil der Pareto-Linien.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Show Pareto Bars( 0 )
);
obj << Pareto Line Connect Style( "Step" );

```

### Per Unit Rates

**Syntax:** obj << Per Unit Rates( state=0|1 )

**Beschreibung:** Vergleicht die Defektraten über Gruppen. Wenn eine Stichprobengröße angegeben wird, werden die Spalten für Defekte pro Einheit (DPU) und Teile pro Million (PPM) zum Bericht hinzugefügt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Per Unit Analysis( Constant( Sample Size( 1000 ) ) ),
	Freq( :Count )
);
obj << Per Unit Rates( 1 );

```

### Percent Scale

**Syntax:** obj << Percent Scale( state=0|1 )

**Beschreibung:** Zeigt die linke vertikale Achse als Prozentskala an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Percent Scale( 1 );

```

### Pie Chart

**Syntax:** obj << Pie Chart( state=0|1 )

**Beschreibung:** Zeigt die Balken als Tortendiagramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Pie Chart( 1 );

```

### Reorder Horizontal

**Syntax:** obj << Reorder Horizontal( level1, level2, ... )

**Beschreibung:** Ordnet horizontal gruppierte Pareto-Diagramme neu, wenn zwei oder mehr Gruppen vorhanden sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Reorder Horizontal( "before", "after" );

```

### Reorder Vertical

**Syntax:** obj << Reorder Vertical( level1, level2, ... )

**Beschreibung:** Ordnet vertikal gruppierte Pareto-Diagramme neu, wenn zwei oder mehr Variablen vorhanden sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Reorder Vertical( "Process B", "Process A" );

```

### Separate Causes

**Syntax:** obj << Separate Causes

**Beschreibung:** Trennt die kombinierten Ursachen in jeweils eigene Balken.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );
Wait( 2 );
obj << Separate Causes;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Other Causes" );
Wait( 2 );
obj << Separate Causes( "Other Causes" );

```

### Show Cum Percent Axis

**Syntax:** obj << Show Cum Percent Axis( state=0|1 )

**Beschreibung:** Zeigt die Achse des kumulierten Prozentsatzes auf der rechten Seite des Diagramms an bzw. blendet sie aus. Hinweis: Nur für das Diagramm ganz rechts verfügbar, wenn eine X- oder Gruppierungsvariable vorhanden ist. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Axis( 1 );

```

### Show Cum Percent Curve

**Syntax:** obj << Show Cum Percent Curve( state=0|1 )

**Beschreibung:** Zeigt die Kurve des kumulierten Prozentsatzes an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Curve( 1 );

```

### Show Cum Percent Points

**Syntax:** obj << Show Cum Percent Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte des kumulierten Prozentsatzes im Graphen an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Show Cum Percent Points( 1 );

```

### Show Error Bars

**Syntax:** obj << Show Error Bars( state=0|1 )

**Beschreibung:** Zeigt Fehlerbalken an den Pareto-Balken für den Konfidenzbereich an oder blendet sie aus.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Error Bars( 1 );

```

### Show Pareto Bars

**Syntax:** obj << Show Pareto Bars( state=0|1 )

**Beschreibung:** Zeigt die Balken, die den Wert für jede Ursache anzeigen, an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Show Pareto Line

**Syntax:** obj << Show Pareto Line( state=0|1 )

**Beschreibung:** Zeigt eine Linie an oder blendet sie aus, die die Werte für jede Ursache verbindet.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Line( 1 );

```

### Show Pareto Markers

**Syntax:** obj << Show Pareto Markers( state=0|1 )

**Beschreibung:** Zeigt Symbole am Wert für jede Ursache an oder blendet sie aus.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Markers( 1 );

```

### Subcategory Bar Style

**Syntax:** obj << Subcategory Bar Style( "Nebeneinander"|"Gestapelt"|"Aufzählungspunkt"|"Geschachtelt"|"Einzeln"|"Nadel"|"Gleitend" )

**Beschreibung:** Steuert die Anzeige der Balken, wenn eine Unterkategorie vorhanden ist.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Subset

**Syntax:** obj << Subset

**Beschreibung:** Erstellt eine Teildatentabelle aus der Auswahl im Pareto-Diagramm

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
dt << Select Where( :Causes == "Corrosion" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Subset;

```

### Swap Group Orientation

**Syntax:** obj << Swap Group Orientation( state=0|1 )

**Beschreibung:** Tauscht die horizontale und vertikale Gruppe. Wenn es nur eine Gruppe gibt, wird die Anzeigeorientierung gewechselt.

**JMP Version hinzugefügt:** 17

**Eine Gruppe**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

```

**Zwei Gruppen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

```

### Synchronize Y Axes

**Syntax:** obj << Synchronize Y Axes( state=0|1 )

**Beschreibung:** Sperrt die rechte Y-Achse, so dass Zoomen und Schwenken mit der linken Y-Achse synchronisiert wird Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Synchronize Y Axes( 0 );

```

### Tables Match Plot

**Syntax:** obj << Tables Match Plot( {<Per Unit Rates( 0|1 )>, <Test Rate Within Groups( 0|1 )>, <Test Rates Across Groups( 0|1 )>} )

**Beschreibung:** Legt fest, ob die Tabellen der Häufigkeitenanalyse die kombinierten Ursachenwerte anzeigen, die den Pareto-Diagrammen entsprechen, oder die nicht kombinierten ursprünglichen Ursachen. Der Wert 1 zeigt die kombinierten Ursachenwerte an. Der Wert 0 zeigt die nicht kombinierten Werte an. Nicht alle Tabellen müssen im Befehl angegeben werden.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Per Unit Rates( 1 ),
	Test Rate Within Groups( 1 ),
	Test Rates Across Groups( 1 ),
	Combine Causes( {"silicon defect", "oxide defect", "doping"}, "3 Others" ),
	Move to Last( {"corrosion", "miscellaneous", "3 Others"} )
);
obj << Tables Match Plot(
	{Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )}
);

```

### Test Rate Within Groups

**Syntax:** obj << Test Rate Within Groups( state=0|1 )

**Beschreibung:** Führt einen Likelihood-Verhältnistest innerhalb von Gruppen aus und testet so, ob die Ursachen innerhalb der Gruppen gleiche Verhältnisse haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
obj << Test Rate Within Groups( 1 );

```

### Test Rates Across Groups

**Syntax:** obj << Test Rates Across Groups( state=0|1 )

**Beschreibung:** Führt einen Likelihood-Verhältnistest über Gruppen aus und testet so, ob die Ursachen über die Gruppen gleiche Verhältnisse haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
obj << Test Rates Across Groups( 1 );

```

### Threshold of Combined Causes

**Syntax:** obj << Threshold of Combined Causes

**Beschreibung:** Kombiniert Ursachen, die unter den Schwellenwert fallen. Das geschieht beim ersten Plattformstart.

**Ende %**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Tail %( 25 ) )
);

```

**Häufigkeiten**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Count( 5 ) )
);

```

### Ungroup Plots

**Syntax:** obj << Ungroup Plots( state=0|1 )

**Beschreibung:** Trennt gruppierte Pareto-Diagramme, wenn zwei oder mehr Gruppen vorhanden sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Ungroup Plots( 1 );

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj << Action

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

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

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

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

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

**Syntax:** obj << Local Data Filter

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

**Syntax:** obj << Paste Local Data Filter

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

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

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

**Syntax:** obj << Remove Local Data Filter

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

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

**Syntax:** obj << Sync to Data Table Changes

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

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Show Pareto Bars(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

Names Default To Here( 1 );
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

**Syntax:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );

```

### Cause

**Syntax:** obj << Cause( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Freq

**Syntax:** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Freq( _freqcol )
);
obj << Show Pareto Bars( 0 );

```

### Grouping

**Syntax:** obj << Grouping( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Subcategory

**Syntax:** obj << Subcategory( column )

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Weight

**Syntax:** obj << Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Weight( _weightcol )
);
obj << Show Pareto Bars( 0 );

```

### X

**Syntax:** obj << X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Y

**Syntax:** obj << Y( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

