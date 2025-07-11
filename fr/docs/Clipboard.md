# Clipboard



### Get Flavor Data

**Syntaxe :** clp << Get Flavor Data( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ..., <<<Text>)

**Description :** Returns data from the Clipboard for the named flavor if it exists, error otherwise. Graphic returns an Image. All other flavors, even Text, return a Blob unless you use the <<Text option.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );

Set Clipboard( "Get Flavor Data Example" );
clp = New Clipboard( <<Get From OS );
Show( clp << Get Flavor Data( "Text" ) );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Has Flavor

**Syntaxe :** clp << Has Flavor( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ... )

**Description :** Returns 1 if the Clipboard offers the named flavor of data, 0 otherwise.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );

clp = New Clipboard();
clp << Set Flavor Data( "Text", "Has Flavor Example" );
Show( clp << Has Flavor( "Text" ) );
Show( clp << Has Flavor( "Graphic" ) );

```

### New Clipboard

**Syntaxe :** clp = New Clipboard(<<<Get From OS>)

**Description :** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );

clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### Send To OS

**Syntaxe :** clp << Send To OS

**Description :** Places the contents of the Clipboard onto the OS Clipboard.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );

clp = New Clipboard();
clp << Set Flavor Data( "Text", "Send To OS Example" );
clp << Send To OS;
Show( Get Clipboard() );

```

### Set Flavor Data

**Syntaxe :** clp << Set Flavor Data( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ..., String | Blob | Image)

**Description :** Provides data to the Clipboard for the named flavor and adds the flavor to the Clipboard. You should provide Graphic with an Image. All other flavors can be provided String or Blob data.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );

clp = New Clipboard();
clp << Set Flavor Data( "Text", "Set Flavor Data Example" );
clp << Set Flavor Data(
	"Graphic",
	New Image( "$SAMPLE_IMAGES/windmap.png" )
);
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

