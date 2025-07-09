# Scheduler



### Clear Schedule

**Sintaxis:** obj << Clear Schedule

**Descripción:** Borra todos los eventos programados actualmente en el programador.

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

**Sintaxis:** obj << Close

**Descripción:** Cierra el programador.

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

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

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

**Sintaxis:** obj << Restart

**Descripción:** Reinicia el programador después de haber detenido la corrida de todos los eventos programados actualmente.

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

**Sintaxis:** Schedule( seconds, script )

**Descripción:** Programa un evento que ejecuta el argumento de script scpt transcurridos sec segundos. Nota: el programador sólo funciona durante periodos de inactividad.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

### Show Schedule

**Sintaxis:** obj << Show Schedule

**Descripción:** Muestra el siguiente suceso actualmente programado.

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

**Sintaxis:** obj << Stop

**Descripción:** Detiene el programador para que no ejecute todos los eventos programados actualmente.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

