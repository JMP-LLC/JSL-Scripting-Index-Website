# Process Capability



## Elementmeldungen

### AIAG (Ppk) Labeling

**Syntax:** obj << "AIAG (Ppk) Labeling"n( state=0|1 )

**Beschreibung:** Schaltet die AIAG-Beschriftungen der Prozessfähigkeitsindizes ein oder aus, indem die Cp-Beschriftungen in Pp-Beschriftungen geändert werden. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] )
);
obj << Individual Detail Reports( 1 );
Wait( 1 );
obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**Syntax:** obj << Capability Box Plots( state=0|1 )

**Beschreibung:** Zeigt für jeden Prozess einen Box-Plot an oder blendet ihn aus. Um die Box-Plots zu erstellen, werden die Werte für jeden Prozess auf ihr Ziel zentriert und mit ihren Spezifikationsgrenzen skaliert. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 )
);
Wait( 1 );
obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**Syntax:** obj << Capability Index Plot( state=0|1, <plot options> )

**Beschreibung:** Blendet einen Graphen ein oder aus, der den Gesamt-Ppk-Wert für jeden Prozess darstellt. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),
		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7
	),
	Capability Index Plot( 0 ),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**Syntax:** obj << Color Out of Spec Values( state=0|1 )

**Beschreibung:** Markiert die Zellen in der Datentabelle, die sich außerhalb der Spezifikationsgrenzen befinden, farblich. Zellen mit Werten unter der unteren Spezifikationsgrenze (USG) werden rot markiert und Zellen mit Werten über der oberen Spezifikationsgrenze (OSG) werden blau markiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Color Out of Spec Values( 1 );

```

### Get Limits

**Syntax:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**Beschreibung:** Lädt Spezifikationsgrenzen aus einer Tabelle mit Grenzwertdaten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Get Limits( dt2 ) )
);

```

### Goal Plot

**Syntax:** obj << Goal Plot( state=0|1, <plot options> )

**Beschreibung:** Blendet einen Graphen mit einem Punkt für jeden Prozess ein oder aus. Der anhand der Spezifikation standardisierte Mittelwert befindet sich auf der horizontalen Achse und die anhand der Spezifikation standardisierte Standardabweichung auf der vertikalen Achse. Punkte oberhalb des Zielbogens stellen Prozesse dar, die sich unterhalb des angegebenen Ppk- bzw. Cpk-Schwellenwerts befinden. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Goal Plot( 1 );

```

### Individual Detail Reports

**Syntax:** obj << Individual Detail Reports( state=0|1 )

**Beschreibung:** Zeigt für jeden Prozess einen separaten detaillierten Prozessfähigkeitsbericht der Einzelwerte an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**Syntax:** obj << Individual Detail Reports Cutoff( number=1 )

**Beschreibung:** Zeigt die detaillierten Berichte über Einzelwerte an und blendet das Zieldiagramm und die Prozessfähigkeits-Box-Plots aus, wenn die Anzahl von Prozessvariablen kleiner oder gleich dem Cutoff-Wert ist. Standardmäßig „1“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**Syntax:** obj << Make Goal Plot Summary Table

**Beschreibung:** Erstellt eine neue Datentabelle, die die Koordinaten sowohl für die Innerhalb- als auch für die Gesamtpunkte enthält, die im Zieldiagramm gezeichnet werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Make Goal Plot Summary Table;

```

### Order By

**Syntax:** obj << Order By( "Anfangsreihenfolge"|"Anfangsreihenfolge umkehren"|"Cpk aufsteigend Innerhalb-Sigma"|"Cpk absteigend Innerhalb-Sigma"|"Ppk aufsteigend Gesamt-Sigma"|"Ppk absteigend Gesamt-Sigma" )

**Beschreibung:** Ordnet alle Box-Plots, zusammenfassenden Berichte und detaillierten Berichte der Einzelwerte in der angegebenen Reihenfolge neu an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Within Sigma Summary Report( 1 );
Wait( 1 );
obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**Syntax:** obj << Overall Sigma Normalized Box Plots( state=0|1 )

**Beschreibung:** Blendet einen Box-Plot für jeden Prozess ein oder aus. Die Werte für die Box-Plots werden durch den Gesamtmittelwert zentriert und durch den Schätzwert der gesamten Standardabweichung skaliert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**Syntax:** obj << Overall Sigma Summary Report( state=0|1 )

**Beschreibung:** Blendet einen zusammenfassenden Bericht der Prozessfähigkeitsindizes ein oder aus. Die Prozessfähigkeitsindizes werden anhand des Schätzwerts der gesamten Standardabweichung berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**Syntax:** obj << Process Performance Plot( state=0|1, <plot options> )

**Beschreibung:** Blendet ein Diagramm mit vier Quadranten des Gesamt-Prozessfähigkeits-Ppk-Werts versus der Stabilität ein oder aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 ),

);
obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**Syntax:** obj << Save Distributions as Column Properties

**Beschreibung:** Speichert die Verteilung, die zur Berechnung der Prozessfähigkeit als Spalteneigenschaft „Prozessfähigkeitsverteilung“ verwendet wird. Für jede Prozessvariable in der Analyse wird eine Spalteneigenschaft gespeichert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**Syntax:** obj << Save In Spec Indicator Formulas

**Beschreibung:** Erzeugt eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält einen Wert, der angibt, ob eine Zeile innerhalb der Spezifikationsgrenzen liegt oder nicht.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**Syntax:** obj << Save Spec Limits as Column Properties

**Beschreibung:** Speichert die Spezifikationsgrenzen in einer Spalteneigenschaft für jede Prozessvariable in der Analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**Syntax:** obj << Save Spec Limits to New Table

**Beschreibung:** Erstellt eine neue Datentabelle, die die Spezifikationsgrenzen, Prozesswichtigkeit und Verteilungen für jede Prozessvariable enthält. Die Tabelle hat ein langes Format und enthält eine Zeile für jede Prozessvariable. Prozesswichtigkeit und Verteilungstyp werden nur gespeichert, wenn zutreffend.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**Syntax:** obj << Select Out of Spec Values( state=0|1 )

**Beschreibung:** Wählt alle Zeilen und Spalten in der Datentabelle aus, die mindestens einen Wert enthalten, der nicht innerhalb der Spezifikationsgrenzen liegt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**Syntax:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**Beschreibung:** Lädt Spezifikationsgrenzen aus einer Tabelle mit Grenzwertdaten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Use Limits Table( dt2 ) )
);

```

### Within Sigma Normalized Box Plots

**Syntax:** obj << Within Sigma Normalized Box Plots( state=0|1 )

**Beschreibung:** Blendet einen Graphen ein oder aus, der einen Box-Plot für jeden Prozess enthält. Die Werte für die Box-Plots werden durch den Mittelwert zentriert und durch den Schätzwert der Innerhalb-Gruppe Standardabweichung dividiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**Syntax:** obj << Within Sigma Summary Report( state=0|1 )

**Beschreibung:** Blendet einen zusammenfassenden Bericht der Prozessfähigkeitsindizes ein oder aus. Die Prozessfähigkeitsindizes werden anhand des Schätzwerts der Standardabweichung Innerhalb-Untergruppen berechnet. Die Ergebnisse werden nur für Variablen mit angegebenen Normalverteilungen angezeigt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**Syntax:** obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**Beschreibung:** Blendet einen Graphen ein oder aus, der einen Box-Plot für jeden Prozess enthält. Die Werte für die Box-Plots werden durch den Mittelwert zentriert und durch den Schätzwert der Standardabweichung Innerhalb-Gruppe dividiert oder, falls angegeben, durch den Schätzwert der Zwischen-und-Innerhalb-Gruppe.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**Syntax:** obj << "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**Beschreibung:** Blendet einen zusammenfassenden Bericht der Prozessfähigkeitsindizes ein oder aus. Die Prozessfähigkeitsindizes werden anhand des Schätzwerts der Innerhalb-Gruppe Standardabweichung oder, falls angegeben, anhand des Schätzwerts der Zwischen-und-Innerhalb-Gruppe berechnet. Diese Option ist nur verfügbar, wenn die Option „Zwischen-und-Innerhalb-Prozessfähigkeit berechnen“ für mindestens einen Prozess im Startfenster ausgewählt ist.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
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

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

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
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
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
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

**Syntax:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntax:** obj = Process Capability(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);

```

### Grouping

**Syntax:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**Beschreibung:** Gibt Spalten als Gruppierungsvariablen an.

**Beispiel 1**

```jsl

Names Default To Here( 1 );

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );
dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );
dt << Process Capability(
	Process Variables( :pH, :Salt Concentration, :Moisture Content ),
	Grouping( :Cheese Type ),
	Spec Limits( Use Limits Table( dtLimits ) ),
	Moving Range Method( Average of Moving Ranges ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),
	Grouping( :site )
);

```

### Process Variables

**Syntax:** obj = Process Capability(...Process Variables( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Spalten der Prozessdaten an, die die zu analysierenden Messungen enthalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## Zugehörige Konstruktoren

### Process Capability

**Syntax:** Process Capability( Process Variables (columns), < Spec Limits() > )

**Beschreibung:** Berechnet für jeden Prozess eine Prozessfähigkeitsanalyse und erstellt Graphen, die für die gleichzeitige Analyse der Prozessfähigkeit mehrerer Prozesse nützlich sind. Spezifikationsgrenzen können ebenfalls definiert werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### Elementmeldungen

#### Parametric Fit Confidence Limits Shading

**Syntax:** scrobj << Parametric Fit Confidence Limits Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Konfidenzgrenzen für die parametrische Anpassung an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**Syntax:** scrobj << Parametric Fit Line( state=0|1 )

**Beschreibung:** Zeigt die Gerade für die parametrische Anpassung an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Syntax:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**Beschreibung:** Zeigt die simultanen empirischen Konfidenzgrenzen an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Syntax:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung für die simultanen empirischen Konfidenzgrenzen an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot(
					Simultaneous Empirical Confidence Limits Shading( 0 )
				)
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### Elementmeldungen

#### Comparison Details

**Syntax:** scrobj << Comparison Details( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an, der die AICc-, BIC- und -2Loglikelihood-Werte für jede Verteilung enthält, oder blendet ihn aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Details( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**Syntax:** scrobj << Comparison Histogram( state=0|1 )

**Beschreibung:** Zeigt das Histogramm über den Vergleich von Verteilungen an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Histogram( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Beta )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Beta-Verteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE ),
	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),
	Individual Detail Reports( 1 ),
	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Exponential )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Exponentialverteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Gamma )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Gamma-Verteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Johnson )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Johnson-Verteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die größte Extremwertverteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Lognormal )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Lognormal-Verteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Nonparametric )

**Beschreibung:** Zeigt den Schieberegler für die Bandbreite des Kerns der nichtparametrischen Verteilung und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Normal )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Normalverteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);

```

#### Fit SHASH

**Syntax:** scrobj << Compare Distributions( 1, <<Fit SHASH )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die SHASH-Verteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die kleinste Extremwertverteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**Syntax:** scrobj << Compare Distributions( 1, <<Fit Weibull )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Weibull-Verteilung im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**Syntax:** scrobj << Compare Distributions( 1, <<Mixture of 2 Normals )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Mischung aus 2 Normalverteilungen im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**Syntax:** scrobj << Compare Distributions( 1, <<Mixture of 3 Normals )

**Beschreibung:** Zeigt die Anpassungsstatistiken für die Mischung aus 3 Normalverteilungen im Detailbericht über den Vergleich von Verteilungen und die Dichtekurve im Histogramm an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**Syntax:** scrobj << Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**Beschreibung:** Ordnet den Detailbericht über den Vergleich von Verteilungen neu. Er kann nach AICc, BIC oder -2Loglikelihood geordnet werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**Syntax:** scrobj << Probability Plots( state=0|1 )

**Beschreibung:** Zeigt die Wahrscheinlichkeitsdiagramme über den Vergleich von Verteilungen an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### Elementmeldungen

#### Show Between-and-Within Sigma Density

**Syntax:** scrobj << "Show Between-and-Within Sigma Density"n( state=0|1 )

**Beschreibung:** Blendet im Histogramm die Dichtekurve ein oder aus, die Zwischen-und-Innerhalb-Sigma verwendet. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Within Subgroup Variation( Average of Unbiased Standard Deviations ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**Syntax:** scrobj << Show Count Axis( state=0|1 )

**Beschreibung:** Zeigt rechts vom Histogrammrahmen eine Zählachse an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**Syntax:** scrobj << Show Density Axis( state=0|1 )

**Beschreibung:** Zeigt rechts vom Histogrammrahmen eine Dichteachse an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**Syntax:** scrobj << Show Overall Sigma Density( state=0|1 )

**Beschreibung:** Zeigt im Histogramm die Dichtekurve an, die Gesamt-Sigma verwendet, oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Overall Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**Syntax:** scrobj << Show Spec Limits( state=0|1 )

**Beschreibung:** Zeigt die unteren und oberen Spezifikationsgrenzen im Histogramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Spec Limits( 1 );

```

#### Show Target

**Syntax:** scrobj << Show Target( state=0|1 )

**Beschreibung:** Zeigt die Ziellinie im Histogramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**Syntax:** scrobj << Show Within Sigma Density( state=0|1 )

**Beschreibung:** Zeigt im Histogramm die Dichtekurve an, die Innerhalb-Sigma verwendet, oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Within Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### Elementmeldungen

#### Capability

**Syntax:** scrobj << Capability( state=0|1 )

**Beschreibung:** Zeigt die Prozessfähigkeitsindizes an oder blendet sie aus. Die ursprünglichen Prozessfähigkeitsindizes basieren auf dem Gesamt-Sigma. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Capability( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Capability( 1 );

```

#### Nonconformance

**Syntax:** scrobj << Nonconformance( state=0|1 )

**Beschreibung:** Blendet die Nichtübereinstimmung ein oder aus. Die ursprünglichen Nichtübereinstimmungswerte basieren auf dem Gesamt-Sigma. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Nonconformance( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**Syntax:** scrobj << Revert to Original Values

**Beschreibung:** Setzt das interaktive Prozessfähigkeitsdiagramm auf die ursprünglichen Werte zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**Syntax:** scrobj << Save New Spec Limits as a Column Property

**Beschreibung:** Speichert die neuen Spezifikationsgrenzen als Spalteneigenschaft in der ursprünglichen Datentabelle.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### Elementmeldungen

#### Normal Fit Confidence Limits Shading

**Syntax:** scrobj << Normal Fit Confidence Limits Shading( state=0|1 )

**Beschreibung:** Blendet die Schattierung der Konfidenzgrenzen bei der Anpassung an die Normalverteilung im Normalwahrscheinlichkeitsdiagramm ein oder aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**Syntax:** scrobj << Normal Fit Line( state=0|1 )

**Beschreibung:** Blendet die normale Anpassungsgerade im Normalwahrscheinlichkeitsdiagramm ein oder aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Line( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Syntax:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**Beschreibung:** Zeigt die simultanen empirischen Konfidenzgrenzen im Normalwahrscheinlichkeitsdiagramm im Prozessfähigkeitsbericht an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Syntax:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der simultanen empirischen Konfidenzgrenzen im Normalwahrscheinlichkeitsdiagramm im Prozessfähigkeitsbericht an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### Elementmeldungen

#### Between-and-Within Sigma Capability

**Syntax:** scrobj << "Between-and-Within Sigma Capability"n( state=0|1 )

**Beschreibung:** Blendet die Prozessfähigkeitsindizes, die Zwischen-und-Innerhalb-Sigma verwenden, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Capability"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;
scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**Syntax:** scrobj << "Between-and-Within Sigma Target Index"n( state=0|1 )

**Beschreibung:** Zeigt einen Schätzwert des Zielindex, der auf dem Zwischen-und-Innerhalb-Sigma basiert, an oder blendet ihn aus.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Target Index"n( 1 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**Syntax:** scrobj << "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**Beschreibung:** Blendet die Z-Benchmark-Indizes, die Zwischen-und-Innerhalb-Sigma verwenden, ein oder aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Z Benchmark"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**Syntax:** scrobj << Compare Distributions( state=0|1, < <<distribution options > )

**Beschreibung:** Zeigt das Bedienfeld zum Vergleichen von Verteilungen für den Prozess an oder blendet es aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;
scrobj << Compare Distributions(
	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull
);

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**Syntax:** scrobj << Fix Parameters( vector )

**Beschreibung:** Fixiert bestimmte Parameter auf die angegebenen Werte und schätzt den Rest neu.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Weibull ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Weibull )) <<
	Process Capability Analysis( Fix Parameters( [11, .] ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;
scrobj << Fix Parameters( [., .] );

```

#### Histogram

**Syntax:** scrobj << Histogram( state=0|1 )

**Beschreibung:** Zeigt im detaillierten Bericht der Einzelwerte das Histogramm der Prozessdaten an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**Syntax:** scrobj << Interactive Capability Plot( state=0|1 )

**Beschreibung:** Blendet einen interaktiven Fähigkeitsbericht ein oder aus, mit dem Sie untersuchen können, wie sich Änderungen am Prozess oder an den Spezifikationsgrenzen auf die Fähigkeit auswirken.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;
scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**Syntax:** scrobj << Nonconformance( state=0|1 )

**Beschreibung:** Zeigt einen Bericht des beobachteten und erwarteten Prozentsatzes von Beobachtungen, die außerhalb der Spezifikationsgrenzen liegen, an oder blendet ihn aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**Syntax:** scrobj << Nonparametric Density( state=0|1 )

**Beschreibung:** Blendet den Bericht der nichtparametrischen Dichte ein oder aus, der die Bandbreite des Kerns angibt, die zur Anpassung der nichtparametrischen Verteilung verwendet wird. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Purity & Dist( Nonparametric ) ),
	Individual Detail Reports( 1 ),
	{(:Purity & Dist( Nonparametric )) <<
	Process Capability Analysis( Nonparametric Density( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;
scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**Syntax:** scrobj << Normal Probability Plot( state=0|1 )

**Beschreibung:** Zeigt ein Normalwahrscheinlichkeitsdiagramm an oder blendet es aus.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),

);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**Syntax:** scrobj << Overall Sigma Capability( state=0|1 )

**Beschreibung:** Zeigt die Prozessfähigkeitsindizes an, die auf dem Gesamt-Sigma basieren, oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**Syntax:** scrobj << Overall Sigma Z Benchmark( state=0|1 )

**Beschreibung:** Zeigt die Z-Benchmark-Indizes an, die auf dem Gesamt-Sigma basieren, oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**Syntax:** scrobj << Parameter Estimates( state=0|1 )

**Beschreibung:** Zeigt den Bericht über die Parameterschätzwerte für nicht-normale parametrische Verteilungen an oder blendet ihn aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Thickness & Dist( Johnson ) ),
	Individual Detail Reports( 1 ),
	{(:Thickness & Dist( Johnson )) <<
	Process Capability Analysis( Parameter Estimates( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;
scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**Syntax:** scrobj << Process Summary( state=0|1 )

**Beschreibung:** Zeigt die statistischen Kennzahlen des Prozesses an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**Syntax:** scrobj << Within Sigma Capability( state=0|1 )

**Beschreibung:** Zeigt die Prozessfähigkeitsindizes und ihre Konfidenzintervalle, die auf dem Innerhalb-Sigma basieren, an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**Syntax:** scrobj << Within Sigma Target Index( state=0|1 )

**Beschreibung:** Zeigt einen Schätzwert des Zielindex, der auf dem Innerhalb-Sigma basiert, an oder blendet ihn aus.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**Syntax:** scrobj << Within Sigma Z Benchmark( state=0|1 )

**Beschreibung:** Zeigt die Z-Benchmark-Indizes an, die auf dem Innerhalb-Sigma basieren, oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### Elementmeldungen

#### Capability Lines

**Syntax:** obj << Goal Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**Beschreibung:** Legt den Ppk- bzw. Cpk-Wert fest, der die dreieckigen Ziellinien im Zieldiagramm steuert. Dieser Wert wird auch im Bearbeitungsfeld für Ppk (Cpk) angezeigt. Standardmäßig „1.0“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Capability Lines( 1.5 ) );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**Syntax:** obj << Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); 

scrobj << Defect Rate Contour( number=0.0001 )

**Beschreibung:** Zeigt die angegebene Konturlinie für die Defektrate an oder blendet sie aus. Standardmäßig „0.0001“.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**Syntax:** obj << Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**Beschreibung:** Blendet Beschriftungen für Punkte im Zieldiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Gesamt-Sigmas berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**Syntax:** obj << Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**Beschreibung:** Blendet Beschriftungen für Punkte im Zieldiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Syntax:** obj << Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Beschreibung:** Blendet Beschriftungen für Punkte im Zieldiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas oder, falls angegeben, anhand der Schätzung des Zwischen-und-Innerhalb-Sigmas berechnet.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	Show Overall Sigma Points( 0 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Syntax:** obj << Goal Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Ppk- bzw. Cpk-Stufen im Zieldiagramm an oder blendet sie aus. Wenn p das im Bearbeitungsfeld eingegebene Ppk- bzw. Cpk-Ziel darstellt, werden Prozesse mit Ppk (Cpk) größer als 2*p grün schattiert; Prozesse mit Ppk (Cpk) kleiner als p werden rot schattiert und die Prozesse mit Ppk (Cpk) größer als p und kleiner als 2*p werden gelb schattiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Syntax:** obj << Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**Beschreibung:** Blendet Punkte im Zieldiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Gesamt-Sigmas berechnet. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
Wait( 1 );
obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Syntax:** obj << Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**Beschreibung:** Blendet Punkte im Zieldiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Syntax:** obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Beschreibung:** Blendet Punkte im Zieldiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas oder, falls angegeben, anhand der Schätzung des Zwischen-und-Innerhalb-Sigmas berechnet.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### Elementmeldungen

#### Capability Lines

**Syntax:** obj << Capability Index Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**Beschreibung:** Legt den Ppk- bzw. Cpk-Wert fest, der die Ppk- bzw. Cpk-Referenzlinie im Prozessfähigkeitsindexdiagramm steuert. Dieser Wert wird auch im Bearbeitungsfeld für Ppk (Cpk) angezeigt. Standardmäßig „1.0“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal )
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**Syntax:** obj << Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**Beschreibung:** Blendet Beschriftungen für Punkte im Prozessfähigkeitsindexdiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Gesamt-Sigmas berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**Syntax:** obj << Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**Beschreibung:** Blendet Beschriftungen für Punkte im Prozessfähigkeitsindexdiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Syntax:** obj << Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Beschreibung:** Blendet Beschriftungen Punkte im Prozessfähigkeitsindexdiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas oder, falls angegeben, anhand der Schätzung des Zwischen-und-Innerhalb-Sigmas berechnet.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Syntax:** obj << Capability Index Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Ppk- bzw. Cpk-Stufen im Zieldiagramm an oder blendet sie aus. Wenn p das im Bearbeitungsfeld eingegebene Ppk- bzw. Cpk-Ziel darstellt, werden Prozesse mit Ppk (Cpk) größer als 2*p grün schattiert; Prozesse mit Ppk (Cpk) kleiner als p werden rot schattiert und die Prozesse mit Ppk (Cpk) größer als p und kleiner als 2*p werden gelb schattiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Syntax:** obj << Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**Beschreibung:** Blendet Punkte im Prozessfähigkeitsindexdiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Gesamt-Sigmas berechnet. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Syntax:** obj << Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**Beschreibung:** Blendet Punkte im Prozessfähigkeitsindexdiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Syntax:** obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Beschreibung:** Blendet Punkte im Prozessfähigkeitsindexdiagramm ein oder aus. Die Punkte werden anhand der Schätzung des Innerhalb-Sigmas oder, falls angegeben, anhand der Schätzung des Zwischen-und-Innerhalb-Sigmas berechnet.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### Elementmeldungen

#### Capability Boundary

**Syntax:** obj << Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); 

scrobj << Capability Boundary( number=1.0 )

**Beschreibung:** Legt den Gesamt-Prozessfähigkeits-Ppk-Wert fest, der die Grenzen des Prozessleistungsdiagramms für „fähig“ im Vergleich zu „nicht fähig“ steuert. Dieser Wert erscheint auch im Bearbeitungsfeld „Gesamter-Ppk“. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Boundary( 1 );

```

#### Label Points

**Syntax:** obj << Process Performance Plot( 1, Label Points( state=0|1 ) ); 

scrobj << Label Points( state=0|1 )

**Beschreibung:** Zeigt die Prozessnamen als Beschriftungen für die Punkte im Prozessleistungsdiagramm an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Label Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**Syntax:** obj << Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); 

scrobj << Show Within Cpk Curve( state=0|1 )

**Beschreibung:** Zeigt die Innerhalb-Cpk-Kurve im Prozessleistungsdiagramm an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**Syntax:** obj << Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); 

scrobj << Stability Boundary( number=1.25 )

**Beschreibung:** Legt den Stabilitätsverhältniswert fest, der die Grenzen des Prozessleistungsdiagramms für „stabil“ im Vergleich zu „instabil“ steuert. Standardmäßig „1.25“.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Stability Boundary( 1.25 );

```

