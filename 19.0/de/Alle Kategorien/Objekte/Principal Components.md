# Principal Components



## Elementmeldungen

### 3D Score Plot

**Syntax:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**Beschreibung:** Blendet ein 3D-Streudiagramm der Hauptkomponenten als Strahlen in einem dreidimensionalen Raum ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**Syntax:** obj &lt;&lt; Arrow Lines( state=0|1 )

**Beschreibung:** Blendet die Pfeillinien im Graphen ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Arrow Lines( 0 );

```

### Bartlett Test

**Syntax:** obj &lt;&lt; Bartlett Test( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Ergebnisse des Homogenitätstests für jede der Hauptkomponenten ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Bartlett Test( 1 );

```

### Biplot

**Syntax:** obj &lt;&lt; Biplot( number )

**Beschreibung:** Blendet ein Diagramm ein oder aus, das das Score-Diagramm und das Ladungsdiagramm für die angegebene Anzahl von Komponenten überlagert.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### Cluster Components

**Syntax:** obj &lt;&lt; Cluster Components( state=0|1 )

**Beschreibung:** Blendet den Bericht der standardisierten Komponenten ein oder aus, der die Eigenvektoren der ersten Hauptkomponente innerhalb jedes Clusters enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**Syntax:** obj &lt;&lt; Cluster Members( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Variablen in jedem Cluster ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**Syntax:** obj &lt;&lt; Cluster Summary( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Ergebnisse des Variablen-Clusterns zusammenfasst. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**Syntax:** obj &lt;&lt; Cluster Variables( state=0|1 )

**Beschreibung:** Clustert Variablen in ähnliche Gruppen.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**Syntax:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**Beschreibung:** Blendet eine Farbmatrix der Korrelationen zwischen Variablen ein oder aus, wobei die Variablen so angeordnet werden, dass sich die Mitglieder desselben Clusters im Diagramm nebeneinander befinden. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Coordinate Matrix

**Syntax:** obj &lt;&lt; Coordinate Matrix( state=0|1 )

**Beschreibung:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**Syntax:** obj &lt;&lt; Correlations( state=0|1 )

**Beschreibung:** Blendet eine Matrix von Korrelationskoeffizienten ein oder aus, die die Stärke der linearen Beziehungen zwischen jedem Paar von Y-Variablen zusammenfasst.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**Syntax:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**Beschreibung:** Blendet eine Matrix von Kovarianzen für jedes Paar von Y-Variablen ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**Syntax:** obj &lt;&lt; Eigenvalues( state=0|1 )

**Beschreibung:** Blendet die sortierten Eigenwerte, ihren Anteil Variation und ihren kumulierten Anteil Variation ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**Syntax:** obj &lt;&lt; Eigenvectors( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Eigenvektoren für jede der Hauptkomponenten ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**Syntax:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Schätzmethode zum Berechnen der Korrelationen fest.

Sind keine fehlenden Werte vorhanden, wird standardmäßig zeilenweise vorgegangen.

Wenn es fehlende Werte gibt und die Anzahl der Variablen ist <= 10 und die Anzahl der Zeilen ist <=5000, dann ist der Standard REML.

Wenn es fehlende Werte gibt und die Anzahl der Variablen ist > 10 oder die Anzahl der Zeilen ist > 5000, dann ist der Standard Paarweise. Standardmäßig „Standard“.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**Syntax:** obj &lt;&lt; Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**Beschreibung:** Blendet einen Bericht des Faktorrotationsmusters für die Hauptkomponenten ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**Syntax:** obj &lt;&lt; Formatted Loading Matrix( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der die formatierten Komponentenladungen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Formatted Loading Matrix( 1 );

```

### Impute Missing Data

**Syntax:** obj &lt;&lt; Impute Missing Data

**Beschreibung:** Ersetzt fehlende Werte für alle Y-Variablen  und erstellt eine neue Datentabelle mit den vorhandenen Werten und den neu eingesetzten fehlenden Datenwerten.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**Syntax:** obj &lt;&lt; Launch Fit Model

**Beschreibung:** Startet die Modellanpassung mit den repräsentativsten Variablen als Prädiktoren. Wählen Sie zunächst „Cluster-Komponenten speichern“ aus, wenn Sie diese als Prädiktoren verwenden möchten.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**Syntax:** obj &lt;&lt; Loading Matrix( number )

**Beschreibung:** Zeigt eine Tabelle an oder blendet sie aus, die die Komponentenladungen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Matrix( 1 );

```

### Loading Plot

**Syntax:** obj &lt;&lt; Loading Plot( number )

**Beschreibung:** Blendet eine Matrix der Diagramme ein oder aus, bei denen es sich um zweidimensionale Darstellungen von Faktorladungen handelt.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**Syntax:** obj = Principal Components(...Missing value imputation( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Setzt fehlende Werte durch Vervollständigung der Matrix ein. Diese Option gilt für breite Methoden. Standardmäßig ein.

```jsl

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

**Syntax:** obj &lt;&lt; Model Driven Multivariate Control Chart

**Beschreibung:** Ruft die modellgesteuerte multivariate Qualitätsregelkarte für die angegebene Anzahl von Komponenten auf

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**Syntax:** obj = Principal Components(...Number of Components( number=10 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Anzahl von zu extrahierenden Komponenten fest. Um die Berechnungszeit zu verringern, geben Sie eine kleine Anzahl von Komponenten ein. Standardmäßig „10“.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Sparse" ),
	Number of Components( 3 ),
	Standardize( "Standardized" )
);

```

### Outlier Analysis

**Syntax:** obj &lt;&lt; Outlier Analysis( state=0|1 )

**Beschreibung:** Blendet den Ausreißeranalysebericht ein oder aus, mit dessen Hilfe Sie über T² und Beitragskenngrößen Ausreißer in den Daten erkennen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	Standardize( "Standardized" ),
	Outlier Analysis( 1 )
);

```

### Partial Contribution of Variables

**Syntax:** obj &lt;&lt; Partial Contribution of Variables( number )

**Beschreibung:** Blendet eine Tabelle ein oder aus, die die partiellen Beiträge von Variablen und ein Diagramm der partiellen Beiträge der ersten drei Hauptkomponenten enthält.

```jsl

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

**Syntax:** obj &lt;&lt; Profiler for Predicteds

**Beschreibung:** Ruft ein Analysediagramm für die Vorhersagen auf und verwendet die angegebene Anzahl von Komponenten.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**Syntax:** obj &lt;&lt; Publish Components Formulas( number )

**Beschreibung:** Erstellt eine angegebene Anzahl von Hauptkomponentenformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“. Wenn kein Bericht „Formeldepot“ geöffnet ist, erstellt diese Option ein Formeldepot.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Estimation Method( "Wide" )
);
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**Syntax:** obj &lt;&lt; Publish Normalized DModX Formula( number )

**Beschreibung:** Speichert die Formel „Normalisierte DModX“ basierend auf einer angegebenen Anzahl von Hauptkomponenten als Formelspaltenskript in der Plattform „Formeldepot“. Wenn kein Bericht „Formeldepot“ geöffnet ist, erstellt diese Option ein Formeldepot.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**Syntax:** obj &lt;&lt; Save Cluster Components

**Beschreibung:** Speichert die Cluster-Komponente (erste Hauptkomponente) für jeden Cluster in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**Syntax:** obj &lt;&lt; Save Imputed Formula

**Beschreibung:** Setzt Werte ein, wo die Werte der Y-Spalte fehlen. Erstellt und speichert eine neue Spalte mit einer Imputationsformel in der ursprünglichen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**Syntax:** obj &lt;&lt; Save Individual Partial Contributions( number )

**Beschreibung:** Speichert die partiellen Beiträge der Einzelwerte in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**Syntax:** obj &lt;&lt; Save Individual Squared Cosines( number )

**Beschreibung:** Speichert den quadrierten Cosinus der Einzelwerte in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**Syntax:** obj &lt;&lt; Save Low Rank Principal Components( number )

**Beschreibung:** Speichert die Hauptkomponenten-Scores der Daten niederen Ranges, bereinigt von Ausreißern und Rauschen. Diese Option gilt nur für die Schätzmethode „Robuste PCA“.

```jsl

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

**Syntax:** obj &lt;&lt; Save Normalized DModX( number )

**Beschreibung:** Speichert die normalisierten DModX-Werte in einer neuen Spalte in der Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**Syntax:** obj &lt;&lt; Save Predicteds( number )

**Beschreibung:** Speichert die vorhergesagten Variablen mit einer angegebenen Anzahl von Hauptkomponenten in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**Syntax:** obj &lt;&lt; Save Predicteds as Component Formulas

**Beschreibung:** Speichert die Komponentenformeln für eine angegebene Anzahl von Hauptkomponenten in neuen Spalten in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**Syntax:** obj &lt;&lt; Save Principal Component Script( number )

**Beschreibung:** Speichert ein Skript im Skriptfenster, das bei Ausführung für die vorgegebene Anzahl von Hauptkomponenten neue Spalten in der Datentabelle erstellt.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**Syntax:** obj &lt;&lt; Save Principal Component Values( number )

**Beschreibung:** Speichert die angegebene Anzahl von Hauptkomponenten in neuen Nicht-Formelspalten in der Datentabelle, auch aus eingesetzten Zellen.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**Syntax:** obj &lt;&lt; Save Principal Components( number )

**Beschreibung:** Speichert die angegebene Anzahl von Hauptkomponenten in neuen Formelspalten in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**Syntax:** obj &lt;&lt; Save Principal Components with Imputation( number )

**Beschreibung:** Speichert die angegebene Anzahl von Hauptkomponenten, die mit Ersetzen fehlender Werte berechnet wurde, in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**Syntax:** obj &lt;&lt; Save Rotated Components

**Beschreibung:** Speichert die rotierten Komponenten in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components;

```

### Save Rotated Components with Imputation

**Syntax:** obj &lt;&lt; Save Rotated Components with Imputation

**Beschreibung:** Speichert die angegebene Anzahl rotierter Komponenten, die mit Ersetzen fehlender Werte berechnet wurde, in neuen Spalten in der Datentabelle. Hinweis: Diese Option ist erst verfügbar, nachdem eine Faktorrotation durchgeführt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components with Imputation;

```

### Scatterplot Matrix

**Syntax:** obj &lt;&lt; Scatterplot Matrix( number )

**Beschreibung:** Blendet eine Matrix von Score- und Ladungsdiagrammen für eine angegebene Anzahl von Hauptkomponenten ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**Syntax:** obj &lt;&lt; Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1-Sigma"|"2-Sigma"|"3-Sigma"|"Sonstige…" )

**Beschreibung:** Ändert das Alpha-Niveau der Konfidenzellipsen im Score-Diagramm für jedes Hauptkomponentenpaar.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**Syntax:** obj &lt;&lt; Score Ellipses( state=0|1 )

**Beschreibung:** Blendet im Score-Diagramm für jedes Hauptkomponentenpaar Konfidenzellipsen ein oder aus.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipses( 1 );

```

### Score Plot

**Syntax:** obj &lt;&lt; Score Plot( number )

**Beschreibung:** Blendet eine Matrix von Streudiagrammen ein oder aus, die Scores für jedes Paar der angegebenen Anzahl von Hauptkomponenten enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**Syntax:** obj &lt;&lt; Score Plot with Imputation( number of principal components )

**Beschreibung:** Blendet eine Matrix von Streudiagrammen ein oder aus, die Scores für jedes Paar der angegebenen Anzahl von Hauptkomponenten enthält und dabei Imputation für fehlende Werte verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**Syntax:** obj &lt;&lt; Scree Plot( state=0|1 )

**Beschreibung:** Blendet einen Linien-Plot der Eigenwerte für jede Komponente ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Scree Plot( 1 );

```

### Select component

**Syntax:** obj &lt;&lt; Select component( &lt;specify dimension to plot&gt; )

**Beschreibung:** Wählt die Dimensionen aus, die als Achsen in den Übersichtsdiagrammen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**Syntax:** obj &lt;&lt; Show Supplementary Variable( state=0|1 )

**Beschreibung:** Blendet die Pfeillinien für zusätzliche Variablen im Graphen ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);
obj << Show Supplementary Variable( 0 );

```

### Squared Cosines of Variables

**Syntax:** obj &lt;&lt; Squared Cosines of Variables( number )

**Beschreibung:** Blendet eine Tabelle ein oder aus, die die quadrierten Kosinus von Variablen enthält.

```jsl

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

**Syntax:** obj = Principal Components(...Standardize( "Standardisiert"|"Unskaliert"|"Unskaliert und unzentriert" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, ob jede Spalte einzeln standardisiert werden soll.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**Syntax:** obj &lt;&lt; Summary Plots( state=0|1 )

**Beschreibung:** Blendet einen Gliederungsknoten ein oder aus, der ein Diagramm der Eigenwerte, ein Score-Diagramm und ein Ladungsdiagramm enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### on Correlations

**Syntax:** Principal Components( Y( columns ), On Correlations )

**Beschreibung:** Erstellt einen Hauptkomponentenbericht mithilfe der Korrelationsmatrix.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**Syntax:** Principal Components( Y( columns ), On Covariances )

**Beschreibung:** Erstellt einen Hauptkomponentenbericht mithilfe der Kovarianzmatrix.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**Syntax:** Principal Components( Y( column ), On Unscaled )

**Beschreibung:** Erstellt einen Hauptkomponentenbericht mithilfe der unskalierten Daten.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

## Spalten

### By

**Syntax:** obj = Principal Components(...&lt;By( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

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

**Syntax:** obj = Principal Components(...&lt;Columns( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die für die Komponenten zu analysierenden Variablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Freq

**Syntax:** obj = Principal Components(...&lt;Freq( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Supplementary Variable

**Syntax:** obj &lt;&lt; Supplementary Variable( column(s) )

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**Syntax:** obj = Principal Components(...&lt;Weight( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Syntax:** obj = Principal Components(...&lt;Y( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die für die Komponenten zu analysierenden Variablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**Syntax:** obj &lt;&lt; Z( column(s) )

**Beschreibung:** Gibt eine oder mehrere zusätzliche Variablen an. Zusätzliche Variablen werden in keiner der Berechnungen in der Plattform verwendet und ihre Einbeziehung hat keinen Einfluss auf die Ergebnisse. Diese Variablen können die Interpretation der Daten verbessern oder in zukünftigen Analysen verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

## Zugehörige Konstruktoren

### Principal Components

**Syntax:** Principal Components( Y( columns ) )

**Beschreibung:** Modelliert die Variation in einem Satz von Variablen als eine kleinere Anzahl unabhängiger Linearkombinationen (Hauptkomponenten) dieser Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

