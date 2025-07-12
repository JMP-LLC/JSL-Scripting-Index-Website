# Gaussian Process Model



## Elementmeldungen

### Copy Model Fit Script

**Syntax:** obj << Copy Model Fit Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

### Intercept

**Syntax:** obj << Intercept( number )

### Nugget

**Syntax:** obj << Nugget( number )

### Profiler

**Syntax:** obj << Profiler( state=0|1 )

**Beschreibung:** Untersucht, wie sich jede Spalte in Bezug auf Änderungen in den einzelnen Faktorwerten über Modelle ändert.

### Residual

**Syntax:** obj << Residual( number )

### Save Model Fit Script to Data Table

**Syntax:** obj << Save Model Fit Script to Data Table

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

### Save Model Fit Script to Journal

**Syntax:** obj << Save Model Fit Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

### Save Model Fit Script to Report

**Syntax:** obj << Save Model Fit Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

### Save Model Fit Script to Script Window

**Syntax:** obj << Save Model Fit Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

### Starting Values

**Syntax:** obj << Starting Values( number )

### Theta Values

**Syntax:** obj << Theta Values( number )

## Zugehörige Konstruktoren

### Bayesian Optimization

**Syntax:** Bayesian Optimization( Y( column ), X( columns ) )

**Beschreibung:** Modelliert die Beziehung zwischen einer stetigen Zielgröße und einem oder mehreren stetigen Prädiktoren als Spline mit Interpolation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

