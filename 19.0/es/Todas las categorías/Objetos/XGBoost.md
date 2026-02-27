# XGBoost



## Columnas

### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**Sintaxis:** obj &lt;&lt; Factor( column(s) )

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**Sintaxis:** obj &lt;&lt; Response( column(s) )

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**Sintaxis:** obj &lt;&lt; Validation( column(s) )

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**Sintaxis:** obj &lt;&lt; X( column(s) )

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Constructores asociados

### XGBoost

**Sintaxis:** XGBoost(Y( columns ), X( columns ))

**Descripción:** Interfaz de modelización predictiva para árboles impulsados con gradiente eXtreme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Mensajes del elemento

### Change Variables

**Sintaxis:** obj &lt;&lt; Change Variables

**Descripción:** Cambia X,Y y otras variables para los modelos posteriores.

**JMP Versión agregada:** 16

### Compare

**Sintaxis:** obj &lt;&lt; Compare

**Descripción:** Actualiza las métricas de comparación de XGBoost.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );
obj << Compare( Correlation( 1 ) );

```

### Fit

**Sintaxis:** obj &lt;&lt; Fit

**Descripción:** Ajusta un modelo XGBoost. Puede especificar parámetros XGBoost y especificaciones de ajuste dentro de este.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**Sintaxis:** obj &lt;&lt; Get Measures

**JMP Versión agregada:** 16

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Relaunch Analysis;

```

### Show Details

**Sintaxis:** obj &lt;&lt; Show Details( state=0|1 )

**Descripción:** Muestra más detalles.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

```

## Mensajes del elemento compartidos

### Action

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

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Copy Script;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

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

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

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

### New JSL Preset

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

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Script Window;

```

### SendToByGroup

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

### SendToEmbeddedScriptable

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

### SendToReport

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

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## XGBoost Compare

### Constructores asociados

#### XGBoost Compare

**Sintaxis:** XGBoost Compare

### Mensajes del elemento

#### AUC

**Sintaxis:** obj &lt;&lt; AUC( state=0|1 )

**Descripción:** Muestra la AUROC, que es el área situada bajo la curva ROC. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### AUPRC

**Sintaxis:** obj &lt;&lt; AUPRC( state=0|1 )

**Descripción:** Área bajo la curva de precisión y recuperación Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

#### Accuracy

**Sintaxis:** obj &lt;&lt; Accuracy( state=0|1 )

**Descripción:** Muestra u oculta la exactitud, que es la proporción de clasificaciones correctas. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Censor

**Sintaxis:** obj &lt;&lt; Censor( state=0|1 )

**Descripción:** Muestra u oculta el comando Censura. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

#### Concordance

**Sintaxis:** obj &lt;&lt; Concordance( state=0|1 )

**Descripción:** Muestra u oculta la concordancia, que es el índice C de Harrell y mide la fuerza de la eficiencia de clasificación. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

#### Correlation

**Sintaxis:** obj &lt;&lt; Correlation( state=0|1 )

**Descripción:** Muestra u oculta la correlación Pearson, que es una medida de la fuerza de la relación lineal. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### F1

**Sintaxis:** obj &lt;&lt; F1( state=0|1 )

**Descripción:** Muestra u oculta la puntuación F1, que es la media harmónica de la precisión y la recuperación. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Features

**Sintaxis:** obj &lt;&lt; Features( state=0|1 )

**Descripción:** Muestra u oculta la columna Características. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( state=0|1 )

**Descripción:** Muestra u oculta la columna Frecuencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### H Measure

**Sintaxis:** obj &lt;&lt; H Measure( state=0|1 )

**Descripción:** Muestra u oculta la medida H, que mide la mejora de la proporción con respecto a la referencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

#### Hide All Models

**Sintaxis:** obj &lt;&lt; Hide All Models

**Descripción:** Oculta todos los modelos.

**JMP Versión agregada:** 16

#### LogLoss

**Sintaxis:** obj &lt;&lt; LogLoss( state=0|1 )

**Descripción:** Muestra u oculta el logaritmo de la función de pérdida basada en la verosimilitud. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### MAE

**Sintaxis:** obj &lt;&lt; MAE( state=0|1 )

**Descripción:** Muestra u oculta el MAE, que es el error medio absoluto. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### MCC

**Sintaxis:** obj &lt;&lt; MCC( state=0|1 )

**Descripción:** Muestra u oculta el coeficiente de correlación de Matthews, que es la correlación Pearson para las variables binarias. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Misclass

**Sintaxis:** obj &lt;&lt; Misclass( state=0|1 )

**Descripción:** Muestra u oculta la tasa de clasificación errónea, que es la proporción de clasificaciones incorrectas. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Predictors

**Sintaxis:** obj &lt;&lt; Predictors( state=0|1 )

**Descripción:** Muestra u oculta la columna Predictores. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Profit

**Sintaxis:** obj &lt;&lt; Profit( state=0|1 )

**Descripción:** Muestra u oculta el beneficio esperado. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### RMSE

**Sintaxis:** obj &lt;&lt; RMSE( state=0|1 )

**Descripción:** Muestra u oculta el RMSE, que es la raíz del error cuadrático medio. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### RSquare

**Sintaxis:** obj &lt;&lt; RSquare( state=0|1 )

**Descripción:** Muestra u oculta el valor R cuadrado, que es la proporción de variabilidad explicada. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Remove Hidden Models

**Sintaxis:** obj &lt;&lt; Remove Hidden Models

**Descripción:** Quita todos los modelos cuya casilla Mostrar no esté seleccionada.

**JMP Versión agregada:** 16

#### Remove Shown Models

**Sintaxis:** obj &lt;&lt; Remove Shown Models

**Descripción:** Elimina todos los modelos para los que se ha seleccionado la casilla Mostrar y muestra los modelos restantes.

**JMP Versión agregada:** 15

#### Response

**Sintaxis:** obj &lt;&lt; Response( state=0|1 )

**Descripción:** Muestra u oculta la columna Respuesta. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Show All Models

**Sintaxis:** obj &lt;&lt; Show All Models

**Descripción:** Muestra todos los modelos.

**JMP Versión agregada:** 16

#### Training Metrics

**Sintaxis:** obj &lt;&lt; Training Metrics( state=0|1 )

**Descripción:** Muestra u oculta todas las métricas de entrenamiento. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Validation

**Sintaxis:** obj &lt;&lt; Validation( state=0|1 )

**Descripción:** Muestra u oculta la columna Validación. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Validation Metrics

**Sintaxis:** obj &lt;&lt; Validation Metrics( state=0|1 )

**Descripción:** Muestra u oculta todas las métricas de validación. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Weight

**Sintaxis:** obj &lt;&lt; Weight( state=0|1 )

**Descripción:** Muestra u oculta la columna Peso. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

## XGBoost Fit

### Constructores asociados

#### XGBoost Fit

**Sintaxis:** XGBoost Fit

### Mensajes del elemento

#### Actual by Predicted Plots

**Sintaxis:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Descripción:** Muestra u oculta un gráfico utilizando los datos de entrenamiento con los valores predichos en el eje X y los valores observados en el eje Y. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Autotune

**Sintaxis:** obj &lt;&lt; Autotune

**Descripción:** Crea un diseño de llenado rápido y flexible dentro de la configuración mínima y máxima de parámetros para ajustar n modelos, donde n es el número de corridas.

**JMP Versión agregada:** 17

#### Confusion Matrices

**Sintaxis:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Descripción:** Muestra u oculta una matriz de tabulación cruzada de los niveles observados y predichos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**Sintaxis:** obj &lt;&lt; Contour Profiler

**Descripción:** Muestra u oculta los gráficos interactivos de las secciones transversales de la función de predicción.

**JMP Versión agregada:** 15

#### Copy Parameters to Launch

**Sintaxis:** obj &lt;&lt; Copy Parameters to Launch

**Descripción:** Copia los parámetros de este modelo en la sección de inicio del modelo.

**JMP Versión agregada:** 16

#### Decision Thresholds

**Sintaxis:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Descripción:** Muestra u oculta los gráficos y tablas del umbral de decisión. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Fit Details

**Sintaxis:** obj &lt;&lt; Fit Details( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos para el modelo ajustado. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Generate Python Code

**Sintaxis:** obj &lt;&lt; Generate Python Code

**Descripción:** Crea código Python para el entrenamiento y la puntuación.

**JMP Versión agregada:** 16

#### Importances

**Sintaxis:** obj &lt;&lt; Importances( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de importancia para cada predictor. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

#### Lift Curves

**Sintaxis:** obj &lt;&lt; Lift Curves( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo.

**JMP Versión agregada:** 15

#### Number of Design Points

**Sintaxis:** obj &lt;&lt; Number of Design Points( number=10 )

**Descripción:** Especifica el número de corridas de diseño de ajuste que se van a realizar. Si tiene un problema grande, opte por un valor relativamente bajo. "10" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**Sintaxis:** obj &lt;&lt; Number of Inner Folds( number=2 )

**Descripción:** Especifica el número de plegamientos interiores anidados que se utilizan durante el proceso de ajuste automático. "2" de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Objective

**Sintaxis:** obj &lt;&lt; Objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**Descripción:** Especifica la función que se optimizará para el ajuste del modelo. La función debe ser coherente con el tipo de modelización de la respuesta. "reg:squarederror" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### Precision Recall Curves

**Sintaxis:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Descripción:** Representa el equilibrio entre precisión y recuperación para distintos umbrales de clasificación. Se recomienda en situaciones en las que existan desequilibrios entre las clases.

**JMP Versión agregada:** 15

#### Profiler

**Sintaxis:** obj &lt;&lt; Profiler

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

**JMP Versión agregada:** 15

#### Publish Prediction Formula

**Sintaxis:** obj &lt;&lt; Publish Prediction Formula

**Descripción:** Crea fórmulas de predicción y las guarda como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

**JMP Versión agregada:** 15

#### ROC Curves

**Sintaxis:** obj &lt;&lt; ROC Curves( state=0|1 )

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad).

**JMP Versión agregada:** 15

#### Remove All But This Fit

**Sintaxis:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Descripción:** Elimina los informes y gráficos de todos los modelos, excepto este.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Descripción:** Quita todo el informe relativo al modelo.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**Sintaxis:** obj &lt;&lt; Save Predicteds

**Descripción:** Guarda los valores predichos en una nueva columna de la tabla de datos.

**JMP Versión agregada:** 15

#### Save Prediction Formula

**Sintaxis:** obj &lt;&lt; Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Los cálculos pueden ser lentos si los modelos son grandes.

**JMP Versión agregada:** 15

#### Save SHAPs

**Sintaxis:** obj &lt;&lt; Save SHAPs

**Descripción:** Guarda los valores de Shapley en la tabla de datos. Estos valores desglosan las predicciones en componentes para cada predictor.

**JMP Versión agregada:** 17

#### Surface Profiler

**Sintaxis:** obj &lt;&lt; Surface Profiler

**Descripción:** Muestra u oculta los gráficos interactivos de las secciones transversales de la función de predicción.

**JMP Versión agregada:** 15

#### Tree Details

**Sintaxis:** obj &lt;&lt; Tree Details( state=0|1 )

**Descripción:** Muestra u oculta el desglose de cada división del árbol.

**JMP Versión agregada:** 15

#### Tuning Design Table

**Sintaxis:** Tuning Design Table( "table name" )

**Descripción:** Especifica el nombre de una tabla de datos JMP abierta de configuración de parámetros utilizada para ajustar una serie de modelos. Las columnas de esta tabla deben coincidir exactamente con los nombres de los parámetros, y cada fila debe contener valores de estos parámetros para utilizarlos en ese ajuste del modelo. Los parámetros que no se especifiquen se ajustan a sus valores desde este diálogo.

**JMP Versión agregada:** 15

#### alpha

**Sintaxis:** obj &lt;&lt; alpha( number=0.0 )

**Descripción:** Especifica el término de regularización L1 en los pesos. Al aumentar este valor, el modelo se vuelve más conservador. Este valor debe ser no negativo. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**Sintaxis:** obj &lt;&lt; alpha_max( number=0.5 )

**Descripción:** Especifica el término de regularización L1 máximo en los pesos. Al aumentar este valor, el modelo se vuelve más conservador. Este valor debe ser no negativo. "0.5" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**Sintaxis:** obj &lt;&lt; alpha_min( number=0.0 )

**Descripción:** Especifica el término de regularización L1 mínimo en los pesos. Al aumentar este valor, el modelo se vuelve más conservador. Este valor debe ser no negativo. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### base_score

**Sintaxis:** obj &lt;&lt; base_score( number=0.5 )

**Descripción:** Especifica la puntuación de predicción inicial de todas las instancias, que es el sesgo global. La media de y es, por lo general, una buena elección. "0.5" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### booster

**Sintaxis:** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**Descripción:** Especifica qué impulsor utilizar. "gbtree" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### colsample_bylevel

**Sintaxis:** obj &lt;&lt; colsample_bylevel( number=1.0 )

**Descripción:** Especifique la proporción de columnas que muestrear para cada nivel. El muestreo se produce una vez para cada nuevo nivel de profundidad alcanzado en un árbol. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**Sintaxis:** obj &lt;&lt; colsample_bynode( number=1.0 )

**Descripción:** Especifica la proporción de columnas que muestrear para cada nodo (división). El muestreo se produce una vez cada vez que se evalúa una nueva división. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**Sintaxis:** obj &lt;&lt; colsample_bytree( number=1.0 )

**Descripción:** Especifica la proporción de columnas que muestrear al construir cada árbol. El muestreo se produce una vez para cada árbol. Este valor debe estar entre 0 y 1. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**Sintaxis:** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**Descripción:** Especifica la proporción máxima de columnas que muestrear al construir cada árbol. El muestreo se produce una vez para cada árbol. Este valor debe estar entre 0 y 1. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**Sintaxis:** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**Descripción:** Especifica la proporción mínima de columnas que muestrear al construir cada árbol. El muestreo se produce una vez para cada árbol. Este valor debe estar entre 0 y 1. "0.5" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### eval_metric

**Sintaxis:** obj &lt;&lt; eval_metric( text )

**Descripción:** Especifica la métrica mostrada en el gráfico del historial de iteraciones pero no afecta al ajuste del modelo real. Deje este valor en blanco para que se aplique la métrica predeterminada correspondiente a la función objetivo o especifique uno de los siguientes: rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### feature_selector

**Sintaxis:** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**Descripción:** Especifica la selección de características y el método de ordenación para el impulsor lineal. "cyclic" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Booster( "gblinear" ),
	Fit( feature_selector( "cyclic" ) )
);

```

#### gamma

**Sintaxis:** obj &lt;&lt; gamma( number=0.0 )

**Descripción:** Especifica la reducción de pérdida mínima necesaria para realizar una mayor partición en un nodo de hoja del árbol. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### grow_policy

**Sintaxis:** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**Descripción:** Especifica el método utilizado para agregar nuevos nodos a los árboles. Actualmente, esta opción solo se aplica cuando tree_method=hist. "depthwise" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### interaction_constraints

**Sintaxis:** obj &lt;&lt; interaction_constraints( text )

**Descripción:** Especifica restricciones de interacción para las características como una lista anidada de índices de características mediante corchetes. Las características que estén agrupadas juntas solo pueden interactuar entre ellas.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( interaction_constraints( "[[0,1]]" ) ) );

```

#### iterations

**Sintaxis:** obj &lt;&lt; iterations( number=30 )

**Descripción:** Especifica el número de iteraciones de impulso. "30" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**Sintaxis:** obj &lt;&lt; iterations_max( number=100 )

**Descripción:** Especifica el número máximo de iteraciones de impulso. "100" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**Sintaxis:** obj &lt;&lt; iterations_min( number=20 )

**Descripción:** Especifica el número mínimo de iteraciones de impulso. "20" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**Sintaxis:** obj &lt;&lt; lambda( number=1.0 )

**Descripción:** Especifica el término de regularización L2 en los pesos. Al aumentar este valor, el modelo se vuelve más conservador. Este valor debe ser no negativo. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_max

**Sintaxis:** obj &lt;&lt; lambda_max( number=2.0 )

**Descripción:** Especifica el término de regularización L2 máximo en los pesos. Al aumentar este valor, el modelo se vuelve más conservador. Este valor debe ser no negativo. "2.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**Sintaxis:** obj &lt;&lt; lambda_min( number=0.0 )

**Descripción:** Especifica el término de regularización L2 mínimo en los pesos. Al aumentar este valor, el modelo se vuelve más conservador. Este valor debe ser no negativo. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### learning_rate

**Sintaxis:** obj &lt;&lt; learning_rate( number=0.3 )

**Descripción:** Especifica la tasa de aprendizaje. Las tasas de aprendizaje más pequeñas suelen ajustarse mejor pero requieren más iteraciones para convergir, mientras que las tasas de aprendizaje mayores se ajustan más rápido. "0.3" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**Sintaxis:** obj &lt;&lt; learning_rate_max( number=0.4 )

**Descripción:** Especifica la tasa de aprendizaje máxima. Las tasas de aprendizaje más pequeñas suelen ajustarse mejor pero requieren más iteraciones para convergir, mientras que las tasas de aprendizaje mayores se ajustan más rápido. "0.4" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**Sintaxis:** obj &lt;&lt; learning_rate_min( number=0.05 )

**Descripción:** Especifica la tasa de aprendizaje mínima. Las tasas de aprendizaje más pequeñas suelen ajustarse mejor pero requieren más iteraciones para convergir, mientras que las tasas de aprendizaje mayores se ajustan más rápido. "0.05" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### max_bin

**Sintaxis:** obj &lt;&lt; max_bin( number=256 )

**Descripción:** Especifica el número máximo de clases discretas en las que incluir características continuas. Esta opción solo se aplica para tree_method=hist. "256" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_delta_step

**Sintaxis:** obj &lt;&lt; max_delta_step( number=0.0 )

**Descripción:** Especifica el paso delta máximo que cada salida de hoja puede dar. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**Sintaxis:** obj &lt;&lt; max_depth( number=6 )

**Descripción:** Especifica la profundidad máxima del árbol. Este valor debe ser un entero. La complejidad aumenta a medida que aumenta la profundidad. Los modelos con max_depth más altas más corren un mayor riesgo de sufrir un sobreajuste. "6" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**Sintaxis:** obj &lt;&lt; max_depth_max( number=8 )

**Descripción:** Especifica la profundidad máxima del máximo de árboles. Este valor debe ser un entero. La complejidad aumenta a medida que aumenta la profundidad. Los modelos con profundidades de 2^depth y más corren un mayor riesgo de sufrir un sobreajuste. "8" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**Sintaxis:** obj &lt;&lt; max_depth_min( number=1 )

**Descripción:** Especifica la profundidad máxima del mínimo de árboles. Este valor debe ser un entero. La complejidad aumenta a medida que aumenta la profundidad. Los modelos con profundidades de 2^depth y más corren un mayor riesgo de sufrir un sobreajuste. "1" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_leaves

**Sintaxis:** obj &lt;&lt; max_leaves( number=0 )

**Descripción:** Especifica el número máximo de nodos que se añadirán. Esta opción solo se aplica para grow_policy=lossguide. "0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### min_child_weight

**Sintaxis:** obj &lt;&lt; min_child_weight( number=1.0 )

**Descripción:** Especifica la suma mínima del peso de las instancias (Hessiano) necesaria en un hijo. Este valor es el tamaño mínimo de cada hoja. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**Sintaxis:** obj &lt;&lt; min_child_weight_max( number=3.0 )

**Descripción:** Especifica la suma máxima del peso de las instancias (Hessiano) necesaria en un hijo. Este valor es el tamaño máximo de cada hoja. "3.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**Sintaxis:** obj &lt;&lt; min_child_weight_min( number=1.0 )

**Descripción:** Especifica la suma mínima del peso de las instancias (Hessiano) necesaria en un hijo. Este valor es el tamaño mínimo de cada hoja. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### monotone_constraints

**Sintaxis:** obj &lt;&lt; monotone_constraints( text )

**Descripción:** Especifica las restricciones de monotonicidad de cada característica. Las restricciones deben especificarse con una lista de valores separados por comas entre paréntesis, donde -1 indica que es negativa, 1 que es positiva y 0 que no hay restricción.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### normalize_type

**Sintaxis:** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**Descripción:** Especifica el tipo de algoritmo de normalización para el impulsor DART. "tree" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( normalize_type( "tree" ) ) );

```

#### nthread

**Sintaxis:** obj &lt;&lt; nthread( number=0 )

**Descripción:** Especifica el número de subprocesos paralelos utilizados para ejecutar XGBoost. De forma predeterminada, se utilizan todo los subprocesos disponibles. "0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_parallel_tree

**Sintaxis:** obj &lt;&lt; num_parallel_tree( number=1 )

**Descripción:** Especifica el número de árboles impulsados que crecen en paralelo. Posteriormente se realiza una media de los resultados. "1" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### one_drop

**Sintaxis:** obj &lt;&lt; one_drop( number=0 )

**Descripción:** Cuando se habilita esta marca en el impulsor DART, al menos un árbol siempre se abandona durante el descarte. "0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### predictor

**Sintaxis:** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**Descripción:** Especifica el tipo de algoritmo de predicción. "auto" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**Sintaxis:** obj &lt;&lt; process_type( "default"|"update"="default" )

**Descripción:** Especifica el tipo de proceso de impulso que se ejecutará. "default" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### rate_drop

**Sintaxis:** obj &lt;&lt; rate_drop( number=0.0 )

**Descripción:** Especifica la tasa de abandono para el impulsor DART. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**Sintaxis:** obj &lt;&lt; refresh_leaf( number=1 )

**Descripción:** Especifica el parámetro del actualizador de refresco. Si se establece en 1, se actualizan las hojas y los nodos. Si se establece en 0, solo se actualizan los nodos. "1" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### sample_type

**Sintaxis:** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**Descripción:** Especifica el tipo de algoritmo de muestreo para el impulsor DART. "uniform" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( sample_type( "uniform" ) ) );

```

#### scale_pos_weight

**Sintaxis:** obj &lt;&lt; scale_pos_weight( number=1.0 )

**Descripción:** Especifica el balance de pesos positivos y negativos, que son útiles para clases desequilibradas. Un valor típico que considerar es suma(instancias negativas)/suma(instancias positivas). "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**Sintaxis:** obj &lt;&lt; seed( number=0 )

**Descripción:** Especifica la semilla para el generador de números aleatorios. Establezca este valor para la reproducibilidad de los resultados. "0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sketch_eps

**Sintaxis:** obj &lt;&lt; sketch_eps( number=0.03 )

**Descripción:** Este valor, que se utiliza únicamente para tree_method=approx, se traduce aproximadamente en (1/sketch_eps) = número de clases. "0.03" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**Sintaxis:** obj &lt;&lt; skip_drop( number=0.0 )

**Descripción:** Especifica la probabilidad de omitir el procedimiento de abandono durante una iteración de impulso DART. "0.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### subsample

**Sintaxis:** obj &lt;&lt; subsample( number=1.0 )

**Descripción:** Especifica la proporción de filas que muestrear durante cada iteración. Este valor debe estar entre 0 y 1. Se trata de un tipo de bagging. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**Sintaxis:** obj &lt;&lt; subsample_max( number=1.0 )

**Descripción:** Especifica la proporción máxima de filas que muestrear durante cada iteración. Este valor debe estar entre 0 y 1. Se trata de un tipo de bagging. "1.0" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**Sintaxis:** obj &lt;&lt; subsample_min( number=0.5 )

**Descripción:** Especifica la proporción mínima de filas que muestrear durante cada iteración. Este valor debe estar entre 0 y 1. Se trata de un tipo de bagging. "0.5" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**Sintaxis:** obj &lt;&lt; top_k( number=256 )

**Descripción:** Especifica el número de mejores características que seleccionar en el selector de características ambicioso y ahorrador. Esta opción solo se aplica al impulsor gblinear. "256" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### tree_method

**Sintaxis:** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**Descripción:** Especifica el algoritmo de construcción de árboles utilizado en XGBoost. "auto" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**Sintaxis:** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**Descripción:** Especifica la potencia de la distribución Tweedie. Este valor debe estar entre 1 y 2. Esta opción solo se aplica para objective=reg:tweedie. "1.5" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) )
);

```

#### updater

**Sintaxis:** obj &lt;&lt; updater( text )

**Descripción:** Especifique el actualizador de árboles que ejecutar para el impulsor gbtree. Especifique uno de los siguientes: grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

