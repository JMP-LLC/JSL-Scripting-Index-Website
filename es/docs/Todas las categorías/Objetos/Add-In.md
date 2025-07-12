# Add-In



## Mensajes del elemento

### Auto Load

**Sintaxis:** addin << Auto Load( boolean )

**Descripción:** Establece si un complemento debe o no cargarse automáticamente durante el proceso de inicio de JMP.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**Sintaxis:** name = addin << Display Name

**Descripción:** Devuelve el nombre de visualización de un complemento.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**Sintaxis:** folder = addin << Home Folder

**Descripción:** Devuelve la carpeta principal de un complemento.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**Sintaxis:** id = addin << ID

**Descripción:** Devuelve el ID exclusivo de un complemento.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**Sintaxis:** x = addin << Is Loaded

**Descripción:** Devuelve si un complemento está actualmente cargado o no.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**Sintaxis:** addin << Load

**Descripción:** Carga un complemento.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**Sintaxis:** addin << Unload

**Descripción:** Descarga un complemento.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**Sintaxis:** ver = addin << Version

**Descripción:** Devuelve el número de versión de un complemento.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

