# Torch Deep Learning



## Columnas

### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**Sintaxis:** obj &lt;&lt; Inputs( column(s) )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**Sintaxis:** obj &lt;&lt; Responses( column(s) )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**Sintaxis:** obj &lt;&lt; Subject( column )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**Sintaxis:** obj &lt;&lt; Validation( column(s) )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**Sintaxis:** obj &lt;&lt; X( column(s) )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Constructores asociados

### Torch Deep Learning

**Sintaxis:** Torch Deep Learning(Y( columns ), X( columns ))

**Descripción:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Mensajes del elemento

### Change Variables

**Sintaxis:** obj &lt;&lt; Change Variables

**Descripción:** Changes X, Y, and other variables for subsequent models.

**JMP Versión agregada:** 18

### Compare

**Sintaxis:** obj &lt;&lt; Compare

**Descripción:** Updates the Torch Deep Learning comparison metrics.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Compare( AUC( 1 ) );

```

### Fit

**Sintaxis:** obj &lt;&lt; Fit

**Descripción:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**Sintaxis:** obj &lt;&lt; Get Measures

**JMP Versión agregada:** 18

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Return to the launcher for this analysis.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Relaunch Analysis;

```

### Set

**Sintaxis:** obj &lt;&lt; Set

**Descripción:** Specifies parameters for a Torch Deep Learning model.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**Sintaxis:** obj &lt;&lt; Show Details( state=0|1 )

**Descripción:** Shows more details.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

## Torch Deep Learning Compare

### Constructores asociados

#### Torch Deep Learning Compare

**Sintaxis:** Torch Deep Learning Compare

### Mensajes del elemento

#### AUC

**Sintaxis:** obj &lt;&lt; AUC( state=0|1 )

**Descripción:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Accuracy

**Sintaxis:** obj &lt;&lt; Accuracy( state=0|1 )

**Descripción:** Shows or hides the accuracy, which is the proportion of correct classifications. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Censor

**Sintaxis:** obj &lt;&lt; Censor( state=0|1 )

**Descripción:** Shows or hides the Censor command Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Concordance

**Sintaxis:** obj &lt;&lt; Concordance( state=0|1 )

**Descripción:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Correlation

**Sintaxis:** obj &lt;&lt; Correlation( state=0|1 )

**Descripción:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### F1

**Sintaxis:** obj &lt;&lt; F1( state=0|1 )

**Descripción:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( state=0|1 )

**Descripción:** Shows or hides the Freq column. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### H Measure

**Sintaxis:** obj &lt;&lt; H Measure( state=0|1 )

**Descripción:** Shows or hides the H Measure, which measures proportion improvement over baseline. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Hide All Models

**Sintaxis:** obj &lt;&lt; Hide All Models

**Descripción:** Hides all models.

**JMP Versión agregada:** 18

#### LogLoss

**Sintaxis:** obj &lt;&lt; LogLoss( state=0|1 )

**Descripción:** Shows or hides the logarithm of the likelihood-based loss function. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### MAE

**Sintaxis:** obj &lt;&lt; MAE( state=0|1 )

**Descripción:** Shows or hides the MAE, which is the mean absolute error. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### MCC

**Sintaxis:** obj &lt;&lt; MCC( state=0|1 )

**Descripción:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Misclass

**Sintaxis:** obj &lt;&lt; Misclass( state=0|1 )

**Descripción:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Precision Recall AUC

**Sintaxis:** obj &lt;&lt; Precision Recall AUC( state=0|1 )

**Descripción:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Predictors

**Sintaxis:** obj &lt;&lt; Predictors( state=0|1 )

**Descripción:** Shows or hides the Predictors column. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Profit

**Sintaxis:** obj &lt;&lt; Profit( state=0|1 )

**Descripción:** Shows or hides the expected profit. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### RMSE

**Sintaxis:** obj &lt;&lt; RMSE( state=0|1 )

**Descripción:** Shows or hides the RMSE, which is the root mean square error. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### RSquare

**Sintaxis:** obj &lt;&lt; RSquare( state=0|1 )

**Descripción:** Shows or hides RSquare value, which is the proportion of variability explained. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Remove Hidden Models

**Sintaxis:** obj &lt;&lt; Remove Hidden Models

**Descripción:** Removes all models for which the Show box is not checked.

**JMP Versión agregada:** 18

#### Remove Shown Models

**Sintaxis:** obj &lt;&lt; Remove Shown Models

**Descripción:** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP Versión agregada:** 18

#### Response

**Sintaxis:** obj &lt;&lt; Response( state=0|1 )

**Descripción:** Shows or hides the Response column. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Show All Models

**Sintaxis:** obj &lt;&lt; Show All Models

**Descripción:** Shows all models.

**JMP Versión agregada:** 18

#### Subject

**Sintaxis:** obj &lt;&lt; Subject( state=0|1 )

**Descripción:** Shows or hides the Subject column Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Training Metrics

**Sintaxis:** obj &lt;&lt; Training Metrics( state=0|1 )

**Descripción:** Shows or hides all training metrics. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Validation

**Sintaxis:** obj &lt;&lt; Validation( state=0|1 )

**Descripción:** Shows or hides the Validation column. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Validation Metrics

**Sintaxis:** obj &lt;&lt; Validation Metrics( state=0|1 )

**Descripción:** Shows or hides all validation metrics. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Weight

**Sintaxis:** obj &lt;&lt; Weight( state=0|1 )

**Descripción:** Shows or hides the Weight column. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

## Torch Deep Learning Fit > Post

### Mensajes del elemento

#### Actual by Predicted Plots

**Sintaxis:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Descripción:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Confusion Matrices

**Sintaxis:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Descripción:** Shows or hides a crosstabulation matrix of actual and predicted levels. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**Sintaxis:** obj &lt;&lt; Contour Profiler.

**Descripción:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Versión agregada:** 18

#### Decision Thresholds

**Sintaxis:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Descripción:** Shows or hides decision threshold graphs and tables. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Fit Details

**Sintaxis:** obj &lt;&lt; Fit Details( state=0|1 )

**Descripción:** Shows or hides the statistics for the fitted model. Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Lift Curves

**Sintaxis:** obj &lt;&lt; Lift Curves( state=0|1 )

**Descripción:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP Versión agregada:** 18

#### Model Details

**Sintaxis:** obj &lt;&lt; Model Details( state=0|1 )

**Descripción:** Shows or hides model details Opción activada de forma predeterminada.

**JMP Versión agregada:** 18

#### Precision Recall Curves

**Sintaxis:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Descripción:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP Versión agregada:** 18

#### Profiler

**Sintaxis:** obj &lt;&lt; Profiler

**Descripción:** Shows or hides the Prediction Profiler.

**JMP Versión agregada:** 18

#### ROC Curves

**Sintaxis:** obj &lt;&lt; ROC Curves( state=0|1 )

**Descripción:** Plots the response-category sorting efficiency of the model predictions.

**JMP Versión agregada:** 18

#### Surface Profiler

**Sintaxis:** obj &lt;&lt; Surface Profiler

**Descripción:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Versión agregada:** 18

## Torch Deep Learning Fit

### Constructores asociados

#### Post

**Sintaxis:** Post

#### Torch Deep Learning Fit

**Sintaxis:** Torch Deep Learning Fit

### Mensajes del elemento

#### Activation

**Sintaxis:** obj &lt;&lt; Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**Descripción:** Specifies the activation function to use after each layer. "ReLU" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**Sintaxis:** obj &lt;&lt; Activations( text )

**Descripción:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**Sintaxis:** obj &lt;&lt; Anchor Scale( number=16 )

**Descripción:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. "16" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**Sintaxis:** obj &lt;&lt; Aspect Sigma( number=0 )

**Descripción:** Standard deviation of Gaussian aspect ratio deformation "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**Sintaxis:** obj &lt;&lt; Attention Heads( text=4 )

**Descripción:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. "4" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**Sintaxis:** obj &lt;&lt; Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**Descripción:** Specifies the base activation function for Kolmogorov Arnold B Splines. "GELU" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**Sintaxis:** obj &lt;&lt; Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**Descripción:** For Radial Basis Machine models, specify the basis function. "Gaussian" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) )
);

```

#### Batch Size

**Sintaxis:** obj &lt;&lt; Batch Size( number=128 )

**Descripción:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. "128" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**Sintaxis:** obj &lt;&lt; Binary Loss( "BCE"|"SM"="BCE" )

**Descripción:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). "BCE" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**Sintaxis:** obj &lt;&lt; Blur Max Sigma( number=0 )

**Descripción:** Maximum standard deviation of Gaussian blur "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**Sintaxis:** obj &lt;&lt; Class Loss Weight( number=4.0 )

**Descripción:** Specifies the multiplier for class loss. "4.0" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**Sintaxis:** obj &lt;&lt; Confidence Threshold( number=0.05 )

**Descripción:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. "0.05" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**Sintaxis:** obj &lt;&lt; Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**Descripción:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). "MSE" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**Sintaxis:** obj &lt;&lt; Copy Parameters to Launch

**Descripción:** Copies the parameter values from this model to the model launch section.

**JMP Versión agregada:** 18

#### Covariance Structure

**Sintaxis:** obj &lt;&lt; Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**Descripción:** For mixed models, specify the covariance structure. "DotProduct" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) )
);

```

#### Data Threads

**Sintaxis:** obj &lt;&lt; Data Threads( number=4 )

**Descripción:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. "4" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**Sintaxis:** obj &lt;&lt; Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**Descripción:** Specifies the computational device that Torch uses. "auto" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**Sintaxis:** obj &lt;&lt; Dilations( text=1 )

**Descripción:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. "1" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**Sintaxis:** obj &lt;&lt; Dropout Probs( text=0.0 )

**Descripción:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. "0.0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**Sintaxis:** obj &lt;&lt; Epochs( number=20 )

**Descripción:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. "20" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**Sintaxis:** obj &lt;&lt; Factorization Machine Layers( text=0 )

**Descripción:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Factorization Machine Layers( "1" ) )
);

```

#### Fit Ys Separately

**Sintaxis:** obj &lt;&lt; Fit Ys Separately( state=0 )

**Descripción:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**Sintaxis:** obj &lt;&lt; Fixed Effects( number=0 )

**Descripción:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**Sintaxis:** obj &lt;&lt; Folder( text )

**Descripción:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**Sintaxis:** obj &lt;&lt; Frozen Epochs( number=0 )

**Descripción:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**Sintaxis:** obj &lt;&lt; Generate Python Code

**Descripción:** Creates Python code for model deployment.

**JMP Versión agregada:** 18

#### Grid Size

**Sintaxis:** obj &lt;&lt; Grid Size( number=5 )

**Descripción:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. "5" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**Sintaxis:** obj &lt;&lt; HFlip Prob( number=0 )

**Descripción:** Probability of horizontal flip "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**Sintaxis:** obj &lt;&lt; Highway Layers( text=0 )

**Descripción:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. "0" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**Sintaxis:** obj &lt;&lt; Image Model( ="LeNet5" )

**Descripción:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "LeNet5" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**Sintaxis:** obj &lt;&lt; Image Size( number=28 )

**Descripción:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. "28" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**Sintaxis:** obj &lt;&lt; Kernel Sizes( text=3 )

**Descripción:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. "3" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**Sintaxis:** obj &lt;&lt; L1 Penalty( number=0.0 )

**Descripción:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. "0.0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**Sintaxis:** obj &lt;&lt; Layer Sizes( text=16 )

**Descripción:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. "16" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**Sintaxis:** obj &lt;&lt; Learning Rate( number=0.001 )

**Descripción:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.001" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**Sintaxis:** obj &lt;&lt; Margin( number=1.0 )

**Descripción:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. "1.0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**Sintaxis:** obj &lt;&lt; Max Boxes( number=5 )

**Descripción:** Specifies the maximum number of predicted boxes per image. "5" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**Sintaxis:** obj &lt;&lt; Max Seq Length( number=512 )

**Descripción:** For text models, specifies the maximum number of tokens to create for each text item. "512" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Max Seq Length( 512 ) )
);

```

#### Mixup Portion

**Sintaxis:** obj &lt;&lt; Mixup Portion( number=0.0 )

**Descripción:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. "0.0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**Sintaxis:** obj &lt;&lt; NMS Threshold( number=0.5 )

**Descripción:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. "0.5" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**Sintaxis:** obj &lt;&lt; Noise Max Sigma( number=0 )

**Descripción:** Maximum standard deviation of additive Gaussian noise "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**Sintaxis:** obj &lt;&lt; Nominal Image Threshold( number=10 )

**Descripción:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. "10" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**Sintaxis:** obj &lt;&lt; Nominal Loss( "NLL"="NLL" )

**Descripción:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). "NLL" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**Sintaxis:** obj &lt;&lt; Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**Descripción:** Specifies the type of normalization to apply to each MLP layer. "Batch" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**Sintaxis:** obj &lt;&lt; Norm First( "None"|"Batch"="Batch" )

**Descripción:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. "Batch" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**Sintaxis:** obj &lt;&lt; Num Linear( number=1 )

**Descripción:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. "1" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**Sintaxis:** obj &lt;&lt; Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**Descripción:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). "AdamW" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**Sintaxis:** obj &lt;&lt; Pitch Sigma( number=0 )

**Descripción:** Standard deviation of Gaussian pitch "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**Sintaxis:** obj &lt;&lt; Pooling Layers( text=Max )

**Descripción:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. "Max" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**Sintaxis:** obj &lt;&lt; Pretrained Tabular( ="None" )

**Descripción:** Specify a pretrained tabular model that is prepended to the Tabular Model. "None" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**Sintaxis:** obj &lt;&lt; Quantiles( text=0.9 )

**Descripción:** Specify a space-delimited list of quantiles to use for Quantile loss. "0.9" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**Sintaxis:** obj &lt;&lt; RPN NMS Threshold( number=0.7 )

**Descripción:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. "0.7" de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**Sintaxis:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Descripción:** Removes the reports and plots for all models except this one.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Descripción:** Removes the entire model report.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Restore From

**Sintaxis:** obj &lt;&lt; Restore From( " "=" " )

**Descripción:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. " " de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**Sintaxis:** obj &lt;&lt; Roll Sigma( number=0 )

**Descripción:** Standard deviation of Gaussian roll "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**Sintaxis:** obj &lt;&lt; Save CAMs

**Descripción:** Save gradient-based class activation maps (CAMs) as a new column.

**JMP Versión agregada:** 18

#### Save Embeddings

**Sintaxis:** obj &lt;&lt; Save Embeddings

**Descripción:** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP Versión agregada:** 18

#### Save Model

**Sintaxis:** obj &lt;&lt; Save Model

**Descripción:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP Versión agregada:** 18

#### Save Predicteds

**Sintaxis:** obj &lt;&lt; Save Predicteds

**Descripción:** Saves the predicted values in a new column in the data table.

**JMP Versión agregada:** 18

#### Screening Method

**Sintaxis:** obj &lt;&lt; Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**Descripción:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. "ResponseScreening" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Screening Method( "ResponseScreening" ) )
);

```

#### Screening Threshold

**Sintaxis:** obj &lt;&lt; Screening Threshold( number=0 )

**Descripción:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**Sintaxis:** obj &lt;&lt; Seed( number=0 )

**Descripción:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**Sintaxis:** obj &lt;&lt; Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**Descripción:** Specifies the image segmentation model. "UNet" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/segmentation.jmp" );
Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**Sintaxis:** obj &lt;&lt; Spline Order( number=3 )

**Descripción:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. "3" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**Sintaxis:** obj &lt;&lt; Strides( text=1 )

**Descripción:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. "1" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**Sintaxis:** obj &lt;&lt; Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**Descripción:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options "MultiLayerPerceptron" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Tabular Model( "MultiLayerPerceptron" ) )
);

```

#### Text Model

**Sintaxis:** obj &lt;&lt; Text Model( ="BertTiny" )

**Descripción:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "BertTiny" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Text Model( "BERT" ) )
);

```

#### Triplet Loss Weight

**Sintaxis:** obj &lt;&lt; Triplet Loss Weight( number=0.0 )

**Descripción:** Specifies the multiplier alpha to use in the following compound loss function: alpha * triplet_loss + (1 - alpha) * loss_function. Must be between 0 and 1. "0.0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**Sintaxis:** obj &lt;&lt; Use Data As Knots( state=0 )

**Descripción:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex, :height ),
	X( :picture ),
	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) )
);

```

#### VFlip Prob

**Sintaxis:** obj &lt;&lt; VFlip Prob( number=0 )

**Descripción:** Probability of vertical flip "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**Sintaxis:** obj &lt;&lt; Weight Decay( number=0.0 )

**Descripción:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. "0.0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**Sintaxis:** obj &lt;&lt; Worker Count( number=4 )

**Descripción:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. "4" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**Sintaxis:** obj &lt;&lt; X Slide Sigma( number=0 )

**Descripción:** Standard deviation of Gaussian random shift along the X axis "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**Sintaxis:** obj &lt;&lt; Y Slide Sigma( number=0 )

**Descripción:** Standard deviation of Gaussian random shift along the Y axis "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**Sintaxis:** obj &lt;&lt; Yaw Sigma( number=0 )

**Descripción:** Standard deviation of Gaussian yaw "0" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

