# Run Program



## 연결된 생성자

### Run Program

**구문:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**설명:** stdin 및 stdout을 사용하여 외부 프로그램을 제어합니다.

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

## 항목 메시지

### Can Read

**구문:** bool = obj &lt;&lt; Can Read

**설명:** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl


value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**구문:** bool = obj &lt;&lt; Can Write

**설명:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**구문:** bool = obj &lt;&lt; Is Read EOF

**설명:** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl


value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**구문:** value = obj &lt;&lt; Read( &lt; "blob" &gt; )

**설명:** Read standard output from executable as text or blob.

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

**구문:** obj &lt;&lt; Write( string )

**설명:** Write text to the program&apos;s standard input.

### Write EOF

**구문:** obj &lt;&lt; Write EOF

**설명:** Write the end of file for the RunProgram object.

