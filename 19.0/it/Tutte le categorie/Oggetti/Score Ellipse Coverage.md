# Score Ellipse Coverage



## Messaggi degli elementi

### Remove Fit

**Sintassi:** obj &lt;&lt; Remove Fit

**JMP Versione aggiunta:** 15

### Shaded Contour

**Sintassi:** obj &lt;&lt; Shaded Contour( state=0|1 )

**Descrizione:** Mostra/nasconde il profilo isometrico ombreggiato.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);
obj << Score Plot( Score Ellipse Coverage( 0.95, {Shaded Contour( 1 )} ) );

```

