# Explore Outliers



## K Nearest Neighbor Outliers

### Close

**Sintassi:** obj << Close

**JMP Versione aggiunta:** 16

### Exclude Selected Rows

**Sintassi:** obj << Exclude Selected Rows

**JMP Versione aggiunta:** 16

### Impute Missing

**Sintassi:** obj << Impute Missing( state=0 )

**Descrizione:** Se mancano dei valori, viene utilizzata una PCA robusta per imputarli prima di analizzarli con K vicini più prossimi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### K

**Sintassi:** obj << K( number=8 )

**Descrizione:** Il numero di righe di vicini prossimi da trovare per ogni riga della tabella. "8", per impostazione predefinita.

**JMP Versione aggiunta:** 16

### Save NN Distances

**Sintassi:** obj << Save NN Distances

**Descrizione:** Salva nuove colonne nella tabella di dati contenente distanze al K vicino più prossimo.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Save NN Distances;

```

### Scatterplot Matrix

**Sintassi:** obj << Scatterplot Matrix

**Descrizione:** Apre una finestra contenente una matrice del grafico a dispersione per tutte le colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Scatterplot Matrix;

```

## Multivariate Robust Outliers

### Close

**Sintassi:** obj << Close

**JMP Versione aggiunta:** 16

### Exclude Selected Rows

**Sintassi:** obj << Exclude Selected Rows

**JMP Versione aggiunta:** 16

## Quantile Range Outliers

### Add Highest Nines to Missing Value Codes

**Sintassi:** obj << Add Highest Nines to Missing Value Codes( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti e trova i nove valori più alti in ciascuna colonna. Crea una proprietà Codici dei valori mancanti per tali valori in ogni colonna selezionata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Add Highest Nines to Missing Value Codes( :PS_RPNBR );
dt:PS_RPNBR << Get Column Properties;
//See Log for Missing Value Codes column property

```

### Add to Missing Value Codes

**Sintassi:** obj << Add to Missing Value Codes( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti e aggiunge la proprietà Codici di valori mancanti in tali colonne per gli outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

### Change Highest Nines to Missing

**Sintassi:** obj << Change Highest Nines to Missing( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti e trova i nove valori più alti in tali colonne. Cambia i nove valori più alti in mancanti. In tal modo la tabella di dati viene modificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Change Highest Nines to Missing( :PS_RPNBR );

```

### Change to Missing

**Sintassi:** obj << Change to Missing( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, cambia i valori identificati come outlier in valori mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

### Close

**Sintassi:** obj << Close

**Descrizione:** Rimuove una sezione dell&apos;analisi e riapre il riquadro dei comandi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

### Color Cells

**Sintassi:** obj << Color Cells( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, colora le celle che corrispondono agli outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

### Color Rows

**Sintassi:** obj << Color Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, assegna lo stato della riga Colore alle righe che corrispondono agli outlier.

**JMP Versione aggiunta:** 16

### Exclude Rows

**Sintassi:** obj << Exclude Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, esclude le righe contenenti i valori identificati come outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

### Formula Columns

**Sintassi:** obj << Formula Columns( ALL or column1, column2, ... )

**Descrizione:** Crea nuove colonne della formula dalle colonne selezionate cambiando gli outlier in mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

### Formula Script

**Sintassi:** obj << Formula Script( ALL or column1, column2, ... )

**Descrizione:** Crea uno script per creare nuove colonne della formula dalle colonne selezionate cambiando gli outlier in mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

### Get Quantile Outliers

**Sintassi:** obj << Get Quantile Outliers

**Descrizione:** Restituisce un elenco delle colonne che contengono outlier e un elenco di vettori che contengono valori di outlier in tali colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Get Quantile Outliers;

```

### Q

**Sintassi:** obj << Q( number=3 )

**Descrizione:** Definisce il fattore Q di scala multipla per la distanza interquantile. I valori grandi più di Q volte la distanza interquantile sono considerati outlier. Usa Analizza di nuovo per applicare il fattore. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Q( 4 ) );

```

### Rescan

**Sintassi:** obj << Rescan

**Descrizione:** Usare dopo avere cambiato le impostazioni per ricalcolare i criteri e analizzare nuovamente i dati per ottenere outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Tail Quantile( 0.2 );
obj << Rescan;

```

### Restrict search to integers

**Sintassi:** obj << Restrict search to integers( state=0|1 )

**Descrizione:** Limita i valori di outlier soltanto a valori interi. Questa impostazione limita la ricerca di outlier in modo da trovare codici di valori mancanti e codici di errori specifici del settore. Disponibile per i metodi Outlier range dei quantili e Outlier della stima robusta. Opzione disattivata per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Restrict search to integers( 1 ) )
);

```

### Save Quantile Outlier Limits

**Sintassi:** obj << Save Quantile Outlier Limits

**Descrizione:** Apre una tabella di dati contenente le informazioni sui report Outlier range dei quantili e una colonna di valori di outlier.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Save Quantile Outlier Limits;

```

### Select Rows

**Sintassi:** obj << Select Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti e seleziona le righe che hanno valori di outlier e in una qualsiasi di queste colonne.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

### Show only columns with outliers

**Sintassi:** obj << Show only columns with outliers( state=0|1 )

**Descrizione:** Limita l&apos;elenco delle colonne nel report a quelle che contengono outlier. Disponibile per i metodi Outlier range dei quantili e Outlier della stima robusta. Opzione disattivata per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);

```

### Tail Quantile

**Sintassi:** obj << Tail Quantile( number=.10 )

**Descrizione:** Imposta il valore del quantile per ogni coda. I quantili vengono usati per calcolare la distanza interquantile. Usare Analizza di nuovo per applicare l&apos;impostazione. ".10", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.2 ) );

```

## Robust Fit Outliers

### Add to Missing Value Codes

**Sintassi:** obj << Add to Missing Value Codes( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti e aggiunge la proprietà Codici di valori mancanti in tali colonne per gli outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

### Cauchy

**Sintassi:** obj << Cauchy( state=0|1 )

**Descrizione:** Utilizza una distribuzione di Cauchy per stimare il centro robusto e la scala dei valori. Il centro robusto e la scala vengono usati per determinare gli outlier.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Cauchy( 1 );
obj << Rescan;

```

### Change to Missing

**Sintassi:** obj << Change to Missing( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, cambia i valori identificati come outlier in valori mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

### Close

**Sintassi:** obj << Close

**Descrizione:** Rimuove una sezione dell&apos;analisi e riapre il riquadro dei comandi.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

### Color Cells

**Sintassi:** obj << Color Cells( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, colora le celle che corrispondono agli outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

### Color Rows

**Sintassi:** obj << Color Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, assegna lo stato della riga Colore alle righe che corrispondono agli outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << Clear Row States;
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Rows( :"Q-E"n, :"ZN-E"n );

```

### Exclude Rows

**Sintassi:** obj << Exclude Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti. Nelle colonne selezionate, esclude le righe contenenti i valori identificati come outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

### Formula Columns

**Sintassi:** obj << Formula Columns( ALL or column1, column2, ... )

**Descrizione:** Crea nuove colonne della formula dalle colonne selezionate cambiando gli outlier in mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

### Formula Script

**Sintassi:** obj << Formula Script( ALL or column1, column2, ... )

**Descrizione:** Crea uno script per creare nuove colonne della formula dalle colonne selezionate cambiando gli outlier in mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

### Huber

**Sintassi:** obj << Huber( state=0|1 )

**Descrizione:** Utilizza una stima di Huber per stimare il centro robusto e la scala dei valori. Il centro robusto e la scala vengono usati per determinare gli outlier.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Huber( 1 );
obj << Rescan;

```

### K Sigma

**Sintassi:** obj << K Sigma( number=4 )

**Descrizione:** Definisce il valore K sigma per il quale gli outlier sono distanti dal centro robusto K volte. "4", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 3 );
obj << Rescan;

```

### Quartile

**Sintassi:** obj << Quartile( state=0|1 )

**Descrizione:** Utilizza la mediana per stimare il centro robusto e il range interquartile diviso per 1,349 per stimare la scala robusta. Il centro robusto e la scala robusta vengono usati per determinare gli outlier.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Quartile( 1 );
obj << Rescan;

```

### Rescan

**Sintassi:** obj << Rescan

**Descrizione:** Usare dopo avere cambiato le impostazioni per ricalcolare i criteri e analizzare nuovamente i dati per ottenere outlier.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 2.5 );
obj << Rescan;

```

### Save Robust Outlier Limits

**Sintassi:** obj << Save Robust Outlier Limits

**Descrizione:** Apre una nuova tabella di dati che contiene informazioni dal report Stime robuste e outlier.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Save Robust Outlier Limits;

```

### Select Rows

**Sintassi:** obj << Select Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le colonne elencate come argomenti e seleziona le righe che hanno valori di outlier e in una qualsiasi di queste colonne.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

## Robust PCA Outliers

### Center

**Sintassi:** obj << Center( state=1 )

**Descrizione:** Specifica se centrare i dati rispetto alla mediana prima dell&apos;analisi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Close

**Sintassi:** obj << Close

**Descrizione:** Rimuove l&apos;analisi RPCA dal report della piattaforma.

**JMP Versione aggiunta:** 16

### Lambda

**Sintassi:** obj << Lambda( number )

**Descrizione:** Regolazione robusta di PCA con valori più bassi che la rendono più sensibile alla dichiarazione di outlier. Lambda predefinito=2/rquad(max(nRighe,nCol))

**JMP Versione aggiunta:** 16

### MaxIt

**Sintassi:** obj << MaxIt( number )

**Descrizione:** Il numero massimo di iterazioni SVD consentito prima di fallire la convergenza.

**JMP Versione aggiunta:** 16

### Outlier Threshold

**Sintassi:** obj << Outlier Threshold( number=2 )

**Descrizione:** Specifica che qualsiasi residuo scalato più grande, in valore assoluto, rispetto a questa soglia viene visualizzato come mostrato nel report degli outlier. "2", per impostazione predefinita.

**JMP Versione aggiunta:** 16

### Randomized SVD Dim

**Sintassi:** obj << Randomized SVD Dim( state=0|1 )

**Descrizione:** Specifica il numero di dimensioni nella SVD randomizzata a cui ridurre il problema ampio.

**JMP Versione aggiunta:** 17

### Save Cleaned

**Sintassi:** obj << Save Cleaned( Trim(<threshold>),Impute(<threshold>),Make Missing(<threshold>),Color Impute(0|1)--if none specified it will prompt with dialog )

**Descrizione:** Crea una nuova serie di colonne che contengono valori mancanti imputati e outlier modificati. Taglia(arg) trova i residui scalati maggiori di arg e modifica i residui scalati nelle celle corrispondenti nel valore di arg con segno. Imputa(arg) trova i residui scalati maggiori di arg e modifica i residui scalati nelle celle corrispondenti nell&apos;approssimazione di rango basso. Crea mancanti(valore) trova qualsiasi residuo scalato maggiore di arg e modifica i residui scalati nelle celle corrispondenti in mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Cleaned( Trim( 25 ), Impute( 50 ), Make Missing( 100 ) );

```

### Save Large Outliers

**Sintassi:** obj << Save Large Outliers

**Descrizione:** Crea una nuova tabella di dati che contiene gli outlier nel report.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Large Outliers;

```

### Save Low Rank Approx

**Sintassi:** obj << Save Low Rank Approx

**Descrizione:** Crea una nuova serie di colonne che contengono l&apos;approssimazione di rango basso, che si ottiene dalla scomposizione ai valori singolari.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Low Rank Approx;

```

### Save Residuals

**Sintassi:** obj << Save Residuals

**Descrizione:** Crea una nuova serie di colonne che contengono i residui, che sono le osservazioni meno l&apos;approssimazione di rango basso.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Residuals;

```

### Save Scaled Residuals

**Sintassi:** obj << Save Scaled Residuals

**Descrizione:** Crea una nuova serie di colonne che contengono i residui scalati, che sono le osservazioni scalate meno l&apos;approssimazione di rango basso.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Scaled Residuals;

```

### Scale

**Sintassi:** obj << Scale( state=1 )

**Descrizione:** Specifica se scalare i dati con un range interquantile analogo alla deviazione standard prima dell&apos;analisi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

### Tolerance

**Sintassi:** obj << Tolerance( number )

**Descrizione:** Specifica il criterio di convergenza, che determina quando interrompere l&apos;algoritmo. I valori predefiniti del criterio di convergenza sono impostati in base al numero di colonne specificato all&apos;avvio.

**JMP Versione aggiunta:** 16

### Use Randomized SVD

**Sintassi:** obj << Use Randomized SVD( state=0|1 )

**Descrizione:** Riduce la dimensionalità usando la SVD randomizzata. Questo approccio può accelerare i calcoli per problemi molto ampi.

**JMP Versione aggiunta:** 17

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

### Automatic Recalc

**Sintassi:** obj << Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );

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

### Columns

**Sintassi:** obj << Columns( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Data Table Window;

```

### Explore Outliers

**Sintassi:** Explore Outliers( Y( columns ) )

**Descrizione:** Identifica, esplora e gestisce outlier in dati univariati o multivariati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

### K Nearest Neighbor Outliers

**Sintassi:** obj << K Nearest Neighbor Outliers

**Descrizione:** Per ogni punto, trova la distanza al suo K vicino più prossimo.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << k Nearest Neighbor Outliers( K( 5 ) );

```

### Label

**Sintassi:** obj << Label( column )

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

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

### Messaggi degli elementi condivisi

### Multivariate k Nearest Neighbor Outliers

**Sintassi:** obj << Multivariate k Nearest Neighbor Outliers

**JMP Versione aggiunta:** 14

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

### Quantile Range Outliers

**Sintassi:** obj << Quantile Range Outliers

**Descrizione:** Trova valori superiori a un multiplo della scala di un range interquantile oltre i quantili.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Report View( "Summary" );

```

### Robust Fit Outliers

**Sintassi:** obj << Robust Fit Outliers

**Descrizione:** Trova valori superiori a un multiplo della scala lontano dal centro utilizzando stime robuste del centro e della scala.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;

```

### Robust PCA Outliers

**Sintassi:** obj << Robust PCA Outliers

**Descrizione:** Scompone in maniera robusta i dati in una matrice di rango basso e in una matrice sparsa di residui. Nei residui vengono rilevati gli outlier. Può anche imputare i valori mancanti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << Robust PCA Outliers;

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

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

**Sintassi:** obj = Explore Outliers(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Y

**Sintassi:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

