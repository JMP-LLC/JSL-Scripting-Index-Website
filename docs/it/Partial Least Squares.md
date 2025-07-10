# Partial Least Squares



## Partial Least Squares Fit

### Coefficient Plots

**Sintassi:** obj << (Fit[number] << Coefficient Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde i diagrammi dei coefficienti del modello per ogni risposta lungo le variabili X. Esiste un diagramma per i dati centrati e scalati e un diagramma per i dati originali.

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

**Sintassi:** obj << (Fit[number] << Correlation Loading Plot( state=0|1 ))

**Descrizione:** Mostra o nasconde un singolo grafico a dispersione o una matrice dei grafici a dispersione dei pesi fattoriali X e Y sovrapposti sullo stesso grafico. La matrice del grafico a dispersione viene mostrata se il numero di fattori specificato è maggiore di 2.

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** obj << (Fit[number] << Diagnostics Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde diagrammi diagnostici.

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

**Sintassi:** obj << (Fit[number] << Distance Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde i grafici delle distanze. Esiste un grafico della distanza da ogni osservazione al modello X, un grafico della distanza da ogni osservazione al modello Y e un grafico di dispersione delle distanze a entrambi i modelli X e Y.

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

**Sintassi:** obj << (Fit[number] << Fit Line( state=0|1 ))

**Descrizione:** Mostra o nasconde una linea stimata lungo i punti sui grafici score X-Y. Per impostazione predefinita l&apos;opzione è attivata.

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

**Sintassi:** obj << (Fit[number] << Get Measures)

**Descrizione:** Restituisce misure di stima sintetiche del modello.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << (Fit[number] << Loading Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde i diagrammi dei pesi fattoriali X e Y per ogni fattore estratto. Esistono diagrammi separati per le variabili X e Y.

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

**Sintassi:** obj << (Fit[number] << Loading Scatterplot Matrices( state=0|1 ))

**Descrizione:** Mostra o nasconde le matrici dei grafici a dispersione dei pesi fattoriali X e Y. Esistono matrici dei grafici a dispersione separate per le variabili X e Y.

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

**Sintassi:** obj << (Fit[number] << Make Model Using VIP)

**Descrizione:** Apre e popola una finestra di avvio con le risposte appropriate inserite come Y e le variabili le cui VIP superano la soglia specificata inserite come X.

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

**Sintassi:** obj << (Fit[number] << Model Driven Multivariate Control Chart for Saved X Scores)

**Descrizione:** Salva le formule per ogni score X e apre la finestra di avvio della Carta di controllo multivariata guidata da un modello (MDMCC).

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << (Fit[number] << Percent Variation Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde i diagrammi della percentuale di variazione spiegata per gli effetti X e per le risposte Y.

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

**Sintassi:** obj << (Fit[number] << Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde un profiler per ogni risposta.

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

**Sintassi:** obj << (Fit[number] << Model Driven Multivariate Control Chart for Saved X Scores)

**Descrizione:** Salva le formule per ogni Y come una funzione dello score di X e avvia la finestra di avvio del profiler.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << (Fit[number] << Publish Prediction Formula)

**Descrizione:** Crea una formula di previsione e la pubblica come script della colonna della formula nella piattaforma Depot delle formule.

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

**Sintassi:** obj << (Fit[number] << Publish Score Formula)

**Descrizione:** Crea formule di score X e Y e le salva come script di colonne della formula nella piattaforma Depot delle formule.

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

**Sintassi:** obj << (Fit[number] << Remove Fit)

**Descrizione:** Rimuove il report del modello dal report principale della piattaforma.

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

**Sintassi:** obj << (Fit[number] << Save Distance)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Le nuove colonne contengono i valori Distanza dal modello X (DModX) e Distanza dal modello Y (DModY).

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

**Sintassi:** obj << (Fit[number] << Save Distance as X Score Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Le nuove colonne contengono le formule Distanza dal modello X (DModX) e Distanza dal modello Y (DModY) che sono funzioni delle formule score X.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << (Fit[number] << Save Imputation)

**Descrizione:** Salva le colonne in una nuova tabella di dati. Per ogni variabile X e Y esiste una colonna che contiene la colonna dei dati originali con i valori mancanti sostituiti dai rispettivi valori imputati.

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

**Sintassi:** obj << (Fit[number] << Save Indiv Confidence Limit Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni variabile Y esistono colonne per i limiti di confidenza inferiori e superiori per una previsione individuale che sono funzioni delle formule di score X. Il livello predefinito per alfa è 0,05, che crea limiti di confidenza al 95%.

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

**Sintassi:** obj << (Fit[number] << Save Loadings)

**Descrizione:** Salva le colonne in due nuove tabelle di dati. Esiste una tabella di dati che contiene i pesi fattoriali per le variabili X e una tabella di dati che contiene i pesi fattoriali per le variabili Y.

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

**Sintassi:** obj << (Fit[number] << Save Mean Confidence Limit Formula( <alpha=0.05> ))

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni variabile Y esistono colonne per i limiti di confidenza inferiori e superiori per la risposta media che sono funzioni delle formule di score X. Il livello predefinito per alfa è 0,05, che crea limiti di confidenza al 95%.

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

**Sintassi:** obj << (Fit[number] << Save Percent Variation Explained For X Effects)

**Descrizione:** Salva le colonne in una nuova tabella di dati. Per ogni variabile X, esiste una colonna che contiene la percentuale di variazione spiegata attraverso tutti i fattori estratti.

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

**Sintassi:** obj << (Fit[number] << Save Percent Variation Explained For Y Responses)

**Descrizione:** Salva le colonne in una nuova tabella di dati. Per ogni Variabile Y, esiste una colonna che contiene la percentuale di variazione spiegata attraverso tutti i fattori estratti.

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

**Sintassi:** obj << (Fit[number] << Save Prediction as X Score Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni variabile Y esiste una colonna che contiene una formula di previsione che è una funzione delle formule di score X.

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

**Sintassi:** obj << (Fit[number] << Save Prediction Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni variabile Y esiste una colonna che contiene una formula di previsione che è una funzione delle variabili X.

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

**Sintassi:** obj << (Fit[number] << Save Score Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni fattore estratto, esiste una colonna che contiene una formula di score X e una colonna che contiene una formula di score Y. Le formule di score X sono funzioni delle variabili X e le formule di score Y sono funzioni delle formule di score X.

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

**Sintassi:** obj << (Fit[number] << Save Scores)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Per ogni fattore estratto esiste una colonna che contiene gli score X e una colonna che contiene gli score Y.

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

**Sintassi:** obj << (Fit[number] << Save Standard Errors of Prediction Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni variabile Y esiste una colonna che contiene la formula per l&apos;errore standard della media prevista che è una funzione delle variabili X.

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

**Sintassi:** obj << (Fit[number] << Save Standardized Loadings)

**Descrizione:** Salva le colonne in due nuove tabelle di dati. Esiste una tabella di dati che contiene i pesi fattoriali standardizzati per le variabili X e una tabella di dati che contiene i pesi fattoriali standardizzati per le variabili Y.

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

**Sintassi:** obj << (Fit[number] << Save Standardized Scores)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Le nuove colonne contengono gli score standardizzati X e Y per ogni fattore estratto.

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

**Sintassi:** obj << (Fit[number] << Save T Square)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula T al quadrato come funzione delle variabili X.

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

**Sintassi:** obj << (Fit[number] << Save T Square as X Score Formula)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula T al quadrato come funzione delle formule di score X.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << (Fit[number] << Save Validation)

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La nuova colonna contiene numeri che indicano come ogni osservazione è stata usata nella validazione.

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

**Sintassi:** obj << (Fit[number] << Save X Predicted Values)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Per ogni Variabile X, esiste una colonna che contiene i valori X previsti.

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

**Sintassi:** obj << (Fit[number] << Save X Prediction as X Score Formula)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Per ogni variabile X esiste una colonna che contiene una formula di previsione che è una funzione delle formule di score X.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << (Fit[number] << Save X Residuals)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Per ogni variabile X, esiste una colonna che contiene i valori X residui.

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

**Sintassi:** obj << Save X Score Formula

### Save X Weights

**Sintassi:** obj << (Fit[number] << Save X Weights)

**Descrizione:** Salva le colonne in una nuova tabella di dati. Per ogni fattore estratto, esiste una colonna che contiene i pesi per le variabili X.

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

**Sintassi:** obj << (Fit[number] << Save Y Predicted Values)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Per ogni variabile Y, esiste una colonna che contiene i valori Y previsti.

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

**Sintassi:** obj << (Fit[number] << Save Y Residuals)

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Per ogni variabile Y, esiste una colonna che contiene i valori Y residui.

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

**Sintassi:** obj << (Fit[number] << Score Scatterplot Matrices( state=0|1 ))

**Descrizione:** Mostra o nasconde una matrice del grafico a dispersione degli score X e una matrice del grafico a dispersione degli score Y.

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

**Sintassi:** obj << (Fit[number] << Set VIP Threshold( number=0.8 ))

**Descrizione:** Imposta il livello di soglia per il diagramma di importanza della variabile, la tabella di importanza della varianza e i diagrammi VIP rispetto ai diagrammi dei coefficienti. "0.8", per impostazione predefinita.

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

**Sintassi:** obj << (Fit[number] << Show Confidence Band( state=0|1 ))

**Descrizione:** Mostra o nasconde le bande di confidenza al 95% per le linee stimate sui grafici score X-Y.

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

**Sintassi:** obj << (Fit[number] << Spectral Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde un singolo profiler in cui tutte le variabili di risposta compaiono nella prima cella del diagramma.

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

**Sintassi:** obj << (Fit[number] << T Square Plot( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma delle statistiche del T quadro per ogni osservazione, insieme a un limite di controllo.

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

**Sintassi:** obj << (Fit[number] << VIP vs Coefficients Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma delle statistiche VIP rispetto ai coefficienti del modello.

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

**Sintassi:** obj << (Fit[number] << Variable Importance Plot( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma che riassume il contributo di ogni variabile al modello.

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

**Sintassi:** obj << Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

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

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Cerca per nome**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preimpostazione anonima**

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

**Ricerca all'interno delle cartelle**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Sintassi:** obj << Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

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

**Sintassi:** obj << By( column(s) )

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

**Sintassi:** obj = Partial Least Squares(...Centering( state=0|1)...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Centra tutte le variabili Y e gli effetti del modello sottraendo la media da ogni colonna. Per impostazione predefinita l&apos;opzione è attivata.

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

**Sintassi:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

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

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

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

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

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

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

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

**Sintassi:** obj << Factor( column(s) )

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

**Sintassi:** obj << Fit( SVD( Fast|Classical ), Method( NIPALS|SIMPLS ), Number of Factors( number ) )

**Descrizione:** Stima modello dei minimi quadrati parziali con un metodo e un numero di fattori specificati.

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

**Sintassi:** obj << Freq( column )

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

**Sintassi:** obj << Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj << Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

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

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

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

**Piattaforma con filtro**

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

**Sintassi:** obj << Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

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

**Sintassi:** obj << Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

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

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

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

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

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

**Sintassi:** obj << Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj << Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Sintassi:** obj << Go

**Descrizione:** Avvia la stima del modello dei minimi quadrati parziali.

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

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

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

**Sintassi:** obj = Partial Least Squares(...Imputation Method( "Media"|"EM" )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il metodo di imputazione. Il metodo Media sostituisce i valori mancanti con la media dei valori non mancanti nella stessa colonna. Il metodo EM usa un approccio iterativo Expectation-Maximization (EM) per imputare i valori mancanti.

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

**Sintassi:** obj = Partial Least Squares(...Impute Missing Data( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Sostituisce i valori dei dati mancanti nelle risposte e nei regressori con valori non mancanti, altrimenti le righe con valori mancanti sono escluse dall&apos;analisi.

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

**Sintassi:** obj << Partial Least Squares( Validation Method(...Initial Number of Factors( number )...) )

**Descrizione:** Specifica il numero iniziale di fattori per la crossvalidation.

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

**Sintassi:** obj << Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

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

**Sintassi:** obj = Partial Least Squares(...Max Iterations( number=1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il numero massimo di iterazioni da eseguire nel ciclo di imputazione EM. "1", per impostazione predefinita.

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

### Messaggi degli elementi condivisi

### Method

**Sintassi:** obj = Partial Least Squares(...Fit( Method( NIPALS|SIMPLS)... )

**Descrizione:** Specifica il metodo usato per stimare il modello dei minimi quadrati parziali.

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

**Sintassi:** obj << Model Dialog

**Descrizione:** Apre la finestra di avvio Stima modello. Si può stimare un modello dei minimi quadrati parziali da questa finestra di avvio selezionando la personalità Minimi quadrati parziali.

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

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Partial Least Squares

**Sintassi:** Partial Least Squares( Y( columns ), X( columns ) )

**Descrizione:** Stima un modello su una o più variabili di risposta usando fattori latenti. Ciò permette ai modelli di essere stimati quando le variabili esplicative sono altamente correlate o quando sono presenti più variabili esplicative che osservazioni.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**Esempio 2**

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

**Sintassi:** obj << Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

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

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

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

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

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

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

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

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

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

**Sintassi:** obj << Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

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

**Sintassi:** obj << Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

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

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj << Report;

Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

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

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

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

**Sintassi:** obj << Response( column(s) )

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

**Sintassi:** obj << SVD( Fast|Classical )

**Descrizione:** Imposta l&apos;implementazione dell&apos;algoritmo SVD per il calcolo del modello dei minimi quadrati parziali su Veloce o Classico. L&apos;opzione Veloce implementa la routine SVD di Lanczos e l&apos;opzione Classico implementa la routine Golub-Kahan.

**JMP Versione aggiunta:** 16

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

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

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

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

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

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

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

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

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

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

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

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

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

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

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

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

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

**Sintassi:** obj = Partial Least Squares(...Scaling( state=0|1)...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Scala tutte le variabili Y e gli effetti del modello dividendo ogni colonna per la propria deviazione standard. Per impostazione predefinita l&apos;opzione è attivata.

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

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

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

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

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

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

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

**Sintassi:** obj << Set Random Seed( number )

**Descrizione:** Specifica il seme casuale per eseguire un modello dei minimi quadrati parziali con crossvalidation.

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

**Sintassi:** obj << Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

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

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

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

**Sintassi:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Validation

**Sintassi:** obj << Validation( column )

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

**Sintassi:** obj << Validation Method( KFold( number )|Holdback( fraction )|"Leave-One-Out"|None, Initial Number of Factors( number )  )

**Descrizione:** Imposta il metodo utilizzato per la validazione del modello.

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

**Sintassi:** obj << View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Partial Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

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

**Sintassi:** obj << X( column(s) )

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

**Sintassi:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

