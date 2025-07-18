# Date Time



### Abbrev Date

**Sintaxis:** s = Abbrev Date( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación abreviada y específica de la configuración local de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Abbrev Date( Today() );

```

### As Date

**Sintaxis:** dt = As Date( datetime )

**Descripción:** Devuelve un valor de fecha y hora marcado internamente como fecha con propósitos de salida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Today() );

```

### Date DMY

**Sintaxis:** z = Date DMY( d, m, y )

**Descripción:** Convierte día, mes y año en un valor de fecha y hora de JMP, que es el número de segundos transcurridos desde el 1 de enero de 1904.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Sintaxis:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Descripción:** Devuelve la diferencia en intervalos de dos valores de fecha/hora. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" incluye intervalos parciales o completos, mientras que "Actual" solo incluye intervalos completos. Una alignment de "Fractional" devuelve diferencias fraccionales y utiliza medias para la duración de los intervalos de "Año", "Trimestre" y "Mes".

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

#### Ejemplo 2

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

#### Ejemplo 3

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**Sintaxis:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Descripción:** Devuelve un valor de fecha y hora agregando un número de intervalos incr. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" trunca el intervalo más cercano antes de agregar el incremento, mientras que "Actual" retiene la fecha y hora de entrada completa. Una alignment de "Fractional" permite valores incr fraccionales y utiliza medias para la duración de los intervalos "Año", "Trimestre" y "Mes".

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

#### Ejemplo 2

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

#### Ejemplo 3

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Sintaxis:** z = Date MDY( m, d, y )

**Descripción:** Convierte mes, día y año en un valor de fecha y hora de JMP, que es el número de segundos transcurridos desde el 1 de enero de 1904.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Sintaxis:** d = Day( datetime )

**Descripción:** Devuelve el día del mes correspondiente a un valor de fecha y hora, del 1 al 31.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Day( Today() );

```

### Day Of Week

**Sintaxis:** d = Day Of Week( datetime )

**Descripción:** Devuelve el día de la semana correspondiente a un valor de fecha y hora. Domingo = 1, ..., Sábado = 7.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Sintaxis:** d = Day Of Year( datetime )

**Descripción:** Devuelve el día del año correspondiente a un valor de fecha y hora. El 1 de enero es el día 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Sintaxis:** v = Days In Month(year, month)

**Descripción:** Devuelve el número de días en un mes dado.

**JMP Versión agregada:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Format

**Sintaxis:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descripción:** Devuelve el número en el formato especificado. Entre los formatos se incluyen los elementos del cuadro de diálogo Info de columna, tales como "Mejor" y "h:m:s". Consulte los temas de ayuda para conocer otras opciones, incluidos los formatos de valor p, fecha y hora, y geográfico.

**JMP Versión agregada:** Antes de la versión 14

#### Fecha y hora

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### Patrón de formato

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### Porcentaje, Moneda

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

#### Precisión completa

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Sintaxis:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descripción:** Devuelve el número en el formato especificado. Entre los formatos se incluyen los elementos del cuadro de diálogo Info de columna, tales como "Mejor" y "h:m:s". Consulte los temas de ayuda para conocer otras opciones, incluidos los formatos de valor p, fecha y hora, y geográfico.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### Ejemplo 2

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### Ejemplo 3

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**Sintaxis:** t = HP Time()

**Descripción:** Devuelve un valor de tiempo de alta precisión (HP) en microsegundos. Únicamente es útil en relación con otro valor de HP Time(). El valor de tiempo representa el número de microsegundos que transcurren desde el inicio de la sesión JMP.

**JMP Versión agregada:** Antes de la versión 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**Sintaxis:** hr = Hour( datetime, &lt;12&gt; )

**Descripción:** Devuelve las horas correspondientes al valor de fecha y hora, en modo 12 horas (12, 1 - 11) o 24 horas (0 - 23).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hour( Today() );

```

### ISO Year

**Sintaxis:** yr = ISO Year( datetime )

**Descripción:** Devuelve el año ISO de un valor de fecha-hora. Los años ISO corresponden a semanas ISO: comienzan el lunes de la primera semana que contiene al menos cuatro días.

**JMP Versión agregada:** 16

```jsl

ISO Year( Today() );

```

### In Days

**Sintaxis:** y = In Days( &lt;x=1&gt; )

**Descripción:** Convierte un número de días x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Days( 1.5 );

```

### In Hours

**Sintaxis:** y = In Hours( &lt;x=1&gt; )

**Descripción:** Convierte un número de horas x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Sintaxis:** y = In Minutes( &lt;x=1&gt; )

**Descripción:** Convierte un número de minutos x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Minutes( 1 );

```

### In Weeks

**Sintaxis:** y = In Weeks( &lt;x=1&gt; )

**Descripción:** Convierte un número de semanas x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Weeks( 1 );

```

### In Years

**Sintaxis:** y = In Years( &lt;x=1&gt; )

**Descripción:** Convierte un número de años x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Years( 1 );

```

### Informat

**Sintaxis:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descripción:** Analiza una cadena de caracteres de un formato dado. Si el formato es un formato de fecha y hora, el valor se expresa como si estuviera rodeado por As Date(), devolviendo la fecha en formato ddmesaaaa. El ajuste <<Restrict opcional utilizado con la "mejor" formatString solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Informat( "07152000", "MMDDYYYY" );

```

#### Ejemplo 2

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

#### Ejemplo 3

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

#### Ejemplo 4

```jsl

Informat( "123.45%", "Percent" );

```

#### Ejemplo 5

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Is Leap Year

**Sintaxis:** v = Is Leap Year(year)

**Descripción:** Devuelve si un año dado es un año bisiesto.

**JMP Versión agregada:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Long Date

**Sintaxis:** s = Long Date( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación larga y específica de la configuración local de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Long Date( Today() );

```

### MDYHMS

**Sintaxis:** s = MDYHMS( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación de un valor de fecha y hora con el orden: mes, día, año, hora, minuto y segundo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MDYHMS( Today() );

```

### Minute

**Sintaxis:** min = Minute( datetime )

**Descripción:** Devuelve los minutos correspondientes a un valor de fecha y hora, del 0 al 59.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Minute( Today() );

```

### Month

**Sintaxis:** mon = Month( datetime )

**Descripción:** Devuelve el mes correspondiente a un valor de fecha y hora, del 1 al 12.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Month( Today() );

```

### Nth Day Of Week in the Month

**Sintaxis:** n = Nth Day Of Week in the Month( datetime )

**Descripción:** Devuelve un entero que representa el número de instancias del día de la semana del argumento fecha y hora que han tenido lugar en el mes. Por ejemplo, 28 de noviembre de 2019 es el cuarto jueves el mes, por lo que la función devuelve 4.

**JMP Versión agregada:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**Sintaxis:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descripción:** Analiza una cadena de caracteres de un formato dado. Si el formato es un formato de fecha y hora, el valor se expresa como si estuviera rodeado por As Date(), devolviendo la fecha en formato ddmesaaaa. El ajuste <<Restrict opcional utilizado con la "mejor" formatString solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Informat( "07152000", "MMDDYYYY" );

```

#### Ejemplo 2

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

#### Ejemplo 3

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

#### Ejemplo 4

```jsl

Informat( "123.45%", "Percent" );

```

#### Ejemplo 5

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Quarter

**Sintaxis:** q = Quarter( datetime )

**Descripción:** Devuelve el trimestre correspondiente a un valor de fecha y hora, del 1 al 4.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Quarter( Today() );

```

### Second

**Sintaxis:** sec = Second( datetime )

**Descripción:** Devuelve los segundos correspondientes a un valor de fecha y hora, incluida cualquier parte fraccional, de 0 a 60 exclusive.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Second( Today() );

```

### Short Date

**Sintaxis:** s = Short Date( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación numérica y específica de la configuración local (MM/DD/AAAA) de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Short Date( Today() );

```

### Tick Seconds

**Sintaxis:** t = Tick Seconds()

**Descripción:** Devuelve un valor de tiempo en segundos, por lo general preciso hasta 1/60 segundos (un "tick") como mínimo, en función del ordenador. Sólo es útil respecto de otro valor de Tick Seconds().

**JMP Versión agregada:** Antes de la versión 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Sintaxis:** sec = Time Of Day( datetime )

**Descripción:** Devuelve la hora de un valor de fecha y hora, incluida la fracción de segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**Sintaxis:** dt = Today()

**Descripción:** Devuelve el valor de fecha-hora correspondiente al instante actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Today() );

```

### Week Of Year

**Sintaxis:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Descripción:** Devuelve la semana del año con un valor de fecha-hora utilizando una de tres reglas. De forma predeterminada (regla 1), las semanas empiezan el domingo y el primer domingo del año es la semana 2. La semana 1 es una semana parcial o vacía (por ejemplo, en 2006). Según la regla 2, el primer domingo corresponde a la semana 1, y los días anteriores pertenecen a la semana 0. Según la regla 3 se devuelve el valor del número de semana según la norma ISO; según la cual las semanas empiezan en lunes y la semana 1 es la primera semana del año que tenga 4 días durante ese año. Con las semanas ISO, es posible que los primeros o los últimos tres días del año pertenezcan a una semana del año anterior o siguiente.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Week Of Year( Today() );

```

#### Ejemplo 2

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Year

**Sintaxis:** yr = Year( datetime )

**Descripción:** Devuelve el año correspondiente a un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Year( Today() );

```

