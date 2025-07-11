# Time Series



## ARIMA

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Damped-Trend Linear Exponential Smoothing

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### Autocorrelation

**Sintassi:** obj << Autocorrelation( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;autocorrelazione nel report delle differenze. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

### Connecting Lines

**Sintassi:** obj << Connecting Lines( state=0|1 )

**Descrizione:** Mostra/Nasconde le linee che collegano i punti sul grafico delle differenze. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

### Difference Graph

**Sintassi:** obj << Difference Graph( state=0|1 )

**Descrizione:** Mostra/Nasconde il grafico delle differenze. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

### Mean Line

**Sintassi:** obj << Mean Line( state=0|1 )

**Descrizione:** Mostra/Nasconde la linea della media sul grafico delle differenze.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

### Partial Autocorrelation

**Sintassi:** obj << Partial Autocorrelation( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;autocorrelazione parziale nel report delle differenze. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Save

**Sintassi:** obj << Save

**Descrizione:** Salva i valori delle differenze in una nuova colonna nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde i punti sul grafico delle differenze. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma nel report delle differenze.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### Add Model

**Sintassi:** obj << Add Model( Window Width, <Centered> )

**Descrizione:** Aggiungi un modello di media mobile semplice. Il modello è identificato dalla larghezza della finestra mobile. L&apos;argomento facoltativo indica se la media è centrata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

### Connecting Lines

**Sintassi:** obj << Connecting Lines( <1|0> )

**Descrizione:** Opzione del grafico per la visualizzazione delle linee collegate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

### Get Results

**Sintassi:** obj << Get Results

**Descrizione:** Restituisce tutti i modelli di media mobile semplice come oggetto JSL.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

### Remove Model

**Sintassi:** obj << Remove Model( Window Width, <Centered> )

**Descrizione:** Rimuovi un modello di media mobile semplice. Il modello è identificato dalla larghezza della finestra mobile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

### Remove Report

**Sintassi:** obj << Remove Report

**JMP Versione aggiunta:** 16

### Save to Data Table

**Sintassi:** obj << Save to Data Table

**Descrizione:** Salva tutti i modelli di media mobile semplice in una tabella di dati e restituisce l&apos;handle della tabella di dati

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

### Show Points

**Sintassi:** obj << Show Points( <1|0> )

**Descrizione:** Opzione del grafico per la visualizzazione di punti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### Alternative Parameterization

**Sintassi:** obj << Alternative Parameterization( state=0|1 )

**Descrizione:** Specifica se il coefficiente di regressione generale è escluso dal calcolo dei polinomi del numeratore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Alternative Parameterization( 1 )
);

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

### Compute Objective

**Sintassi:** obj << Compute Objective

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

### Import New Inputs

**Sintassi:** obj << Import New Inputs

**JMP Versione aggiunta:** 16

### Maximum Iterations

**Sintassi:** obj << Maximum Iterations( number )

**Descrizione:** Specifica il numero massimo di iterazioni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Maximum Iterations( 10 )
);

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Rimuove i vincoli sui coefficienti AR e MA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Constrain( 1 )
);

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 )
);

```

### Number of Forecast Periods

**Sintassi:** obj << Number of Forecast Periods( number )

**Descrizione:** Specifica il numero di periodi per il forecasting.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Number of Forecast Periods( 10 )
);

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Partial Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Plot( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( number )

**Descrizione:** Imposta il livello degli intervalli di confidenza visualizzati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Confidence Intervals( 0.99 )
);

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Variogram( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### Actual

**Sintassi:** obj << Actual( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati effettivi per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

### Autocorrelations

**Sintassi:** obj << Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( number )

### Create SAS Job

**Sintassi:** obj << Create SAS Job

**Descrizione:** Crea un job SAS per avviare SAS ed eseguire l&apos;analisi in PROC ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

### Innovations

**Sintassi:** obj << Innovations( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Lower Confidence Limit

**Sintassi:** obj << Lower Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza inferiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

### No Constrain

**Sintassi:** obj << No Constrain( state=0|1 )

**Descrizione:** Innalza il vincolo sui parametri autoregressivi consentendo a questi ultimi di rimanere entro la regione stabile e ai parametri della media mobile entro la regione invertibile all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

### No Intercept

**Sintassi:** obj << No Intercept( state=0|1 )

**Descrizione:** Imposta l&apos;intercetta a zero all&apos;avvio di un modello ARIMA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

### Partial Autocorrelations

**Sintassi:** obj << Partial Autocorrelations( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma delle statistiche dei residui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### Predicted

**Sintassi:** obj << Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

### Prediction Interval

**Sintassi:** obj << Prediction Interval( level )

**Descrizione:** Imposta la dimensione dell&apos;intervallo di confidenza relativo alla previsione per il modello ARIMA. La dimensione predefinita è 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Residuals

**Sintassi:** obj << Residuals( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dei valori residui per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

### Save Columns

**Sintassi:** obj << Save Columns

**Descrizione:** Crea una nuova tabella di dati contenente i valori effettivi e previsti insieme agli errori standard, i residui e gli intervalli di previsione al 95% relativi alla risposta. Questa opzione è disponibile per tutti i modelli ARIMA, di smoothing e della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna della tabella di dati. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

### Show Confidence Interval

**Sintassi:** obj << Show Confidence Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

### Show Prediction Interval

**Sintassi:** obj << Show Prediction Interval( state=0|1 )

**Descrizione:** Mostra/Nasconde intervalli di previsione sul grafico di forecast delle serie storiche. Questa opzione è disponibile per tutti i modelli ARIMA e di smoothing. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

### Std Error of Predicted

**Sintassi:** obj << Std Error of Predicted( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati dell&apos;errore standard dei valori previsti per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

### Time

**Sintassi:** obj << Time( state=0|1 )

**Descrizione:** Seleziona la colonna dei dati temporali per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

### Upper Confidence Limit

**Sintassi:** obj << Upper Confidence Limit( state=0|1 )

**Descrizione:** Seleziona la colonna del limite di confidenza superiore al 95% per il salvataggio con il comando Salva colonne. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

### AR Coefficients

**Sintassi:** obj << AR Coefficients( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma del coefficiente di autocorrelazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**Sintassi:** obj << ARIMA( p, d, q, <No Intercept( 0|1 )>, <No Constrain( 0|1 )>, <Confidence Intervals( level )> )

**Descrizione:** Stima un modello ARIMA. Imposta l&apos;ordine p,d e q per un modello ARIMA(p,d,q). Imposta level per valori diversi da 0,95.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**Sintassi:** obj << ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**Descrizione:** Stima una serie di modelli ARIMA i cui ordini si trovano in range specifici.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

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

### Autocorrelation

**Sintassi:** obj << Autocorrelation( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**Sintassi:** obj = Time Series(...Autocorrelation Lags( number=25 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Imposta l&apos;opzione di avvio per il numero massimo di periodi tra i punti utilizzati nelle autocorrelazioni di calcolo. "25", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Automatic Recalc

**Sintassi:** obj << Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

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

### Combine and Save Forecasts from Models

**Sintassi:** obj << Combine and Save Forecasts from Models

**Descrizione:** Crea una nuova tabella di dati con i risultati combinati da tutte le stime di modello nel report.

**JMP Versione aggiunta:** 16

### Connecting Lines

**Sintassi:** obj << Connecting Lines( state=0|1 )

**Descrizione:** Mostra/Nasconde le linee collegate sul grafico delle serie storiche di base. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Cross Correlation

**Sintassi:** obj << Cross Correlation( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di cross-correlazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**Sintassi:** obj << Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descrizione:** Stima un modello di smoothing con trend ridimensionato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Data Table Window;

```

### Difference

**Sintassi:** obj << Difference( d, <D>, <S> )

**Descrizione:** Calcola le serie differenziate e produce grafici delle autocorrelazioni e autocorrelazioni parziali delle serie differenziate. La serie differenziata è data da  (1-B)^d * (1-B^S)^D * y_t , dove y_t è la serie storica, B è l&apos;operatore backshift definito da B * y_t = y_(t-1), d è l&apos;ordine di differenziazione non stagionale, D è l&apos;ordine di differenziazione stagionale e S è il numero di osservazioni per periodo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**Sintassi:** obj << Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descrizione:** Richiama la stima di un modello di smoothing esponenziale doppio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Double Exponential Smoothing( Zero to One ),
	Double Exponential Smoothing( Unconstrained ),
	Double Exponential Smoothing( Stable Invertible ),
	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Fit Recommended ETS

**Sintassi:** obj << Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**Descrizione:** Stima tutti i modelli di smoothing spazi di stato consigliati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**Sintassi:** obj = Time Series(...Forecast Periods( number=25 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Imposta l&apos;opzione di avvio per il numero di periodi in avanti nel report di forecasting. "25", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**Sintassi:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**Descrizione:** Determina se i forecast vengono effettuati su osservazioni future o sulle osservazioni di holdback. Se questa opzione è selezionata, i forecast sono effettuati sul set di holdback che è determinato dal numero specificato nell&apos;opzione Periodi di forecast.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**Sintassi:** obj << Generate Simulation( id, seed, length, n )

**Descrizione:** Genera una tabella di dati di più traiettorie future di un modello stimato. Restituisce il riferimento alla tabella.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

### Get Model Specs

**Sintassi:** obj << Get Model Specs

**Descrizione:** Restituisce un elenco con nome di risultati dei modelli, a ciascuno dei quali viene assegnato un nome in base alla specifica del modello. L&apos;output comprende anche stime ed errori standard. Disponibile per ARIMA, ARIMA stagionale, tutti i modelli di smoothing e i modelli della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**Sintassi:** obj << Get Models

**Descrizione:** Restituisce un elenco con nome di risultati dei modelli, a ciascuno dei quali viene assegnato un nome in base alle descrizioni dei modelli. L&apos;output comprende anche stime ed errori standard. Disponibile per ARIMA, ARIMA stagionale, tutti i modelli di smoothing e i modelli della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

### Hide All Reports

**Sintassi:** obj << Hide All Reports

**Descrizione:** Nasconde dalla finestra del report tutti i modelli che sono elencati nella tabella di confronto dei modelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

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

### Input List

**Sintassi:** obj << Input List( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Input Series

**Sintassi:** obj << Input Series( Column, <ARIMA( )>| <Prewhitening( )> ... )

**Descrizione:** Raggruppa messaggi inviati alle serie in input. Nota: occorre specificare una variabile dell&apos;elenco di input.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**Sintassi:** obj << Keep Best Models( "AIC"|"SBC" )

**Descrizione:** Mantiene i migliori modelli tra le singole classi di modelli e rimuove i modelli rimanenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
Wait( 1 );
obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**Sintassi:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**Descrizione:** Specifica il parametro lambda utilizzato per la trasformazione Box-Cox dei dati originali. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1),
	Name( "Lambda for Box-Cox" )(0)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**Sintassi:** obj << Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descrizione:** Stima un modello di smoothing esponenziale lineare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Linear Exponential Smoothing( Zero to One ),
	Linear Exponential Smoothing( Unconstrained ),
	Linear Exponential Smoothing( Stable Invertible ),
	Linear Exponential Smoothing(
		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )
	),
	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),
	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) )
);

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

### Maximum Iterations

**Sintassi:** obj << Maximum Iterations( maxIter=250 )

**Descrizione:** Reimposta il numero massimo di iterazioni per le ottimizzazioni future utilizzate nella stima del modello ARIMA. "250", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**Sintassi:** obj << Mean Line( state=0|1 )

**Descrizione:** Mostra/Nasconde la linea della media sul grafico delle serie storiche di base. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Messaggi degli elementi condivisi

### Model Comparison Report

**Sintassi:** obj << Model Comparison Report

**Descrizione:** Configura le impostazioni del report Confronto di modelli.

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

### Number of Forecast Periods

**Sintassi:** obj << Number of Forecast Periods( number )

**Descrizione:** Reimposta il numero di periodi di forecast e aggiorna il report di forecasting.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**Sintassi:** obj << Partial Autocorrelation( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma di autocorrelazione parziale. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

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

### Prewhitening

**Sintassi:** obj << Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**Descrizione:** Imposta l&apos;ordine di eliminazione preventiva del white noise.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series(
		:Input Gas Rate,
		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )
	)
);

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove All Simulation

**Sintassi:** obj << Remove All Simulation

**Descrizione:** Rimuove tutte le traiettorie future simulate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

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

### Remove Cycle

**Sintassi:** obj << Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**Descrizione:** Stima la componente ciclica utilizzando una funzione coseno e poi la rimuove dai dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**Sintassi:** obj << Remove Fit

**JMP Versione aggiunta:** 16

### Remove Linear Trend

**Sintassi:** obj << Remove Linear Trend

**Descrizione:** Stima il trend lineare e poi lo rimuove dai dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

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

### Remove Model Simulation

**Sintassi:** obj << Remove Model Simulation( id )

**Descrizione:** Rimuove traiettorie future simulate di un modello stimato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Script Window;

```

### Save Spectral Density

**Sintassi:** obj << Save Spectral Density

**Descrizione:** Salva la densità spettrale in una tabella.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**Sintassi:** obj << Seasonal ARIMA( p, d, q, P, D, Q, S, <No Intercept( 0|1 )>, <No Constrain( 0|1 )>, <Confidence Intervals( level )> )

**Descrizione:** Stima un modello ARIMA stagionale. Imposta l&apos;ordine p,d,q,P,D,Q e S per un modello ARIMA(p,d,q)(P,D,Q)S.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );
obj << seasonal arima(
	1,
	0,
	0,
	1,
	0,
	0,
	12,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### Seasonal Exponential Smoothing

**Sintassi:** obj << Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descrizione:** Stima un modello di smoothing esponenziale stagionale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
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

### Set Seed

**Sintassi:** obj << Set Seed( seed )

**Descrizione:** Imposta il seme casuale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**Sintassi:** obj << Show Box-Cox Transformation Plot( state=0|1 )

**JMP Versione aggiunta:** 16

### Show Lag Plot

**Sintassi:** obj << Show Lag Plot( state=0|1 )

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico delle serie storiche di base. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**Sintassi:** obj << Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descrizione:** Stima un modello di smoothing esponenziale semplice.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Simple Exponential Smoothing( Zero to One ),
	Simple Exponential Smoothing( Unconstrained ),
	Simple Exponential Smoothing( Stable Invertible ),
	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Simple Moving Average

**Sintassi:** obj << Simple Moving Average

**Descrizione:** Visualizza una finestra di specifica della media mobile semplice e stima un modello se non esistono ulteriori argomenti. Passa gli argomenti al modello di media mobile semplice che supporta script. Il valore di ritorno è l&apos;handle che supporta script del modello di media mobile semplice. Vedi media mobile semplice che supporta script per dettagli sugli argomenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**Sintassi:** obj << Simple Moving Average Centering Method( "Nessuna centratura"|"Centrato "|"Centrato e con doppio smoothing per numero pari di termini" )

### Simulate More

**Sintassi:** obj << Simulate More( id, n )

**Descrizione:** Simula più traiettorie future di un modello stimato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**Sintassi:** obj << Simulate Once( id )

**Descrizione:** Simula una traiettoria futura di un modello stimato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**Sintassi:** obj << Spectral Density( state=0|1 )

**Descrizione:** Mostra/Nasconde i grafici di densità spettrale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**Sintassi:** obj << State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**Descrizione:** Stima un modello di smoothing spazi di stato.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
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

### Time ID

**Sintassi:** obj << Time ID( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series

**Sintassi:** Time Series( Y( column ) )

**Descrizione:** Modella una serie di osservazioni su punti temporali equidistanti. Include un grafico delle serie storiche, autocorrelazioni, variogramma, densità spettrale, ARIMA, ARIMA stagionale, modelli di smoothing e forecast.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Graph

**Sintassi:** obj << Time Series Graph( state=0|1 )

**Descrizione:** Attiva o disattiva il grafico delle serie storiche di base. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transfer Function

**Sintassi:** obj << Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), <input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))>, ..., <No Intercept(flag1)>, <No Constrain(flag2)>, <Alternative Parameterization( flag3 )>, <Confidence Intervals( level )>, <Number of Forecast Periods( nAhead )> )

**Descrizione:** Stima un modello della funzione di trasferimento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 ),
	Alternative Parameterization( 1 ),
	Confidence Intervals( 0.99 ),
	Number of Forecast Periods( 10 )
);

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

### Use Box-Cox Transformation

**Sintassi:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**Descrizione:** Trasforma i dati originali utilizzando una trasformazione Box-Cox con lambda specificata nell&apos;opzione Lambda per Box-Cox. Se questa opzione è selezionata, tutte le analisi nel report delle serie temporali vengono eseguite sui dati trasformati.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**Sintassi:** obj << Variogram( state=0|1 )

**Descrizione:** Mostra/Nasconde il variogramma nel report delle diagnostiche di base delle serie storiche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

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

**Sintassi:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Winters Method

**Sintassi:** obj << Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descrizione:** Stima un modello di smoothing mediante il metodo di Winter.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom(
			Level( Bounded( 0, 1 ) ),
			Trend( Bounded( 0, 1 ) ),
			Seasonal( Bounded( 0, 1 ) )
		)
	)
);

```

### X

**Sintassi:** obj << X( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X11

**Sintassi:** obj << X11( Additive|Multiplicative )

**Descrizione:** Rimuove gli effetti trend e stagionali utilizzando il metodo X-11 sviluppato dall&apos;Ufficio censimenti degli Stati Uniti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

```

### Y

**Sintassi:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

