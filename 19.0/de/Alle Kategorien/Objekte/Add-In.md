# Add-In



## Elementmeldungen

### Auto Load

**Syntax:** addin &lt;&lt; Auto Load( boolean )

**Beschreibung:** Legt fest, ob beim Starten von JMP ein Add-in automatisch geladen werden soll oder nicht.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**Syntax:** name = addin &lt;&lt; Display Name

**Beschreibung:** Gibt den Anzeigenamen für ein Add-in zurück.

#### Beispiel 1

```jsl

addins = Get Addins();
addins << Display Name();

```

#### Beispiel 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**Syntax:** folder = addin &lt;&lt; Home Folder

**Beschreibung:** Gibt den Startordner für ein Add-in zurück.

#### Beispiel 1

```jsl

addins = Get Addins();
addins << Home Folder();

```

#### Beispiel 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**Syntax:** id = addin &lt;&lt; ID

**Beschreibung:** Gibt die eindeutige ID für ein Add-in zurück.

#### Beispiel 1

```jsl

addins = Get Addins();
addins << ID();

```

#### Beispiel 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**Syntax:** x = addin &lt;&lt; Is Loaded

**Beschreibung:** Gibt zurück, ob derzeit ein Add-in geladen ist oder nicht.

#### Beispiel 1

```jsl

addins = Get Addins();
addins << Is Loaded();

```

#### Beispiel 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**Syntax:** addin &lt;&lt; Load

**Beschreibung:** Lädt ein Add-in.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**Syntax:** addin &lt;&lt; Unload

**Beschreibung:** Entlädt ein Add-in.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**Syntax:** ver = addin &lt;&lt; Version

**Beschreibung:** Gibt die Versionsnummer für ein Add-in zurück.

#### Beispiel 1

```jsl

addins = Get Addins();
addins << Version();

```

#### Beispiel 2

```jsl

addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

