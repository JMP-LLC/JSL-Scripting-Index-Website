# Row State



### As Row State

**Syntaxe :** rs = As Row State( x )

**Description :** Convertit un nombre en une valeur d&apos;état de ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") *
		6) * 16 + (:age - 11) * 256
	)
);

```

### Color Of

**Syntaxe :** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante de couleur de la valeur d&apos;état de ligne spécifiée, un index de palette de couleurs JMP positive ou une valeur encodée RVB négative. Si Color Of est utilisée comme une L-value, la couleur de la ligne active (ou r-ième) de la table de données active est changée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Syntaxe :** rs = Color State( color )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de couleur définie comme la valeur spécifiée. L’argument color peut être une couleur quelconque JSL qui soit correcte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**Syntaxe :** rs = Combine States( rs1, ... )

**Description :** Combine plusieurs valeurs d&apos;état de ligne en une seule.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**Syntaxe :** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante exclue de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si la fonction Excluded() est utilisée comme L-value, l’état exclu de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Syntaxe :** rs = Excluded State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante exclue définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**Syntaxe :** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante masquée de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si Hidden est utilisée comme L-value, l’état masqué de la ligne active (ou r-ième) de la table de données est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Syntaxe :** rs = Hidden State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante masquée définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**Syntaxe :** rs = Hue State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de tonalité de la couleur définie comme la valeur spécifiée. Doit être combiné à une valeur Shade State() pour produire une couleur correcte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**Syntaxe :** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante étiquetée de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si Labeled est utilisée comme L-value, l’état étiqueté de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Syntaxe :** rs = Labeled State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante étiquetée définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**Syntaxe :** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante de marqueur de la valeur d&apos;état de ligne spécifiée. Si Marker Of est utilisé comme L-value, le marqueur de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**Syntaxe :** rs = Marker State( marker )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de marqueur définie comme la valeur spécifiée. L’argument marker indique un marqueur et peut être un entier positif, un caractère, un entier positif Unicode ou un caractère hexadécimal Unicode.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**Syntaxe :** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**Description :** Renvoie l&apos;état de ligne de la ligne actuelle (ou r-ième) dans la table de données en cours. Si la fonction Row State() est utilisée comme L-value, l&apos;état de ligne de la ligne actuelle (ou r-ième) est modifié dans la table de données en cours.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**Syntaxe :** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante sélectionnée de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si Selected est utilisé comme L-value, l’état sélectionné de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Syntaxe :** rs = Selected State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante sélectionnée définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**Syntaxe :** rs = Shade State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de la nuance de la couleur définie comme la valeur spécifiée. Doit être combiné à une valeur de la fonction État de teinte() pour produire une couleur correcte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

