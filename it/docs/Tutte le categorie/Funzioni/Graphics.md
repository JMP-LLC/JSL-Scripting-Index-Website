# Graphics



### Add Color Theme

**Descrizione:** Crea un nuovo tema colori personalizzato e lo registra nel selettore temi.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

#### Esempio 2

```jsl

Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Arc

**Sintassi:** Arc( left, top, right, bottom, startAngle, endAngle )

**Descrizione:** Disegna un arco di un ovale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arrow

**Sintassi:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Descrizione:** Disegna una linea con una freccia o una sequenza di dette linee.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### Back Color

**Sintassi:** Back Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore di sfondo per la modalità di cancellazione nella funzione Text().

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Blend Colors

**Sintassi:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Descrizione:** Unisce due colori con una percentuale e uno spazio colore configurabili.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

Blend Colors( "black", "white", 0.25 );

```

#### Esempio 2

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

#### Esempio 3

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

#### Esempio 4

```jsl

Blend Colors( "red", "blue", 0.5, "LUV" );

```

#### Esempio 5

```jsl

Blend Colors( "red", "blue", 0.75, "HLS" );

```

#### Esempio 6

```jsl

c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

#### Esempio 7

```jsl

c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Char To Path

**Sintassi:** m = Char To Path( pathText )

**Descrizione:** Converte la specifica di percorso dalla forma alfanumerica alla forma matriciale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**Sintassi:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Descrizione:** Disegna una circonferenza con centro in {x, y}. Il raggio può essere specificato come un numero intero basato sull&apos;asse verticale o come un numero di pixel. Un raggio in pixel crea una circonferenza che non cambia dimensione al variare dell&apos;asse verticale. Si possono ripetere gli argomenti in qualsiasi ordine per disegnare più circonferenze. Se si vuole usare il comando "FILL", deve essere l&apos;ultimo; questo comando riempie le circonferenze con il colore prescelto invece di disegnarle nel colore della penna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

```

### Color Difference

**Sintassi:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Descrizione:** Restituisce la differenza tra due colori in una metrica di differenza di colore specificata.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

Color Difference( "red", "blue" );

```

#### Esempio 2

```jsl

Color Difference( "red", "blue", "sRGB" );

```

#### Esempio 3

```jsl

Color Difference( "red", "blue", "redmean" );

```

#### Esempio 4

```jsl

Color Difference( "red", "blue", "CIE76" );

```

#### Esempio 5

```jsl

Color Difference( "red", "blue", "CIE94" );

```

#### Esempio 6

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

#### Esempio 7

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**Sintassi:** {h, l, s} = Color To HLS( color )

**Descrizione:** Restituisce un elenco delle componenti tonalità, luminosità e saturazione. L&apos;argomento color può essere qualsiasi colore JSL valido, oppure una matrice di numeri di colore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Sintassi:** {r, g, b} = Color To RGB( color )

**Descrizione:** Restituisce un elenco delle componenti rosse, verdi e blu, tra 0 e 1. L&apos;argomento colore può essere qualsiasi colore JSL valido, oppure una matrice di numeri di colore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**Sintassi:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Descrizione:** Disegna i profili isometrici data una griglia di valori. Se sono specificati meno colori rispetto ai profili isometrici, le opzioni "Interpola colori" o "Ciclo colori" determinano il modo in cui i colori saranno applicati.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Sintassi:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Descrizione:** Valuta l&apos;espressione in una griglia di valori xName e yName e disegna le linee isometriche. color può essere specificato come numero, matrice, elenco di valori RGB, elenco di nomi di colori o tema colori.  La trasparenza t può essere specificata come numero o come matrice.  Se è specificata l&apos;opzione Ternary i profili isometrici sono ristretti a un sistema di coordinate ternario.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

#### Esempio 2

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )
		)
	)
);

```

### Drag Line

**Sintassi:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna una polilinea nei punti indicati. A differenza di Linea tuttavia, i punti possono essere trascinati sullo schermo, aggiornando i valori negli argomenti della matrice (Valore L).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**Sintassi:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna indicatori mobili nei punti indicati. I valori della matrice sono aggiornati allo spostamento degli indicatori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**Sintassi:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna un poligono pieno nei punti indicati. I punti possono essere trascinati sullo schermo, aggiornando i valori negli argomenti della matrice (Valore L).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**Sintassi:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna un rettangolo nei punti indicati. A differenza di Rett tuttavia, questi angoli possono essere trascinati sullo schermo, aggiornando i valori negli argomenti della matrice (Valore L).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**Sintassi:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descrizione:** Disegna il testo nei punti indicati. A differenza della funzione Text() tuttavia, i punti possono essere trascinati lungo lo schermo aggiornando i valori negli argomenti della matrice xMatrixName e yMatrixName. L&apos;argomento text può essere l&apos;argomento di una stringa o un elenco di stringhe.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Fill Color

**Sintassi:** Fill Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore per il disegno delle aree riempite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Sintassi:** Fill Pattern( name|mask|image )

**Descrizione:** Imposta il pattern per disegnare aree riempite. Una maschera è una matrice di valori tra  0 e 1 da applicarsi al colore di riempimento corrente.

**JMP Versione aggiunta:** prima della versione 14

#### Immagine

```jsl


image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

#### Maschera

```jsl

New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Get Color Theme Detail

**Sintassi:** script = Get Color Theme Detail(name)

**Descrizione:** Restituisce lo script per un nome tema colore dato

**JMP Versione aggiunta:** prima della versione 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Sintassi:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Descrizione:** Restituisce un elenco di stringhe di temi di colore che corrispondono al parametro opzionale kind. kind è uno dei seguenti: "continuo", "categorico", "sequenziale", "divergente", "qualitativo" o "cromatico".

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Get Color Theme Names();

```

#### Esempio 2

```jsl

Get Color Theme Names( "sequential" );

```

### Gradient Function

**Sintassi:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Descrizione:** Riempie il grafico con un gradiente tra due colori. L&apos;argomento zExpr è una funzione nei termini delle variabili specificate da xName e yName. Il vettore zLimits specifica il range di valori per zExpr. L&apos;argomento zColor è un vettore o un elenco che definisce i due colori da fondere insieme per creare il gradiente. La Transparency è un singolo valore applicato all&apos;intera griglia.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### H Line

**Sintassi:** H Line( y ); H Line( x1, x2, y )

**Descrizione:** Disegna una linea orizzontale su y da x1 a x2 o nell&apos;intero frame.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H Size

**Sintassi:** h = H Size()

**Descrizione:** Restituisce la dimensione orizzontale del frame del grafico in pixel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### HLS Color

**Sintassi:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Descrizione:** Restituisce un numero di colore a partire dalle componenti tonalità, luminosità e saturazione, tutte tra 0 e 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### Handle

**Sintassi:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Descrizione:** Disegna un indicatore quadrato alle coordinate specificate da xPos e yPos e valuta ripetutamente dragScript quando si preme il mouse sull&apos;indicatore. Prima di eseguire lo script, le x e y globali sono impostate al valore del mouse e ripristinate poi ai valori originali. L&apos;espressione mouseUpScript viene eseguita dopo il rilascio del pulsante del mouse.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Heat Color

**Sintassi:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Descrizione:** Restituisce un colore corrispondente a un valore tra 0 e 1. Il tema predefinito è "Da blu a grigio a rosso". Tutti i temi supportati dal diagramma a celle sono supportati qui. Gli argomenti delle matrici sono supportati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### In Path

**Sintassi:** b = In Path( x, y, pathMatrix|pathText )

**Descrizione:** Restituisce 1 se il punto (x,y) è nel percorso dato e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Sintassi:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Descrizione:** Restituisce 1 se il punto (x,y) è nel poligono definito dagli argomenti dei vettori, in caso contrario restituisce 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**Sintassi:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Descrizione:** Restituisce un colore di categoria, dove i è il livello di categoria; n è il numero di categorie (opzionale);e theme sono i temi di colore nella casella campo Colore Valore della finestra di dialogo Info colonna. ("Predefinito JMP" è il tema predefinito.) L&apos;indice di categoria deve essere >= 1 e <= il numero di categorie specificato nella chiamata o definito dal tema. Se il secondo argomento è un carattere, si tratta del tema colore e non è specificaton.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Line

**Sintassi:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Descrizione:** Disegna una linea o linee collegate. Nel caso di default, la linea è disegnata in modo lineare tra i punti finali. Se è impostata l&apos;opzione Value Space, la linea seguirà la proiezione specificata dalle scale degli assi sottostanti. Se è impostata l&apos;opzione Smooth, le connessioni sono sottoposte a smoothing, vincolate per tension, domain dimension, min response e max response.

**JMP Versione aggiunta:** prima della versione 14

#### Constrained smoothing

```jsl

New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );
	)
);

```

#### Polyline

```jsl

New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

#### Smoothing

```jsl

New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

#### Value space interpolation

```jsl

New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Style

**Sintassi:** Line Style( x )

**Descrizione:** Imposta lo stile di linea corrente, scegliendo uno dei seguenti: 0 (continua), 1 (punteggiata), 2 (tratteggiata), 3 (trattino-punto), 4 (trattino-punto-punto).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Mandelbrot

**Sintassi:** v = Mandelbrot( n, radius, x, y )

**Descrizione:** calcola il valore della funzione di Mandelbrot in x,y, arrestandosi dopo n iterazioni o quando viene superato il raggio

**JMP Versione aggiunta:** prima della versione 14

```jsl

grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Marker

**Sintassi:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Descrizione:** Disegna indicatori alle coordinate indicate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**Sintassi:** Marker Size( n )

**Descrizione:** Imposta gli indicatori di dimensione disegnati nel frame del grafico. 0 = punto, 1 = piccolo, ....

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Mousetrap

**Sintassi:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Descrizione:** Valuta iterativamente l&apos;espressione dragScript mentre si fa clic con il mouse all&apos;interno del grafico, senza che siano interessati altri oggetti nel grafico. Prima di eseguire lo script, le x e y globali sono impostate al valore del mouse e ripristinate poi ai valori originali. L&apos;espressione mouseUpScript viene eseguita dopo il rilascio del pulsante del mouse.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### New Heat Image

**Sintassi:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Descrizione:** Crea un&apos;immagine heatmap basata su una matrice e un tema o un gradiente di colore.

**JMP Versione aggiunta:** 16

```jsl


nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### Normal Contour

**Sintassi:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Descrizione:** Disegna una o più curve di livello della probabilità normale per k popolazioni e due variabili. L&apos;argomento prob può essere una probabilità scalare o una matrice di probabilità. Gli argomenti meanMatrix e stdsMatrix sono matrici k per 2 e l&apos;argomento corrMatrix è un vettore k per 1. L&apos;argomento colorsMatrix specifica uno o più colori per le curve di livello k; i colori devono essere specificati come colori JSL (valori interi di colore JSL o valori ottenuti da funzioni di colore JSL, come RGB Color() o HLS Color()). L&apos;argomento fill specifica il livello di trasparenza del colore di riempimento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Oval

**Sintassi:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Descrizione:** Disegna un ovale entro il rettangolo specificato, riempito se il riempimento è diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### Path

**Sintassi:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Descrizione:** Disegna un tratto lungo il percorso dato se il riempimento è 0, oppure dipinge l&apos;interno del percorso dato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Sintassi:** s = Path To Char( pathMatrix )

**Descrizione:** Converte la specifica di percorso dalla forma matriciale alla forma alfanumerica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**Sintassi:** Pen Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore per il disegno delle linee.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Sintassi:** Pen Size( &lt;x&gt; )

**Descrizione:** Imposta le dimensioni della penna in pixel per disegnare le linee.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pick Color

**Sintassi:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Descrizione:** Restituisce un colore che è stato selezionato con il selettore colore standard.

**JMP Versione aggiunta:** 14

```jsl

pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**Sintassi:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Descrizione:** Restituisce un tema di colore che è stato selezionato con il selezionatore standard di temi di colore. Il tema iniziale può essere specificato esplicitamente o specificando un Type per utilizzare i temi dalle preferenze.

**JMP Versione aggiunta:** 17

#### Costruttore di grafici

```jsl


theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

#### Legenda righe

```jsl


pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**Sintassi:** Pie( left, top, right, bottom, startAngle, endAngle )

**Descrizione:** Disegna una sezione (fetta) di un grafico a torta.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pixel Line To

**Sintassi:** Pixel Line To( h, v )

**Descrizione:** Disegna una linea dalla coordinata della penna corrente su base pixel alle coordinate orizzontali e verticali date.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**Sintassi:** Pixel Move To( h, v )

**Descrizione:** Sposta la penna a indirizzo pixel alla coordinata orizzontale e verticale relativa all&apos;origine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**Sintassi:** Pixel Origin( x, y )

**Descrizione:** Imposta l&apos;origine sulla quale sono basati i comandi di disegno di pixel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**Sintassi:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Descrizione:** Disegna un tratto lungo il percorso in pixel dato se il riempimento è 0, oppure dipinge l&apos;interno del percorso dato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.  Il percorso sarà ridimensionato e traslato attorno alla propria origine in base ai parametri facoltativi, con l&apos;orientamento specificato nello spazio dell&apos;asse.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**Sintassi:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Descrizione:** Si sposta nella posizione pixel {h, v} e disegna il testo specificato dall&apos;argomento text. Argomenti delle proprietà con nome: Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Argomenti di posizione, argomenti con nome e stringhe possono essere mescolati in qualsiasi ordine.

**JMP Versione aggiunta:** prima della versione 14

```jsl


New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Polygon

**Sintassi:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Descrizione:** Disegna il poligono specificato dai punti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Sintassi:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**Descrizione:** Calcola l&apos;area del poligono specificato.

**JMP Versione aggiunta:** 14

#### Esempio 1

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

#### Esempio 2

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Sintassi:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**Descrizione:** Calcola il centroide del poligono specificato.

**JMP Versione aggiunta:** 14

#### Esempio 1

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

#### Esempio 2

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Sintassi:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Descrizione:** Rimuove da un poligono i punti con un basso livello di dettaglio e restituisce gli indici dei punti rimanenti. detail factor è inversamente proporzionale alla tolleranza dell&apos;errore del dettaglio. multiple(ids) indica che molti poligoni devono essere semplificati insieme in modo che i lati comuni siano trattati in modo coerente. ids è una matrice con una riga per punto. geodesic(1) indica che le coordinate sono latitudine e longitudine per la misurazione della distanza.

**JMP Versione aggiunta:** 19

#### Esempio 1

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

#### Poligoni multipli

```jsl

dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### RGB Color

**Sintassi:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Descrizione:** Restituisce un numero di colore a partire dai componenti rossi, verdi e blu, tutti tra 0 e 1. RGB Color(1, 1, 1) è bianco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Rect

**Sintassi:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Descrizione:** Disegna un rettangolo, riempito se il riempimento è diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
);

```

### Remove Color Theme

**Sintassi:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Descrizione:** Rimuove un tema colori personalizzato dall&apos;elenco globale, o per nome o in base all&apos;oggetto tema colori completo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Text

**Sintassi:** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**Descrizione:** Si sposta in posizione {x, y} e disegna il testo specificato dall&apos;argomento  text. Gli argomenti delle proprietà con nome possono essere Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Argomenti di posizione, argomenti con nome e stringhe possono essere mescolati in qualsiasi ordine. È anche possibile usare quattro coordinate x, y per descrivere un riquadro entro cui disegnare il testo. In tal caso le proprietà non vengono usate.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

#### Esempio 2

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Color

**Sintassi:** Text Color( &lt;name|index|rgbList&gt; )

**Descrizione:** Imposta il colore per il disegno del testo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Font

**Sintassi:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Descrizione:** Imposta il carattere per il successivo disegno di Text(). Usarlo senza alcun argomento per ottenere le impostazioni correnti del carattere. L&apos;angolo è in gradi in senso orario.

**JMP Versione aggiunta:** 15

```jsl

New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Size

**Sintassi:** Text Size( n )

**Descrizione:** Imposta la dimensione del carattere per il disegno del testo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### To Color Space

**Sintassi:** color = To Color Space( color, colorSpace )

**Descrizione:** Traduce un colore in un altro spazio colore. I colori fuori gamma sono mappati per stimare quando vengono convertiti in spazi colore più piccoli.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

To Color Space( "red", "LMS" );

```

#### Esempio 2

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

#### Esempio 3

```jsl

To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**Sintassi:** Transparency( &lt;alpha&gt; )

**Descrizione:** Imposta la trasparenza utilizzata nei comandi di disegno. Alfa è situato in un range tra 0 (trasparente) e 1 (opaco, impostazione predefinita). Alcuni sistemi operativi non supportano questa funzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### V Line

**Sintassi:** V Line( x ); V Line( x, y1, y2 )

**Descrizione:** Disegna una linea verticale su x da y1 a y2 o nell&apos;intero frame.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V Size

**Sintassi:** v = V Size()

**Descrizione:** Restituisce la dimensione verticale del frame del grafico in pixel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### X Function

**Sintassi:** X Function( xExpr, yName, &lt;properties&gt; )

**Descrizione:** Disegna la funzione xExpr nella dimensione X al variare della variabile yName nel range dell&apos;asse Y del grafico. Ulteriori argomenti delle proprietà con nome: Min(X minimo), Max(Y massimo), Fill(pattern di riempimento, valore da riempire), Inc(limite di incremento superiore).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Sintassi:** x = X Origin()

**Descrizione:** Restituisce il valore x per il bordo sinistro del frame del grafico.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**Sintassi:** x = X Range()

**Descrizione:** Restituisce la distanza x da sinistra a destra. X Origin() + X Range() è il bordo destro.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**Sintassi:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Descrizione:** Imposta una nuova scala per il frame dei grafici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XY Function

**Sintassi:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Descrizione:** Questa funzione di script grafico combina un&apos;espressione x(t) e un&apos;espressione y(t) per disegnare una curva x-y per il range del parametro t specificato. Inc() è il massimo incremento su t, oppure steps() è il minimo numero di passi su t. Usare steps() o inc() se il valore predefinito manca di dettagli.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**Sintassi:** Y Function( yExpr, xName, &lt;properties&gt; )

**Descrizione:** Disegna la funzione yExpr nella dimensione Y al variare della variabile xName nel range dell&apos;asse X del grafico. Ulteriori argomenti delle proprietà con nome: Min(X minimo), Max(X massimo), Fill(pattern di riempimento, valore da riempire), Inc(limite di incremento superiore).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Sintassi:** y = Y Origin()

**Descrizione:** Restituisce il valore y per il bordo inferiore del frame del grafico.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**Sintassi:** y = Y Range()

**Descrizione:** Restituisce la distanza y dal basso in alto. Y Origin() + Y Range() è il bordo superiore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**Sintassi:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Descrizione:** Imposta una nuova scala per il frame dei grafici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

