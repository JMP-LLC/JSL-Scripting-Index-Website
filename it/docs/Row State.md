# Row State



### As Row State

**Sintassi:** rs = As Row State( x )

**Descrizione:** Converte un numero in un valore di stato della riga.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16
		 + (:age - 11) * 256
	)
);

```

### Color Of

**Sintassi:** y = Color Of( <rs> ); Color Of( <Row State( <r> )> ) = y

**Descrizione:** Restituisce la componente colore del valore specificato dello stato della riga, un indice tavolozza colori JMP positivo o un valore negativo codificato RGB. Se si utilizza Colore di come valore L, esso modifica il colore della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Sintassi:** rs = Color State( color )

**Descrizione:** Restituisce un valore di stato della riga con la componente colore impostata al valore specificato. L&apos;argomento color può essere un qualsiasi colore JSL valido.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**Sintassi:** rs = Combine States( rs1, ... )

**Descrizione:** Combina diversi valori di stato della riga in uno unico.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**Sintassi:** y = Excluded( <rs> ); Excluded( <Row State( <r> )> ) = y

**Descrizione:** Restituisce la componente esclusa del valore specificato dello stato della riga, 0 o 1. Se si utilizza la funzione Excluded() come valore L, esso modifica lo stato escluso della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Sintassi:** rs = Excluded State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente esclusa impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**Sintassi:** y = Hidden( <rs> ); Hidden( <Row State( <r> )> ) = y

**Descrizione:** Restituisce la componente nascosta del valore specificato dello stato della riga, 0 o 1. Se si utilizza Nascosto come valore L, esso modifica lo stato nascosto della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Sintassi:** rs = Hidden State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente nascosta impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**Sintassi:** rs = Hue State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente tonalità colore impostata al valore specificato. Necessita della combinazione con un valore Shade State() per produrre un colore valido.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**Sintassi:** y = Labeled( <rs> ); Labeled( <Row State( <r> )> ) = y

**Descrizione:** Restituisce la componente etichettata del valore specificato dello stato della riga, 0 o 1. Se si utilizza Etichettato come valore L, esso modifica lo stato etichettato della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Sintassi:** rs = Labeled State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente etichettata impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**Sintassi:** y = Marker Of( <rs> ); Marker Of( <Row State( <r> )> ) = y

**Descrizione:** Restituisce l&apos;indicatore del valore specificato dello stato della riga. Se si utilizza Indicatore di come valore L, esso modifica l&apos;indicatore della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**Sintassi:** rs = Marker State( marker )

**Descrizione:** Restituisce un valore di stato della riga con la componente indicatore impostata al valore specificato. L&apos;argomento marker specifica un indicatore e può essere un intero positivo, un carattere, un intero positivo per carattere Unicode o un carattere esadecimale per carattere Unicode.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**Sintassi:** y = Row State( <dt>, <r> ); Row State( <dt>, <r> ) = y

**Descrizione:** Restituisce lo stato della riga corrente (o r-esima) nella tabella di dati corrente. Se si utilizza la funzione Row State() come valore L, esso modifica lo stato della riga corrente (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**Sintassi:** y = Selected( <rs> );Selected( <Row State( <r> )> ) = y

**Descrizione:** Restituisce la componente selezionata del valore specificato dello stato della riga, 0 o 1. Se si utilizza Selezionato come valore L, esso modifica lo stato modificato della riga corrente o (o r-esima) nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Sintassi:** rs = Selected State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente selezionata impostata al valore specificato.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**Sintassi:** rs = Shade State( x )

**Descrizione:** Restituisce un valore di stato della riga con la componente gradazione colore impostata al valore specificato. Necessita della combinazione con un valore Hue State() per produrre un colore valido.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

