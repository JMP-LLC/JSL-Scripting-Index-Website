# CAS



### CAS Connect

**Sintassi:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Descrizione:** Si connette a un nuovo server CAS. CAS Connect utilizza gli argomenti URL, Nome utente, Password e facoltativamente Richiedi e Sessione. Richiedi può essere Se necessario, Sempre o Mai. URL, nome utente e password possono essere omessi se l&apos;argomento di Richiedi è Se necessario o Sempre. Il valore di default per Richiedi è Mai. L’argomento Sessione può essere utilizzato per riconnettersi a una sessione CAS esistente. La sessione deve essere valida per l&apos;URL, il nome utente e la password utilizzati nella connessione. L&apos;argomento facoltativo Certificati è utile per fornire certificati affidabili per connessioni https a CAS. L&apos;argomento facoltativo Verifica certificati o Nessuna verifica certificato è utile per accettare temporaneamente certificati autofirmati. L&apos;argomento facoltativo Proxy Server è utile per fornire un host proxy in un ambiente proxy. L&apos;argomento facoltativo Utente proxy è utile per fornire informazioni su utente e password per un ambiente proxy. L&apos;argomento facoltativo Ignora proxy è utilizzato per ignorare il proxy per alcuni host. L&apos;argomento facoltativo Timeout imposta un valore di timeout per le operazioni di connessione a CAS. L&apos;argomento facoltativo Metodo di autorizzazione specifica come JMP si connette a CAS. Dipende dal deployment CAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** CAS Delete Table(tablename, &lt;remove&gt;)

**Descrizione:** Questa azione elimina la tabella del filesystem. La tabella in memoria non è interessata. Specificando Nessuna info si eliminano gli errori per tabelle non esistenti. Specificando remACs si rimuovono i controlli di accesso per una tabella. Specificando Rimuovi si rimuove anche la tabella dalla memoria.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Sintassi:** CAS Disconnect()

**Descrizione:** Disconnette da un server CAS e facoltativamente termina la sessione. Per impostazione predefinita, la sessione termina quando ci si disconnette.

**JMP Versione aggiunta:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**Sintassi:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Descrizione:** Esporta una tabella in un server CAS. jmp_data_table è la tabella di dati di JMP da esportare mentre cas_libref e cas_dataset sono le posizioni di destinazione sul server CAS. L&apos;argomento denominato facoltativo è Save(1|0). Quando una tabella viene esportata in CAS non viene mantenuta nel file system CAS a meno che si utilizzi l&apos;opzione Salva. La maggior parte delle operazioni CAS avviene in memoria.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Sintassi:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Descrizione:** Ottiene un elenco di data set CAS disponibili. Questi data set sono presenti nel file system CAS. L&apos;argomento facoltativo limita l&apos;elenco dei data set alla libreria CAS. Se non viene utilizzato alcun argomento, l&apos;elenco dei data set contiene il nome del data set completo (libreria.dataset). Se si utilizza l&apos;argomento, l&apos;elenco dei data set è un elenco di nomi di data set.

**JMP Versione aggiunta:** 15

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

**Sintassi:** y = CAS Get Libraries()

**Descrizione:** Ottiene un elenco di librerie CAS disponibili.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Sintassi:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Descrizione:** Importa una tabella da un server CAS. Gli argomenti facoltativi sono Invisible(0|1), Private(0|1) e UseLabelsForVarNames(0|1).

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Sintassi:** CAS Is Connected

**Descrizione:** Restituisce 1 se esiste una connessione attiva al server CAS, in caso contrario 0.

**JMP Versione aggiunta:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Sintassi:** CAS Remove Table(tablename, &lt;delete&gt;)

**Descrizione:** Questa operazione ignora la tabella in memoria. Il file creato con l&apos;operazione di salvataggio non è coinvolto. Se si specifica l&apos;eliminazione, la tabella sarà eliminata anche dal file system.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Sintassi:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Descrizione:** Converte il testo JSON di una tabella CAS SAS in una tabella di dati JMP.

**JMP Versione aggiunta:** 15

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

**Sintassi:** CAS Terminate Sessions

**Descrizione:** Termina tutte le sessioni CAS di proprietà dell&apos;utente corrente.

**JMP Versione aggiunta:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Current CAS Connection

**Sintassi:** Current CAS Connection()

**Descrizione:** Ottiene la connessione al server CAS corrente.

**JMP Versione aggiunta:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### New CAS Action

**Sintassi:** action = New CAS Action(...)

**Descrizione:** Crea un&apos;azione CAS.

**JMP Versione aggiunta:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Sintassi:** action = New CAS DATA Step Action(...)

**Descrizione:** Crea un&apos;azione passo DATA CAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas = New CAS Server(&lt;...&gt;)

**Descrizione:** Crea un nuovo server CAS.

**JMP Versione aggiunta:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

