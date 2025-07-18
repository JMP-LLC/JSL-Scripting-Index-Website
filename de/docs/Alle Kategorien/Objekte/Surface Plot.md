# Surface Plot



## Elementmeldungen

### Clip Sheet

**Syntax:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Beschreibung:** Begrenzt die Fläche auf die Bereiche der Spalten, die in der Formelspalte der ersten Zielgröße verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet1

**Syntax:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Beschreibung:** Begrenzt die Fläche auf die Bereiche der Spalten, die in der Formelspalte der ersten Zielgröße verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet2

**Syntax:** obj &lt;&lt; Clip Sheet2( state=0|1 )

**Beschreibung:** Begrenzt die Fläche auf die Bereiche der Spalten, die in der Formelspalte der zweiten Zielgröße verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Show Surface2( "Both Sides" );
Wait( 1 );
obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**Syntax:** obj &lt;&lt; Clip Sheet3( state=0|1 )

**Beschreibung:** Begrenzt die Fläche auf die Bereiche der Spalten, die in der Formelspalte der dritten Zielgröße verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**Syntax:** obj &lt;&lt; Clip Sheet4( state=0|1 )

**Beschreibung:** Begrenzt die Fläche auf die Bereiche der Spalten, die in der Formelspalte der vierten Zielgröße verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Clip Sheet4( 1 );

```

### Contour Color

**Syntax:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Beschreibung:** Gibt die Farbe der Kontur auf der Fläche für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**Syntax:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Beschreibung:** Gibt die Farbe der Kontur auf der Fläche für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**Syntax:** obj &lt;&lt; Contour Color2( color )

**Beschreibung:** Gibt die Farbe der Kontur auf der Fläche für die zweite Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Show Contour2( "On Surface" );
Wait( 1 );
obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**Syntax:** obj &lt;&lt; Contour Color3( color )

**Beschreibung:** Gibt die Farbe der Kontur auf der Fläche für die dritte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Show Contour3( "On Surface" );
Wait( 1 );
obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**Syntax:** obj &lt;&lt; Contour Color4( color )

**Beschreibung:** Gibt die Farbe der Kontur auf der Fläche für die vierte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" ),
	Show Surface1( "Off" )
);
obj << Show Contour4( "On Surface" );
Wait( 1 );
obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**Syntax:** obj &lt;&lt; Control Panel( state=0|1 )

**Beschreibung:** Blendet das Bedienfeld ein oder aus, das die Bedienelemente für das Erscheinungsbild, die unabhängigen und die abhängigen Variablen enthält. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Data points Color

**Syntax:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Beschreibung:** Ändert die Farbe der Datenpunkte für die erste abhängige Variable, die auf der Fläche gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**Syntax:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Beschreibung:** Ändert die Farbe der Datenpunkte für die erste abhängige Variable, die auf der Fläche gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**Syntax:** obj &lt;&lt; Data points Color2( color )

**Beschreibung:** Ändert die Farbe der Datenpunkte für die zweite abhängige Variable, die auf der Fläche gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( "Mesh" );
obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**Syntax:** obj &lt;&lt; Data points Color3( color )

**Beschreibung:** Ändert die Farbe der Datenpunkte für die dritte abhängige Variable, die auf der Fläche gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Needles" );
obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**Syntax:** obj &lt;&lt; Data points Color4( color )

**Beschreibung:** Ändert die Farbe der Datenpunkte für die vierte abhängige Variable, die auf der Fläche gezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Datapoints Choice4( "Surface" );
obj << Data points Color4( 100, 0, 200 );
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**Syntax:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Beschreibung:** Gibt an, wie Punkte auf der Fläche für die erste Zielgröße angezeigt werden. Der Standardstil ist die Option „Punkte“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**Syntax:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Beschreibung:** Gibt an, wie Punkte auf der Fläche für die erste Zielgröße angezeigt werden. Der Standardstil ist die Option „Punkte“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**Syntax:** obj &lt;&lt; Datapoints Choice2( "Aus"|"Punkte"|"Stäbe"|"Netz"|"Oberfläche" )

**Beschreibung:** Gibt an, wie Punkte auf der Fläche für die zweite Zielgröße angezeigt werden. Der Standardstil ist die Option „Punkte“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );
Wait( 1 );
obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**Syntax:** obj &lt;&lt; Datapoints Choice3( "Aus"|"Punkte"|"Stäbe"|"Netz"|"Oberfläche" )

**Beschreibung:** Gibt an, wie Punkte auf der Fläche für die dritte Zielgröße angezeigt werden. Der Standardstil ist die Option „Punkte“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**Syntax:** obj &lt;&lt; Datapoints Choice4( "Aus"|"Punkte"|"Stäbe"|"Netz"|"Oberfläche" )

**Beschreibung:** Gibt an, wie Punkte auf der Fläche für die vierte Zielgröße angezeigt werden. Der Standardstil ist die Option „Punkte“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**Syntax:** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**Beschreibung:** Blendet die Optionen für Punkte in den Bedienelementen für abhängige Variablen ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**Syntax:** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**Beschreibung:** Blendet die Rasteroptionen in den Bedienelementen für abhängige Variablen ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Response Grid( 0 );

```

### Equation

**Syntax:** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**Beschreibung:** Weist den Blättern in einer bestimmten Reihenfolge im Abschnitt „Abhängige Variablen“ Gleichungen zu. Um eine Zielgröße zu überspringen, geben Sie einen fehlenden Wert mit einem Punkt an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Show Surface2( "Both sides" );
obj << Equation( ., ".7*:Silane+5*:Silica" );
obj << Show Formula( 1 );

```

### Fit to Window

**Syntax:** obj &lt;&lt; Fit to Window( "Automatisch"|"Ein"|"Aus" )

**Beschreibung:** Legt das Verhalten für die automatische Streckung des Berichts fest.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Fit to Window( "Off" );

```

### Formula

**Syntax:** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Beschreibung:** Weist im Abschnitt der abhängigen Variablen den Flächen in einer angegebenen Reihenfolge Formeln aus Spalten zu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice2( "Surface" )
);
obj << Show Surface2( "Both sides" );
obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**Syntax:** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**Beschreibung:** Ändert die Anzeigeoptionen auf der Fläche. Diese Option verwendet Meldungen von der Plattform „3D-Streudiagramm“. Eine vollständige Beschreibung finden Sie unter „3D-Streudiagramm“.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Frame3D(
	Set Graph Size( 692, 671 ),
	Set Rotation( -54, 0, 38 ),
	Background Color( 255, 177, 125 )
);

```

### Hide Lights Border

**Syntax:** obj &lt;&lt; Hide Lights Border( state=0|1 )

**Beschreibung:** Blendet die Bedienelemente für die Beleuchtung ein oder aus.

```jsl

obj = Surface Plot();
Wait( 1 );
obj << Hide Lights Border( 1 );

```

### Iso Value

**Syntax:** obj &lt;&lt; Iso Value( id, value )

**Beschreibung:** Ändert den Wert des Isoflächenschiebereglers für eine bestimmte abhängige Variable. Das Argument id identifiziert die abhängige Variable mit einem nullbasierten Index.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Iso Value( 0, 100 );
obj << Iso Value( 1, 1500 );

```

### Lock Z Scale

**Syntax:** obj &lt;&lt; Lock Z Scale( state=0|1 )

**Beschreibung:** Sperrt die Z-Achse auf ihre aktuellen Werte.

```jsl

obj = Surface Plot();
obj << Lock Z Scale( 1 );

```

### Mesh Color

**Syntax:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Beschreibung:** Gibt die Farbe des Flächennetzes für die erste abhängige Variable an. Diese Option ist nur verfügbar, wenn für die Option „Netz“ ein anderer Wert als „Aus“ gewählt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**Syntax:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Beschreibung:** Gibt die Farbe des Flächennetzes für die erste abhängige Variable an. Diese Option ist nur verfügbar, wenn für die Option „Netz“ ein anderer Wert als „Aus“ gewählt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**Syntax:** obj &lt;&lt; Mesh Color2( color )

**Beschreibung:** Gibt die Farbe des Flächennetzes für die zweite abhängige Variable an. Diese Option ist nur verfügbar, wenn für die Option „Netz“ ein anderer Wert als „Aus“ gewählt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
obj << Show Mesh2( "X and Y" );
Wait( 1 );
obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**Syntax:** obj &lt;&lt; Mesh Color3( color )

**Beschreibung:** Gibt die Farbe des Flächennetzes für die dritte abhängige Variable an. Diese Option ist nur verfügbar, wenn für die Option „Netz“ ein anderer Wert als „Aus“ gewählt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Mode( "Isosurface" );
obj << Show Mesh3( "X and Y" );
Wait( 1 );
obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**Syntax:** obj &lt;&lt; Mesh Color4( color )

**Beschreibung:** Gibt die Farbe des Flächennetzes für die vierte abhängige Variable an. Diese Option ist nur verfügbar, wenn für die Option „Netz“ ein anderer Wert als „Aus“ gewählt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Mesh4( "X and Y" );
Wait( 1 );
obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**Syntax:** obj &lt;&lt; Mode( "Blatt, Punkte"|"Isofläche"|"Dichtegitter" )

**Beschreibung:** Gibt an, wie Flächen im Diagramm angezeigt werden. Die Option „Blätter, Punkte“ zeigt Blätter, Punkte und Linien auf der Fläche an. Die Option „Isofläche“ verwendet eine Formel mit drei unabhängigen Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface 2( "Both Sides" );
obj << Show Surface 4( "Both Sides" );
obj << Mode( "Isosurface" );

```

### Resolution

**Syntax:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Beschreibung:** Ändert die Auflösung, die verwendet wird, um das Wirkungsflächendiagramm zu zeichnen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### Response

**Syntax:** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Beschreibung:** Identifiziert bis zu vier Zielgrößenspalten zum Zeichnen von überlagerten Punkten. Um eine Zielgröße zu überspringen, geben Sie eine beliebige Zeichenkette in Anführungszeichen als Platzhalter ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice3( "Surface" )
);
obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**Syntax:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Beschreibung:** Ändert das Farbschema der Fläche für die erste Zielgröße. Diese Option ist nur für Zielgrößenspalten verfügbar, die einen stetigen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**Syntax:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Beschreibung:** Ändert das Farbschema der Fläche für die erste Zielgröße. Diese Option ist nur für Zielgrößenspalten verfügbar, die einen stetigen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**Syntax:** obj &lt;&lt; Response Column Color Theme2( color theme )

**Beschreibung:** Ändert das Farbschema der Fläche für die zweite Zielgröße. Diese Option ist nur für Zielgrößenspalten verfügbar, die einen stetigen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Continuous Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**Syntax:** obj &lt;&lt; Response Column Color Theme3( color theme )

**Beschreibung:** Ändert das Farbschema der Fläche für die dritte Zielgröße Diese Option ist nur für Zielgrößenspalten verfügbar, die einen stetigen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Continuous Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**Syntax:** obj &lt;&lt; Response Column Color Theme4( color theme )

**Beschreibung:** Ändert das Farbschema der Fläche für die vierte Zielgröße. Diese Option ist nur für Zielgrößenspalten verfügbar, die einen stetigen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Continuous Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**Syntax:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Beschreibung:** Gibt an, ob die erste Fläche einfarbig, mit stetigen oder diskreten Verläufen gefärbt wird. Diese Option ist nur verfügbar, wenn die Fläche mit einer abhängigen Zielgrößenspalte erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**Syntax:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Beschreibung:** Gibt an, ob die erste Fläche einfarbig, mit stetigen oder diskreten Verläufen gefärbt wird. Diese Option ist nur verfügbar, wenn die Fläche mit einer abhängigen Zielgrößenspalte erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**Syntax:** obj &lt;&lt; Response Column Fill2( "Gefüllt"|"Stetiger Verlauf"|"Diskreter Verlauf" )

**Beschreibung:** Gibt an, ob die zweite Fläche einfarbig, mit stetigen oder diskreten Verläufen gefärbt wird. Diese Option ist nur verfügbar, wenn die Fläche mit einer abhängigen Zielgrößenspalte erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**Syntax:** obj &lt;&lt; Response Column Fill3( "Gefüllt"|"Stetiger Verlauf"|"Diskreter Verlauf" )

**Beschreibung:** Gibt an, ob die dritte Fläche einfarbig, mit stetigen oder diskreten Verläufen gefärbt wird. Diese Option ist nur verfügbar, wenn die Fläche mit einer abhängigen Zielgrößenspalte erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**Syntax:** obj &lt;&lt; Response Column Fill4( "Gefüllt"|"Stetiger Verlauf"|"Diskreter Verlauf" )

**Beschreibung:** Gibt an, ob die vierte Fläche einfarbig, mit stetigen oder diskreten Verläufen gefärbt wird. Diese Option ist nur verfügbar, wenn die Fläche mit einer abhängigen Zielgrößenspalte erstellt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**Syntax:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt Linien zwischen den Verlaufsstufen auf der Fläche für die erste Zielgröße. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**Syntax:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt Linien zwischen den Verlaufsstufen auf der Fläche für die erste Zielgröße. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**Syntax:** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt Linien zwischen den Verlaufsstufen auf der Fläche für die zweite Zielgröße. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**Syntax:** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt Linien zwischen den Verlaufsstufen auf der Fläche für die dritte Zielgröße. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradient Lines3( 0 );
Wait( 1 );
obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**Syntax:** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt Linien zwischen den Verlaufsstufen auf der Fläche für die vierte Zielgröße. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	),
	Response Column Gradient Lines4( 0 )
);
Wait( 1 );
obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**Syntax:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Beschreibung:** Gibt die Anzahl der Verläufe auf der Fläche für die erste Zielgröße an. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**Syntax:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Beschreibung:** Gibt die Anzahl der Verläufe auf der Fläche für die erste Zielgröße an. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**Syntax:** obj &lt;&lt; Response Column Gradients2( number )

**Beschreibung:** Gibt die Anzahl der Verläufe auf der Fläche für die zweite Zielgröße an. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**Syntax:** obj &lt;&lt; Response Column Gradients3( number )

**Beschreibung:** Gibt die Anzahl der Verläufe auf der Fläche für die dritte Zielgröße an. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**Syntax:** obj &lt;&lt; Response Column Gradients4( number )

**Beschreibung:** Gibt die Anzahl der Verläufe auf der Fläche für die vierte Zielgröße an. Diese Option ist nur verfügbar, wenn die Fläche mit diskreten Verläufen mit einer abhängigen Zielgrößenspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Gradients4( 10 );

```

### Scale response axes independently

**Syntax:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 )&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, ob es für jede Zielgröße eine eigene Skala gibt oder ob die Achsenskala für alle Zielgrößen mit der Skala für die erste im Startfenster eingegebene Zielgröße übereinstimmt.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Scale response axes independently( 1 )
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Scale response axes independently( 0 );

```

### Set Z Variable

**Syntax:** obj &lt;&lt; Set Z Variable( column )

**Beschreibung:** Legt die angegebene Spalte als Z-Variable im Wirkungsflächendiagramm fest. Diese Option ist nur bei Isoflächen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Mode( "Isosurface" )
);
obj << Set Y Variable( :SULFUR );
Wait( 1 );
obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**Syntax:** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**Beschreibung:** Gibt Attribute für die angegebene Achse der unabhängigen Variablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );
Wait( 1 );
obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**Syntax:** obj &lt;&lt; SetXVariable( column )

**Beschreibung:** Legt die angegebene Spalte als X-Variable im Wirkungsflächendiagramm fest.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set X Variable( :SULFUR );

```

### SetYVariable

**Syntax:** obj &lt;&lt; SetYVariable( column )

**Beschreibung:** Legt die angegebene Spalte als Y-Variable im Wirkungsflächendiagramm fest.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**Syntax:** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**Beschreibung:** Gibt Attribute für Z-Achse an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**Syntax:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Beschreibung:** Gibt die Platzierung der Konturlinien im Diagramm in Bezug auf die Fläche für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour1

**Syntax:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Beschreibung:** Gibt die Platzierung der Konturlinien im Diagramm in Bezug auf die Fläche für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour2

**Syntax:** obj &lt;&lt; Show Contour2( "Aus"|"Darunter"|"Darüber"|"Auf Oberfläche" )

**Beschreibung:** Gibt die Platzierung der Konturlinien im Diagramm in Bezug auf die Fläche für die zweite Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour2( "Above" );

```

### Show Contour3

**Syntax:** obj &lt;&lt; Show Contour3( "Aus"|"Darunter"|"Darüber"|"Auf Oberfläche" )

**Beschreibung:** Gibt die Platzierung der Konturlinien im Diagramm in Bezug auf die Fläche für die dritte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
Wait( 1 );
obj << Show Contour3( "Below" );

```

### Show Contour4

**Syntax:** obj &lt;&lt; Show Contour4( "Aus"|"Darunter"|"Darüber"|"Auf Oberfläche" )

**Beschreibung:** Gibt die Platzierung der Konturlinien im Diagramm in Bezug auf die Fläche für die vierte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
Wait( 1 );
obj << Show Contour4( "On Surface" );

```

### Show Mesh

**Syntax:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Beschreibung:** Gibt den Stil des Flächennetzes für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**Syntax:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Beschreibung:** Gibt den Stil des Flächennetzes für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**Syntax:** obj &lt;&lt; Show Mesh2( "Aus"|"X und Y"|"X"|"Y" )

**Beschreibung:** Gibt den Stil des Flächennetzes für die zweite Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh2( "X" );

```

### Show Mesh3

**Syntax:** obj &lt;&lt; Show Mesh3( "Aus"|"X und Y"|"X"|"Y" )

**Beschreibung:** Gibt den Stil des Flächennetzes für die dritte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh3( "Y" );

```

### Show Mesh4

**Syntax:** obj &lt;&lt; Show Mesh4( "Aus"|"X und Y"|"X"|"Y" )

**Beschreibung:** Gibt den Stil des Flächennetzes für die vierte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh4( "X and Y" );

```

### Show Surface

**Syntax:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Beschreibung:** Gibt an, wie die Fläche für die erste Zielgröße dargestellt wird. Diese Option ist nur verfügbar, wenn die Zielgröße durch eine Formelspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface1

**Syntax:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Beschreibung:** Gibt an, wie die Fläche für die erste Zielgröße dargestellt wird. Diese Option ist nur verfügbar, wenn die Zielgröße durch eine Formelspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface2

**Syntax:** obj &lt;&lt; Show Surface2( "Aus"|"Beide Seiten"|"Nur darüber"|"Nur darunter" )

**Beschreibung:** Gibt an, wie die Fläche für die zweite Zielgröße dargestellt wird. Diese Option ist verfügbar, wenn die Zielgröße durch eine Formelspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**Syntax:** obj &lt;&lt; Show Surface3( "Aus"|"Beide Seiten"|"Nur darüber"|"Nur darunter" )

**Beschreibung:** Gibt an, wie die Fläche für die dritte Zielgröße dargestellt wird. Diese Option ist nur verfügbar, wenn die Zielgröße durch eine Formelspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface3( "Above Only" );

```

### Show Surface4

**Syntax:** obj &lt;&lt; Show Surface4( "Aus"|"Beide Seiten"|"Nur darüber"|"Nur darunter" )

**Beschreibung:** Gibt an, wie die Fläche für die vierte Zielgröße dargestellt wird. Diese Option ist nur verfügbar, wenn die Zielgröße durch eine Formelspalte erzeugt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface4( "Both Sides" );

```

### Show formula

**Syntax:** obj &lt;&lt; Show formula( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt die Formel für alle abhängigen Variablen, die derzeit im Wirkungsflächendiagramm erscheinen.

```jsl

obj = Surface Plot();
obj << Show Formula( 1 );

```

### Surface Alpha

**Syntax:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Beschreibung:** Gibt die Undurchsichtigkeit der Isofläche für die erste Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**Syntax:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Beschreibung:** Gibt die Undurchsichtigkeit der Isofläche für die erste Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**Syntax:** obj &lt;&lt; Surface Alpha2( number )

**Beschreibung:** Gibt die Undurchsichtigkeit der Isofläche für die zweite Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface2( "Both sides" );
Wait( 1 );
obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**Syntax:** obj &lt;&lt; Surface Alpha3( number )

**Beschreibung:** Gibt die Undurchsichtigkeit der Isofläche für die dritte Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**Syntax:** obj &lt;&lt; Surface Alpha4( number )

**Beschreibung:** Gibt die Undurchsichtigkeit der Isofläche für die vierte Zielgrößenvariable an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Surface Alpha4( 0.90 );

```

### Surface Color

**Syntax:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Beschreibung:** Gibt die Farbe der Fläche für die erste Zielgröße bei der Füllart „einfarbig“ an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**Syntax:** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**Beschreibung:** Gibt die Methode an, die zum Färben jeder der vier möglichen Flächen verwendet wird. Beachten Sie, dass die Formel von derjenigen Formel abweichen kann, die zum Zeichnen der Fläche verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**Syntax:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Beschreibung:** Gibt die Endpunkte für den Farbverlauf auf der Fläche für die erste Zielgröße an. Diese Option ist nur verfügbar, wenn ein Verlauf verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**Syntax:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Beschreibung:** Gibt die Endpunkte für den Farbverlauf auf der Fläche für die erste Zielgröße an. Diese Option ist nur verfügbar, wenn ein Verlauf verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**Syntax:** obj &lt;&lt; Surface Color Range2( "Daten"|"Achse" )

**Beschreibung:** Gibt die Endpunkte für den Farbverlauf auf der Fläche für die zweite Zielgröße an. Diese Option ist nur verfügbar, wenn ein Verlauf verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( "Both Sides" )
);
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**Syntax:** obj &lt;&lt; Surface Color Range3( "Daten"|"Achse" )

**Beschreibung:** Gibt die Endpunkte für den Farbverlauf auf der Fläche für die dritte Zielgröße an. Diese Option ist nur verfügbar, wenn ein Verlauf verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface3( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**Syntax:** obj &lt;&lt; Surface Color Range4( "Daten"|"Achse" )

**Beschreibung:** Gibt die Endpunkte für den Farbverlauf auf der Fläche für die vierte Zielgröße an. Diese Option ist nur verfügbar, wenn ein Verlauf verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**Syntax:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Beschreibung:** Gibt das Farbschema der Fläche für die erste Zielgröße an. Diese Option ist nur für Formelzielgrößenspalten verfügbar, die einen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**Syntax:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Beschreibung:** Gibt das Farbschema der Fläche für die erste Zielgröße an. Diese Option ist nur für Formelzielgrößenspalten verfügbar, die einen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**Syntax:** obj &lt;&lt; Surface Color Theme2( color theme )

**Beschreibung:** Gibt das Farbschema der Fläche für die zweite Zielgröße an. Diese Option ist nur für Formelzielgrößenspalten verfügbar, die einen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type2( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**Syntax:** obj &lt;&lt; Surface Color Theme3( color theme )

**Beschreibung:** Gibt das Farbschema der Fläche für die dritte Zielgröße an. Diese Option ist nur für Formelzielgrößenspalten verfügbar, die einen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Gradient Type3( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**Syntax:** obj &lt;&lt; Surface Color Theme4( color theme )

**Beschreibung:** Gibt das Farbschema der Fläche für die vierte Zielgröße an. Diese Option ist nur für Formelzielgrößenspalten verfügbar, die einen Verlauf verwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Gradient Type4( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**Syntax:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Beschreibung:** Gibt die Farbe der Fläche für die erste Zielgröße bei der Füllart „einfarbig“ an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**Syntax:** obj &lt;&lt; Surface Color2( color )

**Beschreibung:** Gibt die Farbe der Fläche für die zweite Zielgröße bei der Füllart „einfarbig“ an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**Syntax:** obj &lt;&lt; Surface Color3( color )

**Beschreibung:** Gibt die Farbe der Fläche für die dritte Zielgröße bei der Füllart „einfarbig“ an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**Syntax:** obj &lt;&lt; Surface Color4( color )

**Beschreibung:** Gibt die Farbe der Fläche für die vierte Zielgröße bei der Füllart „einfarbig“ an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**Syntax:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Beschreibung:** Gibt die Füllart der Fläche für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**Syntax:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Beschreibung:** Gibt die Füllart der Fläche für die erste Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**Syntax:** obj &lt;&lt; Surface Gradient Type2( "Gefüllt"|"Stetiger Verlauf"|"Diskreter Verlauf" )

**Beschreibung:** Gibt die Füllart der Fläche für die zweite Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
Wait( 1 );
obj << Surface Gradient Type2( "Discrete Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**Syntax:** obj &lt;&lt; Surface Gradient Type3( "Gefüllt"|"Stetiger Verlauf"|"Diskreter Verlauf" )

**Beschreibung:** Gibt die Füllart der Fläche für die dritte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type3( "Solid" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**Syntax:** obj &lt;&lt; Surface Gradient Type4( "Gefüllt"|"Stetiger Verlauf"|"Diskreter Verlauf" )

**Beschreibung:** Gibt die Füllart der Fläche für die vierte Zielgröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type4( "Discrete Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**Syntax:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Beschreibung:** Gibt die Anzahl der Verlaufslinien auf der Fläche der ersten Zielgröße an. Diese Option ist nur verfügbar, wenn diskrete Verläufe verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients1

**Syntax:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Beschreibung:** Gibt die Anzahl der Verlaufslinien auf der Fläche der ersten Zielgröße an. Diese Option ist nur verfügbar, wenn diskrete Verläufe verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients2

**Syntax:** obj &lt;&lt; Surface Gradients2( number )

**Beschreibung:** Gibt die Anzahl der Verlaufslinien auf der Fläche der zweiten Zielgröße an. Diese Option ist nur verfügbar, wenn diskrete Verläufe verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" ),
	Surface Color Method( "Solid", ":Pred Formula MODULUS" )
);
obj << Surface Gradient Type2( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**Syntax:** obj &lt;&lt; Surface Gradients3( number )

**Beschreibung:** Gibt die Anzahl der Verlaufslinien auf der Fläche der dritten Zielgröße an. Diese Option ist nur verfügbar, wenn diskrete Verläufe verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both sides" ),
	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" )
);
obj << Surface Gradient Type3( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**Syntax:** obj &lt;&lt; Surface Gradients4( number )

**Beschreibung:** Gibt die Anzahl der Verlaufslinien auf der Fläche der vierten Zielgröße an. Diese Option ist nur verfügbar, wenn diskrete Verläufe verwendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both sides" ),
	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" )
);
obj << Surface Gradient Type4( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients4( 9 );

```

### Surface Lighting

**Syntax:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Beschreibung:** Gibt die Flächenbeleuchtung auf der Fläche für die erste Zielgröße an. Diese Option ist nur bei stetigen und diskreten Verläufen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**Syntax:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Beschreibung:** Gibt die Flächenbeleuchtung auf der Fläche für die erste Zielgröße an. Diese Option ist nur bei stetigen und diskreten Verläufen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**Syntax:** obj &lt;&lt; Surface Lighting2( "Keine"|"Geringe Reflektion"|"Normal" )

**Beschreibung:** Gibt die Flächenbeleuchtung auf der Fläche für die zweite Zielgröße an. Diese Option ist nur bei stetigen und diskreten Verläufen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Show Surface2( "Both Sides" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**Syntax:** obj &lt;&lt; Surface Lighting3( "Keine"|"Geringe Reflektion"|"Normal" )

**Beschreibung:** Gibt die Flächenbeleuchtung auf der Fläche für die dritte Zielgröße an. Diese Option ist nur bei stetigen und diskreten Verläufen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**Syntax:** obj &lt;&lt; Surface Lighting4( "Keine"|"Geringe Reflektion"|"Normal" )

**Beschreibung:** Gibt die Flächenbeleuchtung auf der Fläche für die vierte Zielgröße an. Diese Option ist nur bei stetigen und diskreten Verläufen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**Syntax:** obj &lt;&lt; Surface Selector( state=0|1 )

**Beschreibung:** Blendet die Flächenoptionen in den Bedienelementen für abhängige Variablen ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Surface Selector( 0 );

```

### X Grid

**Syntax:** obj &lt;&lt; X Grid( state=0|1 )

**Beschreibung:** Blendet ein Raster ein oder aus, das senkrecht zur X-Achse verläuft.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << X Grid( 1 );

```

### X Resolution

**Syntax:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Beschreibung:** Ändert die Auflösung, die verwendet wird, um das Wirkungsflächendiagramm zu zeichnen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### XRotate

**Syntax:** obj &lt;&lt; XRotate( degrees )

**Beschreibung:** Dreht das Wirkungsflächendiagramm um die X-Achse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << XRotate( 30 );

```

### Y Grid

**Syntax:** obj &lt;&lt; Y Grid( state=0|1 )

**Beschreibung:** Blendet ein Raster ein oder aus, das senkrecht zur Y-Achse verläuft.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Y Grid( 1 );

```

### Y Resolution

**Syntax:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Beschreibung:** Ändert die Auflösung, die verwendet wird, um das Wirkungsflächendiagramm zu zeichnen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### YRotate

**Syntax:** obj &lt;&lt; YRotate( degrees )

**Beschreibung:** Dreht das Wirkungsflächendiagramm um die Y-Achse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << YRotate( 20 );

```

### Z Grid

**Syntax:** obj &lt;&lt; Z Grid( state=0|1 )

**Beschreibung:** Blendet ein Raster ein oder aus, das senkrecht zur Z-Achse verläuft.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Z Grid( 1 );

```

### Z Grid Position

**Syntax:** obj &lt;&lt; Z Grid Position( fraction )

**Beschreibung:** Verschiebt das Z-Raster auf den angegebenen Prozentsatz.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Z Grid( 1 );
Wait( 1 );
obj << Z Grid Position( 0.733 );

```

### ZRotate

**Syntax:** obj &lt;&lt; ZRotate( degrees )

**Beschreibung:** Dreht das Wirkungsflächendiagramm um die Z-Achse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << ZRotate( 45 );

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Mehrere Berichte erzeugen, einen für jede Stufe der Variable(n).

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);

```

### Columns

**Syntax:** obj &lt;&lt; Columns( column(s) )

**Beschreibung:** Variablen, die für die X-, Y- und Z-Koordinaten im 3D-Graphen verfügbar sein werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Factors

**Syntax:** obj &lt;&lt; Factors( column(s) )

**Beschreibung:** Variablen, die für die X-, Y- und Z-Koordinaten im 3D-Graphen verfügbar sein werden.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## Zugehörige Konstruktoren

### Surface Plot

**Syntax:** Surface Plot( Columns() )

**Beschreibung:** Erzeugt ein rotierendes dreidimensionales Diagramm aus Punkten oder einer von einer gespeicherten Formel definierten Fläche.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

## Surface Frame3D

### Elementmeldungen

#### Add Ellipsoid

**Syntax:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Beschreibung:** Zeichnet ein Ellipsoid im Diagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

#### Add Markers

**Syntax:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Beschreibung:** Zeichnet n Symbole im Diagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**Syntax:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Beschreibung:** Zeichnet einen Vektor bzw. Pfeil im Diagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**Syntax:** obj &lt;&lt; Get Axes

**Beschreibung:** Gibt den Zustand der Anzeige der Achsen des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Axes );
Show( s );

```

#### Get Box

**Syntax:** obj &lt;&lt; Get Box

**Beschreibung:** Gibt den Zustand der Anzeige des Feldrahmens im Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Grab Handles

**Syntax:** obj &lt;&lt; Get Grab Handles

**Beschreibung:** Gibt den Zustand der Anzeige der Ziehpunkte im Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Graph Size

**Syntax:** obj &lt;&lt; Get Graph Size

**Beschreibung:** Gibt die Größe des Graphen zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Graph Size );
Show( s );

```

#### Get Grids

**Syntax:** obj &lt;&lt; Get Grids

**Beschreibung:** Gibt den Zustand der Anzeige des Rasters im Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Grids );
Show( s );

```

#### Get Hide Lights Border

**Syntax:** obj &lt;&lt; Get Hide Lights Border

**Beschreibung:** Gibt den Zustand der Beleuchtungsränder des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

#### Get Line Scale

**Syntax:** obj &lt;&lt; Get Line Scale

**Beschreibung:** Gibt die Linienbreite des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
w = obj << Frame3D( Get Line Scale );
Show( w );

```

#### Get Marker Quality

**Syntax:** obj &lt;&lt; Get Marker Quality

**Beschreibung:** Gibt die Symboleigenschaften wie Form und Schattierung für das Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

#### Get Marker Scale

**Syntax:** obj &lt;&lt; Get Marker Scale

**Beschreibung:** Gibt die Symbolgröße des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

#### Get Marker Transparency

**Syntax:** obj &lt;&lt; Get Marker Transparency

**Beschreibung:** Gibt die Symboltransparenz des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

#### Get Rotation

**Syntax:** obj &lt;&lt; Get Rotation

**Beschreibung:** Gibt die aktuelle Drehung des Rahmens zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Frame3D( Get Rotation() );
Show( r );

```

#### Get Text Scale

**Syntax:** obj &lt;&lt; Get Text Scale

**Beschreibung:** Gibt die Textgröße des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Text Scale );
Show( s );

```

#### Get View Ortho

**Syntax:** obj &lt;&lt; Get View Ortho

**Beschreibung:** Gibt den Zustand der orthografischen Ansicht des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
o = obj << Frame3D( Get View Ortho );
Show( o );

```

#### Get View Perspective

**Syntax:** obj &lt;&lt; Get View Perspective

**Beschreibung:** Gibt die Perspektive für die Ansicht des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Get View Perspective );
Show( p );

```

#### Get View Zoom

**Syntax:** obj &lt;&lt; Get View Zoom

**Beschreibung:** Gibt den aktuellen Zoom des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
z = obj << Frame3D( Get View Zoom );
Show( z );

```

#### Get Wall Color

**Syntax:** obj &lt;&lt; Get Wall Color

**Beschreibung:** Gibt die Wandfarbe des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Wall Color );
Show( c );

```

#### Get Walls

**Syntax:** obj &lt;&lt; Get Walls

**Beschreibung:** Gibt den Zustand der Anzeige der Wände des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Walls );
Show( s );

```

#### Get X Axis Color

**Syntax:** obj &lt;&lt; Get X Axis Color

**Beschreibung:** Gibt die Farbe der X-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

#### Get X Axis Label

**Syntax:** obj &lt;&lt; Get X Axis Label

**Beschreibung:** Gibt die Beschriftung für die X-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

#### Get Y Axis Color

**Syntax:** obj &lt;&lt; Get Y Axis Color

**Beschreibung:** Gibt die Farbe der Y-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

#### Get Y Axis Label

**Syntax:** obj &lt;&lt; Get Y Axis Label

**Beschreibung:** Gibt die Beschriftung für die Y-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

#### Get Z Axis Color

**Syntax:** obj &lt;&lt; Get Z Axis Color

**Beschreibung:** Gibt die Farbe der Z-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

#### Get Z Axis Label

**Syntax:** obj &lt;&lt; Get Z Axis Label

**Beschreibung:** Gibt die Beschriftung für die Z-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

#### Legend

**Syntax:** obj &lt;&lt; Legend( state=0|1 )

**Beschreibung:** Zeigt die Legende im Diagramm an oder blendet sie aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 0 ) );
Wait( 2 );
obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**Syntax:** obj &lt;&lt; Set Axes( state=0|1 )

**Beschreibung:** Zeigt die X-, Y- und Z-Achse des Diagramms an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**Syntax:** obj &lt;&lt; Set Box( state=0|1 )

**Beschreibung:** Zeigt den Feldrahmen im Diagramm an oder blendet ihn aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**Syntax:** obj &lt;&lt; Set Graph Size( x, y )

**Beschreibung:** Legt die Größe des Graphen fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**Syntax:** obj &lt;&lt; Set Grids( state=0|1 )

**Beschreibung:** Zeigt das Raster im Diagramm an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**Syntax:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Beschreibung:** Zeigt die Beleuchtungsränder des Diagramms an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**Syntax:** obj &lt;&lt; Set Line Scale( number )

**Beschreibung:** Legt die Linienbreite für das Raster im Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**Syntax:** obj &lt;&lt; Set Marker Quality( number )

**Beschreibung:** Legt die Symboleigenschaften wie Form und Schattierung für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**Syntax:** obj &lt;&lt; Set Marker Scale( number )

**Beschreibung:** Legt die Symbolgröße für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**Syntax:** obj &lt;&lt; Set Marker Transparency( fraction )

**Beschreibung:** Legt die Symboltransparenz für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**Syntax:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Beschreibung:** Legt die Oszillationsrate des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**Syntax:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Beschreibung:** Dreht den Rahmen zu den angegebenen Koordinaten.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**Syntax:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Beschreibung:** Dreht den Graphen um eine angegebene Achse. Die Werte dx und dy sind eine Deltabewegung der Maus ab dem Punkt (sx, sy).

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**Syntax:** obj &lt;&lt; Set Text Scale( number )

**Beschreibung:** Legt die Textgröße für den Achsentext im Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**Syntax:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Beschreibung:** Zeigt das Diagramm orthografisch oder linear an.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**Syntax:** obj &lt;&lt; Set View Perspective( fraction )

**Beschreibung:** Legt die Perspektive für die Ansicht des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**Syntax:** obj &lt;&lt; Set View Zoom( number )

**Beschreibung:** Legt den Zoom für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**Syntax:** obj &lt;&lt; Set Wall Color( number )

**Beschreibung:** Legt die Wandfarbe für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**Syntax:** obj &lt;&lt; Set Walls( state=0|1 )

**Beschreibung:** Zeigt die Wände des Diagramms an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**Syntax:** obj &lt;&lt; Set X Axis Color( color )

**Beschreibung:** Legt die Farbe der X-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**Syntax:** obj &lt;&lt; Set X Axis Label( string )

**Beschreibung:** Legt die Beschriftung für die X-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**Syntax:** obj &lt;&lt; Set Y Axis Color( color )

**Beschreibung:** Legt die Farbe der Y-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**Syntax:** obj &lt;&lt; Set Y Axis Label( string )

**Beschreibung:** Legt die Beschriftung für die Y-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**Syntax:** obj &lt;&lt; Set Z Axis Color( color )

**Beschreibung:** Legt die Farbe der Z-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**Syntax:** obj &lt;&lt; Set Z Axis Label( string )

**Beschreibung:** Legt die Beschriftung für die Z-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**Syntax:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Beschreibung:** Legt die Werte für die X-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**Syntax:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Beschreibung:** Legt die Werte für die Y-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**Syntax:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Beschreibung:** Legt die Werte für die Z-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**Syntax:** obj &lt;&lt; get light active( light number )

**Beschreibung:** Gibt die Aktivierung des angegebenen Lichts, das das Diagramm beleuchtet, zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

#### get light color

**Syntax:** obj &lt;&lt; get light color( light number )

**Beschreibung:** Gibt die angegebene Farbe des Lichts, das das Diagramm beleuchtet, als Liste zurück {red, green, blue}.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

#### get light position

**Syntax:** obj &lt;&lt; get light position( light number )

**Beschreibung:** Gibt die angegebene Position des Lichts, das das Diagramm beleuchtet, als Liste zurück {x, y, z}.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

#### set light active

**Syntax:** obj &lt;&lt; set light active( light number, state=0|1 )

**Beschreibung:** Schaltet das angegebene Licht ein, das das Diagramm beleuchtet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**Syntax:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Beschreibung:** Legt die Farbe des Lichts fest, das das Diagramm beleuchtet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**Syntax:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Beschreibung:** Legt die Position des Lichts fest, das das Diagramm beleuchtet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

### Zugehörige Konstruktoren

#### Surface Frame3D

**Syntax:** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**Beschreibung:** Sendet Anzeigebefehle an das 3D-Diagramm.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

