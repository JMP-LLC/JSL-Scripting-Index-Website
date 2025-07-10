# Principal Components



### 3D Score Plot

**Syntax:** obj << 3D Score Plot( state=0|1 )

**Beschreibung:** Blendet ein 3D-Streudiagramm der Hauptkomponenten als Strahlen in einem dreidimensionalen Raum ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**Syntax:** obj << Arrow Lines( state=0|1 )

**Beschreibung:** Blendet die Pfeillinien im Graphen ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Arrow Lines( 0 );

```

### Bartlett Test

**Syntax:** obj << Bartlett Test( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Ergebnisse des Homogenitätstests für jede der Hauptkomponenten ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Bartlett Test( 1 );

```

### Biplot

**Syntax:** obj << Biplot( number )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das das Score-Diagramm und das Ladungsdiagramm für die angegebene Anzahl von Komponenten überlagert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### By

**Syntax:** obj = Principal Components(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```js

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

### Cluster Components

**Syntax:** obj << Cluster Components( state=0|1 )

**Beschreibung:** Blendet den Bericht der standardisierten Komponenten ein oder aus, der die Eigenvektoren der ersten Hauptkomponente innerhalb jedes Clusters enthält. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**Syntax:** obj << Cluster Members( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Variablen in jedem Cluster ein oder aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**Syntax:** obj << Cluster Summary( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Ergebnisse des Variablen-Clusterns zusammenfasst. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**Syntax:** obj << Cluster Variables( state=0|1 )

**Beschreibung:** Clustert Variablen in ähnliche Gruppen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**Syntax:** obj << Color Map on Correlations( state=0|1 )

**Beschreibung:** Blendet eine Farbmatrix der Korrelationen zwischen Variablen ein oder aus, wobei die Variablen so angeordnet werden, dass sich die Mitglieder desselben Clusters im Diagramm nebeneinander befinden. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Columns

**Syntax:** obj = Principal Components(...<Columns( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die für die Komponenten zu analysierenden Variablen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Coordinate Matrix

**Syntax:** obj << Coordinate Matrix( state=0|1 )

**Beschreibung:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**Syntax:** obj << Correlations( state=0|1 )

**Beschreibung:** Blendet eine Matrix von Korrelationskoeffizienten ein oder aus, die die Stärke der linearen Beziehungen zwischen jedem Paar von Y-Variablen zusammenfasst.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**Syntax:** obj << Covariance Matrix( state=0|1 )

**Beschreibung:** Blendet eine Matrix von Kovarianzen für jedes Paar von Y-Variablen ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**Syntax:** obj << Eigenvalues( state=0|1 )

**Beschreibung:** Blendet die sortierten Eigenwerte, ihren Anteil Variation und ihren kumulierten Anteil Variation ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**Syntax:** obj << Eigenvectors( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Eigenvektoren für jede der Hauptkomponenten ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**Syntax:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Legt die Schätzmethode zum Berechnen der Korrelationen fest.

Sind keine fehlenden Werte vorhanden, wird standardmäßig zeilenweise vorgegangen.

Wenn es fehlende Werte gibt und die Anzahl der Variablen ist <= 10 und die Anzahl der Zeilen ist <=5000, dann ist der Standard REML.

Wenn es fehlende Werte gibt und die Anzahl der Variablen ist > 10 oder die Anzahl der Zeilen ist > 5000, dann ist der Standard Paarweise. Standardmäßig „Standard“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**Syntax:** obj << Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**Beschreibung:** Blendet einen Bericht des Faktorrotationsmusters für die Hauptkomponenten ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**Syntax:** obj << Formatted Loading Matrix( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der die formatierten Komponentenladungen enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Formatted Loading Matrix( 1 );

```

### Freq

**Syntax:** obj = Principal Components(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Impute Missing Data

**Syntax:** obj << Impute Missing Data

**Beschreibung:** Ersetzt fehlende Werte für alle Y-Variablen  und erstellt eine neue Datentabelle mit den vorhandenen Werten und den neu eingesetzten fehlenden Datenwerten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**Syntax:** obj << Launch Fit Model

**Beschreibung:** Startet die Modellanpassung mit den repräsentativsten Variablen als Prädiktoren. Wählen Sie zunächst „Cluster-Komponenten speichern“ aus, wenn Sie diese als Prädiktoren verwenden möchten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**Syntax:** obj << Loading Matrix( number )

**Beschreibung:** Zeigt eine Tabelle an oder blendet sie aus, die die Komponentenladungen enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Matrix( 1 );

```

### Loading Plot

**Syntax:** obj << Loading Plot( number )

**Beschreibung:** Blendet eine Matrix der Diagramme ein oder aus, bei denen es sich um zweidimensionale Darstellungen von Faktorladungen handelt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**Syntax:** obj = Principal Components(...Missing value imputation( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Setzt fehlende Werte durch Vervollständigung der Matrix ein. Diese Option gilt für breite Methoden. Standardmäßig ein.

```js

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

**Syntax:** obj << Model Driven Multivariate Control Chart

**Beschreibung:** Ruft die modellgesteuerte multivariate Qualitätsregelkarte für die angegebene Anzahl von Komponenten auf

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**Syntax:** obj = Principal Components(...Number of Components( number=10 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Legt die Anzahl von zu extrahierenden Komponenten fest. Um die Berechnungszeit zu verringern, geben Sie eine kleine Anzahl von Komponenten ein. Standardmäßig „10“.

```js

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

**Syntax:** obj << Outlier Analysis( state=0|1 )

**Beschreibung:** Blendet den Ausreißeranalysebericht ein oder aus, mit dessen Hilfe Sie über T² und Beitragskenngrößen Ausreißer in den Daten erkennen.

**JMP Version hinzugefügt:** 14

```js

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

**Syntax:** obj << Partial Contribution of Variables( number )

**Beschreibung:** Blendet eine Tabelle ein oder aus, die die partiellen Beiträge von Variablen und ein Diagramm der partiellen Beiträge der ersten drei Hauptkomponenten enthält.

```js

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

### Principal Components

**Syntax:** Principal Components( Y( columns ) )

**Beschreibung:** Modelliert die Variation in einem Satz von Variablen als eine kleinere Anzahl unabhängiger Linearkombinationen (Hauptkomponenten) dieser Variablen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Profiler for Predicteds

**Syntax:** obj << Profiler for Predicteds

**Beschreibung:** Ruft ein Analysediagramm für die Vorhersagen auf und verwendet die angegebene Anzahl von Komponenten.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**Syntax:** obj << Publish Components Formulas( number )

**Beschreibung:** Erstellt eine angegebene Anzahl von Hauptkomponentenformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“. Wenn kein Bericht „Formeldepot“ geöffnet ist, erstellt diese Option ein Formeldepot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Estimation Method( "Wide" )
);
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**Syntax:** obj << Publish Normalized DModX Formula( number )

**Beschreibung:** Speichert die Formel „Normalisierte DModX“ basierend auf einer angegebenen Anzahl von Hauptkomponenten als Formelspaltenskript in der Plattform „Formeldepot“. Wenn kein Bericht „Formeldepot“ geöffnet ist, erstellt diese Option ein Formeldepot.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**Syntax:** obj << Save Cluster Components

**Beschreibung:** Speichert die Cluster-Komponente (erste Hauptkomponente) für jeden Cluster in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**Syntax:** obj << Save Imputed Formula

**Beschreibung:** Setzt Werte ein, wo die Werte der Y-Spalte fehlen. Erstellt und speichert eine neue Spalte mit einer Imputationsformel in der ursprünglichen Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**Syntax:** obj << Save Individual Partial Contributions( number )

**Beschreibung:** Speichert die partiellen Beiträge der Einzelwerte in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**Syntax:** obj << Save Individual Squared Cosines( number )

**Beschreibung:** Speichert den quadrierten Cosinus der Einzelwerte in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**Syntax:** obj << Save Low Rank Principal Components( number )

**Beschreibung:** Speichert die Hauptkomponenten-Scores der Daten niederen Ranges, bereinigt von Ausreißern und Rauschen. Diese Option gilt nur für die Schätzmethode „Robuste PCA“.

```js

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

**Syntax:** obj << Save Normalized DModX( number )

**Beschreibung:** Speichert die normalisierten DModX-Werte in einer neuen Spalte in der Datentabelle.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**Syntax:** obj << Save Predicteds( number )

**Beschreibung:** Speichert die vorhergesagten Variablen mit einer angegebenen Anzahl von Hauptkomponenten in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**Syntax:** obj << Save Predicteds as Component Formulas

**Beschreibung:** Speichert die Komponentenformeln für eine angegebene Anzahl von Hauptkomponenten in neuen Spalten in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**Syntax:** obj << Save Principal Component Script( number )

**Beschreibung:** Speichert ein Skript im Skriptfenster, das bei Ausführung für die vorgegebene Anzahl von Hauptkomponenten neue Spalten in der Datentabelle erstellt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**Syntax:** obj << Save Principal Component Values( number )

**Beschreibung:** Speichert die angegebene Anzahl von Hauptkomponenten in neuen Nicht-Formelspalten in der Datentabelle, auch aus eingesetzten Zellen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**Syntax:** obj << Save Principal Components( number )

**Beschreibung:** Speichert die angegebene Anzahl von Hauptkomponenten in neuen Formelspalten in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**Syntax:** obj << Save Principal Components with Imputation( number )

**Beschreibung:** Speichert die angegebene Anzahl von Hauptkomponenten, die mit Ersetzen fehlender Werte berechnet wurde, in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**Syntax:** obj << Save Rotated Components

**Beschreibung:** Speichert die rotierten Komponenten in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```js

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

**Syntax:** obj << Save Rotated Components with Imputation

**Beschreibung:** Speichert die angegebene Anzahl rotierter Komponenten, die mit Ersetzen fehlender Werte berechnet wurde, in neuen Spalten in der Datentabelle. Hinweis: Diese Option ist erst verfügbar, nachdem eine Faktorrotation durchgeführt wurde.

```js

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

**Syntax:** obj << Scatterplot Matrix( number )

**Beschreibung:** Blendet eine Matrix von Score- und Ladungsdiagrammen für eine angegebene Anzahl von Hauptkomponenten ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**Syntax:** obj << Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1-Sigma"|"2-Sigma"|"3-Sigma"|"Sonstige…" )

**Beschreibung:** Ändert das Alpha-Niveau der Konfidenzellipsen im Score-Diagramm für jedes Hauptkomponentenpaar.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**Syntax:** obj << Score Ellipses( state=0|1 )

**Beschreibung:** Blendet im Score-Diagramm für jedes Hauptkomponentenpaar Konfidenzellipsen ein oder aus.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipses( 1 );

```

### Score Plot

**Syntax:** obj << Score Plot( number )

**Beschreibung:** Blendet eine Matrix von Streudiagrammen ein oder aus, die Scores für jedes Paar der angegebenen Anzahl von Hauptkomponenten enthält.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**Syntax:** obj << Score Plot with Imputation( number of principal components )

**Beschreibung:** Blendet eine Matrix von Streudiagrammen ein oder aus, die Scores für jedes Paar der angegebenen Anzahl von Hauptkomponenten enthält und dabei Imputation für fehlende Werte verwendet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**Syntax:** obj << Scree Plot( state=0|1 )

**Beschreibung:** Blendet einen Linien-Plot der Eigenwerte für jede Komponente ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Scree Plot( 1 );

```

### Select component

**Syntax:** obj << Select component( <specify dimension to plot> )

**Beschreibung:** Wählt die Dimensionen aus, die als Achsen in den Übersichtsdiagrammen verwendet werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**Syntax:** obj << Show Supplementary Variable( state=0|1 )

**Beschreibung:** Blendet die Pfeillinien für zusätzliche Variablen im Graphen ein oder aus.

```js

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

**Syntax:** obj << Squared Cosines of Variables( number )

**Beschreibung:** Blendet eine Tabelle ein oder aus, die die quadrierten Kosinus von Variablen enthält.

```js

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

**Syntax:** obj = Principal Components(...Standardize( "Standardisiert"|"Unskaliert"|"Unskaliert und unzentriert" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt an, ob jede Spalte einzeln standardisiert werden soll.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**Syntax:** obj << Summary Plots( state=0|1 )

**Beschreibung:** Blendet einen Gliederungsknoten ein oder aus, der ein Diagramm der Eigenwerte, ein Score-Diagramm und ein Ladungsdiagramm enthält. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### Supplementary Variable

**Syntax:** obj << Supplementary Variable( column(s) )

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**Syntax:** obj = Principal Components(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Syntax:** obj = Principal Components(...<Y( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die für die Komponenten zu analysierenden Variablen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**Syntax:** obj << Z( column(s) )

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### on Correlations

**Syntax:** Principal Components( Y( columns ), On Correlations )

**Beschreibung:** Erstellt einen Hauptkomponentenbericht mithilfe der Korrelationsmatrix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**Syntax:** Principal Components( Y( columns ), On Covariances )

**Beschreibung:** Erstellt einen Hauptkomponentenbericht mithilfe der Kovarianzmatrix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**Syntax:** Principal Components( Y( column ), On Unscaled )

**Beschreibung:** Erstellt einen Hauptkomponentenbericht mithilfe der unskalierten Daten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

