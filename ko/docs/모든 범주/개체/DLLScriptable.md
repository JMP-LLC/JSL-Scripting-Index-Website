# DLLScriptable



## 연결된 생성자

### Load DLL

**구문:** dll = Load DLL( file path | Base Name( file path without extension ), < AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )> )

**설명:** 지정한 경로가 가리키는 DLL을 로드합니다.

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

## 항목 메시지

### Call DLL

**구문:** obj << Call DLL( function name, signature, args )

**설명:** 지정된 함수를 제공된 서명과 인수를 사용하여 DLL 내에서 호출합니다.

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

**구문:** obj << Declare Function( name, Convention( STDCALL| CDECL| Pascal ), Alias( string ), Arg( Int8| UInt8| Int16| UInt16| Int32| UInt32| Int64| UInt64| Float| Double| AnsiString| UnicodeString| Struct| IntPtr| UIntPtr| ObjPtr, string ), Returns( type ); )

**설명:** JSL에서 성공적으로 호출할 수 있도록 DLL에 정의된 함수의 파라미터 유형과 반환 유형을 선언합니다.

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

**구문:** obj << Get Declaration JSL

**설명:** DLL에서 선언 JSL을 가져오고 로그에 표시합니다. 이 메시지는 _JMP_Declarations() 함수가 포함된 DLL에만 해당합니다.

```jsl

Names Default To Here( 1 );
dll = Load DLL( /*DLL with JSL keyword*/ ); 
//dll << Get Declaration JSL;

```

### Show Functions

**구문:** obj << Show Functions

**설명:** 선언된 함수 목록을 로그로 스트리밍합니다.

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

**구문:** obj << Unload DLL

**설명:** DLL을 언로드합니다.

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

