# SAS Integration



## Costruttori associati

### Check SAS Dependencies

**Sintassi:** Check SAS Dependencies()

**Descrizione:** Controlla lo stato delle dipendenze dell&apos;integrazione SAS. Viene restituito 1 se l&apos;operazione è riuscita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### Current SAS Connection

**Sintassi:** sas = Current SAS Connection()

**Descrizione:** Restituisce la connessione attiva al server SAS, se presente, come oggetto che supporta script.

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**Sintassi:** array = Current SAS Connections()

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
array = Current SAS Connections();
array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**Sintassi:** Install SAS Dependencies()

**Descrizione:** Installa le dipendenze necessarie per l&apos;integrazione SAS. Viene restituito 1 se l&apos;operazione è riuscita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies(),
	Print( "Dependencies are installed" )
);

```

### SAS Connect

**Sintassi:** SAS Connect(<( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**Descrizione:** Apre una connessione SAS.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );

iom_win = New Data Connector( Type( "SAS Local" ) );
SAS Connect( iom_win );
sas = Current SAS Connection();
librefs = sas << Get Librefs();
For( i = 1, i <= N Items( librefs ), i++,
	tables = sas << Get Data Sets( librefs[i] );
	Write( "\!n\!nLibref:" || librefs[i] );
	Write( "\!nTables:" || Char( tables ) );
);
sas << Disconnect();

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
SAS Connect(
	New Data Connector(
		ID( "com.jmp.sas_remote" ),
		Port( 8591 ),
		User( "jmpuser" ),
		Host Name( "sashost.com" )
	),
	Prompt( If Needed )
);

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**Sintassi:** Update SAS Dependencies()

**Descrizione:** Aggiorna le dipendenze necessarie per l&apos;integrazione SAS. Viene restituito 1 se l&apos;operazione è riuscita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

If( Check SAS Dependencies(),
	Update SAS Dependencies(),
	Print( "Dependencies are not installed" )
);

```

## SAS Results

### Messaggi degli elementi

#### Get Log

**Sintassi:** obj << Get Log

**Descrizione:** Restituisce una stringa contenente il contenuto della finestra di log della connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Results;
log = result << Get Log();
Show( log );

```

#### Get Output

**Sintassi:** obj << Get Output

**Descrizione:** Restituisce una stringa contenente il contenuto della finestra di log della connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Results;
out = result << Get Output();
Show( out );

```

#### Get Output Datasets

**Sintassi:** obj << Get Output Datasets

**Descrizione:** Restituisce una stringa contenente il contenuto della finestra di log della connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc corr data=sashelp.class
    outp=pearson outs=spearman;
    var height weight;
    run;",
	NoOutputWindow( True )
);
result = sas << Get Results;
data = result << Get Output Datasets;
Show( data );

```

## SAS Server

### Messaggi degli elementi

#### Connect

**Sintassi:** sas << Connect( <( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**Descrizione:** Tentativo di riconnettere un oggetto di connessione del server SAS che si è disconnesso.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();
sas << Connect();

```

#### Current CAS Connection

**Sintassi:** result = sas << Current CAS Connection()

**Descrizione:** Ottiene la connessione al server CAS corrente.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
Show( cas );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
connected = cas << Is Connected();
Show( connected );

```

#### Data Set Exists

**Sintassi:** result = sas << Data Set Exists( libref, dsname )

**Descrizione:** Restituisce 1 se esiste un data set SAS.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP", "AIRLINE" );
Show( result );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP.AIRLINE" );
Show( result );

```

#### Disconnect

**Sintassi:** obj << Disconnect

**Descrizione:** Disconnette questa connessione al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();

```

#### Export Data

**Sintassi:** y = sas << Export Data( dt, libref, dataset, <named_arguments> );

y = sas << SAS Export Data( dt, libref.dataset, <named_arguments> )

**Descrizione:** Esporta una tabella di dati JMP come data set SAS sulla connessione attiva al server SAS. Gli argomenti facoltativi nominati includono Columns(list|col1,col2,...,coln), gli argomenti con valore di stringa Password, AlterPassword, ReadPassword e WritePassword, nonché gli argomenti con valore booleano HonorExcludedRows, PreserveSASColumnNames, PreserveSASFormats, ReplaceExisting, ExistingAlterPassword e SaveJMPMetadata. Viene restituito 1 se l&apos;esportazione è riuscita e 0 in caso contrario.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

#### Get Data Sets

**Sintassi:** result = sas << Get Data Sets( libref )

**Descrizione:** Ottiene un elenco dei data set definiti in una libreria SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Data Sets( "SASHELP" );
Show( result );

```

#### Get Host Name

**Sintassi:** var = sas << Get Host Name( )

**Descrizione:** Ottiene il nome host del server SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Host Name();
Show( result );

```

#### Get Lib Refs

**Sintassi:** result = sas << Get Lib Refs()

**Descrizione:** Restituisce un elenco delle libref SAS attualmente definite dalla connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Lib Refs();
Show( result );

```

#### Get Log

**Sintassi:** result = sas << Get Log()

**Descrizione:** Restituisce una stringa contenente il contenuto della finestra di log della connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Log();
Show( result );

```

#### Get Macro Var

**Sintassi:** var = sas << GetMacroVar( "name" )

**Descrizione:** Ottiene il valore di una variabile macro SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var( "SYSVLONG" );
Show( result );

```

#### Get Macro Var Names

**Sintassi:** var = sas << GetMacroVarNames( )

**Descrizione:** Ottiene un elenco di variabili macro SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var Names();
Show( result );

```

#### Get Option Names

**Sintassi:** var = sas << GetOptionNames( )

**Descrizione:** Ottiene un elenco di opzioni SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Names();
Show( result );

```

#### Get Option Value

**Sintassi:** var = sas << Get Option Value( "name" )

**Descrizione:** Ottiene il valore di un&apos;opzione SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Value( "MEMLIB" );
Show( result );

```

#### Get Output

**Sintassi:** result = sas << Get Output()

**Descrizione:** Restituisce una stringa contenente l&apos;output dell&apos;elenco dell&apos;ultimo invio del codice SAS alla connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Output();
Show( result );

```

#### Get Results

**Sintassi:** result = sas << Get Results()

**Descrizione:** Ottiene i risultati dell&apos;ultimo invio per questo server

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Results();
Show( result );

```

#### Get Submit Status

**Sintassi:** result = sas << Get Submit Status()

**Descrizione:** Ottiene lo stato dell&apos;ultimo invio per questo server

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Submit Status;
Show( result );

```

#### Get Var Info

**Sintassi:** result = sas << Get Var Info( libref, dataset );

result = sas << Get Var Info( libref.dataset )

**Descrizione:** Ottiene informazioni sulle variabili di un data set SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Info( "SASHELP", "CLASS" );
Show( result );

```

#### Get Var Names

**Sintassi:** result = sas << Get Var Names( libref, dataset );

result = sas << SAS Get Var Names( libref.dataset )

**Descrizione:** Recupera i nomi delle variabili contenute nel data set specificato dalla connessione attiva al server SAS.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Names( "SASHELP", "CLASS" );
Show( result );

```

#### Get Version

**Sintassi:** ver = sas << GetVersion( < Long > )

**Descrizione:** Ottiene la versione di SAS

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Version;
Show( result );

```

#### Get Work Folder

**Sintassi:** obj << Get Work Folder

**Descrizione:** Ottiene la cartella della libreria WORK del server

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Work Folder;
Show( result );

```

#### Import Data

**Sintassi:** dt = sas << Import Data( libref, dataset, <named_arguments> );

dt = sas << Import Data( libref.dataset|path, <named_arguments> )

**Descrizione:** Importa un data set SAS dalla connessione attiva al server SAS in una tabella di dati JMP. Gli argomenti facoltativi nominati includono Sample(<named_arguments>), Columns(list|col1,col2,...,coln), gli argomenti con valore di stringa Where e gli argomenti con valore booleano ConvertCustomFormats, Invisible, UseLabelsForVarNames, SQLTableVariable. Restituisce un oggetto tabella di dati JMP.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
dt = sas << Import Data( "SASHELP.CLASS" );

```

#### List Output Data Sets

**Sintassi:** sas << List Output Data Sets(sas code)

**Descrizione:** Elenca i data set di output per il codice SAS specificato

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
datasets = sas << List Output Datasets(
	"\[
proc means data=sashelp.class;
    var age height weight;
run;
]\"
);
Show( datasets );

```

#### Name

**Sintassi:** serverName = sas << Name

**Descrizione:** Restituisce il nome del server.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
serverName = sas << Name;
Show( serverName );

```

#### Submit

**Sintassi:** result = sas << Submit( <GetSASLog(<True|False|OnError>, <OnSubmitComplete(script)>, <OpenOutputDatasets(<All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN>)>, <ODSFormat>, <ODS Style>, <Title>, <OpenODSResults>, <NoOutputWindow>

**Descrizione:** Sottomette il codice SAS alla connessione attiva del server SAS. Viene restituito 1 se l&apos;operazione è riuscita e 0 in caso contrario.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",
	ODSStyle( "default" ),
	OpenODSResults( true ),
	OpenOutputDatasets( All )
);

```

#### Submit File

**Sintassi:** result = sas << Submit File( "filename.sas" )

**Descrizione:** Sottomette un file contenente codice SAS alla connessione attiva del server SAS. Gli argomenti opzionali nominati sono gli stessi di Sottomissione SAS. Viene restituito 1 se l&apos;operazione è riuscita e 0 in caso contrario.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit File( "MySASProgram.sas" );

```

