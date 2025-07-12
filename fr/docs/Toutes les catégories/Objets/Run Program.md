# Run Program



## Constructeurs associés

### Run Program

**Syntaxe :** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**Description :** Contrôler un programme externe à l&apos;aide de stdin et stdout.

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

## Messages d'éléments

### Can Read

**Syntaxe :** bool = obj << Can Read

**Description :** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF),
	If( rp << Can Read,
		value ||= rp << Read,
		Wait( 0.01 )
	)
);
Show( value );

```

### Can Write

**Syntaxe :** bool = obj << Can Write

**Description :** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**Syntaxe :** bool = obj << Is Read EOF

**Description :** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF),
	If( rp << Can Read,
		value ||= rp << Read,
		Wait( 0.01 )
	)
);
Show( value );

```

### Read

**Syntaxe :** value = obj << Read( < "blob" > )

**Description :** Read standard output from executable as text or blob.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program(
	Executable( "ping.exe" ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction(
		Function( {this},
			value ||= this << read;
			Show( value );
		)
	)
);

```

### Write

**Syntaxe :** obj << Write( string )

**Description :** Write text to the program&apos;s standard input.

### Write EOF

**Syntaxe :** obj << Write EOF

**Description :** Write the end of file for the RunProgram object.

