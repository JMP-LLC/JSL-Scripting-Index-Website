# Fit Y by X Group



## Bivariate > Bivariate Curve

### Confid Curves Fit

**Sintassi:** obj << ( Curve[number] << Confid Curves Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Fit( state=0|1 )} )

**Descrizione:** Mostra/Nasconde le bande di confidenza per la linea stimata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

### Confid Curves Indiv

**Sintassi:** obj << ( Curve[number] << Confid Curves Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Descrizione:** Mostra/Nasconde le bande di confidenza per un valore previsto individuale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

### Confid Shaded Fit

**Sintassi:** obj << ( Curve[number] << Confid Shaded Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Shaded Fit( state=0|1 )} )

**Descrizione:** Ombreggia l&apos;area tra le bande di confidenza e la linea stimata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Fit( 0 ));

```

### Confid Shaded Indiv

**Sintassi:** obj << ( Curve[number] << Confid Shaded Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**Descrizione:** Ombreggia l&apos;area tra le bande di confidenza per un singolo valore previsto e la linea stimata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

### Curve

**Sintassi:** obj << ( Curve[number] )

**Descrizione:** Accede a una curva individuale per l&apos;indirizzamento di ulteriori messaggi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );
obj << (curve[1] << Line of Fit( 1 ));
Wait( 1 );
obj << (curve[1] << Line of Fit( 0 ));

```

### Indiv Confidence Limit Formula

**Sintassi:** obj << ( Curve[number] << Indiv Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Indiv Confidence Limit Formula( <alpha> ) )

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Ci sono colonne per i limiti di confidenza inferiore e superiore per una previsione singola che sono funzioni dei regressori. Il livello predefinito per alfa è 0,05, che crea limiti di confidenza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

### Line Color

**Sintassi:** obj << ( Curve[number] << Line Color( "color" ) ); 

obj << Fit Name( {Line Color( "color" )} ) 

obj << Density Ellipse( {Line Color( "color" )} )

**Descrizione:** Cambia il colore della linea stimata, delle curve di confidenza e delle regioni di confidenza ombreggiate.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

### Line Style

**Sintassi:** obj << ( Curve[number] << Line Style( "pen style" ) ); 

obj << Fit Name( {Line Styel( "pen style" )} ) 

obj << Density Ellipse( {Line Style( "pen style" )} )

**Descrizione:** Cambia lo stile della linea stimata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

### Line Width

**Sintassi:** obj << ( Curve[number] << Line Width( number ) ); 

obj << Fit Name( {Line Width( number )} ) 

obj << Density Ellipse( {Line Width( number )} )

**Descrizione:** Cambia la larghezza della linea stimata e di qualsiasi banda di confidenza.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

### Line of Fit

**Sintassi:** obj << ( Curve[number] << Line of Fit( state=0|1 ) ); 

obj << Fit Name( {Line of Fit( state=0|1 )} ) 

obj << Density Ellipse( {Line of Fit( state=0|1 )} )

**Descrizione:** Mostra/Nasconde la linea di stima. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

### Mean Confidence Limit Formula

**Sintassi:** obj << ( Curve[number] << Mean Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Mean Confidence Limit Formula( <alpha> ) )

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Ci sono colonne per i limiti di confidenza inferiore e superiore per la risposta media che sono funzioni dei regressori. Il livello predefinito per alfa è 0,05, che crea limiti di confidenza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

### Plot Residuals

**Sintassi:** obj << ( Curve[number] << Plot Residuals( state=0|1 ) ); 

obj << Fit Name( {Plot Residuals( state=0|1 )} )

**Descrizione:** Mostra o nasconde cinque diagrammi diagnostici.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1, {Plot Residuals( 1 )} );
Wait( 1 );
obj << (curve[1] << Plot Residuals( 0 ));

```

### Profiler

**Sintassi:** obj << ( Curve[number] << Profiler( state=0|1 ) ); 

obj << Fit Name( {Profiler( state=0|1 )} )

**Descrizione:** Mostra o nasconde un profiler di previsione per il risultato selezionato, dati il predittore selezionato e il modello specificato.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Profiler( 1 )} );
Wait( 1 );
obj << (Curve[1] << Profiler( 0 ));

```

### Remove Fit

**Sintassi:** obj << ( Curve[number] << Remove Fit )

**Descrizione:** Rimuove la curva stimata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

### Report

**Sintassi:** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Fit Name( {Report( state=0|1 )} ) 

obj << Density Ellipse( {Report( state=0|1 )} )

**Descrizione:** Mostra o nasconde i report per il riepilogo della stima, la mancanza di adattamento, ANOVA, e le stime dei parametri. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

### Save Predicteds

**Sintassi:** obj << ( Curve[number] << Save Predicteds ); 

obj << Fit Name( {Save Predicteds} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene i valori previsti per la curva stimata specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

### Save Residuals

**Sintassi:** obj << ( Curve[number] << Save Residuals ); 

obj << Fit Name( {Save Residuals} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene i valori residui per la curva stimata specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

### Save Studentized Residuals

**Sintassi:** obj << ( Curve[number] << Save Studentized Residuals ); 

obj << Fit Name( {Save Studentized Residuals} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene i residui studentizzati per la curva stimata specificata.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

### Set Alpha Level

**Sintassi:** obj << ( Curve[number] << Set Alpha Level( alpha ) ); 

obj << Fit Name( {Set Alpha Level( alpha )} )

**Descrizione:** Modifica il livello alfa utilizzato per le bande di confidenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

### Set α Level

**Sintassi:** obj << ( Curve[number] << Set Alpha Level( alpha ) ); 

obj << Fit Name( {Set Alpha Level( alpha )} )

**Descrizione:** Modifica il livello alfa utilizzato per le bande di confidenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### 5% Contours

**Sintassi:** obj << ( Curve[number] << "5% Contours"n( state=0|1 ) ); 

obj << Nonpar Density( {"5% Contours"n( state=0|1 )} )

**Descrizione:** Mostra/Nasconde le linee isometriche pari al 5%. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {"5% Contours"n( 0 )} );
Wait( 1 );
obj << (curve[1] << "5% Contours"n( 1 ));

```

### Color By Density Quantile

**Sintassi:** obj << ( Curve[number] << Color By Density Quantile ); 

obj << Nonpar Density( {Color by Density Quantile} )

**Descrizione:** Colora i punti e le righe in base alla densità.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
Wait( 1 );
obj << (curve[1] << Color By Density Quantile);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color By Density Quantile} );

```

### Color Theme

**Sintassi:** obj << ( Curve[number] << Color Theme( "theme"(state=0|1 ) ) ); 

obj << Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**Descrizione:** Imposta il tema a colori per le linee isometriche della densità del quantile.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

### Contour Fill

**Sintassi:** obj << ( Curve[number] << Contour Fill( state=0|1 ) ); 

obj << Nonpar Density( {Contour Fill( state=0|1 )} )

**Descrizione:** Mostra o nasconde i profili isometrici riempiti.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );
obj << (curve[1] << Contour Fill( 1 ));

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Fill( 1 )} );

```

### Contour Lines

**Sintassi:** obj << ( Curve[number] << Contour Lines( state=0|1 ) ); 

obj << Nonpar Density( {Contour Lines( state=0|1 )} )

**Descrizione:** Mostra/Nasconde le linee isometriche. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Lines( 0 )} );
Wait( 1 );
obj << (curve[1] << Contour Lines( 1 ));

```

### Kernel Control

**Sintassi:** obj << ( Curve[number] << Kernel Control( state=0|1 ) ); 

obj << Nonpar Density( {Kernel Control( state=0|1 )} )

**Descrizione:** Mostra o nasconde un cursore per controllare la deviazione standard per ogni variabile. La deviazione standard definisce il range di valori X e Y per determinare la densità delle linee isometriche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 )} );
Wait( 1 );
obj << (curve[1] << Kernel Control( 0 ));

```

### Mesh Plot

**Sintassi:** obj << ( Curve[number] << Mesh Plot( state=0|1 ) ); 

obj << Nonpar Density( {Mesh Plot( state=0|1 )} )

**Descrizione:** Mostra o nasconde un diagramma tridimensionale della densità su una griglia delle due variabili di analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
Wait( 1 );
obj << (curve[1] << Mesh Plot( 0 ));

```

### Modal Clustering

**Sintassi:** obj << ( Curve[number] << Modal Clustering( state=0|1 ) ); 

obj << Nonpar Density( {Modal Clustering( state=0|1 )} )

**Descrizione:** Mostra o nasconde i risultati di una clusterizzazione modale dei dati, che identifica le assegnazioni dei cluster in base ai profili isometrici correnti. Questa opzione salva anche i numeri dei cluster in una nuova colonna nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Modal Clustering( 1 )} );
Wait( 1 );
obj << (curve[1] << Modal Clustering( 0 ));

```

### Remove Fit

**Sintassi:** obj << ( Curve[number] << Remove Fit )

**Descrizione:** Rimuove la densità non parametrica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density();
Wait( 1 );
obj << (curve[1] << Remove Fit);

```

### Report

**Sintassi:** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Nonpar Density( {Report( state=0|1 )} )

**Descrizione:** Mostra o nasconde il report Profili isometrici di densità per quantile. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Report( 0 )} );
Wait( 1 );
obj << (curve[1] << Report( 1 ));

```

### Save Density Grid

**Sintassi:** obj << ( Curve[number] << Save Density Grid ); 

obj << Nonpar Density( {Save Density Grid} )

**Descrizione:** Salva le colonne in una nuova tabella di dati. Le colonne contengono le stime di densità e i quantili corrispondenti.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Grid} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Grid);

```

### Save Density Quantile

**Sintassi:** obj << ( Curve[number] << Save Density Quantile ); 

obj << Nonpar( {Save Density Quantile} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene un valore che rappresenta il quantile di densità che contiene ogni punto.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Quantile);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Quantile} );

```

### Select Points by Density

**Sintassi:** obj << ( Curve[number] << Select Points by Density( lower probability, upper probability ) ); 

obj << Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**Descrizione:** Seleziona punti tra le probabilità inferiore e superiore specificate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );
Wait( 1 );
obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

### Set Kernel

**Sintassi:** obj << ( Curve[number] << Set Kernel( xStdDev, yStdDev )); 

obj << Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**Descrizione:** Imposta le deviazioni standard kernel sia per i valori X sia per i valori Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );
Wait( 1 );
obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### Confid Curves Fit

**Sintassi:** obj << ( Curve[number] << Confid Curves Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Fit( state=0|1 )} )

**Descrizione:** Mostra/Nasconde le bande di confidenza per la linea stimata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

### Confid Curves Indiv

**Sintassi:** obj << ( Curve[number] << Confid Curves Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Descrizione:** Mostra/Nasconde le bande di confidenza per un valore previsto individuale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

### Indiv Confidence Limit Formula

**Sintassi:** obj << ( Curve[number] << Indiv Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Indiv Confidence Limit Formula( <alpha> ) )

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Ci sono colonne per i limiti di confidenza inferiore e superiore per una previsione singola che sono funzioni dei regressori. Il livello predefinito per alfa è 0,05, che crea limiti di confidenza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

### Line Color

**Sintassi:** obj << ( Curve[number] << Line Color( "color" ) ); 

obj << Fit Name( {Line Color( "color" )} ) 

obj << Density Ellipse( {Line Color( "color" )} )

**Descrizione:** Cambia il colore della linea stimata, delle curve di confidenza e delle regioni di confidenza ombreggiate.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

### Line Style

**Sintassi:** obj << ( Curve[number] << Line Style( "pen style" ) ); 

obj << Fit Name( {Line Styel( "pen style" )} ) 

obj << Density Ellipse( {Line Style( "pen style" )} )

**Descrizione:** Cambia lo stile della linea stimata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

### Line Width

**Sintassi:** obj << ( Curve[number] << Line Width( number ) ); 

obj << Fit Name( {Line Width( number )} ) 

obj << Density Ellipse( {Line Width( number )} )

**Descrizione:** Cambia la larghezza della linea stimata e di qualsiasi banda di confidenza.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

### Line of Fit

**Sintassi:** obj << ( Curve[number] << Line of Fit( state=0|1 ) ); 

obj << Fit Name( {Line of Fit( state=0|1 )} ) 

obj << Density Ellipse( {Line of Fit( state=0|1 )} )

**Descrizione:** Mostra/Nasconde la linea di stima. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

### Mean Confidence Limit Formula

**Sintassi:** obj << ( Curve[number] << Mean Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Mean Confidence Limit Formula( <alpha> ) )

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Ci sono colonne per i limiti di confidenza inferiore e superiore per la risposta media che sono funzioni dei regressori. Il livello predefinito per alfa è 0,05, che crea limiti di confidenza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

### Remove Fit

**Sintassi:** obj << ( Curve[number] << Remove Fit )

**Descrizione:** Rimuove la curva stimata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

### Report

**Sintassi:** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Fit Name( {Report( state=0|1 )} ) 

obj << Density Ellipse( {Report( state=0|1 )} )

**Descrizione:** Mostra o nasconde i report per il riepilogo della stima, la mancanza di adattamento, ANOVA, e le stime dei parametri. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di curva**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Esempio di ellisse normale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

### Save Predicteds

**Sintassi:** obj << ( Curve[number] << Save Predicteds ); 

obj << Fit Name( {Save Predicteds} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene i valori previsti per la curva stimata specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

### Save Residuals

**Sintassi:** obj << ( Curve[number] << Save Residuals ); 

obj << Fit Name( {Save Residuals} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene i valori residui per la curva stimata specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

### Save Studentized Residuals

**Sintassi:** obj << ( Curve[number] << Save Studentized Residuals ); 

obj << Fit Name( {Save Studentized Residuals} )

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La colonna contiene i residui studentizzati per la curva stimata specificata.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

### Select Points Inside

**Sintassi:** obj << ( Curve[number] << Select Points Inside ); 

obj << Density Ellipse( {Select Points Inside} )

**Descrizione:** Seleziona punti all&apos;interno dell&apos;ellisse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Inside);
Wait( 1 );
obj << Density Ellipse( 0.8, {Select Points Inside} );

```

### Select Points Outside

**Sintassi:** obj << ( Curve[number] << Select Points Outside ); 

obj << Density Ellipse( {Select Points Outside} )

**Descrizione:** Seleziona punti all&apos;esterno dell&apos;ellisse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Outside);
Wait( 1 );
obj << Density Ellipse( 0.95, {Select Points Outside} );

```

### Shaded Contour

**Sintassi:** obj << ( Curve[number] << Shaded Contour( state=0|1 ) ); 

obj << Density Ellipse( {Shaded Contour( state=0|1 )} )

**Descrizione:** Mostra/nasconde il profilo isometrico ombreggiato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), );
obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );
Wait( 1 );
obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bivariate

**Sintassi:** Bivariate( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta continua rispetto a un&apos;altra variabile continua. I metodi di analisi comprendono la stima di linee, polinomi, spline e densità bivariate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

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

**Sintassi:** obj = Bivariate(...<By( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Copy Script;

```

### Curve

**Sintassi:** obj << ( Curve[number] << option )

**Descrizione:** Array di handle in funzione delle righe stimate. Consente di inviare messaggi della curva bivariata a specifiche curve stimate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Data Table Window;

```

### Density Ellipse

**Sintassi:** obj << Density Ellipse( percent )

**Descrizione:** Stima un profilo isometrico normale bivariato. Il profilo isometrico contiene la percentuale specificata del numero totale dei punti di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );

```

### Fit Cauchy

**Sintassi:** obj << Fit Cauchy

**Descrizione:** Stima un modello di regressione robusta in cui i parametri sono stimati tramite massima verosimiglianza con una funzione di legame di Cauchy.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Cauchy;

```

### Fit Each Value

**Sintassi:** obj << Fit Each Value

**Descrizione:** Stima una linea che attraversa il valore medio Y di ciascun insieme di valori X univoci.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Each Value;

```

### Fit Line

**Sintassi:** obj << Fit Line

**Descrizione:** Stima un modello di regressione dei minimi quadrati sui dati. Sul diagramma viene mostrata la linea stimata ed è fornito un report di stima.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;

```

### Fit Mean

**Sintassi:** obj << Fit Mean

**Descrizione:** Stima la media della variabile di risposta Y. Sul diagramma viene mostrata una linea retta con una pendenza pari a zero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Mean;

```

### Fit Orthogonal

**Sintassi:** obj << Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**Descrizione:** Stima il modello di regressione ortogonale specificato. I modelli di regressione ortogonale sono utili quando entrambe le variabili X e Y sono misurate con errore. L&apos;argomento Rapporto delle varianze specificato permette di specificare il rapporto delle varianze dell&apos;errore nella variabile X rispetto all&apos;errore nella variabile Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Orthogonal( Fit X to Y );

```

### Fit Passing Bablok

**Sintassi:** obj << Fit Passing Bablok

**Descrizione:** Stima un modello di regressione usando la procedura Passing-Bablok. Questa procedura è utile quando entrambe le variabili X e Y sono misurate con errore.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Passing Bablok;

```

### Fit Polynomial

**Sintassi:** obj << Fit Polynomial( degree of model )

**Descrizione:** Stima una curva polinomiale del grado specificato usando la regressione dei minimi quadrati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3 );

```

### Fit Robust

**Sintassi:** obj << Fit Robust

**Descrizione:** Stima un modello di regressione utilizzando il metodo di stima M di Huber, che è robusto rispetto agli outlier. La funzione di perdita di Huber penalizza gli outlier e cresce come una funzione quadratica per errori piccoli e come una funzione lineare per errori grandi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Robust;

```

### Fit Special

**Sintassi:** obj << Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), <Intercept( number )>, <Slope( number )>, <Degree( degree )>, Centered Polynomial>  )

**Descrizione:** Stima un modello di regressione che contiene trasformazioni per le variabili X e Y. È anche possibile impostare vincoli sulla pendenza e sull&apos;intercetta, così come stimare modelli polinomiali usando l&apos;argomento grado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Special( xTran( "Log" ) );
obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

### Fit Spline

**Sintassi:** obj << Fit Spline( lambda, <Standardized> )

**Descrizione:** Stima un modello dei minimi quadrati penalizzato sui dati, dove il parametro di smoothing, lambda, determina il grado di smoothing per il modello stimato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Spline( 341.1929, Standardized );
obj << Fit Spline( 341.1929 );

```

### Fit Where

**Sintassi:** obj << Fit Where( column == level, command )

**Descrizione:** Stima una curva in funzione di un singolo livello di una variabile categorica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

### Freq

**Sintassi:** obj = Bivariate(...<Freq( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( _freqcol ) );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
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

### Group By

**Sintassi:** obj << Group By( column )

**Descrizione:** Specifica una variabile di raggruppamento. Una volta specificata una variabile di raggruppamento, tutte le analisi vengono eseguite separatamente per ogni livello della variabile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Group By( :drug );
obj << Fit Line;

```

### Histogram Borders

**Sintassi:** obj << Histogram Borders( state=0|1 )

**Descrizione:** Mostra o nasconde gli istogrammi sugli assi orizzontale e verticale del grafico a dispersione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Histogram Borders( 1 );

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

### Kernel Smoother

**Sintassi:** obj << Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**Descrizione:** Applica una stima locale a sottoinsiemi ripetuti dei dati dove il range dei sottoinsiemi è determinato da alfa, il grado di smoothing della stima da lambda e il peso dalla funzione di peso. Gli outlier sono pesati sempre meno all&apos;aumentare della robustezza. Questo metodo è conosciuto anche come LOESS smoother.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Kernel Smoother( 1, 1, 0.84615, 0 );

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

### Nonpar Density

**Sintassi:** obj << Nonpar Density

**Descrizione:** Stima i profili isometrici di densità bivariati non parametrici e rappresenta i profili isometrici corrispondenti sul grafico. I profili isometrici sono su intervalli del 5%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density;

```

### Paired t test

**Sintassi:** obj << Paired t test

**Descrizione:** Esegue un test t appaiato, produce il report e visualizza una linea grigia a 45 gradi sul grafico a dispersione per rappresentare il punto in cui le due colonne sono uguali.



Questa opzione è stata promossa alla piattaforma Coppie corrispondenti. Questa opzione è accessibile anche dal menu Bivariato tenendo premuto il tasto Maiusc.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;

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

### Points Jittered

**Sintassi:** obj << Points Jittered( "Nessuno"|"Automatica"|"Numero uniforme casuale"|"Numero normale casuale"|"Jitter di densità casuale"|"Riempito"|"Griglia"|"Griglia esagonale"|"Grafico a sciame"="Automatica" )

**Descrizione:** Specifica la diffusione dei punti di dati. Quando è selezionata questa opzione, ai punti di dati è aggiunta una piccola componente casuale (jitter) per evitare la sovrapposizione degli indicatori. "Automatica", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );
obj << Points Jittered( "Random Normal" );

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Regressor

**Sintassi:** obj = Bivariate(...Regressor( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione continua.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Report View( "Summary" );

```

### Response

**Sintassi:** obj = Bivariate(...Response( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile o le variabili continue di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
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

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde punti sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
Wait( 1 );
obj << Show Points( 0 );

```

### Summary Statistics

**Sintassi:** obj << Summary Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde tabelle delle statistiche di riepilogo.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Summary Statistics( 1 );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
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

**Sintassi:** obj = Bivariate(...<Weight( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( _weightcol ) );

```

### Window View

**Sintassi:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintassi:** obj = Bivariate(...X( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione continua.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Y

**Sintassi:** obj = Bivariate(...Y( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile o le variabili continue di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

## Contingency > Analysis of Means for Proportions

### Point Options

**Sintassi:** obj << Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico Analisi delle medie per le proporzioni. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Sintassi:** obj << Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Sintassi:** obj << Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale per il grafico Analisi delle medie per le proporzioni. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Sintassi:** obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione nel grafico Analisi delle medie per le proporzioni. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Sintassi:** obj << Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione nel grafico Analisi delle medie per le proporzioni. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Sintassi:** obj << Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le proporzioni di risposta e i limiti di decisione per ogni livello della variabile X. Il report indica anche se un limite è stato superato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

### Switch Response Level for Proportion

**Sintassi:** obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) );

scrobj << Switch Response Level for Proportion( state=0|1 )

**Descrizione:** Cambia la categoria di risposta che viene utilizzata nell&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### Forest Plot

**Sintassi:** obj << Equivalence Tests( ..., Forest Plot( state=0|1 ) );

scobj << Forest Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il grafico a foresta dei test di equivalenza. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

### Remove

**Sintassi:** scobj << Remove

**Descrizione:** Rimuove il report dei test di equivalenza.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

### Test Report

**Sintassi:** obj << Equivalence Tests( ..., Test Report( state=0|1 ) );

scobj << Test Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che riepiloga i test di equivalenza, i test di superiorità o i test di non inferiorità per differenze di rischio o i rapporti di rischio. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### Cell Chi Square

**Sintassi:** obj << Contingency Table( Cell Chi Square( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il contributo delle singole celle alla statistica chi-quadrato nella tabella di contingenza.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Cell Chi Square( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

### Col %

**Sintassi:** obj << Contingency Table( Col %( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il contributo percentuale di ciascuna cella alla colonna nella tabella di contingenza. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 0 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Col Cum

**Sintassi:** obj << Contingency Table( Col Cum( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il totale cumulativo di colonna nella tabella di contingenza.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Col Cum %

**Sintassi:** obj << Contingency Table( Col Cum %( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde la percentuale cumulativa della colonna nella tabella di contingenza.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Count

**Sintassi:** obj << Contingency Table( Count( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il conteggio delle celle nella tabella di contingenza. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 0 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Deviation

**Sintassi:** obj << Contingency Table( Deviation( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde la deviazione delle singole celle nella tabella di contingenza. La deviazione delle singole celle è il conteggio effettivo delle celle meno il conteggio atteso.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Deviation( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Expected

**Sintassi:** obj << Contingency Table( Expected( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il conteggio atteso delle celle nella tabella di contingenza. Il conteggio atteso delle celle è il prodotto del corrispondente totale di riga e totale di colonna diviso per il totale complessivo.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Expected( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Make Into Data Table

**Sintassi:** obj << Contingency Table( Make Into Data Table )

**Descrizione:** Crea una tabella di dati che contiene i dati delle tabelle a campi incrociati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

### Row %

**Sintassi:** obj << Contingency Table( Row %( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il contributo percentuale di ciascuna cella alla riga nella tabella di contingenza. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 0 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

### Row Cum

**Sintassi:** obj << Contingency Table( Row Cum( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde il totale cumulativo di riga nella tabella di contingenza.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Row Cum %

**Sintassi:** obj << Contingency Table( Row Cum %( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde la percentuale cumulativa della riga nella tabella di contingenza.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

### Total %

**Sintassi:** obj << Contingency Table( Total %( state=0|1, <Format(...)> ) )

**Descrizione:** Mostra o nasconde la percentuale totale delle celle nella tabella di contingenza. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 0 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### 3D Correspondence Analysis

**Sintassi:** obj << Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**Descrizione:** Mostra o nasconde un grafico a dispersione tridimensionale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );
obj = Contingency(
	Y( :Vehicle Category ),
	X( :Manufacturer ),
	Contingency Table( 0 ),
	Tests( 0 )
);
Wait( 1 );
obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

### Make Table

**Sintassi:** obj << Correspondence Analysis( "Make Table" )

**Descrizione:** Crea una tabella di dati che contiene l&apos;output dell&apos;analisi delle corrispondenze.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Make Table" );

```

### Save Value Order

**Sintassi:** obj << Correspondence Analysis( "Save Value Order" )

**Descrizione:** Salva una proprietà della colonna Ordinamento dei valori per entrambe le colonne delle variabili X e Y nella tabella di dati. La proprietà della colonna specifica l&apos;ordine dei livelli ordinati per il primo coefficiente di score di corrispondenza.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

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

### Agreement Statistic

**Sintassi:** obj << Agreement Statistic( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene statistiche che misurano la concordanza tra livelli. Il report include la statistica Kappa, così come l&apos;errore standard, l&apos;intervallo di confidenza e il test di ipotesi per la statistica. Il report include anche il test di Bowker per la simmetria, noto anche come test di McNemar. Questa opzione è disponibile solo quando le variabili X e Y hanno gli stessi livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 ),
	Agreement Statistic( 1 )
);

```

### Analysis of Means for Proportions

**Sintassi:** obj << Analysis of Means for Proportions( state=0|1, <chart options> )

**Descrizione:** Mostra o nasconde un diagramma di decisione per l&apos;analisi delle medie per le proporzioni (ANOMP) per confrontare le proporzioni di gruppo. ANOMP è una procedura di confronto multiplo, che confronta le proporzioni di risposta per i livelli della variabile X con la proporzione di risposta complessiva. Questa opzione è disponibile solo quando la variabile Y ha esattamente due livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency(
	Y( :marital status ),
	X( :type ),
	Analysis of Means for Proportions( 1 )
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Block

**Sintassi:** obj = Contingency(...<Block( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una variabile di blocco. Identifica un secondo fattore ed esegue un test di Cochran-Mantel-Haenszel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

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

**Sintassi:** obj = Contingency(...<By( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );

```

### Cochran Armitage Trend Test

**Sintassi:** obj << Cochran Armitage Trend Test( state=0|1 )

**Descrizione:** Mostra o nasconde un test dei trend nelle proporzioni binomiali tra i livelli di una singola variabile. Questa opzione è disponibile solo quando una variabile ha esattamente due livelli e l&apos;altra variabile è ordinale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );
obj << Cochran Armitage Trend Test( 1 );

```

### Cochran Mantel Haenszel

**Sintassi:** obj << Cochran Mantel Haenszel( column );

obj << Cochran Mantel Haenszel( state=0|1 )

**Descrizione:** Mostra o nasconde un test che determina se esiste una relazione tra due variabili categoriche dopo avere applicato un blocco su una terza variabile di classificazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :type ), X( :marital status ) );
obj << Cochran Mantel Haenszel( :country );
Wait( 2 );
obj << Cochran Mantel Haenszel( 0 );

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

### Contingency

**Sintassi:** Contingency( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta categorica in una serie di gruppi categorici. I metodi di analisi comprendono test del chi-quadrato e diagrammi a mosaico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contingency Table

**Sintassi:** obj << Contingency Table( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella di frequenza a due vie. La tabella contiene una riga per ogni livello della variabile X e una colonna per ogni livello della variabile Y. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( 0 );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Copy Script;

```

### Correspondence Analysis

**Sintassi:** obj << Correspondence Analysis( state=0|1 );

obj << Correspondence Analysis( correspondence chart options )

**Descrizione:** Mostra o nasconde un&apos;analisi delle corrispondenze, che identifica le righe o le colonne di una tabella di frequenza che hanno pattern di conteggio simili. Nel diagramma dell&apos;analisi delle corrispondenze è presente un punto per ogni riga e per ogni colonna della tabella di contingenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( 1 );

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Data Table Window;

```

### Equivalence Tests of Relative Risk

**Sintassi:** obj << Equivalence Tests of Relative Risk( ratio, <alpha=.05>, <test type>, <Response Group( level )>, <Factor Group( level )> )

**Descrizione:** Verifica che i rischi relativi non differiscano di più di un rapporto determinato essere praticamente equivalente. È l&apos;inverso del solito test di significatività. Alfa, il tipo di test e i livelli dei gruppi sono argomenti opzionali. L&apos;argomento del tipo di test è "Equivalenza" per impostazione predefinita, ma può anche essere usato per specificare test di superiorità o non inferiorità.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Relative Risk(
		0.8,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

### Equivalence Tests of Risk Difference

**Sintassi:** obj << Equivalence Tests of Risk Difference( difference, <alpha=.05>, <test type>, <Response Group( level )>, <Factor Group( level )> )

**Descrizione:** Verifica che le differenze di rischio non differiscano di più di una quantità (differenza) determinata essere praticamente equivalente. È l&apos;inverso del solito test di significatività. Alfa, il tipo di test e i livelli dei gruppi sono argomenti opzionali. L&apos;argomento del tipo di test è "Equivalenza" per impostazione predefinita, ma può anche essere usato per specificare test di superiorità o non inferiorità.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

### Exact Agreement Statistic

**Sintassi:** obj << Exact Agreement Statistic( state=0|1 )

**Descrizione:** Mostra o nasconde la versione esatta dell&apos;indice di accordo Kappa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Agreement Statistic( 1 );

```

### Exact Cochran Armitage Trend Test

**Sintassi:** obj << Exact Cochran Armitage Trend Test( state=0|1 )

**Descrizione:** Mostra o nasconde la versione esatta del test di Cochran-Armitage per i trend.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Cochran Armitage Trend Test( 1 );

```

### Fisher's Exact Test

**Sintassi:** obj << Fisher&apos;s Exact Test( state=0|1 )

**Descrizione:** Mostra o nasconde il test esatto di Fisher per verificare l&apos;associazione tra due variabili categoriche. Questo test non dipende da alcuna ipotesi distributiva su grande campione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Fisher's Exact Test( 1 );

```

### Freq

**Sintassi:** obj = Contingency(...<Freq( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( _freqcol ) );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
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

### Grouping Category

**Sintassi:** obj = Contingency(...Grouping Category( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione ordinale o nominale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Horizontal Mosaic

**Sintassi:** obj << Horizontal Mosaic( state=0|1 )

**Descrizione:** Ruota il diagramma a mosaico orizzontalmente (1) o verticalmente (0).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
Wait( 2 );
obj << Horizontal Mosaic( 1 );

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

### Jonckheere Terpstra Test

**Sintassi:** obj << Jonckheere Terpstra Test( state=0|1 )

**Descrizione:** Mostra o nasconde un report del test di Jonckheere-Terpstra, che è un test non parametrico per differenze ordinate tra classi. Verifica l&apos;ipotesi nulla che la distribuzione della variabile di risposta non differisca tra le classi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
:height << Nominal( 1 );
obj = dt << Contingency(
	Y( :height ),
	X( :age ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
obj << Jonckheere Terpstra Test( 1 );

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

### Measures of Association

**Sintassi:** obj << Measures of Association( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le misure di associazione tra le variabili nella tabella di contingenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Measures of Association( 1 )
);

```

### Messaggi degli elementi condivisi

### Mosaic Plot

**Sintassi:** obj << Mosaic Plot( state=0|1 )

**Descrizione:** Mostra o nasconde una rappresentazione grafica della tabella di contingenza. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Mosaic Plot( 0 );

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

### Odds Ratio

**Sintassi:** obj << Odds Ratio( state=0|1 )

**Descrizione:** Mostra o nasconde un report dell&apos;odds ratio. Questa opzione è disponibile solo quando le variabili X e Y hanno esattamente due livelli ciascuna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relative Risk

**Sintassi:** obj << Relative Risk( state=0|1, <Y variable level, X variable level> ); 

obj << Relative Risk( state=0|1, <"All"> )

**Descrizione:** Mostra o nasconde il rischio relativo tra i livelli della risposta. Questa opzione è disponibile solo quando le variabili X e Y hanno esattamente due livelli ciascuna.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "All" );

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Report View( "Summary" );

```

### Response Category

**Sintassi:** obj = Contingency(...Response Category( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile o le variabili categoriche di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
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

### Set Alpha Level

**Sintassi:** obj << Set Alpha Level( alpha=0.05 )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione. "0.05", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

### Set α Level

**Sintassi:** obj << Set α Level( alpha=0.05 )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione. "0.05", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

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

### Tests

**Sintassi:** obj << Tests( state=0|1 )

**Descrizione:** Mostra o nasconde i test che misurano se i tassi dei livelli di risposta sono gli stessi fra i livelli della variabile X. Questi test sono analoghi alla tabella dell&apos;analisi della varianza per dati continui. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Tests( 0 );

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
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

### Two Sample Test for Proportions

**Sintassi:** obj << Two Sample Test for Proportions( state=0|1 )

**Descrizione:** Mostra o nasconde un test su due campioni per le proporzioni. Questo test confronta le proporzioni della variabile Y tra i due livelli della variabile X. Questa opzione è disponibile solo quando le variabili X e Y hanno esattamente due livelli ciascuna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Two Sample Test for Proportions( 1 )
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

### Weight

**Sintassi:** obj = Contingency(...<Weight( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( _weightcol ) );

```

### Window View

**Sintassi:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintassi:** obj = Contingency(...X( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione ordinale o nominale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Y

**Sintassi:** obj = Contingency(...Y( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile o le variabili categoriche di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

## Logistic

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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
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

**Sintassi:** obj = Logistic(...<By( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );

```

### Categorical Response

**Sintassi:** obj = Logistic(...Categorical Response( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile o le variabili categoriche di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

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

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( <state=0|1> | <fraction> )

**Descrizione:** Mostra/Nasconde gli intervalli di confidenza nella tabella delle stime dei parametri, a destra di ciascun effetto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );
obj << Confidence Intervals( 0.01 );

```

### Continuous Regressor

**Sintassi:** obj = Logistic(...Continuous Regressor( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione continua.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Data Table Window;

```

### Freq

**Sintassi:** obj = Logistic(...<Freq( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
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

### Inverse Prediction

**Sintassi:** obj << Inverse Prediction( Response( prob1, prob2, ... ), <Confidence Level( percent=0.95 )>, <Two sided|Lower One Sided|Upper One Sided> )

**Descrizione:** Consente di prevedere i valori della variabile predittiva per uno o più valori della variabile di risposta. Per impostazione predefinita, i limiti di confidenza al 95% bilaterali sono calcolati per ogni previsione inversa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

### Lift Curve

**Sintassi:** obj << Lift Curve( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma della curva lift. La curva lift traccia il rialzo rispetto alla porzione di osservazioni e fornisce un&apos;altra visione della capacità predittiva di un modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Lift Curve( 1 );

```

### Line Color

**Sintassi:** obj << Line Color( color )

**Descrizione:** Consente di selezionare il colore delle curve del diagramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Line Color( "Magenta" );

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

### Logistic

**Sintassi:** Logistic( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta categorica rispetto a una variabile continua. I metodi di analisi includono la regressione logistica e curve ROC.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Logistic Plot

**Sintassi:** obj << Logistic Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma logistico. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Logistic Plot( 0 );

```

### Messaggi degli elementi condivisi

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

### Odds Ratios

**Sintassi:** obj << Odds Ratios( state=0|1 )

**Descrizione:** Aggiunge o rimuove colonne che contengono odds ratio al report Stime dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Odds Ratios( 1 );

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

### Precision Recall Curve

**Sintassi:** obj << Precision Recall Curve( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma della curva di Precisione-Richiamo che contiene una curva per ogni livello della variabile di risposta. Una curva di precisione-richiamo traccia i valori di precisione rispetto ai valori di richiamo a una serie di soglie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << Precision Recall Curve( 1 );

```

### ROC Curve

**Sintassi:** obj << ROC Curve( state=0|1 )

**Descrizione:** Mostra o nasconde la curva ROC (Receiver Operating Characteristic) per ciascun livello della variabile di risposta. La curva ROC è un grafico della sensibilità rispetto a (1 - specificità).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << ROC Curve( 1 );

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Probability Formula

**Sintassi:** obj << Save Probability Formula

**Descrizione:** Salva nuove colonne nella tabella di dati. Le nuove colonne contengono la formula per la probabilità prevista dal modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Save Probability Formula;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
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

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti nel diagramma logistico. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Points( 0 );

```

### Show Rate Curve

**Sintassi:** obj << Show Rate Curve( state=0|1 )

**Descrizione:** Mostra o nasconde la curva del tasso nel diagramma logistico. La curva del tasso è utile solo se si hanno diversi punti per ogni valore della variabile X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Rate Curve( 1 );

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

### Target Level

**Sintassi:** obj = Logistic(...Target Level( level )...)

**Descrizione:** Specifica il livello della risposta di cui si desidera modellare la probabilità.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
obj << ROC Curve( 1 );

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
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

**Sintassi:** obj = Logistic(...<Weight( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Weight( _weightcol )
);

```

### Window View

**Sintassi:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintassi:** obj = Logistic(...X( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione continua.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Y

**Sintassi:** obj = Logistic(...Y( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile o le variabili categoriche di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

## Oneway > ANOM for Ranges

### Point Options

**Sintassi:** obj << ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Point Options( "Show Only Points" );

```

### Set Alpha Level

**Sintassi:** obj << ANOM for Ranges( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Sintassi:** obj << ANOM for Ranges( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale (range della media generale). Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Sintassi:** obj << ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione per il grafico di analisi dei range delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Sintassi:** obj << ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione per il grafico di analisi dei range delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Sintassi:** obj << ANOM for Ranges( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene i range di gruppo e i rispettivi limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### Point Options

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale (media generale ADM). Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione per il grafico ANOMV-Levene (ADM). Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione per il grafico ANOMV-Levene (ADM). Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le medie ADM di gruppo e i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### Graph in Variance Scale

**Sintassi:** obj << ANOM for Variances( 1,  Graph in Variance Scale( state=0|1 ) );

scrobj <<  Graph in Variance Scale( state=0|1 )

**Descrizione:** Specifica la scala dell&apos;asse verticale. Si può scegliere tra deviazioni standard e varianze.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Graph in Variance Scale( 0 );

```

### Point Options

**Sintassi:** obj << ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Sintassi:** obj << ANOM for Variances( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Sintassi:** obj << ANOM for Variances( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale (RMSE o MSE in base alla scala Y). Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Sintassi:** obj << ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione per il grafico ANOMV. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Sintassi:** obj << ANOM for Variances( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione per il grafico ANOMV. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Sintassi:** obj << ANOM for Variances( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le deviazioni standard (o varianze) di gruppo e i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### Point Options

**Sintassi:** obj << ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

### Set Alpha Level

**Sintassi:** obj << ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

### Show Center Line

**Sintassi:** obj << ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale (media generale). Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Sintassi:** obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione per il grafico ANOM-TR. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Sintassi:** obj << ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione per il grafico ANOM-TR. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Sintassi:** obj << ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le medie di gruppo delle trasformazioni in ranghi e i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### Point Options

**Sintassi:** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

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

**Sintassi:** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

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

**Sintassi:** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale (media generale) nel grafico ANOM. Per impostazione predefinita l&apos;opzione è attivata.

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

**Sintassi:** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione per il grafico ANOM. Per impostazione predefinita l&apos;opzione è attivata.

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

**Sintassi:** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione per il grafico ANOM. Per impostazione predefinita l&apos;opzione è attivata.

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

**Sintassi:** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le medie di gruppo e i limiti di decisione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### Forest Plot

**Sintassi:** obj << Equivalence Tests( ..., Forest Plot( state=0|1 ) );

scobj << Forest Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il grafico a foresta dei test di equivalenza. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

### Pairwise Comparisons

**Sintassi:** obj << Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) );

scobj << Equivalence Tests Pairwise Comparisons( state=0|1 )

**Descrizione:** Mostra o nasconde il report dei test di equivalenza per confronti appaiati per tutti i confronti appaiati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Pairwise Comparisons( 0 );

```

### Remove

**Sintassi:** scobj << Remove

**Descrizione:** Rimuove il report dei test di equivalenza.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

### Scatterplot

**Sintassi:** obj << Equivalence Tests( ..., Scatterplot( state=0|1 ) );

scobj << Scatterplot( state=0|1 )

**Descrizione:** Mostra o nasconde il grafico a dispersione dei test di equivalenza. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Scatterplot( 0 );

```

### Test Report

**Sintassi:** obj << Equivalence Tests( ..., Test Report( state=0|1 ) );

scobj << Test Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che riepiloga i test di equivalenza, i test di superiorità o i test di non inferiorità per medie o deviazioni standard. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### Confidence Quantile

**Sintassi:** obj << Each Pair( 1, Confidence Quantile( state=0|1 ) );

obj << All Pairs( 1, Confidence Quantile( state=0|1 ) );

obj << With Best( 1, Confidence Quantile( state=0|1 ) );

obj << With Control( 1, Confidence Quantile( state=0|1 ) );

obj << Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**Descrizione:** Mostra o nasconde i valori critici e il livello alfa utilizzati per i confronti di medie. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

 Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

### Connecting Letters Report

**Sintassi:** obj << Each Pair( 1, Connecting Letters Report( state=0|1 ) );

obj << All Pairs( 1, Connecting Letters Report( state=0|1 ) );

obj << Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**Descrizione:** Mostra o nasconde il tradizionale report codificato con lettere, dove le medie che non condividono una lettera sono significativamente differenti. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

 Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

### Detailed Comparisons Report

**Sintassi:** obj << Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**Descrizione:** Mostra o nasconde un report dettagliato per ciascun confronto. Ogni sezione riporta la differenza tra i livelli, errore standard e intervalli di confidenza, rapporti T, p-value e gradi di libertà. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

### Difference Matrix

**Sintassi:** obj << Each Pair( 1, Difference Matrix( state=0|1 ) );

obj << All Pairs( 1, Difference Matrix( state=0|1 ) );

obj << With Best( 1, Difference Matrix( state=0|1 ) );

obj << With Control( 1, Difference Matrix( state=0|1 ) );

obj << Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**Descrizione:** Mostra o nasconde una tabella con tutte le differenze di medie. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Difference Matrix( 1 ) );

```

### Dunnett's Lower

**Sintassi:** obj << Dunnett&apos;s Lower( state=0|1 )

**Descrizione:** Mostra o nasconde un test t a una coda inferiore di Dunnett, che verifica se le medie sono inferiori alla media di un gruppo di controllo.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

### Dunnett's Upper

**Sintassi:** obj << Dunnett&apos;s Upper( state=0|1 )

**Descrizione:** Mostra o nasconde un test t a una coda superiore di Dunnett, che verifica se le medie sono maggiori della media di un gruppo di controllo.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

### LSD Threshold Matrix

**Sintassi:** obj << Each Pair( 1, LSD Threshold Matrix( state=0|1 ) );

obj << All Pairs( 1, LSD Threshold Matrix( state=0|1 ) );

obj << With Best( 1, LSD Threshold Matrix( state=0|1 ) );

obj << With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**Descrizione:** Mostra o nasconde una matrice delle differenze appaiate delle medie meno la differenza meno significativa per quelle medie. Un valore positivo indica una coppia di medie che sono significativamente diverse. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

 Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

### Ordered Differences Report

**Sintassi:** obj << Each Pair( 1, Ordered Differences Report( state=0|1 ) );

obj << All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**Descrizione:** Mostra o nasconde tutte le differenze appaiate sul lato positivo, l&apos;errore standard della differenza, gli intervalli di confidenza, i p-value e un diagramma della grandezza della differenza con intervalli di confidenza sovrapposti. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

 Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

### Ordered Ratio Report

**Sintassi:** obj << Each Pair( 1, Ordered Differences Report( state=0|1 ) );

obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**Descrizione:** Mostra o nasconde tutte le differenze appaiate sul lato positivo, l&apos;errore standard della differenza, gli intervalli di confidenza, i p-value e un diagramma della grandezza della differenza con intervalli di confidenza sovrapposti. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

 Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

### Ratio Matrix

**Sintassi:** obj << Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) );

obj << Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**Descrizione:** Mostra o nasconde una tabella con tutte le differenze di medie. 



Each Pair è equivalente a Student&apos;s t. All Pairs è equivalente a Tukey HSD. With Best è equivalente a Hsu MCB. With Control è equivalente a Dunnett&apos;s. Each Pair Stepwise è equivalente a Newman-Keuls.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### Nemenyi Test

**Sintassi:** obj << Nemenyi Test( state=0|1 )

**Descrizione:** Mostra o nasconde un report del test di Nemenyi. Il test di Nemenyi è un test post-hoc appaiato per confronti multipli di somme medie dei ranghi per dati in blocchi non replicati. Questo test è di solito condotto post-hoc dopo risultati significativi del test di Friedman.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### ANOM

**Sintassi:** obj << ANOM( state=0|1, <chart options> )

**Descrizione:** Confronta ciascuna media di gruppo con la media generale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1 );

```

### ANOM for Ranges

**Sintassi:** obj << ANOM for Ranges( state=0|1, <chart options> )

**Descrizione:** Test per varianza ineguale confrontando i range di gruppo con il range medio generale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Ranges( 1 );

```

### ANOM for Variances

**Sintassi:** obj << ANOM for Variances( state=0|1, <chart options> )

**Descrizione:** Calcola un test della varianza ineguale confrontando le deviazioni standard di gruppo con la radice dello scarto quadratico medio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1 );

```

### ANOM for Variances with Levene(ADM)

**Sintassi:** obj << "ANOM for Variances with Levene(ADM)"n( state=0|1, <chart options> )

**Descrizione:** Calcola un test della varianza ineguale confrontando le medie di gruppo delle deviazioni assolute dalla mediana (ADM) con l&apos;ADM della media generale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

### ANOM with Transformed Ranks

**Sintassi:** obj << ANOM with Transformed Ranks( state=0|1, <chart options> )

**Descrizione:** Confronta il rango medio trasformato di ciascun gruppo con il rango medio trasformato generale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1 );

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

### All Graphs

**Sintassi:** obj << All Graphs( state=0|1 )

**Descrizione:** Mostra o nasconde il grafico a una variabile. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << All Graphs( 0 );

```

### All Pairs

**Sintassi:** obj << All Pairs( state=0|1 ); 

obj << Tukey HSD( state=0|1 ); 

obj << "All Pairs, Tukey HSD"n( state=0|1 )

**Descrizione:** Calcola il test HSD (Honestly Significant Difference) di Tukey, che protegge il tasso di errore generale.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Block

**Sintassi:** obj << Block( column )

**Descrizione:** Specifica una variabile di blocco. Quando viene specificata questa colonna, i valori della variabile di risposta vengono centrati dalla variabile di blocco.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

### Box Plots

**Sintassi:** obj << Box Plots( state=0|1 )

**Descrizione:** Mostra o nasconde i box plot degli outlier per ogni gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Box Plots( 1 );

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

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );

```

### CDF Plot

**Sintassi:** obj << CDF Plot( state=0|1 )

**Descrizione:** Mostra o nasconde la funzione di distribuzione cumulativa per tutti i gruppi nel report a una variabile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << CDF Plot( 1 );

```

### Cauchy Fit

**Sintassi:** obj << Cauchy Fit( state=0|1 )

**Descrizione:** Assume che gli errori abbiano una distribuzione di Cauchy. La stima (della distribuzione) di Cauchy è un metodo robusto che può gestire outlier estremi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Cauchy Fit( 1 );

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

### Compare Densities

**Sintassi:** obj << Compare Densities( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico delle funzioni di densità della probabilità sovrapposte per ogni gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Compare Densities( 1 );

```

### Comparison Circles

**Sintassi:** obj << Comparison Circles( state=0|1 )

**Descrizione:** Mostra o nasconde le circonferenze di confronto. Questa opzione è disponibile solo quando è aperto un report di confronto multiplo. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
Wait( 2 );
obj << Comparison Circles( 0 );

```

### Composition of Densities

**Sintassi:** obj << Composition of Densities( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico delle densità sommate, ponderate con il conteggio di ogni gruppo. Lungo il range della variabile X, il diagramma Composizione delle densità mostra come ogni gruppo contribuisce alla densità totale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Composition of Densities( 1 );

```

### Connect Means

**Sintassi:** obj << Connect Means( state=0|1 )

**Descrizione:** Mostra o nasconde linee rette che collegano le medie di gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Connect Means( 1 );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Data Table Window;

```

### Dunn All Pairs for Joint Ranks

**Sintassi:** obj << Dunn All Pairs for Joint Ranks( state=0|1 )

**Descrizione:** Mostra o nasconde il test di Dunn per tutte le coppie per ranghi congiunti. Questo test adotta la correzione di Bonferroni, ma è possibile che il tasso di errore generale non venga protetto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn All Pairs for Joint Ranks( 1 );

```

### Dunn With Control for Joint Ranks

**Sintassi:** obj << Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**Descrizione:** Mostra o nasconde il test di Dunn con un gruppo di controllo per ranghi congiunti. Questo test adotta la correzione di Bonferroni, ma è possibile che il tasso di errore generale non venga protetto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn With Control for Joint Ranks( 1, {12} );

```

### Dunnett's

**Sintassi:** obj << With Control( state=0|1, {control ID} ); 

obj << "Dunnett&apos;s"n( state=0|1, {control ID} ); 

obj << "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Descrizione:** Calcola il test di Dunnett, che verifica se le medie sono differenti dalla media di un gruppo di controllo.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

### Each Pair

**Sintassi:** obj << Each Pair( state=0|1 ); 

obj << "Student&apos;s t"n( state=0|1 ); 

obj << "Each Pair, Student&apos;s t"n( state=0|1 )

**Descrizione:** Calcola un test di singoli confronti appaiati utilizzando test t di Student senza alcuna correzione per i test multipli.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

### Each Pair Stepwise

**Sintassi:** obj << Each Pair Stepwise( state=0|1 ); 

obj << "Newman-Keuls"n( state=0|1 ); 

obj << "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Descrizione:** Calcola il test di Newman-Keuls; il test verifica se esistono differenze tra le medie usando il test dei range studentizzato in una procedura stepwise. Noto anche come metodo di Student-Newman-Keuls, questo test è meno conservativo e più potente di un test HSD di Tukey. Per ulteriori opzioni di visualizzazione vedere i messaggi dei confronti di medie a una via.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

### Equivalence Tests

**Sintassi:** obj << Equivalence Tests( difference, <alpha=.05>, <"Pooled Variance"|"Unequal Variances">, <test type> )

**Descrizione:** Verifica che le medie non differiscano di più di una quantità (differenza) determinata per essere praticamente equivalenti. È l&apos;inverso del solito test di significatività. Alfa, l&apos;assunto sulla varianza e il tipo di test sono argomenti opzionali. Per impostazione predefinita, viene utilizzato l&apos;assunto "Varianza aggregata". L&apos;argomento del tipo di test è "Equivalenza" per impostazione predefinita, ma può anche essere usato per specificare test di superiorità o non inferiorità.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

### Equivalence Tests of Std Dev

**Sintassi:** obj << Equivalence Tests of Std Dev( ratio, <alpha=.05>, <test type> )

**Descrizione:** Verifica che le deviazioni standard non differiscano di più di un rapporto determinato per essere praticamente equivalenti. È l&apos;inverso del solito test di significatività. Alfa e il tipo di test sono argomenti opzionali. L&apos;argomento del tipo di test è "Equivalenza" per impostazione predefinita, ma può anche essere usato per specificare test di superiorità o non inferiorità.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

### Freq

**Sintassi:** obj << Freq( column )

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( _freqcol ) );

```

### Friedman Rank Test

**Sintassi:** obj << Friedman Rank Test( state=0|1 )

**Descrizione:** Mostra o nasconde un test basato sugli score dei ranghi di Friedman. Gli score dei ranghi di Friedman sono i ranghi dei dati all&apos;interno di ogni livello della variabile di blocco. La versione parametrica di questo test è una ANOVA a misure ripetute. Questa opzione è disponibile solo quando all&apos;avvio della piattaforma viene specificata una variabile Blocco con un numero uguale di osservazioni all&apos;interno di ogni blocco.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

### Games-Howell

**Sintassi:** obj << "Games-Howell"n( state=0|1 );

**Descrizione:** Mostra o nasconde il confronto multiplo di Games-Howell tra tutte le coppie di medie. Questo test può essere applicato in contesti in cui non si può assumere che le varianze dei gruppi individuali siano uguali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Games-Howell"n( 1 );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
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

### Grand Mean

**Sintassi:** obj << Grand Mean( state=0|1 )

**Descrizione:** Mostra o nasconde la media generale della variabile Y. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );
Wait( 2 );
obj << Grand Mean( 1 );

```

### Grouping

**Sintassi:** obj << Grouping( column(s) )

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione ordinale o nominale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Histograms

**Sintassi:** obj << Histograms( state=0|1 )

**Descrizione:** Mostra o nasconde istogrammi affiancati a destra del grafico originale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );

```

### Hsu MCB

**Sintassi:** obj << With Best( state=0|1 ); 

obj << Hsu MCB( state=0|1 ); 

obj << "With Best, Hsu MCB"n( state=0|1 )

**Descrizione:** Calcola il test MCB (Multiple Comparison with Best) di Hsu, che verifica se le medie sono minori del massimo sconosciuto.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

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

### Jonckheere Terpstra Test

**Sintassi:** obj << Jonckheere Terpstra Test( state=0|1 )

**Descrizione:** Mostra o nasconde un report del test di Jonckheere-Terpstra, che è un test non parametrico per differenze ordinate tra classi. Verifica l&apos;ipotesi nulla che la distribuzione della variabile di risposta non differisca tra le classi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
obj = dt << Oneway( Y( :Height ), X( :age ) );
obj << Jonckheere Terpstra Test( 1 );

```

### Kolmogorov Smirnov Exact Test

**Sintassi:** obj << Kolmogorov Smirnov Exact Test( state=0|1 )

**Descrizione:** Mostra o nasconde il test esatto di Kolmogorov-Smirnov, che si basa sulla funzione di distribuzione (ripartizione) empirica. Questo test determina se la distribuzione della risposta è la stessa tra i gruppi. Questa opzione è disponibile solo quando la variabile X ha esattamente due livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Exact Test( 1 );

```

### Kolmogorov Smirnov Test

**Sintassi:** obj << Kolmogorov Smirnov Test( state=0|1 )

**Descrizione:** Mostra o nasconde un test basato sulla funzione di distribuzione (ripartizione) empirica, che verifica se la distribuzione della risposta è uguale tra i gruppi. Questa opzione è disponibile solo quando la variabile X ha esattamente due livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Test( 1 );

```

### Legend

**Sintassi:** obj << Legend( state=0|1 )

**Descrizione:** Mostra o nasconde una legenda per i diagrammi dei quantili normali, della funzione di distribuzione cumulativa (CDF) e della densità. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );
Wait( 2 );
obj << Legend( 1 );

```

### Line of Fit

**Sintassi:** obj << Line of Fit( state=0|1 )

**Descrizione:** Mostra o nasconde una linea di riferimento stimata sui dati per ogni livello della variabile X su ogni diagramma dei quantili aperto. Questa opzione è disponibile solo quando un diagramma dei quantili è aperto. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Line of Fit( 0 );

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

### Matching Column

**Sintassi:** obj << Matching Column( column )

**Descrizione:** Mostra o nasconde una stima lineare associata e una stima lineare corrispondente sul grafico a una variabile in base a una variabile corrispondente specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );
Wait( 2 );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );

```

### Matching Dotted Lines

**Sintassi:** obj << Matching Dotted Lines( state=0|1 )

**Descrizione:** Mostra o nasconde le linee punteggiate che collegano le medie attraverso i livelli mancanti della variabile corrispondente. I valori utilizzati al posto delle medie delle celle mancanti sono ottenuti utilizzando un modello ANOVA a due vie. Questa opzione è disponibile solo quando è selezionata l&apos;opzione Colonna corrispondente e i valori della variabile corrispondente sono tutti mancanti per un livello della variabile X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex[6 :: 8] = "";
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Matching Column( :sex );
Wait( 2 );
obj << Matching Dotted Lines( 1 );

```

### Matching Lines

**Sintassi:** obj << Matching Lines( state=0|1 )

**Descrizione:** Mostra o nasconde le linee che collegano le medie di ogni livello della variabile corrispondente. Questa opzione è disponibile solo quando è selezionata l&apos;opzione Colonna corrispondente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
Wait( 2 );
obj << Matching Lines( 0 );

```

### Mean CI Lines

**Sintassi:** obj << Mean CI Lines( state=0|1 )

**Descrizione:** Mostra o nasconde linee ai livelli di confidenza superiore e inferiore al 95% per ogni gruppo. I livelli di confidenza al 95% sono calcolati utilizzando la deviazione standard aggregata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean CI Lines( 1 );

```

### Mean Diamonds

**Sintassi:** obj << Mean Diamonds( state=0|1 )

**Descrizione:** Mostra o nasconde una stima intervallare della media sul grafico a una variabile. Ogni stima intervallare della media copre un intervallo di confidenza al 95% per la media del gruppo corrispondente, con una linea orizzontale in corrispondenza della media. Gli intervalli di confidenza al 95% sono calcolati utilizzando la deviazione standard aggregata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Diamonds( 1 );

```

### Mean Error Bars

**Sintassi:** obj << Mean Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde la media di ogni gruppo con barre di errore che sono un errore standard sopra e sotto la media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Error Bars( 1 );

```

### Mean Lines

**Sintassi:** obj << Mean Lines( state=0|1 )

**Descrizione:** Mostra o nasconde una linea alla media di ogni gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Lines( 1 );

```

### Mean of Means

**Sintassi:** obj << Mean of Means( state=0|1 )

**Descrizione:** Mostra o nasconde la media delle medie di gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean of Means( 1 );

```

### Means and Std Dev

**Sintassi:** obj << Means and Std Dev( state=0|1 )

**Descrizione:** Mostra o nasconde le linee della media, le barre di errore e le linee della deviazione standard sul grafico a una variabile e mostra o nasconde una tabella di statistiche di riepilogo. Gli errori standard per le medie usano le deviazioni standard dei singoli gruppi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means and Std Dev( 1 );

```

### Means/Anova

**Sintassi:** obj << Means( state=0|1 ); 

obj << "Means/Anova"n( state=0|1)

**Descrizione:** Mostra o nasconde le stime intervallari della media sul grafico a una variabile e mostra o nasconde un report ANOVA. Questa opzione è disponibile solo quando la variabile X ha più di due livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );

```

### Means/Anova/Pooled t

**Sintassi:** obj << Means( state=0|1 ); 

obj << "Means/Anova/Pooled t"n( state=0|1)

**Descrizione:** Mostra o nasconde le stime intervallari della media sul grafico a una variabile e mostra o nasconde un report ANOVA. Il report ANOVA include un report del test t aggregato che assume che i due gruppi abbiano varianze uguali. Questa opzione è disponibile solo quando la variabile X ha esattamente due livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );

```

### Median Exact Test

**Sintassi:** obj << Median Exact Test( state=0|1 )

**Descrizione:** Mostra o nasconde un&apos;analisi degli score mediani.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Median Exact Test( 1 );

```

### Median Test

**Sintassi:** obj << Median Test( state=0|1 )

**Descrizione:** Mostra o nasconde un test basato sugli score dei ranghi mediani. Gli score dei ranghi mediani sono 1 o 0, a seconda che un rango sia sopra o sotto il rango mediano. Il test della mediana è il test dei ranghi più potente per gli errori con distribuzioni doppio-esponenziali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Median Test( 1 );

```

### Messaggi degli elementi condivisi

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

### Newman-Keuls

**Sintassi:** obj << Each Pair Stepwise( state=0|1 ); 

obj << "Newman-Keuls"n( state=0|1 ); 

obj << "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Descrizione:** Calcola il test di Newman-Keuls; il test verifica se esistono differenze tra le medie usando il test dei range studentizzato in una procedura stepwise. Noto anche come metodo di Student-Newman-Keuls, questo test è meno conservativo e più potente di un test HSD di Tukey. Per ulteriori opzioni di visualizzazione vedere i messaggi dei confronti di medie a una via.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

### Normal Quantile Label

**Sintassi:** obj << Normal Quantile Label( state=0|1 )

**Descrizione:** Mostra o nasconde la scala dei quantili normali su ogni diagramma dei quantili aperto. Questa opzione è disponibile solo quando un diagramma dei quantili è aperto. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Normal Quantile Label( 0 );

```

### Oneway

**Sintassi:** Oneway( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta continua tra una serie di gruppi categorici. I metodi di analisi comprendono ANOVA, confronti di medie, analisi delle medie e diagrammi dei quantili.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

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

### Plot Actual by Quantile

**Sintassi:** obj << Plot Actual by Quantile( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma dei quantili a destra del grafico dell&apos;analisi a una variabile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Actual by Quantile( 1 );

```

### Plot Quantile by Actual

**Sintassi:** obj << Plot Quantile by Actual( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma dei quantili con la variabile Y sull&apos;asse orizzontale e le probabilità cumulative sull&apos;asse verticale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );

```

### Points

**Sintassi:** obj << Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti di dati sul grafico a una variabile. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << Points( 0 );

```

### Points Jittered

**Sintassi:** obj << Points Jittered( "Nessuno"|"Automatica"|"Numero uniforme casuale"|"Numero normale casuale"|"Jitter di densità casuale"|"Riempito"|"Griglia"|"Griglia esagonale"|"Grafico a sciame"="Automatica" )

**Descrizione:** Specifica la diffusione dei punti di dati. Quando è selezionata questa opzione, ai punti di dati è aggiunta una piccola componente casuale (jitter) per evitare la sovrapposizione degli indicatori. "Automatica", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );
obj << Points Jittered( "Binned" );

```

### Points Spread

**Sintassi:** obj << Points Spread( state=0|1 )

**Descrizione:** Specifica la diffusione dei punti di dati. Quando è selezionata questa opzione, i punti di dati sono diffusi lungo la larghezza dell&apos;intervallo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Points Spread( 1 );

```

### Pooled Variance

**Sintassi:** obj << Ratios with Pooled Variance( state=0|1 );

**Descrizione:** Mostra o nasconde il report del confronto tra i rapporti di ogni coppia di medie. Nell&apos;assunto di varianze uguali, l&apos;intervallo di confidenza aggregato per il rapporto medio è l&apos;intervallo di confidenza di Fieller.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1 );

```

### Power

**Sintassi:** obj << Power( Alpha( from, <to>, <by> ), Sigma( from, <to>, <by> ), Delta( from, <to>, <by> ), Number( from, <to>, <by> ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**Descrizione:** Effettua calcoli statistici della potenza.  Gli argomenti permettono di specificare range per alfa, sigma, delta e dimensione campionaria totale (Numero).  Il quinto argomento specifica i risultati del report.  Il sesto argomento richiede un diagramma di potenza e l&apos;argomento Fine chiude la finestra di dialogo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );
obj << Power(
	Alpha( 0.05 ),
	Sigma( 3.382, 3.73 ),
	Delta( 2.79679 ),
	Number( 10, 90, 5 ),
	Solve for Power,
	Power Plot,
	Done
);

```

### Proportion of Densities

**Sintassi:** obj << Proportion of Densities( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma del contributo alla densità dato da ogni livello della variabile X. Il contributo è mostrato come una proporzione della densità totale lungo il range della variabile X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Proportion of Densities( 1 );

```

### Quantiles

**Sintassi:** obj << Quantiles( state=0|1 )

**Descrizione:** Mostra o nasconde i box plot sul grafico a una variabile e mostra o nasconde un report dei quantili.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Quantiles( 1 );

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Report View( "Summary" );

```

### Response

**Sintassi:** obj << Response( column(s) )

**Descrizione:** Specifica la variabile o le variabili continue di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Robust Fit

**Sintassi:** obj << Robust Fit( state=0|1 )

**Descrizione:** Produce stime di Huber che sono equivalenti ai residui dei minimi quadrati per residui piccoli ed equivalenti ai valori assoluti minimi per residui grandi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );

```

### Robust Means Lines

**Sintassi:** obj << Robust Means Lines( state=0|1 )

**Descrizione:** Mostra o nasconde una linea sulla media robusta di ogni gruppo. Questa opzione è disponibile solo quando è selezionata l&apos;opzione Robusta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );
obj << Robust Means Lines( 1 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Normal Quantiles

**Sintassi:** obj << Save Normal Quantiles

**Descrizione:** Salva i valori quantili normali per ogni livello della variabile X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Normal Quantiles;

```

### Save Predicted

**Sintassi:** obj << Save Predicted

**Descrizione:** Salva la media prevista della variabile Y per ogni livello della variabile X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Predicted;

```

### Save Residuals

**Sintassi:** obj << Save Residuals

**Descrizione:** Salva i valori calcolati come la variabile Y meno la media della variabile Y entro ogni livello della variabile X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Residuals;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Script Window;

```

### Save Standardized

**Sintassi:** obj << Save Standardized

**Descrizione:** Salva i valori standardizzati della variabile Y per ogni livello della variabile X. Il valore standardizzato è la risposta centrata divisa per la deviazione standard entro ogni livello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Standardized;

```

### Select Group

**Sintassi:** obj << Select Group( X value )

**Descrizione:** Seleziona un gruppo evidenziando la circonferenza corrispondente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );
Wait( 2 );
obj << Select Group( 14 );

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

### Set Alpha Level

**Sintassi:** obj << Set Alpha Level( alpha=0.05 )

**Descrizione:** Cambia il livello alfa utilizzato nei report per i valori dei livelli di confidenza, le stime intervallari della media e i limiti di confidenza. "0.05", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

### Set α Level

**Sintassi:** obj << Set α Level( alpha=0.05 )

**Descrizione:** Cambia il livello alfa utilizzato nei report per i valori dei livelli di confidenza, le stime intervallari della media e i limiti di confidenza. "0.05", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

### Standard Deviations

**Sintassi:** obj << Standard Deviations

**Descrizione:** Avvia una finestra con le opzioni per i test di equivalenza, superiorità o non inferiorità per le deviazioni standard. Specificare il rapporto critico.

### Std Dev Lines

**Sintassi:** obj << Std Dev Lines( state=0|1 )

**Descrizione:** Mostra o nasconde linee che sono una deviazione standard sopra e sotto la media di ciascun gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Std Dev Lines( 1 );

```

### Steel With Control

**Sintassi:** obj << Steel With Control( state = 0|1, {control level} )

**Descrizione:** Mostra o nasconde il test di Steel che protegge il tasso di errore generale per il confronto di tutti gli altri gruppi con un gruppo di controllo. Questa è la versione non parametrica del metodo di Dunnett.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Steel With Control( 1, {12} );

```

### Steel-Dwass All Pairs

**Sintassi:** obj << "Steel-Dwass All Pairs"n( state=0|1 )

**Descrizione:** Mostra o nasconde il test di Steel-Dwass che protegge il tasso di errore generale. Questa è la versione non parametrica del metodo di Tukey.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Steel-Dwass All Pairs"n( 1 );

```

### Student's t

**Sintassi:** obj << Each Pair( state=0|1 ); 

obj << "Student&apos;s t"n( state=0|1 ); 

obj << "Each Pair, Student&apos;s t"n( state=0|1 )

**Descrizione:** Calcola un test di singoli confronti appaiati utilizzando test t di Student senza alcuna correzione per i test multipli.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
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

### Tukey HSD

**Sintassi:** obj << All Pairs( state=0|1 ); 

obj << Tukey HSD( state=0|1 ); 

obj << "All Pairs, Tukey HSD"n( state=0|1 )

**Descrizione:** Calcola il test HSD (Honestly Significant Difference) di Tukey, che protegge il tasso di errore generale.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

### Unequal Variances

**Sintassi:** obj << Unequal Variances( state=0|1 )

**Descrizione:** Mostra o nasconde quattro test per l&apos;uguaglianza delle varianze di gruppo. Questa opzione produce anche il test di Welch, che è un test ANOVA per confrontare le medie quando le varianze all&apos;interno dei gruppi non sono uguali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Unequal Variances( 1 );

```

### Unpooled Variance

**Sintassi:** obj << Ratios with Unpooled Variance( state=0|1 );

**Descrizione:** Mostra o nasconde il report del confronto tra i rapporti di ogni coppia di medie. Nell&apos;assunto di varianze ineguali, viene calcolato l&apos;intervallo di confidenza non aggregato a base Satterthwaite per il rapporto medio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Unequal Variance( 1 );

```

### Van Der Waerden Exact Test

**Sintassi:** obj << Van Der Waerden Exact Test( state=0|1 )

**Descrizione:** Mostra o nasconde un&apos;analisi degli score di Van der Waerden o normali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Van Der Waerden Exact Test( 1 );

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

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( _weightcol ) );

```

### Wilcoxon Each Pair

**Sintassi:** obj << Wilcoxon Each Pair( state=0|1 )

**Descrizione:** Mostra o nasconde il test di Wilcoxon per tutti i singoli confronti possibili, senza correzione per test multipli. Questa è la versione non parametrica del metodo Ciascuna coppia, t di Student.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Each Pair( 1 );

```

### Wilcoxon Exact Test

**Sintassi:** obj << Wilcoxon Exact Test( state=0|1 )

**Descrizione:** Mostra o nasconde un&apos;analisi degli score di Wilcoxon con metodi esatti per ciascuna coppia di livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Wilcoxon Exact Test( 1 );

```

### Wilcoxon Test

**Sintassi:** obj << Wilcoxon Test( state=0|1 )

**Descrizione:** Mostra o nasconde un test basato sugli score dei ranghi di Wilcoxon. Gli score dei ranghi di Wilcoxon sono i ranghi semplici dei dati. Il test di Wilcoxon è il test dei ranghi più potente per errori con distribuzioni logistiche. Se la variabile X ha esattamente due livelli, il test di Wilcoxon è equivalente al test di Mann-Whitney. Se la variabile X ha più di due livelli, viene eseguito il test di Kruskal-Wallis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Test( 1 );

```

### Window View

**Sintassi:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### With Best

**Sintassi:** obj << With Best( state=0|1 ); 

obj << Hsu MCB( state=0|1 ); 

obj << "With Best, Hsu MCB"n( state=0|1 )

**Descrizione:** Calcola il test MCB (Multiple Comparison with Best) di Hsu, che verifica se le medie sono minori del massimo sconosciuto.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

### With Control

**Sintassi:** obj << With Control( state=0|1, {control ID} ); 

obj << "Dunnett&apos;s"n( state=0|1, {control ID} ); 

obj << "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Descrizione:** Calcola il test di Dunnett, che verifica se le medie sono differenti dalla media di un gruppo di controllo.  Per ulteriori opzioni di visualizzazione, vedere i messaggi relativi ai confronti di medie a una variabile.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

### X

**Sintassi:** obj << X( column(s) )

**Descrizione:** Specifica le variabili predittore. Queste variabili devono avere un tipo di modellizzazione ordinale o nominale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### X Axis Proportional

**Sintassi:** obj << X Axis Proportional( state=0|1 )

**Descrizione:** Specifica la spaziatura sull&apos;asse orizzontale. Quando è selezionata questa opzione, la spaziatura è proporzionale al numero di osservazioni a ogni livello. Questa opzione non è disponibile quando è selezionata l&apos;opzione Colonna corrispondente. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );
Wait( 2 );
obj << X Axis Proportional( 1 );

```

### Y

**Sintassi:** obj << Y( column(s) )

**Descrizione:** Specifica la variabile o le variabili continue di risposta che si desidera analizzare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### t Test

**Sintassi:** obj << t Test( state=0|1 )

**Descrizione:** Mostra o nasconde un report del test t che assume che le varianze non siano uguali. Questa opzione è disponibile solo quando la variabile X ha esattamente due livelli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << t Test( 1 );

```

### van der Waerden Test

**Sintassi:** obj << van der Waerden Test( state=0|1 )

**Descrizione:** Mostra o nasconde un test basato sugli score dei ranghi di Van der Waerden. Gli score dei ranghi di Van der Waerden sono i ranghi dei dati divisi per uno più un valore di score. Il valore di score è il numero di osservazioni trasformato in uno score normale applicando l&apos;inverso della funzione di distribuzione normale. Il test di Van der Waerden è il più potente test dei ranghi per errori con distribuzioni normali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << van der Waerden Test( 1 );

```

