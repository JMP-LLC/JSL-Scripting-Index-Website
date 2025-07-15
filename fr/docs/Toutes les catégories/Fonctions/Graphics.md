# Graphics



### Add Color Theme

**Description :** Crée un nouveau thème de couleur personnalisé et l&apos;enregistre avec le sélecteur de thème.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0},
	{255, 0, 0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia",
	"Tritanomaly"}}
);

```

### Arc

**Syntaxe :** Arc( left, top, right, bottom, startAngle, endAngle )

**Description :** Dessine un arc d&apos;ovale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arrow

**Syntaxe :** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Description :** Dessine une ligne avec une flèche ou une séquence de ces lignes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### Back Color

**Syntaxe :** Back Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur de fond pour le mode effacer dans la fonction Text().

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Blend Colors

**Syntaxe :** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Description :** Mélange deux couleurs avec un pourcentage et un espace de couleur paramétrables.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
Blend Colors( "black", "white", 0.25 );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "sRGB" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "lRGB" );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Exemple 6**

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
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

**Exemple 7**

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
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
			Fill Color(
				Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" )
			);
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color(
				Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" )
			);
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Char To Path

**Syntaxe :** m = Char To Path( pathText )

**Description :** Convertit une spécification de chemin sous forme de caractère en une sous forme de matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**Syntaxe :** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Description :** Dessine un cercle centré sur {x, y}. Le rayon peut être spécifié en tant que nombre entier en fonction de l&apos;axe vertical ou comme un nombre de pixels. Un rayon exprimé en pixels donne un cercle dont la taille n&apos;est pas modifiée lorsque l&apos;axe vertical change. Les arguments peuvent être répétés dans n&apos;importe quel ordre pour dessiner de nombreux cercles. Le paramètre "FILL", s&apos;il est utilisé, doit être le dernier et colorie les cercles avec la couleur de remplissage au lieu de les dessiner avec la couleur du stylo.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Description :** Renvoie la différence entre deux couleurs selon une métrique de différence de couleur spécifiée.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "sRGB" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "redmean" );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE76" );

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE94" );

```

**Exemple 6**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIEDE2000" );

```

**Exemple 7**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**Syntaxe :** {h, l, s} = Color To HLS( color )

**Description :** Renvoie une liste des composantes tonalité, luminosité et saturation.  L’argument color peut être une couleur JSL correcte ou une matrice de numéros de couleur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Syntaxe :** {r, g, b} = Color To RGB( color )

**Description :** Renvoie une liste de composantes rouge, vert et bleu, comprises entre 0 et 1. L’argument couleur peut être une couleur JSL quelconque correcte ou une matrice de numéros de couleurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**Syntaxe :** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Description :** Dessine des isoréponses en fonction d&apos;une grille de valeurs. Si le nombre de couleurs spécifié est inférieur au nombre d&apos;isoréponses, les options « Interpolate Colors » ou « Cycle Colors » déterminent comment appliquer les couleurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );

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

**Syntaxe :** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Description :** Évalue l&apos;expression sur une grille de valeurs xName et yName et dessine les lignes d&apos;isoréponses. La couleur color peut être spécifiée par un nombre, une matrice, une liste de valeurs RVB, une liste de noms de couleurs ou un thème de couleur.  La transparence t peut être spécifiée par un nombre ou par une matrice.  Si l’option Ternary est sélectionnée, les courbes d&apos;isoréponses sont coupées sur un système de coordonnées ternaire.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
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

**Exemple 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor(
				{{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors"
			)
		)
	)
);

```

### Drag Line

**Syntaxe :** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine une polyligne sur les points indiqués. Toutefois, à la différence de la ligne, les points peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments de la matrice (valeur L).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine des marqueurs déplaçables aux point indiqués. Les valeurs de la matrice sont mises à jour lorsque les marqueurs sont déplacés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine un polygone plein sur les points indiqués. Les points peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments de matrice (l-value).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine un rectangle sur les points indiqués. Toutefois, à la différence de Rect, ces coins peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments de la matrice (valeur L).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine le texte aux points indiqués. Toutefois, à la différence de la fonction Text(), les points peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments des matrices xMatrixName et yMatrixName. L’argument text peut être une chaîne ou une liste de chaînes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Fill Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur de dessin des zones de remplissage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Syntaxe :** Fill Pattern( name|mask|image )

**Description :** Définit la configuration de dessin des zones remplies. Un masque est une matrice de valeurs comprises entre 0 et 1 devant être appliquée à la couleur de remplissage actuelle.

**JMP Version ajoutée :** Avant la version 14

**Image**

```jsl

Names Default To Here( 1 );

image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Masque**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Get Color Theme Detail

**Syntaxe :** script = Get Color Theme Detail(name)

**Description :** Renvoie le script pour un nom de thème de couleur donné

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Syntaxe :** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Description :** Renvoie une liste de chaînes de thèmes de couleur appariés au paramètre facultatif kind. kind prend l&apos;une des valeurs suivantes : « continu », « catégoriel », « séquentiel », « divergent », « qualitatif » ou « chromatique ».

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Get Color Theme Names();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Get Color Theme Names( "sequential" );

```

### Gradient Function

**Syntaxe :** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Description :** Remplit le graphique avec des dégradés entre deux couleurs. L&apos;argument zExpr est une fonction des deux variables xName et yName. Le vecteur zLimits spécifie l’intervalle des valeurs de zExpr. L&apos;argument zColor est un vecteur ou une liste qui définit les deux couleurs qui sont mélangées pour créer le dégradé. Le Transparency est une valeur unique appliquée à l&apos;ensemble de la grille.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** H Line( y ); H Line( x1, x2, y )

**Description :** Dessine une droite horizontale sur y, de x1 à x2 ou traversant tout le cadre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H Size

**Syntaxe :** h = H Size()

**Description :** Renvoie la taille horizontale du cadre des graphiques en pixels.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### HLS Color

**Syntaxe :** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Description :** Renvoie un numéro de couleur à partir des composantes tonalité, luminosité et saturation, toutes comprises entre 0 et 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Description :** Dessine un marqueur carré aux coordonnées spécifiées par xPos et yPos, et évalue de façon répétée l’expression dragScript lorsque vous cliquez sur le marqueur. Avant l&apos;exécution du script, les valeurs globales x et y sont définies par le pointeur de la souris, elles sont rétablies par la suite à leurs valeurs d&apos;origine. L’expression mouseUpScript est exécutée une fois que le bouton de la souris est relâché.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Description :** Renvoie une couleur correspondant à une valeur comprise entre 0 et 1. La couleur par défaut va du bleu au rouge, en passant par le gris. Toute couleur prise en charge par le diagramme de cellules est prise en charge ici. Les arguments de matrice sont également pris en charge.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** b = In Path( x, y, pathMatrix|pathText )

**Description :** Renvoie 1 si le point (x,y) se trouve dans le chemin donné, autrement il renvoie 0.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );

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

**Syntaxe :** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Description :** Renvoie 1 si le point (x,y) est dans le polygone défini par les arguments du vecteur, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**Syntaxe :** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Description :** Renvoie une couleur de catégorie, où i est le niveau de catégorie; n est le nombre de catégories (facultatif) et theme correspond aux thèmes de couleur répertoriés dans la zone de liste déroulante Couleur de la valeur de la boîte de dialogue Informations sur la colonne. ("JMP par défaut" indique le thème par défaut.) L&apos;index de catégorie doit être >= 1 et <= au nombre de catégories spécifié dans l&apos;appel ou défini par le thème. Si le deuxième argument est un caractère, il s’agit du thème de couleur et n n&apos;est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Description :** Dessine une droite ou des droites connectées. Dans le cas par défaut, la droite est dessinée linéairement entre les points finaux. Si l&apos;option Value Space est définie , la droite suivra la projection spécifiée par l&apos;échelle des axes sous-jacents. Si l&apos;option Smooth est définie, les connexions sont lissées, restreintes par tension, domain dimension, min response et max response.

**JMP Version ajoutée :** Avant la version 14

**Constrained smoothing**

```jsl

Names Default To Here( 1 );
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
		Line(
			Index( 10, 90, 10 ),
			[20 10 90 90 60 70 10 10 40],
			<<Smooth( ., "X", 8, 92 )
		);
	)
);

```

**Polyline**

```jsl

Names Default To Here( 1 );
New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

**Smoothing**

```jsl

Names Default To Here( 1 );
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

**Value space interpolation**

```jsl

Names Default To Here( 1 );
New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Style

**Syntaxe :** Line Style( x )

**Description :** Définit le style de la ligne actuelle, parmi les suivants : 0 (continu), 1 (pointillé), 2 (tireté), 3 (tiret-point), or 4 (tiret-point-point).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash",
		"Dense Dash", "Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles,
			{x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Mandelbrot

**Syntaxe :** v = Mandelbrot( n, radius, x, y )

**Description :** calcule la valeur de la fonction de Mandelbrot sur x,y, en s&apos;arrêtant après n itérations ou lorsque le rayon est dépassé

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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
			<<ygrid(
				Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid ))
			), 

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

**Syntaxe :** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Description :** Dessine des marqueurs aux coordonnées indiquées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) )
);

```

### Marker Size

**Syntaxe :** Marker Size( n )

**Description :** Définit la taille des marqueurs dessinés dans le cadre des graphiques. 0 = point, 1 = petit, ...

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Mousetrap

**Syntaxe :** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Description :** Évalue de façon répétée l’expression dragScript lorsque vous cliquez avec la souris sur le graphique et que celle-ci n&apos;est pas gérée par un autre objet graphique. Avant l&apos;exécution du script, les valeurs globales x et y sont définies par le pointeur de la souris, elles sont rétablies par la suite à leurs valeurs d&apos;origine. L’expression mouseUpScript est exécutée une fois que le bouton de la souris est relâché.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Description :** Crée une image de carte thermique basée sur une matrice et un thème de couleur ou un dégradé.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );

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
				{Color Theme( "Blue To Gray To Orange" ),
				Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ),
				Scale Type( "Standard Deviation" )}
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

**Syntaxe :** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Description :** Dessine les courbes d&apos;iso-probabilité normales pour k populations et deux variables. L’argument prob peut être une probabilité scalaire ou une matrice de probabilités. Les arguments meanMatrix et stdsMatrix sont des matrices k par 2, et l&apos;argument corrMatrix est un vecteur k par 1. L&apos;argument colorsMatrix spécifie la ou les couleurs des k courbes d&apos;isoréponses k ; les couleurs doivent être spécifiées comme couleurs JSL (soit des valeurs entières de couleur JSL, soit des valeurs retournées par des fonctions de couleur JSL telles que RGB Color() ou HLS Color()). L&apos;argument fill spécifie la valeur de transparence de la couleur de remplissage de la courbe d&apos;isoréponses.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Description :** Dessine un ovale dans le rectangle spécifié, rempli si le remplissage est différent de zéro.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Description :** Dessine un trait le long du chemin donné si le remplissage est zéro, ou peint l’intérieur du chemin donné si le remplissage est différent de zéro. Le chemin peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin a trois colonnes pour x, y et les drapeaux pour chaque point du chemin. Les valeurs de drapeau sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatifs si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Syntaxe :** s = Path To Char( pathMatrix )

**Description :** Convertit une spécification de chemin sous forme de matrice en une sous forme de caractère.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**Syntaxe :** Pen Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur pour le dessin des lignes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Syntaxe :** Pen Size( &lt;x&gt; )

**Description :** Définit la taille du stylo en pixels pour le dessin des lignes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pick Color

**Syntaxe :** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Description :** Renvoie une couleur qui a été sélectionnée avec l&apos;outil Pipette standard.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Description :** Renvoie un thème de couleur qui a été sélectionné avec l&apos;outil Pipette standard. Le thème initial peut être spécifié explicitement ou en choisissant un Type pour utiliser les thèmes définis dans les préférences.

**JMP Version ajoutée :** 17

**Constructeur de graphiques**

```jsl

Names Default To Here( 1 );

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

**Légende de ligne**

```jsl

Names Default To Here( 1 );

pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**Syntaxe :** Pie( left, top, right, bottom, startAngle, endAngle )

**Description :** Dessine un secteur d&apos;un diagramme en secteurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pixel Line To

**Syntaxe :** Pixel Line To( h, v )

**Description :** Dessine une ligne allant de la coordonnée actuelle du stylo pixel aux coordonnées horizontale et verticale données.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Pixel Move To( h, v )

**Description :** Déplace le stylo à adresse pixel aux coordonnées horizontales et verticales relatives à l&apos;origine.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Pixel Origin( x, y )

**Description :** Définit l&apos;origine sur laquelle se basent les commandes de dessin de pixel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Description :** Trace un trait le long du chemin en question, basé sur le pixel, si le remplissage est égal à 0 ; ou peint l’intérieur du chemin en question si le remplissage n’est pas égal à 0. Le chemin peut être spécifié avec une matrice N x 3 ou avec une représentation texte. Une matrice de chemin possède trois colonnes pour x, y et les alertes pour chaque point sur le chemin. Les valeurs d’alerte sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de droite, 3 pour le segment de Bézier cubique, et sont négatives si le point ferme également le chemin.  Le texte du chemin supporte la syntaxe SVG. Le chemin sera mis à l’échelle et traduit à l’original en fonction des paramètres facultatifs, avec l’orientation spécifiée dans l’espace de l’axe.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Description :** Avance jusqu’à la position du pixel {h, v} et dessine le texte spécifié par l’argument text. Les arguments de propriété nommés incluent Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Les arguments de position, les arguments nommés et les chaînes peuvent être mélangés dans n’importe quel ordre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );

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

**Syntaxe :** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Description :** Dessine le polygone spécifié par les points.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Syntaxe :** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**Description :** Calcule la surface du polygone spécifié.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Syntaxe :** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**Description :** Calcule le centroïde du polygone spécifié.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Syntaxe :** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Description :** Supprime les points d&apos;un polygone qui supportent une faible quantité de détails et renvoie les indices des points restants. detail factor est inversement proportionnel à la tolérance d&apos;erreur du détail. multiple(ids) indique que de nombreux polygones doivent être simplifiés de manière à traiter les arêtes communes de manière cohérente. ids est une matrice avec une ligne par point. geodesic(1) indique que les coordonnées sont exprimées en latitude et longitude pour la mesure de la distance.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2]
		+J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1]
		+J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**Plusieurs polygones**

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Description :** Renvoie un numéro de couleur à partir des composantes rouge, vert et bleu, tous compris entre 0 et 1. RGB Color(1, 1, 1) est le blanc.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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
					x = green / fract * xBlockSize + blue / fract * xBlockSize *
					blocks;
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

**Syntaxe :** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Description :** Dessine un rectangle rempli si le remplissage est différent de zéro.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Description :** Supprime un thème de couleurs personnalisé de la liste globale, soit en fonction du nom ou de l&apos;objet complet du thème de couleurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Remove Color Theme( "Yellow To Blue" );

```

### Text

**Syntaxe :** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**Description :** Se déplace vers la position {x, y} et écrit le texte spécifié par l&apos;argument text. Les arguments de propriété nommés sont : Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Les arguments de position, les arguments nommés et les chaînes peuvent être mélangés dans un ordre quelconque. Vous pouvez aussi utiliser quatre coordonnées x, y pour décrire un boîte dans laquelle écrire le texte. Dans ce cas, les propriétés ne sont pas utilisées.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Color

**Syntaxe :** Text Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur pour le dessin du texte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Font

**Syntaxe :** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Description :** Définit la police pour le dessin Text() consécutif. N&apos;utiliser aucun argument pour obtenir les paramètres de police actuels. L&apos;angle est défini en degrés, dans le sens des aiguilles d&apos;une montre.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font(
				If( Host is( "Mac" ),
					"Helvetica",
					"Arial"
				),
				30,
				"Italic Bold"
			);
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line(
					{70 * Cos( a ), 70 * Sin( a )},
					{76 * Cos( a ), 76 * Sin( a )}
				);
			);
		)
	)
);

```

### Text Size

**Syntaxe :** Text Size( n )

**Description :** Définit la taille de la police pour le dessin du texte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### To Color Space

**Syntaxe :** color = To Color Space( color, colorSpace )

**Description :** Traduit une couleur dans un autre espace de couleur. Les couleurs non imprimables sont mappées pour l&apos;ajustement lors de la conversion en espaces de couleur plus petits.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
To Color Space( "red", "LMS" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**Syntaxe :** Transparency( &lt;alpha&gt; )

**Description :** Définit la transparence utilisée dans les commandes de dessin. Alpha s&apos;étend de 0 (transparent) à 1 (opaque, valeur par défaut). Certains systèmes d&apos;exploitation ne le prennent pas en charge.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** V Line( x ); V Line( x, y1, y2 )

**Description :** Dessine une droite verticale sur x, de y1 à y2 ou traversant tout le cadre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V Size

**Syntaxe :** v = V Size()

**Description :** Renvoie la taille verticale du cadre des graphiques en pixels.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### X Function

**Syntaxe :** X Function( xExpr, yName, &lt;properties&gt; )

**Description :** Dessine la fonction xExpr dans la dimension X alors que yName varie sur l&apos;étendue de l&apos;axe Y du graphique. Arguments de propriété nommés supplémentaires : Min(X inférieur), Max(X supérieur), Fill(configuration, valeur à remplir), Inc(limite supérieure de l’incrément).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Syntaxe :** x = X Origin()

**Description :** Renvoie la valeur x pour le bord gauche du cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** x = X Range()

**Description :** Renvoie la distance x de gauche à droite. X Origin() + X Range() est le bord droit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Description :** Définit une nouvelle échelle pour le cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Description :** Cette fonction de script graphique combine une expression x(t) et une expression y(t) permettant de dessiner une courbe x-y pour l&apos;étendue des paramètres t spécifiée. Inc() est l&apos;incrément maximum sur t, ou étapes() est le nombre minimum d&apos;étapes sur t. Utiliser les étapes() ou inc() si la valeur par défaut n&apos;est pas détaillée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Y Function( yExpr, xName, &lt;properties&gt; )

**Description :** Dessine la fonction yExpr dans la dimension Y alors que xName varie sur l&apos;étendue de l&apos;axe X du graphique. Arguments de propriété nommés supplémentaires : Min(X inférieur), Max(X supérieur), Fill(configuration, valeur à remplir), Inc(limite supérieure de l’incrément).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Syntaxe :** y = Y Origin()

**Description :** Renvoie la valeur y pour le bord inférieur du cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** y = Y Range()

**Description :** Renvoie la distance y du bas jusqu&apos;au haut. Y Origin() + Y Range() est le bord supérieur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Description :** Définit une nouvelle échelle pour le cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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

