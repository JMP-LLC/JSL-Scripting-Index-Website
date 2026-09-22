# Functional Data Explorer Group



## Elementmeldungen

### AICc

**Syntax:** obj &lt;&lt; Model Name( AICc ); scrobj &lt;&lt; AICc

**Beschreibung:** Gibt den AICc als Modellauswahlkriterium für B-Spline-, P-Spline- und Fourier-Basismodelle an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines( AICc ));

```

### ARWLS Save Baselines

**Syntax:** obj &lt;&lt; ARWLS Save Baselines

**JMP Version hinzugefügt:** 19

### ARWLS Save Corrected

**Syntax:** obj &lt;&lt; ARWLS Save Corrected

**JMP Version hinzugefügt:** 19

### Align 0 to 1

**Syntax:** obj &lt;&lt; Data Processing( Align 0 to 1 )

**Beschreibung:** Richtet die Ausgabefunktionen (Y) über den Bereich des Eingangs (X) so aus, der sie zwischen 0 und 1 liegen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align 0 to 1 ));

```

### Align Maximum

**Syntax:** obj &lt;&lt; Data Processing( Align Maximum )

**Beschreibung:** Richtet die Outputfunktionen (Y) mithilfe des beobachteten maximalen Inputwerts (X) aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Maximum ));

```

### Align Minimum

**Syntax:** obj &lt;&lt; Data Processing( Align Minimum )

**Beschreibung:** Richtet die Outputfunktionen (Y) mithilfe des beobachteten minimalen Inputwerts (X) aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Minimum ));

```

### Align by Function

**Syntax:** obj &lt;&lt; Data Processing( Align by Function )

**Beschreibung:** Richtet die Ausgabefunktionen (Y) so aus, dass der Bereich jeder Funktion über dem Bereich des Input (X) liegt.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align by Function ));

```

### B Splines

**Syntax:** obj &lt;&lt; B Splines

**Beschreibung:** Passt ein B-Spline-Modell an die Daten an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines);

```

### B Splines Model Controls

**Syntax:** obj &lt;&lt; B Splines Model Controls

**Beschreibung:** Öffnet den Bereich mit den Bedienelementen für das Modell vor der Anpassung eines B-Spline-Modells. Sie können die Anzahl der Knoten und den Spline-Grad angeben.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines Model Controls);

```

### BIC

**Syntax:** obj &lt;&lt; Model Name( BIC ); scrobj &lt;&lt; BIC

**Beschreibung:** Gibt den BIC als Modellauswahlkriterium für B-Spline-, P-Spline- und Fourier-Basismodelle an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines( BIC ));

```

### Baseline Correction

**Syntax:** obj &lt;&lt; Baseline Correction

**JMP Version hinzugefügt:** 19

### Center

**Syntax:** obj &lt;&lt; Data Processing( Center )

**Beschreibung:** Zentriert den Output

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Center ));

```

### Custom Save Corrected

**Syntax:** obj &lt;&lt; Custom Save Corrected

**JMP Version hinzugefügt:** 19

### Direct Functional PCA

**Syntax:** obj &lt;&lt; Direct Functional PCA

**Beschreibung:** Führt funktionale PCA direkt durch, ohne ein Basisfunktionsmodell anzupassen. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	Direct Functional PCA);

```

### Dynamic Time Warping

**Syntax:** obj &lt;&lt; Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Beschreibung:** Richtet die Ausgabefunktionen mittels dynamischer Zeitnormierung (DTW) aus. DTW ist eine Technik zum Ausrichten von Funktionen, die eine optimale Normierung findet, um zwei oder mehr Funktionen aneinander auszurichten.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Dynamic Time Warping( Reference( 1 ) ) ));

```

### Exp

**Syntax:** obj &lt;&lt; Data Processing( Exp )

**Beschreibung:** Transformiert die Daten durch Berechnen der Exponentialfunktion des Outputs.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Exp ));

```

### Filter X

**Syntax:** obj &lt;&lt; Data Processing( Filter X( [lower, upper] ) )

**Beschreibung:** Entfernt Eingabewerte (X), die außerhalb des angegebenen Intervalls liegen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter X( [5, 50] ) );

```

### Filter Y

**Syntax:** obj &lt;&lt; Data Processing( Filter Y( [lower, upper] ) )

**Beschreibung:** Entfernt Ausgabewerte (Y) außerhalb des angegebenen Intervalls.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter Y( [., 100] ) );

```

### Fourier Basis

**Syntax:** obj &lt;&lt; Fourier Basis

**Beschreibung:** Passt ein B-Spline-Modell mit Bestrafung an die Daten an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis);

```

### Fourier Basis Model Controls

**Syntax:** obj &lt;&lt; Fourier Basis Model Controls

**Beschreibung:** Öffnet den Bereich mit den Bedienelementen für das Modell vor der Anpassung eines Fourier-Basismodells. Sie können die Anzahl von Fourier-Paaren und die Periode angeben.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis Model Controls);

```

### GCV

**Syntax:** obj &lt;&lt; Model Name( GCV ); scrobj &lt;&lt; GCV

**Beschreibung:** Gibt die verallgemeinerte Kreuzvalidierung (GCV) als Modellauswahlkriterium für B-Spline-, P-Spline- und Fourier-Basismodelle an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( GCV ));

```

### Load Targets

**Syntax:** obj &lt;&lt; Data Processing( Load Targets( "level" ) )

**Beschreibung:** Gibt eine Zielfunktion an.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :ID ),	Data Processing( Load Targets( "Bristol, TN" ) ));

```

### Log

**Syntax:** obj &lt;&lt; Data Processing( Log )

**Beschreibung:** Transformiert die Daten durch Berechnen des natürlichen Logarithmus des Outputs.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Air ),	X( :Time ),	ID( :BatchID ),	Data Processing( Log ));

```

### Log X

**Syntax:** obj &lt;&lt; Data Processing( Log X )

**Beschreibung:** Transformiert die Daten durch Berechnen des natürlichen Logarithmus des Input.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Air ),	X( :Time ),	ID( :BatchID ),	Data Processing( Log X ));

```

### Logit

**Syntax:** obj &lt;&lt; Data Processing( Logit )

**Beschreibung:** Transformiert die Daten durch Berechnen der Logit-Funktion des Outputs. Die Output-Werte müssen zwischen 0 und 1 liegen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ),	Data Processing( Logit ));

```

### MSC

**Syntax:** obj &lt;&lt; Data Processing( MSC )

**Beschreibung:** Wendet die Methode der multiplikativen Streuungskorrektur auf die Daten an. Diese Methode passt eine einfache lineare Regression für jede einzelne Funktion (Niveau der ID-Variablen) an, wobei die Zielgröße die Outputwerte der Funktion und der Regressor die Outputwerte für die Mittelwertfunktion sind.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( MSC ));

```

### Multivariate Curve Resolution

**Syntax:** obj &lt;&lt; Multivariate Curve Resolution

**Beschreibung:** Führt multivariate Kurvenauflösung (MCR) durch. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Negation

**Syntax:** obj &lt;&lt; Data Processing( Negation )

**Beschreibung:** Transformiert die Daten durch Multiplizieren des Outputs mit -1.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Negation ));

```

### Nonnegative SVD

**Syntax:** obj &lt;&lt; Nonnegative SVD

**Beschreibung:** Führt eine nicht-negative Singulärwertzerlegung (SWZ) an der gestapelten Funktionsmatrix aus. Eine nicht-negative SWZ beschränkt die Matrixzerlegung so, dass die Scores und Ladungen größer oder gleich Null sind.

**JMP Version hinzugefügt:** 18

### P Splines

**Syntax:** obj &lt;&lt; P Splines

**Beschreibung:** Passt ein B-Spline-Modell mit Bestrafung an die Daten an.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines);

```

### P Splines Model Controls

**Syntax:** obj &lt;&lt; P Splines Model Controls

**Beschreibung:** Öffnet den Bereich mit den Bedienelementen für das Modell vor der Anpassung eines P-Spline-Modells. Sie können die Anzahl der Knoten und den Spline-Grad angeben.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines Model Controls);

```

### Parametric Save Baselines

**Syntax:** obj &lt;&lt; Parametric Save Baselines

**JMP Version hinzugefügt:** 19

### Parametric Save Corrected

**Syntax:** obj &lt;&lt; Parametric Save Corrected

**JMP Version hinzugefügt:** 19

### Peak Finding

**Syntax:** obj &lt;&lt; Peak Finding

**Beschreibung:** Findet und fasst Peaks entweder direkt oder mit einem angegebenen parametrischen Modell zusammen.

**JMP Version hinzugefügt:** 17

### Penalized Nonnegative SVD

**Syntax:** obj &lt;&lt; Penalized Nonnegative SVD

**Beschreibung:** Führt nicht-negative SWZ mit Bestrafung durch, um funktionale PCA zu konstruieren. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Penalized SVD

**Syntax:** obj &lt;&lt; Penalized SVD

**Beschreibung:** Führt SWZ mit Bestrafung durch, um funktionale PCA zu konstruieren. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Plot Mean Function

**Syntax:** obj &lt;&lt; Plot Mean Function( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der Mittelwertfunktion im Zusammenfassungsbericht an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Syntax:** obj &lt;&lt; Plot Median Function( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der Medianfunktion im Zusammenfassungsbericht an oder blendet es aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer(	Y( :Temperature ),	X( :Month ),	ID( :Year ),	Plot Median Function( 1 ));

```

### Plot Standard Deviation Function

**Syntax:** obj &lt;&lt; Plot Standard Deviation Function( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der Standardabweichungsfunktion im Zusammenfassungsbericht an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Standard Deviation Function( 0 );

```

### Range 0 to 1

**Syntax:** obj &lt;&lt; Data Processing( Range 0 to 1 )

**Beschreibung:** Skaliert den Output auf den Bereich von 0 bis 1.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ));

```

### Reduce

**Syntax:** obj &lt;&lt; Data Processing( Reduce( Grid( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Bin( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Thin( number ) ) )

**Beschreibung:** Reduziert die Daten über den Input (X) mit einer aus einer Auswahl von Techniken.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Reduce( Thin( 2 ) ) );

```

### Remove Last Step

**Syntax:** obj &lt;&lt; Remove Last Step

**JMP Version hinzugefügt:** 14

### Remove Selected

**Syntax:** obj &lt;&lt; Data Processing( Remove Selected )

**Beschreibung:** Entfernt die ausgewählten Werte.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION == "USW00024024" );Wait( 1 );obj << Data Processing( Remove Selected );

```

### Remove Unselected

**Syntax:** obj &lt;&lt; Data Processing( Remove Unselected )

**Beschreibung:** Entfernt die nicht ausgewählten Werte.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION != "USW00024024" );Wait( 1 );obj << Data Processing( Remove Unselected );

```

### Remove Value

**Syntax:** obj &lt;&lt; Data Processing( Remove Value( number ) )

**Beschreibung:** Entfernt Beobachtungen mit dem angegebenen Zielgrößenwert.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );Wait( 1 );obj << Data Processing( Remove Value( 30 ) );

```

### Remove Zeros

**Syntax:** obj &lt;&lt; Data Processing( Remove Zeros )

**Beschreibung:** Entfernt Beobachtungen mit einem Zielgrößenwert von 0.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Remove Zeros ));

```

### Row Alignment

**Syntax:** obj &lt;&lt; Data Processing( Row Alignment )

**Beschreibung:** Ersetzt die Inputwerte mit der Zeilennummer.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Row Alignment ));

```

### SNIP Save Baselines

**Syntax:** obj &lt;&lt; SNIP Save Baselines

**JMP Version hinzugefügt:** 19

### SNIP Save Corrected

**Syntax:** obj &lt;&lt; SNIP Save Corrected

**JMP Version hinzugefügt:** 19

### SNV

**Syntax:** obj &lt;&lt; Data Processing( SNV )

**Beschreibung:** Wendet die Methode „Standard-Normalfunktion“ auf die Daten an. Diese Methode standardisiert den Output durch Zentrieren und Skalieren jeder einzelnen Funktion (Niveau der ID-Variablen), so dass sie einen Mittelwert von 0 und eine Standardabweichung von 1 hat.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( SNV ));

```

### Save Data

**Syntax:** obj &lt;&lt; Save Data

**Beschreibung:** Speichert die verarbeiteten Daten in einer separaten Datentabelle im gestapelten Format.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol, :Temp, :Molasses Feed ),	X( :Time ),	ID( :BatchID ),	B Splines);obj << Save Data;

```

### Save Summaries

**Syntax:** obj &lt;&lt; Save Summaries

**Beschreibung:** Speichert die statistischen Kenngrößen des Modells jeder Funktion (ID) für jede Zielgröße (Y).

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol, :Temp, :Molasses Feed ),	X( :Time ),	ID( :BatchID ),	B Splines);obj << Save Summaries;

```

### Savitzky-Golay Filter

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay Filter"n )

**Beschreibung:** Wendet den Savitzky-Golay-Filter auf jede Funktion an. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Filter"n ));

```

### Savitzky-Golay First Derivative

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay First Derivative"n )

**Beschreibung:** Gibt die erste Ableitung vom Savitzky-Golay-Filter zurück. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay First Derivative"n ));

```

### Savitzky-Golay Second Derivative

**Syntax:** obj &lt;&lt; Data Processing( "Savitzky-Golay Second Derivative"n )

**Beschreibung:** Gibt die zweite Ableitung vom Savitzky-Golay-Filter zurück. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Second Derivative"n ));

```

### Square

**Syntax:** obj &lt;&lt; Data Processing( Square )

**Beschreibung:** Transformiert die Daten durch Berechnen des Quadrats des Outputs.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square ));

```

### Square Root

**Syntax:** obj &lt;&lt; Data Processing( Square Root )

**Beschreibung:** Transformiert die Daten durch Berechnen der Quadratwurzel des Outputs. Die Output-Werte dürfen nicht-negativ sein.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square Root ));

```

### Standardize

**Syntax:** obj &lt;&lt; Data Processing( Standardize )

**Beschreibung:** Standardisiert den Output durch Zentrieren und Skalieren.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Standardize ));

```

### Unconstrained MCR

**Syntax:** obj &lt;&lt; Unconstrained MCR

**Beschreibung:** Führt unbeschränkte multivariate Kurvenauflösung (MCR) durch. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichen Abständen haben.

**JMP Version hinzugefügt:** 18

### Wavelets

**Syntax:** obj &lt;&lt; Wavelets

**Beschreibung:** Passt mehrere Wavelets-Modelle an die Daten an. Bei dieser Option müssen die Eingabedaten ein Raster mit gleichmäßigen Abständen haben. Wenn die Daten nicht gleiche Abstände haben, wird vor Beginn der Wavelet-Routine automatisch ein Raster erstellt.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

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

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

t = obj << Get Timing;Show( t );

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

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

obj << Save Script to Script Window;

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

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Zugehörige Konstruktoren

### Functional Data Explorer Group

**Syntax:** Functional Data Explorer Group( model1, model2, ... ) Functional Data Explorer Group( model1; model2; ... )

**Beschreibung:** Gruppiert Modelle des funktionalen Datenexplorers für mehrere Y-Variablen im gestapelten Datenformat.

