# Principal Components



## Colonne

### By

**Sintassi:** obj = Principal Components(...<By( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Columns

**Sintassi:** obj = Principal Components(...<Columns( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili da analizzare per i componenti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Freq

**Sintassi:** obj = Principal Components(...<Freq( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Supplementary Variable

**Sintassi:** obj << Supplementary Variable( column(s) )

**Descrizione:** Specifica una o più variabili supplementari. Le variabili supplementari non vengono utilizzate in alcun calcolo della piattaforma e la loro inclusione non influisce sui risultati. Queste variabili possono migliorare l&apos;interpretazione dei dati o essere utilizzate in analisi future.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**Sintassi:** obj = Principal Components(...<Weight( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Sintassi:** obj = Principal Components(...<Y( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili da analizzare per i componenti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**Sintassi:** obj << Z( column(s) )

**Descrizione:** Specifica una o più variabili supplementari. Le variabili supplementari non vengono utilizzate in alcun calcolo della piattaforma e la loro inclusione non influisce sui risultati. Queste variabili possono migliorare l&apos;interpretazione dei dati o essere utilizzate in analisi future.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

## Costruttori associati

### Principal Components

**Sintassi:** Principal Components( Y( columns ) )

**Descrizione:** Modella la variazione in un set di variabili in termini di un numero più piccolo di combinazioni lineari indipendenti (componenti principali) di tali variabili.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

## Messaggi degli elementi

### 3D Score Plot

**Sintassi:** obj << 3D Score Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico a dispersione 3D delle componenti principali come raggi in uno spazio tridimensionale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**Sintassi:** obj << Arrow Lines( state=0|1 )

**Descrizione:** Mostra o nasconde le linee freccia nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Arrow Lines( 0 );

```

### Bartlett Test

**Sintassi:** obj << Bartlett Test( state=0|1 )

**Descrizione:** Mostra o nasconde un report dei risultati del test di omogeneità per ciascuna delle componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Bartlett Test( 1 );

```

### Biplot

**Sintassi:** obj << Biplot( number )

**Descrizione:** Mostra o nasconde un grafico che sovrappone il diagramma degli score e il diagramma dei pesi fattoriali per il numero delle componenti specificato.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### Cluster Components

**Sintassi:** obj << Cluster Components( state=0|1 )

**Descrizione:** Mostra o nasconde il report delle componenti standardizzate, che contiene gli autovettori della prima componente principale all&apos;interno di ogni cluster. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**Sintassi:** obj << Cluster Members( state=0|1 )

**Descrizione:** Mostra o nasconde un report delle variabili di ogni cluster. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**Sintassi:** obj << Cluster Summary( state=0|1 )

**Descrizione:** Mostra o nasconde un report che riepiloga i risultati del clustering delle variabili. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**Sintassi:** obj << Cluster Variables( state=0|1 )

**Descrizione:** Raggruppa le variabili in gruppi simili.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**Sintassi:** obj << Color Map on Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori delle correlazioni tra le variabili, dove le variabili sono disposte in modo che i membri dello stesso cluster siano adiacenti nel diagramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Coordinate Matrix

**Sintassi:** obj << Coordinate Matrix( state=0|1 )

**Descrizione:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**Sintassi:** obj << Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di coefficienti di correlazione che riepiloga la forza delle relazioni lineari tra ogni coppia di variabili Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**Sintassi:** obj << Covariance Matrix( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di covarianze per ogni coppia di variabili Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**Sintassi:** obj << Eigenvalues( state=0|1 )

**Descrizione:** Mostra o nasconde gli autovalori ordinati, la rispettiva percentuale di variazione e la percentuale cumulata della variazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**Sintassi:** obj << Eigenvectors( state=0|1 )

**Descrizione:** Mostra o nasconde un report degli autovettori per ciascuna delle componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**Sintassi:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Imposta il metodo di stima per il calcolo delle correlazioni.

Se non esistono valori mancanti, l&apos;impostazione di default è A livello di riga.

Se vi sono valori mancanti e il numero di variabili <= 10 e il numero di righe <=5000, l&apos;impostazione di default è REML.

Se sono presenti valori mancanti, il numero di variabili > 10 o il numero di righe > 5000, l&apos;impostazione di default è Appaiato. "Impostazione predefinita", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**Sintassi:** obj << Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**Descrizione:** Mostra o nasconde un report del pattern di rotazione dei fattori per le componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**Sintassi:** obj << Formatted Loading Matrix( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene i pesi fattoriali delle componenti formattate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Formatted Loading Matrix( 1 );

```

### Impute Missing Data

**Sintassi:** obj << Impute Missing Data

**Descrizione:** Imputa i valori mancanti per tutte le variabili Y e crea una nuova tabella di dati che contiene sia i valori esistenti, sia i valori mancanti appena imputati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**Sintassi:** obj << Launch Fit Model

**Descrizione:** Avvia Stima modello con le variabili più rappresentative come predittori. Selezionare prima Salva componenti cluster se si desidera usare questi come predittori.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**Sintassi:** obj << Loading Matrix( number )

**Descrizione:** Mostra o nasconde una tabella che contiene i pesi fattoriali delle componenti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Matrix( 1 );

```

### Loading Plot

**Sintassi:** obj << Loading Plot( number )

**Descrizione:** Mostra o nasconde una matrice di diagrammi che sono rappresentazioni bidimensionali dei pesi fattoriali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**Sintassi:** obj = Principal Components(...Missing value imputation( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Imputa i valori mancanti attraverso il completamento della matrice. Questa opzione è applicabile a metodi ampi. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Truncated SVD" ),
	Number of Components( 6 ),
	Missing value imputation( 0 ),
	Standardize( "Standardized" )
);

```

### Model Driven Multivariate Control Chart

**Sintassi:** obj << Model Driven Multivariate Control Chart

**Descrizione:** Avvia la carta di controllo multivariata guidata da modello per un numero specificato di componenti

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**Sintassi:** obj = Principal Components(...Number of Components( number=10 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Imposta il numero delle componenti da estrarre. Per ridurre i tempi di calcolo, specificare un numero limitato di componenti. "10", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Sparse" ),
	Number of Components( 3 ),
	Standardize( "Standardized" )
);

```

### Outlier Analysis

**Sintassi:** obj << Outlier Analysis( state=0|1 )

**Descrizione:** Mostra o nasconde il report di analisi degli outlier che consente di individuare gli outlier nei dati tramite T² e le statistiche dei contributi.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	Standardize( "Standardized" ),
	Outlier Analysis( 1 )
);

```

### Partial Contribution of Variables

**Sintassi:** obj << Partial Contribution of Variables( number )

**Descrizione:** Mostra o nasconde una tabella che contiene i contributi parziali delle variabili e un grafico dei contributi parziali per le prime tre componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Partial Contribution of Variables(
	Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" )
);

```

### Profiler for Predicteds

**Sintassi:** obj << Profiler for Predicteds

**Descrizione:** Avvia un profiler per le previsioni utilizzando il numero di componenti specificato.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**Sintassi:** obj << Publish Components Formulas( number )

**Descrizione:** Crea un numero specificato di formule delle componenti principali e le salva come script della colonna della formula nella piattaforma Depot delle formule. Se un report del Depot delle formule non è aperto, questa opzione ne crea uno.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Estimation Method( "Wide" )
);
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**Sintassi:** obj << Publish Normalized DModX Formula( number )

**Descrizione:** Salva la formula DModX normalizzata in base a un numero specificato di componenti principali come script della colonna della formula nella piattaforma Depot delle formule. Se non è già aperto un report di Depot delle formule, questa opzione ne crea uno.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**Sintassi:** obj << Save Cluster Components

**Descrizione:** Salva il componente del cluster (primo principale) per ciascun cluster nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**Sintassi:** obj << Save Imputed Formula

**Descrizione:** Immette i valori dove i valori della colonna Y sono mancanti. Crea e salva una nuova colonna con formula di imputazione rispetto alla tabella di dati originale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**Sintassi:** obj << Save Individual Partial Contributions( number )

**Descrizione:** Salva i contributi parziali individuali in nuove colonne della tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**Sintassi:** obj << Save Individual Squared Cosines( number )

**Descrizione:** Salva i coseni al quadrato individuali in nuove colonne della tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**Sintassi:** obj << Save Low Rank Principal Components( number )

**Descrizione:** Salva gli score delle componenti principali ottenuti dai dati di rango basso, ripuliti da outlier e disturbo. Questa opzione si applica solo al metodo di stima PCA robusta.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "Robust PCA" ),
	Number of Components( 3 )
);
obj << Save Low Rank Principal Components( 3 );

```

### Save Normalized DModX

**Sintassi:** obj << Save Normalized DModX( number )

**Descrizione:** Salva i valori DModX normalizzati in una nuova colonna nella tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**Sintassi:** obj << Save Predicteds( number )

**Descrizione:** Salva le variabili previste con un numero specificato di componenti principali in nuove colonne nella tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**Sintassi:** obj << Save Predicteds as Component Formulas

**Descrizione:** Salva le formule delle componenti per un numero specificato di componenti principali in nuove colonne nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**Sintassi:** obj << Save Principal Component Script( number )

**Descrizione:** Salva uno script nella finestra dello script che, una volta eseguito, creerà nuove colonne nella tabella di dati per il numero specificato di componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**Sintassi:** obj << Save Principal Component Values( number )

**Descrizione:** Salva il numero specificato di componenti principali in nuove colonne non di formula nella tabella di dati, inclusi da celle imputate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**Sintassi:** obj << Save Principal Components( number )

**Descrizione:** Salva il numero specificato di componenti principali in nuove colonne della formula nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**Sintassi:** obj << Save Principal Components with Imputation( number )

**Descrizione:** Salva il numero specificato di componenti principali, calcolate imputando i valori mancanti, in nuove colonne nella tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**Sintassi:** obj << Save Rotated Components

**Descrizione:** Salva le componenti ruotate in nuove colonne nella tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components;

```

### Save Rotated Components with Imputation

**Sintassi:** obj << Save Rotated Components with Imputation

**Descrizione:** Salva il numero specificato di componenti ruotate, calcolate imputando i valori mancanti, in nuove colonne nella tabella di dati. Nota: questa opzione è disponibile solo dopo che è stata eseguita la rotazione dei fattori.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components with Imputation;

```

### Scatterplot Matrix

**Sintassi:** obj << Scatterplot Matrix( number )

**Descrizione:** Mostra o nasconde una matrice di score e diagrammi dei pesi fattoriali per un determinato numero di componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**Sintassi:** obj << Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1-sigma"|"2-sigma"|"3-sigma"|"Altro…" )

**Descrizione:** Modifica il livello alfa per le ellissi di confidenza nel diagramma degli score per ogni coppia di componenti principali.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**Sintassi:** obj << Score Ellipses( state=0|1 )

**Descrizione:** Mostra o nasconde le ellissi di confidenza nel diagramma degli score per ogni coppia di componenti principali.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipses( 1 );

```

### Score Plot

**Sintassi:** obj << Score Plot( number )

**Descrizione:** Mostra o nasconde una matrice di grafici a dispersione che contengono gli score per ogni coppia del numero specificato di componenti principali.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**Sintassi:** obj << Score Plot with Imputation( number of principal components )

**Descrizione:** Mostra o nasconde una matrice di grafici a dispersione che contengono gli score per ogni coppia del numero specificato di componenti principali, utilizzando l&apos;imputazione per i valori mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**Sintassi:** obj << Scree Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma a linee degli autovalori per ogni componente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Scree Plot( 1 );

```

### Select component

**Sintassi:** obj << Select component( <specify dimension to plot> )

**Descrizione:** Seleziona le dimensioni usate come assi in diagrammi di riepilogo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**Sintassi:** obj << Show Supplementary Variable( state=0|1 )

**Descrizione:** Mostra o nasconde le linee freccia per le variabili supplementari nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);
obj << Show Supplementary Variable( 0 );

```

### Squared Cosines of Variables

**Sintassi:** obj << Squared Cosines of Variables( number )

**Descrizione:** Mostra o nasconde una tabella che contiene i coseni quadrati delle variabili.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Squared Cosines of Variables(
	Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" )
);

```

### Standardize

**Sintassi:** obj = Principal Components(...Standardize( "Standardizzato"|"Non scalato"|"Non scalato e non centrato" )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica se ogni colonna deve essere standardizzata individualmente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**Sintassi:** obj << Summary Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un riquadro che contiene un diagramma degli autovalori, un diagramma degli score e un diagramma dei pesi fattoriali. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### on Correlations

**Sintassi:** Principal Components( Y( columns ), On Correlations )

**Descrizione:** Crea un report delle componenti principali utilizzando la matrice di correlazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**Sintassi:** Principal Components( Y( columns ), On Covariances )

**Descrizione:** Crea un report delle componenti principali utilizzando la matrice di covarianza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**Sintassi:** Principal Components( Y( column ), On Unscaled )

**Descrizione:** Crea un report delle componenti principali utilizzando i dati non scalati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

