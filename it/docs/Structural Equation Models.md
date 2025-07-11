# Structural Equation Models



## Structural Equation Models Fit

### All Modification Indices

**Sintassi:** obj << All Modification Indices( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

### Assess Measurement Model

**Sintassi:** obj << Assess Measurement Model( state=0|1 )

**Descrizione:** Mostra o nasconde statistiche di vario tipo per quantificare l&apos;affidabilità e la validità dei test e delle misure, tra cui l&apos;affidabilità degli indicatori, i coefficienti omega e H e una matrice di validità costruita.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Assess Measurement Model( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( state=0|1 )

**Descrizione:** Mostra o nasconde intervalli di confidenza al 95% per tutte le stime dei parametri.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Confidence Intervals( 1 );

```

### Copy Diagram Properties

**Sintassi:** obj << Copy Diagram Properties

**Descrizione:** Copia le proprietà del diagramma dei percorsi corrente negli Appunti. È quindi possibile incollare le proprietà in un altro diagramma dei percorsi SEM.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Sintassi:** obj << Copy Model Specification

**Descrizione:** Copia le specifiche correnti del modello di equazione strutturale negli Appunti. È quindi possibile incollare le specifiche del modello in un altro report della piattaforma SEM.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << (Fit[1] << Copy Model Specification());
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Model Specification();

```

### Correlation of Estimates

**Sintassi:** obj << Correlation of Estimates( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene la matrice di correlazione delle stime dei parametri per il modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates( 1 );

```

### Correlation of Estimates Heat Map

**Sintassi:** obj << Correlation of Estimates Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una heatmap delle correlazioni tra le stime del modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates Heat Map( 1 );

```

### Covariance of Estimates

**Sintassi:** obj << Covariance of Estimates( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene la matrice di covarianza delle stime dei parametri per il modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates( 1 );

```

### Covariance of Estimates Heat Map

**Sintassi:** obj << Covariance of Estimates Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una heatmap delle covarianze tra le stime del modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates Heat Map( 1 );

```

### Covariances

**Sintassi:** obj << Covariances

**Descrizione:** Aggiunge covarianze tra variabili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Define Time Values

**Sintassi:** obj << Define Time Values

**Descrizione:** Definisce le occasioni di misurazione per le osservazioni ripetute. Questi valori vengono usati per specificare i modelli longitudinali.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Fit(
		Model Name( "Linear Growth Model" ),
		Define Time Values( {0, 2, 3} ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
			}, {0, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) ),
		Predicted Values Plot( 1, 1 )
	)
);

```

### Equation Details

**Sintassi:** obj << Equation Details( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene i dettagli di ogni equazione nel modello.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);
obj << Equation Details( 0 );

```

### Fit Indices

**Sintassi:** obj << Fit Indices( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene gli indici di stima del modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Fit Indices( 1 );

```

### Indirect Effects

**Sintassi:** obj << Indirect Effects( state=0|1 )

**Descrizione:** Mostra o nasconde tutti gli effetti indiretti disponibili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Indirect Effects( 1 );

```

### Loadings

**Sintassi:** obj << Loadings

**Descrizione:** Aggiunge pesi fattoriali alle variabili latenti nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Means/Intercepts

**Sintassi:** obj << Means/Intercepts

**Descrizione:** Aggiunge medie o intercette alle variabili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

### Model Implied Correlations

**Sintassi:** obj << Model Implied Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene la matrice di correlazione implicita nel modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations( 1 );

```

### Model Implied Correlations Heat Map

**Sintassi:** obj << Model Implied Correlations Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una heatmap delle correlazioni implicite del modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations Heat Map( 1 );

```

### Model Implied Covariances

**Sintassi:** obj << Model Implied Covariances( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene la matrice di covarianza implicita nel modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances( 1 );

```

### Model Implied Covariances Heat Map

**Sintassi:** obj << Model Implied Covariances Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una heatmap delle covarianze implicite del modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances Heat Map( 1 );

```

### Model Implied Means

**Sintassi:** obj << Model Implied Means( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le medie di ogni variabile implicita nel modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Means( 1 );

```

### Model Name

**Sintassi:** obj << Model Name

**Descrizione:** Imposta un nome di modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Modification Indices

**Sintassi:** obj << Modification Indices( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

### Modification Indices for Covariances

**Sintassi:** obj << Modification Indices for Covariances( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Covariances( 1 );

```

### Modification Indices for Loadings

**Sintassi:** obj << Modification Indices for Loadings( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Loadings( 1 );

```

### Modification Indices for Means

**Sintassi:** obj << Modification Indices for Means( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Means( 1 );

```

### Modification Indices for Regressions

**Sintassi:** obj << Modification Indices for Regressions( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Regressions( 1 );

```

### Modification Indices for Variances

**Sintassi:** obj << Modification Indices for Variances( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime degli indici di modifica del modello. Questi valori possono essere usati per determinare quali parametri potrebbero essere aggiunti al modello per migliorare la stima.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {.25}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {.25}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {.25}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {.25}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Variances( 1 );

```

### New Latent

**Sintassi:** obj << New Latent

**Descrizione:** Aggiunge una nuova variabile latente nel modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Normalized Residuals

**Sintassi:** obj << Normalized Residuals( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una matrice dei residui normalizzati per il modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals( 1 );

```

### Normalized Residuals Heat Map

**Sintassi:** obj << Normalized Residuals Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una heatmap dei residui normalizzati per il modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals Heat Map( 1 );

```

### Parameter Estimates

**Sintassi:** obj << Parameter Estimates( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime non standardizzate dei parametri per il modello. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Parameter Estimates( 0 );

```

### Paste Diagram Properties

**Sintassi:** obj << Paste Diagram Properties

**Descrizione:** Incolla le proprietà del diagramma dei percorsi dagli Appunti nel diagramma dei percorsi SEM corrente.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Path Diagram Properties

**Sintassi:** obj << Path Diagram Properties

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Predicted Values Plot

**Sintassi:** obj << Predicted Values Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma dei valori previsti per le variabili endogene nel modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: LGC with LDF" );
obj << Predicted Values Plot( 1, 1 );

```

### Prediction Profiler

**Sintassi:** obj << Prediction Profiler

**Descrizione:** Mostra o nasconde un profiler di previsione per i risultati selezionati, dati i predittori selezionati e il modello specificato.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);

```

### R Square for Endogenous Variables

**Sintassi:** obj << R Square for Endogenous Variables( state=0|1 )

**Descrizione:** Mostra o nasconde un report con valori R-quadro per tutte le variabili endogene nel modello.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << R Square for Endogenous Variables( 1 );

```

### RAM Matrices

**Sintassi:** obj << RAM Matrices( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le matrici del modello usate nella notazione del modello di azione reticolare (RAM).

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << RAM Matrices( 1 );

```

### Recall in Model Specification

**Sintassi:** obj << Recall in Model Specification

**Descrizione:** Imposta il modello nel report Specifica del modello in base al modello specificato.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Recall in Model Specification( 1 );

```

### Regressions

**Sintassi:** obj << Regressions

**Descrizione:** Aggiunge percorsi di regressione al modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**Descrizione:** Rimuove il report del modello specificato dalla finestra del report.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Remove Fit( 1 );

```

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene una matrice dei residui per il modello. Questa matrice è la differenza tra la matrice di covarianza implicita nel modello e la matrice di covarianza del campione.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Residuals( 1 );

```

### Save Bartlett Factor Scores

**Sintassi:** obj << Save Bartlett Factor Scores

**Descrizione:** Salva una colonna con lo score fattore per ogni variabile in colonne nella tabella di dati. Gli score fattore sono calcolati in una colonna nascosta, anch&apos;essa aggiunta alla tabella di dati. Per stimare questi score è utilizzato il metodo di Bartlett.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Bartlett Factor Scores();

```

### Save Factor Scores

**Sintassi:** obj << Save Factor Scores

**Descrizione:** Salva una colonna con lo score fattore per ogni variabile in colonne nella tabella di dati. Gli score fattore sono calcolati in una colonna nascosta, anch&apos;essa aggiunta alla tabella di dati. Per stimare questi score è utilizzato il metodo della regressione.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Factor Scores();

```

### Save Observational Residuals

**Sintassi:** obj << Save Observational Residuals

**Descrizione:** Salva nella tabella di dati colonne che contengono valori residui dei risultati osservati nel modello.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Observational Residuals();

```

### Save Prediction Formulas

**Sintassi:** obj << Save Prediction Formulas

**Descrizione:** Salva nella tabella di dati colonne che contengono formule per i valori previsti dei risultati osservati nel modello.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Prediction Formulas();

```

### Show Path Diagram

**Sintassi:** obj << Show Path Diagram( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma dei percorsi SEM. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );

```

### Specific Indirect Effects

**Sintassi:** obj << Specific Indirect Effects

**Descrizione:** Consente di indicare gli effetti indiretti specifici da stimare dal modello.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Specific Indirect Effects( {"Ind60", "Dem65"} );

```

### Standardized Parameter Estimates

**Sintassi:** obj << Standardized Parameter Estimates( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le stime standardizzate dei parametri per il modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Standardized Parameter Estimates( 1 );

```

### Summary of Fit

**Sintassi:** obj << Summary of Fit( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene dettagli della stima del modello. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Summary of Fit( 0 );

```

### Total Effects

**Sintassi:** obj << Total Effects( state=0|1 )

**Descrizione:** Mostra o nasconde tutti gli effetti totali disponibili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Total Effects( 1 );

```

### Variances

**Sintassi:** obj << Variances

**Descrizione:** Aggiunge varianze alle variabili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

## Structural Equation Models Path Diagram

### Constant Border Color

**Sintassi:** obj << Path Diagram Properties( Constant Border Color ( color ) );

**Descrizione:** Modifica il colore del bordo delle variabili costanti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Border Color( "Blue" ) );

```

### Constant Fill Color

**Sintassi:** obj << Path Diagram Properties( Constant Fill Color ( color ) );

**Descrizione:** Modifica il colore di riempimento delle variabili costanti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Fill Color( "Blue" ) );

```

### Constant Font

**Sintassi:** obj << Path Diagram Properties( Constant Font ( font ) );

**Descrizione:** Modifica il carattere delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Font( "Sitka Small" ) );

```

### Constant Height

**Sintassi:** obj << Path Diagram Properties( Constant Height ( number ) );

**Descrizione:** Modifica l&apos;altezza (pixel) delle variabili costanti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Height( 20 ) );

```

### Constant Shape

**Sintassi:** obj << Constant Shape

**Descrizione:** Modifica l&apos;aspetto predefinito delle costanti nel diagramma dei percorsi, usate per rappresentare le medie e le intercette delle variabili.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Show Means( 1 ),
	Constant Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

### Constant Size Option

**Sintassi:** obj << Path Diagram Properties( Constant Size Option ( <Default | Scale To Text | Custom> ) );

**Descrizione:** Cambia la modalità della dimensione per Costante nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Constant Size Option( "Scale To Text" ) );

```

### Constant Text Color

**Sintassi:** obj << Path Diagram Properties( Constant Text Color ( color ) );

**Descrizione:** Modifica il colore del testo delle variabili costanti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Text Color( "Blue" ) );

```

### Constant Width

**Sintassi:** obj << Path Diagram Properties( Constant Width ( number ) );

**Descrizione:** Modifica la larghezza (pixel) delle variabili costanti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Width( 71 ) );

```

### Copy Diagram

**Sintassi:** obj << Copy Diagram

**Descrizione:** Salva un&apos;immagine della finestra del diagramma negli Appunti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
rpt[Node Graph Box( 1 )] << Copy Diagram;

```

### Copy Diagram Properties

**Sintassi:** obj << Copy Diagram Properties

**Descrizione:** Salva una copia delle impostazioni di script specifiche per il diagramma negli Appunti. Queste impostazioni possono essere quindi applicate ad altri diagrammi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

### Dashed Lines for Nonsignificant p-values

**Sintassi:** obj << Path Diagram Properties ("Dashed Lines for Nonsignificant p - values"n( 0 | 1 ) )

**Descrizione:** Mostra o nasconde linee tratteggiate per percorsi con p-value non significativi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( "Dashed Lines for Nonsignificant p - values"n( 0 ) );

```

### Diagram Size

**Sintassi:** obj << Path Diagram Properties( Diagram Size ( {x, y} ) )

**Descrizione:** Modifica la dimensione del diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

### Enable Grid

**Sintassi:** obj << Path Diagram Properties ( Enable Grid( 0|1) )

**Descrizione:** Attiva una griglia visiva nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Enable Grid( 1 ) );

```

### Fill Nodes With R Squared

**Sintassi:** obj << Path Diagram Properties ( Fill Nodes With R Squared ( 0|1) )

**Descrizione:** Specifica che i nodi nel modello stimato siano parzialmente riempiti in base al loro coefficiente di determinazione stimato. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Fill Nodes With R Squared( 1 ) );

```

### Latent Border Color

**Sintassi:** obj << Path Diagram Properties( Latent Border Color ( color ) );

**Descrizione:** Modifica il colore del bordo delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Border Color( "Blue" ) );

```

### Latent Fill Color

**Sintassi:** obj << Path Diagram Properties( Latent Fill Color ( color ) );

**Descrizione:** Modifica il colore di riempimento delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Fill Color( "Blue" ) );

```

### Latent Font

**Sintassi:** obj << Path Diagram Properties( Manifest Font ( font ) );

**Descrizione:** Modifica il carattere delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Font( "Sitka Small" ) );

```

### Latent Height

**Sintassi:** obj << Path Diagram Properties( Latent Height ( number ) );

**Descrizione:** Modifica l&apos;altezza (pixel) delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Height( 30 ) );

```

### Latent Shape

**Sintassi:** obj << Latent Shape

**Descrizione:** Modifica l&apos;aspetto predefinito delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Latent Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

### Latent Size Option

**Sintassi:** obj << Path Diagram Properties( Latent Size Option ( <Default | Scale To Text | Custom> ) );

**Descrizione:** Cambia la modalità della dimensione per i nodi latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Size Option( "Scale To Text" ) );

```

### Latent Text Color

**Sintassi:** obj << Path Diagram Properties( Latent Text Color ( color ) );

**Descrizione:** Modifica il colore del testo delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Text Color( "Blue" ) );

```

### Latent Width

**Sintassi:** obj << Path Diagram Properties( Latent Width ( number ) );

**Descrizione:** Modifica la larghezza (pixel) delle variabili latenti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Width( 71 ) );

```

### Layout

**Sintassi:** obj << Path Diagram Properties ( Layout("Left To Right"|"Top To Bottom") )

**Descrizione:** Imposta il layout iniziale del diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Layout( "Top To Bottom" ) );

```

### Lock Diagram

**Sintassi:** obj << Path Diagram Properties ( Lock Diagram( 0|1) )

**Descrizione:** Blocca il diagramma dei percorsi in modo che le modifiche al modello non causino il cambiamento del layout.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Lock Diagram( 1 ) );

```

### Manifest Border Color

**Sintassi:** obj << Path Diagram Properties( Manifest Border Color ( color ) );

**Descrizione:** Modifica il colore del bordo delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Border Color( "Blue" ) );

```

### Manifest Fill Color

**Sintassi:** obj << Path Diagram Properties( Manifest Fill Color ( color ) );

**Descrizione:** Modifica il colore di riempimento delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Fill Color( "Blue" ) );

```

### Manifest Font

**Sintassi:** obj << Path Diagram Properties( Manifest Font ( font ) );

**Descrizione:** Modifica il carattere delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Font( "Sitka Small" ) );

```

### Manifest Height

**Sintassi:** obj << Path Diagram Properties( Manifest Height ( number ) );

**Descrizione:** Modifica l&apos;altezza (pixel) delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Height( 30 ) );

```

### Manifest Shape

**Sintassi:** obj << Manifest Shape

**Descrizione:** Modifica l&apos;aspetto predefinito delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Shape( {Fill Color( "Green" )} ) );

```

### Manifest Size Option

**Sintassi:** obj << Path Diagram Properties( Manifest Size Option ( <Default | Scale To Text | Custom> ) );

**Descrizione:** Cambia la modalità della dimensione per i nodi manifesti nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Size Option( "Scale To Text" ) );

```

### Manifest Text Color

**Sintassi:** obj << Path Diagram Properties( Manifest Text Color ( color ) );

**Descrizione:** Modifica il colore del testo delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Text Color( "Blue" ) );

```

### Manifest Width

**Sintassi:** obj << Path Diagram Properties( Manifest Width ( number ) );

**Descrizione:** Modifica la larghezza (pixel) delle variabili manifeste nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Width( 67 ) );

```

### Paste Diagram Properties

**Sintassi:** obj << Paste Diagram Properties

**Descrizione:** Incolla una copia delle impostazioni di script specifiche per il diagramma dagli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

### Path Styles

**Sintassi:** obj << Path Styles

**Descrizione:** Modifica l&apos;aspetto predefinito dei percorsi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Styles( {Color( "Green" )} ) );

```

### Path Thickness

**Sintassi:** obj << Path Diagram Properties (Path Thickness( "Fixed"|"Map to Stdz. Estimates" ) )

**Descrizione:** Alterna se lo spessore dei percorsi nel diagramma è mantenuto a un valore fisso o è legato alla forza della sua stima standardizzata. "Fixed", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Thickness( "Map to Stdz. Estimates" ) );

```

### Path Transparency

**Sintassi:** obj << Path Diagram Properties (Path Transparency( "Fixed"|"Map to Stdz. Estimates" ) )

**Descrizione:** Alterna se la trasparenza dei percorsi nel diagramma è mantenuta a un valore fisso o è legato alla forza della sua stima standardizzata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Transparency( "Fixed" ) );

```

### Paths Alpha Level

**Sintassi:** obj << Path Diagram Properties( Paths Alpha Level ( number) );

**Descrizione:** Modifica la soglia minima del valore p per l&apos;utilizzo delle linee tratteggiate nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Alpha Level( 0.01 ) );

```

### Paths Color

**Sintassi:** obj << Path Diagram Properties( Paths Color ( color) );

**Descrizione:** Modifica il colore dei percorsi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Color( "Green" ) );

```

### Paths Font

**Sintassi:** obj << Path Diagram Properties( Paths Font ( font ) );

**Descrizione:** Modifica il carattere utilizzato per etichettare i percorsi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Font( "Segoe Script", 12, "Bold" ) );

```

### Paths Opacity

**Sintassi:** obj << Path Diagram Properties( Paths Opacity ( number) );

**Descrizione:** Modifica l&apos;opacità dei percorsi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Opacity( 0.5 ), Path Transparency( "Fixed" ) );

```

### Paths Thickness

**Sintassi:** obj << Path Diagram Properties( Paths Thickness ( number) );

**Descrizione:** Modifica lo spessore dei percorsi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Thickness( 2.7103 ) );

```

### Place Nodes

**Sintassi:** obj << Path Diagram Properties( Place Nodes ( { {name1, x1, y1}, {name2, x2, y2}, ...} ) )

**Descrizione:** Controlla il posizionamento di singoli nodi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

### R2 Fill Color

**Sintassi:** obj << Path Diagram Properties ( R2 Fill Color ( Color ) )

**Descrizione:** Specifica il colore per il riempimento parziale che rappresenta un valore R-quadro stimato della variabile.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( R2 Fill Color( Cyan ) );

```

### Rotate Latent Groups

**Sintassi:** obj << Rotate Latent Groups

**Descrizione:** Ruota l&apos;orientamento di tutti gli indicatori latenti nel diagramma. Se si selezionano gruppi latenti, questa opzione consente di ruotare solo l&apos;orientamento di tali gruppi latenti selezionati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Rotate Latent Groups;

```

### Rotate Loops

**Sintassi:** obj << Path Diagram Properties( Rotate Loops ( { {name1, angle1}, {name2, angle2}, ...} ) )

**Descrizione:** Controlla la rotazione dei cicli di varianza all&apos;interno del diagramma dei percorsi. Gli angoli sono misurati in radianti in senso orario.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

### SEM Node Graph Display

**Sintassi:** SEM Node Graph Display

### Show Constant Mean Square

**Sintassi:** obj << Show Constant Mean Square( state=0|1 )

**Descrizione:** Mostra o nasconde il bordo associato alla costante nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Constant Mean Square( 1 ) );

```

### Show Covariances

**Sintassi:** obj << Show Covariances( state=0|1 )

**Descrizione:** Mostra o nasconde le frecce bidirezionali che rappresentano le covarianze nel diagramma dei percorsi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );

```

### Show Equality Constraints

**Sintassi:** obj << Show Equality Constraints( state=0|1 )

**Descrizione:** Mostra o nasconde i vincoli di uguaglianza (valori fissi o etichette) sui bordi (edge) nel diagramma dei percorsi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );

```

### Show Estimates

**Sintassi:** obj << Show Estimates( "Non standardizzato"|"Standardizzato"|"Nessuno" )

**Descrizione:** Mostra o nasconde le stime dei parametri non standardizzate nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Estimates( "None" ) );

```

### Show Loadings

**Sintassi:** obj << Show Loadings( state=0|1 )

**Descrizione:** Mostra o nasconde gli indicatori della variabile latenti nel diagramma dei percorsi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Loadings( 0 ) );

```

### Show Means/Intercepts

**Sintassi:** obj << Show Means/Intercepts( state=0|1 )

**Descrizione:** Mostra o nasconde le medie nella Piattaforma SEM.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ) );

```

### Show R Squared Values

**Sintassi:** obj << Show R Squared Values( state=0|1 )

**Descrizione:** Mostra o nasconde i valori di R-quadro all&apos;interno dei nodi nel diagramma dei percorsi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show R Squared Values( 1 ) );

```

### Show Regressions

**Sintassi:** obj << Show Regressions( state=0|1 )

**Descrizione:** Mostra o nasconde le regressioni nella Piattaforma SEM. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Regressions( 0 ) );

```

### Show Variances

**Sintassi:** obj << Show Variances( state=0|1 )

**Descrizione:** Mostra o nasconde le frecce bidirezionali che rappresentano le varianze nel diagramma percorso. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Variances( 0 ) );

```

## Structural Equation Models Specification

### Covariances

**Sintassi:** obj << Covariances

**Descrizione:** Aggiunge covarianze tra variabili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Define Time Values

**Sintassi:** obj << Define Time Values

**Descrizione:** Definisce le occasioni di misurazione per le osservazioni ripetute. Questi valori vengono usati per specificare i modelli longitudinali.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Model Specification(
		Model Name( "Longitudinal Model" ),
		Define Time Values( {0, 2, 3} )
	)
);

```

### Loadings

**Sintassi:** obj << Loadings

**Descrizione:** Aggiunge pesi fattoriali alle variabili latenti nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Max Iterations

**Sintassi:** Structural Equation Models(..., Max Iterations( 3 )

**Descrizione:** Imposta il numero massimo di iterazioni per la convergenza. "1000", per impostazione predefinita.

**JMP Versione aggiunta:** 15

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} ),
		Max Iterations( 3 )
	)
);

```

### Means/Intercepts

**Sintassi:** obj << Means/Intercepts

**Descrizione:** Aggiunge medie o intercette alle variabili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

### Model Name

**Sintassi:** obj << Model Name

**Descrizione:** Specifica un nome per il modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Model Notes

**Sintassi:** obj << Model Notes

**Descrizione:** Specifica le note per il modello.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Model Notes(
			"This is a simple model with only means and variances for each variable"
		),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### New Latent

**Sintassi:** obj << New Latent

**Descrizione:** Aggiunge una nuova variabile latente nel modello.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Regressions

**Sintassi:** obj << Regressions

**Descrizione:** Aggiunge percorsi di regressione al modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Variances

**Sintassi:** obj << Variances

**Descrizione:** Aggiunge varianze alle variabili nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

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

### Add Manifest Variables

**Sintassi:** obj << Add Manifest Variables

**Descrizione:** Riavvia la piattaforma utilizzando la specifica del modello esistente e includendo le variabili manifeste appena aggiunte.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Add Manifest Variables();

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

### Automatic Recalc

**Sintassi:** obj << Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bootstrap Inference

**Sintassi:** obj << Bootstrap Inference

**Descrizione:** Esegue il bootstrap per una selezione di stime specificata dall&apos;utente nei modelli stimati disponibili nel report SEM.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Bootstrap Inference( Parameter Estimates( 1 ), Indirect Effects( 1 ) );

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

### Compare Selected Models

**Sintassi:** obj << Compare Selected Models

**Descrizione:** Confronta i modelli selezionati nella tabella Confronto di modelli.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Compare Selected Models( {"Orthogonal 3-Factor CFA", "3-Factor CFA"} );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Diagram Properties

**Sintassi:** obj << Copy Diagram Properties

**Descrizione:** Copia le proprietà del diagramma dei percorsi corrente negli Appunti. È quindi possibile incollare le proprietà in un altro diagramma dei percorsi SEM.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Sintassi:** obj << Copy Model Specification

**Descrizione:** Copia le specifiche correnti del modello di equazione strutturale negli Appunti. È quindi possibile incollare le specifiche del modello in un altro report della piattaforma SEM.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Data Table Window;

```

### Estimation Method

**Sintassi:** obj = Structural Equation Models(...Estimation Method( "Massima verosimiglianza (ML e FIML)"|"Massima verosimiglianza con inferenza robusta"|"Minimi quadrati MIIV a due stadi" )...)

**Descrizione:** Consente di utilizzare diversi stimatori per l&apos;analisi.

**JMP Versione aggiunta:** 19

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Goal_L, :Work_L, :Interact_L, "Leader"}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 ),
		Assess Measurement Model( 1 )
	)
);

```

### Fit

**Sintassi:** obj << Fit

**Descrizione:** Determina il modello di equazione strutturale da stimare.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Fit Independence Model

**Sintassi:** obj = Structural Equation Models(...Fit Independence Model( state=0|1 )...)

**Descrizione:** Disattiva la stima del modello di indipendenza all&apos;avvio della piattaforma. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Independence Model( 0 )
);

```

### Fit Unrestricted Model

**Sintassi:** obj << Fit Unrestricted Model( state=0|1 )

**Descrizione:** Disattiva la stima del modello non ristretto, noto anche come saturato, al momento dell&apos;avvio della piattaforma.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Unrestricted Model( 0 )
);

```

### Freq

**Sintassi:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Freq( _freqcol )
);

```

### Full Information Multivariate Statistics

**Sintassi:** obj << Full Information Multivariate Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde un report delle statistiche semplici multivariate dove le statistiche sono stimate con massima verosimiglianza con informazioni complete per rappresentare i dati mancanti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Full Information Multivariate Statistics( 1 );

```

### Generate R Code

**Sintassi:** obj << Generate R Code

**Descrizione:** Genera il codice R per il modello attualmente specificato. Il codice viene scritto in una finestra dell&apos;editor degli script.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Generate R Code();

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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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

### Groups

**Sintassi:** obj << Groups( column )

**Descrizione:** Specifica la variabile di raggruppamento per eseguire l&apos;analisi su più gruppi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
dt << Structural Equation Models( Model Variables( 4 :: 7 ), Groups( :Sex ) );

```

### Hide Model

**Sintassi:** obj << Hide Model

**Descrizione:** Nasconde i modelli in base alle selezioni nella tabella di confronto di modelli.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	),
	Hide Model( {3} )
);

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

### Launch Explore Missing Values

**Sintassi:** obj << Launch Explore Missing Values

**Descrizione:** Avvia la piattaforma Esplora valori mancanti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Missing Values( 1 );

```

### Launch Explore Outliers

**Sintassi:** obj << Launch Explore Outliers

**Descrizione:** Avvia la piattaforma Esplora outlier.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Outliers( 1 );

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

### Mean

**Sintassi:** obj = Structural Equation Models(...<Mean( column )>...)

**Descrizione:** Specifica le medie per ogni variabile manifesta in una matrice di correlazione o covarianza.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Messaggi degli elementi condivisi

### Model Specification

**Sintassi:** obj << Model Specification

**Descrizione:** Abilita la specifica di un modello di equazione strutturale.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Model Variables

**Sintassi:** obj << Model Variables( column(s) )

**Descrizione:** Specifica le variabili che saranno sottoposte all&apos;analisi.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);

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

### Paste Diagram Properties

**Sintassi:** obj << Paste Diagram Properties

**Descrizione:** Incolla le proprietà del diagramma dei percorsi dagli Appunti nel diagramma dei percorsi SEM corrente.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

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

### Paste Model Specification

**Sintassi:** obj << Paste Model Specification

**Descrizione:** Incolla le specifiche del modello dagli Appunti nelle specifiche del modello corrente.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Path Diagram Properties

**Sintassi:** obj << Path Diagram Properties

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
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

### Remove Manifest Variables

**Sintassi:** obj << Remove Manifest Variables

**Descrizione:** Riavvia la piattaforma utilizzando la specifica del modello esistente, senza le variabili manifeste rimosse.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Remove Manifest Variables();

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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Report View( "Summary" );

```

### Reset Independence Model

**Sintassi:** obj << Reset Independence Model

**Descrizione:** Sostituisce un modello di indipendenza specificato dall&apos;utente con quello predefinito.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );
obj << Reset Independence Model();

```

### Robust Inference

**Sintassi:** obj << Robust Inference( state=0|1 )

**Descrizione:** Calcola gli errori standard sandwich per le stime dei parametri ML o FIML e le statistiche di stima robusta. Questa opzione è utilizzata per risultati con distribuzione non normale in cui si assume una distribuzione sottostante continua.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Robust Inference( 1 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Script Window;

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

### Set as Independence Model

**Sintassi:** obj << Set as Independence Model( number )

**Descrizione:** Sostituisce il modello di indipendenza predefinito con uno specificato dall&apos;utente.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );

```

### Standardize Latent Variables

**Sintassi:** obj = Structural Equation Models(...Standardize Latent Variables( state=0|1 )...)

**Descrizione:** Imposta la varianza delle variabili latenti all&apos;unità al momento della specifica.

**JMP Versione aggiunta:** 15

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Standardize Latent Variables( 1 )
);

```

### Std Dev

**Sintassi:** obj = Structural Equation Models(...<Std Dev( column )>...)

**Descrizione:** Specifica le deviazioni standard per ogni variabile manifesta in una matrice di correlazione.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Structural Equation Models

**Sintassi:** Structural Equation Models( Model Variables ( columns ) )

**Descrizione:** Offre un contesto per stimare una serie di modelli, inclusa analisi fattoriale di conferma, modelli di percorso con o senza variabili latenti, modelli di errore di misurazione e modelli di curva di crescita latente.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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

### Univariate Simple Statistics

**Sintassi:** obj << Univariate Simple Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde un report di statistiche semplici univariate, dove le statistiche sono calcolate per ciascuna colonna in modo indipendente da altre colonne che potrebbero includere dati mancanti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Univariate Simple Statistics( 1 );

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

### Weight

**Sintassi:** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Weight( _weightcol )
);

```

### Window View

**Sintassi:** obj = Structural Equation Models(...Window View( "Visible"|"Invisible"|"Private" )...)

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

