# Add-In



## Messages d'éléments

### Auto Load

**Syntaxe :** addin &lt;&lt; Auto Load( boolean )

**Description :** Définit si un complément doit ou non être chargé automatiquement pendant le processus de démarrage de JMP.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**Syntaxe :** name = addin &lt;&lt; Display Name

**Description :** Renvoie le nom d&apos;affichage d&apos;un complément.

**Exemple 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**Syntaxe :** folder = addin &lt;&lt; Home Folder

**Description :** Renvoie le dossier de base d&apos;un complément.

**Exemple 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**Syntaxe :** id = addin &lt;&lt; ID

**Description :** Renvoie l&apos;ID unique d&apos;un complément.

**Exemple 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**Syntaxe :** x = addin &lt;&lt; Is Loaded

**Description :** Renvoie si un complément est actuellement chargé ou non.

**Exemple 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**Syntaxe :** addin &lt;&lt; Load

**Description :** Charge un complément.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**Syntaxe :** addin &lt;&lt; Unload

**Description :** Désinstalle un complément.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**Syntaxe :** ver = addin &lt;&lt; Version

**Description :** Renvoie le numéro de version d&apos;un complément.

**Exemple 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

