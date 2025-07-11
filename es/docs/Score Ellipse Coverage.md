# Score Ellipse Coverage



### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 15

### Shaded Contour

**Sintaxis:** obj << Shaded Contour( state=0|1 )

**Descripción:** Muestra u oculta el contorno sombreado.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

