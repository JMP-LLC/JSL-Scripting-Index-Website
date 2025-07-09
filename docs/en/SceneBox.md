# SceneBox



### Add Line Annotation

**Syntax:** obj << Add Line Annotation

**Description:** Adds a line on top of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj << Add Pin Annotation

**Description:** Adds a pinned annotation on top of a display box. Most attributes (such as Index Row, UniqueID and FoundPt) are designed for internal use only.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Add Polygon Annotation

**Description:** Adds a polygon on top of the display box.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Add Simple Shape Annotation

**Description:** Adds a simple shape on top of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntax:** obj << Add Text Annotation

**Description:** Adds text on top of the display box.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Append( db2 )

**Description:** Add db2 to the display tree after db.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### ArcBall

**Syntax:** obj << ArcBall( list,radius )

**Description:** Draws the objects in the specified list which allow rotation by left clicking and dragging.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Background Color( red, green, blue )

**Description:** Sets the background color of the Scene Box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );

```

### Begin

**Syntax:** obj << Begin

**Description:** Specifies the starting point of a primitive. Uses the OpenGL command glBegin.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << BlendFunc( source factor,destination factor )

**Description:** Sets the functions used for blending. Uses the OpenGL command glBlendFunc.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Border

**Syntax:** obj << Border( sides );

sides = obj << Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );

```

### Border Color

**Syntax:** obj << Border Color( color );

color = obj << Get Border Color

**Description:** Optional color to override the default color for box borders.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Bring Window To Front

**Description:** Brings the window to the front.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### CallList

**Syntax:** obj << CallList( list )

**Description:** Draws the objects in the specified list. Uses the OpenGL command glCallList.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Child

**Syntax:** obj << Child

**Description:** Returns the child of the display box.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Class Name

**Description:** Returns the name of the display class for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clear

**Syntax:** obj << Clear

**Description:** Clears the scene to the background color.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << ClipPlane( clip_plane0|clip_plane1|clip_plane2|clip_plane3|clip_plane4|clip_plane5,x,y,z,d )

**Description:** Creates a clipping plane. Uses the OpenGL command glClipPlane.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Clone Box

**Syntax:** obj << Clone Box

**Description:** Makes a new copy of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Syntax:** obj << Close Window( <"NoSave"> )

**Description:** Closes the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Color

**Syntax:** obj << Color( r,g,b,<a> )

**Description:** Sets the color. For the alpha layer to work, blending must be enabled. Uses the OpenGL command glColor.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << ColorMask( red=0|1,green=0|1,blue=0|1,alpha=0|1 )

**Description:** Applies a color mask to the succeeding objects. Uses the OpenGL command glColorMask.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << ColorMaterial( Front|Back|Front_And_Back,Emission|Ambient|Diffuse|Specular|Ambient_And_Diffuse )

**Description:** Applies a color material to the succeeding objects. Uses the OpenGL command glColorMaterial.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Copy Data

**Syntax:** obj << Copy Data

**Description:** copies the tab-delimited data from a matrix or table to the clip board.

```js

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj << Copy Graph

**Description:** Puts a picture of the graph and axes on the clipboard.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Syntax:** obj << Copy Picture

**Description:** Puts a picture of the display box on the clipboard.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### CullFace

**Syntax:** obj << CullFace( front|back|front_and_back )

**Description:** Sets where culling should be enabled. Uses the OpenGL command glCullFace.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Cylinder( base radius,top radius,height,slices,stacks )

**Description:** Creates a cylinder. Uses the OpenGL Utility command gluCylinder.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Delete Box

**Syntax:** obj << Delete Box

**Description:** Delete the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### DepthFunc

**Syntax:** obj << DepthFunc( nevert|lesst|equalt|lequalt|greatert|notequalt|gequalt|always )

**Description:** Sets the depth function to use for depth buffer comparisons. Uses the OpenGL command glDepthFunc.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << DepthMask( state=0|1 )

**Description:** Sets whether or not the depth buffer can be written to. Uses the OpenGL command glDepthMask.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << DepthRange( near,far )

**Description:** Sets the near and far depth range. Anything outside of this range will not be drawn. Uses the OpenGL command glDepthRange.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Deselect

**Syntax:** obj << Deselect

**Description:** Deselects this object for use by Edit menu commands.

```js

Names Default To Here( 1 );
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

### Disable

**Syntax:** obj << Disable

**Description:** Disables various OpenGL capabilities. Uses the OpenGL command glDisable.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Disk( inner radius,outer radius,slices,rings )

**Description:** Creates a disk. Uses the OpenGL Utility command gluDisk.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Dispatch

**Syntax:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

**Description:** Send command to a specific part of a display tree.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enable

**Syntax:** obj << Enable

**Description:** Enables various OpenGL capabilities. Uses the OpenGL command glEnable.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```js

Names Default To Here( 1 );
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

### End

**Syntax:** obj << End

**Description:** Specifies the ending point of a primitive. Uses the OpenGL command glEnd.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << EvalCoord1( u )

**Description:** Evaluates the one dimensional map. Uses the OpenGL command glEvalCoord1d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << EvalCoord2( u,v )

**Description:** Evaluates the two dimensional map. Uses the OpenGL command glEvalCoord2d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << EvalMesh1( mode,i1,i2 )

**Description:** Evaluates the one dimensional mesh. Uses the OpenGL command glEvalMesh1.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << EvalMesh2( mode,i1,i2,j1,j2 )

**Description:** Evaluates the two dimensional mesh. Uses the OpenGL command glEvalMesh2.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << EvalPoint1( i )

**Description:** Evaluates a single point in the one dimensional mesh. Uses the OpenGL command glEvalPoint1.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << EvalPoint2( i,j )

**Description:** Evaluates a single point in the two dimensional mesh. Uses the OpenGL command glEvalPoint2.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Find

**Syntax:** obj << Find

**Description:** Returns a display box with the given argument.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Fog

**Syntax:** obj << Fog( fog_mode|fog_density|fog_start|fog_end|fog_index|fog_color,p1,<p2>,<p3>,<p4> )

**Description:** Creates fog. Uses the OpenGL command glFog.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Frame( x0,x1,y0,y1,z0,z1,farside )

**Description:** Draws a frame.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << frame( -0.2, 0.2, -0.2, 0.2, 0.0, 0.0, 1 );
scene << frame( -0.4, 0.4, -0.4, 0.4, 0.0, 0.0, 1 );
scene << frame( -0.6, 0.6, -0.6, 0.6, 0.0, 0.0, 1 );
scene << frame( -0.8, 0.8, -0.8, 0.8, 0.0, 0.0, 1 );

```

### FrontFace

**Syntax:** obj << FrontFace( cw|ccw )

**Description:** Sets which polygons are front or back facing. This is used with object culling. Uses the OpenGL command glFrontFace.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Frustum( left,right,bottom,top,near,far )

**Description:** Sets the parameters used by the camera. Uses the OpenGL command glFrustum.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Get Annotation

**Syntax:** obj << Get Annotation

**Description:** Returns the first annotation that is anchored to this display box. Other annotations can be accessed by using Sib() on the result.

```js

Names Default To Here( 1 );
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

### Get Background Color

**Syntax:** color = obj << Get Background Color

**Description:** Returns the background color of the Scene Box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );
scene << Get Background Color();

```

### Get Border

**Syntax:** obj << Border( sides );

sides = obj << Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );

```

### Get Border Color

**Syntax:** obj << Border Color( color );

color = obj << Get Border Color

**Description:** Optional color to override the default color for box borders.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Get Content Size

**Description:** Returns the content size within the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Syntax:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

**Description:** Gets a relatively robust expression to navigate between parent box and obj. This path is not guaranteed to be stable across JMP releases. The receiver expr is incorporated into the output expression if provided. If not, the expression provided for parent box is used instead. As shown in the example, this message is mainly useful for increasing the robustness of a path you already have available. The XPath mode is default.

**Basic**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

**Subscript Mode**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Get HTML( <format> )

**Description:** Returns a string containing HTML source for the display box.

**Example 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Example 2**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntax:** width = obj << Get Height

**Description:** Returns the height of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Get Journal

**Description:** Returns a string containing journal source for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Syntax:** obj << Margin( sides );

sides = obj << Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

```js

Names Default To Here( 1 );
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

**Syntax:** width,height = obj << Get Max Size

**Description:** Returns the maximum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Syntax:** width,height = obj << Get Min Size

**Description:** Returns the minimum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Description:** Returns the namespace associated with this display object.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Syntax:** obj << Get On Close

**Description:** Returns the script or function that will run when the window closes.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Padding( sides );

sides = obj << Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Hide );
tb << Border( 1 );
Wait( 2 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntax:** obj << Get Page Setup

**Description:** Get page setup information for PDF

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Description:** Captures db as an Image Object. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

**Default**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**Scale**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**View and Appearance**

```js

Names Default To Here( 1 );
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

### Get Project

**Syntax:** project = obj << Get Project()

**Description:** Returns the parent project of the window, or Empty() if it is not in a project.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntax:** obj << Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Description:** Returns the current setting for the named property.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Description:** Returns a list of properties the display box has.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Syntax:** obj << Get RTF( <format> )

**Description:** Returns a string containing RTF source for the display box.

**Example 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Example 2**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntax:** rs = obj << Get Row States( <dt> )

**Description:** Returns a vector containing the row state for every row in the given data table or the current data table. The row states can come from the table, or from the filter context of the box.

**Single table**

```js

Names Default To Here( 1 );
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

**Where subset**

```js

Names Default To Here( 1 );
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

### Get Show ArcBall

**Syntax:** obj << Get Show ArcBall

**Description:** Returns the display state of the ArcBall.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Get Show Window

**Syntax:** obj << Get Show Window

**Description:** Returns the visibility of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Syntax:** width,height = obj << Get Size

**Description:** Returns the size of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Syntax:** x,y = obj << Get Stretch

**Description:** Returns the stretching flags for this display box in the horizontal and vertical directions.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Get Text

**Description:** Returns a string containing the text of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj << Text Color( color );

color = obj << Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
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

**Syntax:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 2 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntax:** pixels = obj << Get Width

**Description:** Returns the width of the box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Get Window Icon

**Syntax:** obj << Get Window Icon

**Description:** Returns the window icon.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj << Get Window Position

**Description:** Returns the position of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj << Get Window Size

**Description:** Returns the size of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj << Get Window Title

**Description:** Returns the window title.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj << Get Window View

**Description:** Returns the current window view. Windows can be "Visible", "Invisible", or "Private".

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Description:** Retrieves the display tree formatted as XML. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which can be very large for some display trees.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj << GetOffset

**Description:** Returns the offset of this display box relative to the parent box. You might need to use the <<parent message in a loop to accumulate several offsets.

```js

Names Default To Here( 1 );
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
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2
					] + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Height

**Syntax:** obj << Height( pixels )

**Description:** Sets the height of the box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Inval

**Description:** Invalidate the displaybox.  The window will update when either the <<UpdateWindow message is sent or the operating system has time for the update.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Is Dirty

**Description:** Gets the document&apos;s modified status. 1 means the document has been modified and will prompt for saving; 0 means the document is not modified.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj << Is Modal Dialog

**Description:** Returns true if the window is a modal dialog. Only useful when called from a window handler callback.

```js

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Syntax:** obj << Journal

**Description:** Makes a journal from the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntax:** obj << Journal Window

**Description:** Opens a journal window of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj << Launch

**Description:** Evaluates the given argument in the context of the display box.

```js

Names Default To Here( 1 );
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

### Light

**Syntax:** obj << Light( light0|light1|light2|light3|light4|light5|light6|light7,ambient|diffuse|specular|position,x|r,y|g,z|b,<a> )

**Description:** Creates a light source with the specified parameters. Uses the OpenGL command glLight.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LightModel( light_model_ambient|light_model_local_viewer|light_model_two_side,r,g,b,a )

**Description:** Sets the parameters used for the light model. Uses the OpenGL command glLightModel.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LineStipple( factor,pattern )

**Description:** Sets the line stipple pattern. Uses the OpenGL command glLineStipple.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LineWidth( width )

**Description:** Sets the width of the line. Uses the OpenGL command glLineWidth.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LoadIdentity

**Description:** Sets the current matrix to the identity matrix. Uses the OpenGL command glLoadIdentity.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LoadMatrix( matrix )

**Description:** Sets the current matrix to the specified matrix. Uses the OpenGL command glLoadMatrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LoadName( i )

**Description:** Use with picker, load the integer that identifies the succeeding object. Uses the OpenGL command glLoadName.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << LookAt( eye x,eye y,eye z,center x,center y,center z,up x,up y,up z )

**Description:** Sets the location that the camera should be looking. Uses the OpenGL Utility command gluLookAt.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Make RowState Handler

**Syntax:** rs = obj << Make RowState Handler( <dt>, function(a) )

**Description:** Creates a row state handler for the given data table or the current data table. The function is called when the row states change in the filter context of the box. The argument of the function holds the rows numbers that have changed, or -1 if the row state filter has changed.

**Single table**

```js

Names Default To Here( 1 );
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

**Where subset**

```js

Names Default To Here( 1 );
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

### Map1

**Syntax:** obj << Map1( target,u1,u2,stride,order,points )

**Description:** Defines a one dimensional evaluator. Uses the OpenGL command glMap1d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Map2( target,u1,u2,ustride,uorder,v1,v2,vstride,vorder,points )

**Description:** Defines a two dimensional evaluator. Uses the OpenGL command glMap2d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << MapGrid1( un,u1,u2 )

**Description:** Defines a one dimensional mesh. Uses the OpenGL command glMapGrid1d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << MapGrid2( un,u1,u2,vn,v1,v2 )

**Description:** Defines a two dimensional mesh. Uses the OpenGL command glMapGrid2d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Margin

**Syntax:** obj << Margin( sides );

sides = obj << Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

```js

Names Default To Here( 1 );
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

### Material

**Syntax:** obj << Material

**Description:** Specifies the type of material to use for the succeeding objects. Uses the OpenGL command glMaterial.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << MatrixMode( modelview|projection|texture )

**Description:** Sets which matrix to operate on. Uses the OpenGL command glMatrixMode.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Maximize Window

**Syntax:** obj << Maximize Window( <state=0|1> )

**Description:** Maximizes the window. Default argument is 1.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj << Minimize Window( <state=0|1> )

**Description:** Minimizes the window. Default argument is 1.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj << Move Window( x,y )

**Description:** Moves the window to the specified position.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### MultMatrix

**Syntax:** obj << MultMatrix( matrix )

**Description:** Multiplies the current matrix by the specified matrix. Uses the OpenGL command glMultMatrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Next

**Syntax:** obj << Next

**Description:** Returns the display box after this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### Normal

**Syntax:** obj << Normal( x,y,z )

**Description:** Sets the current normal. Uses the OpenGL command glNormal.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### On Close

**Syntax:** obj << On Close( script )

**Description:** Sets a script or function to run upon closing the window. This script should return 1 to allow the close, or 0 to prevent the window from closing.

**Close Function**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box(
					"Press OK to allow " || (this << Get Window Title) || " to close"
				),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Close Script**

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Optimize Display

**Description:** Sets a data table&apos;s column widths and window to an optimum size.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Ortho

**Syntax:** obj << Ortho( left,right,bottom,top,near,far )

**Description:** Sets the scene to an orthogonal view. Uses the OpenGL command glOrtho.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Ortho2D( left,right,bottom,top )

**Description:** Sets the scene to a 2D orthogonal view. Uses the OpenGL Utility command gluOrtho2d.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Pad Window

**Syntax:** obj << Pad Window( bool )

**Description:** Turns window padding on or off.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntax:** obj << Padding( sides );

sides = obj << Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Hide );
tb << Border( 1 );
Wait( 2 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntax:** obj << Page Break

**Description:** Inserts a page break before the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box(
					Text Edit Box( "Bottom Left" ),
					Text Edit Box( "Bottom Right" )
				)
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Syntax:** obj << Parent

**Description:** Returns the parent of this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### PartialDisk

**Syntax:** obj << PartialDisk( inner radius,outer radius,slices,rings,start angle,sweep angle )

**Description:** Creates a partial disk. Uses the OpenGL Utility command gluPartialDisk.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Perspective( angle,z near,z far )

**Description:** Sets the perspective of the view. Uses the OpenGL Utility command gluPerspective.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Pick

**Syntax:** name = obj << Pick( x center,y center,pick width,pick height,buffer size,only return the names=0|1 )

**Description:** Returns the named object that is located under the 2D coordinates of the mouse.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PointSize( size )

**Description:** Sets the size of a point. Uses the OpenGL command glPointSize.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PolygonMode( front|back|front_and_back,point|line|fill )

**Description:** Sets the mode used in rasterization. Uses the OpenGL command glPolygonMode.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PolygonOffset( factor,units )

**Description:** Sets the offset of the polygon. Uses the OpenGL command glPolygonOffset.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PopAttrib

**Description:** Pops the current attributes. Uses the OpenGL command glPopAttrib.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PopMatrix

**Description:** Pops the current matrix. Uses the OpenGL command glPopMatrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PopName

**Description:** Use with picker, pop the integer that identifies the succeeding object. Uses the OpenGL command glPopName.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Prepend

**Syntax:** obj << Prepend( db2 )

**Description:** Add db2 to the display tree before db.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj << Prev Sib

**Description:** Returns the previous sibling of the display box.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Syntax:** obj << Print Window

**Description:** Prints the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### PushAttrib

**Syntax:** obj << PushAttrib( mask )

**Description:** Pushes the current attributes. Uses the OpenGL command glPushAttrib.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PushMatrix

**Description:** Pushes the current matrix. Uses the OpenGL command glPushMatrix.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << PushName( i )

**Description:** Use with picker, push the integer that identifies the succeeding object. Uses the OpenGL command glPushName.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << QuadricDrawStyle( point|line|silhouette|fill )

**Description:** Sets the type of draw style to use for quadrics. Uses the OpenGL Utility command gluQuadricDrawStyle.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << QuadricNormals( none|flat|smooth )

**Description:** Sets the type of normals to use for quadrics. Uses the OpenGL Utility command gluQuadricNormals.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << QuadricOrientation( outside|inside )

**Description:** Sets the type of orientation to use for quadrics. Uses the OpenGL Utility command gluQuadricOrientation.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << QuadricTexture

**JMP Version Added:** 16

### Rect

**Syntax:** obj << Rect( x1,y1,x2,y2 )

**Description:** Creates a rectangle. Uses the OpenGL command glRect.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0.5, 0, 0 );
shape << Rect( -0.75, -0.75, 0.5, 0.75 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << CallList( shape );

```

### Reshow

**Syntax:** obj << Reshow

**Description:** Invalidate the displaybox and update the window with the new content.  See <<Inval and <<UpdateWindow messages if more control over timing of the update is required.

```js

Names Default To Here( 1 );
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

### Rotate

**Syntax:** obj << Rotate( angle,x,y,z )

**Description:** Multiplies the current matrix by the specified rotation angle in degrees. Uses the OpenGL command glRotate.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Rotate( 15, 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Save Capture

**Syntax:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**Description:** Saves a screen capture of the display box at the specified path. If a path is not given, the Save As window appears.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj << Save HTML( <pathname>, <format> )

**Description:** Saves HTML source and folder of graphics in format specified.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj << Save Interactive HTML( <pathname>, <Boolean> )

**Description:** Saves Interactive HTML with Data to a file. The Boolean argument represents the report being static.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj << Save Journal( <pathname> )

**Description:** Saves journal source for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj << Save MSWord( <pathname>, <format> )

**Description:** Saves the display box as a Microsoft Word document. (Windows Only)

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

**Description:** Saves a PDF of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Description:** Saves a picture of the display box. Supported formats are EMF(Windows), PICT(Macintosh), JPEG or JPG, GIF, or PNG. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

**Default**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**Scale**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

**View and Appearance**

```js

Names Default To Here( 1 );
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

### Save Presentation

**Syntax:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

**Description:** Saves the display box tables and graphs slides in a presentation. The presentation can be opened with Microsoft PowerPoint or other presentation software.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj << Save RTF( <pathname>, <format> )

**Description:** Saves RTF source with graphics in format specified.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj << Save Text( <pathname>, <format> )

**Description:** Saves a file containing the text of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Description:** Saves the current report window to a JMP report file (.jrp).

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scale

**Syntax:** obj << Scale( x,y,z )

**Description:** Multiplies the current matrix by the specified scale. Uses the OpenGL command glScale.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Scale( 2, 1, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scene Box

**Syntax:** box = Scene Box( xsize, ysize )

**Description:** Returns a display box that can execute OpenGL commands.

```js

Names Default To Here( 1 );
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

### Scissor

**Syntax:** obj << Scissor( x,y,width,height )

**Description:** Only items that appear within the scissor view will be drawn. Uses the OpenGL command glScissor.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Scroll Window

**Syntax:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**Description:** Adjust the window scrollbar to bring the given DisplayBox into view, or scroll a relative number of pixels, or scroll to an absolute pixel location. In place of a number of pixels the keywords "Start" or "End" can be used.

**Absolute**

```js

Names Default To Here( 1 );

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

**Box**

```js

Names Default To Here( 1 );

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

**Relative**

```js

Names Default To Here( 1 );

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

**Syntax:** obj << Select

**Description:** Selects this object for use by Edit menu commands.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntax:** obj << Set Content Size( x,y )

**Description:** Sets the content size within the window.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Set Dirty

**Description:** Sets the document&apos;s modified status. 0 will not prompt for saving; 1 will prompt.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj << Set Height( width )

**Description:** Sets the height of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Syntax:** obj << Set Main Window

**Description:** Set the window to be the main window in JMP and sets the prior main window to be a normal window

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj << Set Max Size( width,height )

**Description:** Sets the maximum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Syntax:** obj << Set Min Size( width,height )

**Description:** Sets the minimum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Syntax:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**Description:** Sets the page setup information that is used during printing or saving as pdf. A Table of Contents can optionally be generated from Outline Boxes.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Set Print Footers( left footer, center footer, right header )

**Description:** Sets the left, center, and right footers for printed output

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Syntax:** obj << Set Print Headers( left header, center header, right header )

**Description:** Sets the left, center, and right headers for printed output

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj << Set Report Title( "string" )

**Description:** Changes the report title.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntax:** obj << Set Stretch( x,y )

**Description:** Sets the horizontal and vertical stretching behavior of the box. Boxes that stretch with Window will resize as the window or splitter size changes. Boxes that stretch to Fill will stretch to fill available space in their container. Boxes with stretching turned Off generally will not stretch. Most boxes default to Neutral, which means that they will determine their behavior based on their child boxes.

**JMP Version Added:** 16

**Stretch to Fill**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

**Stretch with Window**

```js

Names Default To Here( 1 );
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

### Set Summary Behavior

**Syntax:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Description:** Sets the behavior of the box when a report is viewed in Summary mode.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntax:** obj << Set Width( width )

**Description:** Sets the width of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Syntax:** obj << Set Window Icon( icon name )

**Description:** Sets the window icon.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj << Set Window Size( x,y )

**Description:** Sets the size of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj << Set Window Title( "string" )

**Description:** Changes the window title.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### ShadeModel

**Syntax:** obj << ShadeModel( flat|smooth )

**Description:** Specifies the type of shading to use for the succeeding objects. Uses the OpenGL command glShadeModel.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Show ArcBall( "During Drag"|"Always"|"Never" )

**Description:** Sets the display state of the ArcBall.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Show Properties

**Syntax:** obj << Show Properties

**Description:** Displays a property editor for display boxes

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj << Show Tree Structure

**Description:** Displays a hierarchical tree structure of the display box and its related nodes.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj << Show Window( state=0|1 )

**Description:** Shows or hides the window. This is useful for hiding windows temporarily. On by default.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Syntax:** obj << Sib

**Description:** Returns the sibling of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Syntax:** obj << Sib Append( Display box, Horizontal|Vertical )

**Description:** Adds a display box immediately after this display box.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Sib Prepend( Display box, Horizontal|Vertical )

**Description:** Adds a display box immediately before this display box.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Size Window( x,y )

**Description:** Sets the size of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### SortList

**Syntax:** obj << SortList

**JMP Version Added:** 16

### Sphere

**Syntax:** obj << Sphere( radius,slices,stacks )

**Description:** Creates a sphere. Uses the OpenGL Utility command gluSphere.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Suppress Context Menu( state=0|1 )

**Description:** Stops the Scene Box context menu from appearing.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Text( left|center|right,top|middle|baseline|bottom,size,"string" )

**Description:** Creates text that can be shown in a SceneBox.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Text Color

**Syntax:** obj << Text Color( color );

color = obj << Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Top Parent

**Description:** Returns the root parent of this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### Translate

**Syntax:** obj << Translate( x,y,z )

**Description:** Multiplies the current matrix by the specified translation. Uses the OpenGL command glTranslate.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( -0.9, 1.5, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### UI Only

**Syntax:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update

**Syntax:** obj << Update

**Description:** Renders the scene.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Update Window

**Syntax:** obj << Update Window

**Description:** Update the window holding the displaybox if there are invalidated regions.  The <<Inval message creates invalidated regions.

```js

Names Default To Here( 1 );
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

### Use Hardware Acceleration

**Syntax:** obj << Use Hardware Acceleration( state=0|1 )

**Description:** Hardware Acceleration might make the display faster. If it looks bad, new graphics drivers (from the hardware vendor) might be needed.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Vertex( x,y,z )

**Description:** Specifies the vertex of a primitive.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
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

**Syntax:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 2 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Width

**Syntax:** obj << Width( pixels )

**Description:** Sets the width of the box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
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

### Window Class Name

**Syntax:** obj << Window Class Name

**Description:** Returns the name of the window class for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Syntax:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**Description:** Applies an XPath expression to the XML representation of the display tree and returns the results. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which is useful for performance when your query is based only on box attributes.

**Attributes**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj << Zoom Window

**Description:** Resizes the window to be large enough to show all of its contents.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

