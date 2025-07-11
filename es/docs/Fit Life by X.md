# Fit Life by X



### Action

**Sintaxis:** obj << Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Density Curve to Scatterplot

**Sintaxis:** obj << Add Density Curve to Scatterplot( number )

**Descripción:** Agrega una curva de densidad al gráfico de dispersión en el valor especificado de la variable X. Se dibujan curvas de densidad para cada distribución seleccionada en la leyenda. La leyenda se encuentra a la derecha del gráfico de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Add Density Curve to Scatterplot( 50 );

```

### Add Quantile Line to Scatterplot

**Sintaxis:** obj << Add Quantile Line to Scatterplot( quantile )

**Descripción:** Agrega una línea al gráfico de dispersión en el cuantil especificado. Se traza una línea de cuantiles para cada distribución seleccionada en la leyenda. La leyenda se encuentra a la derecha del gráfico de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Add Quantile Line to Scatterplot( 0.1 );

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj << Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Sintaxis:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);

```

### Censor

**Sintaxis:** obj << Censor( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Censor Code

**Sintaxis:** obj = Fit Life by X(...Censor Code( value=1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha. "1" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" ),
	Relationship( Arrhenius Celsius )
);

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Confidence Interval Method

**Sintaxis:** obj = Fit Life by X(...Confidence Interval Method( method="Wald" )...)

**Descripción:** Especifica el método que se utiliza para calcular los intervalos de confianza de los parámetros. Elija entre los métodos de Wald y de verosimilitud. El método de Wald es una aproximación y se ejecuta más rápido. El método de verosimilitud proporciona parámetros más precisos pero tarda más en calcularse. "Wald" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	Confidence Interval Method( "Likelihood" )
);

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Data Table Window;

```

### Density

**Sintaxis:** obj << Density( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Descripción:** Devuelve la densidad de una distribución especificada con un valor de supervivencia t y un valor de covariable x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
d = obj << Density( Lognormal, 30000, 10 );
Show( d );

```

### Distribution

**Sintaxis:** obj = Fit Life by X(...Distribution( Weibull|Lognormal|Loglogistic|Frechet |SEV|Log|Normal|Logistic|LEV )...)

**Descripción:** Especifica la distribución que se utiliza para modelizar la relación entre las variables X e Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Frechet ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit All Distributions

**Sintaxis:** obj << Fit All Distributions

**Descripción:** Ajusta todas las distribuciones disponibles a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit All Distributions;

```

### Fit Exponential

**Sintaxis:** obj << Fit Exponential

**Descripción:** Ajusta una distribución exponencial a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Exponential;

```

### Fit Frechet

**Sintaxis:** obj << Fit Frechet

**Descripción:** Ajusta una distribución de Fréchet a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Frechet;

```

### Fit LEV

**Sintaxis:** obj << Fit LEV

**Descripción:** Ajusta una distribución del valor extremo máximo (LEV) a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit LEV;

```

### Fit Life by X

**Sintaxis:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), <Censor( column )> )

**Descripción:** Analiza la distribución de datos de tiempo hasta suceso parametrizados por un único factor de regresión. Algunas de las opciones de análisis son modelos de tiempos de falla acelerados, distribuciones de vida entre grupos y transformaciones de factores de regresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Logistic

**Sintaxis:** obj << Fit Logistic

**Descripción:** Ajusta una distribución logística a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Logistic;

```

### Fit Loglogistic

**Sintaxis:** obj << Fit Loglogistic

**Descripción:** Ajusta una distribución log-logística a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Loglogistic;

```

### Fit Lognormal

**Sintaxis:** obj << Fit Lognormal

**Descripción:** Ajusta una distribución log-normal a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Weibull ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Lognormal;

```

### Fit Normal

**Sintaxis:** obj << Fit Normal

**Descripción:** Ajusta una distribución normal a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Normal;

```

### Fit SEV

**Sintaxis:** obj << Fit SEV

**Descripción:** Ajusta una distribución del valor extremo mínimo (SEV) a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit SEV;

```

### Fit Weibull

**Sintaxis:** obj << Fit Weibull

**Descripción:** Ajusta una distribución de Weibull a los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Inverse Power ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Weibull;

```

### Freq

**Sintaxis:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	Freq( _freqcol )
);

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj << Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj << Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Results

**Sintaxis:** obj << Get Results

**Descripción:** Devuelve las estimaciones, los errores estándar, la matriz de covarianzas y los resultados de convergencia para cada ajuste de distribución.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
r = obj << Get Results;
Show( r );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj << Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Hazard

**Sintaxis:** obj << Hazard( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Descripción:** Devuelve el riesgo de una distribución especificada con un valor de supervivencia t y un valor de covariable x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
h = obj << Hazard( Lognormal, 30000, 10 );
Show( h );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Sintaxis:** obj << Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Maximum Iterations

**Sintaxis:** obj << Maximum Iterations( number )

**Descripción:** Especifica el número máximo de iteraciones que se utilizan para hallar la convergencia.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Frechet ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Maximum Iterations( 20 ),
	Nested Model Tests( Regression )
);

```

### Nested Model Tests

**Sintaxis:** obj << Nested Model Tests( Saturated Location|Location|Location and Scale|Saturated Location and Scale|Regression|No Effect )

**Descripción:** Añade al informe un gráfico superpuesto no paramétrico, pruebas de modelos anidados y un gráfico de probabilidad múltiple.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	Nested Model Tests( Regression )
);

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj << Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Probability

**Sintaxis:** obj << Probability( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Descripción:** Devuelve la probabilidad de una distribución especificada con un valor de supervivencia de t y un valor de covariable de x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
p = obj << Probability( Lognormal, 30000, 10 );
Show( p );

```

### Quantile

**Sintaxis:** obj << Quantile( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, p, x )

**Descripción:** Devuelve el cuantil de una distribución especificada con una probabilidad de p y un valor de covariable de x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
q = obj << Quantile( Lognormal, 0.005, 10 );
Show( q );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Rejection Sampler Maximum Trials

**Sintaxis:** obj << Rejection Sampler Maximum Trials( number=10000 )

**Descripción:** "10000" de forma predeterminada.

**JMP Versión agregada:** 14

### Relationship

**Sintaxis:** obj = Fit Life by X(...Relationship( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Inverse Power|Linear|Log|Logit|Reciprocal|Square Root|Box-Cox|Custom|No Effect|Location|Location and Scale )...)

**Descripción:** Identifica la relación de transformación entre el suceso y el factor.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Frechet ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Inverse Power )
);

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj << Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Level of Quantile Line CI Bands

**Sintaxis:** obj << Set Level of Quantile Line CI Bands( alpha=0.95 )

**Descripción:** Especifica el nivel de confianza de los intervalos de confianza alrededor de las líneas de cuantiles.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Add Quantile Line to Scatterplot( 0.1 );
obj << Show Quantile Line CI Bands( 1 );
Wait( 1 );
obj << Set Level of Quantile Line CI Bands( .90 );

```

### Set Scale

**Sintaxis:** obj << Set Scale( Weibull|Lognormal|Loglogistic|Frechet|SEV |Normal|Logistic|LEV|Linear )

**Descripción:** Especifica la escala que se utiliza para el gráfico de superposición no paramétrico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
Wait( 1 );
obj << Set Scale( Logistic );

```

### Set Scriptables

**Sintaxis:** obj << Set Scriptables( {<Distribution Comparisons( options )>, <Quantile Comparisons( options )>, <Hazard Comparisons( options )>, <Density Comparisons( options )>} )

**Descripción:** Establece opciones que admitan el uso de scripts dentro de los perfiladores en distintas secciones de la salida.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Set Scriptables(
	{Distribution Comparisons( Profiler( 1, Term Value( Temp( 50 ), Hours( 2600 ) ) ) )}
);

```

### Show Density Curves

**Sintaxis:** obj << Show Density Curves( state=0|1 )

**Descripción:** Muestra u oculta las curvas de densidad en el gráfico de dispersión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Show Density Curves( 1 );

```

### Show Overlay by Levels

**Sintaxis:** obj << Show Overlay by Levels( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Superposición por niveles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Location ),
	Freq( :Weight )
);
rpt = obj << report;
rpt["Scatterplot"] << Close( 1 );
rpt["Nonparametric Overlay"] << Close( 1 );
rpt["Comparisons"] << Close( 1 );
rpt[TabListBox( 2 )] << SetSelected( 2 );
rpt["Overlay by Levels"] << Close( 0 );
Wait( 1 );
obj << Show Overlay by Levels( 0 );
Wait( 1 );
obj << Show Overlay by Levels( 1 );

```

### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos de datos en el gráfico superpuesto no paramétrico y en los gráficos de probabilidad múltiple. Si los puntos están ocultos, en su lugar se muestran las funciones de paso. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
Wait( 1 );
obj << Show Points( 0 );
Wait( 1 );
obj << Show Points( 1 );

```

### Show Quantile Line CI Bands

**Sintaxis:** obj << Show Quantile Line CI Bands( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza alrededor de las líneas de cuantiles.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Add Quantile Line to Scatterplot( 0.1 );
Wait( 1 );
obj << Show Quantile Line CI Bands( 1 );

```

### Show Surface Plot

**Sintaxis:** obj << Show Surface Plot( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de superficie en la sección de resultados de distribuciones individuales del informe. Los gráficos de superficie aparecen en las secciones Distribución, Cuantil, Riesgo y Densidad para las distribuciones individuales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
rpt = obj << report;
rpt["Scatterplot"] << Close( 1 );
rpt["Comparisons"] << Close( 1 );
rpt[TabListBox( 2 )] << SetSelected( 2 );
rpt["Lognormal"] << Close( 0 );
Wait( 1 );
obj << Show Surface Plot( 0 );
Wait( 1 );
obj << Show Surface Plot( 1 );

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### TAF

**Sintaxis:** obj << TAF( Weibull|Lognormal|Loglogistic|Frechet, value, x )

**Descripción:** Devuelve el factor de aceleración de tiempo para una distribución, condición de aceleración x y valor de condición de referencia especificados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
af = obj << TAF( Lognormal, 10, 40 );
Show( af );

```

### Tabbed Individual Report

**Sintaxis:** obj << Tabbed Individual Report( state=0|1 )

**Descripción:** Organiza los informes individuales en paneles de pestañas. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
rpt = obj << report;
rpt["Scatterplot"] << Close( 1 );
rpt["Comparisons"] << Close( 1 );
Wait( 1 );
obj << Tabbed Individual Report( 0 );

```

### Tabbed Overall Report

**Sintaxis:** obj << Tabbed Overall Report( state=0|1 )

**Descripción:** Organiza el informe general en paneles de pestañas para las secciones de gráficos, comparaciones y resultados de dicho informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
Wait( 1 );
obj << Tabbed Overall Report( 1 );

```

### Time Acceleration Baseline

**Sintaxis:** obj << Time Acceleration Baseline( number )

**Descripción:** Especifica la condición de uso para el factor de aceleración.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Time Acceleration Baseline( 20 );

```

### Time to Event

**Sintaxis:** obj << Time to Event( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Transposed Axes

**Sintaxis:** obj << Transposed Axes( state=0|1 )

**Descripción:** Especifica que el factor de aceleración aparece en el eje vertical en lugar de en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Transposed Axes( 1 );

```

### Use Transformation Scale

**Sintaxis:** obj << Use Transformation Scale( state=0|1 )

**Descripción:** Especifica que la escala de transformación se utiliza para el eje del factor de aceleración en el gráfico de dispersión. Esta opción cambia entre las escalas lineal y no lineal para el eje del factor de aceleración. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Use Transformation Scale( 1 );

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Fit Life by X(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Sintaxis:** obj << X( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Y

**Sintaxis:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

