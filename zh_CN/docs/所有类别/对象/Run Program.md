# Run Program



## 关联的构造器

### Run Program

**语法:** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**说明:** 使用 stdin 和 stdout 控制外部程序。

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

## 项消息

### Can Read

**语法:** bool = obj << Can Read

**说明:** Returns 1 if the RunProgram object can be read from and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Can Write

**语法:** bool = obj << Can Write

**说明:** Returns boolean for whether or not the RunProgram object can be written to via standard input.

### Is Read EOF

**语法:** bool = obj << Is Read EOF

**说明:** Returns 1 if the program has finished writing to standard output and 0 if not.

```jsl

Names Default To Here( 1 );

value = "";
rp = Run Program( Executable( "ping.exe" ), Options( {"-n 5", "localhost"} ) );
While( !(rp << Is Read EOF), If( rp << Can Read, value ||= rp << Read, Wait( 0.01 ) ) );
Show( value );

```

### Read

**语法:** value = obj << Read( < "blob" > )

**说明:** Read standard output from executable as text or blob.

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

**语法:** obj << Write( string )

**说明:** Write text to the program&apos;s standard input.

### Write EOF

**语法:** obj << Write EOF

**说明:** Write the end of file for the RunProgram object.

