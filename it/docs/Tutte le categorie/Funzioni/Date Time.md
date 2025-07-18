# Date Time



### Abbrev Date

**Sintassi:** s = Abbrev Date( datetime, &lt;format&gt; )

**Descrizione:** Restituisce una rappresentazione specifica locale abbreviata di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Abbrev Date( Today() );

```

### As Date

**Sintassi:** dt = As Date( datetime )

**Descrizione:** Restituisce un valore di data e ora contrassegnato internamente come data per scopi di output.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Today() );

```

### Date DMY

**Sintassi:** z = Date DMY( d, m, y )

**Descrizione:** Converte giorno, mese e anno in un valore di data e ora JMP, che corrisponde al numero di secondi dal 1 gennaio 1904.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Sintassi:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Descrizione:** Restituisce la differenza in intervalli di due valori di data/ora. I valori supportati di intervalName sono "Anno", "Trimestre", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo" e "Numerico". Un alignment di "Start" include intervalli completi o parziali, mentre "Actual" include solo intervalli completi. Un alignment di "Fractional" restituisce differenze frazionarie, usando medie per la durata degli intervalli di "Anno", "Trimestre", e "Mese".

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

#### Esempio 2

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

#### Esempio 3

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**Sintassi:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Descrizione:** Restituisce un nuovo valore di data/ora aggiungendo incr numero di intervalli. I valori supportati di intervalName sono "Anno", "Trimestre", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo", e "Numerico". Un alignment di "Start" tronca all&apos;intervallo più vicino prima di aggiungere l&apos;incremento, mentre "Actual" mantiene l&apos;intero input di data/ora. Un alignment di "Fractional" consente valori incr frazionari, usando medie per la durata degli intervalli "Anno", "Trimestre" e "Mese".

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

#### Esempio 2

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

#### Esempio 3

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Sintassi:** z = Date MDY( m, d, y )

**Descrizione:** Converte mese, giorno e anno in un valore di data JMP, che corrisponde al numero di secondi dal 1 gennaio 1904.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Sintassi:** d = Day( datetime )

**Descrizione:** Restituisce il giorno del mese di un valore di data e ora, 1 - 31.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Day( Today() );

```

### Day Of Week

**Sintassi:** d = Day Of Week( datetime )

**Descrizione:** Restituisce il giorno della settimana di un valore di data e ora. Domenica = 1, ..., Sabato = 7.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Sintassi:** d = Day Of Year( datetime )

**Descrizione:** Restituisce il giorno dell&apos;anno di un valore di data e ora. Il 1 gennaio è 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Sintassi:** v = Days In Month(year, month)

**Descrizione:** Restituisce il numero di giorni di un mese specificato.

**JMP Versione aggiunta:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Format

**Sintassi:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descrizione:** Restituisce il numero nel formato specificato. I formati comprendono elementi nella finestra di dialogo Informazioni sulla colonna, come "Migliore" e "h:m:s". Vedere la Guida su un argomento per ulteriori opzioni, tra cui p-value, valuta, data e ora e formati geografici.

**JMP Versione aggiunta:** prima della versione 14

#### Data e ora

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### Pattern del formato

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### Percentuale, Valuta

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

#### Precisione completa

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Sintassi:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descrizione:** Restituisce il numero nel formato specificato. I formati comprendono elementi nella finestra di dialogo Informazioni sulla colonna, come "Migliore" e "h:m:s". Vedere la Guida su un argomento per ulteriori opzioni, tra cui p-value, valuta, data e ora e formati geografici.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### Esempio 2

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### Esempio 3

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**Sintassi:** t = HP Time()

**Descrizione:** Restituisce un valore di tempo ad alta precisione in microsecondi. Utile solamente rispetto a un altro valore HP Time(). Il valore di tempo rappresenta il numero di microsecondi dall&apos;inizio della sessione di JMP.

**JMP Versione aggiunta:** prima della versione 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**Sintassi:** hr = Hour( datetime, &lt;12&gt; )

**Descrizione:** Restituisce l&apos;ora di un valore di data e ora, in modalità 12 ore (12, 1 - 11) o 24 ore (0 - 23).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Hour( Today() );

```

### ISO Year

**Sintassi:** yr = ISO Year( datetime )

**Descrizione:** Restituisce l&apos;anno ISO di un valore di data e ora. Gli anni ISO corrispondono alle settimane ISO; iniziano il lunedì della prima settimana che contiene almeno quattro giorni.

**JMP Versione aggiunta:** 16

```jsl

ISO Year( Today() );

```

### In Days

**Sintassi:** y = In Days( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di giorni nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Days( 1.5 );

```

### In Hours

**Sintassi:** y = In Hours( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di ore nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Sintassi:** y = In Minutes( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di minuti nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Minutes( 1 );

```

### In Weeks

**Sintassi:** y = In Weeks( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di settimane nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Weeks( 1 );

```

### In Years

**Sintassi:** y = In Years( &lt;x=1&gt; )

**Descrizione:** Converte x da un numero di anni nel numero equivalente di secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

In Years( 1 );

```

### Informat

**Sintassi:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descrizione:** Analizza una stringa di un dato formato. Se si tratta di un formato di data e ora, il valore è espresso come se fosse racchiuso in Come data(), restituendo la data nel formato ggmmmaaaa. L&apos;opzione facoltativa <<Restrict utilizzata con il formatString "migliore" consente solo la conversione usando formati interi, decimali e scientifici.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Informat( "07152000", "MMDDYYYY" );

```

#### Esempio 2

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

#### Esempio 3

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

#### Esempio 4

```jsl

Informat( "123.45%", "Percent" );

```

#### Esempio 5

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Is Leap Year

**Sintassi:** v = Is Leap Year(year)

**Descrizione:** Restituisce se un anno specificato è un anno bisestile.

**JMP Versione aggiunta:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Long Date

**Sintassi:** s = Long Date( datetime, &lt;format&gt; )

**Descrizione:** Restituisce una rappresentazione specifica locale lunga di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Long Date( Today() );

```

### MDYHMS

**Sintassi:** s = MDYHMS( datetime, &lt;format&gt; )

**Descrizione:** Restituisce la rappresentazione di un valore di data e ora ordinata come segue: mese, giorno, anno, ora, minuto, secondo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MDYHMS( Today() );

```

### Minute

**Sintassi:** min = Minute( datetime )

**Descrizione:** Restituisce i minuti di un valore di data e ora, 0 - 59.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Minute( Today() );

```

### Month

**Sintassi:** mon = Month( datetime )

**Descrizione:** Restituisce il mese di un valore di data e ora, 1 - 12.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Month( Today() );

```

### Nth Day Of Week in the Month

**Sintassi:** n = Nth Day Of Week in the Month( datetime )

**Descrizione:** Restituisce un numero intero che rappresenta il numero di istanze del giorno della settimana dell&apos;argomento data e ora che si sono verificate nel mese. Ad esempio, il 28 novembre 2019 è il 4° giovedì del mese, quindi la funzione restituisce 4.

**JMP Versione aggiunta:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**Sintassi:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descrizione:** Analizza una stringa di un dato formato. Se si tratta di un formato di data e ora, il valore è espresso come se fosse racchiuso in Come data(), restituendo la data nel formato ggmmmaaaa. L&apos;opzione facoltativa <<Restrict utilizzata con il formatString "migliore" consente solo la conversione usando formati interi, decimali e scientifici.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Informat( "07152000", "MMDDYYYY" );

```

#### Esempio 2

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

#### Esempio 3

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

#### Esempio 4

```jsl

Informat( "123.45%", "Percent" );

```

#### Esempio 5

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Quarter

**Sintassi:** q = Quarter( datetime )

**Descrizione:** Restituisce il trimestre di un valore di data e ora, 1 - 4.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Quarter( Today() );

```

### Second

**Sintassi:** sec = Second( datetime )

**Descrizione:** Restituisce i secondi di un valore di data e ora, comprese parti frazionarie, 0 – 60 escluso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Second( Today() );

```

### Short Date

**Sintassi:** s = Short Date( datetime, &lt;format&gt; )

**Descrizione:** Restituisce una rappresentazione specifica locale numerica (GG/MM/AAAA) di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Short Date( Today() );

```

### Tick Seconds

**Sintassi:** t = Tick Seconds()

**Descrizione:** Restituisce un valore di tempo in secondi, di norma accurato ad almeno 1/60 di secondo (una "tacca"), in base al computer. Utile solamente rispetto a un altro valore Tick Seconds().

**JMP Versione aggiunta:** prima della versione 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Sintassi:** sec = Time Of Day( datetime )

**Descrizione:** Restituisce l&apos;ora di un valore di data e ora, compresa la parte frazionaria dei secondi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**Sintassi:** dt = Today()

**Descrizione:** Restituisce il valore di data e ora attuale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Date( Today() );

```

### Week Of Year

**Sintassi:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Descrizione:** Restituisce la settimana dell&apos;anno che contiene un valore data-ora usando una delle tre regole. Impostazione predefinita (regola 1), la settimana inizia la domenica con la prima domenica dell&apos;anno nella settimana 2. La settimana 1 sarà una settimana parziale o vuota (come nel 2006). Per la regola 2, la prima domenica è nella settimana 1, con i giorni precedenti nella settimana 0. Per la regola 3, viene restituito il numero della settimana ISO, dove le settimane iniziano di lunedì e la settimana 1 è la prima settimana dell&apos;anno con quattro giorni in quell&apos;anno. Con le settimane ISO, è possibile che i primi o gli ultimi tre giorni dell&apos;anno appartengano al numero di settimana dell&apos;anno vicino.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Week Of Year( Today() );

```

#### Esempio 2

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Year

**Sintassi:** yr = Year( datetime )

**Descrizione:** Restituisce la parte anno di un valore di data e ora.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Year( Today() );

```

