# Score Ellipse Coverage



### Remove Fit

**Syntax:** obj << Remove Fit

**JMP Version hinzugefügt:** 15

### Shaded Contour

**Syntax:** obj << Shaded Contour( state=0|1 )

**Beschreibung:** Zeigt die schattierte Kontur an oder blendet sie aus.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

