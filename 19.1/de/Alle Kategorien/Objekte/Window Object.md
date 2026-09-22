# Window Object



## Elementmeldungen

### Set Window Title

**Syntax:** obj &lt;&lt; Set Window Title

**Beschreibung:** Legt den Fenstertitel fest.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Title( "New Title" );

```

## Freigegebene Elementmeldungen

### Bring Window To Front

**Syntax:** obj &lt;&lt; Bring Window To Front

**Beschreibung:** Zeigt das Fenster im Vordergrund an.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Run Script( "Bivariate" );w << Bring Window To Front;

```

### Close Window

**Syntax:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Beschreibung:** Schließt das Fenster.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Close Window;

```

### Get Content Size

**Syntax:** obj &lt;&lt; Get Content Size

**Beschreibung:** Gibt die Inhaltsgröße innerhalb des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Content Size();Show( c );

```

### Get On Close

**Syntax:** obj &lt;&lt; Get On Close

**Beschreibung:** Gibt das Skript oder die Funktion zurück, das/die beim Schließen des Fensters ausgeführt wird.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);Show( w << Get On Close );

```

### Get Page Setup

**Syntax:** obj &lt;&lt; Get Page Setup

**Beschreibung:** Informationen für die Seiteneinrichtung für PDFs abrufen

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Page Setup Test" ) );w << get page setup();

```

### Get Project

**Syntax:** project = obj &lt;&lt; Get Project()

**Beschreibung:** Gibt das übergeordnete Projekt des Fensters zurück, oder Leer(), wenn sich das Fenster nicht in einem Projekt befindet.

**JMP Version hinzugefügt:** 14

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Project();Show( c );

```

### Get Show Window

**Syntax:** obj &lt;&lt; Get Show Window

**Beschreibung:** Gibt die Sichtbarkeit des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );Print( w << Get Show Window() );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Window Icon

**Syntax:** obj &lt;&lt; Get Window Icon

**Beschreibung:** Gibt das Fenstersymbol zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Icon;Show( t );

```

### Get Window Position

**Syntax:** obj &lt;&lt; Get Window Position

**Beschreibung:** Gibt die Position des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );p = w << Get Window Position();Show( p );

```

### Get Window Size

**Syntax:** obj &lt;&lt; Get Window Size

**Beschreibung:** Gibt die Größe des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );s = w << Get Window Size();Show( s );

```

### Get Window Title

**Syntax:** obj &lt;&lt; Get Window Title

**Beschreibung:** Gibt den Fenstertitel zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Title;Show( t );

```

### Get Window View

**Syntax:** obj &lt;&lt; Get Window View

**Beschreibung:** Gibt die aktuelle Fensteransicht zurück. Fenster können „sichtbar“, „unsichtbar“ oder „privat“ sein.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Print( w << Get Window View() );

```

### Is Modal Dialog

**Syntax:** obj &lt;&lt; Is Modal Dialog

**Beschreibung:** Gibt „wahr“ zurück, wenn das Fenster ein modales Dialogfeld ist. Nur nützlich bei Aufruf aus einem Fenster-Handler-Rückruf.

```jsl

With Window Handler(	New Window( "Modal Window", <<Modal ),	Function( {win},		Print( win << Is Modal Dialog() );		win << close window();	));

```

### Maximize Window

**Syntax:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Beschreibung:** Maximiert das Fenster. Das Standardargument ist 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Maximize Window( 1 );Wait( 1 );w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Beschreibung:** Minimiert das Fenster. Das Standardargument ist 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Minimize Window( 1 );Wait( 1 );w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj &lt;&lt; Move Window( x,y )

**Beschreibung:** Verschiebt das Fenster an die angegebene Position.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Move Window( 500, 500 );

```

### On Close

**Syntax:** obj &lt;&lt; On Close( script )

**Beschreibung:** Legt ein Skript oder eine Funktion fest, das bzw. die beim Schließen des Fensters ausgeführt wird. Dieses Skript muss 1 zurückgeben, um das Schließen zu gestatten, oder 0, um zu verhindern, dass das Fenster geschlossen wird.

#### Funktion beim Schließen

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	Function( {this},         // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled		New Window( "Are you sure?",			<<modal,			V List Box(				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )			)		)["button"] == 1	));

```

#### Skript beim Schließen

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);

```

### Optimize Display

**Syntax:** obj &lt;&lt; Optimize Display

**Beschreibung:** Legt für die Spaltenbreiten und das Fenster der Datentabelle eine optimale Größe fest.

**JMP Version hinzugefügt:** 14

```jsl

//This message applies to Data Table objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Optimize Display;

```

### Pad Window

**Syntax:** obj &lt;&lt; Pad Window( bool )

**Beschreibung:** Schaltet die Fensteranpassung ein oder aus.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );r = d << report;r << Pad Window( 0 );

```

### Print Window

**Syntax:** obj &lt;&lt; Print Window

**Beschreibung:** Druckt das Fenster.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Print Window;

```

### Save Window Report

**Syntax:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Beschreibung:** Speichert das aktuelle Berichtsfenster in einer JMP-Berichtsdatei (\*.jrp).

**JMP Version hinzugefügt:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report windowOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Set Content Size

**Syntax:** obj &lt;&lt; Set Content Size( x,y )

**Beschreibung:** Legt die Inhaltsgröße innerhalb des Fensters fest.

```jsl

//This message applies to all display box objectsw = New Window( "Test",	lb = List Box( {"a", "b", "c", "d"} ),	Button Box( "Enable 2nd item",		lb << enable item( 2, 1 );		Show( lb << item enabled( 2 ) );	),	Button Box( "Disable 2nd item",		lb << enable item( 2, 0 );		Show( lb << item enabled( 2 ) );	));Wait( 2 );w << Set Content Size( 400, 300 );

```

### Set Main Window

**Syntax:** obj &lt;&lt; Set Main Window

**Beschreibung:** Fenster als Hauptfenster in JMP festlegen und bisheriges Hauptfenster als normales Fenster festlegen.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Set Main Window;

```

### Set Page Setup

**Syntax:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Beschreibung:** Legt die Informationen für die Seiteneinrichtung fest, die beim Drucken oder Speichern als PDF verwendet werden. Ein Inhaltsverzeichnis kann optional aus Gliederungsfeldern erstellt werden.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );w << Set page setup(	margins( 1, 1, 1, 1 ),	scale( 1 ),	portrait( 1 ),	paper size( "Letter" ),	Table of Contents( "always" ));w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntax:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Fußzeile für den Ausdruck fest.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Footer Test" ) );w << Set Print Footers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Print Headers

**Syntax:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Kopfzeile für den Ausdruck fest.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Header Test" ) );w << Set Print Headers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Window Icon

**Syntax:** obj &lt;&lt; Set Window Icon( icon name )

**Beschreibung:** Legt das Fenstersymbol fest.

```jsl

//This message applies to all display box objectsw = New Window( "Example", ex = Button Box( "New Analysis" ) );w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj &lt;&lt; Set Window Size( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 800, 1200 );

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( state=0|1 )

**Beschreibung:** Blendet das Fenster ein oder aus. Dies ist nützlich, um Fenster kurzzeitig auszublenden. Standardmäßig ein.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );w << Show Window( 1 );

```

### Size Window

**Syntax:** obj &lt;&lt; Size Window( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Size Window( 500, 500 );

```

### Zoom Window

**Syntax:** obj &lt;&lt; Zoom Window

**Beschreibung:** Ändert die Größe des Fensters, so dass es groß genug ist, um seinen gesamten Inhalt anzuzeigen.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 80, 120 );Wait( 2 );w << Zoom Window;

```

