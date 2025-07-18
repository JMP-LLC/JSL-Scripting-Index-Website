# Multivariate Embedding



## Associated Constructors

### Multivariate Embedding

**Syntax:** Multivariate Embedding( Y( columns ) )

**Description:** Maps data from very high-dimensional spaces to a low-dimensional space, using the Uniform Manifold Approximation and Projection (UMAP) method or the t-Distributed Stochastic Neighbor Embedding (t-SNE) method. Many times, you want to map the data to either two or three dimensions so that the low-dimensional space can be easily visualized. Both methods try to preserve the local structure of the data, but UMAP is generally faster than t-SNE for large data sets.

**JMP Version Added:** 17

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* Parameters can be changed according to data features */
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 ),
	Perplexity( 15 ),
	Initial Principal Component Dimensions( 55 ),
	Random Seed( 2022 ),
	Output Dimensions( 3 )
);

```

**Example 3**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* by group example */
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

## Item Messages

### Batch Mode if N Greater Than

**Syntax:** Batch Mode if N greater than( number = 4096 )

**Description:** Specifies that multithreading is used for optimizing the embedding coordinates when the sample size is larger than the specified number. "4096" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Batch Mode if N greater than( 100 )
);

```

### Convergence Criterion

**Syntax:** Convergence Criterion( number = 1e-8 )

**Description:** "1e-8" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Convergence Criterion( 1e-8 )
);

```

### Distance Metric

**Syntax:** Distance Metric( "Euclidean" | "Angular" | "Hamming" | "Manhattan")

**Description:** Specifies the metric that is used to compute distances between nearest neighbors. The options for the distance metric are Euclidean (the default), Angular, Hamming, and Manhattan. This option is applicable only when ANNOY is specified as the Nearest Neighbor Method.

### Eta

**Syntax:** Eta( number = 200 )

**Description:** Specifies the learning rate. "200" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Eta( 200 )
);

```

### Gradient Descent Method

**Syntax:** Gradient Descent Method( "SGD" | "ADAM")

**Description:** Specifies the gradient descent method that is used for optimizing the embedding layout. You can choose between Stochastic Gradient Descent (SGD) or Adaptive Moment Estimation (ADAM). The default method is SGD. The ADAM option is available only in batch mode.

### Inflate Iterations

**Syntax:** Inflate Iterations( number = 250 )

**Description:** Specifies the iteration after which the perplexities are no longer exaggerated. "250" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Inflate Iterations( 250 )
);

```

### Initial Principal Component Dimensions

**Syntax:** Initial Principal Component Dimensions( number = 50 )

**Description:** Specifies the number of dimensions that should be retained in the initial PCA step. "50" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Initial Principal Component Dimensions( 50 )
);

```

### Initial Scale

**Syntax:** Initial Scale( number = 0.0001 )

**Description:** Specifies the initial scale that is used for the derived components. ".0001" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Initial Scale( 0.001 )
);

```

### Learning Rate

**Syntax:** Learning Rate( number = 1.0 )

**Description:** Specifies the value of the learning rate in the computations, which impacts how quickly the model adapts to the problem. "1.0" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Learning Rate( 1.0 )
);

```

### Local Connectivity

**Syntax:** Local Connectivity( number = 1 )

**Description:** Specifies the number of nearest neighbors that are assumed to be connected at a local level. The default value is 1, which assumes that every point in the high-dimensional space has at least one other neighbor to which it is connected. "1" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Local Connectivity( 1 )
);

```

### Maximum Iterations

**Syntax:** Maximum Iterations( number = 1000 )

**Description:** Specifies the maximum number of iterations that are used when calculating the embedding components. "1000" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 )
);

```

### Method

**Syntax:** Method( "t-SNE" | "UMAP" )

**Description:** Specifies the dimension reduction method.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" )
);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "UMAP" )
);

```

### Minimum Distance

**Syntax:** Minimum Distance( number = 0.01 )

**Description:** Specifies the minimum standardized distance that points in the low-dimensional space can be from one another. "0.01" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Minimum Distance( 0.001 )
);

```

### Missing Value Imputation

**Syntax:** Missing Value Imputation( state =0|1 )

**Description:** Specifies that missing values in the data are imputed using a multivariate singular value decomposition (SVD) technique. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Missing Value Imputation( 0 )
);

```

### Nearest Neighbor Method

**Syntax:** Nearest Neighbor Method( "Default" | "VPTree (Exact)" | "ANNOY (Approximate)")

**Description:** Specifies the method that is used for finding nearest neighbors. You can choose between a vantage-point tree (VPTree) or the Approximate Nearest Neighbors method (ANNOY). The default option chooses the nearest neighbor method according to the sample size and the number of variables.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Method( "UMAP" ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Nearest Neighbor Method( "VPTree (Exact)" )
);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Method( "UMAP" ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Nearest Neighbor Method( "ANNOY (Approximate)" )
);

```

### Negative Sample Rate

**Syntax:** Negative Sample Rate( number = 5 )

**Description:** Specifies the number of negative 1-simplex samples to use per positive 1-simplex sample in finding the low-dimensional representation of the data. The Negative Sample Rate value can range from 2 to 20. "5" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Negative Sample Rate( 5 )
);

```

### Number of Epochs

**Syntax:** Number of Epochs( number = 500 )

**Description:** Specifies the number of training epochs to use when optimizing the low-dimensional representation. This is the number of times the algorithm works through the full training data. "500" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Epochs( 500 )
);

```

### Number of Neighbors

**Syntax:** Number of Neighbors( number = 15 )

**Description:** Specifies the number of near neighbors that are found for each data point. The smaller the number of near neighbors specified, the more the UMAP algorithm concentrates on the local structure of the data. As the number of near neighbors increases, the UMAP algorithm captures more of the global structure of the data. "15" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Method( "UMAP" ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Neighbors( 20 )
);

```

### Output Dimensions

**Syntax:** Output Dimensions( number = 2 )

**Description:** Specifies the number of components that are derived by the selected method. This number must be >=2. "2" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Output Dimensions( 3 )
);

```

### Perplexity

**Syntax:** Perplexity( number = 30 )

**Description:** Specifies the value of the perplexity parameter, which is related to computing similarities of the samples. The value of the perplexity parameter should be between 5 and 50 and should not be greater than one-eighth of the sample size. The default value is the smaller of 30 or one-eighth of the sample size. "30" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Perplexity( 20 )
);

```

### Random Seed

**Syntax:** Random Seed( number = 1234 )

**Description:** Specifies the random seed number that is used to obtain reproducible results. "123" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Random Seed( 1234 )
);

```

### Save Embedding Component Values

**Syntax:** obj &lt;&lt; Save Embedding Component Values

**Description:** Saves the derived embedding components as new columns in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Random Seed( 1234 )
);
obj << Save Embedding Component Values;

```

### Save PQ Matrices

**Syntax:** obj &lt;&lt; Save PQ Matrices

**Description:** Shows the P and Q matrices, which refer to van der Maaten (2008). This option is valid only when Sparse mode for t-SNE is not selected.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Perplexity( 15 ),
	Sparse( 0 )
);
obj << Save PQ Matrices;

```

### Sparse

**Syntax:** Sparse( state =0|1 )

**Description:** Specifies if sparse mode is used. Sparse mode allows for the computation for high-dimensional data sets. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Sparse( 1 )
);

```

### Standardize

**Syntax:** Standardize( state =0|1 )

**Description:** Specifies if data is standardized internally prior to distance calculations. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Standardize( 1 )
);

```

### a

**Syntax:** a( number = 0 )

**Description:** Specifies one of the parameters that control the embedding optimization algorithm. If this value is specified as 0 or a negative number, a is calculated in the algorithm by a nonlinear least squares procedure. "0" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	a( 0 )
);

```

### b

**Syntax:** b( number = 0 )

**Description:** Specifies one of the parameters that control the embedding optimization algorithm. If this value is specified as 0 or a negative number, b is calculated in the algorithm by a nonlinear least squares procedure. "0" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	b( 0 )
);

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

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

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

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

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

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

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

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

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl


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

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Multivariate Embedding(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

