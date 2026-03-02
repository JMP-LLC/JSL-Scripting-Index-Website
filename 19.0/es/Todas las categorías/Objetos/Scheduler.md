# Scheduler



## Constructores asociados

### Schedule

**Sintaxis:** Schedule( seconds, script )

**Descripción:** Programa un evento que ejecuta el argumento de script scpt transcurridos sec segundos. Nota: el programador sólo funciona durante periodos de inactividad.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

## Mensajes del elemento

### Clear Schedule

**Sintaxis:** obj &lt;&lt; Clear Schedule

**Descripción:** Borra todos los eventos programados actualmente en el programador.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Sintaxis:** obj &lt;&lt; Close

**Descripción:** Cierra el programador.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
Wait( 2 );
s << Close;

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
t = s << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**Sintaxis:** obj &lt;&lt; Restart

**Descripción:** Reinicia el programador después de haber detenido la corrida de todos los eventos programados actualmente.

```jsl

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

**Sintaxis:** obj &lt;&lt; Show Schedule

**Descripción:** Muestra el siguiente suceso actualmente programado.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Sintaxis:** obj &lt;&lt; Stop

**Descripción:** Detiene el programador para que no ejecute todos los eventos programados actualmente.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

