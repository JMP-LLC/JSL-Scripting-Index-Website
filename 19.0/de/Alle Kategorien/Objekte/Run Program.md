# Run Program



## Elementmeldungen

### Can Read

**Syntax:** bool = obj &lt;&lt; Can Read

**Beschreibung:** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl


value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**Syntax:** bool = obj &lt;&lt; Can Write

**Beschreibung:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**Syntax:** bool = obj &lt;&lt; Is Read EOF

**Beschreibung:** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl


value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**Syntax:** value = obj &lt;&lt; Read( &lt; "blob" &gt; )

**Beschreibung:** Read standard output from executable as text or blob.

```jsl


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

**Syntax:** obj &lt;&lt; Write( string )

**Beschreibung:** Write text to the program&apos;s standard input.

### Write EOF

**Syntax:** obj &lt;&lt; Write EOF

**Beschreibung:** Write the end of file for the RunProgram object.

## Zugehörige Konstruktoren

### Run Program

**Syntax:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**Beschreibung:** Ein externes Programm mit stdin und stdout steuern.

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

