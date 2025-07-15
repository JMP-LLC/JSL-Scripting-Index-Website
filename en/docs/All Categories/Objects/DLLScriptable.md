# DLLScriptable



## Associated Constructors

### Load DLL

**Syntax:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Description:** Loads a DLL pointed to by the specified path.

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

## Item Messages

### Call DLL

**Syntax:** obj &lt;&lt; Call DLL( function name, signature, args )

**Description:** Calls a specified function within the DLL, with a given signature and arguments.

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Declare Function

**Syntax:** obj &lt;&lt; Declare Function( name, Convention( STDCALL| CDECL| Pascal ), Alias( string ), Arg( Int8| UInt8| Int16| UInt16| Int32| UInt32| Int64| UInt64| Float| Double| AnsiString| UnicodeString| Struct| IntPtr| UIntPtr| ObjPtr, string ), Returns( type ); )

**Description:** Declares the return type and parameter types of a function defined in the DLL so that it can be successfully invoked from JSL.

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << DeclareFunction(
		"MessageBoxW",
		Convention( STDCALL ),
		Alias( "MsgBox" ),
		Arg( IntPtr, "hWnd" ),
		Arg( UnicodeString, "message" ),
		Arg( UnicodeString, "caption" ),
		Arg( UInt32, "uType" ),
		Returns( Int32 )
	);
	result = dll << MsgBox( 0, "Here is a message from JMP.", "Call DLL", 321 );
	Show( result );
);

```

### Get Declaration JSL

**Syntax:** obj &lt;&lt; Get Declaration JSL

**Description:** Retrieves the declaration JSL from the DLL and displays it in the log. This message applies only to DLLs that contain the function, _JMP_Declarations().

```jsl

Names Default To Here( 1 );
dll = Load DLL( /*DLL with JSL keyword*/ ); 
//dll << Get Declaration JSL;

```

### Show Functions

**Syntax:** obj &lt;&lt; Show Functions

**Description:** Stream the list of declared functions to the log

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << DeclareFunction(
		"MessageBoxW",
		Convention( STDCALL ),
		Alias( "MsgBox" ),
		Arg( IntPtr, "hWnd" ),
		Arg( UnicodeString, "message" ),
		Arg( UnicodeString, "caption" ),
		Arg( UInt32, "uType" ),
		Returns( Int32 )
	);
	dll << Show Functions;
);

```

### Unload DLL

**Syntax:** obj &lt;&lt; Unload DLL

**Description:** Unloads the DLL.

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

