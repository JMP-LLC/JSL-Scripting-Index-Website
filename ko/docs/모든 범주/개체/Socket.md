# Socket



## 연결된 생성자

### Socket

**구문:** socketHandle = Socket( <STREAM | DGRAM> )

**설명:** 이 컴퓨터 또는 네트워크에 연결된 다른 컴퓨터의 소켓과 통신할 수 있는 소켓 변수를 생성합니다. 기본 인수는 STREAM입니다. 귀사의 웹 사이트와 통신을 시도해 보십시오.

```jsl

Names Default To Here( 1 );

// see the socket's OBJECT messages in the scripting index for better examples
tCall = Socket();
tcall << Ioctl( FIONBIO, 1 );
rc = tCall << connect( "www.jmp.com", "80" );
If( rc[2] == "ok",
	tCall << <<Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ASCII~HEX"
	);
	While( 1,
		tMessage = tCall << Recv( 100000 );
		If(
			tMessage[2] == "ok",
				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes
		,
			Starts With( tMessage[2], "WOULDBLOCK" ),
				Show( "waiting" ) // sometimes data might not be available yet
		,
			Starts With( tMessage[2], "CLOSED" ),
				Break(); // this is the desired result
		, // else
			Show( tMessage );
			Stop();
		);
	);
	tCall << Close();// done
, // else
	Show( rc );
	Stop();
);

```

## 항목 메시지

### Accept

**구문:** obj << Accept

**설명:** 수신 소켓에서 컴퓨터의 연결을 허용합니다.

```jsl

Names Default To Here( 1 );

// see Listen for a complete example
skt = Socket();
// lots of missing code goes here
rc = skt << accept();
// IMPORTANT: check the rc[2]=="ok", then get the conskt from rc[4].  See Listen example.

```

### Accept Fast

**구문:** obj << Accept Fast

**설명:** 수신 소켓에서 컴퓨터의 연결을 허용합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

// see Listen for a complete example
// Same as <<accept, but does not resolve the client address to a name.
// Sometimes the resolve can take many seconds. 
// remoteaddr = rc[3]; <<< this will be an empty string with <<acceptFast
skt = Socket();
// lots of missing code goes here
rc = skt << AcceptFast();
// IMPORTANT: check the rc[2]=="ok", then get the conskt from rc[4].  See Listen example.

```

### Bind

**구문:** obj << Bind

**설명:** 연결 수신 준비를 위해 컴퓨터의 포트에 소켓을 바인딩합니다.

```jsl

Names Default To Here( 1 );

// see Listen for complete example
skt = Socket();
rc = skt << bind( "localhost", "80" );

```

### Close

**구문:** obj << Close

**설명:** 소켓을 닫습니다. 다시 사용하기 전에 소켓을 재생성해야 합니다. 연결된 소켓은 로컬 또는 원격으로 닫을 수 있습니다. 수신 소켓은 로컬로 닫을 수 있습니다.

```jsl

Names Default To Here( 1 );
x = Socket();/* use the socket...*/ x << Close();

```

### Connect

**구문:** obj << Connect

**설명:** 원격 컴퓨터에 연결합니다.

```jsl

Names Default To Here( 1 );

// <<connect is used to connect to a remote computer with an open listening socket.
// some web sites require www, some don't like it.  Some require the HTTP/1.1 format, some are happy with HTTP/1.0 in the GET.
// You'll want to make the error handling more robust...
skt = Socket();
rc = skt << connect( "www.jmp.com", "80" );
If( rc[2] != "ok",
	Show( rc );
	Stop();
); 

// request a resource from the remote computer.  the trailing slash in the example might or might not be needed.
skt << Send(
	Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ascii~hex"
	)
);
// gather the response, it might be more than one buffer
blob = Char To Blob( "" ); // start with nothing
blobtext = "";
timeout = 50; // give remote a short time to send a response.  you might need to tune the timeout behavior.
While( timeout-- > 0,
	rc = skt << recv( 10000 );
	If(
		rc[2] == "ok",
			blob = blob || rc[3]; // recv always returns a blob, not text
			Write( "\!nsome text received" ); // typically about three of these, ymmv
			timeout = 50; // reset, still receiving ok
	, // else
		Starts With( rc[2], "CLOSED" ),
			Break(); // done
	, // else
		Starts With( rc[2], "WOULDBLOCK" ), //
			Write( "\!nwaiting..." ) // still fetching, maybe
	, // else...what?
		Show( rc );
		Stop(); // that was unexpected
	);
	blobtext = Blob To Char( blob, encoding = "utf-8" );
	If( timeout == 0,
		Write( "\!nTimed out waiting for remote request" );
		Stop();
	);
	Wait( .05 ); // give the OS some cycles to work with the incoming data
);

Show( Length( blob ) );

```

### GetPeerName

**구문:** obj << GetPeerName

**설명:** 원격 컴퓨터의 이름을 가져옵니다.

```jsl

Names Default To Here( 1 );

tCall = Socket();
rc = tCall << connect( "www.jmp.com", "80" );
Show( rc, tCall << getPeerName );

```

### GetSockName

**구문:** obj << GetSockName

**설명:** 로컬 컴퓨터의 이름을 가져옵니다.

```jsl

Names Default To Here( 1 );

tCall = Socket();
rc = tCall << connect( "www.jmp.com", "80" );
Show( rc, tCall << getSockName );

```

### Ioctl

**구문:** obj << Ioctl

**설명:** 소켓을 비차단 모드로 전환하거나 얼마나 대기하다가 읽을지 데이터 양을 결정합니다.

```jsl

Names Default To Here( 1 );

// see Listen for complete example
skt = Socket();
skt << Ioctl( FIONBIO, 0 | 1 ); // block/non-block
len = skt << Ioctl( FIONREAD ); // how much data available
// you should not use FIONREAD to poll for data availability.  Use something like Listen or Connect examples

```

### Listen

**구문:** obj << Listen

**설명:** 소켓을 수신 모드로 설정합니다. 원격 컴퓨터에서 연결을 허용하려면 허용을 사용하십시오.

```jsl

Names Default To Here( 1 );

// this example puts the listening socket into non blocking mode so
// it can be polled for connection attempts.  In blocking mode, the
// <<accept will not return until a connection is made from a remote
// computer.  That will be frustrating if you have not saved your work.
// you can use a web browser to connect to localhost on the same
// computer to make a connection (blocking or non-blocking)
sk = Socket( IPV4 );
// The IPV4/IPV6 parameter is optional and probably should be left out if
// your computer does not have both.  It is used by <<bind and <<connect
// to help choose an interface.
rc = sk << bind( "localhost", "8081" );
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
rc = sk << Ioctl( "FIONBIO", 1 ); // non-blocking mode
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
Write( "\!nlistening on ", (sk << getSockName)[3] );
sk << Listen();

Web( "http://localhost:8081/someResource" ); // demo a connection.
// the browser will try to connect.  
// the local and remote computer are the same computer.
// generally you would run the browser from outside this JSL.

conskt = Empty();
For( i = 1, i < 10, i++, // poll several times, once a second
	Wait( 1 );
	rc = sk << accept();
	If( Starts With( rc[2], "WOULDBLOCK" ),
		Print( "no connect attempt yet" ) //
	, // else probably a connect attempt
		If( rc[2] == "ok", // and it was!
			remoteaddr = rc[3];
			Write( "\!nConnection from ", remoteaddr );
			conskt = rc[4];
			Break(); //
		, // else...what was it?
			Show( rc );
			Stop();
		)
	);
);
sk << Close(); // otherwise the listener is still listening, but this JSL won't answer a 2nd time
// timeout or connect?
If( Is Empty( conskt ),
	Write( "\!nTimeout, no connections requested.  Stopped.\!n" )
);
// find out what the remote computer wants
//
// << recv will only return the data that is available, up to a limit you specify.
// to get ALL the data, you must ask in a loop, in a way that you know when to
// stop asking...In this case, a request ends with CR LF CR LF
blob = Char To Blob( "" ); // start with nothing
blobtext = "";
timeout = 5; // give remote about 5 seconds to send a request
While( timeout-- > 0,
	rc = conskt << recv( 10000 );
	If(
		rc[2] == "ok",
			blob = blob || rc[3]; // recv always returns a blob, not text
	,
		Starts With( rc[2], "WOULDBLOCK" ), //
			Write( "\!n..." ), // else...what?
		Show( rc );
		Stop();
	);
	blobtext = Blob To Char( blob, encoding = "utf-8" );
	If( Right( blobtext, 4 ) == "\!r\!n\!r\!n",
		Break()
	);
	If( timeout == 0,
		Write( "\!nTimed out waiting for remote request" );
		Stop();
	);
	Wait( 1 );
);

Write( "\!n", blobtext );

requested = Regex( blobtext, "^GET /([^ ]*)", "\1" ); // you may need a better pattern

// send an HTML page to the remote computer

conskt << Send(
	Char To Blob(
		"HTTP/1.0 200 OK\!nContent-Type: text/html\!n\!n<html><body>here's the doc for " || requested ||
		".<br><br>This page was served by JMP.</body></html>"
	)
);
conskt << close; // nothing else to send to the browser

```

### Recv

**구문:** obj << Recv

**설명:** 원격 컴퓨터에서 데이터를 수신합니다. 수신할 최대 바이트를 지정하십시오. 소켓이 차단 모드로 설정된 경우 일부 데이터가 있거나 연결이 원격으로 닫힐 때까지 수신이 반환되지 않습니다. 비차단 모드에서는 0바이트 및 Would Block 반환 코드가 발생합니다.

```jsl

Names Default To Here( 1 );

// see Listen and Connect for complete examples)
skt = Socket();
// connection code goes here
rc = skt << recv( 1000 ); // specifie the UPPER limit on the amount of data returned.
// the socket may be in blocking or non-blocking mode; in blocking mode it
// will not return until at least 1 byte is available or the connection is closed.
// in non-blocking mode the rc[2] may start with WOULDBLOCK if no data
// is available.  The Listen and Connect examples show how to retrieve *ALL*
// the expected data.  You might get lucky and have 1K bytes in the first recv.

```

### RecvFrom

**구문:** obj << RecvFrom

**설명:** (DGram 지원, 필요한 이유를 알지 못하는 경우 이 메시지를 피하십시오.) 원격 컴퓨터에서 DGram을 수신합니다.

```jsl

Names Default To Here( 1 );

// DGRAM is a connectionless, unreliable protocol.  this self-contained
// example sends itself a short message, which will probably arrive, and
// displays the message at the end.  A more realistic example would use two 
// computers and spend a LOT more effort looking at the return codes.
// ***Don't build a system around DGRAM if you don't have a REALLY good reason***
// you'll most likely be re-inventing TCP, which is built on top of UDP
// which is the datagram protocol.  JSL Socket() with no parameter or Socket(STREAM)
// will create the robust TCP connection.  DGRAM is here because you might
// have an existing system that needs it.
xxx = Socket( DGRAM );
yyy = Socket( DGRAM );
rc = xxx << bind( "127.0.0.1", "12345" ); // 12345 is the port for the recv socket
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
rc = xxx << ioctl( FIONBIO, 1 ); // must be non-blocking so...
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
rc = xxx << recvFrom( 100 );// this read always fails with "WouldBlock" because...
If( !Pat Match( rc[2], "WOULDBLOCK" ),
	Show( rc );
	Stop();
);
rc = yyy << sendTo( "127.0.0.1", "12345", Char To Blob( "this is a test" ) );// this data was not sent earlier.
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
rc = xxx << recvFrom( 100 ); // now it (might) work.  its always been here in time so far.
If( Pat Match( rc[2], "WOULDBLOCK" ),
	Wait( 1 );
	rc = xxx << recvFrom( 100 );
);
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
Show( rc ); // this return code tells who sent the message
result = Blob To Char( rc[3] );
rc = xxx << Close();
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
rc = yyy << Close();
If( rc[2] != "ok",
	Show( rc );
	Stop();
);
Show( result );

```

### Send

**구문:** obj << Send

**설명:** 데이터를 원격 컴퓨터에 전송합니다.

```jsl

Names Default To Here( 1 );

// see Listen and Connect for complete examples
skt = Socket();
// connection code goes here
rc = skt << Send( Char To Blob( "Hello World" ) );

```

### SendTo

**구문:** obj << SendTo

**설명:** (DGram 지원, 필요한 이유를 알지 못하는 경우 이 메시지를 피하십시오.) 원격 컴퓨터에 DGram을 전송합니다.

```jsl

Names Default To Here( 1 );
// See RecvFrom example

```

