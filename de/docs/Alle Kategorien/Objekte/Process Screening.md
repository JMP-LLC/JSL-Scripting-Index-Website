# Process Screening



## Elementmeldungen

### Action Lower Quantile Prob

**Syntax:** obj = Process Screening(...Action Lower Quantile Prob( number=. )...)

**Beschreibung:** Gibt eine Wahrscheinlichkeit an, die den Wert für die Aktionsgrenze festlegt. Bei Zählprozessen wird die Aktionsgrenze, wenn sie nicht in der Grenzwerttabelle angegeben ist, anhand des geschätzten Quantils basierend auf dieser Wahrscheinlichkeit festgelegt. Standardmäßig „.“.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Action Upper Quantile Prob

**Syntax:** obj = Process Screening(...Action Upper Quantile Prob( number=0.9985 )...)

**Beschreibung:** Gibt eine Wahrscheinlichkeit an, die den Wert für die Aktionsgrenze festlegt. Bei Zählprozessen wird die Aktionsgrenze, wenn sie nicht in der Grenzwerttabelle angegeben ist, anhand des geschätzten Quantils basierend auf dieser Wahrscheinlichkeit festgelegt. Standardmäßig „0.9985“.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Alarm Graph

**Syntax:** obj &lt;&lt; Alarm Graph( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt ein Diagramm der Alarme, mit den Prozessen, die Alarme haben, auf der Y-Achse und der Zeit des Auftretens auf der X-Achse.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);

```

### Alert Lower Quantile Prob

**Syntax:** obj = Process Screening(...Alert Lower Quantile Prob( number=. )...)

**Beschreibung:** Gibt eine Wahrscheinlichkeit an, die den Wert für die Alarmgrenze festlegt. Bei Zählprozessen wird die Alarmgrenze, wenn sie nicht in der Grenzwerttabelle angegeben ist, anhand des geschätzten Quantils basierend auf dieser Wahrscheinlichkeit festgelegt. Standardmäßig „.“.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Alert Upper Quantile Prob

**Syntax:** obj = Process Screening(...Alert Upper Quantile Prob( number=0.975 )...)

**Beschreibung:** Gibt eine Wahrscheinlichkeit an, die den Wert für die Alarmgrenze festlegt. Bei Zählprozessen wird die Alarmgrenze, wenn sie nicht in der Grenzwerttabelle angegeben ist, anhand des geschätzten Quantils basierend auf dieser Wahrscheinlichkeit festgelegt. Standardmäßig „0.975“.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Chart Options Drift Graph

**Syntax:** obj &lt;&lt; Chart Options Drift Graph( options )

**Beschreibung:** Ermöglicht Ihnen, ein Skript mit zusätzlichen Optionen für die Diagramme zu erstellen, die von der Option „Driftgraph ausgewählt“ erzeugt werden.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ), Connect Points( 0 ) );

```

### Chart Options Graphlet

**Syntax:** obj &lt;&lt; Chart Options Graphlet( options )

**Beschreibung:** Ermöglicht Ihnen, ein Skript mit zusätzlichen Optionen für Graphlets zu erstellen.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3 ),
	Subgroup( :lot_id, :wafer ),
	Control Chart Type( "XBar and R" ),
	Process Performance Graph( 1 ),
	Chart Options Graphlet( Show Markers( 1 ) ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 4 ),
				UniqueID( 4 ),
				FoundPt( {320, 564} ),
				Origin( {1, 0.24} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);

```

### Chart Options as Selected

**Syntax:** obj &lt;&lt; Chart Options as Selected( options )

**Beschreibung:** Ermöglicht Ihnen, ein Skript mit zusätzlichen Optionen für die Diagramme zu erstellen, die von der Option „Diagramm wie ausgewählt anzeigen“ erzeugt werden.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Chart Options for Selected

**Syntax:** obj &lt;&lt; Chart Options for Selected( options )

**Beschreibung:** Ermöglicht Ihnen, ein Skript mit zusätzlichen Optionen für die Diagramme zu erstellen, die von der Option „Diagramm für Ausgewählte anzeigen“ erzeugt werden.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Color Out of Spec Values

**Syntax:** obj &lt;&lt; Color Out of Spec Values

**Beschreibung:** Färbt Werte in der Datentabelle basierend auf den Spezifikationsgrenzen. Blau zeigt an, dass der Wert unter der unteren Spezifikationsgrenze ist. Rot zeigt an, dass der Wert über der oberen Spezifikationsgrenze ist.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :PNP3, :IVP1, :IVP2 ) );
obj << Color Out of Spec Values;

```

### Color Selected Items

**Syntax:** obj &lt;&lt; Color Selected Items( color )

**Beschreibung:** Wendet die angegebene Farbe auf die ausgewählten Zeilen in der Zusammenfassungstabelle an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Find and Select( "PNP1" ),
	Color Selected Items( "Blue" )
);
obj << Find and Select( "NPN1" );
obj << Color Selected Items( "Red" );
obj << Find and Select( "NPN2" );

```

### Control Chart Builder

**Syntax:** obj &lt;&lt; Control Chart Builder

**Beschreibung:** Öffnet ein Fenster „Qualitätsregelkarte erstellen“ für die Prozesse, die Sie in der Zusammenfassungstabelle ausgewählt haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Control Chart Builder
);

```

### Control Chart Type

**Syntax:** obj = Process Screening(...Control Chart Type( "Indiv and MR"|"XBar and R"|"XBar and S"|"XBar MR and R"|"XBar MR and S"|"Count"|"Nonnegative Continuous"|"Proportion" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine von fünf Arten von Qualitätsregelkartenberechnungen an. Standardmäßig „EinzeIwerte und MR“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" )
);

```

### Count

**Syntax:** obj &lt;&lt; Count( state=0|1 )

**Beschreibung:** Blendet die Spalte „Anzahl“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der Beobachtungen. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Count( 0 );

```

### Cp

**Syntax:** obj &lt;&lt; Cp( state=0|1 )

**Beschreibung:** Blendet die Spalte „Cp“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die mögliche Fähigkeit, wenn Ziel- und Abweichungsprobleme gelöst sind.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cp( 1 ) );

```

### Cpk

**Syntax:** obj &lt;&lt; Cpk( state=0|1 )

**Beschreibung:** Blendet die Spalte „Cpk“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält den Cpk-Prozessfähigkeitsindex kurzer Läufe basierend auf Innerhalb-Sigma und ausgehend von einer Normalverteilung. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cpk( 0 ) );
Wait( 1 );
obj << Cpk( 1 );

```

### Drift Alpha

**Syntax:** obj = Process Screening(...Drift Alpha( number=. )...)

**Beschreibung:** Gibt die Holt-Winters-Glättungsgewichtung für die Lage in der Drifterkennung an. Dieser Wert wird üblicherweise geschätzt und nicht angegeben. Wird er angegeben, müssen Sie ihn im Startskript angeben. Standardmäßig „.“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Alpha( .6 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Beta

**Syntax:** obj = Process Screening(...Drift Beta( number=.05 )...)

**Beschreibung:** Specifies the weight that is used in the Holt Double-Exponential Smoother for drift detection. Standardmäßig „.05“.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Beta( .1 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Graph Selected

**Syntax:** obj &lt;&lt; Drift Graph Selected( &lt;{ process list }&gt; )

**Beschreibung:** Zeigt einen Driftgraphen für jeden Prozess, den Sie in der Zusammenfassungstabelle auswählen. Die gezeichneten Werte sind die Steigungsschätzungen aus einem doppel-exponentiellen Holt-Glättungsmodell.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), );
Wait( 1 );
obj << Drift Graph Selected( {{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}} );

```

### Drift Summaries

**Syntax:** obj &lt;&lt; Drift Summaries( state=0|1 )

**Beschreibung:** Blendet die Drift-Zusammenfassungsspalten in der Zusammenfassungstabelle ein oder aus. Diese Spalten enthalten die mittlere Drift aufwärts, die mittlere Drift abwärts und die mittlere Drift absolut.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Summaries( 1 )
);

```

### Enable All Tests

**Syntax:** obj &lt;&lt; Enable All Tests

**Beschreibung:** Schließt alle Nelson-Tests in die Alarmraten und -häufigkeiten ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Enable All Tests
);

```

### Expected Out of Spec Rate

**Syntax:** obj &lt;&lt; Expected Out of Spec Rate( state=0|1 )

**Beschreibung:** Blendet die Spalte „Erwarteter Anteil außerhalb der Spezifikation“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält den erwarteten Anteil der Beobachtungen, die außerhalb der Spezifikationsgrenzen liegen. Der Wert für den erwarteten Anteil außerhalb der Spezifikation geht von einem stabilen und normalverteilten Prozess aus und verwendet das Gesamt-Sigma.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Expected Out of Spec Rate( 1 )
);

```

### Filter Where

**Syntax:** obj &lt;&lt; Filter Where( condition )

**Beschreibung:** Filtert und entfernt die Prozesse in der Zusammenfassungstabelle. Der Filter basiert auf der angegebenen Bedingung.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Filter Where( Alarm Rate > 0 )
);
Wait( 1 );
obj << Reset Filter;
obj << Filter Where( Stability Index > 1.3 | Mean <= 4.3 );

```

### Find and Select

**Syntax:** obj &lt;&lt; Find and Select( condition )

**Beschreibung:** Findet alle Spalten und Gruppen, in denen die Suchzeichenfolge vorkommt, und wählt diese Prozesse in der Zusammenfassungstabelle aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);

```

### Goal Plot

**Syntax:** obj &lt;&lt; Goal Plot( state=0|1 )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das für jede Variable einen Punkt enthält. Die spez.-normalisierte mittlere Verschiebung befindet sich auf der horizontalen Achse und die spez.-normalisierte Standardabweichung auf der vertikalen Achse. Diese Option ist nur verfügbar, wenn für mindestens eine Prozessvariable Spezifikationsgrenzen angegeben sind.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Goal Plot( 1 ) );

```

### KSigma

**Syntax:** obj = Process Screening(...KSigma( number=3 )...)

**Beschreibung:** Gibt die Anzahl von Standardabweichungen (in Bezug auf Sigma) an, die die Eingriffsgrenzen von der Mittellinie entfernt sein sollten. Standardmäßig „3“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( X( :Process ), Y( Eval( 5 :: 132 ) ), K Sigma( 4 ) );

```

### KSigma for Proportion

**Syntax:** obj = Process Screening(...KSigma for Proportion( number=3 )...)

**Beschreibung:** Gibt die Anzahl von Standardabweichungen (in Bezug auf Sigma) an, die die Eingriffsgrenzen von der Mittellinie entfernt sein sollten. Standardmäßig „3“.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	K Sigma for Proportion( 2.5 ),
	Use Upper Limit( 1 ),
	Use Lower Limit( 1 )
);

```

### Keep Distribution Details

**Syntax:** obj = Process Screening(...Keep Distribution Details( state=0|1 )...)

**Beschreibung:** Behält die Parameterschätzungen und Quantildetails der Anpassung aller Verteilungen bei, so dass sie im Bericht angezeigt werden können.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Keep Distribution Details( 1 ),
	SendToReport(
		Dispatch( {}, "Poisson λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin σ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB σ", NumberColBox, {Visibility( "Visible" )} )
	)
);

```

### Largest Downshift

**Syntax:** obj &lt;&lt; Largest Downshift( state=0|1 )

**Beschreibung:** Blendet die Spalten „Größte Verschiebung nach unten“ und „Position der Verschiebung nach unten“ in der Zusammenfassungstabelle ein oder aus. Diese Spalten enthalten die größte Verschiebung nach unten in der Serie, die größer ist als Innerhalb-Sigma, und die Position in der Serie, an der diese Verschiebung aufgetreten ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Downshift( 1 )
);

```

### Largest Upshift

**Syntax:** obj &lt;&lt; Largest Upshift( state=0|1 )

**Beschreibung:** Blendet die Spalten „Größte Verschiebung nach oben“ und „Position der Verschiebung nach oben“ in der Zusammenfassungstabelle ein oder aus. Diese Spalten enthalten die größte Verschiebung nach oben in der Serie, die größer ist als Innerhalb-Sigma, und die Position in der Serie, an der diese Verschiebung aufgetreten ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Upshift( 1 )
);

```

### Latest Out of Spec

**Syntax:** obj &lt;&lt; Latest Out of Spec( state=0|1 )

**Beschreibung:** Blendet die Spalte „Zuletzt außerhalb der Spez.“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der Beobachtungen zwischen der letzten Beobachtung, die außerhalb der Spezifikationsgrenzen liegt, und der finalen Beobachtung. Wenn die letzte Beobachtung außerhalb der Spezifikationsgrenzen liegt, ist der Wert von „Zuletzt außerhalb der Spez.“ gleich 1. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Latest Out of Spec( 0 ) );
Wait( 1 );
obj << Latest Out of Spec( 1 );

```

### Make Detailed Shift Data

**Syntax:** obj = Process Screening(...Make Detailed Shift Data( state=0|1 )...)

**Beschreibung:** Stores all of the shift information so that it can be saved to a data table later using the Save Shift Table option. This option must be specified in the launch script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Maximum

**Syntax:** obj &lt;&lt; Maximum( state=0|1 )

**Beschreibung:** Shows or hides the Maximum for Count and Nonnegative Continuous chart types. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time )
);
Wait( 1 );
obj << Maximum( 0 );

```

### Mean

**Syntax:** obj &lt;&lt; Mean( state=0|1 )

**Beschreibung:** Blendet die Spalte „Mittelwert“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält den Mittelwert der Prozessdaten. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Mean( 0 );

```

### Minimum Process Length

**Syntax:** obj = Process Screening(...Minimum Process Length( number=3 )...)

**Beschreibung:** Gibt die Mindestanzahl von Datenwerten an, die ein Prozess haben muss, um in die Analyse eingeschlossen zu werden. Standardmäßig „3“.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Minimum Process Length( 40 )
);

```

### Moving Range Limit Exceeded

**Syntax:** obj &lt;&lt; Moving Range Limit Exceeded( state=0|1 )

**Beschreibung:** Blendet die Spalte „Grenze der gleitenden Spannweite überschritten“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der Untergruppen, die die Grenze der gleitenden Spannweite in der Berechnung der Drei-Wege-Qualitätsregelkarte überschreiten.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );
obj = dt << Process Screening(
	Y( :Fill Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar MR and R" ),
	Moving Range Limit Exceeded( 1 )
);

```

### N Subgroups

**Syntax:** obj &lt;&lt; N Subgroups( state=0|1 )

**Beschreibung:** Blendet die Spalte „N Untergruppen“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der Untergruppen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Control Chart Type( "XBar and R" )
);
Wait( 1 );
obj << N Subgroups( 0 );

```

### Out of Spec Count

**Syntax:** obj &lt;&lt; Out of Spec Count( state=0|1 )

**Beschreibung:** Blendet die Spalte „Außerhalb-Spez.-Anzahl“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der Beobachtungen, die außerhalb der Spezifikationsgrenzen liegen. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Count( 0 ) );
Wait( 1 );
obj << Out of Spec Count( 1 );

```

### Out of Spec Rate

**Syntax:** obj &lt;&lt; Out of Spec Rate( state=0|1 )

**Beschreibung:** Blendet die Spalte „Außerhalb-Spez.-Rate“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält den Anteil der Beobachtungen, die außerhalb der Spezifikationsgrenzen liegen. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Rate( 0 ) );
Wait( 1 );
obj << Out of Spec Rate( 1 );

```

### Outlier Threshold

**Syntax:** obj = Process Screening(...Outlier Threshold( number=5 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Anzahl von Innerhalb-Sigma-Einheiten an, die eine Beobachtung mindestens von seinen beiden Nachbarn entfernt sein muss, um als Ausreißer behandelt zu werden. Standardmäßig „5“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Outlier Threshold( 1.1 ),
	Shift Graph( 1 )
);

```

### Overall Sigma

**Syntax:** obj &lt;&lt; Overall Sigma( state=0|1 )

**Beschreibung:** Blendet die Spalte „Gesamt-Sigma“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält eine Schätzung der Standardabweichung basierend auf allen Beobachtungen. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Overall Sigma( 0 );

```

### Performance Graph Boundaries

**Syntax:** obj &lt;&lt; Performance Graph Boundaries( &lt;Capability Ppk boundary, Stability Ratio boundary&gt; )

**Beschreibung:** Gibt die Grenzen für die Regionen des Fähigkeits-Ppk und Stabilitätsverhältnisses im Prozessleistungsgraphen an. Wenn keine Argumente angegeben werden, öffnet diese Option ein Fenster, in dem Sie die Grenzen angeben können.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Performance Graph Boundaries( 1.7, 1.2 );

```

### Ppk

**Syntax:** obj &lt;&lt; Ppk( state=0|1 )

**Beschreibung:** Blendet die Spalte „Ppk“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält den Ppk-Prozessfähigkeitsindex langer Läufe basierend auf dem Gesamt-Sigma und ausgehend von einer Normalverteilung. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Ppk( 0 ) );
Wait( 1 );
obj << Ppk( 1 );

```

### Ppk Capability Boundary

**Syntax:** obj &lt;&lt; Ppk Capability Boundary( number=1.33 )

**Beschreibung:** Gibt eine Grenze zwischen den fähigen und den unfähigen Regionen für Fähigkeits-Ppk im Prozessleistungsgraphen an. Standardmäßig „1.33“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Ppk Capability Boundary( 1.7 ),
	Process Performance Graph( 1 )
);

```

### Process Capability

**Syntax:** obj &lt;&lt; Process Capability

**Beschreibung:** Öffnet ein Berichtsfenster „Prozessfähigkeit“, in dem detaillierte Berichte über Einzelwerte für die Prozesse angezeigt werden, die Sie in der Zusammenfassungstabelle ausgewählt haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Capability
);

```

### Process Performance Graph

**Syntax:** obj &lt;&lt; Process Performance Graph( state=0|1 )

**Beschreibung:** Zeigt einen Graphen des Prozessfähigkeits-Ppk nach Stabilitätsverhältnis mit vier farblich gekennzeichneten Quadranten oder blendet ihn aus. Standardmäßig deutet ein Stabilitätsverhältnis über 1,5 darauf hin, dass der Prozess instabil ist, und ein Ppk kleiner als 1,33 deutet darauf hin, dass der Prozess nicht fähig ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);

```

### Process Potential Graph

**Syntax:** obj &lt;&lt; Process Potential Graph( state=0|1 )

**Beschreibung:** Zeigt den Prozesspotenzialgraphen an oder blendet ihn aus, der Cp auf der vertikalen Achse und % Messsigma^2 auf der horizontalen Achse darstellt. Dieser Graph zeigt den relativen Nutzen aus der Verbesserung des Messsystems oder des Prozesses.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );
Column( "Weight" ) << Set Property(
	"Process Screening",
	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )}
);
Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );
obj = dt << Process Screening(
	Process Variables( :Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar and R" ),
	Out of Spec Count( 0 ),
	Out of Spec Rate( 0 ),
	Latest Out of Spec( 0 ),
	Process Potential Graph( 1 )
);

```

### Range Limit Exceeded

**Syntax:** obj &lt;&lt; Range Limit Exceeded( state=0|1 )

**Beschreibung:** Blendet die Spalte „Bereichsgrenze überschritten“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der Untergruppen, die die obere Eingriffsgrenze in der Berechnung der R-, S- oder MR-Qualitätsregelkarte überschreiten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Range Limit Exceeded( 1 )
);

```

### Relaunch Selected Processes

**Syntax:** obj &lt;&lt; Relaunch Selected Processes

**Beschreibung:** Relaunches the Process Screening platform to create a new report that contains only the selected processes from the original report.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	RowStates( [51 1, 52 1, 66 1, 85 1] )
);
Wait( 1 );
obj << Relaunch Selected Processes;

```

### Remove

**Syntax:** obj = Process Screening(...Remove( columns )...)

**Beschreibung:** Gibt Prozesse an, die aus der Analyse ausgeschlossen werden sollen. Diese Option muss im Startskript angegeben werden und gilt nur, wenn eine Spaltengruppe angegeben ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( dt << get Column Group( "Processes" ) ),
	Remove( :NPN2 ),
	Process Performance Graph( 1 )
);

```

### Remove Selected Items

**Syntax:** obj &lt;&lt; Remove Selected Items

**Beschreibung:** Entfernt die in der Zusammenfassungstabelle ausgewählten Zeilen und führt die Analyse ohne diese Prozesse aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
Wait( 1 );
obj << Remove Selected Items;

```

### Reset Filter

**Syntax:** obj &lt;&lt; Reset Filter

**Beschreibung:** Entfernt jeden Filter, der aktuell auf die Zusammenfassungstabelle angewendet ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
Wait( 1 );
obj << Filter Where( Alarm Rate > 0 );
Wait( 3 );
obj << Reset Filter;

```

### RowStates

**Syntax:** obj &lt;&lt; RowStates( matrix )

**Beschreibung:** Legt die Zeileneigenschaften für die Zeilen in der Zusammenfassungstabelle fest. Die Eingabe ist eine mx2-Matrix. Die erste Spalte enthält Zeilennummern (nullbasiert in ursprünglicher Reihenfolge) und die zweite Spalte enthält numerische Zeileneigenschaftswerte. Weitere Informationen über numerische Zeileneigenschaftswerte finden Sie im JMP-Benutzerhandbuch.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	RowStates( [0 1, 5 768] ) //Select first and Color Red the sixth of original order
);
Wait( 1 );
// sort columns to show original order
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 3, 1 )} ) );
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 2, 1 )} ) );

```

### Save Details Table

**Syntax:** obj &lt;&lt; Save Details Table

**Beschreibung:** Erstellt eine neue Datentabelle, die die Testalarminformationen für jede Kombination aus Prozess- und Gruppierungsvariablen enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Details Table;

```

### Save Selected Details

**Syntax:** obj &lt;&lt; Save Selected Details

**Beschreibung:** Erstellt eine neue Datentabelle, die die Testalarminformationen für die ausgewählten Zeilen in der Zusammenfassungstabelle enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
obj << Save Selected Details;

```

### Save Shift Table

**Syntax:** obj &lt;&lt; Save Shift Table

**Beschreibung:** Creates a new data table that contains the saved shift gap data. This option requires that the Make Detailed Shift Data option is specified in the launch script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Save Summary Table

**Syntax:** obj &lt;&lt; Save Summary Table

**Beschreibung:** Erstellt eine neue Datentabelle, die alle Prozesszusammenfassungsinformationen für alle Variablen und Gruppen enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table;

```

### Save Summary Table with Graphs

**Syntax:** obj &lt;&lt; Save Summary Table with Graphs

**Beschreibung:** Erstellt eine neue Datentabelle, die alle Prozesszusammenfassungsinformationen und eine Spalte mit schnellen Graphen enthält.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table with Graphs;

```

### Select All

**Syntax:** obj &lt;&lt; Select All

**Beschreibung:** Wählt alle Spalten und Gruppen aus und führt nachfolgende Befehle für sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Select All );

```

### Select Where

**Syntax:** obj &lt;&lt; Select Where( condition )

**Beschreibung:** Wählt Prozessspalten in der Zusammenfassungstabelle aus. Die ausgewählten Spalten entsprechen der angegebenen Bedingung.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select Where( Alarm Rate > 0 )
);

```

### Set Scrolling

**Syntax:** obj &lt;&lt; Set Scrolling( number=50 )

**Beschreibung:** Gibt an, wie viele Zeilen in der Zusammenfassungstabelle mit Bildlauf angezeigt werden sollen. Standardmäßig „50“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Set Scrolling( 3 )
);

```

### Shift Graph

**Syntax:** obj &lt;&lt; Shift Graph( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt ein Diagramm des zeitlichen Auftretens aller Prozessverschiebungen, die die Anzahl der Innerhalb-Sigma-Einheiten überschreiten, die durch die Option „Verschiebungsschwelle“ festgelegt sind. Grüne Symbole kennzeichnen Verschiebungen nach oben und rote Symbole Verschiebungen nach unten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" )
);
obj << Shift Graph( 1 );

```

### Shift Lambda

**Syntax:** obj = Process Screening(...Shift Lambda( number=.3 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Gewichtung an, die im exponentiell gewichteten gleitenden Mittelwert (EWMA) für die Verschiebungserkennung verwendet wird. Standardmäßig „.3“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Show Charts as Selected( 1 ),
	RowStates( [5 1] ),
	Shift Lambda( 0.2 ),
	Shift Graph( 1 )
);

```

### Shift Threshold

**Syntax:** obj = Process Screening(...Shift Threshold( number=3 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Anzahl von Innerhalb-Sigma-Einheiten an, die eine Verschiebung überschreiten muss, um im Verschiebungsgraphen angezeigt zu werden. Standardmäßig „3“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Shift Graph( 1 )
);

```

### Show Charts as Selected

**Syntax:** obj &lt;&lt; Show Charts as Selected( state=0|1 )

**Beschreibung:** Erstellt kleine Graphen der Prozesse, die in der Zusammenfassungstabelle ausgewählt sind. Die Graphen werden in einem Bericht „Diagramme wie ausgewählt“ angezeigt, der automatisch aktualisiert wird, wenn Sie Prozesse in der Zusammenfassungstabelle aus- oder abwählen.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
obj << Select Where( :MACHINE == "C334" );
obj << Show Charts as Selected( 1 );
Wait( 2 );
obj << Select Where( :MACHINE == "A455" );

```

### Show Charts for Selected

**Syntax:** obj &lt;&lt; Show Charts for Selected( &lt;process list&gt; )

**Beschreibung:** Erstellt kleine Graphen der Prozesse, die in der Zusammenfassungstabelle ausgewählt werden. Die Graphen werden in einem Bericht „Diagramme für Ausgewählte“ angezeigt, in dem viele Prozesse gleichzeitig angezeigt und verglichen werden können.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :OPERATOR, :MACHINE ),
	Show Charts for Selected( {{:DIAMETER, "DRJ", "C334"}, {:DIAMETER, "MKS", "A386"}} )
);

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :IVP7, :B1, :IVP8 ),
	Show Charts for Selected( {:IVP7, :IVP8} )
);

```

### Show Shifts in Graphs

**Syntax:** obj &lt;&lt; Show Shifts in Graphs( state=0|1 )

**Beschreibung:** Blendet die Position der Verschiebungen in den schnellen Graphen mit grünen und roten vertikalen Linien ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Select All,
	Show Charts for Selected,
	Show Shifts in Graphs( 1 )
);

```

### Show Tests

**Syntax:** obj &lt;&lt; Show Tests( state=0|1 )

**Beschreibung:** Zeigt die unter „Tests wählen“ ausgewählten Nelson-Tests an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 2( 1 ),
	Test 3( 1 )
);
Wait( 1 );
obj << Show Tests( 0 );

```

### Sort by Subgroup

**Syntax:** obj = Process Screening(...Sort by Subgroup( state=0|1 )...)

**Beschreibung:** Sortiert die Prozessdaten nach der Untergruppenvariable oder einer Kombination aus geschachtelten Untergruppenvariablen, bevor Berechnungen durchgeführt werden. Diese Option ist nur verfügbar, wenn eine Untergruppenvariable angegeben ist.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Spec Centered Mean

**Syntax:** obj &lt;&lt; Spec Centered Mean( state=0|1 )

**Beschreibung:** Blendet die Spalte „(Mittelwert-Ziel)/Spez.bereich“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält den Mittelwert relativ zu den Spezifikationsgrenzen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Centered Mean( 1 ) );

```

### Spec Limits

**Syntax:** obj &lt;&lt; Spec Limits( state=0|1 )

**Beschreibung:** Blendet die Spalten mit den Spezifikationsgrenzen in der Zusammenfassungstabelle ein oder aus. Diese Spalten enthalten die untere Spezifikationsgrenze (USG), die obere Spezifikationsgrenze (OSG) und die Zielwerte.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Limits( 1 ) );

```

### Spec Scaled Std Dev

**Syntax:** obj &lt;&lt; Spec Scaled Std Dev( state=0|1 )

**Beschreibung:** Blendet die Spalte „Std.-Abw./Spez.bereich“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Gesamt-Standardabweichung dividiert durch den Bereich der Spezifikationsgrenzen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Scaled Std Dev( 1 ) );

```

### Stability Index

**Syntax:** obj &lt;&lt; Stability Index( state=0|1 )

**Beschreibung:** Blendet die Spalte „Stabilitätsindex“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte ist ein Maß für die Stabilität eines Prozesses, wobei ein stabiler Prozess einen Stabilitätsindex nahe 1 hat. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Stability Index( 0 );

```

### Stability Index Boundary

**Syntax:** obj &lt;&lt; Stability Index Boundary( number=1.25 )

**Beschreibung:** Gibt die Grenze zwischen den stabilen und den instabilen Regionen für den Stabilitätsindex im Prozessleistungsgraphen an. Standardmäßig „1.25“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Stability Index Boundary( 1.5 );

```

### Stability Ratio

**Syntax:** obj &lt;&lt; Stability Ratio( state=0|1 )

**Beschreibung:** Blendet die Spalte „Stabilitätsverhältnis“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte ist ein Maß für die Stabilität eines Prozesses, wobei ein stabiler Prozess ein Stabilitätsverhältnis nahe 1 hat.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
obj << Stability Ratio( 1 );

```

### Subgroup Sample Size

**Syntax:** obj = Process Screening(...Subgroup Sample Size( number=5 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Anzahl der Beobachtungen in jeder Untergruppe an. Die minimale Untergruppengröße ist 2. Standardmäßig „5“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup Sample Size( 6 )
);

```

### Summary

**Syntax:** obj &lt;&lt; Summary( state=0|1 )

**Beschreibung:** Blendet die Zusammenfassungstabelle im Bericht ein oder aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Subgroup Sample Size( 6 ),
	Summary( 0 )
);
Wait( 1 );
obj << Summary( 1 );

```

### Target Index

**Syntax:** obj &lt;&lt; Target Index( state=0|1 )

**Beschreibung:** Blendet die Spalte „Zielindex“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält die Anzahl der kurzfristigen Standardabweichungen, um die der Prozessmittelwert vom Zielwert abweicht.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Target Index( 1 ) );

```

### Test 1

**Syntax:** obj &lt;&lt; Test 1( state=0|1 )

**Beschreibung:** Blendet die Spalte Test1 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn ein Punkt um mehr als drei Standardabweichungen von der Mittellinie abweicht. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 1( 0 ) );

```

### Test 2

**Syntax:** obj &lt;&lt; Test 2( state=0|1 )

**Beschreibung:** Blendet die Spalte Test2 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn neun oder mehr aufeinanderfolgende Punkte auf der gleichen Seite der Mittellinie liegen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 2( 1 ) );

```

### Test 3

**Syntax:** obj &lt;&lt; Test 3( state=0|1 )

**Beschreibung:** Blendet die Spalte Test3 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn sechs oder mehr aufeinanderfolgende Punkte kontinuierlich ansteigen oder abfallen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 3( 1 ) );

```

### Test 4

**Syntax:** obj &lt;&lt; Test 4( state=0|1 )

**Beschreibung:** Blendet die Spalte Test4 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn vierzehn aufeinanderfolgende Punkte die Richtung wechseln: ansteigend und dann abfallend oder abfallend und dann ansteigend.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 4( 1 ) );

```

### Test 5

**Syntax:** obj &lt;&lt; Test 5( state=0|1 )

**Beschreibung:** Blendet die Spalte Test5 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn zwei von drei aufeinanderfolgenden Punkten auf derselben Seite der Mittellinie um mehr als zwei Standardabweichungen von der Mittellinie abweichen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 5( 1 ) );

```

### Test 6

**Syntax:** obj &lt;&lt; Test 6( state=0|1 )

**Beschreibung:** Blendet die Spalte Test6 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn vier von fünf aufeinanderfolgenden Punkten auf derselben Seite der Mittellinie um mehr als eine Standardabweichung von der Mittellinie abweichen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 6( 1 ) );

```

### Test 7

**Syntax:** obj &lt;&lt; Test 7( state=0|1 )

**Beschreibung:** Blendet die Spalte Test7 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn fünfzehn aufeinanderfolgende Punkte auf beiden Seiten der Mittellinie alle innerhalb einer Standardabweichung von der Mittellinie liegen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 7( 1 ) );

```

### Test 8

**Syntax:** obj &lt;&lt; Test 8( state=0|1 )

**Beschreibung:** Blendet die Spalte Test8 in der Zusammenfassungstabelle ein oder aus. Dieser Test wird ausgelöst, wenn acht aufeinanderfolgende Punkte auf beiden Seiten der Mittellinie alle außerhalb einer Standardabweichung von der Mittellinie liegen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 8( 1 ) );

```

### Test Action

**Syntax:** obj &lt;&lt; Test Action( state=0|1 )

**Beschreibung:** Shows or hides the Action column in the summary table. This test is triggered when a point is greater than an Upper Action Limit or less than a Lower Action Limit. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Action( 0 );

```

### Test Alert

**Syntax:** obj &lt;&lt; Test Alert( state=0|1 )

**Beschreibung:** Shows or hides the Alert column in the summary table. This test is triggered when a point is greater than the Upper Alert Limit or less than the Lower Alert Limit.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert( 1 );

```

### Test Alert Increasing

**Syntax:** obj &lt;&lt; Test Alert Increasing( state=0|1 )

**Beschreibung:** Shows or hides the Alert Increasing column in the summary table. This column counts where the process is increasing and the previous point is above the upper alert limit or if a process is decreasing and the previous point is below the lower alert limit.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert Increasing( 0 );

```

### Use Limits Table

**Syntax:** obj = Process Screening(...Use Limits Table( state=0|1, data table, &lt;options&gt;)...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Importiert historische Eingriffsgrenzen und Spezifikationsgrenzen aus einer Datentabelle.

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	)
);

```

### Use Lower Limit

**Syntax:** obj = Process Screening(...Use Lower Limit( state=0|1 )...)

**Beschreibung:** Specifies whether to use the K-Sigma lower limit. This option is available only for Proportion charts.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Lower Limit( 1 )
);

```

### Use Medians instead of Means

**Syntax:** obj = Process Screening(...Use Medians instead of Means( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Schätzt die Mittellinie anhand des Medians der Beobachtungen, um den Effekt von Ausreißern auf die Tests zu verringern.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Use Medians instead of Means( 1 )
);

```

### Use Upper Limit

**Syntax:** obj = Process Screening(...Use Upper Limit( state=0|1 )...)

**Beschreibung:** Specifies whether to use the K-Sigma upper limit. This option is available only for Proportion charts. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Upper Limit( 0 ),
	Use Lower Limit( 1 )
);

```

### Within Sigma

**Syntax:** obj &lt;&lt; Within Sigma( state=0|1 )

**Beschreibung:** Blendet die Spalte „Innerhalb-Sigma“ in der Zusammenfassungstabelle ein oder aus. Diese Spalte enthält eine Schätzung der Standardabweichung basierend auf der Streuung innerhalb der Untergruppen. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Within Sigma( 0 ) );
Wait( 1 );
obj << Within Sigma( 1 );

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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

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

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

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

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Process Screening(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

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

**Syntax:** obj = Process Screening(...&lt;By( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);

```

### Grouping

**Syntax:** obj = Process Screening(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Analysiert jede Prozessvariable in jeder Kombination von Stufen der angegebenen Gruppierungsspalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Process Variables

**Syntax:** obj = Process Screening(...Process Variables( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Spalten der Prozessdaten an, die die zu analysierenden Messungen enthalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Subgroup

**Syntax:** obj = Process Screening(...&lt;Subgroup( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Weist eine oder mehr Untergruppenvariablen zu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Time

**Syntax:** obj = Process Screening(...&lt;Time( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Weist eine Spalte zu, die die zeitliche Reihenfolge für die Daten angibt. Die Prozessdaten werden vor der Durchführung von Berechnungen nach der Zeitvariablen sortiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Prices.jmp" );
obj = dt << Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "XBar and R" ),
	Time( :Date ),
	Subgroup Sample Size( 3 )
);

```

### n Trials

**Syntax:** obj = Process Screening(...&lt;n Trials( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Weist eine Spalte zu, die die Anzahl der Versuche enthält. Diese Zahl wird als Nenner des Anteils der Defekten bei einem P-Diagramm verwendet.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Washers.jmp" );
dt << Process Screening(
	Process Variables( :"# defective"n ),
	Control Chart Type( "Proportion" ),
	n Trials( :Lot Size 2 ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] )
);

```

## Zugehörige Konstruktoren

### Process Screening

**Syntax:** Process Screening( Process Variables( columns ) )

**Beschreibung:** Untersucht viele Prozesse aus mehreren Perspektiven, einschließlich Stabilität, Fähigkeit, Qualitätsregelkartentests und Verschiebung (Abweichung). Unterstützt die Fähigkeit, sich auf die Prozesse zu konzentrieren, die Aufmerksamkeit benötigen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

## Chart Options Drift Graph

### Elementmeldungen

#### Circle Alarm Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Beschreibung:** Blendet rote Kreise um Punkte ein oder aus, die sich in einem Alarmzustand befinden. Der entsprechende Alarmcode wird neben jedem eingekreisten Punkt angezeigt. Diese Option ist für Driftgraphen nicht verfügbar. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die die Punkte verbinden. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**Syntax:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Beschreibung:** Zeigt oder verbirgt eine Regelkarte für Spannweite, Standardabweichung oder gleitende Spannweiten zusätzlich zur Regelkarte für jeden Prozess. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**Syntax:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Beschreibung:** Legt die Größe des Graphen fest. Standardmäßig „500,170“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**Syntax:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Beschreibung:** Gibt das Layout für die Diagramme an. Standardmäßig „1“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**Syntax:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**Beschreibung:** Entfernt die Diagramme aus dem Bericht.

**JMP Version hinzugefügt:** 14

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Beschreibung:** Blendet für den Mittelwert des Prozesses eine durchgezogene grüne Linie ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Beschreibung:** Blendet die obere und untere Eingriffsgrenzen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Beschreibung:** Zeigt die Einzelpunkte in den Diagrammen an oder blendet sie aus.

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Beschreibung:** Blendet die untere und obere Spezifikationsgrenze als gepunktete blaue Linien ein oder aus.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**Beschreibung:** Blendet die Zonen mit einer und zwei Standardabweichungen in den Diagrammen ein oder aus. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**Syntax:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Beschreibung:** Blendet die vertikale Achsenbeschriftung in jedem Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options Graphlet

### Elementmeldungen

#### Circle Alarm Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Beschreibung:** Blendet rote Kreise um Punkte ein oder aus, die sich in einem Alarmzustand befinden. Der entsprechende Alarmcode wird neben jedem eingekreisten Punkt angezeigt. Diese Option ist für Driftgraphen nicht verfügbar. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die die Punkte verbinden. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**Syntax:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Beschreibung:** Zeigt oder verbirgt eine Regelkarte für Spannweite, Standardabweichung oder gleitende Spannweiten zusätzlich zur Regelkarte für jeden Prozess. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**Syntax:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Beschreibung:** Legt die Größe des Graphen fest. Standardmäßig „500,170“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**Syntax:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Beschreibung:** Gibt das Layout für die Diagramme an. Standardmäßig „1“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**Syntax:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**Beschreibung:** Entfernt die Diagramme aus dem Bericht.

**JMP Version hinzugefügt:** 14

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Beschreibung:** Blendet für den Mittelwert des Prozesses eine durchgezogene grüne Linie ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Beschreibung:** Blendet die obere und untere Eingriffsgrenzen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Beschreibung:** Zeigt die Einzelpunkte in den Diagrammen an oder blendet sie aus.

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Beschreibung:** Blendet die untere und obere Spezifikationsgrenze als gepunktete blaue Linien ein oder aus.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**Beschreibung:** Blendet die Zonen mit einer und zwei Standardabweichungen in den Diagrammen ein oder aus. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**Syntax:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Beschreibung:** Blendet die vertikale Achsenbeschriftung in jedem Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options as Selected

### Elementmeldungen

#### Circle Alarm Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Beschreibung:** Blendet rote Kreise um Punkte ein oder aus, die sich in einem Alarmzustand befinden. Der entsprechende Alarmcode wird neben jedem eingekreisten Punkt angezeigt. Diese Option ist für Driftgraphen nicht verfügbar. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die die Punkte verbinden. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**Syntax:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Beschreibung:** Zeigt oder verbirgt eine Regelkarte für Spannweite, Standardabweichung oder gleitende Spannweiten zusätzlich zur Regelkarte für jeden Prozess. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**Syntax:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Beschreibung:** Legt die Größe des Graphen fest. Standardmäßig „500,170“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**Syntax:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Beschreibung:** Gibt das Layout für die Diagramme an. Standardmäßig „1“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**Syntax:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**Beschreibung:** Entfernt die Diagramme aus dem Bericht.

**JMP Version hinzugefügt:** 14

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Beschreibung:** Blendet für den Mittelwert des Prozesses eine durchgezogene grüne Linie ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Beschreibung:** Blendet die obere und untere Eingriffsgrenzen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Beschreibung:** Zeigt die Einzelpunkte in den Diagrammen an oder blendet sie aus.

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Beschreibung:** Blendet die untere und obere Spezifikationsgrenze als gepunktete blaue Linien ein oder aus.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**Beschreibung:** Blendet die Zonen mit einer und zwei Standardabweichungen in den Diagrammen ein oder aus. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**Syntax:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Beschreibung:** Blendet die vertikale Achsenbeschriftung in jedem Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options for Selected

### Elementmeldungen

#### Circle Alarm Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Beschreibung:** Blendet rote Kreise um Punkte ein oder aus, die sich in einem Alarmzustand befinden. Der entsprechende Alarmcode wird neben jedem eingekreisten Punkt angezeigt. Diese Option ist für Driftgraphen nicht verfügbar. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**Syntax:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die die Punkte verbinden. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**Syntax:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Beschreibung:** Zeigt oder verbirgt eine Regelkarte für Spannweite, Standardabweichung oder gleitende Spannweiten zusätzlich zur Regelkarte für jeden Prozess. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**Syntax:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Beschreibung:** Legt die Größe des Graphen fest. Standardmäßig „500,170“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**Syntax:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Beschreibung:** Gibt das Layout für die Diagramme an. Standardmäßig „1“.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**Syntax:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**Beschreibung:** Entfernt die Diagramme aus dem Bericht.

**JMP Version hinzugefügt:** 14

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Beschreibung:** Blendet für den Mittelwert des Prozesses eine durchgezogene grüne Linie ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Beschreibung:** Blendet die obere und untere Eingriffsgrenzen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Beschreibung:** Zeigt die Einzelpunkte in den Diagrammen an oder blendet sie aus.

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Beschreibung:** Blendet die untere und obere Spezifikationsgrenze als gepunktete blaue Linien ein oder aus.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**Syntax:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**Beschreibung:** Blendet die Zonen mit einer und zwei Standardabweichungen in den Diagrammen ein oder aus. Diese Option ist für Driftgraphen nicht verfügbar.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**Syntax:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Beschreibung:** Blendet die vertikale Achsenbeschriftung in jedem Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

**Beispiel für „Diagrammoptionen Abweichungsgraph“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen für Ausgewählte“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Beispiel für „Diagrammoptionen wie ausgewählt“**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

