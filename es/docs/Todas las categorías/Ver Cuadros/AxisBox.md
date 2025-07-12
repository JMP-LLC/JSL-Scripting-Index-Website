# AxisBox



## Mensajes del elemento

### Add Axis Label

**Sintaxis:** obj << Add Axis Label( label )

**Descripción:** Agrega una etiqueta del eje con la cadena dada.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << RemoveAxisLabel();
axisbox << AddAxisLabel( "pounds" );

```

### Add Ref Line

**Sintaxis:** obj << Add Ref Line( value, <"Solid|Dashed|Double">, <Color>, <"label">, <line width>, <transparency> )

**Descripción:** Agrega una línea de referencia a la cuadrícula en el valor value.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Add Ref Line( 108.3182, "Dashed", blue, "M mean", 2 );
axisbox << Add Ref Line( 100.9444, "Dotted", red, "F mean", 2 );

```

### Axis Settings

**Sintaxis:** obj << Axis Settings

**Descripción:** Proporciona un modo para visualizar el cuadro de diálogo del eje o establecer las opciones configurables de eje para un eje determinado.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
//Open the axis setting dialog:
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Axis Settings();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
//Configure settings for horizontal and vertical axes:
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
vaxisbox = rbiv[axis box( 1 )];
haxisbox = rbiv[axis box( 2 )];
vaxisbox << Axis Settings( Decimal( 10, 3 ), Show Major Grid( 1 ) );
haxisbox << Axis Settings( Min( 10 ), Max( 100 ) );

```

### Copy Axis Settings

**Sintaxis:** obj << Copy Axis Settings

**Descripción:** Crea un script que contiene la configuración de eje actual y lo copia en el portapapeles.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv1 = Bivariate( Y( :weight ), X( :height ), FitLine );
biv2 = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv1 = biv1 << report;
axisbox1 = rbiv1[axis box( 1 )];
axisbox1 << Scale( "Log" );
axissettings = axisbox1 << Copy Axis Settings;
rbiv2 = biv2 << report;
axisbox2 = rbiv2[axis box( 1 )];
axisbox2 << Paste Axis Settings;

```

### Custom Scale Name

**Sintaxis:** obj << Custom Scale Name

**Descripción:** Nombre de la escala.

```jsl

Names Default To Here( 1 );
Open( "$sample_data/big class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 1 ) ) )
);
gbr = Report( gb );
gbr[axisbox( 1 )] << scale( custom scale, custom scale name( "log2" ) ) <<
Min( 32 ) << Max( 100 );

```

### Decimal

**Sintaxis:** obj << Decimal( number )

**Descripción:** Establece el número de dígitos tras la coma decimal de las etiquetas numéricas.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
biv = Bivariate( Y( :Population ), X( :"Salary (1997)"n ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << decimal( 1 );

```

### Edit Value Order

**Sintaxis:** obj << Edit Value Order

**Descripción:** Abre la propiedad de columna Orden de valores para editarla.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
o = Oneway( Y( :weight ), X( :sex ) );
ro = o << report;
axisbox = ro[axis box( 2 )];
axisbox << Edit Value Order();

```

### Edit Value Order Mode

**Sintaxis:** obj << Edit Value Order Mode

**JMP Versión agregada:** 16

### Format

**Sintaxis:** obj << Format( "Mejor"|"Decimal fijo"|"Porcentaje"|"Valor p"|"Científico"|"Ingeniería"|"SI de ingeniería"|"Precisión"|"Moneda"|"m#d#a"|"mmddaaaa"|"m#a"|"aaaaQq"|"d#m#a"|"ddmmaaaa"|"ddmesaaaa"|"Mesddaaaa"|"a#m#d"|"aaaammdd"|"aaaa-mm-dd"|"m#d#a h:m"|"m#d#a h:m:s"|"d#m#a h:m"|"d#m#a h:m:s"|"a#m#d h:m"|"a#m#d h:m:s"|"ddmesaaaa h:m"|"ddmesaaaa h:m:s"|"ddmesaaaa:h:m"|"ddmesaaaa:h:m:s"|"Mesddaaaa h:m"|"Mesddaaaa h:m:s"|"aaaa-mm-ddThh:mm"|"aaaa-mm-ddThh:mm:ss"|":día:hr:m"|":día:hr:m:s"|"hr:m"|"hr:m:s"|"min:s"|"h:m:s"|"h:m"|"Fecha en formato largo"|"Abrev. fecha"|"Fecha local"|"Hora local h:m"|"Hora local h:m:s" )

**Descripción:** Establece el formato de las etiquetas.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Financial.jmp" );
biv = Bivariate( Y( :"Profit($M)"n ), X( :"Sales($M)"n ), FitLine );
rbiv = biv << report;
profitaxis = rbiv[axis box( 1 )];
profitaxis << Format( currency );
salesaxis = rbiv[axis box( 2 )];
salesaxis << Format( currency );

```

### Get Format

**Sintaxis:** obj << Get Format

**Descripción:** Returns the format specification for axis values.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Financial.jmp" );
biv = Bivariate( Y( :"Profit($M)"n ), X( :"Sales($M)"n ), FitLine );
rbiv = biv << report;
profitaxis = rbiv[axis box( 1 )];
profitaxis << Format( currency );
salesaxis = rbiv[axis box( 2 )];
salesaxis << Format( currency );
salesaxis << get format;

```

### Get Inc

**Sintaxis:** obj << Get Inc( number )

**Descripción:** Obtiene el valor incremental del eje

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Get Inc;

```

### Get Max

**Sintaxis:** obj << Get Max( number )

**Descripción:** Obtiene el valor máximo del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Get Max;

```

### Get Min

**Sintaxis:** obj << Get Min( number )

**Descripción:** Obtiene los valores mínimos del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Get Min;

```

### Get Minor Ticks

**Sintaxis:** obj << Get Minor Ticks( number )

**Descripción:** Obtiene el número de graduaciones secundarias.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
n = axisbox << Get Minor Ticks;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Devuelve el script para recrear el cuadro del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
Print( axisbox << Get Script() );

```

### Inc

**Sintaxis:** obj << Inc( number )

**Descripción:** Establece el valor de incremento del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Inc( 5 );

```

### Inside Ticks

**Sintaxis:** obj << Inside Ticks( state=0|1 )

**Descripción:** Muestra las marcas de graduación del eje dentro del marco gráfico

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << Inside Ticks( 1 );

```

### Interval

**Sintaxis:** obj << Interval( "Numérico"|"Año"|"Trimestre"|"Mes"|"Semana"|"Día"|"Hora"|"Minuto"|"Segundo" )

**Descripción:** Establece el formato de las etiquetas numéricas.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/TechStock.jmp" );
plot = Overlay Plot(
	X( :Date ),
	Y( :High, :Low, :Close, :Volume ),
	Y Scale( Left, Left, Left, Right ),
	Left Axis << {{Format( "Best", 9 ), Min( 0 ), Max( 60 ), Inc( 10 ),
	Minor Ticks( 0 )}},
	Right Axis << {{Format( "Best", 9 ), Min( 0 ), Max( 800000000 ),
	Inc( 100000000 ), Minor Ticks( 0 )}},

);
rplot = plot << Report();
axisbox = rplot[axis box( 3 )];
axisbox << Format( "y/m/d" );
axisbox << Interval( Week );

```

### Label Row

**Sintaxis:** obj << Label Row

### Label Row Nesting

**Sintaxis:** obj << Label Row Nesting( number )

**Descripción:** Establece el número de filas de etiquetas para los ejes con formato de fecha.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/TechStock.jmp" );
biv = Bivariate( Y( :Open ), X( :Date ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << Label Row Nesting( 3 );

```

### Major Grid Line Color

**Sintaxis:** obj << Major Grid Line Color( color )

**Descripción:** Establece el color de línea de la cuadrícula principal

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << Major Grid Line Color( "Blue" );

```

### Max

**Sintaxis:** obj << Max( number )

**Descripción:** Establece el valor máximo del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Max( 120 );

```

### Min

**Sintaxis:** obj << Min( number )

**Descripción:** Establece el valor mínimo del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Min( 100 );

```

### Minor Grid Line Color

**Sintaxis:** obj << Minor Grid Line Color( color )

**Descripción:** Establece el color de línea de la cuadrícula secundaria

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << Minor Grid Line Color( "Blue" );

```

### Minor Ticks

**Sintaxis:** obj << Minor Ticks( number )

**Descripción:** Establece el número de graduaciones que deben colocarse entre etiquetas.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Minor Ticks( 5 );

```

### Paste Axis Settings

**Sintaxis:** obj << Paste Axis Settings

**Descripción:** El portapapeles contiene un script apropiado para la configuración del eje; aplíquelo.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv1 = Bivariate( Y( :weight ), X( :height ), FitLine );
biv2 = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv1 = biv1 << report;
axisbox1 = rbiv1[axis box( 1 )];
axisbox1 << Scale( "Log" );
axissettings = axisbox1 << Copy Axis Settings;
rbiv2 = biv2 << report;
axisbox2 = rbiv2[axis box( 1 )];
axisbox2 << Paste Axis Settings;

```

### Remove Axis Label

**Sintaxis:** obj << Remove Axis Label

**Descripción:** Quita todas las etiquetas agregadas con Agregar etiqueta del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << RemoveAxisLabel( "weight" );
axisbox << AddAxisLabel( "pounds" );

```

### Remove Ref Line

**Sintaxis:** obj << Remove Ref Line( number )

**Descripción:** Elimina la línea de referencia indicada.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Add Ref Line( 90, "Dashed", blue );
axisbox << Remove Ref Line( 90 );

```

### Reversed Scale

**Sintaxis:** obj << Reversed Scale

**Descripción:** Invierte la dirección de la escala normal para que el valor mayor quede a la izquierda o abajo.

```jsl

Names Default To Here( 1 );
Open( "$sample_data/big class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gbr = Report( gb );
gbr[axisbox( 1 )] << Reversed Scale( 1 );

```

### Revert Axis

**Sintaxis:** obj << Revert Axis

**Descripción:** Restaura la configuración original del eje (desde el momento de creación).

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Max( 120 );
axisbox << Revert Axis;

```

### Revert Scale

**Sintaxis:** obj << Revert Scale

**Descripción:** Restaura la escala del eje sin alternar las demás personalizaciones

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Max( 120 );
axisbox << Revert Scale;

```

### Save To Column Property

**Sintaxis:** obj << Save To Column Property

**Descripción:** Guarda la configuración del eje como una propiedad del eje en la columna de datos asociada a este eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Save To Column Property();

```

### Scale

**Sintaxis:** obj << Scale( "Lineal"|"Logaritmo"|"Probabilidad exponencial"|"Probabilidad de Weibull"|"Probabilidad logística"|"Probabilidad de Fréchet"|"Probabilidad normal"|"Raíz cúbica"|"Johnson Su"|"Geodésica"|"Geodésica EE. UU."|"Potencia"|"Probabilidad Gamma"|"Probabilidad beta"|"Mezcla de 2 probabilidades normales"|"Mezcla de 3 probabilidades normales"|"Escala personalizada" )

**Descripción:** Especifica el tipo de escalado que debe aplicarse al eje. Si el tipo es Escala personalizada, este mensaje espera dos cláusulas adicionales; véanse Cambiar a escala interna y Cambiar a escala externa.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Scale( "Log" );

```

### Scale ID

**Sintaxis:** obj << Scale ID( number )

**Descripción:** Agrega un ID específico al eje para utilizarlo con varios ejes.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
gbox = Graph Box(
	Frame Size( 300, 300 ),
	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),
	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),
	X Axis( Min( 8 ), Max( 700 ) ), //assigned scale ID 3
	X Axis( Scale ID( 7 ), Side( 2 ), Min( -100 ), Max( 200 ) ),
	Y Axis( Min( 1 ), Max( 100 ) ), //assigned scale ID 4
	Y Axis( Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), //assigned scale ID 5
	Y Axis( Scale ID( 6 ), Min( -100 ), Max( 200 ) )
);
gbox << Set Y Name( "Test", 5 ); //set y name of axis with ID 5

fbox = gbox[frame box( 1 )];
fbox << Add Graphics Script(
	Scale IDs( 1, 5 ), //use scale ID's 1 and 5 for this graphics script
	Pen Color( "Purple" );
	Line( [20 50 80], [4 3 6] );
);
New Window( "Example", gbox );

```

### Scale To External

**Sintaxis:** obj << Scale To External

**Descripción:** Escala el sistema de coordenadas externo según la fórmula personalizada dada.

```jsl

Names Default To Here( 1 );
Open( "$sample_data/big class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 1 ) ) )
);
gbr = Report( gb );
gbr[axisbox( 1 )] << scale(
	custom scale,
	Scale To Internal( Function( {x}, If( x > 0, Log( x, 2 ), . ) ) ),
	Scale To External( Function( {x}, Power( 2, x ) ) )
) << Min( 32 ) << Max( 100 );

```

### Scale To Internal

**Sintaxis:** obj << Scale To Internal

**Descripción:** Escala el sistema de coordenadas interno según la fórmula personalizada dada.

```jsl

Names Default To Here( 1 );
Open( "$sample_data/big class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 1 ) ) )
);
gbr = Report( gb );
gbr[axisbox( 1 )] << scale(
	custom scale,
	Scale To Internal( Function( {x}, If( x > 0, Log( x, 2 ), . ) ) ),
	Scale To External( Function( {x}, Power( 2, x ) ) )
) << Min( 32 ) << Max( 100 );

```

### Set Width

**Sintaxis:** obj << Set Width( number )

**Descripción:** Establece el ancho del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << SetWidth( 100 );

```

### Show Labels

**Sintaxis:** obj << Show Labels( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) las etiquetas del eje para las marcas de graduación principal. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Show Major Labels( 0 );

```

### Show Major Grid

**Sintaxis:** obj << Show Major Grid( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) la cuadrícula que se encuentra en el mismo lugar que las etiquetas numéricas.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Show Major Grid( 1 );

```

### Show Major Labels

**Sintaxis:** obj << Show Major Labels( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) las etiquetas del eje para las marcas de graduación principal. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Show Major Labels( 0 );

```

### Show Major Ticks

**Sintaxis:** obj << Show Major Ticks( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) las marcas de graduación que se encuentran en el mismo lugar que las etiquetas numéricas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Show Major Ticks( 0 );

```

### Show Minor Grid

**Sintaxis:** obj << Show Minor Grid( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) la cuadrícula que se encuentra entre las etiquetas numéricas.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << Show Minor Grid( 1 );

```

### Show Minor Labels

**Sintaxis:** obj << Show Minor Labels( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) las etiquetas del eje para las marcas de graduación secundaria.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Show Minor Labels( 1 );

```

### Show Minor Ticks

**Sintaxis:** obj << Show Minor Ticks( state=0|1 )

**Descripción:** Muestra (1) u oculta (0) las marcas de graduación que se encuentran entre las etiquetas numéricas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisbox << Show Minor Ticks( 1 );

```

### Side

**Sintaxis:** <X / Y> Axis( Side ( <1/2> ) )

**Descripción:** Cambia el lado (primario (1) o secundario (2)) del eje

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
gbox = Graph Box(
	Frame Size( 300, 300 ),
	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),
	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),
	X Axis( Min( 8 ), Max( 700 ) ), //assigned scale ID 3
	X Axis( Scale ID( 7 ), Side( 2 ), Min( -100 ), Max( 200 ) ),
	Y Axis( Min( 1 ), Max( 100 ) ), //assigned scale ID 4
	Y Axis( Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), //assigned scale ID 5
	Y Axis( Scale ID( 6 ), Min( -100 ), Max( 200 ) )
);
New Window( "Example", gbox );

```

### Tick Font

**Sintaxis:** obj << Tick Font

**Descripción:** Establece la fuente de las marcas de graduación.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Tick Font( "Arial", 14, "Italic Underline" );

```

### Tick Label List

**Sintaxis:** obj << Tick Label List

**Descripción:** Establece los valores y las posiciones de las etiquetas de las marcas de graduación del eje.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << {Min( 0 ), Max( 5 ), Inc( 1 )};
axisbox << Tick Label List(
	{"sqrt2", "sqrt3", "e", "pi"},
	{1.41, 1.73, 2.72, 3.14}
);

```

### Update Ref Line

**Sintaxis:** obj << Update Ref Line( ID, index, value, <"Solid|Dashed|Double">, <Color>, <"label">, <line width>, <transparency> )

**Descripción:** Modifica una línea de referencia existente.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Add Ref Line( 108.3182, "Dashed", blue, "M mean", 2 );
axisbox << Add Ref Line( 100.9444, "Dotted", red, "F mean", 2 );

```

## Mensajes del elemento compartidos

### Add Line Annotation

**Sintaxis:** obj << Add Line Annotation

**Descripción:** Agrega una línea encima del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Sintaxis:** obj << Add Pin Annotation

**Descripción:** Añade una anotación anclada sobre un cuadro de visualización. La mayoría de los atributos (como Index Row, UniqueID y FoundPt) están diseñados solo para uso interno.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**Sintaxis:** obj << Add Polygon Annotation

**Descripción:** Agrega un polígono encima del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**Sintaxis:** obj << Add Simple Shape Annotation

**Descripción:** Agrega una forma simple encima del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Sintaxis:** obj << Add Text Annotation

**Descripción:** Agrega texto encima del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**Sintaxis:** obj << Append( db2 )

**Descripción:** Agrega db2 al árbol de visualización después de db.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Sintaxis:** obj << Background Color( color );

color = obj << Get Background Color

**Descripción:** Si hay un color de fondo definido, el cuadro se rellena con el color de fondo antes de dibujar su contenido. Si no hay un color de fondo definido, el fondo y el contenido de los cuadros contenedores es transparente.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Border

**Sintaxis:** obj << Border( sides );

sides = obj << Get Border

**Descripción:** Los bordes son líneas sólidas trazadas alrededor de la parte externa de un cuadro de visualización. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los bordes horizontales y verticales.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**Sintaxis:** obj << Border Color( color );

color = obj << Get Border Color

**Descripción:** Color opcional para sustituir el color predeterminado de los bordes de los cuadros.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Sintaxis:** obj << Bring Window To Front

**Descripción:** Lleva la ventana al frente.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Sintaxis:** obj << Child

**Descripción:** Devuelve el hijo del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**Sintaxis:** obj << Class Name

**Descripción:** Devuelve el nombre de la clase de visualización del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Sintaxis:** obj << Clone Box

**Descripción:** Crea una nueva copia del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Sintaxis:** obj << Close Window( <"NoSave"> )

**Descripción:** Cierra la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Sintaxis:** obj << Copy Data

**Descripción:** Copia los datos delimitados por tabuladores desde una matriz o una tabla al portapapeles.

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Sintaxis:** obj << Copy Graph

**Descripción:** Copia al portapapeles una imagen del gráfico y los ejes.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Sintaxis:** obj << Copy Picture

**Descripción:** Copia al portapapeles una imagen del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Sintaxis:** obj << Delete Box

**Descripción:** Borra el cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**Sintaxis:** obj << Deselect

**Descripción:** Anula la selección de este objeto para su utilización por parte de los comandos del menú Editar.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**Sintaxis:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

**Descripción:** Envía command a una parte específica del árbol de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Sintaxis:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Find

**Sintaxis:** obj << Find

**Descripción:** Devuelve el cuadro de visualización con el argument indicado.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**Sintaxis:** obj << Get Annotation

**Descripción:** Devuelve la primera anotación anclada a este cuadro de visualización. Se puede acceder a otras anotaciones utilizando Sib() en el resultado.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Background Color

**Sintaxis:** obj << Background Color( color );

color = obj << Get Background Color

**Descripción:** Si hay un color de fondo definido, el cuadro se rellena con el color de fondo antes de dibujar su contenido. Si no hay un color de fondo definido, el fondo y el contenido de los cuadros contenedores es transparente.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Border

**Sintaxis:** obj << Border( sides );

sides = obj << Get Border

**Descripción:** Los bordes son líneas sólidas trazadas alrededor de la parte externa de un cuadro de visualización. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los bordes horizontales y verticales.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**Sintaxis:** obj << Border Color( color );

color = obj << Get Border Color

**Descripción:** Color opcional para sustituir el color predeterminado de los bordes de los cuadros.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**Sintaxis:** obj << Get Content Size

**Descripción:** Devuelve el tamaño del contenido de dentro de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Sintaxis:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

**Descripción:** Obtiene una expresión relativamente robusta para navegar entre parent box y obj. No está garantizado que esta ruta sea estable en todas las versiones de JMP. receiver expr se incorpora en la expresión de salida si se proporciona. De lo contrario, se utiliza la expresión proporcionada para parent box. Como se muestra en el ejemplo, este mensaje es especialmente útil para aumentar la robustez de una ruta que ya tenga disponible. El modo predeterminado es XPath.

**Básico**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] <<
Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

**Modo de subíndice**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] <<
Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Sintaxis:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get HTML

**Sintaxis:** obj << Get HTML( <format> )

**Descripción:** Devuelve una cadena con el código fuente HTML para el cuadro de visualización.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Sintaxis:** width = obj << Get Height

**Descripción:** Devuelve la altura del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Sintaxis:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Descripción:** La alineación horizontal controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Sintaxis:** obj << Get Journal

**Descripción:** Devuelve una cadena con el código fuente del diario para el cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Sintaxis:** obj << Margin( sides );

sides = obj << Get Margin

**Descripción:** El margen añade espacio entre el borde del cuadro y los cuadros adyacentes. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los márgenes horizontal y vertical.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Sintaxis:** width,height = obj << Get Max Size

**Descripción:** Devuelve el tamaño máximo de este cuadro de visualización para la autoexpansión.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Sintaxis:** width,height = obj << Get Min Size

**Descripción:** Devuelve el tamaño mínimo de este cuadro de visualización para la autoexpansión.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Sintaxis:** obj << Get Namespace

**Descripción:** Devuelve el espacio de nombres asociado a este objeto de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Sintaxis:** obj << Get On Close

**Descripción:** Devuelve el script o función que se ejecutará cuando se cierre la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**Sintaxis:** obj << Padding( sides );

sides = obj << Get Padding

**Descripción:** El espaciado interno añade espacio entre el contenido y el borde del cuadro. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán al espaciado interno horizontal y vertical.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Sintaxis:** obj << Get Page Setup

**Descripción:** Obtiene la información de configuración de página para PDF

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Sintaxis:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Descripción:** Captura db como un objeto de imagen. El argumento Scale opcional representará la imagen con una resolución a escala. El escalado requiere que el cuadro de visualización sea ajustable. El argumento Type determina si el resultado será una imagen vectorial escalable o un mapa de bits. De forma predeterminada, se devuelve una imagen escalable, adecuada para guardarla en formatos vectoriales como PDF. La opción View cambia el comportamiento de algunos cuadros. La opción predeterminada de "Picture" dibuja el informe como sería al exportarlo a un formato de imagen, mostrando completamente las áreas desplazadas. El modo de visualización de "Screen" dibuja el informe como se ve en pantalla, y "Print" dibuja el informe como se ve al imprimirse, sin ninguna de las funciones de configuración de páginas. La opción SubRect capturará una porción de la imagen resultante en lugar de una imagen completa. La opción Appearance puede cambiar de los colores de salida "Default" a los colores "Current" como se ven en pantalla. Las opciones View, SubRect y Appearance solo son compatibles para Type "Bitmap".

**Escala**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**Predeterminado**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**Vista y aspecto**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

### Get Project

**Sintaxis:** project = obj << Get Project()

**Descripción:** Devuelve el proyecto principal de la ventana, o Empty() si no está en un proyecto.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Sintaxis:** obj << Get Properties

**Descripción:** Devuelve un arreglo asociativo que contiene las propiedades del cuadro de visualización y sus valores.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Sintaxis:** obj << Get Property( "property" )

**Descripción:** Devuelve la configuración actual de la property con nombre.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Sintaxis:** obj << Get Property List

**Descripción:** Devuelve una lista de propiedades que tiene el cuadro de visualización.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Sintaxis:** obj << Get RTF( <format> )

**Descripción:** Devuelve una cadena con el código fuente RTF para el cuadro de visualización.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Sintaxis:** rs = obj << Get Row States( <dt> )

**Descripción:** Devuelve un vector que contiene el estado de fila de cada fila de la tabla de datos indicada o de la tabla de datos actual. Los estados de fila pueden proceder de la tabla o del contexto de filtro del cuadro.

**Single table**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter(
					columns( :height ),
					Where( :height >= 51 & :height <= 62 )
				),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter(
				columns( :height ),
				Where( :height >= 51 & :height <= 62 )
			),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**Sintaxis:** obj << Get Show Window

**Descripción:** Devuelve la visibilidad de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Sintaxis:** width,height = obj << Get Size

**Descripción:** Devuelve el tamaño del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Sintaxis:** x,y = obj << Get Stretch

**Descripción:** Devuelve las marcas de ajuste para este cuadro de visualización en las direcciones horizontales y verticales.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**Sintaxis:** obj << Get Text

**Descripción:** Devuelve una cadena con el texto del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Sintaxis:** obj << Text Color( color );

color = obj << Get Text Color

**Descripción:** El texto se dibujará con el color del texto si se ha establecido. Si no se ha establecido la propiedad, el cuadro heredará el color de texto del cuadro contenedor.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**Sintaxis:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get Vertical Alignment

**Sintaxis:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Descripción:** La alineación vertical controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Sintaxis:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Descripción:** La visibilidad determina si se muestra un cuadro y si ocupa espacio. El valor predeterminado de "Visible" significa que se mostrará el objeto.  Un cuadro "Hidden" no se muestra pero ocupa espacio, mientras que un cuadro "Collapsed" no ocupa espacio en la presentación.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Sintaxis:** width = obj << Get Width

**Descripción:** Devuelve el ancho del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Sintaxis:** obj << Get Window Icon

**Descripción:** Devuelve el icono de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Sintaxis:** obj << Get Window Position

**Descripción:** Devuelve la posición de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Sintaxis:** obj << Get Window Size

**Descripción:** Devuelve el tamaño de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Sintaxis:** obj << Get Window Title

**Descripción:** Devuelve el título de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Sintaxis:** obj << Get Window View

**Descripción:** Devuelve la vista de la ventana actual. La ventana puede ser "Visible", "Invisible" o "Privado".

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Sintaxis:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Descripción:** Recupera el árbol de visualización formateado como XML. De forma predeterminada, las cadenas de caracteres se devuelven en el idioma local, y el XML incluye valores de datos en algunas casillas. Utilice la opción English para devolver cadenas de caracteres en inglés cuando estén disponibles. Utilice la opción NoData para omitir los valores de los datos en los cuadros, que pueden ser muy grandes para algunos árboles de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Sintaxis:** x,y = obj << GetOffset

**Descripción:** Devuelve el desplazamiento de este cuadro de visualización en relación con el cuadro progenitor. Puede utilizar el mensaje <<progenitor en un bucle para acumular varios desplazamientos.

```jsl

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function(
				-3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )),
				x
			);
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2]
					 < offset[2] + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**Sintaxis:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Descripción:** La alineación horizontal controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Inval

**Sintaxis:** obj << Inval

**Descripción:** Invalida el cuadro de visualización. La ventana se actualizará cuando se envíe el mensaje <<Actualizar o llegue el momento de la actualización por parte del sistema operativo.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**Sintaxis:** obj << Is Dirty

**Descripción:** Obtiene el estado modificado del documento. 1 significa que se ha modificado el documento y preguntará si quiere guardar; 0 significa que no se ha modificado el documento.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Sintaxis:** obj << Is Modal Dialog

**Descripción:** Devuelve verdadero si la ventana es un cuadro de diálogo modal. Solo es útil cuando se llama desde una rellamada del controlador de ventanas.

```jsl

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Sintaxis:** obj << Journal

**Descripción:** Crea un diario desde el cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Sintaxis:** obj << Journal Window

**Descripción:** Abre una ventana diario de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Sintaxis:** obj << Launch

**Descripción:** Evalúa el argument indicado en el contexto del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Sintaxis:** rs = obj << Make RowState Handler( <dt>, function(a) )

**Descripción:** Crea un controlador de estado de fila para la tabla de datos indicada o la tabla de datos actual. Se llama a la función cuando cambian los estados de fila en el contexto de filtro del cuadro. El argumento de la función contiene los números de filas que han cambiado, o -1 si ha cambiado el filtro de estado de fila.

**Single table**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter(
					columns( :height ),
					Where( :height >= 51 & :height <= 62 )
				),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter(
				columns( :height ),
				Where( :height >= 51 & :height <= 62 )
			),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**Sintaxis:** obj << Margin( sides );

sides = obj << Get Margin

**Descripción:** El margen añade espacio entre el borde del cuadro y los cuadros adyacentes. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los márgenes horizontal y vertical.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Sintaxis:** obj << Maximize Window( <state=0|1> )

**Descripción:** Maximiza la ventana. El argumento predeterminado es 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Sintaxis:** obj << Minimize Window( <state=0|1> )

**Descripción:** Minimiza la ventana. El argumento predeterminado es 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Sintaxis:** obj << Move Window( x,y )

**Descripción:** Desplaza la ventana a la posición especificada.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Sintaxis:** obj << Next

**Descripción:** Devuelve el cuadro de visualización después de este cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Sintaxis:** obj << On Close( script )

**Descripción:** Establece un script o función para que se ejecuten al cerrar la ventana. Este script debe devolver 1 para permitir el cierre o 0 para evitar que la ventana se cierre.

**Cerrar función**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box(
					"Press OK to allow " || (this << Get Window Title) ||
					" to close"
				),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Cerrar script**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**Sintaxis:** obj << Optimize Display

**Descripción:** Establece la ventana y los anchos de columna de una tabla de datos en un tamaño óptimo.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Sintaxis:** obj << Pad Window( bool )

**Descripción:** Activa o desactiva los márgenes de ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Sintaxis:** obj << Padding( sides );

sides = obj << Get Padding

**Descripción:** El espaciado interno añade espacio entre el contenido y el borde del cuadro. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán al espaciado interno horizontal y vertical.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Sintaxis:** obj << Page Break

**Descripción:** Inserta un salto de página antes del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box(
					Text Edit Box( "Top Left" ),
					Text Edit Box( "Top Right" )
				)
			),
			ob3 = Outline Box( "Outline Box",
				H List Box(
					Text Edit Box( "Bottom Left" ),
					Text Edit Box( "Bottom Right" )
				)
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Sintaxis:** obj << Parent

**Descripción:** Devuelve el progenitor de este cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**Sintaxis:** obj << Prepend( db2 )

**Descripción:** Agrega db2 al árbol de visualización antes de db.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Sintaxis:** obj << Prev Sib

**Descripción:** Devuelve el hermano anterior del cuadro de visualización.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Sintaxis:** obj << Print Window

**Descripción:** Imprime la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**Sintaxis:** obj << Reshow

**Descripción:** Invalida el cuadro de visualización y actualiza la ventana con el contenido nuevo. Consulte los mensajes <<Inval y <<Actualizar ventana si desea más control sobre los tiempos de actualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Save Capture

**Sintaxis:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**Descripción:** Guarda una captura de pantalla del cuadro de visualización en la path especificada. Si no se indica path, se abrirá la ventana Guardar como.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Sintaxis:** obj << Save HTML( <pathname>, <format> )

**Descripción:** Guarda el código fuente HTML y las carpetas de los gráficos en el format especificado.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Sintaxis:** obj << Save Interactive HTML( <pathname>, <Boolean> )

**Descripción:** Guarda el HTML interactivo con datos en un archivo. El argumento Boolean representa el informe que es estático.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Sintaxis:** obj << Save Journal( <pathname> )

**Descripción:** Guarda el código fuente del diario para el cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Sintaxis:** obj << Save MSWord( <pathname>, <format> )

**Descripción:** Guarda el cuadro de visualización como documento de Microsoft Word. (Solo para Windows)

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Sintaxis:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

**Descripción:** Guarda un PDF del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Sintaxis:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Descripción:** Guarda una imagen del cuadro de visualización. Los formatos compatibles con EMF (Windows), PICT (Macintosh), JPEG o JPG, GIF o PNG. El argumento Scale opcional representará la imagen con una resolución a escala. El escalado requiere que el cuadro de visualización sea ajustable. El argumento Type determina si el resultado será una imagen vectorial escalable o un mapa de bits. De forma predeterminada, se devuelve una imagen escalable, adecuada para guardarla en formatos vectoriales como PDF. La opción View cambia el comportamiento de algunos cuadros. La opción predeterminada de "Picture" dibuja el informe como sería al exportarlo a un formato de imagen, mostrando completamente las áreas desplazadas. El modo de visualización de "Screen" dibuja el informe como se ve en pantalla, y "Print" dibuja el informe como se ve al imprimirse, sin ninguna de las funciones de configuración de páginas. La opción SubRect capturará una porción de la imagen resultante en lugar de una imagen completa. La opción Appearance puede cambiar de los colores de salida "Default" a los colores "Current" como se ven en pantalla. Las opciones View, SubRect y Appearance solo son compatibles con Type"Bitmap".

**Escala**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

**Predeterminado**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**Vista y aspecto**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

### Save Presentation

**Sintaxis:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

**Descripción:** Guarda las tablas del cuadro de visualización y las diapositivas de los gráficos en una presentación. La presentación puede abrirse con Microsoft PowerPoint u otro software de presentaciones.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Sintaxis:** obj << Save RTF( <pathname>, <format> )

**Descripción:** Guarda el código fuente RTF con los gráficos en el format especificado.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Sintaxis:** obj << Save Text( <pathname>, <format> )

**Descripción:** Guarda un archivo con el texto del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Sintaxis:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Descripción:** Guarda la ventana de informes actual en un archivo de informes JMP (.jrp).

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Sintaxis:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**Descripción:** Ajusta la barra de desplazamiento de la ventana para mostrar el DisplayBox indicado, o bien desplaza un número relativo de píxeles o desplaza hasta una ubicación de píxeles absoluta. En lugar de un número de píxeles, se pueden utilizar las palabras clave "Start" o "End".

**Absolute**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F,
		:BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

**Box**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F,
		:BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

**Relative**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F,
		:BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**Sintaxis:** obj << Select

**Descripción:** Selecciona este objeto para que lo utilicen los comandos del menú Editar.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Sintaxis:** obj << Set Content Size( x,y )

**Descripción:** Establece el tamaño del contenido de dentro de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Dirty

**Sintaxis:** obj << Set Dirty

**Descripción:** Establece el estado modificado del documento. 0 no preguntará si quiere guardar; 1 sí.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Sintaxis:** obj << Set Height( width )

**Descripción:** Establece la altura del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Sintaxis:** obj << Set Main Window

**Descripción:** Establece la ventana como la ventana principal de JMP y la ventana principal anterior como una ventana normal

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Sintaxis:** obj << Set Max Size( width,height )

**Descripción:** Establece el tamaño máximo de este cuadro de visualización para la autoexpansión.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Sintaxis:** obj << Set Min Size( width,height )

**Descripción:** Establece el tamaño mínimo de este cuadro de visualización para la autoexpansión.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Sintaxis:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**Descripción:** Establece la información de configuración de página que se utiliza durante la impresión o al guardar como PDF. Opcionalmente, se puede generar un índice a partir de los cuadros de esquema.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Sintaxis:** obj << Set Print Footers( left footer, center footer, right header )

**Descripción:** Establece los pies de página de la izquierda, el centro y la derecha para la salida impresa

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Sintaxis:** obj << Set Print Headers( left header, center header, right header )

**Descripción:** Establece los encabezados de página de la izquierda, el centro y la derecha para la salida impresa

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Sintaxis:** obj << Set Property( "property", value )

**Descripción:** Establece el valor de la property con nombre para el cuadro de visualización.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Sintaxis:** obj << Set Report Title( "string" )

**Descripción:** Cambia el título del informe.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Sintaxis:** obj << Set Stretch( x,y )

**Descripción:** Establece el comportamiento de ajuste horizontal y vertical del cuadro. Los cuadros que se ajustan con Window cambiarán de tamaño en función del tamaño de la ventana o el divisor. Los cuadros que se ajustan a Fill se ajustarán hasta llenar el espacio disponible en su contenedor. Los cuadros con el ajuste establecido en Off no se ajustarán por lo general. La mayoría de los cuadros tienen Neutral como valor predeterminado, lo que significa que se determinará su compartimiento en función de sus cuadros hijo.

**JMP Versión agregada:** 16

**Ajustar con ventana**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

**Ajustar hasta llenar**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);

```

### Set Summary Behavior

**Sintaxis:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Descripción:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Window Icon

**Sintaxis:** obj << Set Window Icon( icon name )

**Descripción:** Establece el icono de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Sintaxis:** obj << Set Window Size( x,y )

**Descripción:** Establece el tamaño de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Sintaxis:** obj << Set Window Title( "string" )

**Descripción:** Cambia el título de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Sintaxis:** obj << Show Properties

**Descripción:** Muestra un editor de propiedades para los cuadros de visualización

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Sintaxis:** obj << Show Tree Structure

**Descripción:** Muestra una estructura de árbol jerárquica del cuadro de visualización y sus nodos relacionados.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Sintaxis:** obj << Show Window( state=0|1 )

**Descripción:** Muestra u oculta la ventana. Esto es útil para ocultar temporalmente las ventanas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Sintaxis:** obj << Sib

**Descripción:** Devuelve el hermano del cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Sintaxis:** obj << Sib Append( Display box, Horizontal|Vertical )

**Descripción:** Agrega un cuadro de visualización justo después de este cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box( "============ after ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Sintaxis:** obj << Sib Prepend( Display box, Horizontal|Vertical )

**Descripción:** Agrega un cuadro de visualización justo antes de este cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box(
		"    ============ before ==============",
		Rotate Text( "Right" )
	),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Sintaxis:** obj << Size Window( x,y )

**Descripción:** Establece el tamaño de la ventana.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Sintaxis:** obj << Text Color( color );

color = obj << Get Text Color

**Descripción:** El texto se dibujará con el color del texto si se ha establecido. Si no se ha establecido la propiedad, el cuadro heredará el color de texto del cuadro contenedor.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**Sintaxis:** obj << Top Parent

**Descripción:** Devuelve el progenitor raíz de este cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Sintaxis:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**Sintaxis:** obj << Update Window

**Descripción:** Actualiza la ventana manteniendo el cuadro de visualización si hay regiones invalidadas. El mensaje <<Invalidar crea regiones invalidadas.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Vertical Alignment

**Sintaxis:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Descripción:** La alineación vertical controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Sintaxis:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Descripción:** La visibilidad determina si se muestra un cuadro y si ocupa espacio. El valor predeterminado de "Visible" significa que se mostrará el objeto.  Un cuadro "Hidden" no se muestra pero ocupa espacio, mientras que un cuadro "Collapsed" no ocupa espacio en la presentación.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Sintaxis:** obj << Window Class Name

**Descripción:** Devuelve el nombre de la clase de la ventana correspondiente al cuadro de visualización.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Sintaxis:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**Descripción:** Aplica una expresión XPath a la representación XML del árbol de visualización y devuelve los resultados. De forma predeterminada, las cadenas de caracteres se devuelven en el idioma local y el XML incluye valores de datos en algunas casillas. Utilice la opción English para devolver cadenas de caracteres en inglés cuando estén disponibles. Utilice la opción NoData para omitir los valores de datos en los cuadros, lo que resulta útil para el rendimiento cuando la consulta se basa únicamente en los atributos de los cuadros.

**Attributes**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" ))
 << Make Into Data Table;

```

**Data**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) <<
Close;

```

### Zoom Window

**Sintaxis:** obj << Zoom Window

**Descripción:** Aumenta el tamaño de la ventana hasta que pueda mostrar todo su contenido.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

