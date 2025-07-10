# Scheduler



### Clear Schedule

**Sintassi:** obj << Clear Schedule

**Descrizione:** Cancella dallo scheduler tutti gli eventi attualmente pianificati.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Sintassi:** obj << Close

**Descrizione:** Chiude lo scheduler.

```js

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

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

```js

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

**Sintassi:** obj << Restart

**Descrizione:** Riavvia lo scheduler dopo l&apos;interruzione.

```js

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

### Schedule

**Sintassi:** Schedule( seconds, script )

**Descrizione:** Programma un evento che esegue l&apos;argomento dello script scpt allo scadere di sec secondi. Nota: questo scheduler viene eseguito solo durante i tempi di inattività.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

### Show Schedule

**Sintassi:** obj << Show Schedule

**Descrizione:** Mostra l&apos;evento successivo al momento pianificato.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Sintassi:** obj << Stop

**Descrizione:** Interrompe l&apos;esecuzione degli eventi attualmente pianificati da parte dello scheduler.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

