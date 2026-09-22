# Add-In



## Item Messages

### Auto Load

**Syntax:** addin &lt;&lt; Auto Load( boolean )

**Description:** Sets whether or not an add-in should be automatically loaded during JMP&apos;s startup process.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Auto Load( 1 ),	Print( "Add-In ID Not Found" ));

```

### Display Name

**Syntax:** name = addin &lt;&lt; Display Name

**Description:** Returns the display name for an add-in.

**Example 1**

```jsl

addins = Get Addins();addins << Display Name();

```

**Example 2**

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Display Name(),	Print( "Add-In ID Not Found" ));

```

### Home Folder

**Syntax:** folder = addin &lt;&lt; Home Folder

**Description:** Returns the home folder for an add-in.

**Example 1**

```jsl

addins = Get Addins();addins << Home Folder();

```

**Example 2**

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Home Folder(),	Print( "Add-In ID Not Found" ));

```

### ID

**Syntax:** id = addin &lt;&lt; ID

**Description:** Returns the unique ID for an add-in.

**Example 1**

```jsl

addins = Get Addins();addins << ID();

```

**Example 2**

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << ID(),	Print( "Add-In ID Not Found" ));

```

### Is Loaded

**Syntax:** x = addin &lt;&lt; Is Loaded

**Description:** Returns whether or not an add-in is currently loaded.

**Example 1**

```jsl

addins = Get Addins();addins << Is Loaded();

```

**Example 2**

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Is Loaded(),	Print( "Add-In ID Not Found" ));

```

### Load

**Syntax:** addin &lt;&lt; Load

**Description:** Loads an add-in.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Load(),	Print( "Add-In ID Not Found" ));

```

### Unload

**Syntax:** addin &lt;&lt; Unload

**Description:** Unloads an add-in.

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Unload(),	Print( "Add-In ID Not Found" ));

```

### Version

**Syntax:** ver = addin &lt;&lt; Version

**Description:** Returns the version number for an add-in.

**Example 1**

```jsl

addins = Get Addins();addins << Version();

```

**Example 2**

```jsl

addin = Get Addin( "com.mycompany.myaddin" );If( !Is Missing( addin ),	addin << Version(),	Print( "Add-In ID Not Found" ));

```

