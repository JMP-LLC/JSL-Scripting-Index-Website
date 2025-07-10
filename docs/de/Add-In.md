# Add-In



### Auto Load

**Syntax:** addin << Auto Load( boolean )

**Beschreibung:** Legt fest, ob beim Starten von JMP ein Add-in automatisch geladen werden soll oder nicht.

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**Syntax:** name = addin << Display Name

**Beschreibung:** Gibt den Anzeigenamen für ein Add-in zurück.

**Beispiel 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**Syntax:** folder = addin << Home Folder

**Beschreibung:** Gibt den Startordner für ein Add-in zurück.

**Beispiel 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**Syntax:** id = addin << ID

**Beschreibung:** Gibt die eindeutige ID für ein Add-in zurück.

**Beispiel 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**Syntax:** x = addin << Is Loaded

**Beschreibung:** Gibt zurück, ob derzeit ein Add-in geladen ist oder nicht.

**Beispiel 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**Syntax:** addin << Load

**Beschreibung:** Lädt ein Add-in.

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**Syntax:** addin << Unload

**Beschreibung:** Entlädt ein Add-in.

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**Syntax:** ver = addin << Version

**Beschreibung:** Gibt die Versionsnummer für ein Add-in zurück.

**Beispiel 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

