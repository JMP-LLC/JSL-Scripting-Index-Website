# Row State



## Funktionen

### As Row State

**Syntax:** rs = As Row State( x )

**Beschreibung:** Konvertiert eine Zahl in einen Zeileneigenschaftswert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Syntax:** y = Color Of( <rs> ); Color Of( <Row State( <r> )> ) = y

**Beschreibung:** Gibt die Farbkomponente des angegebenen Zeileneigenschaftswerts zurück, entweder einen positiven JMP-Farbpalettenindex oder einen negativen RGB-codierten Wert. Wenn die Farbe als L-Wert verwendet wird, ändert sie die Farbe der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Syntax:** rs = Color State( color )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Farbkomponente auf den angegebenen Wert gesetzt ist. Das Argument color kann jede gültige JSL-Farbe sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**Syntax:** rs = Combine States( rs1, ... )

**Beschreibung:** Verknüpft mehrere Zeileneigenschaftswerte in einem Wert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**Syntax:** y = Excluded( <rs> ); Excluded( <Row State( <r> )> ) = y

**Beschreibung:** Gibt die Komponente „ausgeschlossen“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn die Funktion Excluded() als L-Wert verwendet wird, ändert es den ausgeschlossenen Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Syntax:** rs = Excluded State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „ausgeschlossen“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**Syntax:** y = Hidden( <rs> ); Hidden( <Row State( <r> )> ) = y

**Beschreibung:** Gibt die Komponente „ausgeblendet“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn „ausgeblendet“ als L-Wert verwendet wird, ändert es den ausgeblendeten Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Syntax:** rs = Hidden State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „ausgeblendet“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**Syntax:** rs = Hue State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Farbtonkomponente auf den angegebenen Wert gesetzt ist. Muss mit einem Wert Shade State() kombiniert werden, damit eine gültige Farbe erzeugt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**Syntax:** y = Labeled( <rs> ); Labeled( <Row State( <r> )> ) = y

**Beschreibung:** Gibt die Komponente „Beschriftung“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn „Beschriftung“ als L-Wert verwendet wird, ändert es den ausgeblendeten Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Syntax:** rs = Labeled State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „Beschriftung“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**Syntax:** y = Marker Of( <rs> ); Marker Of( <Row State( <r> )> ) = y

**Beschreibung:** Gibt die Symbolkomponente des angegebenen Zeileneigenschaftswerts zurück. Wenn das Symbol als L-Wert verwendet wird, ändert es das Symbol der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**Syntax:** rs = Marker State( marker )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Symbolkomponente auf den angegebenen Wert gesetzt ist. Das Argument marker gibt ein Symbol an und kann eine positive ganze Zahl, ein Zeichen, eine positive ganze Zahl für ein Unicode-Zeichen oder ein Hexadezimalzeichen für ein Unicode-Zeichen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**Syntax:** y = Row State( <dt>, <r> ); Row State( <dt>, <r> ) = y

**Beschreibung:** Gibt die Zeileneigenschaft der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle zurück. Wenn die Funktion Row State() als L-Wert verwendet wird, ändert sie die Zeileneigenschaft der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**Syntax:** y = Selected( <rs> );Selected( <Row State( <r> )> ) = y

**Beschreibung:** Gibt die Komponente „ausgewählt“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn „ausgewählt“ als L-Wert verwendet wird, ändert es den ausgewählten Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Syntax:** rs = Selected State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „ausgewählt“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**Syntax:** rs = Shade State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Farbschattierungskomponente auf den angegebenen Wert gesetzt ist. Muss mit einem Wert Hue State() kombiniert werden, damit eine gültige Farbe erzeugt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

