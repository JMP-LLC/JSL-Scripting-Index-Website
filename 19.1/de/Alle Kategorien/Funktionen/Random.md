# Random



### Col Shuffle

**Syntax:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**Beschreibung:** Gibt eine zufällige ganze Zahl zwischen 1 und der Anzahl von Zeilen der aktuellen Datentabelle zurück. Bei Verwendung in einer Spaltenformel erstellt Col Shuffle() eine zufällige Reihenfolge der Zeilennummern, wobei jede Zeilennummer nur einmal erscheint. Die Reihenfolge wird intern gepuffert, so dass mehrere Auswertungen effizient sind.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );dt << New Column( "Col Shuffle for each Sex grouped by Excluded",	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) ));

```

### Make KFold Formula

**Syntax:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**Beschreibung:** Erzeugt bei Verwendung in einer Spaltenformel eine Validierungsspalte mit folds Stufen. Diese JSL-Funktion wird in erster Linie von der Plattform „Validierungsspalte erzeugen“ verwendet, um Formelspalten zu erzeugen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "KFold Validation",	"Numeric",	"Nominal",	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Stratified KFold",	"Numeric",	"Nominal",	Formula(		Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) )	));

```

### Make Validation Formula

**Syntax:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Beschreibung:** Erzeugt bei Verwendung in einer Spaltenformel eine zwei- oder dreistufige Validierungsspalte. Das Argument rates ist eine 3x1-Matrix, die jeweils die Trainings-, Validierungs- und Testanteile enthält. Diese JSL-Funktion wird in erster Linie von der Plattform „Validierungsspalte erzeugen“ verwendet, um Formelspalten zu erzeugen.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Validation",	"Numeric",	"Nominal",	Formula( Make Validation Formula( [.6, .4, 0] ) ),	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Validation",	"Numeric",	"Nominal",	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} ));

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "Validation",	"Numeric",	"Nominal",	Formula(		Make Validation Formula(			[20, 10, 4],			<<Cutpoint Column( :Week of Year ),			<<Cutpoint Batch ID( :ID ),			<<Determine cutpoints using( "Numbers of Rows" )		)	),	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} ));

```

### Polytope Uniform Random

**Syntax:** points = Random Linearly Constrained Uniform( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt;, &lt;tol=1e-8&gt;, &lt;G&gt;, &lt;LC&gt;, &lt;UC&gt; )

**Beschreibung:** Erzeugt eine Zufallsstichprobe unter linearen Nebenbedingungen, Nebenbedingungen für Variablen und Nebenbedingungen für Kardinalität für bestimmte Komponentenuntergruppenvariablen. Das Argument numSamples gibt die Anzahl der zu erzeugenden Zufallspunkte an. Das Argument A ist die Matrix der Koeffizienten der linearen Nebenbedingungen. Das Argument b ist der Vektor der Werte auf der rechten Seite der linearen Nebenbedingungen. Die Argumente L und U sind Vektoren der unteren bzw. oberen Schranken für die Variablen. Die Argumente neq, nle und nge sind die Anzahl der Gleichheitsnebenbedingungen, die Anzahl der Nebenbedingungen „kleiner oder gleich“ und die Anzahl der Nebenbedingungen „größer oder gleich“. Das Argument nwarm ist die Anzahl der Aufwärm-Wiederholungen, bevor Punkte in die Ausgabematrix geschrieben werden. Das Argument nstride ist die Anzahl der Wiederholungen zwischen jedem Punkt, der in die Ausgabematrix geschrieben wird. Das Argument tol ist die Toleranz. Das Argument G ist ein Vektor von Indizes, der die Variablen zu eingeschränkten Komponentenuntergruppen zuordnet, wobei fehlende oder Nullwerte nicht zu einer eingeschränkten Untergruppe gehören. Die Argumente LC und UC sind die unteren bzw. oberen Nebenbedingungen für Kardinalität für die eingeschränkten Komponentenuntergruppen. Beachten Sie, dass zuerst die  Gleichheitsnebenbedingungen, dann die Nebenbedingungen „kleiner oder gleich“ und zuletzt die Nebenbedingungen „größer oder gleich“ aufgeführt werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

A = [1 1 1, 1 2 0];b = [1, 0.5];L = [0, 0, 0.1];U = [1, 1, 1];points = Random Linearly Constrained Uniform( 2000, A, b, L, U, 1, 0, 1, 300, 50 );dt = As Table( points );tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );tfr = tobj[scalebox( 1 )] << clone box;New Window( "Example: Random Linearly Constrained Uniform",	Outline Box( "Points on a Ternary Plot", tfr ),	Outline Box( "Constraints",		Text Box( "X1 + x2 + x3 = 1" ),		Text Box( "X2 + 2*x2 >= 0.5" )	),	Outline Box( "Variable Bounds",		Text Box( "0 <= x1 <= 1" ),		Text Box( "0 <= x2 <= 1" ),		Text Box( ".1 < x3 <= 1" )	));Close( dt, no save );Show( "see new window for example output" );

```

**Beispiel 2**

```jsl

A = [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1];b = [100];L = [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0];U = [100 100 95 90 100 85 100 90 60 70 75 70 75 100 95 60 80 95 100 100];nwarm = 100;nstride = 100;tol = 1e-8;// Index the constrained subgroups.  Index = 0 is not in a constrained subgroup.G = [0 0 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 0 0];// Lower cardinality constraints for the constrained subgroupsLC = [1 1];// Upper cardinality constraints for the constrained subgroupsUC = [3 5];points = Random Linearly Constrained Uniform(	100,	A,	b,	L,	U,	1,	0,	0,	nwarm,	nstride,	tol,	G,	LC,	UC);dt = As Table( points );

```

### Random Beta

**Syntax:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Beta-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Beta( 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Beta( 1, 1 ) );//show resultsShow( x, v );

```

### Random Beta Binomial

**Syntax:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**Beschreibung:** Gibt für n Versuche mit der Wahrscheinlichkeit p und Korrelation delta eine Zufallszahl aus einer Beta-Binomialverteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Beta Binomial( 14, .5, .2 );//produce a vector of random numbersv = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );//show resultsShow( x, v );

```

### Random Binomial

**Syntax:** y = Random Binomial( n, p )

**Beschreibung:** Gibt eine Zufallszahl aus einer Binomialverteilung mit n Versuchen und Ereigniswahrscheinlichkeit p zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exrbinp = 0.5;exrbinn = 40;exrbinlsz = Log( 1000 );New Window( "Example: Random Binomial and Empirical Distribution",	exrbiny = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( 0, 40 ),		Pen Color( "red" ),		Pen Size( 2 );		exrbinsz = Round( Exp( exrbinlsz ) );		exrbinsamp = J( Round( exrbinsz ), 1, . );		exrbinfreq = J( Round( exrbinn + 1 ), 1, . );		For( exrbink = 1, exrbink <= Round( exrbinsz ), exrbink++,			exrbinsamp[exrbink] = Random Binomial( exrbinn, exrbinp )		);		For( exrbink = 0, exrbink <= Round( exrbinn ), exrbink++,			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) / Round( exrbinsz )		);		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,			H Line(				exrbink,				exrbink + 1,				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink )			);			V Line(				exrbink + 1,				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ),				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink + 1 )			);		);		Pen Color( "blue" );		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );			V Line( exrbink, exrbinfreq[exrbink], exrbinfreq[exrbink + 1] );		);		Text(			{0.5, 0.9},			"n=",			Round( exrbinn ),			" p=",			Round( exrbinp, 2 ),			" size=",			Round( exrbinsz )		);	),	H List Box(		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),		Text Box( " random sample size" )	));

```

### Random Category

**Syntax:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Beschreibung:** Gibt eine zufällige Kategorie mit vorgegebenen Paaren aus Wahrscheinlichkeit und Ergebnisausdrücken zurück. Es wird eine gleichverteilte Zufallszahl erzeugt und mit den Wahrscheinlichkeitsargumenten verglichen, um zu ermitteln, welches Ergebnisargument zurückgegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Syntax:** y = Random Cauchy()

**Beschreibung:** Gibt eine Zufallszahl aus einer Cauchy-Verteilung mit einem Median von 0 zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Cauchy();//produce a vector of random numbersv = J( 1, 10, Random Cauchy() );//show resultsShow( x, v );

```

### Random ChiSquare

**Syntax:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Chi-Quadrat-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random ChiSquare( 2 );//produce a vector of random numbersv = J( 1, 10, Random ChiSquare( 2 ) );//show resultsShow( x, v );

```

### Random ExGaussian

**Syntax:** y = Random ExGaussian( location, scale, shape)

**Beschreibung:** Gibt eine Zufallszahl aus einer Ex-Gaußschen Verteilung zurück.

**JMP Version hinzugefügt:** 18

```jsl

//produce a single random numberx = Random ExGaussian( 0, .5, .25 );//produce a vector of random numbersv = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );//show resultsShow( x, v );

```

### Random Exp

**Syntax:** y = Random Exp()

**Beschreibung:** Gibt eine Zufallszahl aus einer Exponentialverteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Exp();//produce a vector of random numbersv = J( 1, 10, Random Exp() );//show resultsShow( x, v );

```

### Random F

**Syntax:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer F-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random F( 2, 2 );//produce a vector of random numbersv = J( 1, 10, Random F( 2, 2 ) );//show resultsShow( x, v );

```

### Random Frechet

**Syntax:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Frechet-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Frechet( 10, 5 );//produce a vector of random numbersv = J( 1, 10, Random Frechet( 10, 5 ) );//show resultsShow( x, v );

```

### Random GLog

**Syntax:** y = Random GLog( mu, sigma, lambda )

**Beschreibung:** Gibt eine Zufallszahl aus einer verallgemeinerten logarithmischen Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random GLog( 4, 1, 0.1 );//produce a vector of random numbersv = J( 1, 10, Random GLog( 4, 1, 0.1 ) );//show resultsShow( x, v );

```

### Random Gamma

**Syntax:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Gamma-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Gamma( 1 );//produce a vector of random numbersv = J( 1, 10, Random Gamma( 1 ) );//show resultsShow( x, v );

```

### Random Gamma Poisson

**Syntax:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Gamma-Poisson-Verteilung mit den Parametern lambda und sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Gamma Poisson( 3, 2 );//produce a vector of random numbersv = J( 1, 10, Random Gamma Poisson( 3, 2 ) );//show resultsShow( x, v );

```

### Random GenGamma

**Syntax:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer erweiterten verallgemeinerten Gamma-Verteiliung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random GenGamma( 2, 1.25 );//produce a vector of random numbersv = J( 1, 10, Random GenGamma( 2, 1.25 ) );//show resultsShow( x, v );

```

### Random Geometric

**Syntax:** y = Random Geometric( p )

**Beschreibung:** Gibt für Ereignisse mit der Wahrscheinlichkeit p eine Zufallszahl von Nicht-Ereignissen zurück, bis ein Ereignis auftritt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exrgeop = 0.1;exrgeolsz = Log( 300 );New Window( "Example: Random Geometric and Empirical Distribution",	exrgeoy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 50 ),		Pen Color( "red" ),		Pen Size( 1 );		exrgeosz = Round( Exp( exrgeolsz ) );		exrgeosamp = J( Round( exrgeosz ), 1, . );		exrgeofreq = J( Round( 50 + 1 ), 1, . );		For( exrgeok = 1, exrgeok <= Round( exrgeosz ), exrgeok++,			exrgeosamp[exrgeok] = Random Geometric( exrgeop )		);		For( exrgeok = 0, exrgeok <= 50, exrgeok++,			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) / Round( exrgeosz )		);		exrgeotmp1 = 0;		exrgeotmp2 = 0;		For( exrgeok = 0, exrgeok < 50, exrgeok++,			exrgeotmp2 = exrgeotmp2 + (1 - exrgeop) ^ exrgeok * exrgeop;			H Line( exrgeok, exrgeok + 1, exrgeotmp2 );			V Line( exrgeok, exrgeotmp1, exrgeotmp2 );			exrgeotmp1 = exrgeotmp2;		);		Pen Color( "blue" );		For( exrgeok = 0, exrgeok < 50, exrgeok++,			H Line( exrgeok, exrgeok + 1, exrgeofreq[exrgeok + 1] );			V Line( exrgeok + 1, exrgeofreq[exrgeok + 1], exrgeofreq[exrgeok + 2] );		);		Text( {10, 0.2}, " p=", Round( exrgeop, 2 ), " sample size=", Round( exrgeosz ) );	),	H List Box(		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),		Text Box( " random sample size" )	));

```

### Random Index

**Syntax:** x = Random Index( n, k )

**Beschreibung:** Gibt eine k x 1 Matrix von zufälligen ganzen Zahlen zwischen 1 und n ohne doppelte Werte zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Index( 100, 5 );

```

### Random Integer

**Syntax:** y = Random Integer( n ); Random Integer( k, n )

**Beschreibung:** Gibt eine ganzzahlige (Pseudo-)Zufallszahl zwischen 1 und n (oder zwischen k und n) einschließlich zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Integer( 1, 10 );//produce a vector of random numbersv = J( 1, 10, Random Integer( 1, 10 ) );//show resultsShow( x, v );

```

### Random Johnson Sb

**Syntax:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Beschreibung:** Gibt eine Zufallszahl aus einer Johnson-Sb-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Johnson Sb( 0.5, 1, 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );//show resultsShow( x, v );

```

### Random Johnson Sl

**Syntax:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Johnson-Sl-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Johnson Sl( 0.5, 1, 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );//show resultsShow( x, v );

```

### Random Johnson Su

**Syntax:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Beschreibung:** Gibt eine Zufallszahl aus einer Johnson-Su-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Johnson Su( 0.5, 1, 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );//show resultsShow( x, v );

```

### Random LEV

**Syntax:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer LEV-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random LEV( 10, 5 );//produce a vector of random numbersv = J( 1, 10, Random LEV( 10, 5 ) );//show resultsShow( x, v );

```

### Random Linearly Constrained Uniform

**Syntax:** points = Random Linearly Constrained Uniform( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt;, &lt;tol=1e-8&gt;, &lt;G&gt;, &lt;LC&gt;, &lt;UC&gt; )

**Beschreibung:** Erzeugt eine Zufallsstichprobe unter linearen Nebenbedingungen, Nebenbedingungen für Variablen und Nebenbedingungen für Kardinalität für bestimmte Komponentenuntergruppenvariablen. Das Argument numSamples gibt die Anzahl der zu erzeugenden Zufallspunkte an. Das Argument A ist die Matrix der Koeffizienten der linearen Nebenbedingungen. Das Argument b ist der Vektor der Werte auf der rechten Seite der linearen Nebenbedingungen. Die Argumente L und U sind Vektoren der unteren bzw. oberen Schranken für die Variablen. Die Argumente neq, nle und nge sind die Anzahl der Gleichheitsnebenbedingungen, die Anzahl der Nebenbedingungen „kleiner oder gleich“ und die Anzahl der Nebenbedingungen „größer oder gleich“. Das Argument nwarm ist die Anzahl der Aufwärm-Wiederholungen, bevor Punkte in die Ausgabematrix geschrieben werden. Das Argument nstride ist die Anzahl der Wiederholungen zwischen jedem Punkt, der in die Ausgabematrix geschrieben wird. Das Argument tol ist die Toleranz. Das Argument G ist ein Vektor von Indizes, der die Variablen zu eingeschränkten Komponentenuntergruppen zuordnet, wobei fehlende oder Nullwerte nicht zu einer eingeschränkten Untergruppe gehören. Die Argumente LC und UC sind die unteren bzw. oberen Nebenbedingungen für Kardinalität für die eingeschränkten Komponentenuntergruppen. Beachten Sie, dass zuerst die  Gleichheitsnebenbedingungen, dann die Nebenbedingungen „kleiner oder gleich“ und zuletzt die Nebenbedingungen „größer oder gleich“ aufgeführt werden müssen.

**JMP Version hinzugefügt:** 20

**Beispiel 1**

```jsl

A = [1 1 1, 1 2 0];b = [1, 0.5];L = [0, 0, 0.1];U = [1, 1, 1];points = Random Linearly Constrained Uniform( 2000, A, b, L, U, 1, 0, 1, 300, 50 );dt = As Table( points );tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );tfr = tobj[scalebox( 1 )] << clone box;New Window( "Example: Random Linearly Constrained Uniform",	Outline Box( "Points on a Ternary Plot", tfr ),	Outline Box( "Constraints",		Text Box( "X1 + x2 + x3 = 1" ),		Text Box( "X2 + 2*x2 >= 0.5" )	),	Outline Box( "Variable Bounds",		Text Box( "0 <= x1 <= 1" ),		Text Box( "0 <= x2 <= 1" ),		Text Box( ".1 < x3 <= 1" )	));Close( dt, no save );Show( "see new window for example output" );

```

**Beispiel 2**

```jsl

  A = [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1];b = [100];L = [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0];U = [100 100 95 90 100 85 100 90 60 70 75 70 75 100 95 60 80 95 100 100];nwarm = 100;nstride = 100;tol = 1e-8;// Index the constrained subgroups.  Index = 0 is not in a constrained subgroup.G = [0 0 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 0 0];// Lower cardinality constraints for the constrained subgroupsLC = [1 1];// Upper cardinality constraints for the constrained subgroupsUC = [3 5];points = Random Linearly Constrained Uniform(	100,	A,	b,	L,	U,	1,	0,	0,	nwarm,	nstride,	tol,	G,	LC,	UC);dt = As Table( points );

```

### Random LogGenGamma

**Syntax:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer verallgemeinerten Log-Gamma-Verteilung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random LogGenGamma( 2, 1.25 );//produce a vector of random numbersv = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );//show resultsShow( x, v );

```

### Random Logistic

**Syntax:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer logistischen Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Logistic( 15, 1 );//produce a vector of random numbersv = J( 1, 10, Random Logistic( 15, 1 ) );//show resultsShow( x, v );

```

### Random Loglogistic

**Syntax:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer log-logistischen Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Loglogistic( 15, 1 );//produce a vector of random numbersv = J( 1, 10, Random Loglogistic( 15, 1 ) );//show resultsShow( x, v );

```

### Random Lognormal

**Syntax:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Lognormal-Verteilung mit den Parametern mu und sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

//produce a single random numberx = Random Lognormal( -1, 1.5 );//produce a vector of random numbersv = J( 1, 10, Random Lognormal( -1, 1.5 ) );//show resultsShow( x, v );

```

**Beispiel 2**

```jsl

exrlnn = 30;New Window( "Example: Random Lognormal and Empirical Distribution",	exrlny = Graph Box(		Y Scale( -0.05, 1.05 ),		X Scale( -.05, 10 ),		Pen Color( "red" );		exranlnorm = J( Round( exrlnn ), 1, . );		For( k = 1, k <= Round( exrlnn ), k++,			exranlnorm[k] = Random Lognormal( -1, 1.5 )		);		exranlnorm = Sort Ascending( exranlnorm );		H Line( 0, exranlnorm[1], 0 );		For( k = 2, k <= Round( exrlnn ), k++,			H Line( exranlnorm[k - 1], exranlnorm[k], (k - 1) / Round( exrlnn ) )		);		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );		Pen Color( "blue" );		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );		Text( {-4, 0.8}, " n=", Round( exrlnn ) );	),	H List Box( Slider Box( 10, 2000, exrlnn, exrlny << reshow ), Text Box( " n" ) ));

```

### Random Multivariate Normal

**Syntax:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**Beschreibung:** Gibt eine zufällige nrows-x-p-Matrix aus einer multivariaten Normalverteilung mit Erwartungswertvektor mean und (positiv semidefiniter) Kovarianzmatrix covar zurück, wobei p als Anzahl der Zeilen von covar definiert ist.

**JMP Version hinzugefügt:** 15

```jsl

meanvec = 1 :: 3;covar = [1 .6 .6, .6 1 .6, .6 .6 1];randmvnRow = Random Multivariate Normal( meanvec, covar );randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Syntax:** y = Random Negative Binomial( r, p )

**Beschreibung:** Gibt für Ereignisse mit der Wahrscheinlichkeit p eine Zufallszahl von Nicht-Ereignissen zurück, bis r Ereignisse aufgetreten sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exnbpp = 0.3;exnbpn = 20;exnbrn = Random Negative Binomial( 20, 0.3 );New Window( "Example: Neg Binomial Probability",	exnbpy = Graph Box(		Y Scale( 0, 0.04 ),		X Scale( -1, 100 ),		Pen Color( "red" ),		Pen Size( 2 );		For( exnbpk = 0, exnbpk < 1000, exnbpk++,			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )		);		Pen Color( "blue" );,		Pen Size( 4 ),		V Line( exnbrn, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbrn ) );		Text( {1, 0.035}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );		Text(			{1, 0.030},			"x=",			Round( exnbrn, 2 ),			" Prob=",			Round( Neg Binomial Probability( exnbpp, exnbpn, exnbrn ), 2 )		);	),	H List Box(		Button Box( "Generate a Random Negative Binomial Number",			exnbrn = Random Negative Binomial( 20, 0.3 );			exnbpy << reshow;		)	));

```

### Random Normal

**Syntax:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Normalverteilung mit Mittelwert Mu und Standardabweichung Sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

//produce a single random numberx = Random Normal();//produce a vector of random numbersv = J( 1, 10, Random Normal() );//show resultsShow( x, v );

```

**Beispiel 2**

```jsl

exGcoordX = J( 50, 1, . );exGcoordY = J( 50, 1, . );For( k = 1, k <= 50, k++,	exGcoordX[k] = Random Uniform( -5, 5 ));For( k = 1, k <= 50, k++,	exGcoordY[k] = exGcoordX[k] + Random Normal());New Window( "Random Normal, Linear Regression, and Outlier",	V List Box(		Graph Box(			framesize( 600, 300 ),			X Scale( -10, 10 ),			Y Scale( 1.5 * Min( exGcoordY ), 1.5 * Max( exGcoordY ) ),			double buffer,			exsx = Sum( exGcoordX ),			exsy = Sum( exGcoordY ),			exsxx = Sum( (exGcoordX) ^ 2 );			exsxy = Sum( exGcoordX :* exGcoordY );			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx * exsx);			exbeta0 = (exsy - exbeta1 * exsx) / 100;			exx1 = Min( exGcoordX );			exy1 = exbeta0 + exbeta1 * Min( exGcoordX );			exx2 = Max( exGcoordX );			exy2 = exbeta0 + exbeta1 * Max( exGcoordX );			Line( {exx1, exy1}, {exx2, exy2} );			Marker Size( 5 );			Drag Marker( exGcoordX, exGcoordY );			Drag Text( [-7], [-5], "drag any marker" );		)	));

```

### Random Normal Mixture

**Syntax:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Beschreibung:** Gibt eine Zufallszahl aus einer Mischung aus Normalverteilungen mit den Gruppenmittelwerten meanvec, den Standardabweichungen der Gruppe sdvec und den Gruppenwahrscheinlichkeiten probvec zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = New Table( "Example",	New Column( "Rand NM",		set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) )	));dt << add rows( 1000 );Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**Syntax:** y = Random Poisson( lambda )

**Beschreibung:** Gibt eine Zufallszahl aus einer Poisson-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exrpoilambda = 20;exrpoilsz = Log( 300 );New Window( "Example: Random Poisson and Empirical Distribution",	exrpoiy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 50 ),		Pen Color( "red" ),		Pen Size( 1 );		exrpoisz = Round( Exp( exrpoilsz ) );		exrpoisamp = J( Round( exrpoisz ), 1, . );		exrpoifreq = J( Round( 50 + 1 ), 1, . );		For( exrpoik = 1, exrpoik <= Round( exrpoisz ), exrpoik++,			exrpoisamp[exrpoik] = Random Poisson( exrpoilambda )		);		For( exrpoik = 0, exrpoik <= 50, exrpoik++,			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) / Round( exrpoisz )		);		exrpoitmp1 = 0;		exrpoitmp2 = 0;		For( exrpoik = 0, exrpoik < 50, exrpoik++,			H Line( exrpoik, exrpoik + 1, Poisson Distribution( exrpoilambda, exrpoik ) );			V Line(				exrpoik + 1,				Poisson Distribution( exrpoilambda, exrpoik ),				Poisson Distribution( exrpoilambda, exrpoik + 1 )			);		);		Pen Color( "blue" );		For( exrpoik = 0, exrpoik < 50, exrpoik++,			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );			V Line( exrpoik + 1, exrpoifreq[exrpoik + 1], exrpoifreq[exrpoik + 2] );		);		Text(			{10, 0.2},			" \!U03BB=",			Round( exrpoilambda, 2 ),			" sample size=",			Round( exrpoisz )		);	),	H List Box(		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),		Text Box( " random sample size" )	));

```

### Random Reset

**Syntax:** Random Reset( seed number )

**Beschreibung:** Startet die Zufallssequenzen mit einem neuen Startwert neu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Reset( 1 );Random Normal();

```

### Random SEV

**Syntax:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer SEV-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random SEV( 50, 5 );//produce a vector of random numbersv = J( 1, 10, Random SEV( 50, 5 ) );//show resultsShow( x, v );

```

### Random SHASH

**Syntax:** y = Random SHASH( gamma, delta, theta, sigma )

**Beschreibung:** Gibt eine Zufallszahl aus der SHASH-Verteilung (sinh-arcsinh) zurück.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

//produce a single random numberx = Random SHASH( 0, 1, 0, 1 );//produce a vector of random numbersv = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );//show resultsShow( x, v );

```

#### SHASH-Transformation

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

### Random Seed State

**Syntax:** Random Seed State( &lt;seed state&gt; )

**Beschreibung:** Ruft den Zustand des Zufallszahlenstartwerts aus einem Blob-Objekt ab oder stellt ihn in einem Blob-Objekt wieder her.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

r = Random Seed State();Random Seed State( r );

```

### Random Shuffle

**Syntax:** y = Random Shuffle( matrix )

**Beschreibung:** Gibt die Matrix zurück, wobei die Elemente in zufälliger Reihenfolge angeordnet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exA = [1 2 6, 3 5 8];Random Shuffle( exA );

```

### Random Triangular

**Syntax:** y = Random Triangular( a, b, c ); y = Random Triangular( b, c ); y = Random Triangular( b )

**Beschreibung:** Gibt eine Zufallszahl aus einer Dreiecksverteilung mit unterer Grenze a, Modus b und oberer Grenze c zurück. Random Triangular(b,c) ist äquivalent mit Random Triangular(0,b,c). Random Triangular(b) ist äquivalent mit Random Triangular(0,b,1).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Reset( 13579 );x = Random Triangular( 0.8 );Random Reset( 13579 );y = Random Triangular( 0, 0.8, 1 );Show( x, y );

```

### Random Uniform

**Syntax:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Gleichverteilung zwischen min. und max. exklusive zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

//produce a single random numberx = Random Uniform( 1, 10 );//produce a vector of random numbersv = J( 1, 10, Random Uniform( 1, 10 ) );//show resultsShow( x, v );

```

**Beispiel 2**

```jsl

Random Uniform( 1, 10 );

```

### Random Weibull

**Syntax:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Weibull-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random Weibull( 3, 20 );//produce a vector of random numbersv = J( 1, 10, Random Weibull( 3, 20 ) );//show resultsShow( x, v );

```

### Random ZI Negative Binomial

**Syntax:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Beschreibung:** Gibt eine Zufallszahl aus einer zero-inflated negativen Binomialverteilung zurück mit Lageparameter lambda, Skalenparameter sigma und Zero-inflation-Parameter pi.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

exnbpp = 0.3;exnbpn = 20;rnb = Random ZI Negative Binomial( 25, .5, .05 );New Window( "Example: Zero Inflated Negative Binomial",	exnbpy = Graph Box(		Y Scale( 0, 0.075 ),		X Scale( -1, 100 ),		Pen Color( "red" ),		Pen Size( 2 );		For( i = 0, i < 100, i++,			V Line( i, 0, ZI Negative Binomial Probability( i, 25, .5, .05 ) )		);		Pen Color( "blue" );,		Pen Size( 4 ),		V Line( rnb, 0, ZI Negative Binomial Probability( rnb, 25, .5, .05 ) );		Text(			{25, 0.06},			"lambda=",			Round( 25 ),			", sigma=",			Round( .5, 2 ),			", pi=",			Round( .05, 2 )		);		Text(			{25, 0.05},			"x=",			Round( rnb, 2 ),			", Prob=",			Round( ZI Negative Binomial Probability( rnb, 25, .5, .05 ), 4 )		);	),	H List Box(		Button Box( "Generate a Random Zero Inflated Negative Binomial Number",			rnb = Random ZI Negative Binomial( 25, .5, .05 );			exnbpy << reshow;		)	));

```

**Beispiel 2**

```jsl

Random Reset( 19 );dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );Column( 1 ) << set name( "Random ZiNB" );dt << Distribution(	Continuous Distribution(		Column( :Random ZiNB ),		Vertical( 0 ),		Fit ZI Negative Binomial,		CDF Plot( 1 )	));

```

### Random ZI Poisson

**Syntax:** y = Random ZI Poisson Binomial( lambda, pi )

**Beschreibung:** Gibt eine Zufallszahl aus einer zero-inflated Poisson-Verteilung zurück mit Lageparameter lambda und Zero-inflation-Parameter pi.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```jsl

exnbpp = 0.3;exnbpn = 20;rp = Random ZI Poisson( 20, .05 );New Window( "Example: Zero Inflated Poisson",	exnbpy = Graph Box(		Y Scale( 0, 0.1 ),		X Scale( -1, 60 ),		Pen Color( "red" ),		Pen Size( 2 );		For( i = 0, i < 100, i++,			V Line( i, 0, ZI Poisson Probability( i, 20, .05 ) )		);		Pen Color( "blue" );,		Pen Size( 4 ),		V Line( rp, 0, ZI Poisson Probability( rp, 20, .05 ) );		Text( {30, 0.06}, "lambda=", Round( 20 ), ", pi=", Round( .05, 2 ) );		Text(			{30, 0.05},			"x=",			Round( rp, 2 ),			", Prob=",			Round( ZI Poisson Probability( rp, 20, .05 ), 4 )		);	),	H List Box(		Button Box( "Generate a Random Zero Inflated Poisson Number",			rp = Random ZI Poisson( 20, .05 );			exnbpy << reshow;		)	));

```

**Beispiel 2**

```jsl

Random Reset( 19 );dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );Column( 1 ) << set name( "Random ZIP" );dt << Distribution(	Continuous Distribution(		Column( :Random ZIP ),		Vertical( 0 ),		Fit ZI Poisson,		CDF Plot( 1 )	));

```

### Random t

**Syntax:** y = Random t( df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer t-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

//produce a single random numberx = Random t( 2 );//produce a vector of random numbersv = J( 1, 10, Random t( 2 ) );//show resultsShow( x, v );

```

### Resample Freq

**Syntax:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**Beschreibung:** Generiert Häufigkeiten für Stichprobenziehungen mit Zurücklegen, nützlich für Bootstrap-Stichproben. Ohne Argumente generiert die Funktion eine 100%-Bootstrap-Stichprobe. Das Argument rate gibt die Häufigkeit der Stichprobenziehungen an. Wenn das Argument column angegeben wird, ist die gewählte Stichprobengröße rate multipliziert mit der Summe der angegebenen Spalte. Eine negative rate signalisiert, dass fraktionelle Häufigkeiten zulässig sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Freq", numeric, formula( Resample Freq() ) );New Window( "w", theBox = V List Box() );For( i = 1, i <= 30, i++,	Column( "Freq" ) << EvalFormula;	theBox << append(		V List Box( Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) ) )	););newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );theBox << CloseWindow;

```

