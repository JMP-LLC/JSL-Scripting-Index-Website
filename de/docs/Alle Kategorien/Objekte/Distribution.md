# Distribution



## Elementmeldungen

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**Syntax:** obj << Arrange in Rows( number )

**Beschreibung:** Gibt die Anzahl von Verteilungsberichten an, die im Fenster nebeneinander angezeigt werden sollen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << ArrangeInRows( 3 );

```

### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Beschreibung:** Verschiebt die Achsen des Häufigkeiten-, Wahrscheinlichkeits- und Normal-Quantildiagramms auf die linke Seite eines horizontalen Graphen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

### CDF Plot

**Syntax:** obj << CDF Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der empirischen kumulierten Verteilungsfunktion an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**Syntax:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Beschreibung:** Führt eine Prozessfähigkeitsanalyse mit vorgegebener unterer Spezifikationsgrenze (USG), Ziel und oberer Spezifikationsgrenze (OSG) aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Confidence Interval

**Syntax:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**Beschreibung:** Berechnet die angegebenen Konfidenzintervalle um den Mittelwert und die Standardabweichung. Wenn Sie Sigma angeben, wird der angegebene Wert verwendet, um das Konfidenzintervall um den Mittelwert zu berechnen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Beschreibung:** Zeigt die Zählachse für das Histogramm an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**Syntax:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Beschreibung:** Erstellt einen Bericht der Quantilrangschätzer und einen Bericht der Quantilschätzer der geglätteten empirischen Likelihoood für die angegebenen Quantile. Verwendet den Anteil als das Konfidenzniveau für Konfidenzintervalle in beiden Berichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**Syntax:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Beschreibung:** Richtet die im Bericht „Übersichtsstatistik“ angezeigten statistischen Kenngrößen benutzerspezifisch ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Dichteachse für die Dichtekurve ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Fit All

**Syntax:** obj << Fit All

**Beschreibung:** Vergleicht alle möglichen Verteilungen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**Syntax:** obj << Fit Beta

**Beschreibung:** Passt eine Beta-Verteilung mit zwei Parametern an Daten zwischen 0 und 1 (nicht einschließlich) an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**Syntax:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**Beschreibung:** Passt eine Beta-Binomialverteilung an, wenn die angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengrößen enthält, vorgegeben ist. Diese Verteilung ist eine flexiblere Version der Binomialverteilung.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**Syntax:** obj << Fit Binomial( Sample size( n | column ) )

**Beschreibung:** Passt eine Binomialverteilung an, wenn eine angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengrößen enthält, vorgegeben ist. Diese Verteilung modelliert die Gesamtanzahl der Erfolge in n unabhängigen Versuchen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**Syntax:** obj << Fit Cauchy

**Beschreibung:** Passt eine Cauchy-Verteilung an die Daten an. Die Cauchy-Verteilung ist robust gegenüber Ausreißern und ist äquivalent zu einer t-Verteilung mit einem Freiheitsgrad.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**Syntax:** obj << Fit ExGaussian

**Beschreibung:** Passt eine exponentiell modifizierte Gauß-Verteilung an die Daten an.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**Syntax:** obj << Fit Exponential

**Beschreibung:** Passt eine Exponentialverteilung an nicht-negative Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**Syntax:** obj << Fit Gamma

**Beschreibung:** Passt eine Gamma-Verteilung mit zwei Parametern an positive Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**Syntax:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**Beschreibung:** Feld mit Handles für angepasste Verteilungen. Auf diese Weise können Sie Befehle an spezifische Verteilungen, die angepasst wurden, senden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**Syntax:** obj << Fit Johnson

**Beschreibung:** Passt eine Johnson-Verteilung an die Daten an. Die angemessenste der drei Typen von Johnson-Verteilungen (Su, Sb und Sl) wird basierend auf den Quantilen gewählt.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**Syntax:** obj << Fit Largest Extreme Value

**Beschreibung:** Passt eine Verteilung des größten Extremwerts an die Daten an.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**Syntax:** obj << Fit Lognormal

**Beschreibung:** Passt eine Lognormal-Verteilung an positive Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**Syntax:** obj << Fit Negative Binomial

**Beschreibung:** Passt eine negative Binomialverteilung an die Daten an. Diese Verteilung ist äquivalent zur Gamma-Poisson-Verteilung.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**Syntax:** obj << Fit Normal

**Beschreibung:** Passt eine Normalverteilung an die Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**Syntax:** obj << Fit Normal 2 Mixture

**Beschreibung:** Passt eine Mischung aus zwei Normalverteilungen an. Mit dieser Verteilung können bimodale Daten angepasst werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**Syntax:** obj << Fit Normal 3 Mixture

**Beschreibung:** Passt eine Mischung aus drei Normalverteilungen an. Mit dieser Verteilung können multimodale Daten angepasst werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**Syntax:** obj << Fit Poisson

**Beschreibung:** Passt eine Poisson-Verteilung an die Daten an. Diese Verteilung ist eine populäre Wahl bei Zähldaten. Der angepasste Mittelwert der Poisson-Verteilung entspricht der Varianz.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**Syntax:** obj << Fit Shash

**Beschreibung:** Passt eine SinH-ArcsinH (SHASH)-Verteilung an die Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**Syntax:** obj << Fit Smallest Extreme Value

**Beschreibung:** Passt eine Verteilung des kleinsten Extremwerts an die Daten an.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**Syntax:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**Beschreibung:** Passt eine glatte Kurve an die Daten durch nichtparametrische Dichteschätzung an. Sie können die Glättung durch Angabe der Bandbreite festlegen.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**Syntax:** obj << Fit Student&apos;s t

**Beschreibung:** Passt eine Student-t-Verteilung an die Daten an. Diese Verteilung ist eine robuste Option, die den Raum zwischen einer Normalverteilung und einer Cauchy-Verteilung abbildet.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**Syntax:** obj << Fit Weibull

**Beschreibung:** Passt eine Weibull-Verteilung mit zwei Parametern an positive Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**Syntax:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**Beschreibung:** Passt eine zero-inflated Beta-Binomialverteilung an, wenn die angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengröße enthält, vorgegeben ist. Diese Verteilung modelliert die Gesamtanzahl der Erfolge in n unabhängigen Versuchen, bei denen mehr Nullen beobachtet werden, als für die Beta-Binomialverteilung zu erwarten wäre.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**Syntax:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**Beschreibung:** Passt eine zero-inflated Binomialverteilung an, wenn die angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengröße enthält, vorgegeben ist. Diese Verteilung modelliert die Gesamtanzahl der Erfolge in n unabhängigen Versuchen, bei denen mehr Nullen beobachtet werden, als für die Binomialverteilung zu erwarten wäre.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**Syntax:** obj << Fit ZI Negative Binomial

**Beschreibung:** Passt eine zero-inflated negative Binomialverteilung an die Daten an, die Nullwerte enthalten.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**Syntax:** obj << Fit ZI Poisson

**Beschreibung:** Passt eine zero-inflated Poisson-Verteilung an die Daten an, die Nullwerte enthalten.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**Syntax:** obj << Fit ZI SHASH

**Beschreibung:** Passt eine SHASH-Verteilung mit einer Punkt-Masse bei 0 an die Daten an.

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Beschreibung:** Zeigt den Häufigkeitenbericht an oder blendet ihn aus, der die Häufigkeiten und Wahrscheinlichkeiten für jede Stufe auflistet. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Beschreibung:** Zeigt das Histogramm an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Beschreibung:** Ändert die Farbe der Histogrammbalken.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Beschreibung:** Ändert die Orientierung des Histogramms und der Berichte in horizontal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Beschreibung:** Zeigt ein Mosaikdiagramm für jede nominale oder ordinale Zielgrößenvariable an oder blendet es aus. Ein Mosaikdiagramm ist ein gestapeltes Balkendiagramm, wobei jedes Segment proportional zum Häufigkeitswert seiner Gruppe ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**Syntax:** obj << Normal Quantile Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm an oder blendet es aus, das verwendet werden kann, um zu visualisieren, bis zu welchem Ausmaß eine Variable normalverteilt ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Order By

**Syntax:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Beschreibung:** Ordnet das Histogramm, Mosaikdiagramm und den Häufigkeitenbericht in aufsteigender oder absteigender Reihenfolge nach der Häufigkeit. Sie können auch zur Standardordnung zurückkehren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**Syntax:** obj << Outlier Box Plot( state=0|1 )

**Beschreibung:** Zeigt einen Box-Plot an oder blendet ihn aus, der es Ihnen ermöglicht, die Verteilung zu sehen und mögliche Ausreißer zu identifizieren. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**Syntax:** obj << Outlier Box Plot Row Cutoff( number )

**Beschreibung:** Legt die Startoption für die maximale Anzahl von Zeilen fest, bevor der Ausreißer-Box-Plot zu Beginn ausgeblendet wird. Standardmäßig „100000“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**Syntax:** obj << PpK Capability Labeling( state=0|1 )

**Beschreibung:** Wechselt in der Prozessfähigkeitsausgabe die Beschriftung der Gesamt-Prozessfähigkeitsindizes, ändert das Präfix Cp in Pp. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**Beschreibung:** Berechnet die Vorhersageintervalle für eine einzelne künftige Beobachtung und den Mittelwert einer angegebenen Zahl (N Stichproben) für künftige Beobachtungen. Sie können einseitige oder zweiseitige Vorhersageintervalle erstellen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Achse mit Wahrscheinlichkeiten oder Anteilen ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**Syntax:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**Beschreibung:** Berechnet eine Prozessfähigkeitsanalyse mit vorgegebener unterer Spezifikationsgrenze (USG), Ziel und oberer Spezifikationsgrenze (OSG). Der Prozessfähigkeitsbericht umfasst ein Histogramm, Zusammenfassungsdetails, Prozessfähigkeitsindizes und Nichtübereinstimmungskennzahlen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**Syntax:** obj << Quantile Box Plot( state=0|1 )

**Beschreibung:** Zeigt einen Box-Plot mit den folgenden Quantilen an oder blendet ihn aus: 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99% und 100%.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**Syntax:** obj << Quantiles( state=0|1 )

**Beschreibung:** Zeigt den Quantile-Bericht an oder blendet ihn aus, der die Werte ausgewählter Quantile auflistet. Standardmäßig werden die Quantile 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99,5%, und 100% aufgelistet. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**Syntax:** obj << Save( "Klassennummern"|"Klassenmitten"|"Ränge"|"Gemittelte Ränge"|"Wahrsch.-Scores"|"Normal-Quantile"|"Standardisiert"|"Zentriert"|"Robust standardisiert"|"Robust zentriert"|"Spez.-Grenzen"|"Ins Log schreiben" )

**Beschreibung:** Speichert die angegebene beobachtungsspezifische statistische Kenngröße in einer neuen Spalte in der Datentabelle. Es gibt auch eine Option zum Drucken der Skriptbefehle, die den aktuellen Bericht im Logfenster generieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Separate Bars

**Syntax:** obj << Separate Bars( state=0|1 )

**Beschreibung:** Fügt eine Lücke zwischen den Balken des Histogramms ein. Diese Option ist nur bei kategorialen Variablen verfügbar.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Set Bin Width

**Syntax:** obj << Set Bin Width( number )

**Beschreibung:** Legt die Klassenbreite des Histogramms mit der Achse als Ursprung fest. Die Option ist nur bei stetigen Variablen verfügbar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**Syntax:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**Beschreibung:** Legt das im Quantile-Bericht verwendete Inkrement bis zum angegebenen Bruchteil fest oder wechselt zurück zu den Standardquantilen. Diese Option ist nur bei stetigen Variablen verfügbar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**Syntax:** obj << Shadowgram( state=0|1 )

**Beschreibung:** Zeigt statt eines Histogramms ein glattes Schattendiagramm an. Ein Schattendiagramm überlagert Histogramme mit unterschiedlichen Klassenbreiten. Diese Option ist nur bei stetigen Variablen verfügbar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Beschreibung:** Zeigt die Balkenhäufigkeiten im Histogramm an oder blendet sie aus, die die Häufigkeit der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Beschreibung:** Zeigt die Balkenprozentsätze im Histogramm an oder blendet sie aus, die den Prozentsatz der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Stack

**Syntax:** obj << Stack( state=0|1 )

**Beschreibung:** Ändert die Orientierung des Histogramms und Berichts in horizontal und stapelt die einzelnen Verteilungsberichte vertikal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Stack( 1 );

```

### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Beschreibung:** Zeigt Standardfehlerbalken an jedem der Histogrammbalken an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**Syntax:** obj << Stem and Leaf( state=0|1 )

**Beschreibung:** Zeigt ein Stamm-Blatt-Diagramm an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**Syntax:** obj << Summary Statistics( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Übersichtsstatistik“ an oder blendet ihn aus, in dem der Mittelwert, die Standardabweichung und andere statistische Kenngrößen für stetige Variablen aufgelistet werden. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Test Equivalence

**Syntax:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**Beschreibung:** Testet anhand von zwei einseitigen Tests (TOST), ob der Stichprobenmittelwert äquivalent zu einem hypothetischen Wert (Ziel) ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**Syntax:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**Beschreibung:** Führt einen Ein-Stichproben-Test für den Mittelwert durch. Wenn Sie einen Wert für die Standardabweichung (Sigma) angeben, wird ein z-Test durchgeführt. Andernfalls wird die Standardabweichung der Stichprobe verwendet, um einen t-Test durchzuführen. Es gibt außerdem die Option, einen zusätzlichen nichtparametrischen Wilcoxon-Vorzeichen-Rang-Test durchzuführen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**Syntax:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Beschreibung:** Testet die geschätzten Wahrscheinlichkeiten der Stufen einer kategorialen Variable gegen die angegebenen hypothetischen Wahrscheinlichkeiten (p1, p2, p3 usw). Bei Variablen mit zwei Stufen verwenden Sie die Option Test zum Angeben des Vorzeichens für die Alternativhypothese des Tests. Bei Variablen mit mehr als zwei Stufen verwenden Sie die Option Fix, um anzugeben, wie fehlende hypothetische Werte verarbeitet werden. Beachten Sie, dass f ein optionales Argument ist, das angibt, dass die vorhergehende Stufe als fixiert behandelt wird.

**Beispiel mit mehreren Stufen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Zwei Stufen, einseitiges Beispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Zwei Stufen, zweiseitiges Beispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

### Test Std Dev

**Syntax:** obj << Test Std Dev( number )

**Beschreibung:** Führt einen Chi-Quadrat-Test auf die Standardabweichung durch, wenn der hypothetische Wert (Zahl) vorgegeben ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Tolerance Interval

**Syntax:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**Beschreibung:** Berechnet ein Intervall, das mindestens einen angegebenen Anteil der Population enthält. Es wird eine Standard-Normalverteilung angenommen. Sie können auch andere nicht-normale Verteilungen angeben, einschließlich Lognormal, Gamma, exponentiell, Weibull, kleinster Extremwert, größter Extremwert und nichtparametrische Verteilungen. Es gibt auch Optionen für die Berechnung einseitiger Intervalle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Uniform Scaling

**Syntax:** obj << Uniform Scaling( state=0|1 )

**Beschreibung:** Legt für alle Histogrammachsen das gleiche Minimum, Maximum und Inkrement fest, damit Verteilungen leicht verglichen werden können.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Uniform Scaling( 1 );

```

### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Beschreibung:** Ändert die Orientierung der Histogramme, Box-Plots und Quantildiagramme in vertikal. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

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

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
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

### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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

**Syntax:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntax:** obj = Distribution(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );

```

### Column

**Syntax:** obj = Distribution(...<Column( column(s) )>...)

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**Syntax:** obj = Distribution(...Columns( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die kategorialen oder stetigen Spalten für die Analyse an.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**Syntax:** obj = Distribution(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Freq( _freqcol ) );

```

### Weight

**Syntax:** obj = Distribution(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Weight( _weightcol ) );

```

### Y

**Syntax:** obj = Distribution(...Y( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die kategorialen oder stetigen Spalten für die Analyse an.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

## Zugehörige Konstruktoren

### Distribution

**Syntax:** Distribution( Column() )

**Beschreibung:** Zeigt die Verteilung und univariate statistische Kenngrößen für jede Variable an. Ergebnisse und Optionen sind vom Modellierungstyp jeder Variable abhängig. Einige Optionen sind u.a. Histogramme, Box-Plots, Quantildiagramme, Verteilungen anpassen und Prozessfähigkeitsanalysen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

## Capability Analysis

### Elementmeldungen

#### Capability Animation

**Syntax:** obj << Capability Animation

**Beschreibung:** Öffnet ein separates Fenster, in dem eine Animation einer Normalverteilung angezeigt wird, bei der Parameter und Prozessfähigkeitskenngrößen aus dem aktuellen Beispiel verwendet werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

#### Z Bench

**Syntax:** obj << Z Bench( state=0|1 )

**Beschreibung:** Blendet Z-Kenngrößen ein oder aus, die von AIAG als die Anzahl von Standardabweichungen vom Prozessmittelwert zu einer Spezifikationsgrenze beschrieben werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Continuous Distribution

### Elementmeldungen

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Beschreibung:** Verschiebt die Achsen des Häufigkeiten-, Wahrscheinlichkeits- und Normal-Quantildiagramms auf die linke Seite eines horizontalen Graphen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

#### CDF Plot

**Syntax:** obj << CDF Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der empirischen kumulierten Verteilungsfunktion an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

#### Capability Analysis

**Syntax:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Beschreibung:** Führt eine Prozessfähigkeitsanalyse mit vorgegebener unterer Spezifikationsgrenze (USG), Ziel und oberer Spezifikationsgrenze (OSG) aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**Syntax:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**Beschreibung:** Berechnet die angegebenen Konfidenzintervalle um den Mittelwert und die Standardabweichung. Wenn Sie Sigma angeben, wird der angegebene Wert verwendet, um das Konfidenzintervall um den Mittelwert zu berechnen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Beschreibung:** Zeigt die Zählachse für das Histogramm an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

#### Custom Quantiles

**Syntax:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Beschreibung:** Erstellt einen Bericht der Quantilrangschätzer und einen Bericht der Quantilschätzer der geglätteten empirischen Likelihoood für die angegebenen Quantile. Verwendet den Anteil als das Konfidenzniveau für Konfidenzintervalle in beiden Berichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**Syntax:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Beschreibung:** Richtet die im Bericht „Übersichtsstatistik“ angezeigten statistischen Kenngrößen benutzerspezifisch ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Dichteachse für die Dichtekurve ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

#### Fit All

**Syntax:** obj << Fit All

**Beschreibung:** Vergleicht alle möglichen Verteilungen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

#### Fit Beta

**Syntax:** obj << Fit Beta

**Beschreibung:** Passt eine Beta-Verteilung mit zwei Parametern an Daten zwischen 0 und 1 (nicht einschließlich) an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

#### Fit Beta Binomial

**Syntax:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**Beschreibung:** Passt eine Beta-Binomialverteilung an, wenn die angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengrößen enthält, vorgegeben ist. Diese Verteilung ist eine flexiblere Version der Binomialverteilung.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**Syntax:** obj << Fit Binomial( Sample size( n | column ) )

**Beschreibung:** Passt eine Binomialverteilung an, wenn eine angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengrößen enthält, vorgegeben ist. Diese Verteilung modelliert die Gesamtanzahl der Erfolge in n unabhängigen Versuchen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**Syntax:** obj << Fit Cauchy

**Beschreibung:** Passt eine Cauchy-Verteilung an die Daten an. Die Cauchy-Verteilung ist robust gegenüber Ausreißern und ist äquivalent zu einer t-Verteilung mit einem Freiheitsgrad.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**Syntax:** obj << Fit ExGaussian

**Beschreibung:** Passt eine exponentiell modifizierte Gauß-Verteilung an die Daten an.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

#### Fit Exponential

**Syntax:** obj << Fit Exponential

**Beschreibung:** Passt eine Exponentialverteilung an nicht-negative Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

#### Fit Gamma

**Syntax:** obj << Fit Gamma

**Beschreibung:** Passt eine Gamma-Verteilung mit zwei Parametern an positive Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

#### Fit Handle

**Syntax:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**Beschreibung:** Feld mit Handles für angepasste Verteilungen. Auf diese Weise können Sie Befehle an spezifische Verteilungen, die angepasst wurden, senden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**Syntax:** obj << Fit Johnson

**Beschreibung:** Passt eine Johnson-Verteilung an die Daten an. Die angemessenste der drei Typen von Johnson-Verteilungen (Su, Sb und Sl) wird basierend auf den Quantilen gewählt.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**Syntax:** obj << Fit Largest Extreme Value

**Beschreibung:** Passt eine Verteilung des größten Extremwerts an die Daten an.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**Syntax:** obj << Fit Lognormal

**Beschreibung:** Passt eine Lognormal-Verteilung an positive Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

#### Fit Negative Binomial

**Syntax:** obj << Fit Negative Binomial

**Beschreibung:** Passt eine negative Binomialverteilung an die Daten an. Diese Verteilung ist äquivalent zur Gamma-Poisson-Verteilung.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

#### Fit Normal

**Syntax:** obj << Fit Normal

**Beschreibung:** Passt eine Normalverteilung an die Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**Syntax:** obj << Fit Normal 2 Mixture

**Beschreibung:** Passt eine Mischung aus zwei Normalverteilungen an. Mit dieser Verteilung können bimodale Daten angepasst werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**Syntax:** obj << Fit Normal 3 Mixture

**Beschreibung:** Passt eine Mischung aus drei Normalverteilungen an. Mit dieser Verteilung können multimodale Daten angepasst werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**Syntax:** obj << Fit Poisson

**Beschreibung:** Passt eine Poisson-Verteilung an die Daten an. Diese Verteilung ist eine populäre Wahl bei Zähldaten. Der angepasste Mittelwert der Poisson-Verteilung entspricht der Varianz.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

#### Fit SHASH

**Syntax:** obj << Fit Shash

**Beschreibung:** Passt eine SinH-ArcsinH (SHASH)-Verteilung an die Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**Syntax:** obj << Fit Smallest Extreme Value

**Beschreibung:** Passt eine Verteilung des kleinsten Extremwerts an die Daten an.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**Syntax:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**Beschreibung:** Passt eine glatte Kurve an die Daten durch nichtparametrische Dichteschätzung an. Sie können die Glättung durch Angabe der Bandbreite festlegen.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**Syntax:** obj << Fit Student&apos;s t

**Beschreibung:** Passt eine Student-t-Verteilung an die Daten an. Diese Verteilung ist eine robuste Option, die den Raum zwischen einer Normalverteilung und einer Cauchy-Verteilung abbildet.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**Syntax:** obj << Fit Weibull

**Beschreibung:** Passt eine Weibull-Verteilung mit zwei Parametern an positive Daten an.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**Syntax:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**Beschreibung:** Passt eine zero-inflated Beta-Binomialverteilung an, wenn die angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengröße enthält, vorgegeben ist. Diese Verteilung modelliert die Gesamtanzahl der Erfolge in n unabhängigen Versuchen, bei denen mehr Nullen beobachtet werden, als für die Beta-Binomialverteilung zu erwarten wäre.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**Syntax:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**Beschreibung:** Passt eine zero-inflated Binomialverteilung an, wenn die angegebene konstante Stichprobengröße oder eine Spalte, die die Stichprobengröße enthält, vorgegeben ist. Diese Verteilung modelliert die Gesamtanzahl der Erfolge in n unabhängigen Versuchen, bei denen mehr Nullen beobachtet werden, als für die Binomialverteilung zu erwarten wäre.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**Syntax:** obj << Fit ZI Negative Binomial

**Beschreibung:** Passt eine zero-inflated negative Binomialverteilung an die Daten an, die Nullwerte enthalten.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**Syntax:** obj << Fit ZI Poisson

**Beschreibung:** Passt eine zero-inflated Poisson-Verteilung an die Daten an, die Nullwerte enthalten.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**Syntax:** obj << Fit ZI SHASH

**Beschreibung:** Passt eine SHASH-Verteilung mit einer Punkt-Masse bei 0 an die Daten an.

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Beschreibung:** Zeigt das Histogramm an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Beschreibung:** Ändert die Farbe der Histogrammbalken.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Beschreibung:** Ändert die Orientierung des Histogramms und der Berichte in horizontal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**Syntax:** obj << Normal Quantile Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm an oder blendet es aus, das verwendet werden kann, um zu visualisieren, bis zu welchem Ausmaß eine Variable normalverteilt ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**Syntax:** obj << Outlier Box Plot( state=0|1 )

**Beschreibung:** Zeigt einen Box-Plot an oder blendet ihn aus, der es Ihnen ermöglicht, die Verteilung zu sehen und mögliche Ausreißer zu identifizieren. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**Syntax:** obj << Outlier Box Plot Row Cutoff( number )

**Beschreibung:** Legt die Startoption für die maximale Anzahl von Zeilen fest, bevor der Ausreißer-Box-Plot zu Beginn ausgeblendet wird. Standardmäßig „100000“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**Syntax:** obj << PpK Capability Labeling( state=0|1 )

**Beschreibung:** Wechselt in der Prozessfähigkeitsausgabe die Beschriftung der Gesamt-Prozessfähigkeitsindizes, ändert das Präfix Cp in Pp. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**Syntax:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**Beschreibung:** Berechnet die Vorhersageintervalle für eine einzelne künftige Beobachtung und den Mittelwert einer angegebenen Zahl (N Stichproben) für künftige Beobachtungen. Sie können einseitige oder zweiseitige Vorhersageintervalle erstellen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Achse mit Wahrscheinlichkeiten oder Anteilen ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

#### Process Capability

**Syntax:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**Beschreibung:** Berechnet eine Prozessfähigkeitsanalyse mit vorgegebener unterer Spezifikationsgrenze (USG), Ziel und oberer Spezifikationsgrenze (OSG). Der Prozessfähigkeitsbericht umfasst ein Histogramm, Zusammenfassungsdetails, Prozessfähigkeitsindizes und Nichtübereinstimmungskennzahlen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**Syntax:** obj << Quantile Box Plot( state=0|1 )

**Beschreibung:** Zeigt einen Box-Plot mit den folgenden Quantilen an oder blendet ihn aus: 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99% und 100%.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

#### Quantiles

**Syntax:** obj << Quantiles( state=0|1 )

**Beschreibung:** Zeigt den Quantile-Bericht an oder blendet ihn aus, der die Werte ausgewählter Quantile auflistet. Standardmäßig werden die Quantile 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99,5%, und 100% aufgelistet. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Syntax:** obj << Save( "Klassennummern"|"Klassenmitten"|"Ränge"|"Gemittelte Ränge"|"Wahrsch.-Scores"|"Normal-Quantile"|"Standardisiert"|"Zentriert"|"Robust standardisiert"|"Robust zentriert"|"Spez.-Grenzen"|"Ins Log schreiben" )

**Beschreibung:** Speichert die angegebene beobachtungsspezifische statistische Kenngröße in einer neuen Spalte in der Datentabelle. Es gibt auch eine Option zum Drucken der Skriptbefehle, die den aktuellen Bericht im Logfenster generieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

#### Set Bin Width

**Syntax:** obj << Set Bin Width( number )

**Beschreibung:** Legt die Klassenbreite des Histogramms mit der Achse als Ursprung fest. Die Option ist nur bei stetigen Variablen verfügbar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**Syntax:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**Beschreibung:** Legt das im Quantile-Bericht verwendete Inkrement bis zum angegebenen Bruchteil fest oder wechselt zurück zu den Standardquantilen. Diese Option ist nur bei stetigen Variablen verfügbar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**Syntax:** obj << Shadowgram( state=0|1 )

**Beschreibung:** Zeigt statt eines Histogramms ein glattes Schattendiagramm an. Ein Schattendiagramm überlagert Histogramme mit unterschiedlichen Klassenbreiten. Diese Option ist nur bei stetigen Variablen verfügbar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

#### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Beschreibung:** Zeigt die Balkenhäufigkeiten im Histogramm an oder blendet sie aus, die die Häufigkeit der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Beschreibung:** Zeigt die Balkenprozentsätze im Histogramm an oder blendet sie aus, die den Prozentsatz der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Beschreibung:** Zeigt Standardfehlerbalken an jedem der Histogrammbalken an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**Syntax:** obj << Stem and Leaf( state=0|1 )

**Beschreibung:** Zeigt ein Stamm-Blatt-Diagramm an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**Syntax:** obj << Summary Statistics( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Übersichtsstatistik“ an oder blendet ihn aus, in dem der Mittelwert, die Standardabweichung und andere statistische Kenngrößen für stetige Variablen aufgelistet werden. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

#### Test Equivalence

**Syntax:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**Beschreibung:** Testet anhand von zwei einseitigen Tests (TOST), ob der Stichprobenmittelwert äquivalent zu einem hypothetischen Wert (Ziel) ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

#### Test Mean

**Syntax:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**Beschreibung:** Führt einen Ein-Stichproben-Test für den Mittelwert durch. Wenn Sie einen Wert für die Standardabweichung (Sigma) angeben, wird ein z-Test durchgeführt. Andernfalls wird die Standardabweichung der Stichprobe verwendet, um einen t-Test durchzuführen. Es gibt außerdem die Option, einen zusätzlichen nichtparametrischen Wilcoxon-Vorzeichen-Rang-Test durchzuführen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**Syntax:** obj << Test Std Dev( number )

**Beschreibung:** Führt einen Chi-Quadrat-Test auf die Standardabweichung durch, wenn der hypothetische Wert (Zahl) vorgegeben ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**Syntax:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**Beschreibung:** Berechnet ein Intervall, das mindestens einen angegebenen Anteil der Population enthält. Es wird eine Standard-Normalverteilung angenommen. Sie können auch andere nicht-normale Verteilungen angeben, einschließlich Lognormal, Gamma, exponentiell, Weibull, kleinster Extremwert, größter Extremwert und nichtparametrische Verteilungen. Es gibt auch Optionen für die Berechnung einseitiger Intervalle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Beschreibung:** Ändert die Orientierung der Histogramme, Box-Plots und Quantildiagramme in vertikal. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

### Spalten

#### Column

**Syntax:** obj = Quantiles(...<Column( column(s) )>...)

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

## Distribution Fit

### Elementmeldungen

#### Density Curve

**Syntax:** obj << Fit Distribution Name( Density Curve( state=0|1 ) ); 

obj << ( Fit Handle[number] << Density Curve( state=0|1 ))

**Beschreibung:** Zeigt eine Dichtekurve im Histogramm an oder blendet sie aus. Die geschätzten Parameter von der angegebenen Anpassung werden zum Erstellen der Dichtekurve verwendet. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**Syntax:** obj << Fit Distribution Name( Distribution Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Distribution Profiler( state=0|1 ) )

**Beschreibung:** Zeigt eine Vorhersageanalyse der kumulierten Verteilungsfunktion für die angegebene angepasste Verteilung an oder blendet sie aus.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**Syntax:** obj << Fit Distribution Name( Fitted CDF( vector ));

 obj << ( Fit Handle[number] << Fitted CDF( vector ))

**Beschreibung:** Blendet die angegebenen angepassten Wahrscheinlichkeiten für die angepasste Verteilung ein oder aus.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**Syntax:** obj << Fit Distribution Name( Fitted Quantiles( vector ));

 obj << ( Fit Handle[number] << Fitted Quantiles( vector ))

**Beschreibung:** Zeigt die angegebenen Quantile der angegebenen angepassten Verteilung an oder blendet sie aus.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**Syntax:** obj << Fit Distribution Name( Fix Parameters( vector ));

 obj << ( Fit Handle[number] << Fix Parameters( vector ))

**Beschreibung:** Fixiert die angegebenen Parameter als Konstanten und schätzt die nicht fixierten Parameter neu.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**Syntax:** obj << Fit Distribution Name( Goodness of Fit( state=0|1 )); 

obj << ( Fit Handle[number] << Goodness of Fit( state=0|1 ))

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der einen Anpassungstest für die angegebene angepasste Verteilung enthält.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**Syntax:** obj << Fit Distribution Name( PP Plot( state=0|1 ) ); 

 obj << (Fit Handle[ number ] << PP Plot( state=0|1 ) )

**Beschreibung:** Zeigt ein PP-Diagramm (Perzentil-Perzentil) an oder blendet es aus, das die Beziehung zwischen der empirischen kumulierten Verteilungsfunktion (CDF) und der CDF der angegebenen angepassten Verteilung anzeigt.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**Syntax:** obj << Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); 

 obj << (Fit Handle[number] << ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**Beschreibung:** Berechnet eine Prozessfähigkeitsanalyse mit vorgegebener unterer Spezifikationsgrenze (USG), Ziel und oberer Spezifikationsgrenze (OSG). Der Prozessfähigkeitsbericht umfasst ein Histogramm, Zusammenfassungsdetails, Prozessfähigkeitsindizes und Nichtübereinstimmungskennzahlen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**Syntax:** obj << Fit Distribution Name( QQ Plot( state=0|1 ) ); 

obj << ( Fit Handle[number] << QQ Plot( state=0|1 ) )

**Beschreibung:** Zeigt ein QQ-Diagramm (Quantil-Quantil) an oder blendet es aus, das die Beziehung zwischen den beobachteten Daten und den Quantilen der angegebenen angepassten Verteilung anzeigt.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**Syntax:** obj << Fit Distribution Name( Quantile Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Quantile Profiler( state=0|1 ) )

**Beschreibung:** Zeigt eine Vorhersageanalyse der Quantilfunktion für die angegebene angepasste Verteilung an oder blendet sie aus.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**Syntax:** obj << (Fit Handle[number] << Remove Fit )

**Beschreibung:** Entfernt die Anpassung und das JSL-Objekt der angegebenen Verteilung.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Weibull;
obj << Fit Lognormal;
Wait( 1 );
obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**Syntax:** obj << Fit Distribution Name( Save Density Formula ) ; 

obj << ( Fit Handle[number] << Save Density Formula )

**Beschreibung:** Speichert eine Spalte in der Datentabelle, die die Dichteformel der angegebenen angepassten Verteilung enthält.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**Syntax:** obj << Fit Distribution Name( Save Distribution Formula ) ; 

obj << ( Fit Handle[number] << Save Distribution Formula )

**Beschreibung:** Speichert eine Spalte in der Datentabelle, die die kumulierte Verteilungsfunktion der angegebenen angepassten Verteilung enthält.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**Syntax:** obj << Fit Distribution Name( Save Simulation Formula ) ; 

obj << ( Fit Handle[number] << Save Simulation Formula )

**Beschreibung:** Speichert eine Spalte in der Datentabelle, die eine Formel enthält, die simulierte Werte aus der angegebenen angepassten Verteilung generiert.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**Syntax:** obj << Fit Distribution Name( Save Transformed ); 

obj << ( Fit Handle[number] << Save Transformed )

**Beschreibung:** Speichert eine Spalte in der Datentabelle, die eine Formel zum Transformieren der Analysespalte zur Normalverteilung unter Verwendung der angegebenen angepassten Verteilung enthält.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### Elementmeldungen

#### Color Out of Spec Values

**Syntax:** obj << Color Out of Spec Values

**Beschreibung:** Markiert die Zellen in der Datentabelle, die sich außerhalb der Spezifikationsgrenzen befinden, farblich. Zellen mit Werten unter der unteren Spezifikationsgrenze (USG) werden rot markiert und Zellen mit Werten über der oberen Spezifikationsgrenze (OSG) werden blau markiert.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Color Out of Spec Values
);

```

#### Save Distribution as a Column Property

**Syntax:** obj << Process Capability( Save Distribution as a Column Property )

**Beschreibung:** Speichert den Typ der Prozessfähigkeitsverteilung als Spalteneigenschaft in der Spalte der ursprünglichen Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Dist( Lognormal ),
	Save Distribution as a Column Property
);

```

#### Save In Spec Indicator Formula

**Syntax:** obj << Save In Spec Indicator Formula

**Beschreibung:** Erzeugt eine neue Formelspalte in der Datentabelle. Die neue Spalte enthält einen Wert, der angibt, ob eine Zeile innerhalb der Spezifikationsgrenzen liegt oder nicht.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Save In Spec Indicator Formula
);

```

#### Save Spec Limits and Distribution to Column Properties without Report

**Syntax:** obj << Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**Beschreibung:** Speichert die berechneten Spezifikationsgrenzen und den Typ der Prozessfähigkeitsverteilung für die angepasste Verteilung als Spalteneigenschaften in der Spalte der ursprünglichen Datentabelle und zeigt keinen Prozessfähigkeitsbericht an.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Sigma Multiplier for Quantile Spec Limits( 4 ),
		Save Spec Limits and Distribution to Column Properties without Report
	)
);

```

#### Save Spec Limits as a Column Property

**Syntax:** obj << Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); 

 obj << Process Capability( Save Spec Limits as a Column Property )

**Beschreibung:** Speichert die Spezifikationsgrenzen als Spalteneigenschaft in der Spalte der ursprünglichen Datentabelle.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		LSL( 0.03 ),
		Target( 0.15 ),
		USL( 0.27 ),
		Save Spec Limits as a Column Property
	)
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Save Spec Limits as a Column Property
);

```

#### Set Probabilities for Quantile Spec Limits

**Syntax:** obj << Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); 

 obj << Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**Beschreibung:** Legt die Wahrscheinlichkeiten fest, die zum Berechnen der Quantilspezifikationsgrenzen für die angepasste Verteilung verwendet werden.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Probabilities for Quantile Spec Limits(
			LSL Prob( .0001 ),
			Target Prob( .5 ),
			USL Prob( .9999 )
		)
	)
);

```

#### Set Sigma Multiplier for Quantile Spec Limits

**Syntax:** obj << Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))); 

 obj << Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))

**Beschreibung:** Legt einen Sigma-Multiplikator fest, der zum Berechnen der Quantilspezifikationsgrenzen für die angepassten Verteilung verwendet wird. Das optionale Argument bei Einseitigkeit entspricht 1, falls nur USG gewünscht ist, und 2, falls nur OSG gewünscht ist.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) )
);

```

## Distribution Summary Statistics

### Elementmeldungen

#### Customize Summary Statistics

**Syntax:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Beschreibung:** Richtet die im Bericht „Übersichtsstatistik“ angezeigten statistischen Kenngrößen benutzerspezifisch ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**Syntax:** obj << Customize Summary Statistics( Show all Modes( state=0|1 ))

**Beschreibung:** Blendet alle Modi im Bericht „Übersichtsstatistik“ ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### Elementmeldungen

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Beschreibung:** Verschiebt die Achsen des Häufigkeiten-, Wahrscheinlichkeits- und Normal-Quantildiagramms auf die linke Seite eines horizontalen Graphen.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**Syntax:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"Sonstige…" )

**Beschreibung:** Berechnet Score-Konfidenzintervalle um die Wahrscheinlichkeiten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Beschreibung:** Zeigt die Zählachse für das Histogramm an oder blendet sie aus.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Dichteachse für die Dichtekurve ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Beschreibung:** Zeigt den Häufigkeitenbericht an oder blendet ihn aus, der die Häufigkeiten und Wahrscheinlichkeiten für jede Stufe auflistet. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Beschreibung:** Zeigt das Histogramm an oder blendet es aus. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Beschreibung:** Ändert die Farbe der Histogrammbalken.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Beschreibung:** Ändert die Orientierung des Histogramms und der Berichte in horizontal.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Beschreibung:** Zeigt ein Mosaikdiagramm für jede nominale oder ordinale Zielgrößenvariable an oder blendet es aus. Ein Mosaikdiagramm ist ein gestapeltes Balkendiagramm, wobei jedes Segment proportional zum Häufigkeitswert seiner Gruppe ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**Syntax:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Beschreibung:** Ordnet das Histogramm, Mosaikdiagramm und den Häufigkeitenbericht in aufsteigender oder absteigender Reihenfolge nach der Häufigkeit. Sie können auch zur Standardordnung zurückkehren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Achse mit Wahrscheinlichkeiten oder Anteilen ein oder aus.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Syntax:** obj << Save( "Klassennummern"|"Wertereihenfolge"|"Ins Log schreiben" )

**Beschreibung:** Speichert die Klassennummer in einer neuen Spalte in der Datentabelle oder das Skript im Log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**Syntax:** obj << Separate Bars( state=0|1 )

**Beschreibung:** Fügt eine Lücke zwischen den Balken des Histogramms ein. Diese Option ist nur bei kategorialen Variablen verfügbar.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Beschreibung:** Zeigt die Balkenhäufigkeiten im Histogramm an oder blendet sie aus, die die Häufigkeit der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Beschreibung:** Zeigt die Balkenprozentsätze im Histogramm an oder blendet sie aus, die den Prozentsatz der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Beschreibung:** Zeigt Standardfehlerbalken an jedem der Histogrammbalken an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Syntax:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Beschreibung:** Testet die geschätzten Wahrscheinlichkeiten der Stufen einer kategorialen Variable gegen die angegebenen hypothetischen Wahrscheinlichkeiten (p1, p2, p3 usw). Bei Variablen mit zwei Stufen verwenden Sie die Option Test zum Angeben des Vorzeichens für die Alternativhypothese des Tests. Bei Variablen mit mehr als zwei Stufen verwenden Sie die Option Fix, um anzugeben, wie fehlende hypothetische Werte verarbeitet werden. Beachten Sie, dass f ein optionales Argument ist, das angibt, dass die vorhergehende Stufe als fixiert behandelt wird.

**Beispiel mit mehreren Stufen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Zwei Stufen, einseitiges Beispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Zwei Stufen, zweiseitiges Beispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

#### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Beschreibung:** Ändert die Orientierung der Histogramme, Box-Plots und Quantildiagramme in vertikal. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Nominal Distribution

### Elementmeldungen

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Beschreibung:** Verschiebt die Achsen des Häufigkeiten-, Wahrscheinlichkeits- und Normal-Quantildiagramms auf die linke Seite eines horizontalen Graphen.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**Syntax:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"Sonstige…" )

**Beschreibung:** Berechnet Score-Konfidenzintervalle um die Wahrscheinlichkeiten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Beschreibung:** Zeigt die Zählachse für das Histogramm an oder blendet sie aus.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Dichteachse für die Dichtekurve ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Beschreibung:** Zeigt den Häufigkeitenbericht an oder blendet ihn aus, der die Häufigkeiten und Wahrscheinlichkeiten für jede Stufe auflistet. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Beschreibung:** Zeigt das Histogramm an oder blendet es aus. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Beschreibung:** Ändert die Farbe der Histogrammbalken.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Beschreibung:** Ändert die Orientierung des Histogramms und der Berichte in horizontal.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Beschreibung:** Zeigt ein Mosaikdiagramm für jede nominale oder ordinale Zielgrößenvariable an oder blendet es aus. Ein Mosaikdiagramm ist ein gestapeltes Balkendiagramm, wobei jedes Segment proportional zum Häufigkeitswert seiner Gruppe ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**Syntax:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Beschreibung:** Ordnet das Histogramm, Mosaikdiagramm und den Häufigkeitenbericht in aufsteigender oder absteigender Reihenfolge nach der Häufigkeit. Sie können auch zur Standardordnung zurückkehren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Beschreibung:** Blendet in diesem Histogramm die Achse mit Wahrscheinlichkeiten oder Anteilen ein oder aus.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Syntax:** obj << Save( "Klassennummern"|"Wertereihenfolge"|"Ins Log schreiben" )

**Beschreibung:** Speichert die Klassennummer in einer neuen Spalte in der Datentabelle oder das Skript im Log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**Syntax:** obj << Separate Bars( state=0|1 )

**Beschreibung:** Fügt eine Lücke zwischen den Balken des Histogramms ein. Diese Option ist nur bei kategorialen Variablen verfügbar.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Beschreibung:** Zeigt die Balkenhäufigkeiten im Histogramm an oder blendet sie aus, die die Häufigkeit der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Beschreibung:** Zeigt die Balkenprozentsätze im Histogramm an oder blendet sie aus, die den Prozentsatz der Spaltenwerte angeben, die von jedem Histogrammbalken dargestellt werden.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Beschreibung:** Zeigt Standardfehlerbalken an jedem der Histogrammbalken an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Syntax:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Beschreibung:** Testet die geschätzten Wahrscheinlichkeiten der Stufen einer kategorialen Variable gegen die angegebenen hypothetischen Wahrscheinlichkeiten (p1, p2, p3 usw). Bei Variablen mit zwei Stufen verwenden Sie die Option Test zum Angeben des Vorzeichens für die Alternativhypothese des Tests. Bei Variablen mit mehr als zwei Stufen verwenden Sie die Option Fix, um anzugeben, wie fehlende hypothetische Werte verarbeitet werden. Beachten Sie, dass f ein optionales Argument ist, das angibt, dass die vorhergehende Stufe als fixiert behandelt wird.

**Beispiel mit mehreren Stufen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Zwei Stufen, einseitiges Beispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Zwei Stufen, zweiseitiges Beispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

#### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Beschreibung:** Ändert die Orientierung der Histogramme, Box-Plots und Quantildiagramme in vertikal. Standardmäßig ein.

**Beispiel für Mehrfachantwortverteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**Beispiel für nominale Verteilung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Test Mean

### Elementmeldungen

#### PValue animation

**Syntax:** obj << Test Mean( PValue Animation )

**Beschreibung:** Öffnet ein separates Fenster, in dem eine Animation angezeigt wird, wie sich die p-Werte verändern, wenn sich der Mittelwert verändert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**Syntax:** obj << Test Mean( Power Animation )

**Beschreibung:** Öffnet ein separates Fenster, in dem eine Animation angezeigt wird, wie sich die Power verändert, wenn sich der Mittelwert verändert, und ob der Test einseitig oder zweiseitig ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, Power Animation );

```

## Tolerance Interval

### Elementmeldungen

#### Save Distribution as a Column Property

**Syntax:** obj << Tolerance Interval( Save Distribution as a Column Property )

**Beschreibung:** Speichert den Toleranzintervall-Verteilungstyp als Spalteneigenschaft in der Spalte der ursprünglichen Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.90 ),
	Lognormal,
	Save Distribution as a Column Property
);

```

#### Save to Spec Limits Column Property

**Syntax:** obj << Save to Spec Limits Column Property( Alpha(number), Proportion(number), <Lower | Upper>, <Nonparametric>, <Save to Spec Limits Column Property> )

**Beschreibung:** Speichert das Toleranzintervall als Spezifikationsgrenzen in der Spalteneigenschaft „Spez.-Grenzen“ in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.85 ),
	Save to Spec Limits Column Property
);

```

