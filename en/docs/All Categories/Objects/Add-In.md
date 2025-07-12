# Add-In



## Item Messages

### Auto Load

**Syntax:** addin << Auto Load( boolean )

**Description:** Sets whether or not an add-in should be automatically loaded during JMP&apos;s startup process.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**Syntax:** name = addin << Display Name

**Description:** Returns the display name for an add-in.

**Example 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**Example 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**Syntax:** folder = addin << Home Folder

**Description:** Returns the home folder for an add-in.

**Example 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**Example 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**Syntax:** id = addin << ID

**Description:** Returns the unique ID for an add-in.

**Example 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**Example 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**Syntax:** x = addin << Is Loaded

**Description:** Returns whether or not an add-in is currently loaded.

**Example 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**Example 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**Syntax:** addin << Load

**Description:** Loads an add-in.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**Syntax:** addin << Unload

**Description:** Unloads an add-in.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**Syntax:** ver = addin << Version

**Description:** Returns the version number for an add-in.

**Example 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**Example 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

