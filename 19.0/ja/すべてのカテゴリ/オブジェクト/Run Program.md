# Run Program



## 関連するコンストラクター

### Run Program

**構文:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**説明:** 標準入力(stdin)と標準出力(stdout)を使って外部プログラムを実行する。

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

## 項目のメッセージ

### Can Read

**構文:** bool = obj &lt;&lt; Can Read

**説明:** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl


value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**構文:** bool = obj &lt;&lt; Can Write

**説明:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**構文:** bool = obj &lt;&lt; Is Read EOF

**説明:** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl


value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**構文:** value = obj &lt;&lt; Read( &lt; "blob" &gt; )

**説明:** Read standard output from executable as text or blob.

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

**構文:** obj &lt;&lt; Write( string )

**説明:** Write text to the program&apos;s standard input.

### Write EOF

**構文:** obj &lt;&lt; Write EOF

**説明:** Write the end of file for the RunProgram object.

