# Clipboard



## Associated Constructors

### New Clipboard

**Syntax:** clp = New Clipboard(&lt;&lt;&lt;Get From OS&gt;)

**Description:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Version Added:** 19

```jsl


clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

## Item Messages

### Get Flavor Data

**Syntax:** clp &lt;&lt; Get Flavor Data( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ..., &lt;&lt;&lt;Text&gt;)

**Description:** Returns data from the Clipboard for the named flavor if it exists, error otherwise. Graphic returns an Image. All other flavors, even Text, return a Blob unless you use the <<Text option.

**JMP Version Added:** 19

```jsl


Set Clipboard( "Get Flavor Data Example" );
clp = New Clipboard( <<Get From OS );
Show( clp << Get Flavor Data( "Text" ) );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Has Flavor

**Syntax:** clp &lt;&lt; Has Flavor( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ... )

**Description:** Returns 1 if the Clipboard offers the named flavor of data, 0 otherwise.

**JMP Version Added:** 19

```jsl


clp = New Clipboard();
clp << Set Flavor Data( "Text", "Has Flavor Example" );
Show( clp << Has Flavor( "Text" ) );
Show( clp << Has Flavor( "Graphic" ) );

```

### Send To OS

**Syntax:** clp &lt;&lt; Send To OS

**Description:** Places the contents of the Clipboard onto the OS Clipboard.

**JMP Version Added:** 19

```jsl


clp = New Clipboard();
clp << Set Flavor Data( "Text", "Send To OS Example" );
clp << Send To OS;
Show( Get Clipboard() );

```

### Set Flavor Data

**Syntax:** clp &lt;&lt; Set Flavor Data( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ..., String | Blob | Image)

**Description:** Provides data to the Clipboard for the named flavor and adds the flavor to the Clipboard. You should provide Graphic with an Image. All other flavors can be provided String or Blob data.

**JMP Version Added:** 19

```jsl


clp = New Clipboard();
clp << Set Flavor Data( "Text", "Set Flavor Data Example" );
clp << Set Flavor Data( "Graphic", New Image( "$SAMPLE_IMAGES/windmap.png" ) );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

