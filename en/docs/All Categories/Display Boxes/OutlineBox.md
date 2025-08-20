# OutlineBox



## Associated Constructors

### Outline Box

**Syntax:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Description:** Returns a display box that groups other display boxes.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);

```

## Item Messages

### Add All Open Files

**Syntax:** obj &lt;&lt; Add All Open Files( &lt;Menu(0,1)&gt; )

**Description:** Brings up the menu to add all of the open files to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Open( "$SAMPLE_DATA/Big Class.jmp" );
ob3 << Add All Open Files;

```

### Add Context

**Syntax:** obj &lt;&lt; Add Context

**Description:** Key-Value pair for OutlineBoxes that adds a column for Make Combined Data Table command for TableBoxes

**JMP Version Added:** 16

### Add Directory of Files

**Syntax:** obj &lt;&lt; Add Directory of Files

**Description:** Brings up the menu to add a directory of files to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add Directory of Files;

```

### Add File Reference

**Syntax:** obj &lt;&lt; Add File Reference

**Description:** Brings up the menu to add a file reference to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add File Reference;

```

### Add Open Files

**Syntax:** obj &lt;&lt; Add Open Files( &lt;Menu(0,1)&gt; )

**Description:** Brings up the menu to add all of the open files to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Open( "$SAMPLE_DATA/Big Class.jmp" );
ob3 << Add All Open Files;

```

### Add Outline Item

**Syntax:** obj &lt;&lt; Add Outline Item

**Description:** Brings up the menu to add an outline item to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add Outline Item;

```

### Add Script Button

**Syntax:** obj &lt;&lt; Add Script Button

**Description:** Brings up the menu to add a script button to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add Script Button;

```

### Add Text Item

**Syntax:** obj &lt;&lt; Add Text Item

**Description:** Brings up the menu to add text to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add Text Item;

```

### Add URL Reference

**Syntax:** obj &lt;&lt; Add URL Reference

**Description:** Brings up the menu to add a URL to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add URL Reference;

```

### Add Window Reference

**Syntax:** obj &lt;&lt; Add Window Reference

**Description:** Brings up the menu to add a window reference to the OutlineBox.

**JMP Version Added:** 16

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Add Window Reference;

```

### Close

**Syntax:** obj &lt;&lt; Close( bool )

**Description:** Closes the outline box.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Close( 1 );

```

### Close All Below

**Syntax:** obj &lt;&lt; Close All Below

**Description:** Closes this Outline Box and all child Outline Boxes below this node.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Wait( 2 );
ob << Close All Below( 1 );

```

### Close All Like This

**Syntax:** obj &lt;&lt; Close All Like This

**Description:** Closes this Outline Box and all Outline Boxes in the display tree with the same original title or help key.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fm = dt << Run Script( "Fit Model" );
r = fm << Report;
Wait( 2 );
r["Least Squares Means Table"] << Close All Like This;

```

### Close Where No Outlines

**Syntax:** obj &lt;&lt; Close Where No Outlines

**Description:** Closes all nodes that do not have children.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Close Where No Outlines( 1 );

```

### Edit Links

**Syntax:** obj &lt;&lt; Edit Links

**Description:** Finds all the file links in button scripts to edit them.

**JMP Version Added:** 16

### Get Allow Title Wrapping

**Syntax:** 0|1 = obj &lt;&lt; Get Allow Title Wrapping( state=0|1 )

**Description:** Allows long titles to be wrapped

**JMP Version Added:** 16

```jsl

    
New Window( "test",
	Outline Box( Repeat( "abc ", 15 ), Text Box( "def" ) ),
	ob = Outline Box( Repeat( "abc ", 15 ),
		Text Box( "def" ),
		<<set allow title wrapping( 0 )
	)
);
Print( ob << get allow title wrapping() );

```

### Get Base Font

**Syntax:** font = obj &lt;&lt; Get Base Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Get Base Font;

```

### Get Close Orientation

**Syntax:** obj &lt;&lt; Get Close Orientation

**Description:** Returns setting for Outline Boxes to collapse vertically to save horizontal space.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << outline close orientation( "Vertical" );
ob << Get Close Orientation;

```

### Get Font

**Syntax:** obj &lt;&lt; Get Font

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Get Font;

```

### Get Font Name

**Syntax:** obj &lt;&lt; Get Font Name

**Description:** Returns the name of the font.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Syntax:** obj &lt;&lt; Get Font Scale

**Description:** Returns the current scale factor for font.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Get Font Scale;

```

### Get Font Size

**Syntax:** obj &lt;&lt; Get Font Size

**Description:** Returns the size of the font.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Get Font Size;

```

### Get Font Style

**Syntax:** obj &lt;&lt; Get Font Style

**Description:** Returns the font style name.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Image Export Display

**Syntax:** obj &lt;&lt; Get Image Export Display

**Description:** Get the option for suppressing outline text when saving images

**JMP Version Added:** 15

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Get Image Export Display();

```

### Get Menu Item State

**Syntax:** 0|1|-1 = obj &lt;&lt; Get Menu Item State( index )

**Description:** Gets the popup menu item state of index menu item. The state will be normal (0), checked (1), or disabled (-1)

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );
ob << Set Menu Item State( 2, -1 );
ob << Get Menu Item State( 2 );

```

### Get Menu Script

**Syntax:** list = obj &lt;&lt; Get Menu Script

**Description:** Returns the menu script attached to the calling object.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Menu Script(
	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; , "Get Menu Script",
	Print( ob << Get Menu Script )}
);
ob << Get Menu Script;

```

### Get Scriptable Object

**Syntax:** scriptable object = obj &lt;&lt; Get Scriptable Object

**Description:** Returns a reference to the scriptable object associated with the Outline Box.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
bivobj = rbiv << Get Scriptable Object();
Print( bivobj << Class Name );

```

### Get Submenu

**Syntax:** obj &lt;&lt; Get Submenu( index )

**Description:** Returns the number of submenus under the given menu item

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Menu Script(
	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",
	Print( "B3" ), "C", Print( "C" )}
);
ob << Set Submenu( 2, 3 );
ob << Get Submenu( 2 );

```

### Get Title

**Syntax:** "string" = obj &lt;&lt; Get Title

**Description:** Gets the title of the outline box.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Print( ob << Get Title );

```

### Get Title Background Color

**Syntax:** obj &lt;&lt; Title Background Color( color );color = obj &lt;&lt; Get Title Background Color

**Description:** If the background color is set, the outline title is filled with the background color prior to drawing the title content. If the background color is set to "None", the background and content of the containing boxes show through.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Background Color( "Light Red" );

```

### Get Title Border

**Syntax:** obj &lt;&lt; Title Border( sides );sides = obj &lt;&lt; Get Title Border

**Description:** Title borders are solid lines drawn around the outside of the outline title. If a single value is provided, it is applied to all sides. If two values are specified, they are applied to horizontal and vertical borders. Title borders are relative to the orientation of the title. An outline that is closed vertically rotates the border and the content.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Border( 0 );

```

### Get Title Border Color

**Syntax:** obj &lt;&lt; Title Border Color( color );color = obj &lt;&lt; Get Title Border Color

**Description:** Optional color to override the default color for outline title borders.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Border Color( "Black" );

```

### Get Title Padding

**Syntax:** obj &lt;&lt; Title Padding( sides );sides = obj &lt;&lt; Get Title Padding

**Description:** Title padding adds space between the title content and the border of the title. If a single value is provided, it is applied to all sides. If two values are specified, they are applied to horizontal and vertical padding. Title padding is relative to the orientation of the title. An outline that is closed vertically rotates the padding and the content.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Padding( Top( 5 ), Bottom( 5 ) );

```

### Get Title Text Color

**Syntax:** obj &lt;&lt; Title Text Color( color );color = obj &lt;&lt; Get Title Text Color

**Description:** Outline title text is drawn using the given color if it has been set. If the property has not been set, the title inherits the text color of the containing box.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Text Color( "Dark Green" );

```

### GetHorizontal

**Syntax:** obj &lt;&lt; GetHorizontal

**Description:** Returns 1 if the outline box&apos;s children are oriented horizontally or 0 if not.

```jsl

New Window( "Example",
	ob = Outline Box( "Outline Box", Text Box( "Horizontally " ), Text Box( "Aligned" ) )
);
ob << GetHorizontal;

```

### GetOpen

**Syntax:** obj &lt;&lt; GetOpen

**Description:** Returns 1 if the outline box is open or 0 if closed.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Show( ob << Get Open );
Wait( 1 );
ob << Close;
Show( ob << Get Open );

```

### Horizontal

**Syntax:** obj &lt;&lt; Horizontal( bool )

**Description:** Horizontally aligns the outline box&apos;s children.

```jsl

New Window( "Example",
	ob = Outline Box( "Outline Box", Text Box( "Horizontally " ), Text Box( "Aligned" ) )
);
ob << horizontal( 1 );

```

### Image Export Display

**Syntax:** obj &lt;&lt; Image Export Display( "Normal"|"Text Only"|"None" )

**Description:** Option for suppressing outline text when saving images

**JMP Version Added:** 15

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Image Export Display( "None" );
ob << Save Picture( "$TEMP/test.png" );

```

### Lock

**Syntax:** obj &lt;&lt; Lock

**Description:** If the Outline Box is part of a Journal, unlocks the Journal to allow further modification. Journals can be locked by right-clicking in the margin area.

**JMP Version Added:** 16

### Lock Title

**Syntax:** obj &lt;&lt; Lock Title( state=0|1 )

**Description:** Lock the outline title to prevent interactive changes.

**JMP Version Added:** 17

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Lock Title( 1 );

```

### Open All Below

**Syntax:** obj &lt;&lt; Open All Below

**Description:** Opens this Outline Box and all child Outline Boxes below this node.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Wait( 2 );
ob << Close All Below( 1 );
Wait( 2 );
ob2 << Open All Below( 1 );
Wait( 2 );
ob << Close( 0 );

```

### Open All Like This

**Syntax:** obj &lt;&lt; Open All Like This

**Description:** Opens this Outline Box and all Outline Boxes in the display tree with the same original title or help key.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fm = dt << Run Script( "Fit Model" );
r = fm << Report;
Wait( 2 );
r["Least Squares Means Table"] << Close All Like This;
Wait( 2 );
r["Least Squares Means Table"] << Open All Like This;

```

### Outline Close Orientation

**Syntax:** obj &lt;&lt; Outline Close Orientation( "Auto"|"Horizontal"|"Vertical" )

**Description:** Option for Outline Boxes to collapse vertically to save horizontal space

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << outlinecloseorientation( "Vertical" );
ob3 << Close;

```

### Set Allow Title Wrapping

**Syntax:** obj &lt;&lt; Set Allow Title Wrapping( 0|1 )

**Description:** Allows long titles to be wrapped

**JMP Version Added:** 16

```jsl

    
New Window( "test",
	Outline Box( Repeat( "abc ", 15 ), Text Box( "def" ) ),
	ob = Outline Box( Repeat( "abc ", 15 ),
		Text Box( "def" ),
		<<set allow title wrapping( 0 )
	)
);

```

### Set Base Font

**Syntax:** obj &lt;&lt; Set Base Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Font

**Syntax:** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Example 1**

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font( "Arial Black" );

```

**Example 2**

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntax:** obj &lt;&lt; Set Font Name( fontname )

**Description:** Sets the font for text strings.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntax:** obj &lt;&lt; Set Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntax:** obj &lt;&lt; Set Font Size( n )

**Description:** Sets the font size in points for text strings.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntax:** obj &lt;&lt; Set Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font Style( "Italic" );

```

**Example 2**

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Menu Item State

**Syntax:** obj &lt;&lt; Set Menu Item State( index, 0|1|-1 )

**Description:** Sets the popup menu item at index to be normal (0), checked (1), or disabled (-1)

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );
ob << Set Menu Item State( 2, -1 );

```

### Set Menu Script

**Syntax:** obj &lt;&lt; Set Menu Script( {"string",script,"string",script, ...} )

**Description:** Adds an entry to the menu when you click on the red triangle.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Menu Script(
	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; , "", 0, "Get Menu Script",
	Print( ob << Get Menu Script )}
);

```

### Set Scriptable Object

**Syntax:** obj &lt;&lt; Set Scriptable Object( &lt;scriptable object&gt; )

**Description:** Sets the scriptable object associated with the Outline Box. Outline Box will show a red triangle menu of messages that can be sent to the scriptable object. If no argument is provided, the scriptable object will be cleared.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Scriptable Object( ob );

```

### Set Submenu

**Syntax:** obj &lt;&lt; Set Submenu( index, submenu count )

**Description:** Turns the "index" menu item into a submenu with "submenu count" menu items

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Menu Script(
	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",
	Print( "B3" ), "C", Print( "C" )}
);
ob << Set Submenu( 2, 3 );

```

### Set Title

**Syntax:** obj &lt;&lt; Set Title( "string", &lt;Run Script(0 | 1)&gt; )

**Description:** Changes the title of the outline box.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Title( "New Outline Box Title" );

```

### Set Title Changed

**Syntax:** obj &lt;&lt; Set Title Changed

**Description:** Set a script that runs when the outline title is changed.

**JMP Version Added:** 17

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Set Title Changed(
	Function( {this, oldtitle},
		Print(
			"title changed: old (" || oldtitle || ") new (" || (this << Get Title()) || ")"
		)
	)
);

```

### SetHorizontal

**Syntax:** obj &lt;&lt; SetHorizontal( state=0|1 )

**Description:** Horizontally aligns the outline box&apos;s children.

```jsl

New Window( "Example",
	ob = Outline Box( "Outline Box", Text Box( "Horizontally " ), Text Box( "Aligned" ) )
);
ob << SetHorizontal( 1 );

```

### SetOpen

**Syntax:** obj &lt;&lt; SetOpen( state=0|1 )

**Description:** Opens or closes the outline.

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << SetOpen( 0 );

```

### Size to Fit

**Syntax:** obj &lt;&lt; Size to Fit

**Description:** Keep the window sized to fit the content.

**JMP Version Added:** 16

### Title Background Color

**Syntax:** obj &lt;&lt; Title Background Color( color );color = obj &lt;&lt; Get Title Background Color

**Description:** If the background color is set, the outline title is filled with the background color prior to drawing the title content. If the background color is set to "None", the background and content of the containing boxes show through.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Background Color( "Light Red" );

```

### Title Border

**Syntax:** obj &lt;&lt; Title Border( sides );sides = obj &lt;&lt; Get Title Border

**Description:** Title borders are solid lines drawn around the outside of the outline title. If a single value is provided, it is applied to all sides. If two values are specified, they are applied to horizontal and vertical borders. Title borders are relative to the orientation of the title. An outline that is closed vertically rotates the border and the content.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Border( 0 );

```

### Title Border Color

**Syntax:** obj &lt;&lt; Title Border Color( color );color = obj &lt;&lt; Get Title Border Color

**Description:** Optional color to override the default color for outline title borders.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Border Color( "Black" );

```

### Title Padding

**Syntax:** obj &lt;&lt; Title Padding( sides );sides = obj &lt;&lt; Get Title Padding

**Description:** Title padding adds space between the title content and the border of the title. If a single value is provided, it is applied to all sides. If two values are specified, they are applied to horizontal and vertical padding. Title padding is relative to the orientation of the title. An outline that is closed vertically rotates the padding and the content.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Padding( Top( 5 ), Bottom( 5 ) );

```

### Title Text Color

**Syntax:** obj &lt;&lt; Title Text Color( color );color = obj &lt;&lt; Get Title Text Color

**Description:** Outline title text is drawn using the given color if it has been set. If the property has not been set, the title inherits the text color of the containing box.

**JMP Version Added:** 19

```jsl

New Window( "Example",
	fontobj = ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box 3",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob << Title Text Color( "Dark Green" );

```

## Shared Item Messages

### Add Line Annotation

**Syntax:** obj &lt;&lt; Add Line Annotation

**Description:** Adds a line on top of the display box.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj &lt;&lt; Add Pin Annotation

**Description:** Adds a pinned annotation on top of a display box. Most attributes (such as Index Row, UniqueID and FoundPt) are designed for internal use only.

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

**Description:** Adds a polygon on top of the display box.

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

**Description:** Adds a simple shape on top of the display box.

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

**Description:** Adds text on top of the display box.

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

**Description:** Add db2 to the display tree after db.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntax:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**Description:** If the background color is set, the box is filled with the background color prior to drawing its content. If the background color is not set, the background and content of the containing boxes show through.

**JMP Version Added:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Border

**Syntax:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

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

**Description:** Optional color to override the default color for box borders.

**JMP Version Added:** 19

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

**Description:** Brings the window to the front.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntax:** obj &lt;&lt; Child

**Description:** Returns the child of the display box.

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

**Description:** Returns the name of the display class for the display box.

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

**Description:** Makes a new copy of the display box.

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

**Description:** Closes the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntax:** obj &lt;&lt; Copy Data

**Description:** copies the tab-delimited data from a matrix or table to the clip board.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj &lt;&lt; Copy Graph

**Description:** Puts a picture of the graph and axes on the clipboard.

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

**Description:** Puts a picture of the display box on the clipboard.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Syntax:** obj &lt;&lt; Delete Box

**Description:** Delete the display box.

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

**Description:** Deselects this object for use by Edit menu commands.

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

**Description:** Send command to a specific part of a display tree.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

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

**Description:** Returns a display box with the given argument.

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

**Description:** Returns the first annotation that is anchored to this display box. Other annotations can be accessed by using Sib() on the result.

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

### Get Background Color

**Syntax:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**Description:** If the background color is set, the box is filled with the background color prior to drawing its content. If the background color is not set, the background and content of the containing boxes show through.

**JMP Version Added:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Border

**Syntax:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

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

**Description:** Optional color to override the default color for box borders.

**JMP Version Added:** 19

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

**Description:** Returns the content size within the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Syntax:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Description:** Gets a relatively robust expression to navigate between parent box and obj. This path is not guaranteed to be stable across JMP releases. The receiver expr is incorporated into the output expression if provided. If not, the expression provided for parent box is used instead. As shown in the example, this message is mainly useful for increasing the robustness of a path you already have available. The XPath mode is default.

#### Basic

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

#### Subscript Mode

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

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

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

**Description:** Returns a string containing HTML source for the display box.

**Example 1**

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Example 2**

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntax:** width = obj &lt;&lt; Get Height

**Description:** Returns the height of the display box.

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

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

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

**Description:** Returns a string containing journal source for the display box.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Syntax:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

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

**Description:** Returns the maximum size of this display box for purposes of auto-stretching.

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

**Description:** Returns the minimum size of this display box for purposes of auto-stretching.

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

**Description:** Returns the namespace associated with this display object.

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

**Description:** Returns the script or function that will run when the window closes.

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

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

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

**Description:** Get page setup information for PDF

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description:** Captures db as an Image Object. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

#### Default

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

#### Scale

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### View and Appearance

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

### Get Project

**Syntax:** project = obj &lt;&lt; Get Project()

**Description:** Returns the parent project of the window, or Empty() if it is not in a project.

**JMP Version Added:** 14

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntax:** obj &lt;&lt; Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Description:** Returns the current setting for the named property.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Description:** Returns a list of properties the display box has.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Syntax:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Description:** Returns a string containing RTF source for the display box.

**Example 1**

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Example 2**

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntax:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Description:** Returns a vector containing the row state for every row in the given data table or the current data table. The row states can come from the table, or from the filter context of the box.

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

**Description:** Returns the visibility of the window.

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

**Description:** Returns the size of the display box.

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

**Description:** Returns the stretching flags for this display box in the horizontal and vertical directions.

**JMP Version Added:** 16

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

**Description:** Returns a string containing the text of the display box.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

**JMP Version Added:** 15

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

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

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

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

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

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntax:** width = obj &lt;&lt; Get Width

**Description:** Returns the width of the display box.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Syntax:** obj &lt;&lt; Get Window Icon

**Description:** Returns the window icon.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj &lt;&lt; Get Window Position

**Description:** Returns the position of the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj &lt;&lt; Get Window Size

**Description:** Returns the size of the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj &lt;&lt; Get Window Title

**Description:** Returns the window title.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj &lt;&lt; Get Window View

**Description:** Returns the current window view. Windows can be "Visible", "Invisible", or "Private".

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description:** Retrieves the display tree formatted as XML. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which can be very large for some display trees.

```jsl

//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj &lt;&lt; GetOffset

**Description:** Returns the offset of this display box relative to the parent box. You might need to use the <<parent message in a loop to accumulate several offsets.

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

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

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

**Description:** Invalidate the displaybox.  The window will update when either the <<UpdateWindow message is sent or the operating system has time for the update.

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

**Description:** Gets the document&apos;s modified status. 1 means the document has been modified and will prompt for saving; 0 means the document is not modified.

**JMP Version Added:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj &lt;&lt; Is Modal Dialog

**Description:** Returns true if the window is a modal dialog. Only useful when called from a window handler callback.

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

**Description:** Makes a journal from the display box.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntax:** obj &lt;&lt; Journal Window

**Description:** Opens a journal window of the window.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj &lt;&lt; Launch

**Description:** Evaluates the given argument in the context of the display box.

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

**Description:** Creates a row state handler for the given data table or the current data table. The function is called when the row states change in the filter context of the box. The argument of the function holds the rows numbers that have changed, or -1 if the row state filter has changed.

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

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

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

**Description:** Maximizes the window. Default argument is 1.

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

**Description:** Minimizes the window. Default argument is 1.

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

**Description:** Moves the window to the specified position.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj &lt;&lt; Next

**Description:** Returns the display box after this display box.

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

**Description:** Sets a script or function to run upon closing the window. This script should return 1 to allow the close, or 0 to prevent the window from closing.

#### Close Function

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

#### Close Script

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

**Description:** Sets a data table&apos;s column widths and window to an optimum size.

**JMP Version Added:** 14

```jsl

//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntax:** obj &lt;&lt; Pad Window( bool )

**Description:** Turns window padding on or off.

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntax:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

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

**Description:** Inserts a page break before the display box.

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

**Description:** Returns the parent of this display box.

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

**Description:** Add db2 to the display tree before db.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj &lt;&lt; Prev Sib

**Description:** Returns the previous sibling of the display box.

**JMP Version Added:** 15

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

**Description:** Prints the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**Syntax:** obj &lt;&lt; Reshow

**Description:** Invalidate the displaybox and update the window with the new content.  See <<Inval and <<UpdateWindow messages if more control over timing of the update is required.

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

**Description:** Saves a screen capture of the display box at the specified path. If a path is not given, the Save As window appears.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves HTML source and folder of graphics in format specified.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Description:** Saves Interactive HTML with Data to a file. The Boolean argument represents the report being static.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Description:** Saves journal source for the display box.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves the display box as a Microsoft Word document. (Windows Only)

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Description:** Saves a PDF of the display box.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description:** Saves a picture of the display box. Supported formats are EMF(Windows), PICT(Macintosh), JPEG or JPG, GIF, or PNG. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

#### Default

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

#### Scale

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### View and Appearance

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

### Save Presentation

**Syntax:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Description:** Saves the display box tables and graphs slides in a presentation. The presentation can be opened with Microsoft PowerPoint or other presentation software.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves RTF source with graphics in format specified.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves a file containing the text of the display box.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Description:** Saves the current report window to a JMP report file (.jrp).

**JMP Version Added:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntax:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Description:** Adjust the window scrollbar to bring the given DisplayBox into view, or scroll a relative number of pixels, or scroll to an absolute pixel location. In place of a number of pixels the keywords "Start" or "End" can be used.

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

**Description:** Selects this object for use by Edit menu commands.

```jsl

//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntax:** obj &lt;&lt; Set Content Size( x,y )

**Description:** Sets the content size within the window.

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

**Description:** Sets the document&apos;s modified status. 0 will not prompt for saving; 1 will prompt.

**JMP Version Added:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj &lt;&lt; Set Height( width )

**Description:** Sets the height of the display box.

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

**Description:** Set the window to be the main window in JMP and sets the prior main window to be a normal window

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj &lt;&lt; Set Max Size( width,height )

**Description:** Sets the maximum size of this display box for purposes of auto-stretching.

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

**Description:** Sets the minimum size of this display box for purposes of auto-stretching.

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

**Description:** Sets the page setup information that is used during printing or saving as pdf. A Table of Contents can optionally be generated from Outline Boxes.

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

**Description:** Sets the left, center, and right footers for printed output

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

**Description:** Sets the left, center, and right headers for printed output

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

**Description:** Sets the value for the named property for the display box.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj &lt;&lt; Set Report Title( "string" )

**Description:** Changes the report title.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntax:** obj &lt;&lt; Set Stretch( x,y )

**Description:** Sets the horizontal and vertical stretching behavior of the box. Boxes that stretch with Window will resize as the window or splitter size changes. Boxes that stretch to Fill will stretch to fill available space in their container. Boxes with stretching turned Off generally will not stretch. Most boxes default to Neutral, which means that they will determine their behavior based on their child boxes.

**JMP Version Added:** 16

#### Stretch to Fill

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

#### Stretch with Window

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

### Set Summary Behavior

**Syntax:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Description:** Sets the behavior of the box when a report is viewed in Summary mode.

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

**Description:** Sets the width of the display box.

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

**Description:** Sets the window icon.

```jsl

//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj &lt;&lt; Set Window Size( x,y )

**Description:** Sets the size of the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj &lt;&lt; Set Window Title( "string" )

**Description:** Changes the window title.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntax:** obj &lt;&lt; Show Properties

**Description:** Displays a property editor for display boxes

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj &lt;&lt; Show Tree Structure

**Description:** Displays a hierarchical tree structure of the display box and its related nodes.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( state=0|1 )

**Description:** Shows or hides the window. This is useful for hiding windows temporarily. On by default.

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

**Description:** Returns the sibling of the display box.

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

**Description:** Adds a display box immediately after this display box.

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

**Description:** Adds a display box immediately before this display box.

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

**Description:** Sets the size of the window.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Syntax:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

**JMP Version Added:** 15

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

**Description:** Returns the root parent of this display box.

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

**Description:** Update the window holding the displaybox if there are invalidated regions.  The <<Inval message creates invalidated regions.

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

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

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

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

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

**Description:** Returns the name of the window class for the display box.

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

**Description:** Applies an XPath expression to the XML representation of the display tree and returns the results. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which is useful for performance when your query is based only on box attributes.

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

**Description:** Resizes the window to be large enough to show all of its contents.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

