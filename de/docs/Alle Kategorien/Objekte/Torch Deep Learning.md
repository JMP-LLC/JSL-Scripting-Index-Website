# Torch Deep Learning



## Elementmeldungen

### Change Variables

**Syntax:** obj << Change Variables

**Beschreibung:** Changes X, Y, and other variables for subsequent models.

**JMP Version hinzugefügt:** 18

### Compare

**Syntax:** obj << Compare

**Beschreibung:** Updates the Torch Deep Learning comparison metrics.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Compare( AUC( 1 ) );

```

### Fit

**Syntax:** obj << Fit

**Beschreibung:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**Syntax:** obj << Get Measures

**JMP Version hinzugefügt:** 18

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Return to the launcher for this analysis.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Relaunch Analysis;

```

### Set

**Syntax:** obj << Set

**Beschreibung:** Specifies parameters for a Torch Deep Learning model.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**Syntax:** obj << Show Details( state=0|1 )

**Beschreibung:** Shows more details.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Copy Script;

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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

## Spalten

### Censor

**Syntax:** obj << Censor( column )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**Syntax:** obj << Freq( column )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**Syntax:** obj << Inputs( column(s) )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**Syntax:** obj << Responses( column(s) )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**Syntax:** obj << Subject( column )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**Syntax:** obj << Validation( column(s) )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**Syntax:** obj << Weight( column )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**Syntax:** obj << X( column(s) )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**Syntax:** obj << Y( column(s) )

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Zugehörige Konstruktoren

### Torch Deep Learning

**Syntax:** Torch Deep Learning(Y( columns ), X( columns ))

**Beschreibung:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Torch Deep Learning Compare

### Elementmeldungen

#### AUC

**Syntax:** obj << AUC( state=0|1 )

**Beschreibung:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Accuracy

**Syntax:** obj << Accuracy( state=0|1 )

**Beschreibung:** Shows or hides the accuracy, which is the proportion of correct classifications. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Censor

**Syntax:** obj << Censor( state=0|1 )

**Beschreibung:** Shows or hides the Censor command Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Concordance

**Syntax:** obj << Concordance( state=0|1 )

**Beschreibung:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Correlation

**Syntax:** obj << Correlation( state=0|1 )

**Beschreibung:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### F1

**Syntax:** obj << F1( state=0|1 )

**Beschreibung:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Freq

**Syntax:** obj << Freq( state=0|1 )

**Beschreibung:** Shows or hides the Freq column. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### H Measure

**Syntax:** obj << H Measure( state=0|1 )

**Beschreibung:** Shows or hides the H Measure, which measures proportion improvement over baseline. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Hide All Models

**Syntax:** obj << Hide All Models

**Beschreibung:** Hides all models.

**JMP Version hinzugefügt:** 18

#### LogLoss

**Syntax:** obj << LogLoss( state=0|1 )

**Beschreibung:** Shows or hides the logarithm of the likelihood-based loss function. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### MAE

**Syntax:** obj << MAE( state=0|1 )

**Beschreibung:** Shows or hides the MAE, which is the mean absolute error. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### MCC

**Syntax:** obj << MCC( state=0|1 )

**Beschreibung:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Misclass

**Syntax:** obj << Misclass( state=0|1 )

**Beschreibung:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Precision Recall AUC

**Syntax:** obj << Precision Recall AUC( state=0|1 )

**Beschreibung:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Predictors

**Syntax:** obj << Predictors( state=0|1 )

**Beschreibung:** Shows or hides the Predictors column. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Profit

**Syntax:** obj << Profit( state=0|1 )

**Beschreibung:** Shows or hides the expected profit. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### RMSE

**Syntax:** obj << RMSE( state=0|1 )

**Beschreibung:** Shows or hides the RMSE, which is the root mean square error. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### RSquare

**Syntax:** obj << RSquare( state=0|1 )

**Beschreibung:** Shows or hides RSquare value, which is the proportion of variability explained. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Remove Hidden Models

**Syntax:** obj << Remove Hidden Models

**Beschreibung:** Removes all models for which the Show box is not checked.

**JMP Version hinzugefügt:** 18

#### Remove Shown Models

**Syntax:** obj << Remove Shown Models

**Beschreibung:** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP Version hinzugefügt:** 18

#### Response

**Syntax:** obj << Response( state=0|1 )

**Beschreibung:** Shows or hides the Response column. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Show All Models

**Syntax:** obj << Show All Models

**Beschreibung:** Shows all models.

**JMP Version hinzugefügt:** 18

#### Subject

**Syntax:** obj << Subject( state=0|1 )

**Beschreibung:** Shows or hides the Subject column Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Training Metrics

**Syntax:** obj << Training Metrics( state=0|1 )

**Beschreibung:** Shows or hides all training metrics. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Validation

**Syntax:** obj << Validation( state=0|1 )

**Beschreibung:** Shows or hides the Validation column. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Validation Metrics

**Syntax:** obj << Validation Metrics( state=0|1 )

**Beschreibung:** Shows or hides all validation metrics. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Weight

**Syntax:** obj << Weight( state=0|1 )

**Beschreibung:** Shows or hides the Weight column. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

### Zugehörige Konstruktoren

#### Torch Deep Learning Compare

**Syntax:** Torch Deep Learning Compare

## Torch Deep Learning Fit > Post

### Elementmeldungen

#### Actual by Predicted Plots

**Syntax:** obj << Actual by Predicted Plots( state=0|1 )

**Beschreibung:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Confusion Matrices

**Syntax:** obj << ( fit[number] << Confusion Matrices( state=0|1 ) )

**Beschreibung:** Shows or hides a crosstabulation matrix of actual and predicted levels. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**Syntax:** obj << Contour Profiler.

**Beschreibung:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Version hinzugefügt:** 18

#### Decision Thresholds

**Syntax:** obj << Decision Thresholds( state=0|1 )

**Beschreibung:** Shows or hides decision threshold graphs and tables. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Fit Details

**Syntax:** obj << Fit Details( state=0|1 )

**Beschreibung:** Shows or hides the statistics for the fitted model. Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Lift Curves

**Syntax:** obj << Lift Curves( state=0|1 )

**Beschreibung:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP Version hinzugefügt:** 18

#### Model Details

**Syntax:** obj << Model Details( state=0|1 )

**Beschreibung:** Shows or hides model details Standardmäßig ein.

**JMP Version hinzugefügt:** 18

#### Precision Recall Curves

**Syntax:** obj << Precision Recall Curves( state=0|1 )

**Beschreibung:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP Version hinzugefügt:** 18

#### Profiler

**Syntax:** obj << Profiler

**Beschreibung:** Shows or hides the Prediction Profiler.

**JMP Version hinzugefügt:** 18

#### ROC Curves

**Syntax:** obj << ROC Curves( state=0|1 )

**Beschreibung:** Plots the response-category sorting efficiency of the model predictions.

**JMP Version hinzugefügt:** 18

#### Surface Profiler

**Syntax:** obj << Surface Profiler

**Beschreibung:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Version hinzugefügt:** 18

## Torch Deep Learning Fit

### Elementmeldungen

#### Activation

**Syntax:** obj << Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**Beschreibung:** Specifies the activation function to use after each layer. Standardmäßig „ReLU“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**Syntax:** obj << Activations( text )

**Beschreibung:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**Syntax:** obj << Anchor Scale( number=16 )

**Beschreibung:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. Standardmäßig „16“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**Syntax:** obj << Aspect Sigma( number=0 )

**Beschreibung:** Standard deviation of Gaussian aspect ratio deformation Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**Syntax:** obj << Attention Heads( text=4 )

**Beschreibung:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. Standardmäßig „4“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**Syntax:** obj << Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**Beschreibung:** Specifies the base activation function for Kolmogorov Arnold B Splines. Standardmäßig „GELU“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**Syntax:** obj << Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**Beschreibung:** For Radial Basis Machine models, specify the basis function. Standardmäßig „Gaussian“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) )
);

```

#### Batch Size

**Syntax:** obj << Batch Size( number=128 )

**Beschreibung:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. Standardmäßig „128“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**Syntax:** obj << Binary Loss( "BCE"|"SM"="BCE" )

**Beschreibung:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). Standardmäßig „BCE“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**Syntax:** obj << Blur Max Sigma( number=0 )

**Beschreibung:** Maximum standard deviation of Gaussian blur Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**Syntax:** obj << Class Loss Weight( number=4.0 )

**Beschreibung:** Specifies the multiplier for class loss. Standardmäßig „4.0“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**Syntax:** obj << Confidence Threshold( number=0.05 )

**Beschreibung:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. Standardmäßig „0.05“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**Syntax:** obj << Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**Beschreibung:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). Standardmäßig „MSE“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**Syntax:** obj << Copy Parameters to Launch

**Beschreibung:** Copies the parameter values from this model to the model launch section.

**JMP Version hinzugefügt:** 18

#### Covariance Structure

**Syntax:** obj << Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**Beschreibung:** For mixed models, specify the covariance structure. Standardmäßig „DotProduct“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) )
);

```

#### Data Threads

**Syntax:** obj << Data Threads( number=4 )

**Beschreibung:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. Standardmäßig „4“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**Syntax:** obj << Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**Beschreibung:** Specifies the computational device that Torch uses. Standardmäßig „auto“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**Syntax:** obj << Dilations( text=1 )

**Beschreibung:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. Standardmäßig „1“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**Syntax:** obj << Dropout Probs( text=0.0 )

**Beschreibung:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**Syntax:** obj << Epochs( number=20 )

**Beschreibung:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. Standardmäßig „20“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**Syntax:** obj << Factorization Machine Layers( text=0 )

**Beschreibung:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Factorization Machine Layers( "1" ) )
);

```

#### Fit Ys Separately

**Syntax:** obj << Fit Ys Separately( state=0 )

**Beschreibung:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**Syntax:** obj << Fixed Effects( number=0 )

**Beschreibung:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**Syntax:** obj << Folder( text )

**Beschreibung:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**Syntax:** obj << Frozen Epochs( number=0 )

**Beschreibung:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**Syntax:** obj << Generate Python Code

**Beschreibung:** Creates Python code for model deployment.

**JMP Version hinzugefügt:** 18

#### Grid Size

**Syntax:** obj << Grid Size( number=5 )

**Beschreibung:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. Standardmäßig „5“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**Syntax:** obj << HFlip Prob( number=0 )

**Beschreibung:** Probability of horizontal flip Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**Syntax:** obj << Highway Layers( text=0 )

**Beschreibung:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. Standardmäßig „0“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**Syntax:** obj << Image Model( ="LeNet5" )

**Beschreibung:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. Standardmäßig „LeNet5“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**Syntax:** obj << Image Size( number=28 )

**Beschreibung:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. Standardmäßig „28“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**Syntax:** obj << Kernel Sizes( text=3 )

**Beschreibung:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. Standardmäßig „3“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**Syntax:** obj << L1 Penalty( number=0.0 )

**Beschreibung:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**Syntax:** obj << Layer Sizes( text=16 )

**Beschreibung:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. Standardmäßig „16“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**Syntax:** obj << Learning Rate( number=0.001 )

**Beschreibung:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. Standardmäßig „0.001“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**Syntax:** obj << Margin( number=1.0 )

**Beschreibung:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**Syntax:** obj << Max Boxes( number=5 )

**Beschreibung:** Specifies the maximum number of predicted boxes per image. Standardmäßig „5“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**Syntax:** obj << Max Seq Length( number=512 )

**Beschreibung:** For text models, specifies the maximum number of tokens to create for each text item. Standardmäßig „512“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Max Seq Length( 512 ) )
);

```

#### Mixup Portion

**Syntax:** obj << Mixup Portion( number=0.0 )

**Beschreibung:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**Syntax:** obj << NMS Threshold( number=0.5 )

**Beschreibung:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**Syntax:** obj << Noise Max Sigma( number=0 )

**Beschreibung:** Maximum standard deviation of additive Gaussian noise Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**Syntax:** obj << Nominal Image Threshold( number=10 )

**Beschreibung:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. Standardmäßig „10“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**Syntax:** obj << Nominal Loss( "NLL"="NLL" )

**Beschreibung:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). Standardmäßig „NLL“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**Syntax:** obj << Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**Beschreibung:** Specifies the type of normalization to apply to each MLP layer. Standardmäßig „Batch“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**Syntax:** obj << Norm First( "None"|"Batch"="Batch" )

**Beschreibung:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. Standardmäßig „Batch“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**Syntax:** obj << Num Linear( number=1 )

**Beschreibung:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. Standardmäßig „1“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**Syntax:** obj << Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**Beschreibung:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). Standardmäßig „AdamW“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**Syntax:** obj << Pitch Sigma( number=0 )

**Beschreibung:** Standard deviation of Gaussian pitch Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**Syntax:** obj << Pooling Layers( text=Max )

**Beschreibung:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. Standardmäßig „Max“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**Syntax:** obj << Pretrained Tabular( ="None" )

**Beschreibung:** Specify a pretrained tabular model that is prepended to the Tabular Model. Standardmäßig „None“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**Syntax:** obj << Quantiles( text=0.9 )

**Beschreibung:** Specify a space-delimited list of quantiles to use for Quantile loss. Standardmäßig „0.9“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**Syntax:** obj << RPN NMS Threshold( number=0.7 )

**Beschreibung:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. Standardmäßig „0.7“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**Syntax:** obj << ( fit[number] << Remove All But This Fit )

**Beschreibung:** Removes the reports and plots for all models except this one.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Syntax:** obj << ( fit[number] << Remove Fit )

**Beschreibung:** Removes the entire model report.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Restore From

**Syntax:** obj << Restore From( " "=" " )

**Beschreibung:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. Standardmäßig „ “.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**Syntax:** obj << Roll Sigma( number=0 )

**Beschreibung:** Standard deviation of Gaussian roll Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**Syntax:** obj << Save CAMs

**Beschreibung:** Save gradient-based class activation maps (CAMs) as a new column.

**JMP Version hinzugefügt:** 18

#### Save Embeddings

**Syntax:** obj << Save Embeddings

**Beschreibung:** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP Version hinzugefügt:** 18

#### Save Model

**Syntax:** obj << Save Model

**Beschreibung:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP Version hinzugefügt:** 18

#### Save Predicteds

**Syntax:** obj << Save Predicteds

**Beschreibung:** Saves the predicted values in a new column in the data table.

**JMP Version hinzugefügt:** 18

#### Screening Method

**Syntax:** obj << Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**Beschreibung:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. Standardmäßig „ResponseScreening“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Screening Method( "ResponseScreening" ) )
);

```

#### Screening Threshold

**Syntax:** obj << Screening Threshold( number=0 )

**Beschreibung:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**Syntax:** obj << Seed( number=0 )

**Beschreibung:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**Syntax:** obj << Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**Beschreibung:** Specifies the image segmentation model. Standardmäßig „UNet“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/segmentation.jmp" );
Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**Syntax:** obj << Spline Order( number=3 )

**Beschreibung:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. Standardmäßig „3“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**Syntax:** obj << Strides( text=1 )

**Beschreibung:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. Standardmäßig „1“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**Syntax:** obj << Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**Beschreibung:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options Standardmäßig „MultiLayerPerceptron“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Tabular Model( "MultiLayerPerceptron" ) )
);

```

#### Text Model

**Syntax:** obj << Text Model( ="BertTiny" )

**Beschreibung:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. Standardmäßig „BertTiny“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Text Model( "BERT" ) )
);

```

#### Triplet Loss Weight

**Syntax:** obj << Triplet Loss Weight( number=0.0 )

**Beschreibung:** Specifies the multiplier alpha to use in the following compound loss function: alpha * triplet_loss + (1 - alpha) * loss_function. Must be between 0 and 1. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**Syntax:** obj << Use Data As Knots( state=0 )

**Beschreibung:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex, :height ),
	X( :picture ),
	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) )
);

```

#### VFlip Prob

**Syntax:** obj << VFlip Prob( number=0 )

**Beschreibung:** Probability of vertical flip Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**Syntax:** obj << Weight Decay( number=0.0 )

**Beschreibung:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**Syntax:** obj << Worker Count( number=4 )

**Beschreibung:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. Standardmäßig „4“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**Syntax:** obj << X Slide Sigma( number=0 )

**Beschreibung:** Standard deviation of Gaussian random shift along the X axis Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**Syntax:** obj << Y Slide Sigma( number=0 )

**Beschreibung:** Standard deviation of Gaussian random shift along the Y axis Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**Syntax:** obj << Yaw Sigma( number=0 )

**Beschreibung:** Standard deviation of Gaussian yaw Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

### Zugehörige Konstruktoren

#### Post

**Syntax:** Post

#### Torch Deep Learning Fit

**Syntax:** Torch Deep Learning Fit

