# Fit Curve



## ANOM for Estimates

### Point Options

**Syntax:** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Syntax:** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Syntax:** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (Gesamtmittelwert) im ANOM-Diagramm an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Syntax:** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im ANOM-Diagramm an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Syntax:** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im ANOM-Diagramm an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Syntax:** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den Gruppenmittelwerten und den Entscheidungsgrenzen an oder blendet ihn aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Equivalence with Ratios

### Set Alpha Level

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**Beschreibung:** Legt das Alpha-Niveau fest, das zum Berechnen der Konfidenzintervalle im Äquivalenzdiagramm verwendet wird.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )
	)
);

```

### Set Decision Lines

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**Beschreibung:** Legt die untere und obere Entscheidungslinie im Äquivalenzdiagramm fest.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )
	)
);

```

### Show Center Line

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**Beschreibung:** Zeigt die Mittellinie im Äquivalenzdiagramm an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) ),
		Equivalence with Ratios( 1, Show Center Line( 1 ) ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) )
	)
);

```

### Show Decision Limit Shading

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im Äquivalenzdiagramm an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )
	)
);

```

### Show Decision Limits

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im Äquivalenzdiagramm an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )
	)
);

```

### Show Summary Report

**Syntax:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**Beschreibung:** Zeigt den Äquivalenzzusammenfassungsbericht an oder blendet ihn aus, der die Parameterschätzwerte und die Entscheidungsgrenzen enthält und angibt, ob der Parameter die Grenzen überschreitet.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) )
	)
);

```

## Fit Curve CDOE

### CDOE Fit Plot

**Syntax:** scrobj << CDOE Fit Plot( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der angepassten Werte an oder blendet es aus. Wenn eine Gruppenvariable angegeben wird, gibt es auch ein Raster aus Diagrammen der angepassten Werte für jede Stufe der Gruppenvariable. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["CDOE Fit"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Fit Plot( 0 );

```

### CDOE Profiler

**Syntax:** scrobj << CDOE Profiler( state=0|1 )

**Beschreibung:** Blendet das CDOE-Analysediagramm ein oder aus, in dem Sie untersuchen können, wie sich die Zielgröße basierend auf den zusätzlichen Variablen ändert. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Profiler( 0 );

```

### Diagnostic Plots

**Syntax:** scrobj << Diagnostic Plots( state=0|1 )

**Beschreibung:** Blendet Diagramme „Beobachtete Werte über Vorhersage“ und Residuendiagramme für die Zielgrößenvariable ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Diagnostic Plots"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 0 );

```

### Generalized Regression for Model Parameters

**Syntax:** scrobj << Generalized Regression for Model Parameters( state=0|1 )

**Beschreibung:** Blendet die Berichte der verallgemeinerten Regression für jeden Modellparameter ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Model Parameters( 0 );

```

### Save Prediction Formula

**Syntax:** scrobj << Save Prediction Formula

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Vorhersageformel für die Zielgröße.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Save Prediction Formula;

```

## Fit

### Area Under Curve

**Syntax:** obj << Fit Command( Area Under Curve( state=0|1 )); 

obj << (Fit[number|name] << Area Under Curve( state=0|1 ))

**Beschreibung:** Berechnet die Fläche unter der angepassten Vorhersagefunktion.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

### Compare Parameter Estimates

**Syntax:** obj << Fit Command( Compare Parameter Estimates( state=0|1 )); 

obj << (Fit[number|name] << Compare Parameter Estimates( state=0|1 ))

**Beschreibung:** Vergleicht den Parameterschätzer jeder Gruppe mit dem Gesamtmittelwert. Dieser Vergleich wird für jeden Parameter durchgeführt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

### Curve DOE Analysis

**Syntax:** obj << (Fit[number|name] << Curve DOE Analysis( state=0|1 ))

**Beschreibung:** Startet einen Bericht zur verallgemeinerten Regression in der Plattform „Kurve anpassen“. Ein verallgemeinertes Regressionsmodell wird an jeden Parameter des Modells angepasst, wobei die zusätzlichen Variablen als Modelleffekte verwendet werden.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

### Custom Inverse Prediction

**Syntax:** obj << Fit Command( Custom Inverse Prediction( Response( value ))); 

obj << (Fit[number|name] << Custom Inverse Prediction( Response( value )))

**Beschreibung:** Sagt einen X-Wert für den angegebenen Zielgrößenwert vorher.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

### Equivalence Test

**Syntax:** obj << Fit Command( Equivalence Test( Reference Group( column ))); 

obj << (Fit[number|name] << Equivalence Test( Reference Group( column )))

**Beschreibung:** Testet, ob die angepasste Kurve für jede Gruppe der angepassten Kurve einer Referenzgruppe praktisch äquivalent ist.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

### Inflection Point

**Syntax:** obj << Fit Command( Inflection Point( state=0|1 )); 

obj << (Fit[number|name] << Inflection Point( state=0|1 ))

**Beschreibung:** Blendet einen Bericht der Wendepunktschätzung des Modells ein oder aus. Diese Option ist nur bei Weibull-Wachstums-Modellen, logistischen 4P-Rodbard- und logistischen 5P-Modellen verfügbar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

### Make Parameter Table

**Syntax:** obj << Fit Command( Make Parameter Table ); 

obj << (Fit[number|name] << Make Parameter Table)

**Beschreibung:** Erstellt eine Zusammenfassungstabelle aus Parameterschätzwerten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Make Parameter Table );

```

### Peak Response

**Syntax:** obj << Fit Command( Peak Response( state=0|1 ); 

obj << (Fit[number|name] << Peak Response( state=0|1 ))

**Beschreibung:** Berechnet den Schätzwert der Y-Variable an der Spitze der angepassten Kurve. Diese Option ist bei Modellen für Zellenwachstum 4P und mit einem Bereich verfügbar.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

### Plot Actual by Predicted

**Syntax:** obj << Fit Command( Plot Actual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Actual by Predicted( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm mit den tatsächlichen Zielgrößenwerten auf der vertikalen Achse und den Vorhersagewerten auf der horizontalen Achse an oder blendet es aus. In guten Anpassungen sind die Punkte in der Nähe der Diagonalen. Sie können sehen, welche Punkte weit von der Diagonalen entfernt sind, nach Mustern suchen und den Test visualisieren.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

### Plot Residual by Predicted

**Syntax:** obj << Fit Command( Plot Residual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Residual by Predicted( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm mit den Residuen auf der vertikalen Achse und der Zeilennummer auf der horizontalen Achse an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

### Profiler

**Syntax:** obj << Fit Command( Profiler( state=0|1 )); 

obj << (Fit[number|name] << Profiler( state=0|1 ))

**Beschreibung:** Blendet ein Analysediagramm der angepassten Vorhersagefunktion und deren erste und zweite Ableitung ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

### Remove Fit

**Syntax:** obj << (Fit[number|name]<<Remove Fit)

**Beschreibung:** Entfernt die angegebene Anpassung aus dem Bericht.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

### Save Bootstrap Results

**Syntax:** obj << Fit Command( Save Bootstrap Results ); 

obj << (Fit[number] << Save Bootstrap Results)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Die Datentabelle enthält die Bootstrap-Ergebnisse von einer F1- oder F2-Analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	F2 Analysis(
		Alpha( 0.1 ),
		Reference Level( "R01" ),
		Bootstrap Samples( 2500 ),
		Random Seed( 1234 )
	),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox, {Close( 1 )} )
	)
);
obj << (fit[1] << Save Bootstrap Results);

```

### Save First Derivative

**Syntax:** obj << Fit Command( Save First Derivative ); 

obj << (Fit[number|name] << Save First Derivative)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Formel für die erste Ableitung der Vorhersage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative );

```

### Save Inverse Prediction Formula

**Syntax:** obj << Fit Command( Save Inverse Prediction Formula ); 

obj << (Fit[number|name] << Save Inverse Prediction Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Formel für die inverse Funktion des angepassten Modells.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

### Save Parametric Prediction Formula

**Syntax:** obj << Fit Command( Save Parametric Prediction Formula ); 

obj << (Fit[number|name] << Save Parametric Prediction Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Vorhersageformel so ausgedrückt, dass sie von der Plattform „Nichtlinear“ verwendet werden kann.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

### Save Prediction Formula

**Syntax:** obj << Fit Command( Save Prediction Formula ); 

obj << (Fit[number|name] << Save Prediction Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Vorhersageformel für die aktuellen Parameterschätzer.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit[1] << Save Prediction Formula);

```

### Save Residual Formula

**Syntax:** obj << Fit Command( Save Residual Formula ); 

obj << (Fit[number|name] << Save Residual Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält eine Formel für die Residuen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Residual Formula );

```

### Save Stacked Data

**Syntax:** obj << Fit Command( Save Stacked Data ); 

obj << (Fit[number|name] << Save Stacked Data)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Die Datentabelle enthält die ursprünglichen Daten im gestapelten Format sowie eine Spalte für die Vorhersagewerte der Zielgröße und eine Spalte für die Residuen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi( Save Stacked Data );

```

### Save Std Error of First Derivative

**Syntax:** obj << Fit Command( Save Std Error of First Derivative ); 

obj << (Fit[number|name] << Save Std Error of First Derivative)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Formel für den Standardfehler der ersten Ableitung der Vorhersage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

### Save Std Error of Predicted

**Syntax:** obj << Fit Command( Save Std Error of Predicted ); 

obj << (Fit[number|name] << Save Std Error of Predicted)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Formel zum Berechnen der Standardfehler der Vorhersagen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

### Save Studentized Residual Formula

**Syntax:** obj << Fit Command( Save Studentized Residual Formula ); 

obj << (Fit[number|name] << Save Studentized Residual Formula)

**Beschreibung:** Speichert eine neue Formelspalte in der ursprünglichen Datentabelle. Die neue Spalte enthält die Formel für die studentisierten Residuen, bei denen es sich um Standardresiduen dividiert durch ihre geschätzten Standardabweichungen handelt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

### Test Parallelism

**Syntax:** obj << Fit Command( Test Parallelism( state=0|1 )); 

obj << (Fit[number|name] << Test Parallelism( state=0|1 ))

**Beschreibung:** Testet, ob die angepassten Kurven eine ähnliche Form in allen Gruppen haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

### Time to Peak Response

**Syntax:** obj << Fit Command( Time to Peak Response( state=0|1 )); 

obj << (Fit[number|name] << Time to Peak Response( state=0|1 ))

**Beschreibung:** Berechnet den Schätzwert der X-Variable an der Spitze der angepassten Kurve. Diese Option ist nur bei Modellen für Zellenwachstum 4P und einem Bereich verfügbar.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

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

**Syntax:** obj = Fit Curve(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;

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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Data Table Window;

```

### F1 Analysis

**Syntax:** obj << F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Beschreibung:** Führt eine Auflösungskurvenanalyse mithilfe des F1-Differenzfaktors durch, der die prozentuale Differenz zwischen den Kurven der Referenztablette und den Kurven der Testtablette an jedem Zeitpunkt misst.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F1 Analysis(
	Alpha( 0.05 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 2000 ),
	Random Seed( 1234 )
);

```

### F2 Analysis

**Syntax:** obj << F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Beschreibung:** Führt eine Auflösungskurvenanalyse mithilfe des F2-Ähnlichkeitsfaktors durch, der die Ähnlichkeit der prozentualen Auflösung zwischen den Kurven der Referenztablette und den Kurven der Testtablette misst.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F2 Analysis(
	Alpha( 0.1 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 3000 ),
	Random Seed( 4321 )
);

```

### Fit Antoine Equation

**Syntax:** obj << Fit Antoine Equation

**Beschreibung:** Passt das Antoine-Modell an die Daten an. Dieses Modell wird häufig verwendet, um den Dampfdruck als Funktion der Temperatur zu modellieren.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );
obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**Syntax:** obj << Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**Syntax:** obj << Fit Biexponential 4P

**Beschreibung:** Passt ein biexponentielles Modell mit vier Parametern an die Daten an.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**Syntax:** obj << Fit Biexponential 5P

**Beschreibung:** Passt ein biexponentielles Modell mit fünf Parametern an die Daten an.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**Syntax:** obj << Fit Cell Growth 4P

**Beschreibung:** Passt ein Wachstums- und Zerfallsmodell mit vier Parametern an die Daten an.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Cell Growth 4P;

```

### Fit Cubic

**Syntax:** obj << Fit Cubic

**Beschreibung:** Passt ein kubisches Modell an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Cubic;

```

### Fit Curve

**Syntax:** Fit Curve( Y( column ), X( column ) )

**Beschreibung:** Passt eine Vielzahl integrierter nichtlinearer Modelle an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit ExGaussian Peak

**Syntax:** obj << Fit ExGaussian Peak

**Beschreibung:** Passt ein exponentiell modifiziertes Gaußsches Kurvenmodell an die Daten an.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**Syntax:** obj << Fit Exponential 2P

**Beschreibung:** Passt ein exponentielles Modell mit zwei Parametern an die Daten an. Die angepasste Zielgröße hat eine Asymptote bei 0.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**Syntax:** obj << Fit Exponential 3P

**Beschreibung:** Passt ein exponentielles Modell mit drei Parametern an die Daten an. Die angepasste Zielgröße ist durch eine geschätzte Asymptote beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 3P;

```

### Fit First Order Rate

**Syntax:** obj << Fit First Order Rate

**Beschreibung:** Passt ein Ratenmodell erster Ordnung an die Daten an. Dies ist nützlich beim Modellieren von chemischen Reaktionen und ist nur verfügbar, wenn die X-Werte nicht-negativ sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**Syntax:** obj << Fit First Order with Equilibrium

**Beschreibung:** Passt ein Ratenmodell erster Ordnung mit Gleichgewicht an die Daten an. Dies ist nützlich beim Modellieren von chemischen Reaktionen und ist nur verfügbar, wenn die X-Werte nicht-negativ sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**Syntax:** obj << Fit First Order with Limits

**Beschreibung:** Passt ein Ratenmodell erster Ordnung mit Grenzen für die Daten an. Dies ist nützlich beim Modellieren von chemischen Reaktionen und ist nur verfügbar, wenn die X-Werte nicht-negativ sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**Syntax:** obj << Fit Gaussian Peak

**Beschreibung:** Passt ein Gaußsches Kurvenmodell an die Daten an.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**Syntax:** obj << Fit Gompertz 3P

**Beschreibung:** Passt eine Gompertz-Kurve mit drei Parametern an die Daten an. Die angepasste Zielgröße ist zwischen 0 und einer geschätzten Asymptote beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**Syntax:** obj << Fit Gompertz 4P

**Beschreibung:** Passt eine Gompertz-Kurve mit vier Parametern an die Daten an. Die angepasste Zielgröße ist zwischen zwei geschätzten Asymptoten beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Gompertz 4P;

```

### Fit Higuchi

**Syntax:** obj << Fit Higuchi

**Beschreibung:** Passt ein Higuchi-Modell an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**Syntax:** obj << Fit Higuchi with Burst

**Beschreibung:** Passt ein Higuchi-Modell mit einer Burst-Komponente an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**Syntax:** obj << Fit Higuchi with Lag

**Beschreibung:** Passt ein Higuchi-Modell mit einer Verschiebungskomponente an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**Syntax:** obj << "Fit Hixson-Crowell"n

**Beschreibung:** Passt ein Hixson-Crowell-Modell an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**Syntax:** obj << "Fit Hixson-Crowell with Lag"n

**Beschreibung:** Passt ein Hixson-Crowell-Modell mit einer Verschiebungskomponente an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**Syntax:** obj << Fit Hybrid Exponential

**Beschreibung:** Passt ein hybrid-exponentielles Modell an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**Syntax:** obj << Fit Inverse Michaelis Menten; 

obj << "Fit Inverse Michaelis-Menten"n

**Beschreibung:** Passt das inverse Michaelis-Menten-Enzymkinetikmodell an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**Syntax:** obj << "Fit Korsmeyer-Peppas"n

**Beschreibung:** Passt ein Korsmeyer-Peppas-Modell an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**Syntax:** obj << "Fit Korsmeyer-Peppas with Burst"n

**Beschreibung:** Passt ein Korsmeyer-Peppas-Modell mit einer Burst-Komponente an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**Syntax:** obj << "Fit Korsmeyer-Peppas with Lag"n

**Beschreibung:** Passt ein Korsmeyer-Peppas-Modell mit einer Verschiebungskomponente an die Daten an. Dies ist eine parametrische Technik zum Vergleichen von Auflösungskurven.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**Syntax:** obj << Fit Linear

**Beschreibung:** Passt ein Kleinste-Quadrate-Regressionsmodell an die Daten an. Die Anpassungsgerade wird im Diagramm angezeigt und ein Anpassungsbericht wird erstellt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Linear;

```

### Fit Logistic 2P

**Syntax:** obj << Fit Logistic 2P

**Beschreibung:** Passt eine logistische Kurve mit zwei Parametern an die Daten an. Die angepasste Zielgröße ist zwischen den Asymptoten 0 und 1 beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**Syntax:** obj << Fit Logistic 3P

**Beschreibung:** Passt eine logistische Kurve mit drei Parametern an die Daten an. Die angepasste Zielgröße ist zwischen 0 und einer geschätzten Asymptote beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**Syntax:** obj << Fit Logistic 4P

**Beschreibung:** Passt ein logistisches Modell mit vier Parametern an die Daten an. Die angepasste Zielgröße ist zwischen zwei geschätzten Asymptoten beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**Syntax:** obj << Fit Logistic 4P Hill

**Beschreibung:** Passt ein logistisches Modell mit vier Parametern an die Daten an. Die angepasste Zielgröße ist zwischen zwei geschätzten Asymptoten beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**Syntax:** obj << Fit Logistic 4P Rodbard

**Beschreibung:** Passt ein logistisches Modell mit vier Parametern an die Daten an. Die angepasste Zielgröße ist zwischen zwei geschätzten Asymptoten beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**Syntax:** obj << Fit Logistic 5P

**Beschreibung:** Passt ein logistisches Modell mit fünf Parametern an die Daten an. Die angepasste Zielgröße ist zwischen zwei geschätzten Asymptoten beschränkt. Im Gegensatz zu anderen logistischen Kurven ist die logistische Kurve mit fünf Parametern nicht symmetrisch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**Syntax:** obj << Fit Lorentzian Peak

**Beschreibung:** Passt ein Lorentz-Kurvenmodell an die Daten an.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**Syntax:** obj << Fit Mechanistic Growth

**Beschreibung:** Passt das mechanistische Wachstumsmodell an die Daten an. Dies ist eine Neuparametrisierung des exponentiellen 3P-Modells.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );
obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );
obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**Syntax:** obj << Fit Michaelis Menten; 

obj << "Fit Michaelis-Menten"n

**Beschreibung:** Passt das Michaelis-Menten-Enzymkinetikmodell an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**Syntax:** obj << Fit One Compartment Oral Dose

**Beschreibung:** Passt ein Modell „Orale Dosis ein Bereich“ an die Daten an. Dieses Modell eignet sich zum Modellieren der Konzentration eines Medikaments im Körper nach einer oralen Dosis.

```js

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**Syntax:** obj << Fit Pearson VII Peak

### Fit Power Model

**Syntax:** obj << Fit Power Model

**Beschreibung:** Passt ein Potenz-Modell an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Power Model;

```

### Fit Probit 2P

**Syntax:** obj << Fit Probit 2P

**Beschreibung:** Passt eine Probit-Kurve mit zwei Parametern an die Daten an. Die angepasste Zielgröße liegt zwischen den Asymptoten 0 und 1.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 2P;

```

### Fit Probit 3P

**Syntax:** obj << Fit Probit 3P

**Beschreibung:** Passt eine Probitkurve mit drei Parametern an die Daten an. Die angepasste Zielgröße ist zwischen 0 und einer geschätzten Asymptote beschränkt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 3P;

```

### Fit Probit 4P

**Syntax:** obj << Fit Probit 4P

**Beschreibung:** Passt ein Probit-Modell mit vier Parametern an die Daten an. Die angepasste Zielgröße liegt zwischen zwei geschätzten Asymptoten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**Syntax:** obj << Fit Pseudo-Voigt

### Fit Quadratic

**Syntax:** obj << Fit Quadratic

**Beschreibung:** Passt ein quadratisches Modell an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quadratic;

```

### Fit Quartic

**Syntax:** obj << Fit Quartic

**Beschreibung:** Passt ein Polynom vierter Ordnung an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quartic;

```

### Fit Quintic

**Syntax:** obj << Fit Quintic

**Beschreibung:** Passt ein Polynom fünfter Ordnung an die Daten an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quintic;

```

### Fit Second Order

**Syntax:** obj << Fit Second Order

**Beschreibung:** Passt ein Ratenmodell zweiter Ordnung an die Daten an. Dies ist nützlich beim Modellieren von chemischen Reaktionen und ist nur verfügbar, wenn die X-Werte nicht-negativ sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order;

```

### Fit Second Order with Two Components

**Syntax:** obj << Fit Second Order with Two Components

**Beschreibung:** Passt ein Ratenmodell zweiter Ordnung mit zwei Komponenten an die Daten an. Dies ist nützlich beim Modellieren von chemischen Reaktionen und ist nur verfügbar, wenn die X-Werte nicht-negativ sind.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**Syntax:** obj << Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**Syntax:** obj << Fit Two Compartment IV Bolus Dose

**Beschreibung:** Passt ein Modell „i.v.-Bolus-Dosis zwei Kompartimente“ an die Daten an. Dieses Modell eignet sich zum Modellieren der Konzentration eines Medikaments im Körper nach einer intravenösen Bolus-Dosis.

```js

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**Syntax:** obj << Fit Weibull Growth

**Beschreibung:** Passt ein Weibull-Wachstumsmodell mit drei Parametern an die Daten an.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Weibull Growth;

```

### Freq

**Syntax:** obj = Fit Curve(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Freq( _freqcol )
);
obj << Fit Logistic 4P;

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### Group

**Syntax:** obj = Fit Curve(...<Group( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Gruppierungsvariable an. Das angepasste Modell hat separate Parameter für jede Stufe der Gruppierungsvariablen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

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

### Multivariate Distance

**Syntax:** obj << Multivariate Distance( Alpha( number ), Reference Level( level ))

**Beschreibung:** Führt eine Auflösungskurvenanalyse mithilfe der Mahalanobis-Distanz M durch, die die multivariate Distanz zwischen den Kurven der Referenztablette und den Kurven der Testtablette misst.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Redo ByGroup Analysis;

```

### Regressor

**Syntax:** obj = Fit Curve(...<Regressor( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj = Fit Curve(...Response( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Zielgrößenvariablen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### Supplementary

**Syntax:** obj = Fit Curve(...<Supplementary( column(s) )>...)

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

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

### T2EQ

**Syntax:** obj << T2EQ( Alpha( number ), Reference Level( level ))

**Beschreibung:** Führt eine Auflösungskurvenanalyse mit Hilfe des T2EQ-Äquivalenztests durch, der die multivariate Distanz zwischen den Kurven der Referenztablette und den Kurven der Testtablette misst.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

```

### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

**Syntax:** obj = Fit Curve(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Weight( _weightcol )
);
obj << Fit Logistic 4P;

```

### Window View

**Syntax:** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntax:** obj = Fit Curve(...<X( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Y

**Syntax:** obj = Fit Curve(...Y( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Zielgrößenvariablen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Z

**Syntax:** obj = Fit Curve(...<Z( column(s) )>...)

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

