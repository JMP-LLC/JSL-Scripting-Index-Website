# DLLScriptable



## Elementmeldungen

### Call DLL

**Syntax:** obj << Call DLL( function name, signature, args )

**Beschreibung:** Ruft eine angegebene Funktion innerhalb der DLL mit einer vorgegebenen Signatur und vorgegebenen Argumenten auf.

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

**Syntax:** obj << Declare Function( name, Convention( STDCALL| CDECL| Pascal ), Alias( string ), Arg( Int8| UInt8| Int16| UInt16| Int32| UInt32| Int64| UInt64| Float| Double| AnsiString| UnicodeString| Struct| IntPtr| UIntPtr| ObjPtr, string ), Returns( type ); )

**Beschreibung:** Deklariert den Rückgabetyp und die Parametertypen einer in der DLL defininerten Funktion, so dass sie erfolgreich aus JSL aufgerufen werden kann.

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

**Syntax:** obj << Get Declaration JSL

**Beschreibung:** Ruft die Deklarations-JSL aus der DLL ab und zeigt sie im Log an. Diese Meldung gilt nur für DLLs, die die Funktion _JMP_Declarations() enthalten.

```jsl

Names Default To Here( 1 );
dll = Load DLL( /*DLL with JSL keyword*/ ); 
//dll << Get Declaration JSL;

```

### Show Functions

**Syntax:** obj << Show Functions

**Beschreibung:** Liste der deklarierten Funktionen zum Log weiterleiten

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

**Syntax:** obj << Unload DLL

**Beschreibung:** Entlädt die DLL.

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

## Zugehörige Konstruktoren

### Load DLL

**Syntax:** dll = Load DLL( file path | Base Name( file path without extension ), < AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )> )

**Beschreibung:** Lädt eine DLL, auf die der angegebene Pfad zeigt.

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

