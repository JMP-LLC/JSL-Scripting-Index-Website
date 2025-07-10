# Cumulative Damage



### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Copy Script;

```

### Cumulative Damage

**Syntax:** Cumulative Damage

**Beschreibung:** Analysiert variierende und schrittweise Belastungsmodelle.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Data Table Window;

```

### Fit All

**Syntax:** obj << Fit All

**Beschreibung:** Passt alle verfügbaren Verteilungen an.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" ),
	Fit All
);

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Results

**Syntax:** obj << Get Results

**Beschreibung:** Ruft die verfügbaren Ergebnisse als JSL-Objekte ab.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" ), 

);
obj << Get Results;

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```js

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

```js

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

### Model Type

**Syntax:** obj << Model Type( Step Stress | Ramp Stress | Sinusoid Stress | Piecewise Ramp Stress )

**Beschreibung:** Gibt die Art des Belastungsmusters für das Modell der kumulierten Schäden an. Diese Option muss im Startskript angegeben werden.

```js

Names Default To Here( 1 );
/*See sample scripts in the following data tables.*/
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Ramp Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Sinusoid Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Piecewise Ramp Stress.jmp" );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Simulate

**Syntax:** obj << Simulate

**Beschreibung:** Zeigt den Bereich für die Simulationskonfiguration an oder blendet ihn aus.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" ),
	Simulate
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

