# Display3DBox



## Constructeurs associés

### Graph 3D Box

**Syntaxe :** y = Graph 3D Box()

**Description :** Envoie les commandes d’affichage au graphique 3D.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## Messages d'éléments

### Add Ellipsoid

**Syntaxe :** obj << Add Ellipsoid( 4x4 matrix )

obj << Add Ellipsoid(3x3 cov,3x1 means)

obj << Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Description :** Dessine un ellipsoïde sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

### Add Markers

**Syntaxe :** obj << Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Description :** Dessine n marqueurs sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

### Add Vector

**Syntaxe :** obj << Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Description :** Dessine un vecteur ou une flèche sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) )
);

```

### Get Axes

**Syntaxe :** obj << Get Axes

**Description :** Renvoie l’état de l’affichage des axes sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Axes );
Show( s );

```

### Get Box

**Syntaxe :** obj << Get Box

**Description :** Renvoie l’état de l’affichage du cadre de la boîte sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Grab Handles

**Syntaxe :** obj << Get Grab Handles

**Description :** Renvoie l’état de l’affichage des poignées d’accrochage sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Graph Size

**Syntaxe :** obj << Get Graph Size

**Description :** Renvoie la taille du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Graph Size );
Show( s );

```

### Get Grids

**Syntaxe :** obj << Get Grids

**Description :** Renvoie l’état de l’affichage des grilles sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Grids );
Show( s );

```

### Get Hide Lights Border

**Syntaxe :** obj << Get Hide Lights Border

**Description :** Renvoie l’état de la brodure de lumière tout autour du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

### Get Line Scale

**Syntaxe :** obj << Get Line Scale

**Description :** Renvoie la largeur de trait du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
w = obj << Frame3D( Get Line Scale );
Show( w );

```

### Get Marker Quality

**Syntaxe :** obj << Get Marker Quality

**Description :** Renvoie les caractéristiques du marqueur appliqué au graphique, forme et ombre par exemple.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

### Get Marker Scale

**Syntaxe :** obj << Get Marker Scale

**Description :** Renvoie la taille du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

### Get Marker Transparency

**Syntaxe :** obj << Get Marker Transparency

**Description :** Renvoie la transparence du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

### Get Rotation

**Syntaxe :** obj << Get Rotation

**Description :** Renvoie la rotation actuelle du cadre.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Frame3D( Get Rotation() );
Show( r );

```

### Get Text Scale

**Syntaxe :** obj << Get Text Scale

**Description :** Renvoie la taille du texte du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Text Scale );
Show( s );

```

### Get View Ortho

**Syntaxe :** obj << Get View Ortho

**Description :** Renvoie l’état de la vue orthographique du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
o = obj << Frame3D( Get View Ortho );
Show( o );

```

### Get View Perspective

**Syntaxe :** obj << Get View Perspective

**Description :** Renvoie l’affichage de la perspective du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Get View Perspective );
Show( p );

```

### Get View Zoom

**Syntaxe :** obj << Get View Zoom

**Description :** Renvoie le zoom actuel du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Frame3D( Get View Zoom );
Show( z );

```

### Get Wall Color

**Syntaxe :** obj << Get Wall Color

**Description :** Renvoie la couleur de fond du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Wall Color );
Show( c );

```

### Get Walls

**Syntaxe :** obj << Get Walls

**Description :** Renvoie l’état de l’affichage des murs sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Walls );
Show( s );

```

### Get X Axis Color

**Syntaxe :** obj << Get X Axis Color

**Description :** Renvoie la couleur de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

### Get X Axis Label

**Syntaxe :** obj << Get X Axis Label

**Description :** Renvoie l’étiquette de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

### Get Y Axis Color

**Syntaxe :** obj << Get Y Axis Color

**Description :** Renvoie la couleur de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

### Get Y Axis Label

**Syntaxe :** obj << Get Y Axis Label

**Description :** Renvoie l’étiquette de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

### Get Z Axis Color

**Syntaxe :** obj << Get Z Axis Color

**Description :** Renvoie la couleur de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

### Get Z Axis Label

**Syntaxe :** obj << Get Z Axis Label

**Description :** Définit l’étiquette de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

### Set Axes

**Syntaxe :** obj << Set Axes( state=0|1 )

**Description :** Affiche ou masque les axes X, Y, et Z sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Axes( 1 ) );

```

### Set Box

**Syntaxe :** obj << Set Box( state=0|1 )

**Description :** Affiche ou masque le cadre de la boîte sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Box( 1 ) );

```

### Set Graph Size

**Syntaxe :** obj << Set Graph Size( x, y )

**Description :** Définit la taille du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

### Set Grids

**Syntaxe :** obj << Set Grids( state=0|1 )

**Description :** Affiche ou masque les grilles sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Grids( 1 ) );

```

### Set Hide Lights Border

**Syntaxe :** obj << Set Hide Lights Border( state=0|1 )

**Description :** Masque ou affiche la brodure de lumière tout autour du graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

### Set Line Scale

**Syntaxe :** obj << Set Line Scale( number )

**Description :** Définit la largeur de trait de la grille sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Line Scale( 6.5 ) );

```

### Set Marker Quality

**Syntaxe :** obj << Set Marker Quality( number )

**Description :** Définit les caractéristiques du marqueur appliqué au graphique, forme et ombre par exemple.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

### Set Marker Scale

**Syntaxe :** obj << Set Marker Scale( number )

**Description :** Définit la taille du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

### Set Marker Transparency

**Syntaxe :** obj << Set Marker Transparency( fraction )

**Description :** Définit la transparence du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

### Set Oscillation

**Syntaxe :** obj << Set Oscillation( X, Y, Z, duration )

**Description :** Définit le taux d’oscillation sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

### Set Rotation

**Syntaxe :** obj << Set Rotation( X, Y, Z )

**Description :** Fait pivoter le cadre jusqu’à atteindre les coordonnées spécifiées.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

### Set Spin

**Syntaxe :** obj << Set Spin(  dx, dy, sx, sy  )

**Description :** Fait tourner le graphique autour d’un axe spécifié. Les valeurs dx et dy représentent le déplacement différentiel de la souris partant du point, (sx, sy).

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

### Set Text Scale

**Syntaxe :** obj << Set Text Scale( number )

**Description :** Définit la taille du texte de l’axe sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Text Scale( 1.4 ) );

```

### Set View Ortho

**Syntaxe :** obj << Set View Ortho( state=0|1 )

**Description :** Affiche le graphique de manière orthographique ou linéaire.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Ortho( 1 ) );

```

### Set View Perspective

**Syntaxe :** obj << Set View Perspective( fraction )

**Description :** Définit l’affichage de la perspective sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Perspective( 0.275 ) );

```

### Set View Zoom

**Syntaxe :** obj << Set View Zoom( number )

**Description :** Définit le zoom sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

### Set Wall Color

**Syntaxe :** obj << Set Wall Color( number )

**Description :** Définit la couleur de fond du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Wall Color( -16775543 ) );

```

### Set Walls

**Syntaxe :** obj << Set Walls( state=0|1 )

**Description :** Affiche ou masque les murs sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Walls( 1 ) );

```

### Set X Axis Color

**Syntaxe :** obj << Set X Axis Color( color )

**Description :** Définit la couleur de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Color( 5 ) );

```

### Set X Axis Label

**Syntaxe :** obj << Set X Axis Label( string )

**Description :** Définit l’étiquette de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

### Set Y Axis Color

**Syntaxe :** obj << Set Y Axis Color( color )

**Description :** Définit la couleur de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Color( 11 ) );

```

### Set Y Axis Label

**Syntaxe :** obj << Set Y Axis Label( string )

**Description :** Définit l’étiquette de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

### Set Z Axis Color

**Syntaxe :** obj << Set Z Axis Color( color )

**Description :** Définit la couleur de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

### Set Z Axis Label

**Syntaxe :** obj << Set Z Axis Label( string )

**Description :** Définit l’étiquette de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

### XAxis

**Syntaxe :** obj << XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description :** Définit les valeurs de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

### YAxis

**Syntaxe :** obj << YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description :** Définit les valeurs de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

### Z Axis

**Syntaxe :** obj << Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description :** Définit les valeurs de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

### get light active

**Syntaxe :** obj << get light active( light number )

**Description :** Renvoie l’activation de la lumière spécifiée brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

### get light color

**Syntaxe :** obj << get light color( light number )

**Description :** Renvoie la couleur de la lumière spécifiée brillant sur le graphique sous forme de liste {red, green, blue}.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

### get light position

**Syntaxe :** obj << get light position( light number )

**Description :** Renvoie la position de la lumière spécifiée brillant sur le graphique sous forme de liste {x, y, z}.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

### set light active

**Syntaxe :** obj << set light active( light number, state=0|1 )

**Description :** Allume la lumière spécifiée brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

### set light color

**Syntaxe :** obj << set light color( light number, red value, green value, blue value )

**Description :** Définit la couleur de la lumière brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

### set light position

**Syntaxe :** obj << set light position( light number, X, Y, Z )

**Description :** Définit la position de la lumière brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Set Hide Lights Border( 0 ),
	Set Light Position( 2, -1.5833, 10, 0 )
);

```

