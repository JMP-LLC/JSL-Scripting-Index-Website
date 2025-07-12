# Marker Admixture



## Elementmeldungen

### Compare

**Syntax:** obj << Compare

**Beschreibung:** Aktualisiert die Metriken für den Vergleich der Marker genetischer Vermischung.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit,
	Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),
	Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) )
);
obj << Compare( LogLikehood( 0 ) );

```

### Fit

**Syntax:** obj << Fit

**Beschreibung:** Passt ein Modell für die Marker von genetischer Vermischung an. In diesem Befehl können Sie Parameter und Anpassungsspezifikationen angeben.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 1 )
	)
);

```

### Get Measures

**Syntax:** obj << Get Measures

**JMP Version hinzugefügt:** 19

### Set

**Syntax:** obj << Set

**Beschreibung:** Gibt Parameter für ein Modell für die Marker genetischer Vermischung an.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 1 )
	)
);

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

**Syntax:** obj = Marker Admixture(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Beschreibung:** Für jede Stufe der angegebenen Spalte werden die Ergebnisse in separaten Tabellen und Berichten analysiert und dargestellt.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

	//Run platform
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), By( :Sex ), Fit );

```

### Label

**Syntax:** obj << Label( column )

**Beschreibung:** Gibt eine Spalte an, die eine Beschriftung für jede Stichprobe enthält.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Label( :Sex ), Fit );

```

### Marker

**Syntax:** obj << Marker( column(s) )

**Beschreibung:** Gibt Spalten an, die genetische Marker enthalten.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Sample ID( :SampleID ),
	Label( :Sex ),
	Fit
);

```

### Sample ID

**Syntax:** obj << Sample ID( column )

**Beschreibung:** Gibt eine Spalte an, die einen eindeutigen Identifikator für jede Stichprobe enthält.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set up ID Column
dt << New Column( "SampleID",
	Character,
	"Nominal",
	Formula( Char( :Pedigree ) || Char( :Sample ) )
);

//Run platform
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Sample ID( :SampleID ),
	Label( :Sex ),
	Fit
);

```

## Zugehörige Konstruktoren

### Marker Admixture

**Syntax:** Marker Admixture( Marker( columns ) )

**Beschreibung:** Schätzt die Populationsvermischung für Individuen basierend auf Markergenotypen.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
);

```

## Marker Admixture Compare

### Elementmeldungen

#### Hide All Models

**Syntax:** obj << Hide All Models

**Beschreibung:** Alle Modelle ausblenden.

**JMP Version hinzugefügt:** 19

#### Iterations

**Syntax:** obj << Iterations( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die Anzahl der Iterationen, bei denen der Faktorisierungsalgorithmus angehalten wurde. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Log Likelihood

**Syntax:** obj << Log Likelihood( state=0|1 )

**Beschreibung:** Blendet den negativen Logarithmus der Likelihood-basierten Funktion ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Number of Ancestral Populations

**Syntax:** obj << Number of Ancestral Populations( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die Anzahl von Vorfahrenpopulationen. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Predictors

**Syntax:** obj << Predictors( state=0|1 )

**Beschreibung:** Blendet die Prädiktorenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

#### Remove Hidden Models

**Syntax:** obj << Remove Hidden Models

**Beschreibung:** Entfernt alle Modelle, für die das Kontrollkästchen „Anzeigen“ nicht aktiviert ist.

**JMP Version hinzugefügt:** 19

#### Remove Shown Models

**Syntax:** obj << Remove Shown Models

**Beschreibung:** Entfernt alle Modelle, für die das Kontrollkästchen „Anzeigen“ aktiviert ist, und zeigt die übrigen Modelle an.

**JMP Version hinzugefügt:** 19

#### Show All Models

**Syntax:** obj << Show All Models

**Beschreibung:** Alle Modelle anzeigen.

**JMP Version hinzugefügt:** 19

#### Tolerance

**Syntax:** obj << Tolerance( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt den Toleranzwert (RMSE der geschätzten Vermischung von Individuen), wenn der Faktorisierungsalgorithmus stoppt. Standardmäßig ein.

**JMP Version hinzugefügt:** 19

### Zugehörige Konstruktoren

#### Marker Admixture Compare

**Syntax:** Marker Admixture Compare

## Marker Admixture Fit

### Elementmeldungen

#### Cluster Individuals

**Syntax:** obj << Cluster Individuals( state=0|1 )

**Beschreibung:** Clustert Individuen basierend auf den geschätzten Wahrscheinlichkeiten der genetischen Vermischung  der Vorfahrenpopulation.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Cluster Individuals( 1 ));

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit( Cluster Individuals( 1 ) )
);

```

#### Cluster Markers

**Syntax:** obj << Cluster Markers( state=0|1 )

**Beschreibung:** Clustert Marker basierend auf den für jede Vorfahrenpopulation geschätzten Häufigkeiten des Referenzallels.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Cluster Markers( 1 ));

```

#### Copy Parameters to Launch

**Syntax:** obj << Copy Parameters to Launch

**Beschreibung:** Kopiert die Parameter von diesem Modell in den Bereich „Modell starten“.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Copy Parameters to Launch());

```

#### Estimation Method

**Syntax:** obj = Marker Admixture Fit(...Estimation Method( "Stabilitätspunkt"|"Fixierter Parameter"="Stabilitätspunkt" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Methode zur Schätzung der Anzahl der Vorfahrenpopulationen an. Standardmäßig „Stabilitätspunkt“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 1 )
	)
);

```

#### Imputation Value

**Syntax:** obj = Marker Admixture Fit(...Imputation Value( number=0 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine ganze Zahl von 0 bis zur Ploidie für das Ersetzen fehlender Marker-Scores an. Standardmäßig „0“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);

```

#### Missing Marker Imputation Method

**Syntax:** obj = Marker Admixture Fit(...Missing Marker Imputation Method( "HWE aus"|"HWE ein"|"Zufällig"|"Angegeben"="HWE aus" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine von vier Arten von Imputationsmethoden für fehlende Marker an. Standardmäßig „HWE aus“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);

```

#### Number of Ancestral Populations

**Syntax:** obj = Marker Admixture Fit(...Number of Ancestral Populations( number=2 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Anzahl von Vorfahrenpopulationen an. Standardmäßig „2“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 )
	)
);

```

#### Order Populations Method

**Syntax:** obj = Marker Admixture Fit(...Order Populations Method( "Durchschnittliche genetische Vermischung"|"Erklärte Varianz"="Durchschnittliche genetische Vermischung" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Methode für die Sortierung der Spalten der P-Matrix (m x d, wobei m = Anzahl der genetischen Marker und d = Anzahl der Vorfahrenpopulationen) und der Zeilen der Q-Matrix (d x n, wobei n = Anzahl der Stichproben) an. Standardmäßig „Durchschnittliche genetische Vermischung“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Order Populations Method( "Variance Explained" ),
		Number of Ancestral Populations( 3 )
	),
	Set(
		Estimation Method( "Fixed Parameter" ),
		Order Populations Method( "Variance Explained" ),
		Number of Ancestral Populations( 3 )
	)
);

```

#### Parallel Plot for Individuals

**Syntax:** obj << Parallel Plot for Individuals( state=0|1 )

**Beschreibung:** Erstellt ein Überlagerungsdiagramm aller Individuen basierend auf den Wahrscheinlichkeiten der genetischen Vermischung der Vorfahrenpopulation.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Parallel Plot for Individuals( 1 ));

```

#### Parallel Plot for Markers

**Syntax:** obj << Parallel Plot for Markers( state=0|1 )

**Beschreibung:** Erstellt ein Überlagerungsdiagramm aller Marker basierend auf den für jede Vorfahrenpopulation geschätzten Häufigkeiten des Referenzallels.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Parallel Plot for Markers( 1 ));

```

#### Remove All But This Fit

**Syntax:** obj << ( Fit[number] << Remove All But This Fit( state=0|1 ) )

**Beschreibung:** Entfernt die Berichte und Diagramme für alle Modelle bis auf dieses.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit,
	Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),
	Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) )
);
Wait( 2 );
obj << (Fit[2] << Remove All But This Fit( 1 ));

```

#### Remove Fit

**Syntax:** obj << ( Fit[number] << Remove Fit( state=0|1 ) )

**Beschreibung:** Entfernt den gesamten Modellbericht.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);
Wait( 2 );
obj << (Fit[1] << Remove Fit( 1 ));

```

#### Save F Table

**Syntax:** obj << Save F Table

**Beschreibung:** Speichert das Produkt der Matrizen P mal Q in einer Tabelle.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Save F Table());

```

#### Save P Table

**Syntax:** obj << Save P Table

**Beschreibung:** Speichert die geschätzte Häufigkeit des Referenzallels (P) für jeden genetischen Marker in einer Tabelle.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Save P Table());

```

#### Save Q Table

**Syntax:** obj << Save Q Table

**Beschreibung:** Speichert die geschätzten Wahrscheinlichkeiten (Q) für genetische Vermischung von Vorfahrenpopulationen für jede Stichprobe in einer Tabelle.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Save Q Table());

```

#### Set Random Seed

**Syntax:** obj = Marker Admixture Fit(...Set Random Seed( number=0 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Legt für den zufälligen Startwert einen spezifischen Wert fest, um sicherzustellen, dass alle nachfolgenden Berechnungen den gleichen Startwert verwenden und reproduzierbar sind. Standardmäßig „0“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);

```

#### Unthreaded

**Syntax:** obj = Marker Admixture Fit(...Unthreaded( state=0 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Verwenden Sie nur den Haupt-Thread für Berechnungen. Standardmäßig „0“.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 )
	)
);

```

### Zugehörige Konstruktoren

#### Marker Admixture Fit

**Syntax:** Marker Admixture Fit

