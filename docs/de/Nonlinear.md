# Nonlinear



### Accept Current Estimates

**Syntax:** obj << Accept Current Estimates

**Beschreibung:** Erzeugt den Lösungsbericht unter Verwendung der aktuellen Schätzwerte, auch wenn die Schätzwerte nicht konvergierten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Parameter Bounds( B0( 15, . ) ) );
obj << Finish;
obj << Accept Current Estimates;

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

**Syntax:** obj = Nonlinear(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );

```

### CL Alpha

**Syntax:** obj << CL Alpha( number=.05 )

**Beschreibung:** Gibt das Alpha-Niveau für die Konfidenzgrenzen für die Parameterschätzer an. Standardmäßig „.05“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Alpha( .01 );
obj << Confidence Limits;

```

### CL Limit

**Syntax:** obj << CL Limit( number=.00001 )

**Beschreibung:** Gibt das Konvergenzkriterium an, das zur Berechnung der Konfidenzgrenzen für die Parameterschätzer verwendet wird. Standardmäßig „.00001“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Limit( .002 );
obj << Confidence Limits;

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

### Confidence Limits

**Syntax:** obj << Confidence Limits

**Beschreibung:** Berechnet Konfidenzintervalle für alle Parameterschätzungen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;

```

### Contour Profiler

**Syntax:** obj << Contour Profiler( state=0|1 )

**Beschreibung:** Blendet die Konturanalyse ein oder aus, die die Konturen der Zielgröße als Grafik für zwei Faktoren gleichzeitig zeigt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Copy Script;

```

### Custom Estimate

**Syntax:** obj << Custom Estimate( expression )

**Beschreibung:** Schätzt eine benutzerdefinierte Funktion der Parameter. Der Ausdruck und der Standardfehler des Ausdrucks werden anhand der aktuellen Parameterschätzer berechnet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Custom Estimate( B0 + A + D );

```

### Custom Estimation Profiler

**Syntax:** obj << Custom Estimation Profiler( Custom Estimation( {initial values}, expression ), <Transformation( "Log"|"Logit"|"None" ), Profiler( script )> )

**Beschreibung:** Ermöglicht Ihnen, ein Profildiagramm für einen benutzerdefinierten Ausdruck zu erstellen. Geben Sie einen Ausdruck ein, der Parameter und mindestens einen Faktor umfasst. Standardmäßig ist für „Transformation“ die Option „Keine“ festgelegt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logistic w Loss.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Expand Intermediate Formulas( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 ),
	Custom Estimation Profiler(
		Custom Estimation( {x = 30}, 1 / (1 + Exp( b0 + b1 * x )) ),
		Transformation( "Logit" ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				x(
					140,
					Min( -37.4344314814814 ),
					Max( 392.622262689059 ),
					Lock( 0 ),
					Show( 1 )
				)
			)
		)
	)
);

```

### Custom Inverse Prediction

**Syntax:** obj << Custom Inverse Prediction( Response( l1, l2, ... ), <Term Value( column( number ) )> )

**Beschreibung:** Schätzt einen X-Wert für jeden angegebenen Zielgrößenwert. Standardfehler und Konfidenzgrenzen für die geschätzten X-Werte werden ebenfalls berechnet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 0 );
obj << Custom Inverse Prediction( Response( 100, 150, 200 ) );

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Data Table Window;

```

### Delta

**Syntax:** obj << Delta( number=5.0e-6 )

**Beschreibung:** Gibt den Deltawert an, der in der Option „Nur numerische Ableitungen“ verwendet wird. Standardmäßig „5.0e-6“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Delta( 0.2 );
obj << Finish;

```

### Expand Intermediate Formulas

**Syntax:** obj << Expand Intermediate Formulas( state=0|1 )

**Beschreibung:** Verwendet erweiterte Zwischenformeln bei der Berechnung und in den gespeicherten Formeln. Dies betrifft Formeln in der Ausgabe, wenn das Modell auf einer Spalte mit einer Formel beruht, weil auf die in der Formel verwendeten ursprünglichen Spalten zugegriffen wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Finish

**Syntax:** obj << Finish

**Beschreibung:** Beginnt den Anpassungsprozess und geht erst zum nächsten Befehl weiter, wenn die Lösung konvergiert hat oder beendet ist. In Skripten wird die Option „Finish“ anstelle der Option „Go“ empfohlen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Finish;
obj << Profiler;

```

### Freq

**Syntax:** obj = Nonlinear(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Freq( _freqcol ) );

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get CI

**Syntax:** obj << Get CI

**Beschreibung:** Gibt die Konfidenzintervalle für die Parameterschätzer zurück. Hinweis: Die Option „Confidence Intervals“ muss ausgewählt werden, bevor die Option „KI abrufen“ angegeben wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;
G = obj << Get CI;
Show( G );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

### Get Corr

**Syntax:** obj << Get Corr

**Beschreibung:** Gibt die Korrelation der Schätzwerte zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Corr;
Show( G );

```

### Get Cov

**Syntax:** obj << Get Cov

**Beschreibung:** Gibt die Kovarianz der Schätzwerte zurück.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Cov;
Show( G );

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Estimates

**Syntax:** obj << Get Estimates

**Beschreibung:** Gibt die Parameterschätzer zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Estimates;
Show( G );

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

### Get Parameter Names

**Syntax:** obj << Get Parameter Names

**Beschreibung:** Gibt die Parameternamen zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Parameter Names;
Show( G );

```

### Get SSE

**Syntax:** obj << Get SSE

**Beschreibung:** Gibt die Summe der quadrierten Abweichungen (SSE) zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get SSE;
Show( G );

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Std Errors

**Syntax:** obj << Get Std Errors

**Beschreibung:** Gibt die Standardfehler der Parameterschätzer zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Std Errors;
Show( G );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

### Go

**Syntax:** obj << Go

**Beschreibung:** Beginnt die Iteration im Hintergrund, um die nichtlineare Lösung zu finden. In Skripten wird die Option „Finish“ anstelle der Option „Go“ empfohlen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;

```

### Gradient Limit

**Syntax:** obj << Gradient Limit( number=1e-6 )

**Beschreibung:** Gibt den Iterationsgrenzwert für das Kriterium des Gradienten an. Standardmäßig „1e-6“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Gradient Limit( 0.0002 );
obj << Finish;

```

### Group

**Syntax:** obj = Nonlinear(...<Group( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Gruppierungsvariable an. Das angepasste Modell hat separate Parameter für jede Stufe der Gruppierungsvariablen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << Run Script( "Fit Curve" );					 

obj = dt << Nonlinear(
	Y( :Toxicity ),
	X( :Toxicity Predictor Formula ),
	Group( :Formulation ),
	Newton,
	Finish
);

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

### Iteration Limit

**Syntax:** obj << Iteration Limit( number=60 )

**Beschreibung:** Legt die maximale Anzahl der Iterationen fest. Standardmäßig „60“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Iteration Limit( 10 );
obj << Finish;

```

### Iteration Log

**Syntax:** obj << Iteration Log( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Iterationen an oder blendet sie aus. Wenn diese Option ausgewählt ist, zeichnet die Plattform nachfolgende Iterationen in der Tabelle auf.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Iteration Log( 1 );
obj << Finish;
obj << Plot( 0 );
Report( obj )["Iterations"] << Close( 0 );

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

### Lock Parameter

**Syntax:** obj << Lock Parameter( Name, ... )

**Beschreibung:** Sperrt einzelne Parameter auf einem angegebenen Wert, so dass sie während des Iterationsprozesses konstant bleiben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0 );
obj << Finish;

```

### Loss

**Syntax:** obj = Nonlinear(...<Loss( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Formelspalte an, die eine Verlustfunktion enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ship Damage.jmp" );
obj = dt << Nonlinear(
	X( :model ),
	Loss( :Poisson ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);

```

### Loss is Neg LogLikelihood

**Syntax:** obj << Loss is Neg LogLikelihood( state=0|1 )

**Beschreibung:** Geht davon aus, dass die Summe der angegebenen Verlustformel die negative Log-Likelihood ist und verwendet bei der Analyse Chi-Quadrat-Kenngrößen anstelle von F-Werten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 )
);
obj << Loss is Neg LogLikelihood( 0 );
obj << Finish;

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

### Newton

**Syntax:** obj << Newton

**Beschreibung:** Gibt entweder Gauß-Newton (für reguläre kleinste Quadrate) oder Newton-Raphson (für Modelle, die Verlustfunktionen enthalten) als die Optimierungsmethode an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Newton;
obj << Finish;

```

### Nonlinear

**Syntax:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Beschreibung:** Passt nichtlineare Modelle mithilfe von kleinsten Quadraten oder einer benutzerdefinierten Verlustfunktion an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Numeric Chain Deriv Delta

**Syntax:** obj << Numeric Chain Deriv Delta( =1e-5 )

**Beschreibung:** Gibt den Delta-Parameter an, der bei der Annäherung an die Ableitung einer nichtlinearen Formel verwendet wird, die keine integrierte Ableitung hat. Standardmäßig „1e-5“.

**JMP Version hinzugefügt:** 14

### Numeric Derivatives Only

**Syntax:** obj << Numeric Derivatives Only( state=0|1 )

**Beschreibung:** Gibt an, dass nur numerische Ableitungen in der Anpassungsmethode verwendet werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Finish;

```

### Obj Change Limit

**Syntax:** obj << Obj Change Limit( number=1e-15 )

**Beschreibung:** Gibt den Iterationsgrenzwert für das Kriterium der Zielfunktionsänderung an. Standardmäßig „1e-15“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Obj Change Limit( 1e-10 );
obj << Finish;

```

### Parameter Bounds

**Syntax:** obj << Parameter Bounds( <parameter name( lower, upper )> )

**Beschreibung:** Legt Schranken für die angegebenen Parameter fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Parameter Bounds( B0( 0, . ) );
obj << Finish;

```

### Parameter Contour Profiler

**Syntax:** obj << Parameter Contour Profiler( state=0|1 )

**Beschreibung:** Blendet eine Konturanalyse ein oder aus, das die SSE oder den Verlust als Funktion der Parameter darstellt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Contour Profiler( 1 );

```

### Parameter Profiler

**Syntax:** obj << Parameter Profiler( state=0|1 )

**Beschreibung:** Blendet eine Vorhersageanalyse ein oder aus, das die SSE oder den Verlust als Funktion der Parameter darstellt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Profiler( 1 );

```

### Parameter Surface Profiler

**Syntax:** obj << Parameter Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm ein oder aus, das die SSE oder den Verlust als Funktion der Parameter darstellt. Diese Option ist nur für Modelle verfügbar, die zwei oder mehr Parameter enthalten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Surface Profiler( 1 );

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

### Plot

**Syntax:** obj << Plot( state=0|1 )

**Beschreibung:** Blendet einen Graphen ein oder aus, in dem die Vorhersageformel als Funktion von genau einer anderen Variablen dargestellt wird. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
Wait( 1 );
obj << Plot( 0 );
obj << Finish;

```

### Predictor Formula

**Syntax:** obj = Nonlinear(...<Predictor Formula( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, die entweder die X-Variable oder eine Modellformel mit Parametern enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Profile Likelihood

**Syntax:** obj << Profile Likelihood( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der relativen Likelihood-Funktion ein oder aus, das so skaliert ist, dass es einen Maximalwert von 1 hat, über Werte eines einzelnen Parameters hinweg, während alle anderen Parameter so optimiert werden, dass die Verlustfunktion minimiert wird. Diese Option ist nur verfügbar, wenn die nichtlineare Plattform mit einer Verlustfunktion aufgerufen wird, die zwei oder mehr Parameter enthält.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Unconstrained Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0},
			If(
				Censor == 0, -Log( Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1,
					-Log( 1 - Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) ) )
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Unconstrained Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood( 1 );

```

### Profile Likelihood Contour

**Syntax:** obj << Profile Likelihood Contour( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die Likelihood-Konfidenzkonturen für die relative Likelihood-Funktion über zwei Parameter, während alle anderen Parameter optimiert werden, um die Verlustfunktion zu minimieren. Diese Option ist nur verfügbar, wenn die nichtlineare Plattform mit einer Verlustfunktion gestartet wird, die drei oder mehr Parameter enthält.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Partial Unconstrained DS Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0, p = 0.5},
			If(
				p < 0 | p > 1, .,
				Censor == 0,
					-Log( p * Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1,
					-Log(
						1 - p * Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) )
					)
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Partial Unconstrained DS Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood Contour( 1 );

```

### Profiler

**Syntax:** obj << Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Profiler( 1 );

```

### QuasiNewton BFGS

**Syntax:** obj << QuasiNewton BFGS

**Beschreibung:** Gibt Quasi-Newton BFGS als die Optimierungsmethode an. Diese Methode ist am besten für großen Parameterzahlen geeignet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton BFGS;
obj << Finish;

```

### QuasiNewton SR1

**Syntax:** obj << QuasiNewton SR1

**Beschreibung:** Gibt Quasi-Newton SR1 als die Optimierungsmethode an. Diese Methode vermeidet die Neuberechnung der Ableitungen bei jeder Iteration.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton SR1;
obj << Finish;

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relative Gradient

**Syntax:** obj << Relative Gradient( number=1e-6 )

**Beschreibung:** Gibt den Iterationsgrenzwert für das Kriterium des relativen Gradienten an. Standardmäßig „1e-6“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Relative Gradient( 0.0001 );
obj << Finish;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remember Solution

**Syntax:** obj << Remember Solution( name )

**Beschreibung:** Erstellt einen Bericht mit der Bezeichnung „Gemerkte Modelle“, der die aktuellen Parameterschätzer und statistischen Kenngrößen enthält. Die Ergebnisse mehrerer Modelle können gespeichert und verglichen werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Remember Solution( "New Model" );

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Report View( "Summary" );

```

### Reset

**Syntax:** obj << Reset

**Beschreibung:** Setzt das Konvergenzkriterium nach der Lösung zurück. Diese Option ist nützlich, wenn Sie versuchen, das Modell mit unterschiedlichen Startwerten neu zu berechnen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Finish;
Wait( 2 );
obj << Reset;

```

### Response

**Syntax:** obj = Nonlinear(...<Response( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Zielgrößenvariable an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Revert To Original Parameters

**Syntax:** obj << Revert To Original Parameters

**Beschreibung:** Setzt die aktuellen Werte der Parameter im Bedienfeld auf die ursprünglichen Werte zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 1 );
obj << Revert to Original Parameters;

```

### SSE Grid

**Syntax:** obj << SSE Grid

**Beschreibung:** Erstellt ein Raster von Werten um die Lösungsschätzwerte und berechnet die Summe der quadrierten Abweichungen für jeden Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << SSE Grid;

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Estimates

**Syntax:** obj << Save Estimates

**Beschreibung:** Speichert die aktuellen Parameterschätzungen in den Parameterwerten in der Formelspalte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 1 );
obj << Save Estimates;

```

### Save Estimates To Table

**Syntax:** obj << Save Estimates To Table

**Beschreibung:** Erstellt eine neue Datentabelle mit den Parameterschätzungen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Estimates To Table;

```

### Save Indiv Confid Limit Formula

**Syntax:** obj << Save Indiv Confid Limit Formula

**Beschreibung:** Speichert neue Formelspalten in der Datentabelle. Die neuen Spalten enthalten die Formeln zur Berechnung des Konfidenzintervalls für eine einzelne Vorhersage. Dies ist ein Konfidenzintervall eines einzelnen Zielgrößenwerts für einen vorgegebenen X-Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limit Formula;

```

### Save Indiv Confid Limits

**Syntax:** obj << Save Indiv Confid Limits

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die asymptotischen Konfidenzgrenzen für eine Einzelwertvorhersage. Dies ist das Konfidenzintervall eines einzelnen Zielgrößenwerts bei einem vorgegebenen X-Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limits;

```

### Save Inverse Prediction Formula

**Syntax:** obj << Save Inverse Prediction Formula

**Beschreibung:** Speichert neue Formelspalten in der Datentabelle. Die neuen Spalten enthalten die Formeln für die inverse Vorhersage des Modells, den Standardfehler einer inversen Vorhersage und den Standardfehler einer einzelnen inversen Vorhersage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Inverse Prediction Formula;

```

### Save Pred Confid Limit Formula

**Syntax:** obj << Save Pred Confid Limit Formula

**Beschreibung:** Speichert neue Formelspalten in der Datentabelle. Die neuen Spalten enthalten die Formeln zur Berechnung des Konfidenzintervalls für eine Modellvorhersage. Dies ist ein Konfidenzintervall für den mittleren Zielgrößenwert bei einem vorgegebenen X-Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limit Formula;

```

### Save Pred Confid Limits

**Syntax:** obj << Save Pred Confid Limits

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die asymptotischen Konfidenzgrenzen für die Modellvorhersage. Dies ist das Konfidenzintervall für den durchschnittlichen Zielgrößenwert bei einem vorgegebenen X-Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limits;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Vorhersageformel, die die aktuellen Parameterschätzungen verwendet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Prediction Formula;

```

### Save Residual Formula

**Syntax:** obj << Save Residual Formula

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Formel zum Berechnen der Residuen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Residual Formula;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Script Window;

```

### Save Specific Solving Formula

**Syntax:** obj << Save Specific Solving Formula( <column to solve for, {name1=expr1, ...}, Save Formula for Std Error Mean, Save Formula for Std Error Individual> )

**Beschreibung:** Speichert neue Formelspalten in der Datentabelle. Die neuen Spalten enthalten Formeln für die Vorhersage und den Standardfehler für die Auswertung einer X-Variablen bei vorgegebener Zielgrößenvariable und entweder anderen X-Werten in den Daten oder einer Konstante.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :year, {:pop = 200}, Save Formula for Std Error Mean );

```

**Beispiel 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :pop, Save Formula for Std Error Individual );

```

### Save Std Error of Individual

**Syntax:** obj << Save Std Error of Individual

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Formel des Standardfehlers für die Vorhersage eines Einzelwerts. Dies ist der Standardfehler für die Vorhersage der Zielgröße eines Einzelwerts für einen vorgegebenen X-Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Individual;

```

### Save Std Error of Predicted

**Syntax:** obj << Save Std Error of Predicted

**Beschreibung:** Speichert eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält die Formel des Standardfehlers für eine Modellvorhersage. Dies ist der Standardfehler für die Vorhersage des mittleren Zielgrößenwerts für einen vorgegebenen X-Wert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Predicted;

```

### Second Deriv Method

**Syntax:** obj << Second Deriv Method( state=0|1 )

**Beschreibung:** Gibt an, dass die Anpassungsmethode zweite Ableitungen verwendet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Second Deriv Method( 1 ), Finish );

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

### Set Parameter

**Syntax:** obj << Set Parameter( name=expr, ... )

**Beschreibung:** Legt einen oder mehrere Parameterwerte vor der Anpassung des Modells fest. Dies ist nützlich zum Fixieren eines Parameters auf einen bestimmten Wert und zur Eingabe von Startwerten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
Wait( 2 );
obj << Finish;

```

### Show Derivatives

**Syntax:** obj << Show Derivatives

**Beschreibung:** Zeigt die Ableitungen der nichtlinearen Formel im Protokoll an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Show Derivatives;

```

### Show Prediction Expression

**Syntax:** obj << Show Prediction Expression( state=0|1 )

**Beschreibung:** Blendet das Vorhersagemodell oder die Verlustfunktion im Bericht ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Step

**Syntax:** obj << Step

**Beschreibung:** Führt einen Iterationsschritt zur Berechnung des nichtlinearen Modells durch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Step;
Wait( 1 );
obj << Step;

```

### Stop

**Syntax:** obj << Stop

**Beschreibung:** Unterbricht den nichtlinearen Prozess der Modellanpassung und stoppt ihn bei der aktuellen Iteration.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;
obj << Stop;

```

### Surface Profiler

**Syntax:** obj << Surface Profiler( state=0|1 )

**Beschreibung:** Blendet ein dreidimensionales Wirkungsflächendiagramm ein oder aus. Diese Option ist nur für Modelle mit zwei oder mehr X-Variablen verfügbar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

### Unlock Parameter

**Syntax:** obj << Unlock Parameter( Name, ... )

**Beschreibung:** Entsperrt die angegebenen Parameter. Verwenden Sie diese Option für zuvor gesperrte Faktoren, damit sie sich während des Iterationsprozesses ändern können.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0, A, D );
obj << Finish;
Wait( 2 );
obj << Unlock Parameter( B0, A );
obj << Finish;

```

### Unthreaded

**Syntax:** obj << Unthreaded( state=0|1 )

**Beschreibung:** Führt die Iterationen im Hauptrechen-Thread aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Nonlinear( Y( :Algae density ), X( :Mitscherlich ) );
obj << Unthreaded( 1 );
obj << Finish;

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

### Weight

**Syntax:** obj = Nonlinear(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Weight( _weightcol ) );

```

### Window View

**Syntax:** obj = Nonlinear(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### X

**Syntax:** obj = Nonlinear(...<X( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, die entweder die X-Variable oder eine Modellformel mit Parametern enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Y

**Syntax:** obj = Nonlinear(...<Y( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Zielgrößenvariable an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

