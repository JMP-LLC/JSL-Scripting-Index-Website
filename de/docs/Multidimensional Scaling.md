# Multidimensional Scaling



### 3D Plot

**Syntax:** obj << "3D Plot"n( 1 )

**Beschreibung:** Zeigt ein 3D-Diagramm an oder blendet es aus, für das mindestens drei Dimensionen erforderlich sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	Set Dimensions( 3 )
);
obj << "3D Plot"n( 1 );

```

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
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);

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

### Columns

**Syntax:** obj << Columns( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Copy Script;

```

### Data Format

**Syntax:** Data Format( Distance Matrix | Attribute List )

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt das Format der Datentabelle an, bei dem es sich um eine Distanzmatrix oder eine Attributliste handeln kann.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	Data Format( "Distance Matrix" )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Data Table Window;

```

### Flip Horizontal

**Syntax:** obj << Flip Horizontal

**Beschreibung:** Stellt das multidimensionale Skalierungsdiagramm auf der horizontalen Achse dar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Flip Horizontal( 1 );

```

### Flip Vertical

**Syntax:** obj << Flip Vertical

**Beschreibung:** Stellt das multidimensionale Skalierungsdiagramm auf der vertikalen Achse dar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Flip Vertical( 1 );

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

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
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
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
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

### MDS Plot

**Syntax:** obj << MDS Plot( state=0|1 )

**Beschreibung:** Zeigt das multidimensionale Skalierungsdiagramm an oder blendet es aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << MDS Plot( 1 );

```

### Multidimensional Scaling

**Syntax:** Multidimensional Scaling( Y( columns ) )

**Beschreibung:** Erstellt eine visuelle Darstellung des Musters der Nähe innerhalb einer Gruppe von Objekten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

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
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
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
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Coordinates

**Syntax:** obj << Save Coordinates

**Beschreibung:** Speichert die Dimensionskoordinaten für die Zielgrößenvariablen in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Save Coordinates;

```

### Save Proximity

**Syntax:** obj << Save Proximity

**Beschreibung:** Speichert die Nähematrix in der Datentabelle. Nur verfügbar beim Datenformat Attributliste.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Teeth.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Top incisors, :Bottom incisors, :Top canines, :Bottom canines, :Top premolars,
		:Bottom premolars, :Top molars, :Bottom molars
	),
	Data Format( "Attribute List" )
);
obj << Save Proximity;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Save Script to Script Window;

```

### Select dimension

**Syntax:** obj << Select dimension( <specify dimension to plot> )

**Beschreibung:** Wählt die Dimensionen aus, die als Achsen im Korrespondenzdiagramm verwendet werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	Set Dimensions( 3 )
);
obj << Select Dimension( 1, 3 );

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

### Set Dimensions

**Syntax:** obj = Multidimensional Scaling(...Set Dimensions( number=2 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Dimensionen für MDS an. Standardmäßig „2“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	Set Dimensions( 3 )
);

```

### Shepard Diagram

**Syntax:** obj << Shepard Diagram( state=0|1 )

**Beschreibung:** Zeigt das Shepard-Diagramm an oder blendet es aus, das tatsächliche Nähe im Vergleich zu vorhergesagter Nähe darstellt. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Shepard Diagram( 1 );

```

### Show Coordinates

**Syntax:** obj << Show Coordinates( state=0|1 )

**Beschreibung:** Zeigt Dimensionskoordinaten für die Zielgrößenvariablen an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Show Coordinates( 1 );

```

### Show Proximity

**Syntax:** obj << Show Proximity( state=0|1 )

**Beschreibung:** Zeigt eine Tabelle mit tatsächlichen und vorhergesagten Nähewerten zwischen Zielgrößenvariablen an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Show Proximity( 1 );

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
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Transformation

**Syntax:** Transformation( None | Ratio | Interval | Ordinal )

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die gewählte Transformation für die multidimensionale Skalierungsanalyse an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	Transformation( "Ratio" )
);

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

### Waern Links

**Syntax:** obj << Waern Links( Smallest Portion | Largest Portion, portion, visible )

**Beschreibung:** Gibt Waern-Links für das MDS-Diagramm an. Das erste Argument gibt an, ob für den kleinsten oder größten Anteil Links gezeichnet werden sollen. Das zweite Argument gibt den Anteilswert an. Das dritte Argument ist ein Boolescher Wert, der angibt, ob die Bedienelemente für den Waern-Link sichtbar sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
obj << Waern links( "Smallest Portion", 0.33, 1 );

```

### Window View

**Syntax:** obj = Multidimensional Scaling(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Y

**Syntax:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

```

