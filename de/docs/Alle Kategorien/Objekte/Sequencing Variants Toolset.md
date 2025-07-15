# Sequencing Variants Toolset



## Elementmeldungen

### Arguments

**Syntax:** obj &lt;&lt; Arguments

**Beschreibung:** Ermöglicht die Angabe von Optionen zur Ausführung der Plattform aus dem Skriptfenster.

### Run Cmd

**Syntax:** obj &lt;&lt; Run Cmd

**Beschreibung:** Legt die Toolset-Aufgabe für die Sequenzierungsvarianten fest, die im Skriptfenster ausgeführt werden soll.

### Run Spec

**Syntax:** obj &lt;&lt; Run Spec

**Beschreibung:** Legt die Toolset-Aufgabe für die Sequenzierungsvarianten fest, die im Schnittstellenfenster ausgeführt werden soll.

### Specification

**Syntax:** obj &lt;&lt; Specification

**Beschreibung:** Ermöglicht die Spezifikation einer Aufgabe.

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

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
obj << Copy Script;

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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
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

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
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

### Sequencing Variants Toolset

**Syntax:** Sequencing Variants Toolset

**Beschreibung:** Bietet einen Rahmen für die Verarbeitung und Analyse von Sequenzierungsdaten mit hohem Durchsatz mit SamTools und BcfTools.

## Sequencing Variants Toolset Run

### Elementmeldungen

#### Auto Send Output to Files List

**Syntax:** obj &lt;&lt; Auto Send Output to Files List( state=0|1 )

**Beschreibung:** Sendet Ausgabedateien an den Dateilistenbereich.

#### Bam Files

**Syntax:** obj &lt;&lt; Bam Files

**Beschreibung:** Gibt BAM-Dateien an.

#### Bcf Files

**Syntax:** obj &lt;&lt; Bcf Files

**Beschreibung:** Gibt BCF-Dateien an.

#### Caller

**Syntax:** obj &lt;&lt; Caller( "Multiallelisch"|"Konsens"="Multiallelisch" )

**Beschreibung:** Standardmäßig „Multiallelisch“.

#### Copy Task Specification

**Syntax:** obj &lt;&lt; Copy Task Specification

**Beschreibung:** Kopiert die aktuellen Toolset-Spezifikationen für die Sequenzierungsvarianten in die Zwischenablage.

**JMP Version hinzugefügt:** 19

#### Files

**Syntax:** obj &lt;&lt; Files

**Beschreibung:** In SamTools auszuführende Eingabedateien laden.

#### Ploidy

**Syntax:** obj &lt;&lt; Ploidy( number=2 )

**Beschreibung:** Standardmäßig „2“.

#### Recall in Task Specification

**Syntax:** obj &lt;&lt; Recall in Task Specification

**Beschreibung:** Legt für die Aufgabenspezifikation im Aufgabenspezifikationsbericht das angegebene Modell fest.

#### Ref Files

**Syntax:** obj &lt;&lt; Ref Files

**Beschreibung:** Gibt Referenzgenomdateien an.

#### Remove Run

**Syntax:** obj &lt;&lt; ( Run[number] &lt;&lt; Remove Run( state=0|1 ) )

**Beschreibung:** Entfernt den angegebenen Lauf aus dem Berichtsfenster.

#### Results Folder

**Syntax:** obj &lt;&lt; Results Folder

**Beschreibung:** Gibt den Ergebnisordner an.

#### Sam Files

**Syntax:** obj &lt;&lt; Sam Files

**Beschreibung:** Gibt SAM-Dateien an.

#### Send Output to Files List

**Syntax:** obj &lt;&lt; Send Output to Files List( state=0|1 )

**Beschreibung:** Sendet Ausgabedateien an den Dateilistenbereich.

#### Sort Reads By

**Syntax:** obj &lt;&lt; Sort Reads By( "Koordinaten"|"Alphanumerisch"|"Lexikografisch"="Koordinaten" )

**Beschreibung:** Standardmäßig „Koordinaten“.

#### Summary

**Syntax:** obj &lt;&lt; Summary( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der Details des Laufs enthält. Standardmäßig ein.

#### Target Regions

**Syntax:** obj &lt;&lt; Target Regions

**Beschreibung:** Legt Zielregionen fest. Die Angabe von Regionen erfordert, dass die BAM-Datei nach Koordinaten sortiert und indiziert ist.

#### Task

**Syntax:** obj &lt;&lt; Task( "Index Fasta"|"SAM in BAM konvertieren"|"Reads sortieren"|"MateKoordinaten hinzufügen"|"Duplikate entfernen"|"Dateien zusammenführen"|"Index BAM"|"BAM in SAM konvertieren"|"Zugeordnete Reads extrahieren"|"Nicht zugeordnete Reads extrahieren"|"Zielregionen extrahieren"|"Einwandfrei Ausgerichtete extrahieren"|"Ersten Reads extrahieren"|"Nichtübereinstimmungen und Einfügungen kennzeichnen"|"Ausrichtung zählen"|"Ausrichtung nach Flag zählen"|"Ausrichtung nach Referenz zählen"|"Statistik generieren"|"Qualität der Basenausrichtung generieren"|"Read-Tiefe generieren"|"Komprimieren mit Bgzip"|"Dekomprimieren mit Bgzip"|"Genotyp-Likelihoods generieren"|"Genotyp-Aufrufe generieren"|"Bcf in Vcf konvertieren"|"Vcf in Bcf konvertieren" )

**Beschreibung:** Legt die Aufgabe für die Ausführung fest.

#### Title

**Syntax:** obj &lt;&lt; Title

**Beschreibung:** Legt einen Titel fest.

#### Unthreaded

**Syntax:** obj &lt;&lt; Unthreaded( state=0|1 )

**Beschreibung:** Verwenden Sie nur den Haupt-Thread für Berechnungen.

#### Vcf Files

**Syntax:** obj &lt;&lt; Vcf Files

**Beschreibung:** Gibt VCF-Dateien an.

## Sequencing Variants Toolset Specification

### Elementmeldungen

#### Auto Send Output to Files List

**Syntax:** obj &lt;&lt; Auto Send Output to Files List( state=0|1 )

**Beschreibung:** Sendet Ausgabedateien an den Dateilistenbereich.

#### Bam Files

**Syntax:** obj &lt;&lt; Bam Files

**Beschreibung:** Gibt BAM-Dateien an.

#### Bcf Files

**Syntax:** obj &lt;&lt; Bcf Files

**Beschreibung:** Gibt BCF-Dateien an.

#### Caller

**Syntax:** obj &lt;&lt; Caller( "Multiallelisch"|"Konsens"="Multiallelisch" )

**Beschreibung:** Standardmäßig „Multiallelisch“.

#### Files

**Syntax:** obj &lt;&lt; Files

**Beschreibung:** In SamTools auszuführende Eingabedateien laden.

#### Ploidy

**Syntax:** obj &lt;&lt; Ploidy( number=2 )

**Beschreibung:** Gibt eine positive Zahl an, die die Ploidie-Stufe anzeigt. Standardmäßig „2“.

#### Ref Files

**Syntax:** obj &lt;&lt; Ref Files

**Beschreibung:** Gibt Referenzgenomdateien an.

#### Results Folder

**Syntax:** obj &lt;&lt; Results Folder

**Beschreibung:** Gibt den Ergebnisordner an.

#### Sam Files

**Syntax:** obj &lt;&lt; Sam Files

**Beschreibung:** Gibt SAM-Dateien an.

#### Sort Reads By

**Syntax:** obj &lt;&lt; Sort Reads By( "Koordinaten"|"Alphanumerisch"|"Lexikografisch"="Koordinaten" )

**Beschreibung:** Standardmäßig „Koordinaten“.

#### Target Regions

**Syntax:** obj &lt;&lt; Target Regions

**Beschreibung:** Legt Zielregionen fest. Die Angabe von Regionen erfordert, dass die BAM-Datei nach Koordinaten sortiert und indiziert ist.

#### Task

**Syntax:** obj &lt;&lt; Task( "Index Fasta"|"SAM in BAM konvertieren"|"Reads sortieren"|"MateKoordinaten hinzufügen"|"Duplikate entfernen"|"Dateien zusammenführen"|"Index BAM"|"BAM in SAM konvertieren"|"Zugeordnete Reads extrahieren"|"Nicht zugeordnete Reads extrahieren"|"Zielregionen extrahieren"|"Einwandfrei Ausgerichtete extrahieren"|"Ersten Reads extrahieren"|"Nichtübereinstimmungen und Einfügungen kennzeichnen"|"Ausrichtung zählen"|"Ausrichtung nach Flag zählen"|"Ausrichtung nach Referenz zählen"|"Statistik generieren"|"Qualität der Basenausrichtung generieren"|"Read-Tiefe generieren"|"Komprimieren mit Bgzip"|"Dekomprimieren mit Bgzip"|"Genotyp-Likelihoods generieren"|"Genotyp-Aufrufe generieren"|"Bcf in Vcf konvertieren"|"Vcf in Bcf konvertieren"="Index Fasta" )

**Beschreibung:** Legt die Aufgabe für die Ausführung fest. Standardmäßig „Index Fasta“.

#### Title

**Syntax:** obj &lt;&lt; Title

**Beschreibung:** Legt einen Titel fest.

#### Unthreaded

**Syntax:** obj &lt;&lt; Unthreaded( state=0|1 )

**Beschreibung:** Verwenden Sie nur den Haupt-Thread für Berechnungen.

#### Vcf Files

**Syntax:** obj &lt;&lt; Vcf Files

**Beschreibung:** Gibt VCF-Dateien an.

