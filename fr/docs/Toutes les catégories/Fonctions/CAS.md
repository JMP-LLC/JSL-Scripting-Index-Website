# CAS



### CAS Connect

**Syntaxe :** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Description :** Se connecte à un nouveau serveur CAS. CAS Connect utilise l&apos;URL, le nom d&apos;utilisateur, les arguments de mot de passe et, en option, l&apos;invite et la session. L&apos;invite peut être IfNeeded, Always ou Never. L&apos;URL, le nom d&apos;utilisateur et le mot de passe peuvent être omis si l&apos;argument d&apos;invite est IfNeeded ou Always. La valeur par défaut pour l&apos;invite est Never. La session peut servir à se reconnecter à une session CAS existante. La session doit être valide pour l&apos;URL, le nom d&apos;utilisateur et le mot de passe utilisés pour la connexion. L&apos;argument facultatif Certificates est utile pour fournir des certificats de confiance à CAS pour les connexions https. L&apos;argument facultatif Verify Certificates ou No Verify Certificates est utile pour accepter temporairement les certificats auto-signés. L&apos;argument facultatif Proxy Server est utile pour fournir un hôte proxy dans un environnement proxy. L&apos;argument facultatif Proxy User est utile pour fournir des informations sur l&apos;utilisateur et le mot de passe pour un environnement proxy. L&apos;argument facultatif Bypass Proxy permet d&apos;ignorer le proxy pour certains hôtes. L&apos;argument facultatif Timeout définit une valeur de dépassement de temps pour les opérations de connexion à CAS. L&apos;argument facultatif Authorization Method spécifie comment JMP se connecte à CAS. Cela est dépendant du déploiement de CAS.

**JMP Version ajoutée :** 15

```jsl

url = "http://myCasURL";cas = CAS Connect(	URL( url ),	Username( "myCas_user" ),	Prompt( Always ),	Certificates( "c:\mycerts.crt" ));

```

### CAS Delete Table

**Syntaxe :** CAS Delete Table(tablename, &lt;remove&gt;)

**Description :** Cette action supprime la table de données filesystem. La table de données en mémoire n&apos;est pas affectée. Spécifier Quiet supprimera les erreurs en cas de table de données inexistante. Spécifier remACs supprimera les commandes d&apos;accès pour une table de données. Spécifier Remove supprimera également la table de données de la mémoire.

**JMP Version ajoutée :** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Syntaxe :** CAS Disconnect()

**Description :** Se déconnecte d&apos;un serveur CAS et, de façon facultative, termine la session. Par défaut, la session est terminée lors de la déconnexion.

**JMP Version ajoutée :** 15

```jsl

url = "http://myCasURL";cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );CAS Disconnect();

```

### CAS Export Data

**Syntaxe :** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Description :** Exporte une table de données dans un serveur CAS. La table jmp_data_table est la table de données JMP à exporter, tandis que cas_libref et cas_dataset sont les emplacements cibles sur le serveur CAS. L&apos;argument nommé facultatif est Save(1|0). Lorsqu&apos;une table de données est exportée dans CAS, elle n&apos;est pas conservée dans le système de fichiers CAS, à moins que l&apos;option Enregistrer soit utilisée. La plupart des actions CAS se trouvent en mémoire.

**JMP Version ajoutée :** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Syntaxe :** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Description :** Obtient une liste des ensembles de données CAS disponibles. Ces ensembles de données se trouvent dans le système de fichiers CAS. L&apos;argument facultatif limite la liste des ensembles de données dans la bibliothèque CAS. Si aucun argument n&apos;est spécifié, la liste contiendra le nom complet de l&apos;ensemble de données (library.dataset). Si l&apos;argument est utilisé, la liste sera une liste de noms d&apos;ensembles de données.

**JMP Version ajoutée :** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );datasets = CAS Get Data Sets( "casuser" );Show( datasets );cas << Delete Table( "Casuser", "Big Class" );datasets = CAS Get Data Sets( "casuser" );Show( datasets );

```

### CAS Get Libraries

**Syntaxe :** y = CAS Get Libraries()

**Description :** Obtient une liste des bibliothèques CAS disponibles.

**JMP Version ajoutée :** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );libraries = CAS Get Libraries();Show( libraries );

```

### CAS Import Data

**Syntaxe :** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Description :** Importe une table depuis un serveur CAS. Les arguments nommés facultatifs sont Invisible(0|1), Private(0|1) et UseLabelsForVarNames(0|1).

**JMP Version ajoutée :** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Syntaxe :** CAS Is Connected

**Description :** Renvoie 1 si une connexion au serveur CAS est active, 0 dans le cas contraire.

**JMP Version ajoutée :** 15

```jsl

connected = CAS Is Connected();Show( connected );

```

### CAS Remove Table

**Syntaxe :** CAS Remove Table(tablename, &lt;delete&gt;)

**Description :** Cette action supprime la table en mémoire. Le fichier qui avait été créé lors de la sauvegarde n&apos;est pas affecté. Cette action  entraînera également la suppression de la table dans le système de fichiers.

**JMP Version ajoutée :** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Syntaxe :** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Description :** Convertit un texte JSON de table de données CAS SAS en une table de données JMP.

**JMP Version ajoutée :** 15

```jsl

json ="\[{  "_ctb": true,  "label": "Selected Rows from Table BIG CLASS",  "name": "Fetch",  "title": "Selected Rows from Table BIG CLASS",  "schema": [    {      "format": "",      "label": "",      "name": "_Index_",      "type": "int",      "width": 4    },    {      "format": "",      "label": "",      "name": "name",      "type": "string",      "width": 9    },    {      "format": "",      "label": "",      "name": "age",      "type": "double",      "width": 8    },    {      "format": "",      "label": "",      "name": "sex",      "type": "string",      "width": 1    },    {      "format": "",      "label": "",      "name": "height",      "type": "double",      "width": 8    },    {      "format": "",      "label": "",      "name": "weight",      "type": "double",      "width": 8    }  ],  "rows": [    [      1,      "KATIE",      12,      "F",      59,      95    ],    [      2,      "LOUISE",      12,      "F",      61,      123    ],    [      3,      "JANE",      12,      "F",      55,      74    ],    [      4,      "JACLYN",      12,      "F",      66,      145    ],    [      5,      "LILLIE",      12,      "F",      52,      64    ],    [      6,      "TIM",      12,      "M",      60,      84    ],    [      7,      "JAMES",      12,      "M",      61,      128    ],    [      8,      "ROBERT",      12,      "M",      51,      79    ],    [      9,      "BARBARA",      13,      "F",      60,      112    ],    [      10,      "ALICE",      13,      "F",      61,      107    ],    [      11,      "SUSAN",      13,      "F",      56,      67    ],    [      12,      "JOHN",      13,      "M",      65,      98    ],    [      13,      "JOE",      13,      "M",      63,      105    ],    [      14,      "MICHAEL",      13,      "M",      58,      95    ],    [      15,      "DAVID",      13,      "M",      59,      79    ],    [      16,      "JUDY",      14,      "F",      61,      81    ],    [      17,      "ELIZABETH",      14,      "F",      62,      91    ],    [      18,      "LESLIE",      14,      "F",      65,      142    ],    [      19,      "CAROL",      14,      "F",      63,      84    ],    [      20,      "PATTY",      14,      "F",      62,      85    ]  ]}]\";dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Syntaxe :** CAS Terminate Sessions

**Description :** Termine toutes les sessions CAS de l&apos;utilisateur actuel.

**JMP Version ajoutée :** 15

```jsl

CAS Connect( Prompt( ifNeeded ) );CAS Terminate Sessions();

```

### Current CAS Connection

**Syntaxe :** Current CAS Connection()

**Description :** Obtient la connexion au serveur CAS actif.

**JMP Version ajoutée :** 15

```jsl

connection = Current CAS Connection();Show( connection );

```

### New CAS Action

**Syntaxe :** action = New CAS Action(...)

**Description :** Crée une action CAS.

**JMP Version ajoutée :** 15

```jsl

echo = [=> ];echo["a"] = 1;echo["b"] = JSON Literal( true );echo["c"] = 3.141559;action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Syntaxe :** action = New CAS DATA Step Action(...)

**Description :** Crée une action d&apos;étape CAS DATA.

**JMP Version ajoutée :** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );

```

### New CAS Server

**Syntaxe :** cas = New CAS Server(&lt;...&gt;)

**Description :** Crée un nouveau serveur CAS.

**JMP Version ajoutée :** 15

```jsl

url = "http://myCasURL";cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

