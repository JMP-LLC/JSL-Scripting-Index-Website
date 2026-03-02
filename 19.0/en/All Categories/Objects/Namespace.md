# Namespace



## Associated Constructors

### New Namespace

**Syntax:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Description:** Creates a namespace where all functions and variables created are defined only within the specified name.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);

```

## Item Messages

### Contains

**Syntax:** obj &lt;&lt; Contains( string )

**Description:** Returns a 1 if the namespace contains the specified string expression, or a 0 otherwise.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Contains( "nObs" );

```

### Delete Namespace

**Syntax:** nsref &lt;&lt; Delete Namespace( &lt; Force( boolean ) &gt; )

**Description:** Deletes this namespace.

**JMP Version Added:** 14

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Delete Namespace;
Show( nsref );

```

### First

**Syntax:** obj &lt;&lt; First

**Description:** Returns the string expression for the first item in this namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << First;

```

### Get Contents

**Syntax:** obj &lt;&lt; Get Contents

**Description:** Returns a list of items within this namespace, where each element is a two item list containing a key and its associated value.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Contents;

```

### Get Keys

**Syntax:** obj &lt;&lt; Get Keys

**Description:** Returns a list of keys within this namespace, where a key is string representation of an individual item contained in the namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Keys;

```

### Get Name

**Syntax:** obj &lt;&lt; Get Name

**Description:** Returns the name of this namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
space name = nsref << Get Name;

```

### Get Value

**Syntax:** obj &lt;&lt; Get Value( string )

**Description:** Returns the value of the specified item within this namespace. The "string" is the key to the item.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Value( "nObs" );

```

### Get Values

**Syntax:** obj &lt;&lt; Get Values

**Description:** Returns a list of values corresponding to each item within this namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Values;

```

### Insert

**Syntax:** obj &lt;&lt; Insert( string, value )

**Description:** Inserts a string expression, with the specified value into this namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Insert( "X", 25 );
Show( nsref );

```

### Lock Namespace

**Syntax:** obj &lt;&lt; Lock Namespace( &lt;string, | {string, ...}&gt;* )

**Description:** Locks all variables or specified named variables in this namespace and prevents variables from being added, changed, or removed.

**JMP Version Added:** 14

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace;
Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**Syntax:** obj &lt;&lt; N Items

**Description:** Returns the number of items contains in this namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
n = nsref << N Items;

```

### Next

**Syntax:** obj &lt;&lt; Next( string )

**Description:** Returns the string expression for the next item following the key specified in this namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Next( "addition" );

```

### Remove

**Syntax:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**Description:** Removes the specified string expression from the namespace.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Remove( "nObs" );
Show( nsref );

```

### Show Contents

**Syntax:** obj &lt;&lt; Show Contents

**Description:** Shows the contents of a namespace in the JMP log.

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Show Contents;

```

### Unlock Namespace

**Syntax:** obj &lt;&lt; Unlock Namespace( &lt;string | {string, ...}&gt;* )

**Description:** Unlocks a previously locked namespace with all variables locked in this namespace and prevented variables from being added, changed, or removed.

**JMP Version Added:** 14

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace( "nObs" );
Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); 
//Try again after unlocking. 
nsref << Unlock Namespace( "nObs" );
Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

