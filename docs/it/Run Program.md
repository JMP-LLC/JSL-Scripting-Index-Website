# Run Program



### Can Read

**Sintassi:** bool = obj << Can Read

**Descrizione:** Returns 1 if the RunProgram object can be read from and 0 if not.

```js

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**Sintassi:** bool = obj << Can Write

**Descrizione:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**Sintassi:** bool = obj << Is Read EOF

**Descrizione:** Returns 1 if the program has finished writing to standard output and 0 if not.

```js

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**Sintassi:** value = obj << Read( < "blob" > )

**Descrizione:** Read standard output from executable as text or blob.

```js

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

### Run Program

**Sintassi:** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**Descrizione:** Controlla un programma esterno mediante stdin e stdout.

```js

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

### Write

**Sintassi:** obj << Write( string )

**Descrizione:** Write text to the program&apos;s standard input.

### Write EOF

**Sintassi:** obj << Write EOF

**Descrizione:** Write the end of file for the RunProgram object.

