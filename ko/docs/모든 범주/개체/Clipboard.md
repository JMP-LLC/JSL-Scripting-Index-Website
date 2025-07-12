# Clipboard



## 연결된 생성자

### New Clipboard

**구문:** clp = New Clipboard(<<<Get From OS>)

**설명:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

## 항목 메시지

### Get Flavor Data

**구문:** clp << Get Flavor Data( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ..., <<<Text>)

**설명:** Returns data from the Clipboard for the named flavor if it exists, error otherwise. Graphic returns an Image. All other flavors, even Text, return a Blob unless you use the <<Text option.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

Set Clipboard( "Get Flavor Data Example" );
clp = New Clipboard( <<Get From OS );
Show( clp << Get Flavor Data( "Text" ) );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Has Flavor

**구문:** clp << Has Flavor( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ... )

**설명:** Returns 1 if the Clipboard offers the named flavor of data, 0 otherwise.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

clp = New Clipboard();
clp << Set Flavor Data( "Text", "Has Flavor Example" );
Show( clp << Has Flavor( "Text" ) );
Show( clp << Has Flavor( "Graphic" ) );

```

### Send To OS

**구문:** clp << Send To OS

**설명:** Places the contents of the Clipboard onto the OS Clipboard.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

clp = New Clipboard();
clp << Set Flavor Data( "Text", "Send To OS Example" );
clp << Send To OS;
Show( Get Clipboard() );

```

### Set Flavor Data

**구문:** clp << Set Flavor Data( "Text" | "Graphic" | "RTF" | "DataTablePrivate" | ..., String | Blob | Image)

**설명:** Provides data to the Clipboard for the named flavor and adds the flavor to the Clipboard. You should provide Graphic with an Image. All other flavors can be provided String or Blob data.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );

clp = New Clipboard();
clp << Set Flavor Data( "Text", "Set Flavor Data Example" );
clp << Set Flavor Data( "Graphic", New Image( "$SAMPLE_IMAGES/windmap.png" ) );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

