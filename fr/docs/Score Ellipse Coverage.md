# Score Ellipse Coverage



### Remove Fit

**Syntaxe :** obj << Remove Fit

**JMP Version ajoutée :** 15

### Shaded Contour

**Syntaxe :** obj << Shaded Contour( state=0|1 )

**Description :** Affiche ou masque les isoréponses ombrées.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

