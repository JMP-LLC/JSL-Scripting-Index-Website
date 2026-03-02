# Fit Y by X Group



## Bivariate > Bivariate Curve

### Associated Constructors

#### Curve

**Syntax:** obj &lt;&lt; ( Curve[number] )

**Description:** Accesses an individual curve for routing further messages.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );
obj << (curve[1] << Line of Fit( 1 ));
Wait( 1 );
obj << (curve[1] << Line of Fit( 0 ));

```

### Item Messages

#### Confid Curves Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**Description:** Shows or hides the confidence curves for the fitted line.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Description:** Shows or hides the confidence curves for an individual predicted value.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Confid Shaded Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Fit( state=0|1 )} )

**Description:** Shades the area between the confidence curves and the fitted line.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Fit( 0 ));

```

#### Confid Shaded Indiv

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**Description:** Shades the area between the confidence curves for an individual predicted value and the fitted line.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

#### Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for an individual prediction that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**Description:** Changes the line color of the fitted line, confidence curves, and shaded confidence regions.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**Description:** Changes the line style of the fitted line.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**Description:** Changes the line width of both the fitted line and any confidence curves.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**Description:** Shows or hides the line of fit. On by default.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for the mean response that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Plot Residuals

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Plot Residuals( state=0|1 ) ); obj &lt;&lt; Fit Name( {Plot Residuals( state=0|1 )} )

**Description:** Shows or hides five diagnostic plots.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1, {Plot Residuals( 1 )} );
Wait( 1 );
obj << (curve[1] << Plot Residuals( 0 ));

```

#### Profiler

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Profiler( state=0|1 ) ); obj &lt;&lt; Fit Name( {Profiler( state=0|1 )} )

**Description:** Shows or hides a prediction profiler for the selected outcome given the selected predictor and the specified model.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Profiler( 1 )} );
Wait( 1 );
obj << (Curve[1] << Profiler( 0 ));

```

#### Remove Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**Description:** Removes the fitted curve.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**Description:** Shows or hides the reports for summary of fit, lack of fit, ANOVA, and parameter estimates. On by default.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**Description:** Saves a new column to the original data table. The column contains the predicted values for the specified fitted curve.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**Description:** Saves a new column to the original data table. The column contains the residual values for the specified fitted curve.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**Description:** Saves a new column to the original data table. The column contains the Studentized residuals for the specified fitted curve.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**Description:** Changes the alpha level used for the confidence curves.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

#### Set α Level

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**Description:** Changes the alpha level used for the confidence curves.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### Item Messages

#### 5% Contours

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; "5% Contours"n( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {"5% Contours"n( state=0|1 )} )

**Description:** Shows or hides the 5% contour lines. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {"5% Contours"n( 0 )} );
Wait( 1 );
obj << (curve[1] << "5% Contours"n( 1 ));

```

#### Color By Density Quantile

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color By Density Quantile ); obj &lt;&lt; Nonpar Density( {Color by Density Quantile} )

**Description:** Colors the points and rows according to the density.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
Wait( 1 );
obj << (curve[1] << Color By Density Quantile);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color By Density Quantile} );

```

#### Color Theme

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color Theme( "theme"(state=0|1 ) ) ); obj &lt;&lt; Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**Description:** Sets the color theme for the quantile density contour lines.

**JMP Version Added:** 14

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

#### Contour Fill

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Fill( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Fill( state=0|1 )} )

**Description:** Shows or hides the filled contours.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );
obj << (curve[1] << Contour Fill( 1 ));

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Fill( 1 )} );

```

#### Contour Lines

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Lines( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Lines( state=0|1 )} )

**Description:** Shows or hides the contour lines. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Lines( 0 )} );
Wait( 1 );
obj << (curve[1] << Contour Lines( 1 ));

```

#### Kernel Control

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Kernel Control( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Kernel Control( state=0|1 )} )

**Description:** Shows or hides a slider to control the standard deviation for each variable. The standard deviation defines the range of X and Y values for determining the density of contour lines.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 )} );
Wait( 1 );
obj << (curve[1] << Kernel Control( 0 ));

```

#### Mesh Plot

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mesh Plot( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Mesh Plot( state=0|1 )} )

**Description:** Shows or hides a three-dimensional plot of the density over a grid of the two analysis variables.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
Wait( 1 );
obj << (curve[1] << Mesh Plot( 0 ));

```

#### Modal Clustering

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Modal Clustering( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Modal Clustering( state=0|1 )} )

**Description:** Shows or hides the results for a modal clustering of the data, which identifies cluster assignments based on the current contours. This option also saves the cluster numbers to a new column in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Modal Clustering( 1 )} );
Wait( 1 );
obj << (curve[1] << Modal Clustering( 0 ));

```

#### Remove Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**Description:** Removes the nonparametric density.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density();
Wait( 1 );
obj << (curve[1] << Remove Fit);

```

#### Report

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Report( state=0|1 )} )

**Description:** Shows or hides the Quantile Density Contours report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Report( 0 )} );
Wait( 1 );
obj << (curve[1] << Report( 1 ));

```

#### Save Density Grid

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Grid ); obj &lt;&lt; Nonpar Density( {Save Density Grid} )

**Description:** Saves columns to a new data table. The columns contain the density estimates and corresponding quantiles.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Grid} );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Grid);

```

#### Save Density Quantile

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Quantile ); obj &lt;&lt; Nonpar( {Save Density Quantile} )

**Description:** Saves a new column to the original data table. The column contains a value that represents the density quantile that contains each point.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Quantile);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Quantile} );

```

#### Select Points by Density

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points by Density( lower probability, upper probability ) ); obj &lt;&lt; Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**Description:** Selects points between the specified lower and upper probabilities.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );
Wait( 1 );
obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

#### Set Kernel

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Kernel( xStdDev, yStdDev )); obj &lt;&lt; Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**Description:** Sets the kernel standard deviations for both the X and Y values.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );
Wait( 1 );
obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### Item Messages

#### Confid Curves Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**Description:** Shows or hides the confidence curves for the fitted line.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Description:** Shows or hides the confidence curves for an individual predicted value.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for an individual prediction that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**Description:** Changes the line color of the fitted line, confidence curves, and shaded confidence regions.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**Description:** Changes the line style of the fitted line.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**Description:** Changes the line width of both the fitted line and any confidence curves.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**Description:** Shows or hides the line of fit. On by default.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for the mean response that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**Description:** Removes the fitted curve.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**Description:** Shows or hides the reports for summary of fit, lack of fit, ANOVA, and parameter estimates. On by default.

**Curve Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Normal Ellipse Example**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**Description:** Saves a new column to the original data table. The column contains the predicted values for the specified fitted curve.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**Description:** Saves a new column to the original data table. The column contains the residual values for the specified fitted curve.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**Description:** Saves a new column to the original data table. The column contains the Studentized residuals for the specified fitted curve.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Select Points Inside

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Inside ); obj &lt;&lt; Density Ellipse( {Select Points Inside} )

**Description:** Selects points inside the ellipse.

```jsl

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

#### Select Points Outside

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Outside ); obj &lt;&lt; Density Ellipse( {Select Points Outside} )

**Description:** Selects points outside the ellipse.

```jsl

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

#### Shaded Contour

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; Shaded Contour( state=0|1 ) ); obj &lt;&lt; Density Ellipse( {Shaded Contour( state=0|1 )} )

**Description:** Shows or hides the shaded contour.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), );
obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );
Wait( 1 );
obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### Associated Constructors

#### Bivariate

**Syntax:** Bivariate( Y( columns ), X( columns ) )

**Description:** Models a continuous response with respect to another continuous variable. Analysis methods include fitting lines, polynomials, splines, and bivariate densities.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Columns

#### By

**Syntax:** obj = Bivariate(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );

```

#### Freq

**Syntax:** obj = Bivariate(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( _freqcol ) );

```

#### Regressor

**Syntax:** obj = Bivariate(...Regressor( column(s) )...)

**Description:** Specifies the predictor variables. These variables must have a continuous modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Response

**Syntax:** obj = Bivariate(...Response( column(s) )...)

**Description:** Specifies the continuous response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Weight

**Syntax:** obj = Bivariate(...&lt;Weight( column )&gt;...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( _weightcol ) );

```

#### X

**Syntax:** obj = Bivariate(...X( column(s) )...)

**Description:** Specifies the predictor variables. These variables must have a continuous modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Y

**Syntax:** obj = Bivariate(...Y( column(s) )...)

**Description:** Specifies the continuous response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Item Messages

#### Curve

**Syntax:** obj &lt;&lt; ( Curve[number] &lt;&lt; option )

**Description:** Array of handles to the fitted lines. This enables you to send Bivariate Curve messages to specific curves that have been fit.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Density Ellipse

**Syntax:** obj &lt;&lt; Density Ellipse( percent )

**Description:** Fits a bivariate normal contour. The contour contains the specified percent of total data points.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );

```

#### Fit Cauchy

**Syntax:** obj &lt;&lt; Fit Cauchy

**Description:** Fits a robust regression model where the parameters are estimated by maximum likelihood with a Cauchy link function.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Cauchy;

```

#### Fit Each Value

**Syntax:** obj &lt;&lt; Fit Each Value

**Description:** Fits a line that goes through the mean Y value of each set of unique X values.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Each Value;

```

#### Fit Line

**Syntax:** obj &lt;&lt; Fit Line

**Description:** Fits a least squares regression model to the data. The fit line is shown on the plot and a fit report is provided.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;

```

#### Fit Mean

**Syntax:** obj &lt;&lt; Fit Mean

**Description:** Fits the mean of the Y response variable. A flat line with a slope of zero is shown on the plot.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Mean;

```

#### Fit Orthogonal

**Syntax:** obj &lt;&lt; Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**Description:** Fits the specified orthogonal regression model. Orthogonal regression models are useful when both the X and Y variables are measured with error. The Specified Variance Ratio argument enables you to specify the ratio of the variance of the error in the X variable to the error in the Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Orthogonal( Fit X to Y );

```

#### Fit Passing Bablok

**Syntax:** obj &lt;&lt; Fit Passing Bablok

**Description:** Fits a regression model using the Passing-Bablok procedure. This procedure is useful when both the X and Y variables are measured with error.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Passing Bablok;

```

#### Fit Polynomial

**Syntax:** obj &lt;&lt; Fit Polynomial( degree of model )

**Description:** Fits a polynomial curve of the specified degree using least squares regression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3 );

```

#### Fit Robust

**Syntax:** obj &lt;&lt; Fit Robust

**Description:** Fits a regression model using the Huber M-estimation method, which is robust with respect to outliers. The Huber loss function penalizes outliers and increases as a quadratic function for small errors and as a linear function for large errors.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Robust;

```

#### Fit Special

**Syntax:** obj &lt;&lt; Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), &lt;Intercept( number )&gt;, &lt;Slope( number )&gt;, &lt;Degree( degree )&gt;, Centered Polynomial&gt; )

**Description:** Fits a regression model that contains transformations for the X and Y variables. You can also put constraints on the slope and intercept, as well as fit polynomial models using the degree argument.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Special( xTran( "Log" ) );
obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

#### Fit Spline

**Syntax:** obj &lt;&lt; Fit Spline( lambda, &lt;Standardized&gt; )

**Description:** Fits a penalized least squares model to the data, where the smoothing parameter, lambda, determines the degree of smoothness for the model fit.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Spline( 341.1929, Standardized );
obj << Fit Spline( 341.1929 );

```

#### Fit Where

**Syntax:** obj &lt;&lt; Fit Where( column == level, command )

**Description:** Fits a curve to a single level of a categorical variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

#### Group By

**Syntax:** obj &lt;&lt; Group By( column )

**Description:** Specifies a grouping variable. Once a grouping variable is specified, all analyses are performed separately for each level of the grouping variable.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Group By( :drug );
obj << Fit Line;

```

#### Histogram Borders

**Syntax:** obj &lt;&lt; Histogram Borders( state=0|1 )

**Description:** Shows or hides histograms on the horizontal and vertical axes of the scatterplot.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Histogram Borders( 1 );

```

#### Kernel Smoother

**Syntax:** obj &lt;&lt; Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**Description:** Applies a local fit over repeated subsets of the data where the subset range is determined by alpha, the smoothness of the fit by lambda, and the weight by the weight function. Outliers are weighted downward as robustness increases. This method is also known as a LOESS smoother.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

#### Nonpar Density

**Syntax:** obj &lt;&lt; Nonpar Density

**Description:** Fits nonparametric bivariate density contours and draws the corresponding contours on the graph. The contours are in 5% intervals.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density;

```

#### Paired t test

**Syntax:** obj &lt;&lt; Paired t test

**Description:** Runs a paired t-test, produces the report, and displays a 45-degree gray line on the scatterplot to represent where the two columns are equal.



This option has been promoted to the Matched Pairs platform. This option is also accessible from the Bivariate menu when you hold down the shift key.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;

```

#### Points Jittered

**Syntax:** obj &lt;&lt; Points Jittered( "None"|"Auto"|"Random Uniform"|"Random Normal"|"Density Random"|"Packed"|"Grid"|"Hex Grid"|"Beeswarm"="Auto" )

**Description:** Specifies the spread of the data points. When selected, the data points are jittered to avoid overlapping markers. "Auto" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );
obj << Points Jittered( "Random Normal" );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides points on the graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
Wait( 1 );
obj << Show Points( 0 );

```

#### Summary Statistics

**Syntax:** obj &lt;&lt; Summary Statistics( state=0|1 )

**Description:** Shows or hides summary statistics tables.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Summary Statistics( 1 );

```

### Shared Item Messages

#### Action

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

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

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

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

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

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Contingency > Analysis of Means for Proportions

### Item Messages

#### Point Options

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the Analysis of Means for Proportions chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line for the Analysis of Means in Proportions chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading in the Analysis of Means for Proportions chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines in the Analysis of Means for Proportions chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the response proportions and decision limits for each level of the X variable. The report also indicates whether a limit has been exceeded.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

#### Switch Response Level for Proportion

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) );scrobj &lt;&lt; Switch Response Level for Proportion( state=0|1 )

**Description:** Changes the response category that is used in the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### Item Messages

#### Forest Plot

**Syntax:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) );scobj &lt;&lt; Forest Plot( state=0|1 )

**Description:** Shows or hides the Equivalence Tests Forest Plot. On by default.

**JMP Version Added:** 17

```jsl

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

#### Remove

**Syntax:** scobj &lt;&lt; Remove

**Description:** Removes the Equivalence Tests report.

**JMP Version Added:** 17

```jsl

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

#### Test Report

**Syntax:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) );scobj &lt;&lt; Test Report( state=0|1 )

**Description:** Shows or hides a report that summarizes the equivalence tests, superiority tests, or noninferiority tests for risk differences or risk ratios. On by default.

**JMP Version Added:** 17

```jsl

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

### Item Messages

#### Cell Chi Square

**Syntax:** obj &lt;&lt; Contingency Table( Cell Chi Square( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the individual cell contribution to the chi-square statistic in the contingency table.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Cell Chi Square( 1 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

#### Col %

**Syntax:** obj &lt;&lt; Contingency Table( Col %( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides each cells&apos; percentage contribution to the column in the contingency table. On by default.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 0 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum

**Syntax:** obj &lt;&lt; Contingency Table( Col Cum( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the cumulative column total in the contingency table.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**Example 2**

```jsl

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

#### Col Cum %

**Syntax:** obj &lt;&lt; Contingency Table( Col Cum %( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the cumulative column percentage in the contingency table.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**Example 2**

```jsl

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

#### Count

**Syntax:** obj &lt;&lt; Contingency Table( Count( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the cell count in the contingency table. On by default.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 0 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Deviation

**Syntax:** obj &lt;&lt; Contingency Table( Deviation( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the individual cell deviation in the contingency table. The individual cell deviation is the actual cell count minus the expected cell count.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Deviation( 1 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Expected

**Syntax:** obj &lt;&lt; Contingency Table( Expected( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the expected cell count in the contingency table. The expected cell count is the product of the corresponding row total and column total divided by the grand total.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Expected( 1 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Make Into Data Table

**Syntax:** obj &lt;&lt; Contingency Table( Make Into Data Table )

**Description:** Creates a data table that contains the crosstabs data.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

#### Row %

**Syntax:** obj &lt;&lt; Contingency Table( Row %( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides each cells&apos; percentage contribution to the row in the contingency table. On by default.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 0 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum

**Syntax:** obj &lt;&lt; Contingency Table( Row Cum( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the cumulative row total in the contingency table.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**Example 2**

```jsl

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

#### Row Cum %

**Syntax:** obj &lt;&lt; Contingency Table( Row Cum %( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the cumulative row percentage in the contingency table.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**Example 2**

```jsl

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

#### Total %

**Syntax:** obj &lt;&lt; Contingency Table( Total %( state=0|1, &lt;Format(...)&gt; ) )

**Description:** Shows or hides the cell total percentage in the contingency table. On by default.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 0 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### Item Messages

#### 3D Correspondence Analysis

**Syntax:** obj &lt;&lt; Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**Description:** Shows or hides a three-dimensional scatterplot.

```jsl

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

#### Make Table

**Syntax:** obj &lt;&lt; Correspondence Analysis( "Make Table" )

**Description:** Creates a data table that contains the correspondence analysis output.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Make Table" );

```

#### Save Value Order

**Syntax:** obj &lt;&lt; Correspondence Analysis( "Save Value Order" )

**Description:** Saves a Value Ordering column property to both the X and Y variable columns in the data table. The column property specifies the order of the levels sorted by the first correspondence score coefficient.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### Associated Constructors

#### Contingency

**Syntax:** Contingency( Y( columns ), X( columns ) )

**Description:** Models a categorical response across a set of categorical groups. Analysis methods include chi-square tests and mosaic plots.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Columns

#### Block

**Syntax:** obj = Contingency(...&lt;Block( column )&gt;...)

**Description:** Specifies a blocking variable. This identifies a second factor and performs a Cochran-Mantel-Haenszel test.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

#### By

**Syntax:** obj = Contingency(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );

```

#### Freq

**Syntax:** obj = Contingency(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( _freqcol ) );

```

#### Grouping Category

**Syntax:** obj = Contingency(...Grouping Category( column(s) )...)

**Description:** Specifies the predictor variables. These variables must have an ordinal or nominal modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Response Category

**Syntax:** obj = Contingency(...Response Category( column(s) )...)

**Description:** Specifies the categorical response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Weight

**Syntax:** obj = Contingency(...&lt;Weight( column )&gt;...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( _weightcol ) );

```

#### X

**Syntax:** obj = Contingency(...X( column(s) )...)

**Description:** Specifies the predictor variables. These variables must have an ordinal or nominal modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Y

**Syntax:** obj = Contingency(...Y( column(s) )...)

**Description:** Specifies the categorical response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Item Messages

#### Agreement Statistic

**Syntax:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**Description:** Shows or hides a report that contains statistics that measure the agreement between levels. The report includes the Kappa statistic, as well as the standard error, confidence interval, and hypothesis test for the statistic. The report also includes Bowker&apos;s test of symmetry, which is also known as McNemar&apos;s test. This option is available only when the X and Y variables have the same levels.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 ),
	Agreement Statistic( 1 )
);

```

#### Analysis of Means for Proportions

**Syntax:** obj &lt;&lt; Analysis of Means for Proportions( state=0|1, &lt;chart options&gt; )

**Description:** Shows or hides an analysis of means for proportions (ANOMP) decision chart to compare group proportions. ANOMP is a multiple comparison procedure, which compares the response proportions for the levels of the X variable to the overall response proportion. This option is available only when the Y variable has exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency(
	Y( :marital status ),
	X( :type ),
	Analysis of Means for Proportions( 1 )
);

```

#### Cochran Armitage Trend Test

**Syntax:** obj &lt;&lt; Cochran Armitage Trend Test( state=0|1 )

**Description:** Shows or hides a test for trends in binomial proportions across levels of a single variable. This option is available only when one variable has exactly two levels and the other variable is ordinal.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );
obj << Cochran Armitage Trend Test( 1 );

```

#### Cochran Mantel Haenszel

**Syntax:** obj &lt;&lt; Cochran Mantel Haenszel( column );obj &lt;&lt; Cochran Mantel Haenszel( state=0|1 )

**Description:** Shows or hides a test that determines whether there is a relationship between two categorical variables after blocking across a third classification variable.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :type ), X( :marital status ) );
obj << Cochran Mantel Haenszel( :country );
Wait( 2 );
obj << Cochran Mantel Haenszel( 0 );

```

#### Contingency Table

**Syntax:** obj &lt;&lt; Contingency Table( state=0|1 )

**Description:** Shows or hides a two-way frequency table. The table contains a row for each level of the X variable and a column for each level of the Y variable. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( 0 );

```

#### Correspondence Analysis

**Syntax:** obj &lt;&lt; Correspondence Analysis( state=0|1 );obj &lt;&lt; Correspondence Analysis( correspondence chart options )

**Description:** Shows or hides a correspondence analysis, which identifies rows or columns of a frequency table that have similar patterns of counts. In the correspondence analysis plot, there is a point for each row and for each column of the contingency table.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( 1 );

```

#### Equivalence Tests of Relative Risk

**Syntax:** obj &lt;&lt; Equivalence Tests of Relative Risk( ratio, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**Description:** Tests that the relative risks do not differ by more than a ratio determined to be practically equivalent. This is the reverse of the usual significance test. Alpha, test type, and the group levels are optional arguments. The test type argument is "Equivalence" by default, but it can also be used to specify superiority or noninferiority tests.

```jsl

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

#### Equivalence Tests of Risk Difference

**Syntax:** obj &lt;&lt; Equivalence Tests of Risk Difference( difference, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**Description:** Tests that the risk differences do not differ by more than an amount (difference) determined to be practically equivalent. This is the reverse of the usual significance test. Alpha, test type, and the group levels are optional arguments. The test type argument is "Equivalence" by default, but it can also be used to specify superiority or noninferiority tests.

```jsl

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

#### Exact Agreement Statistic

**Syntax:** obj &lt;&lt; Exact Agreement Statistic( state=0|1 )

**Description:** Shows or hides the exact version of the agreement statistic Kappa.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Agreement Statistic( 1 );

```

#### Exact Cochran Armitage Trend Test

**Syntax:** obj &lt;&lt; Exact Cochran Armitage Trend Test( state=0|1 )

**Description:** Shows or hides the exact version of the Cochran-Armitage trend test.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Cochran Armitage Trend Test( 1 );

```

#### Fisher's Exact Test

**Syntax:** obj &lt;&lt; Fisher&apos;s Exact Test( state=0|1 )

**Description:** Shows or hides Fisher&apos;s exact test for testing the association between two categorical variables. This test does not depend on any large-sample distributional assumptions.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Fisher's Exact Test( 1 );

```

#### Horizontal Mosaic

**Syntax:** obj &lt;&lt; Horizontal Mosaic( state=0|1 )

**Description:** Rotates the mosaic plot horizontally (1) or vertically (0).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
Wait( 2 );
obj << Horizontal Mosaic( 1 );

```

#### Jonckheere Terpstra Test

**Syntax:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**Description:** Shows or hides a report of the Jonckheere-Terpstra test, which is a nonparametric test for ordered differences among classes. It tests the null hypothesis that the distribution of the response variable does not differ among classes.

```jsl

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

#### Measures of Association

**Syntax:** obj &lt;&lt; Measures of Association( state=0|1 )

**Description:** Shows or hides a report that contains measures of the association between the variables in the contingency table.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Measures of Association( 1 )
);

```

#### Mosaic Plot

**Syntax:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Description:** Shows or hides a graphical representation of the contingency table. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Mosaic Plot( 0 );

```

#### Odds Ratio

**Syntax:** obj &lt;&lt; Odds Ratio( state=0|1 )

**Description:** Shows or hides a report of the odds ratio. This option is available only when the X and Y variables each have exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

```

#### Relative Risk

**Syntax:** obj &lt;&lt; Relative Risk( state=0|1, &lt;Y variable level, X variable level&gt; ); obj &lt;&lt; Relative Risk( state=0|1, &lt;"All"&gt; )

**Description:** Shows or hides the relative risk between the levels of the response. This option is available only when the X and Y variables each have exactly two levels.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "All" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**Description:** Changes the alpha level used to compute the decision limits. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Set α Level

**Syntax:** obj &lt;&lt; Set α Level( alpha=0.05 )

**Description:** Changes the alpha level used to compute the decision limits. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Tests

**Syntax:** obj &lt;&lt; Tests( state=0|1 )

**Description:** Shows or hides tests that measure if the response level rates are the same across the levels of the X variable. These tests are analogous to the Analysis of Variance table for continuous data. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Tests( 0 );

```

#### Two Sample Test for Proportions

**Syntax:** obj &lt;&lt; Two Sample Test for Proportions( state=0|1 )

**Description:** Show or hides a two-sample test for proportions. This test compares the proportions of the Y variable between the two levels of the X variable. This option is available only when the X and Y variables each have exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Two Sample Test for Proportions( 1 )
);

```

### Shared Item Messages

#### Action

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

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

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

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

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

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Logistic

### Associated Constructors

#### Logistic

**Syntax:** Logistic( Y( columns ), X( columns ) )

**Description:** Models a categorical response with respect to a continuous variable. Analysis methods include logistic regression and ROC curves.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Columns

#### By

**Syntax:** obj = Logistic(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );

```

#### Categorical Response

**Syntax:** obj = Logistic(...Categorical Response( column(s) )...)

**Description:** Specifies the categorical response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Continuous Regressor

**Syntax:** obj = Logistic(...Continuous Regressor( column(s) )...)

**Description:** Specifies the predictor variables. These variables must have a continuous modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Freq

**Syntax:** obj = Logistic(...&lt;Freq( column )&gt;...)

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Weight

**Syntax:** obj = Logistic(...&lt;Weight( column )&gt;...)

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Weight( _weightcol )
);

```

#### X

**Syntax:** obj = Logistic(...X( column(s) )...)

**Description:** Specifies the predictor variables. These variables must have a continuous modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Y

**Syntax:** obj = Logistic(...Y( column(s) )...)

**Description:** Specifies the categorical response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Item Messages

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Description:** Displays or hides confidence intervals in the parameter estimates table to the right of each effect.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );
obj << Confidence Intervals( 0.01 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( prob1, prob2, ... ), &lt;Confidence Level( percent=0.95 )&gt;, &lt;Two sided|Lower One Sided|Upper One Sided&gt; )

**Description:** Enables you to predict values of the predictor variable for one or more values of the response variable. By default, two-sided 95% confidence limits are computed for each inverse prediction.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

#### Lift Curve

**Syntax:** obj &lt;&lt; Lift Curve( state=0|1 )

**Description:** Shows or hides the Lift Curve plot. A lift curve plots the lift versus the portion of the observations and provides another view of the predictive ability of a model.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Lift Curve( 1 );

```

#### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Description:** Enables you to select the color of the plot curves.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**Syntax:** obj &lt;&lt; Logistic Plot( state=0|1 )

**Description:** Shows or hides the logistic plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Logistic Plot( 0 );

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; Odds Ratios( state=0|1 )

**Description:** Adds or removes columns that contain odds ratios to the Parameter Estimates report.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description:** Shows or hides the Precision-Recall Curve plot that contains a curve for each level of the response variable. A precision-recall curve plots the precision values against the recall values at a variety of thresholds.

```jsl

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

#### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve for each level of the response variable. The ROC curve is a plot of sensitivity versus (1 - specificity).

```jsl

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

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Description:** Saves new columns to the data table. The new columns contain the formula for the probability that is predicted by the model.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Save Probability Formula;

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides the points in the logistic plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**Syntax:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**Description:** Shows or hides the rate curve in the logistic plot. The rate curve is useful only if you have several points for each value of the X variable.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Target Level

**Syntax:** obj = Logistic(...Target Level( level )...)

**Description:** Specifies the level of the response whose probability you want to model.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
obj << ROC Curve( 1 );

```

### Shared Item Messages

#### Action

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

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

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

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

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

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Oneway > ANOM for Ranges

### Item Messages

#### Point Options

**Syntax:** obj &lt;&lt; ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Point Options( "Show Only Points" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; ANOM for Ranges( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj &lt;&lt; ANOM for Ranges( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (overall average range). On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the Analysis of Means for Ranges chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the Analysis of Means for Ranges chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; ANOM for Ranges( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group ranges and corresponding decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### Item Messages

#### Point Options

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (overall mean ADM). On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the ANOMV-Levene (ADM) chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the ANOMV-Levene (ADM) chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group mean ADMs and the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### Item Messages

#### Graph in Variance Scale

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Graph in Variance Scale( state=0|1 ) );scrobj &lt;&lt; Graph in Variance Scale( state=0|1 )

**Description:** Specifies the scale of the vertical axis. You can choose between standard deviations and variances.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Graph in Variance Scale( 0 );

```

#### Point Options

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (RMSE or MSE depending on Y-scale). On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the ANOMV chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the ANOMV chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; ANOM for Variances( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group standard deviations (or variances) and the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### Item Messages

#### Point Options

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (overall mean). On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the ANOM-TR chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the ANOM-TR chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group mean transformed ranks and the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### Item Messages

#### Point Options

**Syntax:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (overall mean) on the ANOM chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the ANOM chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the ANOM chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group means and the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### Item Messages

#### Forest Plot

**Syntax:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) );scobj &lt;&lt; Forest Plot( state=0|1 )

**Description:** Shows or hides the Equivalence Tests Forest Plot. On by default.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Pairwise Comparisons

**Syntax:** obj &lt;&lt; Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) );scobj &lt;&lt; Equivalence Tests Pairwise Comparisons( state=0|1 )

**Description:** Shows or hides the Equivalence Tests Pairwise Comparisons report for all pairwise comparisons.

**JMP Version Added:** 16

```jsl

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

#### Remove

**Syntax:** scobj &lt;&lt; Remove

**Description:** Removes the Equivalence Tests report.

**JMP Version Added:** 16

```jsl

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

#### Scatterplot

**Syntax:** obj &lt;&lt; Equivalence Tests( ..., Scatterplot( state=0|1 ) );scobj &lt;&lt; Scatterplot( state=0|1 )

**Description:** Shows or hides the Equivalence Tests Scatterplot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Scatterplot( 0 );

```

#### Test Report

**Syntax:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) );scobj &lt;&lt; Test Report( state=0|1 )

**Description:** Shows or hides a report that summarizes the equivalence tests, superiority tests, or noninferiority tests for means or standard deviations. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### Item Messages

#### Confidence Quantile

**Syntax:** obj &lt;&lt; Each Pair( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; With Best( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; With Control( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**Description:** Shows or hides the critical value(s) and alpha level used for the means comparison. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

 On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

#### Connecting Letters Report

**Syntax:** obj &lt;&lt; Each Pair( 1, Connecting Letters Report( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Connecting Letters Report( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**Description:** Shows or hides the traditional letter-coded report where means that do not share a letter are significantly different. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

 On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

#### Detailed Comparisons Report

**Syntax:** obj &lt;&lt; Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**Description:** Shows or hides a detailed report for each comparison. Each section shows the difference between the levels, standard error and confidence intervals, t-ratios, p-values, and degrees of freedom. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

#### Difference Matrix

**Syntax:** obj &lt;&lt; Each Pair( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; With Best( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; With Control( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**Description:** Shows or hides a table of all differences of means. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Difference Matrix( 1 ) );

```

#### Dunnett's Lower

**Syntax:** obj &lt;&lt; Dunnett&apos;s Lower( state=0|1 )

**Description:** Shows or hides a Dunnett&apos;s lower one-tailed t test, which tests whether means are smaller than the mean of a control group.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

#### Dunnett's Upper

**Syntax:** obj &lt;&lt; Dunnett&apos;s Upper( state=0|1 )

**Description:** Shows or hides a Dunnett&apos;s upper one-tailed t test, which tests whether means are larger than the mean of a control group.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

#### LSD Threshold Matrix

**Syntax:** obj &lt;&lt; Each Pair( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; All Pairs( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; With Best( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**Description:** Shows or hides a matrix of pairwise differences of means minus the least significant difference for those means. A positive value indicates a pair of means that are significantly different. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

 On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

#### Ordered Differences Report

**Syntax:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**Description:** Shows or hides all pairwise positive-side differences, standard error of the difference, confidence intervals, p-values, and a plot of the magnitude of the difference with overlaid confidence intervals. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

 On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

#### Ordered Ratio Report

**Syntax:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) );obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**Description:** Shows or hides all pairwise positive-side differences, standard error of the difference, confidence intervals, p-values, and a plot of the magnitude of the difference with overlaid confidence intervals. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

 On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

#### Ratio Matrix

**Syntax:** obj &lt;&lt; Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) );obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**Description:** Shows or hides a table of all differences of means. 



Each Pair is equivalent to Student&apos;s t. All Pairs is equivalent to Tukey HSD. With Best is equivalent to Hsu MCB. With Control is equivalent to Dunnett&apos;s. Each Pair Stepwise is equivalent to Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### Item Messages

#### Nemenyi Test

**Syntax:** obj &lt;&lt; Nemenyi Test( state=0|1 )

**Description:** Shows or hides a report of the Nemenyi test. The Nemenyi test is a pairwise post-hoc test for multiple comparisons of mean rank sums for unreplicated blocked data. This test is usually conducted post-hoc after significant results of the Friedman test.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### Associated Constructors

#### Oneway

**Syntax:** Oneway( Y( columns ), X( columns ) )

**Description:** Models a continuous response across a set of categorical groups. Analysis methods include ANOVA, means comparisons, analysis of means, and quantile plots.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Columns

#### Block

**Syntax:** obj &lt;&lt; Block( column )

**Description:** Specifies a blocking variable. When this column is specified, the values of the response variable are centered by the block variable.

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );

```

#### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( _freqcol ) );

```

#### Grouping

**Syntax:** obj &lt;&lt; Grouping( column(s) )

**Description:** Specifies the predictor variables. These variables must have an ordinal or nominal modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

**Description:** Specifies the continuous response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Weight

**Syntax:** obj &lt;&lt; Weight( column )

**Description:** Specifies a column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( _weightcol ) );

```

#### X

**Syntax:** obj &lt;&lt; X( column(s) )

**Description:** Specifies the predictor variables. These variables must have an ordinal or nominal modeling type.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

**Description:** Specifies the continuous response variable or variables that you want to analyze.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Item Messages

#### ANOM

**Syntax:** obj &lt;&lt; ANOM( state=0|1, &lt;chart options&gt; )

**Description:** Compares each group mean to the overall mean.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1 );

```

#### ANOM for Ranges

**Syntax:** obj &lt;&lt; ANOM for Ranges( state=0|1, &lt;chart options&gt; )

**Description:** Test for unequal variance by comparing group ranges to the overall average range.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Ranges( 1 );

```

#### ANOM for Variances

**Syntax:** obj &lt;&lt; ANOM for Variances( state=0|1, &lt;chart options&gt; )

**Description:** Test for unequal variance by comparing group standard deviations to the root mean squared error.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1 );

```

#### ANOM for Variances with Levene(ADM)

**Syntax:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( state=0|1, &lt;chart options&gt; )

**Description:** Test for unequal variance by comparing the group means of the absolute deviations from the median (ADM) to the overall mean ADM.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

#### ANOM with Transformed Ranks

**Syntax:** obj &lt;&lt; ANOM with Transformed Ranks( state=0|1, &lt;chart options&gt; )

**Description:** Compares each group mean transformed rank to the overall mean transformed rank.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1 );

```

#### All Graphs

**Syntax:** obj &lt;&lt; All Graphs( state=0|1 )

**Description:** Shows or hides the Oneway plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << All Graphs( 0 );

```

#### All Pairs

**Syntax:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**Description:** Computes the Tukey honestly significant difference (HSD) test; this test protects the overall error rate.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Box Plots

**Syntax:** obj &lt;&lt; Box Plots( state=0|1 )

**Description:** Shows or hides outlier box plots for each group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Box Plots( 1 );

```

#### CDF Plot

**Syntax:** obj &lt;&lt; CDF Plot( state=0|1 )

**Description:** Shows or hides the cumulative distribution function for all of the groups in the Oneway report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << CDF Plot( 1 );

```

#### Cauchy Fit

**Syntax:** obj &lt;&lt; Cauchy Fit( state=0|1 )

**Description:** Assumes that the errors have a Cauchy distribution. The Cauchy fit is a robust method that can handle extreme outliers.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Cauchy Fit( 1 );

```

#### Compare Densities

**Syntax:** obj &lt;&lt; Compare Densities( state=0|1 )

**Description:** Shows or hides a plot of overlaid probability density functions for each group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Compare Densities( 1 );

```

#### Comparison Circles

**Syntax:** obj &lt;&lt; Comparison Circles( state=0|1 )

**Description:** Shows or hides comparison circles. This option is available only when a multiple comparison report is open. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
Wait( 2 );
obj << Comparison Circles( 0 );

```

#### Composition of Densities

**Syntax:** obj &lt;&lt; Composition of Densities( state=0|1 )

**Description:** Shows or hides a plot of the summed densities, weighted by the count of each group. Across the range of the X variable, the Composition of Densities plot shows how each group contributes to the total density.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Composition of Densities( 1 );

```

#### Connect Means

**Syntax:** obj &lt;&lt; Connect Means( state=0|1 )

**Description:** Shows or hides straight lines that connect the group means.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Connect Means( 1 );

```

#### Dunn All Pairs for Joint Ranks

**Syntax:** obj &lt;&lt; Dunn All Pairs for Joint Ranks( state=0|1 )

**Description:** Shows or hides Dunn&apos;s test for all pairs by joint ranking. This test uses the Bonferroni adjustment, but it might not protect overall error rate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn All Pairs for Joint Ranks( 1 );

```

#### Dunn With Control for Joint Ranks

**Syntax:** obj &lt;&lt; Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**Description:** Shows or hides Dunn&apos;s test with a control group by joint ranking. This test uses the Bonferroni adjustment, but it might not protect overall error rate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn With Control for Joint Ranks( 1, {12} );

```

#### Dunnett's

**Syntax:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Description:** Computes Dunnett&apos;s test; this tests whether means are different from the mean of a control group.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### Each Pair

**Syntax:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**Description:** Computes individual pairwise comparisons using Student&apos;s t tests with no adjustments made for multiple tests.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Each Pair Stepwise

**Syntax:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Description:** Computes the Newman-Keuls test; this tests whether there are differences between the means using the Studentized range test in a stepwise procedure. Also known as the Student-Newman-Keuls method, this test is less conservative and more powerful than a Tukey HSD test. See the Oneway Means Comparisons messages for further display options.

**JMP Version Added:** 14

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Equivalence Tests

**Syntax:** obj &lt;&lt; Equivalence Tests( difference, &lt;alpha=.05&gt;, &lt;"Pooled Variance"|"Unequal Variances"&gt;, &lt;test type&gt; )

**Description:** Tests that the means do not differ by more than an amount (difference) determined to be practically equivalent. This is the reverse of the usual significance test. Alpha, variance assumption, and test type are optional arguments. By default, the "Pooled Variance" assumption is used. The test type argument is "Equivalence" by default, but it can also be used to specify superiority or noninferiority tests.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

#### Equivalence Tests of Std Dev

**Syntax:** obj &lt;&lt; Equivalence Tests of Std Dev( ratio, &lt;alpha=.05&gt;, &lt;test type&gt; )

**Description:** Tests that the standard deviations do not differ by more than a ratio determined to be practically equivalent. This is the reverse of the usual significance test. Alpha and test type are optional arguments. The test type argument is "Equivalence" by default, but it can also be used to specify superiority or noninferiority tests.

**JMP Version Added:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

#### Friedman Rank Test

**Syntax:** obj &lt;&lt; Friedman Rank Test( state=0|1 )

**Description:** Shows or hides a test based on Friedman Rank scores. The Friedman Rank scores are the ranks of the data within each level of the blocking variable. The parametric version of this test is a repeated measures ANOVA. This option is available only when a Block variable with an equal number of observations within each block is specified in the platform launch.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### Games-Howell

**Syntax:** obj &lt;&lt; "Games-Howell"n( state=0|1 );

**Description:** Shows or hides a Games-Howell multiple comparison of all pairs of means report. This test can be applied in settings when the individual group variances cannot be assumed to be equal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Games-Howell"n( 1 );

```

#### Grand Mean

**Syntax:** obj &lt;&lt; Grand Mean( state=0|1 )

**Description:** Shows or hides the overall mean of the Y variable. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );
Wait( 2 );
obj << Grand Mean( 1 );

```

#### Histograms

**Syntax:** obj &lt;&lt; Histograms( state=0|1 )

**Description:** Shows or hides side-by-side histograms to the right of the original plot.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );

```

#### Hsu MCB

**Syntax:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**Description:** Computes the Hsu multiple comparison with best (MCB) test; this tests whether means are less than the unknown maximum.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### Jonckheere Terpstra Test

**Syntax:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**Description:** Shows or hides a report of the Jonckheere-Terpstra test, which is a nonparametric test for ordered differences among classes. It tests the null hypothesis that the distribution of the response variable does not differ among classes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
obj = dt << Oneway( Y( :Height ), X( :age ) );
obj << Jonckheere Terpstra Test( 1 );

```

#### Kolmogorov Smirnov Exact Test

**Syntax:** obj &lt;&lt; Kolmogorov Smirnov Exact Test( state=0|1 )

**Description:** Shows or hides the Kolmogorov-Smirnov exact test, which is based on the empirical distribution function. This test determines whether the distribution of the response is the same across the groups. This option is available only when the X variable has exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Exact Test( 1 );

```

#### Kolmogorov Smirnov Test

**Syntax:** obj &lt;&lt; Kolmogorov Smirnov Test( state=0|1 )

**Description:** Shows or hides a test based on the empirical distribution function, which tests whether the distribution of the response is the same across the groups. This option is available only when the X variable has exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Test( 1 );

```

#### Legend

**Syntax:** obj &lt;&lt; Legend( state=0|1 )

**Description:** Shows or hides a legend for the normal quantile, cumulative distribution function (CDF), and density plots. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );
Wait( 2 );
obj << Legend( 1 );

```

#### Line of Fit

**Syntax:** obj &lt;&lt; Line of Fit( state=0|1 )

**Description:** Shows or hides a reference line fit to the data for each level of the X variable on each open quantile plot. This option is available only when a quantile plot is open. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Line of Fit( 0 );

```

#### Matching Column

**Syntax:** obj &lt;&lt; Matching Column( column )

**Description:** Shows or hides a matched fit line and a corresponding fit line on the Oneway plot based on a specified matching variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );
Wait( 2 );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );

```

#### Matching Dotted Lines

**Syntax:** obj &lt;&lt; Matching Dotted Lines( state=0|1 )

**Description:** Shows or hides dotted lines that connect the means through missing levels of the matching variable. The values used in place of the missing cell means are obtained using a two-way ANOVA model. This option is available only when the Matching Column option is selected and values of the matching variable are all missing for a level of the X variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex[6 :: 8] = "";
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Matching Column( :sex );
Wait( 2 );
obj << Matching Dotted Lines( 1 );

```

#### Matching Lines

**Syntax:** obj &lt;&lt; Matching Lines( state=0|1 )

**Description:** Shows or hides lines that connect the means of each level of the matching variable. This option is available only when the Matching Column option is selected.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
Wait( 2 );
obj << Matching Lines( 0 );

```

#### Mean CI Lines

**Syntax:** obj &lt;&lt; Mean CI Lines( state=0|1 )

**Description:** Shows or hides lines at the upper and lower 95% confidence levels for each group. The 95% confidence levels are calculated using the pooled standard deviation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean CI Lines( 1 );

```

#### Mean Diamonds

**Syntax:** obj &lt;&lt; Mean Diamonds( state=0|1 )

**Description:** Shows or hides mean diamonds on the Oneway plot. Each mean diamond spans a 95% confidence interval for the corresponding group mean, with a horizontal line at the mean. The 95% confidence intervals are calculated using the pooled standard deviation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Diamonds( 1 );

```

#### Mean Error Bars

**Syntax:** obj &lt;&lt; Mean Error Bars( state=0|1 )

**Description:** Shows or hides the mean of each group with error bars that are one standard error above and below the mean.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Error Bars( 1 );

```

#### Mean Lines

**Syntax:** obj &lt;&lt; Mean Lines( state=0|1 )

**Description:** Shows or hides a line at the mean of each group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Lines( 1 );

```

#### Mean of Means

**Syntax:** obj &lt;&lt; Mean of Means( state=0|1 )

**Description:** Shows or hides the mean of the group means.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean of Means( 1 );

```

#### Means and Std Dev

**Syntax:** obj &lt;&lt; Means and Std Dev( state=0|1 )

**Description:** Shows or hides mean lines, error bars, and standard deviation lines on the Oneway plot and shows or hides a summary statistics table. The standard errors for the means use individual group standard deviations.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means and Std Dev( 1 );

```

#### Means/Anova

**Syntax:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova"n( state=0|1)

**Description:** Shows or hides mean diamonds on the Oneway plot and shows or hides an ANOVA report. This option is available only when the X variable has more than two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );

```

#### Means/Anova/Pooled t

**Syntax:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova/Pooled t"n( state=0|1)

**Description:** Shows or hides mean diamonds on the Oneway plot and shows or hides an ANOVA report. The ANOVA report includes a pooled t test report that assumes that the two groups have equal variances. This option is available only when the X variable has exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );

```

#### Median Exact Test

**Syntax:** obj &lt;&lt; Median Exact Test( state=0|1 )

**Description:** Shows or hides an analysis of median scores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Median Exact Test( 1 );

```

#### Median Test

**Syntax:** obj &lt;&lt; Median Test( state=0|1 )

**Description:** Shows or hides a test based on median rank scores. The median rank scores are either 1 or 0, depending on whether a rank is above or below the median rank. The median test is the most powerful rank test for errors with double-exponential distributions.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Median Test( 1 );

```

#### Newman-Keuls

**Syntax:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Description:** Computes the Newman-Keuls test; this tests whether there are differences between the means using the Studentized range test in a stepwise procedure. Also known as the Student-Newman-Keuls method, this test is less conservative and more powerful than a Tukey HSD test. See the Oneway Means Comparisons messages for further display options.

**JMP Version Added:** 14

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Normal Quantile Label

**Syntax:** obj &lt;&lt; Normal Quantile Label( state=0|1 )

**Description:** Shows or hides the normal quantile scale on each open quantile plot. This option is available only when a quantile plot is open. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Normal Quantile Label( 0 );

```

#### Plot Actual by Quantile

**Syntax:** obj &lt;&lt; Plot Actual by Quantile( state=0|1 )

**Description:** Shows or hides a quantile plot to the right of the Oneway Analysis plot.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Actual by Quantile( 1 );

```

#### Plot Quantile by Actual

**Syntax:** obj &lt;&lt; Plot Quantile by Actual( state=0|1 )

**Description:** Shows or hides a quantile plot with the Y variable on the horizontal axis and cumulative probabilities on the vertical axis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );

```

#### Points

**Syntax:** obj &lt;&lt; Points( state=0|1 )

**Description:** Shows or hides data points on the Oneway plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << Points( 0 );

```

#### Points Jittered

**Syntax:** obj &lt;&lt; Points Jittered( "None"|"Auto"|"Random Uniform"|"Random Normal"|"Density Random"|"Packed"|"Grid"|"Hex Grid"|"Beeswarm"="Auto" )

**Description:** Specifies the spread of the data points. When selected, the data points are jittered to avoid overlapping markers. "Auto" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );
obj << Points Jittered( "Binned" );

```

#### Points Spread

**Syntax:** obj &lt;&lt; Points Spread( state=0|1 )

**Description:** Specifies the spread of the data points. When selected, the data points are spread across the width of the interval.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Points Spread( 1 );

```

#### Pooled Variance

**Syntax:** obj &lt;&lt; Ratios with Pooled Variance( state=0|1 );

**Description:** Shows or hides a ratio comparison of each pairs of means report. Under the assumption of equal variances, the pooled confidence interval for the mean ratio is the Fieller confidence interval.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1 );

```

#### Power

**Syntax:** obj &lt;&lt; Power( Alpha( from, &lt;to&gt;, &lt;by&gt; ), Sigma( from, &lt;to&gt;, &lt;by&gt; ), Delta( from, &lt;to&gt;, &lt;by&gt; ), Number( from, &lt;to&gt;, &lt;by&gt; ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**Description:** Reports statistical power calculations.  The arguments allow ranges to be specified for the alpha, sigma, delta, and total sample size (Number).  The fifth argument specifies the results of the report.  The sixth argument requests a Power Plot, and the Done argument dismisses the Power Dialog.

```jsl

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

#### Proportion of Densities

**Syntax:** obj &lt;&lt; Proportion of Densities( state=0|1 )

**Description:** Shows or hides a plot of the contribution to the density made by each level of the X variable. The contribution is shown as a proportion of the total density across the range of the X variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Proportion of Densities( 1 );

```

#### Quantiles

**Syntax:** obj &lt;&lt; Quantiles( state=0|1 )

**Description:** Shows or hides box plots on the Oneway plot and shows or hides a quantile report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Quantiles( 1 );

```

#### Robust Fit

**Syntax:** obj &lt;&lt; Robust Fit( state=0|1 )

**Description:** Produces Huber estimates that are equivalent to least squares residuals for small residuals, and equivalent to least absolute values for large residuals.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );

```

#### Robust Means Lines

**Syntax:** obj &lt;&lt; Robust Means Lines( state=0|1 )

**Description:** Shows or hides a line at the robust mean of each group. This option is available only when a Robust option is selected.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );
obj << Robust Means Lines( 1 );

```

#### Save Normal Quantiles

**Syntax:** obj &lt;&lt; Save Normal Quantiles

**Description:** Saves normal quantile values for each level of the X variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Normal Quantiles;

```

#### Save Predicted

**Syntax:** obj &lt;&lt; Save Predicted

**Description:** Saves the predicted mean of the Y variable for each level of the X variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Predicted;

```

#### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Description:** Saves values computed as the Y variable minus the mean of the Y variable within each level of the X variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Residuals;

```

#### Save Standardized

**Syntax:** obj &lt;&lt; Save Standardized

**Description:** Saves standardized values of the Y variable for each level of the X variable. The standardized value is the centered response divided by the standard deviation within each level.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Standardized;

```

#### Select Group

**Syntax:** obj &lt;&lt; Select Group( X value )

**Description:** Selects a group so that its circle is highlighted.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );
Wait( 2 );
obj << Select Group( 14 );

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**Description:** Changes the alpha level used for confidence limits, means diamonds, and confidence level values in reports. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Set α Level

**Syntax:** obj &lt;&lt; Set α Level( alpha=0.05 )

**Description:** Changes the alpha level used for confidence limits, means diamonds, and confidence level values in reports. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Standard Deviations

**Syntax:** obj &lt;&lt; Standard Deviations

**Description:** Launches a window with options for equivalence, superiority, or noninferiority tests for standard deviations. Specify the critical ratio.

#### Std Dev Lines

**Syntax:** obj &lt;&lt; Std Dev Lines( state=0|1 )

**Description:** Shows or hides lines that are one standard deviation above and below the mean of each group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Std Dev Lines( 1 );

```

#### Steel With Control

**Syntax:** obj &lt;&lt; Steel With Control( state = 0|1, {control level} )

**Description:** Shows or hides Steel&apos;s test, which protects the overall error rate for comparing all other groups with a control group. This is the nonparametric version of Dunnett&apos;s method.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Steel With Control( 1, {12} );

```

#### Steel-Dwass All Pairs

**Syntax:** obj &lt;&lt; "Steel-Dwass All Pairs"n( state=0|1 )

**Description:** Shows or hides Steel-Dwass&apos;s test, which protects the overall error rate. This is the nonparametric version of Tukey&apos;s method.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Steel-Dwass All Pairs"n( 1 );

```

#### Student's t

**Syntax:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**Description:** Computes individual pairwise comparisons using Student&apos;s t tests with no adjustments made for multiple tests.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Tukey HSD

**Syntax:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**Description:** Computes the Tukey honestly significant difference (HSD) test; this test protects the overall error rate.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Unequal Variances

**Syntax:** obj &lt;&lt; Unequal Variances( state=0|1 )

**Description:** Shows or hides four tests for equality of group variances. This option also produces the Welch test, which is an ANOVA test for comparing means when the variances within groups are not equal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Unequal Variances( 1 );

```

#### Unpooled Variance

**Syntax:** obj &lt;&lt; Ratios with Unpooled Variance( state=0|1 );

**Description:** Shows or hides a ratio comparison of each pairs of means report. Under the assumption of unequal variances, the unpooled Satterthwaite-based confidence interval for the mean ratio is computed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Unpooled Variance( 1 );

```

#### Van Der Waerden Exact Test

**Syntax:** obj &lt;&lt; Van Der Waerden Exact Test( state=0|1 )

**Description:** Shows or hides an analysis of Van der Waerden or normal scores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Van Der Waerden Exact Test( 1 );

```

#### Wilcoxon Each Pair

**Syntax:** obj &lt;&lt; Wilcoxon Each Pair( state=0|1 )

**Description:** Shows or hides Wilcoxon&apos;s test for all possible individual comparisons with no adjustment for multiple tests. This is the nonparametric version of the Each Pair, Student&apos;s t method.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Each Pair( 1 );

```

#### Wilcoxon Exact Test

**Syntax:** obj &lt;&lt; Wilcoxon Exact Test( state=0|1 )

**Description:** Shows or hides an analysis of Wilcoxon scores using exact methods for each pair of levels.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Wilcoxon Exact Test( 1 );

```

#### Wilcoxon Test

**Syntax:** obj &lt;&lt; Wilcoxon Test( state=0|1 )

**Description:** Shows or hides a test based on Wilcoxon rank scores. The Wilcoxon rank scores are the simple ranks of the data. The Wilcoxon test is the most powerful rank test for errors with logistic distributions. If the X variable has exactly two levels, the Wilcoxon test is equivalent to the Mann-Whitney test. If the X variable has more than two levels, the Kruskal-Wallis test is performed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Test( 1 );

```

#### With Best

**Syntax:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**Description:** Computes the Hsu multiple comparison with best (MCB) test; this tests whether means are less than the unknown maximum.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### With Control

**Syntax:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Description:** Computes Dunnett&apos;s test; this tests whether means are different from the mean of a control group.  See the Oneway Means Comparisons messages for further display options.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### X Axis Proportional

**Syntax:** obj &lt;&lt; X Axis Proportional( state=0|1 )

**Description:** Specifies the spacing on the horizontal axis. When selected, the spacing is proportional to the number of observations at each level. This option is not available when the Matching Column option is selected. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );
Wait( 2 );
obj << X Axis Proportional( 1 );

```

#### t Test

**Syntax:** obj &lt;&lt; t Test( state=0|1 )

**Description:** Shows or hides a t test report assuming that the variances are not equal. This option is available only when the X variable has exactly two levels.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << t Test( 1 );

```

#### van der Waerden Test

**Syntax:** obj &lt;&lt; van der Waerden Test( state=0|1 )

**Description:** Shows or hides a test based on Van der Waerden rank scores. The Van der Waerden rank scores are the ranks of the data divided by one plus a score value. The score value is the number of observations transformed to a normal score by applying the inverse of the normal distribution function. The Van der Waerden test is the most powerful rank test for errors with normal distributions.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << van der Waerden Test( 1 );

```

### Shared Item Messages

#### Action

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

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

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

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

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

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...)

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

