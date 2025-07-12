# JMP Style Sheets



## Associated Constructors

### JMP Style Sheets

**Syntax:** JMP Style Sheets

**Description:** JMP Style Sheets (JSS) helps us separate DisplayBox content from DisplayBox presentation. The system is modeled on CSS. CSS is to HTML as JSS is to DisplayBox trees in JMP.

## Item Messages

### <C++>

**Syntax:** obj << <C++>

**Description:** Use DisplayBoxPtr::jssClasses and DisplayBoxPtr::jssID and then target those using selectors. OutlineBoxes and some others automatically set classes from their Scriptable, etc.

```jsl

Names Default To Here( 1 );

// DisplayBoxPtr label = newLabel(sFiltersLabel).jssID(jss::Id(/*NOTRANS*/"sdiFiltersLabel"))
// DisplayBoxPtr columnList = buildColPanel().jssClasses(jss::makeClasses(/*NOTRANS*/"launcherColPanel"));

```

### <Editing>

**Syntax:** obj << <Editing>

**Description:** New files must be added to *.jss in the correct order. Use the in-JMP Property Panel for looking at classes, ids, and box structure. Syncing from Perforce gets you the latest styles after you build since the build step copies the files into the build directory. Or you can use the JSS Dir preference to point JMP directly at the files in your Perforce workspace. Then you can check-out files and edit them directly. As soon as you edit a file and save it, JMP will update automatically.

```jsl

Names Default To Here( 1 );

Preferences[1] << Set( JSS Dir( "C:\JMPDev\source\Portable\Jss\" ) );

```

### <Rule>

**Syntax:** obj << <Rule>

**Description:** The main unit of a JSS file. Composed of a Selector and multiple Declarations/Messages.

### <Selector>

**Syntax:** obj << <Selector>

**Description:** The first part of a Rule; Used to select boxes. You can compose selectors together to make more complex selectors.

### <Specificity>

**Syntax:** obj << <Specificity>

**Description:** This helps us be more declarative with our Rules. See CSS documentation for details.

```jsl

Names Default To Here( 1 );

New Window( "Specificity",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		), 
        // ButtonBoxes within PanelBoxes are subjects of both rules.
		// But they end up Red instead of Green even though the Green rule is second.
		// This is because the first rule is more specific.
		<<Set JSS(
			Expr(
				Descend( Type( PanelBox ), Type( ButtonBox ) ) << Padding( 20, 10 ) <<
				Background Color( "Red" );
				Type( ButtonBox ) << Padding( 10, 10 ) << Background Color( "Green" );
			)
		)
	)
);

```

### And

**Syntax:** And( selector, ..., selector )

**Description:** Combine two or more selectors, making a new selector that matches only when all of those match. Use the functional form And(...) or wrap in parentheses before sending messages.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "And",
	JSS Context Box(
		H List Box(
			Platform(
				dt,
				Bivariate(
					Y( :weight ),
					X( :height ),
					Fit Line( {Line Color( {212, 73, 88} )} )
				)
			),
			Platform( dt, Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) ) ),

		), 
        // CSS> OutlineBox.Platform.Oneway { background-color: red; }
		// Set Background Color for Oneway (overly specific)
		<<Set JSS(
			Expr(
				(Type( OutlineBox ) & Class( Platform ) & Class( Oneway )) <<
				Background Color( "Red" )
			)
		)
	)
);

```

### Attr

**Syntax:** Attr( <<Boolean Box Message == 0|1 )

**Description:** Matches boxes with the given attribute. Where the box responds to the given message with that value. Currently only supports boolean attributes.

```jsl

Names Default To Here( 1 );

New Window( "Attr",
	JSS Context Box(
		Outline Box( "Outline Box",
			V List Box( Text Box( "A" ), Text Box( "B" ) ),
			H List Box( Text Box( "C" ), Text Box( "D" ) )
		), 
        // CSS> [horizontal=1] { background-color: blue; }
		// Set the background color on Boxes where <<Get Horizontal returns true
		<<Set JSS( Expr( Attr( <<Get Horizontal == 1 ) << Background Color( "Blue" ) ) )
	)
);

```

### Child

**Syntax:** Child( parentSelector, childSelector )

**Description:** Combines two selectors into a direct parent/child path. A box matches when it and its direct parent both match their individual selectors.

```jsl

Names Default To Here( 1 );

New Window( "Child",
	JSS Context Box(
		Outline Box( "Outline",
			Text Box( "Hello" ),
			Panel Box( "Conversation",
				Text Box( "...A..." ),
				Text Box( "...B..." ),
				Text Box( "...C..." ),

			),
			Text Box( "Bye" ),

		), 
        // CSS> OutlineBox > TextBox { color: blue; }
		// Set color for all TextBox that are direct children (not just first child) of OutlineBox
		<<Set JSS(
			Expr(
				Child( Type( OutlineBox ), Type( TextBox ) ) << Font Color( "Blue" )
			)
		)
	)
);

```

### Class

**Syntax:** Class( className )

**Description:** Matches boxes that have the given JSS class (loose comparison).

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Class",
	JSS Context Box(
		Platform(
			dt,
			Bivariate(
				Y( :weight ),
				X( :height ),
				Fit Line( {Line Color( {212, 73, 88} )} ),
				Local Data Filter(
					Add Filter( columns( :age ), Display( :age, N Items( 6 ) ) )
				)
			)
		), 
        // CSS> .Platform { background-color: red; }
		<<Set JSS(
			Expr(
				Class( Platform ) << Background Color( "Green" );
				Class( Data Filter ) << Background Color( "Red" );
			)
		)
	)
);

```

### Constants

**Syntax:** Constants( var1 = expr1; var2 = expr2; ... )

**Description:** Defines constants that can be used within rule declarations. Basic operations are allowed in the expressions and the names can reference each other. Names are global within a Theme and the last declaration of a name is used.

```jsl

Names Default To Here( 1 );

New Window( "Constants",
	JSS Context Box(
		V List Box( Button Box( "Press Me" ), Combo Box( {"One", "Two", "Three"}, . ) ),
		<<Set JSS(
			Expr(
				Type( ComboBox ) << Margin( ctrl margin );
				If( Host is( "Windows" ),
					Constants(
						m0 = 2;
						ctrl margin = m0 * 2;
					)
				,
					Constants( ctrl margin = 2 )
				);
				Type( ButtonBox ) << Margin( m0 );
				Constants( m0 = 5 );
			)
		)
	)
);

```

### Descend

**Syntax:** Descend( selector, ..., selector )

**Description:** Combines two or more selectors into a path. A box matches when the path to the box matches. Note that the path can skip levels in the display tree.

```jsl

Names Default To Here( 1 );

New Window( "Child",
	JSS Context Box(
		V List Box(
			Outline Box( "Outline",
				H List Box(
					Text Box( "Hello" ),
					Panel Box( "Conversation",
						H List Box(
							Text Box( "...A..." ),
							Text Box( "...B...", <<Set JSS Id( "foo" ) ),
							Text Box( "...C..." ),

						),

					),
					Text Box( "Bye" ),

				),

			),
			Text Box( "Outside" ),

		), 
        // CSS> OutlineBox TextBox { color: blue; }
		// Set color for all TextBox anywhere (directly or indirectly) underneath an OutlineBox
		// CSS> OutlineBox PanelBox #foo { color: red; }
		// Set color for all #foo id underneath a Panel that is under an Outline
		<<Set JSS(
			Expr(
				Descend( Type( OutlineBox ), Type( TextBox ) ) << Font Color( "Blue" );
				Descend( Type( OutlineBox ), Type( PanelBox ), Id( foo ) ) <<
				Font Color( "Red" );
			)
		)
	)
);

```

### First Child

**Syntax:** FirstChild()

**Description:** Matches when a box is the first child of its parent.

```jsl

Names Default To Here( 1 );

New Window( "First Child",
	JSS Context Box(
		Outline Box( "Outline",
			Text Box( "Hello" ),
			Panel Box( "Conversation",
				Text Box( "...A..." ),
				Text Box( "...B..." ),
				Text Box( "...C..." ),

			),
			Text Box( "Bye" ),

		), 
        // CSS> TextBox:first-child { color: blue; }
		// Set color for all TextBox that are the first child of something else (any type)
		// CSS> OutlineBox > :first-child { color: red; }
		// Set color for all first children (any type) of OutlineBoxes
		<<Set JSS(
			Expr(
				(Type( TextBox ) & FirstChild()) << Font Color( "Blue" );
				Child( Type( OutlineBox ), FirstChild() ) << Font Color( "Red" );
			)
		)
	)
);

```

### Id

**Syntax:** Id( idName )

**Description:** Matches boxes that have the given JSS id (loose comparison).

```jsl

Names Default To Here( 1 );

New Window( "Id",
	JSS Context Box(
		V List Box(
			Button Box( "Press Me", <<Margin( 20 ), <<Set JSS Id( "foo" ) ),
			Combo Box( {"One", "Two", "Three"}, ., <<Margin( 10 ) ),
			Check Box( {"One", "Two", "Three"}, ., <<Margin( 15 ) ),
			Text Box( "Hi", <<Set JSS Id( "foo" ) )
		), 
        // CSS> #foo { margin-bottom: 8px; background-color: blue; }
		<<Set JSS( Expr( Id( foo ) << Margin( Bottom( 8 ) ) << Background Color( "Blue" ) ) )
	)
);

```

### If

**Syntax:** If( condA, rulesA, ..., rulesElse )

**Description:** The allowable condition expressions are limited and resolved when the JSS is parsed. No branch testing is done during the JSS application passes. In other words, these are for testing the state of the system and JMP, not individual boxes or box trees.

**Host Is**

```jsl

Names Default To Here( 1 );

New Window( "If Host Is",
	JSS Context Box(
		V List Box(
			Button Box( "Press Me" ),
			Combo Box( {"One", "Two", "Three"}, . ),
			Check Box( {"One", "Two", "Three"}, . ),

		), 
        // Defaults can depend on Windows/Mac
		<<Set JSS(
			Expr(
				If( Host is( "Windows" ),
					Type( ComboBox ) << Margin( 20, 20 );
					Type( CheckBoxBox ) << Margin( 20, 20 );
				,
					Type( ComboBox ) << Margin( 40, 40 );
					Type( CheckBoxBox ) << Margin( 40, 40 );
				)
			)
		)
	)
);

```

**Language Is**

```jsl

Names Default To Here( 1 );

New Window( "If Language Is",
	JSS Context Box(
		V List Box(
			Button Box( "Press Me" ),
			Combo Box( {"One", "Two", "Three"}, . ),
			Check Box( {"One", "Two", "Three"}, . ),
			Text Box( "Hi" ),

		), 
        // Text Boxes are Blue when in Spanish
		<<Set JSS(
			Expr(
				If( Language Is( "es" ),
					Type( TextBox ) << Font Color( "Blue " )
				)
			)
		)
	)
);

```

**Theme Is**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "If Theme Is",
	JSS Context Box(
		Platform(
			dt,
			Graph Builder(
				Show Control Panel( 0 ),
				Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
				Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
			)
		), 
        // CSS> @media (prefers-color-scheme: dark) { ... }
		// Graph Builder Frames have a Gray background in Dark mode
		<<Set JSS(
			Expr(
				If( Theme Is( "Dark" ),
					Descend( Class( Graph Builder ), Type( Frame Box ) ) <<
					Background Color( "Light Gray" );
					Descend( Class( Graph Builder ), Type( Legend Box ) ) <<
					Background Color( "Light Gray" );
				)
			)
		)
	)
);

```

### Include

**Syntax:** Include( path, <<NoWarnIfMissing )

**Description:** Includes another JSS file from a path relative to this one. Errors within that file will be ignored. Errors accessing that file will not, unless you use the <<NoWarnIfMissing flag.

```jsl

Names Default To Here( 1 );

Save Text File(
	"$TEMP/file.jss", JSL Quote(
    Type( ButtonBox ) << Background Color( "Green" );
));
New Window( "Include",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Include( "$TEMP/file.jss" ); // Skip and warn if file can't be read
				Include( "$TEMP/another-file.jss", <<NoWarnIfMissing ); // Skip but don't warn
			)
		)
	)
);

```

### Last Child

**Syntax:** LastChild()

**Description:** Matches when a box is the last child of its parent.

```jsl

Names Default To Here( 1 );

New Window( "Last Child",
	JSS Context Box(
		Outline Box( "Outline",
			Text Box( "Hello" ),
			Panel Box( "Conversation",
				Text Box( "...A..." ),
				Text Box( "...B..." ),
				Text Box( "...C..." ),

			),
			Text Box( "Bye" ),

		), 
        // CSS> TextBox:last-child { color: blue; }
		// Set color for all TextBox that are the last child of something else (any type)
		// CSS> OutlineBox > :last-child { color: red; }
		// Set color for all last children (any type) of OutlineBoxes
		<<Set JSS(
			Expr(
				(Type( TextBox ) & LastChild()) << Font Color( "Blue" );
				Child( Type( OutlineBox ), LastChild() ) << Font Color( "Red" );
			)
		)
	)
);

```

### Next Sibling

**Syntax:** Next Sibling( precedingSelector, selector )

**Description:** Box must match the second selector and be immediately preceded by a box matching the first selector (sharing the same parent).

```jsl

Names Default To Here( 1 );

New Window( "Next Sibling",
	JSS Context Box(
		Outline Box( "Outline",
			Text Box( "Hello" ),
			Panel Box( "Conversation",
				Text Box( "...A..." ),
				Text Box( "...B..." ),
				Text Box( "...C..." ),

			),
			Text Box( "Bye" ),

		), 
        // CSS> PanelBox + TextBox { color: blue; }
		// Set color for all TextBox that are immediately follow PanelBox
		<<Set JSS(
			Expr(
				Next Sibling( Type( PanelBox ), Type( TextBox ) ) << Font Color( "Blue" )
			)
		)
	)
);

```

### Selector List

**Syntax:** Or( selector, ..., selector )

**Description:** Combines two or more selectors, making a new selector that matches when any of the individual selectors match. Use the functional form Or(...) or wrap in parentheses before sending messages.

```jsl

Names Default To Here( 1 );

New Window( "Selector List",
	JSS Context Box(
		V List Box(
			Button Box( "Press Me", <<Margin( 20 ) ),
			Combo Box( {"One", "Two", "Three"}, ., <<Margin( 10 ) ),
			Check Box( {"One", "Two", "Three"}, ., <<Margin( 15 ) ),
			Text Box( "Hi", <<Set JSS Id( "foo" ) )
		), 
        // CSS> ButtonBox, #foo { background-color: blue; }
		// Set background color for all ButtonBoxes or foo Ids
		<<Set JSS( Expr( (Type( ButtonBox ) | Id( foo )) << Background Color( "blue" ) ) )
	)
);

```

### Type

**Syntax:** Type( boxTypeName )

**Description:** Matches boxes of the given type (loose comparison).

```jsl

Names Default To Here( 1 );

New Window( "Type",
	JSS Context Box(
		V List Box(
			Button Box( "Press Me" ),
			Combo Box( {"One", "Two", "Three"}, . ),
			Check Box( {"One", "Two", "Three"}, . ),

		), 
        // CSS> ButtonBox { margin: 10px; }
		<<Set JSS(
			Expr(
				Type( ButtonBox ) << Margin( 10 );
				Type( ListBoxBox ) << Margin( 12 );
				Type( OutlineBox ) << Margin( 4 );
			)
		)
	)
);

```

### Universal

**Syntax:** Universal()

**Description:** Matches all boxes. Useful mainly for clearly expressing intent.

```jsl

Names Default To Here( 1 );

New Window( "Universal",
	JSS Context Box(
		V List Box(
			Button Box( "Press Me" ),
			Combo Box( {"One", "Two", "Three"}, . ),
			Check Box( {"One", "Two", "Three"}, . ),

		), 
        // CSS> * { margin: 0px; }
		// Set the margin on EVERY box to 100 unless another selector says otherwise
		<<Set JSS(
			Expr(
				Universal() << Margin( 100 );
				Type( ButtonBox ) << Margin( 20 );
			)
		)
	)
);

```

