# XGBoost



## Elementmeldungen

### Change Variables

**Syntax:** obj &lt;&lt; Change Variables

**Beschreibung:** Ändert X, Y und andere Variablen für nachfolgende Modelle.

**JMP Version hinzugefügt:** 16

### Compare

**Syntax:** obj &lt;&lt; Compare

**Beschreibung:** Aktualisiert die XGBoost-Vergleichsmetriken.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );obj << Compare( Correlation( 1 ) );

```

### Fit

**Syntax:** obj &lt;&lt; Fit

**Beschreibung:** Passt ein XGBoost-Modell an. Sie können XGBoost-Parameter angeben und darin Spezifikationen anpassen.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**JMP Version hinzugefügt:** 16

### Method

**Syntax:** obj &lt;&lt; Method( "xgboost"|"lightgbm"="xgboost" )

**Beschreibung:** Select either XGBoost or LightGBM as a method for gradient boosting fitting. Standardmäßig „xgboost“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( Method( "lightgbm" ), objective( "regression" ) ));

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Relaunch Analysis;

```

### Show Details

**Syntax:** obj &lt;&lt; Show Details( state=0|1 )

**Beschreibung:** Weitere Details anzeigen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

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

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Copy Script;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Timing;Show( t );

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

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Script Window;

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

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Spalten

### Censor

**Syntax:** obj = XGBoost(...&lt;Censor( column )&gt;...)

**JMP Version hinzugefügt:** 17

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**Syntax:** obj = XGBoost(...Factor( column(s) )...)

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**Syntax:** obj = XGBoost(...&lt;Freq( column )&gt;...)

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**Syntax:** obj = XGBoost(...Response( column(s) )...)

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**Syntax:** obj = XGBoost(...&lt;Validation( column(s) )&gt;...)

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**Syntax:** obj = XGBoost(...&lt;Weight( column )&gt;...)

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**Syntax:** obj = XGBoost(...X( column(s) )...)

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**Syntax:** obj = XGBoost(...Y( column(s) )...)

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Zugehörige Konstruktoren

### XGBoost

**Syntax:** XGBoost(Y( columns ), X( columns ))

**Beschreibung:** Vorhersagemodellierungsschnittstelle für eXtreme Gradient Boosted Trees.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## XGBoost Compare

### Elementmeldungen

#### AUC

**Syntax:** obj &lt;&lt; AUC( state=0|1 )

**Beschreibung:** Blendet AUROC, den Bereich unter der Receiver-Operationscharakteristik, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### AUPRC

**Syntax:** obj &lt;&lt; AUPRC( state=0|1 )

**Beschreibung:** Fläche unter der Precision-Recall-Kurve Standardmäßig ein.

**JMP Version hinzugefügt:** 17

#### Accuracy

**Syntax:** obj &lt;&lt; Accuracy( state=0|1 )

**Beschreibung:** Blendet die Genauigkeit, den Anteil korrekter Klassifikationen, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Censor

**Syntax:** obj &lt;&lt; Censor( state=0|1 )

**Beschreibung:** Zeigt den Befehl „Zensieren“ an oder blendet ihn aus Standardmäßig ein.

**JMP Version hinzugefügt:** 17

#### Concordance

**Syntax:** obj &lt;&lt; Concordance( state=0|1 )

**Beschreibung:** Zeigt die Konkordanz an oder blendet sie aus, wobei es sich um den Harrell C-Index handelt, der die Stärke der Sortierungseffizienz misst. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

#### Correlation

**Syntax:** obj &lt;&lt; Correlation( state=0|1 )

**Beschreibung:** Blendet die Pearson-Korrelation, ein Maß für die Stärke der linearen Beziehung, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### F1

**Syntax:** obj &lt;&lt; F1( state=0|1 )

**Beschreibung:** Blendet den F1-Score, den harmonischen Durchschnitt von Präzision und Abruf, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Features

**Syntax:** obj &lt;&lt; Features( state=0|1 )

**Beschreibung:** Blendet die Funktionenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Freq

**Syntax:** obj &lt;&lt; Freq( state=0|1 )

**Beschreibung:** Blendet die Häufigkeitenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### H Measure

**Syntax:** obj &lt;&lt; H Measure( state=0|1 )

**Beschreibung:** Zeigt das H-Maß an oder blendet es aus, das die Anteilsverbesserung im Vergleich zur Baseline misst. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

#### Hide All Models

**Syntax:** obj &lt;&lt; Hide All Models

**Beschreibung:** Alle Modelle ausblenden.

**JMP Version hinzugefügt:** 16

#### LogLoss

**Syntax:** obj &lt;&lt; LogLoss( state=0|1 )

**Beschreibung:** Blendet den Logarithmus der Likelihood-basierten Verlustfunktion ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### MAE

**Syntax:** obj &lt;&lt; MAE( state=0|1 )

**Beschreibung:** Blendet MAE, die mittlere absolute Abweichung, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### MCC

**Syntax:** obj &lt;&lt; MCC( state=0|1 )

**Beschreibung:** Blendet den Matthews-Korrelationskoeffizienten, die Pearson-Korrelation für binäre Variablen, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Misclass

**Syntax:** obj &lt;&lt; Misclass( state=0|1 )

**Beschreibung:** Blendet die Fehlklassifikationsrate, den Anteil inkorrekter Klassifikationen, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Predictors

**Syntax:** obj &lt;&lt; Predictors( state=0|1 )

**Beschreibung:** Blendet die Prädiktorenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Profit

**Syntax:** obj &lt;&lt; Profit( state=0|1 )

**Beschreibung:** Blendet den erwarteten Gewinn ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### RMSE

**Syntax:** obj &lt;&lt; RMSE( state=0|1 )

**Beschreibung:** Blendet RMSE, die Wurzel der mittleren quadratischen Abweichung, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### RSquare

**Syntax:** obj &lt;&lt; RSquare( state=0|1 )

**Beschreibung:** Blendet den r²-Wert, den Anteil der erklärten Variabilität, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Remove Hidden Models

**Syntax:** obj &lt;&lt; Remove Hidden Models

**Beschreibung:** Entfernt alle Modelle, für die das Kontrollkästchen „Anzeigen“ nicht aktiviert ist.

**JMP Version hinzugefügt:** 16

#### Remove Shown Models

**Syntax:** obj &lt;&lt; Remove Shown Models

**Beschreibung:** Entfernt alle Modelle, für die das Kontrollkästchen „Anzeigen“ aktiviert ist, und zeigt die übrigen Modelle an.

**JMP Version hinzugefügt:** 15

#### Response

**Syntax:** obj &lt;&lt; Response( state=0|1 )

**Beschreibung:** Blendet die Zielgrößenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Show All Models

**Syntax:** obj &lt;&lt; Show All Models

**Beschreibung:** Alle Modelle anzeigen.

**JMP Version hinzugefügt:** 16

#### Training Metrics

**Syntax:** obj &lt;&lt; Training Metrics( state=0|1 )

**Beschreibung:** Blendet alle Trainingsmetriken ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Validation

**Syntax:** obj &lt;&lt; Validation( state=0|1 )

**Beschreibung:** Blendet die Validierungsspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Validation Metrics

**Syntax:** obj &lt;&lt; Validation Metrics( state=0|1 )

**Beschreibung:** Blendet alle Validierungsmetriken ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Weight

**Syntax:** obj &lt;&lt; Weight( state=0|1 )

**Beschreibung:** Blendet die Gewichtungsspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### Zugehörige Konstruktoren

#### XGBoost Compare

**Syntax:** XGBoost Compare

## XGBoost Fit

### Elementmeldungen

#### Actual by Predicted Plots

**Syntax:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Trainingsdaten mit den Vorhersagewerten auf der X-Achse und den beobachteten Daten auf der Y-Achse ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Autotune

**Syntax:** obj &lt;&lt; Autotune( state=0 )

**Beschreibung:** Erstellt ein schnell flexibel füllendes Design mit Parametereinstellungeen für Min. und Max. zur Anpassung von n Modellen, wobei n die Anzahl der Einzelversuche ist. Standardmäßig „0“.

**JMP Version hinzugefügt:** 17

#### Confusion Matrices

**Syntax:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Beschreibung:** Blendet eine Kreuztabellenmatrix der beobachteten und vorhergesagten Stufen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler

**Beschreibung:** Blendet interaktive Graphen von Schnitten der Vorhersagefunktion ein oder aus.

**JMP Version hinzugefügt:** 15

#### Copy Parameters to Launch

**Syntax:** obj &lt;&lt; Copy Parameters to Launch

**Beschreibung:** Kopiert die Parameter von diesem Modell in den Bereich „Modell starten“.

**JMP Version hinzugefügt:** 16

#### Decision Thresholds

**Syntax:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Beschreibung:** Blendet Graphen und Tabellen mit Entscheidungsschwellen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Fit Details

**Syntax:** obj &lt;&lt; Fit Details( state=0|1 )

**Beschreibung:** Blendet die statistische Kenngröße für das angepasste Modell ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Generate Python Code

**Syntax:** obj &lt;&lt; Generate Python Code

**Beschreibung:** Erstellt Python-Code für Training und Scoring.

**JMP Version hinzugefügt:** 16

#### Importances

**Syntax:** obj &lt;&lt; Importances( state=0|1 )

**Beschreibung:** Blendet die statistische Kenngröße Gewichtung für jeden Prädiktor ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

#### Lift Curves

**Syntax:** obj &lt;&lt; Lift Curves( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells.

**JMP Version hinzugefügt:** 15

#### Number of Design Points

**Syntax:** obj &lt;&lt; Number of Design Points( number=10 )

**Beschreibung:** Gibt die Anzahl von Einzelsettings für das Tuning-Design an, die ausgeführt werden. Wenn Sie ein großen Problem haben, halten Sie diesen Wert relativ klein. Standardmäßig „10“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**Syntax:** obj &lt;&lt; Number of Inner Folds( number=2 )

**Beschreibung:** Gibt die Anzahl von geschachtelten inneren Faltungen an, die während der automatischen Tunings verwendet werden. Standardmäßig „2“.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Precision Recall Curves

**Syntax:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Beschreibung:** Stellt den Kompromiss zwischen Präzision (Precision) und Sensitivität (Recall) für verschiedene Klassifizierungsschwellenwerte dar. Diese Kurven werden bevorzugt in Szenarien eingesetzt, in denen ein Ungleichgewicht zwischen den Klassen besteht.

**JMP Version hinzugefügt:** 15

#### Profiler

**Syntax:** obj &lt;&lt; Profiler

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

**JMP Version hinzugefügt:** 15

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Beschreibung:** Erstellt Vorhersageformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“.

**JMP Version hinzugefügt:** 15

#### ROC Curves

**Syntax:** obj &lt;&lt; ROC Curves( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität).

**JMP Version hinzugefügt:** 15

#### Remove All But This Fit

**Syntax:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Beschreibung:** Entfernt die Berichte und Diagramme für alle Modelle bis auf dieses.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Beschreibung:** Entfernt den gesamten Modellbericht.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**Syntax:** obj &lt;&lt; Save Predicteds

**Beschreibung:** Speichert die Vorhersagewerte in einer neuen Spalte in der Datentabelle.

**JMP Version hinzugefügt:** 15

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Berechnungen können bei großen Modellen langsam sein.

**JMP Version hinzugefügt:** 15

#### Save SHAPs

**Syntax:** obj &lt;&lt; Save SHAPs

**Beschreibung:** Speichert Shapley-Werte in der Datentabelle. Diese Werte unterteilen Vorhersagen in Komponenten für jeden Prädiktor.

**JMP Version hinzugefügt:** 17

#### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed( number=0 )

**Beschreibung:** Legt für den zufälligen Startwert einen spezifischen Wert fest, um sicherzustellen, dass alle nachfolgenden Berechnungen den gleichen Startwert verwenden und reproduzierbar sind. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler

**Beschreibung:** Blendet interaktive Graphen von Schnitten der Vorhersagefunktion ein oder aus.

**JMP Version hinzugefügt:** 15

#### Tree Details

**Syntax:** obj &lt;&lt; Tree Details( state=0|1 )

**Beschreibung:** Blendet die Aufgliederung jeder Baumteilung ein oder aus.

**JMP Version hinzugefügt:** 15

#### Tuning Design Table

**Syntax:** Tuning Design Table( "table name" )

**Beschreibung:** Gibt den Namen einer geöffneten JMP-Datentabelle mit Parametereinstellungen an, die für die Anpassung einer Serie von Modellen verwendet werden. Die Spalten in dieser Tabelle müssen exakt mit den Parameternamen übereinstimmen, und jede Zeile muss Werte dieser Parameter für diese Modellanpassung enthalten. Parameter, die nicht angegeben werden, werden auf ihre Werte aus diesem Dialogfeld gesetzt.

**JMP Version hinzugefügt:** 15

#### alpha

**Syntax:** obj &lt;&lt; alpha( number=0.0 )

**Beschreibung:** Gibt den L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**Syntax:** obj &lt;&lt; alpha_max( number=0.5 )

**Beschreibung:** Gibt den maximalen L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**Syntax:** obj &lt;&lt; alpha_min( number=0.0 )

**Beschreibung:** Gibt den minimalen L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### bagging_by_query

**Syntax:** obj &lt;&lt; bagging_by_query( state=0 )

**Beschreibung:** Gibt an, ob die zeilenweise Histogrammerstellung erzwungen werden soll. Durch Aktivieren dieser Option wird der Speicherbedarf reduziert, insbesondere bei Daten mit vielen Stichproben, die zu einem kleinen Bagging-Anteil oder einer GOSS-Stichprobenstrategie gehören. Diese Option kann nicht zusammen mit „Spaltenweise erzwingen“ verwendet werden. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### bagging_fraction

**Syntax:** obj &lt;&lt; bagging_fraction( number=1 )

**Beschreibung:** Gibt den Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### bagging_fraction_max

**Syntax:** obj &lt;&lt; bagging_fraction_max( number=1.0 )

**Beschreibung:** Gibt den maximalen Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_max( 1.0 ) ) );

```

#### bagging_fraction_min

**Syntax:** obj &lt;&lt; bagging_fraction_min( number=0.3 )

**Beschreibung:** Gibt den minimalen Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „0.3“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_min( 0.3 ) ) );

```

#### bagging_freq

**Syntax:** obj &lt;&lt; bagging_freq( number=0 )

**Beschreibung:** Gibt die Häufigkeit des Bagging an. Dieser Wert bestimmt die Anzahl der Iterationen, bei denen eine neue Zufallsstichprobe aus Trainingsdaten gezogen wird, um das Modell zu trainieren. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### bagging_seed

**Syntax:** obj &lt;&lt; bagging_seed( number=3 )

**Beschreibung:** Gibt den Startwert an, der für den Zufallszahlengenerator für Bagging verwendet wird. Standardmäßig „3“.

**JMP Version hinzugefügt:** 19

#### base_score

**Syntax:** obj &lt;&lt; base_score( number=0.5 )

**Beschreibung:** Gibt den anfänglichen Vorhersage-Score aller Instanzen an, das ist die globale systematische Abweichung. Der Mittelwert von y ist üblicherweise eine gute Wahl. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### bin_construct_sample_cnt

**Syntax:** obj &lt;&lt; bin_construct_sample_cnt( number=200000 )

**Beschreibung:** Gibt die Anzahl der Beobachtungen an, aus denen zur Bildung diskreter Klassen für Features Stichproben gezogen werden. Wenn diese Option auf kleine Werte eingestellt ist, kann es zu unerwarteten Fehlern und einer schlechten Genauigkeit kommen. Standardmäßig „200000“.

**JMP Version hinzugefügt:** 19

#### boost_from_average

**Syntax:** obj &lt;&lt; boost_from_average( state=1 )

**Beschreibung:** Gibt an, ob die anfängliche Vorhersage auf den Durchschnitt der Zielgrößenvariablen oder auf eine konstante Null gesetzt wird. Diese Option wird nur bei Regressions-, Binär-, Mehrklassen- und Kreuzentropie-Zielen verwendet. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### booster

**Syntax:** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**Beschreibung:** Gibt an, welcher Booster verwendet werden soll. Standardmäßig „gbtree“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### boosting

**Syntax:** obj &lt;&lt; boosting( "gbdt"|"rf"|"dart"="gbdt" )

**Beschreibung:** Gibt die Boosting-Strategie an, die während des Modelltrainings verwendet wird. Standardmäßig „gbdt“.

**JMP Version hinzugefügt:** 19

#### cat_l2

**Syntax:** obj &lt;&lt; cat_l2( number=10 )

**Beschreibung:** Gibt den L2-Regularisierungswert für kategoriale Features an. Standardmäßig „10“.

**JMP Version hinzugefügt:** 19

#### cat_l2_max

**Syntax:** obj &lt;&lt; cat_l2_max( number=15 )

**Beschreibung:** Gibt den maximalen L2-Regularisierungswert für kategoriale Features an. Standardmäßig „15“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_max( 2.0 ) ) );

```

#### cat_l2_min

**Syntax:** obj &lt;&lt; cat_l2_min( number=5 )

**Beschreibung:** Gibt den minimalen L2-Regularisierungswert für kategoriale Features an. Standardmäßig „5“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_min( 0.0 ) ) );

```

#### cat_smooth

**Syntax:** obj &lt;&lt; cat_smooth( number=10 )

**Beschreibung:** Gibt den Regularisierungswert an, der verwendet wird, um die Auswirkungen von Rauschen in kategorialen Features zu reduzieren, insbesondere für Kategorien mit wenigen Beobachtungen. Standardmäßig „10“.

**JMP Version hinzugefügt:** 19

#### cegb_penalty_split

**Syntax:** obj &lt;&lt; cegb_penalty_split( number=0 )

**Beschreibung:** Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### cegb_tradeoff

**Syntax:** obj &lt;&lt; cegb_tradeoff( number=1 )

**Beschreibung:** Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### colsample_bylevel

**Syntax:** obj &lt;&lt; colsample_bylevel( number=1.0 )

**Beschreibung:** Gibt den Anteil von Spalten für die Stichprobenziehung für jede Schicht an. Die Stichprobenziehung geschieht einmal für jede neu erreichte Tiefe in einem Baum. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**Syntax:** obj &lt;&lt; colsample_bynode( number=1.0 )

**Beschreibung:** Gibt den Anteil von Spalten für die Stichprobenziehung für jeden Knoten (Teilung) an. Die Stichprobenziehung geschieht jeweils einmal zu dem Zeitpunkt, wenn eine neue Teilung ausgewertet wird. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**Syntax:** obj &lt;&lt; colsample_bytree( number=1.0 )

**Beschreibung:** Gibt den Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**Syntax:** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**Beschreibung:** Gibt den maximalen Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**Syntax:** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**Beschreibung:** Gibt den minimalen Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### data_random_seed

**Syntax:** obj &lt;&lt; data_random_seed( number=1 )

**Beschreibung:** Gibt den Startwert an, der für den Zufallszahlengenerator verwendet wird, wenn aus den Daten Stichproben zur Erzeugung von Histogrammklassen gezogen werden. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### data_sample_strategy

**Syntax:** obj &lt;&lt; data_sample_strategy( "bagging"|"goss"="bagging" )

**Beschreibung:** Legt die Strategie für das Ziehen von Stichproben zur Verwendung bei jeder Boosting-Iteration fest. Standardmäßig „bagging“.

**JMP Version hinzugefügt:** 19

#### deterministic

**Syntax:** obj &lt;&lt; deterministic( state=0 )

**Beschreibung:** Gibt an, dass Ergebnisse reproduziert werden können. Wird diese Option auf „wahr“ gesetzt, werden stabile Ergebnisse sichergestellt, wenn unterschiedliche Anzahlen von Threads für dieselben Stichproben der Daten und Parameter verwendet werden. Diese Option ist für die Reproduzierbarkeit nützlich. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### device_type

**Syntax:** obj &lt;&lt; device_type( "cpu"|"gpu"="cpu" )

**Beschreibung:** Gibt an, ob das CPU- oder GPU-Gerät verwendet werden soll. Standardmäßig „cpu“.

**JMP Version hinzugefügt:** 19

#### drop_rate

**Syntax:** obj &lt;&lt; drop_rate( number=0.1 )

**Beschreibung:** Gibt den Anteil der vorherigen Bäume an, die während des Dropouts für DART-Boosting weggelassen werden sollen. Standardmäßig „0.1“.

**JMP Version hinzugefügt:** 19

#### drop_seed

**Syntax:** obj &lt;&lt; drop_seed( number=4 )

**Beschreibung:** Gibt den Startwert an, der für das Dropout-Verfahren beim DART-Boosting verwendet wird. Standardmäßig „4“.

**JMP Version hinzugefügt:** 19

#### early_stopping_min_delta

**Syntax:** obj &lt;&lt; early_stopping_min_delta( number=0 )

**Beschreibung:** Gibt den Minimalwert an, um den sich die Trainingsmetrik bei jeder Iteration verbessern muss. Andernfalls stoppt der Trainingsvorgang, wenn eine Runde mit vorzeitigem Stoppen verwendet wird. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### early_stopping_round

**Syntax:** obj &lt;&lt; early_stopping_round( number=0 )

**Beschreibung:** Gibt die maximale Anzahl von Iterationen an, für die das Training fortgesetzt werden soll, solange sich die Trainingsmetrik nicht verbessert. Der Wert Null bedeutet, dass kein vorzeitiges Stoppen erfolgt. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### enable_bundle

**Syntax:** obj &lt;&lt; enable_bundle( state=1 )

**Beschreibung:** Gib an, ob exklusive Feature-Bündelung verwendet werden soll. Wenn diese Option auf „falsch“ gesetzt ist, kann die Trainingsgeschwindigkeit bei dünnbesetzten Datensätzen langsam sein. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### eval_at

**Syntax:** obj &lt;&lt; eval_at( text=1,2,3,4,5 )

**Beschreibung:** Gibt die Cutoff-Punkte bei der Rangordnung von Modellen mit den Metriken NDGG oder MAP an. Standardmäßig „1,2,3,4,5“.

**JMP Version hinzugefügt:** 19

#### eval_metric

**Syntax:** obj &lt;&lt; eval_metric( text )

**Beschreibung:** Gibt die im Iterationsverlaufsdiagramm angezeigt Metrik an, wirkt sich jedoch nicht auf die eigentliche Modellanpassung aus. Lassen Sie diesen Wert für die Standardmetrik, die der Zielfunktion entspricht, leer oder geben Sie eine der folgenden Optionen an: rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### extra_seed

**Syntax:** obj &lt;&lt; extra_seed( number=6 )

**Beschreibung:** Gibt den Startwert an, der für die Auswahl von Schwellenwerten verwendet wird, wenn die Option „Zusätzliche Bäume“ angegeben ist. Standardmäßig „6“.

**JMP Version hinzugefügt:** 19

#### extra_trees

**Syntax:** obj &lt;&lt; extra_trees( state=0 )

**Beschreibung:** Gibt an, ob extrem randomisierte Bäume verwendet werden sollen. Anstatt alle möglichen Teilungspunkte für jedes Feature zu bewerten, um die optimale Teilung zu finden, wählt diese Option an jedem Knoten zufällig eine Teilmenge von Features aus. Für jedes ausgewählte Feature wählt diese Option zufällig einen Schwellenwert aus, der für den Teilungsknoten ausgewertet wird. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### fair_c

**Syntax:** obj &lt;&lt; fair_c( number=1 )

**Beschreibung:** Gibt den Parameter an, der die Stärke der Glättung des fairen Zielverlusts steuert. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### feature_fraction

**Syntax:** obj &lt;&lt; feature_fraction( number=1 )

**Beschreibung:** Gibt den Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### feature_fraction_bynode

**Syntax:** obj &lt;&lt; feature_fraction_bynode( number=1 )

**Beschreibung:** Gibt den Anteil der Features an, die während des Trainings zufällig ausgewählt werden. Ein Wert von 0,75 bedeutet, dass 75 % der Features zufällig für das Training ausgewählt werden. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### feature_fraction_max

**Syntax:** obj &lt;&lt; feature_fraction_max( number=1.0 )

**Beschreibung:** Gibt den maximalen Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_max( 1.0 ) ) );

```

#### feature_fraction_min

**Syntax:** obj &lt;&lt; feature_fraction_min( number=0.2 )

**Beschreibung:** Gibt den minimalen Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „0.2“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_min( 0.2 ) ) );

```

#### feature_fraction_seed

**Syntax:** obj &lt;&lt; feature_fraction_seed( number=2 )

**Beschreibung:** Gibt den Startwert an, der für den Zufallszahlengenerator für den Featureanteil verwendet wird. Standardmäßig „2“.

**JMP Version hinzugefügt:** 19

#### feature_pre_filter

**Syntax:** obj &lt;&lt; feature_pre_filter( state=1 )

**Beschreibung:** Gibt an, ob Features ignoriert werden sollen, die aufgrund des angegebenen Werts für die minimale Anzahl an Beobachtungen in jedem Blatt nicht teilbar sind. Wenn diese Option auf „falsch“ gesetzt ist, kann die Trainingsgeschwindigkeit langsam sein. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### feature_selector

**Syntax:** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**Beschreibung:** Gibt die Funktionsauswahl und Sortiermethode für den linearen Booster an. Standardmäßig „cyclic“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "gblinear" ),	Fit( feature_selector( "cyclic" ) ));

```

#### force_col_wise

**Syntax:** obj &lt;&lt; force_col_wise( state=0 )

**Beschreibung:** Gibt an, ob die spaltenweise Histogrammerstellung erzwungen werden soll. Durch Aktivieren dieser Option wird der Speicherbedarf reduziert, insbesondere bei Daten mit vielen Features. Diese Option kann nicht zusammen mit „Zeilenweise erzwingen“ verwendet werden. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### force_row_wise

**Syntax:** obj &lt;&lt; force_row_wise( state=0 )

**Beschreibung:** Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### gamma

**Syntax:** obj &lt;&lt; gamma( number=0.0 )

**Beschreibung:** Gibt die minimale Verlustreduktion an, die erforderlich ist, um eine weitere Partition an einem Blattknoten des Baums vorzunehmen. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### gpu_device_id

**Syntax:** obj &lt;&lt; gpu_device_id( number=-1 )

**Beschreibung:** Gibt die Gerätenummer bei Verwendung der GPU an. Standardmäßig „-1“.

**JMP Version hinzugefügt:** 19

#### gpu_platform_id

**Syntax:** obj &lt;&lt; gpu_platform_id( number=-1 )

**Beschreibung:** Gibt die Plattformnummer bei Verwendung der GPU an. Standardmäßig „-1“.

**JMP Version hinzugefügt:** 19

#### gpu_use_dp

**Syntax:** obj &lt;&lt; gpu_use_dp( state=0 )

**Beschreibung:** Gibt an, ob auf der GPU Arithmetik mit doppelter Präzision verwendet werden soll. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### grow_policy

**Syntax:** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**Beschreibung:** Gibt die Methode an, um den Bäumen neue Knoten hinzuzufügen. Derzeit gilt diese Option nur, wenn tree_method=hist. Standardmäßig „depthwise“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### histogram_pool_size

**Syntax:** obj &lt;&lt; histogram_pool_size( number=-1 )

**Beschreibung:** Gibt die maximale Speichergröße in Megabyte für das historische Histogramm an. Standardmäßig „-1“.

**JMP Version hinzugefügt:** 19

#### interaction_constraints

**Syntax:** obj &lt;&lt; interaction_constraints( text )

**Beschreibung:** Gibt Nebenbedingungen für die Wechselwirkungen von Features als geschachtelte Liste von Feature Indizes mithilfe von Klammern an. Gemeinsam gruppierte Features können nur miteinander in Wechselwirkung stehen.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost(	Y( :Weight ),	X( :Age, :Height ),	Fit( interaction_constraints( "[[0,1]]" ) ));

```

#### is_enable_sparse

**Syntax:** obj &lt;&lt; is_enable_sparse( state=1 )

**Beschreibung:** Gibt an, ob die Sparse-Optimierung aktiviert werden soll. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### is_unbalance

**Syntax:** obj &lt;&lt; is_unbalance( state=0 )

**Beschreibung:** Gibt an, ob der Trainingsdatensatz bei binärer und Mehrklassenregression nicht balanciert ist. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### iterations

**Syntax:** obj &lt;&lt; iterations( number=30 )

**Beschreibung:** Gibt die Anzahl von Boosting-Iterationen an. Standardmäßig „30“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**Syntax:** obj &lt;&lt; iterations_max( number=100 )

**Beschreibung:** Gibt die maximale Anzahl von Boosting-Iterationen an. Standardmäßig „100“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**Syntax:** obj &lt;&lt; iterations_min( number=20 )

**Beschreibung:** Gibt die minimale Anzahl von Boosting-Iterationen an. Standardmäßig „20“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**Syntax:** obj &lt;&lt; lambda( number=1.0 )

**Beschreibung:** Gibt den L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_l1

**Syntax:** obj &lt;&lt; lambda_l1( number=0 )

**Beschreibung:** Gibt den L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### lambda_l1_max

**Syntax:** obj &lt;&lt; lambda_l1_max( number=2.0 )

**Beschreibung:** Gibt den maximalen L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „2.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_max( 2.0 ) ) );

```

#### lambda_l1_min

**Syntax:** obj &lt;&lt; lambda_l1_min( number=0.0 )

**Beschreibung:** Gibt den minimalen L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_min( 0.0 ) ) );

```

#### lambda_l2

**Syntax:** obj &lt;&lt; lambda_l2( number=0 )

**Beschreibung:** Gibt den L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### lambda_l2_max

**Syntax:** obj &lt;&lt; lambda_l2_max( number=2.0 )

**Beschreibung:** Gibt den maximalen L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „2.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_max( 2.0 ) ) );

```

#### lambda_l2_min

**Syntax:** obj &lt;&lt; lambda_l2_min( number=0.0 )

**Beschreibung:** Gibt den minimalen L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_min( 0.0 ) ) );

```

#### lambda_max

**Syntax:** obj &lt;&lt; lambda_max( number=2.0 )

**Beschreibung:** Gibt den maximalen L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „2.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**Syntax:** obj &lt;&lt; lambda_min( number=0.0 )

**Beschreibung:** Gibt den minimalen L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### lambdarank_norm

**Syntax:** obj &lt;&lt; lambdarank_norm( state=1 )

**Beschreibung:** Gibt an, ob die Lambdas für verschiedene Abfragen normalisiert und die Leistung bei nicht balancierten Daten verbessert werden soll. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### lambdarank_position_bias_regularization

**Syntax:** obj &lt;&lt; lambdarank_position_bias_regularization( number=0 )

**Beschreibung:** Gibt den Wert an, der die systematische Abweichung der Positionsinformationen für das LambdaRank-Ziel steuert. Größere Werte reduzieren die abgeleiteten Faktoren der systematischen Abweichung der Position. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### lambdarank_truncation_level

**Syntax:** obj &lt;&lt; lambdarank_truncation_level( number=30 )

**Beschreibung:** Gibt den Parameter an, der die Anzahl der besten Ergebnisse steuert, auf die sich das Modell während des Trainings für das LambdaRank-Ziel konzentrieren soll. Standardmäßig „30“.

**JMP Version hinzugefügt:** 19

#### learning_rate

**Syntax:** obj &lt;&lt; learning_rate( number=0.3 )

**Beschreibung:** Gibt die Lernrate an. Kleinere Lernraten passen meist besser an, benötigen jedoch mehr Iterationen zum Konvergieren, während größere Lernraten schneller anpassen. Standardmäßig „0.3“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**Syntax:** obj &lt;&lt; learning_rate_max( number=0.4 )

**Beschreibung:** Gibt die maximale Lernrate an. Kleinere Lernraten passen meist besser an, benötigen jedoch mehr Iterationen zum Konvergieren, während größere Lernraten schneller anpassen. Standardmäßig „0.4“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**Syntax:** obj &lt;&lt; learning_rate_min( number=0.05 )

**Beschreibung:** Gibt die minimale Lernrate an. Kleinere Lernraten passen meist besser an, benötigen jedoch mehr Iterationen zum Konvergieren, während größere Lernraten schneller anpassen. Standardmäßig „0.05“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### linear_lambda

**Syntax:** obj &lt;&lt; linear_lambda( number=0.0 )

**Beschreibung:** Gibt den Regularisierungsparameter für lineare Bäume an. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 19

#### linear_tree

**Syntax:** obj &lt;&lt; linear_tree( state=0 )

**Beschreibung:** Gibt an, ob ein stückweise linearer Gradienten-Boosting-Baum angepasst werden soll. Die Teilungen werden wie üblich ausgewählt, aber das Modell ist an jedem Blatt linear statt konstant. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### max_bin

**Syntax:** obj &lt;&lt; max_bin( number=256 )

**Beschreibung:** Gibt die maximale Anzahl diskreter Klassen an, in die stetige Funktionen eingeordnet werden sollen. Diese Option gilt nur für tree_method=hist. Standardmäßig „256“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_bin_by_feature

**Syntax:** obj &lt;&lt; max_bin_by_feature( text )

**Beschreibung:** Gibt die maximale Anzahl von Klassen für jedes Feature an.

**JMP Version hinzugefügt:** 19

#### max_cat_threshold

**Syntax:** obj &lt;&lt; max_cat_threshold( number=32 )

**Beschreibung:** Gibt den Schwellenwert für die maximale Anzahl eindeutiger Kategorien an, die bei der Teilung kategorialer Features berücksichtigt werden sollen. Größere Werte führen zu einer umfassenderen Suche nach optimalen kategorialen Teilungen, was jedoch zu einer längeren Trainingszeit führt. Standardmäßig „32“.

**JMP Version hinzugefügt:** 19

#### max_cat_to_onehot

**Syntax:** obj &lt;&lt; max_cat_to_onehot( number=4 )

**Beschreibung:** Specifies the maximum number of categories that a categorical feature can have to use the one-vs-other split algorithm. Categorical features with more than the maximum number of categories are handled by a different algorithm. Standardmäßig „4“.

**JMP Version hinzugefügt:** 19

#### max_delta_step

**Syntax:** obj &lt;&lt; max_delta_step( number=0.0 )

**Beschreibung:** Gibt den maximalen Deltaschritt an, den jede Blattausgabe annehmen kann. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**Syntax:** obj &lt;&lt; max_depth( number=6 )

**Beschreibung:** Gibt die maximale Tiefe des Baums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit größerer maximaler Tiefe haben ein größeres Risiko für Overfitting. Standardmäßig „6“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**Syntax:** obj &lt;&lt; max_depth_max( number=8 )

**Beschreibung:** Gibt die maximale Tiefe des Baummaximums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit Tiefen von 2^depth und größer haben ein größeres Risiko für Overfitting. Standardmäßig „8“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**Syntax:** obj &lt;&lt; max_depth_min( number=1 )

**Beschreibung:** Gibt die maximale Tiefe des Baumminimums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit Tiefen von 2^depth und größer haben ein größeres Risiko für Overfitting. Standardmäßig „1“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_drop

**Syntax:** obj &lt;&lt; max_drop( number=50 )

**Beschreibung:** Gibt die maximale Anzahl der weggelassenen Bäume bei jeder DART-Boosting-Iteration an. Standardmäßig „50“.

**JMP Version hinzugefügt:** 19

#### max_leaves

**Syntax:** obj &lt;&lt; max_leaves( number=0 )

**Beschreibung:** Gibt die maximale Anzahl von hinzuzufügenden Knoten an. Diese Option gilt nur für grow_policy=lossguide. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### metric

**Syntax:** obj &lt;&lt; metric( "default"|"l1"|"l2"|"rmse"|"quantile"|"mape"|"huber"|"fair"|"poisson"|"gamma"|"gamma_deviance"|"tweedie"|"ndcg"|"map"|"auc"|"average_precision"|"binary_logloss"|"binary_error"|"auc_mu"|"multi_logloss"|"multi_error"|"cross_entropy"|"cross_entropy_lambda"|"kulback_leibler"="default" )

**Beschreibung:** Gibt die Metrik an, die sowohl im Trainings- als auch im Validierungssatz ausgewertet wird. Standardmäßig „default“.

**JMP Version hinzugefügt:** 19

#### min_child_weight

**Syntax:** obj &lt;&lt; min_child_weight( number=1.0 )

**Beschreibung:** Gibt die minimale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die minimale Größe jedes Blatts. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**Syntax:** obj &lt;&lt; min_child_weight_max( number=3.0 )

**Beschreibung:** Gibt die maximale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die maximale Größe jedes Blatts. Standardmäßig „3.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**Syntax:** obj &lt;&lt; min_child_weight_min( number=1.0 )

**Beschreibung:** Gibt die minimale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die minimale Größe jedes Blatts. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### min_data_in_bin

**Syntax:** obj &lt;&lt; min_data_in_bin( number=3 )

**Beschreibung:** Gibt die minimale Anzahl der Beobachtungen an, die in jeder Klasse enthalten sind. Standardmäßig „3“.

**JMP Version hinzugefügt:** 19

#### min_data_in_leaf

**Syntax:** obj &lt;&lt; min_data_in_leaf( number=20 )

**Beschreibung:** Gibt die minimale Anzahl der Beobachtungen in jedem Blatt an. Standardmäßig „20“.

**JMP Version hinzugefügt:** 19

#### min_data_per_group

**Syntax:** obj &lt;&lt; min_data_per_group( number=100 )

**Beschreibung:** Gibt die Minimalanzahl von Beobachtungen pro kategorialer Gruppe bei kategorialen Features an. Standardmäßig „100“.

**JMP Version hinzugefügt:** 19

#### min_gain_to_split

**Syntax:** obj &lt;&lt; min_gain_to_split( number=0 )

**Beschreibung:** Gibt die maximale Tiefe des Baums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit größerer maximaler Tiefe haben ein größeres Risiko für Overfitting. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### min_sum_hessian_in_leaf

**Syntax:** obj &lt;&lt; min_sum_hessian_in_leaf( number=0.001 )

**Beschreibung:** Gibt die minimale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die minimale Größe jedes Blatts. Standardmäßig „0.001“.

**JMP Version hinzugefügt:** 19

#### min_sum_hessian_in_leaf_max

**Syntax:** obj &lt;&lt; min_sum_hessian_in_leaf_max( number=10.0 )

**Beschreibung:** Gibt die maximale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die maximale Größe jedes Blatts. Standardmäßig „10.0“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_max( 10.0 ) ) );

```

#### min_sum_hessian_in_leaf_min

**Syntax:** obj &lt;&lt; min_sum_hessian_in_leaf_min( number=0.5 )

**Beschreibung:** Gibt die minimale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die minimale Größe jedes Blatts. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_min( 0.5 ) ) );

```

#### monotone_constraints

**Syntax:** obj &lt;&lt; monotone_constraints( text=None )

**Beschreibung:** Gibt Nebenbedingungen für Monotonie für jedes Feature an. Die Nebenbedingungen müssen in einer durch Komma getrennten Liste von Werten innerhalb von Klammern angegeben werden. Dabei bedeutet -1 = negativ, 1 = positiv und 0 = keine Nebenbedingung. Standardmäßig „None“.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### monotone_constraints_method

**Syntax:** obj &lt;&lt; monotone_constraints_method( "basic"|"intermediate"|"advanced"="basic" )

**Beschreibung:** Gibt die Methode für die monotone Nebenbedingung an, wenn festgelegt ist, dass eine Nebenbedingung erzwungen werden soll. Standardmäßig „basic“.

**JMP Version hinzugefügt:** 19

#### monotone_penalty

**Syntax:** obj &lt;&lt; monotone_penalty( number=0 )

**Beschreibung:** Gibt die Strenge der monotonen Nebenbedingung an, wenn eine Nebenbedingung zur Durchsetzung festgelegt wird. Ein angegebener Wert von K verbietet jegliche monotone Teilung auf den ersten K Ebenen des Baums. Größere Werte führen zu einer stärkeren Bestrafung im frühen Baumerstellungsprozess. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### multi_error_top_k

**Syntax:** obj &lt;&lt; multi_error_top_k( number=1 )

**Beschreibung:** Gibt den Schwellenwert für die Top-k-Multifehlermetrik bei der Mehrklassenklassifizierung an. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### neg_bagging_fraction

**Syntax:** obj &lt;&lt; neg_bagging_fraction( number=1 )

**Beschreibung:** Gibt den Wert an, um den der Vorgang der Ziehung negativer Stichproben in einer nicht balancierten binären Regression angepasst werden soll. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### normalize_type

**Syntax:** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**Beschreibung:** Gibt die Art des Normalisierungsalgorithmus für den DART-Booster an. Standardmäßig „tree“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( normalize_type( "tree" ) ));

```

#### nthread

**Syntax:** obj &lt;&lt; nthread( number=0 )

**Beschreibung:** Gibt die Anzahl von parallelen Threads für die Ausführung von XGBoost an. Standardmäßig werden alle verfügbaren Threads verwendet. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_grad_quant_bins

**Syntax:** obj &lt;&lt; num_grad_quant_bins( number=4 )

**Beschreibung:** Gibt die Anzahl der Klassen für die Quantisierungsgradienten und Hesseschen Matrizen bei Verwendung des quantisierten Gradienten an. Größere Werte erzeugen ein quantisiertes Training, das näher am Training mit voller Präzision liegt. Standardmäßig „4“.

**JMP Version hinzugefügt:** 19

#### num_iteration_predict

**Syntax:** obj &lt;&lt; num_iteration_predict( number=-1 )

**Beschreibung:** Gibt die Anzahl von Iterationen an, für die Vorhersagen getroffen werden sollen. Standardmäßig „-1“.

**JMP Version hinzugefügt:** 19

#### num_iterations

**Syntax:** obj &lt;&lt; num_iterations( number=100 )

**Beschreibung:** Gibt die Anzahl von Boosting-Iterationen an. Standardmäßig „100“.

**JMP Version hinzugefügt:** 19

#### num_iterations_max

**Syntax:** obj &lt;&lt; num_iterations_max( number=100 )

**Beschreibung:** Gibt die maximale Anzahl von Boosting-Iterationen an. Standardmäßig „100“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_max( 100 ) ) );

```

#### num_iterations_min

**Syntax:** obj &lt;&lt; num_iterations_min( number=20 )

**Beschreibung:** Gibt die minimale Anzahl von Boosting-Iterationen an. Standardmäßig „20“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_min( 20 ) ) );

```

#### num_leaves

**Syntax:** obj &lt;&lt; num_leaves( number=31 )

**Beschreibung:** Gibt die maximale Anzahl von Blättern an jedem Baum an. Standardmäßig „31“.

**JMP Version hinzugefügt:** 19

#### num_parallel_tree

**Syntax:** obj &lt;&lt; num_parallel_tree( number=1 )

**Beschreibung:** Gibt die Anzahl von Boosted Trees an, die parallel wachsen. Die Ergebnisse werden dann gemittelt. Standardmäßig „1“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### num_threads

**Syntax:** obj &lt;&lt; num_threads( number=0 )

**Beschreibung:** Gibt die Anzahl der Threads an. Um die beste Geschwindigkeit zu erreichen, setzen Sie diesen Wert auf die Anzahl der CPU-Kerne. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### objective

**Syntax:** obj &lt;&lt; objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**Beschreibung:** Gibt die für die Modellanpassung zu optimierende Funktion an. Die Funktion muss mit dem Modellierungstyp der Zielgröße konsistent sein. Standardmäßig „reg:squarederror“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### objective_seed

**Syntax:** obj &lt;&lt; objective_seed( number=5 )

**Beschreibung:** Specifies the seed that is used in the random number generator for the objective parameter. Standardmäßig „5“.

**JMP Version hinzugefügt:** 19

#### one_drop

**Syntax:** obj &lt;&lt; one_drop( number=0 )

**Beschreibung:** Wenn dieses Flag im DART-Booster aktiviert ist, wird beim Dropout stets mindestens ein Baum weggelassen. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### other_rate

**Syntax:** obj &lt;&lt; other_rate( number=0.1 )

**Beschreibung:** Gibt das Beibehaltungsverhältnis für Daten mit kleinem Gradienten für die GOSS-Strategie zum Ziehen von Datenstichproben an. Standardmäßig „0.1“.

**JMP Version hinzugefügt:** 19

#### path_smooth

**Syntax:** obj &lt;&lt; path_smooth( number=0 )

**Beschreibung:** Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### poisson_max_delta_step

**Syntax:** obj &lt;&lt; poisson_max_delta_step( number=0.7 )

**Beschreibung:** Gibt einen Wert an, der dazu dient, den maximalen Vorhersagebeitrag von Blättern für das Poisson-Modell zu begrenzen. Standardmäßig „0.7“.

**JMP Version hinzugefügt:** 19

#### pos_bagging_fraction

**Syntax:** obj &lt;&lt; pos_bagging_fraction( number=1 )

**Beschreibung:** Gibt den Wert an, um den der Vorgang der Ziehung positiver Stichproben in einer nicht balancierten binären Regression angepasst werden soll. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### pred_early_stop

**Syntax:** obj &lt;&lt; pred_early_stop( state=0 )

**Beschreibung:** Gibt an, ob bei Klassifizierungs- und Rangordnungs-Anwendungen ein vorzeitiges Stoppen der Vorhersage erzwungen werden soll. Wenn diese Option auf „wahr“ gesetzt ist, kann die Vorhersage schneller sein, doch kann sich das auf die Genauigkeit auswirken. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### pred_early_stop_freq

**Syntax:** obj &lt;&lt; pred_early_stop_freq( number=10 )

**Beschreibung:** Legt die Häufigkeit der Prüfung des vorzeitigen Stoppens der Vorhersage fest, wenn das vorzeitige Stoppen der Vorhersage angegeben ist. Standardmäßig „10“.

**JMP Version hinzugefügt:** 19

#### pred_early_stop_margin

**Syntax:** obj &lt;&lt; pred_early_stop_margin( number=10 )

**Beschreibung:** Specifies the threshold margin in prediction early stopping when prediction early stopping is specified. This parameter enables the prediction process to stop early if the margin is far enough from the threshold. Standardmäßig „10“.

**JMP Version hinzugefügt:** 19

#### predict_disable_shape_check

**Syntax:** obj &lt;&lt; predict_disable_shape_check( state=0 )

**Beschreibung:** Gibt an, ob ein Fehler gemeldet werden soll, wenn Vorhersagen für Daten getroffen werden, die eine andere Anzahl von Features haben als die Trainingsdaten. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### predictor

**Syntax:** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**Beschreibung:** Gibt die Art des Vorhersagealgorithmus an. Standardmäßig „auto“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**Syntax:** obj &lt;&lt; process_type( "default"|"update"="default" )

**Beschreibung:** Gibt die Art des auszuführenden Boostingvorgangs an. Standardmäßig „default“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### quant_train_renew_leaf

**Syntax:** obj &lt;&lt; quant_train_renew_leaf( state=0 )

**Beschreibung:** Gibt an, ob die Blattwerte mit ursprünglichen Gradienten erneuert werden sollen, wenn quantisiertes Training aktiv ist. Diese Option kann die Genauigkeit der Rangordnungsziele beim quantisierten Training verbessern. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### rate_drop

**Syntax:** obj &lt;&lt; rate_drop( number=0.0 )

**Beschreibung:** Gibt die Dropout-Rate für den DART-Booster an. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**Syntax:** obj &lt;&lt; refresh_leaf( number=1 )

**Beschreibung:** Gibt den Parameter der Aktualisierung an. Ist 1 festgelegt, werden Blätter und Knoten aktualisiert. Ist 0 festgelegt, werden nur Knoten aktualisiert. Standardmäßig „1“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### reg_sqrt

**Syntax:** obj &lt;&lt; reg_sqrt( state=0 )

**Beschreibung:** Gibt an, ob für Regressionsmodelle die Quadratwurzel der Zielgrößenvariablen anstelle der ursprünglichen Werte angepasst werden soll. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### sample_type

**Syntax:** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**Beschreibung:** Gibt die Art des Algorithmus zum Ziehen von Stichproben für den DART-Booster an. Standardmäßig „uniform“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( sample_type( "uniform" ) ));

```

#### scale_pos_weight

**Syntax:** obj &lt;&lt; scale_pos_weight( number=1.0 )

**Beschreibung:** Gibt das Gleichgewicht aus positiven und negativen Gewichtungen an, die für nicht balancierte Klassen nützlich sind. Ein typischer Wert ist Summe(negative Instanzen) / Summe(positive Instanzen). Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**Syntax:** obj &lt;&lt; seed( number=0 )

**Beschreibung:** Gibt den Startwert für den Zufallszahlengenerator an. Legen Sie diesen Wert für die Reproduzierbarkeit der Ergebnisse fest. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sigmoid

**Syntax:** obj &lt;&lt; sigmoid( number=1 )

**Beschreibung:** Gibt den Parameter für die Sigmoid-Funktion in binären und Mehrklassenmodellen an. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

#### sketch_eps

**Syntax:** obj &lt;&lt; sketch_eps( number=0.03 )

**Beschreibung:** Wird nur für tree_method=approx verwendet. Dieser Wert kann annähernd in (1 / sketch_eps) = Anzahl von Klassen übersetzt werden. Standardmäßig „0.03“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**Syntax:** obj &lt;&lt; skip_drop( number=0.0 )

**Beschreibung:** Gibt die Wahrscheinlichkeit dafür an, dass der Dropout-Vorgang während einer DART-Boosting-Iteration übersprungen wird. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### start_iteration_predict

**Syntax:** obj &lt;&lt; start_iteration_predict( number=0 )

**Beschreibung:** Gibt die Startiteration an, für die Vorhersagen getroffen werden sollen. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### stochastic_rounding

**Syntax:** obj &lt;&lt; stochastic_rounding( state=1 )

**Beschreibung:** Gibt an, ob bei der Gradientenquantisierung stochastische Rundung verwendet werden soll. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### subsample

**Syntax:** obj &lt;&lt; subsample( number=1.0 )

**Beschreibung:** Gibt den Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**Syntax:** obj &lt;&lt; subsample_max( number=1.0 )

**Beschreibung:** Gibt den maximalen Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**Syntax:** obj &lt;&lt; subsample_min( number=0.5 )

**Beschreibung:** Gibt den minimalen Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**Syntax:** obj &lt;&lt; top_k( number=256 )

**Beschreibung:** Gibt die Anzahl von Top-Funktionen an, die bei den Greedy- und Thrifty-Funktionen zur Auswahl steht. Diese Option gilt nur für den gblinear-Booster. Standardmäßig „256“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### top_rate

**Syntax:** obj &lt;&lt; top_rate( number=0.2 )

**Beschreibung:** Gibt das Beibehaltungsverhältnis für Daten mit großem Gradienten für die GOSS-Strategie zum Ziehen von Datenstichproben an. Standardmäßig „0.2“.

**JMP Version hinzugefügt:** 19

#### tree_method

**Syntax:** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**Beschreibung:** Gibt den Algorithmus für die Baumerzeugung bei XGBoost an. Standardmäßig „auto“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**Syntax:** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**Beschreibung:** Gibt die Power der Tweedie-Verteilung an. Dieser Wert muss zwischen 1 und 2 liegen. Diese Option gilt nur für objective=reg:tweedie. Standardmäßig „1.5“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) ));

```

#### uniform_drop

**Syntax:** obj &lt;&lt; uniform_drop( state=0 )

**Beschreibung:** Specifies whether to select trees for dropping in DART boosting using uniform probability. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### updater

**Syntax:** obj &lt;&lt; updater( text )

**Beschreibung:** Gibt die Baumaktualisierung für den gbtree-Booster an. Geben Sie eine der folgenden Optionen an: grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

#### use_missing

**Syntax:** obj &lt;&lt; use_missing( state=1 )

**Beschreibung:** Gibt an, ob eine spezielle Behandlung fehlender Werte erzwungen werden soll. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### use_quantized_grad

**Syntax:** obj &lt;&lt; use_quantized_grad( state=0 )

**Beschreibung:** Gibt an, ob beim Training Gradientenquantisierung verwendet werden soll. Durch Aktivieren dieser Option werden die Gradienten und Hesseschen Matrizen in Klassen diskretisiert, was in den meisten Fällen das Training beschleunigen kann, ohne dass dabei nennenswerte Genauigkeitsverluste auftreten. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### xgboost_dart_mode

**Syntax:** obj &lt;&lt; xgboost_dart_mode( state=0 )

**Beschreibung:** Gibt an, ob der XGBoost-DART-Modus verwendet werden soll. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

#### zero_as_missing

**Syntax:** obj &lt;&lt; zero_as_missing( state=0 )

**Beschreibung:** Gibt an, ob alle Nullwerte als fehlende Werte behandelt werden sollen. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

### Zugehörige Konstruktoren

#### XGBoost Fit

**Syntax:** XGBoost Fit

