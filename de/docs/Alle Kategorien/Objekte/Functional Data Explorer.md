# Functional Data Explorer



## Elementmeldungen

### B Splines

**Syntax:** obj << B Splines

**Beschreibung:** Passt ein B-Spline-Modell an die Daten an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines
);

```

### B Splines Model Controls

**Syntax:** obj << B Splines Model Controls

**Beschreibung:** Öffnet den Bereich mit den Bedienelementen für das Modell vor der Anpassung eines B-Spline-Modells. Sie können die Anzahl der Knoten und den Spline-Grad angeben.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines Model Controls
);

```

### Baseline Correction

**Syntax:** obj << Baseline Correction

**Beschreibung:** Subtracts a baseline function from each individual function. You can perform automated baseline correction using either the statistics-sensitive nonlinear iterative peak-clipping (SNIP) or the alternating reweighted least squares solution technique. There is also an option to load a known baseline function from a data table.

**JMP Version hinzugefügt:** 19

### Data Processing

**Syntax:** obj << Data Processing( <options> )

**Beschreibung:** Gibt Datenverarbeitungsoptionen an, mit denen Sie Vorverarbeitungsschritte an den Daten durchführen können. Die Optionen umfassen Bereinigungs-, Transformations-, Ausrichtungs-, Spektral- und Zielfunktionsoperationen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

### Direct Functional PCA

**Syntax:** obj << Direct Functional PCA

**Beschreibung:** Führt funktionale PCA direkt durch, ohne ein Basisfunktionsmodell anzupassen. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Fourier Basis

**Syntax:** obj << Fourier Basis

**Beschreibung:** Passt ein B-Spline-Modell mit Bestrafung an die Daten an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis
);

```

### Fourier Basis Model Controls

**Syntax:** obj << Fourier Basis Model Controls

**Beschreibung:** Öffnet den Bereich mit den Bedienelementen für das Modell vor der Anpassung eines Fourier-Basismodells. Sie können die Anzahl von Fourier-Paaren und die Periode angeben.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis Model Controls
);

```

### Multivariate Curve Resolution

**Syntax:** obj << Multivariate Curve Resolution

**Beschreibung:** Führt multivariate Kurvenauflösung (MCR) durch. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Nonnegative SVD

**Syntax:** obj << Nonnegative SVD

**Beschreibung:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

**JMP Version hinzugefügt:** 18

### P Splines

**Syntax:** obj << P Splines

**Beschreibung:** Passt ein B-Spline-Modell mit Bestrafung an die Daten an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines
);

```

### P Splines Model Controls

**Syntax:** obj << P Splines Model Controls

**Beschreibung:** Öffnet den Bereich mit den Bedienelementen für das Modell vor der Anpassung eines P-Spline-Modells. Sie können die Anzahl der Knoten und den Spline-Grad angeben.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines Model Controls
);

```

### Peak Finding

**Syntax:** obj << Peak Finding

**Beschreibung:** Findet und fasst Peaks entweder direkt oder mit einem angegebenen parametrischen Modell zusammen.

**JMP Version hinzugefügt:** 17

### Penalized Nonnegative SVD

**Syntax:** obj << Penalized Nonnegative SVD

**Beschreibung:** Führt nicht-negative SWZ mit Bestrafung durch, um funktionale PCA zu konstruieren. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Penalized SVD

**Syntax:** obj << Penalized SVD

**Beschreibung:** Führt SWZ mit Bestrafung durch, um funktionale PCA zu konstruieren. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Plot Mean Function

**Syntax:** obj << Plot Mean Function( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der Mittelwertfunktion im Zusammenfassungsbericht an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Syntax:** obj << Plot Median Function( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der Medianfunktion im Zusammenfassungsbericht an oder blendet es aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Temperature ),
	X( :Month ),
	ID( :Year ),
	Plot Median Function( 1 )
);

```

### Plot Standard Deviation Function

**Syntax:** obj << Plot Standard Deviation Function( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der Standardabweichungsfunktion im Zusammenfassungsbericht an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Save Data

**Syntax:** obj << Save Data

**Beschreibung:** Speichert die verarbeiteten Daten in einer separaten Datentabelle im gestapelten Format.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) )
);
obj << Save Data;

```

### Unconstrained MCR

**Syntax:** obj << Unconstrained MCR

**Beschreibung:** Führt unbeschränkte multivariate Kurvenauflösung (MCR) durch. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Wavelets

**Syntax:** obj << Wavelets

**Beschreibung:** Passt mehrere Wavelets-Modelle an die Daten an. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichmäßigen Abständen haben. Wenn die Daten nicht gleiche Abstände haben, wird vor Beginn der Wavelet-Routine automatisch ein Raster erstellt.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

**Syntax:** obj = Functional Data Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntax:** obj = Functional Data Explorer(...<By( column(s) )>...)

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);

```

### Freq

**Syntax:** obj = Functional Data Explorer(...<Freq( column )>...)

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Freq( _freqcol )
);

```

### Function

**Syntax:** obj = Functional Data Explorer(...<Function( column )>...)

**Beschreibung:** Gibt die ID-Variable an, die jede einzelne Funktion identifiziert.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### ID

**Syntax:** obj = Functional Data Explorer(...<ID( column )>...)

**Beschreibung:** Gibt die ID-Variable an, die jede einzelne Funktion identifiziert.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Input

**Syntax:** obj = Functional Data Explorer(...<Input( column )>...)

**Beschreibung:** Gibt die Eingabevariable an.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Output

**Syntax:** obj = Functional Data Explorer(...Output( column(s) )...)

**Beschreibung:** Gibt die funktionale Prozessvariable an. Für jede Stufe der ID-Variable müssen mindestens zwei beobachtete Ausgabewerte vorhanden sein.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Supplementary

**Syntax:** obj = Functional Data Explorer(...<Supplementary( column(s) )>...)

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Validation

**Syntax:** obj = Functional Data Explorer(...<Validation( column )>...)

**Beschreibung:** Gibt eine numerische Spalte an, die die Validierungssätze definiert. Diese Spalte darf höchstens drei verschiedene Werte enthalten.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	B Splines
);

```

### X

**Syntax:** obj = Functional Data Explorer(...<X( column )>...)

**Beschreibung:** Gibt die Eingabevariable an.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Y

**Syntax:** obj = Functional Data Explorer(...Y( column(s) )...)

**Beschreibung:** Gibt die funktionale Prozessvariable an. Für jede Stufe der ID-Variable müssen mindestens zwei beobachtete Ausgabewerte vorhanden sein.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Z

**Syntax:** obj = Functional Data Explorer(...<Z( column(s) )>...)

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

## Zugehörige Konstruktoren

### Functional Data Explorer

**Syntax:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Beschreibung:** Passt funktionale Modelle mithilfe eines B-Spline, P-Spline, Fourier oder Wavelets-Basismodells an. Mit dem funktionalen Modell kann eine funktionale Hauptkomponentenanalyse durchgeführt werden, um wichtige Merkmale aus den Daten zu extrahieren. Es gibt auch die Option, eine funktionale Hauptkomponentenanalyse direkt auf den Daten durchzuführen, ohne zunächst ein Basisfunktionsmodell anzupassen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

## Functional Data Explorer Data Processing

### Elementmeldungen

#### Align 0 to 1

**Syntax:** obj << Data Processing( Align 0 to 1 )

**Beschreibung:** Richtet die Ausgabefunktionen (Y) über den Bereich des Eingangs (X) so aus, der sie zwischen 0 und 1 liegen.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align 0 to 1 )
);

```

#### Align Maximum

**Syntax:** obj << Data Processing( Align Maximum )

**Beschreibung:** Richtet die Outputfunktionen (Y) mithilfe des beobachteten maximalen Inputwerts (X) aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Maximum )
);

```

#### Align Minimum

**Syntax:** obj << Data Processing( Align Minimum )

**Beschreibung:** Richtet die Outputfunktionen (Y) mithilfe des beobachteten minimalen Inputwerts (X) aus.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Minimum )
);

```

#### Align by Function

**Syntax:** obj << Data Processing( Align by Function )

**Beschreibung:** Richtet die Ausgabefunktionen (Y) so aus, dass der Bereich jeder Funktion über dem Bereich des Input (X) liegt.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align by Function )
);

```

#### Baseline Correction

**Syntax:** obj << Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

**Beschreibung:** Passt ein Baseline-Modell an und entfernt es aus jeder Funktion. Sie können das Baseline-Modell, die Korrekturregion, Baseline-Regionen und die Ankerpunkte angeben.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction( Model( Quadratic ) ) )
);

```

#### Center

**Syntax:** obj << Data Processing( Center )

**Beschreibung:** Zentriert den Output

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center )
);

```

#### Dynamic Time Warping

**Syntax:** obj << Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Beschreibung:** Richtet die Ausgabefunktionen mittels dynamischer Zeitnormierung (DTW) aus. DTW ist eine Technik zum Ausrichten von Funktionen, die eine optimale Normierung findet, um zwei oder mehr Funktionen aneinander auszurichten.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);

```

#### Exp

**Syntax:** obj << Data Processing( Exp )

**Beschreibung:** Transformiert die Daten durch Berechnen der Exponentialfunktion des Outputs.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Exp )
);

```

#### Filter X

**Syntax:** obj << Data Processing( Filter X( [lower, upper] ) )

**Beschreibung:** Entfernt Eingabewerte (X), die außerhalb des angegebenen Intervalls liegen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

#### Filter Y

**Syntax:** obj << Data Processing( Filter Y( [lower, upper] ) )

**Beschreibung:** Entfernt Ausgabewerte (Y) außerhalb des angegebenen Intervalls.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

#### Load Targets

**Syntax:** obj << Data Processing( Load Targets( "level" ) )

**Beschreibung:** Gibt eine Zielfunktion an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :ID ),
	Data Processing( Load Targets( "Bristol, TN" ) )
);

```

#### Log

**Syntax:** obj << Data Processing( Log )

**Beschreibung:** Transformiert die Daten durch Berechnen des natürlichen Logarithmus des Outputs.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log )
);

```

#### Log X

**Syntax:** obj << Data Processing( Log X )

**Beschreibung:** Transformiert die Daten durch Berechnen des natürlichen Logarithmus des Input.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log X )
);

```

#### Logit

**Syntax:** obj << Data Processing( Logit )

**Beschreibung:** Transformiert die Daten durch Berechnen der Logit-Funktion des Outputs. Die Output-Werte müssen zwischen 0 und 1 liegen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 ),
	Data Processing( Logit )
);

```

#### MSC

**Syntax:** obj << Data Processing( MSC )

**Beschreibung:** Wendet die Methode der multiplikativen Streuungskorrektur auf die Daten an. Diese Methode passt eine einfache lineare Regression für jede einzelne Funktion (Niveau der ID-Variablen) an, wobei die Zielgröße die Outputwerte der Funktion und der Regressor die Outputwerte für die Mittelwertfunktion sind.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( MSC )
);

```

#### Negation

**Syntax:** obj << Data Processing( Negation )

**Beschreibung:** Transformiert die Daten durch Multiplizieren des Outputs mit -1.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Negation )
);

```

#### Range 0 to 1

**Syntax:** obj << Data Processing( Range 0 to 1 )

**Beschreibung:** Skaliert den Output auf den Bereich von 0 bis 1.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 )
);

```

#### Reduce

**Syntax:** obj << Data Processing( Reduce( Grid( number ) ) ); 

obj << Data Processing( Reduce( Bin( number ) ) ); 

obj << Data Processing( Reduce( Thin( number ) ) )

**Beschreibung:** Reduziert die Daten über den Input (X) mit einer aus einer Auswahl von Techniken.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

#### Remove Selected

**Syntax:** obj << Data Processing( Remove Selected )

**Beschreibung:** Entfernt die ausgewählten Werte.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

#### Remove Unselected

**Syntax:** obj << Data Processing( Remove Unselected )

**Beschreibung:** Entfernt die nicht ausgewählten Werte.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

#### Remove Value

**Syntax:** obj << Data Processing( Remove Value( number ) )

**Beschreibung:** Entfernt Beobachtungen mit dem angegebenen Zielgrößenwert.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

#### Remove Zeros

**Syntax:** obj << Data Processing( Remove Zeros )

**Beschreibung:** Entfernt Beobachtungen mit einem Zielgrößenwert von 0.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Remove Zeros )
);

```

#### Row Alignment

**Syntax:** obj << Data Processing( Row Alignment )

**Beschreibung:** Ersetzt die Inputwerte mit der Zeilennummer.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Row Alignment )
);

```

#### SNV

**Syntax:** obj << Data Processing( SNV )

**Beschreibung:** Wendet die Methode „Standard-Normalfunktion“ auf die Daten an. Diese Methode standardisiert den Output durch Zentrieren und Skalieren jeder einzelnen Funktion (Niveau der ID-Variablen), so dass sie einen Mittelwert von 0 und eine Standardabweichung von 1 hat.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( SNV )
);

```

#### Savitzky-Golay Filter

**Syntax:** obj << Data Processing( "Savitzky-Golay Filter"n )

**Beschreibung:** Wendet den Savitzky-Golay-Filter auf jede Funktion an. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Filter"n )
);

```

#### Savitzky-Golay First Derivative

**Syntax:** obj << Data Processing( "Savitzky-Golay First Derivative"n )

**Beschreibung:** Gibt die erste Ableitung vom Savitzky-Golay-Filter zurück. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay First Derivative"n )
);

```

#### Savitzky-Golay Second Derivative

**Syntax:** obj << Data Processing( "Savitzky-Golay Second Derivative"n )

**Beschreibung:** Gibt die zweite Ableitung vom Savitzky-Golay-Filter zurück. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Second Derivative"n )
);

```

#### Square

**Syntax:** obj << Data Processing( Square )

**Beschreibung:** Transformiert die Daten durch Berechnen des Quadrats des Outputs.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square )
);

```

#### Square Root

**Syntax:** obj << Data Processing( Square Root )

**Beschreibung:** Transformiert die Daten durch Berechnen der Quadratwurzel des Outputs. Die Output-Werte dürfen nicht-negativ sein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

#### Standardize

**Syntax:** obj << Data Processing( Standardize )

**Beschreibung:** Standardisiert den Output durch Zentrieren und Skalieren.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Standardize )
);

```

## Functional Data Explorer FDOE

### Elementmeldungen

#### Diagnostic Plots

**Syntax:** obj<< Model Name( Functional DOE Analysis( Diagnostic Plots( state=0|1 ) ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Beschreibung:** Zeigt Diagramme „Beobachtete Werte über Vorhersage“ und Residuen im Bericht der funktionalen DOE-Analyse an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis, Diagnostic Plots( 0 ) )
);
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**Syntax:** obj << Model Name( Functional DOE Analysis( FDOE Profiler( state=0|1 ) ) ); 

scrobj << FDOE Profiler( state=0|1 )

**Beschreibung:** Blendet das FDOE-Analysediagramm ein oder aus, in dem Sie untersuchen können, wie sich die Zielgröße basierend auf den Werten der zusätzlichen Variablen ändert. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( FDOE Profiler( 0 ) ) )
);
Report( obj )["Functional PCA"] << Close( 1 );
Report( obj )["Model Selection"] << Close( 1 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression FPC Model

**Syntax:** obj << Model Name( Functional DOE Analysis( Generalized Regression FPC Model( FPC Number( number ), commands )))

**Beschreibung:** Gibt die Einstellungen für das verallgemeinerte Regressionsmodell an, das mit der Option „Functional DOE Analysis“ erstellt wird. Mit diesem Befehl können Sie Einstellungen angeben, die von den Standardeinstellungen abweichen.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines(
		Functional DOE Analysis(
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( "Best Subset" ),
				Validation Method( "BIC" )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( "Elastic Net" ),
				Validation Method( "AICc" )
			)
		),
		Customize Function Summaries( Number of FPCs( 2 ) )
	)
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );

```

#### Generalized Regression for FPC Scores

**Syntax:** obj << Model Name( Functional DOE Analysis( Generalized Regression for FPC Scores( state=0|1 ) ) ); 

scrobj << Generalized Regression for FPC Scores( state=0|1 )

**Beschreibung:** Zeigt die Berichte der verallgemeinerten Regression für jeden FPC-Score an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Generalized Regression for FPC Scores( 0 );

```

#### Save Prediction Formula

**Syntax:** obj << Model Name( Functional DOE Analysis( Save Prediction Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); 

scrobj << Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der aktuellen Datentabelle. Wenn das ursprüngliche Datenformat „Zeilen als Funktionen“ oder „Spalten als Funktionen“ ist, erstellt diese Option eine neue Datentabelle, die die ursprünglichen Daten im gestapelten Format und eine Spalte für die Vorhersageformel enthält.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**Syntax:** obj << Model Name( Functional DOE Analysis( Save Residual Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); 

scrobj << Save Residual Formula

**Beschreibung:** Speichert die Residuenformel in einer neuen Spalte in der aktuellen Datentabelle. Wenn das ursprüngliche Datenformat „Zeilen als Funktionen“ oder „Spalten als Funktionen“ ist, erstellt diese Option eine neue Datentabelle, die die ursprünglichen Daten im gestapelten Format und eine Spalte für die Residuenformel enthält.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

## Functional Data Explorer FPCA

### Elementmeldungen

#### Customize Number of FPCs

**Syntax:** obj << Model Name( Functional PCA( 1, Customize Number of FPCs( number ) ) ); 

scrobj << Customize Number of FPCs( number )

**Beschreibung:** Gibt die Anzahl von FPC-Scores an, die in der funktionalen PCA angezeigt werden sollen. Durch Angabe der Anzahl von FPC-Scores wird auch der Bericht der Funktionszusammenfassungen aktualisiert.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Customize Number of FPCs( 3 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Customize Number of FPCs( 2 );

```

#### Diagnostic Plots

**Syntax:** obj << Model Name( Functional PCA( 1, Diagnostic Plots( state=0|1 ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Beschreibung:** Zeigt die FPCA-Diagnosediagramme im Bericht der funktionalen PCA an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Diagnostic Plots( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FPCA Diagnostic Plots"] << Close( 0 );

```

#### FPC Profiler

**Syntax:** obj << Model Name( Functional PCA( 1, FPC Profiler( state=0|1 ) ) ); 

scrobj << FPC Profiler( state=0|1 )

**Beschreibung:** Zeigt ein Analysediagramm der FPC-Scores an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, FPC Profiler( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << FPC Profiler( 1 );

```

#### Score Plot

**Syntax:** obj << Model Name( Functional PCA( 1, Score Plot( state=0|1 ) ) ); 

scrobj << Score Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der FPC-Scores an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Score Plot( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Score Plot( 1 );

```

## Functional Data Explorer Model

### Elementmeldungen

#### AICc

**Syntax:** obj << Model Name( AICc ); 

scrobj << AICc

**Beschreibung:** Gibt den AICc als Modellauswahlkriterium für B-Spline-, P-Spline- und Fourier-Basismodelle an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( AICc )
);

```

#### BIC

**Syntax:** obj << Model Name( BIC ); 

scrobj << BIC

**Beschreibung:** Gibt den BIC als Modellauswahlkriterium für B-Spline-, P-Spline- und Fourier-Basismodelle an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines( BIC )
);

```

#### Basis Function Coefficients

**Syntax:** obj << Model Name( Basis Function Coefficients( state=0|1 ) ); 

scrobj << Basis Function Coefficients( state=0|1 )

**Beschreibung:** Zeigt den Bericht über Basisfunktionskoeffizienten für die entsprechende Modellanpassung an oder blendet ihn aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Basis Function Coefficients( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Basis Function Coefficients( 1 );
Report( obj )["Basis Function Coefficients"] << Close( 0 );

```

#### Diagnostic Plots

**Syntax:** obj << Model Name( Diagnostic Plots( state=0|1 ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Diagnosediagramme an oder blendet ihn aus. Diese Option ist bei Wavelets oder Modellen vom Typ „Richtungsfunktionale PCA“ nicht verfügbar. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	B Splines( Diagnostic Plots( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["B-Spline on Initial data"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["B-Spline Diagnostic Plots"] << Close( 0 );

```

#### Function Summaries

**Syntax:** obj << Model Name( Function Summaries( state=0|1 ) ); 

scrobj << Function Summaries( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Funktionszusammenfassungen an oder blendet ihn aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Function Summaries( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Function Summaries( 1 );
Report( obj )["Function Summaries"] << Close( 0 );

```

#### Functional DOE Analysis

**Syntax:** obj << Model Name( Functional DOE Analysis( ... ) ); 

scrobj << Functional DOE Analysis( ... )

**Beschreibung:** Startet einen Bericht zur verallgemeinerten Regression in der FDE-Plattform. Ein verallgemeinertes Regressionsmodell wird an jede der FPC-Score-Funktionen angepasst, wobei die zusätzlichen Variablen als Modelleffekte verwendet werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines( Functional DOE Analysis )
);

```

#### Functional PCA

**Syntax:** obj << Model Name( Functional PCA( state= 0|1 ) ); 

scrobj << Functional PCA( state=0|1 )

**Beschreibung:** Zeigt den Bericht der funktionalen PCA an oder blendet ihn aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Fourier Basis( Functional PCA( 0 ) );
obj << Send to Report(
	Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
		{Close( 1 )}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Functional PCA( 1 );

```

#### GCV

**Syntax:** obj << Model Name( GCV ); 

scrobj << GCV

**Beschreibung:** Gibt die verallgemeinerte Kreuzvalidierung (GCV) als Modellauswahlkriterium für B-Spline-, P-Spline- und Fourier-Basismodelle an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( GCV )
);

```

#### Plot Basis

**Syntax:** obj << Model Name( Plot Basis( state=0|1 ) ); 

scrobj << Plot Basis( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm all dieser Basisfunktionen in einem Graphen an oder blendet es aus. Diese Option ist bei Wavelets oder Modellen vom Typ „Direkte funktionale PCA“ nicht verfügbar.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Plot Basis( 1 ) )
);

```

#### Random Coefficients

**Syntax:** obj << Model Name( Random Coefficients( state=0|1 ) ); 

scrobj << Random Coefficients( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Zufällige Koeffizienten nach Funktion“ an oder blendet ihn aus. Der Bericht enthält eine Tabelle der geschätzten zufälligen Koeffizienten für jede Kombination aus Basisfunktion und funktionalem Prozess. Diese Option ist bei Wavelets oder Modellen vom Typ „Richtungsfunktionale PCA“ nicht verfügbar. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Random Coefficients( 1 ) )
);
Report( obj )["Random Coefficients by Function"] << Close( 0 );

```

#### Remove Fit

**Syntax:** obj << (Model["B Splines" | "P Splines" | "Fourier Basis" | "Wavelets" | "Direct Functional PCA"] << Remove Fit)

**Beschreibung:** Entfernt die angegebene Anpassung aus dem Bericht.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis,
	B Splines
);
Wait( 2 );
obj << (Model["Fourier Basis"] << Remove Fit);

```

#### Save Data

**Syntax:** obj << Model Name( Save Data ); 

scrobj << Save Data

**Beschreibung:** Speichert die verarbeiteten Daten in einer neuen Datentabelle. Die verarbeiteten Daten werden im gestapelten Datenformat gespeichert.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) ),
	B Splines( Save Data )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets
);
scrobj = (Report( obj )["Wavelets on Initial data"] << get scriptable object);
scrobj << Save Data;

```

#### Save Script Options

**Syntax:** obj << Save Script Options( "Save Script Saves Steps"|"Save Script Saves State"="Save Script Saves Steps" )

**Beschreibung:** Specifies the type of script that is saved for reproducing the peak finding results. Standardmäßig „Save Script Saves Steps“.

#### Wavelets DOE Analysis

**Syntax:** obj << Wavelets( Wavelets DOE Analysis( state=0|1 ) ); 

scrobj << Wavelets DOE Analysis( state=0|1 )

**Beschreibung:** Startet einen Bericht zur verallgemeinerten Regression in der FDE-Plattform. Verallgemeinerte Regressionsmodelle werden unter Verwendung der zusätzlichen Variablen als Modelleffekte an die Wavelet-Koeffizienten angepasst.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1 ) )
);

```

## Functional Data Explorer Peak Summaries

### Elementmeldungen

#### Customize Peak Summaries

**Syntax:** obj << Peak Finding( Customize Peak Summaries(stat1(0|1), ..., statN(0|1)) )

**Beschreibung:** Passt die im Funktionszusammenfassungsbericht angezeigten statistischen Kenngrößen an.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Customize Peak Summaries() )
);

```

#### Save Summaries

**Syntax:** obj << Peak Finding( Save Summaries )

**Beschreibung:** Speichert die statistischen Kenngrößen des Modells für jede Funktion, auch die Scores der funktionalen Hauptkomponenten.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Save Summaries )
);

```

## Functional Data Explorer Summaries

### Elementmeldungen

#### Control Chart Builder

**Syntax:** obj << B Splines( Control Chart Builder )

obj << P Splines( Control Chart Builder )

obj << Fourier Basis( Control Chart Builder )

**Beschreibung:** Analysiert die funktionalen Hauptkomponenten mit der Funktion „Qualitätsregelkarten erstellen“.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Control Chart Builder )
);

```

#### Customize Function Summaries

**Syntax:** obj << B Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

obj << P Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

obj << Fourier Basis( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

**Beschreibung:** Passt die im Funktionszusammenfassungsbericht angezeigten statistischen Kenngrößen an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines(
		Customize Function Summaries(
			Number of FPCs( 2 ),
			Mean( 0 ),
			Std Dev( 1 ),
			Integrated Difference( 0 ),
			Median( 1 ),
			Minimum( 1 ),
			Maximum( 1 )
		)
	)
);

```

#### Save Summaries

**Syntax:** obj << B Splines( Save Summaries )

obj << P Splines( Save Summaries )

obj << Fourier Basis( Save Summaries )

**Beschreibung:** Speichert die statistischen Kenngrößen des Modells für jede Funktion, auch die Scores der funktionalen Hauptkomponenten.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Save Summaries )
);

```

## Functional Data Explorer WDOE

### Elementmeldungen

#### Diagnostic Plots

**Syntax:** obj << Wavelets( Wavelets DOE Analysis( 1, Diagnostic Plots( state=0|1 ) ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Beschreibung:** Zeigt Diagramme „Beobachtete Werte über Vorhersage“ und Residuendiagramme im Bericht der Wavelets-DOE-Analyse an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, Diagnostic Plots( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**Syntax:** obj << Wavelets( Wavelets DOE Analysis( 1, FDOE Profiler( state=0|1 ) ) ); 

scrobj << FDOE Profiler( state=0|1 )

**Beschreibung:** Blendet das FDOE-Analysediagramm ein oder aus, in dem Sie untersuchen können, wie sich die Zielgröße basierend auf den Werten der zusätzlichen Variablen ändert. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, FDOE Profiler( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression for Wavelets Coefficients

**Syntax:** obj << Wavelets( Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( state=0|1 ) ) ); 

scrobj << Generalized Regression for Wavelets Coefficients( state=0|1 )

**Beschreibung:** Blendet die Berichte der verallgemeinerten Regression für jeden Wavelet-Koeffizienten ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets(
		Functional PCA( 0 ),
		Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( 0 ) )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Wavelets Coefficients( 1 );
Report( obj )["Generalized Regression for Wavelets Coefficients"] << Close( 0 );

```

#### Save Prediction Formula

**Syntax:** obj << Model Name( Functional DOE Analysis( Save Prediction Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); 

scrobj << Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der aktuellen Datentabelle. Wenn das ursprüngliche Datenformat „Zeilen als Funktionen“ oder „Spalten als Funktionen“ ist, erstellt diese Option eine neue Datentabelle, die die ursprünglichen Daten im gestapelten Format und eine Spalte für die Vorhersageformel enthält.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**Syntax:** obj << Model Name( Functional DOE Analysis( Save Residual Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); 

scrobj << Save Residual Formula

**Beschreibung:** Speichert die Residuenformel in einer neuen Spalte in der aktuellen Datentabelle. Wenn das ursprüngliche Datenformat „Zeilen als Funktionen“ oder „Spalten als Funktionen“ ist, erstellt diese Option eine neue Datentabelle, die die ursprünglichen Daten im gestapelten Format und eine Spalte für die Residuenformel enthält.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

