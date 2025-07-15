# CUSUM Control Chart



## Elementmeldungen

### ARL Profiler

**Syntax:** obj &lt;&lt; ARL Profiler( state=0|1 )

**Beschreibung:** Zeigt ein interaktives Analysediagramm für die mittlere Stichprobenanzahl (ARL) bei Parameteränderungen an oder blendet es aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << ARL Profiler( 1 );

```

### Alarm Script

**Syntax:** Alarm Script(Write("...")|Speak("...")|Mail(address, subject,"...") )

**Beschreibung:** Sendet eine Meldung, wenn ein Punkt in einer Qualitätsregelkarte einen vorgegebenen Test nicht besteht. Die Meldung kann an das Log gesendet werden, sie kann gesprochen oder per Mail gesendet werden.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			". \!N"
		)
	),
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Test Beyond Limits( 1 );

```

### Control Panel

**Syntax:** obj &lt;&lt; Control Panel( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die aktuellen Werte der Parameter enthält, und ermöglicht Ihnen, diese zu ändern. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Data Units

**Syntax:** obj = CUSUM Control Chart(...Data Units( state=0|1 )...)

**Beschreibung:** Gibt an, dass statt Einheiten für die Standardabweichung im Bericht Dateneinheiten verwendet werden.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 0.1 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	Data Units( 1 )
);

```

### Get Limits

**Syntax:** obj &lt;&lt; Get Limits

**Beschreibung:** Importiert Eingriffsgrenzen aus einer ausgewählten Datentabelle und ersetzt berechnete Grenzen im Diagramm.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
limitsTable = New Table( "Cusum Limits",
	Add Rows( 4 ),
	New Column( "_LimitsKey", Character, Set Values( {"_H", "_K", "_Std Dev", "_Mean"} ) ),
	New Column( "weight", Set Values( [4, 0.5, 0.01, 8.1] ) )
);
Wait();
obj << Get Limits( limitsTable );

```

### H

**Syntax:** obj &lt;&lt; H( number=5 )

**Beschreibung:** Gibt den Wert des Parameters an, der die Grenzen definiert. Wenn die Option „Dateneinheiten“ nicht angegeben wurde, ist dies der h-Parameter. Wenn die Option „Dateneinheiten“ angegeben wurde, ist dies der H-Parameter. Beachten Sie, dass H gleich h mal Sigma ist. Standardmäßig „5“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << H( 4.5 );

```

### Head Start

**Syntax:** obj &lt;&lt; Head Start( number )

**Beschreibung:** Gibt den Wert der kumulierten Summen vor der ersten Stichprobe an. Wenn Sie für die kumulierten Summen mit einem Wert ungleich 0 beginnen, erhöht sich die Sensitivität der CUSUM-Regelkarte am Anfang der Stichproben. Dieser Parameter ist auch als FIR-Wert bekannt. Standardmäßig ist dieser Parameter auf 0 gesetzt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Head start( 1.0 );

```

### K

**Syntax:** obj &lt;&lt; K( number=0.5 )

**Beschreibung:** Gibt den Wert des Parameters an, der die kleinste Veränderung des Mittelwerts definiert, die erkannt werden kann. Wenn die Option „Dateneinheiten“ nicht angegeben wurde, ist dies der k-Parameter. Wenn die Option „Dateneinheiten“ angegeben wurde, ist dies der K-Parameter. Beachten Sie, dass K gleich k mal Sigma ist. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << K( 0.1 );

```

### Lower Side

**Syntax:** obj &lt;&lt; Lower Side( state=0|1 )

**Beschreibung:** Blendet die negativen Werte für die kumulierte Summe im Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Lower Side( 0 );

```

### Parameters Report

**Syntax:** obj &lt;&lt; Parameters Report( state=0|1 )

**Beschreibung:** Zeigt den Parameterbericht an oder blendet ihn aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Parameters Report( 1 );

```

### Reset to Defaults

**Syntax:** obj &lt;&lt; Reset to Defaults

**Beschreibung:** Setzt alle Parameter auf die Standardwerte zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << H( 3 );
Wait( 1 );
obj << Reset to Defaults();

```

### Save Limits

**Syntax:** obj &lt;&lt; Save Limits( "In Spalte"|"In neuer Tabelle" )

**Beschreibung:** Speichert Regelkartenparameter entweder in einer Spalteneigenschaft oder in einer neuen Datentabelle.



Wird in Column angegeben, wird der Durchschnitt in einer Spalteneigenschaft Eingriffsgrenzen gespeichert. 



Wird in New Table angegeben, werden die Parameter h, k, Standardabweichung, Mittelwert und Vorsprung in einer neuen Datentabelle gespeichert.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
Wait();
obj << Save Limits( "in Column" );
Wait();
obj << Save Limits( "in New Table" );

```

### Save Sigma

**Syntax:** obj &lt;&lt; Save Sigma

**Beschreibung:** Speichert das Sigma aus der Qualitätsregelkarte als Spalteneigenschaft in der Datentabelle.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Sigma;

```

### Save Summaries

**Syntax:** obj &lt;&lt; Save Summaries

**Beschreibung:** Erstellt eine neue Datentabelle, die Kenngrößen für jede Untergruppe in der CUSUM-Regelkarte enthält.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Summaries;

```

### Show ARL

**Syntax:** obj &lt;&lt; Show ARL( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit der ARL (Average Run Length, Mittlere Stichprobenanzahl), die aus der zugehörigen CUSUM-Regelkarte berechnet wurde, an oder blendet ihn aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Show ARL( 1 );

```

### Show Center Line

**Syntax:** obj &lt;&lt; Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie im Graphen an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Show Center Line( 0 );

```

### Show Excluded Region

**Syntax:** obj = CUSUM Control Chart(...Show Excluded Region( state=0|1 )...)

**Beschreibung:** Gibt an, ob vollständig ausgeschlossene Untergruppen auf der horizontalen Achse in der CUSUM-Qualitätsregelkarte angezeigt werden. Trifft nur zu, wenn eine X-Variable angegeben ist.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35, 36, 37, 38, 39, 40} ) << exclude << hide;
obj = dt << CUSUM Control Chart( Y( :Gap ), Subgroup( :Sample ), Show Excluded Region( 0 ) );

```

### Show Limits

**Syntax:** obj &lt;&lt; Show Limits( state=0|1 )

**Beschreibung:** Blendet die Grenzen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Show Limits( 0 );

```

### Show Shift Lines

**Syntax:** obj &lt;&lt; Show Shift Lines( state=0|1 )

**Beschreibung:** Zeigt vertikale Linien an oder blendet sie aus, die Prozessverschiebungen im Diagramm kennzeichnen. Verschiebungslinien werden zu Beginn einer Verschiebung gezeichnet. Nur verfügbar, wenn eine Verschiebung in den Daten erkannt wird. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
Wait( 1 );
obj << Show Shift Lines( 0 );

```

### Sigma

**Syntax:** obj &lt;&lt; Sigma( number )

**Beschreibung:** Gibt den bekannten Wert der Standardabweichung an. Standardmäßig ist für diesen Parameter die mittlere gleitende Spannweite der Y-Spalte festgelegt. Wenn eine X-Variable vorhanden ist, wird der Parameter „Sigma“ auf die mittlere gleitende Spannweite der Zusammenfassungsdaten gesetzt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Sigma( 2 );

```

### Target

**Syntax:** obj &lt;&lt; Target( number )

**Beschreibung:** Gibt den bekannten Wert des Mittelwerts an. Dies ist der Wert der Mittellinie im Diagramm. Standardmäßig ist für diesen Parameter der Zielwert in der Spalteneigenschaft „Spez.-Grenzen“ der Y-Spalte festgelegt. Wenn die Y-Spalte in der Spalteneigenschaft „Spez.-Grenzen“ keinen Zielwert hat, wird für diesen Parameter der Gesamtmittelwert der Y-Spalte festgelegt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Target( 9.5 );

```

### Test Beyond Limits

**Syntax:** obj &lt;&lt; Test Beyond Limits( state=0|1 )

**Beschreibung:** Zeigt einen roten Kreis um jeden Punkt an, der in der CUSUM-Regelkarte über der oberen Grenze oder unter der unteren Grenze liegt, oder blendet ihn aus.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Test Beyond Limits( 1 );

```

### Tune Chart

**Syntax:** obj &lt;&lt; Tune Chart( &lt;0|1&gt; | Min( value, Max( value ) ) )

**Beschreibung:** Blendet ein Bedienelement ein oder aus, mit dem Sie den Wert des k-Parameters festlegen können, indem Sie einen akzeptierbaren Bereich für die Y-Variable angeben. In einem Skript können Sie den akzeptierbaren Bereich auch direkt angeben.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Tune Chart( Min( 8.08, Max( 8.12 ) ) );

```

### Upper Side

**Syntax:** obj &lt;&lt; Upper Side( state=0|1 )

**Beschreibung:** Blendet die positiven Werte für die kumulierte Summe im Diagramm ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Upper Side( 0 );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
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

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
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

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
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

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
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
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
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

**Syntax:** obj = CUSUM Control Chart(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

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

**Syntax:** By( column )

**Beschreibung:** Gibt die Nach-Spalte beim Starten an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << CUSUM Control Chart( Y( :DIAMETER ), X( :DAY ), By( :Phase ) );

```

### X

**Syntax:** X( column )

**Beschreibung:** Gibt die X-Spalte beim Starten an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	X( :hour ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Y

**Syntax:** Y( column )

**Beschreibung:** Gibt die Y-Spalte beim Starten an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

## Zugehörige Konstruktoren

### CUSUM Control Chart

**Syntax:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**Beschreibung:** Erstellt eine Regelkarte, in der die kumulierten Summen von Abweichungen von Mittelwerten von Untergruppen von einem Ziel dargestellt werden. Diese Regelkarte wird auch tabellarische CUSUM-Regelkarte genannt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

