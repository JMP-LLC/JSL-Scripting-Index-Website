# JMP Live Content



## Zugehörige Konstruktoren

### JMP Live Content

**Syntax:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**Beschreibung:** Erzeugt interaktive Inhalte für die Veröffentlichung auf JMP Live. 

	Der erste Parameter ist erforderlich und gibt die Daten an, die für den Inhalt verwendet werden sollen. Diese Daten können ein Bericht, eine Datentabelle, eine Karte oder ein Bild sein. 

	Titel und Beschreibung werden verwendet, um jede Art von veröffentlichem Inhalt individuell zu gestalten. Die übrigen Parameter sind optional und werden nur zur Anpassung des Berichtsinhalts verwendet. 

	„Daten veröffentlichen“ gibt an, ob die im Bericht verwendeten Daten in JMP Live veröffentlicht werden. Die Daten für den Bericht werden standardmäßig veröffentlicht.

	„Warnungen aktivieren“ gibt an, ob Regelkartenwarnungen für den Bericht aktiviert werden sollen. Regelkartenwarnungen sind standardmäßig deaktiviert. 

	„Optimierung“ dient dazu, die Art und Weise anzupassen, wie der Bericht in JMP Live veröffentlicht wird. Der Bericht wird standardmäßig so veröffentlicht, dass eine größere Interaktivität möglich ist.

#### Beispiel 1

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

#### Beispiel 2

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

#### Beispiel 3

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

#### Beispiel 4

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

