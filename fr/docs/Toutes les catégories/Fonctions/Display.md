# Display



### Alignment Cell Box

**Syntaxe :** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**Description :** Renvoie une référence à une boîte d&apos;affichage qui contient les contenus de la ligne (ou colonne) qui se trouvent à l&apos;intérieur de la zone de grille d&apos;alignement.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box(
			4,
			0,
			6,
			1,
			{"  12", "  13", "  14", "  15", "  16", "  17"}
		),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)",
			"5 (28%)", "7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)",
			"2 (11%)", "1 (5%)", "3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Syntaxe :** y = Alignment Grid Box( alignment cell boxes )

**Description :** Renvoie une référence à une boîte d&apos;affichage qui peut contenir des zones de cellule d&apos;alignement.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box(
			4,
			0,
			6,
			1,
			{"  12", "  13", "  14", "  15", "  16", "  17"}
		),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)",
			"5 (28%)", "7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)",
			"2 (11%)", "1 (5%)", "3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Syntaxe :** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Description :** Renvoie une référence à une boîte d&apos;affichage qui contient plusieurs éléments de chaque cellule qui se trouve à l&apos;intérieur de la zone de grille d&apos;alignement.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );

New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111
				0.055, 0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### Alpha Shape

**Syntaxe :** ashape = Alpha Shape(Triangulation)

**Description :** Renvoie la forme alpha correspondant à la triangulation donnée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### Border Box

**Syntaxe :** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**Description :** Renvoie une boîte d&apos;affichage pour ajouter de l&apos;espace autour de la boîte d&apos;affichage de l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Plot Seg

**Syntaxe :** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**Description :** Renvoie un groupe d’affichage représentant une boîte à moustaches basée sur les valeurs x et y passées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 5 ),
		Box Plot Seg( [1, 2, 3, 4] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**Syntaxe :** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**Description :** Crée une image en rotation pour indiquer un processus occupé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Syntaxe :** y = Button Box( title, script )

**Description :** Renvoie une boîte d’affichage illustrant un bouton avec un titre. L&apos;argument script est exécuté lorsque vous cliquez sur la case d’option.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Syntaxe :** y = Calendar Box()

**Description :** Renvoie une boîte d&apos;affichage contenant un contrôle calendaire. Le calendrier prend en charge la sélection unique d&apos;une date et d&apos;une heure facultative.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**Syntaxe :** y = Check Box( {item, ...}, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une ou plusieurs cases à cocher.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**Syntaxe :** Clear Global Window Handler()

**Description :** Efface un gestionnaire de fenêtre précédemment défini par Définir un gestionnaire de fenêtre global.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Col Box

**Syntaxe :** y = Col Box( title, boxes )

**Description :** Renvoie une boîte de colonnes composée des boîtes d’affichage en question.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col List Box

**Syntaxe :** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher la zone de liste permettant de sélectionner les colonnes de la table de données. Utiliser le message <<Modeling Type pour autoriser les types de modélisation spécialisée ou pour restreindre les types autorisés. La valeur par défaut "Any" autorisera toutes les colonnes avec un type de modélisation classique ("Continuous", "Nominal", "Ordinal").

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1",
	Col List Box( all, width( 250 ), maxSelected( 1 ) )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Span Box

**Syntaxe :** y = Col Span Box( title, children )

**Description :** Renvoie une colonne ayant un en-tête qui porte sur les colonnes enfants

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Column Dialog

**Syntaxe :** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**Description :** Invite l&apos;utilisateur avec une fenêtre modale contenant des champs permettant de sélectionner les colonnes d&apos;une table de données. La spécification peut inclure plusieurs types de zones de saisie, ainsi que des zones de conteneur pour organiser la fenêtre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X",
		Max Col( 1 ),
		Modeling Type( {"Continuous", "Multiple Response"} )
	),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Combo Box

**Syntaxe :** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une zone combinée avec un menu contextuel. Chaque élément de la zone combinée peut avoir une info-bulle facultative qui est spécifiée comme une chaîne entre parenthèses à la suite de la chaîne de texte de l&apos;élément.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Context Box

**Syntaxe :** y = Context Box( displayBox, ... )

**Description :** Renvoie une boîte d’affichage qui établit un contexte d’étendues d’évaluation. Permet d’exécuter les différentes parties d’une fenêtre d’affichage indépendamment les unes des autres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Contour Seg

**Syntaxe :** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**Description :** Renvoie un seg d&apos;affichage représentant les courbes d&apos;isoréponses d&apos;une triangulation. Des couleurs facultatives peuvent être spécifiées pour chaque niveau comme une matrice ou une liste. La transparence peut être spécifiée comme un nombre ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Current Report

**Syntaxe :** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une référence de boîte d&apos;affichage au rapport actif du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Current Report();

```

### Current Window

**Syntaxe :** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une référence à la fenêtre active du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Data Filter Context Box

**Syntaxe :** y = Data Filter Context Box( displayBox )

**Description :** Renvoie une boîte d’affichage qui définit l’étendue des filtres de données locales, contenue dans une arborescence de boîtes d’affichage. Les filtres de données et les boîtes de contexte de filtres de données peuvent être organisés dans une hiérarchie et seront partagés entre les plates-formes ou entre les boîtes contenues à l’intérieur des boîtes de contexte de filtres de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :sex ), Where( :sex == "F" ) )
			),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Syntaxe :** y = Data Filter Source Box( displayBox )

**Description :** Renvoie une boîte d&apos;affichage qui définit la source du filtre de sélection. Les lignes sélectionnées dans les rapports contenus dans la boîte Source de filtre de données seront incluses pour analyse dans les autres rapports contenus dans une boîte Contexte de filtres de données commune.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox,
							{Set Title( "Filter" )}
						)
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Syntaxe :** y = Data Grid Box( )

**Description :** Renvoie une boîte d&apos;affichage qui peut contenir une table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table Box

**Syntaxe :** y = Data Table Box( datatable )

**Description :** Renvoie une boîte de tableaux représentant la table de données en question.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Syntaxe :** y = Data Table Col Box( col )

**Description :** Renvoie une boîte de colonnes correspondant à la colonne de la table de données en question.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Syntaxe :** y = Data Table Plot Col Box( col )

**Description :** Renvoie un Plot Col Box correspondant à la colonne donnée de la table de données et, en option, utilise la deuxième et la troisième colonne de la table de données pour créer des limites de contrôle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box(
		Data Table Plot Col Box( :weight ),
		Data Table Plot Col Box( :height )
	)
);

```

### Dialog

**Syntaxe :** y = Dialog( specification )

**Description :** Invite l&apos;utilisateur avec une fenêtre modale. Cette fonction est obsolète. Veuillez utiliser la fonction Nouvelle fenêtre avec l&apos;argument <<Modal.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Excerpt Box

**Syntaxe :** y = Excerpt Box( rptnum, lstSubscripts )

**Description :** Renvoie une boîte d&apos;affichage contenant l&apos;extrait indiqué par le rapport numéro rptnum et la liste des indices d&apos;affichage lstSubscripts. Les indices indiquent l&apos;état actuel du rapport, une fois que les extraits antérieurs ont été supprimés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Expr As Picture

**Syntaxe :** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**Description :** Renvoie une image contenant l&apos;expression spécifiée comme image de formule. La largeur par défaut est 600 pixels et la taille de matrice max par défaut est 100.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Filter Col Selector

**Syntaxe :** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**Description :** Renvoie une boîte d’affichage contenant une liste d’éléments. Le contrôle permet le filtrage de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);

```

### Get Project

**Syntaxe :** project = Get Project( title|index|box|window )

**Description :** Renvoie une référence à un projet ouvert spécifique selon le titre, l&apos;index ou la boîte.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Syntaxe :** projectList = Get Project List()

**Description :** Renvoie une liste de tous les projets ouverts.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Window

**Syntaxe :** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**Description :** Renvoie une référence à une fenêtre ouverte spécifique selon le titre, l&apos;index ou la boîte.



La recherche se limite aux fenêtres du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Utilisez l&apos;argument facultatif Type() avec "Data Tables", "Journals", "Reports", ou "Dialogs" pour limiter la recherche aux fenêtres d&apos;un type particulier.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Syntaxe :** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**Description :** Renvoie une liste de toutes les fenêtres ouvertes.



Elle se limite aux fenêtres du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Utilisez l&apos;argument facultatif Type() avec "Data Tables", "Journals", "Reports", ou "Dialogs" pour limiter la liste aux fenêtres d&apos;un type particulier.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Print( Get Window List() << Get Window Title() );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print(
	Get Window List( Project( project ), Type( "Data Tables" ) ) <<
	Get Window Title()
);

```

### Global Box

**Syntaxe :** box = Global Box( name )

**Description :** Crée une boîte d&apos;affichage indiquant la valeur d&apos;une variable globale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
ex = .6;
New Window( "Example", Global Box( ex ) );

```

### Graph

**Syntaxe :** y = Graph Box( props, script )

**Description :** Renvoie une boîte d&apos;affichage contenant un graphique avec des axes. Les arguments nommés peuvent être : Title("title"), XScale(low, high), YScale(low, high), FrameSize(h, v), XName("x"), yName("y"), DoubleBuffer et SuppressAxes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Syntaxe :** y = Graph 3D Box()

**Description :** (Expérimental) Renvoie une boîte d&apos;affichage avec un contenu 3D qui peut être utilisée avec d&apos;autres boîtes d&apos;affichage pour créer des rapports personnalisés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Syntaxe :** y = Graph Box( props, script )

**Description :** Renvoie une boîte d&apos;affichage contenant un graphique avec des axes. Les arguments nommés peuvent être : Title("title"), XScale(low, high), YScale(low, high), FrameSize(h, v), XName("x"), yName("y"), DoubleBuffer et SuppressAxes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### H Center Box

**Syntaxe :** y = H Center Box( &lt;childbox&gt; )

**Description :** Renvoie une boîte d&apos;affichage contenant l&apos;argument boîte d&apos;affichage childbox centré sur l&apos;espace horizontal défini par la taille maximale de cette boîte enfant et de toutes les boîtes sœurs de la boîte centrale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H List Box

**Syntaxe :** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page horizontale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument facultatif Align permet d’aligner à bottom ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	)
);

```

### H Scroll Box

**Syntaxe :** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**Description :** Renvoie une boîte d’affichage qui positionne une boîte enfant plus grande avec une barre de défilement horizontale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Syntaxe :** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page horizontale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument facultatif Align permet d’aligner à right ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Splitter Box

**Syntaxe :** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui permet d&apos;organiser d&apos;autres boîtes d&apos;affichage horizontalement, avec un contrôle interactif des tailles. Les tailles enfant sont spécifiées sous la forme d&apos;une proportion de la largeur ou de la hauteur de la Splitter Box. L&apos;argument facultatif Size n&apos;est utilisé que pour la Splitter Box de premier niveau ; les boîtes de niveau inférieur sont dimensionnées comme toute autre boîte enfant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**Syntaxe :** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Description :** Renvoie une boîte d’affichage illustrant les arbres de la hiérarchie. L’argument text représente le nom du nœud et peut être une Text Edit Box.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hist Seg

**Syntaxe :** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**Description :** Renvoie un seg hist

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### Icon Box

**Syntaxe :** Box = Icon Box( "Name" )

**Description :** Construit une boîte d&apos;affichage contenant une icône, où l&apos;argument name peut être un nom d&apos;icône JMP ou le chemin d&apos;une image.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**Syntaxe :** box = If Box( 0|1, displayBoxArgs )

**Description :** Renvoie une boîte d&apos;affichage qui affiche conditionnellement les arguments de la boîte d&apos;affichage spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Syntaxe :** seg = If Seg(&lt;state=0|1&gt;)

**Description :** Renvoie un groupe d’affichage qui affiche ou masque le groupe d’affichage enfant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### JSS Context Box

**Syntaxe :** y = JSS Context Box( displayBox )

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) <<
				Background Color( "Blue" );
			)
		)
	)
);

```

### Journal Box

**Syntaxe :** y = Journal Box( journalText )

**Description :** Construit une boîte d&apos;affichage à partir d&apos;instructions qui seraient enregistrées dans un journal.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### Line Seg

**Syntaxe :** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Description :** Renvoie un groupe d’affichage avec des lignes reliant toutes les valeurs x et y.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**Syntaxe :** ls = Lines Seg([x1 y1 x2 y2,...])

**Description :** Renvoie un groupe d’affichage avec une séquence de segments de droite pour les valeurs x et y passées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Syntaxe :** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**Description :** Renvoie une boîte d&apos;affichage pour afficher un alignement de boîtes en nc colonnes. L&apos;argument facultatif Spacing spécifie l&apos;espace horizontal et vertical autour des boîtes d&apos;affichage. Si vous utilisez l’argument vspace, vspace est l&apos;espace vertical et pixels est l&apos;espace horizontal.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Syntaxe :** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**Description :** Renvoie une boîte d’affichage qui définit les largeurs de colonne des boîtes d&apos;alignement qu&apos;elle contient.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );

New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List Box

**Syntaxe :** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une zone de liste d&apos;éléments de sélection. Si item est en lui-même une liste à deux éléments contenant le nom de l’élément et une chaîne spécifiant le type de modélisation ou l’ordre de tri, "Ordinal" ou "Ascending" par exemple, l’icône appropriée s’affichera en regard de l’élément concerné dans la zone de liste.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item",
		"nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Marker Seg

**Syntaxe :** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Description :** Renvoie un groupe d’affichage avec des marqueurs pour toutes les valeurs x et y.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ),
				Color State( "Green" ), Color State( "Purple" ), Color State( "Red" )
				}
			)
		)
	)
);

```

### Matrix Box

**Syntaxe :** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une matrice de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) )
);

```

### MouseBox

**Syntaxe :** box = MouseBox( displayBoxArgs )

**Description :** Renvoie une boîte qui peut faire des rappels JSL pour les actions de souris.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this <<
					getDestBox == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If(
					!Is Empty( this << getSourceBox ) & this == (this << getSourceBox
					) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Move to Project

**Syntaxe :** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**Description :** Déplace une ou plusieurs fenêtres dans un projet, à l&apos;extérieur d&apos;un projet ou entre plusieurs projets. Seule Source ou Destination doit être spécifiée ; l&apos;autre sera associée par défaut au projet en cours (Utilisez uniquement Source pour déplacer des fenêtres dans le projet en cours, et uniquement Destination pour déplacer des fenêtres à l&apos;extérieur du projet en cours). Une fenêtre de table de données sera déplacée avec les rapports auxquels elle est associée, bien qu&apos;il ne soit pas nécessaire d&apos;en spécifier plusieurs dans l&apos;argument Windows. En l&apos;absence de spécification, l&apos;argument Windows déplacera par défaut toutes les fenêtres ouvertes dans le projet source.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### New Image

**Syntaxe :** img = New Image()img = New Image( width, height )img = New Image( pathname )img = New Image( picture )img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**Description :** Renvoie une nouvelle image éditable ultérieurement à l’aide des commandes JSL. Si le chemin spécifié pointe vers un fichier image existant, ce fichier doit être de type .JPG, .PNG, .GIF, .BMP ou .TIF.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New Project

**Syntaxe :** project = new Project( &lt;project messages&gt; )

**Description :** Crée une nouvelle fenêtre de projet vide. Un ou plusieurs messages de projet peuvent être inclus en tant qu&apos;arguments de sorte à créer un projet en une seule étape.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
project = New Project();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script )
	),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New Window

**Syntaxe :** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**Description :** Crée une fenêtre contenant la boîte d&apos;affichage ou le script spécifié. Une fenêtre de rapport est créée par défaut, sauf si l&apos;option Type est spécifiée. Une fenêtre de Type("Modal Dialog") arrête l&apos;exécution jusqu&apos;à ce que la boîte de dialogue soit remplie. On Open, On Validate et Return Result sont disponibles uniquement pour les fenêtres modales. On Open() évalue son expression, sa fonction ou sa méthode de classe à la création de la fenêtre. Si On Close() renvoie la valeur faux, la fenêtre ne peut pas être fermée. On Validate() exécute son expression, sa fonction ou sa méthode de classe lorsque vous cliquez sur le bouton OK. Si l&apos;expression renvoie la valeur Vrai, la fenêtre est fermée. Sinon, la fenêtre reste ouverte. Return Result modifie la valeur de renvoi de la fenêtre lorsqu&apos;elle se ferme pour correspondre à la fonction obsolète Dialog(). Pour les types de fenêtre qui prennent en charge les barres d&apos;outils, utilisez Show Toolbars pour spécifier les changements par rapport au comportement par défaut. Les options Show Menu et Suppress AutoHide sont pour Windows uniquement. L&apos;option Window View("Invisible") peut servir pour n&apos;importe quelle fenêtre autre qu&apos;une Modal Dialog. Une fenêtre de Type("Script") crée un document JSL sauf si l&apos;option <<Language est spécifiée.

**JMP Version ajoutée :** Avant la version 14

**[Win] Barres d’outils et menus**

```jsl

Names Default To Here( 1 );
// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Boîte de dialogue**

```jsl

Names Default To Here( 1 );

ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Boîte de dialogue modale**

```jsl

Names Default To Here( 1 );

ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Invisible**

```jsl

Names Default To Here( 1 );

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Rapport**

```jsl

Names Default To Here( 1 );
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Script**

```jsl

Names Default To Here( 1 );
script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

**Script Python**

```jsl

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example",
	<<Type( "Script" ),
	<<Language( "Python" ),
	pyscript
);

```

### Number Col Box

**Syntaxe :** y = Number Col Box( title, numbers )

**Description :** Renvoie une boîte d&apos;affichage pour afficher les nombres spécifiés par l’argument numbers, qui peut être une liste ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Syntaxe :** y = Number Col Edit Box( title, numbers )

**Description :** Renvoie une boîte d&apos;affichage pour afficher les nombres spécifiés par l’argument numbers, qui peut être une liste ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table",
		Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) )
	)
);

```

### Number Edit Box

**Syntaxe :** y = Number Edit Box( initValue, &lt;width&gt; )

**Description :** Renvoie une zone d&apos;édition qui n&apos;accepte que les entrées numériques. Spécifier l&apos;argument facultatif  width pour définir la largeur de la zone en caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Outline Box

**Syntaxe :** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Description :** Crée un élément de contour dans le rapport en retournant la référence de boîte d&apos;affichage. Pour inclure un menu dans le nœud de contour, spécifie la liste command script pairs list, indiquant les commandes de menu et les scripts associés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Page Break Box

**Syntaxe :** Page Break Box()

**Description :** Crée une boîte d&apos;affichage forçant un saut de page.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Syntaxe :** y = Panel Box( title, displayBoxArgs )

**Description :** Renvoie une boîte d&apos;affichage pour étiqueter et contenir la boîte d&apos;affichage de l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Picture Box

**Syntaxe :** pict = Picture Box( Picture Object )

**Description :** Crée une boîte d’affichage contenant un objet d’image graphique Vous pouvez ouvrir une image, puis y faire référence ou bien choisir la commande Ouvrir et indiquer le chemin de l’image à la place de l’argument Picture Object.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**Syntaxe :** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Description :** Crée un seg à secteurs à l&apos;origin spécifiée, avec le radius spécifié, basé sur les valeurs spécifiées au format de matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize(
	a = by( :age ),
	c = count,
	sumHt = Sum( :height ),
	sumWt = Sum( :weight )
);
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Platform

**Syntaxe :** y = Platform( dataTable, script )

**Description :** Calcule le script donné dans le contexte de la table de données donnée. Renvoie la boîte d’affichage produite pour l’incorporer dans une arborescence de boîtes d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :height ),
				Sizes( :age ),
				Title Position( 0, 0 )
			)
		),
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :age ),
				Sizes( :height ),
				Title Position( 0, 0 )
			)
		)
	)
);

```

### Plot Col Box

**Syntaxe :** y = Plot Col Box( title, numbers )

**Description :** Renvoie une boîte d’affichage illustrant le graphique correspondant aux nombres. L’argument numbers peut être une liste ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poly Seg

**Syntaxe :** ps = Poly Seg(x values, y values)

**Description :** Renvoie un groupe d’affichage qui représente un polygône avec des sommets basés sur les valeurs x et y passées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**Syntaxe :** y = Popup Box( {label1, script1, ...} )

**Description :** Renvoie une boîte d&apos;affichage avec un menu contextuel défini par des paires étiquette/script.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### Radio Box

**Syntaxe :** y = Radio Box( {item, ...}, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher un ensemble de cases d&apos;option.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Range Slider Box

**Syntaxe :** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Description :** Renvoie une boîte d’affichage avec un curseur de contrôle d&apos;étendue allant de minValue à maxValue. Lorsque les positions des deux curseurs changent, leurs valeurs sont placées dans lowVariable et dans highVariable, et le script est exécuté.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Report

**Syntaxe :** y = Report( platform object )

**Description :** Renvoie une référence à l&apos;arbre d&apos;affichage pour le rapport d&apos;une plate-forme.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**Syntaxe :** box = Scene Box( xsize, ysize )

**Description :** Renvoie une boîte d&apos;affichage pour les graphiques 3D.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Syntaxe :** list = Scene Display List()

**Description :** Renvoie une liste d&apos;affichage pour les graphiques en 3D.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Script Box

**Syntaxe :** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**Description :** Renvoie une boîte d&apos;affichage permettant de modifier un script. Par défaut, l&apos;éditeur a la mise en surbrillance de la syntaxe et le comportement de JSL.

**JMP Version ajoutée :** Avant la version 14

**JSL**

```jsl

Names Default To Here( 1 );
Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Script Python**

```jsl

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Syntaxe :** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**Description :** Renvoie une boîte d’affichage qui positionne une boîte enfant plus grande avec des barres de défilement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Set Global Window Handler

**Syntaxe :** Set Global Window Handler( Handler Function )

**Description :** Définit une fonction à appeler chaque fois qu&apos;une nouvelle fenêtre est créée.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Shape Seg

**Syntaxe :** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Description :** Renvoie un seg d&apos;affichage avec une série de formes. Chaque forme dessine un trait le long du chemin spécifié si le remplissage est zéro, ou peint l’intérieur du chemin spécifié si le remplissage est différent de zéro. Le chemin peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin à trois colonnes pour x, y et les drapeaux pour chaque point du chemin. Les valeurs de drapeau sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatives si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### Sheet Part

**Syntaxe :** y = Sheet Part( title, childbox )

**Description :** Renvoie une boîte d&apos;affichage contenant l’argument boîte d&apos;affichage childbox avec un titre donné.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Slider Box

**Syntaxe :** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**Description :** Renvoie une boîte d’affichage avec un curseur de contrôle allant de minValue à maxValue. Lorsque la position du curseur change, sa valeur est placée dans variable et le script est exécuté.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### Spacer Box

**Syntaxe :** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**Description :** Renvoie une boîte d’affichage utilisable pour maintenir un espace entre d’autres boîtes d’affichage ou pour remplir une cellule dans une Lineup Box. Les arguments Size sont exprimés en pixels et l’argument Color est une couleur quelconque admise par JSL.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Spin Box

**Syntaxe :** y = Spin Box( &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage permettant d&apos;afficher un bouton avec les commandes monter/descendre. L&apos;argument script est invoqué avec un argument qui indique la direction de la flèche qui a été cliquée (moins correspond à descendre, plus correspond à monter). La valeur 1 indique un seul clic, alors que de plus grandes valeurs peuvent être utilisées pour indiquer une action répétitive.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### String Col Box

**Syntaxe :** y = String Col Box( title, {strings} )

**Description :** Renvoie une boîte d&apos;affichage illustrant les chaînes spécifiées par l’argument strings, qui est une liste de chaînes de caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Syntaxe :** y = String Col Edit Box( title, {strings} )

**Description :** Renvoie une boîte d&apos;affichage illustrant les chaînes spécifiées par l’argument strings, qui est une liste de chaînes de caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table",
		Table Box( seb = String Col Edit Box( "names", {a, b, c} ) )
	)
);

```

### Tab Box

**Syntaxe :** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Description :** Crée un panneau de page tabulée dans une fenêtre Boîte d&apos;affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Syntaxe :** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**Description :** Renvoie une boîte d&apos;affichage qui peut être utilisée dans une Tab Box ou comme conteneur autonome avec un titre. Les options reconnues incluent Title(chaîne) pour spécifier un titre, Tip(chaîne) pour spécifier une info-bulle, Closeable(0|1) pour spécifier si la page peut être fermée, Icon(chaîne) pour spécifier l&apos;icône, et Moveable(0|1) pour spécifier si la page peut être déplacée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		tp = Tab Page Box(
			Title( "alpha" ),
			Panel Box( "panel", Text Box( "text" ) )
		),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Syntaxe :** y = Table Box( displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui compose un tableau des boîtes d&apos;affichage des colonnes String Col Box, Number Col Box et Plot Col Box fournies par les arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Text Box

**Syntaxe :** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**Description :** Construit une boîte d&apos;affichage contenant le texte de la chaîne text. Les arguments facultatifs permettent de gérer la justification du texte ou de définir la largeur du retour chariot du texte. L’argument Justify Text doit être une chaîne contenant left, right ou center.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box(
				"Text implicitly justified over multiple lines:",
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Edit Box

**Syntaxe :** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**Description :** Construit une boîte éditable qui contient le texte de la chaîne entre guillemets text, en retournant la référence de boîte d&apos;affichage. Les arguments facultatifs sont disponibles pour contrôler l&apos;affichage du texte, joindre un script à la boîte de texte et définir la largeur en pixels de la boîte de texte. En spécifiant Set Width(-1), vous forcez un redimensionnement du contenu. Notez qu’un script peut être joint à la boîte de texte en l’ajoutant en tant qu’argument facultatif ou en envoyant le message Set Script.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "",
				Password Style( 1 ),
				Set Script( Print( "changed!" ) )
			)
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Seg

**Syntaxe :** seg = Text Seg("text")

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	ts1 = Text Seg( "default location fixed bottom left" )
);

```

### This Project

**Syntaxe :** project = this project()

**Description :** Dans un projet, renvoie l&apos;objet de projet correspondant. En dehors d&apos;un projet ne renvoie rien.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Tree Box

**Syntaxe :** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**Description :** Construit une boîte d’affichage pour afficher les informations hiérarchiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Syntaxe :** node = Tree Node( &lt;label&gt; )

**Description :** Construit un nœud d’arborescence destiné à l’affichage dans une boîte d’arborescence.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Syntaxe :** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Description :** Renvoie un objet contenant la triangulation de Delaunay de l&apos;ensemble de points donné. La moyenne de la valeur de Y (en option) est calculée pour les points dupliqués, et tous les points de la sortie sont uniques.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**Syntaxe :** y = UnLineup Box(displayBoxArgs, ... )

**Description :** Renvoie une boîte d&apos;affichage qui suspend temporairement la mise en page de colonne d&apos;une boîte d&apos;alignement. L&apos;enfant d&apos;une boîte de désalignement sera étendu pour couvrir toutes les colonnes de la boîte d&apos;alignement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### V Center Box

**Syntaxe :** y = V Center Box( &lt;childbox&gt; )

**Description :** Renvoie une boîte d&apos;affichage contenant l&apos;argument boîte d&apos;affichage childbox centré sur l&apos;espace vertical défini par la taille maximale de cette boîte enfant et de toutes les boîtes sœurs de la boîte centrale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V List Box

**Syntaxe :** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page verticale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument optionnel Align permet d’aligner à right ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	)
);

```

### V Scroll Box

**Syntaxe :** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**Description :** Renvoie une boîte d’affichage qui positionne une boîte enfant plus grande avec une barre de défilement verticale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Syntaxe :** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page verticale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument optionnel Align permet d’aligner à right ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Splitter Box

**Syntaxe :** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui permet d&apos;organiser d&apos;autres boîtes d&apos;affichage verticalement, avec un contrôle interactif des tailles. Les tailles enfant sont spécifiées sous la forme d&apos;une proportion de la largeur ou de la hauteur de la Splitter Box. L&apos;argument facultatif Size n&apos;est utilisé que pour la Splitter Box de premier niveau ; les boîtes de niveau inférieur sont dimensionnées comme toute autre boîte enfant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**Syntaxe :** wb = Web Browser Box( url )

**Description :** Renvoie une boîte d’affichage visualisant une page web, indiquée par un argument chaîne de caractères url.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Window

**Syntaxe :** y = Window( &lt;string|int&gt; )

**Description :** Cette fonction est obsolète et conservée uniquement pour la rétrocompatibilité avec les scripts existants. Pour les nouveaux scripts, utilisez Get Window() ou Get Window List().

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Window( "Big Class" );

```

### With Window Handler

**Syntaxe :** With Window Handler( JSL Code, Handler Function )

**Description :** Exécute un bloc de code avec une fonction à appeler chaque fois qu&apos;une nouvelle fenêtre est créée.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Wrap List Box

**Syntaxe :** y = Wrap List Box( displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page horizontale, mais effectuera un retour chariot de la liste lors de l&apos;impression.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

