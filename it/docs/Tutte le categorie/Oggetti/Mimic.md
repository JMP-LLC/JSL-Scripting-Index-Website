# Mimic



## Costruttori associati

### Mimic

**Sintassi:** mimic obj = Mimic(Box|PlatformRef)

**Descrizione:** Mimic a human user using JSL scripting.





This is an internal build (UNIT_TEST) protected feature that is designed to help with GUI testing. Mimic uses host APIs to send mouse events like those sent by a real user. In this way, we can test hovering, clicking, dragging, etc. And hopefully in the future, other user interactions as well. This allows us to test things that aren&apos;t accessible directly via JSL or that have a risk of being significantly different between their JSL access and the GUI access.





You create a Mimic object using the Mimic(box|platform) factory function. This object should be used to automate within the window corresponding to the factory arguments. There are messages to help with writing tests, like <<Eval, <<Mark, and <<Clear Marks. And there are actual automation messages like <<Mouse Click, <<Mouse Drag, etc. Almost all of these messages take arguments written in a small domain specific language that augments JSL. This language (called MimicLang here) is only valid within the arguments of these Mimic messages. This language allows Mimic users to work easily with boxes, points, and rectangles. Functions in this language include Bounds(box), Center(rect), TopLeft(rect), etc. In the future, there will be more functions in this language for doing specific tasks like getting the position of a named item in a List Box. Finally, MimicLang evaluations also have available two local variables, box and win. The box is the original Mimic factory function argument. And the win is the top box in the window containing it.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

## Messaggi degli elementi

### Clear Marks

**Sintassi:** obj << Clear Marks()

**Descrizione:** Removes all all marks added by <<Mark.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
rpt = Report( obj );
obox = rpt[Outline Box( 1 )];
fbox = rpt[FrameBox( 1 )];
cbox = rpt["Oneway Anova", "Analysis of Variance", Number Col Box( "Sum of Squares" )];
mc << Mark( Center( obox ) ) << Mark( fbox ) << Mark( cbox );
Wait( 3 );
mc << Clear Marks;

```

### Eval

**Sintassi:** obj << Eval(mimiclang)

**Descrizione:** Evaluates a mimiclang expression and returns the result.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
mc = Mimic( obj );
fbox = Report( obj )[FrameBox( 1 )];
Show( mc << Eval( Bounds( fbox ) ), mc << Eval( TopLeft( fbox ) ) );

```

### Mark

**Sintassi:** obj << Mark(mimiclang)

**Descrizione:** Marks points and rectangles on the report. Does not respond to scrolling, resizing, or content movement well at this time. The rectangle grid is on 20 units.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
rpt = Report( obj );
obox = rpt[Outline Box( 1 )];
fbox = rpt[FrameBox( 1 )];
cbox = rpt["Oneway Anova", "Analysis of Variance", Number Col Box( "Sum of Squares" )];
mc << Mark( Center( obox ) ) << Mark( fbox ) << Mark( cbox );
Wait( 3 );
mc << Clear Marks;

```

### Mouse Brush

**Sintassi:** obj << Mouse Brush(rect, <1|2|3|4>)

**Descrizione:** Drag across the given rectangle. Mainly useful in graphs. This is a convenience wrapper for Mouse Drag that allows using a rectangle directly rather than two points. By default, it drags starting at the top left (1). You can use the second argument to change this to top right (2), bottom right (3), or bottom left (4).

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Brush( FrameCoords( box[Frame Box( 1 )], [60 100, 65 150] ) );

```

### Mouse Circle Move

**Sintassi:** obj << Mouse Circle Move(geo)

**Descrizione:** Move the mouse quickly in a small (several pixel) circle around given point.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
mc = Mimic( obj );
prob col = Report( obj )["Linear Fit", "Analysis of Variance", Number Col Box( "Prob > F" )];
Wait( 1 );
mc << Mouse Circle Move( Offset( Top Left( prob col ), [30 25] ) );

```

### Mouse Click

**Sintassi:** obj << Mouse Click(geo)

**Descrizione:** Left click on given geometry.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway();
Wait( 0 );
win = Window( "Oneway - Distribution by Group" );
mc = Mimic( win );
Wait( 1 );
mc << Mouse Click( Offset( Center( win[List Box Box( 1 )] ), [0 18] ) );
Wait( 1 );
mc << Mouse Click( win[Button Box( 1 )] );
Wait( 1 );
mc << Close Window;

```

### Mouse Double Click

**Sintassi:** obj << Mouse Double Click(geo)

**Descrizione:** Double left click on given geometry.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Double Click( box[Axis Box( 1 )] );

```

### Mouse Drag

**Sintassi:** obj << Mouse Drag(geo src, geo dest)

**Descrizione:** Left click geo src, drag to geo dest, and release.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova, Local Data Filter );
rpt = obj << Top Report;
xlabel = rpt[Text Edit Box( 2 )];
collist = rpt["Local Data Filter", Tab Page Box( 1 ), ListBoxBox( 1 )];
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Drag( Offset( TopLeft( collist ), [20 45] ), xlabel );

```

### Mouse Move

**Sintassi:** obj << Mouse Move(geo)

**Descrizione:** Moves the mouse to the given point.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Continuous Distribution( Column( :weight ) ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Move( Offset( TopLeft( Report( obj )[FrameBox( 1 )] ), [80 160] ) );

```

### Mouse Right Click

**Sintassi:** obj << Mouse Right Click(geo)

**Descrizione:** Right click on given geometry.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
mc = Mimic( obj );
mc << Mouse Right Click( box[Frame Box( 1 )] );

```

### Typing

**Sintassi:** obj << Typing("some string")

**Descrizione:** Simulate typing the given string on the keyboard.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Double Click( win[Text Edit Box( 2 )] );
Wait( 1 );
mc << Typing( "HEIGHT" );
Wait( 1 );
mc << Mouse Click( win );

```

### Typing Special

**Sintassi:** obj << Typing Special("enum key string")

**Descrizione:** Simulate typing the given special key on the keyboard.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Double Click( win[Text Edit Box( 2 )] ) << Wait( 1 ) << Typing( "HEIGHT" ) <<
Wait( 1 ) << Typing Special( "Enter" );

```

### Wait

**Sintassi:** obj << Wait(<n>)

**Descrizione:** Equivalent to Wait(<n>). For convenience.

**JMP Versione aggiunta:** 19

### With Modifier

**Sintassi:** obj << With Modifier({"Shift"|"Control"|"Command"|"Alt"|"Option"|"Control", ...}, msg)

**Descrizione:** Push one or more modifier keys, run another Mimic message, then release the keys.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
Wait( 1 );
mc = Mimic( obj );
mc << With Modifier( "Alt", Mouse Click( Lrt( obj ) ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Brush( FrameCoords( box[Frame Box( 1 )], [60 100, 65 150] ) );
mc << With Modifier(
	{"Ctrl"},
	Mouse Brush( FrameCoords( box[Frame Box( 1 )], [60.5 140, 63 115] ) )
);

```

## MimicLang

### Messaggi degli elementi

#### Bounds

**Sintassi:** [xmin ymin, xmax ymax] = Bounds(boxref)

**Descrizione:** Gets the rectangle for a given box.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
c = Mimic( obj );
c << Mark( Bounds( win[Frame Box( 1 )] ) );

```

#### Button

**Sintassi:** boxref = Button(label)

**Descrizione:** Gets the first button box ref with the given label under Mimic box.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova, Launch Dialog );
Wait( 0 );
Mimic( Window( "Oneway - Distribution by Group" ) ) << Mark( Button( "OK" ) );

```

#### Center

**Sintassi:** [x y] = Center(rect | boxref)

**Descrizione:** Calculates the center point for a given box or rectangle.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
c = Mimic( obj );
c << Mark( Center( win[Frame Box( 1 )] ) );

```

#### Disclosure

**Sintassi:** pt = Disclosure(boxref | objref)

**Descrizione:** Get position of the gray disclosure triangle for the given object or outline.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
mc << Mouse Click( Disclosure( win[Outline Box( 1 )] ) );

```

#### Frame Coords

**Sintassi:** geo = Frame Coords(framebox, geo)

**Descrizione:** Converts a point or rectangle in Frame coordinates into a point or rectangle in screen space. Works best with continuous scales.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
mc = Mimic( obj );
mc << Mouse Move( FrameCoords( box[Frame Box( 1 )], [61 107] ) );

```

#### Grid Region

**Sintassi:** rect = Grid Region(gridbox, "IdColumn", 9)

**Descrizione:** Looks up named regions from the Data Grid.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << Group Columns( Item Range( :Culmen Length, :Body Mass ), "Measurements" );
dt << Group Columns( Item Range( :Species, :Individual ID ), "Individual" );
dt << Group Columns( Item Range( :Region, :Island ), "Location" );
dt << Expand All Column Groups;
dt win = Window( dt << Get Name );
dt grid = (dt win << XPath( "//TabPageBox[text()='Data']//Box" ))[1];

mc = Mimic( dt grid );
mc << Clear Marks;
mc << Mark( Grid Region( box, 2, 3 ) ); // cell 2nd column 3rd row
mc << Mark( Grid Region( box, 3, . ) ); // 3rd column
mc << Mark( Grid Region( box, ., 4 ) ); // 4th row
mc << Mark( Grid Region( box, "IdColumn", 9 ) );	// Id column 9th row
mc << Mark( Grid Region( box, "ScrollLocked", . ) );	// ScrollLocked columns
mc << Mark( Grid Region( box, "Scrollable", . ) );	// Scrollable area
mc << Mark( Grid Region( box, "Data", . ) );	// Data area
mc << Mark( Grid Region( box, "IdColumn", "Header" ) );
mc << Mark( Grid Region( box, ., "Header" ) );
mc << Mark( Grid Region( box, 3, "HeaderStats" ) );
mc << Mark( Grid Region( box, 3, "HeaderSummary" ) );
mc << Mark( Grid Region( box, 3, "HeaderTitle" ) );
mc << Mark( Grid Region( box, 4, "Body" ) );
mc << Mark( Grid Region( box, 4, "HeaderNoGroups" ) );
mc << Mark( Grid Region( box, 4, "HeaderTagSwatch" ) );
mc << Mark( Grid Region( box, 5, "HeaderGroups" ) );	// 5th column header groups
mc << Mark( Grid Region( box, 5, -4 ) ); // 5th column header group section

```

#### List Item

**Sintassi:** rect = List Item(listbox, item label)

**Descrizione:** Finds the first item with the given label in a List Box Box, reveals it, and gets its bounds

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova, Local Data Filter );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Drag( List Item( win[List Box Box( 1 )], "sex" ), box[Text Edit Box( 2 )] );

```

#### Lrt

**Sintassi:** pt = Lrt(boxref | objref)

**Descrizione:** Get position of the Little Red Triangle for the given object or outline.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
mc << Mouse Click( Lrt( obj ) );

```

#### Offset

**Sintassi:** geo = Offset(geo | boxref, pt)

**Descrizione:** Offset the given box/point/rectangle by given point.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
mc << Mouse Click( Offset( TopLeft( win[Outline Box( 1 )] ), [25 15] ) );

```

#### TopLeft

**Sintassi:** [x y] = TopLeft(rect | boxref)

**Descrizione:** Calculates the top-left corner point for a given box or rectangle.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( Report( obj )["Oneway Anova", "Analysis of Variance"] );
Wait( 1 );
mc << Mark( TopLeft( win ) );
Wait( 1 );
mc << Mark( TopLeft( box ) );
Wait( 1 );
mc << Mark( TopLeft( win[Frame Box( 1 )] ) );
Wait( 1 );
mc << Mark( TopLeft( win[Table Box( 1 )] ) );
Wait( 1 );
mc << Mark( TopLeft( box[Table Box( 1 )] ) );

```

