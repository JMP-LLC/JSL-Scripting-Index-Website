# Principal Components



## Associated Constructors

### Principal Components

**Syntax:** Principal Components( Y( columns ) )

**Description:** Models the variation in a set of variables in terms of a smaller number of independent linear combinations (principal components) of those variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

## Columns

### By

**Syntax:** obj = Principal Components(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

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

### Freq

**Syntax:** obj = Principal Components(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

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

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**Syntax:** obj = Principal Components(...&lt;Weight( column )&gt;...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Syntax:** obj = Principal Components(...&lt;Y( column(s) )&gt;...)

**Description:** Specifies the variables to analyze for components.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**Syntax:** obj &lt;&lt; Z( column(s) )

**Description:** Specifies one or more supplementary variables. Supplementary variables are not used in any of the calculations in the platform and including them does not affect the results. These variables can improve data interpretation or be used in future analyses.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

## Item Messages

### 3D Score Plot

**Syntax:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**Description:** Shows or hides a 3-D scatterplot of the principal components as rays in a three-dimensional space.

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

**Description:** Shows or hides the arrow lines in the graph.

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

**Description:** Shows or hides a report of the results of the homogeneity test for each of the principal components.

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

**Description:** Shows or hides a plot that overlays the score plot and the loading plot for the specified number of components.

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

**Description:** Shows or hides the Standardized Components report, which contains the eigenvectors of the first principal component within each cluster. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**Syntax:** obj &lt;&lt; Cluster Members( state=0|1 )

**Description:** Shows or hides a report of the variables in each cluster. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**Syntax:** obj &lt;&lt; Cluster Summary( state=0|1 )

**Description:** Shows or hides a report that summarizes the results of variable clustering. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**Syntax:** obj &lt;&lt; Cluster Variables( state=0|1 )

**Description:** Clusters variables into similar groups.

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

**Description:** Shows or hides a color map of the correlations between variables, where the variables are arranged so that members of the same cluster are adjacent in the plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Coordinate Matrix

**Syntax:** obj &lt;&lt; Coordinate Matrix( state=0|1 )

**Description:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

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

**Description:** Shows or hides a matrix of correlation coefficients that summarize the strength of the linear relationships between each pair of Y variables.

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

**Description:** Shows or hides a matrix of covariances for each pair of Y variables.

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

**Description:** Shows or hides the sorted eigenvalues, their percent of variation, and the cumulative percent of variation.

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

**Description:** Shows or hides a report of the eigenvectors for each of the principal components.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**Syntax:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)

**Description:** Sets the estimation method for computing the correlations.

If there are no missing values, then the default is Row-wise.

If there are missing values, and the number of variables <= 10 and the number of rows <=5000, then the default is REML.

If there are missing values, and the number of variables > 10 or number of rows > 5000, then the default is Pairwise. "Default" by default.

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

**Description:** Shows or hides a report of the factor rotation pattern for the principal components.

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

**Description:** Shows or hides a report that contains the formatted component loadings.

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

**Description:** Imputes missing values for all the Y variables and creates a new data table containing both the existing values and newly imputed missing data values.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**Syntax:** obj &lt;&lt; Launch Fit Model

**Description:** Launches Fit Model with the Most Representative variables as predictors. Select Save Cluster Components first if you want to use these as predictors.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**Syntax:** obj &lt;&lt; Loading Matrix( number )

**Description:** Show or hides a table that contains the component loadings.

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

**Description:** Shows or hides a matrix of plots that are two-dimensional representations of factor loadings.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**Syntax:** obj = Principal Components(...Missing value imputation( state=0|1 )...)

**Description:** Imputes missing values through matrix completion. This option is applicable to wide methods. On by default.

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

**Description:** Launches Model Driven Multivariate Control Chart for specified number of Components

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**Syntax:** obj = Principal Components(...Number of Components( number=10 )...)

**Description:** Sets the number of components to be extracted. To reduce computation time, enter a small number of components. "10" by default.

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

**Description:** Shows or hides the Outlier Analysis report, which enables you to detect outliers in the data through T² and contribution statistics.

**JMP Version Added:** 14

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

**Description:** Shows or hides a table that contains the partial contributions of variables and a plot of the partial contributions for the first three principal components.

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

**Description:** Launches a profiler for the predictions using the specified number of components.

**JMP Version Added:** 16

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

**Description:** Creates a specified number of principal component formulas and saves them as formula column scripts in the Formula Depot platform. If a Formula Depot report is not open, this option creates a Formula Depot report.

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

**Description:** Saves the normalized DModX formula based on a specified number of principal components as a formula column script in the Formula Depot platform. If a Formula Depot report is not open, this option creates a Formula Depot report.

**JMP Version Added:** 14

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

**Description:** Saves the cluster (first principal) component for each cluster to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**Syntax:** obj &lt;&lt; Save Imputed Formula

**Description:** Imputes values where the Y column values are missing. Creates and saves a new column with an imputation formula to the original data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**Syntax:** obj &lt;&lt; Save Individual Partial Contributions( number )

**Description:** Saves individual partial contributions to new columns in the data table.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**Syntax:** obj &lt;&lt; Save Individual Squared Cosines( number )

**Description:** Saves individual squared cosines to new columns in the data table.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**Syntax:** obj &lt;&lt; Save Low Rank Principal Components( number )

**Description:** Saves the principal component scores from the low-rank data, cleaned of outliers and noise. This option applies only to the Robust PCA estimation method.

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

**Description:** Saves the normalized DModX values to a new column in the data table.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**Syntax:** obj &lt;&lt; Save Predicteds( number )

**Description:** Saves the predicted variables with a specified number of principal components to new columns in the data table.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**Syntax:** obj &lt;&lt; Save Predicteds as Component Formulas

**Description:** Saves the component formulas for a specified number of principal components to new columns in the data table.

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

**Description:** Saves a script to the script window that when run will create new columns in the data table for the given number of principal components.

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

**Description:** Saves the given number of principal components to new non-formula columns in the data table, including from imputed cells.

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

**Description:** Saves the given number of principal components to new formula columns in the data table.

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

**Description:** Saves the given number of principal components computed using imputation on missing values to new columns in the data table.

**JMP Version Added:** 15

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

**Description:** Saves the rotated components to new columns in the data table.

**JMP Version Added:** 15

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

**Description:** Saves the rotated components computed using imputation on missing values to new columns in the data table. Note: This option is only available after the Factor Rotation has been run.

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

**Description:** Shows or hides a matrix of score and loading plots for a specified number of principal components.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**Syntax:** obj &lt;&lt; Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1-sigma"|"2-sigma"|"3-sigma"|"Other…" )

**Description:** Changes the alpha level for the confidence ellipses on the score plot for each pair of principal components.

**JMP Version Added:** 15

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

**Description:** Shows or hides confidence ellipses on the score plot for each pair of principal components.

**JMP Version Added:** 15

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

**Description:** Shows or hides a matrix of scatterplots that contain the scores for each pair of the specified number of principal components.

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

**Description:** Shows or hides a matrix of scatterplots that contain the scores for each pair of the specified number of principal components, using imputation for missing values.

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

**Description:** Shows or hides a line plot of the eigenvalues for each component.

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

**Description:** Selects the dimensions that are used as axes in the summary plots.

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

**Description:** Shows or hides the arrow lines for supplementary variables in the graph.

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

**Description:** Shows or hides a table that contains the squared cosines of variables.

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

**Syntax:** obj = Principal Components(...Standardize( "Standardized"|"Unscaled"|"Unscaled and Uncentered" )...)

**Description:** Specifies whether each column should be standardized individually.

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

**Description:** Shows or hides an outline node that contains a plot of the eigenvalues, a score plot, and a loading plot. On by default.

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

**Description:** Creates a principal components report using the correlation matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**Syntax:** Principal Components( Y( columns ), On Covariances )

**Description:** Creates a principal components report using the covariance matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**Syntax:** Principal Components( Y( column ), On Unscaled )

**Description:** Creates a principal components report using the unscaled data.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

