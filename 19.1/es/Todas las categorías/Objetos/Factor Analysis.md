# Factor Analysis



## Columnas

### Columns

**Sintaxis:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Freq( :_freqcol ));

```

### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Weight( :_weightcol ));

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

## Constructores asociados

### Factor Analysis

**Sintaxis:** Factor Analysis( Y( columns ) )

**Descripción:** Descubre la estructura subyacente de datos extrayendo las variables no observadas, o factores, que representan la variabilidad común entre variables observadas. La rotación factorial se utiliza para aumentar su interpretabilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

## Mensajes del elemento

### Bartlett's Test of Sphericity

**Sintaxis:** obj &lt;&lt; Bartlett&apos;s Test of Sphericity( state=0|1 )

**Descripción:** Muestra u oculta un informe de la prueba de homogeneidad que determina si los valores propios tienen varianzas iguales.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Bartlett's Test of Sphericity( 1 );

```

### Eigenvalues

**Sintaxis:** obj &lt;&lt; Eigenvalues( state=0|1 )

**Descripción:** Muestra u oculta una tabla de los valores propios de la correlación original, la covarianza o la matriz no escalada. La tabla incluye el porcentaje de la varianza total representada por cada valor propio, un diagrama de barras que ilustra la contribución porcentual y el porcentaje acumulado al que ha contribuido cada valor propio sucesivo. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << Eigenvalues( 0 );

```

### Fit

**Sintaxis:** obj &lt;&lt; Fit( "PC"|"ML", "ONE"|"SMC", number, rotation method )

**Descripción:** Ajusta un modelo de análisis factorial utilizando el método de factorización, comunalidad a priori, número de factores y método de rotación especificados. Los métodos de factorización disponibles son Eje principal (PC) y Máxima verosimilitud (ML). Puede establecer todas las comunalidades a priori iguales a uno (ONE) o iguales a los coeficientes de correlación múltiple al cuadrado (SMC). Los métodos de rotación disponibles son Varimax, Biquartimax, Equamax, Factorparsimax, Orthomax, Parsimax, Quartimax, Biquartimin, Covarimin, Obbiquartimax, Obequamax, Obfactorparsimax, Oblimin, Obparsimax, Obquartimax, Obvarimax y Promax.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ));obj << Fit( "ML", "SMC", 2, "Varimax" );

```

### Kaiser-Meyer-Olkin Test

**Sintaxis:** obj &lt;&lt; "Kaiser-Meyer-Olkin Test"n( state=0|1 )

**Descripción:** Muestra u oculta los resultados de la prueba de Kaiser-Meyer-Olkin (KMO). La prueba es un indicador de la proporción de varianza que podría ser varianza común, posiblemente debida a factores subyacentes.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << "Kaiser-Meyer-Olkin Test"n( 1 );

```

### Scree Plot

**Sintaxis:** obj &lt;&lt; Scree Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de líneas de los valores propios para cada componente. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << Scree Plot( 0 );

```

### Variance Estimation

**Sintaxis:** obj = Factor Analysis(...Variance Estimation( "REML"| "ML"| "Robust"| "Row-wise"| "Pairwise" )...)

**Descripción:** Establece el método de estimación para calcular las correlaciones.

Si no hay valores faltantes, el método predeterminado es Por filas.

Si hay valores faltantes y el número de variables es <=10 y el número de filas <=5000, entonces el predeterminado es REML.

Si hay valores faltantes y el número de variables es >10 o el número de filas >5000, entonces el valor predeterminado es Por pares.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "Robust" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Variance Scaling

**Sintaxis:** obj = Factor Analysis(...Variance Scaling( "Correlations"| "Covariances"| "Unscaled")...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el método que se utiliza para el escalado de la varianza.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

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

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Timing;Show( t );

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

### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintaxis:** obj &lt;&lt; Report; Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Script Window;

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

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Factor Analysis Fit Options

### Mensajes del elemento

#### Arrow Lines

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Arrow Lines( state=0|1 ))

**Descripción:** Muestra u oculta las líneas de flecha en el gráfico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Arrow Lines( 0 ));

```

#### Copy Model Specification for SEM

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Copy Model Specification for SEM)

**Descripción:** Copia las definiciones de factor en el portapapeles, para que pueda pegar dichas definiciones en la plataforma SEM con datos independientes para confirmar el modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Factor Analysis(	Y( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit( "ML", "SMC", 1, "Varimax" ));obj << (Fit[1] << Copy Model Specification for SEM);obj2 = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj2 << Paste Model Specification;

```

#### Eigenvalues

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Eigenvalues( state=0|1 ))

**Descripción:** Muestra u oculta los valores propios de la matriz de correlación reducida y el porcentaje de la varianza común que representan.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Eigenvalues( 1 ));

```

#### Factor Loading Plot

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Loading Plot( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de las cargas factoriales rotadas. Cuando se modelizan más de dos factores, el gráfico de cargas factoriales es una matriz de gráficos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Factor Loading Plot( 0 ));

```

#### Factor Structure

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Structure( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de correlaciones entre variables y factores comunes. Esta opción solo está disponible para rotaciones oblicuas. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Promax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Factor Structure( 0 ));

```

#### Final Communality Estimates

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Final Communality Estimates( state=0|1 ))

**Descripción:** Muestra u oculta las estimaciones de las comunalidades una vez ajustado el modelo factorial. Cuando los factores son ortogonales, la estimación de comunalidad final para una variable es igual a la suma de las cargas al cuadrado para esa variable. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Final Communality Estimates( 0 ));

```

#### Interfactor Correlations

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Interfactor Correlations( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de correlaciones entre factores. Esta opción solo está disponible para rotaciones oblicuas.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Quartimin" ));obj << (Fit[1] << Interfactor Correlations( 1 ));

```

#### Measures of Factor Scores

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Factor Scores( state=0|1 ))

**Descripción:** Muestra u oculta las medidas de la determinación de las puntuaciones factoriales, incluidas las puntuaciones R múltiple, R al cuadrado múltiple y Correlación mínima.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Measures of Factor Scores( 1 ));

```

#### Measures of Fit

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Fit( state=0|1 ))

**Descripción:** Muestra u oculta las medidas de ajuste, incluidas ji cuadrado sin corrección de Bartlett, AIC, BIC, el índice de Tucker-Lewis y la raíz del error cuadrático medio de aproximación. Esta opción solo está disponible cuando se selecciona Máxima verosimilitud como Método de factorización. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Measures of Fit( 0 ));

```

#### Prior Communality

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Prior Communality( state=0|1 ))

**Descripción:** Muestra u oculta una estimación inicial de la comunalidad de cada variable.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Prior Communality( 1 ));

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**Descripción:** Quita el ajuste especificado del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Remove Fit);

```

#### Rotated Factor Loading

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotated Factor Loading( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de cargas factoriales después de la rotación. Si la rotación es ortogonal, estos valores son las correlaciones entre las variables y los factores rotados. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Rotated Factor Loading( 0 ));

```

#### Rotation Matrix

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotation Matrix( state=0|1 ))

**Descripción:** Muestra u oculta los valores que se utilizan para rotar el gráfico de cargas factoriales y la matriz de cargas factoriales.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Rotation Matrix( 1 ));

```

#### Save Factor Scores

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores( state=0|1 ))

**Descripción:** Guarda las columnas de fórmulas nuevas en la tabla de datos original. Las columnas nuevas contienen las fórmulas para las puntuaciones factoriales, que se estiman mediante el método de Thurstone.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Save Factor Scores);

```

#### Save Factor Scores with Imputation

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores with Imputation( state=0|1 ))

**Descripción:** Guarda las columnas de fórmulas nuevas en la tabla de datos original. Las columnas nuevas contienen las fórmulas para las puntuaciones factoriales con valores imputados para los valores faltantes.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Factor Analysis(	Y( :CO, :SO2, :NO, :PM10 ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Save Factor Scores with Imputation);

```

#### Score Plot

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de dispersión de las puntuaciones factoriales estimadas. Cuando se modelizan más de dos factores, el gráfico de puntuaciones es una matriz de gráficos.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Score Plot( 1 ));

```

#### Score Plot with Imputation

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot with Imputation( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de dispersión de las puntuaciones factoriales estimadas con valores imputados para los valores faltantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Factor Analysis(	Y( :CO, :SO2, :NO, :PM10 ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Score Plot with Imputation( 1 ));

```

#### Significance Test

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Significance Test( state=0|1 ))

**Descripción:** Muestra u oculta los resultados de dos pruebas de significación. El primero prueba la hipótesis nula de que no hay factores comunes y el segundo prueba la hipótesis nula de que un número especificado de factores son suficientes. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Significance Test( 0 ));

```

#### Standard Score Coefficients

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Standard Score Coefficients( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de los multiplicadores que se utilizan para estimar las puntuaciones factoriales al guardar los factores rotados en la tabla de datos de origen.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Standard Score Coefficients( 1 ));

```

#### Target Matrix

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Target Matrix( state=0|1 ))

**Descripción:** Muestra u oculta la matriz en función de la cual se rota el patrón factorial Varimax. Esta opción solo está disponible para la rotación Promax.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Promax" ));obj << (Fit[1] << Target Matrix( 1 ));

```

#### Unrotated Factor Loading

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Unrotated Factor Loading( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de cargas factoriales antes de la rotación.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Unrotated Factor Loading( 1 ));

```

#### Unsorted and Rotated Factor Loading

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Rotated Factor Loading( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de cargas factoriales sin ordenar después de la rotación.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Unsorted and Rotated Factor Loading( 1 ));

```

#### Unsorted and Unrotated Factor Loading

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Unrotated Factor Loading( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de cargas factoriales antes de la ordenación y la rotación.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Unsorted and Unrotated Factor Loading( 1 ));

```

#### Variance Explained by Each Factor

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Variance Explained by Each Factor( state=0|1 ))

**Descripción:** Muestra u oculta la varianza, el porcentaje y el porcentaje acumulado de la varianza común explicada por cada factor rotado. Esta opción solo está disponible para rotaciones ortogonales. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Variance Explained by Each Factor( 0 ));

```

