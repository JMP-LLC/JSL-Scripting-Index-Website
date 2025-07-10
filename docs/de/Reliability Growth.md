# Reliability Growth



## Crow AMSAA

### Achieved MTBF

**Syntax:** scrobj << Achieved MTBF( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Erreichte MTBF“ an oder blendet ihn aus. Mit dem optionalen Argument alpha können Sie Alpha angeben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Achieved MTBF( .01 );

```

### Goodness of Fit

**Syntax:** scrobj << Goodness of Fit( state=0|1 )

**Beschreibung:** Blendet den Bericht der Anpassungsgüte ein oder aus, der einen Test der Nullhypothese enthält, dass die Daten einem Crow-AMSAA-Modell folgen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Goodness of Fit( 1 );

```

### Show Cumulative Events Plot

**Syntax:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der kumulierten Ereignisse an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

### Show Intensity Plot

**Syntax:** scrobj << Show Intensity Plot( state=0|1 )

**Beschreibung:** Zeigt das Intensitätsdiagramm an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

### Show MTBF Plot

**Syntax:** scrobj << Show MTBF Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der mittleren Ausfallzeit (MTBF) an oder blendet es aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

### Show Profilers

**Syntax:** scrobj << Show Profilers( state=0|1 )

**Beschreibung:** Zeigt die Analysediagramme für mittlere Ausfallzeit (MTBF), Ausfallintensität und kumulierte Ereignisse an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

## Cumulative Events Plot

### Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

### Crow AMSAA with Modified MLE

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit Bias-Korrektur für Beta im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

### Cumulative Events Plot

**Syntax:** obj << Cumulative Events Plot( ... );

scrobj = obj << Cumulative Events Plot

**Beschreibung:** Ermöglicht Ihnen, Modelle im Diagramm der kumulierten Ereignisse anzuzeigen oder auszublenden. Wenn ohne Argument angegeben, gibt diese Option eine skriptfähige Referenz auf das Diagramm zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
plot = obj << Cumulative Events Plot;
plot << Crow AMSAA( 0 );

```

### Fixed Parameter Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit fixiertem Parameter im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

### Piecewise Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das abschnittsweise Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

### Reinitialized Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

## Fixed Parameter Crow AMSAA

### Show Cumulative Events Plot

**Syntax:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der kumulierten Ereignisse an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

### Show Intensity Plot

**Syntax:** scrobj << Show Intensity Plot( state=0|1 )

**Beschreibung:** Zeigt das Intensitätsdiagramm an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

### Show MTBF Plot

**Syntax:** scrobj << Show MTBF Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der mittleren Ausfallzeit (MTBF) an oder blendet es aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

### Show Profilers

**Syntax:** scrobj << Show Profilers( state=0|1 )

**Beschreibung:** Zeigt die Analysediagramme für mittlere Ausfallzeit (MTBF), Ausfallintensität und kumulierte Ereignisse an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

### beta

**Syntax:** obj << Fixed Parameter Crow AMSAA( beta( number ) )

**Beschreibung:** Gibt den Wert des festen Beta-Parameters an. Wenn das Argument ein fehlender Wert ist, ist der Parameter nicht fixiert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( Beta( 0.8 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

### lambda

**Syntax:** obj << Fixed Parameter Crow AMSAA( lambda( number ) )

**Beschreibung:** Gibt den Wert des festen Lambda-Parameters an. Wenn das Argument ein fehlender Wert ist, ist der Parameter nicht fixiert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( lambda( 0.02 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

## Mean Time Between Failures Plot

### Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

### Crow AMSAA with Modified MLE

**Syntax:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit Bias-Korrektur für Beta im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

### Customize Average MTBF

**Syntax:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) ) );

scrobj << Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) )

**Beschreibung:** Gibt einen Satz disjunkter Intervalle an, die zum Berechnen der mittleren Ausfallzeit (MTBF) verwendet werden.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Mean Time Between Failures Plot(
	Options(
		Sample MTBF Type( "Customized Average MTBF" ),
		Customize Average MTBF( [2500, 5000, 7500, 11000] )
	)
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
plot = obj << Mean Time Between Failures Plot;
plot << Options(
	Sample MTBF Type( "Customized Average MTBF" ),
	Customize Average MTBF( [2500, 5000, 7500, 11000] )
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

### Fixed Parameter Crow AMSAA

**Syntax:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**Beschreibung:** Zeigt das Crow-AMSAA-Modell mit fixiertem Parameter im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit an oder blendet es aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

### Interval Size

**Syntax:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) )

**Beschreibung:** Gibt die Größe des Intervalls an, das für die Berechnung der mittleren Ausfallzeit (MTBF) verwendet wird.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) );

```

### Mean Time Between Failures Plot

**Syntax:** obj << Mean Time Between Failures Plot( ... );

scrobj = obj << Mean Time Between Failures Plot

**Beschreibung:** Ermöglicht Ihnen, Modelle im Diagramm der mittleren Ausfallzeit anzuzeigen oder auszublenden. Wenn ohne Argument angegeben, gibt diese Option eine skriptfähige Referenz auf das Diagramm zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Crow AMSAA( 0 );

```

### Options

**Syntax:** obj << Mean Time Between Failures( Options( ... ) );

scrobj << Options( ... )

**Beschreibung:** Ermöglicht Ihnen, das Diagramm der mittleren Ausfallzeit zu konfigurieren.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

### Piecewise Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das abschnittsweise Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

### Reinitialized Weibull NHPP

**Syntax:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**Beschreibung:** Blendet das neu initialisierte Weibull NHPP-Modell im Diagramm der kumulierten Ereignisse oder der mittleren Ausfallzeit ein oder aus. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

### Sample MTBF Type

**Syntax:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) )

**Beschreibung:** Gibt die Berechnungsmethode für das Diagramm der mittleren Ausfallzeit an.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

## Reliability Growth Report

### Show Cumulative Events Plot

**Syntax:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der kumulierten Ereignisse an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

### Show Intensity Plot

**Syntax:** scrobj << Show Intensity Plot( state=0|1 )

**Beschreibung:** Zeigt das Intensitätsdiagramm an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

### Show MTBF Plot

**Syntax:** scrobj << Show MTBF Plot( state=0|1 )

**Beschreibung:** Zeigt das Diagramm der mittleren Ausfallzeit (MTBF) an oder blendet es aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

### Show Profilers

**Syntax:** scrobj << Show Profilers( state=0|1 )

**Beschreibung:** Zeigt die Analysediagramme für mittlere Ausfallzeit (MTBF), Ausfallintensität und kumulierte Ereignisse an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Copy Script;

```

### Crow AMSAA

**Syntax:** obj << Crow AMSAA

**Beschreibung:** Passt ein Crow-AMSAA-Modell an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Crow AMSAA with Modified MLE

**Syntax:** obj << Crow AMSAA with Modified MLE

**Beschreibung:** Passt ein Crow-AMSAA-Modell mit Bias-Korrektur für Beta an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA with Modified MLE;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Data Table Window;

```

### Distinct Phase Weibull NHPP

**Syntax:** obj << Distinct Phase Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit verschiedenen Phasen an, bei dem jedes System in einer mehrphasigen Studie in jeder Phase dem gleichen Crow-AMSAA-Modell folgt. Dieses Modell enthält einen Beta-Parameter und einen Lambda-Parameter für jede Phase. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Phase Weibull NHPP;

```

### Distinct System Weibull NHPP

**Syntax:** obj << Distinct System Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit verschiedenen Systeme an, bei dem jedes System in der Studie einem eigenen Crow-AMSAA-Modell mit unterschiedlichen Parametern folgt. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Distinct System Weibull NHPP;

```

### Distinct Weibull NHPP

**Syntax:** obj << Distinct Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit verschiedenen Phasen an, bei dem jedes System in einer mehrphasigen Studie in jeder Phase einem eigenen Crow-AMSAA-Modell folgt. Dieses Modell enthält einen Beta- und einen Lambda-Parameter für jede Kombination aus System und Phase in der Studie. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Weibull NHPP;

```

### Fixed Parameter Crow AMSAA

**Syntax:** obj << Fixed Parameter Crow AMSAA( <lambda ( number )>, <beta ( number )> )

**Beschreibung:** Passt ein Crow-AMSAA-Modell mit fixiertem Parameter an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Fixed Parameter Crow AMSAA( lambda( .02 ) );

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Results

**Syntax:** obj << Get Results

**Beschreibung:** Gibt eine benannte Liste zurück, die die Ergebnisse der Modellschätzung enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Show( obj << Get Results );

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

### Identical System Weibull NHPP

**Syntax:** obj << Identical System Weibull NHPP

**Beschreibung:** Passt ein Weibull NHPP-Modell mit identischen Systemen an, bei dem jedes System in der Studie einem einzelnen Crow-AMSAA-Modell folgt. Es wird angenommen, dass die Unterschiede zwischen den Systemen auf die Zufälligkeit einzelner Realisierungen desselben Modells zurückzuführen sind. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Identical System Weibull NHPP;

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

### Piecewise Weibull NHPP

**Syntax:** obj << Piecewise Weibull NHPP

**Beschreibung:** Passt ein abschnittsweises Weibull NHPP-Modell an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
obj << Piecewise Weibull NHPP;

```

### Piecewise Weibull NHPP Change Point Detection

**Syntax:** obj << Piecewise Weibull NHPP Change Point Detection

**Beschreibung:** Schätzt einen Phasenwechsel in den Daten und passt ein abschnittsweises Weibull NHPP-Modell an. Diese Option ist nicht verfügbar, wenn eine Phasenvariable angegeben ist. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
obj << Piecewise Weibull NHPP Change Point Detection;

```

### Piecewise Weibull NHPP with Different Intercepts

**Syntax:** obj << Piecewise Weibull NHPP with Different Intercepts

**Beschreibung:** Passt ein abschnittsweises Weibull NHPP-Modell mit unterschiedlichen Achsenabschnitten an, wobei jedes System in einer mehrphasigen Studie einem separaten abschnittsweisen Weibull NHPP-Modell folgt. Dieses Modell enthält einen Beta-Parameter für jede Phase und einen Lambda-Parameter für jedes System. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Redo Analysis;

```

### Reinitialized Weibull NHPP

**Syntax:** obj << Reinitialized Weibull NHPP

**Beschreibung:** Passt ein neu initialisiertes Weibull NHPP-Modell an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
obj << Reinitialized Weibull NHPP;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Relaunch Analysis;

```

### Reliability Growth

**Syntax:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Dates ), Timestamp( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), <Phase( column )> )



obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), <Event Count( column )>, System ID( column ), <Phase( column )> )

**Beschreibung:** Modelliert die sich verändernde Zuverlässigkeit eines einzelnen reparierbaren Systems über die Zeit, während Verbesserungen in das Design integriert werden. Die Plattform akzeptiert verschiedene Eingabeformate. Sie finden zu jedem Format weitere Details für die Spezifikation.

**Datumsangaben**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

**Gleichzeitige Systeme**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**Parallele Systeme**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

**Zeit bis Ereignis**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

