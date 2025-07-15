# Score Ellipse Coverage



## Item Messages

### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

### Shaded Contour

**Syntax:** obj &lt;&lt; Shaded Contour( state=0|1 )

**Description:** Shows or hides the shaded contour.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

