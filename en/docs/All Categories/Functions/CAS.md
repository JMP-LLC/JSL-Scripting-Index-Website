# CAS



### CAS Connect

**Syntax:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Description:** Connects to a new CAS server. CAS Connect uses URL, User name, Password arguments and optionally Prompt and Session. Prompt can be IfNeeded, Always, or Never. URL, user name, password can be omitted if the Prompt argument is IfNeeded or Always. The default value for Prompt is Never. Session can be used to reconnect to an existing CAS session. The session must be valid for the URL, user name, and password used in the connection. The optional Certificates argument is useful for supplying trusted certificates for https connections to CAS. The optional Verify Certificates or No Verify Certificates argument is useful to temporarily accept self-signed certificates. The optional Proxy Server argument is useful for supplying a proxy host in a proxy environment. The optional Proxy User argument is useful for supplying user and password information for a proxy environment. The optional Bypass Proxy argument is use for bypassing the proxy for certain hosts. The optional Timeout argument sets a timeout value for the CAS connection operations. The optional Authorization Method argument specifies how JMP connects to CAS. This is dependent on the CAS deployment.

**JMP Version Added:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect(
	URL( url ),
	Username( "myCas_user" ),
	Prompt( Always ),
	Certificates( "c:\mycerts.crt" )
);

```

### CAS Delete Table

**Syntax:** CAS Delete Table(tablename, &lt;remove&gt;)

**Description:** This action deletes the filesystem table. The in memory table is not affected. Specifying Quiet will suppress errors for a non-existent table. Specifying remACs will remove access controls for a table. Specifying Remove will also remove the table from memory.

**JMP Version Added:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Syntax:** CAS Disconnect()

**Description:** Disconnects from a CAS server and optionally terminates the session. By default, the session is terminated when disconnected.

**JMP Version Added:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**Syntax:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Description:** Exports a table to a CAS server. jmp_data_table is the JMP data table to export while cas_libref and cas_dataset are the target locations on the CAS server. The optional named argument is Save(1|0). When a table is exported to CAS, it is not persisted to CAS filesystem unless the Save option is used. Most CAS actions occur in memory.

**JMP Version Added:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Syntax:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Description:** Gets a list of available CAS data sets. These data sets are found on the CAS filesystem. The optional argument limits the list of data sets to the CAS library. If no argument is used, then the data set list contains the fully qualified data set name (library.dataset). If the argument is used, then the data set list is a list of data set names.

**JMP Version Added:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );

```

### CAS Get Libraries

**Syntax:** y = CAS Get Libraries()

**Description:** Gets a list of available CAS libraries.

**JMP Version Added:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Syntax:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Description:** Imports a table from a CAS server. Optional named arguments are Invisible(0|1), Private(0|1) and UseLabelsForVarNames(0|1).

**JMP Version Added:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Syntax:** CAS Is Connected

**Description:** Returns 1 if there is an active CAS server connection. Otherwise, returns 0.

**JMP Version Added:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Syntax:** CAS Remove Table(tablename, &lt;delete&gt;)

**Description:** This action drops the in-memory table. The file that was created with the save action is not affected. Specifying delete will also delete the table from the file system.

**JMP Version Added:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Syntax:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Description:** Converts a SAS CAS Table JSON text to a JMP data table.

**JMP Version Added:** 15

```jsl


json =
"\[
{
  "_ctb": true,
  "label": "Selected Rows from Table BIG CLASS",
  "name": "Fetch",
  "title": "Selected Rows from Table BIG CLASS",
  "schema": [
    {
      "format": "",
      "label": "",
      "name": "_Index_",
      "type": "int",
      "width": 4
    },
    {
      "format": "",
      "label": "",
      "name": "name",
      "type": "string",
      "width": 9
    },
    {
      "format": "",
      "label": "",
      "name": "age",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "sex",
      "type": "string",
      "width": 1
    },
    {
      "format": "",
      "label": "",
      "name": "height",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "weight",
      "type": "double",
      "width": 8
    }
  ],
  "rows": [
    [
      1,
      "KATIE",
      12,
      "F",
      59,
      95
    ],
    [
      2,
      "LOUISE",
      12,
      "F",
      61,
      123
    ],
    [
      3,
      "JANE",
      12,
      "F",
      55,
      74
    ],
    [
      4,
      "JACLYN",
      12,
      "F",
      66,
      145
    ],
    [
      5,
      "LILLIE",
      12,
      "F",
      52,
      64
    ],
    [
      6,
      "TIM",
      12,
      "M",
      60,
      84
    ],
    [
      7,
      "JAMES",
      12,
      "M",
      61,
      128
    ],
    [
      8,
      "ROBERT",
      12,
      "M",
      51,
      79
    ],
    [
      9,
      "BARBARA",
      13,
      "F",
      60,
      112
    ],
    [
      10,
      "ALICE",
      13,
      "F",
      61,
      107
    ],
    [
      11,
      "SUSAN",
      13,
      "F",
      56,
      67
    ],
    [
      12,
      "JOHN",
      13,
      "M",
      65,
      98
    ],
    [
      13,
      "JOE",
      13,
      "M",
      63,
      105
    ],
    [
      14,
      "MICHAEL",
      13,
      "M",
      58,
      95
    ],
    [
      15,
      "DAVID",
      13,
      "M",
      59,
      79
    ],
    [
      16,
      "JUDY",
      14,
      "F",
      61,
      81
    ],
    [
      17,
      "ELIZABETH",
      14,
      "F",
      62,
      91
    ],
    [
      18,
      "LESLIE",
      14,
      "F",
      65,
      142
    ],
    [
      19,
      "CAROL",
      14,
      "F",
      63,
      84
    ],
    [
      20,
      "PATTY",
      14,
      "F",
      62,
      85
    ]
  ]
}
]\";
dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Syntax:** CAS Terminate Sessions

**Description:** Terminates all CAS sessions owned by the current user.

**JMP Version Added:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Current CAS Connection

**Syntax:** Current CAS Connection()

**Description:** Obtains the connection to the current CAS Server.

**JMP Version Added:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### New CAS Action

**Syntax:** action = New CAS Action(...)

**Description:** Creates a CAS Action.

**JMP Version Added:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Syntax:** action = New CAS DATA Step Action(...)

**Description:** Creates a CAS DATA step action.

**JMP Version Added:** 15

```jsl


cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";
action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );

```

### New CAS Server

**Syntax:** cas = New CAS Server(&lt;...&gt;)

**Description:** Creates a new CAS server.

**JMP Version Added:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

