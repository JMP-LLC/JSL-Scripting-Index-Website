# Gaussian Process Model



### Bayesian Optimization

**Syntax:** Bayesian Optimization( Y( column ), X( columns ) )

**Description:** Models the relationship between a continuous response and one or more continuous predictors as a spline with interpolation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

### Profiler

**Syntax:** obj << Profiler( state=0|1 )

**Description:** Explores how each column changes with respect to changes in each factor value across models.

