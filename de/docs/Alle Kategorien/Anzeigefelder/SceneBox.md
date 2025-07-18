# SceneBox



## Elementmeldungen

### ArcBall

**Syntax:** obj &lt;&lt; ArcBall( list,radius )

**Beschreibung:** Zeichnet die Objekte in der angegebenen Liste, die durch Linksklick und Ziehen gedreht werden können.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Update;

```

### Background Color

**Syntax:** obj &lt;&lt; Background Color( red, green, blue )

**Beschreibung:** Legt die Hintergrundfarbe des Szenenfelds fest.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );

```

### Begin

**Syntax:** obj &lt;&lt; Begin

**Beschreibung:** Gibt den Anfangspunkt eines primitive an. Verwendet den OpenGL-Befehl glBegin.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### BlendFunc

**Syntax:** obj &lt;&lt; BlendFunc( source factor,destination factor )

**Beschreibung:** Legt die Funktionen für Blending fest. Verwendet den OpenGL-Befehl glBlendFunc.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Enable( Blend );
shape << BlendFunc( SRC_ALPHA, ONE_MINUS_SRC_ALPHA );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
shape << Disable( Blend );
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### CallList

**Syntax:** obj &lt;&lt; CallList( list )

**Beschreibung:** Zeichnet die Objekte in der angegebenen Liste. Verwendet den OpenGL-Befehl glCallList.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Disk( .5, 1, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### Clear

**Syntax:** obj &lt;&lt; Clear

**Beschreibung:** Löscht die Szene bis auf die Hintergrundfarbe.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second", scene );
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### ClipPlane

**Syntax:** obj &lt;&lt; ClipPlane( clip_plane0|clip_plane1|clip_plane2|clip_plane3|clip_plane4|clip_plane5,x,y,z,d )

**Beschreibung:** Erstellt eine clipping plane. Verwendet den OpenGL-Befehl glClipPlane.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << enable( CLIP_PLANE0 );
scene << ClipPlane( CLIP_PLANE0, 1, 1, 0, 0 );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Disable( CLIP_PLANE0 );
scene << Update;

```

### Color

**Syntax:** obj &lt;&lt; Color( r,g,b,&lt;a&gt; )

**Beschreibung:** Legt die Farbe fest. Damit die Alpha-Schicht funktioniert, muss Blending aktiviert sein. Verwendet den OpenGL-Befehl glColor.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Enable( Blend );
shape << BlendFunc( SRC_ALPHA, ONE_MINUS_SRC_ALPHA );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
shape << Disable( Blend );
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### ColorMask

**Syntax:** obj &lt;&lt; ColorMask( red=0|1,green=0|1,blue=0|1,alpha=0|1 )

**Beschreibung:** Wendet eine Farbmaske auf die nachfolgenden Objekte an. Verwendet den OpenGL-Befehl glColorMask.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.0, 0.0 );
shape << Material( Front, Ambient, 0, 1, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << ColorMask( 1, 1, 0, 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### ColorMaterial

**Syntax:** obj &lt;&lt; ColorMaterial( Front|Back|Front_And_Back,Emission|Ambient|Diffuse|Specular|Ambient_And_Diffuse )

**Beschreibung:** Wendet eine color material auf die nachfolgenden Objekte an. Verwendet den OpenGL-Befehl glColorMaterial.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color Material( Front_And_Back, Ambient );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### CullFace

**Syntax:** obj &lt;&lt; CullFace( front|back|front_and_back )

**Beschreibung:** Legt fest, wo Culling aktiviert werden soll. Verwendet den OpenGL-Befehl glCullFace.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( CULL_FACE );
shape << CullFace( Front );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( CULL_FACE );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Cylinder

**Syntax:** obj &lt;&lt; Cylinder( base radius,top radius,height,slices,stacks )

**Beschreibung:** Erstellt einen Zylinder. Verwendet den OpenGL-Hilfsbefehl gluCylinder.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### DepthFunc

**Syntax:** obj &lt;&lt; DepthFunc( nevert|lesst|equalt|lequalt|greatert|notequalt|gequalt|always )

**Beschreibung:** Legt die Tiefenfunktion für Tiefenpuffervergleiche fest. Verwendet den OpenGL-Befehl glDepthFunc.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthFunc( never );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### DepthMask

**Syntax:** obj &lt;&lt; DepthMask( state=0|1 )

**Beschreibung:** Legt fest, ob in den Tiefenpuffer geschrieben werden kann oder nicht. Verwendet den OpenGL-Befehl glDepthMask.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthMask( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### DepthRange

**Syntax:** obj &lt;&lt; DepthRange( near,far )

**Beschreibung:** Legt den nahen und entfernten Tiefenbereich fest. Alles außerhalb dieses Bereichs wird nicht gezeichnet. Verwendet den OpenGL-Befehl glDepthRange.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthRange( 1, 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Disable

**Syntax:** obj &lt;&lt; Disable

**Beschreibung:** Deaktiviert verschiedene OpenGL-Fähigkeiten. Verwendet den OpenGL-Befehl glDisable.

**JMP Version hinzugefügt:** 16

```jsl

showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### Disk

**Syntax:** obj &lt;&lt; Disk( inner radius,outer radius,slices,rings )

**Beschreibung:** Erstellt eine Scheibe. Verwendet den OpenGL-Hilfsbefehl gluDisk.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Disk( .5, 1, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Enable

**Syntax:** obj &lt;&lt; Enable

**Beschreibung:** Aktiviert verschiedene OpenGL-Fähigkeiten. Verwendet den OpenGL-Befehl glEnable.

**JMP Version hinzugefügt:** 16

```jsl

showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### End

**Syntax:** obj &lt;&lt; End

**Beschreibung:** Gibt den Endpunkt eines primitive an. Verwendet den OpenGL-Befehl glEnd.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### EvalCoord1

**Syntax:** obj &lt;&lt; EvalCoord1( u )

**Beschreibung:** Wertet die eindimensionale Karte aus. Verwendet den OpenGL-Befehl glEvalCoord1d.

**JMP Version hinzugefügt:** 16

```jsl

NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = Random Uniform() - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
curve = Scene Box( 500, 400 );
curve << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
curve << Enable( MAP1_VERTEX_3 );
curve << Ortho2D( -.6, .6, -.6, .6 );
curve << Color( 0, 0, 1 );
curve << Begin( line_strip );
For( i = 0, i <= 30, i++,
	curve << EvalCoord1( i / 30 )
);
curve << End();
curve << Disable( MAP1_VERTEX_3 );
New Window( "Example", curve );

```

### EvalCoord2

**Syntax:** obj &lt;&lt; EvalCoord2( u,v )

**Beschreibung:** Wertet die zweidimensionale Karte aus. Verwendet den OpenGL-Befehl glEvalCoord2d.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 10;
npoints = 16;
imax = 8;
jmax = 20;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << color( 0, 0, 1 );
For( i = 0, i <= imax, i++,
	surface << begin( LINE_STRIP );
	For( j = 0, j <= jmax, j++,
		surface << EvalCoord2( j / jmax, i / imax )
	);
	surface << End();
	surface << Begin( LINE_STRIP );
	For( j = 0, j < jmax, j++,
		surface << EvalCoord2( i / imax, j / jmax )
	);
	surface << End();
);
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << CallList( surface );
sb << backgroundcolor( "white" );
New Window( "Example", sb );

```

### EvalMesh1

**Syntax:** obj &lt;&lt; EvalMesh1( mode,i1,i2 )

**Beschreibung:** Wertet das eindimensionale mesh aus. Verwendet den OpenGL-Befehl glEvalMesh1.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### EvalMesh2

**Syntax:** obj &lt;&lt; EvalMesh2( mode,i1,i2,j1,j2 )

**Beschreibung:** Wertet das zweidimensionale mesh aus. Verwendet den OpenGL-Befehl glEvalMesh2.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### EvalPoint1

**Syntax:** obj &lt;&lt; EvalPoint1( i )

**Beschreibung:** Wertet einen einzelnen Punkt im eindimensionalen mesh aus. Verwendet den OpenGL-Befehl glEvalPoint1.

**JMP Version hinzugefügt:** 16

```jsl

NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = Random Uniform() - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
curve = Scene Box( 500, 400 );
curve << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
curve << Enable( MAP1_VERTEX_3 );
curve << Ortho2D( -.6, .6, -.6, .6 );
curve << Color( 0, 0, 1 );
curve << Begin( line_strip );
For( i = 0, i <= 60, i++,
	curve << EvalPoint1( i )
);
curve << End();
curve << Disable( MAP1_VERTEX_3 );
New Window( "Example", curve );

```

### EvalPoint2

**Syntax:** obj &lt;&lt; EvalPoint2( i,j )

**Beschreibung:** Wertet einen einzelnen Punkt im zweidimensionalen mesh aus. Verwendet den OpenGL-Befehl glEvalPoint2.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 10;
npoints = 16;
imax = 8;
jmax = 20;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
curves = Scene Display List();
curves << Enable( MAP2_VERTEX_3 );
curves << Enable( Auto_Normal );
curves << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
curves << color( 0, 0, 1 );
For( i = 0, i <= imax, i++,
	curves << begin( LINE_STRIP );
	For( j = 0, j <= jmax, j++,
		curves << EvalCoord2( j / jmax, i / imax )
	);
	curves << End();
	curves << Begin( LINE_STRIP );
	For( j = 0, j < jmax, j++,
		curves << EvalPoint2( i, j )
	);
	curves << End();
);
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << CallList( curves );
sb << backgroundcolor( "white" );
New Window( "Example", sb );

```

### Fog

**Syntax:** obj &lt;&lt; Fog( fog_mode|fog_density|fog_start|fog_end|fog_index|fog_color,p1,&lt;p2&gt;,&lt;p3&gt;,&lt;p4&gt; )

**Beschreibung:** Erstellt fog. Verwendet den OpenGL-Befehl glFog.

**JMP Version hinzugefügt:** 16

```jsl

showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### Frame

**Syntax:** obj &lt;&lt; Frame( x0,x1,y0,y1,z0,z1,farside )

**Beschreibung:** Zeichnet einen Rahmen.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << frame( -0.2, 0.2, -0.2, 0.2, 0.0, 0.0, 1 );
scene << frame( -0.4, 0.4, -0.4, 0.4, 0.0, 0.0, 1 );
scene << frame( -0.6, 0.6, -0.6, 0.6, 0.0, 0.0, 1 );
scene << frame( -0.8, 0.8, -0.8, 0.8, 0.0, 0.0, 1 );

```

### FrontFace

**Syntax:** obj &lt;&lt; FrontFace( cw|ccw )

**Beschreibung:** Legt fest, welche Polygone nach vorn oder hinten ausgerichtet sind. Diese Funktion wird beim Objekt-Culling eingesetzt. Verwendet den OpenGL-Befehl glFrontFace.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( CULL_FACE );
shape << CullFace( Front );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( CULL_FACE );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << frontface( cw );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Frustum

**Syntax:** obj &lt;&lt; Frustum( left,right,bottom,top,near,far )

**Beschreibung:** Legt die Parameter für die Kamera fest. Verwendet den OpenGL-Befehl glFrustum.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Frustum( -3, 1, -1, 1, 2, 9 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Get Background Color

**Syntax:** color = obj &lt;&lt; Get Background Color

**Beschreibung:** Gibt die Hintergrundfarbe des Szenenfelds zurück.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );
scene << Get Background Color();

```

### Get Show ArcBall

**Syntax:** obj &lt;&lt; Get Show ArcBall

**Beschreibung:** Gibt den Anzeigezustand von ArcBall zurück.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Show ArcBall( always );
scene << Update;
scene << Get Show ArcBall();

```

### Get Width

**Syntax:** pixels = obj &lt;&lt; Get Width

**Beschreibung:** Gibt die Breite des Felds zurück.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Get Width();

```

### Height

**Syntax:** obj &lt;&lt; Height( pixels )

**Beschreibung:** Legt die Höhe des Felds fest.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Height( 150 );

```

### Light

**Syntax:** obj &lt;&lt; Light( light0|light1|light2|light3|light4|light5|light6|light7,ambient|diffuse|specular|position,x|r,y|g,z|b,&lt;a&gt; )

**Beschreibung:** Erstellt eine Lichtquelle mit den angegebenen Parametern. Verwendet den OpenGL-Befehl glLight.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Light( Light0, Ambient, 0, 0, 1, 1 );
scene << Light( Light0, Diffuse, 0, 1, 1, 1 );
scene << Light( Light0, Specular, 1, 1, 0, 1 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### LightModel

**Syntax:** obj &lt;&lt; LightModel( light_model_ambient|light_model_local_viewer|light_model_two_side,r,g,b,a )

**Beschreibung:** Legt die Parameter für das light model fest. Verwendet den OpenGL-Befehl glLightModel.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Light Model( light_model_ambient, 0.2, 0, 0.5, 1 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### LineStipple

**Syntax:** obj &lt;&lt; LineStipple( factor,pattern )

**Beschreibung:** Legt das Zeilenstichmuster fest. Verwendet den OpenGL-Befehl glLineStipple.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << LineWidth( 4 );
scene << color( 0, 0, 0 );
scene << Enable( LINE_STIPPLE );
scene << LineStipple( 2, 01101010 );
scene << Begin( LINES );
scene << Vertex( -.8, 0, 0 );
scene << Vertex( .8, 0, 0 );
scene << End();
scene << Disable( LINE_STIPPLE );

```

### LineWidth

**Syntax:** obj &lt;&lt; LineWidth( width )

**Beschreibung:** Legt die Breite der Linie fest. Verwendet den OpenGL-Befehl glLineWidth.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << LineWidth( 1 );
scene << Begin( LINES );
scene << color( 0, 0, 0 );
scene << Vertex( -.4, 0.04, 0 );
scene << Vertex( .4, 0.04, 0 );
scene << End();
scene << LineWidth( 4 );
scene << Begin( LINES );
scene << Vertex( -.4, -0.04, 0 );
scene << Vertex( .4, -0.04, 0 );
scene << End();

```

### LoadIdentity

**Syntax:** obj &lt;&lt; LoadIdentity

**Beschreibung:** Legt identity matrix als aktuelle Matrix fest. Verwendet den OpenGL-Befehl glLoadIdentity.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
scene << LoadIdentity;
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### LoadMatrix

**Syntax:** obj &lt;&lt; LoadMatrix( matrix )

**Beschreibung:** Legt die angegebene Matrix als aktuelle Matrix fest. Verwendet den OpenGL-Befehl glLoadMatrix.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
identitymatrix = [1 0 0 0, 0 1 0 0, 0 0 1 0, 0 0 0 1];
scene << LoadMatrix( identitymatrix );
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### LoadName

**Syntax:** obj &lt;&lt; LoadName( i )

**Beschreibung:** Mit picker verwenden, zum Laden der ganzen Zahl, die das nachfolgende Objekt identifiziert. Verwendet den OpenGL-Befehl glLoadName.

**JMP Version hinzugefügt:** 16

```jsl

spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### LookAt

**Syntax:** obj &lt;&lt; LookAt( eye x,eye y,eye z,center x,center y,center z,up x,up y,up z )

**Beschreibung:** Legt den Ort für die Kamera fest. Verwendet den OpenGL-Hilfsbefehl gluLookAt.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 20 );
scene << LookAt( 1, 0, 7, 0, 0, 0, 0, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Map1

**Syntax:** obj &lt;&lt; Map1( target,u1,u2,stride,order,points )

**Beschreibung:** Definiert einen eindimensionalen Bewerter. Verwendet den OpenGL-Befehl glMap1d.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### Map2

**Syntax:** obj &lt;&lt; Map2( target,u1,u2,ustride,uorder,v1,v2,vstride,vorder,points )

**Beschreibung:** Definiert einen zweidimensionalen Bewerter. Verwendet den OpenGL-Befehl glMap2d.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### MapGrid1

**Syntax:** obj &lt;&lt; MapGrid1( un,u1,u2 )

**Beschreibung:** Definiert ein eindimensionales mesh. Verwendet den OpenGL-Befehl glMapGrid1d.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### MapGrid2

**Syntax:** obj &lt;&lt; MapGrid2( un,u1,u2,vn,v1,v2 )

**Beschreibung:** Definiert ein zweidimensionales mesh. Verwendet den OpenGL-Befehl glMapGrid2d.

**JMP Version hinzugefügt:** 16

```jsl

gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### Material

**Syntax:** obj &lt;&lt; Material

**Beschreibung:** Gibt die Art des Materials für die nachfolgenden Objekte an. Verwendet den OpenGL-Befehl glMaterial.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### MatrixMode

**Syntax:** obj &lt;&lt; MatrixMode( modelview|projection|texture )

**Beschreibung:** Legt die zu verwendende Matrix fest. Verwendet den OpenGL-Befehl glMatrixMode.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
scene << MatrixMode( projection );
scene << LoadIdentity;
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### MultMatrix

**Syntax:** obj &lt;&lt; MultMatrix( matrix )

**Beschreibung:** Multipliziert die aktuelle Matrix mit der angegebenen Matrix. Verwendet den OpenGL-Befehl glMultMatrix.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 1.0, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
matrix = [1.5 0 0 0, 0 1 0 0, 0 0 1 0, 0 0 0 1];
scene << MultMatrix( matrix );
scene << CallList( shape );
scene << update;

```

### Normal

**Syntax:** obj &lt;&lt; Normal( x,y,z )

**Beschreibung:** Legt current normal fest. Verwendet den OpenGL-Befehl glNormal.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << LightModel( LIGHT_MODEL_TWO_SIDE, 1 );
shape << Color( 0, 0.0, 0.0 );
shape << Material( Front_and_back, Ambient, 0, 1, 1, 1 );
shape << Material( Front_and_back, Diffuse, 0, 1, 1, 1 );
shape << Material( Front_and_back, Specular, 0, 1, 0, 1 );
shape << Material( Front_and_back, Emission, 0, 0, 0, 1 );
shape << Material( Front_and_back, Shininess, 100 );
shape << Begin( POLYGON );
shape << Normal( 0, 0, 1 );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Ortho

**Syntax:** obj &lt;&lt; Ortho( left,right,bottom,top,near,far )

**Beschreibung:** Legt für die Szene eine orthogonale Ansicht fest. Verwendet den OpenGL-Befehl glOrtho.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -0.5, 0.5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### Ortho2D

**Syntax:** obj &lt;&lt; Ortho2D( left,right,bottom,top )

**Beschreibung:** Legt für die Szene eine orthogonale 2D-Ansicht fest. Verwendet den OpenGL-Hilfsbefehl gluOrtho2d.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << Shade Model( SMOOTH );
scene << Begin( TRIANGLES );
scene << color( 1, 0, 0 );
scene << Vertex( -1, -1, 0 );
scene << Color( 0, 1, 0 );
scene << Vertex( 0, 1, 0 );
scene << Color( 0, 0, 1 );
scene << Vertex( 1, -1, 0 );
scene << End();
scene << Update;

```

### PartialDisk

**Syntax:** obj &lt;&lt; PartialDisk( inner radius,outer radius,slices,rings,start angle,sweep angle )

**Beschreibung:** Erstellt eine partielle Scheibe. Verwendet den OpenGL-Hilfsbefehl gluPartialDisk.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << PartialDisk( 0.5, 1, 2, 3, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Perspective

**Syntax:** obj &lt;&lt; Perspective( angle,z near,z far )

**Beschreibung:** Legt die Perspektive der Ansicht fest. Verwendet den OpenGL-Hilfsbefehl gluPerspective.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Pick

**Syntax:** name = obj &lt;&lt; Pick( x center,y center,pick width,pick height,buffer size,only return the names=0|1 )

**Beschreibung:** Gibt das benannte Objekt zurück, das sich unter den 2D-Koordinaten der Maus befindet.

**JMP Version hinzugefügt:** 16

```jsl

spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### PointSize

**Syntax:** obj &lt;&lt; PointSize( size )

**Beschreibung:** Legt die Größe eines Punkts fest. Verwendet den OpenGL-Befehl glPointSize.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << pointsize( 1 );
scene << Begin( POINTS );
scene << color( 0, 0, 0 );
scene << Vertex( -.08, 0.04, 0 );
scene << Vertex( -.04, 0.04, 0 );
scene << Vertex( 0, 0.04, 0 );
scene << Vertex( .04, 0.04, 0 );
scene << Vertex( .08, 0.04, 0 );
scene << End();
scene << pointsize( 2 );
scene << Begin( POINTS );
scene << Vertex( -.08, -0.04, 0 );
scene << Vertex( -.04, -0.04, 0 );
scene << Vertex( 0, -0.04, 0 );
scene << Vertex( .04, -0.04, 0 );
scene << Vertex( .08, -0.04, 0 );
scene << End();

```

### PolygonMode

**Syntax:** obj &lt;&lt; PolygonMode( front|back|front_and_back,point|line|fill )

**Beschreibung:** Legt den Modus für die Rasterung fest. Verwendet den OpenGL-Befehl glPolygonMode.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << PolygonMode( front, line );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -2, 2 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PolygonOffset

**Syntax:** obj &lt;&lt; PolygonOffset( factor,units )

**Beschreibung:** Legt den Offset des Polygons fest. Verwendet den OpenGL-Befehl glPolygonOffset.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 1 );
shape << Color( 0, 0, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -2, 2 );
scene << Enable( Polygon_offset_fill );
scene << PolygonMode( back, point );
scene << ArcBall( shape, 2 );
scene << Disable( Polygon_offset_line );
scene << update;

```

### PopAttrib

**Syntax:** obj &lt;&lt; PopAttrib

**Beschreibung:** Pops die aktuellen Attribute. Verwendet den OpenGL-Befehl glPopAttrib.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0, 1 );
shape << PushAttrib( GL_CURRENT_BIT );
shape << Color( 0, 0, 0 );
shape << Begin( POLYGON );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -2, 0 );
shape << Vertex( -1, -2, 0 );
shape << End;
shape << PopAttrib;
shape << Begin( TRIANGLES );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 1, 0, 0 );
shape << Vertex( 0, 2, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0, 0, -5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PopMatrix

**Syntax:** obj &lt;&lt; PopMatrix

**Beschreibung:** Pops die aktuelle Matrix. Verwendet den OpenGL-Befehl glPopMatrix.

**JMP Version hinzugefügt:** 16

```jsl

object = Scene Display List();
object << PushMatrix;
object << Translate( 0, 0, .1 );
object << Color( 1, 0, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
object << PushMatrix;
object << Translate( 0, 0, -.1 );
object << Rotate( 180, 1, 0, 0 );
object << Color( 0, 1, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << Rotate( -85, 1, 0, 0 );
scene << CallList( object );
scene << Update;

```

### PopName

**Syntax:** obj &lt;&lt; PopName

**Beschreibung:** Mit picker pop die ganze Zahl verwenden, die das nachfolgende Objekt identifiziert. Verwendet den OpenGL-Befehl glPopName.

**JMP Version hinzugefügt:** 16

```jsl

spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### PushAttrib

**Syntax:** obj &lt;&lt; PushAttrib( mask )

**Beschreibung:** Pushes die aktuellen Attribute. Verwendet den OpenGL-Befehl glPushAttrib.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0, 0, 1 );
shape << PushAttrib( GL_CURRENT_BIT );
shape << Color( 0, 0, 0 );
shape << Begin( POLYGON );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -2, 0 );
shape << Vertex( -1, -2, 0 );
shape << End;
shape << PopAttrib;
shape << Begin( TRIANGLES );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 1, 0, 0 );
shape << Vertex( 0, 2, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0, 0, -5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PushMatrix

**Syntax:** obj &lt;&lt; PushMatrix

**Beschreibung:** Pushes die aktuelle Matrix. Verwendet den OpenGL-Befehl glPushMatrix.

**JMP Version hinzugefügt:** 16

```jsl

object = Scene Display List();
object << PushMatrix;
object << Translate( 0, 0, .1 );
object << Color( 1, 0, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
object << PushMatrix;
object << Translate( 0, 0, -.1 );
object << Rotate( 180, 1, 0, 0 );
object << Color( 0, 1, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << Rotate( -85, 1, 0, 0 );
scene << CallList( object );
scene << Update;

```

### PushName

**Syntax:** obj &lt;&lt; PushName( i )

**Beschreibung:** Mit picker push die ganze Zahl verwenden, die das nachfolgende Objekt identifiziert. Verwendet den OpenGL-Befehl glPushName.

**JMP Version hinzugefügt:** 16

```jsl

spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### QuadricDrawStyle

**Syntax:** obj &lt;&lt; QuadricDrawStyle( point|line|silhouette|fill )

**Beschreibung:** Legt den Zeichenstil für Quadriken fest. Verwendet den OpenGL-Hilfsbefehl gluQuadricDrawStyle.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << QuadricDrawStyle( LINE );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricNormals

**Syntax:** obj &lt;&lt; QuadricNormals( none|flat|smooth )

**Beschreibung:** Legt die Art von normals für Quadriken fest. Verwendet den OpenGL-Hilfsbefehl gluQuadricNormals.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << QuadricNormals( FLAT );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricOrientation

**Syntax:** obj &lt;&lt; QuadricOrientation( outside|inside )

**Beschreibung:** Legt die Art der Ausrichtung für Quadriken fest. Verwendet den OpenGL-Hilfsbefehl gluQuadricOrientation.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << QuadricOrientation( INSIDE );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricTexture

**Syntax:** obj &lt;&lt; QuadricTexture

**JMP Version hinzugefügt:** 16

### Rect

**Syntax:** obj &lt;&lt; Rect( x1,y1,x2,y2 )

**Beschreibung:** Erstellt ein Rechteck. Verwendet den OpenGL-Befehl glRect.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Color( 0.5, 0, 0 );
shape << Rect( -0.75, -0.75, 0.5, 0.75 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << CallList( shape );

```

### Rotate

**Syntax:** obj &lt;&lt; Rotate( angle,x,y,z )

**Beschreibung:** Multipliziert die aktuelle Matrix mit dem angegebenen Drehwinkel in Grad. Verwendet den OpenGL-Befehl glRotate.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Rotate( 15, 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scale

**Syntax:** obj &lt;&lt; Scale( x,y,z )

**Beschreibung:** Multipliziert die aktuelle Matrix mit der angegebenen Skalierung. Verwendet den OpenGL-Befehl glScale.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Scale( 2, 1, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scissor

**Syntax:** obj &lt;&lt; Scissor( x,y,width,height )

**Beschreibung:** Nur Elemente, die in der scissor-Ansicht erscheinen, werden gezeichnet. Verwendet den OpenGL-Befehl glScissor.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Color( 1, 0, 0 );
shape << Rect( -0.5, -0.5, 0.5, 0.5 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Scissor( 0, 0, 100, 200 );
scene << Enable( scissor_test );
scene << CallList( shape );
scene << Disable( scissor_test );

```

### ShadeModel

**Syntax:** obj &lt;&lt; ShadeModel( flat|smooth )

**Beschreibung:** Gibt die Art der Schattierung für die nachfolgenden Objekte an. Verwendet den OpenGL-Befehl glShadeModel.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << Shade Model( SMOOTH );
scene << Begin( TRIANGLES );
scene << color( 1, 0, 0 );
scene << Vertex( -1, -1, 0 );
scene << Color( 0, 1, 0 );
scene << Vertex( 0, 1, 0 );
scene << Color( 0, 0, 1 );
scene << Vertex( 1, -1, 0 );
scene << End();
scene << Update;

```

### Show ArcBall

**Syntax:** obj &lt;&lt; Show ArcBall( "Während des Ziehvorgangs"|"Immer"|"Niemals" )

**Beschreibung:** Legt den Anzeigezustand von ArcBall fest.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Show ArcBall( always );
scene << Update;

```

### SortList

**Syntax:** obj &lt;&lt; SortList

**JMP Version hinzugefügt:** 16

### Sphere

**Syntax:** obj &lt;&lt; Sphere( radius,slices,stacks )

**Beschreibung:** Erstellt eine Kugel. Verwendet den OpenGL-Hilfsbefehl gluSphere.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Suppress Context Menu

**Syntax:** obj &lt;&lt; Suppress Context Menu( state=0|1 )

**Beschreibung:** Bewirkt, dass das Kontextmenü des Szenenfelds nicht angezeigt wird.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Update;
scene << Suppress Context Menu( 1 );

```

### Text

**Syntax:** obj &lt;&lt; Text( left|center|right,top|middle|baseline|bottom,size,"string" )

**Beschreibung:** Erstellt Text, der in einem SceneBox gezeigt werden kann.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Translate

**Syntax:** obj &lt;&lt; Translate( x,y,z )

**Beschreibung:** Multipliziert die aktuelle Matrix mit der angegebenen Verschiebung. Verwendet den OpenGL-Befehl glTranslate.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( -0.9, 1.5, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Update

**Syntax:** obj &lt;&lt; Update

**Beschreibung:** Rendert die Szene.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second", scene );
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### Use Hardware Acceleration

**Syntax:** obj &lt;&lt; Use Hardware Acceleration( state=0|1 )

**Beschreibung:** Möglicherweise beschleunigt die Hardwarebeschleunigung die Anzeige. Bei fehlerhafter Anzeige sind möglicherweise neue Grafiktreiber (vom Hardwarehersteller) erforderlich.

**JMP Version hinzugefügt:** 16

```jsl

scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second",
	scene,
	accelButton = Button Box( "Turn Hardware Acceleration On", toggleHardwareAccel() )
);
hardwareAccel = 0;
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
toggleHardwareAccel = Function( {},
	hardwareAccel = !hardwareAccel;
	scene << Use Hardware Acceleration( hardwareAccel );
	If( hardwareAccel,
		accelButton << Set Button Name( "Turn Hardware Acceleration Off" ),
		accelButton << Set Button Name( "Turn Hardware Acceleration On" )
	);
);
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### Vertex

**Syntax:** obj &lt;&lt; Vertex( x,y,z )

**Beschreibung:** Gibt den Eckpunkt eines primitive an.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### Width

**Syntax:** obj &lt;&lt; Width( pixels )

**Beschreibung:** Legt die Breite des Felds fest.

**JMP Version hinzugefügt:** 16

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Width( 150 );

```

## Freigegebene Elementmeldungen

### Add Line Annotation

**Syntax:** obj &lt;&lt; Add Line Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine Linie ein.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj &lt;&lt; Add Pin Annotation

**Beschreibung:** Fügt im Vordergrund eines Anzeigefensters eine angeheftete Anmerkung ein. Die meisten Attribute (wie Index Row, UniqueID and FoundPt) sind nur für interne Zwecke ausgelegt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**Syntax:** obj &lt;&lt; Add Polygon Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters ein Polygon ein.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**Syntax:** obj &lt;&lt; Add Simple Shape Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine einfache Form ein.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntax:** obj &lt;&lt; Add Text Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters Text ein.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**Syntax:** obj &lt;&lt; Append( db2 )

**Beschreibung:** Fügt db2 nach db in den Anzeigebaum ein.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Border

**Syntax:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Beschreibung:** Rahmen sind durchgezogene Linien um das Äußere eines Anzeigefelds. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für horizontale und vertikale Rahmen.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**Syntax:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**Beschreibung:** Optionale Farbe zum Überschreiben der Standardfarbe für Feldrahmen.

**JMP Version hinzugefügt:** 19

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Syntax:** obj &lt;&lt; Bring Window To Front

**Beschreibung:** Zeigt das Fenster im Vordergrund an.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntax:** obj &lt;&lt; Child

**Beschreibung:** Gibt das untergeordnete Element des Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**Syntax:** obj &lt;&lt; Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefenster zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Syntax:** obj &lt;&lt; Clone Box

**Beschreibung:** Erstellt eine neue Kopie des Anzeigefelds.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Syntax:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Beschreibung:** Schließt das Fenster.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntax:** obj &lt;&lt; Copy Data

**Beschreibung:** Kopiert die mit Tabstopp getrennten Daten aus einer Matrix oder Tabelle in die Zwischenablage.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj &lt;&lt; Copy Graph

**Beschreibung:** Legt ein Bild des Graphen und der Achsen in der Zwischenablage ab.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Syntax:** obj &lt;&lt; Copy Picture

**Beschreibung:** Legt ein Bild des Anzeigefelds in der Zwischenablage ab.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Syntax:** obj &lt;&lt; Delete Box

**Beschreibung:** Löscht das Anzeigefeld.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**Syntax:** obj &lt;&lt; Deselect

**Beschreibung:** Wählt dieses Objekt für die Verwendung mit Befehlen aus dem Menü „Bearbeiten“ ab.

```jsl

//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**Syntax:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Beschreibung:** Sendet command an einen spezifischen Teil eines Anzeigebaums.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Find

**Syntax:** obj &lt;&lt; Find

**Beschreibung:** Gibt das Anzeigefeld mit dem vorgegebenen argument zurück

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**Syntax:** obj &lt;&lt; Get Annotation

**Beschreibung:** Gibt die erste Anmerkung zurück, die in diesem Anzeigefeld verankert ist. Auf andere Anmerkungen kann mit Sib() über das Ergebnis zugegriffen werden.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Border

**Syntax:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Beschreibung:** Rahmen sind durchgezogene Linien um das Äußere eines Anzeigefelds. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für horizontale und vertikale Rahmen.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**Syntax:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**Beschreibung:** Optionale Farbe zum Überschreiben der Standardfarbe für Feldrahmen.

**JMP Version hinzugefügt:** 19

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**Syntax:** obj &lt;&lt; Get Content Size

**Beschreibung:** Gibt die Inhaltsgröße innerhalb des Fensters zurück.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Syntax:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Beschreibung:** Ruft einen relativ robusten Ausdruck für die Navigation zwischen parent box und obj ab. Dieser Pfad ist nicht in allen JMP-Versionen garantiert stabil. Der receiver expr wird, sofern angegeben, in den Ausgabeausdruck integriert. Wenn nicht, wird stattdessen der für parent box angegebene Ausdruck verwendet. Wie im Beispiel gezeigt, ist diese Meldung hauptsächlich nützlich, um die Robustheit eines bereits verfügbaren Pfads zu erhöhen. Standard ist der XPath-Modus.

#### Basis

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

#### Indexmodus

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get HTML

**Syntax:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Beschreibung:** Gibt eine Zeichenkette mit dem HTML-Quellcode des Anzeigefelds zurück.

#### Beispiel 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

#### Beispiel 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntax:** width = obj &lt;&lt; Get Height

**Beschreibung:** Gibt die Höhe des Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Syntax:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Syntax:** obj &lt;&lt; Get Journal

**Beschreibung:** Gibt eine Zeichenkette mit dem Journal-Quellcode des Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Syntax:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Beschreibung:** Der Rand fügt Platz zwischen dem Rahmen des Felds und benachbarten Feldern hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Rand.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Syntax:** width,height = obj &lt;&lt; Get Max Size

**Beschreibung:** Gibt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Syntax:** width,height = obj &lt;&lt; Get Min Size

**Beschreibung:** Gibt die Mindestgröße dieses Anzeigefelds zum Zweck der automatischen Streckung zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Syntax:** obj &lt;&lt; Get On Close

**Beschreibung:** Gibt das Skript oder die Funktion zurück, das/die beim Schließen des Fensters ausgeführt wird.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**Syntax:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Beschreibung:** Der Innenabstand fügt Platz zwischen dem Inhalt und dem Rahmen des Felds hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Innenabstand.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntax:** obj &lt;&lt; Get Page Setup

**Beschreibung:** Informationen für die Seiteneinrichtung für PDFs abrufen

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Beschreibung:** Erfasst db als ein Bildobjekt. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

#### Ansicht und Erscheinungsbild

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

#### Skalieren

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### Standard

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

### Get Project

**Syntax:** project = obj &lt;&lt; Get Project()

**Beschreibung:** Gibt das übergeordnete Projekt des Fensters zurück, oder Leer(), wenn sich das Fenster nicht in einem Projekt befindet.

**JMP Version hinzugefügt:** 14

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntax:** obj &lt;&lt; Get Properties

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Eigenschaften und deren Werte des Anzeigefelds enthält.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Syntax:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Beschreibung:** Gibt eine Zeichenkette mit dem RTF-Quellcode des Anzeigefelds zurück.

#### Beispiel 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

#### Beispiel 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntax:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Beschreibung:** Gibt einen Vektor mit der Zeileneigenschaft für jede Zeile in der vorgegebenen Datentabelle oder der aktuellen Datentabelle zurück. Die Zeileneigenschaften können aus der Tabelle oder aus dem Filterkontext des Felds kommen.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**Syntax:** obj &lt;&lt; Get Show Window

**Beschreibung:** Gibt die Sichtbarkeit des Fensters zurück.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Syntax:** width,height = obj &lt;&lt; Get Size

**Beschreibung:** Gibt die Größe des Anzeigefensters zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Syntax:** x,y = obj &lt;&lt; Get Stretch

**Beschreibung:** Gibt die Streckungs-Flags für dieses Anzeigefeld in horizontaler und vertikaler Richtung zurück.

**JMP Version hinzugefügt:** 16

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**Syntax:** obj &lt;&lt; Get Text

**Beschreibung:** Gibt eine Zeichenkette mit dem Text des Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Beschreibung:** Der Text wird in der Textfarbe dargestellt, sofern eine festgelegt ist. Ist die Eigenschaft nicht festgelegt, erbt das Feld die Textfarbe des Containerfelds.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**Syntax:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**Syntax:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Syntax:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Beschreibung:** Die Sichtbarkeit legt fest, ob ein Feld angezeigt wird und ob es Platz benötigt. Der Standardwert "Visible" bedeutet, dass das Objekt angezeigt wird. Ein Objekt vom Typ "Hidden" wird nicht angezeigt, benötigt jedoch trotzdem Platz, während ein Feld vom Typ "Collapsed" keinen Platz im Layout benötigt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Window Icon

**Syntax:** obj &lt;&lt; Get Window Icon

**Beschreibung:** Gibt das Fenstersymbol zurück.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj &lt;&lt; Get Window Position

**Beschreibung:** Gibt die Position des Fensters zurück.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj &lt;&lt; Get Window Size

**Beschreibung:** Gibt die Größe des Fensters zurück.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj &lt;&lt; Get Window Title

**Beschreibung:** Gibt den Fenstertitel zurück.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj &lt;&lt; Get Window View

**Beschreibung:** Gibt die aktuelle Fensteransicht zurück. Fenster können „sichtbar“, „unsichtbar“ oder „privat“ sein.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Beschreibung:** Ruft den Anzeigebaum im XML-Format ab. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, die bei einigen Anzeigebäumen sehr groß sein können.

```jsl

//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj &lt;&lt; GetOffset

**Beschreibung:** Gibt den Offset dieses Anzeigefelds relativ zum übergeordneten Feld zurück. Sie müssen möglicherweise die <<übergeordnete Meldung in einer Schleife verwenden, um mehrere Offsets zu akkumulieren.

```jsl

New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]
					 + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**Syntax:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Inval

**Syntax:** obj &lt;&lt; Inval

**Beschreibung:** Das Anzeigefeld ungültig machen. Das Fenster wird aktualisiert, wenn die Meldung <<UpdateWindow gesendet wird oder das Betriebssystem Zeit für die Aktualisierung hat.

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**Syntax:** obj &lt;&lt; Is Dirty

**Beschreibung:** Ruft den Dokumentstatus „modifiziert“ ab. 1 bedeutet, das Dokument wurde geändert und eine Aufforderung zum Speichern wird angezeigt, 0 bedeutet, das Dokument wurde nicht geändert.

**JMP Version hinzugefügt:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj &lt;&lt; Is Modal Dialog

**Beschreibung:** Gibt „wahr“ zurück, wenn das Fenster ein modales Dialogfeld ist. Nur nützlich bei Aufruf aus einem Fenster-Handler-Rückruf.

```jsl

With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Syntax:** obj &lt;&lt; Journal

**Beschreibung:** Wandelt ein Anzeigefeld in ein Journal um.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntax:** obj &lt;&lt; Journal Window

**Beschreibung:** Öffnet ein Journalfenster des Fensters.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj &lt;&lt; Launch

**Beschreibung:** Wertet das vorgegebene argument im Kontext des Anzeigefelds aus.

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Syntax:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Beschreibung:** Erstellt einen Zeileneigenschafts-Handler für die vorgegebene Datentabelle oder die aktuelle Datentabelle. Die Funktion wird aufgerufen, wenn sich die Zeileneigenschaften im Filterkontext des Felds ändern. Das Argument der Funktion enthält die geänderten Zeilennummern oder -1, wenn sich der Zeileneigenschaftsfilter geändert hat.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**Syntax:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Beschreibung:** Der Rand fügt Platz zwischen dem Rahmen des Felds und benachbarten Feldern hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Rand.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Syntax:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Beschreibung:** Maximiert das Fenster. Das Standardargument ist 1.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Beschreibung:** Minimiert das Fenster. Das Standardargument ist 1.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj &lt;&lt; Move Window( x,y )

**Beschreibung:** Verschiebt das Fenster an die angegebene Position.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj &lt;&lt; Next

**Beschreibung:** Gibt das Anzeigefeld nach diesem Anzeigefeld zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Syntax:** obj &lt;&lt; On Close( script )

**Beschreibung:** Legt ein Skript oder eine Funktion fest, das bzw. die beim Schließen des Fensters ausgeführt wird. Dieses Skript muss 1 zurückgeben, um das Schließen zu gestatten, oder 0, um zu verhindern, dass das Fenster geschlossen wird.

#### Funktion beim Schließen

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

#### Skript beim Schließen

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**Syntax:** obj &lt;&lt; Optimize Display

**Beschreibung:** Legt für die Spaltenbreiten und das Fenster der Datentabelle eine optimale Größe fest.

**JMP Version hinzugefügt:** 14

```jsl

//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntax:** obj &lt;&lt; Pad Window( bool )

**Beschreibung:** Schaltet die Fensteranpassung ein oder aus.

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntax:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Beschreibung:** Der Innenabstand fügt Platz zwischen dem Inhalt und dem Rahmen des Felds hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Innenabstand.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntax:** obj &lt;&lt; Page Break

**Beschreibung:** Fügt einen Seitenumbruch vor dem Anzeigefeld ein.

```jsl

//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Syntax:** obj &lt;&lt; Parent

**Beschreibung:** Gibt das übergeordnete Element dieses Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**Syntax:** obj &lt;&lt; Prepend( db2 )

**Beschreibung:** Fügt db2 vor db in den Anzeigebaum ein.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj &lt;&lt; Prev Sib

**Beschreibung:** Gibt das vorherige Geschwisterelement des Anzeigefelds zurück.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Syntax:** obj &lt;&lt; Print Window

**Beschreibung:** Druckt das Fenster.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**Syntax:** obj &lt;&lt; Reshow

**Beschreibung:** Das Anzeigefeld ungültig machen und das Fenster mit dem neuen Inhalt aktualisieren. Wenn eine bessere Zeitsteuerung der Aktualisierung erforderlich ist, sehen Sie die Meldungen <<Inval und <<UpdateWindow.

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Save Capture

**Syntax:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Beschreibung:** Speichert einen Screenshot des Anzeigefelds im angegebenen path. Ist kein path vorgegeben, wird das Fenster „Speichern unter“ angezeigt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Speichert HTML-Quellcode und Ordner der Grafiken im angegebenen format.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Beschreibung:** Speichert das interaktive HTML-Format mit Daten in einer Datei. Das Argument Boolean stellt den Bericht als statisch dar.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Beschreibung:** Speichert den Journal-Quellcode des Anzeigefelds.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Speichert das Anzeigefeld als Microsoft Word-Dokcument. (Nur Windows)

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Beschreibung:** Speichert eine PDF des Anzeigefelds.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Beschreibung:** Speichert ein Bild des Anzeigefelds. Unterstützte Formate sind EMF (Windows), PICT (Macintosh), JPEG oder JPG, GIF oder PNB. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

#### Ansicht und Erscheinungsbild

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

#### Skalieren

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### Standard

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**Syntax:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Beschreibung:** Speichert die Tabellen und Graphen des Anzeigefelds in einer Präsentation. Die Präsentation kann mit Microsoft PowerPoint oder anderer Präsentationssoftware geöffnet werden.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Speichert den RTF-Quellcode mit Grafiken im angegebenen format.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Gibt eine Datei mit dem Text des Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Beschreibung:** Speichert das aktuelle Berichtsfenster in einer JMP-Berichtsdatei (*.jrp).

**JMP Version hinzugefügt:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntax:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Beschreibung:** Passt die Bildlaufleiste des Fensters an, um das vorgegebene Anzeigefeld in die Ansicht zu bringen, oder führt einen Bildlauf über eine relative Anzahl von Pixeln durch oder blättert zu einer absoluten Pixelposition. Anstelle einer Anzahl von Pixeln können die Schlüsselwörter "Start" oder "End" verwendet werden.

#### Absolute

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

#### Box

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

#### Relative

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**Syntax:** obj &lt;&lt; Select

**Beschreibung:** Dieses Objekt für die Verwendung mit Befehlen aus dem Menü „Bearbeiten“ auswählen.

```jsl

//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntax:** obj &lt;&lt; Set Content Size( x,y )

**Beschreibung:** Legt die Inhaltsgröße innerhalb des Fensters fest.

```jsl

//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Dirty

**Syntax:** obj &lt;&lt; Set Dirty

**Beschreibung:** Legt den Dokumentstatus „modifiziert“ fest. Bei 0 wird keine Aufforderung zum Speichern angezeigt, bei 1 wird die Aufforderung angezeigt.

**JMP Version hinzugefügt:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj &lt;&lt; Set Height( width )

**Beschreibung:** Legt die Höhe des Anzeigefelds fest.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Syntax:** obj &lt;&lt; Set Main Window

**Beschreibung:** Fenster als Hauptfenster in JMP festlegen und bisheriges Hauptfenster als normales Fenster festlegen.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj &lt;&lt; Set Max Size( width,height )

**Beschreibung:** Legt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Syntax:** obj &lt;&lt; Set Min Size( width,height )

**Beschreibung:** Legt die Mindestgröße dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Syntax:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Beschreibung:** Legt die Informationen für die Seiteneinrichtung fest, die beim Drucken oder Speichern als PDF verwendet werden. Ein Inhaltsverzeichnis kann optional aus Gliederungsfeldern erstellt werden.

```jsl

//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntax:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Fußzeile für den Ausdruck fest.

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Syntax:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Kopfzeile für den Ausdruck fest.

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj &lt;&lt; Set Report Title( "string" )

**Beschreibung:** Ändert den Berichtstitel.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntax:** obj &lt;&lt; Set Stretch( x,y )

**Beschreibung:** Legt das horizontale und vertikale Streckverhalten des Felds fest. Felder, die mit Window gestreckt werden, werden in der Größe geändert, wenn sich die Größe des Fensters oder Fensterbereichs ändert. Felder, die mit Fill gestreckt werden, werden so gestreckt, dass sie den verfügbaren Raum in ihrem Container füllen. Felder, bei denen für das Strecken Off ausgewählt ist, werden im Allgemeinen nicht gestreckt. Für die meisten Felder ist standardmäßig Neutral festgelegt, was bedeutet, dass sie ihr Verhalten anhand ihrer untergeordneten Felder bestimmen.

**JMP Version hinzugefügt:** 16

#### Mit Fenster strecken

```jsl

//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

#### Strecken zum Füllen

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

### Set Summary Behavior

**Syntax:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Beschreibung:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntax:** obj &lt;&lt; Set Width( width )

**Beschreibung:** Legt die Breite des Anzeigefelds fest.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Syntax:** obj &lt;&lt; Set Window Icon( icon name )

**Beschreibung:** Legt das Fenstersymbol fest.

```jsl

//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj &lt;&lt; Set Window Size( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj &lt;&lt; Set Window Title( "string" )

**Beschreibung:** Ändert den Fenstertitel.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntax:** obj &lt;&lt; Show Properties

**Beschreibung:** Zeigt einen Eigenschaftseditor für Anzeigefelder an

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj &lt;&lt; Show Tree Structure

**Beschreibung:** Zeigt eine hierarchische Baumstruktur des Anzeigefelds und der zugehörigen Knoten an.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( state=0|1 )

**Beschreibung:** Blendet das Fenster ein oder aus. Dies ist nützlich, um Fenster kurzzeitig auszublenden. Standardmäßig ein.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Syntax:** obj &lt;&lt; Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Syntax:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Beschreibung:** Fügt direkt nach diesem Anzeigefeld ein Anzeigefeld hinzu.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box( "============ after ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Syntax:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Beschreibung:** Fügt direkt vor diesem Anzeigefeld ein Anzeigefeld hinzu.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Syntax:** obj &lt;&lt; Size Window( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Syntax:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Beschreibung:** Der Text wird in der Textfarbe dargestellt, sofern eine festgelegt ist. Ist die Eigenschaft nicht festgelegt, erbt das Feld die Textfarbe des Containerfelds.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**Syntax:** obj &lt;&lt; Top Parent

**Beschreibung:** Gibt das übergeordnete Stammelement dieses Anzeigefelds zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Syntax:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Update Window

**Syntax:** obj &lt;&lt; Update Window

**Beschreibung:** Aktualisieren Sie das Fenster mit dem Anzeigefenster, falls dieses ungültig gemachte Bereiche enthält. Die Meldung <<Inval erzeugt ungültig gemachte Bereiche.

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Vertical Alignment

**Syntax:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Syntax:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Beschreibung:** Die Sichtbarkeit legt fest, ob ein Feld angezeigt wird und ob es Platz benötigt. Der Standardwert "Visible" bedeutet, dass das Objekt angezeigt wird. Ein Objekt vom Typ "Hidden" wird nicht angezeigt, benötigt jedoch trotzdem Platz, während ein Feld vom Typ "Collapsed" keinen Platz im Layout benötigt.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Syntax:** obj &lt;&lt; Window Class Name

**Beschreibung:** Gibt den Namen der Fensterklasse für das Anzeigefenster zurück.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Syntax:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Beschreibung:** Wendet einen XPath-Ausdruck auf die XML-Darstellung des Anzeigebaums an und gibt die Ergebnisse zurück. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, was für die Leistung sinnvoll ist, wenn Ihre Abfrage nur auf Feldattributen basiert.

#### Attributes

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj &lt;&lt; Zoom Window

**Beschreibung:** Ändert die Größe des Fensters, so dass es groß genug ist, um seinen gesamten Inhalt anzuzeigen.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## Zugehörige Konstruktoren

### Scene Box

**Syntax:** box = Scene Box( xsize, ysize )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das OpenGL-Befehle ausführen kann.

```jsl

shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

