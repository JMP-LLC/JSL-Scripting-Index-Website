# Partial Least Squares



## Partial Least Squares Fit

### Coefficient Plots

**Syntax:** obj << (Fit[number] << Coefficient Plots( state=0|1 ))

**Beschreibung:** Zeigt Diagramme der Modellkoeffizienten für jede Zielgröße über die X-Variablen an oder blendet sie aus. Es gibt ein Diagramm für die zentrierten und skalierten Daten und ein Diagramm für die ursprünglichen Daten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Coefficient Plots( 1 ));

```

### Correlation Loading Plot

**Syntax:** obj << (Fit[number] << Correlation Loading Plot( state=0|1 ))

**Beschreibung:** Zeigt entweder ein einzelnes Streudiagramm oder eine Streudiagramm-Matrix der X- und Y-Ladungen überlagert im selben Diagramm an oder blendet es/sie aus. Die Streudiagramm-Matrix wird gezeigt, wenn die angegebene Anzahl von Faktoren größer als 2 ist.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Correlation Loading Plot( 2 ));

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Correlation Loading Plot( 4 ));

```

### Diagnostics Plots

**Syntax:** obj << (Fit[number] << Diagnostics Plots( state=0|1 ))

**Beschreibung:** Zeigt Diagnosediagramme an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Diagnostics Plots( 1 ));

```

### Distance Plots

**Syntax:** obj << (Fit[number] << Distance Plots( state=0|1 ))

**Beschreibung:** Zeigt die Distanzdiagramme an oder blendet sie aus. Es gibt ein Diagramm der Distanz von jeder Beobachtung zum X-Modell, ein Diagramm der Distanz von jeder Beobachtung zum Y-Modell und ein Streudiagramm der Distanzen zu beiden, dem X- und Y-Modell.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Distance Plots( 1 ));

```

### Fit Line

**Syntax:** obj << (Fit[number] << Fit Line( state=0|1 ))

**Beschreibung:** Zeigt eine angepasste Gerade durch die Punkte in den X-Y-Scores-Diagrammen an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
Wait( 2 );
obj << (Fit[1] << Fit Line( 0 ));

```

### Get Measures

**Syntax:** obj << (Fit[number] << Get Measures)

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Get Measures);

```

### Loading Plots

**Syntax:** obj << (Fit[number] << Loading Plots( state=0|1 ))

**Beschreibung:** Zeigt die Diagramme der X- und Y-Ladungen für jeden extrahierten Faktor an oder blendet sie aus. Es gibt separate Diagramme für die X- und Y-Variablen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Loading Plots( 1 ));

```

### Loading Scatterplot Matrices

**Syntax:** obj << (Fit[number] << Loading Scatterplot Matrices( state=0|1 ))

**Beschreibung:** Zeigt Streudiagrammmatrizen der X- und Y-Ladungen an oder blendet sie aus. Es gibt separate Streudiagrammmatrizen für die X- und Y-Variablen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Loading Scatterplot Matrices( 1 ));

```

### Make Model Using VIP

**Syntax:** obj << (Fit[number] << Make Model Using VIP)

**Beschreibung:** Öffnet und befüllt ein Startfenster mit den als Y-Variablen eingegebenen angemessenen Zielgrößen und den Variablen, deren VIPs die als X-Variablen eingegebene Schwelle überschritten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Make Model Using VIP);

```

### Model Driven Multivariate Control Chart for Saved X Scores

**Syntax:** obj << (Fit[number] << Model Driven Multivariate Control Chart for Saved X Scores)

**Beschreibung:** Speichert die Formeln für jeden X-Score und ruft das Startfenster für die modellgesteuerte multivariate Qualitätsregelkarte (MDMCC) auf.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Model Driven Multivariate Control Chart for Saved X Scores);

```

### Percent Variation Plots

**Syntax:** obj << (Fit[number] << Percent Variation Plots( state=0|1 ))

**Beschreibung:** Zeigt die Diagramme des Prozentwerts erklärte Variation für X-Effekte und für Y-Zielgrößen an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Percent variation plots( 1 ));

```

### Profiler

**Syntax:** obj << (Fit[number] << Profiler( state=0|1 ))

**Beschreibung:** Zeigt ein Analysediagramm für jede Zielgröße an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Profiler( 1 ));

```

### Profiler for Predicteds

**Syntax:** obj << (Fit[number] << Model Driven Multivariate Control Chart for Saved X Scores)

**Beschreibung:** Speichert die Formeln für jedes Y als Funktion des X-Score und ruft das Startfenster für das Analysediagramm auf.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Profiler for Predicteds);

```

### Publish Prediction Formula

**Syntax:** obj << (Fit[number] << Publish Prediction Formula)

**Beschreibung:** Erstellt eine Vorhersageformel und veröffentlicht sie als Formelspaltenskript in der Plattform „Formeldepot“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Publish Prediction Formula);

```

### Publish Score Formula

**Syntax:** obj << (Fit[number] << Publish Score Formula)

**Beschreibung:** Erstellt X- und Y-Score-Formeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Publish Score Formula);

```

### Remove Fit

**Syntax:** obj << (Fit[number] << Remove Fit)

**Beschreibung:** Entfernt den Modellbericht aus dem Hauptbericht der Plattform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
Wait( 3 );
obj << (Fit[1] << Remove Fit);

```

### Save Distance

**Syntax:** obj << (Fit[number] << Save Distance)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten die Werte für Distanz-zu-X-Modell (DModX) und Distanz-zu-Y-Modell (DModY).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Distance);

```

### Save Distance as X Score Formula

**Syntax:** obj << (Fit[number] << Save Distance as X Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten Formeln für Distanz-zu-X-Modell (DModX) und Distanz-zu-Y-Modell (DModY), bei denen es sich um Funktionen der X-Score-Formeln handelt.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Distance as X Score Formula);

```

### Save Imputation

**Syntax:** obj << (Fit[number] << Save Imputation)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jede X- und Y-Variable gibt es eine Spalte, die die ursprüngliche Datenspalte enthält, wobei fehlende Werte durch ihre eingesetzten Werte ersetzt wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 2 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);
obj << (Fit[1] << Save Imputation);

```

### Save Indiv Confidence Limit Formula

**Syntax:** obj << (Fit[number] << Save Indiv Confidence Limit Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es Spalten für die unteren und oberen Konfidenzgrenzen für eine einzelne Vorhersage, die Funktionen der X-Score-Formeln sind. Die Standardstufe für Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Indiv Confidence Limit Formula);

```

### Save Loadings

**Syntax:** obj << (Fit[number] << Save Loadings)

**Beschreibung:** Speichert Spalten in zwei neuen Datentabellen. Es gibt eine Datentabelle, die die Ladungen für die X-Variablen, und Datentabelle, die die Ladungen für die Y-Variablen enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Loadings);

```

### Save Mean Confidence Limit Formula

**Syntax:** obj << (Fit[number] << Save Mean Confidence Limit Formula( <alpha=0.05> ))

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es Spalten für die unteren und oberen Konfidenzgrenzen für die mittlere Zielgröße, die Funktionen der X-Score-Formeln sind. Die Standardstufe für Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Mean Confidence Limit Formula);

```

### Save Percent Variation Explained For X Effects

**Syntax:** obj << (Fit[number] << Save Percent Variation Explained For X Effects)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jede X-Variable gibt es eine Spalte, die den Prozentwert erklärte Variation über alle extrahierten Faktoren enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Percent Variation Explained For X Effects);

```

### Save Percent Variation Explained For Y Responses

**Syntax:** obj << (Fit[number] << Save Percent Variation Explained For Y Responses)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die den Prozentwert erklärte Variation über alle extrahierten Faktoren enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Percent Variation Explained For Y Responses);

```

### Save Prediction As X Score Formula

**Syntax:** obj << (Fit[number] << Save Prediction as X Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die eine Vorhersageformel enthält, bei der es sich um eine Funktion der X-Score-Formeln handelt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Prediction as X Score Formula);

```

### Save Prediction Formula

**Syntax:** obj << (Fit[number] << Save Prediction Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die eine Vorhersageformel enthält, bei der es sich um eine Funktion der X-Variablen handelt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Prediction Formula);

```

### Save Score Formula

**Syntax:** obj << (Fit[number] << Save Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jeden extrahierten Faktor gibt es eine Spalte, die eine X-Score-Formel enthält, und eine Spalte, die eine Y-Score-Formel enthält. Die X-Score-Formeln sind Funktionen der X-Variablen und die Y-Score-Formeln sind Funktionen der X-Score-Formeln.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Score Formula);

```

### Save Scores

**Syntax:** obj << (Fit[number] << Save Scores)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jeden extrahierten Faktor gibt es eine Spalte, die die X-Scores enthält, und eine Spalte, die die Y-Scores enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Scores);

```

### Save Standard Errors of Prediction Formula

**Syntax:** obj << (Fit[number] << Save Standard Errors of Prediction Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die die Formel für den Standardfehler des vorhergesagten Mittelwerts enthält, bei der es sich um eine Funktion der X-Variablen handelt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Standard Errors of Prediction Formula);

```

### Save Standardized Loadings

**Syntax:** obj << (Fit[number] << Save Standardized Loadings)

**Beschreibung:** Speichert Spalten in zwei neuen Datentabellen. Es gibt eine Datentabelle, die die standardisierten Ladungen für die X-Variablen, und Datentabelle, die die standardisierten Ladungen für die Y-Variablen enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Standardized Loadings);

```

### Save Standardized Scores

**Syntax:** obj << (Fit[number] << Save Standardized Scores)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten die standardisierten X- und Y-Scores für jeden extrahierten Faktor.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Standardized Scores);

```

### Save T Square

**Syntax:** obj << (Fit[number] << Save T Square)

**Beschreibung:** Speichert eine neue Formel in der ursprünglichen Datentabelle. Die neue Spalte enthält die T-Quadrat-Formel als eine Funktion der X-Variablen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save T Square);

```

### Save T Square as X Score Formula

**Syntax:** obj << (Fit[number] << Save T Square as X Score Formula)

**Beschreibung:** Speichert eine neue Formel in der ursprünglichen Datentabelle. Die neue Spalte enthält die T-Quadrat-Formel als eine Funktion der X-Score-Formeln.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save T Square as X Score Formula);

```

### Save Validation

**Syntax:** obj << (Fit[number] << Save Validation)

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die neue Spalte enthält Zahlen, die anzeigen, wie jede Beobachtung in der Validierung verwendet wurde.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Validation);

```

### Save X Predicted Values

**Syntax:** obj << (Fit[number] << Save X Predicted Values)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede X-Variable gibt es eine Spalte, die die vorhergesagten X-Werte enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Predicted Values);

```

### Save X Prediction as X Score Formula

**Syntax:** obj << (Fit[number] << Save X Prediction as X Score Formula)

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Für jede X-Variable gibt es eine Spalte, die eine Vorhersageformel enthält, bei der es sich um eine Funktion der X-Score-Formeln handelt.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Prediction as X Score Formula);

```

### Save X Residuals

**Syntax:** obj << (Fit[number] << Save X Residuals)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede X-Variable gibt es eine Spalte, die die X-Residuenwerte enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Residuals);

```

### Save X Score Formula

**Syntax:** obj << Save X Score Formula

### Save X Weights

**Syntax:** obj << (Fit[number] << Save X Weights)

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Für jeden extrahierten Faktor gibt es eine Spalte, die die Gewichtungen für die X-Variablen enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Weights);

```

### Save Y Predicted Values

**Syntax:** obj << (Fit[number] << Save Y Predicted Values)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die die vorhergesagten Y-Werte enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Y Predicted Values);

```

### Save Y Residuals

**Syntax:** obj << (Fit[number] << Save Y Residuals)

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Für jede Y-Variable gibt es eine Spalte, die die Y-Residuenwerte enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Y Residuals);

```

### Score Scatterplot Matrices

**Syntax:** obj << (Fit[number] << Score Scatterplot Matrices( state=0|1 ))

**Beschreibung:** Zeigt eine Streudiagramm-Matrix der X-Scores und eine Streudiagramm-Matrix der Y-Scores an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Score Scatterplot Matrices( 1 ));

```

### Set VIP Threshold

**Syntax:** obj << (Fit[number] << Set VIP Threshold( number=0.8 ))

**Beschreibung:** Legt die Schwellenwertstufe für das Variablengewichtungsdiagramm, die Varianzgewichtungstabelle und die VIP- vs. Koeffizientendiagramme fest. Standardmäßig „0.8“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Variable Importance Plot( 1 ));
Wait( 3 );
obj << (Fit[1] << Set VIP Threshold( 0.5 ));

```

### Show Confidence Band

**Syntax:** obj << (Fit[number] << Show Confidence Band( state=0|1 ))

**Beschreibung:** Zeigt 95%-Konfidenzbänder für die angepassten Geraden in den X-Y-Score-Diagrammen an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Show Confidence Band( 1 ));

```

### Spectral Profiler

**Syntax:** obj << (Fit[number] << Spectral Profiler( state=0|1 ))

**Beschreibung:** Zeigt ein einzelnes Analysediagramm an oder blendet es aus, in dem alle Zielgrößenvariablen in der ersten Zelle des Diagramms erscheinen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Spectral Profiler( 1 ));

```

### T Square Plot

**Syntax:** obj << (Fit[number] << T Square Plot( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm der T-Quadrat-Kenngröße für jede Beobachtung zusammen mit einer Eingriffsgrenze an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << T Square Plot( 1 ));

```

### VIP vs Coefficients Plots

**Syntax:** obj << (Fit[number] << VIP vs Coefficients Plots( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm der VIP-Kenngrößen gegen die Modellkoeffizienten an oder blendet es aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << VIP vs Coefficients Plots( 1 ));

```

### Variable Importance Plot

**Syntax:** obj << (Fit[number] << Variable Importance Plot( state=0|1 ))

**Beschreibung:** Zeigt ein Diagramm an oder blendet es aus, in dem der Beitrag jeder Variablen zum Modell zusammengefasst wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Variable Importance Plot( 1 ));

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

**Syntax:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);

```

### Centering

**Syntax:** obj = Partial Least Squares(...Centering( state=0|1)...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Zentriert alle Y-Variablen und modelliert Effekte durch Subtrahieren des Mittelwerts von jeder Spalte. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Centering( 0 ),
	Validation Method( KFold( 7 ) ),
	Go
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

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Data Table Window;

```

### Factor

**Syntax:** obj << Factor( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### Fit

**Syntax:** obj << Fit( SVD( Fast|Classical ), Method( NIPALS|SIMPLS ), Number of Factors( number ) )

**Beschreibung:** Passt ein Modell der partiellen kleinsten Quadrate mit einer vorgegebenen Methode und Anzahl von Faktoren an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Method( NIPALS ), Number of Factors( 7 ) ),
	Go
);

```

### Freq

**Syntax:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Freq( _freqcol ),
	Go
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

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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

### Go

**Syntax:** obj << Go

**Beschreibung:** Startet die Anpassung des Modells der partiellen kleinsten Quadrate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	)
);
obj << Go;

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

### Imputation Method

**Syntax:** obj = Partial Least Squares(...Imputation Method( "Mittelwert"|"EM" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Imputationsmethode an. Die Methode „Mittelwert“ ersetzt fehlende Werte mit dem Mittelwert der nichtfehlenden Werte in derselben Spalte. Die EM-Methode nutzt das Verfahren „Erwartung-Maximierung (EM)“, um fehlende Werte einzusetzen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 2 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);

```

### Impute Missing Data

**Syntax:** obj = Partial Least Squares(...Impute Missing Data( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Ersetzt fehlende Datenwerte in den Zielgrößen und Regressoren mit nichtfehlenden Werten. Ansonsten werden Zeilen mit fehlenden Werten aus der Analyse ausgeschlossen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Go
);

```

### Initial Number of Factors

**Syntax:** obj << Partial Least Squares( Validation Method(...Initial Number of Factors( number )...) )

**Beschreibung:** Gibt die anfängliche Anzahl von Faktoren für die Kreuzvalidierung an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ), Initial Number of Factors( 10 ) ), 

);
obj << Go;

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

### Max Iterations

**Syntax:** obj = Partial Least Squares(...Max Iterations( number=1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Legt die maximale Anzahl der Iterationen fest, die in der EM-Imputationsschleife ausgeführt werden sollen. Standardmäßig „1“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 2 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);

```

### Method

**Syntax:** obj = Partial Least Squares(...Fit( Method( NIPALS|SIMPLS)... )

**Beschreibung:** Gibt die Methode für die Anpassung der partiellen kleinsten Quadrate an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Method( NIPALS ), Number of Factors( 11 ) ),
	Go
);

```

### Model Dialog

**Syntax:** obj << Model Dialog

**Beschreibung:** Öffnet das Startfenster „Modell anpassen“. Sie können ein Modell der partiellen kleinsten Quadrate über dieses Startfenster anpassen, indem Sie den Charakter „Partielle kleinste Quadrate“ auswählen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Model Dialog;

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

### Partial Least Squares

**Syntax:** Partial Least Squares( Y( columns ), X( columns ) )

**Beschreibung:** Passt ein Modell mit latenten Faktoren an eine oder mehr Zielgrößenvariablen an. Dadurch können Modelle angepasst werden, wenn erklärende Variablen hochgradig korreliert sind oder wenn es mehr erklärende Variablen als Beobachtungen gibt.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj << Response( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### SVD

**Syntax:** obj << SVD( Fast|Classical )

**Beschreibung:** Legt für die Implementierung des SWZ-Algorithmus zum Berechnen des Modells der partiellen kleinsten Quadrate „Schnell“ oder „Klassisch“ fest. Die Option „Schnell“ implementiert die Lanczos SWZ-Routine und die Option „Klassisch“ implementiert die Golub-Kahan-Routine.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ) ),
	Go
);
obj << Fit( SVD( Classical ), Method( SIMPLS ) );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Script Window;

```

### Scaling

**Syntax:** obj = Partial Least Squares(...Scaling( state=0|1)...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Skaliert alle Y-Variablen und modelliert Effekte durch Dividieren jeder Spalte durch ihre Standardabweichung. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Scaling( 0 ),
	Validation Method( KFold( 7 ) ),
	Go
);

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

### Set Random Seed

**Syntax:** obj << Set Random Seed( number )

**Beschreibung:** Gibt den zufälligen Startwert für die Berechnung eines Modells der partiellen kleinsten Quadrate mit Kreuzvalidierung an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Set Random Seed( 12345 ),
	Validation Method( KFold( 7 ) ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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

### Validation

**Syntax:** obj << Validation( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### Validation Method

**Syntax:** obj << Validation Method( KFold( number )|Holdback( fraction )|"Leave-One-Out"|None, Initial Number of Factors( number )  )

**Beschreibung:** Legt die Methode für die Validierung des Modells fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
	Go
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

### Window View

**Syntax:** obj = Partial Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntax:** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### Y

**Syntax:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

