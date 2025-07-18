# Gaussian Process Model



## Costruttori associati

### Bayesian Optimization

**Sintassi:** Bayesian Optimization( Y( column ), X( columns ) )

**Descrizione:** Modellizza la relazione tra una risposta continua e uno o più predittori continui come spline con interpolazione.

```jsl

dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

## Messaggi degli elementi

### Copy Model Fit Script

**Sintassi:** obj &lt;&lt; Copy Model Fit Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

### Intercept

**Sintassi:** obj &lt;&lt; Intercept( number )

### Nugget

**Sintassi:** obj &lt;&lt; Nugget( number )

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Analizza come cambia ciascuna colonna rispetto alle modifiche del valore di ogni fattore sui modelli.

### Residual

**Sintassi:** obj &lt;&lt; Residual( number )

### Save Model Fit Script to Data Table

**Sintassi:** obj &lt;&lt; Save Model Fit Script to Data Table

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

### Save Model Fit Script to Journal

**Sintassi:** obj &lt;&lt; Save Model Fit Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

### Save Model Fit Script to Report

**Sintassi:** obj &lt;&lt; Save Model Fit Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

### Save Model Fit Script to Script Window

**Sintassi:** obj &lt;&lt; Save Model Fit Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

### Starting Values

**Sintassi:** obj &lt;&lt; Starting Values( number )

### Theta Values

**Sintassi:** obj &lt;&lt; Theta Values( number )

