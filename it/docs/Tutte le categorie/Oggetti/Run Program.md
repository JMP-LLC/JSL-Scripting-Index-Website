# Run Program



## Costruttori associati

### Run Program

**Sintassi:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**Descrizione:** Controlla un programma esterno mediante stdin e stdout.

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

## Messaggi degli elementi

### Can Read

**Sintassi:** bool = obj &lt;&lt; Can Read

**Descrizione:** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**Sintassi:** bool = obj &lt;&lt; Can Write

**Descrizione:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**Sintassi:** bool = obj &lt;&lt; Is Read EOF

**Descrizione:** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**Sintassi:** value = obj &lt;&lt; Read( &lt; "blob" &gt; )

**Descrizione:** Read standard output from executable as text or blob.

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

**Sintassi:** obj &lt;&lt; Write( string )

**Descrizione:** Write text to the program&apos;s standard input.

### Write EOF

**Sintassi:** obj &lt;&lt; Write EOF

**Descrizione:** Write the end of file for the RunProgram object.

