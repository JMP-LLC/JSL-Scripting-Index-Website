# Date Time



### Abbrev Date

**Sintaxis:** s = Abbrev Date( datetime, <format> )

**Descripción:** Devuelve una representación abreviada y específica de la configuración local de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Abbrev Date( Today() );

```

### As Date

**Sintaxis:** dt = As Date( datetime )

**Descripción:** Devuelve un valor de fecha y hora marcado internamente como fecha con propósitos de salida.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
As Date( Today() );

```

### Date DMY

**Sintaxis:** z = Date DMY( d, m, y )

**Descripción:** Convierte día, mes y año en un valor de fecha y hora de JMP, que es el número de segundos transcurridos desde el 1 de enero de 1904.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Sintaxis:** delta = Date Difference( dt1, dt2, intervalName, <alignment="start"> )

**Descripción:** Devuelve la diferencia en intervalos de dos valores de fecha/hora. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" incluye intervalos parciales o completos, mientras que "Actual" solo incluye intervalos completos. Una alignment de "Fractional" devuelve diferencias fraccionales y utiliza medias para la duración de los intervalos de "Año", "Trimestre" y "Mes".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**Sintaxis:** d = Date Increment( datetime, intervalName, <incr=1>, <alignment="start"> )

**Descripción:** Devuelve un valor de fecha y hora agregando un número de intervalos incr. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" trunca el intervalo más cercano antes de agregar el incremento, mientras que "Actual" retiene la fecha y hora de entrada completa. Una alignment de "Fractional" permite valores incr fraccionales y utiliza medias para la duración de los intervalos "Año", "Trimestre" y "Mes".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "start" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "actual" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Sintaxis:** z = Date MDY( m, d, y )

**Descripción:** Convierte mes, día y año en un valor de fecha y hora de JMP, que es el número de segundos transcurridos desde el 1 de enero de 1904.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Sintaxis:** d = Day( datetime )

**Descripción:** Devuelve el día del mes correspondiente a un valor de fecha y hora, del 1 al 31.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Day( Today() );

```

### Day Of Week

**Sintaxis:** d = Day Of Week( datetime )

**Descripción:** Devuelve el día de la semana correspondiente a un valor de fecha y hora. Domingo = 1, ..., Sábado = 7.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Day Of Week( Today() );

```

### Day Of Year

**Sintaxis:** d = Day Of Year( datetime )

**Descripción:** Devuelve el día del año correspondiente a un valor de fecha y hora. El 1 de enero es el día 1.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Day Of Year( Today() );

```

### Days In Month

**Sintaxis:** v = Days In Month(year, month)

**Descripción:** Devuelve el número de días en un mes dado.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
v = Days In Month( 2016, 2 );

```

### Format

**Sintaxis:** s = Format( x, formatString, <options> )

s = Format( x, "Format Pattern", pattern, <options> )

**Descripción:** Devuelve el número en el formato especificado. Entre los formatos se incluyen los elementos del cuadro de diálogo Info de columna, tales como "Mejor" y "h:m:s". Consulte los temas de ayuda para conocer otras opciones, incluidos los formatos de valor p, fecha y hora, y geográfico.

**JMP Versión agregada:** Antes de la versión 14

**Fecha y hora**

```js

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Patrón de formato**

```js

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Porcentaje, Moneda**

```js

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**Precisión completa**

```js

Names Default To Here( 1 );
Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Sintaxis:** s = Format( x, formatString, <options> )

s = Format( x, "Format Pattern", pattern, <options> )

**Descripción:** Devuelve el número en el formato especificado. Entre los formatos se incluyen los elementos del cuadro de diálogo Info de columna, tales como "Mejor" y "h:m:s". Consulte los temas de ayuda para conocer otras opciones, incluidos los formatos de valor p, fecha y hora, y geográfico.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**Sintaxis:** t = HP Time()

**Descripción:** Devuelve un valor de tiempo de alta precisión (HP) en microsegundos. Únicamente es útil en relación con otro valor de HP Time(). El valor de tiempo representa el número de microsegundos que transcurren desde el inicio de la sesión JMP.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**Sintaxis:** hr = Hour( datetime, <12> )

**Descripción:** Devuelve las horas correspondientes al valor de fecha y hora, en modo 12 horas (12, 1 - 11) o 24 horas (0 - 23).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Hour( Today() );

```

### ISO Year

**Sintaxis:** yr = ISO Year( datetime )

**Descripción:** Devuelve el año ISO de un valor de fecha-hora. Los años ISO corresponden a semanas ISO: comienzan el lunes de la primera semana que contiene al menos cuatro días.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
ISO Year( Today() );

```

### In Days

**Sintaxis:** y = In Days( <x=1> )

**Descripción:** Convierte un número de días x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
In Days( 1.5 );

```

### In Hours

**Sintaxis:** y = In Hours( <x=1> )

**Descripción:** Convierte un número de horas x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
In Hours( 0.5 );

```

### In Minutes

**Sintaxis:** y = In Minutes( <x=1> )

**Descripción:** Convierte un número de minutos x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
In Minutes( 1 );

```

### In Weeks

**Sintaxis:** y = In Weeks( <x=1> )

**Descripción:** Convierte un número de semanas x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
In Weeks( 1 );

```

### In Years

**Sintaxis:** y = In Years( <x=1> )

**Descripción:** Convierte un número de años x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
In Years( 1 );

```

### Informat

**Sintaxis:** dt = In Format( s, formatString, < <<Use Locale(b=1)>, < <<Restrict > )

dt = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

**Descripción:** Analiza una cadena de caracteres de un formato dado. Si el formato es un formato de fecha y hora, el valor se expresa como si estuviera rodeado por As Date(), devolviendo la fecha en formato ddmesaaaa. El ajuste <<Restrict opcional utilizado con la "mejor" formatString solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Ejemplo 5**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
v = Is Leap Year( 2016 );

```

### Long Date

**Sintaxis:** s = Long Date( datetime, <format> )

**Descripción:** Devuelve una representación larga y específica de la configuración local de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Long Date( Today() );

```

### MDYHMS

**Sintaxis:** s = MDYHMS( datetime, <format> )

**Descripción:** Devuelve una representación de un valor de fecha y hora con el orden: mes, día, año, hora, minuto y segundo.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
MDYHMS( Today() );

```

### Minute

**Sintaxis:** min = Minute( datetime )

**Descripción:** Devuelve los minutos correspondientes a un valor de fecha y hora, del 0 al 59.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Minute( Today() );

```

### Month

**Sintaxis:** mon = Month( datetime )

**Descripción:** Devuelve el mes correspondiente a un valor de fecha y hora, del 1 al 12.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Month( Today() );

```

### Nth Day Of Week in the Month

**Sintaxis:** n = Nth Day Of Week in the Month( datetime )

**Descripción:** Devuelve un entero que representa el número de instancias del día de la semana del argumento fecha y hora que han tenido lugar en el mes. Por ejemplo, 28 de noviembre de 2019 es el cuarto jueves el mes, por lo que la función devuelve 4.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**Sintaxis:** dt = In Format( s, formatString, < <<Use Locale(b=1)>, < <<Restrict > )

dt = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

**Descripción:** Analiza una cadena de caracteres de un formato dado. Si el formato es un formato de fecha y hora, el valor se expresa como si estuviera rodeado por As Date(), devolviendo la fecha en formato ddmesaaaa. El ajuste <<Restrict opcional utilizado con la "mejor" formatString solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Ejemplo 5**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
Quarter( Today() );

```

### Second

**Sintaxis:** sec = Second( datetime )

**Descripción:** Devuelve los segundos correspondientes a un valor de fecha y hora, incluida cualquier parte fraccional, de 0 a 60 exclusive.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Second( Today() );

```

### Short Date

**Sintaxis:** s = Short Date( datetime, <format> )

**Descripción:** Devuelve una representación numérica y específica de la configuración local (MM/DD/AAAA) de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Short Date( Today() );

```

### Tick Seconds

**Sintaxis:** t = Tick Seconds()

**Descripción:** Devuelve un valor de tiempo en segundos, por lo general preciso hasta 1/60 segundos (un "tick") como mínimo, en función del ordenador. Sólo es útil respecto de otro valor de Tick Seconds().

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Sintaxis:** sec = Time Of Day( datetime )

**Descripción:** Devuelve la hora de un valor de fecha y hora, incluida la fracción de segundos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**Sintaxis:** dt = Today()

**Descripción:** Devuelve el valor de fecha-hora correspondiente al instante actual.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
As Date( Today() );

```

### Week Of Year

**Sintaxis:** d = Week Of Year( datetime, <rule=1> )

**Descripción:** Devuelve la semana del año con un valor de fecha-hora utilizando una de tres reglas. De forma predeterminada (regla 1), las semanas empiezan el domingo y el primer domingo del año es la semana 2. La semana 1 es una semana parcial o vacía (por ejemplo, en 2006). Según la regla 2, el primer domingo corresponde a la semana 1, y los días anteriores pertenecen a la semana 0. Según la regla 3 se devuelve el valor del número de semana según la norma ISO; según la cual las semanas empiezan en lunes y la semana 1 es la primera semana del año que tenga 4 días durante ese año. Con las semanas ISO, es posible que los primeros o los últimos tres días del año pertenezcan a una semana del año anterior o siguiente.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Week Of Year( Today() );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
Year( Today() );

```

