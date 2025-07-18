# Gaussian Process Model



## Associated Constructors

### Bayesian Optimization

**Syntax:** Bayesian Optimization( Y( column ), X( columns ) )

**Description:** Models the relationship between a continuous response and one or more continuous predictors as a spline with interpolation.

```jsl

dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

## Item Messages

### Copy Model Fit Script

**Syntax:** obj &lt;&lt; Copy Model Fit Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

**JMP Version Added:** 19

### Intercept

**Syntax:** obj &lt;&lt; Intercept( number )

**JMP Version Added:** 19

### Nugget

**Syntax:** obj &lt;&lt; Nugget( number )

**JMP Version Added:** 19

### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Explores how each column changes with respect to changes in each factor value across models.

### Residual

**Syntax:** obj &lt;&lt; Residual( number )

**JMP Version Added:** 19

### Save Model Fit Script to Data Table

**Syntax:** obj &lt;&lt; Save Model Fit Script to Data Table

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

**JMP Version Added:** 19

### Save Model Fit Script to Journal

**Syntax:** obj &lt;&lt; Save Model Fit Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

**JMP Version Added:** 19

### Save Model Fit Script to Report

**Syntax:** obj &lt;&lt; Save Model Fit Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

**JMP Version Added:** 19

### Save Model Fit Script to Script Window

**Syntax:** obj &lt;&lt; Save Model Fit Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

**JMP Version Added:** 19

### Starting Values

**Syntax:** obj &lt;&lt; Starting Values( number )

**JMP Version Added:** 19

### Theta Values

**Syntax:** obj &lt;&lt; Theta Values( number )

**JMP Version Added:** 19

