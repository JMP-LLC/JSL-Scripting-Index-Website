# Formula Depot



## Constructores asociados

### Formula Depot

**Sintaxis:** Formula Depot

**Descripción:** Un contenedor de modelos de predicción que admite la comparación de modelos, el perfilado y la generación de códigos de puntuación. El almacén de fórmulas se inicia a través del menú Analizar, los comandos de Publicar en las plataformas de modelización, Recodificar y el Editor de fórmulas.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];

```

## Mensajes del elemento

### Add Formula from Column

**Sintaxis:** Predictor = obj &lt;&lt; Add Formula from Column( Table(name|reference), Columns(name|index|reference, ...), &lt;Expand Intermediate Formulas(number)&gt; )

**Descripción:** Añade una columna de fórmulas de predicción existentes de la tabla especificada al almacén de fórmulas

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Save Probability Formula;mp = fd << Add Formula From Column( Table( dt ), Columns( 11 ) ); // "Most Likely Species"mp << Generate Python Code;

```

### Copy Formulas as Functions

**Sintaxis:** obj &lt;&lt; Copy Formulas as Functions( &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Copia los modelos especificados en el portapapeles como una instrucción Function() escalar.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();predictor = model << Publish Probability Formulas;fd << Copy Formulas as Functions( Formulas( predictor ) );Wait( 0 );text = Get Clipboard();Show( text );

```

### Copy Formulas as Transforms

**Sintaxis:** obj &lt;&lt; Copy Formulas as Transforms( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Copia los modelos especificados en el portapapeles dentro de una instrucción Transform Column().

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Publish Probability Formulas;fd << Copy Formulas as Transforms(    // English: Formulas("Fit Nominal Logistic - Species")	Formulas( 1 ));Wait( 0 );text = Get Clipboard();Show( text );

```

### Copy Scripts

**Sintaxis:** obj &lt;&lt; Copy Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Copia los scripts para las fórmulas especificadas guardadas en el almacén de fórmulas en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();predictor = model << Publish Probability Formulas;fd << Copy Scripts( Formulas( predictor ) );Wait( 0 );text = Get Clipboard();Show( text );

```

### Generate C Code

**Sintaxis:** obj &lt;&lt; Generate C Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descripción:** Genera código C para los modelos especificados guardados en el almacén de fórmulas. La salida se muestra en una ventana del editor o en una variable de cadena si se especifica el argumento "Sin editor".

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string c_code = fd << Generate C Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// c_code = predictor << Generate C Code(No Editor);Save Text File( "$TEMP\logist.c", c_code );// Open code in editor windowfd << Generate C Code( Formulas( predictor ) );

```

### Generate JavaScript Code

**Sintaxis:** obj &lt;&lt; Generate JavaScript Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descripción:** Genera código JavaScript para los modelos especificados guardados en el almacén de fórmulas. La salida se muestra en una ventana del editor o en una variable de cadena si se especifica el argumento "Sin editor".

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string js_code = fd << Generate JavaScript Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// js_code = predictor << Generate JavaScript Code(No Editor);Save Text File( "$TEMP\logist.js", js_code );// Open code in editor windowfd << Generate JavaScript Code( Formulas( predictor ) );

```

### Generate Python Code

**Sintaxis:** obj &lt;&lt; Generate Python Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descripción:** Genera código Python para los modelos especificados guardados en el almacén de fórmulas. La salida se muestra en una ventana del editor o en una variable de cadena si se especifica el argumento "Sin editor".

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string py_code = fd << Generate Python Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// py_code = predictor << Generate Python Code(No Editor);Save Text File( "$TEMP\logist.py", py_code );// Open code in editor windowfd << Generate Python Code( Formulas( predictor ) );

```

### Generate SAS Code

**Sintaxis:** obj &lt;&lt; Generate SAS Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descripción:** Genera código SAS (DS2) para los modelos especificados guardados en el almacén de fórmulas. La salida se muestra en una ventana del editor o en una variable de cadena si se especifica el argumento "Sin editor".

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string sas_code = fd << Generate SAS Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// sas_code = predictor << Generate SAS Code(No Editor);Save Text File( "$TEMP\logist.sas", sas_code );// Open code in editor windowfd << Generate SAS Code( Formulas( predictor ) );

```

### Generate SQL Code

**Sintaxis:** obj &lt;&lt; Generate SQL Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt;, &lt;QUOTE_STYLE&gt; )

**Descripción:** Genera código SQL (definiciones de columna adecuadas para su uso en una instrucción Select de SQL) para los modelos dados guardados en el Almacén de fórmulas. La salida se muestra en una ventana del editor o en una variable de cadena si se especifica el argumento "Sin editor". QUOTE_STYLE es una cadena que denota una de las bases de datos SQL compatibles con JMP (MySQL, Impala, Hive, etc.) o un tipo de cita SQL ("Subrayado", "Comilla inversa", "Paréntesis" o "Comilla doble").

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );md = dt << Run Script( "Elastic Net Poisson, BIC" );mp_obs = md << xpath( "//OutlineBox" );scriptables = Filter Each( {ob}, mp_obs << Get Scriptable Object(), !Is Empty( ob ) );mp = scriptables[2];predictor = mp << Publish Prediction Formula;// Save code to string sql_code = fd << Generate SQL Code( Formulas( 1 ), No Editor );// shortcut using predictor reference// sql_code = predictor << Generate SQL Code(No Editor);Save Text File( "$TEMP\genreg.sql", sql_code );// Open code in editor windowfd << Generate SQL Code( Formulas( predictor ), "MySQL" );

```

### Model Comparison

**Sintaxis:** obj &lt;&lt; Model Comparison( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Compara los modelos especificados guardados en el almacén de fórmulas con la utilidad de comparación de modelos, en función del contenido de la tabla especificada.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_mp = nl_md << Publish Probability Formulas;nn_md = Neural(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit( NTanH( 3 ) ));nn_mp = nn_md << Publish Prediction Formula;mc_plat = fd << ModelComparison( Formulas( 1, 2 ) );// Other options:// mds = {"Fit Nominal Logistic - Species", "Neural - Species"};// fd << ModelComparison( Formulas( mds ) );// fd << ModelComparison( Formulas( 1 ), Formulas( 2 ) );// fd << ModelComparison; // all models

```

### Profiler

**Sintaxis:** obj &lt;&lt; Profiler( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Perfila los modelos especificados guardados en el almacén de fórmulas con la utilidad Perfilador, en función del contenido de la tabla especificada.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_mp = nl_md << Publish Probability Formulas;nn_md = Neural(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit( NTanH( 3 ) ));nn_mp = nn_md << Publish Prediction Formula;fd << Profiler( Formulas( nl_mp, nn_mp ) );

```

### Remove Model Comparison

**Sintaxis:** obj &lt;&lt; Remove Model Comparison

**Descripción:** Quita todos los informes de comparación de modelos del almacén de fórmulas actual.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_md << Publish Probability Formulas;fd << Model Comparison();fd << Remove Model Comparison();

```

### Remove Profiler

**Sintaxis:** obj &lt;&lt; Remove Profiler

**Descripción:** Quita todos los Perfiladores del almacén de fórmulas actual.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_md << Publish Probability Formulas;fd << Profiler();fd << Remove Profiler();

```

### Rename Formula Depot

**Sintaxis:** obj &lt;&lt; Rename Formula Depot( text )

```jsl

fd = Formula Depot();fd << Rename Formula Depot( "New Name" );

```

### Run Scripts

**Sintaxis:** obj &lt;&lt; Run Scripts( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Guarda los modelos especificados en la tabla de datos JMP actual o especificada como una o más columnas de fórmulas.

```jsl

// Create a Formula Depot to store the modeldt1 = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt1 << RunScript( "Nominal Logistic" );fd1 = Formula Depot();model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );// Clean-upClose( dt1, NoSave );fd1 << Close Window;// Read FD from diskOpen( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];// Create columns from stored model; usually this is a new table with a compatible schemadt2 = Open( "$SAMPLE_DATA\Iris.jmp" );fd2 << Run Scripts( Table( dt2 ), Formulas( 1 ) );

```

### Show Scripts

**Sintaxis:** obj &lt;&lt; Show Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**Descripción:** Abre una nueva ventana de fórmulas (o añade una ventana de fórmulas abierta) que contiene scripts para las fórmulas especificadas guardadas en el almacén de fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Publish Probability Formulas;fd << Show Scripts( Formulas( 1 ) );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Copy Script;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**Sintaxis:** obj &lt;&lt; Report; Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File(	"$TEMP\fd.jrp",	Char( Name Expr( fd_script ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File(	"$TEMP\fd.jrp",	Char( Name Expr( fd_script ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

