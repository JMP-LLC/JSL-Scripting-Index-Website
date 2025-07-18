# Life Distribution and Extensions



## Compare Groups

### Columnas

#### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

#### Grouping

**Sintaxis:** obj &lt;&lt; Grouping( column(s) )

#### Label

**Sintaxis:** obj &lt;&lt; Label( column )

#### Time to Event

**Sintaxis:** obj &lt;&lt; Time to Event( column(s) )

#### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

### Mensajes del elemento

#### Change Confidence Level

**Sintaxis:** obj &lt;&lt; Change Confidence Level( fraction )

**Descripción:** Especifica el nivel de confianza para toda la plataforma. Se actualizan todos los gráficos e informes en consecuencia.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Change Confidence Level( 0.99 );

```

#### Default Parametric Distribution

**Sintaxis:** obj &lt;&lt; Default Parametric Distribution( "Log-normal"|"Weibull"|"Log-logística"|"Fréchet"|"Normal"|"SEV"|"Logística"|"LEV"|"Exponencial"|"Log-gamma generalizada"|"Gamma generalizada"|"Weibull con umbral"|"log-normal con umbral"|"Fréchet con umbral"|"Log-logística con umbral"|"Weibull con inflación de ceros"|"Log-normal con inflación de ceros"|"Fréchet con inflación de ceros"|"Log-logística con inflación de ceros"|"Weibull para DS"|"Log-normal para DS"|"Fréchet para DS"|"Log-logística para DS" )

#### Estimate Probability

**Sintaxis:** obj &lt;&lt; Estimate Probability( state=&lt;0|1&gt; | &lt;Compute( array )&gt; )

**Descripción:** Muestra u oculta el informe Estimar probabilidad que corresponde a la distribución seleccionada más recientemente en el informe Comparar distribución. Utilice el argumento Calcular para especificar un arreglo de valores de tiempo para la estimación de la probabilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Estimate Probability( 1 );
obj << Estimate Probability( Compute( [1000] ) );

```

#### Estimate Quantile

**Sintaxis:** obj &lt;&lt; Estimate Quantile( state=&lt;0|1&gt; | &lt;Compute( array )&gt; )

**Descripción:** Muestra u oculta el informe Estimar Cuantil que corresponde a la distribución seleccionada más recientemente en el informe Comparar cuantil. Utilice el argumento Calcular para especificar un arreglo de valores de probabilidad para la estimación del cuantil.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Exponential );
obj << Estimate Quantile( 1 );
obj << Estimate Quantile( Compute( [.1] ) );

```

#### Fit Distribution

**Sintaxis:** obj &lt;&lt; Fit Distribution( distribution )

**Descripción:** Ajusta la distribución especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Fit Distribution( "Loglogistic" );

```

#### Interval Type

**Sintaxis:** obj &lt;&lt; Interval Type( "Simultáneo"|"Puntual" )

**Descripción:** Especifica el tipo de intervalo de confianza mostrado para el ajuste no paramétrico en el gráfico Comparar distribuciones. Las opciones disponibles son intervalos de confianza puntuales o simultáneos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
Wait( 1 );
obj << Interval Type( "Pointwise" );

```

#### Select Distribution

**Sintaxis:** obj &lt;&lt; Select Distribution( Distribution|Quantile|Hazard|Density, distribution )

**Descripción:** Especifica una distribución que se muestra para cada grupo en el gráfico especificado. Equivale a seleccionar una opción de distribución en los informes Comparar distribución, Comparar cuantil, Comparar riesgo o Comparar densidad.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Select Distribution( Distribution, Weibull );

```

#### Select Scale

**Sintaxis:** obj &lt;&lt; Select Scale( distribution )

**Descripción:** Especifica una escala para el eje de probabilidad en el gráfico Comparar distribución. Equivale a seleccionar una opción en Escala en el informe Comparar distribución.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Select Scale( Normal );

```

#### Show Confidence Area

**Sintaxis:** obj &lt;&lt; Show Confidence Area( state=0|1 )

**Descripción:** Muestra u oculta las regiones de confianza sombradas en los gráficos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
Wait( 1 );
obj << Show Confidence Area( 0 );

```

#### Show Density Functions

**Sintaxis:** obj &lt;&lt; Show Density Functions( state=0|1 )

**Descripción:** Muestra u oculta el informe Comparar densidad, que superpone gráficos de las funciones de densidad para cada grupo de la distribución seleccionada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Density Functions( 1 )
);
obj << Select Distribution( Density, Weibull );

```

#### Show Hazard Functions

**Sintaxis:** obj &lt;&lt; Show Hazard Functions( state=0|1 )

**Descripción:** Muestra u oculta el informe Comparar riesgo, que superpone gráficos de las funciones de riesgo para cada grupo de la distribución seleccionada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Hazard Functions( 1 )
);
obj << Select Distribution( Hazard, Weibull );

```

#### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos de datos en el gráfico de probabilidad. La plataforma Distribución de la supervivencia utiliza las estimaciones del punto medio de la función de paso para construir gráficos de probabilidad. Cuando deselecciona la opción Mostrar puntos, las estimaciones del punto medio se reemplazan por las estimaciones de Kaplan-Meier. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Quantile Functions

**Sintaxis:** obj &lt;&lt; Show Quantile Functions( state=0|1 )

**Descripción:** Muestra u oculta el informe Comparar cuantil, que superpone gráficos de las funciones de cuantil para cada grupo de la distribución seleccionada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Weibull );

```

#### Show Survival Curve

**Sintaxis:** obj &lt;&lt; Show Survival Curve( state=0|1 )

**Descripción:** Cambia entre la probabilidad de falla y la curva de supervivencia en el gráfico de probabilidad Comparar distribución.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Survival Curve( 1 )
);

```

#### Tabbed Report

**Sintaxis:** obj &lt;&lt; Tabbed Report( state=0|1 )

**Descripción:** Muestra gráficos y datos en fichas individuales en lugar de en el estilo de esquema predeterminado.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Tabbed Report( 1 )
);

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Competing Cause > Mean Remaining Life

### Mensajes del elemento

#### Compute

**Sintaxis:** obj &lt;&lt; Mean Remaining Life( Compute( array ) )

**Descripción:** Especifica un arreglo de valores de tiempo que se agregarán al Cálculo de la vida restante media.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Configuration

**Sintaxis:** obj &lt;&lt; Mean Remaining Life( Configuration( useBootstrap, BootstrapSize, SampleSize, RandomSeed ) )

**Descripción:** Especifica la configuración del Cálculo de la vida restante media, que realiza una estimación de la vida restante media de una unidad a un conjunto de tiempos de supervivencia dados. Los argumentos especifican si debe utilizarse un bootstrap, el número de distribuciones de bootstrap agregadas, el número de tiempos de falla simulados y una semilla aleatoria. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Get Results

**Sintaxis:** obj &lt;&lt; Mean Remaining Life( Get Results )

**Descripción:** Devuelve una matriz de la tabla en el Cálculo de la vida restante media.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );
obj << Mean Remaining Life( Get Results );

```

## Competing Cause

### Columnas

#### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

#### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

#### Failure Cause

**Sintaxis:** obj &lt;&lt; Failure Cause( column )

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

#### Label

**Sintaxis:** obj &lt;&lt; Label( column )

#### Time to Event

**Sintaxis:** obj &lt;&lt; Time to Event( column(s) )

#### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

### Mensajes del elemento

#### Bootstrap Sample Size

**Sintaxis:** obj &lt;&lt; Bootstrap Sample Size( n )

**Descripción:** Especifica el número de muestras que se utilizarán en el método bootstrap que se utiliza para obtener estimaciones bayesianas o resultados de Weibayes. En el caso de los métodos bayesiano y de Weibayes, se deben simular los límites de confianza para las funciones agregadas que aparecen el Perfilador de distribución empleando un bootstrap paramétrico.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull,
		0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
	)
);
obj << Bootstrap Sample Size( 1000 );

```

#### Compute Remaining Life Distribution

**Sintaxis:** obj &lt;&lt; Compute Remaining Life Distribution( time0, time1 )

**Descripción:** Devuelve una lista que contiene el valor de la distribución de vida restante en el momento time1, puesto que la unidad sobrevivió durante time0. La lista también contiene los límites superior e inferior para la estimación de vida restante.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );
p = obj << Compute Remaining Life Distribution( 2000, 4000 );

```

#### Density

**Sintaxis:** obj &lt;&lt; Density( t )

**Descripción:** Devuelve el valor de densidad en el momento especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
d = obj << Density( .5 );

```

#### Export Bootstrap Results

**Sintaxis:** obj &lt;&lt; Export Bootstrap Results( time )

**Descripción:** Guarda los resultados del bootstrap en una nueva tabla de datos. Se utiliza un método de bootstrap para obtener estimaciones bayesianas o resultados de Weibayes. En el caso de los métodos bayesiano y de Weibayes, se deben simular los límites de confianza para las funciones agregadas que aparecen el Perfilador de distribución empleando un bootstrap paramétrico.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull,
		0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
	)
);
obj << Export Bootstrap Results( 15000 );

```

#### Export Lifetime Data for Individual Causes

**Sintaxis:** obj &lt;&lt; Export Lifetime Data for Individual Causes

**Descripción:** Exporta un conjunto de datos apilados que consiste en datos de tiempo de vida para causas individuales. Un dato de tiempo de vida para una causa es una copia de los datos originales censurando correctamente todas las observaciones que no sean la causa.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 )
);
dt = obj << Export Lifetime Data for Individual Causes();

```

#### Fit Model

**Sintaxis:** obj &lt;&lt; Fit Model( specification )

**Descripción:** Ajusta un modelo de causa competitiva usando la especificación dada. El modelo se especifica mediante una lista de listas de tres elementos para cada causa. Cada sublista consta de un código de causa, una distribución y un indicador para omitir o no la causa.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Fit Model(
	{{"0", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull, 0}, {"2", Weibull, 0}, {"5",
	Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
);

```

#### Get Causes

**Sintaxis:** obj &lt;&lt; Get Causes

**Descripción:** Devuelve una lista de los códigos de causas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
lst = obj << Get Causes;

```

#### Get Estimates

**Sintaxis:** obj &lt;&lt; Get Estimates

**Descripción:** Devuelve una lista que contiene las causas, conteos, distribuciones y estimaciones de los parámetros para el modelo de causa competitiva.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
res = obj << Get Estimates;

```

#### Get Life Distribution

**Sintaxis:** obj &lt;&lt; Get Life Distribution( i )

**Descripción:** Devuelve una referencia al objeto del informe Distribución de la supervivencia especificado en la sección Causas individuales del informe Causa competitiva. Para el argumento de esta opción, los informes Distribución de la supervivencia están indexados de 0 a n-1, donde n es el número de causas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
ld = (obj << Get Life Distribution( 1 ));

```

#### Get Model Specification

**Sintaxis:** obj &lt;&lt; Get Model Specification

**Descripción:** Devuelve una lista que contiene las especificaciones para el modelo de causa competitiva. Esta lista puede utilizarse como argumento para el mensaje Ajuste del modelo de la plataforma Causa competitiva.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
spec = obj << Get Model Specification;

```

#### Hazard

**Sintaxis:** obj &lt;&lt; Hazard( t )

**Descripción:** Devuelve el valor de la función de riesgo en el momento especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
h = obj << Hazard( 2500 );

```

#### Mean Remaining Life

**Sintaxis:** obj &lt;&lt; Mean Remaining Life( state=0|1 )obj &lt;&lt; Mean Remaining Life( Configuration(), Compute(), Get Results )

**Descripción:** Muestra u oculta el Cálculo de la vida restante media, que le permite estimar la vida restante media de una unidad en un tiempo de supervivencia dado. También puede utilizar esta opción para enviar mensajes al objeto de cálculo Vida restante media.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Omit

**Sintaxis:** obj &lt;&lt; Omit( k, 0|1 )

**Descripción:** Muestra u oculta la causa especificada del gráfico Combinación de causas. El primer argumento especifica el número de la causa. Si el segundo argumento es 1, se quita la causa especificada; si el segundo argumento es 0, se incluye la causa especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Omit( 1, 1 );

```

#### Probability

**Sintaxis:** obj &lt;&lt; Probability( t )

**Descripción:** Devuelve la probabilidad de falla en el momento especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
p = obj << Probability( 2500 );

```

#### Quantile

**Sintaxis:** obj &lt;&lt; Quantile( p )

**Descripción:** Devuelve el valor del cuantil a la probabilidad especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
q = obj << Quantile( .5 );

```

#### Set Scale

**Sintaxis:** obj &lt;&lt; Set Scale( name )

**Descripción:** Especifica la escala de probabilidad del eje vertical del gráfico Combinación de causas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Set Scale( Weibull );

```

#### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( &lt;0|1&gt; )

**Descripción:** Muestra u oculta los puntos de datos en el gráfico Combinación de causas. La plataforma Distribución de la supervivencia utiliza las estimaciones del punto medio de la función de paso para construir gráficos de probabilidad. Cuando deselecciona la opción Mostrar puntos, las estimaciones del punto medio se reemplazan por las estimaciones de Kaplan-Meier. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Remaining Life Distribution

**Sintaxis:** obj &lt;&lt; Show Remaining Life Distribution( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de la distribución de vida restante, que está condicionado por la unidad que sobrevive durante un periodo de tiempo dado.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );

```

#### Show Subdistributions

**Sintaxis:** obj &lt;&lt; Show Subdistributions( state=0|1 )

**Descripción:** Muestra u oculta el perfilador para cada distribución secundaria de causas individuales. Cuando selecciona la opción Mostrar distribuciones secundarias, se actualiza el gráfico Combinación de causas para mostrar las funciones de distribución secundaria para todas las causas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );

```

#### Subdistribution

**Sintaxis:** obj &lt;&lt; Subdistribution( Cause(i), Compute(m) )

**Descripción:** Especifica los valores de tiempo y causa para los cálculos de distribución secundaria. El argumento Causa especifica el número de la causa. El argumento Calcular es un vector de columna con valores de tiempo. Debe seleccionarse la opción Mostrar distribuciones secundarias antes de usar este mensaje.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );
obj << Subdistribution( Cause( 2 ), Compute( [5000, 10000] ) );

```

#### Tabbed Report

**Sintaxis:** obj &lt;&lt; Tabbed Report( state=0|1 )

**Descripción:** Organiza las secciones del informe Causa competitiva en fichas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report( 1 )
);

```

#### Tabbed Report for Individual Causes

**Sintaxis:** obj &lt;&lt; Tabbed Report for Individual Causes( state=0|1 )

**Descripción:** Organiza los informes Distribución de la supervivencia en la sección Causas individuales del informe Causa competitiva en fichas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report for Individual Causes( 1 )
);

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Life Distribution

### Columnas

#### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );

```

#### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Failure Cause

**Sintaxis:** obj &lt;&lt; Failure Cause( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Freq( _freqcol ) );

```

#### Label

**Sintaxis:** obj &lt;&lt; Label( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Time to Event

**Sintaxis:** obj &lt;&lt; Time to Event( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Constructores asociados

#### Life Distribution

**Sintaxis:** Life Distribution( Y( column(s) ) )

**Descripción:** Analiza la distribución de los datos de tiempo hasta suceso. Se puede utilizar para modelar datos censurados, la duración del producto, la confiabilidad y las causas competitivas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Mensajes del elemento

#### Censor Code

**Sintaxis:** obj = Life Distribution(... Censor Code( value ) )

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha. "1" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" )
);
obj << Fit Lognormal;

```

#### Change Confidence Level

**Sintaxis:** obj &lt;&lt; Change Confidence Level( fraction )

**Descripción:** Especifica el nivel de confianza para toda la plataforma. Se actualizan todos los gráficos e informes en consecuencia.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Change Confidence Level( 0.99 );

```

#### Comparison Criterion

**Sintaxis:** obj &lt;&lt; Comparison Criterion( &lt;Negative Loglikelihood|AICc|BIC&gt; )

**Descripción:** Especifica el criterio utilizado para clasificar modelos en el informe Comparación de modelos. Para los tres criterios, los valores más pequeños indican un mejor ajuste.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;
obj << Comparison Criterion( BIC );

```

#### Confidence Interval Method

**Sintaxis:** obj = Life Distribution(... Confidence Interval Method( "Wald"|"Likelihood" ) )

**Descripción:** Especifica el método utilizado para calcular los intervalos de confianza de los parámetros. El predeterminado es Wald, pero puede seleccionar Verosimilitud si lo prefiere. Sin embargo, todos los intervalos de confianza proporcionados en los perfiladores están basados en el método Wald. "Wald" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" ),
	Confidence Interval Method( "Likelihood" )
);
obj << Fit Lognormal;

```

#### Do Same Analyses For All Groups

**Sintaxis:** obj &lt;&lt; Do Same Analyses For All Groups

**Descripción:** Aplica todas las opciones seleccionadas del grupo actual a todas las secciones Por-grupo de la salida.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	By( :Group ),
	Censor( :Censor ),
	Fit Exponential
);
obj[2] << Fit Weibull;
Wait( 1 );
obj[2] << Do Same Analyses For All Groups;

```

#### Fit All DS Distributions

**Sintaxis:** obj &lt;&lt; Fit All DS Distributions

**Descripción:** Ajusta todas las distribuciones para subpoblaciones con defectos (DS).

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All DS Distributions;

```

#### Fit All Distributions

**Sintaxis:** obj &lt;&lt; Fit All Distributions

**Descripción:** Ajusta todas las distribuciones excepto las distribuciones con umbral (TH).

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;

```

#### Fit All Nonnegative

**Sintaxis:** obj &lt;&lt; Fit All Nonnegative

**Descripción:** Ajusta todas las distribuciones que admitan observaciones no negativas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Nonnegative;

```

#### Fit Competing Risk Mixture

**Sintaxis:** obj &lt;&lt; Fit Competing Risk Mixture( Mix( distribution( n ), &lt;distribution( n ), ...&gt;, method, &lt;Show Profilers( 0|1 )&gt;

**Descripción:** Especifica las distribuciones y opciones para un modelo de mezcla de riesgos competitivos. El argumento method es necesario y debe ser uno de los siguientes métodos de valores de inicio: Conglomerado único, Conglomerados separables o Conglomerados solapados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Competing Risk Mixture(
	Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) )
);

```

#### Fit DS Frechet

**Sintaxis:** obj &lt;&lt; Fit DS Frechet

**Descripción:** Ajusta a los datos una distribución de Fréchet para subpoblaciones con defectos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Frechet;

```

#### Fit DS Loglogistic

**Sintaxis:** obj &lt;&lt; Fit DS Loglogistic

**Descripción:** Ajusta una distribución log-logística para subpoblaciones con defectos a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Loglogistic;

```

#### Fit DS Lognormal

**Sintaxis:** obj &lt;&lt; Fit DS Lognormal

**Descripción:** Ajusta una distribución log-normal para subpoblaciones con defectos a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Lognormal;

```

#### Fit DS Weibull

**Sintaxis:** obj &lt;&lt; Fit DS Weibull

**Descripción:** Ajusta a los datos una distribución de Weibull para subpoblaciones con defectos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Weibull;

```

#### Fit Exponential

**Sintaxis:** obj &lt;&lt; Fit Exponential

**Descripción:** Ajusta una distribución exponencial a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Exponential;

```

#### Fit Frechet

**Sintaxis:** obj &lt;&lt; Fit Frechet

**Descripción:** Ajusta una distribución de Fréchet a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Frechet;

```

#### Fit GenGamma

**Sintaxis:** obj &lt;&lt; Fit GenGamma

**Descripción:** Ajusta a los datos una distribución gamma generalizada a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit GenGamma;

```

#### Fit LEV

**Sintaxis:** obj &lt;&lt; Fit LEV

**Descripción:** Ajusta una distribución del valor extremo máximo (LEV) a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LEV;

```

#### Fit LogGenGamma

**Sintaxis:** obj &lt;&lt; Fit LogGenGamma

**Descripción:** Ajusta una distribución log-gamma generalizada a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LogGenGamma;

```

#### Fit Logistic

**Sintaxis:** obj &lt;&lt; Fit Logistic

**Descripción:** Ajusta una distribución logística a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Logistic;

```

#### Fit Loglogistic

**Sintaxis:** obj &lt;&lt; Fit Loglogistic

**Descripción:** Ajusta una distribución log-logística a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Loglogistic;

```

#### Fit Lognormal

**Sintaxis:** obj &lt;&lt; Fit Lognormal

**Descripción:** Ajusta una distribución log-normal a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Lognormal;

```

#### Fit Mixture

**Sintaxis:** obj &lt;&lt; Fit Mixture( Mix( distribution( n ), &lt;distribution( n ), ...&gt;, method, &lt;Show Profilers( 0|1 )&gt;

**Descripción:** Especifica las distribuciones y opciones para un modelo de mezcla. El argumento method es necesario y debe ser uno de los siguientes métodos de valores de inicio: Conglomerado único, Conglomerados separables o Conglomerados solapados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Mixture( Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) ) );

```

#### Fit Normal

**Sintaxis:** obj &lt;&lt; Fit Normal

**Descripción:** Ajusta una distribución normal a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Normal;

```

#### Fit SEV

**Sintaxis:** obj &lt;&lt; Fit SEV

**Descripción:** Ajusta una distribución del valor extremo mínimo (SEV) a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit SEV;

```

#### Fit TH Frechet

**Sintaxis:** obj &lt;&lt; Fit TH Frechet

**Descripción:** Ajusta a los datos una distribución de Fréchet con umbral. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Frechet;

```

#### Fit TH Loglogistic

**Sintaxis:** obj &lt;&lt; Fit TH Loglogistic

**Descripción:** Ajusta una distribución log-logística con umbral a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Loglogistic;

```

#### Fit TH Lognormal

**Sintaxis:** obj &lt;&lt; Fit TH Lognormal

**Descripción:** Ajusta una distribución log-normal con umbral a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Lognormal;

```

#### Fit TH Weibull

**Sintaxis:** obj &lt;&lt; Fit TH Weibull

**Descripción:** Ajusta a los datos una distribución de Weibull con umbral. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Weibull;

```

#### Fit Weibull

**Sintaxis:** obj &lt;&lt; Fit Weibull

**Descripción:** Ajusta una distribución de Weibull a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Weibull;

```

#### Fit ZI Frechet

**Sintaxis:** obj &lt;&lt; Fit ZI Frechet

**Descripción:** Ajusta a los datos una distribución de Fréchet con inflación de ceros. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Frechet;

```

#### Fit ZI Loglogistic

**Sintaxis:** obj &lt;&lt; Fit ZI Loglogistic

**Descripción:** Ajusta una distribución log-logística con inflación de ceros a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Loglogistic;

```

#### Fit ZI Lognormal

**Sintaxis:** obj &lt;&lt; Fit ZI Lognormal

**Descripción:** Ajusta una distribución log-normal con inflación de ceros a los datos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Lognormal;

```

#### Fit ZI Weibull

**Sintaxis:** obj &lt;&lt; Fit ZI Weibull

**Descripción:** Ajusta a los datos una distribución de Weibull con inflación de ceros. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Weibull;

```

#### Get Estimates

**Sintaxis:** obj &lt;&lt; Get Estimates

**Descripción:** Devuelve una lista que contiene las estimaciones de todas las distribuciones ajustadas. La lista también contiene los datos originales.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
estimate = obj << Get Estimates;
Show( estimate );

```

#### Get Formula

**Sintaxis:** obj &lt;&lt; Get Formula

**Descripción:** Devuelve una lista que contiene las fórmulas de todas las distribuciones ajustadas. La lista también contiene los datos originales.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
formula = obj << Get Formula;
Show( formula );

```

#### Get Results

**Sintaxis:** obj &lt;&lt; Get Results

**Descripción:** Devuelve una lista que contiene los resultados de todas las distribuciones ajustadas. La lista también contiene los datos originales.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
r = obj << Get Results;
Show( r );

```

#### Interval Type

**Sintaxis:** obj &lt;&lt; Interval Type( "Simultáneo"|"Puntual" )

**Descripción:** Especifica el tipo de intervalo de confianza mostrado para el ajuste no paramétrico en el gráfico Comparar distribuciones. Las opciones disponibles son intervalos de confianza puntuales o simultáneos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Interval Type( "Pointwise" );

```

#### Nonparametric Estimate Plot Options

**Sintaxis:** obj &lt;&lt; Nonparametric Estimate Plot Options( "Puntos"|"Función de paso"|"Ambos"|"Ninguna" )

**Descripción:** Especifica cómo se representan los puntos de datos en el gráfico de probabilidad. Puede escoger entre puntos, funciones de paso, tanto puntos como funciones de paso, o ninguna de las opciones.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Nonparametric Estimate Plot Options( "Step Function" );

```

#### Rejection Sampler Maximum Trials

**Sintaxis:** obj &lt;&lt; Rejection Sampler Maximum Trials( number=10000 )

**Descripción:** "10000" de forma predeterminada.

**JMP Versión agregada:** 14

#### Save By Group Results

**Sintaxis:** obj &lt;&lt; Save By Group Results

**Descripción:** Guarda las estimaciones resultantes para todos los grupos Por como una fila distinta en una nueva tabla.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	By( :Group ),
	Censor( :Censor ),
	Fit Exponential
);
obj[1] << Save By Group Results;

```

#### Set Scale

**Sintaxis:** obj &lt;&lt; Set Scale( Linear|Lognormal|Weibull|Loglogistic|Frechet|Normal|SEV|Logistic|LEV|Exponential )

**Descripción:** Especifica una escala para el eje de probabilidad en el gráfico Comparar distribuciones.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Set Scale( Exponential );

```

#### Show Confidence Area

**Sintaxis:** obj &lt;&lt; Show Confidence Area( state=0|1 )

**Descripción:** Muestra u oculta las regiones de confianza sombradas en los gráficos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Confidence Area( 0 );

```

#### Show Event Plot Frequency Label

**Sintaxis:** obj &lt;&lt; Show Event Plot Frequency Label( state=0|1 )

**Descripción:** Muestra u oculta las etiquetas de frecuencia en el gráfico de sucesos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Microprocessor Data.jmp" );
obj = dt << Life Distribution( Y( :start time, end time ), Freq( :count ) );
Report( obj )["Event Plot"] << Close( 0 );
Wait( 1 );
obj << Show Event Plot Frequency Label( 0 );

```

#### Show Hazard Functions

**Sintaxis:** obj &lt;&lt; Show Hazard Functions( state=0|1 )

**Descripción:** Muestra u oculta el informe Perfilador de riesgo, que superpone los gráficos de las funciones de riesgo para las distribuciones seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Hazard Functions( 1 );

```

#### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos de datos en el gráfico de probabilidad. La plataforma Distribución de la supervivencia utiliza las estimaciones del punto medio de la función de paso para construir gráficos de probabilidad. Cuando deselecciona la opción Mostrar puntos, las estimaciones del punto medio se reemplazan por las estimaciones de Kaplan-Meier. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Quantile Functions

**Sintaxis:** obj &lt;&lt; Show Quantile Functions( state=0|1 )

**Descripción:** Muestra u oculta el informe Perfilador de cuantil, que superpone los gráficos de las funciones de cuantil para las distribuciones seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Quantile Functions( 1 );

```

#### Show Statistics

**Sintaxis:** obj &lt;&lt; Show Statistics( state=0|1 )

**Descripción:** Muestra u oculta el informe Estadísticos, que contiene comparaciones del modelo, un resumen de los datos y estimaciones paramétricas y no paramétricas. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Statistics( 0 );

```

#### Show Survival Curve

**Sintaxis:** obj &lt;&lt; Show Survival Curve( state=0|1 )

**Descripción:** Cambia entre la probabilidad de falla y la curva de supervivencia en el gráfico de probabilidad Comparar distribución y los gráficos Perfilador de distribución.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Show Survival Curve( 1 ),
	Fit Exponential
);

```

#### Suppress Plot

**Sintaxis:** obj &lt;&lt; Suppress Plot( distribution name )

**Descripción:** Quita la distribución especificada de los gráficos en el informe. Esta opción equivale a desmarcar la casilla correspondiente de la distribución en los informes Comparar distribuciones, Perfilador de riesgo o Perfilador de cuantil.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Fit Weibull, Fit Lognormal, Set Scale( Weibull ) );
Wait( 2 );
obj << Suppress Plot( Lognormal );

```

#### Tabbed Report

**Sintaxis:** obj &lt;&lt; Tabbed Report( state=0|1 )

**Descripción:** Muestra gráficos y datos en fichas individuales en lugar de en el estilo de esquema predeterminado.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Tabbed Report( 1 );

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Life Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

