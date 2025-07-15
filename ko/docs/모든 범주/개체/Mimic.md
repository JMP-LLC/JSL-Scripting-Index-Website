# Mimic



## 연결된 생성자

### Mimic

**구문:** mimic obj = Mimic(Box|PlatformRef)

**설명:** Mimic a human user using JSL scripting.





This is an internal build (UNIT_TEST) protected feature that is designed to help with GUI testing. Mimic uses host APIs to send mouse events like those sent by a real user. In this way, we can test hovering, clicking, dragging, etc. And hopefully in the future, other user interactions as well. This allows us to test things that aren&apos;t accessible directly via JSL or that have a risk of being significantly different between their JSL access and the GUI access.





You create a Mimic object using the Mimic(box|platform) factory function. This object should be used to automate within the window corresponding to the factory arguments. There are messages to help with writing tests, like <<Eval, <<Mark, and <<Clear Marks. And there are actual automation messages like <<Mouse Click, <<Mouse Drag, etc. Almost all of these messages take arguments written in a small domain specific language that augments JSL. This language (called MimicLang here) is only valid within the arguments of these Mimic messages. This language allows Mimic users to work easily with boxes, points, and rectangles. Functions in this language include Bounds(box), Center(rect), TopLeft(rect), etc. In the future, there will be more functions in this language for doing specific tasks like getting the position of a named item in a List Box. Finally, MimicLang evaluations also have available two local variables, box and win. The box is the original Mimic factory function argument. And the win is the top box in the window containing it.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

## 항목 메시지

### Clear Marks

**구문:** obj &lt;&lt; Clear Marks()

**설명:** Removes all all marks added by <<Mark.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Eval(mimiclang)

**설명:** Evaluates a mimiclang expression and returns the result.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
mc = Mimic( obj );
fbox = Report( obj )[FrameBox( 1 )];
Show( mc << Eval( Bounds( fbox ) ), mc << Eval( TopLeft( fbox ) ) );

```

### Mark

**구문:** obj &lt;&lt; Mark(mimiclang)

**설명:** Marks points and rectangles on the report. Does not respond to scrolling, resizing, or content movement well at this time. The rectangle grid is on 20 units.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Mouse Brush(rect, &lt;1|2|3|4&gt;)

**설명:** Drag across the given rectangle. Mainly useful in graphs. This is a convenience wrapper for Mouse Drag that allows using a rectangle directly rather than two points. By default, it drags starting at the top left (1). You can use the second argument to change this to top right (2), bottom right (3), or bottom left (4).

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Brush( FrameCoords( box[Frame Box( 1 )], [60 100, 65 150] ) );

```

### Mouse Circle Move

**구문:** obj &lt;&lt; Mouse Circle Move(geo)

**설명:** Move the mouse quickly in a small (several pixel) circle around given point.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Mouse Click(geo)

**설명:** Left click on given geometry.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Mouse Double Click(geo)

**설명:** Double left click on given geometry.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Double Click( box[Axis Box( 1 )] );

```

### Mouse Drag

**구문:** obj &lt;&lt; Mouse Drag(geo src, geo dest)

**설명:** Left click geo src, drag to geo dest, and release.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Mouse Move(geo)

**설명:** Moves the mouse to the given point.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Continuous Distribution( Column( :weight ) ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Move( Offset( TopLeft( Report( obj )[FrameBox( 1 )] ), [80 160] ) );

```

### Mouse Right Click

**구문:** obj &lt;&lt; Mouse Right Click(geo)

**설명:** Right click on given geometry.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
mc = Mimic( obj );
mc << Mouse Right Click( box[Frame Box( 1 )] );

```

### Typing

**구문:** obj &lt;&lt; Typing("some string")

**설명:** Simulate typing the given string on the keyboard.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Typing Special("enum key string")

**설명:** Simulate typing the given special key on the keyboard.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Double Click( win[Text Edit Box( 2 )] ) << Wait( 1 ) << Typing( "HEIGHT" ) << Wait( 1 ) <<
Typing Special( "Enter" );

```

### Wait

**구문:** obj &lt;&lt; Wait(&lt;n&gt;)

**설명:** Equivalent to Wait(<n>). For convenience.

**JMP추가된 버전:** 19

### With Modifier

**구문:** obj &lt;&lt; With Modifier({"Shift"|"Control"|"Command"|"Alt"|"Option"|"Control", ...}, msg)

**설명:** Push one or more modifier keys, run another Mimic message, then release the keys.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
Wait( 1 );
mc = Mimic( obj );
mc << With Modifier( "Alt", Mouse Click( Lrt( obj ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Brush( FrameCoords( box[Frame Box( 1 )], [60 100, 65 150] ) );
mc << With Modifier( {"Ctrl"}, Mouse Brush( FrameCoords( box[Frame Box( 1 )], [60.5 140, 63 115] ) ) );

```

## MimicLang

### 항목 메시지

#### Bounds

**구문:** [xmin ymin, xmax ymax] = Bounds(boxref)

**설명:** Gets the rectangle for a given box.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
c = Mimic( obj );
c << Mark( Bounds( win[Frame Box( 1 )] ) );

```

#### Button

**구문:** boxref = Button(label)

**설명:** Gets the first button box ref with the given label under Mimic box.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova, Launch Dialog );
Wait( 0 );
Mimic( Window( "Oneway - Distribution by Group" ) ) << Mark( Button( "OK" ) );

```

#### Center

**구문:** [x y] = Center(rect | boxref)

**설명:** Calculates the center point for a given box or rectangle.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
c = Mimic( obj );
c << Mark( Center( win[Frame Box( 1 )] ) );

```

#### Disclosure

**구문:** pt = Disclosure(boxref | objref)

**설명:** Get position of the gray disclosure triangle for the given object or outline.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
mc << Mouse Click( Disclosure( win[Outline Box( 1 )] ) );

```

#### Frame Coords

**구문:** geo = Frame Coords(framebox, geo)

**설명:** Converts a point or rectangle in Frame coordinates into a point or rectangle in screen space. Works best with continuous scales.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
mc = Mimic( obj );
mc << Mouse Move( FrameCoords( box[Frame Box( 1 )], [61 107] ) );

```

#### Grid Region

**구문:** rect = Grid Region(gridbox, "IdColumn", 9)

**설명:** Looks up named regions from the Data Grid.

**JMP추가된 버전:** 19

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

**구문:** rect = List Item(listbox, item label)

**설명:** Finds the first item with the given label in a List Box Box, reveals it, and gets its bounds

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova, Local Data Filter );
Wait( 1 );
mc = Mimic( obj );
mc << Mouse Drag( List Item( win[List Box Box( 1 )], "sex" ), box[Text Edit Box( 2 )] );

```

#### Lrt

**구문:** pt = Lrt(boxref | objref)

**설명:** Get position of the Little Red Triangle for the given object or outline.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
mc << Mouse Click( Lrt( obj ) );

```

#### Offset

**구문:** geo = Offset(geo | boxref, pt)

**설명:** Offset the given box/point/rectangle by given point.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ), Anova );
mc = Mimic( obj );
mc << Mouse Click( Offset( TopLeft( win[Outline Box( 1 )] ), [25 15] ) );

```

#### TopLeft

**구문:** [x y] = TopLeft(rect | boxref)

**설명:** Calculates the top-left corner point for a given box or rectangle.

**JMP추가된 버전:** 18

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

