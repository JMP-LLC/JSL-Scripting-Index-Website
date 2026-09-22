# Control Chart Builder



## Elementmeldungen

### Add Limits

**Syntax:** obj &lt;&lt; Chart( Position( number ), Add Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Beschreibung:** Fügt einen zusätzlichen Satz Grenzen für die angegebene Regelkarte ein. Die hinzugefügten Grenzen werden als gestrichelte Linien angezeigt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));obj << Chart( Position( 1 ), Add Limits( {LCL( 17.5 ), Avg( 20.25 ), UCL( 23 )} ) );

```

### Add Spec Limits

**Syntax:** obj &lt;&lt; Chart( Position( number ), Add Spec Limits( {LSL( number ), Target( number ), USL( number )} ) )

**Beschreibung:** Legt die Spezifikationsgrenzen für jede Y-Variable fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );

```

### Alarm Script

**Syntax:** obj &lt;&lt; Alarm Script( Write( "..." )|Speak( "..." )|Mail( address, subject,"..." ) )

**Beschreibung:** Sendet eine Meldung, wenn ein Punkt in einer Qualitätsregelkarte einen vorgegebenen Test nicht besteht. Die Meldung kann an das Log gesendet werden, sie kann gesprochen oder per Mail gesendet werden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) ),	Show Control Panel( 0 ));obj << Alarm Script(	Write(		"Out of Control for test ",		qc_test,		" in column ",		qc_col,		" in sample ",		qc_sample,		" in phase ",		qc_phase	));

```

### Chart

**Syntax:** obj &lt;&lt; Chart( Position( number ), &lt;Points( Statistic(),... )&gt;, &lt;Set Control Limits( { LCL(), UCL(), Avg() } )&gt;, &lt;Add Limits( { LCL(), UCL(), Avg() } )&gt;, &lt;Add Spec Limits( { LSL(), USL(), Target() } )&gt;, &lt;Limits( Sigma(), ... )&gt;, &lt;Warnings( Test number( state=0|1 ) )&gt; )

**Beschreibung:** Legt die Attribute Warnung, Grenze und Punkt für das vom Argument Position angegebene Diagramm fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Warnings( Test 1( 1 ) ),		Add Limits( {LCL( 18 ), UCL( 22.4 ), Avg( 20.2 )} )	),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

### Class

**Syntax:** obj &lt;&lt; Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" )

**Beschreibung:** Gibt die Klasse oder Familie von Kombinationen aus Lage und Streuungsmaß an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma ) ),	Show Control Panel( 0 ));

```

### Color By Product

**Syntax:** obj &lt;&lt; Color By Product( state=0|1 )

**Beschreibung:** Färbt die Punkte, die von der Stufe der Produktvariablen gezeichnet werden. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Color By Product( 1 );

```

### Connect Thru Missing

**Syntax:** obj &lt;&lt; Connect Thru Missing( state=0|1 )

**Beschreibung:** Legt fest, ob Punkte und Linien verbunden werden, wenn einige Stichproben fehlende Werte oder ausgeschlossene Zeilen enthalten.

**JMP Version hinzugefügt:** 17

```jsl

Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = Control Chart Builder( Variables( Y( :Gap ) ), Show Control Panel( 0 ) );Wait( 1 );obj << Connect Thru Missing( 1 );

```

### Customize Tests

**Syntax:** obj &lt;&lt; Customize Tests( Test 1 | Test 2 | Test 3 | Test 4 | Test 5 | Test 6 | Test 7 | Test 8 (n, label) )

**Beschreibung:** Ermöglicht Ihnen, Beschriftungen auszuwählen und benutzerspezifisch zu definieren und die sigmabasierten Distanzparameter für  Western Electric-Tests festzulegen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Customize Tests( Test 1( 2, "A" ) ),	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) ),	Show Control Panel( 0 ));

```

### Fit to Window

**Syntax:** obj &lt;&lt; Fit to Window( "Automatisch"|"Ein"|"Aus"|"Seitenverhältnis beibehalten"="Aus" )

**Beschreibung:** Legt das Verhalten für die automatische Streckung des Berichts fest. Standardmäßig „Aus“.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Fit to Window( "On" );

```

### Get Control Limits

**Syntax:** obj &lt;&lt; Get Control Limits( filename )

**Beschreibung:** Importiert Eingriffsgrenzen aus einer ausgewählten Datentabelle und ersetzt berechnete Grenzen im Diagramm.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),	Show Control Panel( 0 ));obj << Get Control Limits( "$SAMPLE_DATA/Quality Control/CoatingLimits.jmp" );

```

### Get Product Statistics

**Syntax:** obj &lt;&lt; Get Product Statistics( filename )

**Beschreibung:** Importiert Werte für Produktziel und Sigma bei Short Run aus einer angegebenen Datentabelle.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Get Product Statistics( "$SAMPLE_DATA/Quality Control/CoatingProductInfo.jmp" );

```

### Get Spec Limits

**Syntax:** obj &lt;&lt; Get Spec Limits( filename )

**Beschreibung:** Importiert Spezifikationsgrenzen aus einer Datei.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :OZONE, :CO ) ),	Set Subgroup Size( 5 ),	Show Control Panel( 0 ));obj << Get Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" );

```

### Graph Borders

**Syntax:** obj &lt;&lt; Graph Borders( state=0|1 )

**Beschreibung:** Zeigt die internen Ränder des Graphenbereichs an oder blendet sie aus.

**JMP Version hinzugefügt:** 17

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 0.5 );obj << Graph Spacing( 5 );obj << Graph Transparency( 0 );obj << Graph Borders( 1 );

```

### Graph Spacing

**Syntax:** obj &lt;&lt; Graph Spacing( gap=2 )

**Beschreibung:** Gibt den Abstand zwischen den Graphenbereichen an. Standardmäßig „2“.

**JMP Version hinzugefügt:** 16

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 1 );obj << Graph Spacing( 5 );

```

### Graph Spacing Color

**Syntax:** obj &lt;&lt; Graph Spacing Color( color )

**Beschreibung:** Gibt die Farbe des Raums zwischen den Graphenbereichen an.

**JMP Version hinzugefügt:** 17

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 0.5 );obj << Graph Spacing Color( "Red" );

```

### Graph Spacing Transparency

**Syntax:** obj &lt;&lt; Graph Spacing Transparency( number )

**Beschreibung:** Gibt die Transparenzstufe des Raums zwischen den Graphenbereichen an. Muss zwischen 0 und 1 liegen.

**JMP Version hinzugefügt:** 17

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 0.5 );obj << Graph Spacing Transparency( 0.3 );

```

### Include Missing Categories

**Syntax:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Beschreibung:** Schließt eine zusätzliche Stufe für nominale und ordinale Variablen ein, wenn die Daten fehlende Werte enthalten. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Diameter ), Subgroup( :Day ) ),	Show Control Panel( 0 ));:Day[{8, 9, 10, 11, 12}] = .;Wait( 1 );obj << Include Missing Categories( 0 );

```

### K Sigma

**Syntax:** obj &lt;&lt; K Sigma( value=3 )

**Beschreibung:** Legt den K-Wert fest, der mit Sigma multipliziert werden soll, um die Eingriffsgrenzen um den Mittelwert zu bilden. Standardmäßig „3“.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	K Sigma( 2.5 ),	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));Wait( 1 );obj << K Sigma( 3 );

```

### Limits

**Syntax:** obj &lt;&lt; Chart( Position( number ), Limits( Sigma( "sigma" ), &lt;Zones( state=0|1 )&gt;, &lt;Shade Zones( state=0|1 )&gt;, &lt;Set Control Limits( state=0|1 )&gt;, &lt;Show Upper Limit( state=0|1 )&gt;, &lt;Show Lower Limit( state=0|1 )&gt;, &lt;Show Center Line( state=0|1 )&gt; ) )

**Beschreibung:** Bietet Optionen zum Ändern der Eigenschaften der Grenzen der Regelkarte. Abhängig vom Typ der Regelkarte können Sie einen der folgenden Werte als Argument sigma zuweisen: Spannweite, Standardabweichung, gleitende Spannweite, Median gleitende Spannweite, Levey-Jennings, Poisson, Binomial, Negativ binomial, Weibull, Laney P Prime oder Laney U Prime.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ), Shade Zones( 1 ) ) ),	Show Control Panel( 0 ));obj << Chart(	Position( 2 ),	Points( Statistic( "Standard Deviation" ) ),	Limits( Sigma( "Standard Deviation" ) ));

```

### Limits Label Precision

**Syntax:** obj &lt;&lt; Limits Label Precision( number )

**Beschreibung:** Legt die Dezimalgenauigkeit fest, die in den Beschriftungen der Grenzen über die Dezimalangabe der vertikalen Achse hinaus angezeigt wird.

**JMP Version hinzugefügt:** 18

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Show Limit Labels( 1 );Wait( 1 );obj << Limits Label Precision( 5 );

```

### OC Curve

**Syntax:** obj &lt;&lt; OC Curve

**Beschreibung:** Zeigt mit Hilfe von Eingriffsgrenzen und Sigma aus der Qualitätsregelkarte eine Operator-Characteristic-Kurve in einem neuen Fenster an.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));Wait( 1 );obj << OC Curve;

```

### Points

**Syntax:** obj &lt;&lt; Chart( Position( number ), Points( Statistic( "statistic" ), &lt;Individual Points( state=0|1 )&gt;, &lt;Box Plots( state=0|1 )&gt;, &lt;Show Connect Line( state=0|1 )&gt;, &lt;Show Points( state=0|1 )&gt; ) )

**Beschreibung:** Bietet Optionen zum Ändern der Punkteeigenschaften der Regelkarte. Abhängig vom Typ der Regelkarte können Sie dem Argument statistic einen der folgenden Werte zuweisen: Durchschnitt, Spannweite, Standardabweichung, gleitende Spannweite über Mittelwerte, gleitende Spannweite über Standardabweichung, Einzelwert, gleitende Spannweite, Anzahl, Anteil, Zentriert , Standardisiert, Spannweite zentriert oder Spannweite standardisiert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ) );

```

### Product Statistics

**Syntax:** obj &lt;&lt; Product Statistics( ( column ) ( Product Level( l1 ( Target( number ), Sigma ( number ) ), &lt;l2 ( Target( number ), Sigma ( number ) )) ), &lt; (column ( Product Level( ... ) ) ) &gt; )

**Beschreibung:** Legt die Werte für Produktziel und Sigma bei Short Run fest.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Product Statistics(	:Weight( ProductLevel( A( Target( 20 ), Sigma( 1 ) ), B( Target( 22 ), Sigma( .7 ) ) ) ));

```

### Range Span

**Syntax:** obj &lt;&lt; Range Span( value=2 )

**Beschreibung:** Legt den Wert der Option „Spanne der Spannweiten“ fest, die in den Qualitätsregelkarten für gleitende Spannweiten verwendet wird. Standardmäßig „2“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	K Sigma( 2.5 ),	Variables( Y( :Weight ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Range Span( 3 );

```

### Rerun All Tests

**Syntax:** obj &lt;&lt; Rerun All Tests

**Beschreibung:** Führt alle derzeit ausgewählten Tests und zugehörigen Alarmskripte erneut aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Alarm Script(		Write(			"Out of Control for test ",			qc_test,			" in column ",			qc_col,			" in sample ",			qc_sample,			" in phase ",			qc_phase		)	),	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) ),	Show Control Panel( 0 ));Wait( 1 );obj << K Sigma( 2.5 );obj << Rerun All Tests;

```

### Save Control Limits

**Syntax:** obj &lt;&lt; Save Control Limits( "In Spalte"|"In neuer Tabelle"|"in neuer hoher Tabelle" )

**Beschreibung:** Speichert Eingriffsgrenzen entweder in einer Spalteneigenschaft oder in einer neuen Datentabelle.



Wenn in Column angegeben wird und die Grenzen konstant sind, werden die Werte UEG, Mittelwert und OEG für jeden Diagrammtyp im Bericht in einer Spalteneigenschaft „Eingriffsgrenzen“ gespeichert. Wenn die Grenzen nicht konstant sind, wird keine Spalteneigenschaft gespeichert.



Wenn in New Table angegeben wird, werden die Standardabweichung und der Mittelwert für jedes Diagramm in einer neuen Datentabelle gespeichert. Wenn die Grenzen konstant sind, werden auch die Werte UEG, Mittelwert und OEG für jedes Diagramm gespeichert. Wenn es Phasen gibt, wird für jede Phase ein neuer Satz Werte gespeichert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Control Limits( "in Column" );obj << Save Control Limits( "in New Table" );

```

### Save Product Statistics

**Syntax:** obj &lt;&lt; Save Product Statistics

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Die neue Datentabelle enthält die Produktkenngrößen (Ziel und Sigma) für jede Stufe der Teil-/Produktvariablen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Save Product Statistics;

```

### Save Spec Limits

**Syntax:** obj &lt;&lt; Save Spec Limits

**Beschreibung:** Speichert die Spezifikationsgrenzen in einer neuen Datentabelle. Diese Option ist nur verfügbar, wenn Spezifikationsgrenzen mit einer Spalteneigenschaft „Spez.-Grenzen“, über JSL, Dateiimport „Spez.-Grenzen festlegen“ oder die Option „Spez.-Grenzen festlegen“ festgelegt wurden.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );obj << Save Spec Limits;

```

### Save Summaries

**Syntax:** obj &lt;&lt; Save Summaries

**Beschreibung:** Speichert eine neue Datentabelle für jedes Diagramm. Die Datentabelle enthält eine Zeile für jede Stichprobe und Spalten für die Stichprobenbeschriftung, Stichprobengröße und Produktstufe, wenn eine Produkt-/Teilvariable angegeben ist. Bei jeder Regelkarte gibt es auch Spalten für die einzelnen gezeichneten Punkte, den Regelkartentyp, OEG, Durchschnitt, UEG und alle ausgewählten Tests, die anschlagen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Summaries;

```

### Set Control Limits

**Syntax:** obj &lt;&lt; Chart( Position( number ), Set Control Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Beschreibung:** Legt die Eingriffsgrenzen für die angegebene Regelkarte fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));obj << Chart( Position( 1 ), Set Control Limits( {LCL( 19 ), Avg( 20 ), UCL( 21 )} ) );

```

### Set Last N Subgroups

**Syntax:** obj &lt;&lt; Set Last N Subgroups( number )

**Beschreibung:** Ändert die horizontale Achse so, dass nur die letzten N Untergruppen im Graph angezeigt werden. Die Anzahl der angegebenen Untergruppen berücksichtigt ausgeschlossene oder verborgene Beobachtungen nicht. Diese Option ist nicht verfügbar, wenn es eine Phasenvariable mit mehr als einer Stufe gibt.

**JMP Version hinzugefügt:** 19

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Set Last n Subgroups( 5 );

```

### Set Sigma

**Syntax:** obj &lt;&lt; Set Sigma( value )

**Beschreibung:** Legt den in der Qualitätsregelkarte verwendeten Sigma-Wert fest.

**JMP Version hinzugefügt:** 18

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 1 );obj << Set Sigma( 1.8 );

```

### Set Subgroup Size

**Syntax:** obj &lt;&lt; Set Subgroup Size( integer )

**Beschreibung:** Gibt die Anzahl der Zeilen pro Untergruppe an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Set Subgroup Size( 4 );

```

### Show Alarm Report

**Syntax:** obj &lt;&lt; Show Alarm Report( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Alarmraten und der Stichproben außerhalb der Grenzen an oder blendet sie aus.

**JMP Version hinzugefügt:** 15

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Show Alarm Report( 1 );

```

### Show Capability

**Syntax:** obj &lt;&lt; Show Capability( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Prozessfähigkeitsanalyse an oder blendet ihn aus. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Chart(		Position( 1 ),		Limits( Sigma( "Moving Range" ) ),		Add Spec Limits( {LSL( 17 ), USL( 23 ), Target( 20 )} )	));Wait( 1 );obj << Show Capability( 0 );

```

### Show Center Line

**Syntax:** obj &lt;&lt; Chart( Position( number ), Limits( Show Center Line( state=0|1 ) ) )

**Beschreibung:** Zeigt die Mittellinie an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Show Control Panel( 0 ));obj << Chart( Position( 1 ), Limits( Show Center Line( 0 ) ) );

```

### Show Control Panel

**Syntax:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Beschreibung:** Zeigt das Bedienfeld an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 1 );obj << Show Control Panel( 1 );

```

### Show Excluded Region

**Syntax:** obj &lt;&lt; Show Excluded Region( state=0|1 )

**Beschreibung:** Zeigt die Bereiche des Diagramms an bzw. blendet sie aus, in denen Stichproben ausgeschlossen wurden. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );r = dt << Select Where( :Sample < 4 );r << Exclude;Wait( 1 );obj << Show Excluded Region( 0 );

```

### Show Limit Labels

**Syntax:** obj &lt;&lt; Show Limit Labels( state=0|1 )

**Beschreibung:** Blendet die Grenzbeschriftungen im Graphen ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Show Limit Labels( 1 );

```

### Show Limit Summaries

**Syntax:** obj &lt;&lt; Show Limit Summaries( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Zusammenfassungen der Grenzen an oder blendet ihn aus. Dieser Bericht enthält die Eingriffsgrenzen (UEG und OEG), die Mittellinie (Mittelwert), die gezeichneten Punkte und Grenzen und die Stichprobengröße für die Regelkarte. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );Wait( 1 );obj << Show Limit Summaries( 0 );

```

### Show Lower Limit

**Syntax:** obj &lt;&lt; Chart( Position( number ), Limits( Show Lower Limit( state=0|1 ) ) )

**Beschreibung:** Zeigt die untere Eingriffsgrenze an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Show Lower Limit( 0 ) ) ),	Show Control Panel( 0 ));

```

### Show Product Separators

**Syntax:** obj &lt;&lt; Show Product Separators( state=0|1 )

**Beschreibung:** Zeigt gestrichelte vertikale Linien im Graphen an, die auf den Produktwechsel hinweisen, oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Show Product Separators( 0 );

```

### Show Sigma Report

**Syntax:** obj &lt;&lt; Show Sigma Report( state=0|1 )

**Beschreibung:** Zeigt die Tabelle des Gesamt-Sigma, Innerhalb-Sigma, Stabilitätsindex und Mittelwerts an oder blendet sie aus. Bei Drei-Wege-Regelkarten werden auch das Zwischen-Sigma und Zwischen-und-Innerhalb-Sigma angezeigt.

**JMP Version hinzugefügt:** 15

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Show Sigma Report( 1 );

```

### Show Two Shewhart or Short Run Charts

**Syntax:** obj &lt;&lt; Show Two Shewhart or Short Run Charts( state=0|1 )

**Beschreibung:** Zeigt Lage und Streuungsdiagramm an. Wenn der Wert dieser Option 0 ist, wird das Streuungsdiagramm nicht angezeigt. Standardmäßig ein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Variables( Y( :Diameter ), Subgroup( :Day ) ),	Show Control Panel( 0 ));

```

### Show Upper Limit

**Syntax:** obj &lt;&lt; Chart( Position( number ), Limits( Show Upper Limit( state=0|1 ) ) )

**Beschreibung:** Zeigt die obere Eingriffsgrenze an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Show Upper Limit( 0 ) ) ),	Show Control Panel( 0 ));

```

### Size

**Syntax:** obj &lt;&lt; Size( width, height )

**Beschreibung:** Legt die Größe des Graphen fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Size( 808, 586 );

```

### Sort by Subgroup

**Syntax:** obj &lt;&lt; Sort by Subgroup( state=0|1 )

**Beschreibung:** Sortiert die Prozessdaten nach der Untergruppenvariable oder einer Kombination aus geschachtelten Untergruppenvariablen, bevor Berechnungen durchgeführt werden. Diese Option ist nur verfügbar, wenn eine Untergruppenvariable angegeben ist.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Airline Delays.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Day of Week ), Y( :Arrival Delay ) ),	Show Control Panel( 0 ));Wait( 1 );obj << Sort by Subgroup( 1 );

```

### Test Excluded Subgroups

**Syntax:** obj &lt;&lt; Test Excluded Subgroups( state=0|1 )

**Beschreibung:** Schließt vollständig ausgeschlossene Untergruppen in die Berechnung der Tests ein oder aus. Diese Option ist nur verfügbar, wenn die Option „Ausgeschlossenen Bereich anzeigen“ ausgewählt ist. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Test Excluded Subgroups( 0 ),	Show Control Panel( 0 ),	Show Alarm Report( 1 ),	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) ));Wait( 1 );dt << Select Rows( Index( 21, 24 ) ) << Exclude;

```

### Use Event Chooser

**Syntax:** obj &lt;&lt; Use Event Chooser( state=0|1 )

**Beschreibung:** Kategorisiert ordinale numerische Daten und bietet einzelne Modellauswahl auf numerischer Ebene an. Die Option „Ereignisauswahl verwenden“ ist nur bei Regelkarten für qualitative Merkmale verfügbar, die numerische, nicht-stetige Y-Variablen enthalten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Y( :Age ) ),	Show Control Panel( 0 ));obj << Use Event Chooser( 1 );

```

### Use Excluded Points on MR

**Syntax:** Platform preferences( Control Chart Builder (Use Excluded Points on MR(1)) )

**Beschreibung:** Voreinstellung zum Einschließen von Punkten, die in den Berechnungen der gleitenden Spannweite ausgeschlossen sind.

**JMP Version hinzugefügt:** 19

```jsl

Platform Preferences( Control Chart Builder( Use Excluded Points on MR( 1 ) ) );dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );dt << Select Rows( 4 :: 6 ) << Exclude( 1 );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );

```

### Variables

**Syntax:** obj &lt;&lt; Variables( Y( column ), &lt;Subgroup( column)&gt;, &lt;Phase( column )&gt;, &lt;Part( column )&gt; )

**Beschreibung:** Weist den angezeigten Variablen Rollen zu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );

```

### n Trials

**Syntax:** obj &lt;&lt; n Trials( column | integer )

**Beschreibung:** Weist eine Losgröße für eine Qualitätsregelkarte zu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), nTrials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

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

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Data Table Window;

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

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );t = obj << Get Timing;Show( t );

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

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Relaunch Analysis;

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

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Show Control Panel( 0 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Show Control Panel( 0 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Save Script to Script Window;

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

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Zugehörige Konstruktoren

### Control Chart Builder

**Syntax:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Beschreibung:** Ermöglicht die interaktive Erstellung von Regelkarten, mit denen festgestellt werden kann, ob ein Prozess stabil und vorhersagbar ist. Mit der Plattform „Qualitätsregelkarte erstellen“ können Sie die folgenden Arten von Regelkarten erstellen: IMR, Xquer, Short Run, Einzelversuch, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR über Mittelwerte, Drei-Wege und Seltenes Ereignis.

#### C-Regelkarte

```jsl

// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) ),	Show Control Panel( 0 ));

```

#### Drei-Wege-Regelkarte (Untergruppengröße festlegen)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Average" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 3 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Drei-Wege-Regelkarte (Untergruppenvariable)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Average" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),	Show Control Panel( 0 ));

```

#### G-Regelkarte Seltenes Ereignis

```jsl

// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );obj = dt << Control Chart Builder(	Class( "Rare Event" ),	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### IMR-Regelkarte

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );

```

#### Levey-Jennings-Regelkarte

```jsl

// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Variables( Y( :Weight ) ),	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) ),	Show Control Panel( 0 ));

```

#### NP-Regelkarte

```jsl

// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### P'-Regelkarte

```jsl

// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) ),	Show Control Panel( 0 ));

```

#### P-Regelkarte

```jsl

// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Gruppenstandardabweichung (Untergruppengröße festlegen)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Gruppenstandardabweichung (Untergruppenvariable)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Mittelwerte (Untergruppengröße festlegen)

```jsl

// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte IMR über Mittelwerte (Untergruppenvariable)

```jsl

// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite

```jsl

// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) ),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenmittelwerte (Untergruppengröße festlegen)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenmittelwerte (Untergruppenvariable)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenstandardabweichung (Untergruppengröße festlegen)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Regelkarte Median der gleitenden Spannweite über Gruppenstandardabweichung (Untergruppenvariable)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Short-Run-Differenz-Diagramm

```jsl

// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));

```

#### Short-Run-Differenz-Diagramm für Xquer

```jsl

// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );obj = dt << Control Chart Builder(	Show Product Separators( 0 ),	Class( "Short Run" ),	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),	Show Control Panel( 0 ));

```

#### Standardisiertes Short-Run-Diagramm

```jsl

// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) ),	Show Control Panel( 0 ));

```

#### Standardisiertes Short-Run-Diagramm für Xquer

```jsl

// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );obj = dt << Control Chart Builder(	Show Product Separators( 0 ),	Class( "Short Run" ),	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) ),	Show Control Panel( 0 ));

```

#### T-Regelkarte Seltenes Ereignis

```jsl

// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );obj = dt << Control Chart Builder(	Class( "Rare Event" ),	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) ),	Show Control Panel( 0 ));

```

#### U‘-Regelkarte

```jsl

// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) ),	Show Control Panel( 0 ));

```

#### U-Regelkarte

```jsl

// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) ),	Show Control Panel( 0 ));

```

#### Verlaufsdiagramm

```jsl

// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Show Limit Summaries( 0 ),	Variables( Y( :Weight ) ),	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),	Show Control Panel( 0 ));

```

#### Xquer/R-Regelkarte

```jsl

// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Show Control Panel( 0 ));

```

#### Xquer/S-Regelkarte (Untergruppengröße festlegen)

```jsl

// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Xquer/S-Regelkarte (Untergruppenvariable)

```jsl

// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

