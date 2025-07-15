# Scheduler



## Costruttori associati

### Schedule

**Sintassi:** Schedule( seconds, script )

**Descrizione:** Programma un evento che esegue l&apos;argomento dello script scpt allo scadere di sec secondi. Nota: questo scheduler viene eseguito solo durante i tempi di inattività.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

## Messaggi degli elementi

### Clear Schedule

**Sintassi:** obj &lt;&lt; Clear Schedule

**Descrizione:** Cancella dallo scheduler tutti gli eventi attualmente pianificati.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Sintassi:** obj &lt;&lt; Close

**Descrizione:** Chiude lo scheduler.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
Wait( 2 );
s << Close;

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
t = s << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**Sintassi:** obj &lt;&lt; Restart

**Descrizione:** Riavvia lo scheduler dopo l&apos;interruzione.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;
Wait( 2 );
s << Restart;

```

### Show Schedule

**Sintassi:** obj &lt;&lt; Show Schedule

**Descrizione:** Mostra l&apos;evento successivo al momento pianificato.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Sintassi:** obj &lt;&lt; Stop

**Descrizione:** Interrompe l&apos;esecuzione degli eventi attualmente pianificati da parte dello scheduler.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

