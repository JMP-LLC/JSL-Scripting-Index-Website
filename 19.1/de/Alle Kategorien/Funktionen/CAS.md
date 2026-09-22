# CAS



### CAS Connect

**Syntax:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Beschreibung:** Stellt eine Verbindung zu einem neuen CAS-Server her. CAS Connect verwendet die Argumente URL, Username, Password und optional Prompt und Session. Für Prompt kann IfNeeded, Always oder Never angegeben werden. URL, Username, Password können weggelassen werden, wenn für das Argument Prompt eine der Optionen IfNeeded oder Always angegeben ist. Der Standardwert für Prompt ist Never. Session kann verwendet werden, um erneut eine Verbindung zu einer vorhandenen CAS-Sitzung herzustellen. Die Sitzung muss für die in der Verbindung verwendeten Argumente URL, Username und Password gültig sein. Das optionale Argument „Certificates“ ist nützlich, um vertrauenswürdige Zertifikate für HTTPS-Verbindungen mit CAS bereitzustellen. Die optionalen Argumente „Verify Certificates“ oder „No Verify Certificates“ sind nützlich, um kurzzeitig selbst signierte Zertifikate zu akzeptieren. Das optionale Argument „Proxy Server“ ist nützlich, um einen Proxy-Host in einer Proxy-Umgebung anzugeben. Das optionale Argument „Proxy User“ ist nützlich, um Benutzer- und Kennwortinformationen für eine Proxy-Umgebung bereitzustellen. Das optionale Argument „Bypass Proxy“ dient zum Umgehen des Proxy bei bestimmten Hosts. Das optionale Argument „Timeout“ legt einen Timeout-Wert für die CAS-Verbindungsoperationen fest. Das optionale Argument „Authorization Method“ gibt an, wie JMP eine Verbindung mit CAS herstellt. Dies ist von der CAS-Bereitstellung abhängig.

**JMP Version hinzugefügt:** 15

```jsl

url = "http://myCasURL";cas = CAS Connect(	URL( url ),	Username( "myCas_user" ),	Prompt( Always ),	Certificates( "c:\mycerts.crt" ));

```

### CAS Delete Table

**Syntax:** CAS Delete Table(tablename, &lt;remove&gt;)

**Beschreibung:** Diese Aktion löscht die Dateisystemtabelle. Die Tabelle im Speicher ist davon nicht betroffen. Durch Angabe von Quiet werden Fehler bei einer nicht vorhandenen Tabelle unterdrückt. Durch Angabe von remACs werden Zugriffskontrollen für eine Tabelle entfernt. Durch Angabe von Remove wird auch die Tabelle aus dem Speicher entfernt.

**JMP Version hinzugefügt:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Syntax:** CAS Disconnect()

**Beschreibung:** Trennt die Verbindung zum CAS-Server und beendet optional die Sitzung. Standardmäßig wird die Sitzung beim Trennen der Verbindung beendet.

**JMP Version hinzugefügt:** 15

```jsl

url = "http://myCasURL";cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );CAS Disconnect();

```

### CAS Export Data

**Syntax:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Beschreibung:** Exportiert eine Tabelle auf einen CAS-Server. jmp_data_table ist die zu exportierende JMP-Datentabelle, und cas_libref und cas_dataset sind die Zielspeicherorte auf dem CAS-Server. Das optional benannte Argument ist Save(1|0). Wenn eine Tabelle in CAS exportiert wird, wird sie nicht dauerhaft im CAS-Dateisystem gespeichert, wenn nicht die Option Save verwendet wird. Die meisten CAS-Aktionen geschehen im Speicher.

**JMP Version hinzugefügt:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Syntax:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Beschreibung:** Ruft eine Liste verfügbarer CAS-Datensätze ab. Diese Datensätze werden im CAS-Dateisystem gefunden. Das optionale Argument begrenzt die Liste der Datensätze auf die CAS-Bibliothek. Wenn kein Argument verwendet wird, enthält die Liste der Datensätze den vollständig qualifizierten Datensatznamen (library.dataset). Wenn das Argument verwendet wird, listet die Datensatzliste die Datensatznamen auf.

**JMP Version hinzugefügt:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );datasets = CAS Get Data Sets( "casuser" );Show( datasets );cas << Delete Table( "Casuser", "Big Class" );datasets = CAS Get Data Sets( "casuser" );Show( datasets );

```

### CAS Get Libraries

**Syntax:** y = CAS Get Libraries()

**Beschreibung:** Ruft eine Liste verfügbarer CAS-Bibliotheken ab.

**JMP Version hinzugefügt:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );libraries = CAS Get Libraries();Show( libraries );

```

### CAS Import Data

**Syntax:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Beschreibung:** Importiert eine Tabelle von einem CAS-Server. Optional benannte Argumente sind Invisible(0|1), Private(0|1) und UseLabelsForVarNames(0|1)

**JMP Version hinzugefügt:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Syntax:** CAS Is Connected

**Beschreibung:** Gibt 1 zurück, wenn eine aktive CAS-Server-Verbindung besteht. Andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** 15

```jsl

connected = CAS Is Connected();Show( connected );

```

### CAS Remove Table

**Syntax:** CAS Remove Table(tablename, &lt;delete&gt;)

**Beschreibung:** Durch diese Aktion wird die im Speicher befindliche Tabelle verworfen. Die Datei, die von der Speicheraktion erstellt wurde, ist nicht betroffen. Wenn Sie „Delete“ angeben, wird die Tabelle auch aus dem Dateisystem gelöscht.

**JMP Version hinzugefügt:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Syntax:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Beschreibung:** Konvertiert JSON-Text einer SAS-CAS-Tabelle in eine JMP-Datentabelle.

**JMP Version hinzugefügt:** 15

```jsl

json ="\[{  "_ctb": true,  "label": "Selected Rows from Table BIG CLASS",  "name": "Fetch",  "title": "Selected Rows from Table BIG CLASS",  "schema": [    {      "format": "",      "label": "",      "name": "_Index_",      "type": "int",      "width": 4    },    {      "format": "",      "label": "",      "name": "name",      "type": "string",      "width": 9    },    {      "format": "",      "label": "",      "name": "age",      "type": "double",      "width": 8    },    {      "format": "",      "label": "",      "name": "sex",      "type": "string",      "width": 1    },    {      "format": "",      "label": "",      "name": "height",      "type": "double",      "width": 8    },    {      "format": "",      "label": "",      "name": "weight",      "type": "double",      "width": 8    }  ],  "rows": [    [      1,      "KATIE",      12,      "F",      59,      95    ],    [      2,      "LOUISE",      12,      "F",      61,      123    ],    [      3,      "JANE",      12,      "F",      55,      74    ],    [      4,      "JACLYN",      12,      "F",      66,      145    ],    [      5,      "LILLIE",      12,      "F",      52,      64    ],    [      6,      "TIM",      12,      "M",      60,      84    ],    [      7,      "JAMES",      12,      "M",      61,      128    ],    [      8,      "ROBERT",      12,      "M",      51,      79    ],    [      9,      "BARBARA",      13,      "F",      60,      112    ],    [      10,      "ALICE",      13,      "F",      61,      107    ],    [      11,      "SUSAN",      13,      "F",      56,      67    ],    [      12,      "JOHN",      13,      "M",      65,      98    ],    [      13,      "JOE",      13,      "M",      63,      105    ],    [      14,      "MICHAEL",      13,      "M",      58,      95    ],    [      15,      "DAVID",      13,      "M",      59,      79    ],    [      16,      "JUDY",      14,      "F",      61,      81    ],    [      17,      "ELIZABETH",      14,      "F",      62,      91    ],    [      18,      "LESLIE",      14,      "F",      65,      142    ],    [      19,      "CAROL",      14,      "F",      63,      84    ],    [      20,      "PATTY",      14,      "F",      62,      85    ]  ]}]\";dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Syntax:** CAS Terminate Sessions

**Beschreibung:** Beendet alle CAS-Sitzungen des aktuellen Benutzers.

**JMP Version hinzugefügt:** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Terminate Sessions();

```

### Current CAS Connection

**Syntax:** Current CAS Connection()

**Beschreibung:** Ruft die Verbindung vom aktuellen CAS-Server ab.

**JMP Version hinzugefügt:** 15

```jsl

connection = Current CAS Connection();Show( connection );

```

### New CAS Action

**Syntax:** action = New CAS Action(...)

**Beschreibung:** Erstellt eine CAS-Aktion.

**JMP Version hinzugefügt:** 15

```jsl

echo = [=> ];echo["a"] = 1;echo["b"] = JSON Literal( true );echo["c"] = 3.141559;action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Syntax:** action = New CAS DATA Step Action(...)

**Beschreibung:** Erstellt eine CAS-DATA-Step-Aktion.

**JMP Version hinzugefügt:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );

```

### New CAS Server

**Syntax:** cas = New CAS Server(&lt;...&gt;)

**Beschreibung:** Erstellt einen neuen CAS-Server.

**JMP Version hinzugefügt:** 15

```jsl

url = "http://myCasURL";cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

