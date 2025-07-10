# SAS Integration



## SAS Results

### Get Log

**Syntax:** obj << Get Log

**Beschreibung:** Gibt eine Zeichenkette mit dem Inhalt des Log-Fensters der aktiven SAS-Serververbindung zurück.

**JMP Version hinzugefügt:** 19

```js

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

### Get Output

**Syntax:** obj << Get Output

**Beschreibung:** Gibt eine Zeichenkette mit dem Inhalt des Log-Fensters der aktiven SAS-Serververbindung zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Results;
out = result << Get Output();
Show( out );

```

### Get Output Datasets

**Syntax:** obj << Get Output Datasets

**Beschreibung:** Gibt eine Zeichenkette mit dem Inhalt des Log-Fensters der aktiven SAS-Serververbindung zurück.

**JMP Version hinzugefügt:** 19

```js

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

### Connect

**Syntax:** sas << Connect( <( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**Beschreibung:** Versuch, auf ein Objekt einer SAS-Serververbindung zuzugreifen, die getrennt wurde.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();
sas << Connect();

```

### Current CAS Connection

**Syntax:** result = sas << Current CAS Connection()

**Beschreibung:** Ruft die Verbindung vom aktuellen CAS-Server ab.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
Show( cas );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
connected = cas << Is Connected();
Show( connected );

```

### Data Set Exists

**Syntax:** result = sas << Data Set Exists( libref, dsname )

**Beschreibung:** Gibt 1 zurück, wenn ein SAS-Datensatz vorhanden ist.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP", "AIRLINE" );
Show( result );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP.AIRLINE" );
Show( result );

```

### Disconnect

**Syntax:** obj << Disconnect

**Beschreibung:** Verbindung zu diesem SAS-Server trennen.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();

```

### Export Data

**Syntax:** y = sas << Export Data( dt, libref, dataset, <named_arguments> );

y = sas << SAS Export Data( dt, libref.dataset, <named_arguments> )

**Beschreibung:** Exportiert eine JMP-Datentabelle als SAS-Datensatz auf die aktive SAS-Serververbindung. Benannte optionale Argumente sind u.a.: Columns(Liste|Spalte1,Spalte2,...,SpalteN), die Zeichenkettenargumente Password, AlterPassword, ReadPassword und WritePassword sowie die Booleschen Argumente HonorExcludedRows, PreserveSASColumnNames, PreserveSASFormats, ReplaceExisting, ExistingAlterPassword und SaveJMPMetadata. Gibt 1 zurück, wenn der Export erfolgreich war, andernfalls 0.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

### Get Data Sets

**Syntax:** result = sas << Get Data Sets( libref )

**Beschreibung:** Gibt eine Liste der Datensätze einer SAS-Bibliothek zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Data Sets( "SASHELP" );
Show( result );

```

### Get Host Name

**Syntax:** var = sas << Get Host Name( )

**Beschreibung:** Hostname des SAS-Servers abrufen.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Host Name();
Show( result );

```

### Get Lib Refs

**Syntax:** result = sas << Get Lib Refs()

**Beschreibung:** Gibt eine Liste der aktuell definierten SAS-Bibliotheksreferenzen von der aktiven SAS-Serververbindung zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Lib Refs();
Show( result );

```

### Get Log

**Syntax:** result = sas << Get Log()

**Beschreibung:** Gibt eine Zeichenkette mit dem Inhalt des Log-Fensters der aktiven SAS-Serververbindung zurück.

**JMP Version hinzugefügt:** 19

```js

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

### Get Macro Var

**Syntax:** var = sas << GetMacroVar( "name" )

**Beschreibung:** Wert einer SAS-Makrovariablen abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var( "SYSVLONG" );
Show( result );

```

### Get Macro Var Names

**Syntax:** var = sas << GetMacroVarNames( )

**Beschreibung:** Liste von SAS-Makrovariablen abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var Names();
Show( result );

```

### Get Option Names

**Syntax:** var = sas << GetOptionNames( )

**Beschreibung:** Liste von SAS-Optionen abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Names();
Show( result );

```

### Get Option Value

**Syntax:** var = sas << Get Option Value( "name" )

**Beschreibung:** Wert einer SAS-Option abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Value( "MEMLIB" );
Show( result );

```

### Get Output

**Syntax:** result = sas << Get Output()

**Beschreibung:** Gibt eine Zeichenkette mit der Listenausgabe der letzten Sendung von SAS-Code an die aktive SAS-Serververbindung zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Output();
Show( result );

```

### Get Results

**Syntax:** result = sas << Get Results()

**Beschreibung:** Ergebnisse des letzten Absendens für diesen Server abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Results();
Show( result );

```

### Get Submit Status

**Syntax:** result = sas << Get Submit Status()

**Beschreibung:** Status des letzten Absendens für diesen Server abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Submit Status;
Show( result );

```

### Get Var Info

**Syntax:** result = sas << Get Var Info( libref, dataset );

result = sas << Get Var Info( libref.dataset )

**Beschreibung:** Informationen zu den Variablen in einem SAS-Datensatz abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Info( "SASHELP", "CLASS" );
Show( result );

```

### Get Var Names

**Syntax:** result = sas << Get Var Names( libref, dataset );

result = sas << SAS Get Var Names( libref.dataset )

**Beschreibung:** Ruft die Variablennamen des angegebenen Datensatzes von der aktiven SAS-Serververbindung ab.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Names( "SASHELP", "CLASS" );
Show( result );

```

### Get Version

**Syntax:** ver = sas << GetVersion( < Long > )

**Beschreibung:** Version von SAS abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Version;
Show( result );

```

### Get Work Folder

**Syntax:** obj << Get Work Folder

**Beschreibung:** Bibliotheksordner WORK des Servers abrufen

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Work Folder;
Show( result );

```

### Import Data

**Syntax:** dt = sas << Import Data( libref, dataset, <named_arguments> );

dt = sas << Import Data( libref.dataset|path, <named_arguments> )

**Beschreibung:** Importiert einen SAS-Datensatz von der aktiven SAS-Serververbindung in eine JMP-Datentabelle. Benannte optionale Argumente sind u.a.: Sample(<benannte_Argumente>), Columns(Liste|Spalte1,Spalte2,...,SpalteN), das Zeichenkettenargument Where sowie die Booleschen Argumente ConvertCustomFormats, Invisible, UseLabelsForVarNames, SQLTableVariable. Gibt ein JMP-Datentabellenobjekt zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
dt = sas << Import Data( "SASHELP.CLASS" );

```

### List Output Data Sets

**Syntax:** sas << List Output Data Sets(sas code)

**Beschreibung:** Listet Ausgabedatensätze für den angegebenen SAS-Code auf

**JMP Version hinzugefügt:** 19

```js

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

### Name

**Syntax:** serverName = sas << Name

**Beschreibung:** Gibt den Namen des Servers zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
serverName = sas << Name;
Show( serverName );

```

### Submit

**Syntax:** result = sas << Submit( <GetSASLog(<True|False|OnError>, <OnSubmitComplete(script)>, <OpenOutputDatasets(<All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN>)>, <ODSFormat>, <ODS Style>, <Title>, <OpenODSResults>, <NoOutputWindow>

**Beschreibung:** Sendet SAS-Code an die aktive SAS-Serververbindung. Gibt 1 zurück, wenn erfolgreich, andernfalls 0.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",
	ODSStyle( "default" ),
	OpenODSResults( true ),
	OpenOutputDatasets( All )
);

```

### Submit File

**Syntax:** result = sas << Submit File( "filename.sas" )

**Beschreibung:** Sendet eine Datei mit SAS-Code an die aktive SAS-Serververbindung. Benannte optionale Argumente sind dieselben wie für SAS Submit. Gibt 1 zurück, wenn erfolgreich, andernfalls 0.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit File( "MySASProgram.sas" );

```

### Check SAS Dependencies

**Syntax:** Check SAS Dependencies()

**Beschreibung:** Prüft den Status der Abhängigkeiten für die SAS-Integration. Gibt bei Erfolg 1 zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### Current SAS Connection

**Syntax:** sas = Current SAS Connection()

**Beschreibung:** Gibt, sofern vorhanden, die aktive SAS-Serververbindung als skriptfähiges Objekt zurück.

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**Syntax:** array = Current SAS Connections()

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
array = Current SAS Connections();
array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**Syntax:** Install SAS Dependencies()

**Beschreibung:** Installiert die erforderlichen Abhängigkeiten für die SAS-Integration. Gibt bei Erfolg 1 zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies(),
	Print( "Dependencies are installed" )
);

```

### SAS Connect

**Syntax:** SAS Connect(<( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**Beschreibung:** Öffnet eine SAS-Verbindung.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```js

Names Default To Here( 1 );
SAS Connect( "my sas connection" );

```

**Beispiel 2**

```js

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

**Beispiel 3**

```js

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

**Beispiel 4**

```js

Names Default To Here( 1 );
SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**Syntax:** Update SAS Dependencies()

**Beschreibung:** Aktualisiert die erforderlichen Abhängigkeiten für die SAS-Integration. Gibt bei Erfolg 1 zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );

If( Check SAS Dependencies(),
	Update SAS Dependencies(),
	Print( "Dependencies are not installed" )
);

```

