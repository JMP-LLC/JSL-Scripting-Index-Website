# Sequencing Variants Toolset



## Sequencing Variants Toolset Run

### Auto Send Output to Files List

**Sintaxis:** obj << Auto Send Output to Files List( state=0|1 )

**Descripción:** Envía los archivos de salida al panel de lista de archivos.

### Bam Files

**Sintaxis:** obj << Bam Files

**Descripción:** Especifica los archivos BAM.

### Bcf Files

**Sintaxis:** obj << Bcf Files

**Descripción:** Especifica los archivos BCF.

### Caller

**Sintaxis:** obj << Caller( "Multialélico"|"Consenso"="Multialélico" )

**Descripción:** "Multialélico" de forma predeterminada.

### Copy Task Specification

**Sintaxis:** obj << Copy Task Specification

**Descripción:** Copia en el portapapeles las especificaciones actuales del conjunto de herramientas de variantes de secuenciación.

**JMP Versión agregada:** 19

### Files

**Sintaxis:** obj << Files

**Descripción:** Cargar archivos de entrada para ejecutarlos en SamTools.

### Ploidy

**Sintaxis:** obj << Ploidy( number=2 )

**Descripción:** "2" de forma predeterminada.

### Recall in Task Specification

**Sintaxis:** obj << Recall in Task Specification

**Descripción:** Establece la especificación de la tarea del informe Especificación de la tarea en el modelo especificado.

### Ref Files

**Sintaxis:** obj << Ref Files

**Descripción:** Especifica los archivos del genoma de referencia.

### Remove Run

**Sintaxis:** obj << ( Run[number] << Remove Run( state=0|1 ) )

**Descripción:** Quita el informe de la corrida especificado de la ventana de resultados.

### Results Folder

**Sintaxis:** obj << Results Folder

**Descripción:** Especifica la carpeta de resultados.

### Sam Files

**Sintaxis:** obj << Sam Files

**Descripción:** Especifica los archivos SAM.

### Send Output to Files List

**Sintaxis:** obj << Send Output to Files List( state=0|1 )

**Descripción:** Envía los archivos de salida al panel de lista de archivos.

### Sort Reads By

**Sintaxis:** obj << Sort Reads By( "Coordenadas"|"Alfanumérica"|"Lexicográfica"="Coordenadas" )

**Descripción:** "Coordenadas" de forma predeterminada.

### Summary

**Sintaxis:** obj << Summary( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene detalles de la corrida. Opción activada de forma predeterminada.

### Target Regions

**Sintaxis:** obj << Target Regions

**Descripción:** Establece las regiones de destino. La especificación de regiones requiere que el archivo BAM esté ordenado por coordenadas e indexado.

### Task

**Sintaxis:** obj << Task( "Índice Fasta"|"Convertir SAM en BAM"|"Ordenar lecturas"|"Agregar coordenadas de apareamiento"|"Quitar duplicados"|"Fusionar archivos"|"Índice BAM"|"Convertir BAM en SAM"|"Extraer lecturas asignadas"|"Extraer lecturas no asignadas"|"Extraer regiones objetivo"|"Extraer correctamente alineado"|"Extraer primera lectura"|"Errores de coincidencia e inserciones de etiquetas"|"Alineación del conteo"|"Alineación del conteo por marca"|"Alineación del conteo por referencia"|"Generar estadísticos"|"Generar la calidad de la alineación base"|"Generar profundidad de lectura"|"Compresión Bgzip"|"Descompresión Bgzip"|"Generar verosimilitudes genotípicas"|"Generar llamadas genotípicas"|"Convertir BCF en VCF"|"Convertir VCF en BCF" )

**Descripción:** Determina la tarea que se debe ejecutar.

### Title

**Sintaxis:** obj << Title

**Descripción:** Establece un título.

### Unthreaded

**Sintaxis:** obj << Unthreaded( state=0|1 )

**Descripción:** Utiliza únicamente el subproceso principal para los cálculos

### Vcf Files

**Sintaxis:** obj << Vcf Files

**Descripción:** Especifica los archivos VCF.

## Sequencing Variants Toolset Specification

### Auto Send Output to Files List

**Sintaxis:** obj << Auto Send Output to Files List( state=0|1 )

**Descripción:** Envía los archivos de salida al panel de lista de archivos.

### Bam Files

**Sintaxis:** obj << Bam Files

**Descripción:** Especifica los archivos BAM.

### Bcf Files

**Sintaxis:** obj << Bcf Files

**Descripción:** Especifica los archivos BCF.

### Caller

**Sintaxis:** obj << Caller( "Multialélico"|"Consenso"="Multialélico" )

**Descripción:** "Multialélico" de forma predeterminada.

### Files

**Sintaxis:** obj << Files

**Descripción:** Cargar archivos de entrada para ejecutarlos en SamTools.

### Ploidy

**Sintaxis:** obj << Ploidy( number=2 )

**Descripción:** Especifica un número positivo que indica el nivel de ploidías. "2" de forma predeterminada.

### Ref Files

**Sintaxis:** obj << Ref Files

**Descripción:** Especifica los archivos del genoma de referencia.

### Results Folder

**Sintaxis:** obj << Results Folder

**Descripción:** Especifica la carpeta de resultados.

### Sam Files

**Sintaxis:** obj << Sam Files

**Descripción:** Especifica los archivos SAM.

### Sort Reads By

**Sintaxis:** obj << Sort Reads By( "Coordenadas"|"Alfanumérica"|"Lexicográfica"="Coordenadas" )

**Descripción:** "Coordenadas" de forma predeterminada.

### Target Regions

**Sintaxis:** obj << Target Regions

**Descripción:** Establece las regiones de destino. La especificación de regiones requiere que el archivo BAM esté ordenado por coordenadas e indexado.

### Task

**Sintaxis:** obj << Task( "Índice Fasta"|"Convertir SAM en BAM"|"Ordenar lecturas"|"Agregar coordenadas de apareamiento"|"Quitar duplicados"|"Fusionar archivos"|"Índice BAM"|"Convertir BAM en SAM"|"Extraer lecturas asignadas"|"Extraer lecturas no asignadas"|"Extraer regiones objetivo"|"Extraer correctamente alineado"|"Extraer primera lectura"|"Errores de coincidencia e inserciones de etiquetas"|"Alineación del conteo"|"Alineación del conteo por marca"|"Alineación del conteo por referencia"|"Generar estadísticos"|"Generar la calidad de la alineación base"|"Generar profundidad de lectura"|"Compresión Bgzip"|"Descompresión Bgzip"|"Generar verosimilitudes genotípicas"|"Generar llamadas genotípicas"|"Convertir BCF en VCF"|"Convertir VCF en BCF"="Índice Fasta" )

**Descripción:** Determina la tarea que se debe ejecutar. "Índice Fasta" de forma predeterminada.

### Title

**Sintaxis:** obj << Title

**Descripción:** Establece un título.

### Unthreaded

**Sintaxis:** obj << Unthreaded( state=0|1 )

**Descripción:** Utiliza únicamente el subproceso principal para los cálculos

### Vcf Files

**Sintaxis:** obj << Vcf Files

**Descripción:** Especifica los archivos VCF.

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

### Arguments

**Sintaxis:** obj << Arguments

**Descripción:** Permite la especificación de opciones para ejecutar la plataforma desde la ventana de scripts.

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
obj << Copy Script;

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

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Run Cmd

**Sintaxis:** obj << Run Cmd

**Descripción:** Determina la tarea del conjunto de herramientas de variantes de secuenciación que se ejecutará desde la ventana de scripts.

### Run Spec

**Sintaxis:** obj << Run Spec

**Descripción:** Determina la tarea del conjunto de herramientas de variantes de secuenciación que se ejecutará desde la ventana de la interfaz.

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
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

### Sequencing Variants Toolset

**Sintaxis:** Sequencing Variants Toolset

**Descripción:** Proporciona un marco de trabajo para procesar y analizar datos de secuenciación de alto rendimiento con SamTools y BcfTools.

### Specification

**Sintaxis:** obj << Specification

**Descripción:** Permite la especificación de una tarea.

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

