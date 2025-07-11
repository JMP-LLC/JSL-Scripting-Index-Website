# Add-In



### Auto Load

**Sintassi:** addin << Auto Load( boolean )

**Descrizione:** Imposta il caricamento automatico o meno di un add-in durante il processo di avvio di JMP.

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**Sintassi:** name = addin << Display Name

**Descrizione:** Restituisce il nome visualizzato di un add-in.

**Esempio 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**Esempio 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**Sintassi:** folder = addin << Home Folder

**Descrizione:** Restituisce la cartella principale di un add-in.

**Esempio 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**Esempio 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**Sintassi:** id = addin << ID

**Descrizione:** Restituisce l’ID univoco di un add-in.

**Esempio 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**Esempio 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**Sintassi:** x = addin << Is Loaded

**Descrizione:** Restituisce il caricamento in corso o meno di un add-in.

**Esempio 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**Esempio 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**Sintassi:** addin << Load

**Descrizione:** Carica un add-in.

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**Sintassi:** addin << Unload

**Descrizione:** Scarica un add-in.

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**Sintassi:** ver = addin << Version

**Descrizione:** Restituisce il numero di versione di un add-in.

**Esempio 1**

```js

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**Esempio 2**

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

