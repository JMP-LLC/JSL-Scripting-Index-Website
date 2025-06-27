# Distribution



## Capability Analysis

### Capability Animation

**Syntax:** obj << Capability Animation

**Description:** Opens a separate window that shows an animation of a normal distribution that uses parameters and capability statistics from the current sample.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

### Z Bench

**Syntax:** obj << Z Bench( state=0|1 )

**Description:** Shows or hides Z statistics, which are described by AIAG as the number of standard deviation units from the process average to a specification.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Continuous Distribution

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Description:** Moves the count, probability, density, and normal quantile plot axes to the left side of a horizontal graph.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

### CDF Plot

**Syntax:** obj << CDF Plot( state=0|1 )

**Description:** Shows or hides a plot of the empirical cumulative distribution function.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**Syntax:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Description:** Performs a capability analysis given the stated lower specification limit (LSL), target, and upper specification limit (USL).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Column

**Syntax:** obj = Quantiles(...<Column( column(s) )>...)

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Confidence Interval

**Syntax:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**Description:** Computes the specified confidence intervals around both the mean and the standard deviation. If you specify sigma, the specified value is used to compute the confidence interval around the mean.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Description:** Shows or hides the count axis for the histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**Syntax:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Description:** Creates a report of the quantile rank estimates and a report of the smoothed empirical likelihood quantile estimates for the specified quantiles. Uses the fraction as the confidence level for confidence intervals in both reports.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**Syntax:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Description:** Customizes the summary statistics that are displayed in the Summary Statistics report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Description:** Shows or hides the density axis for the density curve on the histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Fit All

**Syntax:** obj << Fit All

**Description:** Compares all possible distributions.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**Syntax:** obj << Fit Beta

**Description:** Fits a two-parameter beta distribution to data between 0 and 1 (not inclusive).

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**Syntax:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**Description:** Fits a beta binomial distribution given a specified constant sample size or a column that contains the sample sizes. This distribution is a more flexible version of the binomial distribution.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**Syntax:** obj << Fit Binomial( Sample size( n | column ) )

**Description:** Fits a binomial distribution given a specified constant sample size or a column that contains the sample sizes. This distribution models the total number of successes in n independent trials.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**Syntax:** obj << Fit Cauchy

**Description:** Fits a Cauchy distribution to the data. The Cauchy distribution is robust to outliers and is equivalent to a t distribution with one degree of freedom.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**Syntax:** obj << Fit ExGaussian

**Description:** Fits an exponentially modified Gaussian distribution to the data.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**Syntax:** obj << Fit Exponential

**Description:** Fits an exponential distribution to nonnegative data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**Syntax:** obj << Fit Gamma

**Description:** Fits a two-parameter gamma distribution to positive data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**Syntax:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**Description:** Array of handles to the fitted distributions. This enables you to send commands to specific distributions that have been fit.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**Syntax:** obj << Fit Johnson

**Description:** Fits a Johnson distribution to the data. The most appropriate of the three types of Johnson distributions (Su, Sb, and Sl) is chosen based on the quantiles.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**Syntax:** obj << Fit Largest Extreme Value

**Description:** Fits a largest extreme value distribution to the data.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**Syntax:** obj << Fit Lognormal

**Description:** Fits a lognormal distribution to positive data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**Syntax:** obj << Fit Negative Binomial

**Description:** Fits a negative binomial distribution to the data. This distribution is equivalent to the Gamma Poisson distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**Syntax:** obj << Fit Normal

**Description:** Fits a normal distribution to the data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**Syntax:** obj << Fit Normal 2 Mixture

**Description:** Fits a mixture of two normal distributions. This distribution is capable of fitting bimodal data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**Syntax:** obj << Fit Normal 3 Mixture

**Description:** Fits a mixture of three normal distributions. This distribution is capable of fitting multi-modal data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**Syntax:** obj << Fit Poisson

**Description:** Fits a Poisson distribution to the data. This distribution is a popular choice for count data. The fitted mean of the Poisson distribution is equal to the variance.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**Syntax:** obj << Fit Shash

**Description:** Fits a sinh-arcsinh (SHASH) distribution to the data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**Syntax:** obj << Fit Smallest Extreme Value

**Description:** Fits a smallest extreme value distribution to the data.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**Syntax:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**Description:** Fits a smooth curve to the data using nonparametric density estimation. You can set the smoothness by specifying the bandwidth.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**Syntax:** obj << Fit Student&apos;s t

**Description:** Fits a Student&apos;s t distribution to the data. This distribution is a robust option that spans the space between a normal distribution and a Cauchy distribution.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**Syntax:** obj << Fit Weibull

**Description:** Fits a two-parameter Weibull distribution to positive data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**Syntax:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**Description:** Fits a zero inflated beta binomial distribution given the specified constant sample size or a column that contains the sample size. This distribution models the total number of successes in n independent trials where there are more zeros observed than would be expected for the beta binomial distribution.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**Syntax:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**Description:** Fits a zero inflated binomial distribution given the specified constant sample size or a column that contains the sample size. This distribution models the total number of successes in n independent trials where there are more zeros observed than would be expected for the binomial distribution.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**Syntax:** obj << Fit ZI Negative Binomial

**Description:** Fits a zero-inflated negative binomial distribution to data that contain values of zero.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**Syntax:** obj << Fit ZI Poisson

**Description:** Fits a zero-inflated Poisson distribution to data that contain values of zero.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**Syntax:** obj << Fit ZI SHASH

**Description:** Fits a SHASH distribution with a point mass at zero to the data.

```

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Description:** Shows or hides the histogram. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Description:** Changes the color of the histogram bars.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Description:** Changes the orientation of the histogram and the reports to be horizontal.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**Syntax:** obj << Normal Quantile Plot( state=0|1 )

**Description:** Shows or hides a plot that can be used to visualize the extent to which a variable is normally distributed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Outlier Box Plot

**Syntax:** obj << Outlier Box Plot( state=0|1 )

**Description:** Shows or hides a box plot that enables you to see the distribution and identify possible outliers. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**Syntax:** obj << Outlier Box Plot Row Cutoff( number )

**Description:** Sets the launch option for the maximum number of rows before the outlier box plot is turned off initially. "100000" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**Syntax:** obj << PpK Capability Labeling( state=0|1 )

**Description:** In Process Capability output, switches the labeling of the overall capability indices to use the prefix Pp instead of Cp. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**Description:** Computes the prediction intervals for an individual future observation and the mean of a specified number (N Samples) of future observations. You can create one-sided or two-sided prediction intervals.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Description:** Shows or hides the probability or proportion axis for this histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**Syntax:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**Description:** Computes a process capability analysis given the lower specification limit (LSL), target, and upper specification limit (USL). The Process Capability report includes a histogram, summary details, capability indices, and nonconformance statistics.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**Syntax:** obj << Quantile Box Plot( state=0|1 )

**Description:** Shows or hides a box plot with the following quantiles: 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99%, and 100%.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**Syntax:** obj << Quantiles( state=0|1 )

**Description:** Shows or hides the Quantiles report, which lists the values of selected quantiles. By default, the quantiles listed are 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99.5%, and 100%. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**Syntax:** obj << Save( "Level Numbers"|"Level Midpoints"|"Ranks"|"Ranks averaged"|"Prob Scores"|"Normal Quantiles"|"Standardized"|"Centered"|"Robust Standardized"|"Robust Centered"|"Spec Limits"|"Script to Log" )

**Description:** Saves the specified observation-specific statistic to a new column in the data table. There is also an option to print the script commands that generate the current report to the log window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Set Bin Width

**Syntax:** obj << Set Bin Width( number )

**Description:** Sets the histogram bin width, using the axis as the origin. This option is available only for continuous variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**Syntax:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**Description:** Sets the increment used in the Quantiles report to the specified fraction or changes back to the default quantiles. This option is available only for continuous variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**Syntax:** obj << Shadowgram( state=0|1 )

**Description:** Shows or hides a smooth shadowgram in place of the histogram. A shadowgram overlays histograms with different bin widths. This option is available only for continuous variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Description:** Shows or hides the bar counts on the histogram, which give the frequency of column values represented by each histogram bar.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Description:** Shows or hides the bar percents on the histogram, which give the percentage of column values represented by each histogram bar.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Description:** Shows or hides standard error bars on each of the histogram bars.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**Syntax:** obj << Stem and Leaf( state=0|1 )

**Description:** Shows or hides a stem-and-leaf plot.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**Syntax:** obj << Summary Statistics( state=0|1 )

**Description:** Shows or hides the Summary Statistics report, which lists the mean, standard deviation, and other summary statistics for continuous variables. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Test Equivalence

**Syntax:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**Description:** Tests whether the sample mean is equivalent to a hypothesized value (Target) using the Two One-Sided Tests (TOST) approach.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**Syntax:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**Description:** Performs a one-sample test for the mean. If you specify a value for the standard deviation (Sigma), a z test is performed. Otherwise, the sample standard deviation is used to perform a t test. There is also an option to perform an additional nonparametric Wilcoxon Signed-Rank test.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Std Dev

**Syntax:** obj << Test Std Dev( number )

**Description:** Performs a chi-squared test for the standard deviation, given the hypothesized value (number).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Tolerance Interval

**Syntax:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**Description:** Computes an interval that contains at least a specified portion of the population. A standard normal distribution is assumed. You can also specify other nonnormal distributions including lognormal, Gamma, exponential, Weibull, smallest extreme value, largest extreme value, and nonparametric distributions. There are also options for computing one-sided intervals.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Description:** Changes the orientation of the histogram, box plots, and quantile plots to be vertical. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Distribution Fit

### Density Curve

**Syntax:** obj << Fit Distribution Name( Density Curve( state=0|1 ) ); 

obj << ( Fit Handle[number] << Density Curve( state=0|1 ))

**Description:** Shows or hides a density curve on the histogram. The estimated parameters from the specified fit are used to create the density curve. On by default.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Density Curve( 0 ) );

```

### Distribution Profiler

**Syntax:** obj << Fit Distribution Name( Distribution Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Distribution Profiler( state=0|1 ) )

**Description:** Shows or hides a prediction profiler of the cumulative distribution function for the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

### Fitted CDF

**Syntax:** obj << Fit Distribution Name( Fitted CDF( vector ));

 obj << ( Fit Handle[number] << Fitted CDF( vector ))

**Description:** Shows or hides the specified fitted probabilities for the fitted distribution.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

### Fitted Quantiles

**Syntax:** obj << Fit Distribution Name( Fitted Quantiles( vector ));

 obj << ( Fit Handle[number] << Fitted Quantiles( vector ))

**Description:** Shows or hides the specified quantiles for the specified fitted distribution.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

### Fix Parameters

**Syntax:** obj << Fit Distribution Name( Fix Parameters( vector ));

 obj << ( Fit Handle[number] << Fix Parameters( vector ))

**Description:** Fixes the specified parameters as constants and re-estimates the non-fixed parameters.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

### Goodness of Fit

**Syntax:** obj << Fit Distribution Name( Goodness of Fit( state=0|1 )); 

obj << ( Fit Handle[number] << Goodness of Fit( state=0|1 ))

**Description:** Shows or hides a report that contains a goodness-of-fit test for the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

### PP Plot

**Syntax:** obj << Fit Distribution Name( PP Plot( state=0|1 ) ); 

 obj << (Fit Handle[ number ] << PP Plot( state=0|1 ) )

**Description:** Shows or hides a percentile-percentile (PP) plot that shows the relationship between the empirical cumulative distribution function (CDF) and the CDF of the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( PP Plot( 1 ) );

```

### Process Capability

**Syntax:** obj << Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); 

 obj << (Fit Handle[number] << ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**Description:** Computes a process capability analysis given the lower specification limit (LSL), target, and upper specification limit (USL). The Process Capability report includes a histogram, summary details, capability indices, and nonconformance statistics.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

### QQ Plot

**Syntax:** obj << Fit Distribution Name( QQ Plot( state=0|1 ) ); 

obj << ( Fit Handle[number] << QQ Plot( state=0|1 ) )

**Description:** Shows or hides a quantile-quantile (QQ) plot that shows the relationship between the observed data and the quantiles of the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( QQ Plot( 1 ) );

```

### Quantile Profiler

**Syntax:** obj << Fit Distribution Name( Quantile Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Quantile Profiler( state=0|1 ) )

**Description:** Shows or hides a prediction profiler of the quantile function for the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

### Remove Fit

**Syntax:** obj << (Fit Handle[number] << Remove Fit )

**Description:** Removes the fit and JSL object of the specified distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Weibull;
obj << Fit Lognormal;
Wait( 1 );
obj << (Fit Handle[1] << Remove Fit);

```

### Save Density Formula

**Syntax:** obj << Fit Distribution Name( Save Density Formula ) ; 

obj << ( Fit Handle[number] << Save Density Formula )

**Description:** Saves a column to the data table that contains the density formula of the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Density Formula );

```

### Save Distribution Formula

**Syntax:** obj << Fit Distribution Name( Save Distribution Formula ) ; 

obj << ( Fit Handle[number] << Save Distribution Formula )

**Description:** Saves a column to the data table that contains the cumulative distribution function of the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Distribution Formula );

```

### Save Simulation Formula

**Syntax:** obj << Fit Distribution Name( Save Simulation Formula ) ; 

obj << ( Fit Handle[number] << Save Simulation Formula )

**Description:** Saves a column to the data table that contains a formula that generates simulated values from the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Simulation Formula );

```

### Save Transformed

**Syntax:** obj << Fit Distribution Name( Save Transformed ); 

obj << ( Fit Handle[number] << Save Transformed )

**Description:** Saves a column to the data table that contains a formula used to transform the analysis column to normality using the specified fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### Color Out of Spec Values

**Syntax:** obj << Color Out of Spec Values

**Description:** Colors the cells in the data table for values that are out of spec. Cells with values below the lower specification limit (LSL) are colored red, and cells with values above the upper specification limit (USL) are colored blue.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Color Out of Spec Values
);

```

### Save Distribution as a Column Property

**Syntax:** obj << Process Capability( Save Distribution as a Column Property )

**Description:** Saves the Process Capability Distribution type as a column property within the column of the original data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Dist( Lognormal ),
	Save Distribution as a Column Property
);

```

### Save In Spec Indicator Formula

**Syntax:** obj << Save In Spec Indicator Formula

**Description:** Creates a new formula column in the data table. The new column contains a value that indicates whether or not a row is within the specification limits.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Save In Spec Indicator Formula
);

```

### Save Spec Limits and Distribution to Column Properties without Report

**Syntax:** obj << Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**Description:** Saves the calculated specification limits and process capability distribution type for the fitted distribution as column properties within the column of the original data table and shows no capability report.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Sigma Multiplier for Quantile Spec Limits( 4 ),
		Save Spec Limits and Distribution to Column Properties without Report
	)
);

```

### Save Spec Limits as a Column Property

**Syntax:** obj << Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); 

 obj << Process Capability( Save Spec Limits as a Column Property )

**Description:** Saves the specification limits as a column property within the column of the original data table.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		LSL( 0.03 ),
		Target( 0.15 ),
		USL( 0.27 ),
		Save Spec Limits as a Column Property
	)
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Save Spec Limits as a Column Property
);

```

### Set Probabilities for Quantile Spec Limits

**Syntax:** obj << Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); 

 obj << Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**Description:** Sets the probabilities that are used to calculate the quantile specification limits for the fitted distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Probabilities for Quantile Spec Limits(
			LSL Prob( .0001 ),
			Target Prob( .5 ),
			USL Prob( .9999 )
		)
	)
);

```

### Set Sigma Multiplier for Quantile Spec Limits

**Syntax:** obj << Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))); 

 obj << Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))

**Description:** Sets a sigma multiplier, K, that is used to calculate the quantile specification limits for the fitted distribution. The optional sided argument equals 1 for LSL only or 2 for USL only.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) )
);

```

## Distribution Summary Statistics

### Customize Summary Statistics

**Syntax:** obj << Customize Summary Statistics(statistic 1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Description:** Customizes the summary statistics that are displayed in the Summary Statistics report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Show All Modes

**Syntax:** obj << Customize Summary Statistics( Show all Modes( state=0|1 ))

**Description:** Shows or hides all modes in the Summary Statistics report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Description:** Moves the count, probability, density, and normal quantile plot axes to the left side of a horizontal graph.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

### Confidence Interval

**Syntax:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"Other…" )

**Description:** Computes score confidence intervals about the probabilities.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Description:** Shows or hides the count axis for the histogram.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Description:** Shows or hides the density axis for the density curve on the histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Description:** Shows or hides the Frequencies report, which lists the counts and probabilities for each level. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Description:** Shows or hides the histogram. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Description:** Changes the color of the histogram bars.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Description:** Changes the orientation of the histogram and the reports to be horizontal.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Description:** Shows or hides a mosaic bar chart for each nominal or ordinal response variable. A mosaic plot is a stacked bar chart where each segment is proportional to its group&apos;s frequency count.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Order By

**Syntax:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Description:** Orders the histogram, mosaic plot, and Frequencies report in ascending or descending order, by count. You can also revert back to the default ordering.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Description:** Shows or hides the probability or proportion axis for this histogram.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**Syntax:** obj << Save( "Level Numbers"|"Value Ordering"|"Script to Log" )

**Description:** Saves the Level Numbers to a new column in the data table or the script to the log.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

### Separate Bars

**Syntax:** obj << Separate Bars( state=0|1 )

**Description:** Adds space between the bars of the histogram. This option is available only for categorical variables.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Description:** Shows or hides the bar counts on the histogram, which give the frequency of column values represented by each histogram bar.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Description:** Shows or hides the bar percents on the histogram, which give the percentage of column values represented by each histogram bar.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Description:** Shows or hides standard error bars on each of the histogram bars.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

### Test Probabilities

**Syntax:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Description:** Tests the estimated probabilities of the levels of a categorical variable against the specified hypothesized probabilities (p1, p2, p3, and so on). For variables with two levels, use the Test option to specify the sign for the alternative hypothesis of the test. For variables with more than two levels, use the Fix option to specify how missing hypothesized values are handled. Note that f is an optional argument that specifies that the preceding level is treated as fixed.

**Multiple Levels Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Two Level, One-Sided Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Two Level, Two-Sided Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Description:** Changes the orientation of the histogram, box plots, and quantile plots to be vertical. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Nominal Distribution

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Description:** Moves the count, probability, density, and normal quantile plot axes to the left side of a horizontal graph.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

### Confidence Interval

**Syntax:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"Other…" )

**Description:** Computes score confidence intervals about the probabilities.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Description:** Shows or hides the count axis for the histogram.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Description:** Shows or hides the density axis for the density curve on the histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Description:** Shows or hides the Frequencies report, which lists the counts and probabilities for each level. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Description:** Shows or hides the histogram. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Description:** Changes the color of the histogram bars.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Description:** Changes the orientation of the histogram and the reports to be horizontal.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Description:** Shows or hides a mosaic bar chart for each nominal or ordinal response variable. A mosaic plot is a stacked bar chart where each segment is proportional to its group&apos;s frequency count.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Order By

**Syntax:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Description:** Orders the histogram, mosaic plot, and Frequencies report in ascending or descending order, by count. You can also revert back to the default ordering.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Description:** Shows or hides the probability or proportion axis for this histogram.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**Syntax:** obj << Save( "Level Numbers"|"Value Ordering"|"Script to Log" )

**Description:** Saves the Level Numbers to a new column in the data table or the script to the log.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

### Separate Bars

**Syntax:** obj << Separate Bars( state=0|1 )

**Description:** Adds space between the bars of the histogram. This option is available only for categorical variables.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Description:** Shows or hides the bar counts on the histogram, which give the frequency of column values represented by each histogram bar.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Description:** Shows or hides the bar percents on the histogram, which give the percentage of column values represented by each histogram bar.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Description:** Shows or hides standard error bars on each of the histogram bars.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

### Test Probabilities

**Syntax:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Description:** Tests the estimated probabilities of the levels of a categorical variable against the specified hypothesized probabilities (p1, p2, p3, and so on). For variables with two levels, use the Test option to specify the sign for the alternative hypothesis of the test. For variables with more than two levels, use the Fix option to specify how missing hypothesized values are handled. Note that f is an optional argument that specifies that the preceding level is treated as fixed.

**Multiple Levels Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Two Level, One-Sided Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Two Level, Two-Sided Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Description:** Changes the orientation of the histogram, box plots, and quantile plots to be vertical. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Test Mean

### PValue animation

**Syntax:** obj << Test Mean( PValue Animation )

**Description:** Opens a separate window that shows an animation of how p-values change as the mean changes.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, PValue Animation );

```

### Power animation

**Syntax:** obj << Test Mean( Power Animation )

**Description:** Opens a separate window that shows an animation of how the power changes as the mean changes and whether the test is one-sided or two-sided.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, Power Animation );

```

## Tolerance Interval

### Save Distribution as a Column Property

**Syntax:** obj << Tolerance Interval( Save Distribution as a Column Property )

**Description:** Saves the Tolerance Interval Distribution type as a column property within the column of the original data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.90 ),
	Lognormal,
	Save Distribution as a Column Property
);

```

### Save to Spec Limits Column Property

**Syntax:** obj << Save to Spec Limits Column Property( Alpha(number), Proportion(number), <Lower | Upper>, <Nonparametric>, <Save to Spec Limits Column Property> )

**Description:** Saves the tolerance interval as specification limits in the Spec Limits column property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.85 ),
	Save to Spec Limits Column Property
);

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**Syntax:** obj << Arrange in Rows( number )

**Description:** Specifies the number of distribution reports to display across the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << ArrangeInRows( 3 );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Axes on Left

**Syntax:** obj << Axes on Left( state=0|1 )

**Description:** Moves the count, probability, density, and normal quantile plot axes to the left side of a horizontal graph.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj = Distribution(...<By( column(s) )>...)

**Description:** Performs a separate analysis for each level of the specified column.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );

```

### CDF Plot

**Syntax:** obj << CDF Plot( state=0|1 )

**Description:** Shows or hides a plot of the empirical cumulative distribution function.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**Syntax:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Description:** Performs a capability analysis given the stated lower specification limit (LSL), target, and upper specification limit (USL).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Column

**Syntax:** obj = Distribution(...<Column( column(s) )>...)

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Confidence Interval

**Syntax:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**Description:** Computes the specified confidence intervals around both the mean and the standard deviation. If you specify sigma, the specified value is used to compute the confidence interval around the mean.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Copy Script;

```

### Count Axis

**Syntax:** obj << Count Axis( state=0|1 )

**Description:** Shows or hides the count axis for the histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**Syntax:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Description:** Creates a report of the quantile rank estimates and a report of the smoothed empirical likelihood quantile estimates for the specified quantiles. Uses the fraction as the confidence level for confidence intervals in both reports.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**Syntax:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Description:** Customizes the summary statistics that are displayed in the Summary Statistics report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Data Table Window;

```

### Density Axis

**Syntax:** obj << Density Axis( state=0|1 )

**Description:** Shows or hides the density axis for the density curve on the histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Distribution

**Syntax:** Distribution( Column() )

**Description:** Shows the distribution and univariate summary statistics for each variable. Results and options depend on the modeling type of each variable. Some options include histograms, box plots, quantile plots, fitting distributions, and capability analysis.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### Fit All

**Syntax:** obj << Fit All

**Description:** Compares all possible distributions.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**Syntax:** obj << Fit Beta

**Description:** Fits a two-parameter beta distribution to data between 0 and 1 (not inclusive).

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**Syntax:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**Description:** Fits a beta binomial distribution given a specified constant sample size or a column that contains the sample sizes. This distribution is a more flexible version of the binomial distribution.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**Syntax:** obj << Fit Binomial( Sample size( n | column ) )

**Description:** Fits a binomial distribution given a specified constant sample size or a column that contains the sample sizes. This distribution models the total number of successes in n independent trials.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**Syntax:** obj << Fit Cauchy

**Description:** Fits a Cauchy distribution to the data. The Cauchy distribution is robust to outliers and is equivalent to a t distribution with one degree of freedom.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**Syntax:** obj << Fit ExGaussian

**Description:** Fits an exponentially modified Gaussian distribution to the data.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**Syntax:** obj << Fit Exponential

**Description:** Fits an exponential distribution to nonnegative data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**Syntax:** obj << Fit Gamma

**Description:** Fits a two-parameter gamma distribution to positive data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**Syntax:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**Description:** Array of handles to the fitted distributions. This enables you to send commands to specific distributions that have been fit.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**Syntax:** obj << Fit Johnson

**Description:** Fits a Johnson distribution to the data. The most appropriate of the three types of Johnson distributions (Su, Sb, and Sl) is chosen based on the quantiles.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**Syntax:** obj << Fit Largest Extreme Value

**Description:** Fits a largest extreme value distribution to the data.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**Syntax:** obj << Fit Lognormal

**Description:** Fits a lognormal distribution to positive data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**Syntax:** obj << Fit Negative Binomial

**Description:** Fits a negative binomial distribution to the data. This distribution is equivalent to the Gamma Poisson distribution.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**Syntax:** obj << Fit Normal

**Description:** Fits a normal distribution to the data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**Syntax:** obj << Fit Normal 2 Mixture

**Description:** Fits a mixture of two normal distributions. This distribution is capable of fitting bimodal data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**Syntax:** obj << Fit Normal 3 Mixture

**Description:** Fits a mixture of three normal distributions. This distribution is capable of fitting multi-modal data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**Syntax:** obj << Fit Poisson

**Description:** Fits a Poisson distribution to the data. This distribution is a popular choice for count data. The fitted mean of the Poisson distribution is equal to the variance.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**Syntax:** obj << Fit Shash

**Description:** Fits a sinh-arcsinh (SHASH) distribution to the data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**Syntax:** obj << Fit Smallest Extreme Value

**Description:** Fits a smallest extreme value distribution to the data.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**Syntax:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**Description:** Fits a smooth curve to the data using nonparametric density estimation. You can set the smoothness by specifying the bandwidth.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**Syntax:** obj << Fit Student&apos;s t

**Description:** Fits a Student&apos;s t distribution to the data. This distribution is a robust option that spans the space between a normal distribution and a Cauchy distribution.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**Syntax:** obj << Fit Weibull

**Description:** Fits a two-parameter Weibull distribution to positive data.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**Syntax:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**Description:** Fits a zero inflated beta binomial distribution given the specified constant sample size or a column that contains the sample size. This distribution models the total number of successes in n independent trials where there are more zeros observed than would be expected for the beta binomial distribution.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**Syntax:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**Description:** Fits a zero inflated binomial distribution given the specified constant sample size or a column that contains the sample size. This distribution models the total number of successes in n independent trials where there are more zeros observed than would be expected for the binomial distribution.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**Syntax:** obj << Fit ZI Negative Binomial

**Description:** Fits a zero-inflated negative binomial distribution to data that contain values of zero.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**Syntax:** obj << Fit ZI Poisson

**Description:** Fits a zero-inflated Poisson distribution to data that contain values of zero.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**Syntax:** obj << Fit ZI SHASH

**Description:** Fits a SHASH distribution with a point mass at zero to the data.

```

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Freq

**Syntax:** obj = Distribution(...<Freq( column )>...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Freq( _freqcol ) );

```

### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Description:** Shows or hides the Frequencies report, which lists the counts and probabilities for each level. On by default.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

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

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Histogram

**Syntax:** obj << Histogram( state=0|1 )

**Description:** Shows or hides the histogram. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Description:** Changes the color of the histogram bars.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Syntax:** obj << Horizontal Layout( state=0|1 )

**Description:** Changes the orientation of the histogram and the reports to be horizontal.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

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

### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Description:** Shows or hides a mosaic bar chart for each nominal or ordinal response variable. A mosaic plot is a stacked bar chart where each segment is proportional to its group&apos;s frequency count.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**Syntax:** obj << Normal Quantile Plot( state=0|1 )

**Description:** Shows or hides a plot that can be used to visualize the extent to which a variable is normally distributed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Order By

**Syntax:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Description:** Orders the histogram, mosaic plot, and Frequencies report in ascending or descending order, by count. You can also revert back to the default ordering.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**Syntax:** obj << Outlier Box Plot( state=0|1 )

**Description:** Shows or hides a box plot that enables you to see the distribution and identify possible outliers. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**Syntax:** obj << Outlier Box Plot Row Cutoff( number )

**Description:** Sets the launch option for the maximum number of rows before the outlier box plot is turned off initially. "100000" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

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

### PpK Capability Labeling

**Syntax:** obj << PpK Capability Labeling( state=0|1 )

**Description:** In Process Capability output, switches the labeling of the overall capability indices to use the prefix Pp instead of Cp. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**Syntax:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**Description:** Computes the prediction intervals for an individual future observation and the mean of a specified number (N Samples) of future observations. You can create one-sided or two-sided prediction intervals.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**Syntax:** obj << Prob Axis( state=0|1 )

**Description:** Shows or hides the probability or proportion axis for this histogram.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**Syntax:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**Description:** Computes a process capability analysis given the lower specification limit (LSL), target, and upper specification limit (USL). The Process Capability report includes a histogram, summary details, capability indices, and nonconformance statistics.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**Syntax:** obj << Quantile Box Plot( state=0|1 )

**Description:** Shows or hides a box plot with the following quantiles: 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99%, and 100%.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**Syntax:** obj << Quantiles( state=0|1 )

**Description:** Shows or hides the Quantiles report, which lists the values of selected quantiles. By default, the quantiles listed are 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99.5%, and 100%. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

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

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

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

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Report View( "Summary" );

```

### Save

**Syntax:** obj << Save( "Level Numbers"|"Level Midpoints"|"Ranks"|"Ranks averaged"|"Prob Scores"|"Normal Quantiles"|"Standardized"|"Centered"|"Robust Standardized"|"Robust Centered"|"Spec Limits"|"Script to Log" )

**Description:** Saves the specified observation-specific statistic to a new column in the data table. There is also an option to print the script commands that generate the current report to the log window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

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

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Separate Bars

**Syntax:** obj << Separate Bars( state=0|1 )

**Description:** Adds space between the bars of the histogram. This option is available only for categorical variables.

**Multiple Response Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Nominal Distribution Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Set Bin Width

**Syntax:** obj << Set Bin Width( number )

**Description:** Sets the histogram bin width, using the axis as the origin. This option is available only for continuous variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**Syntax:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**Description:** Sets the increment used in the Quantiles report to the specified fraction or changes back to the default quantiles. This option is available only for continuous variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**Syntax:** obj << Shadowgram( state=0|1 )

**Description:** Shows or hides a smooth shadowgram in place of the histogram. A shadowgram overlays histograms with different bin widths. This option is available only for continuous variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**Description:** Shows or hides the bar counts on the histogram, which give the frequency of column values represented by each histogram bar.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**Syntax:** obj << Show Percents( state=0|1 )

**Description:** Shows or hides the bar percents on the histogram, which give the percentage of column values represented by each histogram bar.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Stack

**Syntax:** obj << Stack( state=0|1 )

**Description:** Changes the orientation of the histogram and reports to horizontal and stacks the individual distribution reports vertically.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Stack( 1 );

```

### Std Error Bars

**Syntax:** obj << Std Error Bars( state=0|1 )

**Description:** Shows or hides standard error bars on each of the histogram bars.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**Syntax:** obj << Stem and Leaf( state=0|1 )

**Description:** Shows or hides a stem-and-leaf plot.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**Syntax:** obj << Summary Statistics( state=0|1 )

**Description:** Shows or hides the Summary Statistics report, which lists the mean, standard deviation, and other summary statistics for continuous variables. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Test Equivalence

**Syntax:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**Description:** Tests whether the sample mean is equivalent to a hypothesized value (Target) using the Two One-Sided Tests (TOST) approach.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**Syntax:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**Description:** Performs a one-sample test for the mean. If you specify a value for the standard deviation (Sigma), a z test is performed. Otherwise, the sample standard deviation is used to perform a t test. There is also an option to perform an additional nonparametric Wilcoxon Signed-Rank test.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**Syntax:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Description:** Tests the estimated probabilities of the levels of a categorical variable against the specified hypothesized probabilities (p1, p2, p3, and so on). For variables with two levels, use the Test option to specify the sign for the alternative hypothesis of the test. For variables with more than two levels, use the Fix option to specify how missing hypothesized values are handled. Note that f is an optional argument that specifies that the preceding level is treated as fixed.

**Multiple Levels Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Two Level, One-Sided Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Two Level, Two-Sided Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

### Test Std Dev

**Syntax:** obj << Test Std Dev( number )

**Description:** Performs a chi-squared test for the standard deviation, given the hypothesized value (number).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Title( "My Platform" );

```

### Tolerance Interval

**Syntax:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**Description:** Computes an interval that contains at least a specified portion of the population. A standard normal distribution is assumed. You can also specify other nonnormal distributions including lognormal, Gamma, exponential, Weibull, smallest extreme value, largest extreme value, and nonparametric distributions. There are also options for computing one-sided intervals.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Uniform Scaling

**Syntax:** obj << Uniform Scaling( state=0|1 )

**Description:** Sets all histogram axes to the same minimum, maximum, and increment values so that distributions can be easily compared.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Uniform Scaling( 1 );

```

### Vertical

**Syntax:** obj << Vertical( state=0|1 )

**Description:** Changes the orientation of the histogram, box plots, and quantile plots to be vertical. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntax:** obj = Distribution(...<Weight( column )>...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Weight( _weightcol ) );

```

### Window View

**Syntax:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

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

**Syntax:** obj = Distribution(...Y( column(s) )...)

**Description:** Specifies the categorical or continuous columns to be analyzed.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

