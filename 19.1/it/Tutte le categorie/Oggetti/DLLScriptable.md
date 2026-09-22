# DLLScriptable



## Costruttori associati

### Load DLL

**Sintassi:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Descrizione:** Carica una DLL verso la quale conduce il percorso specificato.

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

## Messaggi degli elementi

### Call DLL

**Sintassi:** obj &lt;&lt; Call DLL( function name, signature, args )

**Descrizione:** Chiama una funzione specificata all&apos;interno della DLL, con firma e argomenti specifici.

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

### Declare Function

**Sintassi:** obj &lt;&lt; Declare Function( name, Convention( STDCALL| CDECL| Pascal ), Alias( string ), Arg( Int8| UInt8| Int16| UInt16| Int32| UInt32| Int64| UInt64| Float| Double| AnsiString| UnicodeString| Struct| IntPtr| UIntPtr| ObjPtr, string ), Returns( type ); )

**Descrizione:** Dichiara il tipo restituito e i tipi di parametri di una funzione definita nella DLL, in modo che sia possibile richiamarla da JSL.

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << DeclareFunction(		"MessageBoxW",		Convention( STDCALL ),		Alias( "MsgBox" ),		Arg( IntPtr, "hWnd" ),		Arg( UnicodeString, "message" ),		Arg( UnicodeString, "caption" ),		Arg( UInt32, "uType" ),		Returns( Int32 )	);	result = dll << MsgBox( 0, "Here is a message from JMP.", "Call DLL", 321 );	Show( result ););

```

### Get Declaration JSL

**Sintassi:** obj &lt;&lt; Get Declaration JSL

**Descrizione:** Recupera la dichiarazione JSL dalla DLL e la visualizza nel log. Questo messaggio si applica solo alle DLL che contengono la funzione _JMP_Declarations().

```jsl

dll = Load DLL( /*DLL with JSL keyword*/ ); //dll << Get Declaration JSL;

```

### Show Functions

**Sintassi:** obj &lt;&lt; Show Functions

**Descrizione:** Invia l&apos;elenco di funzioni dichiarate al log

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << DeclareFunction(		"MessageBoxW",		Convention( STDCALL ),		Alias( "MsgBox" ),		Arg( IntPtr, "hWnd" ),		Arg( UnicodeString, "message" ),		Arg( UnicodeString, "caption" ),		Arg( UInt32, "uType" ),		Returns( Int32 )	);	dll << Show Functions;);

```

### Unload DLL

**Sintassi:** obj &lt;&lt; Unload DLL

**Descrizione:** Scarica la DLL.

```jsl

If( Host is( "Windows" ),	dll = Load DLL( "C:/Windows/System32/User32.DLL" );	dll << CallDLL( "MessageBeep", "n", 0 );	Wait( 1 );	dll << CallDLL( "MessageBeep", "n", 0 );	dll << UnloadDLL(););

```

