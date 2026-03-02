# Multivariate



## Associated Constructors

### Multivariate

**Syntax:** Multivariate( Y( columns ) )

**Description:** Explores correlation and associations among numeric variables using a variety of multivariate analysis techniques. These techniques include both parametric and nonparametric measures of association, scatterplot matrices, principal components analysis, outlier analysis, and item reliability.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Freq( :_freqcol ));

```

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Weight( :_weightcol ));

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## Item Messages

### CI of Correlation

**Syntax:** obj &lt;&lt; CI of Correlation( state=0|1 )

**Description:** Shows or hides a report of the correlations between each Y variable and the confidence intervals for each correlation.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**Syntax:** obj &lt;&lt; Cluster the Correlations( state=0|1 )

**Description:** Shows or hides a color map on clustered correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**Syntax:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**Description:** Shows or hides a color map on correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**Syntax:** obj &lt;&lt; Color Map on Hoeffding&apos;s D( state=0|1 )

**Description:** Shows or hides a color map on Hoeffding&apos;s D nonparametric correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**Syntax:** obj &lt;&lt; Color Map on Kendall&apos;s Tau( state=0|1 )

**Description:** Shows or hides a color map on Kendall&apos;s Tau nonparametric correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**Syntax:** obj &lt;&lt; Color Map on Kendall&apos;s τ( state=0|1 )

**Description:** Shows or hides a color map on Kendall&apos;s Tau nonparametric correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**Syntax:** obj &lt;&lt; Color Map on Pairwise Correlations( state=0|1 )

**Description:** Shows or hides a color map on the pairwise correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**Syntax:** obj &lt;&lt; Color Map on Spearman&apos;s Rho( state=0|1 )

**Description:** Shows or hides a color map on Spearman&apos;s Rho nonparametric correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**Syntax:** obj &lt;&lt; Color Map on Spearman&apos;s ρ( state=0|1 )

**Description:** Shows or hides a color map on Spearman&apos;s Rho nonparametric correlations, starting at blue for negatively correlated and moving to red as the correlations approach one.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**Syntax:** obj &lt;&lt; Color Map on p-Values( state=0|1 )

**Description:** Shows or hides a color map on p-values, starting at red for p-values close to zero and moving to blue as the p-values approach one.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << "Color Map on p-Values"n( 1 );

```

### Correlation Probability

**Syntax:** obj &lt;&lt; Correlation Probability( state=0|1 )

**Description:** Shows or hides a matrix of p-values that each correspond to a test of the null hypothesis that the true correlation between the variables is zero.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**Syntax:** obj &lt;&lt; Correlations Multivariate( state=0|1 )

**Description:** Shows or hides a matrix of correlation coefficients that summarize the strength of the linear relationships between each pair of Y variables. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**Syntax:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**Description:** Shows or hides a matrix of covariances for each pair of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Covariance Matrix( 1 );

```

### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Creates SAS Proc Mixed code to run similar estimation methods through SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "REML" ) );obj << Create SAS Job();

```

### Cronbach's Alpha

**Syntax:** obj &lt;&lt; Cronbach&apos;s Alpha( state=0|1 )

**Description:** Shows or hides a report of Cronbach&apos;s alpha for the entire set of variables as well as the alpha if each Y variable was individually excluded.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**Syntax:** obj &lt;&lt; Cronbach&apos;s α( state=0|1 )

**Description:** Shows or hides a report of Cronbach&apos;s alpha for the entire set of variables as well as the alpha if each Y variable was individually excluded.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cronbach's alpha( 1 );

```

### Ellipsoid 3D Plot

**Syntax:** obj &lt;&lt; Ellipsoid 3D Plot( column1, column2, column3 )

**Description:** Shows or hides a surface plot that displays a 95% ellipsoid for three chosen Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

```

### Get Correlation Matrix

**Syntax:** obj &lt;&lt; Get Correlation Matrix

**Description:** Returns the correlation matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );corr = obj << Get Correlation Matrix;Show( corr );

```

### Get Inv Correlation Matrix

**Syntax:** obj &lt;&lt; Get Inv Correlation Matrix

**Description:** Returns the inverse correlation matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );icorr = obj << Get Inv Correlation Matrix;Show( icorr );

```

### Hoeffding's D

**Syntax:** obj &lt;&lt; Hoeffding&apos;s D( state=0|1 )

**Description:** Shows or hides a report of Hoeffding&apos;s D statistic for every pair of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**Syntax:** obj &lt;&lt; Hotelling&apos;s T Square Test

**Description:** Performs a one-sample test for the mean of the multivariate distribution of the Y variables, given the specified mean vector under the null hypothesis.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

```

### Impute Missing Data

**Syntax:** obj &lt;&lt; Impute Missing Data

**Description:** Imputes missing values for all the Y variables and creates a new data table containing both the existing values and newly imputed missing data values.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Impute Missing Data;

```

### Inverse Correlations

**Syntax:** obj &lt;&lt; Inverse Correlations( state=0|1 )

**Description:** Shows or hides a matrix of the inverse correlations between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**Syntax:** obj &lt;&lt; Jackknife Distances( state = 0|1, &lt;Save Jackknife Distances&gt; )

**Description:** Shows or hides a graph of the jackknife distances for each row, together with a reference line that indicates possible outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**Syntax:** obj &lt;&lt; Kendall&apos;s Tau( state=0|1 )

**Description:** Shows or hides a report of Kendall&apos;s Tau statistic for every pair of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Kendall's Tau( 1 );

```

### Kendall's τ

**Syntax:** obj &lt;&lt; Kendall&apos;s τ( state=0|1 )

**Description:** Shows or hides a report of Kendall&apos;s Tau statistic for every pair of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Kendall's Tau( 1 );

```

### Mahalanobis Distances

**Syntax:** obj &lt;&lt; Mahalanobis Distances( state = 0|1, &lt;Save Outlier Distances&gt; )

**Description:** Shows or hides a graph of the Mahalanobis distances for each row, together with a reference line that indicates possible outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**Syntax:** obj = Multivariate(...Matrix Format( "Lower Triangular"|"Upper Triangular"|"Square" )...)

**Description:** Specifies how the variables are displayed in the Scatterplot Matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Matrix Format( "Lower Triangular" ) );

```

### Multivariate Simple Statistics

**Syntax:** obj &lt;&lt; Multivariate Simple Statistics( state=0|1 )

**Description:** Shows or hides a multivariate simple statistics report, where the statistics are calculated by excluding any row that has a missing value.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );obj << Multivariate Simple Statistics( 1 );

```

### Pairwise Correlations

**Syntax:** obj &lt;&lt; Pairwise Correlations( state=0|1 )

**Description:** Shows or hides a report of the pairwise correlations for each combination of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**Syntax:** obj &lt;&lt; Parallel Coord Plot( state=0|1 )

**Description:** Shows or hides a parallel coordinate plot of the variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**Syntax:** obj &lt;&lt; Partial Correlation Diagram( state=0|1 )

**Description:** Shows or hides the Partial Correlation Diagram report. This option performs an eigenvalue decomposition on the partial correlation matrix and uses the results to give a visual representation of the partial correlations.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**Syntax:** obj &lt;&lt; Partial Correlation Probability( state=0|1 )

**Description:** Shows or hides a matrix of p-values that each correspond to a test of the null hypothesis that the true partial correlation between the variables is zero.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**Syntax:** obj &lt;&lt; Partial Correlations( state=0|1 )

**Description:** Shows or hides a matrix of partial correlations between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlations( 1 );

```

### Save Imputed Formula

**Syntax:** obj &lt;&lt; Save Imputed Formula

**Description:** Imputes values where the Y column values are missing. Creates and saves a new column with an imputation formula to the original data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Imputed Formula;

```

### Scatterplot Matrix

**Syntax:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**Description:** Shows or hides a scatterplot matrix for each pair of Y variables. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( 0 ));

```

### Set Alpha Level

**Syntax:** obj &lt;&lt; Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"Other…"=0.05 )

**Description:** Changes the alpha level for the confidence intervals about each correlation. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Set Alpha Level( 0.01 );obj << CI of Correlation( 1 );

```

### Set α Level

**Syntax:** obj &lt;&lt; Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"Other…"=0.05 )

**Description:** Changes the alpha level for the confidence intervals about each correlation. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Set α Level( 0.01 );obj << CI of Correlation( 1 );

```

### Spearman's Rho

**Syntax:** obj &lt;&lt; Spearman&apos;s Rho( state=0|1 )

**Description:** Shows or hides a report of Spearman&apos;s Rho statistic for each pair of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**Syntax:** obj &lt;&lt; Spearman&apos;s ρ( state=0|1 )

**Description:** Shows or hides a report of Spearman&apos;s Rho statistic for each pair of Y variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**Syntax:** obj &lt;&lt; Standardized Alpha( state=0|1 )

**Description:** Shows or hides a report of Cronbach&apos;s standardized alpha for the entire set of variables as well as the standardized alpha if each Y variable was individually excluded.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Standardized alpha( 1 );

```

### Standardized α

**Syntax:** obj &lt;&lt; Standardized α( state=0|1 )

**Description:** Shows or hides a report of Cronbach&apos;s standardized alpha for the entire set of variables as well as the standardized alpha if each Y variable was individually excluded.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Standardized alpha( 1 );

```

### T Square

**Syntax:** obj &lt;&lt; T Square( state = 0|1, &lt;Save T Square&gt; )

**Description:** Shows or hides a graph of the T² values for each row, together with a reference line indicating possible outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << T Square( 1 );

```

### T²

**Syntax:** obj &lt;&lt; T²( state = 0|1, &lt;Save T Square&gt; )

**Description:** Shows or hides a graph of the T² values for each row, together with a reference line indicating possible outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << T Square( 1 );

```

### Univariate Simple Statistics

**Syntax:** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**Description:** Shows or hides a univariate simple statistics report, where the statistics are calculated for each column independently from other columns that might have missing data.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**Syntax:** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise )

**Description:** Sets the estimation method for computing the correlations.

If there are no missing values, then the default is Row-wise.

If there are missing values, and the number of variables <= 10 and the number of rows <=5000, then the default is REML.

If there are missing values, and the number of variables > 10 or number of rows > 5000, then the default is Pairwise.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Principal Component Options

### Item Messages

#### 3D Score Plot

**Syntax:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**Description:** Shows or hides a 3-D scatterplot of the principal components as rays in a three-dimensional space.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

#### Bartlett Test

**Syntax:** obj &lt;&lt; Bartlett Test( state=0|1 )

**Description:** Shows or hides a report of the results of the homogeneity test for each of the principal components.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

#### Eigenvectors

**Syntax:** obj &lt;&lt; Eigenvectors( state=0|1 )

**Description:** Shows or hides a report of the eigenvectors for each of the principal components.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

#### Factor Rotation

**Syntax:** obj &lt;&lt; Factor Rotation( &lt;ML|PC&gt;, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**Description:** Shows or hides a report of the factor rotation pattern for the principal components.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "ML", "SMC", 2, "Varimax" ));

```

#### Loading Plot

**Syntax:** obj &lt;&lt; Loading Plot( number )

**Description:** Shows or hides a matrix of plots that are two-dimensional representations of factor loadings.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

#### Save Principal Components

**Syntax:** obj &lt;&lt; Save Principal Components( number )

**Description:** Saves the given number of principal components to new columns in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

#### Save Principal Components with Imputation

**Syntax:** obj &lt;&lt; Save Principal Components with Imputation( number )

**Description:** Saves the given number of principal components computed using imputation on missing values to new columns in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Save Principal Components with Imputation( 3 ));

```

#### Save Rotated Components

**Syntax:** obj &lt;&lt; Save Rotated Components

**Description:** Saves the rotated components to new columns in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "SMC", 2, "Varimax" ),	Save Rotated Components);

```

#### Save Rotated Components with Imputation

**Syntax:** obj &lt;&lt; Save Rotated Components with Imputation

**Description:** Saves the rotated components computed using imputation on missing values to new columns in the data table. Note: This option is only available after the Factor Rotation has been run.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "SMC", 2, "Varimax" ),	Save Rotated Components with Imputation);

```

#### Score Plot

**Syntax:** obj &lt;&lt; Score Plot( number )

**Description:** Shows or hides a matrix of scatterplots that contain the scores for each pair of the specified number of principal components.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

#### Score Plot with Imputation

**Syntax:** obj &lt;&lt; Score Plot with Imputation( number )

**Description:** Shows or hides a matrix of scatterplots that contain the scores for each pair of the specified number of principal components, using imputation for missing values.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

#### Scree Plot

**Syntax:** obj &lt;&lt; Scree Plot( state=0|1 )

**Description:** Shows or hides a line plot of the eigenvalues for each component.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### Item Messages

#### Density Ellipses

**Syntax:** Density Ellipses( state=0|1 )

**Description:** Shows or hides the density ellipses on the scatterplot matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ) ));

```

#### Ellipse Alpha

**Syntax:** obj &lt;&lt; Ellipse Alpha( "0.90"|"0.95"|"0.99"|"Other…" )

**Description:** Changes the alpha level for the density ellipses on the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) ));

```

#### Ellipse Color

**Syntax:** Ellipse Color( color )

**Description:** Changes the color for the density ellipses on the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) ));

```

#### Ellipse α

**Syntax:** obj &lt;&lt; Ellipse α( "0.90"|"0.95"|"0.99"|"Other…" )

**Description:** Changes the alpha level for the density ellipses on the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) ));

```

#### Ellipses Coverage

**Syntax:** obj &lt;&lt; Ellipses Coverage( "0.90"|"0.95"|"0.99"|"Other…" )

**Description:** Changes the alpha level for the density ellipses on the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) ));

```

#### Ellipses Transparency

**Syntax:** obj &lt;&lt; Ellipses Transparency( "0.20"|"0.40"|"0.60"|"Other…" )

**Description:** Changes the transparency for the shaded density ellipses on the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) ));

```

#### Fit Line

**Syntax:** obj &lt;&lt; Fit Line( state=0|1 )

**Description:** Shows or hides the regression line and confidence interval on the scatterplot matrix.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Fit line( 1 ) ));

```

#### Heat Map

**Syntax:** Heat Map( state=0|1 )

**Description:** Shows or hides a correlation heat map in the upper right triangle of the scatterplot matrix. The color of each cell in the heat map represents the correlation between each pair of variables.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Heat Map( 1 ) ));

```

#### Horizontal

**Syntax:** Horizontal( state=0|1 )

**Description:** Displays histograms horizontally in the diagonal of the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Horizontal( 1 ) ));

```

#### Nonpar Density

**Syntax:** Nonpar Density( state=0|1 )

**Description:** Shows or hides shaded nonparametric density contours for the 0.90 and 0.50 quantiles.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Nonpar Density( 1 ) ));

```

#### Shaded Ellipses

**Syntax:** Shaded Ellipses( state=0|1 )

**Description:** Shades or makes clear the region inside the ellipses on the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Shaded Ellipses( 1 ) ));

```

#### Show Correlations

**Syntax:** Show Correlations( state=0|1 )

**Description:** Shows or hides the correlation of each pair of variables in the upper left corner of each scatterplot.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Show Correlations( 1 ) ));

```

#### Show Counts

**Syntax:** Show Counts( state=0|1 )

**Description:** Shows or hides the counts that label each bar in the histograms in the diagonal of the scatterplot matrix between each Y variable. Note: Available only after the histogram has been displayed.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) ));

```

#### Show Points

**Syntax:** Show Points( state=0|1 )

**Description:** Shows or hides the points on the scatterplot matrix. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Show Points( 1 ) ));

```

#### Significance Circles

**Syntax:** Significance Circles( state=0|1 )

**Description:** Shows or hides correlation circles in the upper right triangle of the scatterplot matrix. The circle color represents the correlation and the circle size represents the significance test between each pair of variables.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Significance Circles( 1 ) ));

```

#### Vertical

**Syntax:** Vertical( state=0|1 )

**Description:** Displays histograms vertically in the diagonal of the scatterplot matrix between each Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Vertical( 1 ) ));

```

