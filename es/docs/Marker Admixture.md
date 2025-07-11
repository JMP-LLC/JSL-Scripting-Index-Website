# Marker Admixture



## Marker Admixture Compare

### Hide All Models

**Sintaxis:** obj << Hide All Models

**Descripción:** Oculta todos los modelos.

**JMP Versión agregada:** 19

### Iterations

**Sintaxis:** obj << Iterations( state=0|1 )

**Descripción:** Muestra u oculta el número de iteraciones cuando se detuvo el algoritmo de factorización. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

### Log Likelihood

**Sintaxis:** obj << Log Likelihood( state=0|1 )

**Descripción:** Muestra u oculta el logaritmo negativo de la función basada en la verosimilitud. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

### Marker Admixture Compare

**Sintaxis:** Marker Admixture Compare

### Number of Ancestral Populations

**Sintaxis:** obj << Number of Ancestral Populations( state=0|1 )

**Descripción:** Muestra u oculta el número de poblaciones ancestrales. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

### Predictors

**Sintaxis:** obj << Predictors( state=0|1 )

**Descripción:** Muestra u oculta la columna Predictores. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

### Remove Hidden Models

**Sintaxis:** obj << Remove Hidden Models

**Descripción:** Quita todos los modelos cuya casilla Mostrar no esté seleccionada.

**JMP Versión agregada:** 19

### Remove Shown Models

**Sintaxis:** obj << Remove Shown Models

**Descripción:** Elimina todos los modelos para los que se ha seleccionado la casilla Mostrar y muestra los modelos restantes.

**JMP Versión agregada:** 19

### Show All Models

**Sintaxis:** obj << Show All Models

**Descripción:** Muestra todos los modelos.

**JMP Versión agregada:** 19

### Tolerance

**Sintaxis:** obj << Tolerance( state=0|1 )

**Descripción:** Muestra u oculta el valor de tolerancia (RMSE de la mezcla individual estimada) cuando se detuvo el algoritmo de factorización. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

## Marker Admixture Fit

### Cluster Individuals

**Sintaxis:** obj << Cluster Individuals( state=0|1 )

**Descripción:** Conglomera a los individuos en función de sus probabilidades estimadas de mezcla de la población ancestral.

**JMP Versión agregada:** 19

**Ejemplo 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Cluster Individuals( 1 ));

```

**Ejemplo 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit( Cluster Individuals( 1 ) )
);

```

### Cluster Markers

**Sintaxis:** obj << Cluster Markers( state=0|1 )

**Descripción:** Conglomera los marcadores en función de sus frecuencias de alelos de referencia estimadas en cada población ancestral.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Cluster Markers( 1 ));

```

### Copy Parameters to Launch

**Sintaxis:** obj << Copy Parameters to Launch

**Descripción:** Copia los parámetros de este modelo en la sección de inicio del modelo.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Copy Parameters to Launch());

```

### Estimation Method

**Sintaxis:** obj = Marker Admixture Fit(...Estimation Method( "Punto de estabilidad"|"Parámetro fijo"="Punto de estabilidad" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el método de estimación del número de poblaciones ancestrales. "Punto de estabilidad" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 1 )
	)
);

```

### Imputation Value

**Sintaxis:** obj = Marker Admixture Fit(...Imputation Value( number=0 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica un número entero a partir de cero a la ploidía para la sustitución de las puntuaciones de marcadores faltantes. "0" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);

```

### Marker Admixture Fit

**Sintaxis:** Marker Admixture Fit

### Missing Marker Imputation Method

**Sintaxis:** obj = Marker Admixture Fit(...Missing Marker Imputation Method( "HWE desactivado"|"HWE activado"|"Aleatorio"|"Especificado"="HWE desactivado" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica uno de los cuatro tipos de métodos de imputación de marcadores faltantes. "HWE desactivado" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);

```

### Number of Ancestral Populations

**Sintaxis:** obj = Marker Admixture Fit(...Number of Ancestral Populations( number=2 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el número de poblaciones ancestrales. "2" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 )
	)
);

```

### Order Populations Method

**Sintaxis:** obj = Marker Admixture Fit(...Order Populations Method( "Mezcla media"|"Varianza explicada"="Mezcla media" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el método para ordenar las columnas de la matriz P (m x d, donde m = número de marcadores genéticos y d es el número de poblaciones ancestrales) y las filas de la matriz Q (d x n, donde n = número de muestras). "Mezcla media" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Order Populations Method( "Variance Explained" ),
		Number of Ancestral Populations( 3 )
	),
	Set(
		Estimation Method( "Fixed Parameter" ),
		Order Populations Method( "Variance Explained" ),
		Number of Ancestral Populations( 3 )
	)
);

```

### Parallel Plot for Individuals

**Sintaxis:** obj << Parallel Plot for Individuals( state=0|1 )

**Descripción:** Crea un gráfico superpuesto de todos los individuos en función de sus probabilidades de mezcla con la población ancestral.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Parallel Plot for Individuals( 1 ));

```

### Parallel Plot for Markers

**Sintaxis:** obj << Parallel Plot for Markers( state=0|1 )

**Descripción:** Crea un gráfico superpuesto de todos los marcadores en función de las frecuencias de alelos de referencia estimadas en cada población ancestral.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Parallel Plot for Markers( 1 ));

```

### Remove All But This Fit

**Sintaxis:** obj << ( Fit[number] << Remove All But This Fit( state=0|1 ) )

**Descripción:** Elimina los informes y gráficos de todos los modelos, excepto este.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit,
	Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),
	Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) )
);
Wait( 2 );
obj << (Fit[2] << Remove All But This Fit( 1 ));

```

### Remove Fit

**Sintaxis:** obj << ( Fit[number] << Remove Fit( state=0|1 ) )

**Descripción:** Quita todo el informe relativo al modelo.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);
Wait( 2 );
obj << (Fit[1] << Remove Fit( 1 ));

```

### Save F Table

**Sintaxis:** obj << Save F Table

**Descripción:** Guarda en una tabla el producto de matrices P por Q.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Save F Table());

```

### Save P Table

**Sintaxis:** obj << Save P Table

**Descripción:** Guarda en una tabla la frecuencia estimada del alelo de referencia (P) para cada marcador genético.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Save P Table());

```

### Save Q Table

**Sintaxis:** obj << Save Q Table

**Descripción:** Guarda en una tabla las probabilidades de mezcla estimadas (Q) de las poblaciones ancestrales para cada muestra.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
Wait( 2 );
obj << (Fit[1] << Save Q Table());

```

### Set Random Seed

**Sintaxis:** obj = Marker Admixture Fit(...Set Random Seed( number=0 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece un valor específico para la semilla aleatoria, lo cual garantiza que todas las corridas subsiguientes que utilizan la misma semilla sean reproducibles. "0" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Set Random Seed( 12345 ),
		Missing Marker Imputation Method( "HWE On" ),
		Imputation Value( 1 )
	)
);

```

### Unthreaded

**Sintaxis:** obj = Marker Admixture Fit(...Unthreaded( state=0 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Utiliza únicamente el subproceso principal para los cálculos "0" de forma predeterminada.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 )
	)
);

```

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

**Descripción:** Para cada nivel de la columna especificada, analiza y presenta los resultados en tablas e informes independientes.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

	//Run platform
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), By( :Sex ), Fit );

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

### Compare

**Sintaxis:** obj << Compare

**Descripción:** Actualiza las métricas de comparación de la mezcla de marcadores.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit,
	Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),
	Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) )
);
obj << Compare( LogLikehood( 0 ) );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Data Table Window;

```

### Fit

**Sintaxis:** obj << Fit

**Descripción:** Ajusta un modelo de mezcla de marcadores. Es posible especificar parámetros y especificaciones de ajuste en este comando.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 1 )
	)
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
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

### Get Measures

**Sintaxis:** obj << Get Measures

**JMP Versión agregada:** 19

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

### Label

**Sintaxis:** obj << Label( column )

**Descripción:** Especifica una columna que contiene la etiqueta de cada muestra.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Label( :Sex ), Fit );

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

### Marker

**Sintaxis:** obj << Marker( column(s) )

**Descripción:** Especifica columnas que contienen marcadores genéticos.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Sample ID( :SampleID ),
	Label( :Sex ),
	Fit
);

```

### Marker Admixture

**Sintaxis:** Marker Admixture( Marker( columns ) )

**Descripción:** Estima la mezcla poblacional de los individuos a partir de los genotipos de los marcadores.

**JMP Versión agregada:** 19

**Ejemplo 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
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

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Report View( "Summary" );

```

### Sample ID

**Sintaxis:** obj << Sample ID( column )

**Descripción:** Especifica una columna que contiene un identificar único para cada muestra.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set up ID Column
dt << New Column( "SampleID",
	Character,
	"Nominal",
	Formula( Char( :Pedigree ) || Char( :Sample ) )
);

//Run platform
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Sample ID( :SampleID ),
	Label( :Sex ),
	Fit
);

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

### Set

**Sintaxis:** obj << Set

**Descripción:** Especifica los parámetros de un modelo de mezcla de marcadores.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Estimation Method( "Fixed Parameter" ),
		Number of Ancestral Populations( 3 ),
		Unthreaded( 1 ),
		Missing Marker Imputation Method( "Specified" ),
		Imputation Value( 1 )
	)
);

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

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );
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

**Sintaxis:** obj = Marker Admixture(...Window View( "Visible"|"Invisible"|"Private" )...)

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

