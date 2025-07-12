# Utility



## Funzioni

### Add

**Sintassi:** y = x0 + x1; y = Add( x0, x1, ... )

**Descrizione:** Aggiunge tutti gli argomenti, che possono essere numeri, matrici o elenchi di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Pi() + 10;

```

### Beep

**Sintassi:** Beep()

**Descrizione:** Produce un segnale acustico di avviso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Beep();

```

### Blob MD5

**Sintassi:** blobResult = Blob MD5( blob )

**Descrizione:** Crea un BLOB (Binary Large OBject) risultante a 16 byte da un BLOB di origine. Il BLOB a 16 byte è la checksum MD5 (o l&apos;oggetto hash) del BLOB di origine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Sintassi:** blobResult = Blob Peek( blob, offset, <length> )

**Descrizione:** Crea un nuovo blob da un range secondario di byte del blob dato. L&apos;argomento offset è basato su zero e quindi il primo byte si trova a offset zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**Sintassi:** y = Build Information()

**Descrizione:** Restituisce data e ora di build, versione o debug build e nome del prodotto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Build Information();

```

### Caption

**Sintassi:** y = Caption( <{h, v}>, text | remove, <Delayed( seconds )>, <Font(font)>, <Font Size(size)>, <Text Color(color)>, <Back Color(color)>, <Spoken(bool)> )

**Descrizione:** Mostra una finestra didascalia al percorso specificato da {h, v} e contenente il testo specificato dall&apos;argomento text. L&apos;argomento Delayed( seconds ) imposta il tempo di attesa in secondi prima di ogni didascalia.

**JMP Versione aggiunta:** prima della versione 14

**Didascalia formattata**

```jsl

Names Default To Here( 1 );
Caption(
	{100, 200},
	"explanation",
	Font( "Arial Black" ),
	Font Size( 16 ),
	Text Color( "blue" ),
	Back Color( "yellow" ),
	Spoken( 1 )
);

```

**Rimuove la didascalia**

```jsl

Names Default To Here( 1 );
Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

### Clipboard Capture

**Sintassi:** clp = Clipboard Capture( box << Copy )

**Descrizione:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Current Journal

**Sintassi:** y = Current Journal( <Project(title|index|box|window)> )

**Descrizione:** Restituisce un riferimento al journal corrente nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Se non esiste alcun journal corrente nel progetto specificato, ne verrà creato uno automaticamente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Current Journal();

```

### Data Connector Registry

**Sintassi:** Data Connector Registry()

**Descrizione:** La raccolta di connettori di dati per JMP.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**Sintassi:** y = Open Datafeed( ... )

**Descrizione:** Crea un soggetto e una finestra per l&apos;invio di messaggi, per l&apos;alimentazione di dati in tempo reale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Debug Break

**Sintassi:** Debug Break()

**Descrizione:** Quando viene valutata questa espressione all&apos;interno del JSL Debugger, il Debugger arresta l&apos;esecuzione dello script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Right-click and select Debug.
// In the JSL Debugger, click Run.
x = 5;
y = 8;
Debug Break();
z = x + yy;
Show( z );

```

### Decode URI

**Sintassi:** Decode URI( value )

**Descrizione:** Codifica la stringa utilizzando la codifica URI.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Sintassi:** y = Decode64 Blob( base64String )

**Descrizione:** Decodifica una stringa stampabile di testo base 64 in un blob.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Sintassi:** y = Decode64 Double( base64String )

**Descrizione:** Restituisce il numero a virgola mobile a doppia precisione dalla stringa codificata Base64.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**Sintassi:** Disable JMP Live URL(url)

**Descrizione:** Disabilita un URL di JMP Live. Questo metodo è disponibile solo durante jmpStartAdmin.jsl. È possibile usare un asterisco * come carattere jolly per specificare gli URL come * (qualsiasi URL), *.jmp.com (un URL che termina con .jmp.com), http://public.* (un URL che inizia con http://public.) o *public* (un URL che contiene public).

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Sintassi:** Disable Proxy Settings( 1|0 )

**Descrizione:** Disabilita o abilita impostazioni proxy durante l&apos;esecuzione di jmpStartAdmin.jsl. Le impostazioni proxy sono abilitate per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

Disable Proxy Settings( 1 );

```

### Divide

**Sintassi:** y = x0 / x1; y = Divide( x0, <x1>, ... )

**Descrizione:** Divide tutti gli argomenti successivi dal primo argomento. Gli argomenti possono essere numeri, matrici o elenchi di numeri. Se chiamato con un solo argomento, il risultato sarà il reciproco.

**JMP Versione aggiunta:** prima della versione 14

**Reciproco**

```jsl

Names Default To Here( 1 );
x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

**Semplici**

```jsl

Names Default To Here( 1 );
6 / 3 / 2;

```

### Empty

**Sintassi:** y = Empty()

**Descrizione:** Restituisce un valore vuoto. Utilizzato nell&apos;editor delle formule per argomenti non specificati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Empty();

```

### Enable JMP Live URL

**Sintassi:** Enable JMP Live URL(url)

**Descrizione:** Abilita un URL di JMP Live. Questo metodo è disponibile solo durante jmpStartAdmin.jsl. È possibile usare un asterisco * come carattere jolly per specificare gli URL come * (qualsiasi URL), *.jmp.com (un URL che termina con .jmp.com), http://public.* (un URL che inizia con http://public.) o *public* (un URL che contiene public).

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Sintassi:** Enable Proxy Settings( 1|0 )

**Descrizione:** Abilita o disabilita impostazioni proxy durante l&apos;esecuzione di jmpStartAdmin.jsl. Le impostazioni proxy sono abilitate per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

Enable Proxy Settings( 0 );

```

### Encode URI

**Sintassi:** Encode URI( value )

**Descrizione:** Codifica la stringa utilizzando la codifica URI.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Sintassi:** s = Encode64 Blob( x )

**Descrizione:** Codifica un blob in una stringa stampabile di testo base 64.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Sintassi:** s = Encode64 Double( x )

**Descrizione:** Restituisce una codifica stringa Base64 del numero a virgola mobile.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**Sintassi:** points = Faure Quasi Random Sequence(nDim, nRow)

**Descrizione:** Genera una sequenza di numeri quasi casuali riempitivi usando la sequenza di Faure.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Force Action Notes

**JMP Versione aggiunta:** 16

### Format Pattern

**Sintassi:** s = Format( x, "Format Pattern", pattern, <width>, <dec>)

x = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

obj = Format("Format Pattern", pattern, <width>, <dec>)

**Descrizione:** I pattern di formato sono stringhe che definiscono un formato di data e ora come, ad esempio, “<AAAA></><MM></><GG> <hh><:><mm><:><ss><ampm>". Le parti del pattern tra parentesi angolari sono dette descrittori di campo. I descrittori di campo rappresentano un valore (come "<AAAA>", che è un anno a quattro cifre) o un altro testo di data e ora (come "</>", che è un separatore di data specifico locale). Un pattern di formato permette di costruire formati che non sono forniti da JMP. Questi formati possono essere utilizzati sia per la formattazione sia per l&apos;input dei dati.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
Descrittori di campo

Date
(non può essere utilizzato con i descrittori di campo Durata
================================================================================
<YYYY>        Anno a quattro cifre. (Accetta 1-4 cifre in input).
<YY>          Anno a due cifre
<yyyy>        Anno ISO a quattro cifre; corrisponde alle settimane ISO. (Accetta
              1-4 cifre in input).
<yy>          Anno ISO a due cifre; corrisponde alle settimane ISO.
<YYYY.>       Anno con anno frazionato. Descrive completamente la data e l'ora.
<M>           Numero del mese (1..12)
<MM>          Numero del mese, con zero iniziale (01..12)
<Month>       Nome lungo del mese
<Mmm>         Nome abbreviato del mese
<MMM>         Nome del mese "in linea". Sempre tre lettere.
<WW1>         Numero della settimana a due cifre, con zero iniziale. La seconda
              settimana inizia la prima domenica dell'anno. La settimana 1 è la
              settimana parziale che precede la prima domenica. (01..54)
<WW2>         Numero della settimana a due cifre, con zero iniziale. La
              settimana 1 inizia la prima domenica dell'anno. La settimana 0 è
              la settimana parziale che precede la prima domenica. (00..53)
<ww>          Numero della settimana ISO a due cifre, con zero iniziale. Le
              settimane iniziano il lunedì. La prima settimana è la prima
              settimana dell'anno con 4 o più giorni. Non esistono settimane
              parziali, invece la prima o l'ultima settimana possono estendersi
              rispettivamente all'anno precedente o a quello successivo.
              (01..53)
<D>           Giorno del mese (1..31)
<DD>          Giorno del mese, con zero iniziale (01..31)
<Q>           Trimestre dell'anno (1..4)
<Q#>          "T" seguita da un trimestre dell’anno (1..4)
<DayOfWeek>   Nome del giorno della settimana
<DW>          Giorno della settimana come numero. 1 = domenica, 7 = sabato
<dw>          Giorno della settimana come numero. 1 = lunedì, 7 = domenica
</>           Il separatore di data locale. (Accetta in input i separatori più
              comuni).
<->           Il separatore di data ISO '-'. (Accetta in input i separatori più
              comuni).
</?>          Separatore di data facoltativo nell'input di date. Il separatore
              non viene mai scritto nell'output.
<'T'>         La "T" nelle date ISO

Ore
(alcuni possono essere utilizzati con i descrittori di campo Durata)
================================================================================
<hh>          Ora formattata in base all'impostazione locale corrente. Se è
              presente un descrittore <ampm>, verrà utilizzato un orologio di 12
              o 24 ore in base all’impostazione locale. Se è presente un
              descrittore <AMPM>, verrà utilizzato un orologio di 12 ore.
              Altrimenti verrà utilizzato un orologio di 24 ore. (Non può essere
              usato con descrittori di campo di durata.)
<zhh>         Ora formattata in base all'impostazione locale corrente e con zero
              iniziale. Se è presente un descrittore <ampm>, verrà utilizzato un
              orologio di 12 o 24 ore in base all’impostazione locale. Se è
              presente un descrittore <AMPM>, verrà utilizzato un orologio di 12
              ore. Altrimenti verrà utilizzato un orologio di 24 ore. (Non può
              essere usato con descrittori di campo di durata.)
<hh24>        Ora in formato 24 ore e con zero iniziale (00..23)
<mm>          Minuti, con zero iniziale (00..59)
<ss>          Secondi, con zero iniziale (00..59)
<ampm>        Simbolo AM/PM per l'ora locale corrente. (Non può essere usato con
              i descrittori di campo Durata).
<AMPM>        Simbolo AM/PM indipendente dall'impostazione locale "AM" o "PM"
              (non può essere usato con i descrittori di campo di durata).
<:>           Il separatore di ora locale.
<::>          Il separatore di ora ISO ':'. (Accetta anche il separatore di ora
              locale in input).
<:?>          Separatore di ora facoltativo nell'input di date. Il separatore
              non viene mai scritto nell'output.

Durate
(non può essere utilizzato con i descrittori di campo Data)
================================================================================
<Day>         Conteggio dei giorni. Utilizzato come campo più significativo
              nelle durate. Non può essere usato con altri "conteggi".
<Hour>        Conteggio delle ore. Utilizzato come campo più significativo nelle
              durate. Non può essere usato con altri "conteggi".
<Minute>      Conteggio dei minuti. Utilizzato come campo più significativo
              nelle durate. Non può essere usato con altri "conteggi".

Altro
================================================================================
<<>           Sostituito con un "<"
*/

```

### Get Addin

**Sintassi:** Get Addin( ID )

**Descrizione:** Recupera un add-in registrato specificato dall&apos;ID.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Sintassi:** Get Addins( )

**Descrizione:** Restituisce un elenco di tutti gli add-in registrati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Sintassi:** Get Addr Info( string )

**Descrizione:** Ricerca l&apos;indirizzo numerico di un nome. Nella maggior parte dei casi il nome dovrebbe essere utilizzato per la futura compatibilità IPV6.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**Sintassi:** Get Clipboard()

**Descrizione:** Ottiene il contenuto corrente degli Appunti

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Clipboard();

```

### Get Expr Location

**Sintassi:** Get Expr Location(<expression>, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Descrizione:** Recupera le posizioni del primo token in un&apos;espressione analizzata. L&apos;invocazione di default restituisce {il file di origine, InizioLineaToken, InizioColToken, LunghezzaToken}.

**JMP Versione aggiunta:** 17

**Output di default**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

**Seleziona l'output**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

**Sostituisce una sottostringa**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

### Get Name Info

**Sintassi:** Get Name Info( string )

**Descrizione:** Ricerca il nome di un indirizzo numerico. Nella maggior parte dei casi il nome dovrebbe essere utilizzato per la futura compatibilità IPV6.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**Sintassi:** notebookList = Get Notebook List()

**Descrizione:** Restituisce un elenco di tutti i blocchi appunti aperti.

**JMP Versione aggiunta:** 19

### Get OAuth2 Grant Types

**Sintassi:** Get OAuth2 Grant Types

**Descrizione:** Ottiene i tipi di concessione JMP OAuth2 supportati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Versione aggiunta:** 15

### Get Platform Preference

**Sintassi:** Get Platform Preferences( < platformName < ( optionName, ... ) > ... > )

**Descrizione:** Ottiene preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Sintassi:** Get Platform Preferences( < platformName < ( optionName, ... ) > ... > )

**Descrizione:** Ottiene preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Sintassi:** Get Policies( <Machine|User|Both> )

**Descrizione:** Restituisce un array associativo contenente i nomi e i valori dei criteri correnti.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
Get Policies();

```

### Get Policy

**Sintassi:** Get Policy( "PolicyName" )

**JMP Versione aggiunta:** 18

### Get Preference

**Sintassi:** Get Preferences( pref1, ... )

**Descrizione:** Ottiene preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Get Preferences

**Sintassi:** Get Preferences( pref1, ... )

**Descrizione:** Ottiene preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Glue

**Sintassi:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Descrizione:** Valuta ogni argomento e restituisce l&apos;ultimo risultato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex1 = 1;
ex2 = 2;

```

### Gzip Compress

**Sintassi:** blob = Gzip Compress( blob )

**Descrizione:** Comprime un blob di dati in un blob gzip.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Sintassi:** blob = Gzip Uncompress( blob )

**Descrizione:** Decomprime un blob di dati gzip in un blob.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### Host is

**Sintassi:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Descrizione:** Restituisce 1 se l&apos;applicazione JMP ha una corrispondenza con l&apos;argomento; 0 in caso contrario. Gli argomenti Windows o Mac corrispondono al test per il sistema operativo specificato e gli argomenti Bits32 o Bits64 corrispondono al test per l&apos;applicazione JMP a 32 o 64 bit specificata. Si può sottoporre a test un solo argomento alla volta.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
If( Host is( "Mac" ),
	Show( "On Mac" ),
	Show( "Not on Mac" )
);
If( Host is( "Bits64" ),
	Show( "64 bit" )
);
If(
	Host is( "x86_64" ), Show( "On x86_64" ),
	Host is( "arm64" ), Show( "On arm64" )
);

```

### Is Alt Key

**Sintassi:** y = Is Alt Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Alt e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica. Sul Mac, Alt corrisponde al tasto Option.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Command Key

**Sintassi:** y = Is Command Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Comando e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Command Key(),
			Text( {60, 50}, "Command Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Context Key

**Sintassi:** y = Is Context Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Contesto e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Context Key(),
			Text( {60, 50}, "Context Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Control Key

**Sintassi:** y = Is Control Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Ctrl e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica. Sul Mac, Ctrl corrisponde al tasto Command.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is JMP Live URL Enabled

**Sintassi:** Is JMP Live URL Enabled(url)

**Descrizione:** Determina se l&apos;URL specificato può essere usato in questa sessione di JMP. Gli URL possono essere abilitati e/o disabilitati mediante lo script jmpStartAdmin.jsl. Ciò non determina se l&apos;URL è valido o meno, né se l&apos;utente è in grado di accedere. Determina solo se l&apos;URL è bloccato da JMP.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**Sintassi:** y = Is Option Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Opzione e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Option Key(),
			Text( {60, 50}, "Option Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Shift Key

**Sintassi:** y = Is Shift Key()

**Descrizione:** Restituisce 1 se viene premuto il tasto Maiusc e 0 in caso contrario. Destinato all&apos;impiego in script di richiamo per la grafica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### JMP Product Name

**Sintassi:** y = JMP Product Name()

**Descrizione:** Restituisce "Standard" o "Pro" in base alla versione del prodotto che è stata licenziata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
JMP Product Name();

```

### JMP Version

**Sintassi:** y = JMP Version()

**Descrizione:** Restituisce la versione di JMP (release.revision{.fix}); non disponibile prima della 6.0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
JMP Version();

```

### JSL Encrypted

**Sintassi:** y = JSL Encrypted(script)

**Descrizione:** Inserisce uno script crittografato all&apos;interno di un altro script. Creare uno script crittografato selezionando Modifica > Crittografa script dal menu principale di un editor di script. Inserendo le password il testo crittografato viene visualizzato in una nuova finestra. Copiare questo testo in un comando JSL crittografato("") per inserire lo script crittografato in un altro script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Sintassi:** y = JSL Quote(script)

**Descrizione:** Memorizza uno script JSL in una variabile, inclusi tutti i commenti e la formattazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );

x = JSL Quote(/* Begin quote. */
    For (i = 1, i <= 5, i++,
        // Print the value of i.
        Print(i);
    );
    // End expression.
);
New Window( "editor", Script Box( x ) );

```

### Load DLL

**Sintassi:** dll = Load DLL( file path | Base Name( file path without extension ), < AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )> )

**Descrizione:** Carica una DLL verso la quale conduce il percorso specificato.

**JMP Versione aggiunta:** prima della versione 14

**Cross platform using Base Name()**

```jsl

Names Default To Here( 1 );
dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

**Windows only**

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

### Log Table Messages

**Sintassi:** Log Table Messages( <On|Off>, <Enable(subject, ...)>, <Disable(subject, ...)>, <Include(msgname, ...)>, <Exclude(msgname, )>

**Descrizione:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP Versione aggiunta:** 17

**Turn off logging**

```jsl

Names Default To Here( 1 );
Log Table Messages( Off );

```

**Turn on logging**

```jsl

Names Default To Here( 1 );
Log Table Messages( On );

```

**Turn on logging, and include all messages except "DtMsgClose"**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

**Turn on logging, and include only the "DtMsgClose" message**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Include( "DtMsgClose" ) );

```

**Turn on logging, but ignore column messages**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Disable( "Column" ) );

```

**Turn on logging, but ignore table messages**

```jsl

Names Default To Here( 1 );
Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Mail

**Sintassi:** Mail( "address", "subject", "message", <"attachment filepath"> | { "attachment filepath", ...} )

**Descrizione:** Crea un messaggio e-mail in uscita come specificato se il sistema operativo lo consente. Non tutte le opzioni funzionano su tutte le versioni di sistemi operativi. Consultare la Guida per ulteriori dettagli.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Sintassi:** menu = Main Menu( command, <window name> )

**Descrizione:** Esegue il comando del menu principale specificato.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Main Menu( "Sample Index" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Main Menu( "Help:Sample Index" );

```

### Minus

**Sintassi:** y = -x; y = Minus( x )

**Descrizione:** Nega x, che può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
-Pi();

```

### Multiple File Import

**Sintassi:** mfiObj = Multiple File Import();

**Descrizione:** Crea un oggetto di importazione di più file; l&apos;oggetto accetta messaggi per definire una cartella, filtrare file e importare. Per aprire una finestra di dialogo usare il messaggio "Crea finestra". Per importare immediatamente utilizzare il messaggio "Importa dati" che restituirà un elenco delle tabelle che sono state create.

**JMP Versione aggiunta:** 14

**Esempio di scripting**

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

**Esempio interattivo**

```jsl

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

### Multiply

**Sintassi:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Descrizione:** Moltiplica tutti gli argomenti, che possono essere numeri, matrici o elenchi di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
2 * Pi();

```

### Name

**Sintassi:** Name(string)

**Descrizione:** Un nome serve per chiamare un elemento. I nomi sono utilizzati sia per le variabili sia per le funzioni e possono essere utilizzati direttamente negli script se ci si attiene ad alcune regole. Se inizia con un carattere alfabetico o di sottolineatura e continua con caratteri alfanumerici, spazi, simboli matematici Unicode e alcuni segni di punteggiatura (apostrofi (’), segni di percentuale (%), punti (.), barre inverse (\) e caratteri di sottolineatura (_)), il nome può essere utilizzato direttamente negli script. I nomi che non seguono queste regole possono essere utilizzati mediante la parola chiave Name().

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### New Clipboard

**Sintassi:** clp = New Clipboard( <<<Get From OS> )

**Descrizione:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New HTTP Request

**Sintassi:** obj = New HTTP Request(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**Descrizione:** Crea una richiesta di invio al servizio web.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

getSentiment = Function( {text},
	{Default Local},
	fields = Associative Array();
	fields["text"] = text;
	s = New HTTP Request(
		URL( "http://text-processing.com/api/sentiment/" ),
		Method( "POST" ),
		Form( Fields( fields ) ),
		Headers( {"Accept: application/json"} )
	) << Send;
	sAsList = Parse JSON( s );
	retval = Associative Array();
	retval["pos"] = sAsList["probability"]["pos"];
	retval["neg"] = sAsList["probability"]["neg"];
	retval["neutral"] = sAsList["probability"]["neutral"];
	retval["label"] = sAsList["label"];
	retval;
);
                         
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	{Default Local},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		sentiment = getSentiment( col[i] );
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                         
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**Sintassi:** multi_request = New Multi HTTP Request()

**Descrizione:** Invia o scarica più richieste HTTP in parallelo.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	)
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

### New OAuth2

**Sintassi:** oauth2 = New OAuth2()

**Descrizione:** Crea una nuova autorizzazione OAuth2.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];
                                          
oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );
                                          
auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;
                                          
oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );
                                          
auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

### New OAuth2 Token

**Sintassi:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Descrizione:** Crea un token OAuth2 per accedere in sicurezza a dati in molte diverse API Web.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
token = New OAuth2 Token(
	Account( "jmpgoogldev@gmail.com" ),
	Client ID( "test" ),
	Client Secret( "test 2" ),
	Refresh Token( "" ),
	Token URL( "" )
);

```

### New Web Report

**Sintassi:** obj = New Web Report(...)

**Descrizione:** Crea un report HTML interattivo.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution(
			Continuous Distribution( Column( :weight ) ),
			Nominal Distribution( Column( :age ) )
		),
		Title( "Distribution Web Report" ),
		Description( "This report was created with the sample found in the Scripting Index" )
	),
	Add Report(
		Bivariate(
			Y( :weight ),
			X( :height ),
			Automatic Recalc( 1 ),
			Fit Line( {Line Color( {213, 72, 87} )} ),
			Local Data Filter( Add Filter( columns( :sex ) ) )
		)
	)
);
webreport << Index( Title( "Big Class Report" ) );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Notebook

**Sintassi:** nb = Notebook( name|number )

**Descrizione:** Restituisce un riferimento al blocco appunti specificato.

**JMP Versione aggiunta:** 19

### Open Datafeed

**Sintassi:** y = Open Datafeed( ... )

**Descrizione:** Crea un soggetto e una finestra per l&apos;invio di messaggi, per l&apos;alimentazione di dati in tempo reale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Open Help

**Sintassi:** w = Open Help( "Help" | "Scripting Index", ... )

**Descrizione:** Apre la Guida in linea di JMP o l&apos;indice degli scripting.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Open Help( "Help" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext(
		Category( "All Categories" ),
		Object( "Search results" ),
		Method( "Get Alpha" )
	)
);

```

### Parse XML

**Sintassi:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Descrizione:** Analizza un&apos;espressione XML utilizzando le espressioni OnElement per tag xml specificati.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
/*See example two for more details*/
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );

doc =
"
<a title='one'>
    WWWa
    <b>BB<c>ZZZ</c>B1</b>
    XXXa
    <b>BBB2</b>
    YYYa
    <c>CCC</c>
</a>";
// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,
// to show why text should be collected by Text(...) and then processed by EndTag(...)
// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.
docname = "undefined";
doctext = "";
recordtext = "";
records = {};
NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting level
Parse XML( doc,
	On Element(
		"a",
		Start Tag(
			docname = XML Attr( "title" );
			NestLevel++;
		), 
        // decide here to trim the CRLF and blanks and use a single blank
		Text( doctext = doctext || Trim( XML Text() ) || " " ),
		End Tag( NestLevel-- )
	),
	On Element(
		"b",
		Start Tag( NestLevel++ ), 
        // comment out the next line and...
		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),
		End Tag(
            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records
			// recordtext = XMLText();
			Insert Into( records, recordtext );
			recordtext = "";
			NestLevel--;
		)
	)
);

Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**Sintassi:** Pdf Page Count( file name)

**Descrizione:** Restituisce il numero di pagine in un file PDF.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Polytope Uniform Random

**Sintassi:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, <nwarm=200>, <nstride=25> )

**Descrizione:** Genera punti uniformi casuali su un politopo convesso. L&apos;argomento numSamples specifica il numero di punti casuali da generare. L&apos;argomento A è la matrice di coefficienti del vincolo. L&apos;argomento B sono i valori sul lato destro dei vincoli. Gli argomenti L e U sono rispettivamente i limiti inferiore e superiore per le variabili. Gli argomenti neq, mle e nge sono rispettivamente il numero dei vincoli di uguaglianza, il numero delle disuguaglianze minori o uguali e il numero delle disuguaglianze maggiori o uguali. L&apos;argomento nwarm è il numero di ripetizioni di warm-up prima di scrivere i punti nella matrice di output. L&apos;argomento nstride è il numero di ripetizioni tra ogni punto che è scritto nella matrice di output. Si noti che i vincoli devono essere elencati inizialmente come uguaglianze, poi come disuguaglianze minori o uguali e infine come disuguaglianze maggiori o uguali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Polytope Uniform Random( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Polytope Uniform Random",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints",
		Text Box( "X1 + x2 + x3 = 1" ),
		Text Box( "X2 + 2*x2 >= 0.5" )
	),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

### Pref

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preference

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**Sintassi:** Register Addin( uniqueId, homeFolder, <displayName(name)>, <MinJMPVersion(version)>, <MaxJMPVersion(version)>, <LoadsAtStartup(autoLoad)>, <LoadNow(load)> )

**Descrizione:** Registra un add-in

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Sintassi:** Reload Policies()

**JMP Versione aggiunta:** 18

### Revert Menu

**Sintassi:** Revert Menu()

**Descrizione:** Ripristina i menu predefiniti dalla fabbrica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
/* Reverts menus back to factory default settings. */

```

### Rummage

**Sintassi:** treasures = Rummage( box, query )

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	Rummage(
		Window( dt ),
		"graph builder",
		Algorithm( "FilterUtility" ),
		Match All Terms( 0 )
	)[1 :: 5] << Title
);
Show( Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1 :: 3] << Title );

```

### Run Program

**Sintassi:** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**Descrizione:** Controlla un programma esterno mediante stdin e stdout.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};
icommand = 0;
RP = Run Program(
	Executable( "CMD.EXE" ),
	Options( {"/a", "/q"} ),
	ReadFunction( Function( {this}, Write( this << Read ) ) ),
	WriteFunction(
		Function( {this},
			icommand++;
			If( icommand <= N Items( commands ),
				this << Write( commands[icommand] );
				Show( commands[icommand] );
			,
				this << WriteEOF;
				Show( this << CanRead, this << CanWrite, this << isReadEOF );
			);
		)
	)
);

```

### Schedule

**Sintassi:** Schedule( sec, scpt )

**Descrizione:** Programma un evento che esegue l&apos;argomento dello script scpt allo scadere di sec secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Set Clipboard

**Sintassi:** Set Clipboard( text )

**Descrizione:** Inserisce il testo specificato negli Appunti del sistema utilizzati dal menu Modifica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Set Clipboard( "example" );

```

### Set Platform Preference

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Sintassi:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descrizione:** Imposta le preferenze della piattaforma come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Sintassi:** Set Policy("PolicyName", <Empty()|#|"value"> )

**JMP Versione aggiunta:** 18

### Set Preference

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Sintassi:** Preferences( pref1( value1 ), ... )

**Descrizione:** Imposta le preferenze come specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Sintassi:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, <window-class-name | All>, <True | False> )

**Descrizione:** Imposta la visibilità di una barra degli strumenti specificata per una data classe di finestre. Il nome della barra degli strumenti è il nome interno della barra degli strumenti. Se viene passato Predefinito come nome della barra degli strumenti, la classe di finestre specificata viene ripristinata alla barra degli strumenti predefinita impostata per quella classe di finestre. Esempi di nome-classe-finestre sono Tabella di dati, Script, Report e Journal. Se il nome della classe di finestre è Tutto, la visibilità per la barra strumenti specificata viene impostata per tutte le classi di finestre.

Viene restituito 1 se l&apos;operazione è riuscita e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );

// Make the Analyze toolbar visible in Script windows
Set Toolbar Visibility( "Analyze", Script, true );

// Make the Analyze toolbar visible in all classes of windows
Set Toolbar Visibility( "Analyze", All, true );

// Revert Script windows to the default toolbar set for Script windows
Set Toolbar Visibility( Default, Script );

// Revert all windows to their default toolbar set
Set Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**Sintassi:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Descrizione:** Restituisce uno degli script di modifica più brevi per convertire la stringa A in stringa B. La forma semplice restituisce solo un elenco. strings() e lines() dispongono di un&apos;opzione per restituire una matrice o un elenco. sequences() restituisce solo una matrice. L&apos;opzione facoltativa limit() interromperà prima la funzione se l&apos;elenco di modifiche contiene più inserimenti ed eliminazioni del limite. lines() confronta righe piuttosto che caratteri; le opzioni facoltative ignore("caratteri") o ignoreWhiteSpace() hanno come impostazione predefinita di non ignorare alcun carattere. ESC interromperà la funzione se necessario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );
common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),
	i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2
		] /* the snippet */
	)
);
common;

```

### Show Addin Builder Dialog

**Sintassi:** Show Addin Builder Dialog()

**Descrizione:** Visualizza una finestra di dialogo che può essere utilizzata per creare add-in personalizzati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Addin Builder Dialog();

```

### Show Addins Dialog

**Sintassi:** Show Addins Dialog()

**Descrizione:** Visualizza una finestra di dialogo che mostra lo stato di tutti gli add-in registrati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Addins Dialog();

```

### Show Commands

**Sintassi:** Show Commands( <keyword=Builtins> )

**Descrizione:** Crea una o più tabelle di dati che contengono informazioni su vari componenti JSL. L&apos;argomento keyword determina il contenuto della tabella di output. Specificare elementi incorporati (di default) per operatori e funzioni incorporati. Specificare oggetti che supportano script per tutti i comandi che supportano script per gli oggetti. Specificare traduzioni per le versioni inglesi e localizzate dei comandi che supportano script. Specificare riquadri di visualizzazione per i comandi che supportano script relativi a riquadri e segmenti di visualizzazione. Specificare nomi che supportano script per i nomi degli oggetti che supportano script. Specificare i nomi delle piattaforme per i nomi delle piattaforme.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Commands();

```

### Show Preferences

**Sintassi:** Show Preferences()

**Descrizione:** Mostra le impostazioni delle preferenze correnti nel log.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Preferences();

```

### Show Properties

**Sintassi:** Show Properties( object )

**Descrizione:** Mostra nel log i messaggi a cui risponde un oggetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**Sintassi:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Descrizione:** Genera una sequenza di numeri quasi casuali riempitivi utilizzando la sequenza di Sobol in un massimo di 4000 dimensioni.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Sintassi:** socketHandle = Socket( <STREAM | DGRAM> )

**Descrizione:** Crea una variabile di socket che può comunicare con i socket su questo o un altro computer connesso in rete. L&apos;argomento predefinito è STREAM. Provare con il sito Web della società/organizzazione dell&apos;utente.

**JMP Versione aggiunta:** prima della versione 14

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

### Speak

**Sintassi:** Speak( text, <Wait( sync )> )

**Descrizione:** Enuncia il testo se supportato dal sistema operativo. Specificando l&apos;argomento facoltativo Wait(true) si ritarda l&apos;esecuzione dello script fino al termine del discorso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Speak( "Hello" );

```

### Status Msg

**Sintassi:** Status Msg( message )

**Descrizione:** Visualizza il messaggio specificato nella barra di stato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Status Msg( "calculating..." );

```

### Subtract

**Sintassi:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Descrizione:** Sottrae tutti gli argomenti successivi dal primo argomento. Gli argomenti possono essere numeri, matrici o elenchi di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
6 - 2 - 1;

```

### Test Promise Error After

**JMP Versione aggiunta:** 17

### Test Promise Result After

**JMP Versione aggiunta:** 17

### Unit Test

**JMP Versione aggiunta:** prima della versione 14

### Unregister Addin

**Sintassi:** Unregister Addin( uniqueId)

**Descrizione:** Annulla registrazione add-in

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**Sintassi:** Web( string, <JMP Window> )

**Descrizione:** Apre l&apos;URL o il file memorizzato in string nel browser Web predefinito. Il secondo argomento facoltativo specifica che l’HTML si apre in una finestra del browser di JMP.

**JMP Versione aggiunta:** prima della versione 14

**Gestore eventi**

```jsl

Names Default To Here( 1 );
//Making a clickable link show up in a formula column
New Table( "Example",
	Add Rows( 2 ),
	New Column( "URL",
		"Character",
		"Nominal",
		Formula( "https://www.jmp.com/" || :Page ),
		Set Property(
			"Event Handler",
			Event Handler(
				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )
			)
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )
	)
);

```

**Semplici**

```jsl

Names Default To Here( 1 );
Web( "http://www.jmp.com/" );

```

### With Clipboard

**Sintassi:** two = With Clipboard( clp, box << Paste; 1 + 1 )

**Descrizione:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### XML Attr

**Sintassi:** value = XML Attr( attr name ); aa = XML Attr()

**Descrizione:** Estrae il valore della stringa di un attributo XML nel contesto di una valutazione di un comando Parse XML(). Se non viene dato alcun nome, viene restituito un array associativo di tutte le coppie di attributi nome/valore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XML Decode

**Sintassi:** text = XML Decode( textxml )

**Descrizione:** Decodifica i simboli in XML come testo ordinario, cambia " in ", < in <, &gt to >; & in &.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Sintassi:** textxml = XML Encode( text )

**Descrizione:** Prepara il testo per l&apos;inserimento in XML, cambia " in ", < in <, > in > & in &.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Sintassi:** value = XML Text()

**Descrizione:** Estrae il testo della stringa del corpo di un tag XML nel contesto di una valutazione di un comando ParseXML().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### \[...]\

**Sintassi:** y = \[string]\

**Descrizione:** I passaggi che richiedono molti caratteri di escape possono usare il delimitatore \[...]\.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );

jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

