# DLLScriptable



## Constructores asociados

### Load DLL

**Sintaxis:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Descripción:** Carga una DLL situada en la ruta especificada.

```jsl

If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

## Mensajes del elemento

### Call DLL

**Sintaxis:** obj &lt;&lt; Call DLL( function name, signature, args )

**Descripción:** Llama una función especificada dentro de la DLL, con una firma y argumentos dados.

```jsl

If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Declare Function

**Sintaxis:** obj &lt;&lt; Declare Function( name, Convention( STDCALL| CDECL| Pascal ), Alias( string ), Arg( Int8| UInt8| Int16| UInt16| Int32| UInt32| Int64| UInt64| Float| Double| AnsiString| UnicodeString| Struct| IntPtr| UIntPtr| ObjPtr, string ), Returns( type ); )

**Descripción:** Declara el tipo de retorno y los tipos de parámetros de una función definida en la DLL de manera que pueda llamarse con éxito desde JSL.

```jsl

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

**Sintaxis:** obj &lt;&lt; Get Declaration JSL

**Descripción:** Recupera la declaración JSL de la DLL y la muestra en el registro. Este mensaje sólo afecta a aquellas DLL que contengan la función, _JMP_Declarations().

```jsl

dll = Load DLL( /*DLL with JSL keyword*/ ); 
//dll << Get Declaration JSL;

```

### Show Functions

**Sintaxis:** obj &lt;&lt; Show Functions

**Descripción:** Redirige la lista de funciones declaradas hacia el registro.

```jsl

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

**Sintaxis:** obj &lt;&lt; Unload DLL

**Descripción:** Descarga la DLL.

```jsl

If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

