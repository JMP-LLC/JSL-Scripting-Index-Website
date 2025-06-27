# Score Ellipse Coverage



### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version Added:** 15

### Shaded Contour

**Syntax:** obj << Shaded Contour( state=0|1 )

**Description:** Shows or hides the shaded contour.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

