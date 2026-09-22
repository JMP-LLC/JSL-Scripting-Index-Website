# SAS Integration



## Constructeurs associés

### Check SAS Dependencies

**Syntaxe :** Check SAS Dependencies()

**Description :** Vérifie l&apos;état des dépendances de l&apos;intégration de SAS. Renvoie 1 en cas de réussite.

**JMP Version ajoutée :** 19

```jsl

If( !Check SAS Dependencies(),	Install SAS Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Current SAS Connection

**Syntaxe :** sas = Current SAS Connection()

**Description :** Renvoie la connexion active au serveur SAS, le cas échéant, en tant qu&apos;objet scriptable.

```jsl

SAS Connect( "my sas connection" );sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**Syntaxe :** array = Current SAS Connections()

**JMP Version ajoutée :** 19

```jsl

array = Current SAS Connections();array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**Syntaxe :** Install SAS Dependencies()

**Description :** Installe les dépendances obligatoires pour l&apos;intégration de SAS. Renvoie 1 en cas de réussite.

**JMP Version ajoutée :** 19

```jsl

If( !Check SAS Dependencies(),	Install SAS Dependencies(),	Print( "Dependencies are installed" ));

```

### SAS Connect

**Syntaxe :** SAS Connect(&lt;( data_connector_or_id )&gt;, &lt;Prompt( Always|Never|IfNeeded )&gt;)

**Description :** Ouvre une connexion SAS.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

SAS Connect( "my sas connection" );

```

**Exemple 2**

```jsl

iom_win = New Data Connector( Type( "SAS Local" ) );SAS Connect( iom_win );sas = Current SAS Connection();librefs = sas << Get Librefs();For( i = 1, i <= N Items( librefs ), i++,	tables = sas << Get Data Sets( librefs[i] );	Write( "\!n\!nLibref:" || librefs[i] );	Write( "\!nTables:" || Char( tables ) ););sas << Disconnect();

```

**Exemple 3**

```jsl

SAS Connect(	New Data Connector(		ID( "com.jmp.sas_remote" ),		Port( 8591 ),		User( "jmpuser" ),		Host Name( "sashost.com" )	),	Prompt( If Needed ));

```

**Exemple 4**

```jsl

SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**Syntaxe :** Update SAS Dependencies()

**Description :** Met à jour les dépendances obligatoires pour l&apos;intégration de SAS. Renvoie 1 en cas de réussite.

**JMP Version ajoutée :** 19

```jsl

If( Check SAS Dependencies(),	Update SAS Dependencies(),	Print( "Dependencies are not installed" ));

```

## SAS Results

### Messages d'éléments

#### Get Log

**Syntaxe :** obj &lt;&lt; Get Log

**Description :** Renvoie une chaîne contenant les contenus de la fenêtre de log de la connexion active au serveur SAS.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc print data=sashelp.class; run;",	NoOutputWindow( True ),	GetSASLog( False ));result = sas << Get Results;log = result << Get Log();Show( log );

```

#### Get Output

**Syntaxe :** obj &lt;&lt; Get Output

**Description :** Renvoie une chaîne contenant les contenus de la fenêtre de log de la connexion active au serveur SAS.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );result = sas << Get Results;out = result << Get Output();Show( out );

```

#### Get Output Datasets

**Syntaxe :** obj &lt;&lt; Get Output Datasets

**Description :** Renvoie une chaîne contenant les contenus de la fenêtre de log de la connexion active au serveur SAS.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc corr data=sashelp.class    outp=pearson outs=spearman;    var height weight;    run;",	NoOutputWindow( True ));result = sas << Get Results;data = result << Get Output Datasets;Show( data );

```

## SAS Server

### Messages d'éléments

#### Connect

**Syntaxe :** sas &lt;&lt; Connect( &lt;( data_connector_or_id )&gt;, &lt;Prompt( Always|Never|IfNeeded )&gt;)

**Description :** Tentez de reconnecter un objet de connexion à un serveur SAS qui s&apos;est déconnecté.

**JMP Version ajoutée :** 19

```jsl

SAS Connect( "my sas connection" );sas = Current SAS Connection();sas << Disconnect();sas << Connect();

```

#### Current CAS Connection

**Syntaxe :** result = sas &lt;&lt; Current CAS Connection()

**Description :** Obtient la connexion au serveur CAS actif.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

sas = Current SAS Connection();cas = sas << Current CAS Connection;Show( cas );

```

**Exemple 2**

```jsl

sas = Current SAS Connection();cas = sas << Current CAS Connection;connected = cas << Is Connected();Show( connected );

```

#### Data Set Exists

**Syntaxe :** result = sas &lt;&lt; Data Set Exists( libref, dsname )

**Description :** Renvoie 1 si un jeu de données SAS est présent.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

sas = Current SAS Connection();result = sas << Data Set Exists( "SASHELP", "AIRLINE" );Show( result );

```

**Exemple 2**

```jsl

sas = Current SAS Connection();result = sas << Data Set Exists( "SASHELP.AIRLINE" );Show( result );

```

#### Disconnect

**Syntaxe :** obj &lt;&lt; Disconnect

**Description :** Déconnectez cette connexion au serveur SAS.

**JMP Version ajoutée :** 19

```jsl

SAS Connect( "my sas connection" );sas = Current SAS Connection();sas << Disconnect();

```

#### Export Data

**Syntaxe :** y = sas &lt;&lt; Export Data( dt, libref, dataset, &lt;named_arguments&gt; ); y = sas &lt;&lt; SAS Export Data( dt, libref.dataset, &lt;named_arguments&gt; )

**Description :** Exporte une table de données JMP en tant que jeu de données SAS sur la connexion active au serveur SAS. Les arguments nommés facultatifs comprennent Columns(list|col1,col2,...,coln), les arguments à valeur de chaîne Password, AlterPassword, ReadPassword, et WritePassword, ainsi que les arguments à valeur booléenne HonorExcludedRows, PreserveSASColumnNames, PreserveSASFormats, ReplaceExisting, ExistingAlterPassword, et SaveJMPMetadata. Renvoie 1 si l&apos;exportation a réussi, 0 dans le cas contraire.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

#### Get Data Sets

**Syntaxe :** result = sas &lt;&lt; Get Data Sets( libref )

**Description :** Renvoie une liste des jeux de données définis dans une bibliothèque SAS.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Data Sets( "SASHELP" );Show( result );

```

#### Get Host Name

**Syntaxe :** var = sas &lt;&lt; Get Host Name( )

**Description :** Obtenir le nom d&apos;hôte du serveur SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Host Name();Show( result );

```

#### Get Lib Refs

**Syntaxe :** result = sas &lt;&lt; Get Lib Refs()

**Description :** Renvoie une liste des références de bibliothèque SAS actuellement définies à partir de la connexion active au serveur SAS.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Lib Refs();Show( result );

```

#### Get Log

**Syntaxe :** result = sas &lt;&lt; Get Log()

**Description :** Renvoie une chaîne contenant les contenus de la fenêtre de log de la connexion active au serveur SAS.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc print data=sashelp.class; run;",	NoOutputWindow( True ),	GetSASLog( False ));result = sas << Get Log();Show( result );

```

#### Get Macro Var

**Syntaxe :** var = sas &lt;&lt; GetMacroVar( "name" )

**Description :** Obtenir la valeur d&apos;une variable macro SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Macro Var( "SYSVLONG" );Show( result );

```

#### Get Macro Var Names

**Syntaxe :** var = sas &lt;&lt; GetMacroVarNames( )

**Description :** Obtenir une liste des variables macro SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Macro Var Names();Show( result );

```

#### Get Option Names

**Syntaxe :** var = sas &lt;&lt; GetOptionNames( )

**Description :** Obtenir une liste des options SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Option Names();Show( result );

```

#### Get Option Value

**Syntaxe :** var = sas &lt;&lt; Get Option Value( "name" )

**Description :** Obtenir la valeur d&apos;une option SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Option Value( "MEMLIB" );Show( result );

```

#### Get Output

**Syntaxe :** result = sas &lt;&lt; Get Output()

**Description :** Renvoie une chaîne contenant la sortie de liste de la dernière soumission de code SAS à la connexion à un serveur SAS active.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );result = sas << Get Output();Show( result );

```

#### Get Results

**Syntaxe :** result = sas &lt;&lt; Get Results()

**Description :** Obtenir les résultats de la dernière soumission pour ce serveur

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;" );result = sas << Get Results();Show( result );

```

#### Get Submit Status

**Syntaxe :** result = sas &lt;&lt; Get Submit Status()

**Description :** Obtenir l&apos;état de la dernière soumission pour ce serveur

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit( "proc print data=sashelp.class; run;" );result = sas << Get Submit Status;Show( result );

```

#### Get Var Info

**Syntaxe :** result = sas &lt;&lt; Get Var Info( libref, dataset ); result = sas &lt;&lt; Get Var Info( libref.dataset )

**Description :** Obtenir des informations sur les variables dans un jeu de données SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Var Info( "SASHELP", "CLASS" );Show( result );

```

#### Get Var Names

**Syntaxe :** result = sas &lt;&lt; Get Var Names( libref, dataset ); result = sas &lt;&lt; SAS Get Var Names( libref.dataset )

**Description :** Récupère les noms de variable contenus dans le jeu de données spécifié à partir de la connexion à un serveur SAS active.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Var Names( "SASHELP", "CLASS" );Show( result );

```

#### Get Version

**Syntaxe :** ver = sas &lt;&lt; GetVersion( &lt; Long &gt; )

**Description :** Obtenir la version de SAS

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Version;Show( result );

```

#### Get Work Folder

**Syntaxe :** obj &lt;&lt; Get Work Folder

**Description :** Obtenir le répertoire de la bibliothèque de TRAVAIL du serveur

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();result = sas << Get Work Folder;Show( result );

```

#### Import Data

**Syntaxe :** dt = sas &lt;&lt; Import Data( libref, dataset, &lt;named_arguments&gt; ); dt = sas &lt;&lt; Import Data( libref.dataset|path, &lt;named_arguments&gt; )

**Description :** Importe un jeu de données SAS à partir de la connexion à un serveur SAS active dans une table de données JMP. Les arguments nommés facultatifs comprennent Sample(<arguments_nommés>), Columns(liste|col1,col2,...,coln), arguments à valeur de chaîne Where, et arguments à valeur booléenne ConvertCustomFormats, Invisible, UseLabelsForVarNames, SQLTableVariable. Renvoie un objet table de données JMP.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();dt = sas << Import Data( "SASHELP.CLASS" );

```

#### List Output Data Sets

**Syntaxe :** sas &lt;&lt; List Output Data Sets(sas code)

**Description :** Répertorie les jeux de données de sortie pour le code SAS spécifié

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();datasets = sas << List Output Datasets(	"\[proc means data=sashelp.class;    var age height weight;run;]\");Show( datasets );

```

#### Name

**Syntaxe :** serverName = sas &lt;&lt; Name

**Description :** Renvoie le nom du serveur.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();serverName = sas << Name;Show( serverName );

```

#### Submit

**Syntaxe :** result = sas &lt;&lt; Submit( &lt;GetSASLog(&lt;True|False|OnError&gt;, &lt;OnSubmitComplete(script)&gt;, &lt;OpenOutputDatasets(&lt;All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN&gt;)&gt;, &lt;ODSFormat&gt;, &lt;ODS Style&gt;, &lt;Title&gt;, &lt;OpenODSResults&gt;, &lt;NoOutputWindow&gt;

**Description :** Soumet le code SAS à la connexion active au serveur SAS. Renvoie 1 en cas de réussite, 0 dans le cas contraire.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit(	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",	ODSStyle( "default" ),	OpenODSResults( true ),	OpenOutputDatasets( All ));

```

#### Submit File

**Syntaxe :** result = sas &lt;&lt; Submit File( "filename.sas" )

**Description :** Soumet un fichier contenant le code SAS à la connexion active au serveur SAS. Les arguments facultatifs nommés sont identiques à ceux des soumissions SAS. Renvoie 1 en cas de réussite, 0 dans le cas contraire.

**JMP Version ajoutée :** 19

```jsl

sas = Current SAS Connection();sas << Submit File( "MySASProgram.sas" );

```

