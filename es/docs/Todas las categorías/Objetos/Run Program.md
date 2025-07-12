# Run Program



## Constructores asociados

### Run Program

**Sintaxis:** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**Descripción:** Controla un programa externo mediante stdin y stdout.

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

## Mensajes del elemento

### Can Read

**Sintaxis:** bool = obj << Can Read

**Descripción:** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**Sintaxis:** bool = obj << Can Write

**Descripción:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**Sintaxis:** bool = obj << Is Read EOF

**Descripción:** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**Sintaxis:** value = obj << Read( < "blob" > )

**Descripción:** Read standard output from executable as text or blob.

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

**Sintaxis:** obj << Write( string )

**Descripción:** Write text to the program&apos;s standard input.

### Write EOF

**Sintaxis:** obj << Write EOF

**Descripción:** Write the end of file for the RunProgram object.

