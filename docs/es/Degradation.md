# Degradation



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
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

### Censor

**Sintaxis:** obj << Censor( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation )
);

```

### Censor Code

**Sintaxis:** obj = Degradation(...Censor Code( value=1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha. "1" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Application( "Destructive Degradation" )
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

### Connect Data Markers

**Sintaxis:** obj << Connect Data Markers( state=0|1 )

**Descripción:** Muestra u oculta líneas que conectan los puntos en el gráfico superpuesto. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Connect Data Markers( 0 )
);
Wait( 1 );
obj << Connect Data Markers( 1 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Copy Script;

```

### Curve Interval Alpha

**Sintaxis:** obj << Curve Interval Alpha( fraction )

**Descripción:** Especifica el nivel de significación que se utiliza para las curvas de intervalos de confianza en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Curve Interval( "Prediction Interval" );
Wait( 1 );
obj << Curve Interval Alpha( .01 );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Data Table Window;

```

### Degradation

**Sintaxis:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), <X( column )>, <Label( column )>, <Freq( column )>, <Censor( column )>, <Censor Code( value )>, <Upper Spec Limit( value )>, <Lower Spec Limit( value )>, <Censoring Time( value )> )

**Descripción:** Modela la degradación con el tiempo usando curvas lineales y no lineales. Algunas de las opciones de análisis son el análisis de la estabilidad y la generación de datos de seudo falla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

### Freq

**Sintaxis:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	Freq( _freqcol )
);

```

### Generate Pseudo Failure Data

**Sintaxis:** Generate Pseudo Failure Data(interval_censor, <alpha>)

**Descripción:** Guarda el tiempo predicho en el que cada unidad cruzará el límite de especificación en una tabla de datos nueva. La tabla de datos nueva contiene un script de Distribución de la supervivencia o Ajustar vida por X que se puede utilizar para ajustar una distribución a los tiempos de seudo falla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Lower Spec Limit( 0 );
obj << Set Upper Spec Limit( 6 );
obj << Set Censoring Time( 6 );
dt1 = obj << Generate Pseudo Failure Data( 1, .05 );

```

### Generate Report for Current Model

**Sintaxis:** obj << Generate Report for Current Model

**Descripción:** Crea un informe para la configuración actual del modelo. Incluye un informe Resumen del modelo y un informe Estimaciones que contiene las estimaciones de los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Generate Report for Current Model;

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
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
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
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

### Get Inverse Prediction Results

**Sintaxis:** obj << Get Inverse Prediction Results

**Descripción:** Devuelve una lista con nombre que contiene los resultados del gráfico de predicción inversa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 10 );
obj << Get Inverse Prediction Results;

```

### Get Prediction Results

**Sintaxis:** obj << Get Prediction Results

**Descripción:** Devuelve una lista con nombre que contiene los resultados del gráfico de predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Longitudinal Prediction Time( 4500 );
obj << Get Prediction Results;

```

### Get Residuals

**Sintaxis:** obj << Get Residuals

**Descripción:** Devuelve una lista con nombre que contiene los resultados del gráfico de residuos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Get Residuals;

```

### Get Results

**Sintaxis:** obj << Get Results

**Descripción:** Devuelve una lista con nombre que contiene los resultados de todos los modelos ajustados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Generate Report for Current Model;
obj << Get Results;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

### Inverse Prediction Alpha

**Sintaxis:** obj << Inverse Prediction Alpha( fraction )

**Descripción:** Especifica el nivel de significación que se utiliza para los intervalos en el gráfico de predicción inversa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
obj << Inverse Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Inverse Prediction Alpha( .01 );

```

### Inverse Prediction Interval

**Sintaxis:** obj << Inverse Prediction Interval( "No hay ningún intervalo"|"Intervalo de confianza"|"Intervalo de predicción" )

**Descripción:** Muestra u oculta intervalos de confianza o predicción para los tiempos de seudo falla que se muestran en el gráfico de predicción inversa. Cuando los intervalos están habilitados, estos también se incluyen en la tabla de datos que se crea al utilizar la opción Guardar tiempo de cruzado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Inverse Prediction Interval( "Prediction Interval" );

```

### Inverse Prediction Side

**Sintaxis:** obj << Inverse Prediction Side( "Bilateral"|"Extremo inferior unilateral"|"Extremo superior unilateral" )

**Descripción:** Especifica si se muestran los intervalos unilaterales o bilaterales en el gráfico de predicción inversa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Inverse Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Inverse Prediction Side( "Lower One Sided" );

```

### Label

**Sintaxis:** obj << Label( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
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

### Longitudinal Prediction Alpha

**Sintaxis:** obj << Longitudinal Prediction Alpha( fraction )

**Descripción:** Especifica el nivel de significación que se utiliza para los intervalos en el gráfico de predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );
obj << Longitudinal Prediction Time( 4500 );
Wait( 1 );
obj << Longitudinal Prediction Alpha( .01 );

```

### Longitudinal Prediction Interval

**Sintaxis:** obj << Longitudinal Prediction Interval( "No hay ningún intervalo"|"Intervalo de confianza"|"Intervalo de predicción" )

**Descripción:** Muestra u oculta los intervalos de confianza o predicción para las respuestas estimadas que se muestran en el gráfico de predicción. Cuando los intervalos están habilitados, estos también se incluyen en la tabla de datos que se crea al utilizar la opción Guardar predicciones.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Time( 4500 );
Wait( 1 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );

```

### Longitudinal Prediction Time

**Sintaxis:** obj << Longitudinal Prediction Time( number )

**Descripción:** Especifica el valor de tiempo para el que quiere predecir la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Longitudinal Prediction Time( 3000 );

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

### No Tab List

**Sintaxis:** obj << No Tab List( state=0|1 )

**Descripción:** Organiza las pestañas Gráfico de residuos, Predicción inversa y Gráfico de predicción como informe apilado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << No Tab List( 1 );

```

### Nonlinear Path

**Sintaxis:** obj << Nonlinear Path

**Descripción:** Aplica el estilo de trayectoria no lineal a la trayectoria de degradación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Nonlinear Path;

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

### Prediction Settings

**Sintaxis:** obj << Prediction Settings

**Descripción:** Abre una ventana que contiene opciones para modificar la configuración que se utiliza en las predicciones del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 0 );
obj << Prediction Settings;

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
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
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Report View( "Summary" );

```

### Residual Plot

**Sintaxis:** obj << Residual Plot( <Jittering( state=0|1 )>, <Jittering Scale( number )>, <Separate Groups( state=0|1 )> )

**Descripción:** Le permite especificar opciones para el gráfico de residuos.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Residual Plot( Jittering( 1 ), Jittering Scale( 0.5 ) );
Wait( 1 );
obj << Residual Plot( Jittering Scale( 1.5 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Residual Plot( Jittering( 1 ), Separate Groups( 1 ) );

```

### Response

**Sintaxis:** obj << Response( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Crossing Time

**Sintaxis:** obj << Save Crossing Time

**Descripción:** Guarda los tiempos de seudo falla para el modelo actual en una tabla de datos nueva. La tabla de datos nueva contiene un script de Distribución de la supervivencia o Ajustar vida por X que se puede utilizar para ajustar una distribución a los tiempos de seudo falla. Cuando una de las opciones de Intervalo de predicción inversa está habilitada, la tabla también incluye los intervalos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Crossing Time;

```

### Save Predictions

**Sintaxis:** obj << Save Predictions

**Descripción:** Guarda los valores de respuesta predichos para el modelo actual en una tabla de datos nueva. La tabla también incluye columnas para los límites inferior y superior en función de la configuración de la opción Intervalo de predicción longitudinal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Longitudinal Prediction Time( 4500 );
obj << Save Predictions;

```

### Save Residuals

**Sintaxis:** obj << Save Residuals

**Descripción:** Guarda los residuos del modelo actual en una tabla de datos nueva.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Residuals;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

### Set Baseline

**Sintaxis:** obj << Set Baseline( number )

**Descripción:** Especifica las condiciones de uso normales para la variable explicativa en trayectorias de degradación no lineales. El valor de referencia aparece en el gráfico superpuesto como una línea negra.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" ),
	Show Fitted Lines( 1 ),
	Path Specifications(
		Nonlinear Path(
			Add Formula(
				Formula Name( "Reaction Rate 1" ),
				Formula(
					Parameter(
						{DInf = -1.4423, Ru = 0.000526206474198, Ea = 0.816981438481622},
						DInf * (1 - Exp(
							-Ru * Exp(
								Ea * (11604.5181215503 / (193.5 + 273.15) - 11604.5181215503
								 / (Degrees C + 273.15))
							) * Hours
						))
					)
				),
				Initial Values( [-1.4423, 0.000526206474198, 0.816981438481622] ),
				Lower( [-1.58653, 0.0004735858267782, 0.73528329463346] ),
				Upper( [-1.29807, 0.0005788271216178, 0.898679582329784] ),
				Fitting Method( Newton ),
				Fixed( [0, 0, 0] )
			),
			Select Formula( "Reaction Rate 1" )
		)
	),
	Nonlinear Path( 1 )
);
Wait( 1 );
obj << Set Baseline( 130 );

```

### Set Censoring Time

**Sintaxis:** obj << Set Censoring Time( number )

**Descripción:** Especifica el tiempo de censura, que aparece en los gráficos de superposición y de predicción inversa como una línea vertical de puntos. Cuando se selecciona No hay ningún intervalo para la opción Intervalo de predicción inversa, las observaciones que superan el Tiempo de censura se muestran en líneas horizontales comenzando en el Tiempo de censura. Si se selecciona Intervalo de confianza o Intervalo de predicción para la opción Intervalo de predicción inversa, las líneas horizontales se extienden de forma indefinida a la derecha de las observaciones cuyos límites superiores superen el Tiempo de censura. El Tiempo de censura se refleja en las tablas de datos que se crean mediante las opciones Guardar tiempo de cruzado y Generar datos de seudo fallas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Censoring Time( 3800 );

```

### Set Lower Spec Limit

**Sintaxis:** obj << Set Lower Spec Limit( number )

**Descripción:** Especifica el límite de especificación inferior. Los límites de especificación aparecen en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Lower Spec Limit( -1.5 );

```

### Set Upper Spec Limit

**Sintaxis:** obj << Set Upper Spec Limit( number )

**Descripción:** Especifica el límite de especificación superior. Los límites de especificación aparecen en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Upper Spec Limit( 6 );

```

### Show Curve Interval

**Sintaxis:** obj << Show Curve Interval( "No hay ningún intervalo"|"Intervalo de confianza"|"Intervalo de predicción" )

**Descripción:** Muestra u oculta los intervalos de confianza o predicción para las líneas ajustadas que se muestran en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Show Curve Interval( "Prediction Interval" );

```

### Show Fitted Lines

**Sintaxis:** obj << Show Fitted Lines( state=0|1 )

**Descripción:** Muestra u oculta las líneas ajustadas en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Fitted Lines( 0 )
);
Wait( 1 );
obj << Show Fitted Lines( 1 );

```

### Show Inverse Prediction Plot

**Sintaxis:** obj << Show Inverse Prediction Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de predicción inversa. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Residual Plot( 0 ),
	Show Inverse Prediction Plot( 0 )
);
obj << Set Upper Spec Limit( 6 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Show Inverse Prediction Plot( 1 );

```

### Show Legend

**Sintaxis:** obj << Show Legend( state=0|1 )

**Descripción:** Muestra u oculta una leyenda para los marcadores utilizados en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Legend( 1 );

```

### Show Residual Plot

**Sintaxis:** obj << Show Residual Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de residuos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Residual Plot( 0 )
);
Wait( 1 );
obj << Show Residual Plot( 1 );

```

### Show Spec Limits

**Sintaxis:** obj << Show Spec Limits( state=0|1 )

**Descripción:** Muestra u oculta los límites de especificación en el gráfico superpuesto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Set Upper Spec Limit( 7.5 ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Show Spec Limits( 0 );

```

### Simple Linear Path

**Sintaxis:** obj << Simple Linear Path

**Descripción:** Aplica el estilo de trayectoria lineal simple a la trayectoria de degradación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Nonlinear Path;
Wait( 1 );
obj << Simple Linear Path;

```

### Specify and Fit Path

**Sintaxis:** obj << Specify and Fit Path( Formula Name( string ), Formula( Model Type( string ), Parameter(...)|specification ), fitting command )

**Descripción:** Le permite especificar y ajustar un modelo de trayectoria directamente en un script. La plataforma Degradación identifica los valores iniciales y ajusta el modelo automáticamente sin más intervención por parte del usuario. Cada modelo se especifica con un nombre de modelo, una definición de modelo y un comando de ajuste. El tipo de modelo del argumento Fórmula debe ser uno de los siguientes: Lineal personalizado, Tasa de reacción, Tasa de reacción de tipo I o Tasa constante. Para un modelo lineal personalizado, utilice la función Parámetro() para definir la fórmula, de forma parecida a especificar modelos en la plataforma No lineal. Para otros tipos de modelos, la información de specification difiere según el tipo de modelo; consulte los ejemplos para obtener más detalles. El fitting command puede ser Fit Model o Fit by System ID.

**Ejemplo de ajuste del modelo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula(
		Model Type( "Custom Linear" ),
		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )
	),
	Fit Model() //Illustration of using Fit Model in script for custom linear models
);

```

**Ejemplo de ajuste por ID del sistema**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula(
		Model Type( "Custom Linear" ),
		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )
	),
	Fit by System ID() //Illustration of using Fit by System ID in script for custom linear models.
);

```

**Otros ejemplos**

```js

Names Default To Here( 1 );
dt = Open( "$sample_data/reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Nonlinear Path( 1 ),
	Mean Path( 1 ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate 1" ),
	Formula(
		Model Type( "Reaction Rate" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( . )
	), //Illustration of using builtin models in script without going through UI interaction to setup.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate 2" ),
	Formula(
		Model Type( "Reaction Rate" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( 100 )
	), //Illustration of using builtin models in script without going through UI interaction to setup.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate Type I 1" ),
	Formula(
		Model Type( "Reaction Rate Type I" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( . )
	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Constant Rate 1" ),
	Formula(
		Model Type( "Constant Rate" ),
		Path Transformation( "No Transformation" ),
		Rate Transformation( "Arrhenius Celsius" ),
		Time Transformation( Custom( "Function({x}, x^(1/3))" ) )
	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.
	Fit Model()
);
obj << Generate Report for Current Model();

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

### System ID

**Sintaxis:** obj << System ID( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Test Stability

**Sintaxis:** obj << Test Stability

**Descripción:** Ejecuta un análisis de estabilidad para determinar fechas de caducidad estimadas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Set Lower Spec Limit( 99 )
);
obj << Test Stability;

```

### Time

**Sintaxis:** obj << Time( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
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

### Use Interpolation through Data

**Sintaxis:** obj << Use Interpolation through Data( state=0|1 )

**Descripción:** Especifica el uso de la interpolación lineal entre puntos (en lugar del modelo ajustado) para predecir en qué momento una unidad cruza el límite de especificación. El comportamiento depende de si una unidad tiene observaciones que superen el límite de especificación. Si una unidad tiene observaciones que superan el límite de especificación, la predicción inversa es la interpolación lineal entre las observaciones que rodean el límite de especificación. Si una unidad no tiene observaciones que superen el límite de especificación, la predicción inversa se censura y tiene un valor equivalente al tiempo máximo observado para esa unidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Use Interpolation through Data( 1 );

```

### Use Pooled MSE for Nonpoolable Model

**Sintaxis:** obj = Degradation(...Use Pooled MSE for Nonpoolable Model( state=0 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que el primer modelo del análisis de estabilidad utiliza un modelo con un error cuadrático medio (MSE) combinado para calcular el primer tiempo de cruzado. "0" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Application( "Stability Test" ),
	Set Lower Spec Limit( 99 ),
	Use Pooled MSE for Nonpoolable Model( 1 )
);

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

**Sintaxis:** obj = Degradation(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintaxis:** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Y

**Sintaxis:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

